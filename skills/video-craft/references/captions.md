# Transcripts and captions

Read when transcribing speech, fixing names, and producing captions: burned-in
for social, sidecar files for the web. Also the home of sound-off design:
most social videos must make sense muted.

## Choose a Whisper backend

On Apple Silicon (checked 2026-11-11; re-verify versions with `brew info` and
the project pages):

| Backend | Install | Use when |
| --- | --- | --- |
| mlx-whisper | `pipx install mlx-whisper` (MIT); needs ffmpeg | Default. Fast on the GPU; model `mlx-community/whisper-large-v3-turbo` |
| whisper.cpp | `brew install whisper.cpp` (MIT) plus a ggml model download | Few dependencies, or when HyperFrames' own `transcribe` should reuse it |
| openai-whisper | `pip install openai-whisper` | Reference or fallback only; slowest on a Mac |

`large-v3-turbo` is large-v3 with minimal quality loss and cannot translate,
which is right for transcription. Ask before installing anything and before
downloading a model ([workspace](workspace.md)). Never use an English-only
model (`*.en`) for other languages.

```bash
# 16 kHz mono wav; whisper.cpp needs this, mlx-whisper accepts the video directly
ffmpeg -i <raw.mp4> -ar 16000 -ac 1 work/voice.wav

# mlx-whisper: pin the language, ask for word timestamps and JSON
mlx_whisper work/voice.wav --model mlx-community/whisper-large-v3-turbo --language <code> \
  --word-timestamps True --initial-prompt "<glossary as a natural sentence>" \
  -f json -o transcript/

# whisper.cpp: -ml 1 emits one word per segment; -sns/-nf reduce hallucinations
whisper-cli -m <ggml-large-v3-turbo.bin> -f work/voice.wav -l <code> -ml 1 -oj -ojf \
  --prompt "<glossary sentence>" -sns -nf
```

