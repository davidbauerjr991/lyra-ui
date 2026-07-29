# Local Components

This folder is for **your own components** — ones you (or Claude) create that aren't part of the shared Lyra UI library.

## Why this folder

Everything here (except this README) is **gitignored**: `git pull` will never overwrite or delete it, and `git push` will never publish it. Your components stay on your machine, safe across every library update.

## Rules

- One component per file, kebab-case file names (`my-widget.tsx`), same as the main library — see `CONTRIBUTING.md` for authoring rules. Compose real Lyra components and tokens; the library rulebook applies here too.
- Every component gets a co-located story file (`my-widget.stories.tsx`, right here in this folder) — it powers your local component gallery and makes the component ready to submit to the library.
- Import from siblings with relative paths (e.g. `import { Button } from "../button";`).
- To remove a component: ask Claude ("delete my status-pill component") and it removes the component and its story file — or just delete the two files yourself in Finder. Claude also checks this folder before creating anything new, so existing components get reused/updated instead of duplicated.
- To submit a component to the shared library: use the wizard's **My Components → Submit to the Library** flow. Claude validates it against the full rulebook and packages a `Contributions/<name>-contribution.zip` you send to the library owner, whose Claude reviews and promotes it.

## How Claude uses this folder

When building prototypes, Claude checks this folder (in your connected copy of lyra-ui) and copies its contents into its build workspace, so prototypes can use your local components alongside the library. When you ask Claude to create a brand-new component during prototyping, it saves the component here so it persists for future sessions.
