---
name: lyra-prototype
description: Use when the user wants to create, duplicate, publish or update a Lyra UI prototype, start a Lyra UI app repo, build a screen from a mockup/wireframe/screenshot on Lyra UI, build or submit custom Lyra components, or refresh the Lyra Storybook. Asks the wizard's questions in chat, then runs the flow.
---
You are the in-chat version of create-lyra-prototype.html. Ask, then build; never hand the user a prompt to paste (Claude Design is the one exception).

## 1. Find Lyra UI
Look for a lyra-ui checkout: the current folder, its siblings, a connected folder, your sandbox. If none, clone https://github.com/davidbauerjr991/lyra-ui.git (main) into your sandbox yourself. If the clone fails and there is no copy, ask one question: attach lyra-ui.zip, or name the folder on their computer. If you found a local lyra-ui on the user's computer, offer once before building (CLAUDE-INSTRUCTIONS.md Scenario K): ask "Update your local lyra-ui to the latest main first?" with Yes / No. On Yes, first check `git status --porcelain` (ignore src/components/local/); if tracked files are modified, say which and don't pull. Otherwise run `git pull --ff-only` there and run `npm install` only if package.json changed; never touch anything else in that folder. Record the commit SHA (`git rev-parse HEAD`) — every deliverable is stamped with it. If the user's lyra-ui has src/components/local/ with components, treat them as part of the library.

## 2. Ask the wizard's questions (AskUserQuestion, one screen each; skip any the user already answered)
1. What would you like to do? — Create a prototype (one self-contained .html) · Create a repo (editable app on Lyra UI) · Build from a mockup / wireframe / screenshot · Duplicate a repo as an html prototype · Build on Claude Design · My components (gallery / edit / submit) · Update Lyra UI Storybook.
2. For prototype / repo / Design / mockup: What kind? — Admin (the "WithPageHeader" story in src/components/__stories__/AdminShell.stories.tsx) · Agent (the "WithPageHeader" story in src/components/__stories__/AgentNextGenTemplate.stories.tsx).
3. Name — becomes the file/folder name (lowercase, dashes).
4. Product — Outbound Engagement · Agent Workspace · Agent Workspace Advanced · Agent Workspace Premium (or typed) — set verbatim as the appName prop on AppHeader.
5. For Duplicate: the source folder or public GitHub URL. For My components: which component, and view / edit / delete / submit. For mockup: the image(s), html or text, and whether the deliverable is a prototype .html or a page in an existing repo.

## 3. Run the flow — the rulebooks are authoritative; don't restate them, follow them
- Prototype: prototype-kit/README-FIRST.md's fast path (build-prototype.mjs for the chosen template; smoke-test.mjs to render-verify; never install Chromium/system packages). Apply CLAUDE-INSTRUCTIONS.md: PROPS FIRST, THEN ASK; protected primitives read-only; the strict write policy (only Prototypes/<name>.html, a <name>-publish.zip on request, and lyra-ui/src/components/local/ on request may be written in the user's folder); the Deliverable rules (one self-contained html, the lyra-ui-commit meta stamp, the update-notice script, dark mode verified programmatically: exactly one :root declaring --lyra-color-bg-surface-shell and one [data-theme="dark"] block after it). Save into Prototypes/ beside lyra-ui; present once; later changes overwrite in place and tell the user to refresh.
- Repo: CLAUDE-INSTRUCTIONS.md Scenario L. Build and verify in your sandbox (npm install, vite build, tsc), write only source files into a sibling folder of lyra-ui, git init + initial commit, give the GitHub Desktop publish steps and the local run steps with the /<name>/ base path. Then apply the prototype-workflow conventions (§5).
- From a mockup / wireframe / screenshot: run the component-matcher subagent on the input; show its table to the user; ask ONE question about the rows marked "none" (with the matcher's options); build from the confirmed map as a prototype or a repo page per the answer; iterate on screenshots the same way (match → confirm → apply).
- Duplicate a repo: as the wizard's createRepoDupPrompt — recreate the source's screens, layout and flows with current lyra components; deliverableBlock rules; list the screens first and confirm scope.
- Claude Design: tell the user to open claude.ai/design, import davidbauerjr991/lyra-ui (and the Prototypes folder or source repo), and give them the wizard's DESIGN prompt verbatim for that flow.
- My components: gallery per createGalleryPrompt (a gallery .html of src/components/local/); edit = work on that component in this chat; submit = validate against CONTRIBUTING.md and package per createSubmitPrompt.
- Update Storybook: per copyUpdatePrompt — pull main into the user's real lyra-ui folder, reinstall if needed, rebuild storybook-static; touch nothing else.
- Publish (any time): ask Vercel or Netlify, build <name>-publish.zip with index.html, give the drag-and-drop steps; never deploy from the sandbox.
Whenever an instruction is ambiguous or a decision materially changes the result, ask one direct question and wait.

## 4. Reviews
For any repo change of more than a trivial edit, run the subagents lyra-review and bloat-review on the diff, and agent-walkthrough on the flows the change touched; fix defects before reporting; include their findings in the report.
- commit-check — run on the staged diff before every commit, and on request against a commit range; the session fixes `block` and `fix` findings before committing and pastes the verdict line into its report.
- heuristic-evaluator and market-researcher — run on request, or before a redesign of a flow; each writes its report to docs/ux/ in the repo under review and returns the summary in chat.

## 5. Prototype-workflow conventions (repos only; from agent-next-gen-demo's CLAUDE.md)
One page with layout decided by settings; everything simulated behind provider seams; registries over JSX for cards, tabs and views; settings in a section-keyed store with agent/admin/personal scopes; capabilities hide, never disable; presence/state blocks disable with a reason; lyra edits need the user's explicit authorization and a story; a .lyra-ui-sync file records the lyra commit the repo was last verified against. Multi-commit steps: plan first, build, reviews (§4), report. No attribution lines in commits unless the user asks.
