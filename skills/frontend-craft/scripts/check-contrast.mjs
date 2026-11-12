#!/usr/bin/env node
// check-contrast.mjs - WCAG 2.2 contrast ratio (AA/AAA) and APCA Lc for color pairs.
//
// Adapted from Pedro Nauck's ui-craft skill (scripts/check-contrast.mjs, MIT,
// Copyright (c) 2026 Pedro Nauck; notice in ../licenses/pedronauck-skills.txt).
// Changes: APCA low clip fixed, alpha handled explicitly, oklch gamut mapping by
// chroma reduction, strict argument/input validation, signed Lc.
//
// Read-only and dependency-free. Needs Node 18 or newer.
//
// Usage:
//   node check-contrast.mjs --fg "#0a0a0a" --bg "#ffffff" [--large]
//   node check-contrast.mjs --json pairs.json   (array of {fg, bg, label?, large?})
//
// Colors: #RGB, #RGBA, #RRGGBB, #RRGGBBAA, rgb()/rgba(), oklch(). No named colors,
// hsl() or color-mix(); resolve those to one of the supported forms first.
//
// Alpha: a translucent foreground is composited over the background in sRGB (as
// browsers do) and the result is measured. A translucent BACKGROUND is rejected
// (exit 2) because its backdrop is unknown; resolve it to an opaque color first.
//
// oklch(): out-of-gamut colors are mapped into sRGB by reducing chroma at fixed
// lightness and hue, then rounding to 8-bit, so the result matches what a
// browser paints, not per-channel clipping that shifts hue.
//
// Math: WCAG 2.x relative luminance and ratio (thresholds: normal text AA 4.5 and
// AAA 7, large text AA 3 and AAA 4.5; use --large for UI components and graphics
// at 3:1). APCA is APCA-W3 0.0.98G-4g (Myndex, https://github.com/Myndex/apca-w3),
// reported as a signed Lc (positive dark text on light, negative light on dark).
// APCA is informational only and never affects the exit code; no font-size table.
//
// Exit codes: 0 = every pair passes WCAG AA; 1 = any pair fails AA; 2 = bad input.

import { readFileSync, realpathSync } from "node:fs";
import { argv, exit } from "node:process";
import { pathToFileURL } from "node:url";

const HELP = `check-contrast.mjs - WCAG 2.2 AA/AAA ratio and APCA Lc (W3 0.0.98G-4g).

Usage:
  --fg <color>    Foreground (hex, rgb(), oklch()). Alpha is composited over --bg.
  --bg <color>    Background; must be opaque.
  --large         Large text (>= 24px, or >= 18.66px bold), or a UI component (3:1).
  --json <file>   JSON array of {fg, bg, label?, large?} objects.

Examples:
  node check-contrast.mjs --fg "#0a0a0a" --bg "#ffffff"
  node check-contrast.mjs --fg "oklch(20% 0 0)" --bg "oklch(98% 0 0)" --large
  node check-contrast.mjs --json pairs.json

Exit codes: 0 = all pass AA; 1 = any fail AA; 2 = bad input.`;

class InputError extends Error {}

// ---------- Color parsing ----------

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const NUM = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i;

// Parse "0.5" or "50%" to 0..1 (alpha). Returns null when invalid.
function parseAlpha(token) {
  if (token === undefined) return 1;
  if (token.endsWith("%")) {
    const n = token.slice(0, -1);
    return NUM.test(n) ? clamp(Number(n) / 100, 0, 1) : null;
  }
  return NUM.test(token) ? clamp(Number(token), 0, 1) : null;
}

// Split the inside of a CSS function into channel tokens and an optional alpha.
function splitArgs(inner) {
  const [channels, alpha, ...extra] = inner.split("/");
  if (extra.length) return null;
  const parts = channels.split(/[\s,]+/).filter(Boolean);
  const legacyAlpha = alpha === undefined && parts.length === 4 ? parts.pop() : undefined;
  const a = alpha === undefined ? legacyAlpha : alpha.trim();
  if (parts.length !== 3 || (a !== undefined && !a)) return null;
  return { parts, alpha: parseAlpha(a) };
}

