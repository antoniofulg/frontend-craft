# Publish checklist

Run this before the final render is handed over and again before the user
posts. Size it to the work: a quick re-export of an approved video needs the
export checks; a new post needs all of them. Report what you ran and what you
could not run. The agent never publishes, schedules or sends; it prepares the
files and the post text, and the user does the rest.

## Authorization rule

- The final render happens only after the user approves the storyboard and a
  preview. Output goes to `exports/`.
- The agent drafts the post text: caption, on-screen text, title, description,
  hashtags, alt text, pinned comment and the cover. The user reviews, edits and
  publishes from their own account.
- The agent does not log in to a platform, upload, schedule, reply to comments or
  send messages. A request to "draft a post" is not a request to post it.
- Any claim, name or footage not from the user's own material is checked with the
  user first (see [rights-and-disclosure](rights-and-disclosure.md)).

## Pre-export QA

Do these on the project before the final render, and again on the rendered file.

- Hook: frame 0 and the first sentence are the hook, not a logo slate or a
  silent title; the muted version still makes sense. See
  [hooks-and-scripts](hooks-and-scripts.md).
- Safe zones: headline, captions and faces inside the conservative box; checked
  on a contact sheet with overlays. See [social](social.md#safe-zones).
- Cover: the headline survives the 3:4 grid crop (y 240 to 1680 on 1080x1920) and
  reads at thumbnail size.
- Captions: proofread against the audio, product names and jargon correct, no
  typos, readable lines, timing in sync, placed above the bottom UI band. See
  [captions](captions.md).
- Loudness: measured, speech clear over music, no clipping. Working target is
  about -14 LUFS integrated and -1 dBTP true peak (hypothesis; no platform
  publishes a target). See [audio](audio.md).
- Duration: chosen on purpose; 60 s or less if the music is not owned or cleared.
- Format: `ffprobe` shows the expected dimensions, constant frame rate, H.264
  High, yuv420p, AAC stereo, `moov` atom at the front for the delivery master.
  Web files: no audio stream on loops, the AV1 and H.264 ladder, poster equals
  frame 0. See [web](web.md).
- Flashes and motion: no strobing or hard white cuts; sped-up sections tagged.
- Sensitive content: contact sheet scanned for personal data, secrets, tabs,
  notifications and real customer data. See [demo](demo.md).
- Text and graphics: no clipped, tiny or low-contrast text on any aspect ratio;
  deterministic render (the same frame at the same time every run).
- Files: named by destination and ratio, with captions, transcript, cover and
  chapters where relevant.

## Pre-post QA

Run on the post draft, with the exported file in hand.

- Claims: every number, result, testimonial and comparison traces to a source in
  the offer brief; unsupported ones are removed. See [copywriting](copywriting.md).
- Rights: voice, footage, music, fonts and logos are owned or cleared; no
  third-party watermark; audio fits the platform and the account type (business
  accounts, boosted posts, commercial use).
- Consent: every identifiable person and every client element is cleared.
- Disclosure: AI label set when the content needs it; own-brand or paid
  partnership label set correctly, since TikTok's cannot be changed afterward.
- Caption: the topic keyword appears in the first line and the on-screen text;
  few relevant hashtags (Instagram has reportedly capped them at five; re-verify);
  no generated-sounding tells or engagement bait.
- Call to action: one action; the link or keyword works. Open the destination on
  a phone: the landing page loads, matches the video's promise and shows the
  offer. If the link is a landing page built with frontend-craft, confirm that
  page is live and tracked.
- Platform check: the title or description is filled for Shorts and long-form;
  the cover or thumbnail is uploaded; captions are on if the platform generated
  them (and correct).
- Test first when unsure: a trial reel, private TikTok or unlisted Short, viewed
  on a phone, before the public post.
- Log: add a row to the outcome log with the intent, the variable being tested
  and the date to review. See [social-channel](social-channel.md).

Check: the user has the file, the draft text, the cover and a list of anything
you could not verify, and nothing has been published.
