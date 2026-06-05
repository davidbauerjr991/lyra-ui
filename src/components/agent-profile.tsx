import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ChevronDown, Moon, Activity, LogOut } from "lucide-react";
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
    const [appsOpen, setAppsOpen] = React.useState(false);
    const [appsPos, setAppsPos] = React.useState({ top: 0, right: 0 });
    const contentRef = React.useRef<HTMLDivElement>(null);
    const issueCount = connectedApps.filter((a) => a.status !== "healthy").length;

    // Close apps panel when main menu closes
    React.useEffect(() => { if (!open) setAppsOpen(false); }, [open]);
    const closeTimer = React.useRef<ReturnType<typeof setTimeout>>();

    const openMenu  = () => { clearTimeout(closeTimer.current); setOpen(true); };
    const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(false), 250); };

    /* Build Menu entries using the Menu component's interface */
    const menuItems: MenuEntry[] = [
      ...( ["available", "busy", "away", "offline"] as AgentStatus[] ).map((s) => ({
        id: s,
        label: statusConfig[s].label,
        icon: <StatusDot status={s} />,
        selected: status === s,
        onClick: () => { onStatusChange?.(s); setOpen(false); },
      })),
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
        onClick: () => {
          if (contentRef.current) {
            const rect = contentRef.current.getBoundingClientRect();
            setAppsPos({ top: rect.top, right: window.innerWidth - rect.left + 8 });
          }
          setAppsOpen((v) => !v);
        },
        rightElement: issueCount > 0 ? (
          <Tooltip content={`${issueCount} app${issueCount > 1 ? "s" : ""} not fully connected`} placement="left">
            <span>
              <StatusBadge variant="warning" size="sm">{issueCount}</StatusBadge>
            </span>
          </Tooltip>
        ) : connectedApps.length > 0 ? (
          <StatusBadge variant="neutral" size="sm">{connectedApps.length}</StatusBadge>
        ) : undefined,
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
        <PopoverPrimitive.Root open={open} onOpenChange={(v) => { if (!v && appsOpen) return; setOpen(v); }}>
          <PopoverPrimitive.Trigger asChild>
            <button
              type="button"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
              aria-label="Agent profile"
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

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              side="bottom"
              align="end"
              sideOffset={6}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
              ref={contentRef}
              className={cn(
                "z-50 w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
                "animate-in fade-in-0 duration-100",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-75"
              )}
            >
              {/* Agent info header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-lyra-border-subtle">
                <Avatar initials={initials} src={avatarSrc} status={status} />
                <div className="min-w-0">
                  <p className="lyra-body-md-emphasis text-lyra-fg-default truncate">{name}</p>
                  <p className="lyra-body-sm text-lyra-fg-secondary">{statusConfig[status].label}</p>
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
        {appsOpen && connectedApps.length > 0 && ReactDOM.createPortal(
          <div
            style={{ position: "fixed", top: appsPos.top, right: appsPos.right, zIndex: 9999 }}
            className="animate-in fade-in-0 duration-100"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onPointerDown={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
            onMouseDown={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
          >
            <ConnectedAppsPanel apps={connectedApps} onReconnect={onReconnect} />
          </div>,
          document.body
        )}
      </div>
    );
  }
);
AgentProfile.displayName = "AgentProfile";

export { AgentProfile };
