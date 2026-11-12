# Editing with FFmpeg

Read for the rough cut and the final encode of footage-first videos: talking
heads and screen recordings. Graphics-first videos are built in HyperFrames
([motion](motion.md)). This reference covers cuts, reframing, previews, export
and verification. Captions are in [captions](captions.md), sound in
[audio](audio.md), web loops and embeds in [web](web.md).

Conventions: inputs come from `raw/` and are never written to; outputs go to
`projects/<slug>/work/` (see [workspace](workspace.md)). Commands use
placeholders. FFmpeg flags are stable but check `ffmpeg -h` or the
[docs](https://ffmpeg.org/ffmpeg.html) when a build behaves differently
(checked 2026-11-11).

## Probe and normalize first

```bash
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,avg_frame_rate,sample_rate:format=duration -of json <in.mp4>
```

Phone and screen recordings are often variable frame rate (`r_frame_rate` and
`avg_frame_rate` differ). Cut points then drift against audio. Convert each
source once to a constant-rate working copy and cut from that:

```bash
ffmpeg -i <raw.mov> -fps_mode cfr -r 30 -c:v libx264 -crf 16 -preset fast -pix_fmt yuv420p \
  -c:a aac -ar 48000 -b:a 192k work/<clip>_cfr.mp4
```

FFmpeg applies rotation metadata automatically. Pick one frame rate for the
whole project (30 for most social work; keep 24 or 25 only when the footage or
brand calls for it) and do not mix.

## Trim and join

```bash
# Frame-accurate trim, re-encoded. Input-side -ss/-to seeks fast and is exact when re-encoding.
ffmpeg -ss 00:00:12.500 -to 00:00:31.000 -i <in.mp4> -c:v libx264 -crf 18 -preset medium -c:a aac -b:a 192k work/cut.mp4

# Join clips that share codec, size, frame rate and sample rate (no re-encode).
# list.txt lines:  file 'cut_01.mp4'
ffmpeg -f concat -safe 0 -i list.txt -c copy work/joined.mp4

# Join mixed sources (re-encodes).
ffmpeg -i a.mp4 -i b.mp4 -filter_complex "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v][a]" -map "[v]" -map "[a]" work/joined.mp4
```

`-c copy` trims land only on keyframes, so use it for storage, not for edit
points. Speed changes: `-vf setpts=PTS/2 -af atempo=2` doubles speed; keep
sped-up waits honest and visible in demos ([demo](demo.md)).

## Jump cuts and silence removal

`silenceremove` acts on audio only and desyncs the picture. Cut both streams
from the same ranges instead.

1. Prefer word gaps from the Whisper JSON: keep each phrase from its first
   word start minus 0.10 s to its last word end plus 0.15 s. This also lets
   you drop fillers and false starts, which silence detection cannot see.
2. Or detect silence: `ffmpeg -i <in.mp4> -af silencedetect=noise=-35dB:d=0.4 -f null - 2> work/silence.log`
   and read `silence_start` and `silence_end`. Speech sits around -16 to -26 dB,
   so -30 to -40 dB is a sensible threshold (rule of thumb; tune per room). The
   filter defaults, -60 dB and 2 s, are too loose for editing.
3. Invert the silences to keep ranges, pad each by about 0.10 to 0.15 s so
   words are not clipped, and drop ranges shorter than about 0.3 s.

Small cuts via select (a few ranges):

```bash
ffmpeg -i <in.mp4> \
  -vf "select='between(t,0,4.2)+between(t,5.1,9.8)',setpts=N/FRAME_RATE/TB" \
  -af "aselect='between(t,0,4.2)+between(t,5.1,9.8)',asetpts=N/SR/TB" \
  -c:v libx264 -crf 18 -c:a aac work/jumpcut.mp4
```

For many ranges, use the EDL below. [auto-editor](https://github.com/WyattBlue/auto-editor)
(Unlicense) automates silence cuts if the user approves installing it. A
cut every second or two hides pauses but also removes natural breath; listen
to the result and restore a beat before a punchline or a number.

## EDL CSV to commands

Keep the cut list in a file the user can read and edit. One row per kept
range; no commas inside fields. Run from the project folder, so `raw/` is `../../raw/`.

```csv
id,source,in,out,note
01,../../raw/<clip-a>.mp4,00:12.400,00:15.100,hook
02,../../raw/<clip-a>.mp4,00:31.000,00:36.800,problem
```

```bash
: > work/list.txt
while IFS=, read -r id src tin tout note; do
  [ "$id" = id ] && continue
  ffmpeg -y -ss "$tin" -to "$tout" -i "$src" -c:v libx264 -crf 18 -preset medium -r 30 -pix_fmt yuv420p \
    -c:a aac -ar 48000 -b:a 192k "work/seg_$id.mp4"
  echo "file 'seg_$id.mp4'" >> work/list.txt
done < work/edl.csv
ffmpeg -y -f concat -safe 0 -i work/list.txt -c copy work/rough.mp4
```

Every segment shares codec, size, rate and sample rate, so the join needs no
re-encode. Add a 5 to 10 ms audio fade at each seam (`-af afade=t=in:d=0.01,afade=t=out:st=<dur-0.01>:d=0.01`)
if cuts click. Map EDL rows to storyboard scenes by id so a revision touches
one row. The EDL-file idea follows the layered pipeline in
`affaan-m/ecc` (MIT; see SOURCES).

Check: the rough cut's duration matches the sum of the EDL, speech starts and
ends on the right words, and no audio click or clipped syllable at a seam.

## Reframe 16:9 to 9:16

Choose by content, not by habit.

| Source | Method | Why |
| --- | --- | --- |
| Talking head, subject near center | Crop | Fills the frame; keeps resolution if the source is 4K or at least 1080p |
| Subject off-center or moving | Crop with an x offset per scene | `crop=ih*9/16:ih:<X>:0`; change X at cuts, not mid-shot |
| Wide scene, context matters | Blurred pad, last resort | Whole frame stays visible but uses little of the screen |
| Screen recording, dashboard, wide UI | Redesign | A cropped desktop loses context and its text is unreadable on a phone |

```bash
# Center crop to 1080x1920
ffmpeg -i <in.mp4> -vf "crop=ih*9/16:ih,scale=1080:1920:flags=lanczos,setsar=1" -c:a copy work/vert_crop.mp4

# Blurred pad: sharp original in the middle, blurred copy behind
ffmpeg -i <in.mp4> -filter_complex \
 "[0:v]split[a][b];[a]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=20:2[bg];[b]scale=1080:-2[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2,setsar=1" \
 -c:a copy work/vert_pad.mp4
```

Redesign for screen recordings: compose a vertical layout in HyperFrames, such
as the UI zoomed to the active region in the upper band, a headline or
caption below it, and a split for before and after. One timeline, several
aspect templates: do not edit each aspect separately. Record mobile UI at 9:16
natively when the product has a mobile app. Details and safe areas:
[demo](demo.md) and [social](social.md#safe-zones).

A 1080p source cropped to 9:16 has only 608 px of width; scaling it to 1080
softens the image. Shoot or screen-record with a vertical delivery in mind
when possible.

## Low-resolution preview

The user approves the rough cut at preview quality before any final encode.

```bash
ffmpeg -i work/rough.mp4 -vf scale=540:960 -c:v libx264 -crf 30 -preset veryfast -r 30 -pix_fmt yuv420p \
  -c:a aac -b:a 96k work/preview_rough.mp4
```

Show the preview with a short change list (cuts, order, reframe), then wait.
Previews of the later phases follow the same rule: low-res, quick, and
rebuilt after every change. Never replace an approved preview silently.

## Export presets

Final encode only after the user approves the finished preview. Write to
`exports/`.

```bash
# Social master 1080x1920 for Reels, TikTok, Shorts
ffmpeg -i <final-mix.mov> -c:v libx264 -profile:v high -level:v 4.1 -pix_fmt yuv420p -preset slow -crf 18 -r 30 \
  -c:a aac -b:a 192k -ar 48000 -movflags +faststart exports/<slug>_1080x1920.mp4
```

Constant frame rate (`-r 30`), 4:2:0 8-bit and `+faststart` (moov atom at the
front) are what keep playback and upload processing simple. A different crf
trades size for quality; 18 is a quality-first default for a master that the
platforms re-encode anyway. Platform limits (length, file size, resolution,
bitrate) change: take them from [social](social.md) and re-verify at the
platform's own help pages before the final render.

Landing-page loops and embedded players use different codecs, no audio,
posters and size budgets; hand those to [web](web.md). Feed variants (4:5,
1:1) use the same timeline with a different crop or layout.

## Verify the file

```bash
ffprobe -v error -show_entries stream=codec_name,profile,pix_fmt,width,height,r_frame_rate,avg_frame_rate,sample_rate,channels:format=duration,size -of json exports/<file>.mp4

# moov before mdat means faststart worked
ffmpeg -v trace -i exports/<file>.mp4 2>&1 | grep -m2 -E "type:'(moov|mdat)'"

# Frame 0 and a mid frame, to look at
ffmpeg -i exports/<file>.mp4 -frames:v 1 work/check_first.png
ffmpeg -ss 00:00:05 -i exports/<file>.mp4 -frames:v 1 work/check_mid.png
```

Expect h264 High, `yuv420p`, 1080x1920, `r_frame_rate` equal to
`avg_frame_rate`, aac at 48000 Hz, and a duration within a frame of the
approved preview. Check loudness with the commands in [audio](audio.md).
Open the first frame (it is the hook and the thumbnail), and watch the whole
file once on a phone-sized window. The full pre-publish list is
[publish-checklist](publish-checklist.md); the agent never publishes.

Check: the probe matches the preset, frame 0 is the hook, and the export is
named, versioned and placed in `exports/`.
