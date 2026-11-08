# Interaction and accessibility

Read for interface wording, controls, forms, tables, navigation/drafts, locale-sensitive values,
onboarding, authentication, feedback, responsive behavior, or an accessibility
review. Check only applicable interactions, using the project's
accessibility target and current authoritative standards when exact criteria matter.

## Content restraint

Give each visible element a useful role in understanding, deciding, acting or
recovering. Remove repetition that adds no needed context, instruction or evidence;
judge usefulness against total task effort and audience, rather than word count.
Reducing visible content must not increase guessing, memory demands or unnecessary
disclosure steps. Keep needed detail and recovery reachable when they are useful.

Test each candidate by removal: if users would discover the same thing by using
the interface, the line costs a read on every visit and can go. If nobody would
find out, it stays with its reason. Count accumulation too: more than three text
blocks before the first content, or a headline, intro and first label saying the
same thing, means the page is explaining itself.

- **Copy:** remove subtitles that merely repeat headings and help text that
  restates an obvious control. For example, `Manage your projects` beneath
  `Projects` adds little unless it explains a real scope or action. Use plain,
  specific labels grounded in the product's vocabulary.
- **Feedback:** consolidate messages that report the same event without adding
  useful context. A toast, banner and inline status need distinct purposes to
  coexist. Preserve persistent errors and use the existing
  [announcement contract](#choose-announcement-priority) for accessible feedback.
- **Explanation:** keep constraints and consequences needed for a decision beside
  the action. Put secondary detail behind accessible disclosure when useful;
  retain instructions needed for unfamiliar tasks, recovery and informed consent.
- **Controls and order:** justify sorting, filters, badges and secondary actions
  through user tasks. Preserve meaningful or contracted collection order; do not
  introduce alphabetical sorting merely because it is available. Changes to query
  behavior follow [collections](components.md#collections-sorting-and-selection).
- **Visual structure:** use existing hierarchy, spacing and grouping before adding
  another card, border, icon or label. Follow approved tokens and design direction.

When removing content or controls, verify that users can still identify the action,
understand its consequences, perceive the outcome and recover. Preserve accessible
names, required disclosures and safety confirmations. A cleaner screenshot alone
does not establish that the reduced interface remains understandable or usable.

## Trace a complete interaction

Identify entry, action, pending state, outcome and recovery. Distinguish empty
data from no search matches, failed loading, and lack of permission. A disabled
control needs an understandable reason when that reason is not already apparent.

Keep repeated actions safe while a request is pending. Preserve user input after
failure; provide a concrete retry or correction path. Announce asynchronous
outcomes where appropriate without repeatedly interrupting assistive technology.
For request ordering, uncertain saves and optimistic rollback, use
[async recovery](components.md#async-state-and-recovery).

### Limits and unavailable states

Explain what is blocked, its verified cause and scope, what remains available
and the next supported action. Distinguish renewable quotas/rate limits, fixed
plan caps, expired sessions, permission restrictions and service outages; they
do not share a universal retry or upgrade remedy. If the cause is unknown, say so.
Show reset/restoration timing only from the authoritative policy or service,
with an unambiguous date and time zone when relevant; otherwise state that timing
is unavailable rather than inventing a reset or restoration ETA.
A server-advised wait such as `Retry-After` does not establish a business quota
reset or guarantee restoration. When the wait expires, recheck availability
through the existing owner rather than announcing recovery from elapsed time.

Keep eligible work and access available under the existing authorization and
[draft contract](#navigation-and-draft-resilience). Offer reauthentication,
waiting, correction, an eligible alternative or existing support as appropriate
to the actual cause. A recovery path must not become a forced upsell.
Keep the explanation reachable beside the affected action and announce changed
outcomes through [announcement priority](#choose-announcement-priority).

### Loading feedback

Provide one useful announcement when loading begins; delay only decorative
skeleton paint, not accessible status. Mark the affected region
`aria-busy="true"` while its update is incomplete. Keep decorative skeleton
shapes outside the accessibility tree. Place the status where it can announce
despite updates assistive technology may defer while busy; clear busy on
completion or failure. Verify the actual result with the project's
assistive-technology checks. Reuse the announcement priority below rather than
adding one live message per mask. See [WAI-ARIA busy](https://www.w3.org/TR/wai-aria-1.2/#aria-busy).

Keep pending values from appearing editable or submittable before they are
valid. Preserve authorization guards: an initial preview without known authority
must not expose an active submit workflow or protected actions. An authorized
form awaiting values can retain its form semantics and real disabled controls.
Value masks and refresh retention follow [performance](performance.md#skeletons-and-loading-states);
the actual control structure follows [components](components.md#pending-and-ready-composition).

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
  Changes to history or editable views also use [navigation resilience](#navigation-and-draft-resilience).
- For affected conditional controls, verify actual visibility, focusability and
  validation behavior in each state. Author CSS can override the default
  rendering of `hidden`; DOM presence or that attribute alone is not readiness.
  See [hidden semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden).

### Keyboard shortcuts

A visible shortcut hint is a promise. Every keycap or shortcut label shown on a
control must be wired to that control's action. Why: a hint that does nothing
teaches users the interface lies, and they stop trying the shortcuts that work.

- **Same path as a click.** The shortcut calls the control's own handler, so
  validation, disabled and pending guards apply identically. A shortcut on a
  disabled or pending control does nothing, as the click would.
- **Works across its scope.** A form's modifier submit shortcut fires while focus is in
  any of its fields, not only on the button. Scope it to the form, step or
  dialog that owns the action, so two visible forms cannot both answer it.
- **Registered, not ad hoc.** When the app has a shortcut registry or provider,
  bind through it, so the shortcut appears in the shortcut help and conflicts
  resolve in one place; without one, keep bindings in one shared owner. A route
  rendered outside the app shell needs its own provider; check that the
  shortcut works there too.
- **Single-key shortcuts meet WCAG SC 2.1.4 (A).** Let users turn them off or
  remap them to include a modifier key, or make them active only while their
  component has focus
  ([character key shortcuts, A](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)).
  Also ignore them while focus is in a text field, so typing never triggers them.

Check: search the changed scope and its shared components for every rendered
keycap, `kbd` or shortcut label. Press each modifier shortcut from inside a text field, from the
surrounding scope and while the action is pending or disabled; the result
matches the click. When adding a hint, add the binding in the same change.

### Multi-step keyboard flow

When adding keyboard actions to a wizard or multi-step form, use these defaults
unless the project already defines others:

- **Primary action:** Mod+Enter runs the step's primary action, such as Continue
  or Save, from anywhere in the step; render its keycap per platform (⌘ on
  macOS, Ctrl elsewhere).
- **Escape is layered.** Let an open dialog, menu or popover primitive handle
  its own Escape and stop propagation; the step acts only on unhandled presses.
  Each press undoes the innermost layer only: close the
  open overlay or menu, then blur the focused text field, then close an inline
  picker. Only with nothing left to dismiss does Escape go back a step. It
  never goes back from the first step or while the step is pending. Why: an
  Escape meant to close a popover must not throw away the step.
- **Frequent step actions may get single keys**, such as adding a row or choosing
  template 1–N. They follow the single-key rule above and are shown with their keycap.

Check: open an overlay inside a step, focus a field inside it and press Escape
repeatedly. Each press removes one layer, the step stays until the last press,
and nothing happens on the first step or while submitting.

### Unavailable actions

Use native `disabled` when native exclusion from focus and form submission fits
the task. Use `aria-disabled="true"` when an unavailable control must remain
discoverable in the intended focus model: it conveys state but does not suppress
activation, change focusability, or remove form values. Implement click, keyboard
and submit guards as applicable; CSS `pointer-events` alone is insufficient.
Scope the attribute to the actual control rather than unintentionally disabling
all focusable descendants. Provide an explanation reachable without hovering a
disabled element. See [MDN aria-disabled](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

### Tables and interactive grids

Prefer a native table for tabular relationships; links, checkboxes and sort
buttons can remain ordinary controls inside it. A grid is a deliberate composite
keyboard interaction with managed focus and the relevant arrow-key/editing
contract; adding `role="grid"` does not implement it. See [WAI table](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
and [grid patterns](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

Preserve header/cell associations and useful table context at responsive widths.
Use native headers with suitable scope, and explicit associations for complex
headers; any card transformation must retain each value's context. Use operable
sort controls and expose the actual sort direction on the relevant header with
`aria-sort`. Explain multi-column sort priority separately; the attribute does
not encode that sequence. Keep focus useful after sorting, paging or removing
a row. See [WAI tables](https://www.w3.org/WAI/tutorials/tables/) and the
[sortable-table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/).
Selection and query scope follow [collections](components.md#collections-sorting-and-selection).

## Navigation and draft resilience

Apply when changing routes, history, multi-step forms or editable detail views.
Preserve the URL/state contract: direct entry, reload, copied links and Back/
Forward reach the intended view subject to current authorization. Put shareable
view state in the existing URL owner; keep sensitive/transient drafts out of
public URLs. Reuse the router/browser's history, scroll and focus behavior.
Check the initial history entry too; avoid duplicate entries or lost query/hash
state. Update the document title and choose a useful focus destination for a
changed view, preserving meaningful restoration on return. Background refresh
must not steal focus. See [history behavior](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)
and [page titles](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html).

Keep the editable draft distinct from confirmed server state. Define save,
discard and restoration behavior at the existing form owner; preserve recoverable
work across supported transitions without overwriting newer input when an earlier
save resolves. Persist drafts only under an established retention/privacy
contract, scoped to their user and resource.

Use leave warnings when the consequence justifies them, only while relevant
unsaved changes exist. `beforeunload` is unreliable, especially on mobile; it
cannot be the only protection against lost work. Existing autosave may use
suitable lifecycle signals without claiming shutdown delivery is guaranteed.
See [beforeunload limitations](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).

A restored page can resume from memory without a new HTTP request. Recheck or
clear stale/sensitive state through the existing auth/data owner on restoration
when freshness or authority may have changed, including logout, expired sessions
and identity/permission changes. Cache headers alone do not establish restored
state freshness; preserve the project's cache/privacy policy. Verify return
navigation with unsaved edits and failed saves where relevant. See
[bfcache restoration](https://web.dev/articles/bfcache#update-stale-or-sensitive-data-after-bfcache-restore).

## Forms and feedback

Use visible labels, instructions at the relevant point, and errors associated
with the affected field. Identify the detected error in text and give known
correction suggestions unless security or purpose would be jeopardized
([3.3.1 A](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html),
[3.3.3 AA](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)).
Choose validation timing for the task; avoid scolding untouched fields or
disrupting composition. Keep submitted values after recoverable failure and
focus errors deliberately.

Use meaningful input types and autocomplete where applicable. Support paste
and password managers. Use the [locale-sensitive value contract](#locale-sensitive-values-and-messages)
for localized entry and formatting. Destructive operations need protection
proportional to their consequence: use [real undo](components.md#undo-and-reversibility)
where supported, or appropriate confirmation.
For submissions covered by the adopted
[3.3.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)
target, provide a reversible, checked, or review/confirm/correct safeguard as
appropriate. The criterion does not require undo or confirmation on every save.

## Locale-sensitive values and messages

Apply when affected values cross locale, currency, calendar or time-zone
boundaries. Reuse existing formatters, translations and domain value contracts;
this does not require another internationalization library.

Keep language, display locale, currency and business time zone distinct. Browser
language suggests presentation preferences, not a tenant's currency or scheduling
zone. Preserve explicit user/business settings. See [locale inference](https://www.w3.org/International/questions/qa-accept-lang-locales).

Separate localized display/editable text from canonical submitted values. Follow
the existing parser contract for grouping, decimal separators and supported
digits; report ambiguous pasted amounts without silently changing their meaning,
and preserve recoverable input. Currency formatting does not convert its value.
Derive the code, precision and rounding from the authoritative money contract;
two decimal places and multiplication by 100 are not universal. See
[Unicode number and currency data](https://www.unicode.org/reports/tr35/tr35-numbers.html).

Translate complete messages with reorderable placeholders and the project's
plural rules rather than concatenated fragments or an English singular/plural
branch. Check relevant zero, fractional and plural categories. See
[Unicode plurals](https://cldr.unicode.org/index/cldr-spec/plural-rules) and
[composite messages](https://www.w3.org/International/articles/composite-messages/).

Distinguish a calendar date, an instant and a scheduled local wall time. A birth
date must not shift with the viewer's zone. An instant can display in an explicit
zone; a future local appointment may need its named zone and recurrence intent.
Do not normalize every date to UTC or treat a current offset as permanent zone
rules. Keep conversion and daylight-saving gap/overlap resolution with the
existing scheduling owner, showing/requesting clarification when its contract
requires it. See [W3C time guidance](https://www.w3.org/TR/timezone/) (a draft note).

For opening hours, shifts and other daily time ranges, model the real day:

- A close at or before the open ends on the next day; mark it ("next day") beside
  the close time. For opening hours, an equal open and close means open 24 hours
  unless the domain models 24 hours separately; elsewhere, follow the domain's rule. Validate overlaps across midnight, including a late range
  that runs into the next day's first range.
- Format displayed clock times through one shared locale helper built on
  `Intl.DateTimeFormat`, not per-locale patterns, so 12-hour locales (en-US)
  and 24-hour locales (pt-BR) render consistently on every screen. Format each
  `HH:MM` on a fixed reference date with `timeZone: 'UTC'`, so a daylight-saving
  gap never shifts a wall time. Keep input and stored values in the canonical
  `HH:MM` form; the locale changes only how they are displayed.

Why: without these rules, a venue open 18:00–02:00 cannot be entered, and the same
hour reads `6:00 PM` on one screen and `18:00` on the next.

Verify changed values through representative supported locales, submission
round trips, currency precision and relevant midnight/DST boundaries. Reuse
[translated-content checks](#forced-colors-and-translated-content) for expansion
and [direction isolation](visual-details.md#isolate-embedded-direction).

## Onboarding and authentication

When the task concerns reaching first value or onboarding conversion, also read
[activation](activation.md). A focused authentication or accessibility repair
does not require a commercial diagnosis.

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

## Mobile web

A web app used on a phone needs a few platform fixes that device emulation does
not reproduce. Gate by capability through media queries, `env()` and viewport
units; touch and mouse can coexist on one device, so avoid user-agent or
width-based touch detection. Apply each fix where its reason applies:

| Symptom | Fix and reason |
| --- | --- |
| Hover style sticks after a tap | Put hover styles inside `@media (hover: hover) and (pointer: fine)`; touch emulates a persistent `:hover`. Give press feedback through `:active` or pointer-down. Check the framework's hover variant before adding queries. |
| Gray or blue flash on tap | `-webkit-tap-highlight-color: transparent`, once, only when every tappable element has its own `:active` state. |
| Full-height layout overflows or hides bottom actions | `100vh` is the largest viewport. Use `100dvh` for app shells, drawers and bottom-pinned UI; `100svh` for heroes, which should not resize while scrolling. |
| Page zooms into a focused input | iOS zooms inputs whose font size is below 16 px; set inputs to at least 16 px. Keep pinch zoom: never `user-scalable=no` or `maximum-scale=1`. |
| Tap feels slow | Show feedback on pointer-down. A `width=device-width` viewport already removes the classic tap delay; `touch-action: manipulation` on controls covers remaining double-tap-zoom handling. |
| Pull-to-refresh or scroll chaining fights the app | `overscroll-behavior` on the scroll container, or on `html, body` for an app shell where the browser's pull-to-refresh is unwanted; avoid `touchmove` with `preventDefault()`. |
| Content hidden by the notch or home indicator | `viewport-fit=cover` in the viewport meta, then `env(safe-area-inset-*)` padding; without the meta the insets resolve to zero. |
| Long-press selects a control's label | `user-select: none` with `-webkit-user-select: none` for Safari, on controls only, never on readable content. |
| Custom horizontal gesture blocks vertical scroll | `touch-action: pan-y` on the horizontal gesture surface (the value names what the browser keeps); prefer native `scroll-snap` carousels, which need none. |
| Browser chrome color mismatches the theme | One `theme-color` meta per `prefers-color-scheme`, matching the top of the page; update it on a class-based theme toggle. |

On Android Chrome, `interactive-widget=resizes-content` in the viewport meta lets
the software keyboard resize the layout viewport so bottom-pinned inputs follow
it. Verify on real hardware over the LAN with remote inspection (Safari Web
Inspector, `chrome://inspect`): sticky hover, tap highlight, viewport units, input
zoom, overscroll, safe areas and the keyboard all differ from emulation. Report
which fixes were verified from code and which need a device. Native mobile apps
(React Native, Expo, Swift) are outside this guidance.

## Verification

Use keyboard interaction, the accessibility tree, relevant screen-reader checks
when available, and the existing automated audit. Each proves different things;
an automated pass is not complete accessibility certification.

Record the actual state, environment and result. When runtime is unavailable,
identify source-level defects without claiming interactive behavior passed.
For broader component stress scenarios, use the stress section in
[review](review.md). For movement, also load [motion](motion.md).
