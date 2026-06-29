import type { Meta, StoryObj } from "@storybook/react";
import { Menu, type MenuEntry } from "../menu";
import { Box, FileText, Copy, Scissors, Clipboard, Share2, Download, Trash2, FolderOpen, Users, Link, Mail } from "lucide-react";

const meta: Meta<typeof Menu> = {
  title: "Atoms/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

/* ── Basic (no icons) ── */

const defaultItems: MenuEntry[] = [
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

export const Default: Story = {
  name: "Default",
  render: () => (
    <Menu items={defaultItems} className="w-[260px]" />
  ),
};

/* ── Simple ── */

export const Simple: Story = {
  name: "Simple",
  render: () => (
    <Menu
      items={[
        { id: "1", label: "Cut", icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘X" },
        { id: "2", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘C" },
        { id: "3", label: "Paste", icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘V" },
      ]}
      className="w-[240px]"
    />
  ),
};

/* ── With Icons & Shortcuts ── */

export const WithIconsAndShortcuts: Story = {
  name: "With Icons & Shortcuts",
  render: () => (
    <Menu
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
      className="w-[260px]"
    />
  ),
};

/* ── With Submenus (interactive flyout) ── */

export const WithSubmenus: Story = {
  name: "With Submenus",
  render: () => (
    <div className="pl-4 pt-4" style={{ minHeight: 400 }}>
      <Menu
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
        className="w-[260px]"
      />
    </div>
  ),
};

/* ── With Disabled Items ── */

export const WithDisabled: Story = {
  name: "With Disabled Items",
  render: () => (
    <Menu
      items={[
        { id: "1", label: "Edit", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
        { id: "2", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
        "separator",
        { id: "3", label: "Archive", disabled: true },
        { id: "4", label: "Move", submenu: [
          { id: "4a", label: "Folder A" },
          { id: "4b", label: "Folder B" },
        ]},
        "separator",
        { id: "5", label: "Delete", destructive: true, icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
      ]}
      className="w-[220px]"
    />
  ),
};

/* ── With Descriptions ── */

export const WithDescriptions: Story = {
  name: "With Descriptions",
  render: () => (
    <Menu
      items={[
        { id: "1", label: "Item label" },
        { id: "2", label: "Item label", icon: <Box className="h-4 w-4" strokeWidth={1.5} />, description: "Secondary Text" },
        "separator",
        { id: "3", label: "Import from file", icon: <FileText className="h-4 w-4" strokeWidth={1.5} />, description: "Upload a CSV or JSON file" },
        { id: "4", label: "Connect service", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, description: "Link an external data source" },
      ]}
      className="w-[280px]"
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
        <Menu
          items={[
            { id: "1", label: "Menu Item" },
            { id: "2", label: "Menu Item" },
            { id: "3", label: "Menu Item" },
          ]}
          className="w-[200px]"
        />
      </div>

      {/* With icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With icons</p>
        <Menu
          items={[
            { id: "1", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Share", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "3", label: "Download", icon: <Download className="h-4 w-4" strokeWidth={1.5} /> },
          ]}
          className="w-[200px]"
        />
      </div>

      {/* With shortcuts */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With shortcuts</p>
        <Menu
          items={[
            { id: "1", label: "Cut", icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘X" },
            { id: "2", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘C" },
            { id: "3", label: "Paste", icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />, shortcut: "⌘V" },
          ]}
          className="w-[220px]"
        />
      </div>

      {/* With dividers */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With dividers</p>
        <Menu
          items={[
            { id: "1", label: "Edit", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
            "separator",
            { id: "3", label: "Download", icon: <Download className="h-4 w-4" strokeWidth={1.5} /> },
            "separator",
            { id: "4", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
          ]}
          className="w-[220px]"
        />
      </div>

      {/* With disabled items */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With disabled items</p>
        <Menu
          items={[
            { id: "1", label: "Edit", icon: <FileText className="h-4 w-4" strokeWidth={1.5} /> },
            { id: "2", label: "Archive", disabled: true },
            "separator",
            { id: "3", label: "Delete", destructive: true, icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
          ]}
          className="w-[220px]"
        />
      </div>

      {/* With descriptions */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With descriptions</p>
        <Menu
          items={[
            { id: "1", label: "Import from file", icon: <FileText className="h-4 w-4" strokeWidth={1.5} />, description: "Upload a CSV or JSON file" },
            { id: "2", label: "Connect service", icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />, description: "Link an external data source" },
          ]}
          className="w-[260px]"
        />
      </div>
    </div>
  ),
};

/* ── All Item States (matches Figma) ── */

export const AllStates: Story = {
  name: "All Item States",
  render: () => (
    <div className="flex flex-col gap-1 w-[320px]">
      <p className="lyra-body-sm text-lyra-fg-secondary mb-2">
        Hover and click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants.
      </p>
      <Menu
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
        className="w-[320px]"
      />
    </div>
  ),
};
