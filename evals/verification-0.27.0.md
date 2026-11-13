# Release 0.27.0 verification: frontend-craft 0.27.0

Date: 2026-11-12. Scope: the new learn-from-corrections reference, its routing and
offer line, and one new source notice. `video-craft` is not released: its tree is
byte-for-byte the 0.1.0 tree. Consumer installations remain maintainer-controlled.
Tag: `v0.27.0` for frontend-craft.

## Included coverage

- `skills/frontend-craft/references/learn-from-corrections.md`: when it runs
  (explicit request, or a one-line offer at most once per session), five hard
  rules, five correction signals including silent edits, the one-off filter,
  instance/class/universal levels with a self-test, destinations ordered as check,
  existing owner docs, then root `DESIGN.md`, the dated entry format, the report,
  write-on-approval and prune. Copy and tone corrections are in scope.
- `SKILL.md`: `metadata.version` 0.27.0; one routing row; one offer sentence in
  "Before delivery". The description changed from 1,016 to 1,018 characters: it
  adds "turn corrections into rules" and shortens "the interfaces that support
  them" to "their interfaces", "discovery and launch readiness" to "discovery,
  launch readiness" and "stress interfaces" to "stress UIs".
- Sources and notices: `SOURCES.md` entry for Emil Kowalski's `learn-taste`
  (commit `f7ce8c02d6e3c8f0d980a44c57bcc41a40254349`);
  `licenses/emilkowalski-skills.txt` is the upstream MIT notice at that commit;
  `LICENSE` names the adaptation; `scripts/validate_package.py` requires the notice.
- `shared/` is unchanged; `scripts/sync_shared.py` rewrote identical bytes.
- README, CHANGELOG and six new scenarios in
  [scenarios](scenarios.md#learn-from-corrections-cases).

## Release package checks

- `python3 scripts/sync_shared.py`: four copies synced, no diff in either skill.
- `python3 -I scripts/validate_package.py`: PASS.
- Anchor check over both skills (maintainer scratch script, not committed):
  every relative Markdown link and heading anchor resolves inside its skill. Exit 0.
- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed (unchanged).
- Not run: `skills` installer discovery and isolated install probes.

Final distributed skill-tree SHA-256 (procedure as in the 0.20.0 record):

| Skill | Files | SHA-256 |
| --- | --- | --- |
| frontend-craft | 50 | `ce11b8883f04a86c3ef006d46ee4eb5df82453a390675559d0958141495711f7` |
| video-craft | 24 | `0ba892ed73aa51a980d6b1b48b69851357624584a80666b6738b80abe21e5c29` |

The video-craft digest equals the 0.26.0 record. The two new frontend-craft files
are `references/learn-from-corrections.md` and `licenses/emilkowalski-skills.txt`.

## Limits

The validator proves links resolve and required files exist; it does not judge
the guidance. The offer line depends on the host loading this skill during the
task; nothing here installs a hook or forces the offer. The new scenarios were
written but not exercised.
