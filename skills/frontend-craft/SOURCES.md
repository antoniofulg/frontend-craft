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

## Performance audit operations

The optional [performance audit procedure](references/performance-audits.md) is
independently authored technical guidance under CC BY 4.0. The maintainer's
installed `web-perf` skill was comparison material on 2026-10-21; its source
revision was unavailable. The compared `SKILL.md` had SHA-256
`79c531e95ca4d96a7de920c28c127c2c09ec55cd452a92222267d2954580be23`.
Only missing operational coverage was added. Fixed tool/API names, setup recipes,
universal budgets, blanket rejection of zero estimated savings and a duplicate
accessibility checklist were excluded. Existing performance evidence rules remain
authoritative; the comparison does not establish measured site improvements.

## Content restraint

The maintainer-supplied `minimalist-ui` skill was comparison material on
2026-10-21. The maintainer's recurring corrections motivated independently
authored [content restraint](references/interaction-accessibility.md#content-restraint)
guidance under CC BY 4.0. It extends existing interaction and review owners;
the comparison skill's font bans, fixed palettes, layout recipes and mandatory
animations were not incorporated. Approved design direction and accessibility
remain authoritative. No upstream prose or assets are bundled, and no measured
usability improvement is claimed.

## Marketing copy editing

Installed `copy-editing` and `copywriting` skills, both metadata version `2.1.0`,
and `humanizer` version `2.8.2` were comparison material on 2026-10-21. Their
upstream revisions were not recorded. The independently authored
[marketing-copy guidance](references/landing-pages.md#write-edit-and-refresh-marketing-copy)
adds editing scope, voice matching, naturalness and factual refresh to the existing
commercial owner and retains that guide's existing source terms. Existing audience,
proof, CTA and claim-inventory guidance remains authoritative. No source prose,
examples or reference catalogs are bundled.

Fixed editorial sweeps, simulated expert-score gates, prescribed page templates,
punctuation and paragraph quotas, automatic refresh schedules and unsupported
conversion estimates were not incorporated. Voice edits preserve facts and do not
invent personal anecdotes or customer evidence. Stylistic cues are not authorship
tests, and no measured writing, usability or commercial improvement is claimed.

## GTM measurement and automation

The maintainer's local `gtm-engineering` and `gtm-metrics` skills, both metadata
version `1.0.0`, were comparison material on 2026-10-21. Their metadata identifies
Chad Boyda's `agent-gtm-skills` as the original source and Felipe Rodrigues
(`felipfr`) as modifier. The engineering implementation guide and quick reference
were included in the comparison. Upstream commit revisions were unavailable;
the maintainer coverage record preserves SHA-256 identifiers for all four files.

The [measurement](references/gtm-measurement.md) and
[automation](references/gtm-automation.md) references are independently authored
under CC BY 4.0. They supply the operational subject coverage without copying
source prose, examples, code, vendor tables or catalogs, or requiring another
GTM skill. Existing linked commercial references retain their source-available
terms; these additions do not relicense them. Existing frontend, accessibility,
commercial-evidence and implementation/release owners remain authoritative.

The scope includes platform selection and workflow implementation, using current
official documentation at the point of a concrete vendor/API decision. Source
vendor prices, feature counts, model rankings, universal benchmarks, fixed scoring
weights and claimed savings were replaced with contextual selection/measurement
rules. Role responsibilities are retained; salary, job-market and adoption claims
are not operational requirements. Attribution remains credit allocation rather
than proof of causality, and engineering completion is distinct from commercial gains.

Primary sources consulted on 2026-10-21 are linked beside the relevant rules:
ChartMogul's recurring-revenue movement taxonomy and Google's explanations of
attribution credit versus incremental conversions. No vendor API recipe or
industry threshold is asserted. Payback conversion, cost allocation and other
calculations use explicit units and local reporting definitions; these are not
claims that a project's financial data or live integrations were verified.

## Motion vocabulary

The maintainer's local `animation-vocabulary` entrypoint was comparison material
on 2026-10-21; it declares no version. Its SHA-256 identifier was
`40d2b27adfdfeb0570a9f20e7d0255109d9233c50603878bcd0dcd04c923fd94`.
The [motion vocabulary](references/motion-vocabulary.md) is independently authored
technical guidance under CC BY 4.0, covering all 91 named terms without copying
source definitions, examples, invocation scripts or a separate vocabulary website.

The comparison informed reverse lookup, concise answers and disambiguation.
Fixed readiness replies, verbatim-quotation requirements and restrictions to a
closed glossary were not incorporated. Existing motion, accessibility and
performance owners remain authoritative. The reference distinguishes layout
animation from forced-layout thrashing, skeletons from shimmer, timing curves from
spatial paths and descriptive effects from browser APIs. It makes no universal
frame-rate target or hardware/compositing guarantee.

Browser terminology was checked through the configured Context7 MCP against MDN
on 2026-10-21. Primary links beside the rules cover clipping/masking, view
transitions, optimization hints and forced style/layout work. No implementation
or browser-support claim follows from naming an effect.

## Animation opportunity discovery

The maintainer's local `find-animation-opportunities` skill was comparison
material on 2026-10-21; its entrypoint declares no version and had SHA-256
`f2db8db5950ef7ed2ebd0ec73f83534c36742f2aef8b5b9b03d8a953064b027d`.
The independently authored [discovery mode](references/motion.md#find-animation-opportunities)
is technical guidance under CC BY 4.0. It covers reconnaissance, unanimated
interaction seams, purpose/frequency/response/function judgments, concrete
proposals, rejected candidates and read-only handoff without another motion skill.

The source's readiness reply, recipe snippets, fixed timing/easing values,
candidate/rejection quotas and categorical keyboard/frequency bans were not
incorporated. Existing project tokens, confirmation semantics, accessibility and
reduced-motion rules remain authoritative; removing motion is a valid alternative.
Source searches locate candidates, while observed behavior and measurement
support defect or performance claims. No source recipe or rendered validation
is bundled or implied by this comparison.

## User behavior and decision-making

The maintainer's six-principle video summary supplied on 2026-10-27 prompted the
[user behavior section](references/behavioral-design.md#user-behavior-and-decision-making).
No video URL, title or creator was supplied; the video itself was not inspected.
The guidance is independently expressed, integrates with the existing behavioral
owner and retains that commercial reference's preserved source-available terms.

Research consulted for mechanism definitions and limits, not product lift forecasts:

| Principle | Research reference | Consultation scope |
| --- | --- | --- |
| Smart defaults | Jachimowicz, Duncan, Weber and Johnson (2019), [When and Why Defaults Influence Decisions](https://www.hbs.edu/faculty/Pages/item.aspx?num=56568) | Author-institution abstract of the meta-analysis; effects vary across contexts |
| Goal gradient | Kivetz, Urminsky and Zheng (2006), [The Goal-Gradient Hypothesis Resurrected](https://www.columbia.edu/~rk566/Session4/Goal-Gradient_Illusionary_Goal_Progress.pdf) | Author-hosted paper, including the abstract and bonus-stamp example; proximity and endowed progress are distinguished |
| Reciprocity | Regan (1971), [Effects of a favor and liking on compliance](https://www.sciencedirect.com/science/article/pii/0022103171900254) | Search-indexed publication record and partial abstract only; publisher access was blocked |
| IKEA effect | Norton, Mochon and Ariely (2012), [The IKEA Effect: When Labor Leads to Love](https://www.hbs.edu/faculty/Pages/item.aspx?num=41121) | Author-institution abstract; successful completion is a boundary, not a guarantee of retention |
| Loss aversion | Kahneman and Tversky (1979), [Prospect Theory: An Analysis of Decision under Risk](https://www.econometricsociety.org/publications/econometrica/1979/03/01/prospect-theory-analysis-decision-under-risk) | Publisher abstract of decision-making under risk, not a test of upgrade copy |
| Contrast | Simonson and Tversky (1992), [Choice in Context: Tradeoff Contrast and Extremeness Aversion](https://www.gsb.stanford.edu/faculty-research/publications/choice-context-tradeoff-contrast-extremeness-aversion) | Author-institution abstract about choice-set context, not proof that expensive-first ordering improves outcomes |

This is not a systematic review or a replication assessment. No study statistics,
video wording, artificial setup progress, obligation-based consent, manufactured
losses or universal pricing order are adopted as product requirements. User-benefit
and trust guardrails are application decisions, not claims tested by those papers.

## Companion and distribution

[Impeccable](https://github.com/pbakaus/impeccable) is an optional companion and
owns its own design/context workflow. Frontend Craft does not redistribute it,
invoke an assumed version-specific launcher, or require its installation.

[Skills CLI](https://github.com/vercel-labs/skills) supplies discovery and
installation. Its documented local/Git repository support is used directly;
there is no custom installation protocol in this package.
