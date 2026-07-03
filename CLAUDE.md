# CLAUDE.md

Before creating or modifying ANY component in this repo, read `CONTRIBUTING.md` in full — it's the binding authoring rulebook, not optional background reading. In particular:
- "Composition over reimplementation" — before writing any new UI logic (a dropdown, popover, menu, list of clickable items, etc.), check whether `Menu`, `Popover`, or another existing primitive already provides it, and compose that primitive rather than hand-rolling parallel markup. A component that reimplements `role="menu"`/`role="menuitem"` behavior instead of rendering `<Menu>` is a bug, not a style choice — it will drift from the real component every time `Menu` changes.
- "Cross-repo sync rule," "Controlled components," "Z-index hierarchy," "Icons," "File naming & location," "Tailwind & theming," and the "New component checklist" — standing conventions for every component in this repo.

Before making changes in this repo (or any sibling repo that has this one mounted alongside it), also read `PROJECT_SUMMARY.md` in full — in particular:
- "Cross-Repo Sync" — checking whether consuming apps (`agent-next-gen-v1`, `lyra-ux-templates`) have adopted recent component changes made here.
- "Important Patterns" and "Scope Rules" — standing conventions for this repo itself (e.g. new Tailwind colors/CSS variables must be added to both their light-DOM file and their Storybook-fallback file; don't reach for a raw Tailwind value without checking existing components/tokens first).
- "After promoting a template block into a real lyra-ui component" — the checklist for finishing a promotion (old markup removed from the template, both repos rebuilt, the new component recorded in this file).
