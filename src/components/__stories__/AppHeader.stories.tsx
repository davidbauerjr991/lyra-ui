import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AppHeader } from "../app-header";
import { AppName } from "../app-name";
import { AppMenu, type AppMenuGroup } from "../app-menu";
import { AiPanel } from "../ai-panel";

/* ── Local sparkle icon for Ask AI button ── */
const AiSparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10C17 9.94181 16.9795 9.88562 16.9424 9.84082C16.9051 9.79597 16.8532 9.76559 16.7959 9.75488L16.7949 9.75391L12.6279 8.96582C12.2329 8.89119 11.8693 8.69934 11.585 8.41504C11.3007 8.13074 11.1088 7.76715 11.0342 7.37207L10.2461 3.20508L10.2451 3.2041C10.2344 3.14679 10.204 3.09487 10.1592 3.05762C10.1144 3.02051 10.0582 3 10 3C9.94182 3 9.88563 3.02051 9.84082 3.05762C9.79597 3.09486 9.76559 3.14679 9.75488 3.2041L9.75391 3.20508L8.96582 7.37207C8.89119 7.76715 8.69934 8.13074 8.41504 8.41504C8.13074 8.69934 7.76715 8.89119 7.37207 8.96582L3.20508 9.75391L3.2041 9.75488C3.14679 9.76559 3.09486 9.79597 3.05762 9.84082C3.02051 9.88563 3 9.94182 3 10C3 10.0582 3.02051 10.1144 3.05762 10.1592C3.07625 10.1816 3.09828 10.2013 3.12305 10.2158L3.2041 10.2451L3.20508 10.2461L7.37207 11.0342C7.76715 11.1088 8.13074 11.3007 8.41504 11.585C8.69934 11.8693 8.89119 12.2329 8.96582 12.6279L9.75391 16.7949L9.75488 16.7959C9.76559 16.8532 9.79597 16.9051 9.84082 16.9424C9.88562 16.9795 9.94181 17 10 17C10.0582 17 10.1144 16.9795 10.1592 16.9424C10.204 16.9051 10.2344 16.8532 10.2451 16.7959L10.2461 16.7949L11.0342 12.6279C11.1088 12.2329 11.3007 11.8693 11.585 11.585C11.8693 11.3007 12.2329 11.1088 12.6279 11.0342L16.7949 10.2461L16.7959 10.2451C16.8532 10.2344 16.9051 10.204 16.9424 10.1592C16.9795 10.1144 17 10.0582 17 10ZM5.00098 15.999C5.00098 15.4469 4.55306 14.999 4.00098 14.999C3.4491 14.9993 3.00195 15.4471 3.00195 15.999C3.0022 16.5507 3.44925 16.9978 4.00098 16.998C4.55291 16.998 5.00073 16.5509 5.00098 15.999ZM6.00098 15.999C6.00073 17.1032 5.1052 17.998 4.00098 17.998C2.89697 17.9978 2.0022 17.103 2.00195 15.999C2.00195 14.8948 2.89682 13.9993 4.00098 13.999C5.10535 13.999 6.00098 14.8947 6.00098 15.999ZM18 10C18 10.2917 17.8983 10.5745 17.7119 10.7988C17.5256 11.0232 17.2662 11.174 16.9795 11.2275L16.9805 11.2285L12.8135 12.0166C12.616 12.0539 12.4341 12.1499 12.292 12.292C12.1499 12.4341 12.0539 12.616 12.0166 12.8135L11.2285 16.9805C11.1748 17.2668 11.023 17.5257 10.7988 17.7119C10.5745 17.8983 10.2917 18 10 18C9.70834 18 9.42555 17.8983 9.20117 17.7119C8.97704 17.5257 8.82516 17.2668 8.77148 16.9805L7.9834 12.8135C7.94609 12.616 7.85013 12.4341 7.70801 12.292C7.56588 12.1499 7.38403 12.0539 7.18652 12.0166L3.01953 11.2285V11.2275C2.73324 11.1738 2.47421 11.0229 2.28809 10.7988C2.10174 10.5745 2 10.2917 2 10C2 9.70834 2.10174 9.42554 2.28809 9.20117C2.47425 8.97704 2.73317 8.82516 3.01953 8.77148L7.18652 7.9834C7.38403 7.94609 7.56588 7.85013 7.70801 7.70801C7.85013 7.56588 7.94609 7.38403 7.9834 7.18652L8.77148 3.01953C8.82516 2.73317 8.97704 2.47425 9.20117 2.28809C9.42554 2.10174 9.70834 2 10 2C10.2917 2 10.5745 2.10174 10.7988 2.28809C11.023 2.47425 11.1748 2.73317 11.2285 3.01953L12.0166 7.18652C12.0539 7.38403 12.1499 7.56588 12.292 7.70801C12.4341 7.85013 12.616 7.94609 12.8135 7.9834L16.9805 8.77148H16.9795C17.2662 8.82503 17.5256 8.97683 17.7119 9.20117C17.8983 9.42555 18 9.70834 18 10ZM17.8271 4.0791C17.8271 4.22843 17.775 4.37334 17.6797 4.48828C17.5842 4.60329 17.4507 4.68056 17.3037 4.70801L17.3047 4.70898L16.6699 4.82812L16.5498 5.46191C16.5224 5.60887 16.4451 5.74238 16.3301 5.83789C16.2151 5.93334 16.0703 5.98532 15.9209 5.98535C15.7715 5.98535 15.6267 5.93328 15.5117 5.83789C15.3971 5.74266 15.3187 5.6103 15.291 5.46387L15.1709 4.82812L14.5361 4.70898V4.70801C14.3898 4.68032 14.2573 4.6029 14.1621 4.48828C14.0907 4.40218 14.0436 4.29937 14.0244 4.19043L14.0146 4.0791L14.0244 3.96875C14.0436 3.85949 14.0904 3.75624 14.1621 3.66992C14.2576 3.55499 14.3903 3.47672 14.5371 3.44922L15.1709 3.3291L15.291 2.69531C15.3186 2.54862 15.3969 2.41569 15.5117 2.32031L15.6025 2.25781C15.6989 2.20264 15.8086 2.17285 15.9209 2.17285L16.0312 2.18262C16.1041 2.19538 16.174 2.22111 16.2383 2.25781L16.3301 2.32031L16.4092 2.39941C16.4808 2.48388 16.5302 2.58618 16.5508 2.69629H16.5498L16.6699 3.3291L17.3027 3.44922H17.3037C17.4138 3.46978 17.5161 3.5192 17.6006 3.59082L17.6797 3.66992L17.7422 3.76172C17.7971 3.85791 17.8271 3.96706 17.8271 4.0791Z" fill="currentColor"/>
  </svg>
);
import { CXoneLogo } from "../cxone-logo";
import { ActionIconButton } from "../actions";
import { Tooltip } from "../tooltip";
import { ProfileMenu, defaultProfileMenuGroups } from "../profile-menu";
import { AgentProfile, type AgentStatus } from "../agent-profile";
import { NotificationsBell } from "../notifications-bell";
import { DashboardIcon } from "../icons/dashboard-icon";
import { CircleHelp, Bell, Settings, Search } from "lucide-react";
import appIcon from "../../assets/app-icon.svg";

