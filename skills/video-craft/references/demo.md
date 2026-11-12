# Product demo videos

Read when the video shows a real product doing real work: a landing-page demo,
a feature clip, a sales follow-up, a launch video or a social cut of a demo. The
goal is a viewer who understands what the product does for them and takes one
next step. Hooks and general script craft are in [hooks-and-scripts](hooks-and-scripts.md);
recording-to-rough-cut mechanics are in [editing](editing.md); captions in
[captions](captions.md); audio in [audio](audio.md); layouts in [motion](motion.md).
For claims, proof and the audience, use [copywriting](copywriting.md) and
[offer-brief](offer-brief.md).

## Pick the destination and length

The evidence on length is weak. The figures are vendor benchmarks and one old
usability study. They show correlation, because longer videos serve different
intents, and no independent study ties demo length to conversion. Treat the table
as a starting point to test, not a rule.

| Destination | Starting length | Sound | Note |
| --- | --- | --- | --- |
| Landing hero loop | 6 to 15 s | none | Ambient product motion; see [web](web.md) |
| Landing "watch demo" | 60 to 120 s | voice and captions | Show the product within 5 s |
| Feature or product-page clip | 10 to 45 s per feature | optional | One task per clip, labelled |
| Launch or promo | 30 to 90 s | music and voice | Fast edits that still pass the flash check |
| Sales follow-up | 1 to 3 min | voice | A personal opening only when the user supplies real context |
| Social cut | 15 to 45 s | captions burned in | Hook in 1 to 3 s; works muted; see [social](social.md) |
| Walkthrough or tutorial | 3 to 10 min, chaptered | voice | Chapters and a transcript |

Sources, read 2026-11-11: Vidyard 2023 benchmark via MarketingProfs
(https://www.marketingprofs.com/charts/2023/49949/business-video-benchmarks-retention-rates-by-length;
completion about 66% under 1 min, 56% for 1 to 2 min, 50% for 2 to 10 min, 39%
for 10 to 20 min); Wistia 2025 (https://wistia.com/blog/optimal-video-length;
1 to 5 min as the sweet spot for demos and explainers); NN/g 2014
(https://www.nngroup.com/articles/video-usability/; start strong, show the topic
within about 5 s, give captions and a transcript, end with a next step). The
table's lengths are derived from these and are a hypothesis.

## Structure the beats

Use five beats. A 90 s landing demo is the canonical shape; scale the times down
for shorter cuts.

| Beat | Time | Content |
| --- | --- | --- |
| Hook | 0 to 5 s | The outcome or the pain, shown in the real interface, not a logo slate |
| Problem | 5 to 15 s | One situation the viewer recognizes from their own work |
| Real product | 15 to 70 s | Two or three real tasks, each ending on a visible result; one idea per scene |
| Outcome | 70 to 80 s | The result, with context and source, only if it is true |
| CTA | 80 to 90 s | One action that matches the page or post. The page CTA itself stays in HTML |

This is the same shape as a sales demo script, adapted from Corey Haines'
sales-enablement scene templates (MIT, see SOURCES). There, each workflow scene
restates the pain, shows the solution step by step, and names the outcome; a
differentiator scene shows what the buyer cannot do today; a proof scene gives
one matching example; the close proposes a specific next step. In a recorded
video you cannot ask a question mid-scene, so replace that live interaction point
with a held result and an on-screen prompt of what to look at. Also keep the
live-demo cautions: do not show every feature of an area, do not wander through
settings, and do not talk for minutes without a visible result. Variants:

- First demo: recap the viewer's situation, one scene per stated pain, one
  differentiator, one proof, one next step.
- Executive overview: problem and cost using the viewer's own numbers, the
  solution in one sentence, the business case with conservative inputs and the
  math shown, then the decision step. Use only figures the user or the viewer
  supplied; never invent a number.

### Truthfulness rules

- Show the real product and real flows. Do not present a mock-up as shipped.
- Use seeded, realistic, fictional data that stays consistent across scenes. No
  real customer data, no lorem ipsum.
