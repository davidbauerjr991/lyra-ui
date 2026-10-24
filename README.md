# @nicecxone/lyra-ui

React component library built on the **Lyra Foundations (Beta)** design system from NICE CXone — ~95 components spanning primitives, UI, charts, and full page templates.

## Start here (routing)

- **Browse every component live**: https://davidbauerjr991.github.io/lyra-ui/ (the deployed Storybook — always current with `main`)
- **Build a prototype without code**: open `create-lyra-prototype.html` (repo root) — a wizard that generates a Claude Cowork or Claude Design prompt. No terminal needed.
- **You are Claude, building a prototype**: read `CLAUDE-INSTRUCTIONS.md` (scenario playbook) and `prototype-kit/README-FIRST.md` (fast-path build pipeline).
- **You are Claude, modifying library components**: `CLAUDE.md` + `CONTRIBUTING.md` are the binding rulebooks.
- **Your own components** (not in the library): `src/components/local/` — gitignored, survives pulls; see its README.

## Use in Claude Code / Cowork

This repo ships a Claude Code plugin, `lyra-prototype`, in [`claude-plugin/`](claude-plugin/). It turns the wizard into an in-chat skill: Claude asks the wizard's questions in chat and then runs the flow itself, with no prompt to copy and paste.

1. In Claude Code (or Cowork), add the marketplace one of two ways (or run `/plugin`, choose **Add marketplace**, and enter either value):
   - **From GitHub, no clone needed**: `/plugin marketplace add davidbauerjr991/lyra-ui`
   - **From a local clone**: `/plugin marketplace add ../lyra-ui/claude-plugin` (the path to this repo's plugin folder)
2. Install **lyra-prototype** from that marketplace (`/plugin install lyra-prototype@lyra-ui`), then restart if prompted.
3. Ask for a prototype ("build me a Lyra admin prototype"), or type `/lyra-prototype` and pick the skill from the slash menu.

The HTML wizard (`create-lyra-prototype.html`) stays for people without the plugin and produces the same results.

The plugin also bundles nine read-only subagents:

- **component-matcher**: maps a screenshot, wireframe, storyboard html or prose onto Lyra components (region, component, props, story, confidence) before anything is built.
- **lyra-review**: checks a repo's diff for Lyra conformance: hand-rolled UI where a Lyra component exists, raw values where a token exists, unauthorized lyra-ui edits, and the `.lyra-ui-sync` file.
- **bloat-review**: checks a repo's diff for oversized or fast-growing files, duplicate implementations, new module-level state and dead exports.
- **agent-walkthrough**: drives a running prototype as its end user with a throwaway Playwright script, compares each step with the spec and reports with screenshots.
- **commit-check**: pre-commit reviewer. Re-runs the type-check and tests itself, checks the staged diff (or a commit range) against the repo's CLAUDE.md rules and the step's done-criteria, and returns a `BLOCK` / `FIX BEFORE COMMIT` / `CLEAN — OK to commit` verdict.
- **heuristic-evaluator**: walks a running prototype or a set of screens against Nielsen's 10 heuristics plus contact-center criteria, rates findings 0–4, pairs each with a Lyra UI fix, and writes the report to `docs/ux/`.
- **market-researcher**: researches how CXone, Genesys, Salesforce, Connect, Flex, Zendesk, Intercom, Front and others handle a given UX pattern, with sources, and writes a pattern table plus a Lyra recommendation to `docs/ux/`.
- **a11y-review**: runs axe via Playwright for every theme × light/dark mode plus scripted keyboard, focus, live-region and touch-target checks; findings against WCAG 2.2 AA with Lyra fixes.
- **theme-conformance**: finds raw values that should be tokens, tokens and classes no theme defines, and contrast failures per theme, with counts.

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
