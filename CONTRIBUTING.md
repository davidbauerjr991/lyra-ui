# Lyra UI — Component Authoring Guidelines

> **Reference this document every time you create or modify a component.**
> These are the canonical patterns for the lyra-ui library. Deviating from them requires explicit team approval.

---

## Table of Contents

1. [Cross-repo sync rule](#1-cross-repo-sync-rule)
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

---

## 1. Cross-repo sync rule

**Any component change in `lyra-ui` must be mirrored in `lyra-ux-templates`, and vice versa.**

If you fix or update a component in `lyra-ux-templates`, apply the identical structural change to the source component in `lyra-ui`. The template project is the live consumer — it must never drift from the library.

---

## 2. Composition over reimplementation

**Before writing any new UI logic, check whether an existing lyra-ui component already provides it.**

If a higher-level component needs a dropdown, trigger, input, panel, or any other interactive element — import and compose the existing lyra-ui primitive. Never re-implement behaviour that already exists in the library.

### Examples

| You need | Use | Do not create |
|---|---|---|
| A dropdown attached to a trigger | `Menu` or `Popover` + `PopoverContent` | A custom `<ul>` dropdown |
| A text field | `Input` | A raw `<input>` with manual styling |
| A select / combobox | `Select` + `Menu` (or Radix `Select`) | A new dropdown+input hybrid from scratch |
| A panel with header/footer | `Panel` + `PanelHeader` + `PanelFooter` | A custom modal-like div with its own header |
| A chip / badge | `Chip` | An inline-styled `<span>` |
| An icon button | `ActionIconButton` or `Button` with icon size | A bare `<button>` with a Lucide icon |

### Using Menu in non-menu contexts (combobox, listbox, autocomplete)

`Menu` defaults to `role="menu"` / `role="menuitem"`, which is correct for action menus. When you need a dropdown that is semantically a selection list (combobox, autocomplete, multi-select), use the override props instead of reimplementing the item rows:

```tsx
<Menu
  menuRole="listbox"
  itemRole="option"
  items={options.map(o => ({ id: o.value, label: o.label, selected: o.value === current, onClick: () => select(o) }))}
/>
```

**Shadow clipping rule:** never place `overflow-y-auto` / `overflow-hidden` on a *parent* of `Menu` — it will clip `Menu`'s `shadow-lg`. Apply `overflow-y-auto max-h-[Npx]` directly to `Menu` via its `className` prop so the element controls its own overflow without cutting its own shadow:

```tsx
// ✅ overflow on Menu itself — shadow is safe
<Menu className="max-h-60 overflow-y-auto" ... />

// ❌ overflow on a parent — clips Menu's shadow
<div className="max-h-60 overflow-y-auto">
  <Menu ... />
</div>
```

### How to check what exists

1. Search `src/index.ts` — every public component is listed there.
2. Browse Storybook — categories `Atoms`, `UI`, and `Templates` cover the full component surface.
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

### Rules

- **Portal wrappers** that use `ReactDOM.createPortal` or `position: fixed` must use `z-index: 9999` (Tailwind: `z-[9999]`).
- **Tooltips** must use `z-[10000]` so they always clear portal wrappers. The Lyra `Tooltip` component already enforces this — do not override it lower.
- **The agent status menu** uses `z-[10001]` and must remain the highest interactive layer. Never add a new component at `z-[10001]` or above without updating this table.
- **Why `z-50` breaks in portals:** Tailwind's `z-50` is z-index 50, which loses to any stacking context created by a `z-[9999]` portal container rendered later in the DOM. Always use the scale above for any component that renders outside normal document flow.

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
| Props interface | `{ComponentName}Props` | `ChipProps`, `PanelProps` |
| CVA variants constant | `{componentName}Variants` | `buttonVariants`, `chipVariants` |
| Union type (color, variant, etc.) | descriptive PascalCase | `ChipColor`, `ChipVariant`, `PanelSide` |

### Union types over enums

Use union types, not TypeScript enums:

```tsx
// ✅ correct
export type ChipColor = "slate" | "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "blue" | "purple" | "pink";

// ❌ wrong
export enum ChipColor { Slate = "slate", ... }
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
- `rounded-lyra-sm` — buttons, inputs
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

Common categories: `Atoms`, `Atoms/Container`, `UI`, `Templates`.

### Meta boilerplate

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../my-component";

const meta: Meta<typeof MyComponent> = {
  title: "Atoms/MyComponent",
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

- **Panel sub-components** (`Panel/Interior`, `Panel/Side`) live under `Atoms/Container`, not as separate top-level stories.
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
[ ] Mirrored in lyra-ux-templates if change affects an existing template component
```
