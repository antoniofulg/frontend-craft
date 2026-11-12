# Visual implementation details

Read only when the task involves nested corners, display typography, font features, mixed-direction
text, translucent surfaces, wide-gamut color, gradient interpolation or a dark theme. Impeccable and the adopted
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

Cap continuous body copy at about 60–75 characters per line. Line height scales
inversely with size: body text needs roomy leading (about 1.4–1.6), display sizes
tighten toward 1.0–1.2. Prefer `text-wrap: balance` for short titles and
`text-wrap: pretty` for descriptions over manual breaks. Keep display tracking no tighter than about −0.04em, body
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

## Translucent surfaces

Use a blurred, tinted surface only where it tells the user what lies behind it:
a bar over scrolling content, a sheet over a page. Match blur to size, since a
wider surface needs a stronger blur to stay readable; never stack two light
translucent layers; and keep text and controls on the surface above the
contrast threshold against the worst content that can scroll behind it. Prefer
a scroll-edge fade or tint over a hard divider at a translucent bar's edge.
Translucency is costly to animate (see [dropped frames](motion.md#diagnose-dropped-frames))
and falls back to a solid surface under `prefers-reduced-transparency`,
`prefers-contrast: more` and forced colors. Ordinary cards and panels stay opaque.

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
result. A fade that masks overflow (a scroll-edge fade, a "read more" gradient)
needs several stops with eased alpha, or an eased mask, so the fade is invisible
where it begins; a two-stop linear fade reads as a hard band. Spatial gradient interpolation is distinct from animating a color over
time. See [MDN gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/linear-gradient).

## Design a dark theme

Treat dark as its own scene, not light inverted. Start from who uses it and when
(a dim room, long sessions, a system preference); if nothing but taste asks for
it, follow the system setting and do not over-design. Inverting with
`filter: invert()` breaks images and gradients and is not a theme.

Define the theme at the token owner: primitives stay shared and only the
semantic roles are remapped per theme (surface, text, border, action, status,
focus, disabled), following [change a shared style](shared-ui-patterns.md#change-a-shared-style).
Components keep reading semantic roles; a component that needs a primitive or a
raw value to look right in dark is a missing token.

- **Elevation is lightness.** Cast shadows have little to fall on. Give each
  layer (page, subtle, raised, overlay) a slightly lighter surface and, where
  needed, a faint hairline; keep any shadow soft and only to anchor a floating
  element. A shadow as the sole depth cue reads as a smudge.
- **Avoid the extremes.** A pure `#000` page and `#fff` text produce harsh
  contrast and halation for some readers and leave no darker step below the page.
  Use a near-black surface and an off-white text role, and keep secondary text on
  a defined token rather than `opacity`.
- **Retune accents.** A saturated accent that suits white can vibrate on dark.
  Keep the hue so the brand survives; raise lightness and lower chroma a little,
  then retest status colors (error, success, warning, info) at text and icon
  sizes. A perceptual space such as OKLCH makes this adjustment predictable.
- **Watch the pairs that fail.** Saturated red or blue text on dark, gradient
  text with unpredictable contrast along its length, white borders that compete
  with content, and a disabled state made by halving opacity. Give disabled and
  placeholder text explicit tokens that stay legible.
- **Make focus visible.** A focus ring tuned for light can vanish on dark. Give
  it its own role per theme and tab through every control in both.
- **Handle assets.** Photos may need a softer crop or overlay; stroked or
  `currentColor` icons usually carry over; illustrations, charts, code highlighting
  themes, logos and skeleton placeholders each need a dark counterpart or a check
  that they remain visible on every surface level, including raised cards. Chart
  series keep their meaning and labels per [charts](charts.md).
- **Compensate type only if it looks thin.** Light-on-dark text can look lighter
  and tighter; adjust weight or line height for the theme only after seeing it
  in the shipped face.

Respect `prefers-color-scheme` as the default and offer System, Light and Dark;
persist an explicit choice and apply it before first paint (an early inline
script that sets the theme attribute) so a reload does not flash the other
theme. Declare `color-scheme` so native controls and scrollbars match.

Measure contrast per theme against the actual surface, not once: body text,
large text and UI components, the focus ring against every surface level, and
each status color. Contrast requirements are the same in both themes; see
[color and contrast](interaction-accessibility.md#layout-typography-and-color).
Check forced colors and `prefers-contrast` separately.

Optional helper: the read-only [check-contrast.mjs](../scripts/check-contrast.mjs)
reports WCAG ratio and APCA Lc for hex, `rgb()` or `oklch()` pairs and exits 1 on an
AA failure: `node <skill-dir>/scripts/check-contrast.mjs --fg "#767676" --bg "#fff"`,
with `<skill-dir>` this skill's directory. A project's own contrast check wins, and
APCA is informational.

Check: switch themes with the system setting and the explicit toggle, reload
with each, and inspect every state (hover, focus, disabled, error, skeleton,
overlay) and each image or chart in both themes with no flash and no contrast
loss.