- Disclose speed-ups. Cut dead waiting, or accelerate it 2 to 4x with an
  on-screen "sped up" tag. Never speed up something whose latency is a selling
  point, and do not make a slow feature look instant.
- Claims, metrics and testimonials must come from the claim inventory in
  [offer-brief](offer-brief.md); unsupported ones are cut or marked unverified.
- Do not show features, plans or roadmap items the viewer cannot get. Internal-only
  material never reaches a customer-facing video.

Check: every scene ends on a result the viewer can see, and every number on
screen has a source.

## Write the script to actions

Write the script as a list of actions the product performs, and add the words
after. Each scene is one row; keep it executable.

| Scene | Pain restated | Action on screen (exact clicks) | Result shown | Spoken line | Anchor word | Hold |
| --- | --- | --- | --- | --- | --- | --- |

- One idea per scene. If a scene needs "and then", split it.
- Verify each action against the real product or its code before recording. A
  script step the product cannot perform is a bug in the script.
- Write narration to describe what happens ("the report builds from the three
  imported sheets"). That doubles as audio description for viewers who cannot see
  the screen.
- Put the anchor word at the moment the viewer should look at the action.

## Record the product

- Record at a logical viewport sized for the output, at 2x device pixel ratio.
  For 16:9 use 1280x720 or 1440x810 CSS pixels, giving 2560x1440 or 2880x1620
  masters. They downscale cleanly to 1080p and leave room for 1.5 to 2x zooms
  (rule of thumb). Do not record a 4K desktop at 1x and zoom afterward; text
  turns soft.
- Legibility (rule of thumb): UI text at least about 16 px in a 1080p export, and
  about 28 to 32 px in a 1080x1920 export viewed on a phone. If it is smaller,
  zoom into the active region.
- Clean environment: a dedicated browser profile with no extensions, bookmarks
  bar or personal tabs; Do Not Disturb on; a neutral wallpaper; hide anything
  that dates the video, such as the menu-bar clock; notifications off.
- Scripted capture (Playwright or similar) gives repeatable takes when a flow
  must be re-recorded after a UI change. Seed the data in code so each run is
  identical.
- Prefer re-recording with clean data over repairing a bad take.
- If the product has a mobile interface, record that at 9:16 instead of
  reframing desktop footage.

### Privacy and redaction

- Before recording, remove real names, emails, API keys, tokens, URLs with
  secrets, customer data and anything under NDA. Check browser autofill, tabs,
  terminal history and notification previews.
- After recording, scan frames (a contact sheet) for leaks before any render.
- A fixed region can be blurred in post:

```bash
# Blur region w:h:x:y between 3 s and 9 s
ffmpeg -i rec.mp4 -filter_complex \
 "[0:v]crop=400:60:820:210,boxblur=20[b];[0:v][b]overlay=820:210:enable='between(t,3,9)'" \
 -c:a copy redacted.mp4
```

- Moving regions need tracking in an editor; the safer fix is to re-record. A
  blur that can be undone, or that a cropped copy reveals, is not redaction.

## Cursor, clicks, zoom and pace

- Cursor: enlarge it, move it slowly and deliberately, park it when idle, and
  show a click ripple or highlight. Recorders that log cursor events let you
  smooth, enlarge or hide the cursor in post. In HyperFrames, render a synthetic
  cursor and ripple from logged coordinates so it is deterministic.
- Zoom: ease in and out over about 400 to 600 ms, hold during the action, and
  zoom out to re-orient between tasks. Keep the count low; constant zooming
  disorients (rule of thumb). Animate zooms in HyperFrames with a CSS transform on
  the video inside a fixed stage, keyframed for deterministic easing.

```bash
# Static punch-in on a region for one segment (x:y offset 900:400)
ffmpeg -i rec.mp4 -vf "crop=1280:720:900:400,scale=1920:1080:flags=lanczos" -ss 12 -to 18 zoom.mp4
```

- Pace: one action per beat. Hold each result 1.5 to 2 s so it can be read
  (rule of thumb). Cut loading and waiting, or speed it up honestly. Do not type
  in real time; paste or accelerate.

## Align narration to actions with Whisper

Voice and screen disagree most when a scene is cut after the voice is recorded.
Use word timestamps to place cuts and actions.

```bash
whisper vo.wav --model medium --language en --word_timestamps True \
  --output_format json --output_dir out
```

Other Whisper runners expose the same word timestamps; use whichever is
installed. Proofread the transcript: product names and jargon are often wrong.

Rules:

1. Each action starts 0 to 300 ms after the word that names it. The viewer hears
   the word, then sees the thing.
2. Each scene has an anchor word that must be spoken inside the scene's time
   window.
3. Fail the build, and fix the edit or re-record the line, when an anchor is
   missing or an action is more than 300 ms from its word. Do not hide drift with
   a caption.

A runnable check (data in `scenes.json`: `id`, `anchor`, `window`, `action_at`):

```python
import json, re, sys
norm = lambda w: re.sub(r"[^\w]", "", w.lower())
words = [w for s in json.load(open(sys.argv[1]))["segments"] for w in s["words"]]
bad = 0
for sc in json.load(open(sys.argv[2])):
    t0, t1 = sc["window"]
    hit = next((w for w in words if norm(w["word"]) == norm(sc["anchor"])
                and t0 <= w["start"] <= t1), None)
    lag = None if hit is None else sc["action_at"] - hit["start"]
    if lag is None or not 0.0 <= lag <= 0.3:
        print("FAIL", sc["id"], "anchor missing" if lag is None else f"lag {lag:+.2f}s"); bad += 1
sys.exit(bad > 0)
```

Save it as `check_anchors.py` in the project workspace and run
`python3 -I check_anchors.py out/vo.json scenes.json`. Captions,
sidecar files and burned-in styling are in [captions](captions.md); loudness and
music ducking in [audio](audio.md).

Check: the anchor script exits clean on the final edit, not on a draft.

## One timeline, several aspect ratios

| Target | Size | Use |
| --- | --- | --- |
| 16:9 | 1920x1080 | Web embed, YouTube, sales |
| 1:1 | 1080x1080 | LinkedIn and X feeds |
| 4:5 | 1080x1350 | Instagram and Facebook feed |
| 9:16 | 1080x1920 | Reels, TikTok, Shorts |

Build one scene list (scenes, anchors, captions, hold times) and render each
aspect from it through its own layout. Do not edit each aspect separately.

- Redesign, do not crop, a screen recording for 9:16. A desktop UI cropped to
  9:16 loses context and its text becomes unreadable. Compose a layout instead: a
  zoomed UI panel, a headline and caption band inside the safe zone (see
  [social](social.md#safe-zones)), and a stacked or split arrangement for
  before-and-after.
- Cropping is fine when the subject is centered and self-contained, such as a
  person or a single phone screen:

```bash
ffmpeg -i in.mp4 -vf "crop=ih*9/16:ih:(iw-ih*9/16)/2:0,scale=1080:1920:flags=lanczos" \
  -c:a copy out_9x16.mp4
```

- Avoid blurred-fill letterboxing of 16:9 inside 9:16; it wastes most of the
  frame. Use it only as a last resort.

## Thumbnails and chapters

- Thumbnail: a 16:9 frame that shows the product result with five words or fewer
  of readable text; test it at small size. Web exports are in [web](web.md).
- Chapters: derive them from the scene list, one per task, starting at `00:00`
  for YouTube. Emit `chapters.vtt` and a short list for the page.

## Delivery checklist

- Length and structure match the destination; hook shows the real product in
  the first seconds.
- Anchor check passes; captions are proofread against the product's real names.
- Flash check done (no strobing, no hard white cuts) when the cut is fast.
- Redaction pass done on a contact sheet; no real data on any frame.
- Speed-ups are tagged; every number has a source.
- Files per aspect in `exports/`, named by destination and ratio, with captions,
  transcript, thumbnail and chapters for the web version.
- The user has approved the storyboard and the final render before anything
  leaves the project; the agent does not publish. See [publish-checklist](publish-checklist.md).
