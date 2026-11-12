# Storyboard

Read after the transcript is clean and before any cutting. The storyboard is
the plan the user approves; the rough cut then executes it. It is a table the
user can scan in a minute, backed by the same fields HyperFrames' own
`STORYBOARD.md` uses, so a motion handoff needs no translation.

## Inputs

- `BRIEF.md`: destination, length, audience, call to action.
- The approved `STYLE_GUIDE.md`, if one exists: rhythm, caption and sound rules.
- The fixed transcript with word timestamps ([captions](captions.md)) and the
  list of raw clips with duration and resolution.
- Script and hook options from [hooks-and-scripts](hooks-and-scripts.md), and
  destination rules from [social](social.md), [web](web.md) or [demo](demo.md).

Work from what exists. When the raw footage cannot carry the message, say which
beat is missing and propose a recording, a screen capture or a graphic; do not
invent footage that does not exist.

## The table

One row per scene. A scene is one idea shown in one visual treatment; split
when the shot, the on-screen text or the sound changes meaning.

| # | Scene | Speech excerpt (source, timestamps) | On screen: shot, text, graphic | Duration | Sound |
| --- | --- | --- | --- | --- | --- |
| 1 | Hook | "<words>" (clip A 00:12.4-00:15.1) | face, close; big line "<text>" in the text band | 2.7 s | music in, riser |
| 2 | Problem | "<words>" (clip A 00:31.0-00:36.8) | screen recording, punch-in on the error; label | 5.8 s | music low |

Column rules:

- **Scene**: a short name that the user can quote when giving feedback.
- **Speech excerpt**: the exact words kept, with source clip and start-end
  timestamps in the raw footage. Words cut by jump cuts are marked `[...]`.
  No speech: write `(no speech)` and what the viewer must read instead.
- **On screen**: shot type and framing, any text with its exact wording, and
  any graphic or overlay. Name the asset file when it exists.
- **Duration**: seconds, and the running total in the footer row against the
  brief's length.
- **Sound**: dialogue, music entry or exit, effects on visible actions,
  silence. Link music to a source that [rights-and-disclosure](rights-and-disclosure.md)
  clears, or mark it unresolved.

Add a final row or a line for the call to action, and a footer with total
duration, caption plan (burned-in, sidecar, none) and the destination format.
Frame 0 is the hook and thumbnail for social; check it in row 1. Mute the
mental audio once: if the table still makes sense without sound, it will work
muted.

Check: every row has a source timestamp or an asset, durations sum to the
target, and no scene needs a claim the footage cannot support.

## Map to HyperFrames STORYBOARD.md

When a scene needs motion graphics, write the same plan as the HyperFrames
format so its skills can build from it. File shape (format checked against
`skills/hyperframes/references/storyboard-format.md`, commit `ab66e5b`,
2026-11-11; recheck in the
[repository](https://github.com/heygen-com/hyperframes) before relying on a key):

```markdown
---
format: 1080x1920
duration: 30s
message: "<one-line thesis>"
arc: Hook -> Problem -> Proof -> CTA
audience: "<who it is for>"
---

## Frame 1 - Hook

- scene: <one-line contact-sheet caption>
- duration: 2.7s
- transition_in: cut
- voiceover: "<words from the transcript>"
- reads: "<line>" lands (0.3-1.6s)
- sound: bed enters; riser into the cut
- status: outline
```

| This table | HyperFrames key |
| --- | --- |
| canvas from the brief | `format` (frontmatter) |
| total target | `duration` |
| thesis, arc, audience | `message`, `arc`, `audience` |
| Scene name + on-screen description | `## Frame N - Title` + `scene` |
| Duration | `duration` |
| Speech excerpt | `voiceover` |
| On-screen text and its timing | `reads` (windows never overlap) |
| Sound | `sound` |
| Cut or fade into the scene | `transition_in` |

Keep `status: outline` until a composition exists. Keep source timestamps and
shot notes as free text under the metadata, or as extra keys; the parser keeps
unknown keys. Footage-only scenes still appear in the file so the whole video
reads in one place. Write the storyboard in the project as `STORYBOARD.md`; it
is the single source, and the table above is its readable view.

## Iterate

Revisions stay cheap to review.

- Show only the rows that changed, each with the previous value struck through
  or listed beside it, plus the new total duration. Do not reprint the whole
  table.
- Keep approved rows stable: the same number, name and wording unless the user
  asked to change them. Insert new scenes as `3a`, `3b` until the user approves
  a renumbering.
- Group feedback by scene name. Resolve conflicts (a longer scene breaks the
  length target) in the message and offer one fix instead of silently trimming.
- Record what the user rejected and why in a short `Decisions` list at the end
  of the file, so later passes do not reintroduce it.
- A new idea that changes the message or the hook returns to the brief, not to
  a row edit.

## Approval gate

Ask for an explicit yes on the table before cutting. State what approval
covers (scenes, order, text wording, durations, sound plan) and that the rough
cut will follow it. Approved rows become the editing contract for
[editing](editing.md), and any later change reopens the affected rows only.

Check: the user approved this version of the table, the file carries the
approval date, and the next step is an unambiguous list of clips and ranges.
