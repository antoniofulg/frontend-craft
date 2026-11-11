# Frontend Craft 0.20.0 verification

Date: 2026-11-11. Scope: the binding-design comparison added since `v0.19.0`.
The package still exposes one `frontend-craft` skill; consumer installation
remains maintainer-controlled.

## Included coverage

- [Compare a render with a binding design](../skills/frontend-craft/references/review.md#compare-a-render-with-a-binding-design)
  is a new review section, separate from and complementary to
  [rendered critique](../skills/frontend-craft/references/review.md#critique-the-rendered-composition).
  It covers what binds and the approved departures list, captures at the
  design's pixel size over its scale with the resized-text tell-tale, a fresh
  judge without code, diff or builder notes, the `same`/`differs` inventory by
  kind, judging only drawn states, a commit-bound verdict with one
  regression-aware second round, and source diagnosis after the judgement.
  Pictures stay review evidence, not automated tests or gate steps, as in 0.18.1.
- `SKILL.md` gains one routing row and a link from the changed-interface
  paragraph of "Before delivery"; its description is unchanged at 1,022
  characters. The review lens table gains one row.
- Six scenarios were added to [scenarios](scenarios.md#binding-design-comparison-cases).

Source comparison, attribution and exclusions are recorded in
[SOURCES](../skills/frontend-craft/SOURCES.md#binding-design-comparison).

## Release package checks

- `python3 -I scripts/validate_package.py`: passed.
- Every fragment link in the repository (533) resolves to a target heading,
  checked separately because the validator checks only that the file exists. The
  checker reported a deliberately broken fragment, so it does detect failures.
- `npx --yes skills@1.7.5 add . --list`: discovered the `frontend-craft` skill
  with the unchanged description (1,022 characters, under the 1,024 limit).
- An isolated temporary install with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`
  produced real `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft`
  directories whose digests matched the source tree.
- The Tech Leads Club repository and CC BY 4.0 license links returned HTTP 200
  on 2026-11-11.

Final distributed skill-tree SHA-256 (36 files):
`6ed7f4994a163805e7b48c93be754ab13c68bf6fc9bf74cf22fa7ef018afe2f1`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; the same
procedure reproduced the recorded 0.19.0 digest from its tag.

## Limits

The six new scenarios were written but not exercised: no agent scenario, fresh
context probe or judged capture was run for this release, so routing and the
judge's behavior are unproven. The claim that size-faithful captures and a judge
without code catch more divergence rests on the source's reported experience, not
on a measurement in this package. The transient install fixture was removed, and
no consumer installation was modified.
