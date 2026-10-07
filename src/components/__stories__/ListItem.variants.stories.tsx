import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../list-item";
import { MenuItem } from "../menu-item";
import { UserPlus, MessageSquare, Bell, Home, Users, Settings, Trash2 } from "lucide-react";
import { Badge } from "../badge";
import { MENU_PANEL_SURFACE } from "./ListItem.shared";

/* One page per variant, shown under "ListItem/Variants" in the sidebar. Static
   references for design review; the interactive playground is ListItem →
   Default. "!autodocs" keeps this folder from getting a second Docs page. */
const meta: Meta<typeof ListItem> = {
  title: "Custom Primitives/ListItem/Variants",
  component: ListItem,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof ListItem>;

export const ListItemBasic: Story = {
  name: "ListItem — Basic",
  args: { title: "New Case", subtitle: "Noah Patel", meta: "51m ago" },
};

export const WithLeading: Story = {
  name: "With leading icon",
  render: () => (
    <div className="w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden">
      <ListItem
        leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong"><UserPlus className="h-4 w-4" strokeWidth={1.5} /></div>}
        title="New Case"
        subtitle="Noah Patel"
        meta="51m ago"
      />
      <ListItem
        leading={<div className="h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong"><MessageSquare className="h-4 w-4" strokeWidth={1.5} /></div>}
        title="New Chat"
        subtitle="Sarah Miller"
        meta="56m ago"
      />
      <ListItem
        leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary"><Bell className="h-4 w-4" strokeWidth={1.5} /></div>}
        title="System Update"
        subtitle="Maintenance window at midnight"
        meta="2h ago"
        trailing={<Badge shape="circle" variant="info" size="sm">New</Badge>}
      />
    </div>
  ),
};

/* ── MenuItem ──
   `MenuItem` (menu-item.tsx) is a related-but-distinct primitive — a
   "list item within a menu": a single-row, left-accent-bar, hover/active
   -aware button, the same visual `Menu`'s own data-driven `items` render
   internally per row, now available standalone. Demoed here in
   ListItem's own stories file (rather than a separate stories file) on
   request, since the two are closely related "row" primitives; reach for
   `ListItem` for a general content row (leading/title/subtitle/meta/
   trailing) and `MenuItem` for a single menu-styled row outside `Menu`'s
   own array-driven API. */

export const MenuItemStates: Story = {
  name: "MenuItem — States",
  render: () => (
    <div className={`w-64 ${MENU_PANEL_SURFACE} p-1`}>
      <MenuItem label="Default" onClick={() => {}} />
      <MenuItem label="Active (current)" active onClick={() => {}} />
      <MenuItem label="Destructive" destructive onClick={() => {}} />
      <MenuItem label="Disabled" disabled onClick={() => {}} />
    </div>
  ),
};

export const MenuItemWithIconsAndMeta: Story = {
  name: "MenuItem — Icon, description, shortcut",
  render: () => (
    <div className={`w-72 ${MENU_PANEL_SURFACE} p-1`}>
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
  ),
};
