# Frontend Craft 0.14.0 verification

Date: 2026-10-30. Scope: release the subscription-paywall additions since
`v0.13.0`. The skill name, mixed source terms and consumer-controlled
installation workflow are unchanged.

## Included coverage

- Paywall review within its surrounding flow, with placement treated as a
  hypothesis; the user's stated outcome restated from their own inputs before
  the price.
- Single-action trial paywalls compared against multi-plan choice on trial
  starts, plan fit, trial-to-paid conversion and refunds.
- Trial timelines whose reminders are actually sent, and per-period price
  equivalents kept beside the charged amount and billing period.
- Paywall proof routed to the landing-page proof rules; onboarding paywalls
  routed from activation.
- Published paywall case studies treated as patterns to test, not expected lift.

## Release package checks

- `python3 scripts/validate_package.py`: passed metadata shape, local file links,
  reference reachability, portability and required distribution files.
- `npx --no-install skills add . --list`: discovered one `frontend-craft` skill.

Final distributed skill-tree SHA-256 (34 files):
`16dc44420cbafec138dbbbf4be22a238682edf88a09a3ca3cc25471ca1cabbb4`.
The digest uses sorted relative file paths, NUL, file bytes and NUL; it excludes
repository-only documentation and evaluations.

## Limits

No agent scenario, fresh-context probe, rendered paywall or installation copy
was exercised for this release. The additions draw on a practitioner video
summary of vendor paywall case studies and author judgment; the reported lifts
were not independently verified and are not bundled as evidence.
