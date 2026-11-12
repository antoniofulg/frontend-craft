# Social video: specs, duration, covers and safe zones

Read when exporting a vertical video for Instagram Reels, TikTok or YouTube
Shorts, or when checking a layout against platform UI. Platform numbers drift.
Every figure below was checked on 2026-11-11 against the source named beside it;
re-verify before relying on a number for a delivery, and say which numbers you
re-checked. Figures marked derived come from arithmetic on those sources, not
from a platform page. Third-party figures are marked 3P.

## Specs per platform

| | Instagram Reels | TikTok | YouTube Shorts |
| --- | --- | --- | --- |
| Aspect accepted | 1.91:1 to 9:16 | 9:16 recommended; 16:9 and 1:1 accepted for ads | Square or vertical. Wider (for example 16:9) becomes long-form, not a Short |
| Minimum | 720 px wide, 30 fps or more | Ads: 540x960 or more. Creative guidance: 720p or more | No Shorts-specific minimum; the general encoding guide applies |
| Delivery master | 1080x1920 (Meta asks 1440x2560 for Reels ads only) | 1080x1920 (3P) | 1080x1920 (3P) |
| Container and codec | Ads: MP4/MOV, H.264, square pixels, progressive, fixed frame rate, AAC stereo 128 kbps or more | Ads: MP4/MOV and others, 516 kbps or more | MP4, H.264 High, AAC-LC, progressive, `moov` atom at the front |
| Longest | 3 min is eligible for recommendation; longer uploads exist but are not recommended to non-followers | In-app recording about 10 min; web upload longer (older Creator page, dated) | 3 min for uploads since 2024-10-15 |
| Cover | Grid shows 3:4 tiles (3P); "Adjust preview" re-crops | A frame chosen at upload (3P) | Custom thumbnail needs a verified account and desktop Studio; mobile picks a frame |

All checked 2026-11-11. Re-verify at:

