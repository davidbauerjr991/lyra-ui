# @nicecxone/lyra-ui

React component library built on the **Lyra Foundations (Beta)** design system from NICE CXone — ~95 components spanning primitives, UI, charts, and full page templates.

## Start here (routing)

- **Browse every component live**: https://davidbauerjr991.github.io/lyra-ui/ (the deployed Storybook — always current with `main`)
- **Build a prototype without code**: open `create-lyra-prototype.html` (repo root) — a wizard that generates a Claude Cowork or Claude Design prompt. No terminal needed.
- **You are Claude, building a prototype**: read `CLAUDE-INSTRUCTIONS.md` (scenario playbook) and `prototype-kit/README-FIRST.md` (fast-path build pipeline).
- **You are Claude, modifying library components**: `CLAUDE.md` + `CONTRIBUTING.md` are the binding rulebooks.
- **Your own components** (not in the library): `src/components/local/` — gitignored, survives pulls; see its README.

## Components

The full, current component catalog lives in the [live Storybook](https://davidbauerjr991.github.io/lyra-ui/) and `src/index.ts` — a hand-maintained list here would go stale (and did). Categories: Custom Primitives, Headless Primitives, UI, Charts, and Templates (Admin UIs, Agent Next Gen, Data Management, Dashboards, Forms).

## Installation

### From GitHub (no registry needed)

```bash
npm install github:davidbauerjr991/lyra-ui
```

### From npm (if published)

```bash
npm install @nicecxone/lyra-ui
```

### Peer dependencies

Make sure your project has these installed:

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Import the Lyra CSS tokens

In your app's entry point (e.g., `main.tsx` or `index.css`):

```css
@import "@nicecxone/lyra-ui/styles";
```

### 2. Add the Tailwind preset

In your `tailwind.config.js`:

```js
import lyraPreset from "@nicecxone/lyra-ui/tailwind-preset";

export default {
  presets: [lyraPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // Include lyra-ui components so Tailwind scans their classes
    "./node_modules/@nicecxone/lyra-ui/dist/**/*.js",
  ],
  // ...your other config
};
```

### 3. Use the components

```tsx
import {
  Button,
  Checkbox,
  SearchInput,
  AppHeader,
  AppName,
  ActionIconButton,
  ActionAvatarButton,
} from "@nicecxone/lyra-ui";
```

## Usage Notes

### PageHeader placement

`PageHeader` belongs **inside** the content surface (`Container`), not at the layout level above it. Place it as the first child of your `Container` so it renders flush against the top of the white card with its bottom border acting as the section divider.

The `title` prop must always match the label of the currently active item in the left nav — it represents the page the user is on, not a sub-section title. For example, if "Dashboard" is the active nav item, the `PageHeader` title is "Dashboard".

```tsx
<Container className="flex flex-col flex-1 overflow-hidden">
  <PageHeader
    title="Dashboard" {/* matches the active left nav item */}
    actions={
      <>
        <Button variant="outline">Export</Button>
        <Button>New Case</Button>
      </>
    }
  />
  {/* page content */}
</Container>
```

Do **not** render `PageHeader` as a sibling of `Container` at the template body level — it would appear outside the surface, breaking the visual hierarchy.

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode (rebuilds on changes)
npm run dev

# Run Storybook
npm run storybook

# Type check
npm run lint
```

## Publishing

### Install from GitHub (recommended for internal teams)

In your consuming project's `package.json`:

```json
{
  "dependencies": {
    "@nicecxone/lyra-ui": "github:davidbauerjr991/lyra-ui"
  }
}
```

### Local development with npm link

```bash
# In the lyra-ui folder
npm link

# In your consuming project
npm link @nicecxone/lyra-ui
```
