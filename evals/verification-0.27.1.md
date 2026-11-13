# Release 0.27.1 verification: frontend-craft 0.27.1

Date: 2026-11-13. Scope: a narrower learn-from-corrections reference after a long
landing-page run proposed 14 rules and 6 questions, 6 of them decisions about the
page itself. `video-craft` is not released: its tree is byte-for-byte the 0.1.0
tree. Tag: `v0.27.1` for frontend-craft.

## Included coverage

- `references/learn-from-corrections.md`: purpose stated as the product's UI
  standard; two new filter steps (skip content, structure and story of the surface
  under work even when repeated across its sections; keep only rules that change an
  unrelated screen); copy limited to recurring UI wording patterns; user-named scope
  collected first; at most three questions with inferred reasons batched; soft cap
  of about eight rules led by repeated corrections; the read-side pointer for
  design and build agents.
- `SKILL.md`: `metadata.version` 0.27.1 only; routing and description unchanged.
- README, CHANGELOG and one new scenario in
  [scenarios](scenarios.md#learn-from-corrections-cases).

## Release package checks

- `python3 scripts/sync_shared.py`: no diff in either skill.
- `python3 -I scripts/validate_package.py`: PASS.
- Anchor check over both skills (maintainer scratch script): exit 0.
- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed (unchanged).
- Not run: installer discovery and isolated install probes.

| Skill | Files | SHA-256 |
| --- | --- | --- |
| frontend-craft | 50 | `defeac74c91a71049c627e0ec6363bac9fbf708d40b7bed82f4f04a83d28f3cb` |
| video-craft | 24 | `0ba892ed73aa51a980d6b1b48b69851357624584a80666b6738b80abe21e5c29` |

## Limits

The checks prove structure, not behavior. The fix is written against one reported
run; the new scenario was written but not exercised, so the eight-rule and
three-question caps are unmeasured.
