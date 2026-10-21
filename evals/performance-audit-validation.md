# Performance audit coverage validation

Date: 2026-10-21. Scope: compare the installed `web-perf` skill with canonical
Frontend Craft and add only missing operational guidance. This is a static
authoring and package review, not a website audit or behavioral benchmark.

The compared source and its hash are recorded in
[source notes](../skills/frontend-craft/SOURCES.md#performance-audit-operations).

## Coverage comparison

| Comparison area | Result and owner |
| --- | --- |
| Available tools and measurement limitations | Added capability/schema discovery and fallback boundaries in [audit operations](../skills/frontend-craft/references/performance-audits.md#discover-capabilities-and-limits) |
| Trace recording and insight inspection | Added capture completion, navigation scope, returned identifiers, failed-capture handling and estimate limits in [trace inspection](../skills/frontend-craft/references/performance-audits.md#record-and-inspect-a-trace) |
| Network requests and critical dependencies | Added request pagination/details and initiator-chain investigation in [request inspection](../skills/frontend-craft/references/performance-audits.md#inspect-requests-and-delivery) |
| Cache, compression and transfer accounting | Added response policy, repeat visits, cache layers, size definitions and delivery verification in [delivery analysis](../skills/frontend-craft/references/performance-audits.md#caching-compression-and-sizes) |
| Resource hints | Added consumption matching, contention and route/state coverage before removal in [hint analysis](../skills/frontend-craft/references/performance-audits.md#resource-hints) |
| Production source and bundle analysis | Added emitted-output evidence for splitting, elimination, targets and polyfills in [bundle inspection](../skills/frontend-craft/references/performance-audits.md#inspect-production-bundles) |
| Field/lab distinctions, metric diagnosis and before/after comparisons | Preserved the existing [performance guide](../skills/frontend-craft/references/performance.md) verbatim apart from its optional-reference pointer |
| Accessibility | Reused existing [verification](../skills/frontend-craft/references/interaction-accessibility.md#verification); no duplicate checklist |

Fixed tool names and setup commands, universal bundle budgets, blanket dismissal
of zero estimated impact and assumptions that one capture proves global non-use
were intentionally excluded. The reference does not depend on `web-perf` remaining
installed. Skeleton-only work retains its existing direct route.

## Validation results

- Repository validator passed: metadata shape, local link destinations, reference
  reachability, portable installed references and distribution files.
- The locally available skills CLI discovered exactly one skill, `frontend-craft`,
  with the updated description, using `npx --no-install skills add . --list`.
  No package or skill installation was performed.
- Local link and heading-anchor checks passed for changed Markdown documents,
  including the audit reference and this record.
- The existing performance guide matched `HEAD` after removing only the added
  routing paragraph. Field targets, causal standards and comparison rules stayed
  unchanged. Review routing and metadata now include production-bundle audits.
- `git diff --check` passed. Release metadata remains `0.9.0`; the changelog marks
  these changes as unreleased.
- The auxiliary skill-creator validator could not run because its Python
  environment lacks PyYAML. No dependency was installed. The repository validator
  and independent CLI discovery passed, with the narrower checks described above.

## Remaining evidence gaps

No requested guidance category remains uncovered in the static comparison.
Actual tool-schema compatibility, trace capture, insight enumeration, network
inspection and bundle attribution have not been exercised against a live site.
No browser timing, field metrics, production build or comparative agent behavior
was measured. Static coverage does not establish performance gains or universal
replacement reliability. A future audit can exercise these paths through the
environment's available tools without depending on the retired companion.

After the improvement and checks above, the maintainer's cleanup request was
applied: the global `web-perf` directory and four copies in temporary plugin
checkouts were removed. Scans covered 111 global configuration roots and the
Projects/Konabos workspace roots, excluding dependency, build and cache/history
directories. No matching symlinks were found. The global installation registry
had no `web-perf` entry. Plugin updates can restore bundled copies; plugin
configuration was not changed. Cleanup authorization is separate from the
evidence above; removal is not a claim that live audit validation passed.
