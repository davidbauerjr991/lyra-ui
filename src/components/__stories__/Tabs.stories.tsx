import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabList, Tab, TabPanel, announceToScreenReader } from "../tabs";
import { REMOVE_TAB_ICON } from "./Tabs.shared";
import { LayoutGrid, Settings, FileText, Lock, Bell, Star, Pencil, Copy, Trash2, ArrowLeft, ArrowRight } from "lucide-react";

const meta: Meta<typeof TabList> = {
  title: "Custom Primitives/Tabs",
  component: TabList,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real TabList props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    fullWidth: { control: "boolean" },
    overflowMenu: { control: "boolean" },
  },
};

export default meta;

/* Every state, removable, menu, overflow and reorderable tabs each have their
   own page under "Tabs/Variants" — see Tabs.variants.stories.tsx. */

/* ── Default — consolidated Default, Full Width, With Icons and With Icons /
   Full Width into one controls-driven story. `tabCount` and `withIcons` are
   story-only args: how many tabs to show, and whether each gets a leading
   icon. Clicking a tab really switches the panel below. The demo keeps the
   active tab in state and remounts (via `key`) whenever a control changes. ── */

interface TabsDemoProps {
  tabCount?: number;
  overflowMenu?: boolean;
  fullWidth?: boolean;
  withIcons?: boolean;
  iconOnly?: boolean;
  removable?: boolean;
  withMenu?: boolean;
  reorderable?: boolean;
  withBadge?: boolean;
  badgeType?: "number" | "error";
  size?: "md" | "sm";
  withSeverity?: boolean;
  severityType?: "success" | "warning" | "error";
}

// A different count per tab, so the badges read as real numbers.
const BADGE_COUNTS = [3, 12, 5, 8, 24, 1];

// The control says "error"; `Tab`'s `severity` prop calls that level "critical".
const SEVERITY_BY_TYPE = { success: "success", warning: "warning", error: "critical" } as const;

const TAB_ICONS = [LayoutGrid, Settings, FileText, Lock, Bell, Star];

function TabsDemo({
  tabCount = 3,
  overflowMenu = false,
  fullWidth = false,
  withIcons = false,
  iconOnly = false,
  removable = false,
  withMenu = false,
  reorderable = false,
  withBadge = false,
  badgeType = "number",
  size = "md",
  withSeverity = false,
  severityType = "success",
}: TabsDemoProps) {
  // Tabs live in state so a removable tab really disappears. `tabCount` sets
  // the starting list; the demo remounts when it changes.
  const [tabs, setTabs] = useState(() => Array.from({ length: tabCount }, (_, i) => i));
  const [active, setActive] = useState(0);
  // The remove button shows an "×" instead of the default trash can (`removeIcon`), reachable by keyboard (`removeFocusable`).
  const removeIcon = REMOVE_TAB_ICON;
  const removeTab = (id: number) => {
    const next = tabs.filter((t) => t !== id);
    setTabs(next);
    if (active === id && next.length > 0) setActive(next[0]);
  };
  // Moves a tab one slot (the menu's non-drag way to reorder) and announces it.
  const moveTab = (id: number, delta: -1 | 1) => {
    const from = tabs.indexOf(id);
    const to = from + delta;
    if (to < 0 || to >= tabs.length) return;
    const next = [...tabs];
    next.splice(from, 1);
    next.splice(to, 0, id);
    setTabs(next);
    announceToScreenReader(`Tab Section ${id + 1}, moved to position ${to + 1} of ${tabs.length}`);
  };
  // Each tab's kebab menu. With menu: Rename, Duplicate and a Delete that really
  // removes the tab. Reorderable: Move left / Move right, the non-drag way to
  // reorder for pointer users (WCAG 2.5.7). The "×" (Removable) sits at the far
  // right, after the kebab.
  const menuItemsFor = (id: number) => {
    const index = tabs.indexOf(id);
    const base = withMenu
      ? [
          { id: "rename", label: "Rename", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
        ]
      : [];
    const moves = reorderable
      ? [
          { id: "move-left", label: "Move left", icon: <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />, disabled: index === 0, onClick: () => moveTab(id, -1) },
          { id: "move-right", label: "Move right", icon: <ArrowRight className="h-4 w-4" strokeWidth={1.5} />, disabled: index === tabs.length - 1, onClick: () => moveTab(id, 1) },
        ]
      : [];
    const del = withMenu
      ? [{ id: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, onClick: () => removeTab(id) }]
      : [];
    const groups = [base, moves, del].filter((g) => g.length > 0);
    if (groups.length === 0) return undefined;
    return groups.flatMap((g, i) => (i === 0 ? g : ["separator" as const, ...g]));
  };
  const handleReorder = (order: string[]) => setTabs(order.map(Number));
  return (
    <div>
      <TabList
        fullWidth={fullWidth}
        size={size}
        overflowMenu={overflowMenu}
        reorderable={reorderable}
        keyboardReorder={reorderable}
        onReorder={handleReorder}
        aria-label="Demo tabs"
      >
        {tabs.map((i) => {
          const Icon = TAB_ICONS[i % TAB_ICONS.length];
          const count = BADGE_COUNTS[i % BADGE_COUNTS.length];
          const iconNode = <Icon className="h-4 w-4" strokeWidth={1.5} />;
          // Badge and error indicator are real `Tab` props: `badge` (a count) or
          // `error` (a red "!"). With Icon only they move to the icon's corner.
          return (
            <Tab
              key={i}
              active={active === i}
              onClick={() => setActive(i)}
              icon={withIcons || iconOnly ? iconNode : undefined}
              iconOnly={iconOnly}
              badge={withBadge && badgeType === "number" ? count : undefined}
              error={withBadge && badgeType === "error"}
              severity={withSeverity ? SEVERITY_BY_TYPE[severityType] : undefined}
              onRemove={removable ? () => removeTab(i) : undefined}
              removeIcon={removeIcon}
              removeFocusable
              menuItems={menuItemsFor(i)}
              menuFocusable
            >
              {/* Numbered while Reorderable is on, so moving a tab is visible and announced by name. */}
              {reorderable ? `Tab Section ${i + 1}` : "Tab Section"}
            </Tab>
          );
        })}
      </TabList>
      {tabs.map((i) => (
        <TabPanel key={i} active={active === i}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">Content for tab {i + 1}</div>
        </TabPanel>
      ))}
      {reorderable && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          Drag a tab, or focus one and press Ctrl+Shift+← / →. Each tab’s kebab menu also has
          Move left / Move right.
        </p>
      )}
    </div>
  );
}

