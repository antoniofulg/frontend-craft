# Interface and commercial review

Read for reviews of a page, component, flow, change, or consistency; also for
focused stress inspection of a component when requested or justified by a change.
For standalone strategy, offer or sales reviews, use commercial findings below
and [growth and sales](growth-sales.md); component tracing and rendering apply
only when an interface is part of the requested scope.

## Resolve the unit

Identify the named page/component/flow or exact change range. Use the project's
established change-scope rules; include relevant working-tree edits explicitly.
Do not silently choose the last commit or expand a page review into a whole-repo
audit. A missing target requires a small clarification, not a fabricated verdict.

Before choosing review criteria, discover and read available project surface,
product and design guidance, including an existing onboarding philosophy when
onboarding is in scope. Follow actual project links/paths and reuse context
already established, including Impeccable's resolved documents; do not repeat
setup, require a nonexistent document or invent its location. Use adopted
constraints to assess the surface, and label material gaps or conflicts.

Trace changed components into actual consumers, prioritizing those with affected
variants and states. Shared shells/tokens can warrant broader sampling. State
what was examined and what remained outside the inspected scope.

Classify each inspected region by its job: acquisition (a visitor who is not yet
a customer), repeated work (a task done daily), reading (docs, help, long-form)
or trust (money, permissions, identity or destructive actions). Classify by
region, not file: a billing row inside a listing is a trust region. Emphasis and
persuasion suited to acquisition slow repeated work and bury reading content;
density suited to repeated work can under-explain a trust decision. Repeated-work
surfaces keep their established kit unless a redesign was requested. For each element in scope, name what it helps the user understand,
decide, do or recover from, or the business result it affects. An element that
names nothing is a removal candidate under
[content restraint](interaction-accessibility.md#content-restraint).

Read the removed and added sides of a diff. A lost focus cue or disabled state
may be a regression even when the final screenshot looks clean. Check for a
replacement elsewhere in the change before reporting the removal as a defect.

## Apply only relevant lenses

Select cumulatively: identify every named surface/journey, then every requested
review lens, and read each matching reference below. Generic review is not a
substitute for a surface owner. Landing-page and onboarding reviews always use
their respective surface rows; visual/conversion and commercial lenses add their
overlays. A mixed review covers both surfaces and all requested lenses.
Cumulative means covering applicable routes, not reading every reference in full.
Follow further pointers when their conditions apply; broaden when a finding
exposes another relevant contract.
Narrow heading, copy, motion or control repairs use only affected contracts;
they do not trigger a whole-funnel audit or unrelated market, roadmap or retention
guidance.

| Concern | Reference |
| --- | --- |
| Owner bypass, generic replacements, header/content drift or journey handoff/return inconsistency | [reuse and consistency](reuse-consistency.md) |
| Style-family coverage, duplicated appearance, shared style updates or state/theme bypasses | [shared UI patterns](shared-ui-patterns.md) |
| State ownership and component API | [components](components.md) |
| Request races, mutation uncertainty, optimistic rollback or actual undo | [async recovery](components.md#async-state-and-recovery), [undo](components.md#undo-and-reversibility) when offered |
| Table semantics, query scope, paging and bulk selection | [collections](components.md#collections-sorting-and-selection), then its applicable behavior routes |
| Controls, forms, layout, typography, color, feedback or blocked/limit states | [interaction and accessibility](interaction-accessibility.md) |
| Redundant copy, duplicated feedback or unnecessary controls | [content restraint](interaction-accessibility.md#content-restraint) |
| History, drafts and restored-page freshness | [navigation resilience](interaction-accessibility.md#navigation-and-draft-resilience) |
| Localized amounts/messages and calendar/time-zone values | [locale-sensitive values](interaction-accessibility.md#locale-sensitive-values-and-messages) |
| Motion, timing, interruption and reduced motion | [motion](motion.md) |
| Landing-page review: visitor decision path, including visual-only reviews | [landing pages](landing-pages.md) |
| Marketing wording, brand voice, naturalness or stale commercial copy | [marketing copy](landing-pages.md#write-edit-and-refresh-marketing-copy) |
| Public indexing, SSR content, metadata, canonical/discovery URLs and response policies | [technical SEO and discovery](technical-seo.md) |
| Media selection, representation, provenance, crops and delivery | [imagery](imagery.md) |
| Commercial review or objective, audience, persuasion and growth priorities | [commercial strategy](commercial-strategy.md) |
| Business constraint, offer, sales process and full strategic audit | [growth and sales](growth-sales.md) |
| Visual/conversion review of landing pages or onboarding; commercial hierarchy, proof imagery, pricing emphasis and success feedback | [commercial visuals](commercial-visuals.md) |
| Purchase/lead completion, perceived effort, trust or payment outcome recovery | [checkout and forms](checkout.md) |
| Dashboard decisions, context and role-specific actions | [dashboards](dashboards.md) |
| Feature scope, adoption and differentiation | [product strategy](product-strategy.md) |
| Audience fit, channels and sales motion | [positioning and distribution](positioning-distribution.md) |
| Defaults, framing, confidence, halo effect, cognitive load/fluency, peak-end, change resistance or service-recovery claims | [behavioral design](behavioral-design.md) |
| Onboarding review: first-useful-result philosophy, guidance/pattern choice and path to value, even without analytics | [activation](activation.md) |
| Plans, trial, checkout and upgrade decisions | [monetization](monetization.md) |
| Continued value, renewal and cancellation | [retention](retention.md) |
| Commercial metrics, causal claims and experiment design | [experimentation](experimentation.md) |
| Revenue/pipeline definitions, attribution, CRM quality or PQL scoring | [GTM measurement](gtm-measurement.md) |
| Enrichment, sales handoffs, revenue workflows or GTM agents | [GTM automation](gtm-automation.md) |
| Loading, responsiveness, shifts, measured smoothness, request delivery or production bundles | [performance](performance.md), including its optional audit procedure |
| Skeleton fidelity and pending/ready geometry | [loading states](performance.md#skeletons-and-loading-states) |
| Nested geometry, font features, bidi and advanced color | [visual details](visual-details.md) |
| Chart encoding, truthful comparisons and data access | [charts](charts.md) |

Use the project's correctness/security/performance workflow for concerns outside
these lenses. Name a material concern and its owner rather than claiming a full
technical audit. If slowness matters, load the performance reference and measure
under stated conditions before reporting a performance failure.

If the project workflow delegates review, pass the exact slice, applicable
constraints and relevant surface/lens file paths and sections, with readable
content or access. Use the host's actual inheritance behavior; supply missing
context rather than assuming the parent's reads transfer. Reviewers return
source-linked findings and inspection gaps, not just a completed task label.
The coordinator checks combined coverage of every requested surface/lens and
reports evidence gaps. Delegation is optional, not a required review round.

## Stress a real component

Derive scenarios from its public inputs, slots, states and real consumers:

| Axis | Applicable examples |
| --- | --- |
| Content | Empty/long/unbreakable names, localization, missing optional media |
| Quantity | No items, one item, realistic large collection, no search matches |
| State | Selected, disabled, pending, denied, error/retry, repeated action |
| Container | Actual narrow/wide hosts, dense layout, nested scroll/overlay |
| Environment | Supported themes, forced colors, zoom/text scaling, keyboard/touch, reduced motion |

Select relevant axes, not their Cartesian product. Render the actual imported
component with synthetic realistic data in the project's fonts, tokens and
providers. Use existing stories/preview/test facilities first. Container width
does not substitute for viewport tests when media queries change behavior.

A read-only review must not add routes or fixtures to the user's working tree.
When a scratch harness is authorized, import the real component but use isolated
fixture data; production entrypoints must never import the harness. Track its
lifecycle and remove it afterward unless retention was requested. Do not leave
servers or temporary pages running silently.

Inspect rendered scenarios and report actual breaks. A source-only prediction
is a risk to verify, not an observed overflow or successful keyboard journey.

## Critique the rendered composition

For page creation, visual refinement or a visual review, inspect screenshots of
the actual rendered page through the existing browser/Impeccable pass. Include
the opening view and the relevant full-page or scroll-position views at a wide
and narrow viewport; include intermediate widths where the layout changes.
Use project-supported sizes, states, themes and representative content. A
screenshot alone cannot verify focus order, destinations, submission or motion;
exercise relevant behavior separately. If fresh rendering is unavailable, inspect
supplied screenshots and report their viewport/state and freshness limits. Keep
conclusions conditional where actual rendered evidence is missing.

Choose the questions relevant to the surface:

- **Existence:** if this element or screen were removed, who would notice and
  what would they do instead? An element that exists because data was available,
  rather than because a decision needs it, is a removal candidate. When the honest
  finding is that a screen should be merged or removed, report that instead of
  polishing it.
- **Focus and hierarchy:** is the first impression coherent with the audience,
  promise and approved direction, and does initial attention match the user's
  task? Check competing emphasis, readable type and useful actions; apparent
  polish does not establish trustworthiness or product quality.
- **Content restraint:** how much interpretation is needed to understand the
  result, relationships and next action? Does each message or control add needed
  meaning? Apply [content restraint](interaction-accessibility.md#content-restraint)
  and preserve context, accessible feedback and recovery; fewer elements alone
  do not prove lower cognitive effort.
  For claimed fluency/usability benefits, identify the audience and distinguish
  [perception, performance and recall](behavioral-design.md#separate-perception-performance-and-recall);
  a rating or screenshot alone does not establish improved task performance.
- **Alignment and grouping:** do shared edges, spacing and proximity express
  actual relationships, including around removed elements?
- **Substance and rhythm:** does each section answer a needed question with
  enough content or evidence? Inspect both repetitive template blocks and empty
  regions created by removing decoration. Deliberate whitespace is not a defect.
- **Identity:** for public pages, does the subject-specific concept survive
  beyond the hero? Use the [specificity test](landing-pages.md#ground-the-visual-concept-in-the-subject)
  when direction is in scope; consistent operational layouts need not be novel.
- **Media and typography:** inspect relevant crops, actual loaded fonts, wrapping,
  legibility and labels. Use [imagery](imagery.md) when asset decisions are involved.
  Use [visual details](visual-details.md#display-typography-and-optical-alignment)
  when display spacing or optical alignment needs refinement.
- **Adaptation and collisions:** check mobile reading order, sticky regions,
  zoom/long text, horizontal clipping and intermediate scroll positions. Check
  missing media and disabled/reduced motion when they can hide essential content.
  Measure horizontal overflow on the document, not one element, at the narrowest
  supported viewport after fonts load, and again after each fix; a clipping parent
  can hide an element's overflow or cut its text. Check every supported theme,
  especially the one the team uses least.
- **Measurement validity:** confirm the measured state before trusting a result.
  Read the viewport width from the page, not the tool's resize response; wait
  for a hydration signal from the app rather than `readyState`; compare the
  element count with the page opened by hand, because a driver timeout can return
  a partial page without error. Zero findings with no content is a failed
  measurement, not a clean screen.
- **Data truth:** render the best and worst real records, not only empty or
  ideal fixtures, and run data-backed views with requests failing. A failed
  request painted as zero or empty is indistinguishable from a real zero; a zero
  denominator shown as `0%` claims a measurement that does not exist.

For a journey review, inspect the relevant high-effort/high-salience moments,
useful outcome and ending: is the result real, acknowledged and usable, and is
the next step clear? Use [recovery verification](#verify-a-recovery-path) when
interruptions or failures are in scope. Screenshots support composition
observations, not successful completion, users' remembered experience or a
peak-end effect; those need interaction and, for claims about users,
behavioral/research evidence.

For each material issue, name the screenshot, viewport/state, visible consequence
and concrete correction in the existing finding format. Diagnose rendering
causes in source after observing the result; implementation intent cannot cancel
a visible defect. Distinguish broken access or an adopted contract from a taste
preference. Aesthetic scores and counts of ornaments are not usability or sales
evidence, and generic no-gradient/no-border rules do not override the brief.

When implementation is authorized, fix the highest-consequence causes first,
normally the top three material issues from the pass, then inspect affected
states again. Coordinate with the existing polish loop; do not start a second
one. Stop when the relevant issues are resolved or only optional preferences
remain. Limit open-ended aesthetic iteration to three rounds; report material
issues still unresolved, without treating the limit as a pass. A read-only review
ends with findings and does not enter the fix loop.

## Check generated-interface defaults

These defaults recur in generated and template interfaces. They pass linters
because they are decisions, not syntax. A match is a finding to confirm at its
source and in the rendered state, not an automatic defect: approved direction, a
marketing piece, an overlay on imagery or a contrast reference can justify the
exception. Record that reason beside the code or in the finding.

| Default | Consequence | Prefer |
| --- | --- | --- |
| Hover that scales a card, tile or button | Reads as template motion; the enlarged box can cover neighbors and ignores reduced motion | A color, border or shadow change inside the existing box |
| Hover growth over neighboring content | Hover runs over text instead of revealing | Reserve the space at rest and grow inside it |
| Best state (glow, preview, open menu) only on hover | Absent on touch, keyboard and screenshots | Render the useful state at rest; hover intensifies it |
| Text arrows (`→`) or hand-drawn SVG as interface icons | Glyphs drift with font metrics and have no weight or size control | The project's icon library |
| Transitions of all properties | Animates layout and properties nobody chose | List the animated properties; timing follows [motion](motion.md) |
| Blur or translucency on ordinary cards | Compositing cost with nothing behind to read through | A solid surface token; keep blur for overlays on content |
| Emphasis token used for hover, borders or chrome | Emphasis becomes noise; check the token's role first | The neutral hover/border role from [shared owners](shared-ui-patterns.md#ownership-contract) |
| Fixed `active`/`highlighted` value in an item factory | Every item lights up, so none stands out | Derive it from the real state; one highlight per region |
| Every figure in its own hue | No color means anything | Neutral values; color only for real exceptions such as overdue or over limit |
| Monospace for currency or ordinary numbers | Reads as a terminal; clashes with the type system | Tabular figures in the body font; monospace for IDs and code |
| Spinner that collapses its container | Layout jumps; nothing to read while waiting | [Loading states](performance.md#skeletons-and-loading-states) that keep the structure |
| Two entry points for the same data on one screen | Users pick by chance when they write to different places | One entry point, or labels that state the difference |
| Non-wrapping label in an overlay inside a clipping parent | Text is cut, often only once fonts load | Constrain its width and let it wrap |
| Clickable element without a pointer cursor | A CSS reset removed the affordance | One rule in the shared owner for interactive roles |
| Title, intro and label repeating the page chrome | The page explains itself instead of showing content | [Content restraint](interaction-accessibility.md#content-restraint) |
| Showcase in a fake frame, with "hover me" captions or stacked variations | The explanation hides the piece | One piece large and centered, with a quiet selector |
| Badges or pills on every card | Labels stop meaning anything | A badge only when it filters or changes a decision |
| Dividers between blocks that spacing already separates | Visual noise doing spacing's job | Space and alignment; lines for tables and dense lists |
| Four or more opacity steps of one color in a block | Hierarchy by transparency is an untokenized color | Two or three text roles from the tokens |

Public pages have their own decorative defaults; see
[landing pages](landing-pages.md#question-generated-marketing-defaults).

## Verify a recovery path

When changing or reviewing a recovery path, exercise the relevant interruption
or failure through correction, safe retry/reconciliation or
[undo](components.md#undo-and-reversibility) to the confirmed outcome and resumed
useful task using existing approved facilities. Check retained input, newer work,
duplicate effects and the return destination where applicable. Follow the
[async contract](components.md#async-state-and-recovery) and, for payments,
[outcome recovery](checkout.md#recover-the-payment-outcome).

Require evidence of the actual effect and accessible outcome feedback.
Screenshots establish presentation and source inspection establishes source
facts; a fixture establishes only the behavior exercised, not authoritative
service restoration. If the service remains unavailable or its outcome cannot
be established safely, report the last verified state and unresolved dependency,
not a recovery pass. Use appropriate existing escalation for unresolved cases.
Outage relief or a celebratory error animation is not restoration.

For a recovery-benefit claim, distinguish improvement over the failed state,
restoration of a prior level and outperformance of an error-free comparison.
Name the comparison supported by evidence and include unresolved/repeated
failures rather than selecting only successfully recovered users; apply
[behavioral measurement](behavioral-design.md#separate-perception-performance-and-recall).

## Consolidate findings

Each finding includes location, evidence, user consequence, and the smallest
correction. Reuse findings cite the existing owner and the competing usage.
Group symptoms sharing a cause; fix the shared source where appropriate.
For a large target, rank shared shells, primitives and containers by consumers
affected times findings before fixing pages: one wrong owner produces many
identical leaf findings that point at the wrong file.

Rank by impact: blocking a task, loss of essential access/information, or data
loss risk first; impaired comprehension/efficiency next; isolated polish last.
Distinguish contract violations from optional improvements and personal taste.
For a change review, classify introduced, regression and pre-existing issues;
keep unrelated pre-existing work out of the change verdict.

Return a compact report: inspected scope, briefly identified applied guidance,
prioritized findings, justified differences, checks performed and gaps, including
uninspected scope. Coverage can be verified, source-only, or not inspected. A
clean result means no confirmed findings in that scope, not blanket product
approval. Evidence collection failures are limitations, not defects in the UI.
Use the repository's report when one already exists; no separate guidance ledger
is needed.

Review alone does not authorize fixes. When fixes are requested, repair the
owning cause, recheck failing states and relevant consumers, and update affected
map entries. Avoid another audit of unchanged surfaces without a causal reason.

## Commercial findings

For a strategy, sales, offer, landing-page or commercial-flow review, read
[commercial strategy](commercial-strategy.md) and the relevant specialty.
Lead with the intended outcome, audience and inspected business evidence or path.
Present one prioritized report with the relevant business and interface findings.
Each actionable item contains:

- **Location and evidence:** the segment, offer, channel, sales stage, element
  or step, observed problem and source;
  label source-only or uninspected behavior explicitly.
- **Commercial consequence:** how the barrier could affect qualified demand,
  activation, purchase or retained revenue; distinguish inference from measured loss.
- **Concrete change:** a specific correction or variant and why it addresses
  this audience's barrier. Respect actual claims, terms and implementation scope.
- **Priority and effort:** affected volume when known, consequence, evidence
  strength and implementation effort. Explain the order without invented lift
  percentages or numerical scoring unsupported by inputs.
- **Validation:** a success metric and suitable observation, research or
  experiment; add functional checks when an interface or implementation is affected.

Surface access and task blockers first; rank remaining opportunities against the
commercial objective. Separate observed defects, hypotheses to test and optional
polish. Missing analytics limits commercial certainty but does not block a useful
review. End with what to do first and the material evidence still missing, rather
than presenting a generic checklist or claiming an aesthetic change will sell more.
