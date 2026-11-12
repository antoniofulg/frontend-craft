# Frontend Craft and Video Craft

This repository ships two independent agent skills. They install separately and
cooperate when both are present.

| Skill | Version | Purpose | Release tag |
| --- | --- | --- | --- |
| [`frontend-craft`](skills/frontend-craft/SKILL.md) | **0.26.0** | Product strategy, sales and growth, and the interfaces that support them | `vX.Y.Z` (for example `v0.26.0`) |
| [`video-craft`](skills/video-craft/SKILL.md) | **0.1.0** | Social videos, landing-page loops, product demos, captions, storyboards and prospecting clips | `video-craft-vX.Y.Z` (for example `video-craft-v0.1.0`) |

See the [release notes](CHANGELOG.md); each entry is headed by the skill name and
its version. Tags are per skill: `frontend-craft` keeps the plain `vX.Y.Z` tags it
has always used, and `video-craft` uses the `video-craft-` prefix.

## Frontend Craft

Improve product strategy, sales and profitable growth, and build or review the
interfaces that support them. Frontend Craft helps choose audiences, shape offers,
validate demand, prioritize features, acquire customers, improve the sales process,
price sustainably, activate users and retain or expand accounts.

Strategy can stand alone with a product description, customer evidence and business
metrics; no UI change or repository is required. When the chosen intervention
involves an interface, the skill reuses the product's components and verifies the
implementation alongside Impeccable or an existing project design system.

For interface work, it addresses two recurring failures: replacing a domain
interaction with a generic control, and inventing a new header, subtitle, or
typography treatment for another page in the same dashboard. It checks actual
usages and rendered behavior, not just whether the same component was imported.

For commercial work, the outcome guides what should change and why: the offer,
channel, sales motion, price, roadmap, service or interface. Implementation
precedents guide interface work. Commercial recommendations remain hypotheses
until measured.

For public-page creation and redesign, the skill connects visual identity to
the subject's own material, compares compositions when direction is open, selects
traceable imagery and considers useful product demonstrations. Rendered critique
checks the result through the existing browser/Impeccable pass. Approved brand
direction and operational UI conventions remain authoritative within their scope.

## Install

