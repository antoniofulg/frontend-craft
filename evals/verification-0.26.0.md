# Release 0.26.0 verification: frontend-craft 0.26.0

Date: 2026-11-11. Scope: the new outbound reference, the business-case, deal-risk
and win-loss sections of growth and sales, the matching routing and the one new
source notice. `video-craft` is not released: its tree is byte-for-byte the 0.1.0
tree. Consumer installations remain maintainer-controlled. Tag: `v0.26.0` for
frontend-craft.

## Included coverage

- `skills/frontend-craft/references/outbound.md`: a prospect list built from the
  ICP (account fit, persona and buying trigger separate, sourced and dated
  signals with freshness windows, tiering by effort, small samples as a
  hypothesis), the first-customer demand-signal method, the five-part reason to
  reach out with verifiable claims, cold email plays, structure, cadence, stop
  rules and reply handling, LinkedIn outreach and its automation risk,
  deliverability with provider requirements dated 2026-11-11, compliance
  (CAN-SPAM, GDPR and LGPD legitimate interest, opt-out, data sourcing) stated as
  not legal advice with what to verify, consent-first social selling, measures by
  segment and play linked to GTM measurement, and the hand-off to `video-craft`
  in plain text. Vendor figures are labeled; there are no tool tables.
- `growth-sales.md`: sections for a buyer business case (labels reused from the
  offer brief, not redefined), a deal-risk review (severity and confidence graded
  separately) and win-loss (six-code scheme, interviews, finding-to-action map),
  plus links to the outbound reference. Pricing economics, positioning and
  distribution and GTM automation each gained one link.
- `SKILL.md`: `metadata.version` 0.26.0; three routing rows; the video row names
  prospecting clips. The description changed from 1,017 to 1,015 characters: it
  adds "plan prospecting and outbound" and gives up "technical" in "technical
  SEO", "can stand alone without a UI" (now "needs no UI") and two connecting
  words; the "design or implement" and accessibility triggers are kept.
- Sources and notices: `SOURCES.md` entries for the Corey Haines (cold-email,
  prospecting, sales-enablement), mbfinotti (outreach personalization, deal red
  flags, account tiering) and social-media-skills (social-selling-and-dm) material;
  `licenses/social-media-skills.txt` is a copy of the upstream MIT notice;
  `LICENSE` names the new adaptation; `scripts/validate_package.py` now requires
  the new notice.
- `shared/` is unchanged: the offer brief already defines the three number labels
  and the small-sample rule the new sections reuse, so `scripts/sync_shared.py`
  rewrote the four copies with identical bytes and `video-craft` did not change.
- README, CHANGELOG and fourteen new scenarios in
  [scenarios](scenarios.md#outbound-business-case-and-win-loss-cases).

## Release package checks

- `python3 scripts/sync_shared.py`: four copies synced, no diff in either skill.
- `python3 -I scripts/validate_package.py`: PASS (metadata shape, local links,
  portable references, shared copies, distribution files including the new
  notice). `references/outbound.md` is reachable from `SKILL.md`.
- Anchor check over both skills (a maintainer scratch script, not committed): it
  resolves every relative Markdown link and heading anchor in `skills/frontend-craft`
  and `skills/video-craft`, rejects links that escape a skill, and exits 0 silently
  when clean. Exit 0.
- `node --test scripts/test_skill_scripts.mjs`: 8 tests passed (unchanged).
- Not run for this release: the `skills` installer discovery and isolated install
  probes recorded for earlier releases (they need network access).

Final distributed skill-tree SHA-256, computed as in the 0.20.0 record (sorted
relative file paths, NUL, file bytes, NUL, per skill directory):

| Skill | Files | SHA-256 |
| --- | --- | --- |
| frontend-craft | 48 | `2a2fdcc12f9b4566ce8720955e8a4c7bec416184ca9f701716769d9c9c463bf8` |
| video-craft | 24 | `0ba892ed73aa51a980d6b1b48b69851357624584a80666b6738b80abe21e5c29` |

The video-craft digest equals the 0.25.0 record (`0ba892ed...`, 24 files). The
same procedure reproduced the 0.25.0 frontend-craft digest (`2a6ef31b...`, 46
files) from the `HEAD` tree before this release; the two new files are
`references/outbound.md` and `licenses/social-media-skills.txt`.

## Limits

The validator proves copies match their source, links resolve and stay inside the
skill, and required files exist; it does not judge the guidance. Provider
authentication requirements, LinkedIn terms and enforcement, Meta's reply window
and the legal summaries (CAN-SPAM, GDPR, UK, German, Canadian and Australian rules,
LGPD) come from the upstream files and general knowledge; they were not re-checked
against primary sources, and the guide dates them and names what to verify. Vendor
benchmarks are vendor data. The new scenarios were written but not exercised. The
outbound reference is adapted guidance, not measured to improve prospecting or
deal outcomes. `video-craft`'s own sources table already lists
social-media-skills as an idea-only source with no notice file; this release did
not alter it. No consumer installation was modified.

## Primary-source fact check

The compliance, deliverability and platform statements in `outbound.md` were
checked against primary sources on 2026-11-11: FTC, ICO, the EU ePrivacy
Directive, UWG, CASL, the Spam Act, ANPD, Google and Yahoo sender guidance,
Microsoft's Outlook.com announcement, the LinkedIn User Agreement and Meta's
messaging policy.

**Fixed.** One error: Microsoft routes non-compliant bulk mail to Junk since
5 May 2025, and rejection is announced without a date. The following were
qualified:
- CAN-SPAM's requirements, liability and per-email penalty;
- Google versus Yahoo thresholds and the complaint target;
- the EU national-law dependency, the source-notice timing and the UK review status;
- Meta's 24-hour/7-day window and the scope of its spam rules;
- the 2% bounce rule of thumb;
- SMS registration as a carrier rule;
- the named Instantly reply-rate dataset.

**Partly verified.** The CRTC and ACMA pages were unreachable and were checked
via the statute and fact sheet. The GDPR and LGPD text was not re-fetched. This
remains a checklist, not legal advice.
