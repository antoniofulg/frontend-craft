# Shared UI patterns

Read to audit reuse gaps, consolidate duplicated components or styles, or migrate
an application to shared patterns. For ordinary feature work, use the ownership
contract when choosing or extending a shared owner; the full audit is conditional
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

## Audit the application

1. Find existing owners and actual consumers: component imports, template
   includes, shared styles, tokens, variant recipes and class-composition helpers.
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
   owner, affected consumers, overrides, intentional exceptions and correction.
   Distinguish inspected, sampled and uninspected coverage. Prioritize shared
   causes and widely copied defaults over isolated cosmetic similarities.

A compact inventory can use:

| Pattern | Owner and source | Consumers and bypasses | Variants/exceptions | Correction | Coverage |
| --- | --- | --- | --- | --- | --- |

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

Trace every intended consumer in the declared migration scope to the selected
owner, including wrappers, conditional classes and variants. Re-run the relevant
searches to explain remaining copies and overrides. Use existing checks to cover
component contracts; render representative affected consumers across relevant
states, viewports and themes through the normal inspection pass. Reuse the
[review](review.md) evidence rules rather than creating a second review loop.

Where feasible, temporarily change a shared property in an isolated preview or
scratch harness: for example, remove the base card border or change its radius.
Confirm representative consumers inherit it, intended variants remain explicit
and unrelated controls retain their own design. Restore the probe before delivery
unless that design change was requested. If the probe cannot run, distinguish
source-traced propagation from rendered proof and name the remaining checks.

During an authorized migration, update the existing frontend map, component
documentation or project reuse guidance with owner paths, supported variants and
real examples. If none exists, add a compact pattern inventory in the repository's
normal documentation location, subject to its policy. Link to implementation
rather than copying token values or entire utility lists; follow
[mapping](mapping.md) for the destination and evidence shape.

Future interface work must find and consume these owners, extend real variation
points and verify affected consumers. Keep corrections within that task's scope;
an unrelated feature does not require repeating the application-wide audit.
Report owners established or reused, migrated consumers, intentional exceptions,
remaining gaps and checks actually performed. Claim application-wide adoption
only when the declared consumer inventory supports it.
