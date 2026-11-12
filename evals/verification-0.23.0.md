# Frontend Craft 0.23.0 verification

Date: 2026-11-11. Scope: the two helper scripts added since `v0.22.0`. The
package still exposes one `frontend-craft` skill; consumer installation remains
maintainer-controlled.

## Included coverage

- [check-contrast.mjs](../skills/frontend-craft/scripts/check-contrast.mjs)
  reports the WCAG 2.2 contrast ratio with AA and AAA verdicts and APCA-W3
  0.0.98G-4g Lc for hex, `rgb()` and `oklch()` pairs, singly or from JSON. Exit 0
  pass, 1 AA failure, 2 bad input. Alpha on the foreground is composited over the
  background; a translucent background is rejected. `oklch()` is gamut-mapped by
  chroma reduction.
- [detect-token-drift.mjs](../skills/frontend-craft/scripts/detect-token-drift.mjs)
  lists raw color literals outside token files, ignoring comments, URL
  fragments, id selectors and token-based color functions. Exit 0 clean, 1
  drift, 2 bad input.
- Both are adapted from Pedro Nauck's ui-craft at `682e738` (MIT, notice already
  bundled); the review findings and fixes are in
  [SOURCES](../skills/frontend-craft/SOURCES.md#bundled-helper-scripts).
- Optional-helper sentences were added to the dark-theme contrast paragraph in
  [visual details](../skills/frontend-craft/references/visual-details.md#design-a-dark-theme),
  the color and contrast paragraph in
  [interaction and accessibility](../skills/frontend-craft/references/interaction-accessibility.md#layout-typography-and-color)
  and the [shared UI patterns audit](../skills/frontend-craft/references/shared-ui-patterns.md#audit-the-application).
  Each states that the project's own check wins and that the helper is not a gate.
- `SKILL.md` moves to 0.23.0; its description is unchanged. Four scenarios were
  added to [scenarios](scenarios.md#helper-script-cases).
- `scripts/validate_package.py` now requires the two scripts as distribution
  files; its other checks are unchanged.

## Release package checks

- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed. They check
  `#000` on `#fff` at 21:1, `#777` on `#fff` at 4.478:1 (AA fail), the AA pass at
  `#767676`, nine APCA vectors from the `apca-w3` 0.1.9 test suite plus the
  published black/white pair (all within 0.0005 Lc), the low-clip case, color
  parsing and alpha, the `oklch()` red and gamut cases, CLI exit codes, JSON
  input, and 17 expected drift hits and the non-hits around them over
  `evals/fixtures/token-drift/`.
- `python3 -I scripts/validate_package.py`: passed.
- Not run for this release: the `skills` installer discovery and isolated install
  checks recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256 (41 files):
`656680c57f6f233c39a3e8c45c62b3dfbff12db50e7c917653f2f85da225ddbc`.
The digest uses sorted relative file paths, NUL, file bytes and NUL, as in the
0.20.0 record; the same procedure reproduced the 0.22.0 digest from its tree.

## Limits

The APCA vectors come from the `apca-w3` package's own tests, read but not
executed, so they check this rewrite against that implementation's recorded
output, not against an independent reading of the specification. APCA is not part
of WCAG 2.2 conformance. The drift scanner is a heuristic: it flags `#123` in
prose and misses named and built colors, and it was tried only on the fixtures,
not on a real project. The new scenarios were written but not exercised. Scripts
were tested on Node 22 only; no consumer installation was modified.
