# Local Components

This folder is for **your own components** — ones you (or Claude) create that aren't part of the shared Lyra UI library.

## Why this folder

Everything here (except this README) is **gitignored**: `git pull` will never overwrite or delete it, and `git push` will never publish it. Your components stay on your machine, safe across every library update.

## Rules

- One component per file, kebab-case file names (`my-widget.tsx`), same as the main library — see `CONTRIBUTING.md` for authoring rules. Compose real Lyra components and tokens; the library rulebook applies here too.
- Import from siblings with relative paths (e.g. `import { Button } from "../button";`).
- If a local component proves broadly useful, promote it: move it to `src/components/`, add stories, and commit it so everyone gets it.

## How Claude uses this folder

When building prototypes, Claude checks this folder (in your connected copy of lyra-ui) and copies its contents into its build workspace, so prototypes can use your local components alongside the library. When you ask Claude to create a brand-new component during prototyping, it saves the component here so it persists for future sessions.