type TabsDemoStory = StoryObj<TabsDemoProps>;

export const Default: TabsDemoStory = {
  render: (args) => <TabsDemo key={JSON.stringify(args)} {...args} />,
  args: { tabCount: 3, overflowMenu: false, fullWidth: false, withIcons: false, iconOnly: false, removable: false, withMenu: false, reorderable: false, withBadge: false, badgeType: "number", size: "md", withSeverity: false, severityType: "success" },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Overflow menu", "Removable", "With menu", "Reorderable", "Number of tabs", "Full width", "With icons", "Icon only", "With badge", "Badge type", "Size", "With severity", "Severity type",
        "overflowMenu", "removable", "withMenu", "reorderable", "tabCount", "fullWidth", "withIcons", "iconOnly", "withBadge", "badgeType", "size", "withSeverity", "severityType",
      ],
      sort: "none",
    },
  },
  argTypes: {
    overflowMenu: {
      name: "Overflow menu",
      control: "boolean",
      description: "When the row runs out of room, collapses extra tabs into a “More” dropdown (`overflowMenu`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Adds a close button to each tab that removes it (`onRemove`). Change any control to bring removed tabs back.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    withMenu: {
      name: "With menu",
      control: "boolean",
      description: "Adds a kebab (⋮) menu to each tab (`menuItems`) with Rename, Duplicate and Delete. With Removable on too, the “×” sits at the far right, after the kebab. Reach both with the arrow keys, right after their tab.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    reorderable: {
      name: "Reorderable",
      control: "boolean",
      description: "Lets people reorder the tabs: drag one, press Ctrl+Shift+Left / Right on a focused tab, or use Move left / Move right in its kebab menu (`reorderable`, `keyboardReorder`). Changes are announced to screen readers.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    tabCount: {
      name: "Number of tabs",
      control: { type: "range", min: 1, max: 6, step: 1 },
      description: "How many tabs to show.",
      table: { category: "Content", defaultValue: { summary: "3" } },
    },
    fullWidth: {
      name: "Full width",
      control: "boolean",
      description: "Tabs stretch to fill the whole row (`fullWidth`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    withIcons: {
      name: "With icons",
      control: "boolean",
      description: "Puts an icon before each tab’s text (`icon`). Hidden when Icon only is on, which always shows icons.",
      if: { arg: "iconOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    withBadge: {
      name: "With badge",
      control: "boolean",
      description: "Adds a badge to each tab (`badge` or `error`): after the text, or on the icon’s top-right corner when Icon only is on.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    badgeType: {
      name: "Badge type",
      control: "radio",
      options: ["number", "error"],
      description: "Number shows a count (`badge`); error shows a red “!” (`error`).",
      if: { arg: "withBadge", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "number" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["md", "sm"],
      description: "Medium (48px) or small, a compact 36px row (`size`).",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    withSeverity: {
      name: "With severity",
      control: "boolean",
      description: "Colors the tabs by how urgent they are (`severity`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    severityType: {
      name: "Severity type",
      control: "radio",
      options: ["success", "warning", "error"],
      description: "Success (green), warning (amber) or error (red).",
      if: { arg: "withSeverity", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "success" } },
    },
    iconOnly: {
      name: "Icon only",
      control: "boolean",
      description: "Shows just the icon on each tab (`iconOnly`). The label stays for screen readers and appears in a tooltip on hover or focus.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
};
