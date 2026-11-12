# Frontend Craft 0.24.0 verification

Date: 2026-11-11. Scope: the shared-reference mechanism, the generalized package
validator and the marketing-copy guide extracted from landing pages. The package
still exposes one `frontend-craft` skill; consumer installation remains
maintainer-controlled.

## Included coverage

- `shared/` is the source of truth for references that more than one skill needs
  and is not distributed. `shared/manifest.json` maps each file to its consuming
  skills (today `copywriting.md` to `frontend-craft`). `scripts/sync_shared.py`
  copies each file into `skills/<skill>/references/` under a generated-file
  comment.
- `scripts/validate_package.py` now runs the frontmatter, name, description,
  machine-path, link, reachability and distribution-file checks for every
  `skills/*/` directory. It requires each skill's `LICENSE` and `SOURCES.md` and
  the two helper scripts for `frontend-craft`. It adds the shared checks: every
  shared file is in the manifest, every manifest copy equals its source plus the
  generated header, no unlisted generated copy exists, and a shared file links only
  to other shared files. A drift failure prints
  `run python3 scripts/sync_shared.py`.
- [Copywriting](../skills/frontend-craft/references/copywriting.md) holds the
  former "Commercial brief and claim inventory" and "Write, edit and refresh
  marketing copy" sections of
  [landing pages](../skills/frontend-craft/references/landing-pages.md), now with
  plain-text pointers where they linked to landing-page contracts, plus the new
  headline menu, situation diagnosis, unlock paths for declined claims and review
  signals adapted from Corey Haines' marketingskills (MIT, `1f83744`). Landing
  pages keep a stub and the public redesign contracts. The inbound links in
  the references, `SKILL.md`, `SOURCES.md` and
  [upstream coverage](upstream-coverage.md) were retargeted; historical
  changelog and verification records name none of the moved anchors.
- Credit: [SOURCES](../skills/frontend-craft/SOURCES.md#shared-marketing-copy-guidance),
  `licenses/coreyhaines-marketingskills.txt` (upstream notice, copyright line
  copied from the upstream LICENSE) and a notice paragraph in the skill `LICENSE`.
- `SKILL.md` moves to 0.24.0; its description is unchanged and the marketing-copy
  routing row points at the new reference. Four scenarios were added to
  [scenarios](scenarios.md#shared-marketing-copy-cases).

## Release package checks

- `python3 scripts/sync_shared.py` wrote the one copy; `python3 -I
  scripts/validate_package.py` passed afterward.
- Drift proof: appending a line to
  `skills/frontend-craft/references/copywriting.md` made the validator exit 1 with
  `differs from shared/copywriting.md` and `run python3 scripts/sync_shared.py`;
  restoring the file made it pass again.
- Other failing cases, each exercised temporarily and reverted: a shared file
  linking to a skill reference, a shared file missing from the manifest, a
  generated copy missing from the manifest, and a deleted copy.
- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed (unchanged from
  0.23.0).
- Not run for this release: the `skills` installer discovery and isolated install
  checks recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256 (43 files):
`6e49e51c170962b607e98add28396f6f7b4515f59b5f2094b06dfb2b54193f6c`.
The digest uses sorted relative file paths, NUL, file bytes and NUL, as in the
0.20.0 record; the same procedure reproduced the 0.23.0 digest
(`656680c5...`, 41 files) from the `HEAD` tree before this release.

## Limits

The validator proves copies match their source and links stay inside the shared
set; it does not check that shared prose is meaningful in a skill that does not
yet exist. The `video-craft` skill is not present, so the mechanism has one
consumer. The headline menu and review signals are adapted guidance, not measured
to improve copy; the upstream bans and caps were deliberately omitted. The new
scenarios were written but not exercised. No consumer installation was modified.
