# Instructions for Claude — Lyra UI prototyping

You are reading this because a user is building Lyra UI prototypes through Claude Cowork — either they attached `lyra-ui.zip`, or you cloned this repo from GitHub. Follow these instructions exactly.

## Prompt → scenario index

| The user's message… | Go to |
|---|---|
| Is a Claude Design prompt ("on this canvas", "imported into this project") | **Scenario 0** |
| Attached the zip / pointed at the repo, "set it up" | **Scenario A** |
| Starts "Build me a Lyra UI prototype" | **Scenario B** |
| Asks for changes to an existing prototype (text/screenshots) | **Scenario C** |
| Wants a NEW prototype | **Scenario D** |
| Starts "Build me a Lyra UI component gallery" | **Scenario E** |
| Starts "Duplicate an existing Lyra UI prototype" / "Duplicate a repo as an html-only Lyra UI prototype" | **Scenario F** |
| Wants a real, hosted Storybook ("host my storybook") | **Scenario G** |
| Starts "Submit one of my custom Lyra UI components" / owner attaches a `*-contribution.zip` | **Scenario H** |
| Wants to share/publish a prototype | **Scenario I** |
| Starts "Edit one of my custom Lyra UI components" / "Delete one of my custom Lyra UI components" | **Scenario J** |

## Getting Lyra UI (always latest-first)

1. **Primary**: clone the latest from GitHub into your own sandbox workspace: `https://github.com/davidbauerjr991/lyra-ui.git` (main branch). Never clone into the user's computer, and never ask the user to run any command.
2. **Reuse**: if a lyra-ui copy already exists in your sandbox from earlier in this same chat, reuse it — unless the user asks for the latest, in which case re-clone.
3. **Fallback**: if the clone fails, use an attached `lyra-ui.zip` if present. If neither works, ask the user whether they'd like to (a) attach `lyra-ui.zip`, or (b) tell you which folder lyra-ui is in on their computer so you can request access to it. Do not guess or proceed without the repo.

# RULES FOR EVERY SCENARIO

These apply to all scenarios below. Scenario sections add to them, never replace them.

## Strict write policy (the #1 trust rule)
Users lose confidence the moment stray files appear in their folders — even briefly. The ONLY paths you may ever create or modify in the user's connected folder are:
1. `Prototypes/<name>.html` (the deliverable), `Prototypes/<name>/` (a subfolder of html files when a multi-screen deliverable was agreed with the user), and `Prototypes/*-publish.zip` (on a share or hosted-Storybook request)
2. `lyra-ui/src/components/local/*` — component files AND their co-located `<name>.stories.tsx` (only when the user asks for a new/changed component; always create the story alongside a new component — it powers their gallery and makes the component contribution-ready)
3. `Contributions/<component>-contribution.zip` (only during a component-submission request)
4. `create-lyra-prototype.html` at the connected-folder root (sibling of `Prototypes/`) — on FIRST delivery only, copy it there from the repo root if not already present, so the wizard's one-click launch links and re-runs work
5. `Prototypes/my-component-gallery.html` — on FIRST delivery only, if not already present, seed it by copying `prototype-kit/empty-gallery.html` from the repo (a ready-made empty-state page; no build needed). The wizard's component clicks always have a target this way; real gallery builds later overwrite it.

Everything else — entry files, configs, CSS output, bundles, temp files, node_modules — is created in YOUR sandbox only. Before every file write, check the target path. Creating a file in the user's folder and then deleting it is still a violation, not a fix.

One explicit exception: **owner-side contribution review** (Scenario H, owner side) edits library source (`src/components/`, `src/components/__stories__/`, `PROJECT_SUMMARY.md`) at the library owner's request — that flow, and only that flow, may write outside the paths above.

## Sandbox-only builds (critical)
- All `npm install`, esbuild bundling, and Tailwind compilation happen in YOUR sandbox only.
- NEVER write `node_modules`, `dist`, build tooling, or repo source into the user's mounted folder or outputs — only the final deliverable file.
- The user must never be asked to run a terminal command or install anything.

