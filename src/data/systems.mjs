export default {
  slug: "systems",
  name: "Systems & Process",
  tagline: "The vocabulary of how design work is actually organized and shipped.",
  terms: [
    {
      t: "Design system",
      d: "The complete kit a product is built from: components, tokens, patterns, and the rules for using them. Material and Apple's HIG are famous ones; serious products grow their own.",
      s: "Follow the existing design system — reuse its components and tokens; don't invent new variants.",
    },
    {
      t: "Design tokens",
      d: "Design decisions stored as named variables — color-accent, space-4, radius-card — instead of hardcoded values. Change the token, change the product. The API between design and code.",
      s: "Extract the hardcoded colors and spacing into design tokens as CSS custom properties, then reference only tokens.",
    },
    {
      t: "Component library",
      d: "The implemented, reusable building blocks — the code half of a design system. Radix, shadcn/ui, and Material UI are the ones your agent already knows by heart.",
      s: "Build the form from our component library — no one-off inputs or buttons.",
    },
    {
      t: "Style guide",
      d: "The documented rules of a brand's look and voice: logo usage, palette, type, tone. Narrower than a design system — rules on paper rather than parts in code.",
      s: "Write a one-page style guide: palette with hex values, type scale, radius and shadow rules, voice notes.",
    },
    {
      t: "Wireframe",
      d: "A deliberately unstyled sketch of structure — boxes and labels, no colors, no fonts. Low fidelity is the point: nobody debates button shades while the layout is still in question.",
      s: "Before styling anything, wireframe the dashboard — grayscale boxes showing placement and hierarchy only.",
    },
    {
      t: "Mockup",
      d: "A static, high-fidelity picture of the final design — real colors, type, and content, but nothing clickable. The step between wireframe and prototype.",
      s: "Turn the approved wireframe into a full mockup with the brand palette and real copy.",
    },
    {
      t: "Prototype",
      d: "A clickable simulation of the flow, wired together before the real build. With agents, working HTML prototypes are often cheaper than fake ones — prototype in code.",
      s: "Make a clickable prototype of onboarding — three linked screens, fake data is fine.",
    },
    {
      t: "Information architecture",
      d: "How content is named, grouped, and nested — the sitemap and the navigation's logical skeleton. When users say 'I can't find anything,' this is what's broken.",
      s: "Rework the IA: flatten settings from four levels to two and group by user goal, not by internal team.",
    },
    {
      t: "User flow",
      d: "The step-by-step path through a task — every screen, decision, and dead end from entry to done. Map it before building it; every extra step sheds users.",
      s: "Map the checkout flow end to end, count the steps, and cut it from six to four.",
    },
    {
      t: "Atomic design",
      d: "Brad Frost's hierarchy for composing interfaces: atoms (button) → molecules (search bar) → organisms (header) → templates → pages. A shared language for component granularity.",
      s: "Structure the components atomically — build the button and input atoms first, then compose the search molecule.",
    },
    {
      t: "Semantic HTML",
      d: "Using elements for their meaning — nav, main, button, h1 — not divs styled to fake it. Free accessibility, free SEO, and the difference between markup and div soup.",
      s: "Replace the div soup with semantic HTML — real buttons, nav/main/footer landmarks, one h1, ordered heading levels.",
    },
    {
      t: "ARIA",
      d: "Attributes that tell assistive tech what custom widgets are and are doing — roles, labels, live regions. Rule one: prefer native elements; no ARIA beats bad ARIA.",
      s: "Make the custom dropdown screen-reader friendly: proper ARIA roles, aria-expanded, and keyboard navigation.",
    },
  ],
};
