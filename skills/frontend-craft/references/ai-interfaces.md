# AI and agent interfaces

Read when building or reviewing a surface where a model produces output the
person sees or acts on: chat, streamed answers, autocomplete, generated drafts or
actions, copilots, recommendations and agents that use tools. Output can be slow,
wrong and confident at once, which ordinary interface patterns do not assume.
The aim is to make that legible, the failure recoverable and the trust earned.
The structure follows Microsoft's public
[Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/)
(Amershi et al., CHI 2019), condensed to what a screen can show.

## Set expectations at first use

Say what the feature does and where it stops before the first prompt: a short
capability line and the kinds of request it handles, rather than a blinking
cursor. State plainly that output can be wrong and what the person should verify.
Place the caution where the output appears, in the product's own voice, not in a
one-time dialog. Keep wording consistent: one name for the feature and one
pronoun, not "the AI", "the assistant" and "I" mixed.

Match the stakes. Medical, legal, financial and executable output needs
sources, a refusal path when evidence is thin and an explicit check step.
Drafts, summaries and suggestions need sources and easy verification. Creative
and exploratory output needs easy correction and little else.

Check: a new person can say what it does, what it cannot do and what to verify,
without reading documentation.

## Make invocation, dismissal and correction cheap

- **Invoke** from a predictable place and, where the product has shortcuts, a key.
  Do not interrupt focused work with unsolicited suggestions; offer them at a
  natural pause or on request.
- **Dismiss** with the usual controls (Esc, close, click outside) and keep the
  person's work as it was. A dismissed suggestion does not reappear in the same
  spot immediately.
- **Correct** in place: edit the output, regenerate, refine ("shorter",
  "different tone") and edit the prompt and resubmit without retyping it.
  Keep earlier versions reachable while the person compares them.
- **Scope when unsure.** If the request is ambiguous, ask one specific question
  or offer the two likeliest readings instead of answering confidently on a guess.
- **State the consequence** of accepting generated work: what changes, where it
  goes and whether it can be reversed, using the
  [undo contract](components.md#undo-and-reversibility). Actions that are
  destructive, expensive or sent outside the product need a preview and
  explicit approval, with an "edit then approve" path.

Check: from the keyboard, start, abandon, regenerate and refine the feature
without losing the draft or the previous output.

## Design every streaming state

A streamed response has more states than loading and done. Design each:

| State | What the person sees and can do |
| --- | --- |
| Submitted, nothing yet | The prompt moved into the history, input protected against double send, a real "working" cue within a second or two; no invented "thinking" text |
| Streaming | Content appends in place, a stop control is the primary action, layout does not jump |
| Complete | Stop becomes regenerate, copy, feedback and follow-up; final formatting settles without a visible rewrite |
| Interrupted mid-stream | The partial output stays, marked as interrupted, with continue, regenerate and copy |
| Failed before output | The cause in plain words (rate limit with time, connection lost, content refused with reason and alternative, context too long), retry and edit-and-resubmit |
| Stopped by the person | The partial output stays and is labeled as stopped |

Never drop partial output silently and never lose what the person typed:
keep the prompt as a draft through failure, navigation and reconnection, and
retry with the same input. Apply the shared
[async recovery rules](components.md#async-state-and-recovery): a completion
belongs to its own request, a lost response is not proof the work did not run,
and a retry of an action with side effects needs its idempotency contract.

Reserve space for the answer area and follow new content only while the person is
already at the bottom; if they scrolled up, leave the view alone and offer a
"jump to latest" control. Stream at the speed the model delivers. A typewriter
delay added after the content has arrived only slows reading and is the first
thing to remove under reduced motion.

Check: cut the connection halfway, stop a stream, send twice quickly and scroll
up during generation. Each state keeps the input, the partial output and a
next step.

## Show sources and the reason

A factual claim carries its origin. Use numbered or inline references that open
the title, a snippet and the link, list every source behind a claim and say when
a source is no longer reachable. For answers grounded in documents, highlight the
passage used. For suggestions and recommendations, give a short reason ("because
you opened X") the person can open; for agents, show what is being done
("searching docs", "running script") with tool calls and intermediate results
inspectable in a collapsible region, not hidden behind a confident answer.

Do not present retrieved or tool-derived content as something the model "knows".
Do not decorate with citations that do not support the claim: check that each
reference exists and says what is attributed to it. If the product ranks or
sponsors results, say so at the result, and let the person override defaults that
serve the operator over them.

Check: pick three claims; each leads to a real source that supports it, or is
labeled as unsupported.

## Show uncertainty honestly

Show uncertainty only when it is real and explainable. Graded language ("likely",
"possibly", "not sure") and a visible low-confidence treatment on the specific
part that is weak serve better than one score. Do not display a number the
product cannot justify, a numeric score for what is categorical or one value for
an answer whose parts differ. Never format uncertain output more authoritatively
than certain output. Avoid performed enthusiasm, repeated apologies and
"Great question" filler; name what failed ("could not reach the search index")
and the next step.

Check: a wrong answer looks no more certain than a right one, and an answer
the system cannot support says so.

## Give feedback, memory and control

- **Feedback** attaches to a single response: a quick rating plus an optional
  reason, with confirmation that it was received.
- **Memory** is visible and editable: show what the system remembers, separate
  this session from what persists, and offer edit, delete and reset. Say whether
  conversations or content are used for training before the person writes.
  Adapting from behavior is disclosed and reversible, not silent.
- **Global controls** let the person turn the feature off and set what is
  reasonable to set (tone, length, which data it may read).
- **Changes** to model, behavior or limits are announced where they affect
  output quality, not discovered through a different answer.

Trust guardrails for persuasion in these surfaces follow
[behavioral design](behavioral-design.md#select-a-mechanism-with-a-measurable-consequence):
do not use suggestions, defaults or personality to push a choice that does not
serve the person.

Check: the person can find what is remembered, delete it and switch the feature
off without contacting support.

## Keep streamed content accessible

A live region that announces every token floods a screen reader. Keep a mounted
polite region for short status changes ("Generating", "Answer ready",
"Interrupted") and announce the finished answer once, or leave the answer in the
document for normal reading; do not announce the stream itself. Use the
[announcement priority](interaction-accessibility.md#choose-announcement-priority)
table, keep the stop, regenerate and copy controls reachable by keyboard in the
order they appear, and keep focus where the person left it unless they asked to
move it. Mark output that is generated in text, not by an icon alone.

Provide a static alternative to motion that is purely decorative: the blinking
cursor, typing reveal and shimmer follow
[motion alternatives](motion.md#handle-interruption-and-alternatives), and
the pending cue stays visible as text or a still indicator. Pending layout and
loading placeholders follow
[loading states](performance.md#skeletons-and-loading-states). Keep wording
short and plain under [content restraint](interaction-accessibility.md#content-restraint);
limits and quotas follow
[limits and unavailable states](interaction-accessibility.md#limits-and-unavailable-states).

Check: with a screen reader, one generation announces its start and end, not its
tokens; with reduced motion on, nothing animates that is not needed to understand
state.

## Before shipping

Answer each from the running feature, not from the design:

1. The person can tell what it does and how reliable it is.
2. It can be started, dismissed, corrected and regenerated by keyboard.
3. Sources or reasons are reachable and truthful.
4. Uncertainty is visible only where it is real.
5. Every streaming and failure state above keeps input and partial output.
6. Memory, feedback and an off switch exist.
7. The usual floors still hold: contrast, focus, reduced motion, localization.

A "no" on any of these means the feature is not ready.
