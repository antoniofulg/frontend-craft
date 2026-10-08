# Interaction and accessibility

Read for changes to controls, forms, feedback, responsive behavior, or an
accessibility review. Check only applicable interactions, using the project's
accessibility target and current authoritative standards when exact criteria matter.

## Trace a complete interaction

Identify entry, action, pending state, outcome and recovery. Preserve usable
content during loading where possible; distinguish empty data from no search
matches, failed loading, and lack of permission. A disabled control needs an
understandable reason when that reason is not already apparent.

Keep repeated actions safe while a request is pending. Preserve user input after
failure; provide a concrete retry or correction path. Announce asynchronous
outcomes where appropriate without repeatedly interrupting assistive technology.
For optimistic UI, preserve the established rollback and conflict behavior.

## Controls and navigation

- Use native semantics or the actual library's accessible primitive. Verify
  accessible name, role, state and value, including icon-only actions.
- Follow the correct keyboard pattern for the control type. Check tab order,
  activation, arrow navigation where applicable, Escape, and focus restoration.
- Keep focus visible and unobscured by sticky regions or overlays. Dialogs
  need appropriate initial focus, containment and return to a useful location.
- Ensure pointer-accessible actions have keyboard/touch alternatives. Hover
  reveals and dragging must not be the sole path to essential operations.
- Preserve navigation expectations, link destinations, and back behavior.
  A button performs an action; a link navigates, using the stack's conventions.

## Forms and feedback

Use visible labels, instructions at the relevant point, and errors associated
with the affected field. Explain how to recover. Choose validation timing for
the task; avoid scolding untouched fields or disrupting ongoing composition.
Keep submitted values after a recoverable failure and focus errors deliberately.

Use meaningful input types and autocomplete where applicable. Support paste
and password managers. Match existing locale/date/number conventions and keep
formatting separate from canonical values. Destructive operations need suitable
protection proportional to their consequence, such as undo or confirmation.

## Layout, typography and color

Verify long labels/names, localization, text scaling, zoom and narrow containers.
Ensure important values can be recovered when truncated. For dense data that
needs horizontal scrolling, keep the scroll affordance and essential controls
discoverable rather than silently clipping content.

Trace heading/body styles to their existing tokens. Check semantic heading
structure separately from visual size. Retain readable wrapping and hierarchy
without adding decorative labels or descriptions to fill space.

Measure contrast against the actual rendered background and applicable state;
variable backgrounds require more than sampling one convenient pixel. Preserve
semantic color meaning and pair color with text, shape or another cue for status.
For charts, retain labels/units and an accessible way to obtain essential values.
Theme changes must preserve relationships, not merely invert raw colors.

## Verification

Use keyboard interaction, the accessibility tree, relevant screen-reader checks
when available, and the existing automated audit. Each proves different things;
an automated pass is not complete accessibility certification.

Record the actual state, environment and result. When runtime is unavailable,
identify source-level defects without claiming interactive behavior passed.
For broader component stress scenarios, use the stress section in
[review](review.md). For movement, also load [motion](motion.md).
