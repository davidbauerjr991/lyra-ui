# @nicecxone/lyra-ui

React component library built on the **Lyra Foundations (Beta)** design system from NICE CXone.

## Components

- **Button** — Primary, destructive, outline, ghost, and icon variants
- **Checkbox** — Radix-based with checked, unchecked, indeterminate, and error states
- **Table** — Flex-based table with sticky headers, row selection, and scroll
- **Tabs** — TabList, Tab, and TabPanel with active/hover underline states
- **AppName** — Shell bar app name with icon and dropdown chevron
- **AppHeader** — Full header with AppName (left) and Actions (right) slots
- **AppMenu** — Application switcher dropdown with grouped items and logo footer
- **ActionIconButton** — Icon button with optional badge count
- **ActionAvatarButton** — Avatar circle with initials and dropdown chevron
- **SearchInput** — Search field with icon and clear button
- **LeftNav** — Collapsible sidebar navigation with tree menu
- **CXoneLogo** — NICE CXone wordmark logo

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
