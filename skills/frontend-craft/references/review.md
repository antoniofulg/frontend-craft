# Interface review

Read for reviews of a page, component, flow, change, or consistency; also for
focused stress inspection of a component when requested or justified by a change.

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

Use the project's correctness/security/performance workflow for concerns outside
these lenses. Name a material concern and its owner rather than claiming a full
technical audit. If slowness matters, measure under stated conditions before
reporting a performance failure; keep lab and field evidence distinct.

## Stress a real component

Derive scenarios from its public inputs, slots, states and real consumers:

| Axis | Applicable examples |
| --- | --- |
| Content | Empty/long/unbreakable names, localization, missing optional media |
| Quantity | No items, one item, realistic large collection, no search matches |
| State | Selected, disabled, pending, denied, error/retry, repeated action |
| Container | Actual narrow/wide hosts, dense layout, nested scroll/overlay |
| Environment | Supported themes, zoom/text scaling, keyboard/touch, reduced motion |

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
