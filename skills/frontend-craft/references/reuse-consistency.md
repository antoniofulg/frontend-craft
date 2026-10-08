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

## Compare the whole pattern

| Surface | Compare with the matching family |
| --- | --- |
| Page shell | Content bounds, gutters, navigation, scrolling and responsive structure |
| Header | Heading semantics, font/token source, size/weight, spacing, breadcrumbs and actions |
| Supporting text | Whether subtitle/eyebrow/help exists, its purpose, placement and terminology |
| Controls | Domain component, variants, selection/display behavior, validation and feedback |
| Collections | Density, formatting, filters, sorting, selection, pagination and empty states |
| State feedback | Loading, pending, success, failure, recovery, permission and disabled behavior |

Inspect wrappers, class/style overrides and caller props, even when every page
imports the same component. Prefer correcting the owner when the defect is
systemic; avoid a leaf override that disguises an owner-level mismatch.

Descriptions are content decisions. Add one when the requirement or established
family calls for explanatory content, not as a decorative completion of a header.
Use the same name for the same action throughout a flow; distinguish actions
with different consequences even when their buttons share styling.

## Exceptions and evolution

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
