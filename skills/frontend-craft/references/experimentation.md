# Commercial metrics and experimentation

Read when choosing metrics, prioritizing commercial hypotheses or assessing
results. Apply the objective and source terms in
[commercial strategy](commercial-strategy.md). Functional interface verification
and commercial outcome measurement answer different questions.

For revenue/pipeline measures, CRM reconciliation, attribution models,
qualification scores or operating reviews, read [GTM measurement](gtm-measurement.md).
It extends this evidence contract; it does not turn attributed credit or a
workflow success rate into causal proof of revenue improvement.

## Define the measurement

Choose one primary outcome for the decision, then the diagnostic and guardrail
metrics needed to interpret it. Define eligibility, event meaning, numerator,
denominator, time window and segmentation before comparing numbers.

| Decision | Candidate primary outcome | Necessary context |
| --- | --- | --- |
| Audience, offer or channel test | Paying customers or contribution per reached/eligible prospect | Comparable reach, qualification, acquisition/sales cost and observation window |
| Assisted sales process | Won and paid qualified opportunities in a defined cohort | Stage conversion, no-decision/loss reasons, sales cycle, deal value and sales effort |
| Landing-page or lead-form improvement | Qualified opportunities or paid customers per eligible visitor | Source/intent, qualification rule, completed downstream action |
| Onboarding change | Eligible accounts reaching first value within a defined window | Time-to-value, non-completers and repeated useful use |
| Pricing or checkout change | Revenue per eligible visitor/account over a stated window | Paid conversion, plan mix, refunds and relevant delivery costs |
| Upgrade offer | Incremental revenue per eligible account | Exposure, retained use, downgrades and interruptions |
| Retention intervention | Retained customers or revenue in a comparable cohort | Voluntary versus billing churn, pauses and later cancellation |

For net revenue retention, use starting recurring revenue plus expansion minus
contraction and churn, divided by that same starting revenue. Exclude revenue
from newly acquired customers. Keep currencies, intervals and cohort definitions
consistent; annualized recurring revenue is not cash already received.

Prefer observed cohort value over a confident lifetime-value estimate from a
short history. If modeling future value, show the horizon and assumptions about
retention, margin and price. External benchmarks and case-study lifts are context,
not a forecast or universal threshold for this product.

## Read the business model behind the metric

Use only the measures relevant to the decision; request missing inputs before
presenting an economic estimate as fact.

| Measure | What to inspect before prescribing a commercial or product change |
| --- | --- |
| Recurring revenue (MRR/ARR) | Revenue scale, billing interval and cohort; growth can coexist with weak retention or margin |
| Acquisition cost (CAC) | Comparable spend scope and acquired paying cohort; cheap signups can conceal expensive qualified customers |
| DAU/MAU or use frequency | The product's natural use cadence and value-delivering action; a monthly task should not be judged against daily-use expectations |
| Retention, churn and NRR | Cohort, interval, voluntary/billing causes and expansion; cancellation alone does not diagnose product fit |
| Customer value (LTV) | Observed revenue and contribution over time, with explicit extrapolation and retention assumptions |
| Gross margin | Revenue minus included delivery costs, divided by revenue; identify usage/support costs and keep cost definitions consistent |
| Burn and runway | Cash use, cash available and expected changes; flat net burn supports only an approximate runway estimate |

To translate churn into consequences, show cohort retention over the chosen
horizon and the revenue/contribution lost under stated prices and costs. For a
constant churn scenario, remaining customers after n periods are initial customers
× (1 − churn)^n; this is an assumption, not a prediction. Include acquisition,
expansion and changing churn separately when modeling the business. A churn-point
change is not automatically the same percentage of added cash or LTV.

Estimate the cost of an interface barrier only with a defensible affected volume,
conversion/value assumption and uncertainty range. Include avoidable support or
manual work when relevant. ARR, CAC, margin and runway have no universal healthy
threshold independent of the model, stage and cohort.

## Validate demand beyond signup and waitlist size

Track eligible visitors → signup/invitation → first value → repeated useful use →
payment where applicable. Choose retention windows from the task's natural cadence;
report event definitions and the starting cohort, rather than ambiguous D1/D7 labels.
Paid traffic can raise registrations without improving activation or retention.

For a waitlist, record audience fit, source, stated problem, invitation eligibility,
response and subsequent activation/payment. Compare paying customers per invited
eligible lead by cohort. Count projected customers as scenarios using an explicit
conversion assumption, never as realized sales. Interviews, demonstrated commitment
and payment provide different strengths of demand evidence; list size alone does
not establish willingness to pay. Avoid imported conversion-rate benchmarks.

## Choose engagement mechanics from the target behavior

Model how acquisition, activation, continued use, reactivation and churn affect the
outcome before borrowing a leaderboard or streak. Select the behavior that delivers
value at this product's cadence and the eligible cohort likely to benefit.

- **Missions or challenges:** give a meaningful task a start, completion condition
  and useful result; assess quality and sustained use after the challenge ends.
- **Progress:** show a real trajectory toward a user goal; check whether it helps
  users finish useful work rather than merely accumulate clicks.
- **Competition:** if appropriate to the audience, compare similar experience or
  opportunity levels, with understandable participation controls; watch exclusion,
  gaming and discouragement alongside engagement.
- **Earned capability:** unlock an insight when enough real data exists to make it
  useful, explaining that prerequisite. Avoid arbitrary task quotas hiding a
  capability that is already usable.

Specify the behavior metric and downstream value/retention guardrails before
implementation. Higher time spent or daily activity can indicate friction;
verify successful outcomes. Published gamification wins and mechanics counts are
examples, not evidence that this product needs gamification.

## Form a falsifiable proposal

State: for this audience and barrier, changing this element should affect this
outcome because of this mechanism. Name the evidence supporting the barrier,
what would weaken the hypothesis, and material downside metrics. Use the
[review finding format](review.md#commercial-findings) when reviewing; avoid
an extra experiment ledger for a single recommendation.

Rank opportunities by affected volume, consequence, evidence strength and effort.
Use qualitative priority when data cannot support an impact estimate. A visible
usability defect and a commercial hypothesis can support the same proposal,
but they have different certainty. Do not manufacture lift percentages or precise
scores from a screenshot.

## Choose validation appropriate to the evidence

For a controlled experiment, define the assignment unit, eligibility, primary
outcome, baseline, meaningful effect, sample needs, duration and decision rule
before interpreting the result. Account for team-level interactions when assigning
accounts/users. Check exposure logging and event consistency; duplicated conversions
or changing denominators can reverse a conclusion.

Use a suitable statistical method and its stopping rule; do not stop a fixed-horizon
test when a favorable number first appears. Include enough observation time for
the promised outcome and material delayed effects. Avoid pooling incompatible
traffic or billing cohorts to create an apparent win.

When traffic cannot support a useful experiment, use task observation, interviews,
support evidence or a limited pilot. State what that evidence can establish. A
before/after comparison can be useful but remains confounded by changes in audience,
seasonality, pricing and acquisition. Missing data is a limitation, not a reason
to withhold concrete usability findings.

## Close the loop

Report what changed, the measured result and uncertainty, guardrail outcomes,
and whether to keep, revise, revert or continue observing. Passing mobile,
keyboard and form checks establishes functioning UI, not increased revenue.
When outcome data is unavailable, deliver the validation plan and leave commercial
impact unmeasured. Use existing analytics where authorized; a recommendation does
not authorize installing trackers, changing consent or launching a live test.
