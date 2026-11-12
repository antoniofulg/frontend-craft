#!/usr/bin/env node
// detect-token-drift.mjs - list raw color literals in source files outside token files.
//
// Adapted from Pedro Nauck's ui-craft skill (scripts/detect-token-drift.mjs, MIT,
// Copyright (c) 2026 Pedro Nauck; notice in ../licenses/pedronauck-skills.txt).
// Changes: comments are ignored, fragment links and id selectors are not read as
// hex colors, token-based and dynamic color functions are not flagged, multi-line
// literals are found, symlinks are not followed, token files match by path segment
// relative to the scanned root, and a per-line suppression marker was added.
//
// Read-only and dependency-free. Needs Node 18 or newer. A heuristic scan, not a
// parser: it reports candidates for review, and a project's own lint rule or
// codegen that owns the invariant takes precedence.
//
// Usage:
//   node detect-token-drift.mjs <dir|file>... [--token-paths "tokens,theme,variables.css"]
//
// Flags a literal when it is:
//   #rgb #rgba #rrggbb #rrggbbaa     rgb()/rgba()/hsl()/hsla()/lab()/lch()/oklab()/oklch()
//   whose first argument is a number (so hsl(var(--x)), rgb(${r}) and
//   oklch(from var(--c) l c h) are treated as token use and not flagged).
//
// Not flagged: text inside comments (// /* */ <!-- -->; // is not a comment in
// .css/.html), hex preceded by a word, "/", "&", "?", "." or "-" (anchors in URLs,
// HTML entities, private class fields), hex that is the value of href/src/id/for/
// aria-*, url(#id) or a selector call such as querySelector("#add"), and hex
// followed by "{", ":", "(", "[", "." or "=" (CSS id selectors, class fields).
// Known limits: a prose string like "Issue #123" is flagged (all-digit hex is a
// valid color); a selector list "#add, #bad" and "@if $c == #fff {" are not
// distinguished. Add token-drift-ignore on a line, or token-drift-ignore-next-line
// on the line above, to accept a literal on purpose.
//
// Token files are skipped: a file or directory whose name (extension ignored)
// equals a --token-paths fragment, or a fragment with "/" that is a path suffix,
// measured relative to the scanned root.
//
// Exit codes: 0 = no drift; 1 = drift found; 2 = bad input.

import { readdirSync, readFileSync, statSync, realpathSync } from "node:fs";
import { basename, join, relative, sep } from "node:path";
import { argv, cwd, exit } from "node:process";
import { pathToFileURL } from "node:url";

const DEFAULT_TOKEN_PARTS = ["tokens", "theme", "themes", "variables.css", "design-tokens"];
const EXTENSIONS = new Set([
  ".css", ".scss", ".sass", ".less", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".vue", ".svelte", ".astro", ".html",
]);
const SKIP_DIRS = new Set([
  "node_modules", "dist", "build", "out", "coverage", "storybook-static",
]);
const MAX_BYTES = 1_000_000;

