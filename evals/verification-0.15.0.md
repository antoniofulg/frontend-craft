# Frontend Craft 0.15.0 verification

Date: 2026-11-02. Scope: release the design-system and agentic screen-repair
workflows since `v0.14.0`. The package still exposes one `frontend-craft` skill;
consumer installation remains maintainer-controlled. Dashboard-video proposals
were not implemented and are not included in this release.

## Included coverage

- Explicit design-system review and creation/evolution routes, grounded in real
  product tasks, semantic roles, selectable components and useful domain blocks.
- Existing ownership, mapping, consolidation and propagation mechanics reused
  rather than introducing a parallel design-system convention.
- Agent-guided screen repair: comparable before state, role-level measurements,
  product-specific brief, consequence-first passes, preserved contracts and
  rendered/behavioral verification in the existing review loop.
- Narrow fixes remain scoped and reviews remain read-only unless implementation
  is requested. No upstream checker, generator, hooks, numeric finding targets
  or separate public skill were added.
- Enmera source attribution, adaptation boundaries and the full MIT notice
  retained in the distributed skill alongside its existing source terms.

## Release package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local links,
  reference reachability, portability and distribution-file checks.
- `npx --yes skills@1.7.5 add . --list`: discovered exactly one `frontend-craft`
  skill with the updated description.
- Installed from the local source into an isolated temporary project with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`.
  Both `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft` were
  real copies, not symlinks. All 36 distributed files matched the source tree
  byte-for-byte, including the new reference and full Enmera MIT notice.

Final distributed skill-tree SHA-256 (36 files):
`ca6ca3c2ad6283ea9f022cacf235696b798e213ae45ce99a16a94824d95027b9`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; it excludes
repository-only documentation and evaluations.

## Behavioral evidence retained

The implementation and relevant routes are unchanged from the recorded probes;
release work changes only version metadata and release documentation. Existing
results were reused rather than replaying unchanged checks:

- [Design-system validation](design-system-validation.md): three fresh-context
  source-only probes for review, creation proposal and a narrow label correction;
  actual reference reads checked separately from reported outputs. Both broad
  probes opened the full design-system reference, not exclusively one section.
- [Agentic repair validation](agentic-repair-validation.md): fresh-context browser
  exercises for a whole-screen repair and a narrow-label boundary. The synthetic
  handover page's mobile document width changed from 850 to 360 px at a 360 px
  viewport while preserving content, approved identity and working interactions.
  The label-only task preserved its pending contract without starting a screen
  repair. Parent browser checks corroborated the relevant results.

## Limits

The release installation check used local source, not a pre-existing consumer
project. The recorded probes do not establish automatic invocation, universal
routing, screen-reader certification, real backend behavior, production design-
system adoption or commercial improvement. No new end-user application scenario
was run solely for version metadata changes. The transient installation fixture
was removed after inspection; real consumer installations were not modified.
