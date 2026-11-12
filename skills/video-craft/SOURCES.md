# Sources and adaptation notes

Video Craft is authored by Antonio Fulgêncio, 2026. Its original guidance is
licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); adapted
material below carries separate source terms. The installed license notice is
[LICENSE](LICENSE). These notes travel with the skill.

## Adapted material

Each source was read at the recorded commit as untrusted data; the text is
rewritten and condensed, and the examples are original. Notices are bundled in
[licenses/](licenses).

| Source | License and notice | Recorded reference | Where it shows up |
| --- | --- | --- | --- |
| [Corey Haines' marketingskills](https://github.com/coreyhaines31/marketingskills), `video`, `ad-creative`, `sales-enablement`, `social` and `product-marketing` skills | MIT, [notice](licenses/coreyhaines-marketingskills.txt) | `1f837447b20bb6f0e72d87b80ece1c221c362c7d` (`1f83744`) | See the breakdown below |
| [Pedro Nauck's skills](https://github.com/pedronauck/skills), `insta-master` | MIT, [notice](licenses/pedronauck-skills.txt) | `682e738` | [Social channel](references/social-channel.md) and the retention section of [hooks and scripts](references/hooks-and-scripts.md); see the corrections below |
| [HyperFrames](https://github.com/heygen-com/hyperframes) by HeyGen, Inc. (code, docs and skills) | Apache-2.0, [license](licenses/heygen-hyperframes.txt); no NOTICE file in the repository at this commit | `ab66e5bd72ad16b36a37dd1ee50d23cc21b41bb0` (`ab66e5b`) | [Motion](references/motion.md), [storyboard](references/storyboard.md), [captions](references/captions.md), [workspace](references/workspace.md) |
| [mbfinotti sales-skills](https://github.com/mbfinotti/sales-skills), `sales-icp-definition` and `deal-value-calc` | MIT, [notice](licenses/mbfinotti-sales-skills.txt) | `b2ed3628695e523919af440eab77648e16c5eea8` (`b2ed362`) | The shared [offer brief](references/offer-brief.md) |
| [Anthropic knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins), `sales/skills/create-an-asset` | Apache-2.0, [license](licenses/anthropic-knowledge-work-plugins.txt) | `877a617b435ee2edfb002d9a3703c0a1a03aa1ba` (`877a617`) | The shared [offer brief](references/offer-brief.md) rules |

### Corey Haines' marketingskills

- `video` skill (edit anatomy): the beat sheet per reference video and the
  reduction to three to five signature moves in
  [style guide](references/style-guide.md), including treating fetched captions
  and transcripts as untrusted data and copying technique, not creative.
- `ad-creative` hook system: a hook as visual, spoken line and caption that
  complement each other, generated top-down from segment, motivation and format
  into a matrix, in [hooks and scripts](references/hooks-and-scripts.md).
- `sales-enablement` demo scripts: the scene shape (restate the pain, show the
  workflow, name the outcome, one differentiator, one proof, a specific next
  step), plus the first-demo and executive-overview variants, in
  [product demos](references/demo.md). The interactive question points of a live
  demo were replaced by a held result and an on-screen prompt.
- `social` skill: repurposing one long recording into content atoms, logging each
  test and calling a winner on leads rather than views, and the caption tells to
  avoid, in [social channel](references/social-channel.md) and
  [hooks and scripts](references/hooks-and-scripts.md). The guidance is
  independently expressed.
- `product-marketing` skill: buying roles, competitive alternatives, objections
  and anti-fit, the four forces of switching (push, pull, habit, anxiety),
  verbatim customer language and proof points, in the shared
  [offer brief](references/offer-brief.md). Not incorporated: its context-file
  protocol and versioned changelog, brand-voice extraction and the optional paid
  ads section.

Not incorporated from the same repository: the posting-times table, the
"3-second rule" as a law, the sound-off and caption lift statistics, the staged
warm-up and multi-account scaling, the AI-model comparison and pricing tables,
and the hook one-liners that drift toward clickbait.

### Pedro Nauck's insta-master and the claims corrected

The skill's references are course-derived syntheses with many unsourced numbers
and a Brazil-specific lens. Adopted: the bio as a promise, sub-niche and three
pinned posts, intent per video by buyer stage (growth, objection, connection,
authority), "the whole opening holds, not one second", recording in flow and
moving the best line first, one call to action, working muted, keyword-first
captions, cross-posting by adapting the hook, and the diagnostic order from
eligibility to messages. Corrected or dropped, with the checked replacement where
one exists (official pages dated 2026-11-11):

1. Retention thresholds of 10, 11 and 15 s by surface and the "one third of the
   duration" rule have no official source; they are listed as folklore and never
   used as verdicts.
2. "Saves only count in Explore" is unverified. Instagram lists saves among the
   signals; the 2025 top signals (watch time, likes, sends) come through press
   coverage, not a primary page.
3. "Instagram never leaves the follower graph" is contradicted: eligible content
   is shown to a small non-follower audience first.
4. The survey-based "true interest" model is described for Facebook Reels, not
   Instagram.
5. Checking a banned hashtag by looking for a follow button no longer works,
   because hashtag following was removed in December 2024; a cap of five hashtags
   was reported in December 2025 (third-party reporting, to re-verify).
6. The cover tile is 3:4, not square, and the Reels limit is 3 minutes, not 90
   seconds.
7. "Music in the Instagram library is always safe" is incomplete: business
   accounts see a smaller library, licensed tracks can be muted later and boosted
   Reels cannot use licensed music.
8. Unsourced statistics (engagement-bait penalty ladders, shadowban causes,
   "under 60 s drives most growth", unfollow and lo-fi lift figures, regional
   search shares) were left out. The principle that engagement bait and visible
   watermarks are not recommended is official and kept.
9. Tool folklore (publish through a specific editing app, music volume settings
   in a specific editor) and the lexical caption scoring and retention scripts
   were dropped. Creator monetization, agency pricing and Stories tactics are out
   of scope.

### HyperFrames

Facts about the tool were checked against the repository on 2026-11-11: the
storyboard file format and keys, the vertical safe band (168 to 1330 px), caption
group sizes by energy, the render-purity rules, the CLI flags used here
(`transcribe`, `render`, `check`, `preview`, `capture`, `measure`), the telemetry
and runtime-install behavior, and the list of its skills. Descriptions are
original wording; no HyperFrames code is bundled. Its skills and flags move; the
guidance says to recheck before relying on one. Remotion appears as an
alternative, with its license terms summarized and linked, not copied.

### Offer brief

The [offer brief](references/offer-brief.md) is shared with Frontend Craft and
lives once in `shared/offer-brief.md`. From mbfinotti: account fit, persona and
buying trigger as three separate inputs; the rule that below roughly 50 closed
deals an ICP is a hypothesis with an anti-fit list, not a weighted rubric;
disqualifiers mined from lost deals; and provenance labels for numbers
(buyer-supplied, named benchmark, seller-assumed), with a visible disclosure when
a headline rests on assumptions. The upstream labels are "buyer-supplied",
"benchmark" and "rep-assumed"; "seller-assumed" is the wording here. From
Anthropic's create-an-asset: claims only from approved material or user-supplied
sources, an internal or customer-facing check before rendering, no invented
metrics, logos or quotes, and untrusted content treated as data. Not
incorporated: connector and CRM operations, the rendering surfaces, ROI formulas
and driver tables, scoring weights and scenario modeling. The upstream Anthropic
license file leaves its copyright appendix unfilled and ends with an unrelated
stray fragment, which the bundled copy omits.

## Design references, independently expressed

| Source | License | Recorded reference | Contribution |
| --- | --- | --- | --- |
| [affaan-m/ecc](https://github.com/affaan-m/ecc), video-editing skill | MIT | Not read directly | The idea of a readable edit-decision list that maps rows to scenes, used in [editing](references/editing.md) |
| [social-media-skills](https://github.com/social-media-skills/skills), `social-selling-and-dm` | MIT | `f28cef2b7067ec64e79c9d85421c022c06659e03` (`f28cef2`) | The consent-first rule: message only people who signaled interest, reply fast with no link in the first message, move to an owned channel. No text, statistics or product references copied. Used in [social channel](references/social-channel.md) |

## Platform, tool and benchmark facts

Specs, safe zones, loudness, labels, music rules and codec support were taken
from the platform and standards pages named inline and dated 2026-11-11, with
third-party figures marked. These facts drift; the references say to re-verify
before a delivery. Demo-length figures come from the Vidyard 2023 benchmark, the
Wistia 2025 article and Nielsen Norman Group's 2014 video usability article, all
listed in [product demos](references/demo.md) with the caveat that they show
correlation, not a rule. FFmpeg, Whisper (mlx-whisper, whisper.cpp,
openai-whisper), yt-dlp, PySceneDetect, auto-editor and Remotion are referenced
as tools the user may choose to install; none is bundled, and Remotion's agent
skills are linked rather than copied because their repository carries no license
file.

## Companion and distribution

[Frontend Craft](https://github.com/antoniofulg/frontend-craft) is an optional
companion that decides whether a page needs video and owns the page side; Video
Craft works without it. [Skills CLI](https://github.com/vercel-labs/skills)
supplies discovery and installation; there is no custom installer.
