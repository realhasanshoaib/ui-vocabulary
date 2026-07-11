export default {
  slug: "principles",
  name: "Principles & Laws",
  tagline: "The psychology underneath — why some interfaces just work.",
  terms: [
    {
      t: "Visual hierarchy",
      d: "The order the eye visits things, engineered with size, weight, color, and position. If everything is emphasized, the hierarchy is flat and nothing is.",
      s: "Establish hierarchy: headline dominant, price second, metadata clearly third. Right now they all shout equally.",
    },
    {
      t: "Proximity",
      d: "Gestalt principle: things placed close together are perceived as related. Group with space before you reach for borders and boxes.",
      s: "Use proximity instead of dividers — tighten spacing within each field group, widen it between groups.",
    },
    {
      t: "Similarity",
      d: "Gestalt principle: things that look alike are perceived as belonging together. It's also why all links must look the same — one styled differently reads as a different kind of thing.",
      s: "All secondary actions should share one style — right now three different treatments imply three different meanings.",
    },
    {
      t: "Consistency",
      d: "Same pattern, same look, same behavior, everywhere. Every inconsistency is a tiny tax on the user's attention — and the main thing design review exists to catch.",
      s: "Audit the app for consistency: one date format, one save pattern, one confirmation style throughout.",
    },
    {
      t: "Progressive disclosure",
      d: "Show the essentials, put the rest behind 'Advanced.' Complexity should be available, not ambient.",
      s: "Show only name and visibility by default — move the other eight fields behind an 'Advanced settings' disclosure.",
    },
    {
      t: "Fitts's law",
      d: "Bigger and closer targets are faster to hit. It's why primary buttons are large, why context menus appear at the cursor, and why screen corners and edges are prime real estate.",
      s: "Per Fitts's law, make the primary CTA bigger and move it adjacent to the input, not across the layout.",
    },
    {
      t: "Hick's law",
      d: "More choices, slower decisions. Every option you add taxes every user who didn't need it. The justification behind short menus, defaults, and progressive disclosure.",
      s: "Twelve plans is a Hick's law violation — show three tiers and link to a full comparison.",
    },
    {
      t: "Jakob's law",
      d: "Users spend most of their time on other sites, so they expect yours to work the same way. Logo top-left goes home, cart top-right. Spend novelty on your product, not your navigation.",
      s: "Keep the checkout flow conventional per Jakob's law — this is not the place to innovate.",
    },
    {
      t: "Cognitive load",
      d: "The mental effort a screen demands — parsing, remembering, deciding. Every element, option, and inconsistency adds load. Simplicity is measured here, not in element count.",
      s: "Reduce cognitive load on this form: group related fields, add sensible defaults, cut the two optional questions.",
    },
    {
      t: "Scanning patterns",
      d: "Eyes sweep text-heavy pages in an F (down the left edge) and simpler layouts in a Z. Put what matters along the path — the top-left is gold, the mid-right is Siberia.",
      s: "Restructure for F-pattern scanning: front-load keywords into headings and lead sentences down the left edge.",
    },
    {
      t: "Call to action",
      d: "The action you most want taken — 'Start free trial,' not 'Submit.' One primary CTA per view, phrased as the value, visually unmissable.",
      s: "There are three competing CTAs above the fold — keep 'Start building,' demote the rest to links.",
    },
    {
      t: "Accessibility",
      d: "Designing so people with different vision, motor ability, and cognition can actually use the thing — contrast, keyboard support, screen-reader semantics, motion respect. Abbreviated a11y. Not a feature; a floor.",
      s: "Run an accessibility pass: contrast to WCAG AA, full keyboard operability, alt text, visible focus states.",
    },
  ],
};
