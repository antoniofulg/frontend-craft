---
name: frontend-craft
description: Map an existing frontend, reuse its domain components and page patterns, and build or review consistent interfaces. Use for new sibling pages, UI changes, component reviews, and frontend mapping; complements Impeccable's design direction. Includes on-demand accessibility, motion, and landing-page guidance.
license: CC-BY-4.0
metadata:
  author: Antonio Fulgêncio
  version: "0.1.0"
---

# Frontend Craft

Make the next interface belong to the product. Discover how the project already
solves the user's task, reuse that implementation where it fits, and verify the
result against equivalent pages. Search by responsibility, not only component name.

## Resolve the request

Read applicable project instructions and the requested scope. Detect the actual
stack, component library, design contracts, and existing preview/check tools.
Use the repository's workflow; this skill introduces no release authority or
mandatory agent rounds. Tailwind and framework API manuals are outside its scope.

| Request | Read | Deliver |
| --- | --- | --- |
| Map the frontend or refresh its inventory | [mapping](references/mapping.md) | A source-linked map with explicit coverage |
| Plan, create, recreate, or change a page/component | [reuse and consistency](references/reuse-consistency.md) | Proposal or implementation grounded in matching precedents |
| Design or change a component API/state owner | [components](references/components.md) | The smallest compatible extension of the actual owner |
| Change controls, forms, feedback, layout adaptation, or keyboard behavior | [interaction and accessibility](references/interaction-accessibility.md) | Usable behavior in the relevant states and environments |
| Add, change, or review motion | [motion](references/motion.md) | Purposeful, interruptible movement or an intentional static response |
| Create or assess a marketing/landing page | [landing pages](references/landing-pages.md) | A page supporting the visitor's decision |
| Review a page, component, change, or consistency | [review](references/review.md) | Evidence-backed findings and verification limits |

Load only matching references. A heading correction needs the nearest page
precedents, not a whole-repository audit. An explicit review remains read-only
unless fixing is also requested. With no actionable target, ask for the page,
component, flow, or mapping scope instead of selecting an arbitrary last commit.

For planning-only requests, deliver the source-backed owners, intended composition,
necessary differences and unresolved decisions. Stop before editing or claiming
implementation checks passed; name the rendered checks needed for later execution.

## Before implementation

1. Identify the page family and user intention: for example, an operational
   list page and assigning a task owner. Locate any existing frontend map and
   follow its links; verify relevant entries against current source.
2. Trace the nearest matching pages into their real components, variants,
   tokens, and state owners. Search domain synonyms and usages as well as names.
   A generic select is not equivalent to a domain-specific assignee picker merely
   because both return an identifier.
3. Establish what carries over: shell, header composition, title styling,
   description policy, action placement, interaction, and applicable states.
   Prefer explicit adopted contracts; treat conflicting precedents as evidence
   to resolve, not permission to pick a new style.
4. Choose reuse, extension, or new implementation using the reuse reference.
   State the important choice briefly, naming the source and any real gap.
   New requirements can justify a difference; document its boundary.

Do not turn every task into initial mapping. Without a map, discover the narrow
slice needed now; create a durable map when mapping is requested. During authorized
implementation, update affected entries in an existing map as part of the change,
subject to repository documentation policy. Reviews do not silently rewrite it.

## With Impeccable

Let Impeccable own its context setup, design direction, and artifact lifecycle.
Read its applicable product/design/surface documents at the paths it resolves;
reuse its context and evidence rather than running its setup twice. This skill
adds implementation precedents and consistency checks, not another visual system.

Preserve an established family in ordinary creation/refinement. For an explicit
redesign, use the approved replacement direction and migration scope; keep domain
behavior and reuse compatible primitives, while reporting other affected consumers.
Do not impose the retired appearance on a redesign or redesign siblings unasked.

If Impeccable is unavailable, proceed from the project's existing contracts and
observed UI. Name missing design decisions; do not generate replacement Impeccable
files or claim its workflow ran. Installation alone does not ensure co-invocation:
the repository can route interface work to both skills in its own instructions.

## Before delivery

Compare changed interfaces with the selected precedents in corresponding states
and viewport/theme conditions. A shared import does not prove visual consistency:
inspect variant selection, wrapper composition, and local overrides too. Use the
relevant checks and existing browser workflow; reuse unchanged valid evidence.
Coordinate with Impeccable's inspection pass rather than adding a second polish loop.

Report the useful result: reused/extended owners, deliberate differences, checks
actually performed, and unresolved gaps. Source inspection supports source claims;
rendered behavior requires rendered evidence. Never report unvisited states as passed.

Provenance and adaptation boundaries: [sources](SOURCES.md).
