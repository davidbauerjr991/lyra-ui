import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../list-item";
import { MenuItem } from "../menu-item";
import { Box, Star, ChevronRight } from "lucide-react";
import { Badge } from "../badge";
import { MENU_PANEL_SURFACE } from "./ListItem.shared";

const meta: Meta<typeof ListItem> = {
  title: "Custom Primitives/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;

/* A basic ListItem row, a list with leading icons, and the MenuItem states and
   icon/description/shortcut menus each have their own page under
   "ListItem/Variants" — see ListItem.variants.stories.tsx. */

/* ── Default — the MenuItem playground (previously "MenuItem — Basic").
   Every control composes through `MenuItem`'s existing `icon` / `header` /
   `description` / `rightElement` / `trailingIcon` / `comfortable` props — no
   new component API. `badge` and `rightSlot` both feed the one
   `rightElement` slot (badge first); `submenu`'s chevron uses `trailingIcon`,
   which always renders furthest right. `density` maps to `MenuItem`'s real
   `comfortable` prop (12px vs. 6px top/bottom padding). `separator` draws
   `Menu`'s own divider under the row, and `container` wraps the row in the
   menu panel surface (border, shadow, padding) it normally sits in. ── */
function MenuItemBasicDemo({
  count = 1,
  density = "comfortable",
  icon = false,
  header = false,
  description = false,
  badge = false,
  submenu = false,
  rightSlot = false,
  separator = false,
  container = true,
  padding = true,
  leftBorder = true,
  maxWidth = true,
}: {
  count?: number;
  density?: "comfortable" | "compact";
  icon?: boolean;
  header?: boolean;
  description?: boolean;
  badge?: boolean;
  submenu?: boolean;
  rightSlot?: boolean;
  separator?: boolean;
  container?: boolean;
  padding?: boolean;
  leftBorder?: boolean;
  maxWidth?: boolean;
}) {
  const hasRightContent = badge || rightSlot;

  const rows = Array.from({ length: count }, (_, i) => (
    <React.Fragment key={i}>
      <MenuItem
        header={header ? "New Case" : undefined}
        label="Menu Item"
        icon={icon ? <Box className="h-4 w-4" strokeWidth={1.5} /> : undefined}
        description={description ? "Supporting description text" : undefined}
        rightElement={
          hasRightContent ? (
            <div className="flex items-center gap-2">
              {badge && <Badge shape="circle" variant="info" size="sm">New</Badge>}
              {rightSlot && (
                <Star className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0" strokeWidth={1.5} />
              )}
            </div>
          ) : undefined
        }
        trailingIcon={
          submenu ? (
            <ChevronRight className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
          ) : undefined
        }
        comfortable={density === "comfortable"}
        // The left border is `MenuItem`'s accent bar — its first child span,
        // shown on hover/press and persistently when active. `MenuItem` has no
        // prop to turn it off, so hide it from here.
        className={leftBorder ? undefined : "[&>span:first-child]:!hidden"}
        onClick={() => {}}
      />
      {separator && (
        // No container padding means flush rows, so the divider drops its
        // usual 6px top/bottom margin too (it's the only space between rows).
        <div
          role="separator"
          className={`border-b border-lyra-border-subtle ${container && !padding ? "my-0" : "my-1.5"}`}
        />
      )}
    </React.Fragment>
  ));

  // Max width caps the list at its usual 288px; off, it fills the full width.
  const width = maxWidth ? "w-full max-w-72" : "w-full";

  return container ? (
    <div
      className={`${width} ${MENU_PANEL_SURFACE} ${
        padding ? "p-1" : "overflow-hidden"
      }`}
    >
      {rows}
    </div>
  ) : (
    <div className={width}>{rows}</div>
  );
}

type MenuItemBasicStory = StoryObj<React.ComponentProps<typeof MenuItemBasicDemo>>;

export const Default: MenuItemBasicStory = {
  args: {
    count: 1,
    density: "comfortable",
    icon: false,
    header: false,
    description: false,
    badge: false,
    submenu: false,
    rightSlot: false,
    separator: false,
    container: true,
    padding: true,
    leftBorder: true,
    maxWidth: true,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Number of items", "Density", "Icon left", "Header", "With description", "With badge",
        "With submenu", "With right slot", "Separator", "Container", "Container padding", "Left border", "Max width",
        "count", "density", "icon", "header", "description", "badge",
        "submenu", "rightSlot", "separator", "container", "padding", "leftBorder", "maxWidth",
      ],
      sort: "none",
    },
  },
  argTypes: {
    count: {
      name: "Number of items",
      control: { type: "range", min: 1, max: 5, step: 1 },
      description: "How many identical rows to show, 1 to 5.",
      table: { category: "Content", defaultValue: { summary: "1" } },
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      labels: { comfortable: "Comfortable", compact: "Compact" },
      description: "Row padding: comfortable is 12px top and bottom, compact is 6px (`comfortable`).",
      table: { category: "Appearance", defaultValue: { summary: "comfortable" } },
    },
    icon: {
      name: "Icon left",
      control: "boolean",
      description: "Icon on the left (`icon`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    header: {
      name: "Header",
      control: "boolean",
      description: "Bold title line above the label (`header`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    description: {
      name: "With description",
      control: "boolean",
      description: "Supporting text under the label (`description`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    badge: {
      name: "With badge",
      control: "boolean",
      description: "A \"New\" badge on the right (`rightElement`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    submenu: {
      name: "With submenu",
      control: "boolean",
      description: "Chevron at the far right (`trailingIcon`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    rightSlot: {
      name: "With right slot",
      control: "boolean",
      description: "A star on the right (`rightElement`), after the badge if both are on.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    separator: {
      name: "Separator",
      control: "boolean",
      description: "A divider under the row, as `Menu` draws between groups.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    container: {
      name: "Container",
      control: "boolean",
      description: "Wraps the row in the menu panel (border, shadow, padding) it normally sits in.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    padding: {
      name: "Container padding",
      control: "boolean",
      description: "Space around the rows inside the container (`p-1`). Off, the rows sit flush against its edges.",
      if: { arg: "container", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    leftBorder: {
      name: "Left border",
      control: "boolean",
      description: "The accent bar on the row's left edge that shows on hover and press. Off hides it.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "On caps the width at 288px. Off stretches the list to the full width of the canvas.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
  },
  render: (args) => <MenuItemBasicDemo {...args} />,
};
