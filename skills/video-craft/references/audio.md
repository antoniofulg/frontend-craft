# Audio

Read for the audio phase: clean the dialogue, place music under it, set the
level, and attach the result to the picture. Bad audio loses viewers faster
than a plain picture, so give it a real listening pass.

Order of operations: clean dialogue, then mix music and effects, then
normalize loudness once on the final mix, then mux with the video. Normalizing
before the mix, or twice, undoes the level work.

Rights for music and effects, and what to disclose, are in
[rights-and-disclosure](rights-and-disclosure.md). Design for muted viewing
is in [captions](captions.md#design-for-sound-off). There is no AI voice in
this skill: dialogue is the user's own recording.

## Clean the dialogue

Fix noise at the source first (a quieter room, the mic close to the mouth);
processing cannot recover a bad recording. For what remains, a light chain:

```bash
ffmpeg -i work/rough.mp4 -vn \
  -af "highpass=f=80,afftdn=nr=12:nf=-40,acompressor=threshold=-18dB:ratio=3:attack=20:release=250" \
  -ar 48000 work/dialogue.wav
```

`highpass` removes rumble below speech. `afftdn` reduces steady noise such as
hiss and fans; keep `nr` modest (about 6 to 12 dB), because heavy settings
leave a watery sound. `acompressor` evens out loud and quiet phrases. These
values are a starting point (rule of thumb); change one at a time and listen
with headphones and on a phone speaker. Filter options are in the
[FFmpeg filter docs](https://ffmpeg.org/ffmpeg-filters.html) (checked 2026-11-11).

Jump cuts: if room tone drops to silence at each seam, add 5 to 10 ms fades at
the cuts ([editing](editing.md)) or lay a quiet room-tone loop under the whole
edit. Remove only audible problems such as clicks, a mic bump, a loud breath
before a punchline; natural breath keeps speech human.

Check: no hiss pumping between phrases, no artifacts on sibilants, and every
cut sounds clean.

## Duck music under voice

Choose music the user is allowed to use and keep it supporting, not leading.
A static mix is simplest: music 15 to 25 dB below the dialogue while someone
speaks (rule of thumb). For music that must swell in pauses, duck with a
sidechain: the voice is the key, and the music is compressed whenever the
voice is present.

```bash
ffmpeg -i work/dialogue.wav -i <music.mp3> -filter_complex \
 "[1:a]volume=0.35[m];[0:a]asplit=2[key][v];[m][key]sidechaincompress=threshold=0.03:ratio=8:attack=20:release=400[duck];[v][duck]amix=inputs=2:duration=first:normalize=0[a]" \
 -map "[a]" -ar 48000 work/mix.wav
```

In `sidechaincompress` the first input is compressed and the second is the key.
`threshold` is a linear value between 0.00097563 and 1 and `ratio` runs from 1
to 20. `amix` normalizes its inputs by default; `normalize=0` keeps the levels
you set but needs a recent FFmpeg (7.1 or newer; check `ffmpeg -h filter=amix`).
Fade the music in and out (`afade`) and trim it to the video length. Raise the
music in intentional silence beats (before the call to action, for instance)
rather than keeping it flat.

When a scene is built in HyperFrames, its audio elements carry
`data-volume`, fades and `data-automation` envelopes for the same job; use
those there ([motion](motion.md)).

Effects on visible actions (a click, a whoosh on a cut) sit 1 to 2 dB under
the voice at most. Skip them when the style guide does not call for them.

## Set the loudness

Platforms re-encode and often normalize uploads. Neither TikTok, Instagram nor
YouTube Shorts publishes an official loudness target for uploaded videos that
could be verified (checked 2026-11-11), so the numbers here are a working
hypothesis. Around -14 LUFS integrated with a true peak of -1 dBTP is common
social practice; web and podcast material is often nearer -16 LUFS. Verify
against the platform's current help pages before a client delivery, and trust
a listening test on a phone speaker over a number.

Two-pass `loudnorm` is the accurate route. Pass 1 measures; pass 2 applies the
measurement linearly.

```bash
# Pass 1: read the JSON block at the end of the output
ffmpeg -i work/mix.wav -af loudnorm=I=-14:TP=-1:LRA=11:print_format=json -f null -

# Pass 2: copy the measured values in; linear=true needs all four
ffmpeg -i work/mix.wav -af "loudnorm=I=-14:TP=-1:LRA=11:measured_I=<input_i>:measured_TP=<input_tp>:measured_LRA=<input_lra>:measured_thresh=<input_thresh>:offset=<target_offset>:linear=true" \
  -ar 48000 work/master.wav
```

Defaults and ranges: `I` runs from -70 to -5 (default -24), `TP` defaults to
-2, `LRA` to 7. Without all the `measured_*` values it falls back to dynamic
mode, which can squash dynamics. `loudnorm` resamples internally, so always
set `-ar 48000` on the output. A true peak of -1.5 leaves more headroom for the
platform's lossy re-encode; choose it if clipping appears after upload.

Verify the result:

```bash
ffmpeg -i work/master.wav -af ebur128=peak=true -f null - 2>&1 | tail -14
```

Read `I` (integrated), `LRA` and the true `Peak` in the summary. Within about
1 LU of the target is fine; do not chase decimals.

## Attach to the picture

Replace the track without touching the video stream:

```bash
ffmpeg -i work/captioned.mp4 -i work/master.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -ar 48000 \
  -shortest -movflags +faststart work/final_candidate.mp4
```

Add the audio at the final export so the video is encoded once; a lossy
encode of already-lossy audio degrades it. If the music has a recognizable
source, the user must have the right to publish it: stop and resolve that in
[rights-and-disclosure](rights-and-disclosure.md) before rendering.

## Listening gate

Before the final render, give the user a preview with sound and a short list:
voice level against music, any cut that clicks, the ending, and the loudness
reading. Ask for approval. Silent web loops have no audio track at all
([web](web.md)).

Check: dialogue is intelligible over music at phone-speaker volume, loudness
was measured on the final mix, and the export has a single audio stream at
48 kHz.
