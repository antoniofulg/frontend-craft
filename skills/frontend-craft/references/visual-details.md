# Visual implementation details

Read only when the task involves nested corners, font features, mixed-direction
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
