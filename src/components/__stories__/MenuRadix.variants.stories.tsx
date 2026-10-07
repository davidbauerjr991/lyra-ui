import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";
import { MenuRadix } from "../menu-radix";
import { Button } from "../button";
import { Menu } from "../menu";
import { Popover } from "../popover";
import { Input } from "../input";
import {
  Box, FileText, Copy, Scissors, Clipboard, Share2, Download, Trash2,
  FolderOpen, Users, Link, Mail, MoreVertical, Search, X,
} from "lucide-react";
import { defaultItems } from "./MenuRadix.shared";

/* ── Headless Primitives / Menu / Variants ──
   Composed examples and reference pages for `MenuRadix` (see
   MenuRadix.stories.tsx for the controls-driven Default).

   "Width Scale" (below, moved here from Custom Primitives/Menu) is the one exception
   to this file otherwise only rendering `MenuRadix`: it documents the
   three fixed widths a wrapping Popover should pick from when composing
   a *bare*, embeddable `Menu` (Autocomplete, PhoneInput, CreateNew's
   flyouts, agent-profile's status menu) — a composition pattern, not a
   `MenuRadix` prop/state, since `MenuRadix` owns its own trigger/
   positioning/surface and has no bare mode for this to apply to. */

const meta: Meta<typeof MenuRadix> = {
  title: "Headless Primitives/Menu/Variants",
  component: MenuRadix,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof MenuRadix>;

/* ── Keyboard Focus ──
   Tab to "Open Menu", press Enter or ↓ to open it, then use ↓/↑ (or Home/End)
   to move. The focused row gets a full outline (inset, keyboard focus only) on
   top of the gray row and accent bar; hovering with the mouse does not add the
   outline. */

export const KeyboardFocus: Story = {
  name: "Keyboard Focus",
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab to the button, press Enter, then ↓ / ↑.</p>
      <div>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} items={defaultItems} className="w-64" />
      </div>
    </div>
  ),
};

/* ── With Icons & Shortcuts ── */

export const WithIconsAndShortcuts: Story = {
  name: "With Icons & Shortcuts",
  render: () => (
    <MenuRadix
      trigger={
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          Actions
        </Button>
      }
      className="w-64"
      items={[
        { id: "1", label: "New File", icon: <FileText className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘N" },
        { id: "2", label: "Open Recent", icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "2a", label: "project-alpha.ts" },
          { id: "2b", label: "dashboard.tsx" },
          { id: "2c", label: "settings.json" },
        ]},
        "separator",
        { id: "3", label: "Share", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "3a", label: "Copy Link", icon: <Link className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "3b", label: "Email", icon: <Mail className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "3c", label: "Invite People", icon: <Users className="h-4 w-4" strokeWidth={1.5} /> },
        ]},
        { id: "4", label: "Export", icon: <Download className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "4a", label: "PDF" },
          { id: "4b", label: "CSV" },
          { id: "4c", label: "JSON" },
        ]},
        "separator",
        { id: "5", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true, shortcut: "⌫" },
      ]}
    />
  ),
};

/* ── With Submenus (Radix-native flyout — no manual anchor-rect/timeout
   logic, unlike the original's MenuItemRow) ── */

export const WithSubmenus: Story = {
  name: "With Submenus",
  render: () => (
    <MenuRadix
      trigger={<Button variant="outline">Open Menu</Button>}
      className="w-64"
      items={[
        { id: "1", label: "New File", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
        { id: "2", label: "Open Recent", icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "2a", label: "project-alpha.ts" },
          { id: "2b", label: "dashboard.tsx" },
          { id: "2c", label: "settings.json" },
        ]},
        "separator",
        { id: "3", label: "Share", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "3a", label: "Copy Link", icon: <Link className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "3b", label: "Email", icon: <Mail className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "3c", label: "Invite People", icon: <Users className="h-4 w-4" strokeWidth={1.5} />, submenu: [
            { id: "3c1", label: "From contacts" },
            { id: "3c2", label: "By email" },
          ]},
        ]},
        { id: "4", label: "Export", icon: <Download className="h-4 w-4" strokeWidth={1.5} />, submenu: [
          { id: "4a", label: "PDF" },
          { id: "4b", label: "CSV" },
          { id: "4c", label: "JSON" },
        ]},
        "separator",
        { id: "5", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
      ]}
    />
  ),
};

