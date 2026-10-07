/* Shared example data for TreeMenu.stories.tsx (Default playground) and
   TreeMenu.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { Monitor, LayoutDashboard, Settings, Scissors, FileText, FilePlus2 } from "lucide-react";
import type { TreeMenuItem, TreeMenuChild } from "../tree-menu";

/* App-navigation style menu: leading glyphs, one group already open and one
   child marked active. */
export const defaultItems: TreeMenuItem[] = [
  {
    icon: <Monitor className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Monitor",
  },
  {
    icon: <LayoutDashboard className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Dashboard",
  },
  {
    icon: <Settings className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Configure",
    children: [
      { label: "General" },
      { label: "Permissions" },
      { label: "Integrations" },
    ],
  },
  {
    icon: <Scissors className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Designer",
    defaultOpen: true,
    children: [
      { label: "Desktop Library", active: true },
      { label: "Templates" },
      { label: "Components" },
    ],
  },
  {
    icon: <FileText className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Examples",
  },
  {
    icon: <FilePlus2 className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Product Mockups",
  },
];

/* Documentation style menu: no icons. */
export const noIconItems: TreeMenuItem[] = [
  { label: "Getting Started" },
  {
    label: "Components",
    defaultOpen: true,
    children: [
      { label: "Button" },
      { label: "Checkbox", active: true },
      { label: "Input" },
    ],
  },
  {
    label: "Patterns",
    children: [
      { label: "Forms" },
      { label: "Navigation" },
    ],
  },
];

/* ── Helpers for the Default playground ── */

type Node = TreeMenuItem | TreeMenuChild;

/* Marks the leaf row whose label equals `selected` active and wires every
   leaf's `onClick` to `select`, recursively — so the playground's selection
   is real state rather than the fixed `active` flags baked into the fixtures
   above. A row with children keeps its own expand/collapse click and is not
   itself selectable. Also sets `defaultOpen` on every row that has
   children. */
export function withSelection<T extends Node>(
  items: T[],
  selected: string,
  select: (label: string) => void,
  open: boolean
): T[] {
  return items.map((item) =>
    item.children
      ? {
          ...item,
          defaultOpen: open,
          children: withSelection(item.children, selected, select, open),
        }
      : {
          ...item,
          active: item.label === selected,
          onClick: () => select(item.label),
        }
  );
}
