export default {
  slug: "states",
  name: "States & Feedback",
  tagline: "An interface is never one picture — it's every state it can be in.",
  terms: [
    {
      t: "Hover",
      d: "How an element responds to a pointer resting on it — a lift, a tint, a cursor change. It whispers 'I'm interactive.' Touchscreens never see it, so it can't carry meaning alone.",
      s: "On hover, lift each card 2px with a soft shadow and ease it over 150ms.",
    },
    {
      t: "Focus ring",
      d: "The visible outline on the element that keyboard focus is on. Removing it because it 'looks ugly' strands keyboard users — restyle it instead, ideally with :focus-visible.",
      s: "Style the focus ring as a 2px brand-colored outline with 2px offset — visible on every interactive element.",
    },
    {
      t: "Active state",
      d: "The pressed moment — the instant a control is being clicked or tapped. A slight darken or scale-down makes the interface feel physical rather than filmed.",
      s: "Add an active state to buttons: scale to 0.98 and darken slightly while pressed.",
    },
    {
      t: "Disabled state",
      d: "A control that's visible but inert — dimmed, unclickable, and honest about it. If users won't understand why it's disabled, hide it or explain it in a tooltip.",
      s: "Disable Submit until the form validates, with a tooltip explaining what's missing.",
    },
    {
      t: "Empty state",
      d: "What a screen shows with no data yet — first run, empty search, cleared inbox. The lazy version is a blank void; the good version explains and offers the first action.",
      s: "Design the empty state for Projects: short encouraging line, small illustration, 'Create your first project' button.",
    },
    {
      t: "Error state",
      d: "How the UI behaves when things fail — inline field errors, dead-end pages, failed loads. Say what happened, keep the user's data, and offer a way forward.",
      s: "On failed save, keep the form filled, show an inline error above the actions, and offer Retry.",
    },
    {
      t: "Loading state",
      d: "Everything between action and result: spinners, skeletons, progress bars, disabled-with-spinner buttons. Under ~300ms, show nothing — a flash of spinner reads slower than silence.",
      s: "Show the button's loading spinner only if the request exceeds 300ms, and keep the label visible.",
    },
    {
      t: "Inline validation",
      d: "Checking form fields as the user works instead of ambushing them at submit. Validate on blur, re-validate on change — never scream mid-keystroke.",
      s: "Validate email on blur, show the error under the field, and clear it as soon as it's fixed.",
    },
    {
      t: "Optimistic UI",
      d: "Showing the result immediately and syncing in the background — the like turns red before the server agrees. Instant feel, with a rollback if the request fails.",
      s: "Make favoriting optimistic: update the star instantly, revert with a toast if the request fails.",
    },
    {
      t: "Affordance",
      d: "The visual cues telling you what something does — buttons look pressable, handles look draggable, links look clickable. 'Weak affordance' = 'nobody knows it's a button.'",
      s: "The cards are clickable but don't look it — add affordance: hover lift, cursor pointer, a chevron.",
    },
    {
      t: "Microinteraction",
      d: "A tiny contained moment of feedback — the heart pop, the checkmark drawing itself, the toggle's satisfying slide. Small enough to miss, big enough to make software feel alive.",
      s: "Add a microinteraction to the checkbox: the check draws in over ~200ms with a slight bounce.",
    },
    {
      t: "Debounce",
      d: "Waiting for a pause in input before reacting — search that fires 300ms after the last keystroke instead of on every one. Its sibling throttle limits to a steady maximum rate.",
      s: "Debounce the search input by 300ms so we're not firing a request per keystroke.",
    },
  ],
};
