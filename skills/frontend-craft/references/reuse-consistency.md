# Reuse and consistency

Read before implementing a page or component, or when checking consistency
across equivalent interfaces.

## Select a precedent by responsibility

Start with current user requirements and governing project contracts, then the
matching page family and domain flow. Inspect at least the nearest actual use
and its implementation; expand to other consumers when ownership or variation
is unclear. A marketing hero is not a dashboard-header precedent.

Check local reuse policy, if present, instead of creating a competing policy.
Find semantic equivalents through domain terms, labels, importers, and handlers.
Compare inputs, outputs, behavior, state ownership and runtime boundaries before
declaring an implementation interchangeable.

Choose the first suitable option:

1. Reuse the existing domain component and its intended variant.
2. Compose the existing shell, primitives and shared patterns as established.
3. Extend the owning component for a genuine missing requirement; inspect its
   consumers and preserve their contracts.
4. Create a new owner when existing ones cannot meet the requirement. Explain
   the mismatch and the scope of the new responsibility.

Match the project's construction order when it has one. Do not introduce a
generic primitive to bypass a richer domain component, or extract a universal
abstraction merely because two pages look similar.

## Keep shared decisions in their owner

Recurring appearance follows the same ownership rule as behavior: consume the
shared component or style recipe and its tokens rather than copying its utility
bundle into each page. Use its supported variants for intentional differences.
Apply the [ownership contract](shared-ui-patterns.md#ownership-contract) when
introducing a pattern or resolving an override. For a requested application-wide
reuse audit or consolidation, use that reference's full workflow; ordinary page
work stays within its relevant family and affected consumers.
For a requested visual change across consumers, follow
[change a shared style](shared-ui-patterns.md#change-a-shared-style) to select
the owner at the intended scope and check its variants and propagation.

## Compare the whole pattern

| Surface | Compare with the matching family |
| --- | --- |
| Page shell | Content bounds, gutters, navigation, scrolling and responsive structure |
| Header | Heading semantics, font/token source, size/weight, spacing, breadcrumbs and actions |
| Supporting text | Whether subtitle/eyebrow/help exists, its purpose, placement and terminology |
| Controls | Domain component, variants, selection/display behavior, validation and feedback |
| Collections | Density, formatting, filters, sorting, selection, pagination and empty states; use the [collection contract](components.md#collections-sorting-and-selection) for query and selection scope |
| State feedback | Loading, pending, success, failure, recovery, permission and disabled behavior |

Inspect wrappers, class/style overrides and caller props, even when every page
imports the same component. Prefer correcting the owner when the defect is
systemic; avoid a leaf override that disguises an owner-level mismatch.

Descriptions are content decisions. Add one when the requirement or established
family calls for explanatory content, not as a decorative completion of a header.
Use the same name for the same action throughout a flow; distinguish actions
with different consequences even when their buttons share styling.

For the requested journey, trace handoffs and supported return/resume paths over
time. Compare equivalent actions by object/scope, commitment point, resulting
state and recovery, not appearance alone. Keep status, offer and
[limit meanings](interaction-accessibility.md#limits-and-unavailable-states)
consistent with their owners. Explain legitimate changes of authority, policy or
outcome on return rather than retaining stale promises. Exercise transitions via
the existing [navigation/draft contract](interaction-accessibility.md#navigation-and-draft-resilience).
Preserve meaningful family variants; this scoped comparison does not require a
whole-product audit or new synchronization/persistence infrastructure.

## Exceptions and evolution

For conversion, activation, monetization or retention work, apply the objective
and precedence in [commercial strategy](commercial-strategy.md). A diagnosed
decision barrier can justify changing composition or flow within the authorized
scope. Explain the commercial hypothesis and validation; preserve compatible
owners rather than reproducing a weak pattern merely for visual consistency.

Consistency permits purposeful variants: dense operational lists, explanatory
onboarding, or destructive confirmation can have different needs. Name the
trigger and owner of the difference. Distinguish a required correction from an
optional extraction or aesthetic preference.

An existing accessibility or behavior defect is not a standard to reproduce.
Use a compliant existing alternative or a scoped owner correction, and explain
the necessary difference. Preserve unrelated appearances and workflows.

Explicit redesign changes the visual authority for its approved scope. Retain
compatible domain behavior and composition; do not let the old map silently
override the new direction. Refresh affected map entries after implementation.

## Prove the result

Compare source composition and render relevant sibling pages under corresponding
states, viewport, theme, and realistic content. Inspect both the changed use and
representative consumers of changed shared owners. State the selection and gaps;
a snapshot of one page proves nothing about unvisited siblings.

For a finding, cite both locations, the common responsibility, the concrete
difference, its user/maintenance consequence, and the smallest owner-level fix.
If rendering is unavailable, report source facts and precise visual checks still
needed. Reuse the project's existing captures/checks when their inputs remain valid.
