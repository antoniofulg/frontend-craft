# Performance evidence

Read for Core Web Vitals, loading, responsiveness, layout-shift or motion-performance work. Scope
the investigation to the affected page and user action; use existing tooling.

## Skeletons and loading states

Inspect the actual loaded component before designing its pending state. Separate
invariant UI from unresolved data: retain known headings, descriptions, labels,
icons, units, field frames, buttons, tabs and weekday labels. Mask only unresolved
numbers, prices, names, dates, media or genuinely unknown sections. A metric can
read `Reservations [value mask]` while its card and label remain. Data-dependent
copy, actions and sections stay unresolved until their conditions are known;
loading must preserve the existing permission-dependent visibility.

Use the [component owner](components.md#pending-and-ready-composition) for both
states. Keep already resolved names/media and the real missing/error fallback
when another value is pending. Unknown currency or units remain unresolved;
known units retain their place beside the amount.

### Match the smallest meaningful geometry

Reserve the loaded line, control, tile and media footprints from the first
render. Match actual height, line-height, padding, gaps, alignment, radius,
wrapping and responsive composition rather than approximating the outer card.
Use the loaded typography and sensible widths for unknown text lengths; a
fabricated final value is not a sizing contract. Unknown result counts and
wrapping can change total page height.

Inspect compact compositions explicitly: inline weekday/time tiles need inline
tile masks; reservation alternatives need the real compact item height; prices
retain amount/unit composition, including known `per month` and `per arena`
labels. Trace inherited styles as well as local classes: a broad descendant
`span` rule can shrink an inline mask inside a large price. Reported tile, price
or alternative mismatches remain open until their actual pending/ready bounds
and appearance are verified.

### Reserve now, paint deliberately

Reserve geometry immediately. If short requests would flash skeletons, delay
only their decorative paint using the project's configurable timing policy;
there is no universal delay or minimum loading duration. Render resolved data
as soon as available. Avoid loading→blank→content sequences and long reveal
animations. Reduced-motion mode removes decorative pulse/shimmer and movement;
keep a static loading indication. Follow [motion alternatives](motion.md#handle-interruption-and-alternatives)
for the remaining transition behavior.

During same-context refresh, retain matching resolved content and focus, with
busy/read-only behavior appropriate to its validity. Preserve context guards:
never retain stale data across tenant, identity, date, permission or query
boundaries. Keep existing offline, error and operational explanations visible
while they remain relevant. Pending action feedback belongs on its real control,
rather than replacing the action with a content skeleton. Announcements and pending-input
safety follow [interaction and accessibility](interaction-accessibility.md#loading-feedback).

### Verify the transition in the browser

Compare pending and ready element bounds, wrapping, overflow and screenshots at
representative mobile/desktop widths and supported locales. Cover short and
slow responses. Measure brief paint windows inside the browser, using its clock,
observers or animation frames as appropriate: test-runner round trips can consume
the entire decorative delay before a held response is released.

Wait for real readiness, such as resolved values and the required usable control
or completed media state. A retained heading/name no longer proves completion;
reacquire nodes that detach. When correcting waits, preserve existing submission,
denial, navigation, media and outcome assertions. Use the project's existing
checks for the affected states; this does not require a new workflow for a small
repair.

Label illustrative HTML with its actual basis, such as source-derived specimens
with synthetic data, and use semantic sample values. Do not present illustrations
as native product proof or historical captures. Preserve prior specimens when
updating a comparison, and keep their evidence limits distinct from browser
measurements.

## Identify the evidence

Separate real-user measurements (RUM/CrUX) from controlled local measurements.
Record field source, time window, page versus origin scope and device segment;
origin data does not prove a particular route is healthy. Missing field data is
unknown, not a pass. Local traces help reproduce causes and compare a change,
but cannot establish the experience of the real user population.

### Core Web Vitals

Use these good-experience targets, checked on 2026-10-20, at the 75th percentile
of field visits, evaluating mobile and desktop separately:

| Metric | Measures | Good target |
| --- | --- | --- |
| Largest Contentful Paint (LCP) | Loading of the largest eligible visible content element | ≤ 2.5 seconds |
| Interaction to Next Paint (INP) | Responsiveness of qualifying interactions | ≤ 200 milliseconds |
| Cumulative Layout Shift (CLS) | Unexpected visual instability | ≤ 0.1, unitless |

An overall good assessment requires all three targets for the relevant segment;
missing data is not a zero or a pass. Check current definitions and thresholds
when making a compliance claim. See [Web Vitals](https://web.dev/articles/vitals).
A navigation-only Lighthouse run has no real interactions; its TBT is a
diagnostic proxy, not an INP measurement. Reproduce actual user interactions
and post-load behavior, not only the initial navigation.

## Trace the cause

Reproduce the reported load or action and capture a browser performance trace.
Correlate the symptom with resource timing, long main-thread work, layout/paint,
shift sources or frames. Trace an expensive interval to its actual owner before
choosing a fix; bundle size or an animated property alone does not prove causality.
Use the selected interval, call tree and screenshots to support the diagnosis.
See [DevTools performance analysis](https://developer.chrome.com/docs/devtools/performance).

### Diagnose the affected metric

- **LCP:** identify the actual LCP element for the affected viewport/state;
  do not assume it is the hero image. Separate time to first byte, resource load
  delay, resource load duration and element render delay. Make the critical
  resource discoverable early, avoid lazy-loading the LCP image, and use preload
  or priority hints selectively when the waterfall supports them. Check server
  latency, render-blocking work and font/media delivery before assuming smaller
  image bytes alone fix the problem. See [optimize LCP](https://web.dev/articles/optimize-lcp).
- **INP:** reproduce slow clicks, taps and keyboard interactions during loading
  and normal use. Separate input delay, event-processing duration and presentation
  delay. Trace blocking work, expensive handlers and style/layout/paint costs;
  reduce or split the responsible work rather than automatically adding
  memoization or delaying every action. Time to the next paint does not prove
  that an asynchronous save or navigation has completed. See [optimize INP](https://web.dev/articles/optimize-inp).
- **CLS:** inspect shift clusters during loading, scrolling and later updates.
  The element that moved may be the victim of content inserted above it. Check
  media/embed dimensions, injected UI and font changes; reuse the
  [loading-state geometry contract](#match-the-smallest-meaningful-geometry).
  A clean initial-load trace does not establish stability over the page's life.
  See [optimize CLS](https://web.dev/articles/optimize-cls).

Choose corrections from the observed bottleneck and recheck the other metrics
and affected behavior. Faster loading must preserve indexable content, access
control and usable interactions; use [technical SEO](technical-seo.md#verify-useful-initial-html)
when a change affects public rendering. Keep project performance budgets distinct
from Google's field thresholds; do not impose perfect lab scores or a new
benchmark suite on every small fix.

### Large collections

Measure the real collection before adding virtualization or another dependency;
reuse suitable pagination or an installed owner where it meets the task.
Windowing can remove offscreen rows from the DOM. Check keyboard focus/editing
during recycling, variable heights and zoom, and whether required find-in-page,
printing and assistive-technology access remain useful. Supply an appropriate
search, print or paginated path where those capabilities otherwise disappear.

Partially rendered tables/grids need accurate logical counts and positions where
applicable, accounting for headers; unknown totals must not be invented. See
[WAI grid/table properties](https://www.w3.org/WAI/ARIA/apg/practices/grid-and-table-properties/).
Query and selection scope follow [collections](components.md#collections-sorting-and-selection);
public discovery follows [technical SEO](technical-seo.md#align-url-discovery-and-publication).

## Compare like with like

Record revision/build mode, browser/device, viewport, data/state, action sequence,
network/CPU settings and cold versus warm cache. Compare before/after using the
same conditions and metric. Use a representative production build for production
claims; keep profiling overhead and background activity comparable. Repeat enough
to see normal variation and report a median/range rather than the best run.

Return the observed symptom, trace-backed cause, scoped fix and comparable result.
Keep local improvement separate from later field validation. Recheck behavior and
accessibility affected by the fix. If runtime or field access is unavailable,
state the remaining hypothesis and the measurement needed; do not claim measured
improvement from source inspection. Installing telemetry or changing data
collection requires that scope to be part of the requested work.
