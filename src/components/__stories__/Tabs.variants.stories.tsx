import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabList, Tab, TabPanel, announceToScreenReader } from "../tabs";
import { REMOVE_TAB_ICON } from "./Tabs.shared";
import { LayoutGrid, Settings, Bell, Lock, MoreVertical, Pencil, Copy, Trash2, ArrowLeft, ArrowRight } from "lucide-react";

/* One page per Tabs variant, shown under "Tabs/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Tabs → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof TabList> = {
  title: "Custom Primitives/Tabs/Variants",
  component: TabList,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TabList>;

/* ── All Variants (was Tab States) — default, hover and active, plus the
   severity colors an inactive and an active tab can take. ── */

const SEVERITIES = ["success", "warning", "critical"] as const;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Default</span>
        <TabList overflowMenu aria-label="Default state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover over to see)
        </span>
        <TabList overflowMenu aria-label="Hover state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Active</span>
        <TabList overflowMenu aria-label="Active state tabs">
          <Tab active>Tab Section</Tab>
        </TabList>
      </div>
      {SEVERITIES.map((severity) => (
        <div key={severity}>
          <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
            Severity: {severity} (inactive, then active)
          </span>
          <TabList overflowMenu aria-label={`${severity} severity tabs`}>
            <Tab severity={severity}>Tab Section</Tab>
            <Tab severity={severity} active>Tab Section</Tab>
          </TabList>
        </div>
      ))}
    </div>
  ),
};

/* ── Removable Tabs ── */

function RemovableDemo() {
  const [tabs, setTabs] = useState([
    { id: "1", label: "1. Inbound Voice", locked: false },
    { id: "2", label: "2. Blended Voice", locked: true },
    { id: "3", label: "3. Outbound Digital", locked: false },
  ]);
  const [activeTab, setActiveTab] = useState("2");

  const removeTab = (id: string) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.id !== id);
      if (activeTab === id && next.length > 0) {
        setActiveTab(next[0].id);
      }
      return next;
    });
  };

  return (
    <TabList overflowMenu aria-label="Removable tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
          icon={tab.locked ? <Lock className="h-3.5 w-3.5" strokeWidth={1.5} /> : undefined}
          onRemove={() => removeTab(tab.id)}
          removeIcon={REMOVE_TAB_ICON}
          removeFocusable
        >
          {tab.label}
        </Tab>
      ))}
    </TabList>
  );
}

export const Removable: Story = {
  name: "Removable",
  render: () => <RemovableDemo />,
};

/* ── With Menu — the menu styles on one page (was With Right Icon (Menu) and With
   Kebab Menu): a decorative right icon, a real kebab dropdown, and a kebab
   menu together with a remove "×". ── */

const MENU_TABS = [
  { id: "1", label: "1. Inbound Voice" },
  { id: "2", label: "2. Blended Voice" },
  { id: "3", label: "3. Outbound Digital" },
];

