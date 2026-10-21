# Performance audit procedure

Read for browser/network audits or production-bundle investigations. Use the
[performance guide](performance.md) for field versus lab evidence, metric
diagnosis and comparable before/after measurements. Follow only the branches
needed for the affected page and action.

## Discover capabilities and limits

Discover the available browser, tracing, network and build-analysis tools from
the current environment. Inspect their actual schemas and returned data rather
than assuming a tool name, parameter, insight identifier or installed analyzer.
Determine whether they can record navigation and interactions, retrieve a
completed trace, enumerate insights, list requests and inspect request details.
Use existing repository scripts and build reports for source/bundle analysis.

Record unavailable capabilities and what they prevent measuring. Without traces,
continue useful network or source inspection while labeling causal hypotheses.
Without runtime access, do not claim measured timings or delivered cache behavior.
Without source/build access, omit bundle-internal conclusions and state the gap.
Tool discovery does not authorize installations, configuration changes or telemetry.

## Record and inspect a trace

Establish the [comparison conditions](performance.md#compare-like-with-like)
before capture. Navigate to the target URL and verify the expected page, viewport,
authentication and data state. Record the reported navigation or interaction,
including relevant post-load work. A reload alone does not establish a cold
cache: account for browser caches, service workers and the actual cache settings.

Wait for recording completion, or stop and retrieve the trace as the available
tool requires. Retain the trace artifact or identifier and its navigation/time
range. If capture is empty or fails, verify page readiness and capture scope
before retrying; report persistent failures as missing evidence.

Discover the insight sets, identifiers and names returned by this trace. Select
the set for the affected navigation and inspect relevant loading, responsiveness,
layout, blocking-work and dependency insights. If an insight is unavailable,
inspect the underlying timeline and request data where possible. A missing insight
is not evidence that the page has no issue.

Connect each finding to its interval, event, element, request or source owner.
Treat reported savings as estimates for this capture, not measured improvement;
do not sum overlapping estimates. A zero estimate can reflect rounding, scope or
a model limitation. Investigate when independent timing, interaction or repeat-run
evidence supports an issue; deprioritize unsupported opportunities rather than
rejecting every zero estimate or recommending every warning.

## Inspect requests and delivery

List requests for the recorded navigation and action, following pagination and
filters so the relevant document, scripts, styles, fonts, media and data requests
are covered. Inspect individual requests for URL/origin, initiator, priority,
timing, status, cache/service-worker source, headers and available sizes. Retain
request identifiers so findings can be checked against the same capture.

### Request chains and blocking work

Follow initiators from the document to the delayed critical resource: redirects,
stylesheet imports, font discovery, script-driven media and dependent data fetches
can extend the chain. Locate discovery delay, connection/server wait, transfer and
subsequent main-thread work. Confirm the chain delays the affected render or action
before proposing flattening, earlier discovery or deferred work. Blocking behavior
depends on resource type, placement and execution semantics, not a missing
attribute alone.

### Caching, compression and sizes

Inspect actual response cache policy, validators and revalidation behavior on
cold and repeat visits. Relate freshness and invalidation to the resource's
versioning and content contract; a missing validator alone is not a cache defect.
Account for browser, service-worker and intermediary caches. Preserve private and
authorization-dependent response boundaries when proposing cache changes.

Compare encoded response-body bytes, decoded bytes and transferred bytes using the
tool's definitions. Transfer size can include protocol overhead; cached responses,
revalidation and cross-origin timing restrictions can report zero or hide sizes.
Distinguish unknown values from small payloads. Check negotiated content encoding
and actual production responses for compressible text. A compressed build artifact
does not prove the server or CDN serves it; already compressed media may gain little.
Separate transfer savings from parse, compile and execution costs.

### Resource hints

Compare preload, preconnect, DNS and priority hints with actual critical requests
and the waterfall. Check that resource URLs, type, credentials and responsive
selection match consumption; mismatches can waste work or cause duplicate fetches.
Add or change a hint only for an evidenced discovery or connection delay and
recheck contention with other critical work. An origin unused in one recording
is a candidate for removal, not proof across other routes, consent states or
interactions. Verify the intended usage scope before removing a hint.

## Inspect production bundles

With repository access, identify the framework, bundler, production build command
and actual output/configuration. Use an existing analyzer, manifest, source map or
build report where available. Keep development-server output separate from a
representative production build; report when a build cannot be produced or mapped
to the deployed revision. Inspect delivered minification and compression separately.

- **Bundle composition:** map route entries, shared chunks and expensive dependencies
  to delivered requests and trace work. Distinguish initial versus deferred bytes
  and raw versus encoded sizes. Use project budgets and device/network evidence;
  there is no universal bundle-size limit.
- **Code splitting:** check eager and dynamic imports, shared-chunk duplication,
  prefetch/preload behavior and route boundaries. Verify a supposedly deferred
  chunk is not immediately fetched by another import. Balance initial work against
  added interaction latency and request waterfalls.
- **Tree shaking and unused code:** inspect production output, module format,
  export use, side-effect declarations, broad imports and retained CSS. Source
  syntax or a barrel import alone does not prove failed elimination. Coverage
  from one page/action does not prove code is globally unused. Verify relevant
  routes, states and required side effects before removal or configuration changes.
- **Browser targets and polyfills:** compare declared support with transpilation
  targets, injected helpers, runtime/polyfill imports and duplicate compatibility
  code in emitted chunks. Reduce only work unnecessary for supported browsers;
  preserve the support contract and verify affected behavior.

Use current official documentation when a finding requires version-specific
configuration. Source maps and build reports help attribution; their presence
alone does not establish a performance defect.

## Report and verify

Return prioritized findings with page/action, observed evidence, causal confidence,
estimated impact where available, source/request/trace references and a scoped
correction or next measurement. Separate observed failures from hypotheses and
inapplicable checks. State runtime, field, source and tool coverage limits.

For authorized fixes, apply the performance guide's
[comparison procedure](performance.md#compare-like-with-like). Reuse
[interaction and accessibility verification](interaction-accessibility.md#verification)
for affected behavior; a tree snapshot alone cannot prove contrast, focus or
screen-reader behavior. Keep field follow-up distinct from local results.