const HEX_RE = /#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})(?![\w-])/gi;
const FUNC_RE = /\b(rgba?|hsla?|oklch|oklab|lab|lch)\s*\(([^)]*)\)/gi;
const NUMERIC_FIRST_ARG = /^\s*(?:[-+.\d]|none\b)/i;
// Text before a "#abc" that makes it a fragment or selector, not a color.
const NOT_COLOR_PREFIX =
  /(?:\b(?:href|src|id|for|htmlFor|xlink:href|aria-[\w-]+)\s*[=:]\s*\{?\s*["'`]?|url\(\s*["']?|(?:querySelector(?:All)?|closest|matches|getElementById|\$|jQuery)\(\s*["'`])$/i;
const NOT_COLOR_SUFFIX = /^\s*(?:[{:(.[]|=[^=])/;
const IGNORE_RE = /token-drift-ignore(-next-line)?/;

const SUGGESTIONS = {
  hex: "Replace with a semantic color token (for example var(--color-bg-elevated)).",
  rgb: "Replace with a semantic color token; for alpha use color-mix(in oklch, var(--token) X%, transparent).",
  hsl: "Replace with a semantic color token.",
  oklch: "Keep only in the primitive/theme layer; components should use semantic tokens.",
  oklab: "Keep only in the primitive/theme layer; components should use semantic tokens.",
  lab: "Keep only in the primitive/theme layer; components should use semantic tokens.",
  lch: "Keep only in the primitive/theme layer; components should use semantic tokens.",
};

const HELP = `detect-token-drift.mjs - find raw color literals that bypass design tokens.

Usage:
  node detect-token-drift.mjs <dir|file>... [--token-paths "tokens,theme,variables.css"]

Flags:
  --token-paths   Comma-separated names (extension ignored) or path suffixes that mark
                  token-definition files; matching files and directories are skipped.
                  Default: ${DEFAULT_TOKEN_PARTS.join(", ")}

Suppress on purpose: token-drift-ignore (same line) or token-drift-ignore-next-line.

Exit codes: 0 = clean; 1 = drift found; 2 = bad input.`;

class InputError extends Error {}

function parseArgs(args) {
  const out = { paths: [], tokenParts: DEFAULT_TOKEN_PARTS, help: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--token-paths") {
      if (i + 1 >= args.length || args[i + 1].startsWith("--")) throw new InputError("--token-paths needs a value");
      out.tokenParts = args[++i].split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
    } else if (a === "-h" || a === "--help") out.help = true;
    else if (a.startsWith("--")) throw new InputError(`Unknown argument: ${a}`);
    else out.paths.push(a);
  }
  return out;
}

const stripExt = s => s.replace(/\.[^./]+$/, "");

// relPath uses "/" and is relative to the scanned root.
export function isTokenPath(relPath, parts) {
  const p = `/${relPath.toLowerCase()}`;
  return parts.some(t => {
    const needle = `/${t}`;
    return p.endsWith(needle) || p.includes(`${needle}/`) || stripExt(p).endsWith(needle) || stripExt(p).includes(`${needle}/`);
  });
}

// Replace comments with spaces (newlines kept so line numbers hold). Comment markers
// inside quotes are left alone, so "http://x" and globs like "**/*.ts" are safe.
export function blankComments(text, ext) {
  const slashComments = ext !== ".css" && ext !== ".html";
  const htmlComments = ext === ".html" || ext === ".vue" || ext === ".svelte" || ext === ".astro";
  const blank = s => s.replace(/[^\n]/g, " ");
  let out = "";
  let quote = null;
  for (let i = 0; i < text.length; ) {
    const c = text[i];
    const d = text[i + 1];
    if (quote) {
      if (c === "\\") {
        out += text.slice(i, i + 2);
        i += 2;
        continue;
      }
      if (c === quote || (c === "\n" && quote !== "`")) quote = null;
      out += c;
      i++;
    } else if (c === "/" && d === "*") {
      const end = text.indexOf("*/", i + 2);
      const stop = end < 0 ? text.length : end + 2;
      out += blank(text.slice(i, stop));
      i = stop;
    } else if (slashComments && c === "/" && d === "/" && text[i - 1] !== ":") {
      const end = text.indexOf("\n", i);
      const stop = end < 0 ? text.length : end;
      out += blank(text.slice(i, stop));
      i = stop;
    } else if (htmlComments && text.startsWith("<!--", i)) {
      const end = text.indexOf("-->", i + 4);
      const stop = end < 0 ? text.length : end + 3;
      out += blank(text.slice(i, stop));
      i = stop;
    } else {
      if (c === '"' || c === "'" || c === "`") quote = c;
      out += c;
      i++;
    }
  }
  return out;
}

