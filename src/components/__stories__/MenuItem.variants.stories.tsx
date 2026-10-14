import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../menu-item";
import { Home, Users, Settings, Trash2 } from "lucide-react";
import { MENU_PANEL_SURFACE } from "./MenuItem.shared";

/* One page per variant, shown under "MenuItem/Variants" in the sidebar. Static references for
   design review; the interactive playground is MenuItem → Default. "!autodocs" keeps this
   folder from getting a second Docs page. */
const meta: Meta<typeof MenuItem> = {
  title: "Custom Primitives/MenuItem/Variants",
  component: MenuItem,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof MenuItem>;

export const MenuItemStates: Story = {
  name: "States",
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
  name: "Icon, description, shortcut",
  render: () => (
    <div className={`w-72 ${MENU_PANEL_SURFACE} p-1`}>
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
  ),
};

export const MenuItemAsRow: Story = {
  name: "List row (as div)",
  render: () => (
    <div className={`w-80 ${MENU_PANEL_SURFACE} p-1`}>
      <MenuItem as="div" divider icon={<Home className="h-4 w-4" strokeWidth={1.5} />} header="Title and subtitle" label="Subtitle" description="2 min ago" active onClick={() => {}} />
      <MenuItem as="div" divider icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Title only (centered)" onClick={() => {}} />
      <MenuItem as="div" divider static icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} header="Static row" label="No hover or cursor" />
      <MenuItem as="div" icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="With trailing control" onClick={() => {}} rightElement={<button type="button" aria-label="Remove" className="rounded p-1 hover:bg-lyra-state-hover"><Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} /></button>} />
    </div>
  ),
};
