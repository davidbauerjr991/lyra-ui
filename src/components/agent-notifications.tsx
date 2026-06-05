import * as React from "react";
import { X, UserPlus, MessageSquare, AlertTriangle, PhoneMissed, Bell } from "lucide-react";
import { cn } from "../lib/utils";
import { ListItem } from "./list-item";
import { StatusBadge } from "./status-badge";
import { Tooltip } from "./tooltip";
import { Draggable } from "./draggable";

/* ── Types ── */

export type NotificationType = "new-case" | "new-chat" | "escalation" | "missed-call" | "custom";

export interface AgentNotification {
  id: string;
  type: NotificationType;
  title: string;
  subtitle?: string;
  timestamp: string;
  read?: boolean;
  /** Override icon for type "custom" */
  icon?: React.ReactNode;
}

export interface AgentNotificationsProps {
  notifications: AgentNotification[];
  onClearAll?: () => void;
  onClose?: () => void;
  onNotificationClick?: (notification: AgentNotification) => void;
  onDismiss?: (id: string) => void;
  className?: string;
}

/* ── Notification icon config ── */

const typeConfig: Record<NotificationType, { icon: React.ReactNode; bg: string; color: string }> = {
  "new-case": {
    icon: <UserPlus className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-bg-active-subtle",
    color: "text-lyra-fg-active-strong",
  },
  "new-chat": {
    icon: <MessageSquare className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-status-success-subtle",
    color: "text-lyra-status-success-strong",
  },
  escalation: {
    icon: <AlertTriangle className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-status-warning-subtle",
    color: "text-lyra-status-warning-strong",
  },
  "missed-call": {
    icon: <PhoneMissed className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-status-critical-subtle",
    color: "text-lyra-status-critical-strong",
  },
  custom: {
    icon: <Bell className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-bg-surface-shell",
    color: "text-lyra-fg-secondary",
  },
};

function NotificationIcon({ type, icon }: { type: NotificationType; icon?: React.ReactNode }) {
  const config = typeConfig[type];
  return (
    <div className={cn("h-9 w-9 rounded-full flex items-center justify-center shrink-0", config.bg, config.color)}>
      {icon ?? config.icon}
    </div>
  );
}

/* ── Grid dots icon (header) ── */
function GridDotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-lyra-fg-secondary">
      {[0,1,2].map((row) => [0,1,2].map((col) => (
        <circle key={`${row}-${col}`} cx={3 + col * 5} cy={3 + row * 5} r={1.2} />
      )))}
    </svg>
  );
}

/* ── Component ── */

const AgentNotifications = React.forwardRef<HTMLDivElement, AgentNotificationsProps>(
  ({ notifications, onClearAll, onClose, onNotificationClick, onDismiss, className }, ref) => {
    const unreadCount = notifications.length;

    return (
      <Draggable
        ref={ref}
        defaultWidth={320}
        defaultHeight={480}
        minWidth={280}
        minHeight={200}
        className={cn(
          "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
          className
        )}
      >
        {/* ── Header (also serves as drag handle via Draggable's h-12 overlay) ── */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-lyra-border-subtle shrink-0 bg-lyra-bg-surface-container-subtle select-none">
          <span className="lyra-heading-md text-lyra-fg-default flex-1">Notifications</span>
          {unreadCount > 0 && (
            <StatusBadge variant="info" size="sm">{unreadCount}</StatusBadge>
          )}
          {onClearAll && (
            <button
              type="button"
              onClick={onClearAll}
              className="lyra-body-sm text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:underline ml-2"
            >
              Clear all
            </button>
          )}
          {onClose && (
            <Tooltip content="Close" placement="bottom">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close notifications"
                className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus ml-1"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </Tooltip>
          )}
        </div>

        {/* ── Notification list ── */}
        <div className="overflow-y-auto flex-1">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 gap-2">
              <Bell className="h-8 w-8 text-lyra-fg-disabled" strokeWidth={1} />
              <p className="lyra-body-md text-lyra-fg-disabled">No notifications</p>
            </div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="group/notif relative">
                <ListItem
                  onClick={() => onNotificationClick?.(n)}
                  leading={<NotificationIcon type={n.type} icon={n.icon} />}
                  title={n.title}
                  subtitle={n.subtitle}
                  meta={n.timestamp}
                  divider
                  className={!n.read ? "bg-lyra-bg-active-subtle/40 pr-10" : "pr-10"}
                />
                {/* Dismiss button — appears on row hover */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onDismiss?.(n.id); }}
                  aria-label={`Dismiss ${n.title}`}
                  className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2",
                    "flex h-6 w-6 items-center justify-center rounded-lyra-sm",
                    "text-lyra-fg-secondary hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors",
                    "opacity-0 group-hover/notif:opacity-100",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                  )}
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </div>
            ))
          )}
        </div>
      </Draggable>
    );
  }
);
AgentNotifications.displayName = "AgentNotifications";

export { AgentNotifications };
