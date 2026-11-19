# Frontend Craft 0.27.5 verification

Scope: copy-only cleanup of generated-looking interfaces. `video-craft` is unchanged.

## Dashboard probe

A model received the [content restraint](../skills/frontend-craft/references/interaction-accessibility.md#content-restraint) and [chart](../skills/frontend-craft/references/charts.md#preserve-truthful-comparisons) guidance and a synthetic imports dashboard. The JSX rendered the same translated status twice: once unconditionally and once while a job was pending. A KPI caption supplied the comparison period; the chart legend toggled series.

The first pass removed the unconditional chip, preserved the pending status and legend control, and moved the comparison period next to the KPI. A fresh call with the same request and revised JSX returned `UNCHANGED`.

This was a source-only probe with the references supplied directly. It did not test skill discovery, browser rendering, or improvement over the previous version.
