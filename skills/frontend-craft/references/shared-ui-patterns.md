# Shared UI patterns

Read to audit reuse gaps, consolidate duplicated components or styles, migrate
an application to shared patterns, or change shared styles. For ordinary feature
work, use the ownership contract when choosing or extending a shared owner; the full audit is conditional
on the requested scope.

## Scope and authority

An audit or review produces findings and a migration proposal. A request to audit
and apply, consolidate, refactor or migrate authorizes implementation within its
stated scope; carry it through verification without adding a separate approval
checkpoint. Follow the consuming repository's workflow and release authority.

For an application-wide request, establish its first-party routes, packages,
shells and themes, including separately built surfaces. Record exclusions such as
vendor code, generated files or independently governed brands. For a focused
request, inspect its family and affected shared consumers. Resolve the actual
stack, installed versions and adopted design system before selecting mechanisms.

## Ownership contract

Each recurring semantic UI decision has one authoritative owner. Reuse an
existing owner first; extend it when a real requirement is missing. Create the
smallest new owner for an actual shared responsibility or an explicitly requested
application default. Similar utility strings alone do not establish that two
elements have the same purpose or should share behavior.

| Concern | Owner |
| --- | --- |
| Shared design values | Existing theme or design tokens, including role-specific values where needed |
| Repeated structure, behavior or domain interaction | Existing component or template partial and its supported API |
| Shared appearance across different structures | Component style recipe or semantic class using the project's styling approach |
| Intentional differences | Named variants beside the owning component or recipe, sharing its common defaults |
| Instance content and external placement | Consumer content, slots and supported margin, sizing or grid-placement controls |

One concern needs one owner, not a mandatory token, CSS alias and component stack.
A shared component whose utility list owns the appearance can be sufficient.
Internal padding, gaps, borders, radii, surfaces and shadows belong to that owner
when they define its shared treatment. Keep supported differences explicit rather
than reproducing those decisions in each caller's classes, inline styles or CSS.

Name patterns by role, such as `Card` or `surface-card`, so names survive design
changes. Use a card-specific owner to change card borders without unintentionally
changing input borders. Domain components such as invoice and project cards can
share a surface while retaining separate data, actions and state contracts.

Record the owner's scope: application-wide foundation, page family/domain,
component or local composition. Shared primitives and adopted tokens can span an
application; marketing headings, operational density and domain surfaces may have
separate family owners. Local placement and genuine one-off composition remain
local. Match the scope of the design decision rather than making all elements
with the same CSS property share one value.

## Style coverage

For an application-wide style/reuse audit, account for every family below and
add patterns specific to the product. This is a minimum discovery checklist,
not a requirement to add absent components or a universal visual treatment.
Focused changes use relevant families and affected dependencies only.

