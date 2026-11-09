# Frontend Craft 0.19.0 verification

Date: 2026-11-09. Scope: the worst-case data, motion craft, visual detail and
variant comparison additions since `v0.18.1`. The package still exposes one
`frontend-craft` skill; consumer installation remains maintainer-controlled.

## Included coverage

- [Stress a real component](../skills/frontend-craft/references/review.md#stress-a-real-component)
  gains a value map with limits, worst-case value shapes, consequence grading
  and a failure-signature table mapping observed breaks to owner-level CSS fixes.
- [Layout, typography and color](../skills/frontend-craft/references/interaction-accessibility.md#layout-typography-and-color)
  decides truncation per field; locale values show absolute dates past about a
  week; mobile web extends touch hit areas and cancels drifting taps.
- [Motion](../skills/frontend-craft/references/motion.md) adds product
  personality and token consolidation, a scroll-reveal seam, a mechanism ladder
  with `@starting-style`, entrance origin rules, discomfort triggers and
  transparency/contrast preferences, the explicit hover query, drag start
  threshold with momentum projection and velocity-seeded reversal, asymmetric
  timing, tooltip and tab-indicator rows, easing selection with illustrative
  curves, spring tuning limits, toast timers in hidden tabs and a slow-motion
  feel check.
- [Visual details](../skills/frontend-craft/references/visual-details.md) adds
  translucent surfaces, line height by size and eased overflow fades.
- [Reuse and consistency](../skills/frontend-craft/references/reuse-consistency.md)
  adds the rule against hand-rolling solved problems and
  [variant comparison](../skills/frontend-craft/references/reuse-consistency.md#compare-variants-when-direction-is-open).
- `SKILL.md` routes worst-case stress and variant comparison; six scenarios were
  added to [scenarios](scenarios.md).

Source comparison and exclusions are recorded in
[SOURCES](../skills/frontend-craft/SOURCES.md#worst-case-data-motion-craft-and-variant-comparison).

## Release package checks

- `python3 -I scripts/validate_package.py`: passed.
- Every fragment link in the repository resolves to a target heading, checked
  separately because the validator checks only that the file exists.
- `npx --yes skills@1.7.5 add . --list`: discovered the `frontend-craft` skill
  with the shortened description (1,022 characters, under the 1,024 limit).
- An isolated temporary install with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`
  produced real `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft`
  directories whose digests matched the source tree.
- MDN links for `@starting-style`, `transition-behavior`,
  `prefers-reduced-transparency` and `prefers-contrast`, and Apple's WWDC 2018
  session link, returned HTTP 200 on 2026-11-09.

Final distributed skill-tree SHA-256 (36 files):
`6a6a1b85ac20e00b3f91c7bf724aefc65a54143942ba13b2208fd0d77c57af3a`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; the same
procedure reproduced the recorded 0.18.1 digest from its tag.

## Limits

The six new scenarios were written but not exercised: no agent scenario, fresh
context probe or rendered stress harness was run for this release, so routing
and behavior are unproven. Numeric curves, thresholds and the deceleration
reference are starting points from the compared sources and Apple's session, not
values measured in a consuming project. The transient install fixture was
removed, and no consumer installation was modified.
