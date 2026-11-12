# Workspace and preflight

Read at the start of a video job, before touching any file or running any tool.
This reference owns the folder layout, the tool checks, the install proposals
and the safety defaults for HyperFrames. The phases themselves live in
SKILL.md; each later reference says what to do inside a phase.

## Use or create the workspace

Ask where the user keeps video work. If a workspace already exists, adopt its
names and structure. If not, propose this layout and let the user rename any
part; keep the names in English unless the user chooses otherwise.

```text
Video Editor/
  STYLE_GUIDE.md           reusable across videos; approved by the user
  glossary.txt             names and jargon: Whisper prompt + wrong->right fixes
  raw/                     original recordings, never modified
  references/              private study material, deleted after study
    analysis/<id>/         cuts.txt, sheet.png, frames, transcript, meta.json
  projects/<slug>/
    BRIEF.md               goal, destination, length, CTA, audience
    STORYBOARD.md          frontmatter + scene table (see storyboard.md)
    transcript/            word JSON, SRT/VTT, ASS
    work/                  proxies, rough cuts, EDL, previews
    motion/                HyperFrames project, when one is needed
  exports/                 finals: <slug>_1080x1920.mp4, <slug>_web.mp4, poster
```

Rules for the tree:

- `raw/` is read-only in practice. Every derived file goes to `work/`; never
  re-encode or rename in place. Copy before any destructive command.
- The workspace lives outside the product repository. Footage, transcripts and
  exports are large, private and often contain client data; do not commit them.
- `glossary.txt` is one entry per line: a canonical spelling, optionally
  `wrong -> right` pairs for recurring mis-hearings (see
  [captions](captions.md#glossary-and-names)).
- Keep one `STYLE_GUIDE.md` per brand or channel, not per video.
- Name outputs `<slug>_<size>.<ext>` and never overwrite an approved export;
  add a version suffix instead.

Check: the raw folder is untouched, every project has a `BRIEF.md`, and nothing
private sits inside a repository that gets pushed.

## Preflight checks

Run the checks, report what is present and missing, then stop for an answer.
Installing is never part of a check.

| Tool | Check | Needed for |
| --- | --- | --- |
| FFmpeg with libass | `ffmpeg -hide_banner -filters \| grep -E 'subtitles\|ass\|drawtext'` | every path; burn-in captions |
| FFmpeg 7.1 or newer | `ffmpeg -version` | `amix normalize=0` in [audio](audio.md); older builds reject it |
| ffprobe | `ffprobe -version` | probing, verification |
| Node.js 22 or newer | `node --version` | HyperFrames only |
| Whisper | `which mlx_whisper whisper-cli` (either one) | transcripts, captions |
| yt-dlp | `yt-dlp --version` | reference study only, optional |
| PySceneDetect | `scenedetect version` | cut detection, optional |

FFmpeg: the Homebrew `ffmpeg` formula is built slim (9.0.2 when checked
2026-11-11) and has no libass or freetype, so the `subtitles`, `ass` and
`drawtext` filters are missing. Burned-in captions need `ffmpeg-full`, which is
keg-only: call it through `$(brew --prefix ffmpeg-full)/bin/ffmpeg` or put that
directory first on `PATH` for the session. If `ffmpeg -filters` already shows
`subtitles`, nothing needs to change. Re-verify at
[formulae.brew.sh](https://formulae.brew.sh/formula/ffmpeg) and
[ffmpeg-full](https://formulae.brew.sh/formula/ffmpeg-full).

Skip checks the job does not need. A web loop made only from HTML needs Node
and Chrome but not Whisper; a talking-head Reel needs FFmpeg and Whisper but
not Node unless motion is requested.

## Propose installs, then wait

Present the missing items with the exact command, what it changes on the
machine and what it downloads, and run nothing until the user says yes. Offer
each item separately; consent to one is not consent to all.

```bash
brew install ffmpeg-full                 # libass, freetype, rubberband; large
brew install whisper.cpp                 # CLI is whisper-cli; models are separate downloads
pipx install mlx-whisper                 # Apple Silicon; or use a venv; needs ffmpeg
brew install yt-dlp                      # reference study only
brew install node                        # if Node 22+ is missing; or the user's version manager
```

Model files are the biggest download: `large-v3-turbo` is roughly 1.5 GB in
ggml form (rule of thumb; check the model page). Say the size before fetching.
Choose between mlx-whisper and whisper.cpp in [captions](captions.md#choose-a-whisper-backend).
Package versions and formula names change; confirm with `brew info <name>`
when a command fails (checked 2026-11-11).

Check: every missing tool is either installed with the user's approval or
replaced by a path that does not need it, and the filter check was rerun after
any FFmpeg change.

## HyperFrames safety defaults

HyperFrames renders HTML to video locally (Apache-2.0; repository
[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)). Local
rendering is free and needs no account. Defaults for this skill:

- **Telemetry off.** Export `HYPERFRAMES_NO_TELEMETRY=1` (and `DO_NOT_TRACK=1`)
  for every HyperFrames command unless the user opts in. The CLI otherwise
  sends anonymous usage data, account-linked after sign-in. Permanent opt-out:
  `npx hyperframes telemetry disable`.
- **No beacon, no usage probe.** HyperFrames skills tell the agent to run a
  usage beacon (`npx hyperframes events --skill=<name>`) and
  `npx hyperframes usage --json`, which reads the agent harness's own login.
  Do not run either unless the user asks.
- **Transcription never installs by itself.** `hyperframes transcribe` can
  install whisper system-wide (a Homebrew install, or a source build into its
  cache) when none is found. Always pass `--no-runtime-install`, and follow
  [captions](captions.md#hyperframes-transcribe) for model and language.
- **Pin the CLI.** `npx` fetches from npm on each run; use
  `npx hyperframes@<version>` once the user approves a version, and say which.
- **Downloads.** Features such as `remove-background` fetch models (168 MB when
  checked); tell the user before the first run.
- **No HeyGen login.** Nothing in this skill needs one. Out of scope: HeyGen
  voices and avatars, cloud rendering, the Studio app account features and
  the Pro-only reverse-any-video. If the user wants them, they decide and
  sign in themselves; do not drive a login flow.

HyperFrames needs Node 22 or newer and FFmpeg; Chrome is bundled or taken from
the system (`npx hyperframes doctor` reports it). Each render worker starts a
Chrome of roughly 256 MB, so cap workers on small machines. Behavior verified
against the repository at commit `ab66e5b` and its docs on 2026-11-11; recheck
the [CLI docs](https://github.com/heygen-com/hyperframes/blob/main/docs/packages/cli.mdx)
before relying on a flag. Handoff rules are in [motion](motion.md).

Check: telemetry is off in the shell that runs HyperFrames, `--no-runtime-install`
is on every transcribe call, and no step needs an account.
