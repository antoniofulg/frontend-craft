# Frontend Craft 0.12.0 verification

Date: 2026-10-28. Scope: release the reference/routing, operational recovery and
research additions since `v0.11.0`. The skill name, mixed source terms and
consumer-controlled installation workflow are unchanged.

## Included coverage

- Cumulative reference selection by named surface/journey and requested lens;
  mandatory applicable landing/onboarding guidance, retained-context freshness,
  and source-aware optional delegation without automatic skill installation.
- Evidence-bounded halo, cognitive-load/fluency, peak-end and service-recovery
  guidance, including separate perception, performance and recall measures.
- Opening promise/proof/action composition, meaningful whitespace, task-specific
  static/motion comparisons, truthful first results and failed/unresolved endings.
- Actionable limits/unavailable states, authoritative undo/deferred commitment,
  outcome-aware payment recovery, private support context, scoped journey
  consistency and verification through actual recovery effects.
- Primary research, standards, expert heuristics, preprint and vendor-contract
  provenance with explicit access and transfer limits in [sources](../skills/frontend-craft/SOURCES.md).

## Reused authoring and behavioral evidence

The [detailed evaluation](review-routing-validation.md) records the authoring
condition at 0.11.0 before this release metadata bump. Its instruction bodies
and reference content are unchanged by the 0.12.0 packaging operation.

An initial independent authoring review identified the missing narrow behavioral
recovery-delivery trigger; integration corrected it. A subsequent fresh non-author
review found no actionable defects in the assigned written-contract scope.
Three fresh-context source-led probes independently selected references for
operational states/undo, payment recovery, and visual/motion/memory claims.
Earlier landing/onboarding, delegated-review and narrow-wording probes and the
supplied-context mechanism smoke have their separate evidence limits in that
record. No comparative model benchmark or exhaustive scenario run was made.

## Release package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local file links,
  reference reachability, portability and required distribution files.
- Independent checks passed matching 0.12.0 README/entrypoint/changelog metadata,
  all 382 local Markdown heading fragments and whitespace in the 17 scoped files.
- `npx --no-install skills add . --list`: discovered one `frontend-craft` skill.
- A disposable local installation with `--skill frontend-craft --agent codex
  claude-code --copy --yes` produced two independent copies. Each matched all
  34 source package files byte-for-byte; all 402 local links/fragments in each
  copy resolved within that package. The temporary directory was removed.

Final distributed skill-tree SHA-256:
`ae7c2b4d1f2079a95160803b6580ee93baf1d0a5955b8a876bc1836c2393d94a`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; it excludes
repository-only documentation and evaluations.

## Limits and installation boundary

No live-page rendering, provider/payment operation, accessibility conformance,
user study, trust/recall effect or commercial gain is established by this release.
Explicit reference selection does not prove unnamed automatic host activation,
and mid-run context/source changes and runtime inheritance were not separately
exercised. Source studies motivate conditional application and evaluation, not
universal layout, animation or conversion promises.

This is a GitHub-distributed skill; no npm publication is required. Publishing
a release does not update consuming apps or global installations. Release
installation checks use only disposable isolated directories, not real projects.
