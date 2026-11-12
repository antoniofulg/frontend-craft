# Web video: files for landing pages and embeds

Read when producing a hero or background loop, a section clip, a demo for a
page, or an upload-ready master for a player. This reference owns the files:
medium choice, loop craft, encoding, posters, captions and the delivery
manifest. frontend-craft owns the page: `<video>` markup and attributes, loading
priority and preload, the pause control, aria and semantics, CSS overlays and
scrims, reduced-motion branches and contrast verification in the page. Do not
write that markup here; hand frontend-craft the manifest at the end of this file.

Web codec and browser facts below were checked on 2026-11-11 against MDN
(https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs)
and web.dev. File-size budgets and loop lengths are rules of thumb, labelled as
such; adjust them to the project's own performance budget.

## Choose the medium first

Make a video only when motion carries information or atmosphere that another
medium cannot.

| Need | Better medium |
| --- | --- |
| Motion adds no evidence | A still image |
| Gradients, shapes, UI micro-motion, themeable decoration | CSS or SVG animation: sharper, smaller, themeable |
| The buyer needs hands-on use to decide | An interactive demo (frontend-craft decides and builds it) |
| Photographic or complex rendered motion, real product footage | Video |

If a still or CSS serves the section, say so and stop. A page with a poster only
is a valid outcome. Never ship an animated GIF; convert it to a video loop.

## Background and hero loops

- Length (rule of thumb): 6 to 15 s. Under about 6 s the repeat is obvious; over
  about 15 s the file grows for little gain.
- Motion: slow and continuous, such as drift, ambient subject motion or a
  parallax-free pan. No hard cuts, camera shake or flashes. Keep the subject
  away from the area where page text will sit.
- No essential text in the video. Headlines, numbers and CTAs stay in HTML so
  they can be read by assistive tech, translated and reflowed.
- Grade for the text that will sit on top: mid-low luminance and low local
  contrast under the copy area. Export a scrim-free master and, if useful, a
  variant with a gradient scrim baked in, so frontend-craft can choose.
- Record the text region as coordinates (a percentage box) in the manifest.
- Strip audio with `-an`. A loop without an audio track also satisfies the iOS
  inline-autoplay rule without depending on `muted`.

Check: watch the loop three times at full screen; the seam, text region and
motion read calm on a phone-sized crop.

### Make the seam invisible

1. Best: a true cycle. A HyperFrames or CSS animation whose period divides the
   duration loops exactly. See [motion](motion.md).
2. Crossfade the tail into the head. Output length is L minus D:

```bash
L=12; D=1   # clip length and crossfade, seconds
ffmpeg -i clip.mp4 -filter_complex \
 "[0:v]trim=0:$D,setpts=PTS-STARTPTS[head];[0:v]trim=$D,setpts=PTS-STARTPTS[body];\
  [body][head]xfade=transition=fade:duration=$D:offset=$((L-2*D)),format=yuv420p[v]" \
 -map "[v]" -an -c:v libx264 -crf 18 loop-master.mp4
```

3. Ping-pong (forward then reversed) only for motion without visible direction
   or physics, such as clouds or light. Reversed water, smoke or walking looks
   wrong.
4. Check the seam numerically and by eye:

```bash
ffmpeg -sseof -0.04 -i loop.mp4 -frames:v 1 last.png
ffmpeg -i loop.mp4 -frames:v 1 first.png
ffmpeg -i first.png -i last.png -lavfi ssim -f null -   # closer to 1 is better
```

## Encode the ladder

Order matters: the browser takes the first `<source>` it can play. AV1 is first
for the smallest files; H.264 in MP4 is the required fallback and always last.

| Codec | Support (checked 2026-11-11) | Role |
| --- | --- | --- |
| AV1 | Chrome 70+, Firefox 67+, Edge 121+. Safari 17+ only with a hardware decoder (recent Apple silicon and iPhones) | First source |
| VP9 (WebM) | All current browsers | Optional middle tier, mostly superseded by AV1 |
| HEVC (`hvc1`) | Safari; elsewhere hardware-dependent; MDN tables disagree | Optional, mainly for alpha video on Safari |
| H.264 (MP4) | All browsers | Required last source |

Recipes (all drop audio and keep 8-bit 4:2:0, even dimensions, faststart):

