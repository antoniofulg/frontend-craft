# Frontend map

Read when mapping the frontend, updating affected map entries, or resolving a
missing/stale precedent that blocks a specific interface task.

## Find the scope and destination

Locate existing UI inventories, design contracts, stories, route definitions,
shared components, styles, and relevant Impeccable context. Extend an existing
map rather than adding a second one. If none exists and mapping was requested,
use the project's documentation directory, defaulting to `docs/frontend-map.md`.
Honor any repository-specific permission for documentation destinations.

For an initial map, inventory first-party route groups and shells, then inspect
representative pages for each discovered family. Trace the named/high-value use
cases in depth. Record which families were inspected, sampled, or not inspected;
a representative sample is not a repository-wide consistency verdict.

For ordinary implementation, inspect only the relevant family, use case, and
shared consumers. Refresh entries whose sources or conclusions changed. A move
or deletion invalidates a link; elapsed time alone does not invalidate a pattern.

## Discover in three layers

| Layer | What to establish | Evidence to retain |
| --- | --- | --- |
| Page family | Purpose, shell, header, content structure, action placement, density | Routes, actual page/composition files, representative rendered states |
| User intention | Entry point, action, state transitions, persistence/feedback/recovery | Component and state owner, consumers, relevant handler/data contract |
| Shared pattern | Semantic role, API/variants, tokens, content policy, keyboard/touch behavior | Source symbols, examples/stories, design contract pointers |

Follow imports into implementations. Search synonyms from domain terminology,
labels, routes, and event handlers. Record a responsibility such as “assign a task
owner” even if its component is named `MemberCombobox` rather than `AssigneePicker`.
Do not infer equivalent behavior solely from matching markup or return types.

For headers, record whether a description is required, optional for a specific
reason, or omitted in that family. Inspect the component's API and callers:
an optional description prop does not authorize adding one to every new page.
Link title tokens/classes and action slots rather than copying CSS values.

For workflows, trace the states that can occur: initial, searching/loading,
selected, pending save, success, empty, denied, failure, retry or cancellation.
Keep only applicable states and note who owns each transition. Distinguish
display state from server-authoritative state; never copy business policy into
the map. Preserve existing accessible names and interaction conventions.

## Record evidence and authority separately

Label evidence as source-observed, rendered-observed, derived, or inferred.
Include source paths/symbols and, for rendered observations, route, state,
viewport, theme and capture/interaction evidence. Identify the inspected revision
and any relevant dirty files. Do not store customer records or private screenshots
in reusable examples. Use synthetic content for reproducible inspection.

Label the pattern as adopted (explicit contract/design decision), observed
(consistent inspected usage), variant (difference with an established reason),
or conflicted. A measured style is evidence of current behavior, not proof that
it is the intended standard. Prefer explicit current decisions over an isolated
page. Neither file age nor number of copies makes a pattern authoritative.

If examples conflict, inspect their family, requirement, and governing contract.
Record legitimate exceptions with their trigger. If evidence cannot resolve a
choice that changes the requested output, ask that narrow question; continue
independent discovery. Do not normalize the entire product as a side effect.

## Compact document shape

Use these sections in the chosen map; omit irrelevant fields rather than
inventing evidence. Split by family only when the map becomes expensive to read.

```markdown
# Frontend map

Scope: inspected families, sampled routes, and exclusions.
Checked against: revision and relevant working-tree changes.
Contracts: links to design, product terminology, tokens, and runtime instructions.

## Page families
| Family | Reference routes/files | Shell/header owner | Description policy | Actions | Status |

## Use cases
| Intention and synonyms | Entry/consumer | Component and state owner | Transitions/recovery | Variants | Evidence |

## Shared patterns
| Pattern | Source symbol/file | Usage examples | Tokens/contract links | Status and exceptions |

## Gaps and conflicts
What remains unknown, affected decisions, and evidence needed to resolve them.
```

The map is complete for its declared scope when each inspected family and named
use case has a traceable owner or an explicit gap, relevant states are accounted
for, and a later agent can find the actual implementation from the links.
Do not duplicate token tables, full APIs, code, or Impeccable's design narrative.
