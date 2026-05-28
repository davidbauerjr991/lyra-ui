import type { Meta, StoryObj } from "@storybook/react";
import { AppHeader } from "../app-header";
import { AppName } from "../app-name";
import { ActionIconButton } from "../actions";
import { ProfileMenu, defaultProfileMenuGroups } from "../profile-menu";
import { DashboardIcon } from "../icons/dashboard-icon";
import { CircleHelp, Bell, Settings, Search } from "lucide-react";
import appIcon from "../../assets/app-icon.svg";

const meta: Meta<typeof AppHeader> = {
  title: "UI/AppHeader",
  component: AppHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

/* ── Default ── */

export const Default: Story = {
  render: () => (
    <AppHeader
      appName={
        <AppName
          icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />}
          name="Agent Workspace Premium"
        />
      }
      actions={
        <>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={4}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu
            initials="JS"
            avatarColor="#5d6a79"
            groups={defaultProfileMenuGroups}
            className="ml-1"
          />
        </>
      }
    />
  ),
};

/* ── AppName Only ── */

export const AppNameOnly: Story = {
  name: "AppName Only",
  render: () => (
    <AppHeader
      appName={
        <AppName
          icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />}
          name="Agent Workspace Premium"
        />
      }
    />
  ),
};

/* ── Actions Only ── */

export const ActionsOnly: Story = {
  name: "Actions Only",
  render: () => (
    <AppHeader
      appName={<div />}
      actions={
        <>
          <ActionIconButton size="xl" title="Search">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Settings">
            <Settings className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={12}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu
            initials="DB"
            avatarColor="#5d6a79"
            groups={defaultProfileMenuGroups}
            className="ml-1"
          />
        </>
      }
    />
  ),
};

/* ── With Background ── */

export const WithBackground: Story = {
  name: "With Background",
  render: () => (
    <AppHeader
      className="bg-lyra-bg-surface-base border-b border-lyra-border-subtle"
      appName={
        <AppName
          icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />}
          name="Agent Workspace Premium"
        />
      }
      actions={
        <>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={4}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu
            initials="JS"
            avatarColor="#5d6a79"
            groups={defaultProfileMenuGroups}
            className="ml-1"
          />
        </>
      }
    />
  ),
};
