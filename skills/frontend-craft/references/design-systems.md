# Agent-usable design systems

Read when asked to review, create or evolve a design system. Use the scope rules
and the requested branch below; ordinary page/component work follows existing
owners through [reuse and consistency](reuse-consistency.md), without generating
a system or running a broad audit.

## Scope and authority

Establish the product families, intended consumers, supported environments and
whether the request is review, proposal or implementation. Find the actual stack,
installed foundations, design guidance, stories and existing inventory first.
Keep adopted visual direction authoritative, including Impeccable's resolved
context when available. Without it, use supplied brand requirements and observed
UI; name consequential unresolved decisions rather than inventing companion files.
A system-creation request does not authorize a brand redesign or replacing an
installed library. Use compatible existing foundations before introducing new ones.

## Review a design system

A review produces prioritized findings and an improvement proposal, not edits.
Use [style coverage](shared-ui-patterns.md#style-coverage) and the existing
[application audit](shared-ui-patterns.md#audit-the-application) for source owners,
consumers, bypasses and inspection depth. Add these agent-usability questions:

- Can a consumer find the right semantic role without choosing raw palette values
  or copying another page's utility bundle? Are theme mappings and scope clear?
- Can an agent choose between components and variants from documented use cases,
  defaults, alternatives and real examples, rather than appearance or names alone?
- Do recurring domain compositions have discoverable owners where useful, while
  genuinely different tasks retain their behavior and state authority?
- Do documented APIs, variants and states actually exist? Are proposals and
  unresolved choices distinguished from supported contracts?
- Can someone trace a recurring rule to its reason, owner and applicable scope?
  Does a local exception accidentally read as an application-wide default?

Prioritize consumer-visible failure and shared causes: incorrect status, missing
focus/recovery, inaccessible role colors, misleading documentation and divergent
consumers. Missing layers or catalog entries are not defects by themselves.
Report each material gap with evidence, affected scope, proposed owner/correction
and verification needed. Separate source findings from rendered observations using
[review evidence](review.md). A review can recommend the creation branch below;
load it when a creation/evolution proposal is part of the requested deliverable.

## Create or evolve a design system

Use this branch for an explicit system-creation/evolution proposal or authorized
implementation. A proposal names intended owners and unresolved decisions without
claiming they were built. Implementation carries each included change through
consumers and verification.

1. **Ground the system in real work.** Select representative product screens and
   tasks within scope, their content and reachable states. For greenfield work,
   compose concrete examples from the supplied product brief before extracting
   patterns. Identify what is adopted, observed, conflicting or missing using the
   [mapping evidence rules](mapping.md#record-evidence-and-authority-separately).
   Finish with bounded families and concrete compositions, not a speculative
   component catalog. Resolve material choices from project evidence first; ask
   only when an unresolved choice changes the requested result.
2. **Establish foundations.** Reuse or define the needed color, typography,
   spacing/sizing, shape, elevation and motion scales at their existing source.
   Derive choices from the approved direction and those compositions, not a
   universal palette, font, framework or arbitrary completeness target. Identify
   supported themes, density and responsive behavior; use the applicable
   [accessibility contracts](interaction-accessibility.md) for material decisions.
3. **Give shared values meaning.** Where roles need independent control, map
   semantic surface, text, action, focus, status and layout roles to foundations.
   Consumers choose the role; supported themes change its mapping. Preserve status
   meaning and verify contrast in the actual foreground/background combinations;
   color alone cannot communicate state. Follow the existing
   [ownership contract](shared-ui-patterns.md#ownership-contract): a simple shared
   recipe may suffice, and a local one-off value does not require a new token tier.
4. **Make components selectable.** Extend actual owners and supported variants
   through [component contracts](components.md). Document purpose, when to use an
   alternative, default variant and applicable interaction/data states. A static
   separator needs no loading state; a mutation control needs its reachable
   pending/outcome behavior. Distinguish visual feedback from authoritative domain
   state so success or approval text cannot outlive the underlying state.
5. **Extract useful domain blocks.** Recognize recurring compositions in the
   representative screens: for example, an approval panel or task row. Name their
   job and preserve data/actions, state owners and accessibility. Reuse, extend or
   extract through [reuse and consistency](reuse-consistency.md); a screen need
   not be forced into existing blocks when the user's task needs a new pattern.
6. **Record selection rules and reasons.** Use the documentation contract below
   for implemented owners. Describe a recurring decision as a short rule with its
   rationale, scope and meaningful exceptions. For example, make a task's current
   status discoverable because people scan a list between other work. Scope action
   hierarchy to the task/decision region rather than imposing one primary action
   on every possible screen. Keep proposed variants and unresolved values out of
   the supported catalog; record them as decisions still needed.
7. **Apply and prove the system.** For authorized implementation, migrate included
   consumers through [consolidation](shared-ui-patterns.md#consolidate-when-implementation-is-requested)
   and [propagation verification](shared-ui-patterns.md#verify-propagation-and-keep-ownership-discoverable).
   Use actual representative compositions, relevant states/themes and existing
   previews. Verify behavior as well as appearance; a token table or screenshot
   alone does not prove correct focus, pending/error recovery or current status.
   Report excluded consumers and missing proof rather than claiming full adoption.

## Document for the next consumer

Extend the existing inventory, owner documentation or stories using the
[mapping destination and shape](mapping.md); keep implementation as the authority
for values and APIs. An authorized creation request includes the needed owner
index, subject to repository documentation policy. Link rather than mirror token
values, full prop tables or Impeccable's visual narrative.

For each included shared component or domain block, make these discoverable:

- Purpose, scope, source owner and representative consumer/story.
- Selection rule, default/supported variants and when to choose an alternative.
- Applicable states, themes and interaction behavior, with reachable examples.
- A correct usage and an explained misuse/correction, grounded in the real API;
  an incorrect usage is guidance, not a broken fixture to ship.
- Rationale, intentional exceptions and unresolved decisions where relevant.

Keep durable project instructions small: a pointer stating when to consult this
inventory, with the detailed rules beside their owners. Ordinary feature work
uses those contracts instead of rerunning system creation.

## Completion and evidence

A review is complete when its declared families have coverage or explicit gaps,
prioritized corrections and bounded verification needs. A proposal adds the
intended owners, selection rules, composition examples and decisions still needed.

An implemented system is complete for its declared scope when another consumer
can locate the owner, choose a supported variant and compose a representative
screen without inventing shared decisions; intended consumers use those owners,
applicable state/theme behavior has been exercised, and documentation describes
what exists. Report source-traced adoption separately from rendered and behavioral
proof. Neither this workflow nor one successful example establishes universal
agent reliability or commercial improvement.
