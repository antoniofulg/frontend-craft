# Visual implementation details

Read only when the task involves nested corners, display typography, font features, mixed-direction
text, wide-gamut color or gradient interpolation. Impeccable and the adopted
design system own aesthetic choices; these are implementation options, not a new style.

## Concentric corners

For evenly inset rounded surfaces intended to share a center, start with
`inner radius = max(0, outer radius - inset)`. Measure inset between the relevant
edges, including the applicable border and padding. Reuse the existing radius
tokens; do not replace every nested radius with a calculation. Asymmetric insets,
elliptical corners and intentional contrasting shapes need separate judgment.
Check clipping, focus rings and the actual rendered border geometry.

## OpenType and numeric alignment

When a type role needs a font feature, verify the shipped font supports it.
Prefer the relevant `font-variant-*` property over opaque feature tags where
possible; use `font-feature-settings` only for a feature the higher-level
properties do not express. Preserve language-specific shaping and the project's
typeface. See [MDN font variants](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant).

For changing counters and numeric columns, `font-variant-numeric: tabular-nums`
can stabilize digit widths when supported. Add `lining-nums` only when appropriate
for that role. Align decimal values and use consistent locale formatting; equal
digit widths alone do not align differently formatted numbers. Prose need not
inherit tabular figures. See [numeric variants](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-numeric).

## Display typography and optical alignment

Apply refinements within the approved type system. Confirm the actual loaded
family, weights and language glyphs before tuning spacing; a fallback render may
have different metrics. Match display and body roles to the font's intended use.
Use size, weight and spacing to clarify hierarchy without introducing near-identical
sizes or making every line equally emphatic. A display face that works in a hero
may be unsuitable for instructions or long reading.

Inspect tracking and line spacing at each relevant size rather than applying one
display adjustment everywhere. Check accented letters, ascenders, descenders and
italic overhang against adjacent lines and clipping containers. Author line breaks
only when they preserve meaning across supported widths and translations; retain
the logical reading order and let longer content adapt.

Cap continuous body copy at about 60–75 characters per line. Prefer
`text-wrap: balance` for short titles and `text-wrap: pretty` for descriptions
over manual breaks. Keep display tracking no tighter than about −0.04em, body
tracking at the default and wide tracking for short labels only; light display
weights need a face loaded for that purpose. Avoid justified or all-caps body text.

Judge alignment optically as well as by boxes: round letters, diagonal edges and
punctuation can appear inset even when their bounds align. Any small correction
belongs to the affected display role and must remain sound with other strings,
fonts and viewport sizes. Avoid global offsets or clipping that hide a symptom.
Distinguish a deliberate expressive treatment from a visible legibility defect.

## Isolate embedded direction

Wrap an unknown-direction user name inside an otherwise directed sentence with
`<bdi dir="auto">…</bdi>` so adjacent punctuation and numbers do not reorder with
it. Use a known `dir` for content whose direction is established; keep the logical
text intact for selection and assistive technology. Isolation does not sanitize
untrusted markup: retain normal escaping. Check LTR and RTL names next to dates,
counts and punctuation. See [MDN bdi](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi).

## Wide gamut with a usable fallback

Start with a tested sRGB token. If the approved palette needs P3, gate the enhanced
token by syntax support and gamut capability. Illustrative values only:

```css
:root { --brand-accent: #3066d6; }
@supports (color: color(display-p3 0 0 0)) {
  @media (color-gamut: p3) {
    :root { --brand-accent: color(display-p3 0.19 0.40 0.84); }
  }
}
```

Place this in the existing token owner and theme, not individual components.
Verify contrast and meaning for both values. `@supports` checks parsing, not
display capability or visual equivalence. A custom property containing unsupported
color syntax can fail when consumed; a previous variable assignment is not a
reliable fallback without the support gate. See [MDN color()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color)
and [feature queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports).

## Gradient interpolation

When a gradient's middle looks unintended, compare interpolation spaces rather
than adding arbitrary stops. A perceptual space such as `oklab` is an option;
it is not automatically the desired appearance. Keep a supported fallback:

```css
.surface { background: linear-gradient(90deg, var(--start), var(--end)); }
@supports (background: linear-gradient(90deg in oklab, red, blue)) {
  .surface { background: linear-gradient(90deg in oklab, var(--start), var(--end)); }
}
```

Use the established theme tokens and verify text contrast along the gradient.
For polar spaces, hue interpolation can change the path; inspect the actual
result. Spatial gradient interpolation is distinct from animating a color over
time. See [MDN gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/linear-gradient).
