# Frontend Craft

Map how a product's frontend already works, reuse its domain components, and
keep new pages consistent with their siblings. Frontend Craft is an Agent Skill
designed to work alongside Impeccable or an existing project design system.

It addresses two recurring failures: replacing a domain interaction with a generic
control, and inventing a new header, subtitle, or typography treatment for another
page in the same dashboard. It checks actual usages and rendered behavior, not
just whether the same component was imported.

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
Impeccable is optional and is not bundled or installed automatically.

## Use

Examples use Codex syntax; other hosts may expose a slash command, a skill picker,
or natural-language invocation.

```text
$frontend-craft Map the dashboard's page families and assignment workflows.
$frontend-craft Build the projects list using the existing dashboard patterns.
$frontend-craft Review the task editor for reuse and consistency with sibling pages.
$frontend-craft Check the owner picker with long names, no results, and save failures.
$frontend-craft Review this landing page's decision path and mobile form.
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

Impeccable supplies visual direction and maintains its own product, design and
surface context. Frontend Craft finds the implementation precedents, preserves
domain behavior, and checks consistency and interaction quality.

For an explicit joint request:

```text
Use Impeccable with frontend-craft to build this page. Find the matching page
family and existing implementations of its user actions before editing.
```

For recurring work, add this instruction to the consuming project's existing
agent guidance when appropriate:

> For frontend creation, changes, and reviews, use frontend-craft to identify
> and verify applicable page-family and domain-component precedents. When using
> Impeccable, keep its design direction and context files authoritative for the
> approved visual scope, and apply frontend-craft's reuse and consistency checks.

Installation alone does not guarantee automatic co-invocation. The skill does not
edit agent instructions or Impeccable's files as an installation side effect.
An explicit redesign follows the approved new direction rather than freezing an
old appearance. Existing behavior and compatible components still inform the work.

## What loads when

The [skill entrypoint](skills/frontend-craft/SKILL.md) routes to focused references:
mapping; reuse and consistency; components; interaction and accessibility; motion;
landing pages; and reviews. Typical work reads the core and the relevant references,
not a catalog of every rule. The package is stack-neutral and has no Tailwind module.

Reviews report evidence and limitations; fixes require a request to implement them.
Source-only inspection is not a claim that visual or keyboard behavior passed.
No background scanner, runtime dependency, or project-wide refactor is installed.

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

## License and sources

Copyright 2026 Antonio Fulgêncio. Licensed under [CC BY 4.0](LICENSE).
[Source notes](skills/frontend-craft/SOURCES.md) identify the adapted WTK material
and independently written guidance informed by other skills. This repository does
not redistribute third-party skill bundles, recipe libraries or searchable datasets.
