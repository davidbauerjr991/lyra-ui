import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppNameMenu } from "../app-name-menu";
import { type AppMenuGroup } from "../app-menu";
import { CXoneLogo } from "../cxone-logo";
import appIcon from "../../assets/app-icon.svg";

/* ── AppNameMenu stories ──
   The AppHeader's app-switcher: an `AppName` trigger opening an `AppMenu`
   popover (bottom-start, 6px offset). Promoted from the `AppNameWithMenu`
   wrapper previously duplicated across AppHeader/AdminShell/
   AgentNextGenTemplate stories and agent-next-gen-v2's workspace pages —
   those all now render this component. */

const SAMPLE_GROUPS: AppMenuGroup[] = [
  {
    items: [
      { label: "Admin" },
      { label: "Supervisor" },
      { label: "Agent", active: true },
      { label: "Conginity AI" },
    ],
  },
  {
    items: [
      { label: "Workforce Management" },
      { label: "Quality Management" },
      { label: "Interaction Hub" },
      { label: "My Zone" },
    ],
  },
  {
    items: [
      { label: "Dashboard" },
      { label: "Analytics" },
    ],
  },
];

const meta: Meta<typeof AppNameMenu> = {
  title: "UI/AppHeader/AppNameMenu",
  component: AppNameMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    compact: { control: "boolean" },
    // internal/composition-only props — not useful as controls
    icon: { table: { disable: true } },
    groups: { table: { disable: true } },
    menuFooter: { table: { disable: true } },
    menuHeader: { table: { disable: true } },
    open: { table: { disable: true } },
    defaultOpen: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof AppNameMenu>;

/* ── Default ── */

export const Default: Story = {
  args: {
    icon: <img src={appIcon} alt="" className="h-6 w-6" />,
    name: "Agent Workspace Premium",
    groups: SAMPLE_GROUPS,
    menuFooter: <CXoneLogo />,
  },
};

/* ── AllVariants — full trigger next to compact (icon-only) trigger ── */

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <AppNameMenu
        icon={<img src={appIcon} alt="" className="h-6 w-6" />}
        name="Agent Workspace Premium"
        groups={SAMPLE_GROUPS}
        menuFooter={<CXoneLogo />}
      />
      <AppNameMenu
        icon={<img src={appIcon} alt="" className="h-6 w-6" />}
        name="Agent Workspace Premium"
        compact
        groups={SAMPLE_GROUPS}
        menuFooter={<CXoneLogo />}
      />
    </div>
  ),
};

/* ── Controlled — caller owns the open state (the workspace-page shape,
      where selecting a menu item navigates and closes the menu) ── */

function ControlledDemo() {
  const [open, setOpen] = useState(false);
  const groups: AppMenuGroup[] = SAMPLE_GROUPS.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      onClick: () => setOpen(false),
    })),
  }));
  return (
    <AppNameMenu
      icon={<img src={appIcon} alt="" className="h-6 w-6" />}
      name="Agent Workspace Premium"
      groups={groups}
      menuFooter={<CXoneLogo />}
      open={open}
      onOpenChange={setOpen}
    />
  );
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
};
