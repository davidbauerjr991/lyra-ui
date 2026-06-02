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

## Key Components

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
- Sizes: sm (32px), default (36px), lg (40px), xl (44px), icon-sm (32px), icon (36px), icon-lg (40px), icon-xl (44px)
- Variants: default, destructive, outline, ghost, icon
- Data Management uses default size (36px) for all buttons

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

## Important Patterns
- Always reuse existing components (Select, SearchInput, Checkbox, Button) — never rebuild custom versions
- New Tailwind color utilities must be added to BOTH `tailwind-preset.ts` AND `tailwind.config.js`
- New CSS variables must be added to BOTH `lyra-tokens.css` AND `storybook.css`
- New color tokens should be added to `Colors.stories.tsx` (swatches + alias table)

## Planned Future Work
- Empty template
- Dashboard template (with widgets)
- Edit template (settings/configure)
