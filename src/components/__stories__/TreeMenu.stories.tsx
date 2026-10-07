import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TreeMenu } from "../tree-menu";
import type { TreeMenuItem, TreeMenuChild } from "../tree-menu";
import { FileText, LayoutGrid, LayoutTemplate, Plug, Puzzle, Shield, SlidersHorizontal } from "lucide-react";
import { defaultItems, noIconItems, withSelection } from "./TreeMenu.shared";

const meta: Meta<typeof TreeMenu> = {
  title: "Custom Primitives/TreeMenu",
  component: TreeMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  decorators: [
    (Story) => (
      <div className="w-[256px] bg-lyra-bg-surface-shell rounded-lyra-lg p-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;

/* Variants (chevron on the left, no icons, the "Call Centers" section) each
   have their own page under "TreeMenu/Variants" — see
   TreeMenu.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, All Collapsed, Chevron Left and No Icons into a single
   playground. Clicking a row selects it, so the active styling is real
   state. ── */

interface TreeMenuDemoProps {
  menu?: "with-icons" | "no-icons";
  levels?: number;
  mainIcons?: boolean;
  interiorIcons?: boolean;
  startState?: "closed" | "expanded";
  exactSelection?: boolean;
  chevronPosition?: "left" | "right";
}

/* Icons for the nested rows of the app-navigation menu, by label. */
const interiorIconFor = (label: string) => {
  const cls = "h-4 w-4";
  switch (label) {
    case "General": return <SlidersHorizontal className={cls} strokeWidth={1.5} />;
    case "Permissions": return <Shield className={cls} strokeWidth={1.5} />;
    case "Integrations": return <Plug className={cls} strokeWidth={1.5} />;
    case "Desktop Library": return <LayoutGrid className={cls} strokeWidth={1.5} />;
    case "Templates": return <LayoutTemplate className={cls} strokeWidth={1.5} />;
    case "Components": return <Puzzle className={cls} strokeWidth={1.5} />;
    default: return <FileText className={cls} strokeWidth={1.5} />;
  }
};

/* Adds an icon to every nested row, at any depth. */
function withInteriorIcons(children: TreeMenuChild[]): TreeMenuChild[] {
  return children.map((c) => ({
    ...c,
    icon: c.icon ?? interiorIconFor(c.label),
    children: c.children ? withInteriorIcons(c.children) : undefined,
  }));
}

/* Resizes the menu to `levels` deep (1 = top-level rows only). Nested rows
   already in the fixture stay at level 2; a deeper level is made by giving
   every childless nested row two rows of its own ("Templates 1", "Templates 2"),
   down to the chosen depth. `keep` is the initially selected row, which stays
   a leaf so it is still selectable. */
function withLevels(items: TreeMenuItem[], levels: number, keep: string): TreeMenuItem[] {
  const grow = (children: TreeMenuChild[], depth: number): TreeMenuChild[] =>
    children.map((c) => {
      if (c.children) return { ...c, children: grow(c.children, depth + 1) };
      if (depth >= levels || c.label === keep) return c;
      return { ...c, children: grow([{ label: `${c.label} 1` }, { label: `${c.label} 2` }], depth + 1) };
    });
  return items.map((item) =>
    levels <= 1 ? { ...item, children: undefined } : item.children ? { ...item, children: grow(item.children, 2) } : item
  );
}

/* Main (top-level) icons come from the fixture; interior ones are added. */
function shapeIcons(items: TreeMenuItem[], mainIcons: boolean, interiorIcons: boolean): TreeMenuItem[] {
  return items.map((item) => ({
    ...item,
    icon: mainIcons ? item.icon : undefined,
    children: item.children && interiorIcons ? withInteriorIcons(item.children) : item.children,
  }));
}

function TreeMenuDemo({
  menu = "with-icons",
  levels = 2,
  mainIcons = true,
  interiorIcons = false,
  startState = "closed",
  exactSelection = false,
  chevronPosition = "right",
}: TreeMenuDemoProps) {
  const [selected, setSelected] = useState(menu === "with-icons" ? "Desktop Library" : "Checkbox");
  const baseItems = menu === "with-icons" ? defaultItems : noIconItems;
  const source = useMemo(() => {
    const sized = withLevels(baseItems, levels, menu === "with-icons" ? "Desktop Library" : "Checkbox");
    return menu === "with-icons" ? shapeIcons(sized, mainIcons, interiorIcons) : sized;
  }, [baseItems, menu, levels, mainIcons, interiorIcons]);
  return (
    <TreeMenu
      items={withSelection(source, selected, setSelected, startState === "expanded")}
      exactSelection={exactSelection}
      chevronPosition={chevronPosition}
    />
  );
}

type TreeMenuDemoStory = StoryObj<typeof TreeMenuDemo>;

export const Default: TreeMenuDemoStory = {
  args: {
    menu: "with-icons",
    levels: 2,
    mainIcons: true,
    interiorIcons: false,
    startState: "closed",
    exactSelection: false,
    chevronPosition: "right",
  },
  parameters: {
    controls: {
      include: [
        "menu",
        "levels",
        "Levels",
        "mainIcons",
        "interiorIcons",
        "Main icons",
        "Interior icons",
        "startState",
        "exactSelection",
        "chevronPosition",
        "Menu",
        "Start state",
        "Exact selection",
        "Chevron position",
      ],
      sort: "none",
    },
  },
  argTypes: {
    startState: {
      name: "Start state",
      control: "radio",
      options: ["closed", "expanded"],
      description: "Whether every group is closed or open on first render (`defaultOpen`). Groups can still be opened and closed afterwards.",
      table: { category: "Behavior" },
    },
    exactSelection: {
      name: "Exact selection",
      control: "boolean",
      description:
        "Off: a group looks active when one of its children is. On: only the row you clicked looks selected, at any depth (`exactSelection`).",
      table: { category: "Behavior" },
    },
    menu: {
      name: "Menu",
      control: "radio",
      options: ["with-icons", "no-icons"],
      description: "App navigation with a leading icon on each row, or a plain text menu.",
      table: { category: "Content" },
    },
    levels: {
      name: "Levels",
      control: "select",
      options: [1, 2, 3, 4],
      description:
        "How many levels deep the menu goes. 1 is top-level rows only; each level after that nests rows one step further (e.g. Templates 1 under Templates). Open the groups to see them.",
      table: { category: "Content" },
    },
    mainIcons: {
      name: "Main icons",
      control: "boolean",
      description: "Shows the leading icon on each top-level row (`icon`).",
      if: { arg: "menu", eq: "with-icons" },
      table: { category: "Content" },
    },
    interiorIcons: {
      name: "Interior icons",
      control: "boolean",
      description: "Shows a smaller icon on each nested row too (`icon` on a child). Open a group to see them.",
      if: { arg: "menu", eq: "with-icons" },
      table: { category: "Content" },
    },
    chevronPosition: {
      name: "Chevron position",
      control: "radio",
      options: ["right", "left"],
      description: "Which end of an expandable row the chevron sits on. Left puts it just after the icon, before the label — or first when the row has no icon (`chevronPosition`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — each group's open
    // state only reads `defaultOpen` on first mount.
    <TreeMenuDemo key={JSON.stringify(args)} {...args} />
  ),
};
