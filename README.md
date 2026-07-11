# ✦ UI Vocabulary

**[ui-vocab.hasanshoaib.com](https://ui-vocab.hasanshoaib.com)** — speak fluent interface.

133 UI and design terms in plain English, each with a **copy-paste prompt you can hand straight to your AI agent**. Because "make it pop" isn't a spec.

## Why

Iterating on UI with AI agents is a language game. "Tighten the leading, mute the neutrals, add a hover lift" lands on the first try; "make it look better" gets you five rounds of *almost*. Models have read decades of design writing — use the exact term and you summon all of it. This site is the working vocabulary: for developers art-directing agents, for designers, and for anyone training their eye.

## What's inside

Ten categories — Layout, Typography, Color, Spacing, Components, States & Feedback, Motion, Visual Style, Principles & Laws, Systems & Process. Every term gets:

- a plain-English definition (what it is, when to use it, when not to)
- a **"Say it"** prompt — a real instruction you'd give an agent, one click to copy

## Stack

Deliberately boring: term data in [`src/data/`](src/data/), a zero-dependency Node script ([`build.mjs`](build.mjs)) that renders fully static HTML into `dist/`, hand-written CSS and vanilla JS. No framework, no build tooling, ships as static assets on Cloudflare Workers.

```sh
node build.mjs        # build into dist/
npx serve dist        # preview locally
wrangler deploy       # ship it
```

## Contributing

Terms live as small data files in `src/data/*.mjs` — one file per category, three fields per term (`t` term, `d` definition, `s` say-it prompt). PRs for new terms, sharper definitions, and better prompts are very welcome. Keep definitions to two sentences and make the prompt something you'd actually say.

## License

[MIT](LICENSE) — fork it, add terms, translate it.

Made by [Hasan Shoaib](https://hasanshoaib.com).
