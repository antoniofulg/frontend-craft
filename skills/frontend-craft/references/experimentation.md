# Commercial metrics and experimentation

Read when choosing metrics, prioritizing commercial hypotheses or assessing
results. Apply the objective and source terms in
[commercial strategy](commercial-strategy.md). Functional interface verification
and commercial outcome measurement answer different questions.

## Define the measurement

Choose one primary outcome for the decision, then the diagnostic and guardrail
metrics needed to interpret it. Define eligibility, event meaning, numerator,
denominator, time window and segmentation before comparing numbers.

| Decision | Candidate primary outcome | Necessary context |
| --- | --- | --- |
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
