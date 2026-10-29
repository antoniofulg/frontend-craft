# Frontend Craft 0.13.0 verification

Date: 2026-10-29. Scope: release the generated-interface review additions since
`v0.12.0`. The skill name, mixed source terms and consumer-controlled
installation workflow are unchanged.

## Included coverage

- Generated-interface defaults in review, with consequences, preferred
  replacements and recorded exceptions; generated marketing defaults on public
  pages, subordinate to an approved brand or brief.
- Region classification (acquisition, repeated work, reading, trust), existence
  and data-truth questions, measurement validity and root-first ranking.
- Content-restraint removal test and accumulation count; body measure, wrapping
  and tracking notes in display typography.
- Provenance for visant-skills-public and antiwebslop, both MIT, recorded at
  fixed revisions in [sources](../skills/frontend-craft/SOURCES.md). No upstream
  prose, code or assets are bundled.

## Release package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local file links,
  reference reachability, portability and required distribution files.
- `npx --no-install skills add . --list`: discovered one `frontend-craft` skill.

Final distributed skill-tree SHA-256 (34 files):
`c30506b7aded4e0e0772e12b6723fc70ef9aa873872211397d029fb4b194eb7b`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; it excludes
repository-only documentation and evaluations.

## Limits

No agent scenario, fresh-context probe, rendered page or installation copy was
exercised for this release. The new tables restate upstream production cases and
author judgment; they are review prompts, not measured usability or conversion
evidence.
