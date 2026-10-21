# Frontend Craft 0.10.0 verification

Date: 2026-10-21. Scope: release the additions since `v0.9.0` with consistent
metadata, portable distribution and explicit evidence limits. The release keeps
the `frontend-craft` name and existing mixed source terms.

## Included coverage

- [GTM coverage](gtm-coverage-validation.md) maps both compared skills and the
  engineering implementation/quick-reference documents to bundled owners.
  Measurement covers data reconciliation, metrics, forecasts, attribution,
  qualification, economics and operating reviews. Automation covers platform
  selection, ingestion/enrichment, handoffs, agents, reliable effects, monitoring,
  cost and internal tools. Source-specific vendor assertions and universal
  thresholds were replaced with current-documentation and evidence requirements.
- [Motion vocabulary](motion-vocabulary-validation.md) accounts for all 91 source
  terms, naming/disambiguation behavior and corrected rendering distinctions.
  Existing motion, accessibility and performance rules retain authority.
- [Animation opportunity discovery](motion-opportunities-validation.md) covers
  scanning unanimated interactions, purpose/frequency/response/function judgments,
  concrete proposals, rejected candidates and a no-change verdict. Discovery stays
  read-only and preserves existing tokens, confirmation semantics and static options.
- [Performance audits](performance-audit-validation.md) cover capability discovery,
  traces/insights, requests/delivery and production bundles, preserving the original
  measurement principles. Its `0.9.0`/unreleased references describe the earlier
  authoring snapshot, before this release bump.
- Content restraint addresses redundant copy/controls and duplicated feedback.
  Marketing-copy guidance establishes editing scope, voice, naturalness and factual
  refresh while retaining existing claim and interaction owners. These changes
  were already committed before the GTM/motion release preparation.

The source-comparison records describe pre-release checks at `0.9.0`; this release
updates the README, entrypoint and changelog together to `0.10.0`. No removal of
the comparison GTM or animation skills is part of this release operation.

## Release checks

All checks listed below passed on the final release package: local links/heading
anchors, consistent `0.10.0` metadata and two isolated installations with 34
byte-identical package files each. The skill description stays within the
1,024-character limit. These are static/package and calculation results,
not fresh-agent or live-integration results.

- `python3 scripts/validate_package.py`: package metadata shape, local file links,
  reference reachability, portable installed references and distribution files.
- `git diff --check`, plus whitespace/local heading-anchor validation for the
  changed/new Markdown documents, including this release record.
- Independent metadata checks: `frontend-craft` identity, description within
  1,024 characters, and matching README/entrypoint/changelog release version.
- `npx --no-install skills add . --list`: one discoverable `frontend-craft` skill
  with frontend, commercial, GTM and motion-naming triggers.
- A temporary local install with `npx --no-install skills add <checkout> --skill
  frontend-craft --agent codex claude-code --copy --yes`: two independent copies,
  each byte-identical to all 34 package files. Each installed local reference
  resolves within its copied package. Temporary installations are removed after
  verification; no consuming project or global skill is updated.
- The 91 source motion terms match the included vocabulary inventory. Existing
  motion implementation/inspection rules are preserved alongside the new pointer,
  discovery section and corresponding scope wording; existing performance and
  interaction/accessibility guidance is preserved.
- Synthetic decimal-arithmetic checks in the GTM record verify monthly payback,
  net/closing recurring revenue, NRR/GRR, annualization, cost allocation and ROI
  distinctions. These verify worked calculations, not agent behavior.

## Limits

The 12 GTM, five motion-naming and three discovery cases define acceptance conditions
but were not run as fresh-agent evaluations. No live CRM, enrichment provider,
external-send pipeline, production rollout, real financial dataset, browser motion
capture or field performance study was exercised. Source coverage, naming inventory
and installation checks do not establish live correctness or commercial gains.

Consumers must explicitly update their installed Frontend Craft before relying on
the bundled coverage and removing old companions. Concrete vendor/API work still
requires current official documentation and the consuming project's authorization,
implementation and release workflow.
