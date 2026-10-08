# Motion

Read when adding, changing, or reviewing movement and transitions.

## Establish purpose and precedent

Name what motion helps the user understand: acknowledgement, a state change,
spatial continuity, progress or a rare celebratory moment. Consider frequency:
frequent operational actions should not accumulate waiting or distraction.
An immediate static update is a valid result when motion adds no useful signal.

Inspect comparable interactions and existing motion tokens. Match the token's
semantic role, not just the nearest numeric duration. Follow Impeccable's approved
motion direction and the project's density and interaction conventions.

## Implement the smallest mechanism

Use the existing CSS/platform mechanism for simple transitions. Use the installed
motion library when gestures, coordinated layout, or exits need it. Adding a
dependency requires a real capability gap. Check current library/browser behavior
for the chosen mechanism; do not assume every CSS animation runs off the main thread.

Prefer properties that avoid unnecessary layout/paint when they fit the effect.
For content-driven expansion where layout change is required, keep its scope
bounded and inspect responsiveness. Specify transitioned properties rather than
animating every property changed by a state update.

Tie anchored surfaces to their trigger, preserving understandable entry and exit
paths. Do not let hidden/exiting controls remain focusable or intercept input.
Coordinate visual state with accessible visibility and interaction state.

## Handle interruption and alternatives

Rapid toggles, reversal and repeated notifications must start from a coherent
current state. Preserve gesture continuity, cancel obsolete work, and check that
completion callbacks cannot apply stale state after interruption or unmount.

Honor reduced-motion preferences by reducing/removing unnecessary displacement,
parallax and repeated movement. Preserve the information through stable labels,
icons or gentle changes when appropriate. Reduced motion is not permission to
retain a distracting effect under a different name.

Restrict hover-only motion to suitable pointing devices and keep the action
usable on touch and keyboard. Essential meaning must remain when animation is
disabled, interrupted or unavailable.

## Recipes by interaction

Use these as starting suggestions only when the project lacks a matching token.
Durations are not accessibility thresholds or universal aesthetic requirements.
Choose by distance, size, frequency and input method, then inspect the real result.

| Interaction | Suggested starting point | Required behavior |
| --- | --- | --- |
| Press/hover feedback | CSS transition, 80–140 ms, `ease-out` | Fast reversal; hover enhancement only on capable pointers |
| Popover/menu | Opacity plus small anchored transform, 120–220 ms, `ease-out` | Remain anchored; preserve primitive focus and dismissal behavior |
| Dialog/drawer | Short displacement/fade, 180–300 ms, decelerating entrance | Exit can be shorter; focus and input state must match visibility |
| Expand/collapse | Content-sized transition, 150–250 ms, `ease-in-out` | Retarget when content changes; avoid clipping focused descendants |
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

## Review checklist

- Does the movement explain a useful change without delaying repeated work?
- Do entry, exit and anchoring make sense beside the real surrounding content?
- Do rapid activation, reversal, unmount and gesture cancellation leave one
  coherent state, without stale callbacks or duplicate toasts?
- Are exiting/hidden surfaces excluded from interaction at the correct time,
  with focus restored according to their primitive's contract?
- Can keyboard, touch and reduced-motion users obtain the same outcome?
- Do dynamic content and resize preserve legibility and spatial continuity?
- If smoothness or responsiveness is claimed, was it inspected/measured under
  representative load rather than inferred from the animated property?

Reuse the shared review pass and stop after the requested behavior is verified.
