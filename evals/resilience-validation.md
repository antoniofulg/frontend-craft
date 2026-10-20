# Interaction resilience and localized-data validation — 2026-10-20

Scope: async recovery, table/collection behavior, navigation/drafts and
locale-sensitive values. These extend existing component, interaction and
performance owners. SKILL/review/reuse routes, source notes, README and four
evaluation cases were updated. Existing loading, discovery and Core Web Vitals
guidance was preserved.

This receipt describes the earlier source-only working-tree probes. Later
browser exercises and release-candidate checks are recorded separately in
[0.9.0 verification](verification-0.9.0.md).

Evaluated skill bundle SHA-256:
`f87016719300f21499b6110f3eabbd855a33a82a6d4818e28e4899b9dbd37025`.
Digest input: sorted relative file paths and file bytes, each followed by NUL,
under `skills/frontend-craft`. This identifies the working-tree bundle rather
than claiming a released revision.

## Research and authoring

Three read-only research agents consulted current primary sources for the four
areas. MDN Fetch, History and beforeunload documentation was also queried through
Context7. WAI/Unicode/W3C guidance, RFC retry semantics and browser restoration
sources are recorded in [SOURCES](../skills/frontend-craft/SOURCES.md#async-recovery-collections-navigation-and-localized-data).
Product selection/reset/retention choices remain distinct from standards.

An independent authoring review found no material routing, duplication or scope
issue. All 82 local fragment links across the skill, README and evaluation
catalog resolved. No new package reference, dependency or mandatory small-fix
workflow was introduced.

## Bounded source-review probes

Two fresh-context agents used the updated skill with isolated synthetic fixtures.
Each received its task and raw contract/source files, without expected findings.
The host's default model/effort was used with no overrides. Both tasks were
read-only proposals; neither required a live service or browser.

- **Account editor:** the contract supplied operation-ID deduplication and a
  mutation-status reader, permitted editing while saving and did not authorize
  durable drafts. Source included overlapping reads, recursive mutation retries,
  whole-snapshot rollback and incomplete history/restoration handling. The agent
  identified unknown committed outcomes, immutable retry identity/payload,
  context-safe value/error/cleanup updates, preservation of newer drafts, initial
  history entry handling and revalidation of restored authority. It reused the
  documented operation reader and proposed no new draft persistence.
- **Booking report:** the contract supplied server paging/sorting, explicit-ID
  bulk actions, independent currency/time-zone settings and a scheduling owner.
  The agent identified position-based selection, page-only sorting presented as
  global, obsolete query responses, unsupported grid semantics, locale-derived
  currency, universal two-decimal scaling, date-only shifting and runtime-zone
  appointment conversion. It deferred windowing without performance evidence and
  preserved the existing translation and scheduling responsibilities.

The root inspected the findings against the fixture source. Both agents named
the missing browser/server evidence and presented future verification cases as
pending. Temporary fixtures were removed after inspection.

## Package checks and limits

Passed `python3 scripts/validate_package.py`, Skill Creator's `quick_validate.py`
with isolated PyYAML, `npx --yes skills add . --list` and `git diff --check`.
Temporary Codex and Claude Code installations each byte-matched all 30 installed
skill files and were removed.

These probes demonstrate bounded source-review decisions, without a baseline
comparison or measured reliability improvement. No fixture fix, browser geometry,
keyboard/screen-reader journey, network recovery, scheduling integration or field
performance result was executed. Existing product tile, price and reservation-
alternative mismatches remain open; this work does not verify their fixes.
