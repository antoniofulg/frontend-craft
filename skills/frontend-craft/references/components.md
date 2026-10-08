# Component ownership and composition

Read when creating/extending a component API, moving UI state, or reviewing
component boundaries. Apply framework details only after detecting the stack.

## Preserve the domain interaction

Trace the component's consumers, public props/slots, value model, event contract,
and state transitions. The owner selector may include search, avatars, team
membership, current-value display, permissions and clear behavior. Replacing it
with a primitive can lose these even when saving the selected ID still works.

Use the existing domain owner over a generic control when the responsibility
matches. Extend its documented variation point instead of copying its internals.
Inspect the component library actually installed; do not assume its underlying
primitive library from its visual style or a familiar file name.

## Keep the smallest useful API

- Keep state with the narrowest owner that coordinates its real consumers.
  Derive display values where possible; avoid a second copy that can diverge.
- Use explicit variants when modes have distinct contracts. A few independent
  flags can be appropriate; replace combinations that allow contradictory states.
- Compose content through the project's normal children/slots mechanism. Use
  compound components or context only when consumers need coordinated parts.
- Keep data access and domain enforcement with their established owners.
  A presentational component should not secretly acquire persistence authority.
- Preserve stable item identity, selection, focus and pending state across
  filtering, sorting, rerenders and responsive layout changes.
- Respect controlled/uncontrolled usage already supported. Define reset,
  cancellation and submission behavior before adding another state source.

For React, consult current version-specific documentation only for API choices
actually needed. Do not introduce providers, memoization, framework migrations
or server/client boundary changes as an automatic consequence of this skill.

## Shared changes

Trace direct consumers and expand where composition or shared tokens propagate
the change. Compare relevant variants and affected states, including existing
callers that omit newly optional props. Keep adapters only where the consuming
project's policy allows them; follow its compatibility policy.

Use existing primitive semantics and focus management for dialogs, menus,
comboboxes and popovers. Styling a container like a control does not supply its
interaction contract. Prefer native elements where they satisfy the established
product behavior, without downgrading a working domain interaction.

Use the existing component stories, browser scenarios and owning tests to check
public behavior. Validate the capability changed, not exact internal markup or
an arbitrary abstraction count. A new component must have an actual caller and
a responsibility that existing owners could not appropriately fulfill.