const meta: Meta<typeof AppHeader> = {
  title: "UI/AppHeader",
  component: AppHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

/* ── Shared app menu data + trigger — same groups/footer used by the
   "Agent Next Gen Header" story below, reused here so every story with a
   real AppName actually opens the AppMenu on click instead of just
   displaying a static, non-interactive label. ── */
const APP_MENU_GROUPS: AppMenuGroup[] = [
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

function AppNameWithMenu({ name, alt }: { name: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <AppName
          icon={<img src={appIcon} alt={alt} className="h-6 w-6" />}
          name={name}
          aria-expanded={open}
        />
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="bottom"
          align="start"
          sideOffset={6}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
        >
          <AppMenu groups={APP_MENU_GROUPS} footer={<CXoneLogo />} />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

/* ── Default ── */

export const Default: Story = {
  render: () => (
    <AppHeader
      appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />}
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

/* ── Agent Next Gen ── */

const INITIAL_NOTIFICATIONS = [
  { id: "1", type: "new-case"    as const, title: "New Case",    subtitle: "Noah Patel",    timestamp: "13m ago", read: false },
  { id: "2", type: "new-chat"    as const, title: "New Chat",    subtitle: "Sarah Miller",  timestamp: "18m ago", read: false },
  { id: "3", type: "escalation"  as const, title: "Escalation",  subtitle: "Lauren Kim",    timestamp: "24m ago", read: false },
  { id: "4", type: "new-case"    as const, title: "New Case",    subtitle: "Ethan Zhang",   timestamp: "37m ago", read: true  },
  { id: "5", type: "new-chat"    as const, title: "New Chat",    subtitle: "Olivia Reed",   timestamp: "51m ago", read: true  },
  { id: "6", type: "missed-call" as const, title: "Missed Call", subtitle: "David Brown",   timestamp: "1h ago",  read: true  },
  { id: "7", type: "escalation"  as const, title: "Escalation",  subtitle: "Sarah Johnson", timestamp: "1h ago",  read: true  },
  { id: "8", type: "new-case"    as const, title: "New Case",    subtitle: "James Carter",  timestamp: "2h ago",  read: true  },
];

export const AgentNextGen: Story = {
  name: "Agent Next Gen Header",
  render: () => {
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
    const [agentStatus, setAgentStatus] = useState<AgentStatus>("available");
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [appMenuOpen, setAppMenuOpen] = useState(false);
    const [aiPanelOpen, setAiPanelOpen] = useState(false);
    const [aiPanelPos, setAiPanelPos] = useState({ top: 0, left: 0 });
    const [aiPanelHeight, setAiPanelHeight] = useState(700);
    const aiBtnRef = useRef<HTMLButtonElement>(null);
    const AI_PANEL_WIDTH = 420;
    const MAX_PANEL_HEIGHT = 860;
    const BOTTOM_PADDING = 8;

    const computeAiHeight = (top: number) =>
      Math.min(window.innerHeight - top - BOTTOM_PADDING, MAX_PANEL_HEIGHT);

    const handleAiButtonClick = () => {
      if (aiBtnRef.current) {
        const rect = aiBtnRef.current.getBoundingClientRect();
        const top = rect.bottom + 6;
        setAiPanelPos({ top, left: rect.right - AI_PANEL_WIDTH });
        setAiPanelHeight(computeAiHeight(top));
      }
      setAiPanelOpen((v) => !v);
    };

    // Update AI panel height on viewport resize while open
    useEffect(() => {
      if (!aiPanelOpen) return;
      const onResize = () => setAiPanelHeight(computeAiHeight(aiPanelPos.top));
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [aiPanelOpen, aiPanelPos.top]);

    useEffect(() => {
      const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
      return () => clearInterval(interval);
    }, []);

    const h = Math.floor(elapsedSeconds / 3600);
    const m = Math.floor((elapsedSeconds % 3600) / 60);
    const s = elapsedSeconds % 60;
    const formattedTimer = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    const handleStatusChange = (status: AgentStatus) => {
      setAgentStatus(status);
      setElapsedSeconds(0);
    };

    return (
      <>
      <AppHeader
        appName={
          <PopoverPrimitive.Root open={appMenuOpen} onOpenChange={setAppMenuOpen}>
            <PopoverPrimitive.Trigger asChild>
              <AppName
                icon={<img src={appIcon} alt="Agent Next Gen" className="h-6 w-6" />}
                name="Agent Next Gen"
                aria-expanded={appMenuOpen}
              />
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
              <PopoverPrimitive.Content
                side="bottom"
                align="start"
                sideOffset={6}
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
              >
                <AppMenu groups={APP_MENU_GROUPS} footer={<CXoneLogo />} />
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </PopoverPrimitive.Root>
        }
        actions={
          <>
            <NotificationsBell
              notifications={notifications}
              onMarkAllRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
              onClearAll={() => setNotifications([])}
              onDismiss={(id) => setNotifications((prev) => prev.filter((n) => n.id !== id))}
              onNotificationClick={(n) => setNotifications((prev) => prev.map((i) => i.id === n.id ? { ...i, read: true } : i))}
            />
            <Tooltip content="Ask AI" placement="bottom" asLabel>
              <button
                ref={aiBtnRef}
                type="button"
                aria-label="Ask AI"
                aria-expanded={aiPanelOpen}
                onClick={handleAiButtonClick}
                className={`relative flex h-10 w-10 items-center justify-center rounded-lyra-lg text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus ${aiPanelOpen ? "bg-lyra-state-hover" : ""}`}
              >
                <AiSparkleIcon />
              </button>
            </Tooltip>
            <AgentProfile
              name="John Smith"
              initials="JS"
              status={agentStatus}
              onStatusChange={handleStatusChange}
              timer={formattedTimer}
              className="ml-1"
            />
          </>
        }
      />
      {aiPanelOpen && ReactDOM.createPortal(
        <div
          style={{ position: "fixed", top: aiPanelPos.top, left: aiPanelPos.left, zIndex: 9999 }}
          className="animate-in fade-in-0 slide-in-from-top-2 duration-150"
        >
          <AiPanel
            draggable
            draggableVariant="float"
            defaultDraggableWidth={AI_PANEL_WIDTH}
            defaultDraggableHeight={aiPanelHeight}
            userName="John"
            suggestions={[
              { id: "1", label: "Summarise this contact's history" },
              { id: "2", label: "Suggest a response to the customer" },
              { id: "3", label: "What changed since yesterday?" },
            ]}
            onClose={() => setAiPanelOpen(false)}
          />
        </div>,
        document.body
      )}
      </>
    );
  },
};

/* ── AppName Only ── */

export const AppNameOnly: Story = {
  name: "AppName Only",
  render: () => (
    <AppHeader appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />} />
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
      appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />}
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
