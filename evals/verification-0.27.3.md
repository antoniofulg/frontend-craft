# Release 0.27.3 verification: frontend-craft 0.27.3

Date: 2026-11-13. Scope: a preload-on-intent check in the performance audit
procedure, started from a third-party tip about `React.lazy`. `video-craft` is not
released. Tag: `v0.27.3` for frontend-craft.

## Included coverage

- `references/performance-audits.md`: new "Preload on intent" bullet under
  production bundles, with a React-only note pinned to React commit `df6aa4ec`.
- `SOURCES.md`: provenance for the React claims; the tip's "about 2 ms" figure is
  excluded as unverified.
- `SKILL.md` `metadata.version` 0.27.3, README and CHANGELOG.

## Claim check

- `packages/react/src/ReactLazy.js`: the import factory runs on first render when
  the payload is uninitialized, and the component waits on its promise.
- `packages/react-reconciler/src/ReactFiberWorkLoop.js:527`:
  `FALLBACK_THROTTLE_MS = 300`, applied to retry-only commits.

## Release package checks

- `python3 scripts/sync_shared.py`: no diff in either skill.
- `python3 -I scripts/validate_package.py`: PASS (metadata shape, local links, portable references, shared copies, distribution files).
- Not run: a browser reproduction of the fallback flash, installer probes.

## Limits

Source reading, not a measured run. Behavior may differ by React version and by
router; the guidance tells the agent to check the installed version.
