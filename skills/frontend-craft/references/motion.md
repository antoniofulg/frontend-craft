# Motion

Read when finding opportunities for motion, adding, changing, coordinating,
removing and reviewing movement and transitions, or diagnosing animation that
drops frames.

For a naming question or a vague description of an effect, use the optional
[motion vocabulary](motion-vocabulary.md). Return the matching term without
starting implementation or an audit. For requested implementation, this guide's
purpose, behavior and accessibility rules remain authoritative.

## Establish purpose and precedent

Name what motion helps the user understand: acknowledgement, a state change,
spatial continuity, progress or a rare celebratory moment. A micro-interaction
can provide immediate, non-animated feedback; routine acknowledgements are not
automatically memorable peaks. Distinguish meaningful achievement from a hover
response. Consider frequency: frequent operational actions should not accumulate
waiting or distraction. An immediate static update is a valid result when motion
adds no useful signal.

Inspect comparable interactions and existing motion tokens. Match the token's
semantic role, not just the nearest numeric duration. Follow Impeccable's approved
motion direction and the project's density and interaction conventions.

## Find animation opportunities

Use this mode when asked what could benefit from animation or how a surface could
feel more responsive. Keep discovery read-only unless implementation is also
requested. Identify the page/application scope, real interaction owners, existing
effects/tokens, product tone and likely frequency of use. Distinguish unanimated
behavior from an existing effect that needs repair.

Inspect the relevant seams below. Source searches for conditional visibility,
activation handlers, disclosure controls, collection updates, gesture handlers
and success/empty states locate candidates; absent animation syntax does not
establish a usability problem. Observe the actual state/input sequence where
available and identify any source-only uncertainty.

