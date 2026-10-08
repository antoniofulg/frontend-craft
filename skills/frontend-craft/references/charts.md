# Choosing and reviewing charts

Read when a page introduces or changes a chart, its encoding, or its accessible
data alternative. Reuse the project's chart wrapper, units, formatting and theme.

## Start from the question and data

Identify the decision, variables, units, time grain, denominator, missingness and
number of series. Distinguish observed zero from absent data and actuals from
forecasts. If exact lookup matters more than a pattern, a table may be the best UI.

| Question | Candidate | Limitation or alternative |
| --- | --- | --- |
| Compare categories | Sorted bars or dots | Many categories need filtering or a table; bars normally need a zero baseline |
| Track time | Lines, or columns for discrete period totals | Preserve interval spacing and gaps; avoid a crowded collection of lines |
| Understand distribution | Histogram or box plot | Bin choices affect the story; explain box summaries and show sample size |
| Compare numeric variables | Scatter plot | Correlation is not causation; overplotting may need aggregation |
| Show parts of a whole | Stacked bars; pie only for a few distinct parts | State the denominator; close proportions are easier to compare with bars |
| Explain change between totals | Waterfall | Components must reconcile; distinguish opening/closing totals from deltas |
| Scan a matrix | Heatmap | Color needs a scale and exact-value access; use a table for precise lookup |
| Show geographic variation | Map when location is relevant | Normalize rates appropriately; area size can overwhelm population or count |

These are starting choices, not categorical rules. For a less familiar question,
consult an installed UI/UX Pro Max chart-domain reference selectively, or a
specialist guide such as [Data to Viz](https://www.data-to-viz.com/). Inspect fit
to the actual dataset rather than copying a catalog's preferred style.

## Preserve truthful comparisons

Label units, aggregation, date range and material filters. Expose relevant sample
size and uncertainty. Use comparable scales for comparisons; if truncating an
axis or using a logarithmic scale, make that decision apparent and justify it.
Avoid dual axes or decorative 3D that make comparisons ambiguous. Do not smooth
away real gaps or silently resample data to make a cleaner shape.

Preserve series identity across filters/themes through names and stable tokens.
Use labels, line styles, shapes or patterns alongside color. Check empty, loading,
single-point, negative-value and large-label states as the dataset permits.

## Accessible access

Provide a concise description of what the chart answers and its salient pattern,
plus access to the underlying values/relationships, often a properly headed data
table or an appropriate longer description. Generate alternatives from the same
filtered data so they cannot disagree. A download alone may be inadequate for
the page's immediate task. See [WAI complex images](https://www.w3.org/WAI/tutorials/images/complex/).

Make essential tooltip information available by keyboard and touch, with visible
focus and appropriate names for interactive marks/controls. Do not put thousands
of points in the tab order; use the library's documented accessible navigation
or an equivalent table/filter path. Preserve a useful static view when animation
is reduced, and verify series remain distinguishable in forced colors.

Report the selected encoding, the data caveat that matters, the accessible
alternative and checks performed. Chart selection does not authorize inventing
data, installing a new visualization library, or changing the product's metrics.