## Protected primitives (never modify)
Library components are read-only. The ONLY component source a user may change through you is their own `src/components/local/` folder. In particular, any component whose story `title` sits under **"Custom Primitives/"** or **"Headless Primitives/"** (check the `title:` in its `.stories.tsx` meta) is a protected primitive:
- Never edit its source — not in your sandbox clone, not anywhere.
- Never fork a copy of it into `src/components/local/` to work around this.
- If the user asks to change one (e.g. "make Button's corners rounder"): first check whether the component's REAL API (props, documented variants) already supports the ask — if so, apply it at the usage site in their prototype or local component. If the API doesn't support it, tell the user plainly that this is a protected library primitive, don't apply any override, and suggest they request the change from the design-system maintainer.
- Non-primitive shared library components (`UI/`, `Templates/`) are also read-only for users — the same "props at the usage site or ask the maintainer" rule applies; the difference is you may compose them freely inside local components and prototypes.

## User-local components (`src/components/local/`)
This folder in the user's own lyra-ui copy holds their personal components. It is gitignored — never overwritten by pulls, never pushed. Rules:
- After cloning the latest lyra-ui into your sandbox, check whether the user's connected folder has `lyra-ui/src/components/local/` with any `.tsx` files — if so, copy them into your sandbox clone's same path before building, so prototypes can use them.
- **Never create duplicates.** Before creating ANY new component, list this folder and check whether an existing local component already does the job (even under a different name) — if so, reuse or UPDATE that one in place. Never mint a `-2`/`-copy`/`-new` variant of an existing local component unless the user explicitly asks for a separate variant.
- **Deleting on request is allowed.** When the user asks to remove a local component ("delete my status-pill"), delete both its `.tsx` and its `.stories.tsx` from their `src/components/local/` — confirm the exact component name first, and warn them if any of their prototypes' source you know of still uses it. This is the one sanctioned delete in the user's folder.
- When the user asks for a component that doesn't exist in the library, create it in the USER's `lyra-ui/src/components/local/` (on their machine, via the connected folder) so it persists for future sessions — follow CONTRIBUTING.md's authoring rules there too. If the user has no local lyra-ui copy, keep the component inside the prototype and tell them it won't persist without one.

## Standalone environment (what Storybook normally provides)
Stories run inside Storybook, whose `preview.ts` decorator sets up the page environment. A standalone prototype HTML has no decorator, so you must replicate it yourself:
- The lyra tokens (light `:root` + `[data-theme="dark"]` blocks) must be in the final CSS **exactly once**. Compiling `src/storybook.css` with Tailwind already inlines them via its `@import "./styles/lyra-tokens.css"` — do NOT concatenate another copy of lyra-tokens.css. **This is the known dark-mode killer**: `:root` and `[data-theme="dark"]` have equal specificity, so a second light `:root` appearing later in the file permanently overrides the dark block — the toggle relabels but the page never changes.
- Set `data-theme="light"` on `<html>` initially.
- Set the page/body background to `var(--lyra-color-bg-surface-shell)` (the var reference, never a baked literal color) so it flips with the theme.
- **Verify programmatically in the FINAL html before delivering** (no browser needed): exactly one `:root` block declares `--lyra-color-bg-surface-shell`; exactly one `[data-theme="dark"]` block re-declares it; the dark block's position in the file is AFTER that `:root` block; and utility classes reference `var(--lyra-...)`, not literal hex. If any check fails, fix the CSS assembly — do not deliver and ask the user to "eyeball it".
- **Render verification: NEVER attempt to install Chromium/Playwright/system libraries in the sandbox** — there's no root, it always fails, and it wastes minutes and tokens. The supported render check is `node prototype-kit/smoke-test.mjs --file <built.html> --expect "<visible text>"` (jsdom-based: asserts the app mounts, zero runtime errors, expected text renders). Run it on every deliverable and after every change; its exit code is authoritative.