| Seam | What might benefit; what to preserve |
| --- | --- |
| Activation feedback | Acknowledgment missing from a press or action; retain immediate response and existing keyboard/touch feedback. A scale change is one option, not a required button treatment. |
| Confirmation/progress | A consequential action or progress state is hard to understand; do not replace the approved confirmation behavior with a hold gesture merely to create an animation. |
| Appearing/disappearing content | Conditional regions, disclosures, route content or occasional collection changes jump without a useful connection; keep content readable and available without animation. Form conditional reveals have a [default treatment](#reveal-conditional-content-smoothly); discovery still weighs frequency before proposing it. |
| Anchoring and dismissal | A panel loses its relationship to its trigger or exits in a confusing direction; follow the real geometry, primitive and dismissal contract. |
| Group entrances | Related items arrive without a useful sequence; a small stagger may clarify grouping but must not delay interaction or repeated work. [Coordinate](#coordinate-several-moving-elements) the group as one motion. |
| Gesture boundaries | Drag/release, reorder or dismissal loses continuity; use the existing gesture owner and retain cancellation and non-drag access. |
| Rare explanatory or success moments | Motion could explain a result or acknowledge meaningful progress; preserve truthful state and avoid animation that competes with the user's next task. |

Judge each candidate by purpose, frequency, response cost and function. Name the
useful feedback, state/spatial connection or explanation; identify what currently
confuses users and what the proposed movement would clarify. Frequent, keyboard-
initiated or information-dense work needs particular restraint, but input method
or an arbitrary daily count is not a blanket ban. Rare use alone does not justify
decoration. Reject motion that delays readiness, moves data during inspection,
obscures meaning or adds distraction without a useful signal. A static outcome is
valid, including when no candidate survives.

Return a short prioritized set of source-located opportunities: current behavior,
evidence, purpose, expected frequency and a concrete proposal. Specify properties,
direction/origin, duration/easing or spring behavior through the adopted tokens;
include resolved values when established, and label unverified tuning as a proposal.
Reuse the interaction recipes below only as contextual starting points. Include
interruption, reduced-motion/static alternatives and input/focus implications.
For scoped sweeps, account for inspected, inapplicable and uninspected seam classes;
record meaningful rejected candidates and their reasons without inventing a quota.
End with the most useful next action or a no-change verdict. A proposal does not
implement code or require a separate planning skill; authorized implementation
continues through this guide and the existing project workflow.

## Implement the smallest mechanism

Use the existing CSS/platform mechanism for simple transitions. Use the installed
motion library when gestures, coordinated layout, or exits need it. Adding a
dependency requires a real capability gap. Check current library/browser behavior
for the chosen mechanism; do not assume every CSS animation runs off the main thread.

Prefer properties that avoid unnecessary layout/paint when they fit the effect.
For content-driven expansion where layout change is required, keep its scope
bounded and inspect responsiveness. Specify transitioned properties rather than
animating every property changed by a state update. When an animation stutters,
use [diagnose dropped frames](#diagnose-dropped-frames).

Tie anchored surfaces to their trigger, preserving understandable entry and exit
paths. Do not let hidden/exiting controls remain focusable or intercept input.
Coordinate visual state with accessible visibility and interaction state.

### Reveal conditional content smoothly

When implementing or changing a conditional reveal inside a form (a
validation message, a dependent field group, a collapsible section), animate it
by default. Change the height smoothly (a `grid-template-rows` transition from
`0fr` to `1fr`, whose child needs `min-height: 0; overflow: hidden`, or the
shared collapsible primitive) with an opacity fade. Use the project's
expand/collapse motion token; without one, 150–200 ms `ease-out`. Make it
instant under `prefers-reduced-motion`. Why: content that pops in
shoves the field under the pointer or caret, and users lose their place.

Implement this once in the shared primitive (the field-error and collapsible
owners) so every screen inherits it; a per-screen transition drifts and the
next screen ships the jump again. When no shared primitive exists, extend the
nearest owner; introduce a shared primitive through the
[ownership contract](shared-ui-patterns.md#ownership-contract) when two or more
consumers need it. A `0fr` row still renders its children: mark collapsed
content `inert`, or switch it to `hidden` after the exit transition. Keep an
error's `aria-describedby`/`aria-invalid` association and its existing
[announcement path](interaction-accessibility.md#choose-announcement-priority),
without delaying it until the animation ends.

Check: search the changed scope for conditional renders of errors and
dependent content (`&&`, ternaries, `v-if`, `{#if}`, `hidden`). Each one goes
through the shared primitive and eases in and out; with reduced motion it
switches instantly.

## Handle interruption and alternatives

Rapid toggles, reversal and repeated notifications must start from a coherent
current state. Preserve gesture continuity, cancel obsolete work, and check that
completion callbacks cannot apply stale state after interruption or unmount.

Honor reduced-motion preferences by reducing/removing unnecessary displacement,
parallax and repeated movement. Preserve the information through stable labels,
icons or gentle changes when appropriate. Reduced motion is not permission to
retain a distracting effect under a different name.
Check nonessential interaction motion separately from automatic movement or
updates: [2.3.3 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
and [2.2.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
have different scope. Follow the adopted target; a reduced-motion CSS branch
alone does not prove conformance.

Restrict hover-only motion to suitable pointing devices and keep the action
usable on touch and keyboard. Essential meaning must remain when animation is
disabled, interrupted or unavailable.

## Gestures and continuity

Prefer the installed primitive's gesture owner. For custom pointer handling,
track the active `pointerId` and use `setPointerCapture` when the drag must continue
outside the hit area. Clean up on `pointerup`, `pointercancel`, `lostpointercapture` and
unmount; cancellation must not accidentally commit a dismissal. Choose scoped
`touch-action` behavior before the gesture starts, retaining native scrolling and
zoom where possible. See [MDN pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).

Keep the initial contact offset relative to the element so it does not jump to
center under the pointer. When grabbing a moving surface, continue from its
current rendered position. Hand release velocity to the settling mechanism when
supported; preserve direction and continuity on interruption or reversal, with
deliberate bounds rather than a reset to a canned starting frame. Exercise slow
drags, fast releases, re-grabs and cancellation. Retain a non-drag action.

A gesture has two phases. While the pointer is down, the element tracks it 1:1:
write the position to a motion value or directly to the element's `transform`,
with no easing, spring or React state per move event. Past a boundary, apply
resistance (rubber-banding) rather than a hard stop. On release, physics takes
over from that velocity. Commit a dismissal on distance **or**
velocity so a short fast flick counts. A failed threshold snaps back quickly.
Overshoot usually belongs to a released drag; the same surface closed by a button
settles without bounce.

Derive linked values (overlay opacity, a background scale) from the dragged
value rather than animating them separately, so they stay in step through
reversal and interruption. Anything a gesture can grab uses transitions or
springs that retarget from the current state; `@keyframes` restart from their
first frame. A press-and-hold fill progresses linearly because it shows elapsed
time; releasing early reverses it quickly.

For a sheet or drawer, prefer the installed primitive or an established drawer
library over a hand-rolled gesture: momentum, linked overlay, velocity dismissal,
focus containment and Escape take considerable edge-case work. Verify touch on a
real device; trackpad simulation and device emulation misrepresent it.

## Diagnose dropped frames

Name the cause before changing code; each fix states which cause it addresses.
Budget a frame at 16.7 ms on 60 Hz displays and 8.3 ms on 120 Hz ones, and judge
on a mid-range phone, since a fast laptop hides most of these causes. Work down
the list in order, which runs roughly from most to least common:

1. **Property cost.** `transform` and `opacity` skip layout and paint. `filter`,
   `clip-path` and `background-color` may also composite, with uneven browser
   support. `box-shadow`, `border-radius` and `color` repaint every frame; `width`,
   `height`, `padding`, `margin`, `top` and `left` also re-run layout, which can
   move surrounding content. Swap to an equivalent cheaper property: `scale()`
   for size changes, `translate()` for position, `opacity` for visibility and
   a pre-rendered shadow layer's `opacity` for a growing shadow.
   Expand `transition: all` to see what it actually animates.
2. **Busy main thread.** `requestAnimationFrame`-driven animation competes with
   scripts, so it drops frames while the page navigates, fetches or hydrates.
   CSS transitions/animations and the Web Animations API can run off the main
   thread for composited properties. Move motion that plays during heavy work
   there. In Motion, independent transforms such as `x` and `y` are accelerated
   from 14.2; work computed in JavaScript each frame, such as layout animations
   (`layout`, `layoutId`), `onUpdate` and motion-value derivations, runs on the
   main thread, and animated CSS variables are not accelerated. Check the
   installed version's documentation.
3. **Re-render per frame.** State updates inside `requestAnimationFrame`, pointer,
   scroll or drag handlers re-render the component every frame. Write to a motion
   value or the element's style through a ref.
4. **Cost that grows with content.** A CSS custom property changed on a parent
   recalculates style for every descendant that inherits it; set `transform` on
   the moving element instead. Also check how many elements animate at once.
5. **Expensive filters.** Animated `blur()` becomes costly quickly, especially in
   Safari; keep it small (a few pixels is enough to soften a crossfade).
6. **Layer hand-off.** A one-pixel shift at the start or end of a transform can
   come from the browser promoting the element mid-animation. Only then add
   `will-change: transform` to the animating element itself; each promoted layer
   costs memory, and the hint fixes none of the causes above.

Confirm with a recording: the Performance panel for dropped frames and long
tasks, remote debugging on a real phone for device cost (desktop CPU throttling
does not model a weak GPU). Report each finding with its location, cause, before
and after, and whether it was verified from code or still needs a device
recording. For page-level responsiveness, use [performance](performance.md).

## Coordinate several moving elements

When two or more elements move in response to one event, coordinate them as one
motion. Most groups get simpler: cut moving parts first, then run the rest in
parallel. Give each element a role before choosing timing:

| Role | Treatment |
| --- | --- |
| Lead: what the user must notice | Starts first and travels furthest |
| Support: secondary content | Follows with smaller, shorter motion |
| Decoration: badges, dividers, accents | Fades in place or stays static |
| Static: everything else | Does not animate |

Two competing leads signal a hierarchy problem that motion cannot fix.

Relate each pair deliberately:

- **Together** when both belong to one object or moment, or when their order
  carries no meaning. Sub-animations of one component share a duration and easing
  family (set once through `MotionConfig` or a shared custom property).
- **Overlap** (a stagger) when order carries meaning, such as reading order or
  cause and effect. In product UI, keep steps around 30–80 ms and the whole group
  near 300 ms or less; stagger the first few items and let the rest arrive
  together. Vary distance and treatment by role; identical delays read as
  mechanical. Public first-visit moments can take longer steps.
- **Sequence** only when showing both at once looks broken: two dense views in a
  container that resizes in both dimensions, or an element that would visibly
  pass through another. Start the second just before the first ends.
- **Carry**: when a child's motion cannot be controlled directly, move its parent.

Choreography rules:

- One entrance per container. A panel that slides in carries its content; its
  children appear with it unless their order itself carries meaning.
- An exiting element leaves the layout immediately (Motion's
  `AnimatePresence mode="popLayout"`, whose exiting child forwards its ref inside
  a positioned parent; or absolute positioning at its current place), so siblings
  close the gap while it fades rather than after.
- Swapping views in one container crossfades: the old view exits while the new
  one enters.
- Direction follows the user's model: forward moves content left, back moves it
  right. Pass the direction to exiting elements (Motion's `custom` on both
  `AnimatePresence` and the child), since an exit reads state when it starts.
- Exits run simultaneously, shorter and simpler than entrances; an element leaves
  the way it came in.
- Secondary effects land on the event they belong to (a pulse on the click, not
  on the preceding hover). A repeated action skips the buildup.
- When a container resizes by varying amounts, scale the duration by distance
  within a clamp so small changes do not flicker. With a few states, hand-tune
  each transition.
- Every element is usable as soon as it is visible; choreography never blocks a
  control the user is reaching for.

Interrupt each sequence: re-trigger it mid-flight, click Next twice, switch views
quickly. Stop in-flight animations before starting new ones, await completion
before chaining an idle loop, and keep keys stable so rapid swaps do not leave two
children mounted. Under reduced motion, collapse the choreography: drop delays
and movement and show the group together. Write the timeline (element, role,
start, duration, motion, relationship) before implementing, then scrub a
recording: a wave and a queue only look different frame by frame.

## Optional transitions-dev recipes

When a concrete transition recipe would help, consult an installed
`transitions-dev` catalog for the matching interaction, such as an anchored
dropdown, sliding tab indicator, content reveal or icon swap. Load its index and
selected recipe only. It complements Impeccable's direction and this reference's
behavior checks; it does not determine where animation belongs.

The inspected version offers `transitions reveal` for browsing, `transitions
review` for review, `transitions apply` for installation and `transitions refine`
for token suggestions. These are skill workflows, not assumed shell executables;
check the installed entrypoint for current syntax. Choose the mode matching the
request; review/browsing does not authorize application or a global token migration.

Use the current recipe's hooks and cleanup contract while integrating with the
existing component/state owner. Prefer its per-recipe variables for a single
effect; map tunable values to adopted motion tokens where supported rather than
installing a competing global scale. Preserve the recipe's reduced-motion branch
and verify actual keyboard, focus, interruption and theme behavior. A CSS recipe
does not replace an accessible dialog, menu or tabs primitive. Measure expensive
effects under representative load using [performance](performance.md).

The inspected catalog permits project use but restricts republication as a
competing library, template pack or component kit. Check its license; keep recipe
files, shared CSS and catalog outside this distributable skill. If unavailable,
use the project's existing mechanism or the independently authored suggestions
below; do not claim the catalog was consulted or recreate its library.

## Recipes by interaction

Use these as starting suggestions only when the project lacks a matching token.
Durations are not accessibility thresholds or universal aesthetic requirements.
Choose by distance, size, frequency and input method, then inspect the real result.

| Interaction | Suggested starting point | Required behavior |
| --- | --- | --- |
| Press/hover feedback | CSS transition, 80–140 ms, `ease-out` | Fast reversal; hover enhancement only on capable pointers |
| Popover/menu | Opacity plus small anchored transform, 120–220 ms, `ease-out` | Remain anchored; preserve primitive focus and dismissal behavior |
| Dialog/drawer | Short displacement/fade, 180–300 ms, decelerating entrance | Exit can be shorter; focus and input state must match visibility |
| Expand/collapse | Content-sized transition, 150–250 ms, `ease-in-out` | Retarget when content changes; avoid clipping focused descendants. Inside a form, use the form conditional reveal row |
| Form conditional reveal | Height plus fade, 150–200 ms, `ease-out` | [Default treatment](#reveal-conditional-content-smoothly) through the shared primitive |
| Toast | Modest translate/fade, 150–220 ms | Repeated items update/reflow coherently; essential information survives dismissal |
| Drag/snap | Damped spring following gesture velocity | Constrain movement, settle predictably and provide a non-drag action |

For timeline motion, try existing decelerating easing on entrance and a smooth
in/out curve for an element already on screen. For a gesture that can be released
mid-flight, a physical spring can preserve velocity more naturally. In an already
installed Motion project, `{ type: "spring", stiffness: 420, damping: 38, mass: 1 }`
is an illustrative starting configuration, not a token to add everywhere. Tune
overshoot and settling on the actual component; avoid mixing physical parameters
with duration-based settings without checking that library's precedence rules.
See [Motion transitions](https://motion.dev/docs/react-transitions).

For a drag-to-dismiss toast, use the existing library's gesture and dismissal
contract. Distinguish intentional horizontal drag from vertical page scrolling,
handle cancellation, and restore the item when the threshold is not met. Keep a
keyboard/touch dismiss action; swipe is an enhancement. Pause an existing timeout
while users interact where appropriate and ensure actionable information can be
recovered. Announcements follow the [accessibility reference](interaction-accessibility.md),
not the animation's completion. See [Motion drag](https://motion.dev/docs/react-drag).

## Motion audit and inspection

For a requested audit, record each relevant interaction's current effect, purpose,
observed issue and recommendation: keep, adjust, remove or remain static. Include
places where adding animation would delay frequent work, distract from reading,
obscure a value or compete with another signal. An audit need not produce new
animations and remains read-only unless implementation is requested.

### Remove or reduce motion

When asked to tone motion down, or when an audit verdict is remove or adjust,
work by subtraction only: delete the motion or shrink it to a smaller version of
the same effect (hover lift to a color change, a slide to a fade, a long
duration shortened, a stagger collapsed, an infinite loop run once). Badly built
motion that should stay gets reported for a separate fix. Keep motion that has a
documented reason. If a reduction would lose the purpose, delete it instead.

Removal is not find-and-replace. Before each deletion, check what depends on it:

- **Hidden start states.** An `initial={{ opacity: 0 }}`, keyframe start frame or
  reveal class that waits for an observer leaves the element invisible once its
  animation is gone. Remove the start state with the animation.
- **Code that waits.** `animationend`/`transitionend` listeners, `onExitComplete`
  and timeouts sized to a duration keep delaying the UI. Move the work to the
  moment the change happens.
- **Unmount and focus timing.** Without an exit, `AnimatePresence` unmounts at
  once; focus moved in an animation callback must move immediately.
- **Masked layout jumps.** A `layout` or FLIP animation may hide a layout shift.
  If removal exposes the jump, keep the animation and report the shift.
- **Tests** that wait for animation classes or durations.

Then remove what the removals orphaned: unreferenced `@keyframes`, animation
utilities and tokens, `motion.*` elements without motion props, empty
`AnimatePresence` wrappers, unused variants and imports. Propose, rather than
perform, uninstalling a motion library that is no longer imported. Verify with
the type checker and tests, grep every removed name, and report removals,
reductions and the deliberately kept animations with the purpose that saved each.

Inspect at normal speed first. When jumps, overlap, easing or exit cleanup are
hard to diagnose, use the browser's animation tools or a recording at slow speed
and scrub frame by frame. Identify the problematic state/frame and input sequence;
then recheck at normal speed and with reduced motion. Slow playback diagnoses
composition and continuity, not real-time performance. Name unavailable inspection
tools and untested states rather than reporting a visual pass.

For a claimed motion benefit, name the task: detecting feedback, following an
object, interpreting change or completing repeated work. Compare an equally
informative static alternative with equivalent content and balanced order where
feasible. Inspect realistic repeated actions; record correct interpretation,
errors and task time including animation, accumulated waiting and loss of place.
Report preference separately using the
[measurement distinctions](behavioral-design.md#separate-perception-performance-and-recall).
No observed target benefit leaves the claim unestablished, with uncertainty
reported; a visually preferred effect is not automatically more usable.

### Review checklist

- Does the movement explain a useful change without delaying repeated work?
- Do entry, exit and anchoring make sense beside the real surrounding content?
- Do rapid activation, reversal, unmount and gesture cancellation leave one
  coherent state, without stale callbacks or duplicate toasts?
- Are exiting/hidden surfaces excluded from interaction at the correct time,
  with focus restored according to their primitive's contract?
- Can keyboard, touch and reduced-motion users obtain the same outcome?
- Do dynamic content and resize preserve legibility and spatial continuity?
- Does a group of moving elements read as one motion, with exiting elements out
  of the layout and every visible control usable at once?
- If smoothness or responsiveness is claimed, was it inspected/measured under
  representative load rather than inferred from the animated property?

Reuse the shared review pass and stop after the requested behavior is verified.
