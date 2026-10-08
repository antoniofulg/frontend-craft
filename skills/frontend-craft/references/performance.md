# Performance evidence

Read for loading, responsiveness, layout-shift or motion-performance work. Scope
the investigation to the affected page and user action; use existing tooling.

## Identify the evidence

Separate real-user measurements (RUM/CrUX) from controlled local measurements.
Record field source, time window, page versus origin scope and device segment;
origin data does not prove a particular route is healthy. Missing field data is
unknown, not a pass. Local traces help reproduce causes and compare a change,
but cannot establish the experience of the real user population.

Core Web Vitals cover loading (LCP), interaction responsiveness (INP) and visual
stability (CLS). Interpret field results at the 75th percentile with appropriate
device segmentation. A navigation-only Lighthouse run has no real interactions;
its TBT is a diagnostic proxy, not an INP measurement. Check current definitions
and thresholds when making a compliance claim. See
[Web Vitals](https://web.dev/articles/vitals).

## Trace the cause

Reproduce the reported load or action and capture a browser performance trace.
Correlate the symptom with resource timing, long main-thread work, layout/paint,
shift sources or frames. Trace an expensive interval to its actual owner before
choosing a fix; bundle size or an animated property alone does not prove causality.
Use the selected interval, call tree and screenshots to support the diagnosis.
See [DevTools performance analysis](https://developer.chrome.com/docs/devtools/performance).

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
