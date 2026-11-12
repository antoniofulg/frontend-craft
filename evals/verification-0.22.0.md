# Frontend Craft 0.22.0 verification

Date: 2026-11-11. Scope: the AI-interface and dark-theme guidance added since
`v0.21.0`. The package still exposes one `frontend-craft` skill; consumer
installation remains maintainer-controlled.

## Included coverage

- [AI and agent interfaces](../skills/frontend-craft/references/ai-interfaces.md)
  is a new reference. It covers setting expectations, cheap invocation, dismissal
  and correction, the streaming state set (submitted, streaming, complete,
  interrupted, failed, stopped) with input and partial output preserved, scroll
  following only at the bottom, sources and reasons, honest uncertainty,
  feedback, memory and global controls, streamed-content accessibility and a
  shipping check. It links the existing async recovery, announcement, motion,
  loading, content restraint and behavioral-guardrail owners instead of
  restating them, and cites Microsoft's Guidelines for Human-AI Interaction.
- [Design a dark theme](../skills/frontend-craft/references/visual-details.md#design-a-dark-theme)
  is a new section: per-theme semantic roles at the token owner (linking
  [change a shared style](../skills/frontend-craft/references/shared-ui-patterns.md#change-a-shared-style)),
  lightness-based elevation, no pure black or white, accent retuning, failing
  pairs, focus and disabled tokens, assets, theme choice without flash and
  per-theme contrast.
- `SKILL.md` gains two routing rows and its version moves to 0.22.0. Its
  description now names AI interfaces and dark themes at 1,017 characters
  (limit 1,024), after dropping "and feedback", "or codebase" and "production".
- Four scenarios were added to [scenarios](scenarios.md#ai-interface-and-dark-theme-cases).

Attribution and exclusions are recorded in
[SOURCES](../skills/frontend-craft/SOURCES.md#ai-interfaces-and-dark-theme); the
upstream MIT notice is bundled as `licenses/pedronauck-skills.txt` and listed in
the skill `LICENSE`. The upstream repository carries no LICENSE file; the MIT
terms were confirmed with the package maintainer.

## Release package checks

- `python3 -I scripts/validate_package.py`: passed.
- Every fragment link in the repository (573) resolves to a target heading,
  checked separately because the validator checks only that the file exists.
- Not run for this release: the `skills` installer discovery and isolated
  install checks recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256 (39 files):
`0e111191a2733575662140593496c28c39a478e2ea2f59ab2f6c6e36c63b958c`.
The digest uses sorted relative file paths, NUL, file bytes and NUL, as in the
0.20.0 record.

## Limits

The four new scenarios were written but not exercised: no agent scenario or fresh
context probe was run, so routing and the behavior of the rules are unproven. The
guidance rests on one author's synthesis of public guidelines, not on a
measurement in this package, and was not tried against a live product. The
Microsoft guidelines were not re-read for this release. No consumer installation
was modified.