```bash
VF="scale=1920:-2:flags=lanczos,fps=30,format=yuv420p"

# H.264 fallback, High profile, level 4.0
ffmpeg -i master.mov -vf "$VF" -an -c:v libx264 -preset slow -crf 26 \
  -profile:v high -level 4.0 -movflags +faststart hero-1080.h264.mp4

# AV1 with SVT-AV1 (lower preset number = slower, smaller)
ffmpeg -i master.mov -vf "$VF" -an -c:v libsvtav1 -preset 5 -crf 34 \
  -g 240 -movflags +faststart hero-1080.av1.mp4
```

- `-movflags +faststart` moves the `moov` atom to the front so playback can begin
  before the download ends. Verify it.
- Codec strings let the browser skip a source without fetching it. Derive the
  exact string from the encoded file with `ffprobe` or MP4Box `-info`. Typical
  1080p30 values: `av01.0.08M.08` (Main, level 4.0, 8-bit) and `avc1.640028`
  (High, level 4.0). These are built from the ISO-BMFF grammar; confirm them
  against the file rather than trusting the example.
- Safari without AV1 hardware must fall through to H.264. Test on a real device;
  whether `canPlayType` rejects AV1 there reliably is unconfirmed.
- Add VP9 or HEVC only when a requirement justifies another file.
- Progressive MP4 has no adaptive bitrate. For long or large videos use HLS or a
  streaming service (see Embedded players).

### Size budgets (rules of thumb, not standards)

| Variant | Dimensions | fps | Target for 8 to 12 s (AV1 / H.264) |
| --- | --- | --- | --- |
| Desktop | 1920x1080 or 1600 wide | 24 to 30 | about 1.5 MB / about 2.5 MB |
| Mobile | 720 wide, crop matched to the phone layout | 24 to 30 | about 0.6 MB / about 1 MB |
| Poster | AVIF or WebP of frame 0 | | about 100 KB |

If a file overshoots, lower fps or duration before dropping quality below
legibility. Report the real sizes in the manifest; the page owner decides.

### Breakpoint variants

`<source media="(max-width: 599px)">` works in current Safari, Firefox 120+ and
Chromium (120 per MDN notes, web.dev says 123; verify). The source is chosen once
when the element initializes, not on resize, and the first matching source wins.
So produce, for each breakpoint, the full ladder and tell frontend-craft to list
media-qualified sources first.

```bash
# Mobile variant: re-crop to a portrait-friendly region, then 720 wide
ffmpeg -i master.mov -vf "crop=ih*4/5:ih:(iw-ih*4/5)/2:0,scale=720:-2,fps=30,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 27 -movflags +faststart hero-720.h264.mp4
```

Re-frame by intent, not blind center crop: place the subject where the phone
layout needs it. Every variant and the poster share the aspect ratio the page
reserves, so layout does not shift.

## Poster is frame 0

