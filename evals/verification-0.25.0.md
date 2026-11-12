# Release 0.25.0 verification: frontend-craft 0.25.0 and video-craft 0.1.0

Date: 2026-11-11. Scope: the new `video-craft` skill (0.1.0), the shared offer
brief consumed by both skills, the two-skill package validation and the matching
`frontend-craft` 0.25.0 routing changes. Consumer installations remain
maintainer-controlled. Tags: `v0.25.0` for frontend-craft and `video-craft-v0.1.0`
for video-craft.

## Included coverage

- `skills/video-craft/` with its entrypoint, fourteen references written for
  this skill, two shared references copied by `scripts/sync_shared.py`
  (`copywriting.md`, `offer-brief.md`), `LICENSE`, `SOURCES.md` and five bundled
  license notices. The entrypoint holds the nine-phase workflow with tools,
  references and approval gates, an explanation path, cumulative routing,
  HyperFrames delegation, the boundary with frontend-craft in plain text, safety
  rules and a delivery check.
- `shared/offer-brief.md`: offer, ICP (account fit), persona (buyer, user,
  approver), buying trigger, current alternative, objections, a proof inventory
  with buyer-supplied, named-benchmark and seller-assumed labels, and CTA with
  destination. Rules: approved sources only, internal content kept out of
  customer-facing assets, no invented metrics, sourced material treated as data.
  Below roughly 50 closed deals the ICP is a hypothesis. It links only to
  `copywriting.md`; the copywriting brief section points back to it for audience
  and offer and keeps the claim-inventory table.
- `shared/manifest.json` sends both files to both skills.
- frontend-craft: `metadata.version` 0.25.0, description unchanged, a routing row
  for the offer brief, a routing row that hands video production to `video-craft`
  when installed (plain text, no link), a sentence in the imagery guide beside the
  footage paragraph, and an offer-brief link from commercial strategy.
- Sources and notices: video-craft `SOURCES.md` (including the insta-master
  corrections), `LICENSE` and `licenses/` (Corey Haines MIT, Pedro Nauck MIT,
  HyperFrames Apache-2.0, mbfinotti MIT, Anthropic Apache-2.0); the last two
  notices and an offer-brief section were also added to frontend-craft.
- `scripts/validate_package.py` additionally requires each skill's bundled license
  notices. README presents two skills with an install command each and the
  per-skill tag scheme; `CHANGELOG.md` headings carry the skill name; thirteen new
  scenarios in [scenarios](scenarios.md#shared-offer-brief-and-video-handoff-cases).

## Release package checks

- `python3 scripts/sync_shared.py` wrote four copies; `python3 -I
  scripts/validate_package.py` passed for both skills afterward.
- Negative cases, exercised temporarily and reverted: appending a line to
  `skills/video-craft/references/offer-brief.md` made the validator exit 1 with
  `differs from shared/offer-brief.md` and `run python3 scripts/sync_shared.py`;
  removing `skills/video-craft/licenses/heygen-hyperframes.txt` produced
  `Missing distribution file` and a missing-link error from `SOURCES.md`.
- Fragment check (a maintainer scratch script, not committed) over every Markdown
  file: 619 fragment links, 0 unresolved. It checks heading anchors the validator
  does not.
- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed (unchanged).
- Not run for this release: the `skills` installer discovery and isolated install
  probes recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256, computed as in the 0.20.0 record (sorted
relative file paths, NUL, file bytes, NUL, per skill directory):

| Skill | Files | SHA-256 |
| --- | --- | --- |
| frontend-craft | 46 | `2a6ef31b9d1f27d3140f2013aa722ced6153f33dc707f86b514137bdba8ad693` |
| video-craft | 24 | `0ba892ed73aa51a980d6b1b48b69851357624584a80666b6738b80abe21e5c29` |

The same procedure reproduced the 0.24.0 frontend-craft digest (`6e49e51c...`,
43 files) from the `HEAD` tree before this release.

## Limits

The validator proves copies match their source, links resolve and stay inside the
skill, and required files exist; it does not judge the guidance. The video-craft
references were authored from official platform pages and the HyperFrames
repository at commit `ab66e5b` on 2026-11-11, with most platform figures marked
for re-verification; no video was produced, no FFmpeg command was run for this
release, and no HyperFrames render was made. The new scenarios were written but
not exercised. The offer brief is adapted guidance, not measured to improve
decisions. The upstream Anthropic license file has an unfilled copyright appendix
and stray trailing text, so its bundled copy is the Apache-2.0 text only, with a
header explaining the omission. No consumer installation was modified.