The whisper.cpp model comes from
[huggingface.co/ggerganov/whisper.cpp](https://huggingface.co/ggerganov/whisper.cpp)
(`ggml-large-v3-turbo.bin`). Store it outside the workspace's project folders.

## Portuguese and other non-English

- Pin `--language <code>` (`pt`, `es`, ...) every time. Auto-detection on a
  short clip with noise or music can pick the wrong language.
- Whisper's accuracy varies by language; Portuguese is among the stronger
  ones in the large-v3 results in the
  [Whisper README](https://github.com/openai/whisper). Still proofread.
- Unspaced scripts (Chinese, Japanese) come back as sentence-long "words": split
  each segment into short phrases and spread its time by character count, and
  check the characters against what is said.
- Burned-in text uses the language's real characters: use a font that covers
  them (accents, cedilla) and test with a line that contains each.

## HyperFrames transcribe

`hyperframes transcribe` is an alternative when HyperFrames is already in use.
Two behaviors matter:

- The default model is `small.en`, which **translates** non-English speech into
  English. Always pass the model: `--model small --language pt` for
  Portuguese (`--model small.en` for English).
- With no whisper installed it can install one system-wide by itself. Always
  add `--no-runtime-install`.

```bash
HYPERFRAMES_NO_TELEMETRY=1 npx hyperframes transcribe <file> --json \
  --model small --language <code> --no-runtime-install
```

It writes word-level JSON (`[{id, text, start, end}]`); `--to srt` or `--to vtt`
writes a sidecar. Behavior checked against the repository (commit `ab66e5b`,
2026-11-11); run `--help` for the current flags.

## Word timestamps and cleanup

Word times drive cuts, caption groups and anchor checks. Convert any backend's
output to a flat list `[{ "text", "start", "end" }]` in seconds: for
mlx-whisper, flatten `segments[].words[]` (`word` becomes `text`).

Clean before using:

- Whisper invents "Thank you." and repeats lines over silence. Find the final
  silence with `silencedetect=noise=-35dB:d=0.6` and drop words that start
  inside it. Speech sits around -16 to -26 dB.
- Reject a transcript with more than about 20% `♪` or `�` tokens or with
  nonsense words: retry with a larger model, a cleaner audio extract, or take
  lyrics from the user. In whisper.cpp use `-sns` and `-nf`; in mlx use
  `--hallucination-silence-threshold`.
- One word per entry. Match words to caption words by position, not by text,
  or a repeated word takes the wrong time.

## Glossary and names

Names, brands and jargon are where transcripts fail.

1. Put the terms from `glossary.txt` into the initial prompt as a natural
   sentence in the target language, for example a line that uses the brand, the
   product and the speaker's name. This only biases the decoder; it guarantees
   nothing.
2. Always follow with a deterministic find/replace pass from the `wrong -> right`
   pairs in `glossary.txt`, case-aware and on word boundaries, applied to the
   word list so timestamps are kept.
3. Show the user the transcript with the changed words highlighted and let
   them correct names before storyboarding. Add each correction to
   `glossary.txt` so the next video starts better.
4. Read the final SRT once end to end before burning anything in.

Keep the prompt short (whisper.cpp limits it to about half the model's text
context). A long prompt can cause the model to echo it.

Check: no name is misspelled, the language was pinned, trailing hallucinations
are gone and the user approved the corrected transcript.

## Formats

- **SRT/VTT**: sidecar text with cue times. Convert with
  `ffmpeg -i cap.srt cap.vtt`. Good for web, uploads and accessibility.
- **ASS**: styled text rendered by libass. Needed for word highlight, exact
  placement and fonts. `ffmpeg -i cap.srt cap.ass` converts the format but
  keeps default styling, so generate the ASS yourself for social.
- **Line length for readability**: about 42 characters per line and two lines
  at most for sidecar files (common subtitle practice, a rule of thumb). For
  short-form burn-in use the small groups below.

## Group the lines

Show one group at a time, break at a sentence end, a pause of about 150 ms or
more, or the word limit. Group size follows energy (HyperFrames' captions
guide, checked 2026-11-11):

| Style | Words per group |
| --- | --- |
| High energy, fast cuts | 2-3 |
| Conversational | 3-5 |
| Calm, explanatory | 4-6 |

A group opens at or before its first word and closes at or after its last; do
not let a caption sit at exactly 0 s, where it looks pre-existing: start it
0.1 to 0.3 s in. Never put captions over the speaker's face. Footage that
already carries burned-in text mid-clip needs a different position there; scan
a 1 fps contact sheet first.

## Karaoke and word highlight

Two approaches in ASS:

- **Sweep or fill**: `{\k<cs>}` switches per word and `{\kf<cs>}` sweeps, with
  `<cs>` in hundredths of a second. Text starts in `SecondaryColour` and turns
  to `PrimaryColour` as each word is sung, and stays turned for the line.
- **Current word only**: one event per spoken word showing the whole group,
  with the active word recolored. This is the clearest and what the script
  below does. Colors are `&HAABBGGRR` in styles and `&HBBGGRR&` in inline `{\c}`.

```python
#!/usr/bin/env python3
# words2ass.py <words.json> <out.ass> [group=3] [width=1080] [height=1920]
import json, sys
def ts(t):
    cs = round(t * 100)
    return f"{cs // 360000}:{cs // 6000 % 60:02d}:{cs // 100 % 60:02d}.{cs % 100:02d}"
src, dst = sys.argv[1], sys.argv[2]
n = int(sys.argv[3]) if len(sys.argv) > 3 else 3
w = int(sys.argv[4]) if len(sys.argv) > 4 else 1080
h = int(sys.argv[5]) if len(sys.argv) > 5 else 1920
words = [x for x in json.load(open(src)) if x["text"].strip()]
head = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {w}
PlayResY: {h}
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Inter,72,&H00FFFFFF,&H00FFFFFF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,6,0,2,90,205,670,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
HI, out = r"{\c&H00E5FF&}", []
for i in range(0, len(words), n):
    g = words[i:i + n]
    for j, cur in enumerate(g):
        end = g[j + 1]["start"] if j + 1 < len(g) else cur["end"]
        text = " ".join((HI + x["text"].strip() + r"{\r}") if k == j else x["text"].strip()
                        for k, x in enumerate(g))
        out.append(f"Dialogue: 0,{ts(cur['start'])},{ts(end)},Cap,,0,0,0,,{text}")
open(dst, "w").write(head + "\n".join(out) + "\n")
```

Run it with `python3 -I words2ass.py transcript/words.json work/captions.ass 3`.
It is a starting point: adjust font, size and colors from the approved
`STYLE_GUIDE.md`, and rerun after every transcript fix.

## Burn in with libass

Set `PlayResX/PlayResY` equal to the video (1080x1920) so sizes are pixels. An
SRT with `force_style` scales against libass's default script resolution and
produces surprising sizes, so prefer a real ASS file. In the style line,
`Alignment=2` is bottom-center, `BorderStyle=1` with `Outline` draws an
outline, `BorderStyle=3` an opaque box, `MarginV` lifts the baseline from the
bottom, and `MarginR` keeps text off the right-hand button rail.

```bash
ffmpeg -i work/vert.mp4 -vf "subtitles=work/captions.ass:fontsdir=<fonts-dir>" \
  -c:v libx264 -crf 18 -c:a copy work/captioned.mp4
```

This needs the FFmpeg build with libass ([workspace](workspace.md#preflight-checks)).
Use a font whose license allows the use (Inter is OFL) and point `fontsdir` at
it; a missing font falls back silently to another face. Run from the folder
that holds the files: colons and commas in paths must be escaped in filter
strings. Preview a frame before the full render:
`ffmpeg -ss 1.0 -i work/vert.mp4 -vf "subtitles=work/captions.ass" -frames:v 1 work/cap_check.png`.

## Place inside the safe band

Platform interfaces draw over the frame, and the safe numbers live in
[social](social.md#safe-zones); read them there and re-verify before a client
delivery. Two anchors, both checked 2026-11-11: HyperFrames' vertical guide
keeps words between 168 and 1330 px from the top of a 1080x1920 frame with
nothing under the right rail, while Meta's Reels ad guidance reserves the
bottom 35% (below about y=1250) and the top 14%. For one master that must serve
every platform, use the tighter result: captions end near y=1250, which is
`Alignment=2` with `MarginV=670`, and `MarginR=205` keeps text out of the right
rail. The sample style uses those values. A deliverable for a single known
platform can use that platform's looser limits.

Keep text at 28 px or larger at 1080x1920, about 5 words per claim line, and
check contrast on the brightest frame under the text. A scrim or outline
sized to the text helps; a full-width bar rarely does.

## Design for sound off

Many viewers watch muted, so a video must carry its meaning without audio.

- Caption all speech; make frame 0 communicate the hook visually.
- Put key numbers, names and the call to action on screen as text, in the safe
  band.
- Do not depend on a sound effect to explain an action; show the action.
- Check the preview once with the sound off ([audio](audio.md) covers the
  sound-on side).

Older figures say a large share of social video is viewed muted (a 2016
publisher report, via Digiday); treat the design rule as sound practice, not
as a current statistic.

## Sidecar captions for the web

Web videos with speech need captions that viewers can toggle and assistive
tech can read, so deliver a `.vtt` file instead of burned-in text:

```bash
ffmpeg -i transcript/<slug>.srt exports/<slug>.vtt
```

Hand the `.vtt`, a plain-text transcript and the language code to the page
owner; frontend-craft covers the `<track>` markup and the page-level
accessibility. Decorative, silent loops need no captions. Hand the delivery
details to [web](web.md) and [demo](demo.md).

Check: captions match the audio word for word, no group collides with the
platform UI, the active-word highlight lands on the right word, and the
sidecar `.vtt` opens in the target player.
