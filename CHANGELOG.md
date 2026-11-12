# Changelog

## 0.24.0 — 2026-11-11

- Marketing copy now has its own reference,
  [copywriting](skills/frontend-craft/references/copywriting.md). The "Commercial
  brief and claim inventory" and "Write, edit and refresh marketing copy" sections
  moved out of landing pages into it, with page-specific links turned into
  plain-text pointers so the text stands alone. Landing pages keep a short stub
  that links to it, still own the public redesign contracts and interface checks,
  and every inbound link was retargeted.
- New in that guide, adapted from Corey Haines' marketingskills (MIT): a
  headline menu (outcome, problem, audience, differentiation, proof) for
  generating alternatives rather than filling templates; diagnosing the
  situation first (blank or generic, real voice present, point edit); declined
  claims that name the evidence that would unlock them; and nine structural
  patterns of generated-sounding copy (contrast reveal, negation list, trailing
  pile-on, question then answer, colon reveal, reflexive threes, uniform rhythm,
  abstract subjects, false ranges) as review signals that ask whether the sentence
  carries a supported claim. They are cues, not bans or caps; upstream's
  punctuation bans, frequency caps and word blacklists were left out. Notice in
  `licenses/coreyhaines-marketingskills.txt`.
- Repository mechanism for references that more than one skill needs: `shared/`
  holds the source of truth (not distributed) and `shared/manifest.json` lists the
  consuming skills. `scripts/sync_shared.py` copies each file into
  `skills/<skill>/references/` under a generated-file comment, so each skill still
  installs as an independent folder. Today the only consumer is `frontend-craft`.
- `scripts/validate_package.py` now checks every `skills/*/` directory with the
  same rules, requires each skill's license and sources files (and the helper
  scripts for `frontend-craft`), keeps shared files linking only to other shared
  files, and fails with `run python3 scripts/sync_shared.py` when a copy drifts.
- The skill description is unchanged.

## 0.23.0 — 2026-11-11

- Two optional, read-only Node helpers (no dependencies) now ship in
  `skills/frontend-craft/scripts/`, adapted from Pedro Nauck's ui-craft (MIT,
  notice already bundled): `check-contrast.mjs` reports the WCAG 2.2 ratio with AA
  and AAA verdicts and APCA Lc (APCA-W3 0.0.98G-4g) for hex, `rgb()` and `oklch()`
  pairs, singly or from JSON; `detect-token-drift.mjs` lists raw color literals
  outside token files. Exit 0 pass, 1 failure or drift, 2 bad input.
- Fixed in the adaptation: the APCA low clip (small contrasts reported a positive
  Lc), dropped alpha (a translucent foreground is now composited, a translucent
  background rejected), per-channel `oklch()` gamut clipping (now chroma
  reduction), and drift false positives for comments, URL fragments, id
  selectors and `hsl(var(--x))`-style token use.
- Referenced as optional helpers, never gates, from the dark-theme contrast
  paragraph in visual details, the color and contrast paragraph in interaction
  and accessibility, and the shared UI patterns audit. A project's own lint or
  codegen rule wins.
- `scripts/test_skill_scripts.mjs` (`node --test`) checks both helpers against
  WCAG and published APCA values and a token-drift fixture set. The package
  validator now requires the two scripts.

## 0.22.0 — 2026-11-11

- New [AI and agent interfaces](skills/frontend-craft/references/ai-interfaces.md)
  reference for chat, streaming, autocomplete, generated actions, copilots,
  recommendations and agents: set expectations of capability and limits, make
  invocation, dismissal and correction cheap, design every streaming state
  (pending, partial, stopped, interrupted, failed) without losing input or
  partial output, show sources and reasons, show uncertainty only where it is
  real, give feedback, memory and off controls, and keep streamed content
  accessible without flooding screen readers. It cites Microsoft's Guidelines for
  Human-AI Interaction as the public origin and links the existing async,
  announcement, motion, loading and behavioral-guardrail owners.
