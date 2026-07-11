export default {
  slug: "motion",
  name: "Motion",
  tagline: "Animation is seasoning: measured in milliseconds, ruined by excess.",
  terms: [
    {
      t: "Duration",
      d: "How long an animation runs. UI motion lives between 100–400ms — hovers near 150ms, panels near 300ms. Anything approaching a second better be a showpiece.",
      s: "The drawer feels sluggish — cut the open animation from 500ms to 250ms.",
    },
    {
      t: "Easing",
      d: "The acceleration curve of motion. Linear reads robotic; real objects speed up and slow down. Easing is the single biggest 'this feels cheap vs. premium' lever.",
      s: "Nothing should animate linearly — apply an ease-out curve like cubic-bezier(0.16, 1, 0.3, 1) across the board.",
    },
    {
      t: "Ease-out vs ease-in",
      d: "Ease-out starts fast and settles — right for things entering, since the UI responds instantly. Ease-in starts slow and accelerates — occasionally right for exits, mostly just laggy-feeling.",
      s: "Menus should ease-out on open so they feel snappy, and can ease-in slightly on close.",
    },
    {
      t: "Spring",
      d: "Physics-based motion defined by stiffness and damping instead of duration. A touch of springiness feels alive; too little damping turns your UI into a bobblehead.",
      s: "Animate the modal in with a spring — noticeably bouncy is too much, just a hint of overshoot.",
    },
    {
      t: "Transition",
      d: "Animating a property between two states — background on hover, height on expand. The declarative workhorse: define what animates, how long, and with which curve.",
      s: "Add a 200ms ease-out transition on background and border-color for all interactive elements.",
    },
    {
      t: "Keyframes",
      d: "Named waypoints an animation passes through, for motion more choreographed than A-to-B — pulses, shakes, orbits. The head-shake 'no' on a wrong password is keyframes.",
      s: "On failed login, shake the form with keyframes — three quick 4px oscillations, then settle.",
    },
    {
      t: "Stagger",
      d: "Starting siblings' animations a few dozen milliseconds apart so a list cascades in instead of thudding in as a block. Cheap choreography, expensive feel.",
      s: "Stagger the cards' entrance by 50ms each so the grid cascades in from the top.",
    },
    {
      t: "Enter & exit",
      d: "The paired animations for things appearing and disappearing. Exits should be faster than entrances — users are done with it; get it out of the way.",
      s: "Toast enters over 250ms with ease-out, exits in 150ms. Never let it just pop out of existence.",
    },
    {
      t: "Parallax",
      d: "Layers scrolling at different speeds to fake depth. A few percent of drift adds dimension; aggressive parallax is a 2013 time capsule and a motion-sickness trigger.",
      s: "Give the hero illustration a subtle parallax — background drifts at 20% of scroll speed, no more.",
    },
    {
      t: "Shimmer",
      d: "The light sweep across skeleton placeholders that says 'still loading, not frozen.' One slow, subtle pass — a strobing shimmer is worse than none.",
      s: "Add a shimmer to the skeletons: a soft highlight sweeping left to right every 1.5s.",
    },
    {
      t: "Reduced motion",
      d: "An OS-level accessibility setting requesting minimal animation. Respect it via prefers-reduced-motion: swap movement for opacity fades. Non-optional in polished work.",
      s: "Wrap all motion in a prefers-reduced-motion check — fall back to simple fades.",
    },
  ],
};
