import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../list-item";
import { MenuItem } from "../menu-item";
import { UserPlus, MessageSquare, Bell, Home, Users, Settings, Trash2, Box, Star, ChevronRight } from "lucide-react";
import { Badge } from "../badge";

const meta: Meta<typeof ListItem> = {
  title: "Custom Primitives/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
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

/** `MenuItem — Basic`'s controls compose entirely through `MenuItem`'s
 *  existing `icon`/`header`/`description`/`rightElement`/`trailingIcon`
 *  props — no new component API was needed beyond `header` itself (added
 *  directly to `MenuItem`, not just this story, since it has to render
 *  inside the button's own hover/click area — a title rendered in a
 *  separate element above the row would visually read as attached but
 *  not actually share the row's hover/click surface, per a screenshot
 *  showing exactly that gap). `withBadge` and `withRightSlot` both feed
 *  the same `rightElement` slot (rendered together, badge first, in a
 *  small flex row) since `MenuItem` only exposes one generic "right"
 *  slot; `withSubmenu`'s chevron uses `trailingIcon`, which always renders
 *  furthest right regardless of what's in `rightElement` — matching the
 *  requested "right slot icon sits left of the chevron, if both are on"
 *  ordering. `separator` renders `Menu`'s own separator treatment (see
 *  `menu.tsx`'s `"separator"` entry: `border-b border-lyra-border-subtle
 *  my-1.5`) directly below the row, in the same demo container, to
 *  preview a menu item followed by a divider without needing a real
 *  `Menu`. `comfortable` maps 1:1 to `MenuItem`'s own real `comfortable`
 *  prop (12px vs. 6px top/bottom padding) — a genuine density option on
 *  the component itself, not a story-only affordance. */
function MenuItemBasicDemo({
  icon = false,
  header = false,
  description = false,
  badge = false,
  submenu = false,
  rightSlot = false,
  separator = false,
  comfortable = true,
}: {
  icon?: boolean;
  header?: boolean;
  description?: boolean;
  badge?: boolean;
  submenu?: boolean;
  rightSlot?: boolean;
  separator?: boolean;
  comfortable?: boolean;
}) {
  const hasRightContent = badge || rightSlot;

  return (
    <div className="w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem
        header={header ? "New Case" : undefined}
        label="Menu Item"
        icon={icon ? <Box className="h-4 w-4" strokeWidth={1.5} /> : undefined}
        description={description ? "Supporting description text" : undefined}
        rightElement={
          hasRightContent ? (
            <div className="flex items-center gap-2">
              {badge && (
                <Badge shape="circle" variant="info" size="sm">New</Badge>
              )}
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
        comfortable={comfortable}
        onClick={() => {}}
      />
      {separator && (
        <div role="separator" className="border-b border-lyra-border-subtle my-1.5" />
      )}
    </div>
  );
}

export const MenuItemBasic: Story = {
  name: "MenuItem — Basic",
  args: {
    icon: false,
    header: false,
    description: false,
    badge: false,
    submenu: false,
    rightSlot: false,
    separator: false,
    comfortable: true,
  },
  argTypes: {
    icon: { name: "Icon left", control: "boolean" },
    header: { name: "Header", control: "boolean" },
    description: { name: "With description", control: "boolean" },
    badge: { name: "With badge", control: "boolean" },
    submenu: { name: "With submenu", control: "boolean" },
    rightSlot: { name: "With right slot", control: "boolean" },
    separator: { name: "Separator", control: "boolean" },
    comfortable: { name: "Comfortable", control: "boolean" },
  },
  render: (args) => <MenuItemBasicDemo {...(args as any)} />,
};

export const MenuItemStates: Story = {
  name: "MenuItem — States",
  render: () => (
    <div className="w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
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
    <div className="w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
  ),
};
