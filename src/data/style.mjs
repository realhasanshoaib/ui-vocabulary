export default {
  slug: "style",
  name: "Visual Style",
  tagline: "The aesthetic layer — and the names of the looks you're borrowing from.",
  terms: [
    {
      t: "Border radius",
      d: "How rounded corners are. Sharp reads serious and editorial; mid (8–16px) reads friendly SaaS; full-round pills read playful. Pick a radius scale and stay loyal to it.",
      s: "Standardize radii: 8px inputs, 12px cards, fully rounded pill buttons — nothing in between.",
    },
    {
      t: "Elevation",
      d: "Simulated height above the page, expressed with shadows: cards low, dropdowns middle, modals top. A consistent elevation ramp keeps depth believable.",
      s: "Define three elevation levels — card, dropdown, modal — and stop hand-rolling shadows per component.",
    },
    {
      t: "Drop shadow",
      d: "The shadow itself. Good ones are soft, layered, and barely-there — often two stacked shadows. Harsh dark offsets are the fastest way to look dated (unless you're doing neubrutalism on purpose).",
      s: "Soften the card shadow — layer two: 0 1px 2px at 6% black and 0 8px 24px at 8%.",
    },
    {
      t: "Stroke",
      d: "Designer-speak for a border or outline. Hairline strokes separate without weight; 'stroke instead of shadow' is a common flat-design trade.",
      s: "Drop the card shadows and use a 1px hairline stroke in the border neutral instead.",
    },
    {
      t: "Glassmorphism",
      d: "Frosted-glass surfaces: translucent fill, backdrop blur, a light edge stroke. Gorgeous over colorful backgrounds, invisible over white, and a contrast hazard over busy ones.",
      s: "Make the sticky nav glassmorphic — semi-transparent white with backdrop-filter: blur(12px).",
    },
    {
      t: "Neubrutalism",
      d: "Loud, raw, and proud: thick black strokes, hard offset shadows, unapologetic saturated fills, visible structure. A deliberate rejection of soft-and-safe SaaS polish.",
      s: "Style the CTA neubrutalist: 3px black border, hard 4px offset shadow, flat yellow fill.",
    },
    {
      t: "Skeuomorphism",
      d: "Digital things imitating physical ones — leather calendars, realistic knobs. Mostly historical, but its ghost lives on in every 'pressed' button and raised card.",
      s: "Give the audio controls a lightly skeuomorphic feel — subtle knob shading, not full 2010 leather.",
    },
    {
      t: "Flat design",
      d: "The reaction to skeuomorphism: no gradients, no shadows, pure color and typography. Clean but affordance-poor — 'flat 2.0' quietly re-added soft shadows so buttons look pressable again.",
      s: "Keep the illustration style flat, but allow soft shadows on interactive elements for affordance.",
    },
    {
      t: "Grain",
      d: "Subtle noise texture over flat colors and gradients. Kills the sterile 'default CSS' smoothness, adds a tactile, printed feel — and hides gradient banding for free.",
      s: "Overlay a fine grain at ~3% opacity on the hero gradient to keep it from feeling plasticky.",
    },
    {
      t: "Bento grid",
      d: "A dashboard-style mosaic of rounded tiles in mixed sizes, like a bento box — the dominant 2020s pattern for feature sections and portfolio highlights.",
      s: "Lay out the features as a bento grid: one 2×2 hero tile, the rest filling 1×1 around it.",
    },
    {
      t: "Icon style",
      d: "Icons come in families — outline, filled, duotone — with a shared stroke width and grid. Mixing families is the visual equivalent of mixing fonts mid-sentence.",
      s: "Use one icon family throughout — outline style, 1.5px stroke, 24px grid. Replace the strays.",
    },
    {
      t: "Visual weight",
      d: "How strongly an element pulls the eye — a product of size, color, contrast, and density. Balancing weight across a layout is what 'it feels lopsided' is actually about.",
      s: "The left column feels heavier — the dark image outweighs the text. Rebalance or crop it lighter.",
    },
  ],
};
