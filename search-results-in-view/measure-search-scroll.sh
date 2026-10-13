#!/bin/sh
# Measures where search results land after a search typed from a scrolled position.
# Usage: measure-search-scroll.sh <base-url> <width> <height>
# Needs agent-browser (https://github.com/vercel-labs/agent-browser) and a built copy of the site at <base-url>.
set -eu

base=$1
width=$2
height=$3
export AGENT_BROWSER_SESSION="search-scroll-$$"
trap 'agent-browser close >/dev/null 2>&1 || true' EXIT INT TERM

probe='(() => {
  const bars = document.querySelector(".cat-nav").getBoundingClientRect().bottom;
  const status = document.getElementById("search-status").getBoundingClientRect();
  const cards = [...document.querySelectorAll(".card:not(.hide)")];
  const first = cards[0] ? cards[0].getBoundingClientRect() : null;
  const visible = (r) => r.top >= bars && r.top < innerHeight;
  return [
    Math.round(status.top - bars),
    visible(status) ? "yes" : "no",
    first ? Math.round(first.top - bars) : "none",
    first && visible(first) ? "yes" : "no",
  ].join("\t");
})()'

agent-browser --idle-timeout 1h open "$base" >/dev/null
agent-browser set viewport "$width" "$height" >/dev/null

printf 'start\tquery\tcount_line_px_below_bars\tcount_line_visible\tfirst_match_px_below_bars\tfirst_match_visible\n'
for start in top motion; do
  for query in kerning shadow color; do
    agent-browser open "$base" >/dev/null
    if [ "$start" = motion ]; then
      agent-browser eval 'document.getElementById("motion").scrollIntoView(); window.scrollBy(0, 400); 0' >/dev/null
    fi
    agent-browser press / >/dev/null
    agent-browser keyboard type "$query" >/dev/null
    # the category scrollspy adjusts the scroll position one frame later, so measure the settled page
    agent-browser eval 'new Promise((done) => setTimeout(() => done(0), 500))' >/dev/null
    printf '%s\t%s\t%s\n' "$start" "$query" "$(agent-browser eval "$probe" | tr -d '"' | sed 's/\\t/\t/g')"
  done
done
