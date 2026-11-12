# Frontend Craft 0.21.0 verification

Date: 2026-11-11. Scope: the prototype doctrine added since `v0.20.0`. The
package still exposes one `frontend-craft` skill; consumer installation remains
maintainer-controlled.

## Included coverage

- [Prototype with production components](../skills/frontend-craft/references/reuse-consistency.md#prototype-with-production-components)
  is a new section after the variant comparison. It covers component prototypes
  versus exploratory drafts and the graduation of a draft, splitting a pure view
  from a data-bound container, fixtures shared with stories, no network calls,
  a production build that excludes prototype code, declared states that feed the
  stress test and binding comparison, journeys with edges named by the real
  control text, stable ids, approval by people only and labeled illustrative
  data. It is tool-agnostic: it uses the project's preview tool and falls back to
  the existing temporary-harness rules; the package ships no server or script.
- [Compare a render with a binding design](../skills/frontend-craft/references/review.md#compare-a-render-with-a-binding-design)
  gains the rule that a design binds visual language only, with content, data,
  copy, brand marks and which controls exist left to their owners.
- [Prove redesign parity](../skills/frontend-craft/references/review.md#prove-redesign-parity)
  gains the transcription baseline for prototypes and redesigns of implemented
  surfaces, scaled to the change.
- `SKILL.md` gains one routing row and its version moves to 0.21.0; its
  description is unchanged at 1,022 characters (limit 1,024).
- Four scenarios were added to [scenarios](scenarios.md#prototype-doctrine-cases).

Source comparison, attribution and exclusions are recorded in
[SOURCES](../skills/frontend-craft/SOURCES.md#prototype-doctrine); the upstream MIT
notice is bundled as `licenses/compozy.txt` and listed in the skill `LICENSE`.

## Release package checks

- `python3 -I scripts/validate_package.py`: passed.
- Every fragment link in the repository (547) resolves to a target heading,
  checked separately because the validator checks only that the file exists.
- Not run for this release: the `skills` installer discovery and isolated
  install checks recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256 (37 files):
`843db1fe8b069b6ae9c18ce628591c7a5838f8050e09663bde87f7c4641b17e4`.
The digest uses sorted relative file paths, NUL, file bytes and NUL, as in the
0.20.0 record.

## Limits

The four new scenarios were written but not exercised: no agent scenario or fresh
context probe was run, so routing and the behavior of the rules are unproven. The
prototype doctrine rests on one project's reported practice, not on a
measurement in this package, and it was not tried against a live preview tool.
No consumer installation was modified.
