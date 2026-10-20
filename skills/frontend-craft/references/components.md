# Component ownership and composition

Read when creating/extending a component API, moving UI state, or reviewing
component boundaries, async recovery or collection state. Apply framework details
only after detecting the stack.

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

## Pending and ready composition

Reuse the real domain composition and shared controls in both states. Prefer a
narrow loading prop or pending value slot at the existing owner over a separate
skeleton layout that approximates its internals. Loading policy and geometry
belong in [performance](performance.md#skeletons-and-loading-states).

Keep disabled inputs/selects in their actual labelled frame with an accessible
name and the normal affordances. Telephone fields retain their country selector
and number-input structure. Fixed buttons retain their label and dimensions;
disable them only while their existing prerequisites require it. Do not replace
a domain control with a generic box to represent pending data. Keep authority,
submission and pending-value protection with the existing state owner; follow
[loading feedback](interaction-accessibility.md#loading-feedback) for semantics.

## Async state and recovery

Apply to overlapping reads, writes or save recovery. Keep request lifecycle and
commit authority with the existing data/form owner; a pending prop does not
establish a second persistence owner.

Associate reads and mutation feedback with their resource, query and authorization
context. Only a completion that still belongs to the current view/request may
update its values, errors or pending state. Keep confirmed outcomes with their
actual resource owner. An older read's cleanup must not clear a newer request's busy
state. Cancel obsolete work where supported and reject obsolete completions;
debouncing alone does not establish response ordering. Refresh retention follows
[performance](performance.md#reserve-now-paint-deliberately).

Distinguish transport failure, validation/conflict rejection, confirmed success
and an unknown mutation outcome. Aborting or losing a response is not proof that
the server did not commit; client cancellation is not server undo. Check the
transport's response contract: Fetch can resolve normally for HTTP errors.
See [Fetch handling](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Guard repeated activation and keyboard submission at the existing action owner.
A disabled button alone cannot provide server duplicate protection. Retry a
potentially applied mutation through its documented idempotency or reconciliation
contract, rather than inventing a header or assuming resending POST is safe.
An uncertain save can require checking the authoritative result before another
attempt. See [HTTP retry semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2).
Verify duplicate protection through operation identity, unchanged retry payload
and authoritative effects; raw network-request counts alone do not prove that
the same logical action was committed twice.

Keep optimistic changes provisional. Reverse only the failed operation's change,
preserving newer edits and successful operations; otherwise reconcile with the
authoritative state and expose the conflict. Honor existing version/conditional
write checks. Preserve recoverable input; explanations and announcements follow
[interaction feedback](interaction-accessibility.md#trace-a-complete-interaction).
Add durable queues or automatic retries only when the product requires them.

## Collections, sorting and selection

Trace the existing query, URL and collection owner. Establish whether sorting
and filtering cover all matching records or only the loaded subset; sorting one
server page must not be presented as sorting the whole dataset. Define when
filter, ordering or page-size changes reset/revalidate the page or cursor, and
recover when deletion leaves the final page empty.

Use stable record identity for selection and row actions, not positions that
change after sorting or paging. Make selection scope explicit: visible rows,
current page, explicit records or all matching results. Show its count and a
clear path to deselect. Define persistence across page/query changes; selection
of all matches remains bound to its intended query and authority rather
than silently including new results. Bulk actions retain existing authorization
and recovery. These are product contracts, not a universal selection policy.

Request ordering and uncertain saves follow [async recovery](#async-state-and-recovery).
Use [table semantics](interaction-accessibility.md#tables-and-interactive-grids)
for accessible behavior, and [large collections](performance.md#large-collections)
when rendering cost warrants investigation.

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
