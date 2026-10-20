# Sources and adaptation notes

Frontend Craft is authored by Antonio Fulgêncio, 2026. Its pre-existing technical
guidance retains [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/);
the commercial additions described below carry separate source terms. Its
installed license notice is [LICENSE](LICENSE). These notes travel with the skill.

## Adapted material

[Workflow Toolkit](https://github.com/antoniofulg/my-workflow), Antonio Fulgêncio,
CC BY 4.0. Reference revision: `e2f705d6d4d72f86de45f0a3fc3fa43f22fef7c8`.

Relevant sources: `wtk-reuse-review/SKILL.md` and WTK references `code-reuse.md`,
`ui-ux.md`, `frontend.md`, and `context-budget.md`, under `.agents/skills/`.
Adaptations here concentrate semantic owner discovery, surface mapping, consumer
comparison, source-versus-rendered evidence, and conditional reference loading
into a standalone frontend skill. Backend review, release procedures and
WTK-specific artifact requirements are omitted. No endorsement is implied.

When a consuming project already uses WTK, its governing workflow/reuse policy
remains authoritative; this package contributes task-specific application rather
than installing a second project policy.

## Design references, independently expressed

These repositories informed the selection of problems and evaluation criteria.
Their skill prose, examples, executable code, templates and datasets are not
bundled here. Installed project copies may differ from their recorded upstream.

| Source | Recorded reference | Contribution |
| --- | --- | --- |
| [Jakub Krehel's skills](https://github.com/jakubkrehel/skills) | `267330e1adfc66a718fb65fa6918c1f06d0a689e` | Interface inspection, domain review, explanation evidence, and relevant component stress axes |
| [Anthropic skills](https://github.com/anthropics/skills) | `8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4` | Purposeful content structure and consistent interface vocabulary |
| [Emil Kowalski's skill](https://github.com/emilkowalski/skill) | `e8a175de22ae1e49370fc144c1f3bb9aeedf988d` | Motion purpose, frequency and interruption as design questions |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `v2.15.0` | Targeted interaction, chart and accessibility reference categories |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) | Initial: `ce26fc25c0e5e8cab638f883de62d9a86ee5e45b`; v2.0.0 review: `2b44c81bbe36ac8a8a6bdd1c9ff593f28b8728f4` | Context-sensitive public-page composition; subject-specific identity, media workflow and rendered critique |
| [Vercel agent skills](https://github.com/vercel-labs/agent-skills) | Local `react-composition-patterns` skill, metadata version `1.0.0` | Component composition and state-owner questions |
| [Autonnel skills](https://github.com/autonnel/autonnel-skills) | Local `landing-page-conversion-audit`; revision not recorded | Evidence limits and visitor decision-path review |

Fixed aesthetic formulas, unsupported conversion estimates, promotional tool
requirements and restricted transition recipes were not incorporated.

## Technical reference additions in 0.2.0

Technical examples are independently authored. Links beside the relevant rules
point to React's context/ref documentation, MDN's CSS/HTML/ARIA references, WAI's
status-message/alert/complex-image guidance, and Motion's transition/drag reference.
These primary sources were consulted on 2026-10-08; exact APIs and browser support
must still match the consuming project's installed versions and targets.

The chart guide is a compact question-driven aid, with Data to Viz as an optional
specialist reference. It does not bundle a third-party chart catalog. Motion
timings, spring settings, corner geometry and color examples are contextual
starting points rather than universal requirements or upstream design tokens.

## Shared UI patterns in 0.8.0

The [shared UI patterns guide](references/shared-ui-patterns.md) and its routing
are independently authored technical guidance for auditing, consolidating and
maintaining shared components, styles and tokens. They retain the technical
guidance's CC BY 4.0 terms. Tailwind's official documentation on
[reuse](https://tailwindcss.com/docs/styling-with-utility-classes#managing-duplication),
[theme variables](https://tailwindcss.com/docs/theme),
[custom styles](https://tailwindcss.com/docs/adding-custom-styles) and
[directives](https://tailwindcss.com/docs/functions-and-directives) was consulted
on 2026-10-17 through Context7 and the official site. The guide keeps those
mechanisms conditional on the installed version and project conventions; it
does not bundle a framework manual or impose a new design system.

## Style coverage in 0.8.1

The style-family matrix, state/environment accounting, ownership scopes and
targeted style-update workflow extend the independently authored technical
guidance under CC BY 4.0. They add coverage and change-management rules rather
than new framework APIs, a visual prescription or copied upstream material.
The existing conditional Tailwind guidance and its primary-source links remain
applicable to matching installed versions.

## Loading states and technical discovery

The loading sections in [performance](references/performance.md),
[components](references/components.md) and
[interaction and accessibility](references/interaction-accessibility.md), and
the [technical SEO guide](references/technical-seo.md), are independently authored
technical guidance under CC BY 4.0. Their routing does not change the existing
commercial-source terms or project publication, authorization and release owners.

Lessons supplied by the maintainer were checked against the `my-court` project's
`docs/product/STYLE-CONTRACT.md`, `docs/design/loading-states/README.md` and
`index.html`, both `2026-10-20-loading-value-masks` reports, the product's
`SEARCH-DISCOVERY.md`, four `2026-10-20-search-discovery` reports, and relevant
`.adaptive-guidelines/ledger.md` entries. These are provenance identifiers, not
installed dependencies; project artifacts, fixtures and code are not bundled.
The project's paint delay, control dimensions, route scheme and cache policy
remain local choices. Reported tile, price and reservation-alternative geometry
mismatches remain open examples until verified; earlier bounded passes do not
establish that those fixes occurred.

Primary documentation linked beside the SEO rules was consulted on 2026-10-20:
Google documentation on JavaScript, mobile rendering, crawlable links,
pagination, faceted navigation, HTTP statuses/redirects, page experience,
canonicals, sitemaps, robots directives, localized URLs, structured data,
AI features and crawler verification; OpenAI's
crawler documentation; and the HTML Standard's script-content restrictions.
The optional `llms.txt` link describes a proposal, not a search-engine guarantee.
[WAI-ARIA busy semantics](https://www.w3.org/TR/wai-aria-1.2/#aria-busy) and the
existing WAI status-message guidance support the loading semantics. No framework
API recipe was added; version-specific implementation still requires current
official documentation, using Context7 first for library documentation.
These sources support technical guidance, not measured ranking, commercial or
agent-reliability improvements.

The performance reference's Core Web Vitals targets and metric-specific diagnosis
use Google's web.dev [Web Vitals overview](https://web.dev/articles/vitals) and
its optimization guides for [LCP](https://web.dev/articles/optimize-lcp),
[INP](https://web.dev/articles/optimize-inp) and
[CLS](https://web.dev/articles/optimize-cls), consulted on 2026-10-20. This
extends the existing technical evidence owner, without installing telemetry,
prescribing a framework technique or claiming a site's field metrics were tested.

## Async recovery, collections, navigation and localized data

The additional sections in [components](references/components.md),
[interaction and accessibility](references/interaction-accessibility.md) and
[performance](references/performance.md) are independently authored technical
guidance under CC BY 4.0. Existing project state, authorization, persistence,
translation, scheduling and navigation owners remain authoritative. Sorting,
selection and draft-retention policies are product contracts, not universal
accessibility requirements.

Primary sources consulted on 2026-10-20 are linked beside their rules: RFC 9110
on mutation retry semantics; MDN Fetch, History and beforeunload documentation,
queried through Context7; Google's web.dev bfcache restoration guidance; WAI's
table/grid patterns, sortable-table example, header and virtualized-position
guidance; W3C locale inference and composite-message guidance; and Unicode
number/currency and plural data. W3C's time-zone document is a draft note used
as guidance, not a normative scheduling requirement. Its examples do not replace
the consuming project's date or daylight-saving disambiguation contract.

Concurrency guards, operation-scoped rollback, explicit selection scope and
restoration checks are engineering applications of those contracts; the sources
do not prescribe one frontend architecture. APG examples require validation in
the actual browser/assistive-technology environment. These additions do not add
libraries, persistent drafts, retry infrastructure or telemetry as installation
side effects, and source review does not prove runtime behavior.

The 0.9.0 browser exercises further distinguished logical duplicate writes from
repeated transport deliveries and exposed author CSS overriding a conditional
field's `hidden` state. MDN's hidden-attribute documentation was queried through
Context7 before adding that visibility caveat. These are bounded synthetic-fixture
observations, with their limits recorded in the release verification artifact.

## Contract and evidence additions in 0.3.0

The public-redesign checklist, onboarding/authentication criteria, performance
workflow and gesture/audit additions are independently expressed. Primary sources
linked beside the guidance are WCAG 2.2 and its WAI Understanding documents, MDN
Pointer Events, web.dev Web Vitals and Chrome DevTools performance documentation,
consulted on 2026-10-08. WCAG conformance criteria and ergonomic suggestions are
identified separately; local measurements do not establish field results.

An installed `transitions-dev` catalog was inspected on 2026-10-08: 32 recipes,
copyright 2026 Jakub Antalik / Transitions.dev; source revision not recorded.
Its [license terms](https://transitions.dev/terms.html) permit use and modification
in products but restrict republishing the collection or a substantial portion as
a competing library, template pack or component kit. This package adds optional
routing only; it includes no catalog prose, recipe code or shared CSS. Consult
the installed copy's license and recipe contract for actual product use.

## Commercial guidance in 0.4.0

The commercial additions adapt ideas and their application from
[Revenue-Centric Design](https://github.com/heliocosta-dev/revenue-centric-design),
curated by heliocosta-dev from Richard ([@richardrx](https://x.com/richardrx)).
Recorded upstream revision: `1942760c2242f609bf63ce2c97204f5a1791bd68`, inspected
2026-10-13. Richard is the source of the underlying design ideas and the coined
term Revenue-Centric Design; no endorsement of Frontend Craft is implied.

The full [upstream license](licenses/revenue-centric-design.txt) is preserved.
It requires attribution and excludes gambling, betting, casino and the other
real-money gaming/loot-box uses specified there. These additions are distributed
subject to those terms, not relicensed as unrestricted CC BY 4.0 material.

Covered references: [commercial strategy](references/commercial-strategy.md),
[activation](references/activation.md), [monetization](references/monetization.md),
[retention](references/retention.md) and [experimentation](references/experimentation.md).
The commercial-purpose, routing, precedence and reporting additions in SKILL.md,
the landing-page decision-stage section and commercial review routing, the
commercial finding format in review.md, and commercial cross-references in
reuse-consistency.md and interaction-accessibility.md are part of this adaptation.
The corresponding README explanations and commercial evaluation scenarios are
also covered. Earlier technical guidance keeps its existing license.

Upstream themes consulted: conversion-and-landing-pages, onboarding-and-activation,
pricing-and-monetization, churn-and-retention, behavioral-science-toolkit and
metrics-and-experimentation. Adaptation changes: integrate commercial diagnosis
with existing component ownership and verification; express tactics as contextual
hypotheses; retain complete-funnel measurement; replace absolute plan-count and
page formulas with decision criteria; require truthful progress, disclosed terms
and a usable cancellation path. Upstream statistics, case-study narratives,
screenshots and asset collections are not reproduced as evidence for this skill.

## Commercial expansion in 0.5.0

[Commercial visuals](references/commercial-visuals.md),
[checkout](references/checkout.md), [dashboards](references/dashboards.md),
[behavioral design](references/behavioral-design.md),
[product strategy](references/product-strategy.md),
[pricing economics](references/pricing-economics.md),
[positioning and distribution](references/positioning-distribution.md), and the
expanded activation, monetization, retention, commercial strategy and
experimentation references extend the adaptation above under the same preserved
source-available terms. Their routing, README explanations and evaluation material
share this scope. Version 0.4.1 was not released; the visual work is part of 0.5.0.
The source is Richard (@richardrx), curated in Revenue-Centric Design at the
recorded revision. All twelve upstream thematic references inform this expansion,
including product-strategy-and-features, positioning-icp-and-gtm,
ai-era-differentiation, dashboards-and-data-viz, checkout-and-forms and
revenue-centric-design in addition to the themes listed above.

The adaptation expresses mechanisms as decisions with context and evidence:
attention hierarchy, offer economics, first and repeated value, feature adoption,
distribution and differentiation. Fixed thresholds, mandatory plan counts,
unverified causal claims and manufactured exit barriers are replaced with scoped
hypotheses and stated tradeoffs. No upstream case-study statistics, screenshots
or assets are reproduced as proof of expected product results.

## Standalone strategy and sales in 0.6.0

Version 0.6.0 makes the commercial scope independent of frontend implementation.
The entrypoint, commercial strategy, positioning/distribution, monetization,
experimentation and commercial review routing now support product/business
decisions without requiring a page, repository or UI change. The existing twelve
source themes remain the commercial foundation at the recorded upstream revision;
the 0.5.0 coverage audit is a historical record, not a new 0.6.0 behavioral result.

[Growth and sales](references/growth-sales.md) connects those themes to a broad
commercial diagnosis and exhaustive strategic-audit routing. Offer composition,
assisted-sales stages, discovery, demos, objections, proposals and usable action
deliverables are Frontend Craft's additional application guidance, not newly
attributed Richard quotations or upstream case results. This integrated commercial
reference and the changed commercial routing/documentation are distributed under
the same preserved source-available terms. No source screenshots, study statistics
or updater pipeline were added, and the upstream license remains unchanged.

## Public-page identity and media in 0.7.0

[Taste Skill v2.0.0](https://github.com/Leonxlnx/taste-skill/tree/v2.0.0), by
Leonxlnx, was inspected on 2026-10-15 at
`2b44c81bbe36ac8a8a6bdd1c9ff593f28b8728f4`, alongside the initial revision above.
The upstream is MIT licensed. Its new SKILL, imagery, critique, layout, copy,
type, colour, motion and research references and draw/asset/inspection scripts informed this
review; no upstream prose, code, templates, datasets, media or tools are bundled.

Independently expressed additions cover five mechanisms: subject-derived visual
identity and a competitor-specificity check; media inventory, sourcing, provenance,
crops and delivery; concrete rendered critique and bounded corrections; comparison
of composition candidates when direction is open; and optional useful product
interactions with honest data and accessible fallbacks.
Follow-up source review also informed scoped illustration craft and display-type
refinements in imagery and [visual details](references/visual-details.md).

[Imagery](references/imagery.md) is independently authored technical guidance under
CC BY 4.0, as are the technical media routing, rendered-critique and visual-detail additions.
Commercial additions in [landing pages](references/landing-pages.md) and
[commercial visuals](references/commercial-visuals.md) extend the existing commercial
references and retain their preserved source-available terms. The source scope
above is unchanged; upstream Taste Skill research is not commercial validation.

Adaptation boundaries: retain approved design and Impeccable ownership, narrow-task
scope, real component owners and evidence limits. Composition alternatives are
conditional, media and motion have no minimum counts, and aesthetic preferences
are not universal correctness rules. The upstream's palette/type bans, two-line
headline limit, fixed layout formulas, mandatory interaction and motion quotas,
random draw and Awwwards scoring are not package requirements. Its study and
blind model judgments motivate investigation, not a claim of measured superiority,
conversion uplift or reliability for Frontend Craft. Maintainer evaluation records
live outside the installed skill.

## Companion and distribution

[Impeccable](https://github.com/pbakaus/impeccable) is an optional companion and
owns its own design/context workflow. Frontend Craft does not redistribute it,
invoke an assumed version-specific launcher, or require its installation.

[Skills CLI](https://github.com/vercel-labs/skills) supplies discovery and
installation. Its documented local/Git repository support is used directly;
there is no custom installation protocol in this package.
