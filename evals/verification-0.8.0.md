# Shared UI patterns verification — 2026-10-17

Scope: Frontend Craft 0.8.0 adds shared UI ownership, application-wide reuse
audits, authorized consolidation and continued reuse during feature work.
The guidance was evaluated on top of `0716d57` with the relevant working-tree
changes loaded. Later release metadata and source notes do not change that
workflow. No comparative baseline or commercial evaluation was run.

## Package and authoring checks

- Package validator: metadata shape, portable local links, installed-reference
  reachability and required distribution files.
- Skill Creator metadata validation, using an isolated PyYAML dependency.
- Skills CLI discovery and an isolated project installation for Codex and
  Claude Code, with installed skill files compared against the source package.
- Whitespace checks and an independent read-only authoring review of the
  entrypoint, new reference, reuse/review routes and README. No substantive
  contradiction was found between authority, migration scope and evidence rules.
- Tailwind guidance was checked through Context7 and current official primary
  documentation linked in the reference and source notes.

## Isolated workflow probes

Two fresh-context agents used the skill in the same Codex harness without model
or effort overrides. They received the task and separate copies of a synthetic
Python-standard-library/CSS application, not the expected findings. The fixture
had four routes, a shared card component, duplicated Billing styles, a Settings
override, an adopted critical-border variant and independently styled inputs.

**Read-only audit:** the agent found the duplicated Billing recipe and Settings
override, proposed existing-owner repairs, retained the documented critical
variant and distinguished card ownership from input styling. All four routes and
their owners were inspected; generated HTML was checked in memory. The root
agent compared the fixture files byte-for-byte with their initial copy and
confirmed no changes or generated files. This probe supplied source and HTML
evidence, not browser verification.

**Audit, consolidate and add a feature:** the agent migrated Billing to the shared
component, removed the conflicting Settings treatment and retained the critical
border color and input styling. It added a Reports route with three clearly
labeled synthetic monthly summaries using the shared component and layout, then
recorded source-linked owners and future-use guidance in the fixture's README.

Two standard-library regression checks and all five route renders passed.
Native Chrome checks at a wide viewport inspected all five routes and confirmed
computed card styles, critical border color and independent input borders. A
temporary change to the shared card border and radius propagated to every card
and was restored. A separate source reviewer found no must-fix issue in the
fixture migration. No consumer project was edited by either probe.

## Limits

These are bounded workflow examples, not evidence that every agent or application
will behave the same way. The migration probe did not verify narrow viewport,
keyboard or screen-reader behavior; its attempted narrow captures did not reach
the intended viewport. Plain CSS/Python probes do not establish Tailwind compiler
behavior or framework compatibility. No live form persistence, invoice download,
project destination, revenue outcome or complete production audit was tested.

The isolated fixtures and generated previews were removed after inspection.
Earlier verification records remain evidence for their named revisions only.
