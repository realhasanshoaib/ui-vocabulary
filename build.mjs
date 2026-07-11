import { mkdir, rm, cp, writeFile } from "node:fs/promises";
import { renderPage, SITE } from "./src/page.mjs";

import layout from "./src/data/layout.mjs";
import typography from "./src/data/typography.mjs";
import color from "./src/data/color.mjs";
import spacing from "./src/data/spacing.mjs";
import components from "./src/data/components.mjs";
import states from "./src/data/states.mjs";
import motion from "./src/data/motion.mjs";
import style from "./src/data/style.mjs";
import principles from "./src/data/principles.mjs";
import systems from "./src/data/systems.mjs";

const categories = [
  layout, typography, color, spacing, components,
  states, motion, style, principles, systems,
];

const dist = new URL("./dist/", import.meta.url);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(new URL("./public/", import.meta.url), dist, { recursive: true });

await writeFile(new URL("index.html", dist), renderPage(categories));

await writeFile(
  new URL("robots.txt", dist),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
);

await writeFile(
  new URL("sitemap.xml", dist),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE.url}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`
);

const total = categories.reduce((n, c) => n + c.terms.length, 0);
console.log(`built dist/ — ${categories.length} categories, ${total} terms`);
