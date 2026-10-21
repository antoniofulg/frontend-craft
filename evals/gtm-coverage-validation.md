# GTM coverage and validation

Date: 2026-10-21. Scope: make Frontend Craft self-contained for the operational
coverage of the maintainer's `gtm-engineering` and `gtm-metrics` skills before
those companions are removed. This is a guidance migration, not a deployment of
live GTM infrastructure or a claim of improved business outcomes.

## Comparison inputs

Both skill entrypoints declare metadata version `1.0.0`, original author Chad
Boyda / `agent-gtm-skills`, and modification by Felipe Rodrigues (`felipfr`).
The engineering implementation guide and quick reference were reviewed as well
as both entrypoints. The installed local copies, not a presumed upstream version,
are the comparison inputs. Their SHA-256 identifiers are:

| Source identifier | SHA-256 |
| --- | --- |
| `gtm-engineering/SKILL.md` | `95655466de1abdd4b3d7163e872442f0315d07fb3052b7253f9cc3ac91790c84` |
| `gtm-engineering/references/implementation-guide.md` | `8b6000a448c416f7e8ed4228a1474fc26c5e7991b935f429dea829420fc077ea` |
| `gtm-engineering/references/quick-reference.md` | `8f4b559064a89a26cb735a9662a42b6fba52ed03c8cf7ef4c07763539ee637ce` |
| `gtm-metrics/SKILL.md` | `a57971a5a248aa5de4d37763ce7e110c19727fe2c785e842e42ec95ed89043fc` |

