import * as React from "react";
import * as ReactDOM from "react-dom";
import { Bell } from "lucide-react";
import { cn } from "../lib/utils";
import { StatusBadge } from "./status-badge";
import { Tooltip } from "./tooltip";
import { AgentNotifications, type AgentNotification } from "./agent-notifications";

/* ── Types ── */

export interface NotificationsBellProps {
  notifications?: AgentNotification[];
  onClearAll?: () => void;
  onMarkAllRead?: () => void;
  onNotificationClick?: (notification: AgentNotification) => void;
  onDismiss?: (id: string) => void;
  className?: string;
}

/* ── Component ── */

const NotificationsBell = React.forwardRef<HTMLDivElement, NotificationsBellProps>(
  ({ notifications = [], onClearAll, onMarkAllRead, onNotificationClick, onDismiss, className }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [panelPos, setPanelPos] = React.useState({ top: 0, left: 0 });
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const count = notifications.filter((n) => !n.read).length;
    const PANEL_DEFAULT_WIDTH = 320; // matches AgentNotifications defaultWidth

    const handleOpen = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPanelPos({
          top: rect.bottom + 6,
          // align panel's right edge with button's right edge; resize grows rightward
          left: rect.right - PANEL_DEFAULT_WIDTH,
        });
      }
      setOpen((v) => !v);
    };

    return (
      <div ref={ref} className={className}>
        <Tooltip content="Notifications" placement="bottom" asLabel>
          <button
            ref={buttonRef}
            type="button"
            aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
            aria-expanded={open}
            onClick={handleOpen}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-lyra-lg",
              "text-lyra-fg-default transition-colors",
              "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
              open && "bg-lyra-state-hover"
            )}
          >
            <Bell className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <StatusBadge
                variant="critical"
                size="sm"
                count={count}
                className="absolute -top-0.5 -right-0.5"
              />
            )}
          </button>
        </Tooltip>

        {open && ReactDOM.createPortal(
          <div
            style={{ position: "fixed", top: panelPos.top, left: panelPos.left, zIndex: 9999 }}
            className="animate-in fade-in-0 slide-in-from-top-2 duration-150"
          >
            <AgentNotifications
              notifications={notifications}
              onClearAll={onClearAll}
              onMarkAllRead={onMarkAllRead}
              onClose={() => setOpen(false)}
              onNotificationClick={onNotificationClick}
              onDismiss={onDismiss}
            />
          </div>,
          document.body
        )}
      </div>
    );
  }
);
NotificationsBell.displayName = "NotificationsBell";

export { NotificationsBell };
export type { AgentNotification };
