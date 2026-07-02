# Lyra UI — Project Summary (June 1, 2026)

## Overview
Lyra is the NICE CXone design system component library built with React 19, TypeScript, Vite 6, Tailwind CSS 3.4, and Storybook 8.4. It uses Radix UI primitives for atoms and CSS custom properties for theming (light/dark via `[data-theme="dark"]`).

There are two repos:
- **lyra-ui** — the component library with Storybook
- **lyra-ux-templates** — consuming page templates project

## Architecture
- Tailwind preset (`src/tailwind-preset.ts`) maps CSS variables to utility classes
- Design tokens live in `src/styles/lyra-tokens.css` (light + dark themes)
- Storybook fallback tokens in `src/storybook.css`
- Tailwind config at `tailwind.config.js` (must mirror preset for Storybook)
- Components export from `src/index.ts`
- **Global Storybook dark mode toggle** (`.storybook/preview.ts`): a `Theme` toolbar control (sun/moon icons, Light/Dark) backed by `globalTypes.theme` + a `withTheme` decorator. The decorator sets `data-theme` on the preview iframe's `document.documentElement` — the exact same attribute every component already reads/writes (`AgentProfile`'s dark-mode toggle, `LoginCard`, `AgentNextGenPage`), so every story renders in real dark mode CSS, not just a background-color swap. It also syncs the canvas background to the live `--lyra-color-bg-surface-shell` value so the story canvas itself isn't left mismatched (stark white behind dark components). The toolbar is available globally in every story — no per-story opt-in needed. The existing `backgrounds` addon (`lyra-base`/`lyra-shell`/`dark` swatches) is unrelated and still independently selectable, though for real dark-mode testing use the new Theme toggle, not the `dark` background swatch (which only changes the canvas color, not the tokens).
  - **Gotcha**: the DOM mutation (`setAttribute("data-theme", ...)`) must happen directly in the decorator function body, not inside a `useEffect`. Storybook invokes decorators as plain functions rather than properly-mounted React components, so a `useEffect` called directly inside one isn't guaranteed to fire/re-fire when the toolbar global changes — the toolbar visibly toggled to "Dark" but nothing in the canvas actually re-themed. Fixed by making the `setAttribute`/background-sync call a synchronous side effect in the decorator body itself, which reruns every time Storybook re-invokes decorators (i.e. every toolbar change). If a future dark-mode-adjacent decorator needs to be added here, keep this pattern — don't reach for hooks inside `decorators` entries.
  - **Not covered**: the `Colors` story's `Swatch`/`AliasRow` helpers render hardcoded hex strings via inline `style={{ backgroundColor: value }}`, not CSS variables — they don't (and structurally can't) react to the theme toggle. That page already shows both light and dark hex values side-by-side as static reference chips instead. Use any real component story (Button, Container, Accordion, Toast, etc.) to verify the toggle is working.

## Key Components

### Icon (`src/components/icon.tsx`)
- New `"info"` value added to `IconBackground` (existing: none/primary/active/success/warning/critical/neutral/surface) — renders `bg-lyra-accent-purple-soft text-lyra-accent-purple-strong`, giving a purple icon-badge option alongside the existing blue (`active`)/green (`success`)/amber (`warning`)/red (`critical`) badges.
- The `--lyra-color-accent-purple-soft`/`-strong` tokens already existed in `lyra-tokens.css` and were already mapped in `tailwind.config.js`, but were missing from `tailwind-preset.ts` (the file Storybook itself uses) — added there too so the utility classes resolve identically in both the templates app and Storybook. Always add new Tailwind color utilities to **both** files, per Important Patterns below — this was a pre-existing gap in that rule being followed for this token pair specifically.
- Story: `Atoms/Icon` → `Background variants` now includes `info` in both the Rounded and Circle galleries; `background` argType options list updated too.
- Used in `lyra-ux-templates`' `AgentNextGenPage.tsx` home-screen summary cards (Schedule = `active`, Performance = `success`, Messages = `info`) via `<Icon icon={LucideIconComponent} background="..." shape="rounded" decorative />` as a `Container`'s `headerIcon`.

### PhoneInput (`src/components/phone-input.tsx`)
- New `hideCountrySelector` prop (default `false`): renders a plain single-country number field with no flag/dial-code button or country popover. `defaultCountry` / `value.countryCode` still determine the mask and formatting — it just can't be changed from the UI.
- Implementation shares one `numberInput` JSX node between the `hideCountrySelector` shell and the full popover-based shell, so the two layouts can't drift apart.
- Story: `Atoms/PhoneInput` → `Without country selector`

### FilterChip (`src/components/filter-chip.tsx`)
- Uses the `Select` component internally (not a custom dropdown)
- Props: `label`, `options`, `selectedValues`, `onSelectionChange`, `error`, `disabled`, `onRemove`, `className`
- Four variants: default, active, error, disabled
- Removable variant: pass `onRemove` — renders X button with split border-radius
- Chip height: fixed 32px (`h-8`)
- Default bg: `control-subtle`, active bg: `active-subtle`
- Hover/pressed states use proper tokens (hover-active-subtle, pressed-active-subtle for active; hover-critical-subtle, pressed-critical-subtle for error)
- Values truncate at 200px max-width
- Select dropdown uses `portalDropdown` prop to escape overflow containers

### Select (`src/components/select.tsx`)
- Supports: `multiple`, `searchable`, `showSelectAll`, custom `trigger` (button element or icon)
- `dropdownAlign`: "left" | "right" for trigger-based dropdowns
- `portalDropdown`: renders dropdown via `ReactDOM.createPortal` to escape overflow containers
- When trigger is a `<button>` element, it's cloned directly (not wrapped in another button)
- "Select All" row is a `<button>` so clicking text toggles selection
- Dropdown positioned with `top-full` to appear below trigger

### TableToolbar (`src/components/table.tsx`)
- Declarative filter API: `filterDefs`, `filterValues`, `onFilterChange`, `onFilterClear`
- Also accepts `filters` as ReactNode for custom filter content
- Filters render inline to the right of Quick Search (same row)
- Record count props still available but not used in Data Management
- Renders FilterChip components and a ghost "Clear" button internally

### Table (`src/components/table.tsx`)
- `useAutoFitRows` hook with ResizeObserver for dynamic pagination
- AutoFit sets `overflow-y: hidden` via inline style
- Non-autofit uses `overflow-auto` class conditionally
- `useTableGrouping` hook for grouping — must receive filtered data, not raw data
- `useColumnReorder` for drag-and-drop column reordering
- TableFooter uses ChevronDown icon element (not background-image) for accessibility

### Button (`src/components/button.tsx`)
- Sizes: sm (24px), default/md (32px), lg (36px), xl (40px), icon-sm (24px), icon/icon-md (32px), icon-lg (36px), icon-xl (40px)
- Variants: default, destructive, outline, ghost, icon
- Data Management uses lg size (36px) for page header buttons; toolbar icon buttons use icon/icon-md (32px)

### Divider (`src/components/divider.tsx`)
- New atom, added for the Login template's Phone Setup card (was previously a raw `<div role="separator" className="border-t border-lyra-border-subtle" />` copy-pasted in the template — now a real component)
- `orientation` prop: `"horizontal"` (default, `w-full border-t`) or `"vertical"` (`h-full border-l`) — mirrors the ad hoc separator patterns already used internally in `app-menu.tsx`, `page-header.tsx`, `table.tsx`, etc., but as a single reusable atom
- Vertical orientation requires a parent with a defined height (e.g. `flex items-center h-6`) to be visible, same constraint as the existing internal `w-px`/`h-full` separator divs
- Stories: `Atoms/Divider` → `Horizontal`, `Vertical`

### Accordion (`src/components/accordion.tsx`)
- `AccordionItem.title` and `.subhead` are typed `React.ReactNode` (widened from `string`) so an item's header can hold richer content — e.g. a name + status `Tag` pill on one line and a multi-line summary on the next — while staying backward compatible with existing plain-string usage.
- Built on the same `CollapsiblePanel` (from `tree-menu.tsx`) used internally elsewhere for smooth open/close; `item.content` can be any React node, including a full `Table`.
- Used in `lyra-ux-templates`' `AgentNextGenPage.tsx` for the home screen's "Latest Contacts" list: each contact is an accordion item (rich title/subhead built from the same fields the old `ListItem`-based version used) whose content is a per-contact interaction-history `Table` (Default `Table` story markup: `TableHeader`/`TableRow` with `hover:bg-transparent`, `flex-[n]` sized `TableHead`/`TableCell` pairs, kebab "More options" button in the last column) wrapped in a fixed-height bordered/rounded container sized to its row count.
- Story: `Atoms/Accordion` → `Rich Header + Table Content` demonstrates the ReactNode title/subhead + embedded `Table` pattern for future reference — check this story before building another "list of expandable rows with a table inside" pattern instead of re-deriving it from scratch.

### Tag (`src/components/tag.tsx`)
- **Bug fix**: every variant's border (`default`, `success`, `warning`, `critical`, `info`) used Tailwind's slash opacity-modifier syntax on a design-token color, e.g. `border-lyra-status-success-strong/30`. Tailwind can only generate opacity-modified utilities for theme colors defined as raw RGB/HSL channel triples — our tokens are CSS custom properties holding full hex/rgba strings (see `lyra-tokens.css`), so that modifier silently produced *no matching CSS rule at all*. The border then fell back to Tailwind Preflight's default (`#e5e7eb` gray) instead of a tinted status color, making every Tag render with a washed-out gray border regardless of variant — visually generic enough that it read as "not a real design-system component" even though it was.
- Fixed by switching those five border classes to a `color-mix()` Tailwind arbitrary value instead, e.g. `border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_30%,transparent)]` — this works with any color value (not just RGB/HSL triples) and doesn't depend on Tailwind's theme-opacity plumbing.
- This bug affected every consumer of `Tag` (both `lyra-ui` Storybook and `lyra-ux-templates`), not just one app — confirmed by direct Tailwind CLI compilation showing the `/30` classes never emitted a rule while the plain (no-modifier) equivalents did.
- **Takeaway for future components**: don't use Tailwind's `/opacity` modifier on any `lyra-*` color utility — none of our design tokens support it, since they're all plain `var(--lyra-color-*)` references to hex/rgba strings. Use the `border-[color-mix(in_srgb,var(--lyra-color-x)_N%,transparent)]` (or `bg-[color-mix(...)]`) arbitrary-value pattern instead whenever a translucent tint of a token is needed.

### AgentProfile (`src/components/agent-profile.tsx`)
- **Bug fix**: the status-picker popover's "Search statuses" field was a hand-rolled `<input>` (not the real `Input` component), styled with `focus:ring-2 focus:ring-lyra-border-focus`. `lyra-border-focus` maps to `--lyra-color-border-focus-default`, which is intentionally *swapped* between light and dark themes (`#185ba4` blue in light, `#facb33` gold/amber in dark — see the matching `[data-theme="dark"] .focus-visible\:ring-lyra-border-focus` override in `lyra-tokens.css`) because it's meant as a general keyboard-focus-visible indicator for interactive controls (buttons, menu items, tabs), not a text-field focus style. Every real text input (`Input` component) instead focuses with `border-lyra-border-active` + `ring-lyra-border-active/20`, which stays blue in both themes. Using the wrong token made this one search box flash an unexpected gold/orange ring in dark mode while every other input in the app stayed blue.
- Fixed by replacing the hand-rolled `<input>` + absolutely-positioned `Search` icon with the real `Input` component and its `startIcon` prop (`<Input startIcon={<Search .../>} .../>`), which both matches every other text input's focus styling automatically and removes ~10 lines of duplicated markup.
- **Takeaway**: `lyra-border-focus` / `ring-lyra-border-focus` is for keyboard-focus-visible indicators on non-field interactive elements, not text inputs — a hand-rolled input reaching for "the focus color" will likely grab the wrong one. Always use the real `Input` component (with `startIcon`/`endIcon` for icons) for any text field rather than a bespoke `<input>`.

### InteractionNavItem (`src/components/interaction-nav-item.tsx`)
- Represents an active customer interaction as a LeftNav item — a compact colored-initials avatar tile when the rail is collapsed, a full detail card (name, kebab + collapse buttons, message preview, channel + elapsed-time footer) when the rail is expanded.
- `expanded` mirrors `AddChannel`'s prop of the same name/purpose: false → compact avatar tile (rail collapsed), true → full card (rail expanded). Wire it to the same `open` state used for the parent `LeftNav`.
- Initials are derived from `customerName` (first + last name initial, e.g. "Sofia Martinez" → "SM"); with no `customerName`, both the initials and the expanded card's title fall back to `"C"` / `"Customer"`.
- `awaitingResponse` (customer sent a message the agent hasn't replied to yet) switches the avatar/card accents from primary (`bg-lyra-status-info-subtle` / `text-lyra-status-info-strong`) to critical (`bg-lyra-status-critical-subtle` / `text-lyra-status-critical-strong`) and adds a small red badge dot on the compact avatar. No `awaitingResponse` → primary, no badge. Uses the existing `status-*-subtle`/`status-*-strong` token pairing (same convention as `Tag`'s variants), not one-off colors.
- `active` (currently-open interaction) gets an elevated white background + shadow in compact mode, and a `border-lyra-border-active` blue border + elevated background in expanded mode.
- The outer element is a `<div role="button" tabIndex={0}>`, not a real `<button>`, because the expanded card contains its own nested `<button>`s (each channel row's kebab) — buttons can't legally nest inside buttons in HTML, and the compact tile uses the same element type for consistency even though it has no nested controls. (A chevron/`onCollapseClick` button was removed from the expanded card's header row early on; the header row itself no longer has any button at all — see the kebab-menu bullet below.)
- **`LeftNav` gained a new `header` prop** (`src/components/left-nav.tsx`) to host a list of these above the regular nav items — mirrors the existing `footer` prop (used for `AddChannel`) exactly, including the same overlay-mode `React.cloneElement(..., { expanded: hoverOpen })` auto-injection; in inline mode, the consumer passes its own `expanded={open}` on each item, same as `footer` already does for `AddChannel`. Added `items-center` to both `header`/`footer` wrappers so compact tiles center correctly in the 52px collapsed rail width.
- Demonstrated in `LeftNav.stories.tsx`'s "Agent Next Gen Left Nav" story via `header`: an active + awaiting-response item, an inactive + awaiting-response item, and a no-`customerName` + not-awaiting item (showing the `"C"` fallback and primary/no-badge state).
- **Also has its own dedicated `InteractionNavItem.stories.tsx`** (`UI/InteractionNavItem`, 8 stories: Compact/Expanded × active/inactive/no-customer, plus a stacked preview of each mode). Being embedded inside another component's story (here, "Agent Next Gen Left Nav") does **not** make a component browsable on its own in Storybook's sidebar — every standalone component needs its own `ComponentName.stories.tsx` too, same as `AddChannel` has both its own stories file *and* an appearance inside that same Agent Next Gen story. Forgetting the dedicated file was reported back as "I don't see it in the storybook."
- Compact tile follow-up: added a `border` matching the avatar's tone (`border-lyra-status-critical-strong` / `border-lyra-status-info-strong`) around the avatar square, sized to 32×32px (`h-8 w-8`, down from an original 44px), radius `rounded-lyra-sm` (6px, matches every corner in the component — outer wrapper, avatar square, expanded card, kebab button), initials at `lyra-body-sm-emphasis` (12px), and the awaiting-response badge dot fixed to true 12×12px (`h-3 w-3` at `-right-1 -top-1` — `h-3.5`/`w-3.5` is 14px, not 12px, a mixup documented in Important Patterns below).
- **Multi-channel support**: replaced the single `channelIcon`/`channelLabel`/`preview` props with `channels?: InteractionChannel[]` (`{ icon, label, elapsed, preview?, current?, removable?, onRemove? }`). A customer can have more than one open conversation (e.g. Chat + Email + SMS + WhatsApp simultaneously); the compact tile shows a numeric count badge (top-left, only when `channels.length > 1`, reusing `ActionIconButton`'s exact 18px badge classes since it needs to fit a legible digit — unlike the 12px awaiting-response dot, which has no text) and the expanded card renders each channel as its own row: an uppercase pill chip (built from `tag.tsx`'s exported `tagVariants({ variant: "success", shape: "pill" })` rather than hand-rolling colors, since `Tag` itself doesn't support a leading icon) + a `Clock` icon and elapsed time + a trailing kebab menu button (see below) + that channel's own preview text, with a `border-t` divider between rows.
- **`current` + `active` interaction**: a channel row only gets the blue highlight (`bg-lyra-status-info-subtle`) when `active && channel.current` — i.e. an inactive `InteractionNavItem` never highlights any of its channel rows, even if one is flagged `current`, matching an explicit requirement ("the background of the active channel should only be blue on the active cards, the other cards should look plain").
- The expanded card's preview text moved from a single top-level paragraph to living inside each channel's own row (`ch.preview`), since each channel can have a different message/preview once there's more than one.
- `InteractionChannel` also gained its own `awaitingResponse?: boolean` (separate from the card-level `awaitingResponse` prop): the specific channel awaiting a response gets a `critical` (red) chip via `tagVariants({ variant: ch.awaitingResponse ? "critical" : "success", shape: "pill" })` instead of `success` (green), and the expanded card's outer border is `border-lyra-status-critical-strong` whenever the card-level `awaitingResponse` is true — taking priority over the `active` blue border (an active card that's also awaiting response still shows the red "needs attention" border; `active` only continues to control the elevated shadow).
- Hover behavior: the outer expanded card no longer has its own `hover:bg-lyra-state-hover` — hover is scoped to each individual channel row instead (skipped on whichever row is already highlighted `current`+`active`), while the whole card remains one clickable unit — channel rows don't call `stopPropagation`, so clicking anywhere (including inside a specific channel row) still bubbles up to the single `onClick`, which should navigate to that customer's last-active channel, not a per-row destination.
- The compact tile's elapsed-time label now uses the new `lyra-body-xs` preset (see below) instead of `lyra-body-sm`.
- `elapsed` is always a 4-digit `MM:SS` string (e.g. `"00:02"` = 2 seconds since the customer's last response), consistently in both compact and expanded modes — all story examples (`InteractionNavItem.stories.tsx` and `LeftNav.stories.tsx`'s "Agent Next Gen Left Nav") use this format for both modes. An earlier pass had compact using `MM:SS` (`"08:27"`) and expanded using a relative label (`"8m"`) — that inconsistency was corrected; don't reintroduce a relative-label format for either mode.
- **Kebab (⋮) dropdown menu**: each channel row's trailing button (formerly a `Trash2` remove icon, gated by `ch.removable !== false`) is now a real dropdown trigger built on the shared `Menu` component, extracted as an internal `KebabMenuButton` (module-scope in `interaction-nav-item.tsx`, not exported) and rendered once per channel row rather than once per card — the card header no longer has a kebab at all. Default items (override via the card-level `menuItems?: MenuEntry[]` prop, shared across every channel row on that card): Unassign & Dismiss (`TriangleAlert`), Consult/Transfer (a composite `User` + `ArrowUpRight` icon — no single Lucide icon covers "transfer"), Outcome (`CircleCheck`, tinted `text-lyra-status-info-strong` blue), Send Transcript (`Send`), Download Transcript (`FileDown`), Translate Messages (`Languages`).
- **Portal positioning is required, not optional**: the dropdown is rendered via `createPortal(..., document.body)` with `position: fixed` coordinates computed from the trigger button's own `getBoundingClientRect()` (`{ top: rect.bottom + 4, left: rect.right }`, plus `transform: translateX(-100%)` to right-align without knowing the menu's width ahead of render). Rendering it inline (a plain `absolute` div nested inside the card) gets clipped by the card's own `overflow-hidden`/rounded corners — confirmed by a user screenshot showing the dropdown cut off mid-item. `overflow-hidden` on an ancestor clips any descendant positioned relative to a containing block inside that ancestor, `position: fixed` escapes it (its containing block is the viewport, not the clipped ancestor) — this is the standard technique for popovers/dropdowns/tooltips that must escape a scrolling or overflow-clipped card. Each `KebabMenuButton` instance owns its own open/position state, outside-click listener, and Escape-to-close — same pattern as `ProfileMenu`'s dropdown, just per-row instead of singleton.
- `onRemove` on `InteractionChannel` is `@deprecated` and unused now that the trailing action is a kebab dropdown instead of a single remove button; `removable` is repurposed (same field, same default-`true` gating) to mean "show the kebab for this row" rather than "show a remove button."

### CXoneSmiley (`src/components/cxone-smiley.tsx`)
- Added an optional `monochrome?: boolean | string` prop: renders both eyes and all four smile-arc segments in a single color instead of the default multicolor (blue/green/orange/magenta) scheme. `monochrome` (`true`) uses the brand blue `#2196F3`; any other string is used as-is as a CSS color. Kept for any future use, but **this is a different, unrelated mark from the "Agent Next Gen" app icon** — see the correction below and the Scope Rules entry.
- **Correction**: this prop was first added, and briefly used, for `lyra-ux-templates`' home-screen "welcome" modal smiley. That was wrong — the reference design was actually the existing `assets/app-icon.svg` mark (two dot "eyes" + a single blue gradient swoosh "smile", the same icon already used for the app logo in `AppName`/`AppHeader` and `LoginCard`), not `CXoneSmiley`'s rainbow multicolor face. The welcome modal now renders `<img src={appIcon} .../>` directly, matching the header logo. This is the same "wrong icon" mistake documented in the `LoginCard` entry below — see the Scope Rules note.

### LoginCard (`src/components/login-card.tsx`)
- Promoted from `lyra-ux-templates`' `LoginPage.tsx` into a real lyra-ui template component, since the whole card (branding, Phone Setup radio group, dark-mode toggle, conditional Phone Number / Station ID reveal, Launch button, Save Preferences, "Compiling Experience" launch sequence) is reusable UI, not page-specific logic.
- Fully self-contained: manages its own phone setup selection, phone/station-id validation ("12345" is the only valid Station ID — a placeholder rule for the demo), dark-mode toggle (writes `data-theme` to `document.documentElement`, same mechanism as `AgentProfile`), and the launch sequence (3 sequential steps via `ConversationMessage`'s `process` prop, then a card fade-out).
- Props: `appName` (default "Agent Next Gen"), `appIcon` (default: the shared `assets/app-icon.svg` mark — **not** `CXoneSmiley`, which is a different, unrelated icon; this was wrong in an earlier pass and made the card render the wrong logo whenever `appIcon` wasn't overridden), `defaultPhoneSetup`, `defaultLaunching` (auto-starts the launch sequence on mount — used for the `Launching` story), `onLaunch` (fired after the fade-out completes; the consuming template does routing from here, so this component has no knowledge of app-specific page/route types)
- `app-icon.svg` already exists identically in both `lyra-ui/src/assets/` and `lyra-ux-templates/src/assets/` — same convention as `AppHeader.stories.tsx`/`AppName.stories.tsx`/`AgentNextGenTemplate.stories.tsx`, which all import it directly rather than using an icon component. `lyra-ux-templates`' `LoginPage.tsx` no longer needs to pass its own `appIcon` override — the default already matches.
- The templates app's `LoginPage.tsx` is now just a thin full-screen wrapper: `<LoginCard onLaunch={() => onNavigate?.("agent")} />`
- Stories: `Templates/Login Card` → `Phone Setup / Integrated Soft Phone`, `Phone Setup / Phone Number`, `Phone Setup / Station ID`, `Launching`
- Sized as a small modal: renders via `Container variant="modal"` with `headerTitle`/`headerIcon` (instead of a hand-rolled bordered/shadowed div) at `w-[360px]` — matches the "Small (360px)" convention from `Atoms/Modal`'s width variants (`sm`/`md`/`lg` → `360px`/`480px`/`640px`). Body content sits in an inner `px-5 pb-5 pt-4` wrapper since `Container` itself only pads its header, matching the `px-5` body pattern in `Modal.stories.tsx`'s `FormContent`.
- Header title (`appName`) renders at `lyra-heading-lg` via `headerTitleClassName="lyra-heading-lg"`, not `Container`'s default `lyra-heading-md` — added because `Container`/`ContainerHeader` had no way for a consumer to size the title up. This required adding a new `headerTitleClassName?: string` passthrough prop to `Container` (forwarded to `ContainerHeader`'s existing `titleClassName` prop, which previously could only be set by components using `ContainerHeader` directly, not through `Container`). Backward compatible — omitting it keeps the `lyra-heading-md` default.

### AdminShell (`src/components/admin-shell.tsx`)
- Promoted from `lyra-ux-templates`' `OutboundEngagementPage.tsx`, which had a left nav-tree side `Panel`, a `PageHeader`, an interior detail `Panel`, and a right side `Panel` — scaffolding that turned out to be ~90% duplicated verbatim in `DesktopDesignsPage.tsx` (Agent Workspace Premium / Designer) too. Unlike `AgentNextGenTemplate.stories.tsx` (a Storybook-only reference implementation that the real apps re-implement separately), `AdminShell` is a genuine reusable component exported from `@nicecxone/lyra-ui` and imported directly by both pages — this is what the user asked for ("use this template in the lyra-ux-templates for both Outbound Engagement and Agent Workspace Premium").
- Owns: the left nav `Panel` (`TreeMenu` + pin/hover/cookie state), the `PageHeader` row (optional via `showPageHeader`, off for the bare "Shell" story), and the right side `Panel`. Cookie key for the left panel's pinned state is `${storageKeyPrefix}_panel_pinned` — pass the same prefix the page used before promotion to preserve users' existing pinned preference (e.g. `"lyra_outbound"` → `lyra_outbound_panel_pinned`; Designer's pre-promotion cookie was literally `lyra_panel_pinned`, so its prefix is `"lyra"`, not `"lyra_panel"`).
- Does NOT own the interior (right, in-content) detail panel's open state — that stays fully controlled by the consumer (`interiorPanelOpen`/`onInteriorPanelClose` props) since it's typically toggled from a button living inside `children` (e.g. `DesktopDesignsPage`'s `TableToolbar` `onRightPanelToggle`), not by the shell itself.
- `children` renders below the `PageHeader`, to the left of the interior panel — anything a page needs there (tabs, toolbars, tables, or nothing) goes here. Outbound Engagement currently passes just `<div className="flex-1" />` (its content area is still a placeholder), matching its current empty state.
- Props: `storageKeyPrefix`, `navTitle`, `navItems` (`TreeMenuItem[]`), `defaultLeftPinned`, `showPageHeader`, `pageTitle`, `pageChip`, `pageActions`, `interiorPanelTitle`, `interiorPanelOpen`, `onInteriorPanelClose`, `interiorPanelContent`, `rightPanelContent`, `children`.
- Stories: `Templates/Admin UIs` → `Admin UIs – Shell` (bare shell, no PageHeader), `Admin UIs – With Page Header` (mirrors the Outbound Engagement "Campaigns" configuration, like the `Templates/Agent Next Gen` story's Shell/With Page Header split).
- After promoting, confirmed via `grep` that no inline `Panel variant="side"`/`TreeMenu` markup remained in either `OutboundEngagementPage.tsx` or `DesktopDesignsPage.tsx`, and rebuilt both `lyra-ux-templates` and `agent-next-gen-v1` (which also consumes `lyra-ui`) plus `lyra-ui`'s Storybook to confirm nothing broke.

## Stories

### Data Management (`src/components/__stories__/DataManagement.stories.tsx`)
- Template story under "Templates/Data Management" with two variants: Default and AutoFit
- Boolean controls: sortable, reorderable, groupable, showTabs, showToolbar, showAskAI, showQuickSearch, showRefresh, showEdit, showCopy, showDelete, showColumns, showFilters
- 50 sample records
- Filters use declarative `filterDefs`/`filterValues` API on TableToolbar
- Grouping uses filtered data (not raw sampleData)
- Layout: fullscreen with h-screen wrapper, component uses h-full
- Padding: px-6 on TabList, TableToolbar, table container, and TableFooter

### FilterChip Stories (`src/components/__stories__/FilterChip.stories.tsx`)
- Stories: Empty, Active, Error, Disabled, DisabledWithValues, Removable, AllStates
- 50 sample options per chip
- Removable story: dynamic add/remove filters with "+ Filter" button (uses Select with outline button trigger), overflow chips behind "+N" button with scrollable dropdown, Clear button clears all
- AllStates story: rows of empty, active, error, disabled chips with "+ Filter" and "Clear" buttons

## Color Tokens Added This Session
- `--lyra-state-hover-critical-subtle`: light `#ffebeb`, dark `rgba(227,69,69,0.18)`
- `--lyra-state-pressed-critical-subtle`: light `#ffe0e0`, dark `rgba(227,69,69,0.24)`
- `--lyra-state-hover-active-subtle` updated: `#e4f2ff` → `#e8f1fc`
- All added to: lyra-tokens.css, storybook.css, tailwind-preset.ts, tailwind.config.js, Colors.stories.tsx

## Typography Presets Added This Session
- `.lyra-body-xs` / `.lyra-body-xs-emphasis`: `font-size: 10px; line-height: 14px;` (weight 400 / 500), `letter-spacing: 0.01rem` — one step below `lyra-body-sm` (12px/16px), added for small numeric labels (e.g. `InteractionNavItem`'s compact-mode elapsed-time text) that need to be smaller than any existing preset. Added to both lyra-tokens.css and storybook.css (kept in sync, per convention), and registered in Typography.stories.tsx's `presets` table so it shows up in the "Presets" story alongside every other size.

## Important Patterns
- **Before reaching for a vanilla Tailwind utility (spacing, sizing, radius, etc.) in any lyra-ui component or story, check other lyra-ui stories/components first for the established pattern/token.** Case in point: `InteractionNavItem`'s status badge was sized with raw Tailwind `h-3.5 w-3.5` (intended as 12×12px) — `h-3.5`/`w-3.5` is actually 14px (0.875rem); `h-3`/`w-3` is the one that's 12px (0.75rem). Skipping this check produced a badge that measured 14×14 in devtools when 12×12 was intended, and wasn't caught until the user inspected it directly. Grepping sibling components (e.g. other badge-dot implementations like `ActionIconButton`/`NotificationsBell`) or checking the `lyra-radius-*`/spacing scale before picking a raw utility value would have caught the size mismatch immediately.
- Always reuse existing components (Select, SearchInput, Checkbox, Button) — never rebuild custom versions
- **lyra-ux-templates must import UI atoms from `@nicecxone/lyra-ui`, never from local `src/components/ui/*` reimplementations.** A Login template (Phone Setup card with radio group + phone number field) was first built with ad hoc local copies of Radio/Input/Button/Checkbox in the templates repo. They visually diverged from the real Storybook components (radio dot vs. filled circle indicator, plain text input vs. the real `PhoneInput` with country selector/mask/validation). Fix: always check `lyra-ui/src/index.ts` and that component's `__stories__` file *before* building template UI — use `RadioGroup`/`RadioGroupItem` (`radio.tsx`) and `PhoneInput` (`phone-input.tsx`) directly, both of which already support built-in `label` props (no need to hand-roll `<label>` wrappers). If a lyra-ui component doesn't exist yet for something a template needs, that's a signal to add it to lyra-ui (per Scope Rules below) rather than approximate it locally in the template.
- New Tailwind color utilities must be added to BOTH `tailwind-preset.ts` AND `tailwind.config.js`
- New CSS variables must be added to BOTH `lyra-tokens.css` AND `storybook.css`
- New color tokens should be added to `Colors.stories.tsx` (swatches + alias table)
- **Using the "correct" component isn't enough — the exact markup shape shown in its `__stories__` file matters too.** On the Login template, `Checkbox` was used with its `label` prop (`<Checkbox label="Save Preferences" ... />`), which is valid API but internally wraps the input in an extra `div.flex.items-center.h-5`. Every plain "checkbox + text label" story (`Default`, `Checked`, `Interactive`, `WithSecondaryText`, `StateMatrix`, etc.) instead renders a bare `<Checkbox />` beside a manual `<label className="flex items-center gap-2">…</label>` — the `label` prop path is only ever demonstrated for `Required`/`Readonly` states. Using the prop form produced DOM that didn't match Storybook and looked like a bug. Fix: for a plain labeled checkbox, always use `<label className="flex items-center gap-2 cursor-pointer"><Checkbox .../><span className="lyra-body-md text-lyra-fg-default">…</span></label>`, matching the `Default` story exactly.
- **Every modal's outer card must use `Container variant="modal"`, never a hand-rolled div with its own background class.** The home-screen welcome modal in `lyra-ux-templates` was first built with a plain `<div className="... bg-lyra-bg-surface-base ...">`, while `LoginCard` (also a modal) uses `Container variant="modal"` (`bg-lyra-bg-surface-overlay`). In light mode both tokens are `#ffffff` so the mismatch was invisible; in dark mode `bg-surface-base` is `#1f1f1e` and `bg-surface-overlay` is `#2e2e2e` — visibly different shades of "black," so the two modals looked inconsistent side by side. Fixed by switching the welcome modal to `Container variant="modal"` too. Any new modal should do the same from the start rather than approximating the look with a raw div.

### Post-layout QA checklist (do this before calling any template "done")
1. Open each lyra-ui component's `__stories__/*.stories.tsx` file for every component used in the new layout.
2. For each one, find the story that matches the case being built (plain vs. required vs. readonly vs. grouped, etc.) and copy its exact prop/markup shape — don't just satisfy the TS prop types.
3. Inspect the rendered DOM (e.g. browser devtools) and diff it mentally against the story's structure — watch for extra wrapper `div`s, different class lists, or different parent/child nesting than the canonical story produces.
4. If a prop *could* produce two different DOM shapes for the same visual result (e.g. `Checkbox`'s `label` prop vs. a manual `<label>`), default to whichever shape the majority of stories for that component use, not just whichever is more convenient to type.

### Every `lyra-ux-templates` page fades in on load
Every top-level page component in `lyra-ux-templates` (the components rendered directly by `App.tsx`'s router — currently `AgentNextGenPage`, `LoginPage`, `OutboundEngagementPage`, `DesktopDesignsPage`, `ShellPage`, and the shared Header/Sidebar shell in `App.tsx` itself) fades its entire root element in on mount, for a bit of polish rather than content just snapping into view.
- Implementation: add `animate-in fade-in-0 duration-500` to the page's single outermost returned element's `className` (the `tailwindcss-animate` plugin utilities already used elsewhere in both repos for Popover/Overlay/etc. — no extra JS or state needed, it's a plain CSS animation that plays once on mount).
- **When creating any new page/route in `lyra-ux-templates`, add these three classes to its outermost element as part of building it** — don't treat it as optional polish to add later.
- Since React only replays a mount animation when the element/component actually (re)mounts, this only self-triggers correctly if each distinct page is its own component swapped in by the router (as they are here). If a new page is ever nested *inside* another already-mounted page's JSX instead of being a router-level swap, the fade won't retrigger on that inner navigation — put the classes on whichever element actually mounts fresh for that transition.

### After promoting a template block into a real lyra-ui component
When markup that used to live inline in a `lyra-ux-templates` page gets promoted into a proper `lyra-ui` component (e.g. `Divider`, `LoginCard`), that promotion isn't done until every consumer is switched over:
1. Search the templates repo for the old inline markup/text that the new component replaces (e.g. `grep` for a distinctive string or class combo from the old JSX) and confirm zero matches remain — a leftover duplicate is exactly the kind of drift this whole doc exists to prevent.
2. Replace the template's inline implementation with an import of the new component from `@nicecxone/lyra-ui`, passing only the props needed to fit that page (callbacks for routing/navigation, branding overrides, etc.) — the template file should shrink, not stay the same size with an import added on top.
3. Rebuild both repos (`tsc --noEmit` in lyra-ui, `vite build` in lyra-ux-templates) to confirm the swap didn't silently drop behavior.
4. Record the new component in this file's Key Components list (props, defaults, gotchas) so the next pass doesn't have to rediscover them by reading the source.

## Scope Rules
- **Do NOT modify `lyra-ui` core components** (anything under `lyra-ui/src/components/`) unless the request explicitly specifies making changes to lyra-ui. Template and story work in `lyra-ux-templates` should be solved at the template/consumer level.
- When a fix is needed that would normally require a lyra-ui component change, first look for a prop, className, or wrapper approach in the consuming template before touching the library.
- **Always use the shared `app-icon.svg` mark for the "Agent Next Gen" smiley/logo** — it exists identically in both `lyra-ui/src/assets/app-icon.svg` and `lyra-ux-templates/src/assets/app-icon.svg`; import it directly (`import appIcon from ".../assets/app-icon.svg"`) and render it as `<img src={appIcon} ... />`, the same way `AppName`/`AppHeader` and `LoginCard` already do. This is the two-dot-eyes + single blue gradient swoosh mark. Do **not** use `CXoneSmiley` (a visually different, unrelated multicolor rainbow-smile component) or hand-roll a local one-off smiley SVG for this — this exact "used the wrong smiley" mistake has now happened twice (see the `LoginCard` and `CXoneSmiley` entries above); check for the real asset/component and a reference screenshot before assuming which mark is meant.

## Planned Future Work
- Empty template
- Dashboard template (with widgets)
- Edit template (settings/configure)
