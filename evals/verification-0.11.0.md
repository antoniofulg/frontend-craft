# Frontend Craft 0.11.0 verification

Date: 2026-10-27. Scope: release the user-behavior guidance since `v0.10.0`
with consistent metadata and portable installation. The skill name, selective
loading and existing mixed source terms are unchanged.

## Included coverage

The existing [behavioral-design owner](../skills/frontend-craft/references/behavioral-design.md#user-behavior-and-decision-making)
now covers smart defaults, goal gradient, reciprocity, the IKEA effect, loss
aversion and contrast. Each principle has a contextual application, trust boundary
and validation criteria. Existing overlapping rows were consolidated into this
section rather than duplicated in a second reference.

Routing, README, source provenance and three commercial evaluation cases were
updated with the guidance. Research scope and access limits are recorded in
[sources](../skills/frontend-craft/SOURCES.md#user-behavior-and-decision-making).
No video URL was supplied, so the video itself was not inspected.

## Release checks

- `python3 scripts/validate_package.py`: package metadata shape, local file links,
  reference reachability, portable references and required distribution files.
- Independent metadata and Markdown checks: matching `0.11.0` README/entrypoint/
  changelog versions, the skill description limit, local heading fragments and
  whitespace in the affected documents.
- `npx --no-install skills add . --list`: one discoverable `frontend-craft` skill.
- An isolated local install using `npx --no-install skills add <checkout> --skill
  frontend-craft --agent codex claude-code --copy --yes`: two independent copies,
  each containing 34 byte-identical `0.11.0` package files. All 363 local links in
  each installed package resolve within that package. Temporary directories were
  removed; no consuming-project or global installation was requested.

## Supplied-context behavioral probes

Three stateless `completion` calls using the configured `smol` model alias were
run during authoring, before the version bump. Each received the skill entrypoint
and behavioral reference as context, a synthetic read-only review task, no runtime
tools and a 250-word response limit. The behavioral instructions are unchanged
by the release metadata update. No baseline comparison was run.

The responses were inspected against the following consumer-visible decisions:

| Synthetic task | Observed recommendation |
| --- | --- |
| Confirmed team timezone, unknown billing preference, prechecked marketing and fabricated 20% progress presented as remaining time | Keep the editable confirmed timezone; require active billing/marketing choices with visible totals; remove invented progress and separate milestone counts from time estimates; validate first value including non-completers |
| Useful report locked behind email/contact consent, seven required cosmetic steps, late paid-export disclosure and work lost on navigation | Reveal the useful report without implied obligation; separate optional delivery/contact consent; offer the working template and optional customization; disclose paid export before effort and preserve recoverable work |
| Indefinitely retained free dashboards, premium collaboration expiry, false deletion threat, invented unavailable enterprise anchor and obscured billing periods | State the real access consequences; remove the fabricated threat and offer; show genuine monthly/annual choices with full charges; treat ordering as a hypothesis and include comprehension, refunds and continued useful use |

All three responses remained read-only and distinguished recommendations from
measured product outcomes. These are bounded supplied-context probes, not proof
that an agent independently discovers and loads the reference or follows it
reliably across models and projects.

## Limits

No live-page UX/accessibility exercise, user study, controlled conversion test,
retention observation or commercial improvement was measured. Package discovery,
installation and guidance probes establish different contracts; none establishes
revenue or usability gains. No npm publication is required for this GitHub-based
skill distribution.

Consumers update their installed skill explicitly using the README's install
command. Existing consuming projects and global installations are not updated by
publishing the repository release.
