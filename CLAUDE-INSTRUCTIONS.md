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

### Protected primitives (never modify — applies to EVERY scenario)
Library components are read-only. The ONLY component source a user may change through you is their own `src/components/local/` folder. In particular, any component whose story `title` sits under **"Custom Primitives/"** or **"Headless Primitives/"** (check the `title:` in its `.stories.tsx` meta) is a protected primitive:
- Never edit its source — not in your sandbox clone, not anywhere.
- Never fork a copy of it into `src/components/local/` to work around this.
- If the user asks to change one (e.g. "make Button's corners rounder"): first check whether the component's REAL API (props, documented variants) already supports the ask — if so, apply it at the usage site in their prototype or local component. If the API doesn't support it, tell the user plainly that this is a protected library primitive, don't apply any override, and suggest they request the change from the design-system maintainer.
- Non-primitive shared library components (`UI/`, `Templates/`) are also read-only for users — the same "props at the usage site or ask the maintainer" rule applies; the difference is you may compose them freely inside local components and prototypes.

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
- **Version stamp + update notice (required in every build):**
  - Record the commit SHA of the lyra-ui clone you built from (`git rev-parse HEAD` in your sandbox clone) in the `<head>`: `<meta name="lyra-ui-commit" content="<full-sha>">`.
  - Include this self-contained script so the prototype itself checks GitHub for newer library code and shows a dismissible notice (fails silently offline):

    ```html
    <script>
    (function () {
      var m = document.querySelector('meta[name="lyra-ui-commit"]');
      if (!m) return;
      fetch("https://api.github.com/repos/davidbauerjr991/lyra-ui/commits/main")
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d || !d.sha || d.sha === m.content) return;
          var b = document.createElement("div");
          b.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#ecf5fe;border-bottom:1px solid #D3E6FD;color:#185ba4;font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:8px 40px 8px 16px;text-align:center;";
          b.textContent = "Lyra UI has been updated since this prototype was built. Ask Claude to rebuild it to pick up the latest components.";
          var x = document.createElement("button");
          x.textContent = "×";
          x.style.cssText = "position:absolute;right:10px;top:4px;border:none;background:none;font-size:18px;cursor:pointer;color:inherit;";
          x.onclick = function () { b.remove(); };
          b.appendChild(x);
          document.body.prepend(b);
        })
        .catch(function () {});
    })();
    </script>
    ```
- Save it to the user's connected folder, NOT the session outputs folder (that's buried in Claude's app-data and hard for users to find):
  - If no folder is connected, use your directory-access tool to ask the user to pick one BEFORE building.
  - Create a **`Prototypes`** folder in the connected folder if it doesn't exist, and save every prototype `.html` inside it.
  - `Prototypes` must be a **sibling of the `lyra-ui` folder** (if lyra-ui is in the connected folder) — never inside lyra-ui.
- Present the file to the user on FIRST delivery only (they need to find it once).
- On every update after that, overwrite the same file in the same location and do NOT re-present it — just tell the user to refresh their browser (or close and re-open the file) to see the changes.

## Scenario C: The user asks for changes to an existing prototype (text or screenshots)

- **Version check FIRST**: read the `lyra-ui-commit` meta tag from the prototype's html and compare it to the latest main (`git ls-remote https://github.com/davidbauerjr991/lyra-ui.git main`). If they differ, tell the user the library has changed since this prototype was built and ask: update to the latest lyra-ui as part of this change (recommended), or keep the version it was built with? If they keep it, clone/checkout that exact commit so the rebuild stays consistent. If the html has no stamp (an older build), say so and recommend rebuilding on latest.
- Apply changes to the same prototype in your sandbox copy.
- Re-check the relevant `.stories.tsx` files before introducing any new component.
- Re-bundle and overwrite the same single `.html` file (same name, same location). Do NOT re-present the file — tell the user to refresh their browser (or close and re-open the file) to see the changes.

## Scenario D: The user wants a NEW prototype

- Point them back to `create-lyra-prototype.html` (re-present it if needed): double-click it, run the wizard again, paste the new prompt.

## Scenario E: The user pasted a component-gallery prompt ("Build me a Lyra UI component gallery")

A Storybook-style viewer for the USER's own components (`lyra-ui/src/components/local/` in their connected folder). Same rules as prototypes (get lyra-ui per "Getting Lyra UI", sandbox-only builds, standalone environment, version stamp, save to `Prototypes`, present once), plus:

- Copy the user's local components into your sandbox clone before building. No connected folder → ask them to pick one first. No custom components → tell them, and offer a gallery of the standard Lyra templates instead.
- The gallery: left nav listing each component, canvas rendering each live, a few sensible prop variations where meaningful. Name it `my-component-gallery.html`.
- **Component edits persist at the source**: when the user asks to change a component (text or screenshots), edit the component file in THEIR `lyra-ui/src/components/local/` (their machine), then rebuild and overwrite the gallery. Don't re-present it — tell them to refresh. The gallery is a view; the user's local folder is the source of truth.

## Scenario F: The user wants to share/publish a prototype (Netlify)

You CANNOT reach Netlify (or most of the web) from your sandbox — do not try to deploy via API or CLI, and never ask the user to run terminal commands. Instead:

1. Create a Netlify-ready zip in the `Prototypes` folder named `<prototype-name>-netlify.zip`, containing the prototype as `index.html` (Netlify Drop needs that exact name at the zip root).
2. Present the zip, then give the user these exact steps:
   - Go to **https://app.netlify.com/drop** (sign up free if needed — no card).
   - Drag the zip onto the page.
   - Netlify gives you a public link in a few seconds — send that link to anyone.
3. To update a published prototype: rebuild the zip, and the user drags it onto their existing site's "Deploys" page (or just Drop again for a fresh link).
