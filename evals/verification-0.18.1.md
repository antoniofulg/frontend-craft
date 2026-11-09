# Frontend Craft 0.18.1 verification

Date: 2026-11-08. Scope: the screenshot-evidence rule since `v0.18.0`
([#18](https://github.com/antoniofulg/frontend-craft/pull/18)). The package still
exposes one `frontend-craft` skill; consumer installation remains
maintainer-controlled.

## Included coverage

- [Rendered critique](../skills/frontend-craft/references/review.md#critique-the-rendered-composition)
  states once that rendered screenshots are review-time inspection evidence, not
  automated tests or gate steps, and that automated proof follows the project's
  test contract. The surrounding paragraph was tightened.
- `SKILL.md`, the review repair workflow, performance transition checks, mapping
  evidence and design-system proof link to that rule instead of restating it.

The change responds to a consuming project where agents encoded the screenshot
guidance as end-to-end tests that captured screenshots on every gate run with no
assertion reading them.

## Release package checks

- `python3 -I scripts/validate_package.py`: passed.
- Every fragment link in the repository resolves to a target heading, checked
  separately because the validator checks only that the file exists.
- `npx --yes skills@1.7.5 add . --list`: discovered the `frontend-craft` skill.
- An isolated temporary install with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`
  produced real `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft`
  directories whose digests matched the source tree.

Final distributed skill-tree SHA-256 (36 files):
`adee5d5764d66597ac8d45f5714aa5764b0422d24b16a7f23f62761aa962720a`.
The digest uses the same procedure as in 0.16.0, which reproduced the recorded
0.18.0 digest from its tag.

## Limits

No independent review round ran for this patch, and no agent scenario was
exercised, so whether agents stop encoding screenshots as tests is unproven until
the consuming project updates. The transient install fixture was removed, and no
consumer installation was modified.