function parseHex(s) {
  let h = s.replace(/^#/, "");
  if (h.length === 3 || h.length === 4) h = [...h].map(c => c + c).join("");
  if (!/^[0-9a-f]{6}(?:[0-9a-f]{2})?$/i.test(h)) return null;
  const n = i => parseInt(h.slice(i, i + 2), 16);
  return { rgb: [n(0), n(2), n(4)], alpha: h.length === 8 ? n(6) / 255 : 1 };
}

function parseRgb(s) {
  const m = s.match(/^rgba?\s*\(([^)]*)\)$/i);
  const args = m && splitArgs(m[1]);
  if (!args || args.alpha === null) return null;
  const rgb = args.parts.map(p => {
    const pct = p.endsWith("%");
    const n = pct ? p.slice(0, -1) : p;
    return NUM.test(n) ? clamp(Math.round(pct ? Number(n) * 2.55 : Number(n)), 0, 255) : NaN;
  });
  return rgb.some(Number.isNaN) ? null : { rgb, alpha: args.alpha };
}

const HUE_UNITS = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };

function parseOklch(s) {
  const m = s.match(/^oklch\s*\(([^)]*)\)$/i);
  const args = m && splitArgs(m[1]);
  if (!args || args.alpha === null) return null;
  const [l, c, h] = args.parts.map(p => (p.toLowerCase() === "none" ? "0" : p));
  const L = l.endsWith("%") ? Number(l.slice(0, -1)) / 100 : Number(l);
  const C = c.endsWith("%") ? (Number(c.slice(0, -1)) / 100) * 0.4 : Number(c);
  const unit = h.match(/(deg|grad|rad|turn)$/i);
  const H = Number(unit ? h.slice(0, -unit[1].length) : h) * (unit ? HUE_UNITS[unit[1].toLowerCase()] : 1);
  if (![L, C, H].every(Number.isFinite) || C < 0) return null;
  return { rgb: oklchToRgb(L, C, H), alpha: args.alpha };
}

// OKLCH -> linear sRGB (unclamped). Matrices from Bjorn Ottosson's OKLab reference.
function oklchToLinear(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const a = Math.cos(h) * C;
  const b = Math.sin(h) * C;
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const EPS = 1e-5;
const inGamut = lin => lin.every(v => v >= -EPS && v <= 1 + EPS);

function oklchToRgb(L, C, hDeg) {
  if (L <= 0) return [0, 0, 0];
  if (L >= 1) return [255, 255, 255];
  let lin = oklchToLinear(L, C, hDeg);
  if (!inGamut(lin)) {
    // Gamut map: largest chroma that fits sRGB at this lightness and hue.
    let lo = 0;
    let hi = C;
    for (let i = 0; i < 32; i++) {
      const mid = (lo + hi) / 2;
      if (inGamut(oklchToLinear(L, mid, hDeg))) lo = mid;
      else hi = mid;
    }
    lin = oklchToLinear(L, lo, hDeg);
  }
  return lin.map(v => {
    const c = clamp(v, 0, 1);
    return Math.round(255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055));
  });
}