## Deliverable
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

# SCENARIOS

## Scenario 0: WRONG-APP PASTE — a Claude Design prompt lands in Cowork/Code

If a pasted prompt says it's for Claude Design, mentions building "on this canvas", or claims sources are "imported into this project" when nothing is connected: **STOP immediately.** Do not connect folders, analyze files, scaffold projects, or attempt to emulate a canvas — a past incident burned enormous time and tokens this way. Reply only that the prompt belongs in Claude Design: the user should open **claude.ai/design**, use **Import** to add the sources the prompt lists (the lyra-ui GitHub repo, plus any source folder), and paste the prompt there.

## Scenario A: The user attached the zip (or pointed you at the repo) and asked you to open/start/set it up

1. Get the repo per "Getting Lyra UI" above (sandbox only, NOT the user's computer).
2. Copy **`create-lyra-prototype.html`** from the repo root into the user's outputs folder and present it to them.
3. Tell the user, in plain language: "Double-click **create-lyra-prototype.html** to open the setup wizard in your browser. Answer its questions, click Create, then paste the prompt it gives you back into this chat."
4. Do nothing else yet. Do not run npm install. Wait for the wizard-generated prompt.

## Scenario B: The user pasted a wizard-generated prompt (starts with "Build me a Lyra UI prototype")

Follow the prompt's own instructions and the Rules for Every Scenario above, plus:

### FAST PATH for the initial build (speed and token cost matter — users pay for both)
For the stock template build, do NOT read `CONTRIBUTING.md`, `PROJECT_SUMMARY.md`, or story files (`CLAUDE.md` arrives auto-injected in Cowork, so it costs nothing — but don't seek out the others). Read `prototype-kit/README-FIRST.md` and run `prototype-kit/build-prototype.mjs` per its instructions — it injects the product name, bundles, compiles CSS, assembles, and verifies dark mode programmatically in seconds. Its exit code is the acceptance test. Spend your effort (and the user's tokens) only on what's custom to THIS user's request. The Rulebook below applies the moment the user asks for anything beyond the stock template.

### If you can't find lyra-ui
Follow "Getting Lyra UI" at the top and wait for the user's answer if it comes to the final ask. Never ask the user to run terminal commands.

### Rulebook (non-negotiable for CUSTOM UI — the fast path above covers stock template builds)
- Read `CONTRIBUTING.md` at the repo root IN FULL before writing any custom UI beyond the stock template (new sections, components, layouts, or behavior). `CLAUDE.md` is auto-injected in Cowork; honor it always.
- Before using any component, read its matching `.stories.tsx` in `src/components/__stories__/` for real prop combinations. Never invent props, variants, or markup.
- Never hard-code colors, spacing, or typography — use Lyra tokens and components only.

### Templates
- **Admin** type → start from the `WithPageHeader` story in `src/components/__stories__/AdminShell.stories.tsx`.
- **Agent** type → start from the `WithPageHeader` story in `src/components/__stories__/AgentNextGenTemplate.stories.tsx`.
- Keep the template's layout structure intact; build the user's content inside it.

### Product name
- The prompt specifies a Product (e.g. "Outbound Engagement"). Set that exact string as the `appName` prop on the `AppHeader` component (`src/components/app-header.tsx`) — it renders top-left, next to the logo.

## Scenario C: The user asks for changes to an existing prototype (text or screenshots)

- **Version check FIRST**: read the `lyra-ui-commit` meta tag from the prototype's html and compare it to the latest main (`git ls-remote https://github.com/davidbauerjr991/lyra-ui.git main`). If they differ, tell the user the library has changed since this prototype was built and ask: update to the latest lyra-ui as part of this change (recommended), or keep the version it was built with? If they keep it, clone/checkout that exact commit so the rebuild stays consistent. If the html has no stamp (an older build), say so and recommend rebuilding on latest.
- Apply changes to the same prototype in your sandbox copy.
- Re-check the relevant `.stories.tsx` files before introducing any new component.
- Re-verify before overwriting: the dark-mode/integrity checks AND `prototype-kit/smoke-test.mjs` must pass on the rebuilt file.
- Re-bundle and overwrite the same single `.html` file (same name, same location). Do NOT re-present the file — tell the user to refresh their browser (or close and re-open the file) to see the changes.

## Scenario D: The user wants a NEW prototype

- Point them back to `create-lyra-prototype.html` (re-present it if needed): double-click it, run the wizard again, paste the new prompt.

## Scenario E: The user pasted a component-gallery prompt ("Build me a Lyra UI component gallery")

A Storybook-style viewer for the USER's own components ONLY (`lyra-ui/src/components/local/` in their connected folder). For browsing the standard library, always point users to the live Storybook instead — https://davidbauerjr991.github.io/lyra-ui/ — never build a gallery of library components. The Rules for Every Scenario apply (write policy, sandbox-only, standalone environment, version stamp, save to `Prototypes`, present once, smoke test), plus:

- This is a FAST-PATH build: use prototype-kit's pipeline conventions; do NOT read the full rulebooks just to render a gallery.
- Copy the user's local components into your sandbox clone before building. No connected folder → ask them to pick one first. No custom components → say so and give them the live Storybook link.
- Render each component from its co-located `local/<name>.stories.tsx` (via composeStories) — create a simple story next to any component missing one (allowed write; it also makes the component contribution-ready).
- The gallery: left nav listing each component, canvas rendering each live, a few sensible prop variations where meaningful. Name it `my-component-gallery.html`.
- Deep links are required: opening the gallery with `#<component-file-name>` in the URL must auto-select and scroll to that component (the wizard's component list links this way).
- **Component edits persist at the source**: when the user asks to change a component (text or screenshots), edit the component file in THEIR `lyra-ui/src/components/local/` (their machine), then rebuild and overwrite the gallery. Don't re-present it — tell them to refresh. The gallery is a view; the user's local folder is the source of truth.

## Scenario F: The user pasted a duplication prompt ("Duplicate an existing Lyra UI prototype" / "Duplicate a repo as an html-only Lyra UI prototype")

Both follow the Rules for Every Scenario (plus Getting Lyra UI and the fast path where applicable). The duplication-specific rules:

- **Exactness is the contract.** The duplicate must match the source's screens, layout, content, and behavior. Report anything you couldn't preserve and why — never silently approximate.
- **Drift check BEFORE building, and STOP on drift.** Prototype source: compare its `lyra-ui-commit` meta stamp to latest main. Repo source: compare the lyra-ui version it was built against (package.json/lockfile/vendored copy) to latest main. If they differ, ask the user — update to latest components (recommended) or keep as-is — and WAIT for the answer.
- **Prototype duplication with no drift (or "keep as-is")**: just copy the file under the new name and update its `<title>` — no rebuild.
- **Repo duplication**: the source repo is READ-ONLY (never modify it, never push). Rebuild its UI with real, current lyra-ui components — don't transplant its code verbatim.
- **Multi-screen deliverable — ask, don't assume.** If the source has multiple screens/variants, list them and, in the SAME question, ask both scope (which screens) and packaging: (a) one html with in-prototype navigation, or (b) a subfolder `Prototypes/<name>/` with one standalone html per screen (the right choice for A/B or blind comparison tests, where screens must not reveal each other). Wait for the answer before building.
- **Component-drift audit — MANDATORY whenever building an older reference on newer components** (i.e. the user chose "update to latest" after a drift warning). Known incident: `Popover` gained a `bodyPadding` prop defaulting to `true` between a source's pinned commit and main — identical JSX rendered 40px narrower and truncated a menu, caught only by the user. Before delivering: for EVERY lyra-ui component you use, run `git diff <source-sha>..HEAD -- src/components/<component>.tsx` in your clone, scan for new or changed **defaulted props and default styles**, and check each against your usage. Fix mismatches with the component's documented escape hatches (real props only). Do this proactively — not after the user reports visual breakage.

## Scenario G: The user wants a real, hosted Storybook (e.g. "host my storybook", "run storybook for me")

You cannot run a dev server the user can reach (your sandbox has no bridge to their browser), and Storybook's static build does not work over `file://` — never deliver `storybook-static` as a double-click file, and never ask the user to run `npm run storybook`. The supported path:

1. In your sandbox clone (latest lyra-ui + the user's `local/` components and stories copied in), run `npx storybook build` (output: `storybook-static/`).
2. Zip it as `Prototypes/my-storybook-publish.zip` (contents at the zip root, `index.html` included) and present it.
3. User drags the zip onto **https://vercel.com/drop** (or Netlify Drop) — they get a live personal Storybook URL with the full Storybook UI, including their own components alongside the library.
4. For browsing the library only, skip all of this and give the live link: https://davidbauerjr991.github.io/lyra-ui/

## Scenario H: Component contribution (both sides of the zip handoff)

**User side — "Submit one of my custom Lyra UI components to the library owner"**: this flow REQUIRES the full rulebooks (the opposite of the fast path). Read `CLAUDE.md` + `CONTRIBUTING.md` in full; validate the component (naming/location, tokens only, composition over reimplementation, controlled-component conventions, size prop, z-index, new-component checklist); ensure a co-located story file; fix violations in the user's local folder and report them; verify with tsc + esbuild; package `Contributions/<name>-contribution.zip` (component + story + CONTRIBUTION.md with props, validated-against commit, results). The user sends the zip to the library owner. Never push or touch the shared library.

**Owner side — the library owner attaches a `*-contribution.zip` and asks for a review**: read the full rulebooks, re-validate everything yourself (trust nothing from CONTRIBUTION.md without checking), then if it passes: move the component into `src/components/` and its story into `src/components/__stories__/` (following the repo's file conventions), record it in `PROJECT_SUMMARY.md` per the promotion checklist, and verify with tsc + esbuild. Report what you changed and flag judgment calls. Leave commit/push to the owner unless they ask. (This is the one sanctioned exception to the strict write policy.)

## Scenario I: The user wants to share/publish a prototype (Vercel or Netlify)

You CANNOT reach Vercel/Netlify (or most of the web) from your sandbox — do not try to deploy via API or CLI, and never ask the user to run terminal commands. Instead:

1. Ask the user which they'd prefer: **Vercel** (recommended default — generous free hobby tier) or **Netlify** (free tier caps hosted sites sooner).
2. Create a zip in the `Prototypes` folder named `<prototype-name>-publish.zip`, containing the prototype renamed to `index.html` at the zip root (both services use it as the homepage).
3. Present the zip, then give the user the steps for their choice:
   - **Vercel**: go to **https://vercel.com/drop** (free account, no card), drag the zip onto the page, name the project, Deploy — public link in seconds. Note: each drop creates a NEW project; to update, drop again for a fresh link (or connect the project to git later for auto-deploys).
   - **Netlify**: go to **https://app.netlify.com/drop**, drag the zip — public link in seconds. To update an existing site, drag the new zip onto that site's "Deploys" page.

## Scenario J: Edit or delete a local component ("Edit one of my custom Lyra UI components" / "Delete one of my custom Lyra UI components")

Both follow the User-local components rules (Rules for Every Scenario) — the user's `lyra-ui/src/components/local/` is the source of truth.

- **Edit**: confirm you've found the component and its co-located story, then WAIT for the user's change description/screenshots. Edit the source in their local folder, update the story for any new props, verify (tsc, esbuild, `prototype-kit/smoke-test.mjs`), rebuild `Prototypes/my-component-gallery.html` in place (fast path), and tell them to refresh — don't re-present files.
- **Delete**: the one sanctioned delete — confirm the exact component name, warn if a prototype you know of still uses it, delete both the `.tsx` and `.stories.tsx`, then rebuild the gallery without it.
