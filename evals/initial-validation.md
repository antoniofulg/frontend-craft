# Initial validation — 2026-10-08

Scope: Frontend Craft 0.1.0, before its initial local commit.
Skill bundle SHA-256: `6301a47dcd2400d1d0fe0011bc2e908b1190e0875d050c4152791477e5bc93d4`.
The digest uses sorted relative paths plus file bytes, separated by NUL bytes.

## Package evidence

| Check | Producing command or procedure | Result |
| --- | --- | --- |
| Metadata shape, local links, packaged reference closure | `python3 scripts/validate_package.py` | Exit 0 |
| Agent Skill metadata | Skill Creator's `quick_validate.py skills/frontend-craft`, through `uv run --with pyyaml python` | Exit 0, `Skill is valid!` |
| CLI discovery | `npx --yes skills add . --list` with skills 1.5.23 | Exit 0, exactly one discoverable skill |
| Complete installation | `npx --yes skills add <source-checkout> --skill frontend-craft --agent codex claude-code --copy --yes` in a temporary directory | Exit 0; all 10 source-bundle files byte-matched in both installed locations |
| Broken-package detection | Run package validator on temporary copies with a missing reference, then a reference escaping the installed skill | Both rejected with exit 1 for the intended cause |

The final bundle was reinstalled after the instruction corrections below.
Temporary directories were removed; no skill was installed into a real consuming
project or the user's global skill directories. The auxiliary metadata validator
initially lacked PyYAML in system Python; its isolated `uv` environment supplied
it without adding a package dependency.

## Instruction review and behavioral probe

A separate explorer reviewed the package against the requested scope. It found
one ambiguous harness-isolation sentence. The correction explicitly allows the
harness to import real components while forbidding production entrypoints from
importing the harness. The author rechecked this targeted change.

A fresh explorer received the skill and a read-only task-list planning request
against an existing CRM, without an expected-answer rubric. It located the actual
page shell, existing task route, domain member picker and persistence owner;
identified divergent action-slot usage and conflicting comments; and proposed
reuse rather than a generic selector or parallel workspace. It loaded only the
reuse, components, and interaction references. The source-backed proposal named
unresolved product scope and explicitly withheld rendered claims.

That probe identified missing explicit planning-only routing. The final core now
routes plans to precedent analysis and stops before implementation or checks.
The author reviewed the addition; the behavioral probe was not rerun.

## Limits

This is one source-only combined reuse/header-planning probe, not a controlled
baseline comparison or an executed UI change. Browser behavior, visual fidelity,
landing-page output, map persistence/drift handling, and the other cases in
[scenarios.md](scenarios.md) were not behaviorally evaluated. No claim of measured
improvement in agent reliability follows from these results.