The poster doubles as the fallback and often as the Largest Contentful Paint
element: a `<video>` counts at poster load or first-frame time, whichever is
earlier (https://web.dev/articles/lcp). So:

```bash
ffmpeg -i hero-1080.h264.mp4 -frames:v 1 -q:v 80 poster.webp
ffmpeg -i hero-1080.h264.mp4 -frames:v 1 -c:v libaom-av1 -still-picture 1 -crf 30 poster.avif
```

- Export the exact first frame of the loop, so nothing visibly swaps when
  playback starts. Keep it small.
- It must look finished alone. These cases show only the poster: autoplay
  blocked by the browser, iOS Low Power Mode (community-reported, not an Apple
  document), Data Saver, `prefers-reduced-motion`, a failed load, a pause.
- Say in the manifest whether the asset is above the fold. Preload and
  `fetchpriority` are frontend-craft's call.

## Accessibility of the asset

| Rule | What you decide |
| --- | --- |
| WCAG 2.2.2 Pause, Stop, Hide (A): auto-starting motion over 5 s alongside other content needs a way to pause or stop (https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | Choose the duration: a loop of 5 s or less that stops after a few repeats avoids the need; a longer or endless loop requires a page control from frontend-craft. Supply the still for the stopped state |
| WCAG 2.3.1 Three Flashes (A): at most 3 flashes per second, or below the flash thresholds | No strobing, hard cuts to white or rapid exposure changes in promos. Check fast-cut edits with PEAT or Harding FPA, or a frame-luminance script |
| 1.2.x captions, audio description or media alternative for informative prerecorded video | Produce WebVTT captions and a transcript; write narration that names what happens on screen so a separate description track is not needed. A purely decorative loop needs none; mark it decorative in the manifest |
| 1.4.3 / 1.4.11 text contrast must hold on every frame | Check the brightest frame in the text region (below) and grade or scrim to fix |

```bash
# Mean luma per frame in the text region (w:h:x:y); the last line is the brightest frame
ffmpeg -i hero.mp4 -vf "crop=800:300:0:390,signalstats,metadata=print:key=lavfi.signalstats.YAVG" \
  -f null - 2>&1 | grep YAVG | sort -t= -k2 -n | tail -1
```

Turn that luma into a contrast ratio against the planned text color, then
re-check on the page. Audio that autoplays for more than 3 s is a separate WCAG
1.4.2 issue; loops carry no audio.

Check: the manifest states decorative or informative, the stop behavior, the
flash result and the worst-case text contrast, with the check you ran.

## Embedded players

| Option | Strengths | Costs |
| --- | --- | --- |
| Self-hosted file | Full control, no third-party script, no branding | Progressive MP4 only; you pay bandwidth and build captions UI |
| YouTube | Free hosting, reach and search on YouTube, auto captions, chapters | Heavy iframe, related videos, brand chrome (`youtube-nocookie` reduces cookies) |
| Vimeo | Clean player, background mode, privacy controls | Paid tiers, iframe weight |
| Mux / Cloudflare Stream | Adaptive HLS/DASH, thumbnail APIs, analytics, captions | Per-minute pricing (check current), vendor lock-in |

Pick by need: a demo that should also rank on YouTube goes there; a brand-sensitive
page with a short clip stays self-hosted; long product tours want adaptive
streaming. State the trade-off and let the user decide.

- Facade thumbnail (video-craft's job): a 16:9 frame that shows the product
  result, not a logo slate, with text of about five words or fewer, readable at
  small size. Export AVIF or WebP plus a 1280x720 JPG fallback. frontend-craft
  builds the click-to-load facade.
- Chapters: for YouTube, put timestamps in the description starting at `00:00`,
  at least three chapters, each 10 s or longer
  (https://support.google.com/youtube/answer/9884579). For a self-hosted file,
  also emit `chapters.vtt`, but expect native players to ignore it; give
  frontend-craft the list to render in HTML.
- Show the length next to the title; hand it over as `duration_s`.

## Delivery manifest for frontend-craft

Write `exports/web/manifest.json` beside the files and summarize it to the user.

```json
{
  "id": "hero-loop",
  "role": "background",
  "informative": false,
  "above_the_fold": true,
  "duration_s": 10,
  "loops": true,
  "stops_after_s": null,
  "aspect": "16:9",
  "has_audio": false,
  "sources": [
    {"file": "hero-720.av1.mp4", "type": "video/mp4; codecs=\"av01.0.08M.08\"", "media": "(max-width: 599px)", "bytes": 0},
    {"file": "hero-720.h264.mp4", "type": "video/mp4; codecs=\"avc1.640028\"", "media": "(max-width: 599px)", "bytes": 0},
    {"file": "hero-1080.av1.mp4", "type": "video/mp4; codecs=\"av01.0.08M.08\"", "bytes": 0},
    {"file": "hero-1080.h264.mp4", "type": "video/mp4; codecs=\"avc1.640028\"", "bytes": 0}
  ],
  "poster": "poster.avif",
  "poster_fallback": "poster.webp",
  "text_region": {"x_pct": 8, "y_pct": 30, "w_pct": 45, "h_pct": 40, "worst_case_luma": 0.18},
  "captions": null,
  "transcript": null,
  "flash_check": "no flashes; PEAT not run, luminance script passed",
  "notes": "Scrim-free master; apply a CSS scrim if copy contrast fails on the page."
}
```

Fill real values from `ffprobe` and the files on disk; leave nothing as a
placeholder. Add `captions` (WebVTT), `transcript` and `chapters` for informative
videos. Verify before handing off:

```bash
ffprobe -v error -show_entries stream=codec_type,codec_name,width,height,r_frame_rate \
  -of compact hero-1080.h264.mp4        # no audio stream, expected size
```

Check: every listed file exists, the first source is AV1, the last is H.264, no
file has an audio stream, and the poster matches frame 0.
