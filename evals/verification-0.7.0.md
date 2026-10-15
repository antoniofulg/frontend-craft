# Verification of 0.7.0 public-page guidance

Date: 2026-10-15. Baseline: 0.6.0, repository HEAD
`9b2d0a9` before these edits. Evaluated condition: 0.7.0 working tree, before
commit. Final skill-tree SHA-256:
`8ecda1f613c4d006db0fa5f3be7b0b4dd6ca80e0fe3734d29bff76237453359c`.
Digest uses sorted relative file paths followed by NUL, file bytes and NUL.

Source comparison: [Taste Skill v2.0.0](https://github.com/Leonxlnx/taste-skill/tree/v2.0.0)
at `2b44c81bbe36ac8a8a6bdd1c9ff593f28b8728f4`, not the later main branch;
the initial source revision recorded in SOURCES was also retrieved. Commercial
adaptations retain the [recorded attribution and terms](../skills/frontend-craft/SOURCES.md#public-page-identity-and-media-in-070).
This is maintainer evidence, not a runtime reference.

## Independent source and authoring review

After implementation, two new agents with fresh contexts reviewed the update
read-only: one compared upstream mechanisms and persistent differences, and one
checked authoring, conditional routing, authority, evidence and license boundaries.
They used the session's default model configuration without overrides. Neither
was an implementation author. Focused rechecks followed the corrections below.

The authoring reviewer identified one ambiguity: absence of fresh browser access
must not invalidate actual supplied screenshots. Review guidance now retains
those observations while stating coverage/freshness limits and keeping missing
rendered evidence conditional. It confirmed the correction on recheck.

The source reviewer confirmed all five agreed mechanisms were substantively
covered and routed. It identified two useful optional craft details: coherent
illustration execution and display-type refinements. They were added to existing
references and rechecked by both reviewers. Neither reported a remaining actionable
defect within the reviewed scope. This is source/instruction review, not a proof
that every future agent task will succeed.

| Upstream mechanism | Local owner and adaptation |
| --- | --- |
| Subject inventory, idea and competitor test | [Landing pages](../skills/frontend-craft/references/landing-pages.md#ground-the-visual-concept-in-the-subject): verified subject material, organizing idea, relevant comparison, hypothetical-versus-verified specificity and concept beyond the hero |
| Direction selection from concrete compositions | [Commercial visuals](../skills/frontend-craft/references/commercial-visuals.md#compare-compositions-when-direction-is-open): feasible alternatives when direction is open, inspected references where available, actual content/media and mobile/effort tradeoffs |
| Real media search and honest representation | [Imagery](../skills/frontend-craft/references/imagery.md): inventory, original source/terms, contextual search, own/found/generated material, inspected assets, provenance and credits |
| Media preparation and software fragments | Imagery: coherent crops/treatment, responsive delivery, sanitized actual product captures/owners, loading/failure states, footage and equivalent access |
| Screenshot critique and bounded corrections | [Review](../skills/frontend-craft/references/review.md#critique-the-rendered-composition): opening/scroll views, applicable widths, located defects, source diagnosis, shared fix loop and explicit unresolved findings |
| Useful live demonstration | [Landing pages](../skills/frontend-craft/references/landing-pages.md#demonstrate-value-through-a-useful-interaction): compare with static proof, real rules/owners, honest sample data, primary destination, input/error/fallback checks |
| Illustration craft | [Imagery](../skills/frontend-craft/references/imagery.md#purpose-built-diagrams-and-illustrations): consistent vocabulary, readable main structure and distinguishing details, actual/mobile scale and truthful accessible labels |
| Display type and optical craft | [Visual details](../skills/frontend-craft/references/visual-details.md#display-typography-and-optical-alignment): loaded faces/glyphs, role suitability, scoped spacing, accents/overhang, adaptable breaks and optical alignment |
| Claims-first narrative and complete content | Existing landing-page claim inventory/narrative plus rendered substance checks: visitor question, supported answer, evidence and next decision |

Routing checked: SKILL sends public-page work to landing pages and media work
directly to imagery; landing pages reaches composition/media/demonstration guidance;
commercial visuals and the delivery pointer reach the same critique pass; review
reaches media and scoped typography. Narrow behavioral repairs retain their
existing routes, and reviewers remain read-only unless fixes are requested.

## Fresh-context task probes

Four further new agents received only the skill entrypoint, a realistic task and
raw synthetic project evidence. They were not given expected outcomes, suspected
defects, this record or the authors' conclusions, and were told not to read evals,
SOURCES or the implementation diff. Each delivered a read-only proposal/review.
All four met the relevant criteria for the single task supplied.

| Probe and raw evidence | Observed result | Skill references actually consulted |
| --- | --- | --- |
| Passagem concept: shift-handover record, buyer objection, approved violet brand, public composition open, sanitized example, named component owners, R$250 + R$5/route for 1–200 routes, /agendar, limited competitor material; no network/image tool/browser | Derived the concept from acceptance owner/time; compared two feasible compositions; carried the record beyond the hero; kept approved brand; used static product proof and optional quote estimator; calculated R$255/R$300/R$1,250 for 1/10/200 routes; preserved scope/disclosures/fallback and rejected unsupported delay reduction/exclusivity claims | landing-pages, commercial-strategy, commercial-visuals, reuse-consistency, imagery, interaction-accessibility, experimentation |
| Oficina media: logo and commissioned process SVG with recorded web permission; historical street candidate with missing original terms; proposed generated staff photo without references/tool; fixed R$80 diagnostic price and /contato; only source records available | Selected existing diagram and text, deferred archive image pending original terms, rejected invented staff depiction, kept historical context distinct, specified provenance/credits/mobile/equivalent text checks and chose a static page without an unnecessary calculator | imagery, landing-pages demonstration section |
| Narrow label plan: change Enviar to Agendar visita on existing PublicAction at /agendar; approved violet/bordered/static page with a three-line translated heading; no render available | Planned only the local label substitution, retained real owner/destination/style, did not open a brand or growth exercise, and named future rendering/navigation checks without claiming they passed | reuse-consistency, interaction-accessibility |
| Render review: actual desktop 1440×1100 and mobile 390×844 screenshots plus HTML source, with synthetic Portuguese product content; no fresh browser/analytics for evaluator | Opened both actual images before source; located header covering the promise, horizontal overflow and CTA covering terms; tied fixes to CSS causes, prioritized access/comprehension, retained approved styling and explicitly separated observed image evidence from untested behavior | landing-pages, review, commercial-strategy, commercial-visuals, interaction-accessibility |

All four read SKILL.md. The source records and named owners in the first three
probes were supplied synthetic evidence, not inspected product files. Their
proposals do not prove component reuse, permission clearance, numerical runtime
behavior or deployed product capability.

The render probe used an isolated HTML fixture created for this evaluation.
Installed Chrome rendered both screenshots with headless CLI, device scale 1,
specified window sizes and isolated temporary profiles; both commands exited 0.
The evaluator used view_image before reading HTML. Screenshot hashes:

- desktop.png: `cb6ebc8a2668fe4f880494095acc7b667b8e819016f848d9ae6ca71357aa21fe`
- mobile.png: `bdd482ca5783fe9f6760fc2ec10c62aea1414818de1bb693e94e0ee22e41cc8e`

The synthetic HTML and browser profiles stayed outside the repository and
installed skill. No live client app, customer account or external service was
changed. No baseline agent runs, repeated trials, user research, assistive-technology
sessions, sales experiments or comparative score measurements ran. These probes
support the described routing/decisions and screenshot defect detection only;
they do not establish superiority over 0.6.0/Taste, universal reliability, improved
conversion or token savings. The later illustration/type additions received
independent static rechecks, not separate behavioral probes.

## Persistent differences from Taste v2

| Difference | Status and reason |
| --- | --- |
| Seeded random draw, history and strict redraw/adoption protocol | Intentional: contextual comparison and approved direction preserve product constraints and Impeccable ownership |
| Bundled gallery datasets, photo library, blueprints and base CSS/JS | Intentional: use relevant inspected references without installing a competing design system or redistributing a catalog |
| Dedicated linter/browser inspector and automated hard-fail enforcement | Intentional limitation: relevant checks use the consuming project's tools and rendered evidence; this package supplies no equivalent executable enforcement |
| Fixed palette/font/device bans, headline arithmetic, grid/layout formulas | Contextual adaptation: actual legibility, hierarchy, approved identity, localization and task contracts govern the result |
| Mandatory picture/video/motion counts and live interaction | Contextual adaptation: require explanatory value, accessibility and fallbacks; static and typography-only pages remain legitimate |
| Awwwards weights, caps and study statistics | Intentional: prioritize task access, comprehension and evidence without converting model aesthetic judgments into commercial proof |
| Mandatory complete copy deck or invented sample commercial details | Contextual adaptation: reuse approved copy and claim inventory; realistic illustrative data is identified and cannot invent the actual offer |

No uncovered useful mechanism remained in the five requested priorities plus
the two craft additions after the focused source recheck. The intentional tooling
and catalog differences remain real differences, not implemented equivalents.

## Package checks

- Package validator: metadata shape, links, reachability and portable distribution
  passed, including imagery and all new routes.
- Skill Creator quick_validate.py via uv with temporary PyYAML: passed; no
  repository dependency added.
- Skills CLI discovery: found frontend-craft.
- Isolated Skills CLI install for Codex and Claude Code with --copy --yes: both
  installed copies matched all 28 source files byte-for-byte. Installation scratch
  directory was removed.
- git diff --check: passed.

Nine new task scenarios in [scenarios](scenarios.md#public-page-identity-and-media-cases)
retain distinct failure cases. Only the four representative probes above ran;
the full scenario catalog was not executed. No tests assert fixed wording,
reference-read counts or aesthetic scores.
