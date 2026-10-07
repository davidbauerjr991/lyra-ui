import { Calendar, Clock, LayoutGrid, List, Settings, type LucideIcon } from "lucide-react";
import { Badge } from "../badge";
import { cn } from "../../lib/utils";
import { Copy, Pencil, Trash2 } from "lucide-react";
import type { MenuEntry } from "../menu";
import type { ToggleGroupItem } from "../toggle-group";

/* Shared by ToggleGroup.stories.tsx and ToggleGroup.variants.stories.tsx. */

export const THREE_ITEMS: ToggleGroupItem[] = [
  { value: "a", label: "Toggle" },
  { value: "b", label: "Toggle" },
  { value: "c", label: "Toggle" },
];

/* Entries for each item's kebab menu. */
const ITEM_MENU: MenuEntry[] = [
  { id: "rename", label: "Rename", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
  "separator",
  { id: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
];

const ICONS: LucideIcon[] = [List, LayoutGrid, Calendar, Clock, Settings];

const BADGE_COUNTS = [3, 12, 5, 8, 24];

export interface MakeItemsOptions {
  icons?: boolean;
  label?: boolean;
  menu?: boolean;
  badge?: boolean;
  badgeType?: "number" | "alert";
}

/* The first `count` items, with one disabled when `disabledItem` is on: the
   middle one, or the last when there are only two. `icons` adds an icon before
   each label; `menu` adds a kebab menu to each item; `badge` adds a number or
   alert ("!") badge; `label` off (with icons on) leaves icon-only items, which
   get an accessible name (`ariaLabel`) and the item's own `tooltip`, shown on
   hover and keyboard focus, same as icon-only tabs. The badge sits beside the label text (which truncates on its own) so a
   narrow toggle cuts the text first, never the badge. */
export function makeItems(
  count: number,
  disabledItem = false,
  { icons = false, label = true, menu = false, badge = false, badgeType = "number" }: MakeItemsOptions = {},
): ToggleGroupItem[] {
  const values = ["a", "b", "c", "d", "e"].slice(0, count);
  return values.map((value, i) => {
    const Icon = ICONS[i];
    const iconNode = <Icon className="block h-4 w-4 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />;
    const renderBadge = (className: string) =>
      badgeType === "alert" ? (
        <Badge shape="circle" variant="critical" size="sm" className={className}>!</Badge>
      ) : (
        <Badge shape="circle" variant="critical" size="sm" count={BADGE_COUNTS[i]} className={className} />
      );
    const iconOnly = icons && !label;
    let content: ToggleGroupItem["label"] = "Toggle";
    if (iconOnly) {
      // The tooltip comes from the item's `tooltip` (below), so it opens on
      // keyboard focus too. With a badge, the icon gets side padding so the
      // badge sits inside the toggle label's clipping box instead of being cut
      // off at the icon's edge.
      content = (
        <span className={cn("relative flex h-4 items-center justify-center", badge ? "px-1.5" : "w-4")}>
          {iconNode}
          {badge && renderBadge("absolute -top-1 right-0")}
        </span>
      );
    } else if (icons || badge) {
      content = (
        <span className="flex min-w-0 items-center justify-center gap-2">
          {icons && iconNode}
          <span data-truncatable className="min-w-0 truncate">Toggle</span>
          {badge && renderBadge("shrink-0")}
        </span>
      );
    }
    return {
      value,
      label: content,
      tooltip: iconOnly ? "Toggle" : undefined,
      ariaLabel: iconOnly || badge ? `Toggle${badge ? `, ${badgeType === "alert" ? "alert" : BADGE_COUNTS[i]}` : ""}` : undefined,
      menuItems: menu ? ITEM_MENU : undefined,
      disabled: disabledItem && i === (count > 2 ? 1 : count - 1) ? true : undefined,
    };
  });
}
