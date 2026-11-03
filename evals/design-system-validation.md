# Design-system workflow validation

Date: 2026-11-01. Condition: unreleased design-system guidance after 0.14.0.
Scope: one `frontend-craft` entrypoint, an on-demand reference, explicit review
and creation/evolution routes, existing-owner integration and documentation.
No release version or consumer installation was changed.

## Fresh-context workflow probes

Three independent generic task agents received the skill entrypoint path, a
specific user request and synthetic source descriptions. They chose references
through real file tools; no expected reference list, evaluation rubric or other
probe result was supplied. Session-configured agent defaults were used without
model overrides. All tasks were read-only; no runnable consumer was provided.
Actual reads were checked in the delivered tool histories, not inferred solely
from the agents' final reference lists.

The existing-product fixture described two operational routes, light/dark theme
mappings, implemented Button variants that disagreed with documentation, a false
Approved label after a failed request, copied action styling, a theme override,
raw status colors and a legitimate one-off optical adjustment. The new-product
fixture supplied two scheduling screens, their state requirements, approved
identity, React/plain-CSS foundation and proposal-only authority. The narrow case
supplied one Button whose idle label said Save although its handler requested
approval; its pending label and behavior were already correct.

| Request | Actual reference files opened after SKILL.md | Observed result |
| --- | --- | --- |
| Review the existing design system for agent usability and recommend implementation order | design-systems, shared-ui-patterns, review, components, interaction-accessibility, reuse-consistency | Prioritized false approval success, unsupported documented variants and shared-style bypasses; proposed semantic status ownership and real selection examples; preserved the local optical adjustment; reported uninspected families and no rendered proof; made no edits |
| Propose a system for the new scheduling workspace, without implementing | design-systems, shared-ui-patterns, mapping, components, interaction-accessibility, reuse-consistency | Preserved approved identity and React/plain CSS; proposed bounded foundations, roles, selectable components and screen compositions; separated server state from draft/pending state; specified owner documentation and future adoption checks; labeled proposed APIs and unverified behavior; made no edits |
| Correct only the idle button label | interaction-accessibility, content-restraint section | Returned Request approval, retained Sending request… and all props/behavior; opened no design-system, shared-UI audit or commercial references |

These are file-selection and decision-behavior probes, not evidence of strict
section-only loading: both broad probes opened the full design-system reference,
which contains both branches. Other references were partly loaded by section.
The creation proposal's suggested dimensions and token names were explicitly
proposed choices, not newly adopted or measured product standards.

## Package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local file links,
  reference reachability, portability and distribution-file checks after adding
  the workflow and its routes.
- `npx --no-install skills add . --list`: discovered exactly one skill,
  `frontend-craft`, with the updated description. No installation was requested.

## Limits

No baseline comparison, automatic skill-discovery probe, rendered consumer,
contrast measurement, keyboard interaction, actual system implementation or
migration was exercised. The workflow execution proves bounded instruction
consumption and proposal/review behavior against synthetic source descriptions,
not universal routing reliability, accessible rendered output, complete adoption
or improved business outcomes. The permanent cases in [scenarios](scenarios.md)
cover the corresponding consumer-visible decisions without requiring exact prose
or a fixed reference-read count.
