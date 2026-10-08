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

## Check

Inspect entry, exit, rapid repeat/reversal, focus behavior, reduced motion and
touch behavior where applicable. Judge motion in the real surrounding interface.
Measure when performance is suspect; do not claim smoothness from source alone.
Reuse the shared review pass and stop after the requested behavior is verified.
