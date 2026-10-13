// Runs the search-position check in WebKit (the engine in Safari) and Firefox.
// Usage: NODE_PATH=$(npm root -g) node measure-engines.cjs <base-url>
// Needs Playwright with both engines: `playwright install webkit firefox`.
const { webkit, firefox } = require("playwright");

const base = process.argv[2];
const sizes = [
  { width: 1280, height: 800 },
  { width: 390, height: 844 },
];
const queries = ["kerning", "shadow", "color"];

const probe = () => {
  const bars = document.querySelector(".cat-nav").getBoundingClientRect().bottom;
  const status = document.getElementById("search-status").getBoundingClientRect();
  const first = document.querySelector(".card:not(.hide)").getBoundingClientRect();
  const visible = (rect) => rect.top >= bars && rect.top < innerHeight;
  return { count: visible(status), first: visible(first), gap: Math.round(status.top - bars) };
};

(async () => {
  console.log("engine\tsize\tstart\tquery\tcount_line_visible\tfirst_match_visible\tgap_px");
  for (const [name, engine] of Object.entries({ webkit, firefox })) {
    const browser = await engine.launch();
    try {
      for (const size of sizes) {
        const page = await browser.newPage({ viewport: size });
        for (const start of ["top", "motion"]) {
          for (const query of queries) {
            await page.goto(base);
            if (start === "motion") {
              await page.evaluate(() => {
                document.getElementById("motion").scrollIntoView();
                window.scrollBy(0, 400);
              });
            }
            await page.keyboard.press("/");
            await page.keyboard.type(query);
            await page.waitForTimeout(500);
            const result = await page.evaluate(probe);
            console.log(
              [name, `${size.width}x${size.height}`, start, query, result.count ? "yes" : "no", result.first ? "yes" : "no", result.gap].join("\t"),
            );
          }
        }
        await page.close();
      }
    } finally {
      await browser.close();
    }
  }
})();
