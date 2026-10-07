/* Shared example data for MenuRadix.stories.tsx (Default playground) and
   MenuRadix.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { MenuEntry } from "../menu";

/* ── Basic (no icons) — the plain list the Keyboard Focus page opens. ── */

export const defaultItems: MenuEntry[] = [
  { id: "1", label: "Menu Item" },
  { id: "2", label: "Menu Item" },
  { id: "3", label: "Menu Item" },
  "separator",
  { id: "4", label: "Menu Item" },
  { id: "5", label: "Menu Item", submenu: [
    { id: "5a", label: "Sub Item 1" },
    { id: "5b", label: "Sub Item 2" },
    { id: "5c", label: "Sub Item 3" },
  ]},
  "separator",
  { id: "6", label: "Delete", destructive: true },
];
