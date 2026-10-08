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

## React recipes, only for matching needs

### Coordinated parts: one state/action contract

When distant parts of an existing interaction need shared state, expose a small
contract from the narrowest shared owner. For a single parent and child, ordinary
props are usually sufficient. This illustrative controlled scope does not create
another state store or perform persistence:

```tsx
import { createContext, useContext, type ReactNode } from "react";

type Assignment = {
  state: { ownerId: string | null; pending: boolean };
  actions: { requestOwner: (ownerId: string | null) => void };
};

const AssignmentContext = createContext<Assignment | null>(null);

export function AssignmentScope({ value, children }: {
  value: Assignment;
  children: ReactNode;
}) {
  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
}

export function useAssignment() {
  const value = useContext(AssignmentContext);
  if (value === null) throw new Error("AssignmentScope is required");
  return value;
}
```

Feed it from the existing form/route owner; children compose the actual project
picker, summary and actions. `requestOwner` expresses intent, not proof of a saved
assignment. The owner retains authorization, pending protection, persistence and
failure/retry handling. Extend this example only for states real consumers need.
Keep context construction outside render, and distinguish a required provider
from a meaningful default. React 19 also supports `<AssignmentContext value={...}>`;
follow the installed version and project style. See [React context](https://react.dev/reference/react/createContext).

### Controlled values and modes

For a controlled picker, pair `ownerId` with a change/intent callback and derive
display from that value. Specify who commits changes and who resets a draft on
cancel. An uncontrolled component initializes from its default once; do not
silently switch ownership when a prop becomes undefined.

Use a discriminated mode when combinations can contradict each other, such as
`{ mode: "assign"; onAssign: ... }` versus `{ mode: "filter"; onFilter: ... }`.
Separate semantic variants can also work. Independent `disabled` or `required`
booleans do not need replacement merely to reduce their count. Prefer children
or existing slots for custom content before adding more mutually dependent flags.

### Ref boundary

Forward a ref to the actual focusable target when a consumer needs focus or
measurement. In React 19, a wrapper can accept `ref` as a prop:

```tsx
import type { ComponentPropsWithRef } from "react";

function FocusInput({ ref, ...props }: ComponentPropsWithRef<"input">) {
  return <input {...props} ref={ref} />;
}
```

React 18 wrappers use `forwardRef`; select the recipe for the installed version
instead of migrating the project. When the public contract should expose only
`focus()`, use `useImperativeHandle` around an internal DOM ref with correct
dependencies. Keep values/open state declarative rather than adding imperative
setters. Check ref ownership when composing library triggers so its ref is not
lost. See [React imperative handles](https://react.dev/reference/react/useImperativeHandle).

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
