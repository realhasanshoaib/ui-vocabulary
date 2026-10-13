#!/bin/sh
# Captures screenshots and a recording of one build of the site.
# Usage: capture.sh <base-url> <label> <out-dir>
set -eu

base=$1
label=$2
out=$3
mkdir -p "$out"
export AGENT_BROWSER_SESSION="capture-$label-$$"
trap 'agent-browser record stop >/dev/null 2>&1 || true; agent-browser close >/dev/null 2>&1 || true' EXIT INT TERM

pause() { agent-browser eval "new Promise((done) => setTimeout(() => done(0), $1))" >/dev/null; }
type_slowly() {
  for char in $(printf '%s' "$1" | sed 's/./& /g'); do
    agent-browser keyboard type "$char" >/dev/null
    pause 220
  done
}
to_motion='document.getElementById("motion").scrollIntoView(); window.scrollBy(0, 400); 0'

agent-browser --idle-timeout 1h open "$base" >/dev/null
agent-browser set viewport 1280 800 >/dev/null

# desktop: search "color" from inside the Motion section
agent-browser open "$base" >/dev/null
agent-browser eval "$to_motion" >/dev/null
agent-browser press / >/dev/null
agent-browser keyboard type "color" >/dev/null
pause 600
agent-browser screenshot "$out/$label-desktop-color.png" >/dev/null

# recording: scroll down to Motion, press /, type "color"
agent-browser open "$base" >/dev/null
agent-browser record start "$out/$label.mp4" >/dev/null
pause 900
agent-browser eval 'new Promise((done) => { const end = document.getElementById("motion").getBoundingClientRect().top + scrollY + 400; const t0 = performance.now(); const step = (t) => { const p = Math.min(1, (t - t0) / 1600); window.scrollTo(0, end * (1 - Math.pow(1 - p, 3))); p < 1 ? requestAnimationFrame(step) : done(0); }; requestAnimationFrame(step); })' >/dev/null
pause 900
agent-browser press / >/dev/null
pause 500
type_slowly color
pause 2500
agent-browser record stop >/dev/null

# phone: search "kerning" from the top of the page
agent-browser set viewport 390 844 >/dev/null
agent-browser open "$base" >/dev/null
agent-browser press / >/dev/null
agent-browser keyboard type "kerning" >/dev/null
pause 600
agent-browser screenshot "$out/$label-phone-kerning.png" >/dev/null

ls -la "$out" | grep "$label"
