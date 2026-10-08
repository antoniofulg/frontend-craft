# Reference expansion validation — 2026-10-08

Scope: the 0.2.0 reference expansion on top of published 0.1.0. This records
package and instruction checks, not completed browser or behavioral evaluations.

## Checks performed

- `python3 scripts/validate_package.py`: metadata shape, local-link closure and
  reachability passed, including the new visual-details and charts references.
- Skill Creator's `quick_validate.py`, run using `uv run --with pyyaml python`:
  skill metadata passed without adding a repository dependency.
- `npx --yes skills add . --list`: the CLI discovered Frontend Craft.
- An isolated `npx --yes skills add <checkout> --skill frontend-craft --agent
  codex claude-code --copy --yes` installation included all 12 bundled files;
  installed bytes were compared with their sources and the workspace was removed.
- The two TSX fences in `components.md` were extracted into temporary files and
  typechecked with the available TypeScript compiler and React types 19.3.0 using
  strict mode, `react-jsx`, bundler resolution and no emit. Both passed. Library
  declaration checking was skipped; the recipes themselves were checked.
- Technical guidance was checked against the primary documentation linked in
  the references. Context7 was quota-limited, so official web documentation was
  used instead. Suggested aesthetic values are explicitly non-normative.

## Instruction review

A separate read-only explorer reviewed the additions and checked technical claims
against primary sources. Its findings led to explicit precedence over UI/UX Pro
Max's broader new-page design-system workflow and an edit-authority condition for
saving commercial claims/copy in existing briefs. Discovery metadata also names
the added chart and visual-detail capabilities. The reviewer confirmed those
specific corrections in a targeted recheck. These are instruction corrections,
not evidence that the behavioral scenarios below have passed.

## Behavioral scope

The existing [evaluation scenarios](scenarios.md) now include the new guidance's
failure cases: unavailable actions and announcements, React ownership and refs,
interruptible motion, supported commercial claims, visual fallbacks, truthful
charts and selective UI/UX Pro Max use.

These new scenarios were not executed as agent comparisons. No browser tests,
assistive-technology sessions, gesture tests, display-gamut checks or commercial
experiments ran. Typechecking is not runtime proof of focus or context behavior.
The 0.1.0 CRM probe remains historical evidence for that earlier package, not a
new claim of improved reliability for 0.2.0.