/* ── Submenu Open (interactive) ──
   Clicks the trigger, then the real "Open Recent" row, so the submenu
   flyout is visible without a manual hover — drives the actual Radix
   component through @storybook/test rather than mocking up the flyout,
   so it can't fall out of sync with the real implementation. Two clicks
   are needed here (unlike the original's single click) because MenuRadix
   is a self-contained trigger+menu unit — the menu isn't in the DOM at
   all until the trigger opens it. */

export const SubmenuOpen: Story = {
  name: "Submenu Open",
  render: () => (
    <div style={{ minHeight: 320 }}>
      <MenuRadix
        // Not modal: Radix's modal mode marks the rest of the page (including
        // this focusable trigger) aria-hidden while open, which accessibility
        // checkers report as `aria-hidden-focus`.
        modal={false}
        trigger={<Button variant="outline">Open Menu</Button>}
        className="w-64"
        items={[
          { id: "1", label: "New File", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
          { id: "2", label: "Open Recent", icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />, submenu: [
            { id: "2a", label: "project-alpha.ts" },
            { id: "2b", label: "dashboard.tsx" },
            { id: "2c", label: "settings.json" },
          ]},
          "separator",
          { id: "3", label: "Share", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, submenu: [
            { id: "3a", label: "Copy Link", icon: <Link className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "3b", label: "Email", icon: <Mail className="h-4 w-4" strokeWidth={1.5} /> },
          ]},
          "separator",
          { id: "4", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Radix portals the menu to document.body, so search from document
    // level rather than scoping to canvasElement.
    const body = within(document.body);
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText("Open Menu");
    await userEvent.click(trigger);
    const submenuTrigger = await body.findByText("Open Recent");
    await userEvent.click(submenuTrigger);
  },
};

/* ── With Descriptions ── */

export const WithDescriptions: Story = {
  name: "With Descriptions",
  render: () => (
    <MenuRadix
      trigger={<Button variant="outline">Open Menu</Button>}
      className="w-64"
      items={[
        { id: "1", label: "Item label" },
        { id: "2", label: "Item label", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, description: "Secondary Text" },
        "separator",
        { id: "3", label: "Import from file", icon: <FileText className="h-4 w-4" strokeWidth={1.5} />, description: "Upload a CSV or JSON file" },
        { id: "4", label: "Connect service", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, description: "Link an external data source" },
      ]}
    />
  ),
};

/* ── All Variants ── */

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap gap-8 items-start">
      {/* No icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Without icons</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Menu Item" },
            { id: "2", label: "Menu Item" },
            { id: "3", label: "Menu Item" },
          ]}
        />
      </div>

      {/* With icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With icons</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Share", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "3", label: "Download", icon: <Download className="h-4 w-4" strokeWidth={1.5} /> },
          ]}
        />
      </div>

      {/* With shortcuts */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With shortcuts</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Cut", icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘X" },
            { id: "2", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘C" },
            { id: "3", label: "Paste", icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘V" },
          ]}
        />
      </div>

      {/* With dividers */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With dividers</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Edit", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
            "separator",
            { id: "3", label: "Download", icon: <Download className="h-4 w-4" strokeWidth={1.5} /> },
            "separator",
            { id: "4", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
          ]}
        />
      </div>

      {/* With disabled items */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With disabled items</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Edit", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Archive", disabled: true },
            "separator",
            { id: "3", label: "Delete", destructive: true, icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
          ]}
        />
      </div>

      {/* Active (current) item */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Active (current) item</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-[200px]"
          items={[
            { id: "1", label: "Overview" },
            { id: "2", label: "Analytics", active: true },
            { id: "3", label: "Settings" },
          ]}
        />
      </div>

      {/* With descriptions */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With descriptions</p>
        <MenuRadix
          trigger={<Button variant="outline">Open Menu</Button>}
          className="w-64"
          items={[
            { id: "1", label: "Import from file", icon: <FileText className="h-4 w-4" strokeWidth={1.5} />, description: "Upload a CSV or JSON file" },
            { id: "2", label: "Connect service", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, description: "Link an external data source" },
          ]}
        />
      </div>
    </div>
  ),
};

/* ── All Item States (matches Figma) ── */

export const AllStates: Story = {
  name: "States (All Item States)",
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Open the menu, then hover/click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants.
      </p>
      <MenuRadix
        trigger={<Button variant="outline">Open Menu</Button>}
        className="w-[320px]"
        items={[
          { id: "1", label: "Menu Item", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘⌥S", submenu: [
            { id: "1a", label: "Sub Item" },
          ]},
          { id: "2", label: "Menu Item (no icon)", shortcut: "⌘⌥S", submenu: [
            { id: "2a", label: "Sub Item" },
          ]},
          "separator",
          { id: "3", label: "Menu Item", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘⌥S" },
          { id: "4", label: "Disabled Item", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘⌥S", disabled: true },
          "separator",
          { id: "5", label: "Destructive Item", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, destructive: true, shortcut: "⌘⌥S" },
        ]}
      />
    </div>
  ),
};

/* ── Width Scale (canonical reference — see CONTRIBUTING.md
   "Menu / Popover width scale") ──
   Menu itself only enforces a 200px floor and sizes to content above
   that — this story visualizes the three fixed widths a wrapping
   Popover should pick from instead of an arbitrary value. */

export const WidthScale: Story = {
  name: "Width Scale",
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-start gap-8">
      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">sm — 200px</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">Simple item-only menus, no header or search row</p>
        </div>
        <Menu
          items={[
            { id: "1", label: "Cut", icon: <Scissors className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "3", label: "Paste", icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} /> },
            "separator",
            { id: "4", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
          ]}
          className="w-[200px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">md — 256px (w-64)</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">A search/filter row above the list (e.g. agent-profile.tsx)</p>
        </div>
        {/* Real Popover as the container (not a hand-rolled bordered div) —
            Menu renders `bare` so it stretches to fill Popover's own surface
            instead of drawing a second nested border/shadow/background. */}
        <Popover
          aria-label="Menu with search"
          open
          placement="bottom"
          align="start"
          showArrow={false}
          // Menu's rows are edge-to-edge with their own p-1 inset — opt out
          // of Popover's default 20px body padding.
          bodyPadding={false}
          header={
            <div className="px-3 py-2.5 border-b border-lyra-border-subtle">
              <Input
                type="text"
                placeholder="Search statuses"
                startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
              />
            </div>
          }
          content={
            <Menu
              bare
              items={[
                { id: "1", label: "Available" },
                { id: "2", label: "Away" },
                { id: "3", label: "Do not disturb" },
              ]}
              className="w-64"
            />
          }
        >
          <span className="inline-block w-64 h-0" aria-hidden="true" />
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">lg — 320px</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">A title header + close button, or icon items (e.g. create-new.tsx)</p>
        </div>
        <Popover
          aria-label="Menu with title and close button"
          open
          placement="bottom"
          align="start"
          showArrow={false}
          maxWidth="320px"
          // Menu's rows are edge-to-edge with their own p-2 inset — opt out
          // of Popover's default 20px body padding.
          bodyPadding={false}
          header={
            <div className="flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3">
              <span className="lyra-body-lg-emphasis text-lyra-fg-default">New Outbound</span>
              <X className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
            </div>
          }
          content={
            <Menu
              bare
              items={[
                { id: "1", label: "Call", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
                { id: "2", label: "Email", icon: <Mail className="h-4 w-4" strokeWidth={1.5} /> },
                { id: "3", label: "SMS", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} /> },
              ]}
              className="w-[320px] p-2"
            />
          }
        >
          <span className="inline-block w-[320px] h-0" aria-hidden="true" />
        </Popover>
      </div>
    </div>
  ),
};
