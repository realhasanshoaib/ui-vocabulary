const SITE = {
  url: "https://ui-vocab.hasanshoaib.com",
  title: "UI Vocabulary — Speak fluent interface",
  description:
    "133 UI and design terms in plain English, each with a copy-paste prompt for your AI agent. The vocabulary that turns \"make it pop\" into a real spec.",
  repo: "https://github.com/hhushhas/ui-vocabulary",
  author: "Hasan Shoaib",
  authorUrl: "https://hasanshoaib.com",
};

const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const slugify = (s) =>
  s.toLowerCase().replaceAll("&", "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const num = (i) => String(i + 1).padStart(2, "0");

function termCard(term, catSlug) {
  const id = `${catSlug}-${slugify(term.t)}`;
  const search = esc(`${term.t} ${term.d} ${term.s}`.toLowerCase());
  return `
        <article class="card" id="${id}" data-search="${search}">
          <h3 class="card-term">${esc(term.t)}</h3>
          <p class="card-def">${esc(term.d)}</p>
          <div class="card-say">
            <div class="say-body">
              <span class="say-label">Say it</span>
              <p class="say-text">${esc(term.s)}</p>
            </div>
            <button class="copy-btn" type="button" data-copy="${esc(term.s)}" aria-label="Copy prompt: ${esc(term.t)}">
              <svg class="ic-copy" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <svg class="ic-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            </button>
          </div>
        </article>`;
}

function categorySection(cat, i) {
  return `
    <section class="cat" id="${cat.slug}" style="--cat: var(--cat-${i + 1})" aria-labelledby="h-${cat.slug}">
      <header class="cat-head">
        <div class="cat-title">
          <span class="cat-num" aria-hidden="true">${num(i)}</span>
          <h2 id="h-${cat.slug}">${esc(cat.name)}</h2>
          <span class="cat-count">${cat.terms.length} terms</span>
        </div>
        <p class="cat-tag">${esc(cat.tagline)}</p>
      </header>
      <div class="grid">${cat.terms.map((t) => termCard(t, cat.slug)).join("")}
      </div>
    </section>`;
}

function jsonLd(categories) {
  const terms = categories.flatMap((c) =>
    c.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.t,
      description: t.d,
      url: `${SITE.url}/#${c.slug}-${slugify(t.t)}`,
    }))
  );
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "UI Vocabulary",
    description: SITE.description,
    url: SITE.url,
    author: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
    hasDefinedTerm: terms,
  });
}

export function renderPage(categories) {
  const total = categories.reduce((n, c) => n + c.terms.length, 0);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(SITE.title)}</title>
  <meta name="description" content="${esc(SITE.description)}">
  <meta name="author" content="${esc(SITE.author)}">
  <link rel="canonical" href="${SITE.url}/">
  <meta name="theme-color" content="#FFF8EE">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE.url}/">
  <meta property="og:title" content="${esc(SITE.title)}">
  <meta property="og:description" content="${esc(SITE.description)}">
  <meta property="og:image" content="${SITE.url}/og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(SITE.title)}">
  <meta name="twitter:description" content="${esc(SITE.description)}">
  <meta name="twitter:image" content="${SITE.url}/og.png">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${jsonLd(categories)}</script>
</head>
<body>
  <a class="skip-link" href="#vocab">Skip to the vocabulary</a>

  <header class="topbar">
    <a class="wordmark" href="/" aria-label="UI Vocabulary home">
      <span class="wordmark-spark" aria-hidden="true">✦</span>ui<b>vocab</b>
    </a>
    <div class="topbar-search">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input id="search" type="search" placeholder="Search ${total} terms…" aria-label="Search terms" autocomplete="off">
      <kbd aria-hidden="true">/</kbd>
    </div>
    <a class="gh-link" href="${SITE.repo}" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
      <span>GitHub</span>
    </a>
  </header>

  <main>
    <section class="hero">
      <p class="hero-kicker">A field guide for people who build with AI agents</p>
      <h1>Speak fluent<br><em>interface.</em></h1>
      <p class="hero-sub">${total} design terms in plain English — each with a prompt you can hand straight to your agent. Because <span class="strike">“make it pop”</span> isn’t a spec.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#vocab">Browse the vocabulary</a>
        <a class="btn btn-ghost" href="${SITE.repo}" target="_blank" rel="noopener">View source</a>
      </div>
    </section>

    <section class="why" aria-label="Why vocabulary matters">
      <div class="why-card" style="--cat: var(--cat-2)">
        <span class="why-num" aria-hidden="true">01</span>
        <h2>Precision beats vibes</h2>
        <p>“Tighten the leading, mute the neutrals, soften the shadows” lands on the first try. “Make it cleaner” gets you five rounds of almost. Naming the thing <em>is</em> the skill.</p>
      </div>
      <div class="why-card" style="--cat: var(--cat-4)">
        <span class="why-num" aria-hidden="true">02</span>
        <h2>Agents know these words</h2>
        <p>Models have read decades of design writing. Use the exact term and you summon all of it — the conventions, the ratios, the edge cases — without explaining a thing.</p>
      </div>
      <div class="why-card" style="--cat: var(--cat-3)">
        <span class="why-num" aria-hidden="true">03</span>
        <h2>Taste is trainable</h2>
        <p>Once you can name what you’re looking at, you can’t unsee it. Vocabulary is how “something feels off” becomes “the vertical rhythm is broken” — and then a fix.</p>
      </div>
    </section>

    <nav class="cat-nav" id="vocab" aria-label="Categories">${categories
      .map((c, i) => `
      <a href="#${c.slug}" style="--cat: var(--cat-${i + 1})"><i aria-hidden="true"></i>${esc(c.name)}</a>`)
      .join("")}
    </nav>

    <p class="search-status" id="search-status" role="status" hidden></p>
    <div class="no-results" id="no-results" hidden>
      <p class="no-results-big" aria-hidden="true">∅</p>
      <p>No matches. Fittingly, this is an <strong>empty state</strong> — a screen’s chance to explain itself instead of going blank.</p>
      <button class="btn btn-ghost" type="button" id="clear-search">Clear search</button>
    </div>
${categories.map(categorySection).join("\n")}
  </main>

  <footer class="footer">
    <p><strong>UI Vocabulary</strong> is open source under MIT — <a href="${SITE.repo}" target="_blank" rel="noopener">fork it, add terms, translate it</a>.</p>
    <p>Made by <a href="${SITE.authorUrl}" target="_blank" rel="noopener">${esc(SITE.author)}</a>, with an agent that knows what a focus ring is.</p>
  </footer>

  <script src="/app.js" defer></script>
</body>
</html>
`;
}

export { SITE };
