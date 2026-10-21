# Dashboards that guide decisions

Read when creating or reviewing an operational dashboard, report, KPI overview
or analytics home. Apply objective, audience and source terms from
[commercial strategy](commercial-strategy.md). Read [charts](charts.md) when
choosing or changing data encodings; this reference owns the decisions the
screen supports, while charts owns faithful representation.

For commercial pipeline, revenue, attribution or data-health definitions, use
[GTM measurement](gtm-measurement.md); for revenue-operation queues and workflow
monitors, also use [internal revenue tools](gtm-automation.md#apply-the-pattern-to-the-actual-motion).
Keep the role and interaction guidance here as the interface owner.

## Choose the role and recurring task

Identify who opens the screen, their important problems, decisions and available
actions, and the value the product can deliver for each. A founder's financial
review and an operator's next task need different defaults. Recover actual
usage and role requirements before adding personalization; permissions still
bound every role's data and actions.

Select the smallest indicator set that supports those decisions. Candidate
families include commerce conversion, order value, cart abandonment and
acquisition return; SaaS revenue, retention, acquisition cost and revenue per
account; or app activity, retention, acquisition cost and user feedback. These
are options, not a checklist to render in full. Metric definitions, denominators,
periods and data availability determine whether comparisons are meaningful.

For each component, answer: what decision changes because this is here? Move
rarely needed detail to a reachable drilldown. Keep audit, diagnostic and expert
workflows accessible even when the overview becomes simpler.

## Turn data into context and action

Pair the relevant number with a meaningful baseline: target, prior comparable
period or a valid peer group. Label time range, freshness and incomplete data.
A percentile needs a defined comparison population; an increase is not always
positive. Distinguish a measured change from a proposed explanation. Never label
a channel the cause of growth solely because both rose together.

Where a problem is actionable, place a relevant next step nearby: inspect overdue
invoices, review failing deliveries or resolve a setup problem. Show enough
reason and consequence for the user to judge the action. A recommendation based
on uncertain data should expose that uncertainty. If a needed capability is
paid, apply [monetization](monetization.md) for a contextual upgrade rather than
turning every warning into an offer.

Group by business context, such as sales or support, rather than by chart type.
Give the task's principal signal prominence through size, position, contrast and
space; choose placement from reading direction, device and workflow. Top-left
and F-pattern prescriptions are layout hypotheses, not universal coordinates.
Remove redundant decoration, nested tabs and competing emphasis when they obscure
the signal. Make the selected period and active filters obvious.

Use precision appropriate to the decision. Compact numbers can help scanning,
but retain units, currency and sign, and provide exact values where reconciliation,
financial decisions or export require them. Rounding must not hide a material
threshold crossing or make two different values appear equal.

## Give every data state a useful path

Distinguish no activity, no results under a filter, loading, unavailable data and
an error. Explain how to obtain a useful result or recover, with one relevant
next action. Label sample data so it cannot be mistaken for account performance;
use [activation](activation.md) for first-value setup.

Acknowledge achieved goals accurately and show the next useful action. Use humane
recovery language when a task fails; celebrations and humor must fit the user's
stakes and the product's voice. Apply [motion](motion.md) if feedback animates.

## Verify usefulness

Ask a representative user what changed, why it matters and what they would do
next. Compare time and accuracy for the intended task, successful follow-through,
and recurring value. A return visit or a new card alone does not demonstrate
retention improvement; evaluate commercial effects with
[experimentation](experimentation.md) when that evidence is available.

Check realistic extremes, sparse data, permission differences, mobile order,
filters, drilldowns and action destinations. Use
[commercial findings](review.md#commercial-findings) to distinguish visible
hierarchy problems, verified interaction failures and untested retention claims.
