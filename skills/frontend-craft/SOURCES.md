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

## Premium-web psychology

The maintainer's summary of a video described as "The Psychology of Premium
Websites," attributed to Sam Crawford, and an Apple screenshot prompted the halo,
cognitive-load/processing-fluency and peak-end additions in the existing
[behavioral owner](references/behavioral-design.md#user-behavior-and-decision-making).
No video URL was supplied; the video itself and its exact publication metadata
were not independently inspected.
The screenshot is illustrative context, not evidence of usability, product quality
or commercial outcomes. Neither source establishes a universal Apple-style
composition or a reason to replicate its assets.

Research consulted on 2026-10-28 supports mechanism definitions within the access
and study limits below. Interface applications, trust boundaries and proposed
checks are independently authored hypotheses, not UI findings or conversion-lift
claims from these sources.

| Mechanism | Research reference | Consultation scope |
| --- | --- | --- |
| Halo effect | Nisbett and Wilson (1977), [The halo effect: Evidence for unconscious alteration of judgments](https://deepblue.lib.umich.edu/items/da93fb79-74ef-4ff0-a1fe-da088de2dc42) | Search-indexed introduction from the university-hosted paper defines global evaluation influencing particular judgments; direct repository/page and PDF access returned HTTP 403, and APA access returned a challenge. The full study was not inspected; this is not evidence that visual polish establishes product quality or actual usability |
| Cognitive load | Sweller (1988), [Cognitive Load During Problem Solving: Effects on Learning](https://doi.org/10.1207/s15516709cog1202_4) | Publisher-deposited abstract inspected through [Crossref](https://api.crossref.org/works/10.1207/s15516709cog1202_4); Wiley and ScienceDirect access returned HTTP 403. The abstract concerns problem-solving demands, processing capacity and schema acquisition, not a test of sparse interfaces or onboarding steps |
| Processing fluency | Reber, Schwarz and Winkielman (2004), [Processing Fluency and Aesthetic Pleasure: Is Beauty in the Perceiver's Processing Experience?](https://pages.ucsd.edu/~pwinkiel/reber-schwarz-winkielman-beauty-PSPR-2004.pdf) | Author-hosted paper inspected through its definitions of perceptual/conceptual fluency, reviewed contrast/clarity evidence, and expectation/attribution qualifications. This theoretical review relates processing ease to aesthetic evaluation; it does not establish actual comprehension, task success or a universal visual formula |
| Peak-end rule and remembered experience | Kahneman, Fredrickson, Schreiber and Redelmeier (1993), [When More Pain Is Preferred to Less: Adding a Better End](https://doi.org/10.1111/j.1467-9280.1993.tb00589.x); Fredrickson and Kahneman (1993), [Duration neglect in retrospective evaluations of affective episodes](https://pubmed.ncbi.nlm.nih.gov/8355141/) | First paper's publisher-deposited abstract inspected through [Crossref](https://api.crossref.org/works/10.1111/j.1467-9280.1993.tb00589.x); direct SAGE access returned HTTP 403. Second paper's abstract inspected through PubMed/NCBI; a university-hosted PDF yielded no usable extracted text. These cover aversive cold-water episodes and pleasant/aversive film clips, respectively, not proof that micro-interactions are emotional peaks or that better UI endings increase conversion |
| Rapid visual impressions | Lindgaard, Fernandes, Dudek and Brown (2006), [Attention web designers: You have 50 milliseconds to make a good first impression!](https://www.makinggood.ac.nz/media/1265/lindegaardetal_2006_attention.pdf), DOI 10.1080/01449290500330448 | Empirical; original paper via academic mirror, methods/results inspected. Mean visual-appeal ratings were strongly related across brief exposure durations, with weaker individual agreement at the shortest exposure. Screenshot judgments do not establish comprehension, safety, buying intent or a universal decision deadline |
| Complexity and category familiarity | Tuch et al. (2012), [The role of visual complexity and prototypicality regarding first impression of websites](https://research.google.com/pubs/archive/38315.pdf), DOI 10.1016/j.ijhcs.2012.06.003 | Empirical; institution-hosted manuscript inspected. Perceived complexity and corporate-site prototypicality interacted in beauty ratings of passive screenshots. Layout/color effects were not isolated; this is not a whitespace formula or proof that familiar brands and unfamiliar workflows are equivalent |
| Website aesthetics versus performance | Thielsch, Haines and Flacke (2019), [Experimental investigation on the effects of website aesthetics on user performance in different virtual tasks](https://pmc.ncbi.nlm.nih.gov/articles/PMC6388663/), DOI 10.7717/peerj.6516 | Empirical; open-access article inspected. Perceived ratings improved without significant accuracy/time effects across the tested search, creative and transfer tasks. One medical-information setting and substantial attrition limit transfer; nonsignificance does not establish universal equivalence |
| A contrasting aesthetics/performance result | Sonderegger and Sauer (2010), [The influence of design aesthetics in usability testing: Effects on user performance and perceived usability](https://folia.unifr.ch/documents/302271/files/Sonderegger_Sauer2010.pdf), DOI 10.1016/j.apergo.2009.09.002 | Empirical; original manuscript inspected. Attractive simulated phones improved perceived usability and task measures in two tasks with adolescents. Limited task/population and possible familiarity/prototypicality confounds prevent a universal aesthetics or web-sales claim |
| Text whitespace | Chaparro et al. (2004), [Reading Online Text: A Comparison of Four White Space Layouts](https://portfolio.erau.edu/en/publications/reading-online-text-a-comparison-of-four-white-space-layouts/) | Empirical; institutional abstract only, original server unavailable. Margins affected reading measures and satisfaction; leading affected preference without a reading-performance effect. Text margins/leading do not establish a whole-page minimalism rule or numeric commercial lift |
| Task-specific motion benefit | Heer and Robertson (2007), [Animated Transitions in Statistical Data Graphics](https://idl.uw.edu/papers/animated-transitions), DOI 10.1109/TVCG.2007.70539 | Empirical; author-hosted full paper inspected. Animation helped graphical tracking, but value-change results varied and more elaborate staging was not always better. Masked chart tasks do not establish general button-feedback, repeated-work or conversion benefits |
| Motion preference/performance tradeoff | Robertson et al. (2008), [Effectiveness of Animation in Trend Visualization](https://pubmed.ncbi.nlm.nih.gov/18988980/), DOI 10.1109/TVCG.2008.125 | Empirical; PubMed abstract only. Animation was enjoyable and fast for presentation but error-prone; static alternatives were faster for analysis and small multiples more accurate. Trend interpretation is not a universal micro-interaction result |
| Interactive peak/end limits | Gutwin et al. (2016), [Peak-End Effects on Player Experience in Casual Games](https://www.cs.mcgill.ca/~jeromew/data/COMP766/CHI2016/p5608-gutwin.pdf), DOI 10.1145/2858036.2858419 | Empirical; original paper via university mirror, methods/results/limitations inspected. Sequencing affected remembered challenge consistently, while fun/interest/replay-preference effects appeared in only one of three games. Small studies, immediate ratings and stated preference do not establish observed retention |
| Complex experience and recall interval | Strijbosch et al. (2019), [From Experience to Memory: On the Robustness of the Peak-and-End-Rule for Complex, Heterogeneous Experiences](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.01705/full), DOI 10.3389/fpsyg.2019.01705 | Empirical; full text inspected. Peak valence best predicted immediate remembered valence; average valence best predicted approximately one-week evaluations, and end valence was not significant. One student VR-narrative study with retrospectively reconstructed affect, not causal proof about checkout or onboarding |

This bounded consultation is not a systematic review, replication assessment or
validation of a particular page. No study text, statistics, screenshot assets or
video wording are reproduced. The additions extend the existing commercial
behavioral reference under its preserved
[source-available terms](licenses/revenue-centric-design.txt); independently
expressing them does not relicense that owner. Existing technical guidance,
including linked content restraint, retains CC BY 4.0. The research references
and their own access/publication terms do not replace either package scope.

## Service recovery and operational quality

A maintainer-supplied video summary prompted the additions for blocked states,
undo, payment recovery, journey consistency and recovery evidence, plus the
conditional service-recovery discussion in the existing behavioral owner. No
video URL, title or creator was supplied for this summary; the video and its
Undertone and crypto-card examples were not independently inspected. Their
reported account, deposit or perception changes are not adopted as causal
evidence or product forecasts.

On 2026-10-28, the [University of Lisbon publication record and abstract](https://researchportal.ulisboa.pt/en/publications/service-recovery-paradox-a-meta-analysis/)
for de Matos, Henrique and Rossi (2007), *Service Recovery Paradox: A Meta-Analysis*,
DOI [10.1177/1094670507303012](https://doi.org/10.1177/1094670507303012), was
consulted. The abstract reports a positive aggregate effect on satisfaction,
nonsignificant aggregate effects on repurchase intentions, word-of-mouth and
corporate image, and variation with study characteristics. Nonsignificance is
not proof of zero effect. Publisher access returned HTTP 403; the full paper was
not inspected. This bounded consultation does not establish effects on trust,
deposits, conversion or retention for a particular interface.

Additional recovery studies were consulted on the same date:

| Source | Evidence and access | Finding and transfer limit |
| --- | --- | --- |
| McCollough, Berry and Yadav (2000), [An Empirical Investigation of Customer Satisfaction after Service Failure and Recovery](https://doi.org/10.1177/109467050032002) | Original abstract reproduced in OpenAlex inspected; publisher returned HTTP 403 and full text was not inspected | Two scenario experiments reported satisfaction below error-free service even with high recovery performance. A counterexample to guaranteed restoration, not a universal outcome or observed revenue result |
| Maxham and Netemeyer (2002), [A Longitudinal Study of Complaining Customers' Evaluations of Multiple Service Failures and Recovery Efforts](https://doi.org/10.1509/jmkg.66.4.57.18512) | Publisher-indexed abstract excerpts and [OpenAlex abstract metadata](https://api.openalex.org/works/W1970492996?select=title,doi,publication_year,abstract_inverted_index) inspected; full text inaccessible | Repeated-measures field research reported paradoxical increases after one failure but not two. Satisfaction, recommendation likelihood and repurchase intent are not transactions; absence of a paradox does not by itself establish below-baseline outcomes |
| Magnini et al. (2007), [The service recovery paradox: justifiable theory or smoldering myth?](https://digitalcommons.longwood.edu/business_facpubs/210/), DOI 10.1108/08876040710746561 | University-hosted abstract of role-play experiments inspected; full publisher text returned HTTP 403 | Paradoxical satisfaction was more likely under limited severity, no prior failure and particular perceived causes. Student participants and one setting do not justify deterministic thresholds or externalizing blame |

The operational instructions are independently authored application contracts,
not requirements tested by that meta-analysis. Linked technical owners retain
CC BY 4.0; additions to the existing checkout and behavioral commercial owners
retain their preserved source-available terms. No source wording, statistics,
video assets or executable recipes are bundled; existing mixed terms remain.

## Operational standards and usability heuristics

The following were consulted on 2026-10-28 as standards or expert guidance,
not empirical proof of premium appeal or commercial uplift:

| Source and type | Consulted contract and boundary |
| --- | --- |
| W3C [WCAG 2.2](https://www.w3.org/TR/WCAG22/), Recommendation and informative Understanding pages | Relevant error identification/suggestion, serious-submission protection, consistent identification/help, status and motion criteria inspected. 3.3.4 AA permits reversible, checked, or review/confirm/correct protection; it does not universally require undo or dialogs. 2.3.3 is AAA and differs from 2.2.2 A. Apply the adopted target and applicable exceptions; Understanding text is informative |
| WAI APG [Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) and [Modal Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), implementation guidance | Patterns inspected for focus, announcements and consequential actions. APG recommendations are not themselves WCAG success criteria, nor a requirement to put confirmation on every save |
| [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html), [RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html) and [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html), HTTP standards | Relevant retry, accepted-status, Retry-After/429 and problem-detail/privacy sections inspected. Acceptance and elapsed waiting do not establish business completion or quota renewal; occurrence IDs and diagnostic URLs are not automatically safe to share |
| Nielsen (1994, reviewed 2024), [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/), original-author expert heuristics | Visible status, user control, prevention/recovery and consistent meanings support inspection questions, not controlled causal claims, fixed UI recipes or conversion forecasts |
| PCI Security Standards Council [FAQ 1319](https://www.pcisecuritystandards.org/faqs/1319/), official interpretive guidance | CVV collection is tied to authorization when necessary; retention after authorization is prohibited, even encrypted. This is not a blanket claim about all payment fields. Support payloads and permitted UI drafts still follow the actual security/privacy contract |

## Instruction and reference-loading evidence

Research and official format/host documentation were consulted on 2026-10-28:

| Source and type | Inspected scope, finding and boundary |
| --- | --- |
| Liu et al. (2024), [Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/), DOI 10.1162/tacl_a_00638, peer-reviewed empirical research | Full text inspected. Position affected retrieval/QA in tested older models, with different behavior by model/task. It does not establish a universal instruction-length/placement rule or modern coding-agent compliance |
| Gloaguen et al. (2026), [Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://arxiv.org/html/2602.11988v3), empirical preprint revised 2026-09-29 | Full text inspected. Tested context files did not generally improve task success and increased work/cost; generated/developer files and documentation availability differed. No clear length-outcome dependency was established. Benchmarks of Python issue resolution do not prove effects on this skill, frontend quality or every host/model |
| [Agent Skills specification](https://agentskills.io/specification.md), format/design contract | Metadata, activated instructions and on-demand resources inspected. Progressive disclosure is a packaging recommendation, not proof that a host selects or follows the correct references |
| Anthropic [Create custom subagents](https://code.claude.com/docs/en/sub-agents.md#what-loads-at-startup), vendor contract | Startup/inheritance sections inspected. Worker context depends on actual host/mode; this supports checking inheritance and supplying missing sources, not assuming universal isolation or inheritance |

These sources motivate testing task-relevant instructions rather than assuming
more prose helps. Conditional routes, freshness checks and source handoffs are
independently authored safeguards, not measured reliability gains. Explicit skill
invocation, automatic host activation and delegated execution require separate
evidence; this package does not install a new loader or enforce file reads.

## Companion and distribution

[Impeccable](https://github.com/pbakaus/impeccable) is an optional companion and
owns its own design/context workflow. Frontend Craft does not redistribute it,
invoke an assumed version-specific launcher, or require its installation.

[Skills CLI](https://github.com/vercel-labs/skills) supplies discovery and
installation. Its documented local/Git repository support is used directly;
there is no custom installation protocol in this package.