| Family | Repeated decisions to trace | Follow when relevant |
| --- | --- | --- |
| Foundations and typography | Semantic colors, font families and text roles, type scale/weight/leading, spacing/sizing, borders, radii, opacity, elevation, themes and density | [Visual details](visual-details.md), [interaction and accessibility](interaction-accessibility.md) |
| Layout | Shells, content widths, gutters, headers, sections, stacks/grids, responsive thresholds, container behavior, scrolling and sticky regions | [Mapping](mapping.md), [reuse and consistency](reuse-consistency.md) |
| Controls and forms | Buttons, links, inputs, selectors, labels, help/errors, control sizes and field composition | [Components](components.md), [interaction and accessibility](interaction-accessibility.md) |
| Navigation | Tabs, breadcrumbs, menus, sidebars, pagination and active-location indicators | [Interaction and accessibility](interaction-accessibility.md) |
| Surfaces and content | Cards, panels, dividers, grouped lists, table rows and prose/rich-text defaults, including generated or third-party content | [Reuse and consistency](reuse-consistency.md) |
| Feedback | Badges, alerts, toasts, progress/loading indicators, skeletons and empty/error/success states | [Interaction and accessibility](interaction-accessibility.md), [loading states](performance.md#skeletons-and-loading-states), [motion](motion.md) |
| Overlays and layering | Dialogs, drawers, popovers, tooltips, backdrops, stacking order/contexts, portal styles and clipping | [Components](components.md), [interaction and accessibility](interaction-accessibility.md) |
| Icons and data visuals | Icon sizes/strokes/alignment, avatars and media geometry by role, chart palettes/legends and numeric typography | [Imagery](imagery.md), [charts](charts.md), [visual details](visual-details.md) |
| Motion | Duration/easing tokens, transitions, enter/exit treatments and reduced-motion alternatives | [Motion](motion.md) |

Record one summary entry per family: **inspected**, **sampled**, **uninspected** or
**not applicable**, with source/evidence links and the reason for exclusions.
Ground not-applicable choices in the actual application inventory. Link detailed
pattern findings below each summary instead of repeating the same root cause
across families. Load the linked references for a material decision or finding;
the table does not require loading every reference for every audit.

Check each discovered pattern's relevant states: default, hover, focus-visible,
pressed/active, selected, expanded, disabled/read-only, pending/loading, invalid,
success and failure. Account for supported themes/brands, density, viewport and
container sizes, keyboard/touch, forced colors, reduced motion, zoom/text scaling,
long/localized content and directionality. Select meaningful combinations for
the real consumers; this is not a Cartesian-product test requirement.

Keep inspection depth separate from evidence type: source tracing can establish
ownership, while appearance and interaction claims need corresponding rendered
evidence. A complete audit report accounts for every family and names missing
inspection; it cannot claim comprehensive inspection while applicable families
remain uninspected. Report sampled states and environments explicitly.

## Audit the application

1. Establish [style coverage](#style-coverage), then find existing owners and
   actual consumers: component imports, template includes, shared styles, tokens,
   variant recipes and class-composition helpers.
   Follow the relevant [mapping](mapping.md) guidance when a map is needed.
2. Search the declared scope for competing implementations and bypasses: copied
   markup, repeated utility bundles, hardcoded shared values, CSS modules,
   selectors, inline styles and caller overrides. Search by semantic purpose and
   resolved properties as well as exact strings; class order and conditional
   composition can disguise the same recipe.
3. Trace candidates into their implementations and rendered roles. Compare
   behavior, accessibility, states, responsive/theme differences and runtime
   boundaries using [reuse and consistency](reuse-consistency.md). Classify an
   independent requirement as a variant or separate responsibility, rather than
   automatically treating every difference as drift.
4. Record each material gap with source locations, the existing or proposed
   owner and its scope, affected consumers, states/themes, overrides, intentional
   exceptions and correction.
   Distinguish inspected, sampled and uninspected coverage. Prioritize shared
   causes and widely copied defaults over isolated cosmetic similarities.

A compact inventory can use:

| Family/pattern | Owner, source and scope | Consumers, variants and bypasses | Gap/correction | Coverage and evidence |
| --- | --- | --- | --- | --- |

An absent component is not itself a defect. Explain which shared change currently
requires editing multiple independent implementations, or which caller prevents
an existing owner from controlling its intended consumers. For an audit-only
request, finish with findings, the migration order and verification gaps.

## Consolidate when implementation is requested

Choose the target from adopted contracts and required behavior. If existing
implementations disagree, resolve the difference before encoding a default;
frequency alone does not make one implementation authoritative. Keep a structural
consolidation visually and behaviorally equivalent unless a design change is also
requested. Making card borders removable does not itself request their removal.

Work in coherent pattern groups. Extend the existing owner or introduce the
smallest suitable component or recipe, then migrate every equivalent consumer
within the authorized scope. Replace copied defaults and conflicting overrides
with that owner and its explicit variants. Retain domain APIs, semantic markup,
focus behavior, event/data contracts and supported placement controls. Inspect
shared consumers outside the edit scope for impact and report dependencies that
prevent an isolated migration; do not silently redesign those surfaces.

Remove superseded styles, components and tokens only after checking remaining
callers, including public package exports and dynamic usages. An application-wide
migration is unfinished while intended consumers still use independent copies;
name any unresolved conflict or excluded consumer rather than stopping at a few
representative examples.

## Change a shared style

Use this path for requests such as changing card borders, heading typography,
field focus rings, navigation density, overlay layers or chart colors. A targeted
update needs its affected families, not a fresh application-wide audit.

1. Resolve the requested role, property and scope against the existing design
   contract and caller inventory. State which families, variants and themes are
   included and which intentional differences remain. Reuse known evidence;
   clarify only a material ambiguity that the request and source cannot resolve.
2. Trace the style from real consumers through wrappers, variants, semantic
   tokens/theme mappings and primitive values to its authoritative definition.
   Inspect conditional rules, inline styles, cascade/specificity and separately
   built surfaces that can override or miss it.
3. Change the narrowest shared owner matching the requested scope. For card
   corners, use the card owner or its existing role token; change a primitive
   radius scale only when the request covers every role consuming it. Reuse the
   existing component's utility recipe when sufficient. If consumers lack a
   common owner, consolidate them within the requested scope using the workflow
   above rather than applying the same patch independently in each page.
4. Keep common defaults inherited. Update included variant, state and theme
   definitions at their owners; remove conflicting caller overrides and copied
   values. Retain required interaction cues: removing decorative card borders
   still preserves focus, invalid/selected indicators and meaningful grouping.
   Preserve domain behavior and unrelated roles' appearance.
5. Verify the intended change on actual consumers and relevant states/themes,
   including representative unaffected roles sharing upstream tokens. Inspect
   resolved styles and layout consequences where relevant: typography can change
   wrapping, density can change hit areas and layer changes can affect overlays.
   Use the propagation and evidence checks below; retain the requested change
   while restoring any temporary diagnostic changes.
6. Update affected owner links, variants and examples in the existing pattern
   inventory. Report the changed owner, included consumers, deliberate exceptions
   and checks or remaining gaps so the next style request starts from that owner.

## Tailwind, when installed

Detect the installed major version and project conventions; these v4 mechanisms
do not imply upgrading a v3 project or replacing its design system.

- Prefer the existing framework component or template partial for reuse across
  files. Utilities authored once inside it already provide centralized styling.
  See [managing duplication](https://tailwindcss.com/docs/styling-with-utility-classes#managing-duplication).
- Reuse theme tokens. In v4, `@theme` defines tokens that generate utilities;
  ordinary CSS variables can hold values that need no generated utility.
  See [theme variables](https://tailwindcss.com/docs/theme).
- For shared appearance across different markup, `@layer components` can own a
  semantic class. `@apply` can bundle existing utilities there; direct CSS using
  theme variables also works. Use `@utility` when a custom class needs Tailwind
  modifiers such as `hover:` or `lg:`. See [custom styles](https://tailwindcss.com/docs/adding-custom-styles)
  and [directives](https://tailwindcss.com/docs/functions-and-directives).

For example, if a shared surface class fits the project:

```css
@layer components {
  .surface-card {
    @apply rounded-xl border shadow-sm;
  }
}
```

Values here are illustrative; use the project's adopted tokens and defaults.
Removing `border` here affects consumers that inherit this recipe, but a caller's
`border-2`, inline style or a variant's independent border can survive that change.
Audit those paths instead of assuming a shared class guarantees propagation.
Keep variant class names statically discoverable by Tailwind and follow the
installed version's rules for scoped styles and class generation.

## Verify propagation and keep ownership discoverable

Trace every intended consumer in the declared change scope to the selected
owner, including wrappers, conditional classes and variants. Re-run the relevant
searches to explain remaining copies and overrides. Use existing checks to cover
component contracts; render representative affected consumers across relevant
states, viewports and themes selected from the coverage matrix through the normal
inspection pass. Reuse the
[review](review.md) evidence rules rather than creating a second review loop.

Where feasible, temporarily change a shared property in an isolated preview or
scratch harness. Select a probe from the changed families: for example, card
borders, heading typography, field focus, overlay layering or chart palettes.
Confirm representative consumers inherit it, intended variants remain explicit
and unrelated controls retain their own design. Restore the probe before delivery
unless that design change was requested. If the probe cannot run, distinguish
source-traced propagation from rendered proof and name the remaining checks.

During an authorized migration, update the existing frontend map, component
documentation or project reuse guidance with family/role, owner paths and scope,
supported states/themes/variants and real examples. Make common update requests
traceable to their definition, such as where to change a form label or menu layer.
If none exists, add a compact pattern inventory in the repository's
normal documentation location, subject to its policy. Link to implementation
rather than copying token values or entire utility lists; follow
[mapping](mapping.md) for the destination and evidence shape.

Future interface work must find and consume these owners, extend real variation
points and verify affected consumers. Keep corrections within that task's scope;
an unrelated feature does not require repeating the application-wide audit.
Report owners established or reused, migrated consumers, intentional exceptions,
remaining gaps and checks actually performed. Claim application-wide adoption
only when the declared consumer inventory supports it.
