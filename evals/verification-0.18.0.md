# Frontend Craft 0.18.0 verification

Date: 2026-11-08. Scope: motion coordination, dropped-frame diagnosis, motion
removal, gesture phases and mobile web fixes since `v0.17.0`. The package still
exposes one `frontend-craft` skill; consumer installation remains
maintainer-controlled.

## Included coverage

- [Coordinate several moving elements](../skills/frontend-craft/references/motion.md#coordinate-several-moving-elements),
  linked from the group-entrance opportunity seam.
- [Diagnose dropped frames](../skills/frontend-craft/references/motion.md#diagnose-dropped-frames),
  linked from the implementation section.
- [Remove or reduce motion](../skills/frontend-craft/references/motion.md#remove-or-reduce-motion)
  under the motion audit.
- Two-phase gesture rules in
  [gestures and continuity](../skills/frontend-craft/references/motion.md#gestures-and-continuity).
- [Mobile web](../skills/frontend-craft/references/interaction-accessibility.md#mobile-web).
- [Public launch readiness](../skills/frontend-craft/references/technical-seo.md#check-public-launch-readiness)
  and a placeholder-residue row in the generated-interface defaults.
- Five routing rows, an updated description and eight behavioral scenarios.

The source review compared Emil Kowalski's skills from `e8a175d` to `5206a95`.
`animate-expo`, `write-swift`, `ask-sonner` and `pick-ui-library` were excluded
as platform- or library-specific; see [SOURCES](../skills/frontend-craft/SOURCES.md#motion-coordination-performance-and-mobile-web).

## Review process

Two review rounds ran, each by a new agent with no access to the drafting
context or earlier reviews. Every finding was applied before release.

Round 1 covered the motion and mobile web additions. It found no copied text and confirmed the platform claims for viewport units,
safe areas, input zoom, `touch-action`, `overscroll-behavior` and `will-change`.
Every finding was applied:

- Qualified one-entrance-per-container so a meaningful child order may still stagger.
- Replaced animated `drop-shadow()` with a pre-rendered shadow layer's opacity.
- Added the `popLayout` ref-forwarding and positioned-parent requirement.
- Corrected the tap-delay claim and added Safari's `-webkit-user-select`.
- Narrowed the removal and dropped-frame routing rows away from reduced-motion
  and page-level performance work.
- Softened the button-close bounce rule and added a gesture scenario.

Round 2 covered launch readiness and spot-checked the rest. It confirmed the tag,
icon, status and redirect facts and that consent wording avoids legal advice:

- Pointed the metadata section to the launch table so tag and icon specifics
  have one owner.
- Attached the status link to the 404 clause only and scoped single-route checks
  to the rows they touch.
- Reworded consent so a site without non-essential tracking has nothing to gate.

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
`77454b426254d8630a71a6e8bd73afbb9e06fb335e2f7e8943c8003303174e32`.
The digest uses the same procedure as in 0.16.0, which reproduced the recorded
0.17.0 digest from its tag.

## Limits

The eight new scenarios were written but not exercised, and no interface was
rendered; adherence in practice is unproven. Motion's
[changelog](https://motion.dev/changelog) and
[performance page](https://motion.dev/docs/performance) confirm accelerated
independent transforms from 14.2.0 and unaccelerated CSS variables; they do not
list which Motion features run on the main thread, so that line rests on their
JavaScript-per-frame nature. Mobile web fixes were not run on a device. The transient install
fixture was removed, and no consumer installation was modified.
