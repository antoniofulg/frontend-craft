// Self-check for the helper scripts bundled in skills/frontend-craft/scripts/.
// Run from the repository root: node --test scripts/test_skill_scripts.mjs
// Reference values: WCAG 2.x examples (21:1, #777 on #fff 4.48:1) and the APCA-W3
// 0.1.7+ package test vectors (calcAPCA, signed Lc, text first, background second).

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SCRIPTS = join(ROOT, "skills", "frontend-craft", "scripts");
const FIXTURES = join(ROOT, "evals", "fixtures", "token-drift");
const { parseColor, wcagContrast, apcaLc } = await import(join(SCRIPTS, "check-contrast.mjs"));
const { scanText } = await import(join(SCRIPTS, "detect-token-drift.mjs"));

const cli = (script, ...args) => {
  const r = spawnSync(process.execPath, [join(SCRIPTS, script), ...args], { encoding: "utf8" });
  return { code: r.status, out: r.stdout, err: r.stderr };
};
const rgb = c => parseColor(c).rgb;
const near = (actual, expected, tol, msg) =>
  assert.ok(Math.abs(actual - expected) <= tol, `${msg ?? ""} expected ${expected} +/- ${tol}, got ${actual}`);

test("WCAG ratio", () => {
  near(wcagContrast(rgb("#000"), rgb("#fff")), 21, 1e-9);
  near(wcagContrast(rgb("#777"), rgb("#fff")), 4.478, 0.001);
  near(wcagContrast(rgb("#767676"), rgb("#fff")), 4.542, 0.001);
  assert.equal(wcagContrast(rgb("#fff"), rgb("#fff")), 1);
});

test("APCA-W3 0.0.98G-4g Lc against published vectors", () => {
  const vectors = [
    ["#000", "#fff", 106.04067],
    ["#fff", "#000", -107.88473],
    ["#888", "#fff", 63.05647],
    ["#000", "#aaa", 58.14626],
    ["#aaa", "#000", -56.24113],
    ["#123", "#def", 91.66831],
    ["#def", "#123", -93.0677],
    ["#123", "#444", 8.32326],
    ["#444", "#123", -7.52688],
  ];
  for (const [fg, bg, lc] of vectors) near(apcaLc(rgb(fg), rgb(bg)), lc, 0.0005, `${fg} on ${bg}`);
});

test("APCA low clip returns 0 for tiny contrast instead of a small positive Lc", () => {
  // SAPC is about 0.06 here: between the 0.027 offset and the 0.1 low clip.
  assert.equal(apcaLc(rgb("#808080"), rgb("#8c8c8c")), 0);
  assert.equal(apcaLc(rgb("#8c8c8c"), rgb("#808080")), 0);
});

test("color parsing: forms, alpha and gamut", () => {
  assert.deepEqual(parseColor("#0f08"), { rgb: [0, 255, 0], alpha: 0x88 / 255 });
  assert.deepEqual(parseColor("rgba(255, 0, 0, .5)"), { rgb: [255, 0, 0], alpha: 0.5 });
  assert.deepEqual(parseColor("rgb(0 128 255 / 50%)"), { rgb: [0, 128, 255], alpha: 0.5 });
  assert.deepEqual(parseColor("rgb(100% 0% 0%)").rgb, [255, 0, 0]);
  for (const bad of ["red", "#12", "#12345", "rgb(1 2)", "rgb(a b c)", "oklch(50% x 10)", "hsl(0 0% 0%)", "", null]) {
    assert.equal(parseColor(bad), null, String(bad));
  }
  // oklch(0.628 0.2577 29.23) is sRGB red; achromatic and unit variants.
  const red = rgb("oklch(0.628 0.2577 29.23)");
  near(red[0], 255, 1);
  near(red[1], 0, 2);
  near(red[2], 0, 2);
  assert.deepEqual(rgb("oklch(100% 0 0)"), [255, 255, 255]);
  assert.deepEqual(rgb("oklch(0% 0 0)"), [0, 0, 0]);
  assert.deepEqual(rgb("oklch(0.5 0.1 0.25turn)"), rgb("oklch(0.5 0.1 90deg)"));
  // Out-of-gamut chroma is reduced (hue and lightness kept), never a wild channel flip.
  const wild = rgb("oklch(70% 0.4 150)");
  assert.ok(wild.every(c => c >= 0 && c <= 255) && wild[1] > wild[0] && wild[1] > wild[2], wild.join());
});

