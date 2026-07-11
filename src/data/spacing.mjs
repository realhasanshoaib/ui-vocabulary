export default {
  slug: "spacing",
  name: "Spacing & Sizing",
  tagline: "The difference between polished and cluttered is usually measured in pixels of air.",
  terms: [
    {
      t: "Padding",
      d: "Space inside an element, between its edge and its content. Cramped buttons and suffocating cards are padding problems.",
      s: "The cards feel airless — increase padding to 24px on all sides.",
    },
    {
      t: "Margin",
      d: "Space outside an element, pushing neighbors away. Padding is personal space inside the jacket; margin is distance from the next person.",
      s: "Add more margin below each section — they're visually merging into one another.",
    },
    {
      t: "Gap",
      d: "Uniform spacing between siblings in a flex or grid container. One gap value beats a margin on every child — cleaner and no leftover edge spacing.",
      s: "Drop the per-item margins and use gap: 16px on the grid instead.",
    },
    {
      t: "Inset",
      d: "Shorthand for an element's distance from its container's edges, most often with absolute positioning. 'Inset by 16px' pins it 16px from every side.",
      s: "Position the close button inset 12px from the card's top-right corner.",
    },
    {
      t: "Spacing scale",
      d: "A fixed menu of spacing values — 4, 8, 12, 16, 24, 32, 48, 64 — used everywhere. Arbitrary values like 13px and 27px are how inconsistency creeps in.",
      s: "Snap all margins and padding to the 4px-based spacing scale — no arbitrary values.",
    },
    {
      t: "8-point grid",
      d: "A convention where sizes and spaces are multiples of 8 (with 4 for fine detail). It makes independent screens feel like one product.",
      s: "Audit the settings page against the 8-point grid and round any stray values to it.",
    },
    {
      t: "Vertical rhythm",
      d: "Consistent, proportional spacing down the page — headings, paragraphs, and sections stepping in a predictable beat. When it's off, pages feel randomly assembled.",
      s: "The vertical rhythm is off — make space above each h2 double the space below it, consistently.",
    },
    {
      t: "Optical alignment",
      d: "Nudging things until they look aligned rather than trusting the math. Play icons in circular buttons and quote marks in headings always need it.",
      s: "The play icon looks off-center in the circle — optically align it by nudging it 1–2px right.",
    },
    {
      t: "Touch target",
      d: "The tappable area around a control — at least 44×44px, whatever the icon's visual size. Tiny close buttons with tiny hitboxes are rage-inducing.",
      s: "The icon can stay 16px, but expand its touch target to 44px with padding.",
    },
    {
      t: "Hug vs fill",
      d: "Figma-born sizing vocabulary: an element either hugs its content's size or fills the space its parent offers. Perfect shorthand for describing intent.",
      s: "Buttons should hug their label text; the search input should fill the remaining row width.",
    },
    {
      t: "Fluid sizing",
      d: "Values that scale smoothly with the viewport between a floor and a ceiling — usually via clamp(). Type that resizes gracefully instead of jumping at breakpoints.",
      s: "Make the hero heading fluid — clamp between 36px on mobile and 72px on desktop.",
    },
  ],
};