New text is independently authored. Existing commercial and interface references
remain the owners of their topics; the two GTM references link to them instead of
requiring a separately installed GTM skill. See [source terms](../skills/frontend-craft/SOURCES.md#gtm-measurement-and-automation).

## Engineering coverage

Every operational source section is assigned below. Covered means that task
guidance exists; it does not mean the corresponding live workflow was executed.

| Source topic | Bundled owner and treatment |
| --- | --- |
| Before starting: motion, stack, volume, budget, skills, ownership, data constraints | [Workflow context](../skills/frontend-craft/references/gtm-automation.md#define-the-workflow-and-its-owner) and [platform selection](../skills/frontend-craft/references/gtm-automation.md#select-platforms-by-the-operating-contract); recover relevant context without a mandatory questionnaire |
| GTM engineer role and adjacent responsibilities | [Workflow ownership](../skills/frontend-craft/references/gtm-automation.md#define-the-workflow-and-its-owner); responsibilities retained without career, compensation or job-market assertions |
| Architecture over tools | [Platform/operating contract](../skills/frontend-craft/references/gtm-automation.md#select-platforms-by-the-operating-contract); compare existing integration, managed runner, self-hosting and custom code |
| Instruction stack: audience/scoring, messaging, personalization, sequence rules | [Explicit decisions and context](../skills/frontend-craft/references/gtm-automation.md#keep-decisions-and-context-explicit), reusing positioning and claim/copy owners |
| Persistent context and decision provenance | [Explicit context](../skills/frontend-craft/references/gtm-automation.md#keep-decisions-and-context-explicit); bounded history, ownership, suppression and rule versions |
| Feedback loops from replies, meetings, wins and losses | [Decision feedback](../skills/frontend-craft/references/gtm-automation.md#keep-decisions-and-context-explicit) and [measurement](../skills/frontend-craft/references/gtm-measurement.md#match-funnels-and-qualification-to-the-motion); observations do not authorize automatic targeting changes |
| Workflow-platform and enterprise integration comparisons/decision tree | [Selection criteria](../skills/frontend-craft/references/gtm-automation.md#select-platforms-by-the-operating-contract); current capabilities, scopes, tiers, governance, usability, recovery and total cost replace frozen vendor tables |
| API-first architecture and CRM API patterns | [Reliable integrations](../skills/frontend-craft/references/gtm-automation.md#build-reliable-integrations); actual authentication, schemas, pagination, bulk calls, quotas and idempotency are verified for the installed provider/version |
| Ingest: forms, product, provider intent, imports and chat | [Record ingestion](../skills/frontend-craft/references/gtm-automation.md#ingest-and-enrich-records); source/event identity, normalization, validation and quarantine |
| Enrichment fields and provider waterfall | [Enrichment](../skills/frontend-craft/references/gtm-automation.md#ingest-and-enrich-records); precedence, freshness, required-field acceptance, budgets and distinct failure/no-match/conflict paths |
| Fit, intent, composite scores and routing buckets | [Qualification](../skills/frontend-craft/references/gtm-automation.md#qualification-routing-and-handoffs) and [scoring validation](../skills/frontend-craft/references/gtm-measurement.md#match-funnels-and-qualification-to-the-motion); interpretable, calibrated rules replace universal weights |
| Route and act: ownership, time expectations, nurture, CRM writes and notifications | [Handoffs](../skills/frontend-craft/references/gtm-automation.md#qualification-routing-and-handoffs); assignment/acceptance/response, fallback queues and rechecking stopped work |
| GTM agents: research, enrichment, drafting, qualification, replies, meeting prep and pipeline analysis | [Bounded agent tasks](../skills/frontend-craft/references/gtm-automation.md#gtm-agents-and-assisted-decisions); inputs, tools, evidence, structured outputs, state, uncertainty and action authority |
| Agent development and platform templates | [Agent implementation](../skills/frontend-craft/references/gtm-automation.md#gtm-agents-and-assisted-decisions); inspect actual contracts and templates instead of assuming a particular coding agent, model ranking or node catalog |
| Event triggers, webhooks, polling, queues and event history | [Integration delivery](../skills/frontend-craft/references/gtm-automation.md#build-reliable-integrations); durable acceptance, authenticity, out-of-order events, reconciliation and optional bounded history |
| Idempotency, failures, replay and rate limits | [Effect recovery](../skills/frontend-craft/references/gtm-automation.md#build-reliable-integrations); unknown external outcomes require reconciliation, and replay does not resend completed effects |
| Monitoring and alert severity | [Observability](../skills/frontend-craft/references/gtm-automation.md#observe-verify-and-change-workflows); consequence/baseline, owner, pause, recovery and escalation replace fixed alert percentages |
| Unit/integration/end-to-end/shadow/load/data-quality tests | [Workflow verification](../skills/frontend-craft/references/gtm-automation.md#observe-verify-and-change-workflows); actual boundary risks, safe fixtures, disabled shadow effects, sampled accuracy and capacity checks |
| Workflow version control, rollout and rollback | [Change management](../skills/frontend-craft/references/gtm-automation.md#observe-verify-and-change-workflows); exports/code/config, state compatibility, delayed work and no secret/prospect records in version control |
| Cost model, waterfall/cache/batch/model/hosting/tool-consolidation optimizations | [Cost per useful outcome](../skills/frontend-craft/references/gtm-automation.md#control-cost-per-useful-outcome); complete cost basis, quality checks and no guaranteed savings |
| Inbound qualification pattern | [Motion patterns](../skills/frontend-craft/references/gtm-automation.md#apply-the-pattern-to-the-actual-motion); request to accepted owner and tracked response |
| Outbound prospecting and response classification | [Motion patterns](../skills/frontend-craft/references/gtm-automation.md#apply-the-pattern-to-the-actual-motion); sourced drafts, authorized actions, reply handling and stopped sequences |
| Trial/activation, expansion and churn signals | [Motion patterns](../skills/frontend-craft/references/gtm-automation.md#apply-the-pattern-to-the-actual-motion), with activation/monetization/retention owners; usage is not automatically buying readiness |
| Internal tools: scoring queue, territories, sequence editing, enrichment monitor, forecasts and competitive tracker | [Internal-tool guidance](../skills/frontend-craft/references/gtm-automation.md#apply-the-pattern-to-the-actual-motion); build-versus-extend, stack reuse, permissions, data freshness and usable recovery |
| Examples, troubleshooting, discovery questions and quick-reference rules | [Operational diagnosis](../skills/frontend-craft/references/gtm-automation.md#diagnose-operational-failures) plus corresponding owner sections; example thresholds become contextual criteria |
| Related-skill routes: outreach, enrichment, AI SDR, solo operations, ICP, sales, content, partners, metering/pricing and retention | [Bundled motion routes](../skills/frontend-craft/references/gtm-automation.md#apply-the-pattern-to-the-actual-motion), [growth and sales](../skills/frontend-craft/references/growth-sales.md), [positioning](../skills/frontend-craft/references/positioning-distribution.md) and [measurement](../skills/frontend-craft/references/gtm-measurement.md); no external GTM skill required for the described tasks |

## Measurement coverage

| Source topic | Bundled owner and treatment |
| --- | --- |
| Before starting: sales motion, pricing, stage, sources, team and cadence | [Measurement contract](../skills/frontend-craft/references/gtm-measurement.md#establish-the-measurement-contract) |
| ARR/MRR, net new revenue, expansion share, revenue latency and growth | [Metric definitions](../skills/frontend-craft/references/gtm-measurement.md#revenue-efficiency-and-pipeline-measures); contraction/reactivation and timing are explicit |
| CAC, payback, LTV:CAC, Magic Number, burn multiple and runway | [Metric definitions](../skills/frontend-craft/references/gtm-measurement.md#revenue-efficiency-and-pipeline-measures) and [payback owner](../skills/frontend-craft/references/pricing-economics.md#evaluate-free-access-as-an-acquisition-investment); units and nonpositive denominators handled |
| Pipeline coverage, velocity, per-rep metrics, slippage and forecasts | [Pipeline definitions](../skills/frontend-craft/references/gtm-measurement.md#revenue-efficiency-and-pipeline-measures); frozen cohorts, capacity, proxy versus realized outcome and forecast sensitivity |
| NRR, GRR, logo churn and time to first value | [Metrics](../skills/frontend-craft/references/gtm-measurement.md#revenue-efficiency-and-pipeline-measures), existing [cohort owner](../skills/frontend-craft/references/experimentation.md#define-the-measurement) and [activation](../skills/frontend-craft/references/activation.md) |
| NRR/growth benchmarks by stage and quick-reference targets | [Contextual benchmarking](../skills/frontend-craft/references/gtm-measurement.md#reviews-dashboards-and-decisions); require dated comparable definitions/populations rather than reusing unsourced figures |
| Product-led, assisted, agent-assisted and hybrid funnels | [Motion-specific funnels](../skills/frontend-craft/references/gtm-measurement.md#match-funnels-and-qualification-to-the-motion); adoption, referrals, qualified replies, held meetings and retained paid outcomes |
| AI cost share, cost/action, return, margin and task success | [AI economics](../skills/frontend-craft/references/gtm-measurement.md#measure-ai-and-usage-based-economics); avoid double counting, separate attempted/accepted work, human review and ROI versus revenue/cost |
| Usage pricing, commitments, consumption, overages and unit economics | [Usage economics](../skills/frontend-craft/references/gtm-measurement.md#measure-ai-and-usage-based-economics), with [pricing](../skills/frontend-craft/references/pricing-economics.md); volatile run rate is not necessarily contracted ARR |
| Data health: completeness, accuracy, recency, consistency and refresh | [Reconciliation](../skills/frontend-craft/references/gtm-measurement.md#reconcile-data-before-interpreting-it); dimensions and affected segments visible, critical fields not masked by a composite score |
| First/last, linear, U/W-shaped, time-decay, learned and product-touch attribution | [Attribution](../skills/frontend-craft/references/gtm-measurement.md#attribution-and-causal-limits); declared credit rules and limitations |
| Model choice, lookback, missing/offline paths, source versus influence and AI touches | [Attribution contract](../skills/frontend-craft/references/gtm-measurement.md#attribution-and-causal-limits); cycle/data/decision replace ARR-band prescriptions and causal overclaims |
| Board, executive and operator dashboards; tool selection and anti-patterns | [Commercial reviews](../skills/frontend-craft/references/gtm-measurement.md#reviews-dashboards-and-decisions) and [dashboard owner](../skills/frontend-craft/references/dashboards.md); usable role-specific hierarchy without fixed counts or platform requirements |
| Leading/lagging relationships | [Decision reviews](../skills/frontend-craft/references/gtm-measurement.md#reviews-dashboards-and-decisions); assess predictive usefulness without a fixed ratio or assumed causal chain |
| Weekly/monthly/quarterly reviews, scorecards, owners and actions | [Operating cadence](../skills/frontend-craft/references/gtm-measurement.md#reviews-dashboards-and-decisions); local decision frequency, comparable data, actions, owners and follow-up |
| PQL/MQL, fit/usage/intent scores, thresholds and handoffs | [Qualification](../skills/frontend-craft/references/gtm-measurement.md#match-funnels-and-qualification-to-the-motion); calibrated outcomes, sparse-data rules, missing authority and opt-outs |
| Examples, troubleshooting, discovery questions and specialist routes | The measurement sections above and [operational diagnosis](../skills/frontend-craft/references/gtm-automation.md#diagnose-operational-failures); relevant revenue, pricing, retention, outreach and ICP guidance is bundled |

## Corrections and deliberate exclusions

- The source net-new recurring-revenue formula omitted contraction; the new
  bridge includes it and handles reactivation explicitly.
- Annual contribution gives a payback interval in years. The canonical payback
  owner now supplies the conversion to months; nonpositive contribution does not
  produce a finite payback under that approximation.
- Attribution assigns credit; causal incrementality requires a suitable design.
  AI-attributed revenue divided by cost is not profit ROI.
- Provider confidence values, PQL weights, response-time targets, enrichment TTLs,
  health grades and review schedules are local choices requiring evidence.
- Webhooks do not universally replace polling. Durable receipt precedes acceptance;
  processed-event flags alone do not guarantee exactly-once external effects.
- Vendor tables, model rankings, template counts, adoption/job/salary claims and
  guaranteed percentage savings were not retained as facts. Current documentation
  is required for concrete product choices; their operational selection criteria
  remain covered.
- Related-skill names are replaced with bundled task guidance and owners. This
  does not purport to reproduce every unrelated specialist package linked by
  the source, nor a complete manual for every vendor API.

## Verification and evidence limits

The verification results below are recorded after running checks against the
finished package. New [GTM evaluation cases](scenarios.md#gtm-measurement-and-automation-cases)
describe observable decisions and failure modes; their existence is not a passed
behavioral evaluation. No source-to-heading matching test is used as proof of
agent behavior.

- `python3 scripts/validate_package.py` passed metadata shape, local paths,
  reference reachability and installed-package portability checks.
- `git diff --check` passed. A separate check included new files and validated
  whitespace plus 301 local links/heading anchors across the 16 changed Markdown
  documents, including the motion-vocabulary additions in this same work unit.
- `npx --no-install skills add . --list` discovered one `frontend-craft` skill
  with the GTM and naming triggers. Metadata remains within the 1,024-character
  description limit; README and entrypoint still declare `0.9.0`, with additions
  explicitly unreleased in the changelog.
- A temporary local install using `npx --no-install skills add <checkout> --skill
  frontend-craft --agent codex claude-code --copy --yes` produced two independent
  34-file copies. Their files were byte-identical to the package, and every local
  installed link resolved within its own copy. The temporary directory was removed;
  no global installation or consuming project was changed.
- Independent synthetic decimal-arithmetic checks passed the examples below.
  They check units and worked calculations, not an agent's application of them.

| Synthetic check | Inputs | Verified result |
| --- | --- | --- |
| Monthly payback | CAC 1,200; annual revenue/account 2,400; margin 0.75 | 8 months under constant contribution |
| Recurring bridge | Opening 10,000; new 2,000; expansion 500; reactivation 200; contraction 300; churn 400 | Net movement 2,000; closing MRR 12,000 |
| Starting-cohort retention | Same opening/expansion/contraction/churn; returning 200 belongs outside the starting cohort | NRR 0.98; GRR 0.93 |
| Sales-efficiency annualization | Quarterly revenue 300,000 versus 250,000; prior-quarter sales/marketing cost 200,000 | 1 under the declared Magic Number convention |
| Delivery cost counted once | Revenue 1,000; total delivery cost 300 already includes AI cost | Margin 0.70 |
| Cost per useful outcome | Included workflow costs 60 + 40 + 20 + 30 + 50; 10 held meetings | 20 per held meeting |
| ROI versus revenue/cost | Incremental contribution 300; investment 200; attributed revenue 400 | Profit ROI 0.50; revenue/cost ratio 2 |

All documented operational topic groups from the two source skills and the
engineering references have a bundled owner. Remaining limits are empirical:
the 12 new GTM cases were authored but not run as fresh-agent evaluations, and
no live connector, financial dataset or GTM workflow was exercised. Static topic
coverage and isolated installation do not prove production integration behavior.

Live CRM writes, provider enrichment, external sends, purchases and production
rollouts are outside this repository task. No such actions or changes to the
comparison application were performed. No GTM skill removal was performed; the
maintainer stated they would handle removal.
