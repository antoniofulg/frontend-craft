# Frontend Craft

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
[skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add antoniofulg/frontend-craft
```

Choose the agents interactively, or target Codex and Claude Code explicitly:

```bash
npx skills add antoniofulg/frontend-craft --skill frontend-craft --agent codex claude-code
```

For a local development checkout, replace `antoniofulg/frontend-craft` with its
directory, such as `~/Projects/frontend-craft`. The package uses the standard
`skills/frontend-craft/SKILL.md` layout. No npm publication or custom installer is required.
Impeccable, UI/UX Pro Max and transitions-dev are optional companions; none is
bundled or installed automatically.

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
$frontend-craft Review the task editor for reuse and consistency with sibling pages.
$frontend-craft Check the owner picker with long names, no results, and save failures.
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

The [skill entrypoint](skills/frontend-craft/SKILL.md) routes to focused references:
mapping; reuse and consistency; components; interaction and accessibility; motion;
commercial strategy; growth and sales; commercial visuals; landing pages; imagery;
checkout; activation; monetization; retention; behavioral design; dashboards; product strategy;
positioning and distribution; experimentation; performance; visual details;
charts; and reviews. Typical work reads
the core and the relevant references, not a catalog of every rule. The core is stack-neutral;
React recipes are explicitly conditional, and there is no Tailwind module.

The expanded references cover forced colors and announcement priorities, disabled
control semantics, state/action composition and refs, interaction-specific motion,
commercial claims and messaging alternatives, font/bidi/color details, and chart
selection with accessible alternatives. Suggested timing and visual values yield
to the actual project tokens and requirements.

Public redesigns also check URL/anchor, metadata/SEO, analytics, form and legal
contracts. Onboarding and authentication guidance distinguishes WCAG requirements
from ergonomic recommendations. A separate performance reference covers field
versus local evidence, trace-based diagnosis and comparable before/after runs.

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

## Commercial reviews

The [commercial visuals reference](skills/frontend-craft/references/commercial-visuals.md)
turns the sales objective into hierarchy, relative contrast, whitespace, CTA
placement, proof imagery, comparable pricing cards, visible onboarding progress
and meaningful success feedback. It includes mobile inspection and contextual
visual experiments, such as promotional price typography, with comprehension
and accessibility checks. Impeccable is optional; existing brand tokens and
approved direction still guide the visual expression.

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

## Development and validation

```bash
python3 scripts/validate_package.py
npx skills add . --list
```

The package validator checks metadata shape, local links, reference reachability,
and whether the installed skill is self-contained. The skills CLI independently
checks discovery. To exercise installation without altering a real project:

```bash
skill_source="$PWD"
install_probe="$(mktemp -d)"
cd "$install_probe"
npx skills add "$skill_source" --skill frontend-craft --agent codex claude-code --copy --yes
```

Inspect the installed skill and references, then remove only that temporary
directory. Behavioral evaluation tasks and their distinct failure criteria live in
[evals/scenarios.md](evals/scenarios.md). Static checks and successful installation
do not prove better agent decisions; report behavioral evidence separately.

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

## License and sources

Copyright 2026 Antonio Fulgêncio. This package has [mixed license terms](LICENSE).
The pre-existing technical guidance retains CC BY 4.0. Commercial guidance added
in 0.4.0 adapts Richard's (@richardrx) ideas from Revenue-Centric Design and is
subject to its [full source-available terms](skills/frontend-craft/licenses/revenue-centric-design.txt),
including attribution and the restriction on betting, casino, gambling and the
real-money gaming/loot-box applications specified there.

[Source notes](skills/frontend-craft/SOURCES.md) identify the adaptation scope,
upstream revision and changes. No third-party skill bundle, recipe library,
case-study asset or searchable dataset is redistributed.