// Returns {rgb: [r,g,b] (0-255), alpha} or null.
export function parseColor(input) {
  if (typeof input !== "string") return null;
  const t = input.trim();
  if (t.startsWith("#")) return parseHex(t);
  if (/^rgba?\s*\(/i.test(t)) return parseRgb(t);
  if (/^oklch\s*\(/i.test(t)) return parseOklch(t);
  return null;
}

// Composite fg over an opaque bg in sRGB and round to 8-bit, like a browser.
function resolvePair(fg, bg, where) {
  if (!fg || !bg) throw new InputError(`${where}: could not parse color (supported: hex, rgb(), oklch())`);
  if (bg.alpha < 1) throw new InputError(`${where}: background must be opaque (alpha ${bg.alpha}); resolve it first`);
  const rgb = fg.rgb.map((c, i) => Math.round(c * fg.alpha + bg.rgb[i] * (1 - fg.alpha)));
  return { fg: rgb, bg: bg.rgb };
}

// ---------- Contrast math ----------

// WCAG 2.x relative luminance. The sRGB breakpoint is 0.04045 (WCAG text says
// 0.03928); the two give identical results for 8-bit channel values.
function relativeLuminance([r, g, b]) {
  const lin = c => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function wcagContrast(a, b) {
  const [hi, lo] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// APCA-W3 0.0.98G-4g. Text first, background second. Returns signed Lc.
export function apcaLc(textRgb, bgRgb) {
  const trc = 2.4;
  const [rCo, gCo, bCo] = [0.2126729, 0.7151522, 0.072175];
  const normBG = 0.56, normTXT = 0.57, revTXT = 0.62, revBG = 0.65;
  const blkThrs = 0.022, blkClmp = 1.414;
  const scale = 1.14, offset = 0.027, loClip = 0.1, deltaYmin = 0.0005;

  const toY = ([r, g, b]) => rCo * (r / 255) ** trc + gCo * (g / 255) ** trc + bCo * (b / 255) ** trc;
  const soft = y => (y > blkThrs ? y : y + (blkThrs - y) ** blkClmp);

  const txtY = soft(toY(textRgb));
  const bgY = soft(toY(bgRgb));
  if (Math.abs(bgY - txtY) < deltaYmin) return 0;

  if (bgY > txtY) {
    const sapc = (bgY ** normBG - txtY ** normTXT) * scale;
    return (sapc < loClip ? 0 : sapc - offset) * 100;
  }
  const sapc = (bgY ** revBG - txtY ** revTXT) * scale;
  return (sapc > -loClip ? 0 : sapc + offset) * 100;
}

// ---------- Verdict ----------

export function verdict({ fg, bg, label = null, large = false }) {
  const ratio = wcagContrast(fg, bg);
  const [aaMin, aaaMin] = large ? [3, 4.5] : [4.5, 7];
  return { label, fg, bg, large, ratio, lc: apcaLc(fg, bg), aa: ratio >= aaMin, aaa: ratio >= aaaMin, aaMin };
}

const hex = rgb => `#${rgb.map(c => c.toString(16).padStart(2, "0")).join("")}`;

// Never let rounding display a failing ratio as the threshold itself (4.499 as 4.50).
function showRatio(r) {
  const two = r.ratio.toFixed(2);
  return !r.aa && Number(two) >= r.aaMin ? r.ratio.toFixed(4) : two;
}

function format(r) {
  const tag = r.label ? `[${r.label}] ` : "";
  return (
    `${tag}${hex(r.fg)} on ${hex(r.bg)} (${r.large ? "large/UI" : "body"}) - ` +
    `WCAG ${showRatio(r)}:1 (AA ${r.aa ? "PASS" : "FAIL"}, AAA ${r.aaa ? "PASS" : "FAIL"}) - ` +
    `APCA Lc ${r.lc.toFixed(1)}`
  );
}

// ---------- CLI ----------

function parseArgs(args) {
  const out = { fg: null, bg: null, large: false, json: null, help: false };
  const value = (i, flag) => {
    if (i >= args.length || args[i].startsWith("--")) throw new InputError(`${flag} needs a value`);
    return args[i];
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--fg") out.fg = value(++i, a);
    else if (a === "--bg") out.bg = value(++i, a);
    else if (a === "--json") out.json = value(++i, a);
    else if (a === "--large") out.large = true;
    else if (a === "-h" || a === "--help") out.help = true;
    else throw new InputError(`Unknown argument: ${a}`);
  }
  return out;
}

function loadPairs(args) {
  if (args.json) {
    if (args.fg || args.bg) throw new InputError("Use --json or --fg/--bg, not both");
    let raw;
    try {
      raw = JSON.parse(readFileSync(args.json, "utf8"));
    } catch (e) {
      throw new InputError(`Could not read or parse ${args.json}: ${e.message}`);
    }
    if (!Array.isArray(raw) || raw.length === 0) {
      throw new InputError("JSON input must be a non-empty array of {fg, bg, label?, large?}");
    }
    return raw.map((p, i) => {
      if (!p || typeof p !== "object") throw new InputError(`Pair #${i}: expected an object`);
      const colors = resolvePair(parseColor(p.fg), parseColor(p.bg), `Pair #${i} (fg=${p.fg}, bg=${p.bg})`);
      return { ...colors, label: p.label ?? `pair-${i}`, large: p.large === true };
    });
  }
  if (!args.fg || !args.bg) throw new InputError("Provide --fg and --bg, or --json <file>. See --help.");
  const colors = resolvePair(parseColor(args.fg), parseColor(args.bg), `fg=${args.fg}, bg=${args.bg}`);
  return [{ ...colors, label: null, large: args.large }];
}

function main() {
  try {
    const args = parseArgs(argv.slice(2));
    if (args.help) {
      console.log(HELP);
      return 0;
    }
    const results = loadPairs(args).map(verdict);
    for (const r of results) console.log(format(r));
    if (results.some(r => !r.aa)) {
      console.error("\nAt least one pair fails WCAG AA - see above.");
      return 1;
    }
    return 0;
  } catch (e) {
    if (!(e instanceof InputError)) throw e;
    console.error(e.message);
    return 2;
  }
}

// Run only as a script; importing the file (for tests) has no side effects.
if (argv[1] && import.meta.url === pathToFileURL(realpathSync(argv[1])).href) exit(main());