- [Design a dark theme](skills/frontend-craft/references/visual-details.md#design-a-dark-theme):
  semantic roles remapped per theme at the token owner, elevation by surface
  lightness, no pure black or white, retuned accents with the hue kept, failing
  color pairs, per-theme focus and disabled tokens, theme-aware assets,
  `prefers-color-scheme` with a persisted choice applied before paint and
  contrast measured per theme.
- Two routing rows. The `SKILL.md` description now names AI interfaces and dark
  themes and stays under 1,024 characters (1,017), trimming "and feedback",
  "or codebase", and shortening "production bundles" to "bundles".
- MIT notice for the adapted ui-craft material from Pedro Nauck's skills, and
  four behavioral scenarios.

Release package checks and remaining limits are recorded in
[the 0.22.0 verification record](evals/verification-0.22.0.md).

## 0.21.0 — 2026-11-11

- [Prototype with production components](skills/frontend-craft/references/reuse-consistency.md#prototype-with-production-components):
  when a project has a component library, concepts render real views from
  shared typed fixtures with declared states. Component prototypes use no raw
  markup; exploratory drafts may, and graduate to component prototypes on
  approval and are deleted. A data-bound container is split into a pure view
  first, prototypes make no network calls, the production build excludes them,
  journeys name edges by the real control text, regions carry stable ids, people
  approve and illustrative data is labeled. It uses the project's own preview
  tool; the package ships no server or script.
- The [binding comparison](skills/frontend-craft/references/review.md#compare-a-render-with-a-binding-design)
  now says a design binds visual language only: content, data, copy, brand marks
  and which controls exist stay with their owners, and a mockup's placeholder or
  omission is never an instruction.
- [Redesign parity](skills/frontend-craft/references/review.md#prove-redesign-parity):
  a redesign of an implemented surface starts as a transcription of current
  anatomy plus labeled deltas, scaled to the change.
- One routing row, MIT notice for the adapted Compozy material and four
  behavioral scenarios.

Release package checks and remaining limits are recorded in
[the 0.21.0 verification record](evals/verification-0.21.0.md).

## 0.20.0 — 2026-11-11

- [Compare a render with a binding design](skills/frontend-craft/references/review.md#compare-a-render-with-a-binding-design):
  a design supplied with the request binds unless the user called it
  inspiration, and approved departures are listed before judging; each state
  the design draws is captured at its pixel size over its scale, never resized;
  a fresh judge sees the design, pictures and departures but not code, diff or
  builder notes; an inventory of `same`/`differs` rows by kind (controls,
  arrangement, copy, drawing, render) is the judgement; undrawn states are
  proven by tests or interaction; the verdict names its commit, with one
  regression-aware second round before what still differs goes to the user.
- Complements, rather than replaces, rendered critique; pictures remain review
  evidence, not automated tests or gate steps.
- One routing row, a link from the changed-interface delivery check, a review
  lens row and six behavioral scenarios.

Release package checks and remaining limits are recorded in
[the 0.20.0 verification record](evals/verification-0.20.0.md).

## 0.19.0 — 2026-11-09

- Break a real component with worst-case data: list every rendered value with
  its source and limit, cover worst-case shapes for people, identifiers,
  numbers, time, media and collections, grade breaks by consequence, and map
  each to a [failure signature](skills/frontend-craft/references/review.md#failure-signatures)
  with its owner-level CSS fix.
- Decide truncation per field (wrap, end, middle, clamp, never for numbers and
  dates) with a way to read the full value; show absolute dates past about a
  week; extend touch hit areas and cancel taps that drift.
- Motion craft: a mechanism ladder with `@starting-style`, entrances from near
  full size with popovers anchored to their trigger and dialogs centered,
  tooltip warm-up and tab-indicator rows, easing chosen by what the element
  does with illustrative custom curves, spring bounce limits, product
  personality and token consolidation, toast timers paused in hidden tabs,
  drag start threshold, momentum projection and velocity-seeded reversal,
  discomfort triggers, `prefers-reduced-transparency` and `prefers-contrast`
  branches, and a slow-motion feel check.
- Visual details: translucent surfaces, line height by size and eased
  overflow fades.
- Reuse: do not hand-roll solved problems, and
  [compare variants](skills/frontend-craft/references/reuse-consistency.md#compare-variants-when-direction-is-open)
  on a named axis, one at a time at full size, when direction is open.
- Two routing rows and six behavioral scenarios.

Release package checks and remaining limits are recorded in
[the 0.19.0 verification record](evals/verification-0.19.0.md).

## 0.18.1 — 2026-11-08

- State once, in [rendered critique](skills/frontend-craft/references/review.md#critique-the-rendered-composition),
  that rendered screenshots are review-time inspection evidence: take them with
  the browser workflow, don't encode them as automated tests or gate steps, and
  follow the project's test contract for automated proof.
- Point the other screenshot and capture instructions in `SKILL.md`, review
  repair, performance, mapping and design systems to that rule.

Release package checks and remaining limits are recorded in
[the 0.18.1 verification record](evals/verification-0.18.1.md).

## 0.18.0 — 2026-11-08

- Coordinate several moving elements as one motion: lead/support/decoration
  roles, together/overlap/sequence/carry relationships, one entrance per
  container, exits removed from layout at once, direction-aware exits and
  interruption checks.
- Diagnose dropped frames by named cause: property cost tiers and cheaper swaps,
  busy-main-thread drivers, per-frame re-renders, inherited custom properties,
  blur cost and `will-change` as the last step, confirmed on a device recording.
- Remove or reduce motion by subtraction, checking hidden start states, code
  that waits on animations, unmount and focus timing and masked layout jumps,
  then cleaning up orphans.
- Split gestures into a 1:1 tracking phase and a velocity-seeded release, with
  distance-or-velocity dismissal, rubber-banding, linked values and linear holds.
- Add mobile web fixes: capability-gated hover, tap highlight, `dvh`/`svh`,
  16 px inputs without disabling zoom, safe areas, overscroll, `touch-action`
  and per-scheme `theme-color`, verified on real hardware.
- Add a public launch-readiness pass: HTTPS canonical origin, a real 404 page,
  per-page titles, descriptions and social previews, the project's own icons,
  placeholder residue, real contact details, owner-supplied legal pages, consent
  only where required, verified conversion events and links to the existing
  form, imagery and mobile owners. Placeholder residue is also a
  generated-interface default.
- Add routing rows and eight behavioral scenarios.

Release package checks and remaining limits are recorded in
[the 0.18.0 verification record](evals/verification-0.18.0.md).

## 0.17.0 — 2026-11-06

- Add a build checklist that runs before building and before delivery: yes/no
  checks for what a change adds or alters, fixed at the shared owner while
  building and reported as findings in reviews; existing problems are reported
  as gaps.
- Animate form conditional reveals (field errors, dependent fields, collapsible
  sections) through the shared primitive, with collapsed content made inert and
  reduced motion instant.
- Require every visible keycap to work through the control's own path and scope,
  registered where a shortcut registry exists; single-key shortcuts follow
  WCAG SC 2.1.4. Add layered Escape and primary-action defaults for multi-step flows.
- Reuse one control for a setting wherever it is edited, with "no limit" and
  off-preset values; give interactive elements hover, active and focus-visible
  states from the design-system control.
- Model the real domain: control by cardinality, type before dependent options,
  server-side enforcement, realistic defaults and direct edits over exceptions.
  Handle next-day and overnight time ranges with one locale clock helper, and
  show whole-entity summaries.
- Add a redesign parity gate: code-derived inventory, side-by-side render and a
  parity table listing removals first.
- Add nine build-time scenarios, including one where a narrow fix must stay narrow.

Release package checks and remaining limits are recorded in
[the 0.17.0 verification record](evals/verification-0.17.0.md).

## 0.16.0 — 2026-11-04

- Add choice-surface guidance for filters, configurators and other surfaces where
  people weigh trade-offs: comparable constraints, outcome previews, zero-result
  recovery, control selection, distributions and decision aids based on real rules.
- Require counts to share the query, scope and authorization of the results they
  promise; treat other products' patterns as precedents to test, not evidence.
- Add a routing row, a review lens and three behavioral scenarios, including one
  where a proposed histogram should be rejected.

Release package checks and remaining limits are recorded in
[the 0.16.0 verification record](evals/verification-0.16.0.md).

## 0.15.0 — 2026-11-02

- Add an on-demand design-system review and creation/evolution workflow within
  the existing `frontend-craft` skill. Ground foundations, semantic roles,
  component/block selection and rules with reasons in real product tasks.
- Reuse existing ownership, audit, mapping and propagation guidance; distinguish
  proposals from implemented contracts and keep ordinary UI edits scoped.
- Add design-system behavioral scenarios and fresh-context routing probes.
- Add an agent-guided screen-repair sequence within the existing review owner:
  preserve a before state, measure role-level drift, state the product brief,
  repair by consequence and verify preserved content and interactions.
- Adapt Enmera's MIT-licensed agent instructions with attribution and the full
  notice; do not integrate its checker, hooks, generator or issue-count targets.

Release package checks and remaining limits are recorded in
[the 0.15.0 verification record](evals/verification-0.15.0.md). Detailed workflow
evidence is in [the design-system validation](evals/design-system-validation.md)
and [the agentic repair validation](evals/agentic-repair-validation.md).

## 0.14.0 — 2026-10-30

- Add subscription-paywall guidance: review the paywall within its surrounding
  flow, restate the user's stated outcome before the price, compare a
  single-action trial paywall against multi-plan choice, show an honest trial
  timeline and per-period price equivalents beside the charged amount, and route
  paywall proof to the landing-page proof rules.
- Treat published paywall case studies as patterns to test rather than expected
  lift; route onboarding paywalls from activation.

Release checks and remaining limits are recorded in
[the 0.14.0 verification record](evals/verification-0.14.0.md).

## 0.13.0 — 2026-10-29

- Add a review table of generated-interface defaults with consequences,
  preferred replacements and justified exceptions, plus a public-page table of
  generated marketing defaults to avoid unless the brief justifies them.
- Classify reviewed regions as acquisition, repeated work, reading or trust, and
  ask each element and screen to justify its existence.
- Verify document-level overflow after fonts load, every supported theme, best and
  worst real records, failing requests and the validity of the measurement
  itself; rank shared owners before page fixes.
- Add a removal test and accumulation count to content restraint, and body
  measure, wrapping and tracking notes to display typography.

Release checks and remaining limits are recorded in
[the 0.13.0 verification record](evals/verification-0.13.0.md).

## 0.12.0 — 2026-10-28

- Add contextual halo-effect, cognitive-load/processing-fluency and peak-end
  guidance, with trust boundaries, validation criteria and research provenance.
- Refine opening-view composition, total task effort, first-impression observation,
  micro-interaction feedback and useful journey endings without prescribing a
  premium aesthetic or mandatory animation.
- Combine review routes by named surface and requested lens. Onboarding reviews
  consult activation guidance and available project philosophy even without
  analytics; delegated reviewers inherit the relevant context and evidence limits.
- Extend behavioral evaluation cases and exercise reference loading separately
  from package validity; consumer installations remain maintainer-controlled.
- Add actionable blocked/limit states, authoritative undo and outcome-aware
  payment recovery within existing owners; preserve real reset policies,
  recoverable work, safe payment reconciliation and private support handoffs.
- Extend scoped journey consistency and end-to-end recovery verification, and
  add evidence-bounded service-recovery guidance without guaranteed trust or
  commercial-lift claims.
- Deepen the visual, motion, memory, recovery and instruction-loading guidance
  with primary research and standards. Separate perception from task performance
  and delayed recall, qualify repeated-failure and baseline comparisons, and
  retain selective loading with source-freshness and host-aware handoffs.

Release checks and remaining limits are recorded in
[the 0.12.0 verification record](evals/verification-0.12.0.md). Detailed authoring,
research and behavioral evidence is in
[the review-routing evaluation](evals/review-routing-validation.md).

## 0.11.0 — 2026-10-27

This release expands optional user-behavior guidance within the existing
behavioral-design owner. Selective loading and existing product contracts remain
authoritative.

- Expand the existing behavioral-design reference with a user behavior and
  decision-making section covering smart defaults, goal gradient, reciprocity,
  the IKEA effect, loss aversion and contrast. Add contextual applications,
  trust boundaries, validation criteria, research provenance and focused routing;
  retain truthful progress, explicit consent, comparable prices and usable exits.

Validation and remaining evidence limits are recorded in
[the 0.11.0 verification record](evals/verification-0.11.0.md). Supplied-context
model probes are not an autonomous-routing benchmark or evidence of usability,
conversion or retention gains.

## 0.10.0 — 2026-10-21

This release expands standalone commercial operations and optional frontend
references. Existing project owners and selective loading remain authoritative.

- Add optional reverse lookup for 91 motion terms, with explicit distinctions
  between visual effects, interaction patterns and rendering/performance concepts.
- Add read-only animation-opportunity discovery with seam coverage, contextual
  proposals and explicit reasons to keep interactions static.
- Cover GTM measurement and engineering through optional bundled references:
  revenue/pipeline metrics, attribution and data quality; enrichment, qualification,
  handoffs, platform selection, agents, integration reliability, cost and internal tools.
- Extend operational routing and correct annual-to-monthly payback units while
  retaining existing commercial evidence, interface and authorization owners.
- Add focused marketing-copy routing and guidance for editing scope, brand voice,
  naturalness and factual refresh, reusing existing claim and public-page owners.
- Add content restraint for redundant copy, duplicated feedback, excessive
  explanation and unnecessary controls, with focused wording and review routes.
- Add an optional performance audit procedure for capability discovery, trace and
  request inspection, delivery policies and production-bundle analysis.
- Extend performance routing without changing field/lab evidence standards,
  accessibility ownership or comparable before/after measurement requirements.

Validation and remaining evidence limits are recorded in
[the 0.10.0 verification record](evals/verification-0.10.0.md). Live CRM/provider
workflows, field performance and fresh-agent evaluations of the new GTM/naming
cases remain untested; no commercial or runtime improvement is claimed.

## 0.9.0 — 2026-10-20

This release expands reusable frontend guidance. Consuming projects update
their installed skill explicitly using the commands in the README.

- Loading states now preserve invariant UI and real control structure, mask
  unresolved values, reserve layout before decorative paint, and verify actual
  pending/ready geometry and readiness.
- Technical SEO and discovery guidance covers initial public HTML, publication
  and canonical contracts, HTTP indexing/cache/error policies, truthful metadata,
  crawlable collections, mobile rendering and search/AI evidence limits.
- Core Web Vitals guidance adds current field targets and metric-specific
  LCP, INP and CLS diagnosis in the existing performance owner.
- Async and collection guidance covers obsolete responses, uncertain mutation
  outcomes, optimistic recovery, sorting scope and explicit bulk selection.
- Interaction guidance adds accessible tables/grids, history and draft recovery,
  and locale-sensitive currency, message, calendar and scheduling contracts.
- Routing, source provenance and evaluation cases extend existing owners.
  The update introduces no runtime dependency or mandatory small-fix workflow.

Validation and evidence limits are recorded in
[the resilience evaluation](evals/resilience-validation.md) and
[the 0.9.0 verification record](evals/verification-0.9.0.md).
Existing reported product tile, price and reservation-alternative mismatches
remain open until their actual fixes are verified.
