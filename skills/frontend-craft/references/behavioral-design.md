# Behavioral design and research blind spots

Read when a task involves user behavior, defaults, progress, reciprocity,
customization, loss framing, price contrast, choice overload, change resistance,
novice confusion, first-impression spillover, task mental demand, processing
fluency, remembered experience or post-failure satisfaction/service-recovery claims.
Generic frontend work does not require this reference. Use the commercial brief
already recovered;
[commercial strategy](commercial-strategy.md) owns that brief and the applicable
[source terms](../licenses/revenue-centric-design.txt). Existing commercial guidance
adapts Richard's principles curated in Revenue-Centric Design; the user-behavior
additions and research provenance are recorded in [sources](../SOURCES.md).

## Verify the barrier before choosing a mechanism

Product experts cannot reliably simulate a first encounter. Observe representative
newcomers attempting the task without teaching labels or steering them toward the
expected answer. Compare their interpretation, hesitation and outcome with the
team's assumptions. Sample experienced users separately when evaluating a redesign.

Cluster support questions by frequency, affected audience, consequence and proposed
investigation. Use existing authorized session evidence, interviews and task
observation to explain friction; heatmaps identify attention, not intent or cause.
Competitor patterns suggest alternatives to investigate, not proof of effectiveness.
Dogfooding catches defects but cannot substitute for a newcomer observation.

## Select a mechanism with a measurable consequence

Use these as candidate explanations and experiments, not guaranteed effects.
Select a mechanism for an observed decision barrier, not a checklist of biases
to insert into every interface. State the user benefit, proposed change, truthful
product basis, success measure and trust/recovery guardrail. The interface
applications below are authored hypotheses, not findings tested by the cited
research or promises of conversion lift.

### User behavior and decision-making

