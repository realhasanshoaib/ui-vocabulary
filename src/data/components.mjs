export default {
  slug: "components",
  name: "Components",
  tagline: "Name the part and the agent builds the right thing on the first try.",
  terms: [
    {
      t: "Button hierarchy",
      d: "Primary (solid, one per view), secondary (outlined or tinted), and tertiary/ghost (text only). The ranking tells users what you want them to do.",
      s: "Make 'Save' the solid primary, 'Preview' a secondary outline, and 'Cancel' a ghost button.",
    },
    {
      t: "Destructive action",
      d: "An action that deletes or irreversibly changes something — styled in the danger color and never placed where muscle memory expects 'confirm.'",
      s: "Style 'Delete workspace' as destructive — red, separated from the other actions, with a confirm step.",
    },
    {
      t: "Badge",
      d: "A tiny status label — a count on an icon, 'New' on a menu item, 'Beta' on a feature. Chips and pills are its interactive, often dismissible cousins.",
      s: "Add a small 'Beta' badge next to the Insights nav item — subtle, not screaming.",
    },
    {
      t: "Card",
      d: "A contained surface grouping related content — image, title, meta, action — that reads as one unit. The workhorse of every dashboard and feed.",
      s: "Show each project as a card: thumbnail on top, name, last-edited, and a kebab menu.",
    },
    {
      t: "Modal",
      d: "A dialog that blocks the page until dismissed. Reserve it for focused decisions; if the user might need the page behind it, use something non-blocking.",
      s: "Open the export options in a modal with a clear primary action and an escape hatch.",
    },
    {
      t: "Drawer",
      d: "A panel that slides in from an edge — 'sheet' on mobile. Keeps page context visible, so it beats a modal for details, filters, and settings.",
      s: "Show task details in a right-side drawer instead of navigating away from the board.",
    },
    {
      t: "Popover",
      d: "A small floating panel anchored to the element that opened it, dismissed by clicking elsewhere. Richer than a tooltip, lighter than a modal.",
      s: "Put the date-range picker in a popover anchored to the filter button.",
    },
    {
      t: "Tooltip",
      d: "A short text hint on hover or focus. For labels and clarifications only — never for content someone can't get on a touchscreen.",
      s: "Add tooltips to the icon-only toolbar buttons, delayed about 500ms so they don't flicker.",
    },
    {
      t: "Toast",
      d: "A brief, self-dismissing notification sliding in from a screen edge — also called a snackbar. Confirmation, not conversation; add an undo when possible.",
      s: "On archive, fire a toast: 'Conversation archived' with an Undo action, auto-dismiss in 5s.",
    },
    {
      t: "Select",
      d: "A dropdown for choosing one option from a closed list. Under ~5 options, radio buttons or a segmented control show everything at once and beat it.",
      s: "Replace the select with a segmented control — there are only three options.",
    },
    {
      t: "Combobox",
      d: "A text input fused with a filtered dropdown — type to narrow, then pick. The right call whenever the list is long: countries, users, tags.",
      s: "The assignee list has 200 people — make it a combobox with type-ahead filtering.",
    },
    {
      t: "Command palette",
      d: "A keyboard-summoned search over every action in the app (⌘K). The power-user layer that makes a product feel fast and serious.",
      s: "Add a ⌘K command palette with fuzzy search over navigation and common actions.",
    },
    {
      t: "Accordion",
      d: "Stacked headers that expand one section at a time. Great for FAQs and dense settings; wrong for content everyone needs to read.",
      s: "Collapse the FAQ into an accordion, first question expanded by default.",
    },
    {
      t: "Tabs",
      d: "Peer views sharing one region, one visible at a time. Tabs switch content in place — if the URL should change, you want navigation, not tabs.",
      s: "Split the profile page into tabs: Overview, Activity, Settings — Overview active by default.",
    },
    {
      t: "Segmented control",
      d: "A connected row of mutually exclusive buttons — an inline radio group that shows every option. Perfect for view toggles like list/grid or month/week.",
      s: "Use a segmented control for the chart range: 1D · 1W · 1M · 1Y.",
    },
    {
      t: "Breadcrumb",
      d: "The 'you are here' trail — Home / Projects / Rebrand — with each ancestor clickable. Essential in anything hierarchical, noise in flat apps.",
      s: "Add breadcrumbs above the file view showing the folder path, each segment clickable.",
    },
    {
      t: "Pagination",
      d: "Splitting long lists into numbered pages. Its rivals: 'load more' buttons and infinite scroll. Data tables want pagination; feeds want scroll.",
      s: "Paginate the results table at 25 rows per page, with the row-count summary on the left.",
    },
    {
      t: "Skeleton",
      d: "Gray placeholder shapes mimicking the layout while content loads, usually with a shimmer. Feels faster than a spinner because the page's structure arrives instantly.",
      s: "Replace the loading spinner with skeleton rows matching the table's real column layout.",
    },
    {
      t: "Avatar",
      d: "A user's visual identity — photo, initials on a colored background, or fallback icon, in that order. Stacked overlapping avatars imply a team.",
      s: "Show assignee avatars, falling back to initials on a color derived from the user's name.",
    },
    {
      t: "Banner",
      d: "A full-width persistent message at the top of a page or section — 'Your trial ends in 3 days.' A callout is its inline cousin embedded in content.",
      s: "Add a dismissible warning banner above the editor when the user is offline.",
    },
    {
      t: "Toggle",
      d: "A switch for on/off settings that take effect immediately. If the choice needs a Save button, use a checkbox — a toggle promises instant effect.",
      s: "Make 'Email notifications' a toggle that saves instantly, with a toast confirming the change.",
    },
    {
      t: "Hero",
      d: "The big opening section of a landing page: headline, supporting line, primary CTA, and usually a visual. It has one job — make the value obvious in five seconds.",
      s: "Build a hero with a punchy headline, one-sentence subhead, single CTA, and a product screenshot.",
    },
    {
      t: "FAB",
      d: "Floating action button — a round button hovering above the content for the single most important action. One per screen, or it stops meaning anything.",
      s: "On mobile, replace the toolbar's New button with a FAB in the bottom-right.",
    },
  ],
};
