# GTM measurement and revenue operations

Read for sales-pipeline metrics, revenue reporting, attribution, CRM data health,
product-qualified leads or commercial operating reviews. Use
[experimentation](experimentation.md) for outcome definitions, cohorts and causal
validation; [pricing economics](pricing-economics.md) owns acquisition payback and
delivery costs. Read only the sections needed for the decision.

## Establish the measurement contract

Recover the sales motion, pricing model, stage, buying cycle, existing CRM,
billing/product data, reporting tools and accountable operators. Reuse the
[commercial brief](commercial-strategy.md#establish-the-outcome); ask only for
inputs that change the requested decision. A spreadsheet can support an early
commercial review; a warehouse or new analytics installation is not a prerequisite.

For each selected measure, record its decision, owner, source of truth, entity
and eligibility, event/stage definition, numerator, denominator, currency/unit,
time window, timezone, freshness and exclusions. Distinguish a period's activity,
an entry cohort's eventual outcome and a current pipeline snapshot. Keep actual,
forecast and target values separate. Version changed definitions and explain
whether history was restated; do not splice incompatible series silently.

## Reconcile data before interpreting it

Trace source records through collection, identity matching, transformations and
reports. Use stable account, contact, opportunity, subscription and event IDs;
multiple contacts or touches do not create multiple opportunities or customers.
Define merge precedence and keep ambiguous identity matches unresolved for review.
Reconcile billing movements to subscription records and pipeline totals to the
same CRM snapshot; joins must not multiply revenue or inflate stage counts.

Check required-field completeness, sampled accuracy, recency and format/stage
consistency separately. Inspect duplicates, late events, missing stage timestamps,
deleted/merged records, currency changes, failed syncs and timezone boundaries.
Show affected counts and segments, not only one blended data-health percentage.
Any aggregate health score needs explicit weights and validation; a high score
cannot compensate for missing identities or unreliable revenue amounts.

When reports disagree, compare definitions, identity scope, event versus processing
time, refund/churn timing, filters and attribution windows before selecting a
winner. Name the owner of each repair. Refresh volatile fields when their use
requires it; do not impose one age limit on contact data, firmographics and intent.
Leave unsupported comparisons unavailable rather than treating missing data as zero.

## Revenue, efficiency and pipeline measures

Select measures for the actual motion. Definitions below are explicit reporting
conventions, not universal accounting policy or performance targets. Reconcile
them with the organization's contracts and reporting basis before calculating.
Use unavailable for a zero/invalid denominator; a negative growth denominator
can make an efficiency ratio uninterpretable rather than exceptionally healthy.

| Measure | Calculation or interpretation contract |
| --- | --- |
| MRR and ARR | Normalize eligible recurring subscriptions to a monthly basis; ARR can be 12 × MRR on that basis. Separate recurring run rate, bookings, recognized revenue and cash receipts; document discounts, tax, refunds and usage treatment. |
| Net new recurring revenue | New business + expansion + reactivation − contraction − churn over the same interval. Keep reactivation separate if reported outside this bridge; never omit contraction or count a movement twice. |
| Growth rate | (Closing value − opening value) / opening value for comparable periods and definitions; separate acquisition, expansion and retention contributions. |
| Expansion share | Expansion divided by a declared base, such as gross additions; label the base. Net new revenue can be zero or negative and is a different denominator. |
| Revenue latency and sales cycle | Time from the defined first signal or opportunity stage to the defined outcome. Report distributions and still-open/lost cases; wins alone can conceal slow or abandoned deals. |
| CAC and CAC payback | Match acquisition/sales costs to acquired paying cohorts and their delay. Use [payback](pricing-economics.md#evaluate-free-access-as-an-acquisition-investment) with consistent monthly contribution; cash payback and modeled contribution payback differ. |
| LTV:CAC | Cohort contribution value / comparable acquisition cost. State the value horizon and extrapolation; short histories do not establish customer lifetime. |
| Sales efficiency or Magic Number | Under a common convention, 4 × the change in quarterly recurring revenue / prior-quarter sales and marketing spend. State revenue basis and lag; do not annualize an ARR change a second time. |
| Burn multiple and runway | Net cash burn / net new ARR over the stated interval is one burn-multiple convention. Keep cash versus run-rate units explicit; explain financing, nonpositive growth and changing spend. Runway follows [business-model measures](experimentation.md#read-the-business-model-behind-the-metric). |
| Pipeline coverage | Eligible open opportunity value / remaining target for the same closing horizon, currency and segment. Declare exclusions and whether amounts are probability weighted. |
| Pipeline velocity | Opportunity count × mean deal amount × assumed win rate / cycle days is a throughput proxy. Align the population and units; a snapshot-based estimate is not booked revenue. |
| Win rate and stage conversion | Define entrants, wins, losses, no-decisions and open cases within a cohort/window. Open deals are censored, not automatic losses or invisible exclusions. |
| Pipeline per rep and quota attainment | Declare eligible owners, capacity, quota period and credit allocation; shared ownership must not double count deals. |
| Slippage and stalled deals | Freeze the cohort expected to close in a period, then measure pushed dates against that base. Separate postponement, loss and missing updates; inspect time in stage and next commitments. |
| NRR, GRR and logo churn | NRR follows [the existing cohort definition](experimentation.md#define-the-measurement). GRR = (starting recurring revenue − contraction − churn) / starting revenue, excluding expansion/new business. Logo churn = lost eligible customers / starting eligible customers. State reactivation and pause treatment. |
| Time to first value | Define the start and real useful-result event. Report non-completers and observation windows alongside time among completers; setup completion is not necessarily delivered value. |
| Referral or viral coefficient | Invitations per eligible referrer × accepted new users per invitation is one referral coefficient. Declare the cycle, identity/deduplication rules and eventual useful/paid outcomes; invitation volume alone is not growth quality. |

For recurring-revenue movement taxonomy, see
[ChartMogul's movement definitions](https://help.chartmogul.com/article/157-chart-net-mrr-movements).
Vendor reports can net movements differently; retain the declared local convention.

For a pipeline forecast, freeze opportunity amount, stage, expected close date and
eligibility at the forecast date. Use calibrated segment/stage assumptions and
historical slippage to build scenarios; compare forecasts with eventual outcomes.
A top-down volume × conversion × deal-value model also needs conversion delays
and sensitivity to correlated assumptions. Forecast bookings, receipts and revenue
on their own timing bases; a weighted pipeline total is not guaranteed cash.

## Match funnels and qualification to the motion

| Motion | Trace | Useful diagnostics |
| --- | --- | --- |
| Self-service/product-led | Eligible visit, signup, first value, repeated use, payment and expansion | Product-qualified conversion, activation time, meaningful adoption breadth/depth and qualified referrals. Use the product's natural cadence. |
| Assisted sales | Signal, contact, response, qualified opportunity, evaluation, proposal, decision, payment and first value | Qualified replies, held meetings versus bookings/no-shows, deal value, stage time, losses and owner capacity. Follow [assisted buying](growth-sales.md#improve-the-assisted-buying-process). |
| Agent-assisted sales | Eligible signal, automated research/qualification, accepted human handoff, held meeting and paid outcome | False qualification, missed eligible leads, overrides, unsafe actions, latency and total cost per accepted opportunity. Bot activity is not buyer intent. |
| Hybrid or partner | Product use or referred demand plus the actual human buying path | Deduplicate shared accounts, declare partner/source credit and distinguish assisted conversion from what would have happened in self-service. |

A marketing-qualified lead reflects the declared marketing criteria; a
product-qualified lead reflects relevant demonstrated product value plus fit.
Neither label proves buying authority, consent or readiness. Separate fit
(company, role, integration/job match), usage/value and intent signals. Explain
their provenance, freshness, missing values and disqualifiers. Downloads, opens
and repeat page views may include bots or privacy effects; they are weak evidence
for a sales commitment.

Start with interpretable rules when data is sparse. Any weighted or learned score
needs calibrated thresholds, outcome labels, review of false positives/negatives
and segment drift. Validate against held meetings, paid outcomes and retained
value rather than replies alone. Preserve a self-service/nurture path appropriate
to the user's eligibility; scoring never overrides an opt-out. Handoff and sequence
behavior follow [automation](gtm-automation.md#qualification-routing-and-handoffs).

## Measure AI and usage-based economics

Track inference, compute, enrichment, retries, failed work, human review and
support at the same account/task and period scope. Separate cost per attempted
action from cost per accepted useful outcome. Task success, corrections and time
to a useful result can matter more than sessions or time spent. Verify claimed
time savings against a defined baseline rather than treating shorter sessions as proof.

AI cost share = included AI delivery cost / revenue; contribution after AI must
include each delivery cost once. If inference already sits in cost of revenue,
subtracting it again understates margin. Track expensive usage segments and
uncapped/free-user liability using [pricing economics](pricing-economics.md).

For usage pricing, separate contracted commitments, actual consumption, unused
commitment, overages and uncommitted usage run rate. Annualizing one usage month
is a scenario, not necessarily contracted ARR. Inspect unit contribution, demand
variability and seat versus usage expansion within comparable cohorts.

Attributed revenue / automation cost is a revenue-to-cost ratio, not profit ROI
or proof of incremental return. For ROI, use incremental contribution net of the
investment, divided by that investment, with explicit assumptions and uncertainty.
Measure [automation costs](gtm-automation.md#control-cost-per-useful-outcome) and
commercial outcomes together before calling a cheaper workflow more efficient.

Track human review effort and human/agent workload alongside accepted outcomes.
More automated activity is not useful leverage if correction work or rejected
handoffs consume the saved time.

## Attribution and causal limits

Record the conversion entity/event, eligible touches, channel taxonomy, identity
resolution, lookback window, reporting date and model version. Keep sourced
pipeline, influenced pipeline and credited revenue distinct; adding their totals
can count the same deal repeatedly. Record AI involvement alongside actual channel,
campaign, sequence and message version rather than replacing every source with AI.

| Model | Credit rule and limitation |
| --- | --- |
| First or last eligible touch | Credits the opening or closing recorded touch; omits other recorded contributions. |
| Linear | Shares credit across eligible touches; assumes equal value. |
| U-shaped or W-shaped | Weights selected milestones such as first touch, lead creation and opportunity creation; define milestones, residual allocation and weights explicitly. |
| Time decay | Favors recent touches; state the decay rule and sensitivity to longer buying cycles. |
| Learned/data-driven | Learns from observed paths; inspect coverage, training population, stability and explainability. Volume alone does not establish model validity or causality. |
| Product-touch | Credits defined product experiences; reconcile product users with purchasing accounts and the assisted journey. |

Choose a model for the decision and available data, not an ARR band. Compare
alternative models on identical records when the allocation could change a budget
decision. Choose lookback from observed conversion delays and the question; label
unobserved earlier touches, offline interactions and late conversions. Optional
self-reported discovery can supplement incomplete tracking, but recollection is
another imperfect source, not a replacement for the event history.

Attribution allocates credit under assumptions. Incrementality asks what would
have happened without the intervention. Use the existing
[experiment contract](experimentation.md#choose-validation-appropriate-to-the-evidence)
for causal claims. Google's explanations of
[attribution credit](https://support.google.com/analytics/answer/17300792?hl=en)
and [incremental versus attributed conversions](https://support.google.com/google-ads/answer/14102450?hl=en)
illustrate that distinction; this guide does not require those services.

## Reviews, dashboards and decisions

Use [dashboards](dashboards.md) for role-based hierarchy, truthful states and
accessible drilldowns. A board/founder view may emphasize revenue, retention,
capital efficiency and runway; an executive view can show segment/channel and
pipeline movement; an operator view needs queues, exceptions, handoffs and repairs.
Select the smallest set supporting each role's decisions, with no fixed card count.

Choose a CRM-native report, spreadsheet or BI/warehouse view by data access,
freshness, traceability, audience permissions, drilldowns and operator capacity.
Verify current tool capabilities for a concrete choice; a new dashboard platform
does not resolve inconsistent source definitions.

Pair candidate leading signals with downstream outcomes and guardrails. Pipeline
creation may precede revenue; activation may precede retention. Verify that
relationship for this product instead of enforcing a leading/lagging ratio or
automatically increasing spend after one signal declines.

Choose review timing from decision frequency, sales-cycle delay, data freshness
and team capacity. Reuse the existing meeting/report owner. A recurring review
can examine comparable trends, changes in pipeline, stalled deals, data failures
and prior actions, then assign a decision, owner, due date and next check.
Longer-horizon reviews can revisit retention cohorts, channel economics, ICP,
scoring and attribution assumptions. Sparse data does not become reliable by
meeting more frequently.

Return the requested metric specification, reconciled report, scorecard or
dashboard proposal with definitions, source freshness, actual versus target,
uncertainty and an actionable next decision. A scorecard can include current and
prior comparable values, a useful rolling baseline, local target, owner and
follow-up; manual evidence is acceptable when its provenance and limits are clear.
Investigate a worsening metric through its components and cohorts before naming
a cause. Benchmark only against a dated source with matching definition, stage,
motion, region and sample; universal growth, margin, response-time or conversion
targets are not substitutes for the product's evidence.
