import * as React from "react";
import { ChevronDown, Moon, Sun, Activity, LogOut, Link2Off, Link2, Loader2, Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Menu, type MenuEntry } from "./menu";
import { ConnectedAppsPanel, type ConnectedApp } from "./connected-apps";
import { Popover } from "./popover";
import { Tooltip } from "./tooltip";
import { StatusBadge } from "./status-badge";
import { Input } from "./input";

/* ── Types ── */

export type AgentStatus = "available" | "busy" | "away" | "offline";

export interface AgentProfileProps {
  name: string;
  initials?: string;
  avatarSrc?: string;
  status?: AgentStatus;
  onStatusChange?: (status: AgentStatus) => void;
  timer?: string;
  /** Pass apps to show the Connected Apps flyout panel */
  connectedApps?: ConnectedApp[];
  /** Called when reconnect is triggered for an app */
  onReconnect?: (appId: string) => void;
  onDarkModeToggle?: () => void;
  /** Whether dark mode is currently active — controls the label/icon shown in the menu */
  isDarkMode?: boolean;
  onLogOut?: () => void;
  className?: string;
}

/* ── Status config ── */

const statusConfig: Record<AgentStatus, { label: string; color: string; textColor: string }> = {
  available: { label: "Available", color: "bg-lyra-status-success-strong", textColor: "text-lyra-status-success-strong" },
  busy:      { label: "Busy",      color: "bg-lyra-status-critical-strong", textColor: "text-lyra-status-critical-strong" },
  away:      { label: "Away",      color: "bg-lyra-status-warning-strong",  textColor: "text-lyra-status-warning-strong" },
  offline:   { label: "Offline",   color: "bg-lyra-accent-slate-strong",    textColor: "text-lyra-accent-slate-strong" },
};

function StatusDot({ status }: { status: AgentStatus }) {
  return <span className={cn("h-3 w-3 rounded-full shrink-0 inline-block", statusConfig[status].color)} />;
}

function Avatar({ initials, src, status }: { initials?: string; src?: string; status: AgentStatus }) {
  return (
    <div className="relative shrink-0">
      <div className="h-9 w-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
        {src
          ? <img src={src} alt={initials} className="h-full w-full object-cover" />
          : <span className="lyra-label text-white">{initials}</span>}
      </div>
      <span className={cn(
        "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-lyra-bg-surface-base",
        statusConfig[status].color
      )} />
    </div>
  );
}

/* ── Component ── */

