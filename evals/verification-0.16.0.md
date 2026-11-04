# Frontend Craft 0.16.0 verification

Date: 2026-11-04. Scope: release the choice-surface additions since `v0.15.0`.
The package still exposes one `frontend-craft` skill; consumer installation
remains maintainer-controlled.

## Included coverage

- [Choice surfaces and decision support](../skills/frontend-craft/references/components.md#choice-surfaces-and-decision-support):
  comparable trade-offs, outcome previews, zero-result recovery, control selection,
  distributions and decision aids based on real rules.
- Counts tied to the query, scope and authorization of the results they promise.
- Other products' patterns treated as precedents to test, not evidence. No external
  research tool is required, named or routed.
- A routing row in the entrypoint, a review lens and three behavioral scenarios.

## Release package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local links,
  reference reachability, portability and distribution-file checks.
- New fragment links were checked separately against target headings, because the
  validator checks file existence only.
- `npx --yes skills@1.7.5 add . --list`: discovered the `frontend-craft` skill.
- Installed from the local source into an isolated temporary project with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`.
  Both `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft` were real
  directories whose digests matched the source tree.

Final distributed skill-tree SHA-256 (36 files):
`8bee52af3c75d31a6e39ceba735a3aa97644feb458c68d2d41aff28f6ddc945c`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; it excludes
repository-only documentation and evaluations. The same procedure reproduced the
recorded 0.15.0 digest from its tag.

## Limits

The three new scenarios were written but not exercised: no agent scenario,
fresh-context probe or rendered filter was run for this release, so routing and
behavior are unproven. The guidance draws on a maintainer-supplied summary of a
practitioner video, which was not itself inspected, and on author judgment; its title
and URL are not recorded. It does not establish measured usability or commercial
lift. The installation check used local source, not a consumer project; the transient
fixture was removed and real consumer installations were not modified.
