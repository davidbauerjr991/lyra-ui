# Lyra UI — Component Authoring Guidelines

> **Reference this document every time you create or modify a component.**
> These are the canonical patterns for the lyra-ui library. Deviating from them requires explicit team approval.

---

## Table of Contents

1. [Use Lyra components as designed — never hard-code](#1-use-lyra-components-as-designed--never-hard-code)
2. [Composition over reimplementation](#2-composition-over-reimplementation)
3. [Controlled components](#3-controlled-components)
4. [Z-index hierarchy](#4-z-index-hierarchy)
5. [Icons](#5-icons)
6. [File naming & location](#6-file-naming--location)
7. [Component structure](#7-component-structure)
8. [TypeScript conventions](#8-typescript-conventions)
9. [Variants with CVA](#9-variants-with-cva)
10. [Tailwind & theming](#10-tailwind--theming)
11. [Storybook stories](#11-storybook-stories)
12. [Index exports](#12-index-exports)
13. [Checklist](#13-new-component-checklist)
14. [Debugging: diagnose rendering before behavior](#14-debugging-diagnose-rendering-before-behavior)
15. [Tooltip placement](#15-tooltip-placement)
16. [Portals still bubble through the React tree](#16-portals-still-bubble-through-the-react-tree)
17. [Field label casing — type it correctly, never fake it with CSS](#17-field-label-casing--type-it-correctly-never-fake-it-with-css)
18. [Match reference component behavior in prototypes](#18-match-reference-component-behavior-in-prototypes)

---

## 1. Use Lyra components as designed — never hard-code

**Use lyra-ui components exactly as they're built, no matter what a design mockup, screenshot, or existing code shows. Never hard-code a value that a real component already computes correctly on its own.**

A design image or screenshot is a target for what the *finished, correctly-wired* component should look like — it is never license to hard-code text, styling, formatting, or behavior that fights a component's own built-in logic just to match a static picture. If a component's actual behavior doesn't match what a design shows, that is a signal to ask whether the design is stale or the component genuinely needs a new capability — it is not a reason to paper over the mismatch with a hard-coded value.

**Hard-coding is only acceptable in exactly two cases:**

1. **The user explicitly asked for that specific hard-coded value or behavior**, or
2. **No lyra-ui component exists yet for this need, and one will be built to replace the placeholder later** — in that case, mark it clearly as temporary (e.g. `// TODO: replace with <FutureComponent> once it exists`) so it isn't mistaken for the intended final state.

Outside of those two cases, treat a hard-coded value sitting next to a real component as a bug, not a style choice.

### What this looks like in practice

- **Don't override a component's own computed defaults with a fixed string.** If a component already derives a sensible placeholder, label, or formatted value from its own state, passing a static override defeats the reason that logic exists.
- **Don't hand-roll markup that duplicates an existing component.** A star icon + button + tooltip, a phone field, a dropdown, a tooltip-triggered flyout — if lyra-ui already has it, compose it (see §2, Composition over reimplementation, for how to find and reuse the right component).
- **Don't reach for a raw Tailwind value, hex color, or one-off style** where an existing lyra token or component prop already covers it (see §10, Tailwind & theming).
- **Don't restyle a component's output with CSS to match a screenshot — including `text-transform`.** This is the same bug as hard-coding a value, just aimed at *styling* instead of *content*: a screenshot showing something in ALL CAPS, a different weight, a different color, etc. is not license to bolt `uppercase`/`tracking-wide`/an arbitrary color class onto a shared component's label, title, or text node to force it to match. If a shared component's real rendered output doesn't match the picture, that's the same fork as any other mismatch (§17 covers the specific case of label casing) — fix the input (type the correct text, pass the right prop/variant) or treat it as a signal the design needs revisiting, never paper over it with hand-written CSS sitting on top of the real component.

### Recent incidents this rule would have prevented

- `CreateNew`'s dial-pad field was given a hard-coded `placeholder="Enter phone number"`, which silently overrode `PhoneInput`'s own correct per-country example placeholder (`"(555) 555-5555"` for the US, `"76 123 45 67"` for Switzerland, etc.) — the real component already did the right thing; the override actively made it worse.
- Several places (`ContactRow`'s favorite star, `AgentProfile`'s status-favorite toggle) hand-rolled their own `<button>` + `Star` icon + `Tooltip` combination instead of using the shared `FavoriteButton` atom that already existed for exactly this.
- `agent-next-gen-v1`'s `CustomerInformationPanelBody` hand-styled a "Last Interaction" section label with `uppercase tracking-wide` to match a reference screenshot that happened to show it in all caps — instead of just typing `"Last Interaction"` (already correct Title Case per §17) and letting the real component's own typography render it. Caught only after the fact, from a screenshot of the *rendered result* next to a direct callout ("hand-styling is a massive no-no") — the fix wasn't a style tweak, it was routing the text through `Accordion`'s own `title` slot instead of a hand-built `<span>` with CSS bolted onto it.
- Same panel's Overview tab needed its two `.lyra-card-split` children to split evenly — instead of adding a real modifier to that family in `lyra-tokens.css`, the first pass bolted `className="flex-1 min-w-0"` straight onto the two consumer elements. See §10's "CSS container-query pattern" callout for the full failure mode (a bare Tailwind utility can't see a family's other breakpoint stages) and the fix (`.lyra-card-split-even`).
- `ContainerHeader`'s `tabs` prop (added this session) split what used to be one div into an outer `flex flex-col` wrapper plus an inner row carrying the actual `px-4 py-2.5` — but `className` stayed wired to the *outer* wrapper, which has no padding of its own to override. Every real consumer passing `className`/`headerClassName` to zero or resize that padding (`Popover`'s built-in `title` header, `DashboardCard`'s `metrics`-mode `pb-0`, `agent-next-gen-v1`'s "Add tag" popover header) silently stopped working — the override just sat inertly on the outer wrapper instead of reaching the row it was meant to resize, stacking as *extra* padding instead of replacing any. Caught from a screenshot of the "Add tag" header reading as visually centered (both edges pushed in by the stacked padding) instead of flush-left. Fixed by moving `className` to the inner row in `container-header.tsx` — see that div's own doc comment for the full mechanics. The lesson: when splitting a component's single root div into nested wrappers, audit every prop that forwards a `className`/style override to make sure it still lands on the element whose classes it's meant to resolve against — a passed-through prop can silently stop doing anything without ever throwing.
- `TabList`'s `[&>[role='tab']]:flex-shrink-0` override — the fix that makes tabs hold their natural width instead of each individually shrinking+truncating — was gated to `isWideOverflow` only when it was added (see its own long-standing doc comment in `tabs.tsx`). When `overflowBreakpoint="compact"` shipped later for narrow, resizable hosts like `InteriorPanel` (200–425px), the same `tablistEl` renders as `isCompact`'s "not collapsed yet" row too — but the gate was never extended to cover it, so every `Tab` in a `compact`-mode bar was still free to flex-shrink. Caught from a screenshot of `agent-next-gen-v1`'s Customer Information panel (an `overflowBreakpoint="compact"` `TabList`) showing all 8 tabs simultaneously, each individually truncated to a few letters — a third state neither mode's design has room for (it should be either full natural width or the collapsed "active tab + N More" row, never a squeezed in-between). Fixed by extending the gate to `(isWideOverflow || isCompact)`. Same lesson as the `ContainerHeader` incident above, from the opposite direction: when adding a new mode/variant to an existing component, audit every fix and guard already scoped to the *old* modes to see whether the new one needs it too — a condition that's correct for mode A doesn't automatically stay correct once mode B exists alongside it.

**When in doubt: trust the component, don't hard-code around it — and don't restyle around it either.**

---

## 2. Composition over reimplementation

**Before writing any new UI logic, check whether an existing lyra-ui component already provides it.**

If a higher-level component needs a dropdown, trigger, input, panel, or any other interactive element — import and compose the existing lyra-ui primitive. Never re-implement behaviour that already exists in the library.

### Examples

| You need | Use | Do not create |
|---|---|---|
| A dropdown attached to a trigger | `Menu` or `Popover` + `PopoverContent` (or `MenuRadix` for a self-triggered flyout that owns its own trigger — see below) | A custom `<ul>` dropdown |
| A text field | `Input` | A raw `<input>` with manual styling |
| A select / combobox | `Select` + `Menu` (or Radix `Select`) | A new dropdown+input hybrid from scratch |
| A panel over the page header (hover/pin, left or right) | `SidePanel` + `PanelHeader`/`PanelFooter` | A custom modal-like div with its own header |
| An inline panel below the page header (click-triggered, left or right) | `InteriorPanel` + `PanelHeader`/`PanelFooter` | A custom modal-like div with its own header |
| A chip / badge (pill tint or circular count/icon) | `Badge` (`shape="pill"` or `shape="circle"`) | An inline-styled `<span>` |
| A breadcrumb trail | `Breadcrumb` + `BreadcrumbList`/`Item`/`Link`/`Page`/`Separator`/`Ellipsis` | A hand-rolled `<nav><ol>` |
| An icon button | `ActionIconButton` (AppHeader row — Help/Dashboards/Notifications/Ask AI, `size="xl"` → 44px, the canonical AppHeader shape) or `Button` (`variant="icon"`, any other icon-button context — `size="icon-2xl"` is the same 44px AppHeader size `ActionIconButton` composes internally). Both share one `badge` count-overlay implementation (`Button`'s own `badge` prop, rendered via `Badge shape="circle"`) — never hand-roll a second one. | A bare `<button>` with a Lucide icon, or a second hand-rolled badge span |
| A modal / dialog (backdrop, focus trap, Escape-to-dismiss) | `Modal` | `Overlay` + `Container variant="modal"` hand-composed at the call site, or a custom modal-like div |

**`Menu` vs. `MenuRadix`**: `Menu` is a bare list with no trigger or open state of its own — use it whenever something else (`Select`, `PhoneInput`, a hand-rolled `Popover` wrapper) needs to embed "just the list part" inside a surface it already supplies (`bare` prop). `MenuRadix` (built on `@radix-ui/react-dropdown-menu`) is the opposite: a self-contained trigger-plus-menu unit that owns its own open state, positioning, and surface — use it for anything self-triggered (a kebab button, a profile dropdown, an overflow-actions menu) instead of hand-rolling a trigger + portal + outside-click/Escape listener around bare `Menu`, which was the old pattern for these (see `kebab-menu-button.tsx`, `profile-menu.tsx`, `agent-notifications.tsx`'s overflow menu). `MenuRadix` cannot be used in `bare` mode — Radix's `DropdownMenu.Root` requires exactly one `Trigger` and owns state via context that only its own descendants can read, so it can't decompose into "just the list" the way bare `Menu` can. If you're building something self-triggered, reach for `MenuRadix` first; if you're embedding a list inside an already-open surface someone else supplies, use bare `Menu`.

### Panels

There are exactly two panel types in the design system, and they are two
separate components — not one component switching on a `variant` prop (an
earlier unified `Panel` with `variant="side" | "interior"` caused enough
confusion between the two behaviors that it was split back apart; don't
reintroduce it):

| | `SidePanel` | `InteriorPanel` |
|---|---|---|
| Position | Over the page header | Below the page header, inline in the main container |
| Opens via | Hover (consumer wires `onMouseEnter`/`onMouseLeave` + external `open` state) | Click / trigger elsewhere in the main container |
| Pin/unpin | Yes — `pinned` + `onPinToggle`. **Defaults to unpinned (`pinned={false}`).** Only start one pinned when a specific prototype calls for it. | No pin concept — always inline |
| Side | `side="left"` / `side="right"` (required to be explicit at each call site — don't rely on the default when the surrounding layout implies a specific side) | `side="left"` / `side="right"` (same) |
| Narrow-container behavior | N/A | Becomes an absolute overlay below ~1050px of its parent container's width, instead of squeezing the main content column further |

Both share the same sub-parts (`PanelHeader`, `PanelContent`, `PanelFooter`,
`PanelPinButton` for `SidePanel`) and the same internal drag-resize hook
(`use-panel-drag-resize.ts`) — reuse those instead of hand-rolling
resize/pin logic again.

`Draggable`/`DraggablePanel` (float/dockable shells like the AI panel or
notifications dropdown) are a **different, unrelated concept** — don't
confuse either of them with `SidePanel`/`InteriorPanel`.

#### Composing panel body content (tabs + cards)

`PanelContent` (used internally by both `SidePanel` and `InteriorPanel`) is
the single `flex-1 overflow-y-auto` scroll region — plain `children` renders
as one block inside it, with nothing keeping any part of it fixed while the
rest scrolls.

- **Tabs belong in the header, not in `children`.** `SidePanel` and
  `InteriorPanel` both take a **`headerTabs`** prop — a `TabList` forwarded
  straight to `ContainerHeader`'s own `tabs` slot (container-header.tsx),
  rendered below the title/subhead row but still *inside* the header, i.e.
  outside `PanelContent` entirely. This is the only correct way to get a
  fixed tab bar under a panel header — earlier attempts at a `sticky
  top-0` `TabList` living inside `children` had two real, shipped bugs
  that `headerTabs` doesn't have: the surrounding scroll container's own
  scrollbar still ran alongside a merely-`sticky` row instead of a
  genuinely fixed one, and `TabList`'s "N More" overflow dropdown silently
  did nothing when a tab was selected from it once the row collapsed (a
  separate bug in `tabs.tsx`'s `overflowBreakpoint="compact"` mode —
  fixed there, but the sticky-in-children approach was still the wrong
  place for tabs regardless). `ContainerHeader` automatically drops its
  own bottom padding and border whenever `tabs` is set, so the tab row
  sits flush against the header with no gap and no doubled-up border —
  nothing to configure beyond passing `headerTabs`.
- Everything else — the actual body content, including any card-like
  block (a summary, a detail card, etc.) — is plain `children`, inside
  `PanelContent`'s normal scrolling flow. It scrolls *under* the fixed
  `headerTabs` row above it (which isn't part of that scroll region at
  all) rather than needing any special positioning of its own.
- Give card-like content blocks a neutral container —
  `rounded-lyra-md bg-lyra-bg-control-subtle p-4` — rather than letting
  them sit flush against the panel's own background with no visual
  boundary from the rows around them.

Worked examples: `ContainerHeader.stories.tsx`'s `WithTabs` story (the
canonical reference for the `tabs` prop itself) and `InteriorPanel.stories
.tsx`'s `WithTabs` story (the same thing composed through `headerTabs`),
plus the real usage in `agent-next-gen-v1/src/components/AgentNextGenPage
.tsx`: `CustomerInformationInteriorPanel` owns the `activeTab` state both
the header's `TabList` (via `headerTabs`) and the scrolling body
(`CustomerInformationPanelBody`, plain `children` — a field list, then a
"Last Interaction" summary in a neutral container) need, since splitting
tabs out of `children` means that state can no longer live inside the body
component alone.

### Every menu/dropdown must be built on `Menu` — no exceptions

**Requirement:** any dropdown, select, combobox, autocomplete, context menu, or action menu — in this library or in a repo consuming it (`agent-next-gen-v1`, `lyra-ux-templates`, `Agent Nav Testing`, etc.) — must render its option/item rows through the shared `Menu` component. Never hand-roll `<button role="menuitem">` / `<div role="option">` rows with their own one-off hover/pressed/active classNames. `Select`, `Autocomplete`, `PhoneInput`'s country picker, and `Table`'s column-header context menu all compose `Menu` internally for exactly this reason — copy one of those as a reference before reaching for raw `<button>`s.

The payoff isn't just less code: it means every menu in every app automatically stays in sync with `Menu`'s item states — hover, pressed, disabled, destructive, and (critically) the **active/current-item** treatment, which is the thing that's easiest to drift out of sync when hand-rolled: persistent blue background + left accent bar, escalating to a darker shade on hover and press (`bg-lyra-bg-active-subtle` → `hover:bg-lyra-state-hover-active-subtle` → `active:bg-lyra-state-pressed-active-subtle`). A hand-rolled dropdown that only applies the base subtle blue (no darker hover/press tiers, no accent bar) is the most common way this drifts — if you're tempted to write that className by hand, use `Menu` instead.

### Using Menu in non-menu contexts (combobox, listbox, autocomplete)

`Menu` defaults to `role="menu"` / `role="menuitem"`, which is correct for action menus. When you need a dropdown that is semantically a selection list (combobox, autocomplete, multi-select, single-select), use the override props instead of reimplementing the item rows:

```tsx
<Menu
  menuRole="listbox"
  itemRole="option"
  items={options.map(o => ({ id: o.value, label: o.label, active: o.value === current, onClick: () => select(o) }))}
/>
```

Use `active` (not a hand-rolled `selected` boolean) to mark the current/chosen item — it's the single prop that drives the whole current-item treatment described above. If the list also needs a leading checkmark or checkbox for the selected state, pass it as `icon` (see `select.tsx`'s single- and multi-select branches for both patterns).

**Known, intentional exception:** `AppMenu` (the app-launcher tile grid) does *not* compose `Menu` — its items are large icon tiles with their own sizing and no submenu/shortcut/description affordances, a genuinely different visual pattern rather than a plain option list. If you're building anything that's fundamentally a vertical list of rows, it isn't this exception; it should use `Menu`.

**Shadow clipping rule:** never place `overflow-y-auto` / `overflow-hidden` on a *parent* of `Menu` — it will clip `Menu`'s `shadow-lg`. Apply `overflow-y-auto max-h-[Npx]` directly to `Menu` via its `className` prop so the element controls its own overflow without cutting its own shadow:

```tsx
// ✅ overflow on Menu itself — shadow is safe
<Menu className="max-h-60 overflow-y-auto" ... />

// ❌ overflow on a parent — clips Menu's shadow
<div className="max-h-60 overflow-y-auto">
  <Menu ... />
</div>
```

### Menu / Popover width scale (canonical reference)

`Menu` itself has no fixed width — only a `min-w-[200px]` floor, sizing to content above that. When a component wraps `Menu` (or another item-list dropdown) in a `Popover`/`PopoverPrimitive.Content` that needs a *fixed* width rather than content-sizing, pick from this scale instead of choosing an arbitrary pixel value:

| Size | Width | Use | Example |
|---|---|---|---|
| `sm` | 200 px (`Menu`'s own `min-w-[200px]` default) | Simple item-only menus, no header or search row | `channel-row.tsx` kebab menu, `agent-notifications.tsx` |
| `md` | 256 px (`w-64`) | A small header/search/filter row above the list | `agent-profile.tsx` status picker |
| `lg` | 320 px (`w-[320px]`) | A title header + close button, or richer items with icons | `create-new.tsx` |

This scale applies to `Menu`/`Popover`-based item-list panels specifically — calendar/time pickers (`date-picker.tsx`, `time-picker.tsx`) and trigger-matched dropdowns (`autocomplete.tsx`, `phone-input.tsx`, which intentionally size to `var(--radix-popover-trigger-width)`) have their own width drivers and are exempt. Do not invent a new fixed width for a `Menu`/`Popover` combo without checking this table first — this is exactly the kind of raw-Tailwind-value drift the "Important Patterns" section of `PROJECT_SUMMARY.md` already warns about (see the `h-3.5` vs `h-3` badge-sizing incident).

### Channel type colors (canonical reference)

Voice/Chat/Email (and any other communication channel type — SMS and WhatsApp read as "Chat" wherever they're grouped down to these three, e.g. `agent-next-gen-v1`'s `contactHistoryChannelType`) get one fixed, consistent color each, rather than every consuming app picking its own tint per instance:

| Channel type | Color | `Tag` variant | Token pair |
|---|---|---|---|
| Voice | Purple | `variant="purple"` | `lyra-accent-purple-{soft,strong}` |
| Chat (chat/SMS/WhatsApp) | Teal | `variant="teal"` | `lyra-accent-teal-{soft,strong}` |
| Email | Pink | `variant="pink"` | `lyra-accent-pink-{soft,strong}` |

`Tag` exposes exactly these three as fixed variants (not the full `lyra-accent-*` hue set — slate/red/orange/yellow/lime/green/blue exist as tokens but aren't wired into `Tag`) specifically so a channel-type tag can't drift into a fourth, undocumented hue. Pass an `icon` (a Lucide glyph — `Phone`/`MessageCircle`/`Mail`) alongside `label`/`variant="purple"|"teal"|"pink"` and `shape="pill"` for a channel-type pill (see `agent-next-gen-v1`'s `ContactHistoryCard`, the reference implementation this convention was pulled from). Where there's no room for a full pill (e.g. a 48px icon-only table column), tint the bare icon with the matching `text-lyra-accent-{purple,teal,pink}-strong` class instead of leaving it flat gray (see `AgentNextGenPage.tsx`'s `InteractionsTable` type-icon column) — same three colors, just without the pill chrome.

`channel-row.tsx`'s own `ChannelRow` (the per-channel chip on an `InteractionNavItem` card — Voice/Chat/SMS/WhatsApp/Email) is the third reference: its `CHANNEL_TYPE_TAG_VARIANT` export is the canonical `ChannelType → TagVariant` lookup — reuse it (not a fresh hand-written switch) anywhere else in lyra-ui that needs to color a chip by `ChannelType`. Note `awaitingResponse` there always overrides to `"critical"` (red) regardless of channel type — that's a status signal layered on top of, not replacing, the type-color convention; a channel type never gets its own "urgent" tint.

Don't reach for `Tag`'s status variants (`success`/`warning`/`critical`/`info`) for a channel type — those are reserved for state (resolved/pending/error/informational), and reusing one for "this is a Voice contact" would collide with an actual status tag sitting right next to it in the same row (see `ContactHistoryCard`'s `statusLabel`/`statusVariant` tag, which sits beside the channel tag and must read as a visually distinct kind of information).

### Input width in bounded rows (card headers, toolbars)

`Input`/`SearchInput`/every other field built on the same pattern render `w-full` by default — correct for a form column, where the field should fill whatever width its container already constrains it to. That default is wrong, though, for a field dropped into a `DashboardCard`/`Container` header or a toolbar row that sizes to its own content (e.g. `ContainerHeader`'s `actions` slot, which is `shrink-0`) — an un-overridden `w-full` there collapses to the input's intrinsic min-content width instead of reading as a real search field.

**Convention:** in these bounded, non-form rows, size the field to try to stretch toward 320px, shrinking no further than 240px, via:

```tsx
<SearchInput className="flex-1 min-w-[240px] max-w-[320px]" ... />
```

This is the same scale `Table`'s own toolbar quick-search row already uses (`table.tsx`) and what `ContactHistoryCard`'s header search follows (`agent-next-gen-v1/src/components/AgentNextGenPage.tsx`) — match it rather than picking an arbitrary fixed width (`w-56`, `w-64`, etc.) for a new header/toolbar field. Note `flex-1` only pulls in real extra width when the field's immediate flex container is itself free to grow (a full-width toolbar row, for instance); inside a `shrink-0` header-actions slot with no other stretched sibling, the field will settle near the 240px floor instead of reaching 320px — that's expected, not a bug to chase, since there's no free space to distribute in the first place.

Leave the `w-full` default alone for genuine full-width form fields — this scale is specifically for standalone search/filter inputs sitting in a header or toolbar, not a form's own inputs.

### Every modal must be built on `Modal` — no exceptions

**Requirement:** any dialog that needs a backdrop, focus trap, Escape-to-dismiss, and portal rendering — in this library or in a repo consuming it (`agent-next-gen-v1`, `Outbound-Campaigns`, `lyra-ux-templates`, `Agent Nav Testing`, etc.) — must render through the shared `Modal` component (`modal.tsx`), which wraps `@radix-ui/react-dialog` directly. Never hand-compose `Overlay` + `Container variant="modal"` at a call site the way `CampaignDetailsModal.tsx` and `agent-next-gen-v1`'s welcome modal used to — that pattern still works, but every call site has to remember Radix's `Title` requirement, the hidden-trigger workaround, and the backdrop-click/Escape wiring on its own, and it's easy for one of those to quietly drift or go missing (the Storybook-only `UI/Modal` stories drifted the furthest: they used to render a bare `Container variant="modal"` with no `Overlay` at all, meaning no focus trap, no portal, and no Escape handling ever existed there — a design reviewer looking at Storybook had no way to notice, since it still looked identical to a real modal).

`Modal` exposes the exact same `header*` props `Container` does (`headerTitle`, `headerIcon`, `headerActions`, etc. — see `modal.tsx`), plus `open`/`onClose`/`closeOnBackdropClick`/`variant` (backdrop dark/light)/`container`, so it's a drop-in replacement: swap `<Overlay ...><Container variant="modal" ...>` for `<Modal ...>` and delete the now-redundant `Overlay` wrapper. If your modal's body already renders its own heading (e.g. `AgentWelcomeMessage`, `LoginCard`'s pattern), pass that component `bare` (where supported) so `Modal`'s own surface is the only card chrome rendered, and use `Modal`'s `ariaTitle` prop to still give screen readers a real accessible name without a duplicate visible header row.

`Overlay` itself isn't deprecated — it's still the right tool for layered UI that isn't a `Container`-chromed dialog (see `Overlay.stories.tsx`). `Modal` is specifically the "backdrop + focus trap + modal card chrome" composition, for the case `Overlay` + `Container variant="modal"` was always being manually reassembled to build anyway.

### How to check what exists

1. Search `src/index.ts` — every public component is listed there.
2. Browse Storybook — categories `Custom Primitives`, `UI`, and `Templates` cover the full component surface.
3. If something close-but-not-quite exists, **extend it via props** (new variant, new size, new slot) rather than duplicating it.

### When a brand-new primitive is genuinely needed

Only create a net-new component when:
- No existing component covers the use case even with additional props, and
- The component will be reused in at least two distinct contexts.

In all other cases, prefer composition.

---

## 3. Controlled components

**Every interactive component must be fully controlled — it owns no internal state for its primary value.**

A controlled component receives its current value as a prop and reports changes via a callback. The *caller* owns the state. This is what makes components composable: a single source of truth, predictable re-renders, and zero hidden state surprises when a component is embedded inside a larger one.

### The pattern

```tsx
// ✅ Controlled — caller owns state
interface MyComponentProps {
  value: string;           // current value comes in
  onChange: (v: string) => void;  // change goes out
}

// In the consumer (story, page, parent component):
const [value, setValue] = useState("default");
<MyComponent value={value} onChange={setValue} />
```

```tsx
// ❌ Uncontrolled — component hides state internally
const MyComponent = () => {
  const [value, setValue] = useState("default"); // ← caller can never see or drive this
  ...
};
```

### Why this matters in composite components

When a controlled component is embedded inside a larger one (e.g. `AgentProfile` inside `AgentNextGen`), the parent must:

1. Declare state for every value the child manages.
2. Pass that state as props.
3. Wire the child's callback back to the state setter.

If any of these steps are skipped, the child's interactions fire into a void — the UI accepts the click but the display never updates.

```tsx
// ✅ Fully wired — status updates are visible
const [status, setStatus] = useState<AgentStatus>("available");
<AgentProfile status={status} onStatusChange={setStatus} />

// ❌ Prop hardcoded — onStatusChange either missing or ignored
<AgentProfile status="available" />
```

### Rules

- **Never hold the primary value in local state.** Use local state only for purely UI concerns (hover, focus, open/closed of a subordinate overlay) that the parent has no reason to control.
- **Every value prop must have a corresponding callback prop** (`value` → `onChange`, `status` → `onStatusChange`, `open` → `onOpenChange`, etc.).
- **Stories and composite components must wire every callback to state.** A story that ignores a callback is incomplete — it creates a false impression that the component does not respond to interaction.
- **Composite story components must use `useState` for every interactive child.** Do not pass static values for props that are meant to change at runtime.

### Accepted exceptions

| Case | Rule |
|---|---|
| Transient UI state (tooltip open, dropdown open, hover highlight) | May be internal — caller rarely needs to drive it |
| Derived / computed display values (formatted labels, counts) | Computed from controlled props, no separate state needed |
| Animation state | Always internal |

---

## 4. Z-index hierarchy

All overlapping layers in Lyra UI follow a fixed z-index scale. **Never use an arbitrary z-index outside this table** — doing so breaks the guaranteed stacking order for every component rendered in the same viewport.

| Layer | z-index | Components |
|---|---|---|
| Base content | `0` – `49` | Normal document flow, sticky headers |
| Overlays & dropdowns | `9999` | Portal wrappers (e.g. `NotificationsBell` panel portal) |
| Tooltips | `10000` | `Tooltip` (`TooltipPrimitive.Content`) |
| Priority menus | `10001` | `AgentProfile` status menu — always the topmost interactive layer |
| Tooltips nested inside a priority menu | `10002` | `AgentProfile`'s favorite-star, agent-leg, and connected-apps-badge tooltips — must clear their own `z-[10001]` parent panel |
| Popovers nested inside another popover | `10003` | `CreateNew`'s per-row channel flyout (Outbound picker); `PhoneInput`'s country dropdown when used inside `CreateNew` (dialpad group and drill-down screen 1, via its `dropdownClassName` prop) — both must clear their own `z-[9999]` parent panel |
| `Menu` submenu flyout nested inside a priority menu | `10004` | `AgentProfile`'s "Connected Apps" row — its `submenuContent` flyout must clear its own `z-[10001]` parent panel, set via `MenuItemDef`'s `submenuZIndexClassName` |

### Rules

- **Portal wrappers** that use `ReactDOM.createPortal` or `position: fixed` must use `z-index: 9999` (Tailwind: `z-[9999]`).
- **Tooltips** must use `z-[10000]` so they always clear portal wrappers. The Lyra `Tooltip` component already enforces this — do not override it lower.
- **The agent status menu** uses `z-[10001]` and must remain the highest interactive layer. Never add a new component at `z-[10001]` or above without updating this table.
- **A tooltip nested inside the agent status menu is a special case:** the default `z-[10000]` tooltip stacking level sits *below* the menu's own `z-[10001]` panel, so a tooltip triggered by something inside that menu (e.g. hovering the favorite-star button) renders behind its own parent and is invisible even though it's technically open. Pass `className="z-[10002]"` to `<Tooltip>` for any tooltip that lives inside the agent status menu (or any future `z-[10001]`-level component) so it clears its own container. Do not raise the shared `Tooltip` component's own default — override per-instance via `className` only where the tooltip's trigger genuinely lives inside a `z-[10001]` layer.
- **The same problem applies to a `Popover` nested inside another `Popover`** — e.g. a per-row hover flyout inside an already-open picker panel. The default `Popover` z-index (`z-50`, see below) sits well below its own parent's `z-[9999]`, so pass `className="z-[10003]"` to the nested instance. General rule: whenever you nest one overlay-ish component inside another, check this table and give the nested one the next unused integer above its own parent's tier — don't assume defaults compose correctly just because each component works fine in isolation.
- **This isn't limited to components literally named `Popover`.** Anything with its own internal Radix Popover/Popper (a searchable dropdown, a country selector, a color picker, etc.) has the exact same failure mode when it's nested inside something else's `z-[9999]` panel — `PhoneInput`'s country dropdown is a concrete example: it hardcodes `z-50` internally for its normal-flow case, so it needed a dedicated `dropdownClassName` prop (not just `className`, which targets the field shell instead) so a consumer like `CreateNew` can raise it to `z-[10003]` when nesting it. When adding a new overlay-ish component, ask "can this be nested inside another popover/menu?" — if yes, expose a way to override its overlay's z-index rather than assuming it'll only ever be used at the top level.
- **Why `z-50` breaks in portals:** Tailwind's `z-50` is z-index 50, which loses to any stacking context created by a `z-[9999]` portal container rendered later in the DOM. Always use the scale above for any component that renders outside normal document flow.
- **`Menu`'s own submenu flyout (`submenu`/`submenuContent`) is the same failure mode again**, one level further down. It's portaled to `document.body`, so it needs its own `z-[9999]` default, exposed via `MenuItemDef`'s `submenuZIndexClassName` for the same reason `PhoneInput`'s `dropdownClassName` exists: a submenu nested inside something already at or above `z-[9999]` (e.g. `AgentProfile`'s "Connected Apps" row, whose flyout lives inside the status menu's `z-[10001]` panel) needs to clear that specific parent, so it's raised to `z-[10004]` there — the next unused integer, since `10002`/`10003` are already claimed by the tooltip- and popover-nesting cases above. This was a real, shipped bug (not just a hypothetical): the submenu wrapper hardcoded `z-50` — below even the portal-wrapper baseline — so any submenu nested inside a higher-tier panel silently rendered behind it.

### Adding a new layer

If a new component genuinely needs to appear above the current ceiling:

1. Add it to the table above with the next integer.
2. Update the relevant component's z-index class.
3. Verify that tooltips and the agent status menu still render above it.

---

## 5. Icons

**Always use [Lucide React](https://lucide.dev/icons/) for icons.** Before adding any icon, verify the exact icon name exists in Lucide — do not guess or approximate.

### Standard icon props

All Lucide icons must use the following defaults unless the surrounding context explicitly dictates otherwise (e.g. a compact list item):

```tsx
<MyIcon className="h-6 w-6" strokeWidth={1.4} />
```

| Prop | Value | Rationale |
|---|---|---|
| `className` | `h-6 w-6` (24 px) | Consistent optical size across the UI |
| `strokeWidth` | `1.4` | Matches Lyra's visual weight — lighter than Lucide's default of 2 |

### Exceptions

| Context | Size | Notes |
|---|---|---|
| Compact menu / list item icons | `h-4 w-4` (16 px) | Keep stroke at `1.4` |
| Inline body text icons | `h-4 w-4` (16 px) | Keep stroke at `1.4` |
| Large empty-state illustrations | `h-8 w-8` or larger | Keep stroke at `1` or `1.4` |

### Rules

- **Never use raw SVG** for icons that exist in Lucide — import from `lucide-react` instead.
- **Never hard-code icon colours** with hex/rgb — always use a lyra token class (e.g. `text-lyra-fg-secondary`).
- **Always confirm the Lucide icon name** before writing code. Icon names are kebab-case on the Lucide website but PascalCase as React imports (e.g. `link-2-off` → `Link2Off`).

---

## 6. File naming & location

| Artifact | Convention | Example |
|---|---|---|
| Component source | `kebab-case.tsx` | `panel-header.tsx` |
| Story file | `PascalCase.stories.tsx` | `PanelHeader.stories.tsx` |
| Story directory | `src/components/__stories__/` | — |
| Utility file | `kebab-case.ts` | `utils.ts` |

Never create a per-component `index.ts`. All exports are centralised in `src/index.ts`.

---

## 7. Component structure

Every component follows this structure in order:

```tsx
// 1. React import
import * as React from "react";

// 2. Third-party imports (cva, lucide icons, radix primitives, etc.)
import { cva, type VariantProps } from "class-variance-authority";

// 3. Internal imports (cn utility, other lyra components)
import { cn } from "../lib/utils";

// 4. CVA variant definition (if applicable)
const myComponentVariants = cva("base-classes", {
  variants: { ... },
  defaultVariants: { ... },
});

// 5. Props interface
export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {
  // Additional props
}

// 6. Component (always forwardRef)
const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(myComponentVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// 7. displayName (required)
MyComponent.displayName = "MyComponent";

// 8. Named exports
export { MyComponent, myComponentVariants };
export type { MyComponentProps };
```

### Rules

- **Always use `React.forwardRef`** — every component must forward its ref to the underlying DOM element.
- **Always set `displayName`** — required for Storybook and React DevTools.
- **Never use default exports** — named exports only.
- **Spread `...props`** onto the root element so consumers can pass arbitrary HTML attributes.
- **Accept `className`** and merge it last via `cn()` so consumers can override styles.

---

## 8. TypeScript conventions

### Naming

| Thing | Convention | Example |
|---|---|---|
| Props interface | `{ComponentName}Props` | `BadgeProps`, `PanelProps` |
| CVA variants constant | `{componentName}Variants` | `buttonVariants`, `circleBadgeVariants` |
| Union type (color, variant, etc.) | descriptive PascalCase | `BadgeColor`, `BadgePillVariant`, `PanelSide` |

### Union types over enums

Use union types, not TypeScript enums:

```tsx
// ✅ correct
export type BadgeColor = "slate" | "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "blue" | "purple" | "pink";

// ❌ wrong
export enum BadgeColor { Slate = "slate", ... }
```

### Props interface extension pattern

```tsx
// Extends the matching HTML element's attributes + CVA VariantProps
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // any additional props
}
```

Use the most specific HTML element type available (`HTMLButtonElement`, `HTMLSpanElement`, `HTMLDivElement`, etc.).

---

## 9. Variants with CVA

Use `class-variance-authority` for any component with visual variants or size scales.

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const chipVariants = cva(
  // Base classes — shared by all variants
  "inline-flex items-center h-6 px-2 rounded-lyra-md lyra-body-md-emphasis",
  {
    variants: {
      variant: {
        subtle: "...",
        solid: "...",
      },
      // add more axes (size, shape, etc.) as needed
    },
    defaultVariants: {
      variant: "subtle",
    },
  }
);
```

### Button / icon-button size scale (canonical reference)

| Size | Height | Padding | Use |
|---|---|---|---|
| `sm` | 24 px (`h-6`) | `px-2.5` | Compact / dense UIs |
| `default` / `md` | 32 px (`h-8`) | `px-3` | Alias for `md` |
| `lg` | 36 px (`h-9`) | `px-4` | **Default size** |
| `xl` | 40 px (`h-10`) | `px-5` | Primary CTAs |

`defaultVariants.size` is `"lg"`. Do not change this without a design review.

---

## 10. Tailwind & theming

### Use `cn()` for all class merging

```tsx
import { cn } from "../lib/utils";

// cn() = clsx + twMerge — handles conditional classes and overrides cleanly
<div className={cn("base classes", condition && "conditional class", className)} />
```

### Lyra design tokens

Always use lyra CSS variable tokens via Tailwind utility classes rather than arbitrary values.

**Text / foreground**
- `text-lyra-fg-default` — primary body text
- `text-lyra-fg-secondary` — secondary / muted text
- `text-lyra-fg-action` — interactive / link text
- `text-lyra-fg-on-primary` — text on filled/dark surfaces

**Backgrounds**
- `bg-lyra-bg-surface-base` — default surface (cards, panels)
- `bg-lyra-bg-surface-container-subtle` — slightly elevated container
- `bg-lyra-bg-surface-shell` — outer shell / page background
- `bg-lyra-bg-surface-overlay` — modals, dropdowns
- `bg-lyra-bg-control` — form control fills

**Borders**
- `border-lyra-border-subtle` — light separator
- `border-lyra-border-default` — standard border
- `border-lyra-border-focus` — keyboard focus ring
- `border-lyra-border-active` — active / selected state

**Border radius**
- `rounded-lyra-sm` — buttons, icon buttons (incl. AppHeader's `ActionIconButton`/`Button` icon sizes — see `ActionIconButton`'s own doc comment for a real case where a hand-rolled AppHeader icon button drifted onto `rounded-lyra-lg` instead), inputs
- `rounded-lyra-md` — chips, tags, badges
- `rounded-lyra-lg` — cards, panels, modals

**Typography utility classes** (apply directly as class names)
- `lyra-heading-lg`, `lyra-heading-md`, `lyra-heading-sm`
- `lyra-body-md`, `lyra-body-sm`
- `lyra-body-md-emphasis`, `lyra-body-sm-emphasis`
- `lyra-label`

**Status / accent colors** (used in inline styles for dynamic colour axes)
```tsx
style={{
  backgroundColor: `var(--lyra-color-accent-${color}-soft)`,
  color: `var(--lyra-color-accent-${color}-strong)`,
}}
```

### Dark mode

Dark mode is handled at the token level via `[data-theme="dark"]` selectors on a parent element. Components should never hard-code light/dark-specific values — always use lyra tokens so dark mode works automatically.

### ResizeObserver pattern (container-aware components)

When a component needs to react to its own width (not the viewport), use a stable `useCallback` ref to avoid disconnecting the observer on re-renders:

```tsx
const stableRef = useCallback((el: HTMLDivElement | null) => {
  if (!el) return;
  const ro = new ResizeObserver(([entry]) => {
    setWidth(entry.contentRect.width);
  });
  ro.observe(el);
  // no cleanup needed — el is stable
}, []); // empty deps = stable identity

// + useLayoutEffect for initial synchronous measurement
useLayoutEffect(() => {
  if (measureRef.current) {
    setWidth(measureRef.current.getBoundingClientRect().width);
  }
}, []);
```

### CSS container-query pattern (lighter-weight alternative)

For a component whose "react to my own width" need is just "show/hide or restructure some CSS past a fixed breakpoint" (not "measure the exact pixel width in JS"), a plain CSS container query is simpler than `ResizeObserver` and needs no state at all: put `container-type: inline-size` on the wrapper, then `@container (max-width: Npx) { ... }` rules on the children. See `.lyra-container-grid-wrap`, `.lyra-metric-row-wrap`, `.lyra-tab-overflow-wrap`, and `.lyra-page-header-breadcrumb-wrap` in `lyra-tokens.css` for four examples of this. As with every CSS variable/class, add the rule to **both** `lyra-tokens.css` and `storybook.css` (the two must always be kept in sync with each other).

> **NEVER patch a container-query family's cross-axis behavior (flex-basis, align-items, height, width) with a bare Tailwind utility class (`flex-1`, `min-w-0`, `items-start`, etc.) on a consumer's own element.** This is a §1 hard-coding violation, not a harmless shortcut: every existing family (`.lyra-container-grid`, `.lyra-form-grid`, `.lyra-card-split`, `.lyra-metric-row`, ...) restructures its own children differently at *each* breakpoint stage — a row at one width, a CSS grid or stacked column at another — and a plain Tailwind class applies unconditionally across all of them. `flex-1`'s `flex-basis: 0%` is exactly the trap: correct in a flex-row stage (splits width evenly), silently wrong once that same family flips to `flex-direction: column` at a narrower stage (it now governs *height* instead, collapsing the element toward its minimum content size — see `.lyra-container-grid > *`, `.lyra-form-grid > *`, and `.lyra-card-split-even`'s own doc comments in `lyra-tokens.css` for three worked examples of this exact failure and its fix). If a family doesn't yet have a modifier class for the cross-axis behavior you need (e.g. two children that should split evenly, not just one fixed + one flexible), **add one to the family in `lyra-tokens.css`** — with its own explicit reset at every narrower stage — the same way `.lyra-card-split-even` was added rather than reaching for `className="flex-1 min-w-0"` inline. A one-off Tailwind class on the consumer only ever accounts for the stage you're looking at right now; it can't see the family's other stages, and it will not get updated if that family's thresholds ever change.

**Recent incident:** `agent-next-gen-v1`'s Customer Information Overview tab needed its field list and "Latest Interaction" card to split a `.lyra-card-split` row evenly instead of each taking its own natural content width. The first pass added `className="flex-1 min-w-0"` directly on both consumer elements — it looked correct in the wide/row stage, but `.lyra-card-split`'s own ≤480px stage flips to `flex-direction: column` without resetting those Tailwind classes (only its own `-fixed`/`-chart` modifiers get that reset), so the stacked stage would have silently collapsed both columns toward minimum content height instead of stacking full-width, the same bug already documented for `.lyra-container-grid`/`.lyra-form-grid`. Fixed by adding a real `.lyra-card-split-even` modifier to the family in `lyra-tokens.css` (row-stage `flex: 1 1 0%`, ≤480px reset to `flex: none; width: 100%`) and using that class instead — caught before shipping only because it was flagged directly, not because the first pass was reviewed against this rule.

**`TabList`'s `overflowMenu` prop is the standing default for any new tab bar.** When adding a new `<TabList>` anywhere in this repo or a consuming app (`agent-next-gen-v1`, `lyra-ux-templates`), pass `overflowMenu` unless that specific tab bar has its own different, purpose-built collapse strategy. There is no current exception — `ChannelTab`'s record-header conversation bar (`channel-row.tsx`) used to have its own bespoke text-shedding collapse at 480px/320px, but that was removed in favor of the same `overflowMenu` pattern every other tab bar uses. Every tab bar — settings pages, record detail panels, conversation bars, anything using plain `Tab`s — should get `overflowMenu` by default, the same way a new modal defaults to `Container variant="modal"` rather than a hand-rolled div.

---

## 11. Storybook stories

### File location

```
src/components/__stories__/MyComponent.stories.tsx
```

### Title format

```
"Category/ComponentName"
```

Common categories: `Custom Primitives`, `Custom Primitives/Container`, `UI`, `Templates`.

### Meta boilerplate

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../my-component";

const meta: Meta<typeof MyComponent> = {
  title: "Custom Primitives/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["subtle", "solid"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    disabled: { control: "boolean" },
    // suppress internal/unneeded props
    asChild: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;
```

### Story rules

- **Always export a `Default` story** — the baseline single-instance view.
- **Export an `AllVariants` story** — renders every variant/size combination in a grid for visual regression.
- **Use stateful wrapper components for stories with hooks** — never put `useState`/`useEffect`/`useCallback` directly in a `render` function; extract them into a named React component inside the story file to avoid "Maximum call stack" errors from Storybook's argTypes serialisation.

```tsx
// ✅ correct — hooks live in a real component
function ToolbarDemo(props: ToolbarDemoProps) {
  const [open, setOpen] = useState(false);
  return <MyComponent open={open} onToggle={() => setOpen(v => !v)} {...props} />;
}

export const Interactive: Story = {
  render: (args) => <ToolbarDemo {...args} />,
};

// ❌ wrong — hooks in render fn
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false); // will cause infinite loop
    return <MyComponent open={open} {...args} />;
  },
};
```

- **Panel sub-components** (`Panel/Interior`, `Panel/Side`) live under `Custom Primitives/Container`, not as separate top-level stories.
- **Delete obsolete stories** when a component is renamed or consolidated — do not leave orphaned story files.

### Controls guidance

| Prop type | Control |
|---|---|
| Union string | `"select"` with `options` array |
| Boolean | `"boolean"` |
| Free string | `"text"` |
| Number | `"number"` |
| React node / function | `{ table: { disable: true } }` |

---

## 12. Index exports

All exports live in `src/index.ts`. Never create per-component `index.ts` files.

### Pattern

```ts
// Component + variants (if CVA)
export { MyComponent, myComponentVariants } from "./components/my-component";

// All public types on a separate line
export type { MyComponentProps, MyVariantType } from "./components/my-component";
```

### Grouping

Use section comments to keep the file navigable:

```ts
/* ── Components ── */
/* ── Spinner ── */
/* ── Popover ── */
/* ── Utilities ── */
```

Add new exports in the most logical existing section, or create a new section with the same comment style.

---

## 13. New component checklist

Work through this list top-to-bottom before marking a component done.

```
[ ] Checked src/index.ts and Storybook — no existing component covers this use case
[ ] No hard-coded value overrides a real component's own correct behavior just to match a mockup (§1)
[ ] File named kebab-case.tsx in src/components/
[ ] Uses React.forwardRef
[ ] displayName set
[ ] Props interface named {ComponentName}Props, extends correct HTML attributes
[ ] Union types used (not enums) for variant/color/size axes
[ ] CVA used for any variant logic; defaultVariants set
[ ] cn() used for all class merging; className accepted and applied last
[ ] Only lyra-* tokens used for colour, spacing, radius, and typography
[ ] No hard-coded hex/rgb values (use CSS variables for dynamic colour axes)
[ ] Named exports only (no default export)
[ ] Exported from src/index.ts (component + variants + all types)
[ ] Every interactive value prop has a matching callback prop (controlled pattern)
[ ] Any z-index used follows the hierarchy table in §4 (portals: 9999, tooltips: 10000, agent status: 10001)
[ ] Story file at src/components/__stories__/{ComponentName}.stories.tsx
[ ] Story title follows "Category/ComponentName" format
[ ] Default story added
[ ] AllVariants story added
[ ] Stateful demo uses a wrapper component (not hooks in render fn)
[ ] Every interactive prop wired to useState in stories (no hardcoded values for runtime-changing props)
[ ] Composite stories (component used inside a larger component) wire all child callbacks to state
[ ] If debugging "doesn't appear/show up," ruled out rendering causes (§14) before touching event/state logic
[ ] Any new Tooltip usage has its placement checked against the component's actual layout context, not left at a reflexive default (§15)
[ ] Any new portal-rendering component (Popover-like, custom flyout, etc.) stops pointer/focus events from bubbling past its own content root, so it can't be wrapped by a Tooltip or similar hover-triggered wrapper without misfiring it (§16)
```

---

## 14. Debugging: diagnose rendering before behavior

When a bug report says something "doesn't appear," "doesn't show up," or "isn't visible" — including on hover, focus, or click — treat that as a *rendering* bug until proven otherwise, not a *behavior* bug. These are different failure classes with different fixes, and diagnosing the wrong one burns significant time chasing event handlers, hook state, and timing races on a component that was already mounted and open the whole time, just invisible.

This rule exists because of a real incident: a tooltip nested inside `AgentProfile`'s status menu was reported as "not appearing on hover." The investigation went straight to event/timing logic — Radix `Tooltip` trigger composition, `asChild` prop merging, a mount-guard delay — and found and fixed a real (but secondary) timing race. The tooltip still didn't appear. The actual cause was two lines away the whole time: the tooltip's `z-[10000]` was lower than its own parent panel's `z-[10001]` (see §4), so it was opening correctly and rendering behind its own container on every single hover. That fact was checkable in seconds by comparing two class names against the table in §4 — no live testing required — but wasn't checked until after a much more expensive investigation had already run.

**Check in this order:**

1. **Is the element actually in the DOM when the bug happens?** If yes, this is a rendering/visibility problem, not a logic problem — go straight to step 2 and do not start reading event-handler or hook code yet.
2. **Is it hidden by stacking order?** Compare the z-index in play against the hierarchy table in §4. Two elements portaled to the same container (e.g. `document.body`) stack by z-index number, not DOM order or mount time — a component can be fully open and still paint underneath an opaque sibling with a higher z-index. This is easiest to miss when a component is nested *inside* a higher-stacked parent (e.g. a tooltip triggered by something inside a `z-[10001]` menu): the child's own default z-index can be lower than the very parent it's rendered inside, which silently swallows it. See §4's rule on tooltips nested inside a priority menu for the concrete fix pattern (override the nested instance's z-index via `className`, don't change the shared component's default).
3. **Is it clipped by overflow?** An ancestor with `overflow-hidden` or `overflow-auto` will clip anything inside it that isn't portaled out.
4. **Is it hidden by CSS rather than by not being triggered?** `opacity-0`, `visibility: hidden`, `display: none`, inherited `pointer-events-none`, or a Tailwind named-group mismatch (`group/name` on the ancestor vs. a differently-named `group-hover/other:` on the child) can all make a correctly-triggered, fully-functional element invisible or unclickable.
5. **Only once 1–4 are ruled out** — the element genuinely never mounts, or the state that should open it never flips — move on to event handlers, hook state, and timing (delays, guards, race conditions). That's a real class of bug too, just a more expensive one to diagnose, so it belongs after the cheap static checks, not before them.

---

## 15. Tooltip placement

`placement` is not a cosmetic default to leave alone — it must open *into* available space, away from whatever edge or rail the trigger sits closest to. Picking a direction without checking the trigger's actual position causes the tooltip to fight for room against the edge, get flipped by `avoidCollisions` in a way that reads backwards, or open toward a boundary with no space at all.

**When asked to add a tooltip to a component:**

1. **If the component's position in the larger layout is genuinely ambiguous** from the request alone (e.g. a standalone component with no fixed home, or one used in multiple very different layout contexts), ask which direction it should open before implementing.
2. **Otherwise, infer it.** Look at how the component is actually composed in its own stories and real usage — a left nav rail, a top header, a bottom bar, a right-aligned panel — and pick the direction that opens away from that edge, not toward it.

**Default placement by layout context:**

| Trigger lives in... | Use `placement=` |
|---|---|
| A left rail / left nav (e.g. a collapsed icon button in `LeftNav`) | `"right"` |
| A right-aligned panel or right rail | `"left"` |
| A top app header / top bar | `"bottom"` |
| A bottom bar / footer | `"top"` |
| Inline in body content with no strong directional context | `"top"` (the `Tooltip` component's own default) |

Don't reach for `"bottom"` (or any single direction) as a reflexive default for every new tooltip. That's exactly what happened when a tooltip was first added to `CreateNew`'s icon-button trigger: it was given `placement="bottom"` without checking where `CreateNew` actually lives (a collapsed left nav rail, per its own stories), so it opened top/bottom against the rail's edge instead of out into the page. The fix was `placement="right"` — check the surrounding layout before choosing, every time.

---

## 16. Portals still bubble through the React tree

Any time a `Tooltip` (or anything else with hover/focus-triggered open logic) wraps a `Popover`, `Menu` submenu, or other portal-rendering component **from the outside**, hovering or focusing something *inside* that portal's content can incorrectly re-trigger the outer wrapper. The fix belongs on the portal-rendering component itself (stop propagation at its content root), not on every individual place that happens to wrap one in a Tooltip.

**Why this happens:** React re-dispatches synthetic events up the *React* fiber tree, not the DOM tree. A component rendered via `ReactDOM.createPortal` (which `Popover`, `Menu` submenus, and `Tooltip` itself all use) is physically mounted elsewhere in the DOM — but for event bubbling purposes, React still treats it as a normal descendant of wherever it's declared in JSX. So in a composition like:

```tsx
<Tooltip content="New Outbound" placement="right">
  <span className="inline-flex">
    <Popover content={<Menu items={...} />}>
      <button>+</button>
    </Popover>
  </span>
</Tooltip>
```

`Popover`'s content is portaled to `document.body`, nowhere near the `<span>` in the DOM — but it's still a React child of that `<span>`, which is exactly the element `Tooltip`'s `Trigger` clones its hover/focus handlers onto (`asChild`). Radix `Tooltip.Trigger` opens on `onPointerMove` / `onPointerDown` / `onFocus` and closes on `onPointerLeave` / `onBlur`. Hovering a menu item deep inside the popover panel fires a native `pointermove`, which React's synthetic system bubbles all the way up through the React tree — Menu item → Menu → popover content → `Popover` → `span` — reopening (or closing) a tooltip that has nothing to do with what the user is actually pointing at.

**This was a real, shipped bug:** hovering the "Outbound" row inside `CreateNew`'s popover (opened from the collapsed icon-button trigger) re-displayed that same icon button's own "New Outbound" tooltip, even though the cursor was nowhere near the button. The same composition pattern is used by `AgentProfile`'s avatar trigger and any other icon-button-with-popover-and-tooltip, so this wasn't a one-off — it affected every component built this way.

**The fix (already applied in `popover.tsx`):** stop the relevant synthetic events from propagating past `PopoverPrimitive.Content`'s own root, so nothing that happens inside a popover's panel can reach an ancestor outside it:

```tsx
const stopSyntheticBubble = (e: React.SyntheticEvent) => e.stopPropagation();
// ...on PopoverPrimitive.Content:
onPointerMove={stopSyntheticBubble}
onPointerDown={stopSyntheticBubble}
onPointerLeave={stopSyntheticBubble}
onFocus={stopSyntheticBubble}
onBlur={stopSyntheticBubble}
```

This is safe: Radix's own outside-click/focus-trap detection is implemented via native document-level listeners, not React bubbling, so it's unaffected. `onClick` is deliberately left alone — Radix's composed `onClick` handler on `Tooltip.Trigger` only *closes* the tooltip, and letting that bubble is harmless.

**Rule:** any new component that renders content via a portal (a new `Popover`-like primitive, a custom flyout, etc.) needs this same containment at its content root — don't rely on every consumer remembering not to wrap it in a Tooltip carelessly. If you're building something that *could* reasonably be wrapped by a Tooltip or similar hover-triggered wrapper from the outside, stop the bubbling at the source.

**`onClick` isn't always safe to leave alone.** Popover's own fix above deliberately skips `onClick` — Radix's composed click handler there only closes the tooltip, so letting it bubble is harmless. That's not a general rule, though: `menu-radix.tsx`'s `DropdownMenuPrimitive.Content`/`SubContent` (what `KebabMenuButton` renders under the hood) *do* stop `onClick` (`stopClickBubble`), because a dropdown is frequently nested inside another clickable element with real, stateful behavior — e.g. `ChannelRow`'s kebab lives inside its own clickable row (`onClick` selects that channel) inside `InteractionNavItem`'s clickable card (`onClick` selects/re-activates the interaction). Without stopping it, selecting "Unassign & Dismiss" removed the interaction from state and then the *same* click kept bubbling, re-firing both ancestor `onClick`s and re-selecting the just-removed card — since it no longer existed, the screen fell back to the dashboard even when other assignments were still open. This was a real, shipped bug (`agent-next-gen-v1`'s assignment-dismiss flow). Decide per portal: if an ancestor's `onClick` does something meaningful (select, navigate, toggle), stop it at the content root; only skip it, as Popover does, when you've confirmed the ancestor's `onClick` is inert or explicitly harmless to re-fire.

## 17. Field label casing — type it correctly, never fake it with CSS

**Rule:** when building or updating a prototype (a consuming app's screens/flows — `agent-next-gen-v1`, `lyra-ux-templates`, `Outbound-Campaigns`, `Agent Nav Testing`, etc.), form field labels (`Input`/`Select`/`PhoneInput`/`EmailInput`/`Checkbox`/`Radio`/anything using `Label` or a `label` prop) should capitalize the first letter of each word — e.g. **"Email Address"**, not "Email address" — unless the user has explicitly specified different casing for that label. This is Title Case for the label text itself, not a restyling instruction.

**This means two different mistakes, not one — both banned:**

1. **Typing the wrong casing** — `"Email address"` instead of `"Email Address"`.
2. **Typing the right text, then fighting it with CSS** — `"Last Interaction"` typed correctly, then a hand-added `uppercase`/`tracking-wide`/`capitalize` `text-transform` bolted onto it to chase how a screenshot happened to render it. This is arguably the worse of the two: it's not just a casing slip, it's a whole extra layer of hand-written styling sitting on top of a shared component's own typography, fighting it instead of using it. **Never add `text-transform` (or any other ad-hoc restyling) to force a label/title's display casing — type the string correctly and let the component's real typography render it, full stop.** See §1's "Recent incidents" for a real example of exactly this.

This does **not** apply to `aria-label` attributes (screen-reader-only strings, which stay natural sentence case — "Close dialog" is correct as an `aria-label`, not a visible label) or to lyra-ui's own internal Storybook demo labels (placeholder content like "Radio label" used purely to demonstrate a component in isolation, not real prototype copy).

**Examples of the bugs this catches:**

- An `EmailInput` labeled `"Email address"` — grammatically fine as a sentence, but inconsistent with the rest of a form where every other label ("Phone Number", "Full Name") is Title Case. Caught via a screenshot of the rendered field, not by reading the source — casing bugs like this are easy to miss in code review since `"Email address"` isn't a typo, just the wrong convention.
- `agent-next-gen-v1`'s `CustomerInformationPanelBody` typed `"Last Interaction"` correctly, then still wrapped it in `className="uppercase tracking-wide"` to match a reference screenshot's all-caps section label — restyling correct text instead of trusting it. Fixed by deleting the CSS and routing the string through `Accordion`'s own `title` prop instead of a hand-built `<span>`.

---

## 18. Match reference component behavior in prototypes

**Rule:** when a prototype (`agent-next-gen-v1`, `lyra-ux-templates`, `Outbound-Campaigns`, `Agent Nav Testing`, etc.) wires up a lyra-ui component with its own state/handlers, that glue code must faithfully reproduce the component's real, documented behavior contract — not just import the right component and then invent divergent open/close/pin/hover/focus semantics around it — unless the user has explicitly asked for that specific prototype to behave differently.

Using the correct component (rule 3, "Composition over reimplementation") is necessary but not sufficient. A prototype can import `SidePanel` correctly and still drift from what `SidePanel` actually means, purely in the surrounding `useState`/handler code the prototype writes to drive it. That drift is easy to miss because the component itself never changed — only the call site's logic did — so a diff of the component file shows nothing wrong, and the bug only shows up as an inconsistent *interaction*, not a visibly different render.

**Before wiring open/close/pin/hover/select/etc. state around a component, find its real reference usage first** — the component's own Storybook story (e.g. `Panel.stories.tsx`'s "Side Panel" story) and/or its most established real consumer (e.g. `admin-shell.tsx`'s `SidePanel` usage) — and copy that behavior contract exactly: which state transitions are allowed, which are guarded, and under what conditions. Don't infer the contract from what "seems reasonable" for the new prototype in isolation.

**Example of the bug this catches:** `AgentNextGenTemplate.stories.tsx` (and its two consumer-app mirrors) used `SidePanel`/`CustomerInformationPanel` correctly as a component, but wrote their own pin/hover handlers from scratch instead of copying `admin-shell.tsx`'s `handleLeftHoverStart`/`handleLeftHoverEnd`/`handleLeftPinToggle` reference pattern. That produced two separate real bugs, both invisible from the component's own code: (1) the record-icon click handler toggled `pinned` and `open` together, so "closing" a pinned panel silently unpinned it too — reopening it later came back unpinned instead of staying pinned; (2) `onSidePanelHoverStart` had no pinned guard at all (unlike `onSidePanelHoverEnd`, which did), so hovering could still reopen a pinned-but-closed panel even though pinned mode is supposed to be click-only in both directions. Both were fixed by making the prototype's handlers match `admin-shell.tsx`'s handlers line-for-line, not by changing `SidePanel` itself — the component was never the problem.
