export default {
  slug: "typography",
  name: "Typography",
  tagline: "Ninety percent of interface design is text. Here's how to talk about it.",
  terms: [
    {
      t: "Typeface vs font",
      d: "The typeface is the design (Inter); a font is one specific cut of it (Inter Semibold 16px). Saying either is fine — knowing the difference is the flex.",
      s: "Keep the typeface, but swap the heading font to the semibold cut.",
    },
    {
      t: "Serif",
      d: "Letterforms with small strokes at the ends — bookish, editorial, trustworthy. Pairs beautifully with a clean sans for UI chrome.",
      s: "Set the article body in a serif for warmth, but keep buttons and labels in the sans.",
    },
    {
      t: "Sans-serif",
      d: "Letterforms without the end strokes — clean, neutral, modern. The default voice of almost every interface you've ever used.",
      s: "Use a geometric sans-serif for the whole app — something in the vein of Inter or Geist.",
    },
    {
      t: "Monospace",
      d: "Every character occupies the same width. The voice of code, terminals, and anything technical — instant developer credibility.",
      s: "Render the API keys and code snippets in monospace with a subtle background tint.",
    },
    {
      t: "Font weight",
      d: "The thickness of strokes, from thin (100) to black (900). Weight contrast — bold heading, regular body — is the cheapest hierarchy you can buy.",
      s: "Drop the headings from bold to semibold — 700 feels shouty at this size.",
    },
    {
      t: "Line height",
      d: "Vertical space each line of text occupies, classically called leading. Body text wants roughly 1.5; big headings tighten to 1.1 or so.",
      s: "The paragraph feels cramped — bump line height to 1.6. Tighten the h1 to 1.1.",
    },
    {
      t: "Letter spacing",
      d: "Horizontal space between all letters, a.k.a. tracking. Big display text usually tightens; ALL-CAPS labels need extra to stay legible.",
      s: "Add letter spacing to the uppercase section labels — about 0.08em — and tighten the hero headline slightly.",
    },
    {
      t: "Kerning",
      d: "Spacing between one specific pair of letters, like the awkward gap in 'AV'. Mostly the typeface's job, but worth naming when a logo looks off.",
      s: "The 'To' pair in the logo wordmark has a gap — fix the kerning there specifically.",
    },
    {
      t: "Measure",
      d: "The length of a line of text. Around 45–75 characters is comfortable; full-width paragraphs on desktop are a readability crime.",
      s: "Cap the article measure at 65 characters — max-width around 65ch on the prose container.",
    },
    {
      t: "Type scale",
      d: "A fixed ramp of font sizes (12, 14, 16, 20, 25, 31…) generated from a ratio. Picking from a scale beats inventing sizes ad hoc every time.",
      s: "Define a type scale with a 1.25 ratio from a 16px base and use only those steps.",
    },
    {
      t: "Baseline",
      d: "The invisible line letters sit on. Aligning text to a shared baseline — not vertically centering boxes — is what makes mixed sizes look intentional.",
      s: "The price and the '/month' label should share a baseline, not be center-aligned.",
    },
    {
      t: "Tabular figures",
      d: "Digits that all share the same width, so numbers align in columns and don't jitter when they update. Essential for tables, timers, and prices.",
      s: "Use tabular figures in the stats column — font-variant-numeric: tabular-nums — so the digits stop dancing.",
    },
    {
      t: "Truncation",
      d: "Cutting text off with an ellipsis when it can't fit. Fine for titles in tight lists; hostile when it hides the only distinguishing words.",
      s: "Truncate file names to one line with an ellipsis, and show the full name in a tooltip.",
    },
    {
      t: "Widows & orphans",
      d: "A lone word stranded on its own line (widow) or a lone line stranded at a break (orphan). One word dangling under a headline reads as unfinished.",
      s: "The headline leaves the word 'faster' widowed on its own line — use text-wrap: balance.",
    },
  ],
};