const AgentProfile = React.forwardRef<HTMLDivElement, AgentProfileProps>(
  ({
    name, initials = "AG", avatarSrc,
    status = "offline", onStatusChange,
    timer,
    connectedApps = [],
    onReconnect,
    onDarkModeToggle, isDarkMode = false, onLogOut,
    className,
  }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [statusSearch, setStatusSearch] = React.useState("");
    const [agentLegStatus, setAgentLegStatus] = React.useState<"disconnected" | "connecting" | "connected">("disconnected");
    const [reconnectedIds, setReconnectedIds] = React.useState<Set<string>>(new Set());
    const contentRef = React.useRef<HTMLDivElement>(null);
    const issueCount = connectedApps.filter((a) => a.status !== "healthy" && !reconnectedIds.has(a.id)).length;

    const handleReconnect = (appId: string) => {
      onReconnect?.(appId);
      setTimeout(() => setReconnectedIds((prev) => new Set([...prev, appId])), 2500);
    };

    const handleAgentLegToggle = () => {
      if (agentLegStatus === "connecting") return;
      if (agentLegStatus === "disconnected") {
        setAgentLegStatus("connecting");
        setTimeout(() => setAgentLegStatus("connected"), 2000);
      } else {
        setAgentLegStatus("disconnected");
      }
    };

    const agentLegIconMap = {
      disconnected: { icon: <Link2Off className="h-4 w-4" strokeWidth={1.4} />, color: "text-lyra-fg-secondary",          tooltip: "Click to connect"    },
      connecting:   { icon: <Loader2  className="h-4 w-4 animate-spin" strokeWidth={1.4} />, color: "text-lyra-status-warning-strong", tooltip: "Connecting..."       },
      connected:    { icon: <Link2    className="h-4 w-4" strokeWidth={1.4} />, color: "text-lyra-status-success-strong", tooltip: "Click to disconnect" },
    };

    // Clear search when main menu closes. The Connected Apps flyout no
    // longer needs a matching reset — its open state now lives inside
    // Menu's own MenuItemRow (via submenuContent) and unmounts along with
    // the rest of the popover content.
    React.useEffect(() => {
      if (!open) setStatusSearch("");
    }, [open]);

    /* Build Menu entries using the Menu component's interface */
    const allStatuses = ["available", "busy", "away", "offline"] as AgentStatus[];
    const filteredStatuses = statusSearch.trim()
      ? allStatuses.filter((s) => statusConfig[s].label.toLowerCase().includes(statusSearch.toLowerCase()))
      : allStatuses;

    const noStatusMatch = filteredStatuses.length === 0;

    const menuItems: MenuEntry[] = [
      ...(noStatusMatch ? [{
        id: "_no-results",
        label: "No matching statuses",
        disabled: true,
        icon: <span className="h-5 w-5" />,
      }] : filteredStatuses.map((s) => ({
        id: s,
        label: statusConfig[s].label,
        icon: <StatusDot status={s} />,
        selected: status === s,
        onClick: () => { onStatusChange?.(s); setOpen(false); },
      }))),
      "separator" as const,
      {
        id: "dark-mode",
        label: isDarkMode ? "Light Mode" : "Dark Mode",
        icon: isDarkMode
          ? <Sun  className="h-4 w-4" strokeWidth={1.5} />
          : <Moon className="h-4 w-4" strokeWidth={1.5} />,
        onClick: onDarkModeToggle,
      },
      {
        id: "connected-apps",
        label: "Connected Apps",
        icon: <Activity className="h-4 w-4" strokeWidth={1.5} />,
        // Submenu hover/click-to-open, portal-to-body, and viewport-edge
        // flip positioning are all handled by Menu itself (same mechanism
        // as a regular `submenu`) — this just supplies the rich panel
        // content instead of a flat list of menu items.
        submenuContent: <ConnectedAppsPanel apps={connectedApps} onReconnect={handleReconnect} />,
        rightElement: (
          issueCount > 0 ? (
            <Tooltip content={`${issueCount} app${issueCount > 1 ? "s" : ""} not fully connected`} placement="left">
              <span>
                <StatusBadge variant="warning" size="sm">{connectedApps.length}</StatusBadge>
              </span>
            </Tooltip>
          ) : connectedApps.length > 0 ? (
            <StatusBadge variant="success" size="sm">{connectedApps.length}</StatusBadge>
          ) : (
            <StatusBadge variant="neutral" size="sm">0</StatusBadge>
          )
        ),
      },
      {
        id: "agent-leg",
        label: agentLegStatus === "connected" ? "Agent Leg Connected" : agentLegStatus === "connecting" ? "Agent Leg Connecting…" : "Agent Leg Disconnected",
        icon: (
          <Tooltip content={agentLegIconMap[agentLegStatus].tooltip} placement="left">
            <span className={cn("flex items-center", agentLegIconMap[agentLegStatus].color)}>
              {agentLegIconMap[agentLegStatus].icon}
            </span>
          </Tooltip>
        ),
        onClick: handleAgentLegToggle,
      },
      "separator" as const,
      {
        id: "logout",
        label: "Log Out",
        icon: <LogOut className="h-4 w-4" strokeWidth={1.5} />,
        onClick: onLogOut,
        destructive: true,
      },
    ];

    return (
      <div ref={ref} className={className}>
        <Tooltip content="Agent Status and More" placement="bottom" asLabel>
          {/* Wrap the whole Popover (not just its trigger) in a plain span —
              Tooltip's own Trigger clones its hover/focus props onto its
              immediate child via Radix Slot, which only works on a plain
              DOM element or another Slot-forwarding component. Popover
              itself doesn't forward arbitrary cloned props to its internals,
              so it has to sit *inside* the span, not be the span's stand-in.
              Same pattern as the advanced-search Popover+Tooltip combo in
              table.tsx. */}
          <span className="inline-flex">
            <Popover
              ref={contentRef}
              open={open}
              onOpenChange={setOpen}
              placement="bottom"
              align="end"
              sideOffset={6}
              showArrow={false}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                // Focus the search input instead
                setTimeout(() => contentRef.current?.querySelector<HTMLInputElement>("input")?.focus(), 0);
              }}
              onInteractOutside={(e) => {
                // The Connected Apps submenu (rendered by Menu via
                // submenuContent) is portaled to document.body, outside this
                // popover's own DOM subtree — without this it would register
                // as an "outside" click and close the whole status menu the
                // moment someone clicks reconnect on an app.
                if ((e.target as HTMLElement)?.closest('[data-menu-submenu-for="connected-apps"]')) e.preventDefault();
              }}
              className={cn(
                /* "md" on the Menu/Popover width scale (CONTRIBUTING.md) —
                   a search row above the list warrants one step above sm. */
                "z-[10001] w-64"
              )}
              content={
                <>
                  {/* Search statuses */}
                  <div className="px-3 py-2.5 border-b border-lyra-border-subtle">
                    <Input
                      type="text"
                      placeholder="Search statuses"
                      value={statusSearch}
                      onChange={(e) => setStatusSearch(e.target.value)}
                      startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                    />
                  </div>

                  {/* Menu — uses the existing Menu component for consistent styling */}
                  <Menu
                    items={menuItems}
                    className="border-0 shadow-none rounded-none rounded-b-lyra-lg bg-transparent"
                  />
                </>
              }
            >
              <button
                type="button"
                aria-label="Agent Status and More"
                className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lyra-lg hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
              >
                <Avatar initials={initials} src={avatarSrc} status={status} />
                <div className="flex flex-col items-start min-w-0">
                  <span className={cn("lyra-label leading-tight", statusConfig[status].textColor)}>{statusConfig[status].label}</span>
                  {timer && <span className={cn("lyra-body-sm tabular-nums", statusConfig[status].textColor)}>{timer}</span>}
                </div>
                <ChevronDown className={cn("h-4 w-4 text-lyra-fg-secondary shrink-0 transition-transform duration-200", open && "rotate-180")} strokeWidth={1.5} />
              </button>
            </Popover>
          </span>
        </Tooltip>
      </div>
    );
  }
);
AgentProfile.displayName = "AgentProfile";

export { AgentProfile };