- Instagram: https://help.instagram.com/1038071743007909, https://creators.instagram.com/blog/the-latest-with-instagram, Meta Reels ad specs https://www.facebook.com/business/ads-guide/update/video/instagram-reels
- TikTok: https://ads.tiktok.com/help/article/video-ads-specifications, https://ads.tiktok.com/resources/help/article/creative-best-practices
- YouTube: https://support.google.com/youtube/answer/15424877 (Shorts length and Content ID), https://support.google.com/youtube/answer/72431 (thumbnails), https://support.google.com/youtube/answer/1722171 (encoding)
- The Instagram help page still lists a stale 420x654 cover size. The 3:4 grid comes from third-party coverage (https://www.kapwing.com/resources/instagrams-new-grid-layout-size-and-dimensions-2025/), which disagrees with itself on tile pixels. Treat the aspect, not the pixel size, as the fact.

Check: for each destination, you can name the official page you read and the date, or you have said the figure is unverified.

## Export one master

Default recipe for one file that serves all three destinations. It is a working
hypothesis built from the table above, not a platform requirement.

```bash
ffmpeg -i edit.mov -vf "scale=1080:1920:flags=lanczos,fps=30,format=yuv420p" \
  -c:v libx264 -preset slow -crf 18 -profile:v high -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 48000 -ac 2 -movflags +faststart master-9x16.mp4
```

- 1080x1920, constant 30 fps (keep 60 fps only when the source and the motion
  need it), H.264 High, yuv420p, AAC-LC 48 kHz stereo.
- Loudness and music belong to [audio](audio.md); captions to [captions](captions.md).
- Keep a 1440x2560 render only when the user asks for a Meta Reels ad.
- Verify with `ffprobe`: dimensions, fps, codec, audio stream present, `moov` first.

## Non-9:16 and long-form

- A 16:9 upload to YouTube is a normal long-form video, not a Short. Use that
  deliberately for demos and talks, with its own thumbnail and chapters.
- Instagram and TikTok accept other ratios but pad them. Do not letterbox a 16:9
  screen recording inside 9:16 as the default; see the redesign rule in
  [demo](demo.md) and the layout work in [editing](editing.md).
- A 4:5 feed version is a separate render from the same timeline, not a crop of
  the 9:16 master.

## Choose the duration

- No platform publishes an ideal length. Eligibility limits are facts; ideal
  lengths are hypotheses to test on the account (see [social-channel](social-channel.md)).
- Start from the story: the shortest cut that keeps the promise. Cut breaths and
  setup before cutting substance.
- Use 60 s or less when the track contains third-party music. YouTube blocks a
  Short over one minute worldwide when it carries an active Content ID claim, and
  Shorts audio-library tracks are usually capped at 90 s (checked 2026-11-11,
  https://support.google.com/youtube/answer/15424877). A Short over a minute should use
  only owned or cleared audio; see [rights-and-disclosure](rights-and-disclosure.md).
- Reels up to 3 min are eligible for recommendation, but length that does not
  hold attention lowers average watch time. Do not pad toward the limit.

Check: the final length is chosen with a reason, and any video over 60 s has
audio the user owns or has cleared.

## Covers

- Reels show no cover in the feed; the cover matters on the profile grid and in
  Explore (plausible, 3P). Set it deliberately instead of leaving a random frame.
- The grid crops to 3:4. Derived: on 1080x1920, a centered 3:4 tile keeps
  y=240 to y=1680. Keep cover text and the face inside that band.
- Pick a frame from the video, add a short headline (five words or fewer) in the
  band, and test it at thumbnail size on a phone. Do not rely on a cover to
  explain the video; the hook does that.
- YouTube Shorts: a custom 9:16 JPG/PNG thumbnail needs a verified account and
  desktop Studio; otherwise choose a frame in the app (checked 2026-11-11,
  https://support.google.com/youtube/answer/72431).
- Export the cover as a separate PNG named for its platform so the user can
  upload it at post time.

Check: crop the cover to 3:4 and read the headline at about 120 px wide.

## Safe zones

Platform UI covers part of a vertical frame: username and caption at the bottom,
an action rail on the right, search and tabs at the top. Keep text, logos, faces
and key action out of those areas, or the platform hides them.

| Platform | What the platform says (checked 2026-11-11) | Pixels on 1080x1920 |
| --- | --- | --- |
| Instagram / Facebook Reels | For Reels ads: keep the top 14%, bottom 35% and sides 6% free of text, logos and key elements (https://www.facebook.com/business/ads-guide/update/video/instagram-reels). One 3P source says 40% at the bottom when a disclaimer is shown | Top 269, bottom 672, sides 65 (derived from the percentages) |
| TikTok | No fixed number. The safe zone depends on orientation, caption length and extra formats; TikTok publishes downloadable safe-zone template files (https://ads.tiktok.com/help/article/video-ads-specifications) | Template only. 3P ranges: top 120 to 240, bottom 320 to 660, right rail 120 to 300 |
| YouTube Shorts | Google Ads asks you to keep supers, logo and product inside the red safe area of its 1080x1920 template (https://support.google.com/google-ads/answer/13547298). No organic Shorts number is published | Template only. 3P values resemble TikTok's |

The Meta numbers are for ads. Organic Reels UI can differ; treat them as the
best official anchor, not as a guarantee for organic posts.

### One conservative box for a single master (derived, not official)

When one file must serve all three platforms, work inside this union of the
sources above:

| Element | Region on 1080x1920 |
| --- | --- |
| Text, faces, logos | x from 65 to 1015, y from about 270 to about 1250 |
| Hook headline | y 300 to 700 |
| Captions | y 1000 to 1250, above the caption and username block |
| Right rail | In the lower half, keep a further 140 px clear on the right (x up to about 875) |
| Cover headline | Inside y 240 to 1680 (grid crop), and inside the box above if it also runs in-video |

This box also sits inside the 3:4 grid band. Background imagery and color may
bleed into every zone; only content that must stay readable is constrained.
Long TikTok captions push the platform's own zone upward, so leave margin.

### Re-verify

Safe zones change with app releases.

1. Download or draw the platform's current template (Meta Ads Manager safe-zone
   guardrail, TikTok safe-zone files, Google Ads template) and overlay it.
2. Post a test: an Instagram trial reel (shown to non-followers only; see
   https://creators.instagram.com/blog/instagram-trial-reels), a private TikTok,
   or an unlisted Short. Screenshot it on a phone and compare.
3. If a platform number differs from this file, trust the screenshot, then tell
   the user so the reference can be updated.

### Overlay and contact-sheet check

Render guides over sampled frames and look at them. This catches captions under
the caption block and headlines under the top tabs before export.

```bash
ffmpeg -i master-9x16.mp4 -vf "\
drawbox=x=0:y=0:w=1080:h=269:color=red@0.30:t=fill,\
drawbox=x=0:y=1248:w=1080:h=672:color=red@0.30:t=fill,\
drawbox=x=0:y=0:w=65:h=1920:color=red@0.30:t=fill,\
drawbox=x=1015:y=0:w=65:h=1920:color=red@0.30:t=fill,\
drawbox=x=875:y=960:w=205:h=288:color=orange@0.30:t=fill,\
fps=1/2,scale=270:-1,tile=6x4" -frames:v 1 safe-zones-sheet.png
```

The red bands are the Meta percentages; the orange block is the right rail. Add
the TikTok and YouTube template PNGs as an `overlay` when you have them. Read the
sheet: nothing essential in a red or orange area at any sampled time. Sample
denser (`fps=1`) around title cards and caption-heavy beats.

Check: every sampled frame has headline, captions and faces inside the box, and
the cover headline survives the 3:4 crop.

For the full pre-export and pre-post lists, see [publish-checklist](publish-checklist.md).
