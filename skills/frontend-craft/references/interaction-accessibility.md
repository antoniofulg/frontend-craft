# Interaction and accessibility

Read for changes to controls, forms, onboarding, authentication, feedback, responsive behavior, or an
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

### Choose announcement priority

| Event | Starting mechanism | Verify |
| --- | --- | --- |
| Routine saved/search/progress status | An existing stable `role="status"` region (polite) | Include enough context; batch rapid updates rather than reading every keystroke |
| Urgent failure requiring immediate attention without a focus change | `role="alert"` or an appropriate assertive live region | Use one announcement path; avoid interrupting for ordinary updates |
| Invalid field on submission | Associated error and deliberate focus on the summary/invalid field | The focused label/error is understandable without a duplicate alert |
| Dialog opened or control expanded | Its focus and semantic state contract | Do not add a live announcement for a change already conveyed |

Keep routine live regions mounted before updating their content. Verify actual
screen-reader output: adding both a live message and a focused error can announce
the same event twice. Keep essential errors available after transient feedback
disappears. See [WAI status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
and [alert guidance](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

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

### Unavailable actions

Use native `disabled` when native exclusion from focus and form submission fits
the task. Use `aria-disabled="true"` when an unavailable control must remain
discoverable in the intended focus model: it conveys state but does not suppress
activation, change focusability, or remove form values. Implement click, keyboard
and submit guards as applicable; CSS `pointer-events` alone is insufficient.
Scope the attribute to the actual control rather than unintentionally disabling
all focusable descendants. Provide an explanation reachable without hovering a
disabled element. See [MDN aria-disabled](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

## Forms and feedback

Use visible labels, instructions at the relevant point, and errors associated
with the affected field. Explain how to recover. Choose validation timing for
the task; avoid scolding untouched fields or disrupting ongoing composition.
Keep submitted values after a recoverable failure and focus errors deliberately.

Use meaningful input types and autocomplete where applicable. Support paste
and password managers. Match existing locale/date/number conventions and keep
formatting separate from canonical values. Destructive operations need suitable
protection proportional to their consequence, such as undo or confirmation.

## Onboarding and authentication

Check the complete process, including back navigation, recovery and repeated
authentication. Use the project's conformance target. These WCAG 2.2 criteria
are conditional requirements, distinct from additional ergonomic recommendations:

- **3.2.6 Consistent Help (A):** when covered help mechanisms repeat across a set
  of pages, keep their relative order unless the user initiates a change. This
  does not require adding a help mechanism to every page. See
  [consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).
- **3.3.7 Redundant Entry (A):** information already supplied by or to the user
  that is needed again in the same process should be auto-populated or selectable.
  Exceptions cover essential repetition, security and information no longer valid.
  Preserve valid entries between steps. See
  [redundant entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html).
- **3.3.8 Accessible Authentication (Minimum, AA):** avoid requiring a cognitive
  function test such as memorizing a password or transcribing a code without a
  permitted alternative, assistance mechanism or exception. Support password
  managers and paste, including codes pasted into segmented inputs. Object
  recognition and personal-content identification are AA exceptions, not blanket
  proof of an accessible flow; the enhanced AAA criterion is stricter. Verify the
  actual login, MFA and recovery paths. See
  [accessible authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html).

### Target sizes: requirement versus recommendation

For WCAG 2.2 **2.5.8 (AA)**, pointer targets are at least **24 × 24 CSS px** unless
an exception applies. For the spacing exception, 24 CSS px diameter circles
centered on undersized targets must not intersect another target or the circle
around another undersized target. Other exceptions cover equivalent controls,
inline targets, unmodified user-agent controls and essential presentations. Check
the actual hit area and neighboring controls, not just the icon's visible size.
See [target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

**2.5.5 (AAA)** uses **44 × 44 CSS px**, with its own exceptions; it is not the AA
minimum. Larger touch targets can still be appropriate ergonomic recommendations
or project requirements. Label the basis of each finding: applicable criterion,
project contract or recommendation. Avoid converting platform points/dp directly
into a universal CSS-pixel rule. See
[target size enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html).

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

### Forced colors and translated content

In `forced-colors: active`, check borders, focus, selection, icons and charts
when author colors/shadows are replaced. Prefer system colors such as `Canvas`,
`CanvasText`, `ButtonText` and `Highlight` in targeted repairs; native semantics
help the browser choose appropriate colors. Do not disable adjustments globally
with `forced-color-adjust: none`. Any narrow exception must remain legible under
the user's palette. See [MDN forced colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

Exercise a long translation or pseudolocalized string, a long unbroken identifier,
and mixed-direction names where supported. Combine a narrow layout with zoom or
text enlargement and keyboard navigation: confirm labels, errors, focus and
actions remain reachable. Do not shorten translated copy merely to hide clipping.
For isolation of embedded names, read [visual details](visual-details.md).

## Verification

Use keyboard interaction, the accessibility tree, relevant screen-reader checks
when available, and the existing automated audit. Each proves different things;
an automated pass is not complete accessibility certification.

Record the actual state, environment and result. When runtime is unavailable,
identify source-level defects without claiming interactive behavior passed.
For broader component stress scenarios, use the stress section in
[review](review.md). For movement, also load [motion](motion.md).
