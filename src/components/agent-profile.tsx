import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ChevronDown, ChevronLeft, Moon, Activity, LogOut, Link2Off, Link2, Loader2, Search } from "lucide-react";
import { cn } from "../lib/utils";
import * as ReactDOM from "react-dom";
import { Menu, type MenuEntry } from "./menu";
import { ConnectedAppsPanel, type ConnectedApp } from "./connected-apps";
import { Tooltip } from "./tooltip";
import { StatusBadge } from "./status-badge";

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
      <div className="h-9 w-9 rounded-full overflow-hidden bg-lyra-accent-slate-strong flex items-center justify-center">
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
    onDarkModeToggle, onLogOut,
    className,
  }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [statusSearch, setStatusSearch] = React.useState("");
    const [appsOpen, setAppsOpen] = React.useState(false);
    const [appsPos, setAppsPos] = React.useState({ top: 0, right: 0 });
    const [agentLegStatus, setAgentLegStatus] = React.useState<"disconnected" | "connecting" | "connected">("disconnected");
    const [reconnectedIds, setReconnectedIds] = React.useState<Set<string>>(new Set());
    const contentRef = React.useRef<HTMLDivElement>(null);
    const appsPanelRef = React.useRef<HTMLDivElement>(null);
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

    // Close apps panel and clear search when main menu closes
    React.useEffect(() => {
      if (!open) { setAppsOpen(false); setStatusSearch(""); }
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
        label: "Dark Mode",
        icon: <Moon className="h-4 w-4" strokeWidth={1.5} />,
        onClick: onDarkModeToggle,
      },
      {
        id: "connected-apps",
        label: "Connected Apps",
        icon: <Activity className="h-4 w-4" strokeWidth={1.5} />,
        active: appsOpen,
        onClick: () => {
          if (contentRef.current) {
            const rect = contentRef.current.getBoundingClientRect();
            setAppsPos({ top: rect.top, right: window.innerWidth - rect.left + 8 });
          }
          setAppsOpen((v) => !v);
        },
        rightElement: (
          <span className="flex items-center gap-1.5">
            {issueCount > 0 ? (
              <Tooltip content={`${issueCount} app${issueCount > 1 ? "s" : ""} not fully connected`} placement="left">
                <span>
                  <StatusBadge variant="warning" size="sm">{connectedApps.length}</StatusBadge>
                </span>
              </Tooltip>
            ) : connectedApps.length > 0 ? (
              <StatusBadge variant="success" size="sm">{connectedApps.length}</StatusBadge>
            ) : (
              <StatusBadge variant="neutral" size="sm">0</StatusBadge>
            )}
            <ChevronLeft className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
          </span>
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
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <Tooltip content="Agent Status and More" placement="bottom" asLabel>
            <PopoverPrimitive.Trigger asChild>
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
            </PopoverPrimitive.Trigger>
          </Tooltip>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              side="bottom"
              align="end"
              sideOffset={6}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                // Focus the search input instead
                setTimeout(() => contentRef.current?.querySelector<HTMLInputElement>("input")?.focus(), 0);
              }}
              onInteractOutside={(e) => {
                if (appsPanelRef.current?.contains(e.target as Node)) e.preventDefault();
              }}
              ref={contentRef}
              className={cn(
                "z-[10001] w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
                "animate-in fade-in-0 slide-in-from-top-2 duration-150",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
              )}
            >
              {/* Search statuses */}
              <div className="px-3 py-2.5 border-b border-lyra-border-subtle">
                <div className="relative flex items-center">
                  <Search className="absolute left-2.5 h-4 w-4 text-lyra-fg-disabled pointer-events-none" strokeWidth={1.4} aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search statuses"
                    value={statusSearch}
                    onChange={(e) => setStatusSearch(e.target.value)}
                    className="w-full rounded-lyra-md border border-lyra-border-default bg-lyra-bg-surface-base pl-8 pr-3 py-1.5 lyra-body-md text-lyra-fg-default placeholder:text-lyra-fg-disabled focus:outline-none focus:ring-2 focus:ring-lyra-border-focus transition-colors"
                  />
                </div>
              </div>

              {/* Menu — uses the existing Menu component for consistent styling */}
              <Menu
                items={menuItems}
                className="border-0 shadow-none rounded-none rounded-b-lyra-lg bg-transparent"
              />

            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>

        {/* Connected Apps flyout — rendered in a separate portal to escape all clipping */}
        {appsOpen && ReactDOM.createPortal(
          <div
            ref={appsPanelRef}
            style={{ position: "fixed", top: appsPos.top, right: appsPos.right, zIndex: 9999 }}
            className="animate-in fade-in-0 slide-in-from-right-2 duration-150"
          >
            <ConnectedAppsPanel apps={connectedApps} onReconnect={handleReconnect} />
          </div>,
          document.body
        )}
      </div>
    );
  }
);
AgentProfile.displayName = "AgentProfile";

export { AgentProfile };