test("check-contrast CLI exit codes and output", () => {
  let r = cli("check-contrast.mjs", "--fg", "#000", "--bg", "#fff");
  assert.equal(r.code, 0);
  assert.match(r.out, /21\.00:1 \(AA PASS, AAA PASS\).*APCA Lc 106\.0/);
  r = cli("check-contrast.mjs", "--fg", "#777", "--bg", "#fff");
  assert.equal(r.code, 1);
  assert.match(r.out, /4\.48:1 \(AA FAIL/);
  assert.equal(cli("check-contrast.mjs", "--fg", "#777", "--bg", "#fff", "--large").code, 0);
  assert.equal(cli("check-contrast.mjs", "--fg", "oklch(20% 0 0)", "--bg", "oklch(98% 0 0)").code, 0);
  // Translucent fg is composited over bg: 50% black on white is #808080 (3.95:1).
  r = cli("check-contrast.mjs", "--fg", "rgb(0 0 0 / 50%)", "--bg", "#fff");
  assert.equal(r.code, 1);
  assert.match(r.out, /#808080 on #ffffff.*3\.95:1/);
  // Bad input: unparsable color, translucent bg, missing/unknown args.
  for (const args of [["--fg", "red", "--bg", "#fff"], ["--fg", "#000", "--bg", "#ffffff80"], ["--fg", "#000"], ["--nope"], ["--fg"]]) {
    assert.equal(cli("check-contrast.mjs", ...args).code, 2, args.join(" "));
  }
  assert.equal(cli("check-contrast.mjs", "--help").code, 0);
});

test("check-contrast --json list", () => {
  const dir = mkdtempSync(join(tmpdir(), "contrast-"));
  const file = join(dir, "pairs.json");
  writeFileSync(file, JSON.stringify([{ fg: "#000", bg: "#fff", label: "body" }, { fg: "#777", bg: "#fff", label: "muted", large: true }]));
  let r = cli("check-contrast.mjs", "--json", file);
  assert.equal(r.code, 0);
  assert.match(r.out, /\[body\].*\n\[muted\]/);
  writeFileSync(file, JSON.stringify([{ fg: "#777", bg: "#fff" }, { fg: "#000", bg: "#fff" }]));
  assert.equal(cli("check-contrast.mjs", "--json", file).code, 1);
  for (const bad of ["{}", "[]", "[null]", '[{"fg":"#000"}]', "not json"]) {
    writeFileSync(file, bad);
    assert.equal(cli("check-contrast.mjs", "--json", file).code, 2, bad);
  }
  assert.equal(cli("check-contrast.mjs", "--json", join(dir, "missing.json")).code, 2);
});

// Fixture lines marked "HIT" or "HIT:n" must be flagged exactly n times; no other line may be.
test("token drift fixtures: expected hits and non-hits", () => {
  const files = readdirSync(FIXTURES, { recursive: true, withFileTypes: true })
    .filter(e => e.isFile())
    .map(e => join(e.parentPath ?? e.path, e.name));
  let expectedTotal = 0;
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    const ext = file.slice(file.lastIndexOf("."));
    const expected = new Map();
    text.split("\n").forEach((line, i) => {
      const m = line.match(/\bHIT(?::(\d+))?/);
      if (m) expected.set(i + 1, Number(m[1] ?? 1));
    });
    const actual = new Map();
    for (const f of scanText(text, ext)) actual.set(f.line, (actual.get(f.line) ?? 0) + 1);
    const rel = relative(FIXTURES, file);
    // Token files hold unmarked literals on purpose; the CLI skips them (checked below).
    if (/^(tokens|src\/theme)/.test(rel)) continue;
    assert.deepEqual(actual, expected, rel);
    expectedTotal += [...expected.values()].reduce((a, b) => a + b, 0);
  }
  assert.ok(expectedTotal >= 15, "fixtures should keep exercising many hits");
});

test("token drift CLI: token paths skipped, clean exit 0, drift exit 1, bad input exit 2", () => {
  const r = cli("detect-token-drift.mjs", FIXTURES);
  assert.equal(r.code, 1);
  assert.doesNotMatch(r.out, /primitives\.css|theme\.ts/);
  assert.match(r.out, /view\.tsx:5/);
  assert.equal(cli("detect-token-drift.mjs", join(FIXTURES, "clean")).code, 0);
  // Naming no token path makes the former token files visible.
  const all = cli("detect-token-drift.mjs", FIXTURES, "--token-paths", "nothing");
  assert.match(all.out, /primitives\.css:1/);
  assert.match(all.out, /theme\.ts:1/);
  assert.equal(cli("detect-token-drift.mjs").code, 2);
  assert.equal(cli("detect-token-drift.mjs", join(FIXTURES, "missing")).code, 2);
  assert.equal(cli("detect-token-drift.mjs", FIXTURES, "--bogus").code, 2);
});
