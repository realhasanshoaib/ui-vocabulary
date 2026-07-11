export default {
  slug: "layout",
  name: "Layout & Structure",
  tagline: "How a screen is carved up before a single pixel gets styled.",
  terms: [
    {
      t: "Grid",
      d: "An invisible system of columns and rows that everything on the page snaps to. Grids are why good layouts feel calm even when they're busy.",
      s: "Lay the features out on a 12-column grid — cards span 4 columns each on desktop.",
    },
    {
      t: "Gutter",
      d: "The gap between grid columns. Wider gutters feel airy and editorial; tight gutters feel dense and data-heavy.",
      s: "Widen the gutters to 32px — the columns are bleeding into each other.",
    },
    {
      t: "Breakpoint",
      d: "A viewport width where the layout changes — columns collapse, nav becomes a menu, type scales down. Design the content, then let breakpoints follow.",
      s: "Add a breakpoint around 768px where the sidebar collapses into a top bar.",
    },
    {
      t: "Viewport",
      d: "The visible area of the browser window. Units like vw and vh size things relative to it — useful for heroes, dangerous for text.",
      s: "Make the hero fill the viewport height, but cap it so it doesn't stretch on huge monitors.",
    },
    {
      t: "Above the fold",
      d: "What's visible before any scrolling, borrowed from newspaper layouts. Your value proposition and primary action belong here.",
      s: "The signup CTA is below the fold on a laptop — pull it up into the hero.",
    },
    {
      t: "Whitespace",
      d: "Empty space used on purpose — also called negative space. It isn't wasted room; it's what gives elements breathing space and importance.",
      s: "Don't add more content — add whitespace. Double the space around the pricing table.",
    },
    {
      t: "Alignment",
      d: "Elements sharing an invisible edge or axis. Even a few pixels of misalignment reads as sloppy long before anyone can say why.",
      s: "Left-align the icon, heading, and body text in each card — they're all off by a few pixels.",
    },
    {
      t: "Aspect ratio",
      d: "The proportional relationship of width to height, like 16:9 or 1:1. Locking it stops images and video from stretching or jumping as they load.",
      s: "Force the thumbnails to a 4:3 aspect ratio and crop with object-fit: cover.",
    },
    {
      t: "Full-bleed",
      d: "Content that runs edge-to-edge, ignoring the page's side margins. Great for hero images and section backgrounds that need drama.",
      s: "Make the testimonial band full-bleed while keeping its text inside the content column.",
    },
    {
      t: "Sticky",
      d: "An element that scrolls with the page until it hits an edge, then pins there. Used for navs, table headers, and section labels.",
      s: "Make the table header sticky so the column labels stay visible while scrolling rows.",
    },
    {
      t: "Stacking order",
      d: "Which elements sit on top of which — controlled by z-index. Dropdowns behind modals and tooltips under headers are stacking bugs.",
      s: "The dropdown is rendering underneath the sticky header — fix the stacking order.",
    },
    {
      t: "Masonry",
      d: "A grid where items of varying heights pack tightly like brickwork, Pinterest-style. Good for image feeds, chaotic for scannable content.",
      s: "Switch the gallery to a masonry layout so tall and short images pack together without gaps.",
    },
    {
      t: "Density",
      d: "How much information fits in a given area. Dashboards want compact density; marketing pages want comfortable. Pick one per surface, deliberately.",
      s: "This table is for power users — increase the density: tighter row height, smaller padding.",
    },
    {
      t: "Split layout",
      d: "The screen divided into two persistent panes — often a list on the left, detail on the right. The backbone of mail clients and settings pages.",
      s: "Use a split layout: conversation list at 320px on the left, the thread fills the rest.",
    },
  ],
};
