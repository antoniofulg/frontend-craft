# Release 0.27.2 verification: frontend-craft 0.27.2

Date: 2026-11-13. Scope: a routed viewport sweep method for reviewing a page across
screen sizes, requested after a landing-page run found it effective. `video-craft`
is not released. Tag: `v0.27.2` for frontend-craft.

## Included coverage

- `references/review.md`: new section "Sweep a page across viewports" (widths from
  breakpoints plus edges, visitor-style scroll, in-page measurements in every
  same-origin frame, captures read by a reviewer, triage, proving suspicious findings,
  one bounded round, four-list report).
- `SKILL.md`: one routing row and `metadata.version` 0.27.2.
- README, CHANGELOG and one new scenario in [scenarios](scenarios.md).

## Release package checks

- `python3 scripts/sync_shared.py`: no diff in either skill.
- `python3 -I scripts/validate_package.py`: see result below.
- Not run: installer discovery, isolated install probes, the scenario itself.

## Limits

The checks prove structure, not behavior. The method is written from one run
(Chromium, 11 widths); the new scenario was written but not exercised.
