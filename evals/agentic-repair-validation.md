# Agentic screen-repair validation

Date: 2026-11-02. Condition: unreleased additions after 0.14.0 and the
existing design-system workflow. Scope: agent instructions inside the existing
review owner, an explicit entrypoint route, examples and preserved Enmera MIT
attribution. No external design checker, hooks, generator, rule catalog,
issue-count targets or new public skill were integrated.

## Upstream scope

Compared Enmera's `skills/design-fix/SKILL.md`, `proof.md`, `motions.md` and
`scales.md` at `9ef8300772554df810ea126b670ff4edac8de034`. The local workflow
adapts the agentic sequence, not its executable tooling or universal aesthetic
prescriptions. Product proof, imagery, motion, shared ownership and behavioral
contracts keep their existing local owners. The full MIT notice is distributed
with the skill; [source notes](../skills/frontend-craft/SOURCES.md#agentic-screen-repair)
record the adaptation and exclusions.

## Fresh-context browser probes

Two generic task agents received the skill entrypoint, a user request and an
isolated synthetic HTML preview with product constraints. No expected reference
list or other probe result was supplied. Session-configured agent defaults were
used without model overrides. Each agent edited only its assigned temporary HTML
file; neither changed this repository or installed tools. Actual reference reads,
edits and browser calls were checked in the delivered tool histories. This was
not a baseline-versus-skill comparison or an automatic invocation test.

### Whole-screen repair

The operational handover fixture supplied three illustrative records, an approved
purple accent/system font, existing shared CSS selectors/tokens, search/count,
empty results, reset/focus and native disclosure interactions. It had fixed-width
rows, inconsistent repeated padding/radii, missing focus-visible outlines and
small truncated recipient names at narrow widths. The request authorized repair
while preserving identity, content and behavior.

The agent read review's repair/critique/generated-default sections, interaction
and accessibility, reuse and consistency, shared UI patterns and component
contracts. It repaired shared CSS owners rather than adding a library, changing
the approved brand or generating a parallel system.

| Observed property | Before | After |
| --- | --- | --- |
| Document width at a 360 px viewport | 850 px | 360 px |
| Long recipient text at narrow width | 10 px with ellipsis | 16 px, fully wrapping |
| Repeated row padding | 17 / 22 / 17 px | Shared owner treatment |
| Repeated row radius | 8 / 18 / 8 px | Shared owner treatment |
| Focus-visible input/disclosure outline | None | 3 px outline with 3 px offset |

The agent rendered supported 1280 and 360 px widths and the 600/601 px breakpoint.
It exercised mixed-case filtering, no results, restoring all three rows and
search focus, disclosure open/close behavior and existing fragment destinations.
It compared wording/order, records and links against the original. The parent
independently observed initial narrow overflow and, after repair, confirmed
360/1280 px document fit, readable recipient text, unchanged names/fragments,
filter counts, empty feedback, reset focus and expanded details through the real
browser surface.

### Narrow label correction

The separate preview's Save button requested approval, then entered an explicitly
terminal preview-pending state without server confirmation. The agent selected
only interaction/accessibility content-restraint and interaction guidance after
the entrypoint, not review's whole-screen repair, design-system creation or
commercial references. It changed only Save to Request approval.

Before and after browser runs covered the idle-to-pending transition. The enabled
idle control became disabled with Sending request… and the unchanged explicit
no-confirmation status. The parent confirmed the corrected label, transition and
narrow rendering. This demonstrates a scoped request boundary, not backend
approval behavior.

## Package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local links,
  reference reachability, portability and distribution-file checks.
- `npx --yes skills@1.7.5 add . --list`: discovered exactly one `frontend-craft`
  skill with the updated description. No consumer installation was requested.
- The initial `npx --no-install skills add . --list` could not run because the
  required CLI version was not cached. The pinned transient CLI invocation above
  succeeded; no project dependency was added.

These package checks validate distribution, not the visual design.

## Limits and cleanup

The preview used illustrative data, plain HTML/CSS and Chromium in light mode;
no backend, destination service, screen-reader certification, other browser
engine, dark theme or measured commercial/user-performance improvement was
verified. No scanner, generator, hook, build, lint, test suite or formatter was
used for the UI repair. Review-only/no-defect behavior is covered by a permanent
scenario but was not separately replayed in these two probes.

Initial DPR-1.25 screenshots were affected by a capture issue, reported to the
tool maintainer and excluded from pixel comparisons. The agent used valid DPR-1
captures; the parent also set and read back the actual viewport/DPR for its wide
proof. CSS layout measurements and screenshots are distinguished from behavioral
checks. The temporary previews/evidence and HTTP service were removed/stopped;
no fixture or preview route was added to the package. Neither release metadata
nor existing consumer installations were changed.