// Findings for one file's text: [{ line (1-based), kind, literal }].
export function scanText(text, ext) {
  const code = blankComments(text, ext);
  const rawLines = text.split(/\r?\n/);
  const starts = [0];
  for (let i = code.indexOf("\n"); i !== -1; i = code.indexOf("\n", i + 1)) starts.push(i + 1);
  const lineOf = idx => {
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= idx) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };

  const ignored = new Set();
  rawLines.forEach((line, i) => {
    const m = line.match(IGNORE_RE);
    if (m) ignored.add(m[1] ? i + 2 : i + 1);
  });

  const found = [];
  for (const m of code.matchAll(HEX_RE)) {
    const before = code.slice(Math.max(0, m.index - 80), m.index);
    const prev = before.slice(-1);
    if (/[\w/&?.-]/.test(prev) || NOT_COLOR_PREFIX.test(before)) continue;
    if (NOT_COLOR_SUFFIX.test(code.slice(m.index + m[0].length, m.index + m[0].length + 20))) continue;
    found.push({ line: lineOf(m.index), kind: "hex", literal: m[0] });
  }
  for (const m of code.matchAll(FUNC_RE)) {
    if (!NUMERIC_FIRST_ARG.test(m[2])) continue;
    const name = m[1].toLowerCase();
    found.push({
      line: lineOf(m.index),
      kind: name.startsWith("rgb") ? "rgb" : name.startsWith("hsl") ? "hsl" : name,
      literal: m[0].replace(/\s+/g, " "),
    });
  }
  return found
    .filter(f => !ignored.has(f.line))
    .map(f => ({ ...f, snippet: (rawLines[f.line - 1] ?? "").trim().slice(0, 160) }))
    .sort((a, b) => a.line - b.line);
}

function* walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  entries.sort((a, b) => (a.name < b.name ? -1 : 1));
  for (const e of entries) {
    if (e.isSymbolicLink()) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name) && !e.name.startsWith(".")) yield* walk(full);
    } else if (e.isFile()) yield full;
  }
}

function scanFile(file) {
  const ext = file.slice(file.lastIndexOf(".")).toLowerCase();
  if (!EXTENSIONS.has(ext) || /\.min\.[a-z]+$/i.test(file) || /\.d\.ts$/i.test(file)) return [];
  try {
    if (statSync(file).size > MAX_BYTES) return [];
    return scanText(readFileSync(file, "utf8"), ext).map(f => ({ ...f, file }));
  } catch {
    return [];
  }
}

function run(args) {
  const findings = [];
  for (const root of args.paths) {
    let st;
    try {
      st = statSync(root);
    } catch {
      throw new InputError(`No such file or directory: ${root}`);
    }
    const files = st.isDirectory() ? walk(root) : [root];
    for (const file of files) {
      const rel = st.isDirectory() ? relative(root, file) : basename(file);
      if (isTokenPath(rel.split(sep).join("/"), args.tokenParts)) continue;
      findings.push(...scanFile(file));
    }
  }
  return findings;
}

function main() {
  try {
    const args = parseArgs(argv.slice(2));
    if (args.help) {
      console.log(HELP);
      return 0;
    }
    if (args.paths.length === 0) throw new InputError("Provide at least one directory or file to scan. See --help.");
    const findings = run(args);
    if (findings.length === 0) {
      console.log("No raw color literals found outside token paths.");
      return 0;
    }
    const byKind = {};
    for (const f of findings) (byKind[f.kind] ??= []).push(f);
    console.log(`Token drift: ${findings.length} raw color literal(s) outside token paths.\n`);
    for (const [kind, list] of Object.entries(byKind)) {
      console.log(`-- ${kind.toUpperCase()} (${list.length}) - ${SUGGESTIONS[kind]}`);
      for (const f of list) {
        console.log(`  ${relative(cwd(), f.file) || f.file}:${f.line}  ${f.literal}`);
        console.log(`    ${f.snippet}`);
      }
      console.log("");
    }
    console.log("Candidates for review; confirm each, then use the token owner or add token-drift-ignore.");
    return 1;
  } catch (e) {
    if (!(e instanceof InputError)) throw e;
    console.error(e.message);
    return 2;
  }
}

// Run only as a script; importing the file (for tests) has no side effects.
if (argv[1] && import.meta.url === pathToFileURL(realpathSync(argv[1])).href) exit(main());
