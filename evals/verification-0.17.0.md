# Frontend Craft 0.17.0 verification

Date: 2026-11-06. Scope: release the build-time interface checks since `v0.16.0`.
The package still exposes one `frontend-craft` skill; consumer installation
remains maintainer-controlled.

## Included coverage

- [Build checklist](../skills/frontend-craft/references/review.md#check-a-build-before-delivery),
  routed from the entrypoint before implementation and before delivery, scoped to
  what a change adds or alters.
- [Conditional reveals](../skills/frontend-craft/references/motion.md#reveal-conditional-content-smoothly),
  [keyboard shortcuts](../skills/frontend-craft/references/interaction-accessibility.md#keyboard-shortcuts),
  [multi-step keyboard flow](../skills/frontend-craft/references/interaction-accessibility.md#multi-step-keyboard-flow),
  [same setting, same control](../skills/frontend-craft/references/reuse-consistency.md#same-setting-same-control),
  [domain modeling](../skills/frontend-craft/references/components.md#model-the-real-domain),
  [summaries](../skills/frontend-craft/references/components.md#summaries-and-live-previews),
  time ranges in the locale section and
  [redesign parity](../skills/frontend-craft/references/review.md#prove-redesign-parity).
- Nine build-time behavioral scenarios.

## Review process

Four review rounds ran, each by a new agent with no access to earlier reviews.
Every finding was applied before the next round started:

1. Diff review against the lessons and writing standard: corrected the
   SC 2.1.4 claim, kept reviews read-only, made collapsed content inert, and
   deferred to motion tokens and existing owners.
2. Build simulation from the entrypoint, followed by a review: split the
   overloaded checklist rows, triggered parity on replacements and kept wall
   times fixed when formatting.
3. Over-triggering probe on unrelated tasks (label change, landing-page hero,
   motion discovery, table column, typo fix): scoped the checklist to the change,
   made keyboard defaults opt-in and kept reveal defaults to forms.
4. Final pass: aligned the entrypoint's delivery line with that scope and found
   no other blockers.

## Release package checks

- `python3 scripts/validate_package.py`: passed.
- Every fragment link in the package resolves to a target heading. This was
  checked separately, because the validator checks only that the file exists.
- `npx --yes skills@1.7.5 add . --list`: discovered the `frontend-craft` skill.
- An isolated temporary install with
  `npx --yes skills@1.7.5 add <source> --skill frontend-craft --agent codex claude-code --copy --yes`
  produced real `.agents/skills/frontend-craft` and `.claude/skills/frontend-craft`
  directories whose digests matched the source tree.

Final distributed skill-tree SHA-256 (36 files):
`ef4bf243a681673575db112beaee68c98d2cda4bdd162ec2557812accb6fb9dd`.
The digest uses the same procedure as in 0.16.0, which reproduced the recorded
0.16.0 digest from its tag.

## Limits

The review agents simulated an agent following the skill; no agent built the
scenarios against a real project, and no interface was rendered. Adherence in
practice is therefore unproven. The rules generalize defects a maintainer found
by hand in one consuming product. They do not establish measured usability.
The transient install fixture was removed, and no consumer installation was modified.
