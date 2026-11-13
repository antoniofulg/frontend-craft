# Learn from corrections

The output is the product's UI standard: the rules a designer or implementer
reads before creating a new page, component or concept, so new work stays inside
the established patterns unless the user explicitly asks otherwise. Each
correction the user makes is a pattern the agent did not have; unless it is
written down, the next session repeats the mistake. This reference turns a
session's corrections about those patterns into rules with their reasons and
writes them where the next agent reads them.

A rule describes how the product's interface behaves everywhere: what a toast
says, how hover responds, which changes animate. Decisions about the surface
being built (its section order, narrative, example data or photos) are not rules.

It writes rules only. It never changes component code, copy or configuration
beyond the approved rule or check, and it never adds a rule the user did not
express.

## When it runs

- **Explicit request.** The user asks to record, learn or remember their
  corrections, taste or preferences, or to prune the existing rules. Run the
  workflow below.
- **Offer, never run.** At the end of interface or copy work, if the session
  contains at least two corrections that pass the [filter](#filter), or one
  silent edit to a file the agent wrote, add one line to the report:
  "You corrected N things this session (for example: <one>). Want me to turn them
  into rules for next time?" Offer once per session; if the user declines or
  ignores it, do not offer again. Do not offer after one-off fixes, functional
  bugs or task clarifications.
- Never collect, propose or write rules unprompted. The offer is the only
  automatic part.

## Hard rules

1. **Only the user's preferences.** Every rule traces to something the user
   said, edited or confirmed. A rule added because it seems like good practice is
   the agent's taste, which is what the user was correcting.
2. **No invented reasons.** When the user gave no reason, propose one marked
   *inferred*; the user confirms all inferred reasons in one yes/no before
   anything is written. A wrong reason misleads the
   next agent into extending the rule where it does not fit.
3. **Propose, then stop.** Present every candidate and write only what the user
   approves. A wrong rule repeats in every future session.
4. **A check beats a sentence.** If a violation can be found by matching code
   (a banned value, a raw color instead of a token, a forbidden property),
   propose a lint rule, token restriction or test. A check runs every time; a
   sentence in a long file gets skipped.
5. **Write for an agent that was not here.** No "as discussed" or "the card from
   earlier". Name the component class, value, token or file.

## Collect corrections

Read the current conversation from the first turn. When the user names earlier
sessions and the host stores readable transcripts, read those too.

When the user names the kind of learning they want (for example "toasts with more
information, hover without changing color, transitions"), collect at that level
first. Every other category found goes into one line under Skipped, so the user
can ask for it.

Explicit corrections are the minority. Look for five signals:

| Signal | Example | What it tells you |
| --- | --- | --- |
| Explicit correction | "No, a soft shadow, not a border" | The rule, often with its reason |
| Silent edit | The user changed `duration: 400` to `200` in a file the agent wrote | The agent's default was wrong; the user's value is the rule. Find these through notices that a file changed outside the agent's edits, or by diffing against what the agent last wrote |
| Repeated nudge | "Smaller." then "Still too big." then "Ok" | Record where the user landed, not the steps |
| Revert or rejection | "Undo that", choosing variant B, deleting something the agent added | What not to do; the reason is usually missing, so it becomes a question |
| Confirmed non-obvious choice | "Yes, keep the icon outside the button" | Record it only if a fresh agent would plausibly do otherwise |

A copy correction counts only when it is a UI wording pattern that recurs
across the product: what a notice names, how a recurring booking is phrased, how
an error states its recovery. Page messaging, headlines, offer framing, claim
strength and example content are decisions about one surface, not rules.

For each, capture the user's words or the diff, what the agent did, what the
user wanted instead and any reason given. Skip functional bugs, content specific
to one screen ("the headline should say Pricing") and corrections to the agent's
understanding of the task.

Done when every turn has been read and every correction is listed with its quote
or diff.

## Filter

For each correction:

1. Is it about the content, structure or story of the surface under work
   (section order, narrative, example data, imagery, page messaging)? Skip it,
   even when it repeated across that surface's sections: other sections of the
   same page do not count as a different surface.
2. Would this rule change how an unrelated screen of the product is designed,
   such as a settings form or a dashboard tile? If not, it is a one-off: skip it.
3. Does an existing rule already cover it? Check the project's design-system and
   owner documentation, `DESIGN.md`, `AGENTS.md`/`CLAUDE.md`, project skills,
   the voice or copy guide and Impeccable's context files when present.
   - Same meaning: the rule failed. Propose a stricter rewrite (a number, a
     token, "never") instead of a duplicate.
   - Contradicts: a conflict. Show both; the user picks.
4. Can a violation be found by matching code? Make it a check candidate, and keep
   a one-line rule so the reason is recorded.
5. Did the user say it applies everywhere, beyond this project? Ask where their
   global rules live. Otherwise it is a project rule.

## Generalize and find the reason

Choose the narrowest level that would have prevented the mistake on the next,
different component:

| Level | Example | Verdict |
| --- | --- | --- |
| Instance | "The pricing card gets a shadow, not a border" | Too narrow: it protects one card |
| Class | "Raised surfaces (cards, popovers, menus) use `shadow-raised`, never a solid border" | Write this |
| Universal | "Never use borders" | Too broad: breaks inputs, dividers and tables |

The same correction on two or more different components is evidence for the
class level. When two levels both seem right, ask.

Write the rule strictly, with values and token names from this codebase and
"always" or "never". Use softer wording only when the user framed it as a
preference. Use the user's reason in their words; otherwise propose one marked
*inferred*.

Self-test: read only the rule and its reason, then picture the original task.
If an agent knowing nothing else could still produce the wrong version, add the
value, the token or the exception.

## Decide where it goes

Write to the owner the project already reads, in this order:

1. A check (lint rule, token restriction or test) when a violation is matchable;
   the project's own lint wins, otherwise extend
   [token-drift detection](shared-ui-patterns.md#audit-the-application). Add a
   one-line rule with the reason next to the owner below.
2. The existing owner documentation for that concern: design-system docs, the
   component's documented contract or the voice/copy guide. Impeccable owns its
   context files; propose edits there rather than writing them.
3. Otherwise `DESIGN.md` at the repository root, under the matching section:
   Surfaces, Color, Typography, Spacing and layout, Motion, Interaction, Copy.
   Create the file or section when missing.

When a section grows past roughly 40 lines and matters to only some tasks
(motion rules do not matter for a settings form), propose moving it to a
project skill or a focused document and leaving a one-line pointer.

Make sure it gets read. The same pass proposes the pointer for design and build
agents, unless an agent instruction file already has it: `Before designing or
building a page, component or concept, read <rules file> and stay within it
unless the user explicitly asks otherwise.` Add it to whichever instruction file
the project uses (`AGENTS.md`, `CLAUDE.md`, a designer agent definition). Respect repository documentation policy; if the
project keeps agent files elsewhere or forbids them, ask where rules belong.

Entry format, with the date and the user's words in a comment so a later
conflict shows which rule is newer:

```md
## Surfaces

- **Raised surfaces (cards, popovers, menus) use `shadow-raised`, never a solid border.**
  Why: a solid border makes a raised surface look flat and heavy; a soft shadow separates it from the background in both themes.
  <!-- 2026-11-12: "no, a soft shadow, not a border" -->
```

## Report and stop

Present this report, then stop. Keep it short enough to approve in one read:

- **Rules to add:** a table of number, what the user said (quote or diff),
  rule, reason (marking *inferred* ones) and destination. Lead with what the
  user corrected more than once. Soft cap of about eight rules; the rest go to
  Skipped with one line each.
- **Needs your answer:** at most three questions, each one line with a
  recommendation. All inferred reasons count as one question: "Are the reasons
  marked *inferred* right? (yes / correct #n)". Never ask about a correction the
  filter should have dropped; drop it instead.
- **Conflicts:** the existing rule, the new correction and which to keep.
- **Make it a check:** each candidate with its exact implementation and what it
  would flag in the current codebase.
- **Skipped:** one line per skipped correction and why, plus one line naming the
  categories outside the scope the user gave, so the user can override.
- **Pointer:** the read-side line proposed under [decide where it goes](#decide-where-it-goes),
  when the instruction file lacks it.

Close with: "Say `write all` or `write 1, 3`, and answer the questions above."
A session with no corrections worth keeping gets one line saying so; that is a
good result.

## Write on approval

Write only the approved items and show the resulting diff. For a check,
implement it and run it across the codebase; if it flags existing code, report
the count and ask whether to make it a warning or fix the violations. Never fix
them without asking: that changes component code.

## Prune

On a request to prune or clean up the rules, read the rules file and propose
merges for duplicates, resolutions for contradictions and stricter wording for
vague rules. Same propose-then-stop rule.