From your consuming project's directory, install through the
[skills CLI](https://github.com/vercel-labs/skills). Install either skill or both:

```bash
npx skills add antoniofulg/frontend-craft
```

Choose the skills and agents interactively, or name them. For Codex and Claude Code:

```bash
npx skills add antoniofulg/frontend-craft --skill frontend-craft --agent codex claude-code
npx skills add antoniofulg/frontend-craft --skill video-craft --agent codex claude-code
```

For a local development checkout, replace `antoniofulg/frontend-craft` with its
directory, such as `~/Projects/frontend-craft`. Each skill uses the standard
`skills/<name>/SKILL.md` layout and installs as an independent folder. No npm
publication or custom installer is required.
Impeccable, UI/UX Pro Max and transitions-dev are optional companions of Frontend
Craft; FFmpeg, Whisper and HyperFrames are optional tools of Video Craft. None is
bundled or installed automatically.

To update only one skill in each consuming project for Codex and Claude Code,
run its explicit install command again, for example:

```bash
npx skills@latest add antoniofulg/frontend-craft --skill frontend-craft --agent codex claude-code --yes
npx skills@latest add antoniofulg/frontend-craft --skill video-craft --agent codex claude-code --yes
```

Retain `--copy` if that project uses independent copies instead of symlinks.

## Use

Examples use Codex syntax; other hosts may expose a slash command, a skill picker,
or natural-language invocation.

```text
$frontend-craft Help me sell more. Diagnose the constraint from our product, audience, offer, sales and retention evidence; give me concrete next actions.
$frontend-craft Audit the full product strategy across all twelve Revenue-Centric Design themes, including acquisition, economics and AI-era differentiation.
$frontend-craft Shape an offer for this segment and draft its positioning, proof and next buying commitment.
$frontend-craft Review our demo-to-proposal pipeline. Draft objection responses and a buyer-specific demo outline.
$frontend-craft Compare our acquisition channels and propose a bounded test with cost assumptions and a continue/stop rule.
$frontend-craft Assess our pricing, free-user costs and contribution; propose sustainable packages and a validation plan.
$frontend-craft Map the dashboard's page families and assignment workflows.
$frontend-craft Build the projects list using the existing dashboard patterns.
$frontend-craft Review our design system for agent usability. Prioritize gaps in semantic roles, component selection, states, documentation and adoption; keep the review read-only.
$frontend-craft Propose a design system for these workspace screens using our approved identity and installed stack. Define needed foundations, component/block contracts and owner documentation; do not implement yet.
$frontend-craft Audit shared components and styles across the application. Report duplicated patterns, competing owners and coverage; keep the audit read-only.
$frontend-craft Audit and consolidate duplicated components and style recipes across the application. Migrate matching consumers to shared owners, preserve explicit variants and report remaining gaps.
$frontend-craft Remove the standard card border and update its radius across the application through its shared owner. Preserve form controls and explicit variants, find bypasses and verify propagation.
$frontend-craft Implement this feature using established shared components, tokens and style recipes. Extend their supported variants when needed and verify affected consumers.
$frontend-craft Break the members table with worst-case data: one-letter and emoji names, a plus-addressed email, 1,000,000 items, every status at once. Report what broke, why, and the truncation decisions I need to make.
$frontend-craft Build three working variants of the notification settings panel that differ in layout and interaction model, one at a time at full size, with a when-it-wins table.
$frontend-craft Review the task editor for reuse and consistency with sibling pages.
$frontend-craft Repair this generated-looking screen using our existing brand and shared owners. Preserve content and behavior; inspect before/after layouts and exercise the changed interactions.
$frontend-craft Check the owner picker with long names, no results, and save failures.
$frontend-craft Match these skeletons to the actual loaded components. Keep known labels and controls visible; verify pending and ready geometry.
$frontend-craft Audit public-page SEO and discovery: initial HTML, canonical URLs, publication states and HTTP policies. Separate local proof from deployment and search acceptance.
$frontend-craft Review this landing page for conversion. Prioritize concrete improvements by commercial impact, evidence and effort.
$frontend-craft Create a landing-page concept from our product's actual output and assets. Compare suitable compositions within the approved brand.
$frontend-craft Select and prepare imagery for this page. Verify representation, source terms, credits and mobile crops.
$frontend-craft Assess whether an interactive demonstration would explain this offer better than a static example.
$frontend-craft Review onboarding from signup to the first useful result.
$frontend-craft Assess this pricing page, trial and upgrade path against paid conversion and retained revenue.
$frontend-craft Review cancellation reasons and propose changes that support continued value.
$frontend-craft Make this dashboard help account managers decide what to do next.
$frontend-craft Assess feature adoption and identify what to simplify for our target customers.
$frontend-craft Compare self-serve and demo-led entry paths using our audience and acquisition economics.
$frontend-craft Choose a chart for this dataset and provide accessible value lookup.
```

Mapping creates or extends the project's frontend map, normally in its existing
documentation directory. Ordinary changes discover only the relevant precedents;
they do not require a complete repository inventory first. A map points to real
owners, usages and evidence, and distinguishes adopted patterns from observations,
variants and unresolved conflicts.

For example, the map can connect “assign a task owner” to the existing searchable
member picker and its state owner, while connecting “dashboard list header” to
the shared heading composition and its policy for descriptions. Component names
and paths come from the consuming project, not from a fixed starter template.

The [shared UI patterns guide](skills/frontend-craft/references/shared-ui-patterns.md)
covers application-wide audits, authorized consolidation and reuse in future work.
Audits remain read-only; a request to audit and consolidate authorizes migration
within the requested scope. Its [style coverage](skills/frontend-craft/references/shared-ui-patterns.md#style-coverage)
includes foundations, layout, controls/forms, navigation, surfaces/content,
feedback, overlays/layering, icons/data visuals and motion. Reports account for
coverage per family, including inspected, sampled and uninspected areas and
families that do not apply.

Reusable values belong in tokens, structure and behavior in components, and
recurring appearance in components or semantic style recipes. Reuse existing
owners before adding another layer; use explicit variants for intentional
differences. [Shared style changes](skills/frontend-craft/references/shared-ui-patterns.md#change-a-shared-style)
update the appropriate owner and its intended consumers, verify propagation and
preserve unrelated families. Reports identify migrated consumers, remaining
duplicates and overrides that could block propagation. Future work consumes
these owners within the relevant application, family or domain scope.

The [design-system workflow](skills/frontend-craft/references/design-systems.md)
adds explicit review and creation/evolution branches within the same skill.
Reviews assess whether an agent can select real supported components and roles,
and prioritize improvements without editing files. Creation/evolution grounds
foundations, semantic roles and reusable compositions in concrete product tasks,
then documents selection rules, reasons and real examples. Proposals remain
proposals; authorized implementation includes adoption and verification.
Existing visual direction stays authoritative. Ordinary UI work consumes the
system instead of generating another one.

## Pair with Impeccable

Frontend Craft defines the commercial objective and proposed journey changes for
growth work. Impeccable supplies visual direction and maintains its own product,
design and surface context. Frontend Craft then finds implementation precedents,
preserves domain behavior, and checks consistency and interaction quality.

For an explicit joint request:

```text
Use Impeccable with frontend-craft to build this page. Find the matching page
family and existing implementations of its user actions before editing.
```

For recurring work, add this instruction to the consuming project's existing
agent guidance when appropriate:

> For frontend creation, changes, and reviews, use frontend-craft to identify
> and verify applicable page-family and domain-component precedents. For commercial
> strategy, sales and growth work, use frontend-craft to diagnose the business
> constraint and propose concrete offer, acquisition, sales, pricing or product
> actions. Interface implementation is conditional on the chosen intervention.
> When using
> Impeccable, keep its design direction and context files authoritative for the
> approved visual scope, and apply frontend-craft's reuse and consistency checks.

Installation alone does not guarantee automatic co-invocation. The skill does not
edit agent instructions or Impeccable's files as an installation side effect.
An explicit redesign follows the approved new direction rather than freezing an
old appearance. Existing behavior and compatible components still inform the work.

## Consult UI/UX Pro Max selectively

Use Frontend Craft to establish existing owners and contracts, Impeccable for
visual direction, and UI/UX Pro Max when a specific design question remains open.
A new chart can justify a chart-domain lookup; another page in an established
dashboard does not justify regenerating its fonts, palette or design system.

UI/UX Pro Max recommendations are options, not overrides of the project's adopted
contracts. Load the relevant domain only, and retain Impeccable's existing context
as the visual source of truth. Without either companion, Frontend Craft remains
usable with the project's contracts and its bundled references.

## What loads when

Review routing combines the named surfaces with every requested lens; the generic
review guide is not a substitute for the relevant journey guidance. The
[review preflight](skills/frontend-craft/references/review.md#apply-only-relevant-lenses)
owns those combinations. Landing-page and onboarding reviews use their respective
surface owners, even without analytics or a known abandonment problem. A combined
visual and commercial review applies both lenses to both named surfaces and
recovers relevant project guidance, including an existing onboarding philosophy.
Delegated reviewers receive that same context; spawning agents does not establish
coverage. Narrow copy, control and motion repairs remain scoped.

Whole-screen repair uses the [agentic repair workflow](skills/frontend-craft/references/review.md#repair-a-generated-looking-screen):
observe a comparable before state, measure relevant rhythm/shape, recover a short
product-specific brief, repair by user consequence, preserve contracts and verify
the result through the existing browser/Impeccable loop. It adds no design
checker, hooks, generator, issue-count targets or separate skill installation.
Review-only requests remain read-only; narrow edits do not start a screen redesign.

For questions such as “what is the effect called when these items enter one
after another?”, the optional [motion vocabulary](skills/frontend-craft/references/motion-vocabulary.md)
provides reverse lookup and distinctions between close terms. Naming alone does
not start implementation; the existing motion guide owns behavior and accessibility.

The same guide's [opportunity discovery](skills/frontend-craft/references/motion.md#find-animation-opportunities)
finds unanimated interactions that could benefit from motion and records where
static behavior is preferable. It produces scoped proposals, not automatic edits.

GTM operations are bundled, without requiring separate GTM skills. The
[measurement guide](skills/frontend-craft/references/gtm-measurement.md) covers
revenue/pipeline definitions, data reconciliation, attribution, qualification,
AI/usage economics and commercial reviews. The
[automation guide](skills/frontend-craft/references/gtm-automation.md) covers
platform selection, enrichment, routing, agents, reliable integrations, monitoring,
costs and internal tools. Read them for those tasks; ordinary frontend work keeps
its existing focused routes. Platform/API details are verified against current
official documentation when needed, rather than frozen into vendor tables.

Reaching buyers is covered by the [outbound guide](skills/frontend-craft/references/outbound.md):
a prospect list built from the ICP with account fit, persona and buying trigger kept
separate, signals and tiers, a first-customer method that starts from public demand
signals, a five-part reason to reach out whose claims are all verifiable, cold email
plays, cadence, stop rules and reply handling, LinkedIn outreach with its automation
risk, deliverability, a compliance checklist (not legal advice), consent-first social
selling, measures by segment and play, and when an outreach video belongs, which it
hands to `video-craft`. [Growth and sales](skills/frontend-craft/references/growth-sales.md)
adds a [buyer business case](skills/frontend-craft/references/growth-sales.md#build-a-buyer-business-case)
with every number labeled, a [deal-risk review](skills/frontend-craft/references/growth-sales.md#review-a-deal-for-risk)
graded by severity and confidence, and a [win-loss method](skills/frontend-craft/references/growth-sales.md#learn-from-won-lost-and-no-decision-outcomes).
Outbound work drafts messages; it never sends them.

```text
$frontend-craft Build a prospect list from our ICP for mid-size logistics firms. Show account fit, persona and trigger separately, tier it, and cite a source and date for each contact.
$frontend-craft We have no customers yet. Find people showing the pain in public, with evidence for each, and draft a seven-day manual outreach plan.
$frontend-craft Plan a cold email play for this segment with cadence, stop rules and reply handling, and list the deliverability and compliance items to check first.
$frontend-craft Build a business case for this deal from the numbers the buyer gave us. Label every figure and lead with the conservative scenario.
$frontend-craft Review these call notes for deal risk. Quote the evidence for each flag and ask one question per gap.
$frontend-craft Code our last 20 closed deals by reason, plan the loss interviews and turn the findings into offer and positioning changes.
```

```text
$frontend-craft Reconcile our CRM and billing scorecard. Define pipeline, payback and attribution rules, then identify decisions we can support with this data.
$frontend-craft Design our lead enrichment and sales handoff workflow. Include qualification, ownership, failure recovery, costs and a safe verification plan.
$frontend-craft Implement the approved CRM workflow using our existing stack. Verify duplicate events, uncertain sends, opt-outs and owner changes before rollout.
```

The [skill entrypoint](skills/frontend-craft/SKILL.md) routes to focused references:
mapping; design systems; reuse and consistency; shared UI patterns; components; interaction and accessibility; motion;
commercial strategy; growth and sales; outbound and prospecting; commercial visuals; landing pages; imagery;
GTM measurement and automation;
checkout; activation; monetization; retention; behavioral design; dashboards; product strategy;
positioning and distribution; experimentation; performance and loading states; technical SEO and discovery; visual details
(including dark themes); AI and agent interfaces; charts; and reviews. Typical work reads
the core and the relevant references, not a catalog of every rule. The core remains
stack-neutral; React recipes and the shared UI patterns guide's Tailwind v4 guidance
apply only to matching projects. Consult current documentation for framework and
Tailwind APIs needed by the implementation.

The [user behavior and decision-making section](skills/frontend-craft/references/behavioral-design.md#user-behavior-and-decision-making)
covers smart defaults, goal gradient, reciprocity, the IKEA effect, loss aversion,
contrast, halo effects, cognitive load and processing fluency, peak-end judgments
and service recovery. Each principle includes a contextual application, a trust boundary
and validation criteria. Load it for those decisions, not every frontend change.
Perceived polish is not evidence of product quality; progress, pricing and access
consequences must reflect the actual product.

Operational quality includes actionable [limit and unavailable-state feedback](skills/frontend-craft/references/interaction-accessibility.md#limits-and-unavailable-states),
authoritative [undo](skills/frontend-craft/references/components.md#undo-and-reversibility)
and outcome-aware [payment recovery](skills/frontend-craft/references/checkout.md#recover-the-payment-outcome).
Scoped reviews check journey handoffs, returns and actual recovery effects, not
only error-screen appearance. Service-recovery claims remain contextual
hypotheses, not promises that failure increases trust or revenue.

Research-backed checks separate visual appeal, perceived ease, task performance,
remembered experience and commercial outcomes rather than treating them as one
quality score. [Sources](skills/frontend-craft/SOURCES.md#premium-web-psychology)
record empirical findings, standards, heuristics and preprints with their access
and transfer limits. More instruction text is not assumed to improve agent work;
selected routes and freshness must still be exercised.

The expanded references cover forced colors and announcement priorities, disabled
control semantics, state/action composition and refs, interaction-specific motion,
commercial claims and messaging alternatives, font/bidi/color details, and chart
selection with accessible alternatives. Suggested timing and visual values yield
to the actual project tokens and requirements.

Public redesigns also check URL/anchor, metadata/SEO, analytics, form and legal
contracts. Onboarding and authentication guidance distinguishes WCAG requirements
from ergonomic recommendations. A separate performance reference covers field
versus local evidence, trace-based diagnosis and comparable before/after runs.
Its optional [audit procedure](skills/frontend-craft/references/performance-audits.md)
covers capability discovery, trace insights, request delivery and production bundles.
Its [loading-state guidance](skills/frontend-craft/references/performance.md#skeletons-and-loading-states)
connects value masks to real component composition, accessibility and browser geometry.
The [technical SEO reference](skills/frontend-craft/references/technical-seo.md)
owns public-route discovery, initial HTML, response policies and truthful metadata;
publication and access control remain with their existing project owners.

The existing component owner also covers overlapping requests, uncertain save
outcomes, optimistic recovery, and collection query/selection scope. Interaction
guidance covers native tables versus grids, history and draft restoration, and
locale-sensitive amounts, messages and dates. Large-collection optimization stays
with performance. These sections reuse project contracts and apply only to the
affected behavior; they add no required library, offline queue or broad audit.

Interface wording routes to Impeccable's `clarify` when available. Motion work
can consult an installed `transitions-dev` for a selected recipe; Frontend Craft
keeps direction, component ownership, accessibility and verification in scope.
The catalog is optional and is not redistributed here. Gesture guidance covers
pointer capture, contact/velocity continuity and cancellation; motion audits also
record where the interface should remain static.

Reviews report evidence and limitations; fixes require a request to implement them.
Source-only inspection is not a claim that visual or keyboard behavior passed.
No background scanner, runtime dependency, or project-wide refactor is installed.

Public-page identity work uses verified subject details and a competitor-specificity
check; it does not reopen direction for a narrow repair. The
[imagery reference](skills/frontend-craft/references/imagery.md) covers existing,
found and generated material, product captures, provenance/credits, responsive
crops, footage and failure states. Composition alternatives use available material
and actual content rather than invented proof. Interactive demonstrations are
optional and must use honest data, relevant product behavior and accessible
fallbacks. No image, motion or aesthetic quota applies.

The [rendered critique](skills/frontend-craft/references/review.md#critique-the-rendered-composition)
connects screenshots to located defects and concrete corrections. It reuses the
existing inspection loop, checks the relevant viewports and scroll positions,
and distinguishes functional/contract failures from preferences. It does not
convert a screenshot judgment into a measured sales result.
When a design came with the request, the
[binding-design comparison](skills/frontend-craft/references/review.md#compare-a-render-with-a-binding-design)
adds a separate fidelity judgement: pictures at the design's size, a judge
without the code and an inventory marked `same` or `differs`.

The [AI and agent interfaces reference](skills/frontend-craft/references/ai-interfaces.md)
covers expectations, correction, every streaming and failure state, sources,
honest uncertainty, memory and off controls and accessible streamed output. The
[dark theme section](skills/frontend-craft/references/visual-details.md#design-a-dark-theme)
covers per-theme semantic roles, elevation, accents, assets, contrast and
flash-free theme choice. Both route to existing owners instead of duplicating them.

Two optional Node helpers (no dependencies, read-only) ship in
[`skills/frontend-craft/scripts/`](skills/frontend-craft/scripts):
`check-contrast.mjs` reports the WCAG 2.2 ratio and APCA Lc for hex, `rgb()` and
`oklch()` pairs, and `detect-token-drift.mjs` lists raw color literals outside
token files. They are referenced from the dark-theme, accessibility and shared UI
patterns guidance as aids, never gates; a project's own lint wins. Check them with
`node --test scripts/test_skill_scripts.mjs`.

## Commercial reviews

The [commercial visuals reference](skills/frontend-craft/references/commercial-visuals.md)
turns the sales objective into hierarchy, relative contrast, whitespace, CTA
placement, proof imagery, comparable pricing cards, visible onboarding progress
and meaningful success feedback. It includes mobile inspection and contextual
visual experiments, such as promotional price typography, with comprehension
and accessibility checks. Impeccable is optional; existing brand tokens and
approved direction still guide the visual expression.

Opening-view guidance prioritizes one dominant message, supporting context, a
clear next action and a relevant product or outcome presentation. Explanation
depends on audience familiarity, not an Apple-style layout formula. Content
restraint considers total task effort, not just visible element count; useful
feedback and clear journey endings need not be animated.

A landing-page review examines audience and decision stage, promise and proof,
objections, offer, CTA and the requested path to a useful commercial action.
The report locates each problem, explains its possible commercial consequence,
proposes a concrete change, ranks priority and effort, and states how to validate
it. Observed defects and conversion hypotheses are labeled separately.

Without analytics, the agent can still identify clarity and usability issues and
propose research or experiments. With comparable funnel data, it can better
prioritize opportunities. A screenshot does not establish working forms, and
passing interface checks does not establish increased sales.

The commercial references cover behavioral choices such as defaults, progress,
anchoring and gain/loss framing as contextual options. They do not prescribe a
fixed landing-page formula or plan count. Narrow interface repairs and mapping
tasks retain their original scope without a mandatory commercial workshop.

## Commercial coverage and selective loading

Strategy and sales are first-class uses in 0.6.0. The
[growth and sales guide](skills/frontend-craft/references/growth-sales.md) connects
all twelve source themes to business decisions and supplies offer, discovery,
demo, objection, proposal and sales-pipeline guidance. A full strategic audit
assesses every theme; a focused request loads only the relevant specialties.
The result can be a commercial decision and usable sales material without any
component work, browser check or redesign.

The expanded guidance connects twelve source themes to focused task references:

| Task | Reference |
| --- | --- |
| Establish product context, commercial objective and stage | [Commercial strategy](skills/frontend-craft/references/commercial-strategy.md) |
| Diagnose stalled growth, shape offers and improve sales | [Growth and sales](skills/frontend-craft/references/growth-sales.md) |
| Review persuasion, proof and the visitor's decision | [Landing pages](skills/frontend-craft/references/landing-pages.md) |
| Compose hierarchy, images, pricing emphasis and success feedback | [Commercial visuals](skills/frontend-craft/references/commercial-visuals.md) |
| Improve completion, perceived effort, trust and qualification | [Checkout and forms](skills/frontend-craft/references/checkout.md) |
| Choose onboarding patterns and reach first value | [Activation](skills/frontend-craft/references/activation.md) |
| Compare offers, trials, price economics and expansion | [Monetization](skills/frontend-craft/references/monetization.md) |
| Diagnose departures and support repeated useful use | [Retention](skills/frontend-craft/references/retention.md) |
| Choose contextual behavioral mechanisms | [Behavioral design](skills/frontend-craft/references/behavioral-design.md) |
| Turn relevant dashboard data into decisions | [Dashboards](skills/frontend-craft/references/dashboards.md) |
| Prioritize features, adoption and differentiation | [Product strategy](skills/frontend-craft/references/product-strategy.md) |
| Assess audience, sales motion, channels and referrals | [Positioning and distribution](skills/frontend-craft/references/positioning-distribution.md) |
| Evaluate commercial evidence and experiments | [Experimentation](skills/frontend-craft/references/experimentation.md) |

The entrypoint routes by task; links do not require recursive loading of the
whole catalog. Product context is recovered from applicable project instructions,
briefs, actual behavior and available research. A focused page review uses the
relevant journey and visual guidance; market sizing or roadmap work loads only
when that decision is requested or needed. Mapping and narrow technical repairs
continue to use their existing implementation references.

## Video Craft

Plan, edit and prepare video for a named destination: Instagram Reels, TikTok and
YouTube Shorts, landing-page background and hero loops, product demos and
prospecting clips. The agent works from the user's own footage and message, with
local FFmpeg, Whisper and (for motion graphics) HyperFrames. It produces files and
draft text; it never logs in, uploads or posts, installs nothing without a yes,
and runs HyperFrames with telemetry off.

A full job follows nine phases, each with an approval gate before the next:
preflight, brief, style guide, ingest and transcribe, storyboard, rough cut,
motion and captions, audio, then render and QA. A small request, such as one
caption fix, loads only the reference it needs. The
[skill entrypoint](skills/video-craft/SKILL.md) holds the workflow and routing;
the references are workspace, style guide, storyboard, editing, captions, audio,
motion, social, web, demo, hooks and scripts, social channel, rights and
disclosure, and a publish checklist.

```text
$video-craft Turn this raw talking-head recording into a 30-second Reel with burned-in captions. Propose any installs first and show a preview before the final render.
$video-craft Study these three Reels for rhythm, framing and captions, and write a style guide for our channel. Do not download them without asking.
$video-craft Make a 10-second background loop for our landing page, with an AV1 and H.264 ladder, a poster and a delivery manifest for the page owner.
$video-craft Write ten hook options for a prospecting video to B2B finance teams, each with its visual, spoken line and caption, from this offer brief.
$video-craft Fix the misspelled product name in these captions and re-burn them inside the safe band.
```

Video Craft produces the files. When Frontend Craft is also installed, it decides
whether a page needs video and owns the markup, loading and controls. The shared
[offer brief](skills/video-craft/references/offer-brief.md) and
[copywriting guide](skills/video-craft/references/copywriting.md) are the common
contract for audience, offer and claims; neither skill needs the other to work.

## Development and validation

```bash
python3 scripts/validate_package.py
npx skills add . --list
```

The package validator checks every `skills/*/` directory for metadata shape, local
links, reference reachability, required distribution files and whether the
installed skill is self-contained. It also checks that shared copies are current
(see below). The skills CLI independently checks discovery. To exercise installation without altering a real project:

```bash
skill_source="$PWD"
install_probe="$(mktemp -d)"
cd "$install_probe"
npx skills add "$skill_source" --skill frontend-craft --agent codex claude-code --copy --yes
```

Repeat with `--skill video-craft` to probe the second skill. Inspect the installed
skill and references, then remove only that temporary directory.

### Shared references

Guidance that more than one skill needs lives once in [`shared/`](shared) at the
repository root, which is the source of truth and is not distributed. Skills
install as independent folders, so `scripts/sync_shared.py` copies each
`shared/*.md` file into `skills/<skill>/references/` for every consuming skill
listed in `shared/manifest.json` (file name to skill names). Each copy begins
with a comment saying it is generated. To change shared guidance, edit the file in
`shared/` and run:

```bash
python3 scripts/sync_shared.py
python3 -I scripts/validate_package.py
```

Never edit a generated copy. The validator fails with
`run python3 scripts/sync_shared.py` when a copy differs from its source plus the
generated header, and it rejects a shared file that links to anything except
another shared file or an external URL, so every copy stays valid in any skill. To
add a consumer, add the skill to the manifest and re-run the sync. Both skills
consume [`copywriting.md`](skills/frontend-craft/references/copywriting.md) and
[`offer-brief.md`](skills/frontend-craft/references/offer-brief.md). Behavioral evaluation tasks and their distinct failure criteria live in
[evals/scenarios.md](evals/scenarios.md). Static checks and successful installation
do not prove better agent decisions; report behavioral evidence separately.

The [review-routing and recovery evaluation](evals/review-routing-validation.md)
records fresh-context landing/onboarding/recovery probes and their actual
reference reads, separately from package checks and supplied-context probes.

The [design-system workflow record](evals/design-system-validation.md) records
fresh-context review, creation-proposal and narrow-label probes, including actual
reference reads and the distinction between file-level routing and section-only
loading. These source-only probes do not establish rendered system quality.

The [agentic repair record](evals/agentic-repair-validation.md) covers a rendered
whole-screen repair and a narrow-label boundary probe, including preserved
interactions and source/tool limitations. No design checker was integrated.

For 0.5.0, see the [upstream coverage map](evals/upstream-coverage.md) and
[independent verification record](evals/verification-0.5.0.md). These are
maintainer artifacts and are not loaded by the installed skill.
They describe the 0.5.0 evaluation; the 0.6.0 strategy and sales changes have
package and authoring checks, without new behavioral or commercial results.

The [0.7.0 verification record](evals/verification-0.7.0.md) covers the Taste v2
source comparison, independent authoring rechecks, four fresh-context task probes
(including actual synthetic-page screenshots), package checks and intentional
remaining differences. These are bounded examples of decision behavior, not a
comparative benchmark or evidence of commercial improvement.

The [0.8.0 verification record](evals/verification-0.8.0.md) covers shared UI
ownership, application-wide audit and consolidation, and reuse during later
feature work. It records package checks and isolated workflow probes, including
shared-border propagation, with their inspection limits.

The [0.8.1 verification record](evals/verification-0.8.1.md) covers the nine-family
style matrix, state/theme accounting and scoped style updates. It records a broad
source audit and an isolated typography update that preserved unrelated roles;
these probes do not establish rendered appearance or universal agent reliability.

The [interaction resilience and localization record](evals/resilience-validation.md)
covers the current four-area expansion, official-source research, independent
authoring review, two source-only task probes and package/installation checks.
It separates those results from pending browser and service verification.

The [0.9.0 verification record](evals/verification-0.9.0.md) adds isolated browser
exercises for async recovery, navigation, tables and localized submissions, with
retained baseline/results and mobile/desktop screenshots. It records the
conditional-field correction and distinguishes simulated restoration from
native bfcache acceptance. Consumer-project and field/search outcomes remain
outside those checks.

The [0.10.0 verification record](evals/verification-0.10.0.md) covers the GTM
replacement map, 91-term motion vocabulary, performance audits, content restraint
and marketing-copy additions. It records package, discovery, installation and
calculation checks separately from unrun agent scenarios and live integrations.

The [0.11.0 verification record](evals/verification-0.11.0.md) covers the six
user-behavior principles, package/discovery checks, isolated installations and
three supplied-context model probes. It distinguishes those decisions from
autonomous reference routing, live usability and commercial outcome evidence.

The [0.12.0 verification record](evals/verification-0.12.0.md) covers cumulative
surface/lens routing, evidence-bounded design psychology, operational recovery
and the broader research additions. It separates authoring and model-probe
evidence from release package checks and unmeasured live/commercial outcomes.

The [0.13.0 verification record](evals/verification-0.13.0.md) covers the
generated-interface and marketing defaults, region classification and measurement
validity. It records package checks only; no agent scenarios or rendered pages
were exercised for this release.

The [0.14.0 verification record](evals/verification-0.14.0.md) covers the
subscription-paywall additions to monetization and the activation route. It
records package checks only; no agent scenarios or rendered paywalls were
exercised for this release.

The [0.15.0 verification record](evals/verification-0.15.0.md) covers the
design-system and agentic screen-repair release, isolated Codex/Claude Code copy
installation and the retained source-only/browser evidence with its limits.

The [0.16.0 verification record](evals/verification-0.16.0.md) covers the
choice-surface additions to components, routing and review. It records package and
installation checks only; the new scenarios were not exercised for this release.

The [0.17.0 verification record](evals/verification-0.17.0.md) covers the build
checklist and its rules for reveals, shortcuts, controls, domain modeling, time
ranges, summaries and redesign parity, with four independent review rounds.

The [0.18.0 verification record](evals/verification-0.18.0.md) covers motion
choreography, dropped-frame diagnosis, motion removal, gesture phases and mobile
web fixes.

The [0.18.1 verification record](evals/verification-0.18.1.md) covers the rule that
rendered screenshots are review evidence, not automated tests or gate steps.

The [0.19.0 verification record](evals/verification-0.19.0.md) covers worst-case
data stress, failure signatures, truncation, motion craft heuristics, translucent
surfaces and variant comparison. It records package and installation checks only;
the new scenarios were not exercised for this release.

The [0.20.0 verification record](evals/verification-0.20.0.md) covers comparing a
render with a binding design: size-faithful captures, a judge without the code,
the same/differs inventory and the two-round limit. It records package and
installation checks only; the new scenarios were not exercised for this release.

The [0.21.0 verification record](evals/verification-0.21.0.md) covers prototyping
with production components, the visual-language-only reach of a binding design and
the transcription baseline for redesigns. It records package and installation
checks only; the new scenarios were not exercised for this release.

The [0.22.0 verification record](evals/verification-0.22.0.md) covers the AI and
agent interfaces reference and the dark theme section. It records package checks
only; the new scenarios were not exercised for this release.

The [0.23.0 verification record](evals/verification-0.23.0.md) covers the two
helper scripts. It records the script tests and package checks; the new scenarios
were not exercised for this release.

The [0.24.0 verification record](evals/verification-0.24.0.md) covers the shared
reference mechanism and the marketing-copy guide. It records the package checks
and the drift-check proof; the new scenarios were not exercised for this release.

The [0.25.0 verification record](evals/verification-0.25.0.md) covers both skills:
the new `video-craft` 0.1.0, the shared offer brief and the two-skill package
validation. It records package, script and anchor checks; the new scenarios were
not exercised for this release.

The [0.26.0 verification record](evals/verification-0.26.0.md) covers the outbound
guide and the business-case, deal-risk and win-loss sections. It records package,
script and anchor checks and both skill-tree digests; the new scenarios were not
exercised for this release.

## License and sources

Copyright 2026 Antonio Fulgêncio. This package has [mixed license terms](LICENSE).
The pre-existing technical guidance retains CC BY 4.0. Commercial guidance added
in 0.4.0 adapts Richard's (@richardrx) ideas from Revenue-Centric Design and is
subject to its [full source-available terms](skills/frontend-craft/licenses/revenue-centric-design.txt),
including attribution and the restriction on betting, casino, gambling and the
real-money gaming/loot-box applications specified there.

The agentic screen-repair additions adapt Enmera's MIT-licensed instructions,
with the [full upstream notice](skills/frontend-craft/licenses/enmera-ai-design-check.txt)
retained and the [adaptation boundary](skills/frontend-craft/SOURCES.md#agentic-screen-repair)
recorded. The upstream checker, generator, hooks and example code are not bundled.

The prototype guidance adapts MIT-licensed Compozy design notes, with the
[full upstream notice](skills/frontend-craft/licenses/compozy.txt) retained and the
[adaptation boundary](skills/frontend-craft/SOURCES.md#prototype-doctrine) recorded.
No Compozy package, CLI or code is bundled.

The AI-interface and dark-theme guidance adapts MIT-licensed material from Pedro
Nauck's ui-craft skill, with the
[full upstream notice](skills/frontend-craft/licenses/pedronauck-skills.txt)
retained and the [adaptation boundary](skills/frontend-craft/SOURCES.md#ai-interfaces-and-dark-theme)
recorded. The two helper scripts added in 0.23.0 are covered by
[their own record](skills/frontend-craft/SOURCES.md#bundled-helper-scripts); no
other upstream script, asset or tool is bundled.

The marketing-copy guide adapts MIT-licensed material from Corey Haines'
marketingskills copywriting skill, with the
[full upstream notice](skills/frontend-craft/licenses/coreyhaines-marketingskills.txt)
retained and the [adaptation boundary](skills/frontend-craft/SOURCES.md#shared-marketing-copy-guidance)
recorded. No upstream code or tool is bundled.

The outbound, business-case and win-loss guidance adapts MIT-licensed material from
Corey Haines' marketingskills (cold-email, prospecting and sales-enablement),
mbfinotti's sales-skills and the social-media-skills `social-selling-and-dm` skill,
with the [upstream notices](skills/frontend-craft/licenses/social-media-skills.txt)
retained (see also the
[Corey Haines](skills/frontend-craft/licenses/coreyhaines-marketingskills.txt) and
[mbfinotti](skills/frontend-craft/licenses/mbfinotti-sales-skills.txt) notices) and the
[adaptation boundary](skills/frontend-craft/SOURCES.md#outbound-business-case-and-win-loss)
recorded. No upstream code, tool or data is bundled.

[Source notes](skills/frontend-craft/SOURCES.md) identify the adaptation scope,
upstream revision and changes. No third-party skill bundle, recipe library,
case-study asset or searchable dataset is redistributed.
