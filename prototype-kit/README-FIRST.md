# Prototype Kit — the fast path (READ THIS INSTEAD OF THE FULL RULEBOOKS)

This kit exists to make the initial prototype build take ~2 minutes and almost no tokens. For a **stock template build** (what the wizard prompt asks for), do NOT read `CLAUDE.md`, `CONTRIBUTING.md`, `PROJECT_SUMMARY.md`, or any story file — everything the initial build needs is in this kit, and the build script verifies its own output.

## Fast path (stock template build)

From the repo root of your SANDBOX clone:

```
npm install --no-audit --no-fund --prefer-offline
node prototype-kit/build-prototype.mjs \
  --type admin            # or agent \
  --product "Outbound Engagement" \
  --title "The Prototype Name" \
  --sha "$(git rev-parse HEAD)" \
  --out /path/to/sandbox/<kebab-name>.html
```

Then run the render smoke test and copy the output to the user's `Prototypes/` folder:

```
node prototype-kit/smoke-test.mjs --file <built.html> --expect "<the product name>" --expect "<a known page title>"
```

Done. Both scripts' exit codes are the acceptance test — never deliver on failure. Pick `--expect` strings that are STATIC visible page text (the product name, a page title like "Campaigns", "New Outbound") — never nav rail labels, tooltip copy, or aria-labels: the rail auto-collapses below 1280px (jsdom's default window is 1024px), so its labels legitimately leave the DOM and make the test flaky. **Never attempt to install Chromium/Playwright/system libraries for verification** — the sandbox has no root, it always fails, and smoke-test.mjs is the supported render check (jsdom: mounts the app, fails on runtime errors or missing text).

What the script does: injects the product name into the template story (sandbox copy only), bundles with esbuild, compiles `src/storybook.css` with Tailwind (which already inlines the FULL lyra tokens — light and dark — via `@import`; never add a second tokens copy), assembles one self-contained html (data-theme, commit stamp, update-notice script, shell-token body background), and verifies dark-mode integrity programmatically.

## When you MUST read the full rulebooks

The moment the user asks for anything beyond the stock template — new sections, new components, layout changes, custom behavior — read `CLAUDE.md` and `CONTRIBUTING.md` in full before writing that UI, and check each component's `.stories.tsx` for real props. The fast path covers only the initial build.

## Iterating after the first build

For changes, edit `prototype-kit/entry-<type>.tsx` (or a copy) in your sandbox to compose the customized page, and re-run the same script. Keep using its verification.

## Maintenance notes (for the library maintainer)

- Product-name injection anchors: `name="Outbound Engagement"` in `AdminShell.stories.tsx`, `name="Agent Next Gen"` in `AgentNextGenTemplate.stories.tsx`. If a template's AppName changes, update `build-prototype.mjs`.
- The script fails loudly if an anchor disappears or the CSS token structure changes.
