# Claude Code Handoff — lyra-ui & agent-next-gen-v2

Snapshot date: 2026-09-17. Written at the end of a Claude (Cowork) session as the
starting context for Claude Code. Read this alongside each repo's own CLAUDE.md
(auto-loaded) and lyra-ui's CONTRIBUTING.md (the component rulebook).

## Project map

- **lyra-ui** (`~/GitHub-Local/lyra-ui`) — the Lyra design system: React + TS +
  Tailwind component library on Radix primitives, charts on Apache ECharts via a
  shared `Chart` wrapper (`src/components/chart.tsx`). Storybook is the dev
  surface (`npm run storybook`, deploys to gh-pages via `npm run deploy`). All
  exports centralized in `src/index.ts`; authoring rules live in CONTRIBUTING.md
  and are enforced conventions, not suggestions.
- **agent-next-gen-v2** (`~/GitHub-Local/agent-next-gen-v2`) — prototype app
  (Vite, React 19). It consumes lyra-ui **live from source**: `vite.config.ts`
  aliases `@nicecxone/lyra-ui` to `../lyra-ui/src/index.ts` (plus two story-data
  aliases). There is no published package; the two repos must sit side by side.
  Deploys to GitHub Pages (`npm run deploy`, base `/agent-next-gen-v2/`).
- The three big workspace pages (`AgentNextGenPage`, `AgentWorkspaceAdvancedPage`,
  `AgentWorkspace2WithDeskPage`) are **intentional forks** of each other
  (~6k shared lines). A change to shared behavior usually needs to land in all
  three — check the other two before calling a page-level change done.

## Verified state at snapshot (both trees clean, all work committed)

- lyra-ui HEAD: "pre code use" (2026-09-17). App HEAD: LeftNav hover-open fix
  (2026-09-11).
- App has **no direct `@radix-ui/*` imports** (one comment mention only) — all
  primitives come through lyra-ui. Keep it that way.
- App has **no local SchedulePanel copy** — `useScheduleContent`/`SchedulePanel`
  come from lyra-ui. Do not recreate app-local copies of promoted components.
- lyra-ui's popover fix (see below) is in place: `popover.tsx` and
  `app-name-menu.tsx` stop `pointermove`/`pointerleave`/`focus`/`blur` at the
  content root but **never `pointerdown`**.

## Key decisions & hard-won knowledge (Sept 1 session)

1. **Popover "two clicks to close" root cause** — stopping `pointerdown` at a
   Radix portal's content root breaks `DismissableLayer`'s inside-click
   bookkeeping (React's synthetic `stopPropagation()` also halts the native
   event; the document listener that never fires is the thing that resets the
   "click started inside" flag, so the next outside click gets swallowed).
   Documented in CONTRIBUTING.md §16 and in `popover.tsx`'s comment. If a
   popover ever needs "two clicks to close" again, look for a new `pointerdown`
   stopPropagation first.
2. **Component promotion pattern** — repeated app compositions get promoted into
   lyra-ui, then consumed everywhere: `AppNameMenu` (AppName trigger + AppMenu
   popover, replaced 6 hand-rolled copies) and `AccordionHeadless`/`-Item`/
   `-Content` (trigger-less accordion the transcript uses). Both exported from
   `src/index.ts` with stories.
3. **Stories audit** — all lyra-ui stories build on base components; `local/` is
   the only sanctioned place for off-library components and is empty by design.
4. **Working-tree safety** — an external tool once replaced `AgentNextGenPage.tsx`
   with a months-old copy and committed it ("Rename home page Contact History
   card" incident, recovered via reflog + snapshot). Lesson encoded here:
   commit before any multi-file or tool-driven change to the big page files.

## Open items (not yet done, in rough priority order)

- **`tsc` cannot resolve `@nicecxone/lyra-ui` in the app** — the alias exists
  only in vite.config.ts, so `tsc -b` (and the `build` script) has never fully
  typechecked. Fix: add matching `paths` entries to the app's tsconfig for
  `@nicecxone/lyra-ui`, `.../agents-data`, `.../customers-data`. Expect to then
  triage a handful of surfaced pre-existing type errors (React 19 `useRef()`
  no-arg calls, `ContainerHeader title` receiving ReactNode, lucide-react type
  identity across the two repos' node_modules).
- **Unused deps in the app's package.json** — `@radix-ui/react-popover` and
  `@radix-ui/react-accordion` are likely removable now (verify no imports first).
- **lyra-ui pre-existing tsc errors** (as of Sept 1; re-check): `admin-shell.tsx`
  ×2 ("Expected 1 arguments"), `list-item.tsx` (`title` prop vs HTMLAttributes).
- **GitHub Pages deploys may be stale** — the deployed agent-next-gen-v2 build
  predates the popover fix and all Sept work; redeploy both when demo-ready.
- **Deferred by choice:** lyra-ui's `AgentNextGenTemplate.stories.tsx` partially
  mirrors the app's `AgentNextGenPage` and will drift; owner decided not to
  reconcile yet.
- **Known perceived-lag quirk:** on the huge workspace pages, a click that
  triggers a heavy re-render can delay an open popover's exit animation by a
  second or more — dismissal state is correct, the unmount lags. A perf pass on
  the 7k-line pages is the real fix if it starts bothering users.

## Working conventions for Claude Code sessions

- Follow CONTRIBUTING.md strictly for any lyra-ui component work — especially
  §0/§2 (never hand-roll buttons/menus; compose existing components), §3
  (controlled components), §16 (portal event containment, pointerdown rule),
  and the new-component checklist (§13) including the esbuild bundle check
  after editing multi-line doc comments.
- Verify with `npx tsc --noEmit` in lyra-ui after changes; in the app, tsc is
  currently unreliable (see open items) — an esbuild bundle with the vite
  aliases, or `npm run dev` + storybook smoke check, is the practical gate.
- Commit between tasks. Small, described commits — the git history in both
  repos is written as a change log and gets read that way.
