# Onboarding and activation

Read when improving first-run onboarding, empty states or the journey from
signup to useful product use. Apply the brief and reuse terms in
[commercial strategy](commercial-strategy.md); load
[interaction and accessibility](interaction-accessibility.md#onboarding-and-authentication)
when implementing or inspecting controls and recovery.
For empty-state composition, visible progress or first-result feedback, read
[commercial visuals](commercial-visuals.md#show-the-path-and-acknowledge-useful-progress).

## Define the first useful result

Describe an observable result the user came to obtain, and the event or evidence
that shows it happened. Account creation, tour completion and time spent are
intermediate activity unless they actually deliver that result. For collaborative
products, distinguish individual setup from the team's first useful outcome.

Define time-to-value with a start event, end event and eligible cohort. Report
how many users never reach the result as well as timing among those who do;
faster timing among a shrinking set of completers can conceal worse activation.

## Map effort and abandonment

Trace actual steps, fields, waits and dependencies between entry and first value.
Use available sessions, support evidence or funnel events; label a proposed
journey as a hypothesis when user evidence is absent. Compare the intended numbered journey with actual action order, timing, detours
and abandoned attempts from available sessions. Each divergence is a candidate
explanation to investigate. Check failure/recovery and the resumed journey as
well as the happy path.

Prioritize barriers using abandonment, affected volume, effort and consequence.
Investigate whether the barrier is confusion, unnecessary administration, missing
prerequisites or a mismatch between the promise and delivered value. The earliest
screen or largest percentage drop is not automatically the largest opportunity.

## Choose the next useful action

- An empty state should explain the result the user can obtain and provide an
  appropriate first action. Distinguish no data, no permission and loading errors.
- Use clearly labeled sample data or a reversible example when it helps users
  understand the destination before importing their own information. Separate
  demonstration content from actual account activity and commercial proof.
- Use a checklist for genuine dependencies, contextual help for unfamiliar
  actions, or a guided sequence when complexity warrants it. Let experienced
  users skip optional teaching without bypassing essential prerequisites.
- Ask an intent question when its answer changes the path or recommendation.
  Defer administrative fields that neither enable the immediate result nor
  satisfy a real requirement. Retain required security and compliance steps.
- Show progress from work actually completed. Acknowledge a meaningful result
  with feedback proportional to the effort; follow existing
  [motion guidance](motion.md) and reduced-motion preferences.

Qualification can justify effort when it improves fit or delivery. Explain the
tradeoff and measure qualified outcomes; neither minimum field count nor a
mandatory onboarding sequence is universally best. Route trial/card decisions
to [monetization](monetization.md#trials-and-checkout).

## Select a pattern for the audience and task

Use familiarity with the task and flow complexity as separate axes. Unfamiliar
users need explanation; familiar users need speed; complex or high-consequence
flows need structure regardless of experience. Combine only patterns that remove
an observed barrier:

| Pattern | Useful condition | Tradeoff to inspect |
| --- | --- | --- |
| Welcome modal or short video | Establish trust, orient the user and point to the first result | Easy to ignore; provide a direct action and text alternative, not mandatory viewing |
| Guided wizard or tour | Ordered setup, unfamiliar workflow or costly mistakes | Long tours delay use and need maintenance; guide real work |
| Contextual tooltip/help | Explain an unfamiliar control at the moment of use | Discoverability, keyboard access and obstruction of the task |
| Empty state | A data-dependent screen has no user content | Distinguish a first action from errors or missing permissions |
| Personalization | Roles or intents require different paths | Ask only questions whose answers actually change guidance |
| Checklist | Several prerequisites enable one useful result | Keep tasks bounded; explain dependencies and preserve progress |
| Goal setting | Recurring use serves a chosen objective | Let users choose a realistic cadence and revise missed goals |
| Sample data | Users need to see a populated destination before importing | Label examples and make replacement or reset clear |
| Use-case demo | Outputs are open-ended or exploration consumes costly resources | Show relevant potential without implying the demo is a user's result |

For unfamiliar, complex tasks, consider guided work plus a short checklist;
for familiar, complex tasks, expose prerequisites and contextual help without a
basic tour. For simple tasks, an empty state and direct action may suffice.
Treat these as starting choices, then verify actual comprehension and completion.

When choosing built-in guidance versus an external onboarding tool, compare time
to ship, experiment needs, engineering capacity, maintenance, data exposure and
control over the experience. Strategic or tightly integrated flows can justify
building; a reusable service can justify its cost when it accelerates learning.

## Sequence effort and recover interrupted trials

Start with a small action whose useful result is visible. Group related inputs,
remove fields retained only by habit, and move heavy setup after a demonstration
when the product permits it. State prerequisites honestly; a simulated result
is not completion of a required integration or approval. Prefer qualification
from relevant behavior when available; collect explicit intent or enterprise
requirements where they change fit, routing or delivery.

Give a trial an attainable outcome the user chooses, with milestones suited to
actual usage frequency. Recommend a plan from declared needs when useful, explain
why, and allow changes; a recommendation is not billing consent. Credit completed
work, including prior setup, rather than assigning fictional progress.

Distinguish users who cannot proceed from those interrupted by other work. Save
state, restore the next step and address the specific missing prerequisite. A
recovery message can describe real progress, remaining benefit and a direct
resume action; generic expiry warnings do not repair a blocked journey. Respect
notification preferences and authorization before sending any communication.

Cluster recurring setup tickets by task and language. Move answers, examples or
recovery controls to the place of confusion; retain human help for exceptions.
Measure resolution and successful use, not ticket suppression. Connect activation
investment to retained value and acquisition payback through
[retention](retention.md#connect-retention-to-acquisition-payback).

## Validate activation and continued value

Measure eligible users reaching first value within a defined window, time-to-value
and subsequent meaningful use. Segment by audience or acquisition source when
the available sample supports it. A behavior associated with retained customers
is a candidate activation signal, not proof that forcing it causes retention.

Use [experimentation](experimentation.md) to compare a changed sequence. Include
support load, completion failures and later retention where material. Specify
any recovery communication as a proposal unless sending it is authorized.
