import type { Meta, StoryObj } from "@storybook/react";
import { MenuRadix } from "../menu-radix";
import { Button } from "../button";
import type { MenuEntry } from "../menu";
import {
  FileText, Copy, Link, Share2, Download, Trash2, Archive, Mail, Users,
} from "lucide-react";

/* ── Headless Primitives / Menu ──
   Experimental rebuild of `Menu` on `@radix-ui/react-dropdown-menu`, for
   side-by-side comparison against the hand-rolled original in `Custom Primitives/Menu`.
   Unlike the original (a bare list embeddable in `Popover`/`Select`),
   `MenuRadix` is a self-contained trigger-plus-menu unit — Radix's
   DropdownMenu requires exactly one Trigger and owns its own open/close
   state. See menu-radix.tsx's top comment for the full breakdown of what
   Radix provides for free (keyboard nav, focus management, genuinely
   built-in nested submenus) versus what's still hand-rolled here (the
   scroll-chevron affordance — DropdownMenu has no ScrollUpButton/
   ScrollDownButton the way Select does). Not wired into index.ts or either
   consuming app yet. */

const meta: Meta<typeof MenuRadix> = {
  title: "Headless Primitives/Menu",
  component: MenuRadix,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (keyboard focus, icons & shortcuts, nested submenus, submenu
   open, descriptions, item types, item states, width scale) each have their
   own page under "Menu/Variants" — see MenuRadix.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates the old Default,
   Simple, With Disabled Items, With Active Item and Long List stories:
   "Row content" picks text / icons / shortcuts / descriptions, the toggles
   add submenus, dividers, and a disabled, active or destructive row, and
   "List length" covers the scroll-chevron affordance. Click "Open Menu" to
   see it. ── */

type RowContent = "text" | "icons" | "iconsShortcuts" | "descriptions";
type MenuWidth = "sm" | "md" | "lg";

interface MenuDemoProps {
  rowContent?: RowContent;
  submenu?: boolean;
  dividers?: boolean;
  disabledRow?: boolean;
  activeRow?: boolean;
  destructiveRow?: boolean;
  listLength?: "short" | "long";
  width?: MenuWidth;
  side?: "bottom" | "top" | "left" | "right";
  align?: "start" | "center" | "end";
  modal?: boolean;
}

const icon = (Icon: typeof FileText) => <Icon className="h-4 w-4" strokeWidth={1.5} />;

const WIDTH_CLASS: Record<MenuWidth, string> = {
  sm: "w-[200px]",
  md: "w-64",
  lg: "w-[320px]",
};

const ROWS = [
  { id: "edit", label: "Edit", Icon: FileText, shortcut: "⌘E", description: "Change this item's details" },
  { id: "duplicate", label: "Duplicate", Icon: Copy, shortcut: "⌘D", description: "Make a copy of this item" },
  { id: "link", label: "Copy link", Icon: Link, shortcut: "⌘L", description: "Copy a shareable link" },
  { id: "share", label: "Share", Icon: Share2, shortcut: "⌘⇧S", description: "Invite people to this item" },
  { id: "download", label: "Download", Icon: Download, shortcut: "⌘S", description: "Save a local copy" },
];

function buildItems({
  rowContent = "icons",
  submenu = false,
  dividers = false,
  disabledRow = false,
  activeRow = false,
  destructiveRow = false,
  listLength = "short",
}: MenuDemoProps): MenuEntry[] {
  const items: MenuEntry[] = ROWS.map((row, i) => ({
    id: row.id,
    label: row.label,
    icon: rowContent === "text" ? undefined : icon(row.Icon),
    shortcut: rowContent === "iconsShortcuts" ? row.shortcut : undefined,
    description: rowContent === "descriptions" ? row.description : undefined,
    active: activeRow && i === 1 ? true : undefined,
    submenu:
      submenu && row.id === "share"
        ? [
            { id: "share-email", label: "Email", icon: rowContent === "text" ? undefined : icon(Mail) },
            { id: "share-people", label: "Invite people", icon: rowContent === "text" ? undefined : icon(Users) },
          ]
        : undefined,
  }));

  if (listLength === "long") {
    for (let n = 1; n <= 15; n++) items.push({ id: `extra-${n}`, label: `Item label ${n}` });
  }
  if (dividers) items.splice(2, 0, "separator");
  if (disabledRow) {
    items.push({ id: "archive", label: "Archive", icon: rowContent === "text" ? undefined : icon(Archive), disabled: true });
  }
  if (destructiveRow) {
    if (dividers) items.push("separator");
    items.push({
      id: "delete",
      label: "Delete",
      icon: rowContent === "text" ? undefined : icon(Trash2),
      shortcut: rowContent === "iconsShortcuts" ? "⌫" : undefined,
      destructive: true,
    });
  }
  return items;
}

function MenuDemo(props: MenuDemoProps) {
  const { width = "md", side = "bottom", align = "start", modal = true } = props;
  return (
    // Room around the trigger so the open menu (and its flyouts) stay inside
    // the canvas whichever side it opens toward.
    <div className="flex items-center justify-center" style={{ minHeight: 440, minWidth: 560 }}>
      <MenuRadix
        trigger={<Button variant="outline">Open Menu</Button>}
        items={buildItems(props)}
        className={WIDTH_CLASS[width]}
        side={side}
        align={align}
        modal={modal}
      />
    </div>
  );
}

type MenuDemoStory = StoryObj<typeof MenuDemo>;

export const Default: MenuDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so the
  // Docs page's autodocs table still lists every real MenuRadix prop.
  // Storybook matches `include` against each control's display `name`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: [
        "modal", "rowContent", "submenu", "dividers", "disabledRow", "activeRow", "destructiveRow",
        "listLength", "width", "side", "align",
        "Modal", "Row content", "Submenu", "Dividers", "Disabled row", "Active row", "Destructive row",
        "List length", "Width", "Opens toward", "Alignment",
      ],
      sort: "none",
    },
  },
  args: {
    modal: true,
    rowContent: "icons",
    submenu: false,
    dividers: false,
    disabledRow: false,
    activeRow: false,
    destructiveRow: false,
    listLength: "short",
    width: "md",
    side: "bottom",
    align: "start",
  },
  argTypes: {
    modal: {
      name: "Modal",
      control: "boolean",
      description:
        "While open, hide the rest of the page from assistive tech and block outside clicks (`modal`, Radix's default). Off leaves the page exposed; use it where an accessibility checker flags the hidden trigger.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    rowContent: {
      name: "Row content",
      control: "radio",
      options: ["text", "icons", "iconsShortcuts", "descriptions"],
      description:
        "What each row shows: label only, label + icon, icon + keyboard shortcut, or icon + secondary description text.",
      table: { category: "Content" },
    },
    submenu: {
      name: "Submenu",
      control: "boolean",
      description: "Adds a nested flyout to the Share row (`submenu`).",
      table: { category: "Content" },
    },
    dividers: {
      name: "Dividers",
      control: "boolean",
      description: "Groups the rows with separator lines.",
      table: { category: "Content" },
    },
    disabledRow: {
      name: "Disabled row",
      control: "boolean",
      description: "Adds an Archive row that can't be selected (`disabled`).",
      table: { category: "Content" },
    },
    activeRow: {
      name: "Active row",
      control: "boolean",
      description: "Marks the second row as the persistently highlighted current item (`active`): blue background and accent bar.",
      table: { category: "Content" },
    },
    destructiveRow: {
      name: "Destructive row",
      control: "boolean",
      description: "Adds a red Delete row (`destructive`).",
      table: { category: "Content" },
    },
    listLength: {
      name: "List length",
      control: "radio",
      options: ["short", "long"],
      description:
        "Long adds 15 more rows so the list overflows and shows the scroll-chevron affordance instead of a native scrollbar.",
      table: { category: "Content" },
    },
    width: {
      name: "Width",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Menu surface width: sm 200px, md 256px, lg 320px (`className`). See Variants → Width Scale.",
      table: { category: "Appearance" },
    },
    side: {
      name: "Opens toward",
      control: "radio",
      options: ["bottom", "top", "left", "right"],
      description: "Which side of the trigger the menu opens on (`side`).",
      table: { category: "Appearance" },
    },
    align: {
      name: "Alignment",
      control: "radio",
      options: ["start", "center", "end"],
      description: "How the menu lines up with the trigger along that side (`align`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes, closing any open menu.
    <MenuDemo key={JSON.stringify(args)} {...args} />
  ),
};
