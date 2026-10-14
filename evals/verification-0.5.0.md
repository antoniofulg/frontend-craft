# Verification of 0.5.0 guidance

Date: 2026-10-13. Baseline: published 0.4.0, merge commit
`3272ad881114c30a00e4076665b2ef2995c6dc55`. Evaluated condition: 0.5.0 working
tree, before commit. Skill-tree SHA-256:
`5dba32b1aa2201b478dae897cb73b520abf06458301ad9d7433aa0684425cbc9`.
Digest uses sorted relative file paths followed by NUL, file bytes and NUL.

Separate agents authored four disjoint work areas. A fresh-context reviewer
inspected authoring consistency and another independently mapped upstream
principles. Five further fresh-context agents received the skill entrypoint and
synthetic task evidence, without this evaluation document, expected outcomes or
the authors' conclusions. Agents used the session's default model configuration;
no model overrides, baseline runs or repeated trials were performed.

Commercial evaluation material follows the attribution and terms in
[sources](../skills/frontend-craft/SOURCES.md#commercial-expansion-in-050).
This record is maintainer documentation, not a runtime reference.

## Independent authoring review

The reviewer read routing, precedence, new/changed references, README, source
notes and full license. No actionable authoring defect was reported. It confirmed
the preserved license matches the pinned upstream copy byte-for-byte and found
the conditional-link/narrow-repair rules consistent. It identified missing
behavioral coverage of the new routes; dashboard, product-strategy/distribution
and economics probes below address representative cases, not exhaustive behavior.

The independent source audit found a cited reverse-trial concept without a
concrete definition in its destination. Monetization was corrected to describe
premium access followed by a disclosed free fallback, entitlement/data changes,
no silent paid enrollment and separate activation/payment outcomes.
The complete source mapping is in [upstream coverage](upstream-coverage.md).
Its final result classifies 54 principles as covered and 80 as contextually
adapted, with no uncovered principle remaining in the 134-entry inventory.

## Fresh-context task probes

Each evaluator produced a read-only recommendation and listed the files actually
consulted. Only the skill-specific reference reads are listed below; all read
SKILL.md. Project inputs were synthetic prompt evidence, not real inspected files.
No browser, live traffic, customer data or external mutations were involved.

| Probe and supplied evidence | Observed response | References read |
| --- | --- | --- |
| Landing review: old PRODUCT promises self-service; current CTA leads to a 45-minute demo and assisted setup; unsupported 80% savings; finance-manager audience; real quote; no browser/analytics | Prioritized promise/destination mismatch, removed unsupported savings, used actual audience and setup objection, preserved useful qualification, gave concrete changes and outcome metrics; explicitly limited visual/behavior claims | commercial-strategy, landing-pages, review, checkout, commercial-visuals, experimentation |
| Narrow heading plan: two sibling lists use ListHeader, Projects has a local oversized heading and unnecessary subtitle; no implementation requested | Reused the existing owner/API, removed local composition drift, named later render checks; no growth questionnaire or commercial reference reads | reuse-consistency |
| Strategy: quarterly required export used by 6% in a 30-day window supports segment generating 65% revenue; self-service 4 versus assisted 9 payers per 1,000 visitors; security/procurement setup | Retained critical infrequent capability, separated assistant abandonment from lack of need, calculated 0.4% versus 0.9% paid conversion and recommended testing a hybrid path; no arbitrary PLG or feature-deletion gate | commercial-strategy, product-strategy, positioning-distribution, activation, monetization, experimentation, pricing-economics |
| Dashboard: manager follows up overdue invoices, accountant needs exact balances/export but lacks contact permission; 18 equal cards; unsupported marketing causality | Proposed role-specific priorities/actions, retained exact values and permissions, rejected fabricated causality, named rendering/data checks and task-based validation | dashboards, commercial-visuals, charts, review, experimentation, commercial-strategy |
| AI economics: equal 2,000-visitor/R$4,000-acquisition cohorts; free offer yields 20 paid and 300 free-only at R$12 cost; trial yields 15 paid plus R$200 compute; paid revenue/cost R$100/R$20; unknown later retention | Calculated 1% versus 0.75% paid conversion but −R$6,000 versus −R$3,000 after acquisition/service; separated media CAC from whole-cohort costs, stated payback assumptions and avoided inferring free-to-paid transitions from account mix | commercial-strategy, monetization, pricing-economics, experimentation |

All five responses met the stated task's relevant evaluation criteria. They
support these examples of routing and decision behavior only. One run per task
does not establish reliability across models, relative improvement over 0.4.0,
token savings, or a measured conversion/revenue benefit. Pricing and growth
proposals were not enacted; no rendered UI was evaluated.

## Package checks

- `python3 scripts/validate_package.py`: passed metadata shape, links, reference
  reachability and portable distribution checks.
- `git diff --check`: passed.
- `npx --yes skills add . --list`: discovered the updated skill.
- Isolated `skills add` installation for Codex and Claude Code with `--copy --yes`:
  both installed copies matched all 26 skill files byte-for-byte, including the
  upstream license. Temporary installation directories were removed.

New scenarios in [scenarios](scenarios.md) preserve the distinct risks for later
runs. They are not automated tests that assert wording or a prescribed read count.
