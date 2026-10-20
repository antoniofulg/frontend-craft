# Frontend Craft 0.9.0 verification — 2026-10-20

Scope: the 0.9.0 skill bundle adds loading-state fidelity, technical
discovery, metric-specific Core Web Vitals guidance, async/collection recovery,
navigation/drafts and locale-sensitive data. This receipt records pre-release
validation; publishing the bundle does not validate consuming-project behavior.

Skill bundle SHA-256:
`c307f0a8778c745ec3badb4a3a5a803b9e3dd1c1cc908b205cdef585522cec3b`.
The digest uses sorted skill-relative file paths and file bytes, each followed
by NUL. Historical source-only probes remain in
[the resilience receipt](resilience-validation.md).

## Browser exercises

Two fresh-context agents used the skill to repair separate isolated browser-ready
fixtures. They received raw source and product/API contracts, without the root's
independent checks or expected findings. The host default model/effort was used
without overrides. Each agent owned only its fixture's HTML/JavaScript; the root
owned immutable baseline copies, the loopback HTTP API and browser assertions.
No consumer application was changed.

Playwright 1.64.0 and headless Chromium 156.0.8078.4 exercised real browser DOM,
keyboard events, navigation and Fetch against a synthetic local HTTP server.
The server supplied delayed reads, version conflicts, a response dropped after a
committed save, idempotent operation receipts, server pagination/sorting and
documented scheduling ambiguity/error responses. It is a controlled domain
fixture, not a real identity provider, database or scheduling integration.

The final 13 checks produced **2 baseline passes / 11 baseline failures**, then
**13 passes / 0 failures** after fixture repairs. Both existing passing controls
were preserved. Structured results, failure reasons and fixture/harness hashes
are retained in [browser evidence](artifacts/0.9.0/browser-results.json).

| Area | Browser observations |
| --- | --- |
| Async editor | Out-of-order reads, older cleanup during a newer request, account changes, duplicate submission, a lost committed response, conflict recovery and preservation of edits made during a save |
| Navigation | Direct entry/reload, initial-entry Back/Forward, preserved query/hash state, same-document draft restoration and account refresh after return navigation |
| Table/collection | Native header semantics and accessible checkbox names, keyboard sorting/focus, stable selected IDs in the bulk payload, filter/page reset and obsolete query responses |
| Localized values | English/Portuguese presentation, JPY/KWD precision and accepted minor-unit payloads, date-only preservation with a Honolulu browser zone, explicit New York wall-time submission, overlap confirmation and nonexistent-time correction |

Mobile browser checks used 390 × 844; additional screenshot/bounds inspection used
390 × 900 and 1440 × 900. Both measured document widths matched their viewport,
all visible controls stayed within its bounds, and the conditional occurrence
field computed to `display: none` before clarification was needed. The root
inspected the [mobile](artifacts/0.9.0/collection-mobile.png) and
[desktop](artifacts/0.9.0/collection-desktop.png) screenshots. These are synthetic
fixture renders, not historical product captures or a full translation audit.

## Corrections and evidence limits

The first fixture repair exposed a real visibility defect: shared label styling
overrode the occurrence field's `hidden` state. The fixture owner corrected its
scoped visibility rule; the final browser check covers initial hidden → server
409 clarification → visible choice → date/time edit → hidden correction state.
The skill now tells conditional-control work to inspect actual visibility,
focusability and validation, supported by current MDN documentation.

Early harness issues were corrected separately: select label matching, UTF-8
response headers, assumptions about the initial sort order, and an assertion
requiring exactly one raw POST. The dropped-response exercise observed identical
transport deliveries under one operation ID/payload with one committed effect;
final assertions verify that logical contract. Fixture outcome assertions were
preserved. The skill now distinguishes duplicate effects from raw request counts.

Chromium did not admit a native bfcache restoration in this environment; its
diagnostic reported a masked non-restoration reason. Native Back/Forward and
return navigation were checked, but the persisted `pageshow` case uses an
explicitly simulated browser event. It verifies the event-driven freshness path,
not actual bfcache admission or a restored-memory security guarantee.

These bounded exercises do not compare skilled and unskilled agents or establish
general reliability improvement. Accessibility-tree and keyboard checks are not
screen-reader certification. Other browser engines, durable draft recovery,
real provider/database acceptance, SEO HTTP/deployment/search acceptance and
field Core Web Vitals were not tested. Existing product tile, price and
reservation-alternative mismatches remain open.

## Release/package checks

Package validation, Skill Creator metadata validation with isolated PyYAML,
skills-CLI discovery, local fragment links and whitespace checks passed.
Temporary Codex and Claude Code installations each byte-matched all 30 final
skill files. Evaluation servers, browsers and temporary fixtures were cleaned up;
only the bounded evidence files above remain in the repository.

The 0.9.0 version metadata, [release notes](../CHANGELOG.md), routing and source
notes were reviewed independently. No runtime dependency or new mandatory
workflow was added to the installed skill.
