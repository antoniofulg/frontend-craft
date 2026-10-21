# Motion vocabulary coverage

Date: 2026-10-21. Scope: include the maintainer's local `animation-vocabulary`
knowledge without requiring that skill or its vocabulary website at runtime.
The comparison entrypoint has SHA-256
`40d2b27adfdfeb0570a9f20e7d0255109d9233c50603878bcd0dcd04c923fd94`.

## Coverage and ownership

All 91 source terms have independently authored entries in the optional
[motion vocabulary](../skills/frontend-craft/references/motion-vocabulary.md).
The groups cover appearance/removal (6), playback/coordination (8), geometry (8),
state connections (7), scrolling/navigation (5), interaction (9), timing curves
(7), springs (9), repetition (7), media/text effects (10), rendering concepts (6)
and purpose/perception (9). Names alone are an inventory check, not proof that an
agent will identify a real animation correctly.

Both the entrypoint and [motion guide](../skills/frontend-craft/references/motion.md)
route naming questions to this reference. Naming returns a term and brief
description; ambiguous input gets distinctions or an approximate match. Motion
implementation, accessibility, interruption and measured performance retain
their existing owners. No library, API implementation or rendered artifact is
required for a terminology question.

## Corrections and boundaries

- A morph changes shape; a crossfade changes visibility; a shared-element
  transition preserves recognizable identity between compositions. They can combine.
- Masking supports graded visibility; geometric clipping defines a visible region.
- Scroll-triggered reveals and scroll-progress-driven animations are distinct.
- A view transition in the browser API sense is not a guarantee of shape morphing.
- Skeletons can be static; shimmer is optional. Tabular figures are typesetting.
- Layout-affecting animation does not by itself establish layout thrashing.
- Frame-rate interpretation depends on device/workload. Compositor hints and
  transform/opacity use do not prove hardware acceleration or smoothness.
- Easing terms are descriptions; the reference does not ban linear/ease-in,
  impose a readiness reply, require verbatim definitions or close the vocabulary
  to terms absent from the source list.

These distinctions were checked against the existing owners and focused MDN
queries through Context7. The primary links in the vocabulary preserve the
documentation provenance; no version-specific implementation recipe was added.

## Evaluation limits

Package metadata/discovery, local link/anchor and whitespace checks passed.
The source and destination term inventories matched at 91 entries. Final isolated
Codex and Claude Code installations included the vocabulary with byte-identical
package contents and no escaping/missing local references. At the vocabulary
authoring check, the motion guide changed only by its conditional pointer.
Subsequent [opportunity-discovery additions](motion-opportunities-validation.md)
preserve its existing implementation and accessibility rules.

The [naming scenarios](scenarios.md#motion-vocabulary-cases) define observable
acceptance conditions. No fresh-agent classification run, rendered-animation
comparison, accessibility session or performance capture was performed for this
documentation change. Static coverage does not establish recognition accuracy.
