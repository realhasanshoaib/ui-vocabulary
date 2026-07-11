export default {
  slug: "color",
  name: "Color",
  tagline: "Stop saying \"make it pop.\" Start saying exactly what you mean.",
  terms: [
    {
      t: "Hue",
      d: "The pure color identity — red, teal, violet — independent of how light or intense it is. 'Shift the hue' means move around the color wheel.",
      s: "Keep the same saturation but shift the hue from blue toward teal.",
    },
    {
      t: "Saturation",
      d: "How intense or muted a color is. Fully saturated screams; desaturated whispers. Most 'this looks cheap' feedback is really 'too saturated.'",
      s: "The background feels neon — desaturate it 30% so the CTA is the only vivid thing.",
    },
    {
      t: "Lightness",
      d: "How close a color sits to white or black. A palette usually keeps one hue and steps lightness: 50 for backgrounds down to 900 for text.",
      s: "Generate a 10-step lightness ramp of the brand blue, from a near-white 50 to a near-black 950.",
    },
    {
      t: "Tint & shade",
      d: "A tint is a color mixed with white; a shade is mixed with black. 'A tint of the brand color' is the polite version of a pastel.",
      s: "Use a light tint of the brand purple for the selected row, not full-strength purple.",
    },
    {
      t: "Neutrals",
      d: "The grays doing 90% of the work — text, borders, backgrounds. Slightly warm or cool neutrals give a product its temperature; pure #808080 gray feels dead.",
      s: "Warm up the neutrals — shift the grays slightly toward beige instead of pure gray.",
    },
    {
      t: "Accent color",
      d: "The one vivid color reserved for what matters: primary actions, active states, links. If everything is accented, nothing is.",
      s: "Coral is the accent — use it only for primary buttons and active states, nowhere else.",
    },
    {
      t: "Semantic colors",
      d: "Colors with assigned meaning: green success, red danger, amber warning, blue info. Never repurpose them — a green delete button breaks trust.",
      s: "Add semantic tokens — success, warning, danger, info — and use them for toasts and form states.",
    },
    {
      t: "Contrast ratio",
      d: "The measured luminance difference between text and its background. WCAG asks for 4.5:1 on body text, 3:1 on large text. Not negotiable, and agents can check it.",
      s: "Check every text/background pair against WCAG AA — flag anything under 4.5:1 and fix it.",
    },
    {
      t: "Gradient",
      d: "A smooth blend between colors. Neighboring hues blend cleanly; distant hues can smear through gray in the middle unless you route around it.",
      s: "Give the hero a subtle gradient from violet to blue — nearby hues so it doesn't go muddy.",
    },
    {
      t: "Opacity",
      d: "How see-through something is, from 0 (invisible) to 1 (solid). Overlays, disabled states, and glass effects all live on translucency.",
      s: "Dim the modal backdrop with black at 40% opacity instead of solid gray.",
    },
    {
      t: "OKLCH",
      d: "A modern color space where lightness actually matches human perception — equal lightness values genuinely look equally light. The right basis for generated palettes.",
      s: "Rebuild the palette in OKLCH so every hue at step 500 has identical perceived lightness.",
    },
    {
      t: "Color harmony",
      d: "Schemes built from wheel relationships: analogous (neighbors, calm), complementary (opposites, tension), monochromatic (one hue, safe). Names for vibes.",
      s: "Use an analogous scheme — blues through teals — instead of the current clashing complementary pair.",
    },
  ],
};