function WithMenuDemo() {
  const [iconActive, setIconActive] = useState("1");
  const [menuActive, setMenuActive] = useState("1");
  const [bothTabs, setBothTabs] = useState(MENU_TABS);
  const [bothActive, setBothActive] = useState("1");
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Right icon (decorative)
        </span>
        <TabList overflowMenu aria-label="Tabs with menu">
          {MENU_TABS.map((tab) => (
            <Tab
              key={tab.id}
              active={iconActive === tab.id}
              onClick={() => setIconActive(tab.id)}
              rightIcon={<MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} />}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Kebab menu (functional dropdown)
        </span>
        <TabList overflowMenu aria-label="Tabs with a real kebab menu">
          {MENU_TABS.map((tab) => (
            <Tab
              key={tab.id}
              active={menuActive === tab.id}
              onClick={() => setMenuActive(tab.id)}
              menuFocusable
              menuItems={[
                { id: "rename", label: "Rename", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
                { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
                "separator",
                { id: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
              ]}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Kebab menu and remove (the “×” sits at the far right)
        </span>
        <TabList overflowMenu aria-label="Tabs with a kebab menu and remove">
          {bothTabs.map((tab) => (
            <Tab
              key={tab.id}
              active={bothActive === tab.id}
              onClick={() => setBothActive(tab.id)}
              menuFocusable
              menuItems={[
                { id: "rename", label: "Rename", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
                { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
              ]}
              onRemove={() => setBothTabs((prev) => prev.filter((t) => t.id !== tab.id))}
              removeIcon={REMOVE_TAB_ICON}
              removeFocusable
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </div>
    </div>
  );
}

export const WithMenu: Story = {
  name: "With Menu",
  render: () => <WithMenuDemo />,
};

/* ── Overflow Menu (native `overflowMenu` responsive collapse) ──
   Reference: a record detail panel's Overview/Details/Tickets/Accounts/
   Interactions/Directory/Tasks/Scheduled Callbacks/History tab bar,
   requested to collapse — once its own container drops to 991px or
   below — to exactly two full-width slots: the active tab, and a "{n}
   More" dropdown holding every other tab in its original order. Wrapped
   in a `resize-x` box (same demo pattern as `ChannelRow.stories.tsx`'s
   `ChannelTabResponsive`) so the collapse can be seen live by dragging its
   edge, rather than only inferred from the CSS. */
const OVERFLOW_DEMO_TABS = [
  "Overview",
  "Details",
  "Tickets",
  "Accounts",
  "Interactions",
  "Directory",
  "Tasks",
  "Scheduled Callbacks",
  "History",
];

function OverflowMenuDemo() {
  const [active, setActive] = useState(OVERFLOW_DEMO_TABS[0]);
  return (
    <div className="resize-x overflow-auto rounded-lyra-md border border-dashed border-lyra-border-soft p-4" style={{ width: 1200, maxWidth: "100%" }}>
      <TabList overflowMenu aria-label="Agent record tabs">
        {OVERFLOW_DEMO_TABS.map((label) => (
          <Tab key={label} active={active === label} onClick={() => setActive(label)}>
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanel active>
        <div className="p-4 lyra-body-md text-lyra-fg-default">
          Content for &ldquo;{active}&rdquo;
        </div>
      </TabPanel>
    </div>
  );
}

export const OverflowMenu: Story = {
  name: "Overflow Menu (Responsive)",
  render: () => <OverflowMenuDemo />,
};

/* ── Reorderable (click-and-drag) ──
   `reorderable` + `onReorder` — drag any tab by its whole body and drop it
   on another to reorder the row. `TabList` doesn't own the order itself
   (see the prop's own doc comment in tabs.tsx): this demo owns a `tabs`
   array in state and re-sorts it in `onReorder`, the same "consumer owns
   the array, TabList just reports the drag result" contract a real
   integration (e.g. a desk's Home/Customers/Accounts/... tab bar) follows.
   Each `Tab` below has an explicit, stable `key` — required for
   `reorderable` to have any effect, per that same doc comment. */
function ReorderableDemo() {
  const [tabs, setTabs] = useState([
    { id: "overview", label: "Overview" },
    { id: "details", label: "Details" },
    { id: "tickets", label: "Tickets" },
    { id: "accounts", label: "Accounts" },
    { id: "history", label: "History" },
  ]);
  const [active, setActive] = useState("overview");

  const handleReorder = (order: string[]) => {
    setTabs((prev) => {
      const byId = new Map(prev.map((t) => [t.id, t]));
      return order.map((id) => byId.get(id)!).filter(Boolean);
    });
  };

  // The non-drag way to reorder for pointer users (WCAG 2.5.7): Move left /
  // Move right in each tab's kebab menu.
  const moveTab = (id: string, delta: -1 | 1) => {
    const from = tabs.findIndex((t) => t.id === id);
    const to = from + delta;
    if (to < 0 || to >= tabs.length) return;
    const next = [...tabs];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setTabs(next);
    announceToScreenReader(`${moved.label}, moved to position ${to + 1} of ${tabs.length}`);
  };

  return (
    <div>
      <TabList
        overflowMenu
        reorderable
        keyboardReorder
        onReorder={handleReorder}
        aria-label="Reorderable tabs"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            active={active === tab.id}
            onClick={() => setActive(tab.id)}
            menuFocusable
            menuItems={[
              { id: "move-left", label: "Move left", icon: <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />, disabled: index === 0, onClick: () => moveTab(tab.id, -1) },
              { id: "move-right", label: "Move right", icon: <ArrowRight className="h-4 w-4" strokeWidth={1.5} />, disabled: index === tabs.length - 1, onClick: () => moveTab(tab.id, 1) },
            ]}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanel active>
        <div className="p-4 lyra-body-md text-lyra-fg-default">
          Drag a tab and drop it on another, or focus one and press Ctrl+Shift+← / →, or use Move
          left / Move right in its kebab menu. Content for &ldquo;
          {tabs.find((t) => t.id === active)?.label}&rdquo;
        </div>
      </TabPanel>
    </div>
  );
}

export const Reorderable: Story = {
  name: "Reorderable (Drag and Drop)",
  render: () => <ReorderableDemo />,
};

/* ── Small — `size="sm"` on the list (or on a single `Tab`): a compact 36px
   row with 12px text. ── */

function SmallDemo() {
  const [active, setActive] = useState("overview");
  return (
    <div className="flex flex-col gap-8">
      {(["md", "sm"] as const).map((size) => (
        <div key={size}>
          <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
            {size === "md" ? "Medium (default, 48px)" : "Small (36px)"}
          </span>
          <TabList size={size} overflowMenu aria-label={`${size} tabs`}>
            {[["overview", "Overview", LayoutGrid], ["details", "Details", Settings], ["alerts", "Alerts", Bell]].map(([id, label, Icon]) => {
              const I = Icon as typeof LayoutGrid;
              return (
                <Tab key={id as string} active={active === id} onClick={() => setActive(id as string)} icon={<I className="h-4 w-4" strokeWidth={1.5} />}>
                  {label as string}
                </Tab>
              );
            })}
          </TabList>
        </div>
      ))}
    </div>
  );
}

export const Small: Story = {
  name: "Small",
  render: () => <SmallDemo />,
};

/* ── Icon Only — `iconOnly`: just the icon, label in a tooltip on hover and
   keyboard focus and read by screen readers. ── */

function IconOnlyDemo() {
  const [active, setActive] = useState("overview");
  const items = [
    { id: "overview", label: "Overview", Icon: LayoutGrid },
    { id: "settings", label: "Settings", Icon: Settings },
    { id: "alerts", label: "Alerts", Icon: Bell },
  ];
  return (
    <TabList overflowMenu aria-label="Icon-only tabs">
      {items.map(({ id, label, Icon }) => (
        <Tab key={id} active={active === id} onClick={() => setActive(id)} iconOnly icon={<Icon className="h-4 w-4" strokeWidth={1.5} />}>
          {label}
        </Tab>
      ))}
    </TabList>
  );
}

export const IconOnly: Story = {
  name: "Icon Only",
  render: () => <IconOnlyDemo />,
};

/* ── With Badge — `badge` shows a count after the label, or on the icon's
   corner with `iconOnly`. ── */

function WithBadgeDemo() {
  const [a, setA] = useState("inbox");
  const [b, setB] = useState("inbox");
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">After the label</span>
        <TabList overflowMenu aria-label="Tabs with count badges">
          <Tab active={a === "inbox"} onClick={() => setA("inbox")} badge={3}>Inbox</Tab>
          <Tab active={a === "sent"} onClick={() => setA("sent")}>Sent</Tab>
          <Tab active={a === "drafts"} onClick={() => setA("drafts")} badge={120}>Drafts</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">On the icon (icon only)</span>
        <TabList overflowMenu aria-label="Icon-only tabs with count badges">
          <Tab active={b === "inbox"} onClick={() => setB("inbox")} iconOnly badge={3} icon={<Bell className="h-4 w-4" strokeWidth={1.5} />}>Inbox</Tab>
          <Tab active={b === "settings"} onClick={() => setB("settings")} iconOnly icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}>Settings</Tab>
        </TabList>
      </div>
    </div>
  );
}

export const WithBadge: Story = {
  name: "With Badge",
  render: () => <WithBadgeDemo />,
};

/* ── With Error — `error` shows a red "!" on a tab whose panel has a problem.
   Screen readers hear `errorLabel` ("Has errors" by default). ── */

function WithErrorDemo() {
  const [a, setA] = useState("general");
  const [b, setB] = useState("general");
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">After the label</span>
        <TabList overflowMenu aria-label="Tabs with an error">
          <Tab active={a === "general"} onClick={() => setA("general")}>General</Tab>
          <Tab active={a === "billing"} onClick={() => setA("billing")} error>Billing</Tab>
          <Tab active={a === "team"} onClick={() => setA("team")}>Team</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">On the icon (icon only)</span>
        <TabList overflowMenu aria-label="Icon-only tabs with an error">
          <Tab active={b === "general"} onClick={() => setB("general")} iconOnly icon={<LayoutGrid className="h-4 w-4" strokeWidth={1.5} />}>General</Tab>
          <Tab active={b === "billing"} onClick={() => setB("billing")} iconOnly error icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}>Billing</Tab>
        </TabList>
      </div>
    </div>
  );
}

export const WithError: Story = {
  name: "With Error",
  render: () => <WithErrorDemo />,
};
