# Release 0.27.4 verification: frontend-craft 0.27.4

Date: 2026-11-16. Scope: a top-level review mode for prototypes, requested after a
product owner could not annotate states rendered inside the gallery's iframes.
`video-craft` is not released. Tag: `v0.27.4` for frontend-craft.

## Included coverage

- `references/reuse-consistency.md`: new subsection "Review states top-level"
  under prototype with production components (stable top-level URL per state, a
  review overlay shown only at top level, an honest viewport note, a guided story,
  the batched-annotation loop and the limit on claiming the annotation UI works),
  plus a pointer from "Feedback and approval".
- `SKILL.md`: one routing row and `metadata.version` 0.27.4.
- README, CHANGELOG and one new scenario in [scenarios](scenarios.md).

## Source

Written from one working implementation in a product repository (a gallery with
iframe presets, a `?frame=1` state route and a top-level review bar). The
`orca tab annotations [--page <id>] [--json]` syntax was checked against the
installed CLI's `--help`.

## Release package checks

- `python3 scripts/sync_shared.py`: no diff in either skill.
- `python3 -I scripts/validate_package.py`: PASS (metadata shape, local links, portable references, shared copies, distribution files).
- `node scripts/test_skill_scripts.mjs`: 8 of 8 passed.
- Not run: installer discovery, isolated install probes, the scenario itself.

## Limits

The checks prove structure, not behavior. The pattern comes from one product and
one annotation tool; the new scenario was written but not exercised.