| Principle | When and how to apply | Boundary | Verify |
| --- | --- | --- | --- |
| **Smart defaults** — a preselection can reduce effort and signal a recommendation | Repeated low-risk setup where confirmed context or a saved preference supports the choice; prefill the team's known timezone or a relevant template | Keep the value visible, editable and reversible. Use active choice when a wrong assumption has material cost, privacy or security consequences; a default is not consent to marketing, extra sharing or paid add-ons | Check valid completion, corrections and wrong-value submissions, not just default acceptance; inspect full financial consequences where relevant |
| **Goal-gradient effect** — perceived proximity to a meaningful goal can motivate continued effort | Show completed milestones and the remaining path to first value; credit an account or import step that actually succeeded | Keep setup completion distinct from achieved value. A head start must identify real completed work or a genuine disclosed bonus; never fabricate “20% complete,” inflate the task list or imply that a step count measures remaining time | Check eligible users reaching the useful outcome, abandonment by step and time-to-value, including non-completers |
| **Reciprocity** — receiving useful help can influence willingness to respond | Let users inspect a useful report, preview or trial result before an optional signup, sales or upgrade request | Make the value useful on its stated terms and the next commitment optional. Disclose necessary inputs, trial expiry, billing and gates before effort; receiving value creates no obligation or permission to contact someone | Check whether users understand and can use the result, then qualified follow-through, opt-outs and complaints rather than raw lead count |
| **IKEA effect** — successful contribution to a result can increase its perceived value | Offer a small, relevant customization that produces a usable artifact, such as adapting a starter dashboard to the user's task | Support a working template or skip path when personalization is optional. Preserve drafts and reversibility; disclose paid publication/export before work. Added chores or sunk effort are not user value, and incomplete work does not establish ownership or retention | Check successful artifact creation, effort and abandonment as well as subsequent meaningful use; separate optional participation from evidence of a causal benefit |
| **Loss aversion** — a real loss relative to a reference point can carry more weight than a comparable gain | Explain an actual trial expiry, downgrade or cancellation consequence with scope, date and available alternatives | Distinguish access changes, stored data and deletion using the real policy. Preserve cancellation/export and free entitlements; describe facts neutrally rather than inventing disappearing work, scarcity or guilt | Check comprehension, appropriate plan choice, retained useful use, refunds, complaints and completed cancellation; fewer exits alone is not success |
| **Contrast effect** — alternatives or a preceding reference can change perceived value | Compare genuine plans or an optional add-on against a relevant baseline using the same currency, billing period and seat/usage assumptions | Contrast, anchoring on an initial reference and decoy choices are related, not interchangeable. Expensive-first ordering is a hypothesis, not a rule; use real available offers, visible totals and meaningful differences instead of inflated anchors or hidden cheaper options | Check price comprehension, suitable plan selection and downstream value/refunds across display orders; higher selected price or add-on uptake alone is insufficient |
| **Halo effect** — an overall impression can spill into judgments of particular attributes | When unfamiliar visitors assess a landing page or first-run screen, make the presentation coherent with the actual offer and its evidence; investigate whether an initial impression creates unsupported expectations | Polish does not establish reliability, safety, usability or product value. Substantiate claims independently and keep limitations visible rather than using appearance to conceal them | Ask newcomers what they expect and why, check offer comprehension, then compare those expectations with observed task success and actual product behavior; visual preference alone is insufficient |
| **Cognitive load / processing fluency** — mental demand on limited processing resources differs from the ease of perceiving or interpreting information | When people lose their place, reconstruct meaning or miss the next useful action, investigate unnecessary task demands separately from hard-to-process presentation; use the relevant content and journey owners below | A sparse screen can still require difficult reasoning; familiar-looking or easily read content can still be misunderstood. Preserve necessary instructions, options and disclosures; neither fewer words nor fewer screens proves lower demand | Ask users to explain the offer, current state and next action in their own words; observe correct completion, errors, backtracking and reported effort across relevant novice/expert groups, rather than treating perceived ease or speed alone as comprehension |
| **Peak-end rule** — intense moments and endings are candidate influences on remembered experience | In onboarding or checkout, investigate how a genuine first useful result, a difficult failure/recovery or the actual completion and next-step handoff is remembered | Support the whole journey, including unsuccessful exits; a pleasant ending cannot compensate for hidden terms, broken tasks or avoidable friction. Micro-interactions are not inherently emotional peaks. Do not manufacture intensity, prolong a task or assume a salient moment guarantees conversion | Separate task success from immediate ratings and delayed unaided recall using the [measurement distinctions](#separate-perception-performance-and-recall); include negative moments, whole-journey quality and unsuccessful exits rather than assuming a hover or celebration was a peak |
| **Service recovery / recovery paradox** — post-recovery satisfaction may improve in some contexts | After a genuine failure, investigate whether helping users regain the useful task improves their experience; use the existing recovery owners below | Prevent avoidable failures first; never manufacture them. Recovery need not restore or exceed an error-free baseline, especially after repeated or severe failures. Relief is not restored service, and satisfaction does not establish greater trust, loyalty or revenue | Check confirmed resolution, restored task success, effort and complaints; separate first/repeated failures and measure satisfaction and subsequent behavior separately. Use the [recovery comparison](review.md#verify-a-recovery-path) rather than forecasting gains from anecdotes |

Goal proximity and an endowed head start are distinct: research on bonus reward
credits does not justify reporting uncompleted product work as complete.
Participation, customization and conversion are not proof of product value.

Halo concerns impression spillover; the aesthetic-usability effect concerns
perceived ease of use. Neither establishes actual quality or usability.
Fluency likewise concerns processing ease, not proof that a task is understood.
Peak/end hypotheses concern retrospective evaluation, not permission to neglect
the experience as it happens or a universal rule about which moments matter.
For presentation and proof, use [commercial visuals](commercial-visuals.md) and
[landing pages](landing-pages.md); use
[content restraint](interaction-accessibility.md#content-restraint) for
operational explanation. [Activation](activation.md) owns first value and
onboarding effort; [checkout](checkout.md) owns commitment and confirmation.
[Motion](motion.md) owns acknowledgement, celebration and reduced-motion
alternatives when movement is in scope. Operational recovery follows
[interaction feedback](interaction-accessibility.md#trace-a-complete-interaction),
[async recovery and undo](components.md#async-state-and-recovery) and
[payment outcomes](checkout.md#recover-the-payment-outcome); verify the
[actual recovery path](review.md#verify-a-recovery-path). These applications
remain hypotheses about experience, not automatic commercial benefits.
Follow the existing [interaction and accessibility](interaction-accessibility.md) contract;
changing presentation does not authorize new data collection, billing or
entitlement rules.

### Separate perception, performance and recall

When evaluating a claimed polish, fluency or memory benefit, distinguish visual
appeal and expected ease before use, perceived ease/trust after use, and observed
task performance: correct completion, consequential errors, assistance,
backtracking and time. Report disagreement between ratings and performance
rather than averaging them into a single improvement claim. A nonsignificant
difference does not prove equivalence.

Separate in-task experience, immediate retrospective ratings and delayed unaided
recall; state the recall interval. Ask which moments people remember before
labeling a peak, distinguishing positive achievement, negative failure and arousal.
Include unsuccessful exits and assess whole-journey quality, not only selected
moments. Use [experimentation](experimentation.md) when causal comparison is in scope.


### Other decision and research mechanisms

| Mechanism | Candidate application | Boundary and evidence to watch |
| --- | --- | --- |
| Choice reduction | Prioritize the next useful action; group or progressively disclose secondary decisions | Retain needed alternatives; select stages and option count from the task, then check completion and backtracking |
| Salience and distinctiveness | Give the action suited to the user's intent clear visual priority | Preserve legibility and understandable alternatives; destructive-action prominence follows the confirmation and recovery contract |
| Post-choice confidence | After signup or purchase, confirm what was chosen and offer the next useful step | Use actual fulfillment details and relevant proof; measure first value and remorse/refunds, rather than reassurance clicks |
| Numeric specificity | Use a measured number when its precision helps substantiate a claim | Match precision to the source, date and uncertainty; never invent digits to appear credible |
| Change resistance | Let customers preview or compare a new workflow, or test an import alongside their current system | Make trial boundaries and data handling clear; preserve recovery and evaluate errors, task success and sustained adoption |

For reverse trials, billing defaults and pricing presentation, consult
[monetization](monetization.md) only when those choices are in scope. For genuine
accumulated value and cancellation communication, consult [retention](retention.md).
For behavior-driven gamification, consult
[experimentation](experimentation.md#choose-engagement-mechanics-from-the-target-behavior).

Urgency requires a real deadline or constraint. Build worthwhile workflows and
history because they help users, rather than deliberately making departure costly.
Evaluate downstream value and trust alongside immediate conversion. Published
behavioral effects and source anecdotes motivate a hypothesis; their reported lifts
are not a forecast for this product.
