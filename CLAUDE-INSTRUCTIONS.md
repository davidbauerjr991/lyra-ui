# Instructions for Claude — Lyra UI prototyping

You are reading this because a user is building Lyra UI prototypes through Claude Cowork — either they attached `lyra-ui.zip`, or you cloned this repo from GitHub. Follow these instructions exactly.

## Getting Lyra UI (always latest-first)

1. **Primary**: clone the latest from GitHub into your own sandbox workspace: `https://github.com/davidbauerjr991/lyra-ui.git` (main branch). Never clone into the user's computer, and never ask the user to run any command.
2. **Reuse**: if a lyra-ui copy already exists in your sandbox from earlier in this same chat, reuse it — unless the user asks for the latest, in which case re-clone.
3. **Fallback**: if the clone fails, use an attached `lyra-ui.zip` if present. If neither works, ask the user whether they'd like to (a) attach `lyra-ui.zip`, or (b) tell you which folder lyra-ui is in on their computer so you can request access to it. Do not guess or proceed without the repo.

## Scenario A: The user attached the zip (or pointed you at the repo) and asked you to open/start/set it up

1. Get the repo per "Getting Lyra UI" above (sandbox only, NOT the user's computer).
2. Copy **`create-lyra-prototype.html`** from the repo root into the user's outputs folder and present it to them.
3. Tell the user, in plain language: "Double-click **create-lyra-prototype.html** to open the setup wizard in your browser. Answer its questions, click Create, then paste the prompt it gives you back into this chat."
4. Do nothing else yet. Do not run npm install. Wait for the wizard-generated prompt.

## Scenario B: The user pasted a wizard-generated prompt (starts with "Build me a Lyra UI prototype")

Follow the prompt's own instructions, plus these binding rules:

### If you can't find lyra-ui
Follow "Getting Lyra UI" at the top: clone from GitHub first; reuse a sandbox copy if present; fall back to an attached zip. Only if all three fail, ask the user which they'd prefer:
1. **Attach `lyra-ui.zip`** to this chat, or
2. **Tell you which folder lyra-ui is in** on their computer, so you can request access to that folder directly (use your directory-access tool with the path they give you).

Wait for their answer before doing anything else. Never ask the user to run terminal commands.

### Rulebook (non-negotiable)
- Read `CLAUDE.md` and `CONTRIBUTING.md` at the repo root IN FULL before writing any UI code.
- Before using any component, read its matching `.stories.tsx` in `src/components/__stories__/` for real prop combinations. Never invent props, variants, or markup.
- Never hard-code colors, spacing, or typography — use Lyra tokens and components only.

### Templates
- **Admin** type → start from the `WithPageHeader` story in `src/components/__stories__/AdminShell.stories.tsx`.
- **Agent** type → start from the `WithPageHeader` story in `src/components/__stories__/AgentNextGenTemplate.stories.tsx`.
- Keep the template's layout structure intact; build the user's content inside it.

### Product name
- The prompt specifies a Product (e.g. "Outbound Engagement"). Set that exact string as the `appName` prop on the `AppHeader` component (`src/components/app-header.tsx`) — it renders top-left, next to the logo.

### Sandbox-only builds (critical)
- All `npm install`, esbuild bundling, and Tailwind compilation happen in YOUR sandbox only.
- NEVER write `node_modules`, `dist`, build tooling, or repo source into the user's mounted folder or outputs — only the final deliverable file.
- The user must never be asked to run a terminal command or install anything.

### User-local components (`src/components/local/`)
This folder in the user's own lyra-ui copy holds their personal components. It is gitignored — never overwritten by pulls, never pushed. Rules:
- After cloning the latest lyra-ui into your sandbox, check whether the user's connected folder has `lyra-ui/src/components/local/` with any `.tsx` files — if so, copy them into your sandbox clone's same path before building, so prototypes can use them.
- Before creating any new component, check this folder too — the user may already have what's needed.
- When the user asks for a component that doesn't exist in the library, create it in the USER's `lyra-ui/src/components/local/` (on their machine, via the connected folder) so it persists for future sessions — follow CONTRIBUTING.md's authoring rules there too. If the user has no local lyra-ui copy, keep the component inside the prototype and tell them it won't persist without one.

### Standalone environment (what Storybook normally provides)
Stories run inside Storybook, whose `preview.ts` decorator sets up the page environment. A standalone prototype HTML has no decorator, so you must replicate it yourself:
- Include the FULL lyra tokens CSS (both light and dark `[data-theme]` blocks) — otherwise the dark mode toggle silently does nothing.
- Set `data-theme="light"` on `<html>` initially.
- Set the page/body background to `var(--lyra-color-bg-surface-shell)` and keep it synced if the theme changes (Storybook's preview.ts does exactly this) — otherwise headers and other transparent chrome render on white.

### Deliverable
- One self-contained `.html` file, named from the prototype name (kebab-case), with all JS bundled and all styles compiled and inlined so it opens by double-click.
- Save it to the user's connected folder, NOT the session outputs folder (that's buried in Claude's app-data and hard for users to find):
  - If no folder is connected, use your directory-access tool to ask the user to pick one BEFORE building.
  - Create a **`Prototypes`** folder in the connected folder if it doesn't exist, and save every prototype `.html` inside it.
  - `Prototypes` must be a **sibling of the `lyra-ui` folder** (if lyra-ui is in the connected folder) — never inside lyra-ui.
- Present the file to the user on FIRST delivery only (they need to find it once).
- On every update after that, overwrite the same file in the same location and do NOT re-present it — just tell the user to refresh their browser (or close and re-open the file) to see the changes.

## Scenario C: The user asks for changes to an existing prototype (text or screenshots)

- Apply changes to the same prototype in your sandbox copy.
- Re-check the relevant `.stories.tsx` files before introducing any new component.
- Re-bundle and overwrite the same single `.html` file (same name, same location). Do NOT re-present the file — tell the user to refresh their browser (or close and re-open the file) to see the changes.

## Scenario D: The user wants a NEW prototype

- Point them back to `create-lyra-prototype.html` (re-present it if needed): double-click it, run the wizard again, paste the new prompt.

## Scenario E: The user wants to share/publish a prototype (Netlify)

You CANNOT reach Netlify (or most of the web) from your sandbox — do not try to deploy via API or CLI, and never ask the user to run terminal commands. Instead:

1. Create a Netlify-ready zip in the `Prototypes` folder named `<prototype-name>-netlify.zip`, containing the prototype as `index.html` (Netlify Drop needs that exact name at the zip root).
2. Present the zip, then give the user these exact steps:
   - Go to **https://app.netlify.com/drop** (sign up free if needed — no card).
   - Drag the zip onto the page.
   - Netlify gives you a public link in a few seconds — send that link to anyone.
3. To update a published prototype: rebuild the zip, and the user drags it onto their existing site's "Deploys" page (or just Drop again for a fresh link).
