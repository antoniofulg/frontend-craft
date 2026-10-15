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

Trace changed components into actual consumers, prioritizing those with affected
variants and states. Shared shells/tokens can warrant broader sampling. State
what was examined and what remained outside the inspected scope.

Read the removed and added sides of a diff. A lost focus cue or disabled state
may be a regression even when the final screenshot looks clean. Check for a
replacement elsewhere in the change before reporting the removal as a defect.

## Apply only relevant lenses

| Concern | Reference |
| --- | --- |
| Owner bypass, generic replacements, header/content drift | [reuse and consistency](reuse-consistency.md) |
| State ownership and component API | [components](components.md) |
| Controls, forms, layout, typography, color, feedback | [interaction and accessibility](interaction-accessibility.md) |
| Motion, timing, interruption and reduced motion | [motion](motion.md) |
| Public-page decision path | [landing pages](landing-pages.md) |
| Media selection, representation, provenance, crops and delivery | [imagery](imagery.md) |
| Commercial objective, audience, persuasion and growth priorities | [commercial strategy](commercial-strategy.md) |
| Business constraint, offer, sales process and full strategic audit | [growth and sales](growth-sales.md) |
| Commercial hierarchy, proof imagery, pricing emphasis and success feedback | [commercial visuals](commercial-visuals.md) |
| Purchase/lead completion, perceived effort and trust | [checkout and forms](checkout.md) |
| Dashboard decisions, context and role-specific actions | [dashboards](dashboards.md) |
| Feature scope, adoption and differentiation | [product strategy](product-strategy.md) |
| Audience fit, channels and sales motion | [positioning and distribution](positioning-distribution.md) |
| Defaults, framing, confidence and change resistance | [behavioral design](behavioral-design.md) |
| First useful result and onboarding abandonment | [activation](activation.md) |
| Plans, trial, checkout and upgrade decisions | [monetization](monetization.md) |
| Continued value, renewal and cancellation | [retention](retention.md) |
| Commercial metrics, causal claims and experiment design | [experimentation](experimentation.md) |
| Loading, responsiveness, shifts or measured smoothness | [performance](performance.md) |
| Nested geometry, font features, bidi and advanced color | [visual details](visual-details.md) |
| Chart encoding, truthful comparisons and data access | [charts](charts.md) |

Use the project's correctness/security/performance workflow for concerns outside
these lenses. Name a material concern and its owner rather than claiming a full
technical audit. If slowness matters, load the performance reference and measure
under stated conditions before reporting a performance failure.

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

- **Focus and hierarchy:** what receives attention first, and does that match
  the user's task? Check competing emphasis, readable type and useful actions.
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

## Consolidate findings

Each finding includes location, evidence, user consequence, and the smallest
correction. Reuse findings cite the existing owner and the competing usage.
Group symptoms sharing a cause; fix the shared source where appropriate.

Rank by impact: blocking a task, loss of essential access/information, or data
loss risk first; impaired comprehension/efficiency next; isolated polish last.
Distinguish contract violations from optional improvements and personal taste.
For a change review, classify introduced, regression and pre-existing issues;
keep unrelated pre-existing work out of the change verdict.

Return a compact report: inspected scope, prioritized findings, justified
differences, checks performed and gaps. Coverage can be verified, source-only,
or not inspected. A clean result means no confirmed findings in that scope,
not blanket product approval. Evidence collection failures are limitations,
not defects in the UI. Use the repository's report when one already exists.

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
