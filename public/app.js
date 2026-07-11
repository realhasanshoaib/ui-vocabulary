// reveal on scroll, staggered per batch
const revealed = new IntersectionObserver(
  (entries) => {
    let i = 0;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.style.setProperty("--stagger", `${Math.min(i++ * 60, 360)}ms`);
      e.target.classList.add("in");
      revealed.unobserve(e.target);
    }
  },
  { rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealed.observe(el));

// copy "say it" prompts
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      return;
    }
    btn.classList.add("copied");
    clearTimeout(btn._t);
    btn._t = setTimeout(() => btn.classList.remove("copied"), 1400);
  });
});

// search
const input = document.getElementById("search");
const status = document.getElementById("search-status");
const noResults = document.getElementById("no-results");
const cards = [...document.querySelectorAll(".card")];
const cats = [...document.querySelectorAll(".cat")];

function applySearch() {
  const q = input.value.trim().toLowerCase();
  document.body.classList.toggle("searching", q.length > 0);
  if (!q) {
    for (const el of [...cards, ...cats]) el.classList.remove("hide");
    status.hidden = true;
    noResults.hidden = true;
    return;
  }
  let hits = 0;
  for (const card of cards) {
    const hit = card.dataset.search.includes(q);
    card.classList.toggle("hide", !hit);
    if (hit) hits++;
  }
  for (const cat of cats) {
    cat.classList.toggle("hide", !cat.querySelector(".card:not(.hide)"));
  }
  status.hidden = false;
  status.textContent = `${hits} ${hits === 1 ? "term matches" : "terms match"} “${input.value.trim()}”`;
  noResults.hidden = hits > 0;
}

input.addEventListener("input", applySearch);

document.getElementById("clear-search").addEventListener("click", () => {
  input.value = "";
  applySearch();
  input.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    input.focus();
  }
  if (e.key === "Escape" && document.activeElement === input) {
    input.value = "";
    applySearch();
    input.blur();
  }
});

// scrollspy for category nav
const navLinks = new Map(
  [...document.querySelectorAll(".cat-nav a")].map((a) => [a.hash.slice(1), a])
);
const spy = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      for (const a of navLinks.values()) a.classList.remove("active");
      const link = navLinks.get(e.target.id);
      if (link) {
        link.classList.add("active");
        link.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    }
  },
  { rootMargin: "-30% 0px -60% 0px" }
);
cats.forEach((c) => spy.observe(c));
