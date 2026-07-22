import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TreeMenu, CollapsiblePanel } from "../tree-menu";
import type { TreeMenuItem } from "../tree-menu";
import {
  Monitor,
  LayoutDashboard,
  Settings,
  Scissors,
  FileText,
  FilePlus2,
  ChevronDown,
  Users,
} from "lucide-react";

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
type Story = StoryObj<typeof TreeMenu>;

/* ── Default ── */

const defaultItems: TreeMenuItem[] = [
  {
    icon: <Monitor className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Monitor",
  },
  {
    icon: <LayoutDashboard className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Dashboard",
  },
  {
    icon: <Settings className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Configure",
    children: [
      { label: "General" },
      { label: "Permissions" },
      { label: "Integrations" },
    ],
  },
  {
    icon: <Scissors className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Designer",
    defaultOpen: true,
    children: [
      { label: "Desktop Library", active: true },
      { label: "Templates" },
      { label: "Components" },
    ],
  },
  {
    icon: <FileText className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Examples",
  },
  {
    icon: <FilePlus2 className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Product Mockups",
  },
];

export const Default: Story = {
  name: "Default",
  args: {
    items: defaultItems,
  },
};

/* ── All Collapsed ── */

const collapsedItems: TreeMenuItem[] = [
  {
    icon: <Monitor className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Monitor",
  },
  {
    icon: <LayoutDashboard className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Dashboard",
  },
  {
    icon: <Settings className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Configure",
    children: [
      { label: "General" },
      { label: "Permissions" },
    ],
  },
  {
    icon: <Scissors className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    label: "Designer",
    children: [
      { label: "Desktop Library" },
      { label: "Templates" },
      { label: "Components" },
    ],
  },
];

export const AllCollapsed: Story = {
  name: "All Collapsed",
  args: {
    items: collapsedItems,
  },
};

/* ── Chevron Left ──
   Swaps both ends of the row: expand/collapse chevron leading, icon
   trailing — same `defaultItems` as Default, just with `chevronPosition`
   set. */

export const ChevronLeft: Story = {
  name: "Chevron Left",
  args: {
    items: defaultItems,
    chevronPosition: "left",
  },
};

/* ── No Icons ── */

const noIconItems: TreeMenuItem[] = [
  { label: "Getting Started" },
  {
    label: "Components",
    defaultOpen: true,
    children: [
      { label: "Button" },
      { label: "Checkbox", active: true },
      { label: "Input" },
    ],
  },
  {
    label: "Patterns",
    children: [
      { label: "Forms" },
      { label: "Navigation" },
    ],
  },
];

export const NoIcons: Story = {
  name: "No Icons",
  args: {
    items: noIconItems,
  },
};

/* ── Call Centers ──
   Reproduces a reference screenshot: a collapsible "Call Centers" section
   header (the light gray band + chevron + bold blue label sitting above
   the tree) wrapping a two-level `TreeMenu` — top-level items are call-
   center categories (Financial Services, Hospitality, ...), each with
   `children` being individual call centers. That gray header bar is
   visually and structurally a distinct section header, not a tree row
   itself, so it's composed here from a plain button + the already-exported
   `CollapsiblePanel` (tree-menu.tsx) rather than folded into `TreeMenu`'s
   own API.

   Every leaf's small icon (`TreeMenuChild.icon`, new — see tree-menu.tsx)
   renders the same fixed blue regardless of active state, matching the
   screenshot (every call center's icon is the same color, whether or not
   that row happens to be selected) — unlike a top-level `TreeMenuItem`'s
   icon, which TreeMenu does recolor based on active/parent-active state.

   Only "Financial Services" and "Hospitality" reproduce their real
   children from the screenshot, down to "FS_ Omni-Channel"'s stray leading
   space (kept as-is — it's real reference data, not authored copy). The
   other 8 categories were collapsed in the screenshot itself, so their
   children are dummy data following the same "{PREFIX}_{Variant}" naming
   pattern as the two real ones. */

const CALL_CENTER_ICON = <Users className="h-4 w-4 text-lyra-fg-active-strong" strokeWidth={1.5} />;

function callCenterChildren(prefix: string) {
  return [
    { label: `${prefix}_HCI`, icon: CALL_CENTER_ICON },
    { label: `${prefix}_Manual`, icon: CALL_CENTER_ICON },
    { label: `${prefix}_Message Only`, icon: CALL_CENTER_ICON },
    { label: `${prefix}_Omni-Channel`, icon: CALL_CENTER_ICON },
    { label: `${prefix}_Outbound_RPC`, icon: CALL_CENTER_ICON },
    { label: `${prefix}_Preview`, icon: CALL_CENTER_ICON },
  ];
}

const CALL_CENTER_ITEMS: TreeMenuItem[] = [
  {
    label: "Financial Services",
    defaultOpen: true,
    children: [
      { label: "FS_ Omni-Channel", icon: CALL_CENTER_ICON },
      { label: "FS_HCI", icon: CALL_CENTER_ICON },
      { label: "FS_Manual", icon: CALL_CENTER_ICON },
      { label: "FS_Message Only", icon: CALL_CENTER_ICON },
      { label: "FS_Outbound_RPC", icon: CALL_CENTER_ICON },
      { label: "FS_Preview", icon: CALL_CENTER_ICON },
    ],
  },
  {
    label: "Hospitality",
    defaultOpen: true,
    children: [
      { label: "H_HCI", icon: CALL_CENTER_ICON },
      { label: "H_Manual", icon: CALL_CENTER_ICON },
      { label: "H_Message Only", icon: CALL_CENTER_ICON },
      { label: "H_Omni-Channel", icon: CALL_CENTER_ICON },
      { label: "H_Outbound_RPC", icon: CALL_CENTER_ICON },
      { label: "H_Preview", icon: CALL_CENTER_ICON },
    ],
  },
  { label: "Insurance", children: callCenterChildren("IN") },
  { label: "KJ_NewYork", children: callCenterChildren("KJ") },
  { label: "Lead Generation", children: callCenterChildren("LG") },
  { label: "Retail", children: callCenterChildren("RT") },
  { label: "Sales", children: callCenterChildren("SL") },
  { label: "Testing Call Center", children: callCenterChildren("TC") },
  { label: "Training Call Center", children: callCenterChildren("TR") },
  { label: "Utilities", children: callCenterChildren("UT") },
];

/** The collapsible "Call Centers" header + tree, exported as a named
    function (not inlined in `render`) so Outbound-Campaigns' Monitor
    dashboard side menu can mirror this exact markup shape. */
export function CallCentersTree() {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 bg-lyra-bg-surface-container-subtle px-3 h-10 lyra-body-md-emphasis text-lyra-fg-active-strong"
      >
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
          strokeWidth={1.5}
        />
        Call Centers
      </button>
      <CollapsiblePanel open={open}>
        <div className="px-1 pb-1">
          <TreeMenu items={CALL_CENTER_ITEMS} />
        </div>
      </CollapsiblePanel>
    </div>
  );
}

export const CallCenters: Story = {
  name: "Call Centers",
  render: () => <CallCentersTree />,
};
