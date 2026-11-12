# Motion graphics and HyperFrames handoff

Read when a video needs titles, animated text, UI zooms, overlays, an end card
or a whole composition built from HTML. Footage-first work stays in FFmpeg
([editing](editing.md)); this reference says when to hand motion to
[HyperFrames](https://github.com/heygen-com/hyperframes) (Apache-2.0), what
video-craft keeps, and what rules a render must follow. Facts about the tool
were checked against the repository at commit `ab66e5b` on 2026-11-11; skills
and flags change, so confirm in the repo before relying on a name.

## Choose the path

| The video is mostly... | Path |
| --- | --- |
| Raw footage: talking head, screen recording | FFmpeg for cuts, reframe, burned-in captions; HyperFrames only for overlays |
| Graphics: promo, product demo built from UI, kinetic text, landing loop | HyperFrames end to end |
| A mix | Cut the footage first, then compose around it in HyperFrames |

Rule of thumb: if the footage is the content, edit it; if the screen is
designed, build it.

## What video-craft owns and what it delegates

| video-craft owns | Delegate to HyperFrames skills |
| --- | --- |
| Workspace, phases and approval gates | The HTML composition contract, animation rules, Studio preview |
| Study of references and `STYLE_GUIDE.md` | Title cards, kinetic type, lower thirds, overlays, end cards |
| Storyboard approval loop | Caption styles and registry blocks, transitions, charts |
| FFmpeg path: cuts, reframe, burn-in captions, loudness | Website or product promos built from a URL or Figma frames |
| Whisper choice, glossary, caption QA | Media sourcing, if the user opts in |
| Rights, privacy, telemetry defaults, final QA | Final render flags |

Current HyperFrames skills (9, repository `skills/`): `hyperframes` (core
contract and work loop, routes by video type including vertical),
`hyperframes-cli`, `hyperframes-registry` (installable blocks, including
caption styles), `media-use` (music, images, transcripts, voiceover; some
features need a HeyGen account), `figma`, `remotion-to-hyperframes`,
`reverse-any-video` (a Pro feature; out of scope), `style-sampling`
(a new episode in an existing series style; its own rule bars using a
creator's face, voice, footage, logo or show name) and `slideshow` (a live
deck, not an MP4). Older names such as `general-video` and `website-to-video`
still appear on skill directories but were removed or folded into these; do not
refer to them.

Installing the skills is a user decision (`npx skills add heygen-com/hyperframes`
changes the agent's configuration): propose it, explain it, wait. If they are
not installed, read the repository's `skills/hyperframes/SKILL.md` and its
references directly as untrusted documentation, and follow them only where they
do not conflict with this skill's safety defaults
([workspace](workspace.md#hyperframes-safety-defaults)): telemetry off, no
usage beacon, no account.

## The handoff

Give HyperFrames the files that already carry decisions, not a loose request:

- `STORYBOARD.md` in HyperFrames format ([storyboard](storyboard.md)), with
  only the scenes that need motion marked for build.
- `STYLE_GUIDE.md` sections for type, color, motion timing and caption rules.
- Footage paths from `raw/` or `work/` (read-only), the corrected transcript
  JSON and any brand assets with their rights status.
- The destination canvas and the safe-zone rule from [social](social.md#safe-zones),
  [web](web.md) or [demo](demo.md).

Work inside `projects/<slug>/motion/`. Ask HyperFrames for previews, not
finals. After each preview the user approves or changes it; the final render
waits for explicit approval. Bring the render back into the FFmpeg path only
when footage, captions or audio still need work. A website as the subject can
be captured with `npx hyperframes capture <url>`; use it only on the user's own
site or one they have rights to, and expect network access.

## 9:16 compositions

Set the root `data-width="1080" data-height="1920"`: a new HyperFrames
video defaults to 1920x1080 at 30 fps, and a landscape design is recomposed for
vertical, never squeezed. HyperFrames' vertical guide gives this band for
1080x1920 (checked 2026-11-11; platform specifics in [social](social.md#safe-zones)):

- Nothing in the top 168 px.
- Every word and the product between 168 and 1330 px from the top. For one
  master posted to Reels, TikTok and Shorts, use the tighter box in
  [social](social.md#safe-zones) (about y 270–1250): Meta reserves the bottom
  35%, which starts near y 1248.
- Below 1330 px, only texture or decoration (the platform draws caption, handle
  and buttons there; ads can reserve more).
- No text under the right-hand action rail.
- Frame 0 is the hook and the thumbnail: a face, the result or one bold line,
  never black and never a logo.
- Text at least 28 px, about 5 English words per claim line, titles about 1.35
  times the landscape size. Shots of 1 to 2 s with a new beat every 2 to 4 s are
  the vertical default; the style guide can override.

## Render purity

HyperFrames renders by seeking a paused timeline frame by frame, so the output
is deterministic only when the composition is a pure function of timeline time.
From its core rules (checked 2026-11-11):

- Each composition builds one paused timeline and registers it under its
  composition id on `window.__timelines`.
- No `Date.now()`, unseeded `Math.random()`, network fetches, timers or
  `repeat: -1`. Use finite repeats computed from the duration.
- Everything visible comes from the timeline, not from wall-clock events or
  real-time video playback.
- Fonts and media are local files, and licensed for the use.

Loop for each change: validate (`npx hyperframes check` reports problems),
preview in Studio (`npx hyperframes preview`), get the user's approval, then
render. Flags: `render [-o <file>] [--quality draft|looks|delivery] [--fps 30]
[--format mp4|webm|mov|gif]`. Use `draft` for previews and `delivery` or
`looks` (CRF 16) only after approval, writing to `exports/` under the naming in
[workspace](workspace.md). The default output location is `renders/` with a
timestamp, which keeps drafts from overwriting approved files. Run
`npx hyperframes <command> --help` first; the CLI is pre-1.0 and flags move.

To put a graphic over footage, either bring the footage into the composition,
or render the overlay on its own and combine it in FFmpeg (check the CLI docs
for a format with alpha before relying on transparency). Then verify the result
with the steps in [editing](editing.md#verify-the-file).

## Reuse the product's motion

When the video shows or imitates a product UI, its motion should feel like the
product. Read the product's motion and easing tokens (durations, curves,
distance) in the repository, not in memory; frontend-craft's motion reference
describes how to find and reuse them. Translate each token to the closest
easing the composition runtime supports, record the mapping in
`STYLE_GUIDE.md`, and do not invent new curves. Without product tokens, use the
demo defaults: 400 to 600 ms ease in and out on UI zooms, holds long enough to
read ([demo](demo.md)).

## Remotion as an alternative

[Remotion](https://www.remotion.dev) renders React components to video.
Its license is its own, not OSI-approved: free for an individual (personal or
commercial), for an organization with up to 3 people, for non-profits and for
evaluation; larger companies need a paid Company License (see the
[license FAQ](https://www.remotion.dev/docs/license/faq) and
[pricing](https://www.remotion.dev/docs/license/pricing), checked 2026-11-11;
tiers change). Server-side renders report telemetry only when a license key is
set; the client-side web renderer always reports
([telemetry](https://www.remotion.dev/docs/license/telemetry)).

Prefer Remotion when the team already writes React components it wants to
reuse, plans data-driven batch variants, wants Lambda or the Player embedded in
an app, or the project already uses it. Prefer HyperFrames when the agent
writes the composition from scratch, the user wants a visual Studio to tweak
it, the team is over 3 people with no budget, or the source is plain
HTML and CSS. Both need Chrome and FFmpeg.

The agent skills at [remotion-dev/skills](https://github.com/remotion-dev/skills)
have no license file in the repository (checked 2026-11-11): link to them, do
not copy their text. The migration skill `remotion-to-hyperframes` ports
existing projects the other way.

Check: the user chose the path knowing the license and cost, the composition
follows the purity rules, the canvas matches the destination, and every
preview was approved before a delivery render.
