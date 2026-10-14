import * as React from "react";
import { UserPlus, MessageSquare, Users, AlertTriangle, PhoneMissed, Bell, Trash2, GripVertical, MoreHorizontal, Maximize2 } from "lucide-react";
import { cn } from "../lib/utils";
import { MenuItem } from "./menu-item";
import { Badge } from "./badge";
import { Tooltip } from "./tooltip";
import { Draggable, type DraggableVariant, type EmbeddablePanelContent } from "./draggable";
import { ContainerHeader } from "./container-header";
import { KebabMenuButton } from "./kebab-menu-button";
import { ActionIconButton } from "./actions";
import { EmptyState } from "./empty-state";

/* ── Types ── */

// "new-agent-chat" is a request from another AGENT (a colleague), not a
// customer — visually distinct from "new-chat" (see `typeConfig` below: a
// different icon/color pairing) per explicit request that the two read as
// different categories of notification, not just different label text on
// the same look.
export type NotificationType = "new-case" | "new-chat" | "new-agent-chat" | "escalation" | "missed-call" | "custom";

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
  onMarkAllRead?: () => void;
  onClose?: () => void;
  /**
   * Show a full-screen button in the header (next to the dock button) and call this when it's
   * clicked. The panel has no full-screen mode of its own — the consumer renders whatever
   * "full screen" means for it (agent-next-gen-v3 swaps in an overlay filling its container;
   * see `useAgentNotificationsContent` for the content to reuse there). Omit for no button.
   */
  onFullScreen?: () => void;
  onNotificationClick?: (notification: AgentNotification) => void;
  onDismiss?: (id: string) => void;
  /** Restored width on each remount so resize is preserved across float↔docked switches */
  defaultWidth?: number;
  /** Max width for the Draggable wrapper (default: unlimited) */
  maxWidth?: number;
  /** Controlled height — overrides defaultHeight on the Draggable (e.g. for viewport-responsive sizing) */
  height?: number;
  /** Initial Draggable variant (default: "float") */
  draggableVariant?: DraggableVariant;
  /** Called when variant changes (float ↔ docked) */
  onVariantChange?: (variant: DraggableVariant) => void;
  /** Called when the draggable width changes (for animating docked wrapper) */
  onWidthChange?: (width: number) => void;
  /** Called when resize drag starts/ends (suppress transition during drag) */
  onResizeStateChange?: (isResizing: boolean) => void;
  /** Called on any mousedown inside the panel — use for z-index "bring to front" logic */
  onInteract?: () => void;
  className?: string;
}

/* ── Notification type config ── */

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
  "new-agent-chat": {
    // `Users` (two people), not `MessageSquare` — a customer chat's speech
    // bubble reads as "a conversation," which is exactly what this ISN'T
    // meant to look like at a glance; a colleague-to-colleague request
    // reads more like "another agent," hence a person-pair glyph instead.
    // Purple, not `new-chat`'s green — the one notification-type color not
    // already claimed by another type here (blue/green/yellow/red above),
    // so the two chat-shaped types can't be confused for the same category
    // even in a quick glance at the icon alone.
    icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
    bg: "bg-lyra-accent-purple-soft",
    color: "text-lyra-accent-purple-strong",
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

/** Content-only subset of `AgentNotificationsProps` — everything
 *  `useAgentNotificationsContent` needs, i.e. everything EXCEPT the
 *  `Draggable`-wrapper concerns (`draggableVariant`/`onVariantChange`/
 *  sizing/`onClose`/`className`) that only make sense when
 *  `AgentNotifications` owns its own shell. */
export interface AgentNotificationsContentProps {
  notifications: AgentNotification[];
  onClearAll?: () => void;
  onMarkAllRead?: () => void;
  onNotificationClick?: (notification: AgentNotification) => void;
  onDismiss?: (id: string) => void;
}

/**
 * Everything `AgentNotifications` shows that ISN'T the `Draggable` shell
 * around it — the unread-count `titleBadge`, the "Mark all as read"/"Clear
 * all" overflow menu, and the notification list itself — as one
 * `EmbeddablePanelContent`. `AgentNotifications` itself calls this
 * internally (see below) so its own rendered output is unchanged; exported
 * so a consumer that wants Notifications' real content inside some OTHER
 * shared `Draggable` shell (see `AgentNextGenPage.tsx`'s single-container
 * app header panel, and lyra-ui's own "Single Container" `Draggable.
 * stories.tsx` demo) can get it without reimplementing it a second time.
 * `dockedIcon` is intentionally omitted (left `undefined`) — Notifications
 * shows no icon at all when docked, only the shared drag grip in float
 * mode, same generic empty-state default. */
function useAgentNotificationsContent({
  notifications, onClearAll, onMarkAllRead, onNotificationClick, onDismiss,
}: AgentNotificationsContentProps): EmbeddablePanelContent {
  // Tracked here only so the `Tooltip` wrapping the overflow trigger can be
  // told to close while it's open (its trigger and the tooltip's trigger
  // are the same DOM node, so the tooltip has no other way to find out).
  // See `KebabMenuButton.onOpenChange`'s doc comment (kebab-menu-button.tsx)
  // for the general version of this issue.
  const [overflowMenuOpen, setOverflowMenuOpen] = React.useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const hasUnread = notifications.some((n) => !n.read);

  // Pre-compute outside JSX to avoid IIFE type-widening issues
  const overflowItems: Array<{ id: string; label: string; onClick: () => void; destructive?: boolean }> = [
    ...(onMarkAllRead && hasUnread
      ? [{ id: "mark-read", label: "Mark all as read", onClick: onMarkAllRead }]
      : []),
    ...(onClearAll
      ? [{ id: "clear-all", label: "Clear all", onClick: onClearAll, destructive: true }]
      : []),
  ];

  const titleBadge = unreadCount > 0
    ? <Badge shape="circle" variant="info" size="sm" className="-translate-y-0.5">{unreadCount}</Badge>
    : undefined;

  // `KebabMenuButton` (built on `MenuRadix`) is the shared "icon button that opens a Menu";
  // `h-8 w-8` keeps this header's 32px action size (its own default is 24px).
  const headerActions = overflowItems.length > 0 ? (
    <Tooltip content="More options" placement="bottom" disabled={overflowMenuOpen}>
      <KebabMenuButton
        ariaLabel="More options"
        icon={<MoreHorizontal className="h-4 w-4" strokeWidth={1.5} />}
        items={overflowItems}
        className="h-8 w-8 hover:text-lyra-fg-default focus-visible:ring-offset-2"
        onOpenChange={setOverflowMenuOpen}
      />
    </Tooltip>
  ) : undefined;

  const body = (
    <div className="overflow-y-auto flex-1 p-2">
      {notifications.length === 0 ? (
        <EmptyState
          className="py-10"
          icon={<Bell className="h-8 w-8" strokeWidth={1} />}
          message="No notifications"
        />
      ) : (
        notifications.map((n, i) => (
          <React.Fragment key={n.id}>
            {/* `MenuItem`: icon = the type icon, title/subtitle/meta = the three text lines
                (bold title when there's a `subtitle`, else the title becomes the single line),
                trailing = the Clear button (revealed on row hover or keyboard focus). `active`
                marks unread (tinted + accent bar). The row is a clickable div, so it gets button
                semantics and Enter/Space handling here. */}
            <MenuItem
              as="div"
              static={false}
              onClick={() => onNotificationClick?.(n)}
              icon={<NotificationIcon type={n.type} icon={n.icon} />}
              header={n.subtitle ? n.title : undefined}
              label={n.subtitle ?? n.title}
              description={n.timestamp}
              rightElement={
                <Tooltip content="Clear" placement="left" asLabel>
                  <ActionIconButton
                    size="xs"
                    onClick={(e) => { e.stopPropagation(); onDismiss?.(n.id); }}
                    aria-label={`Clear ${n.title}`}
                    className="opacity-0 group-hover/notif:opacity-100 focus-visible:opacity-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </ActionIconButton>
                </Tooltip>
              }
              active={!n.read}
              className="group/notif"
            />
            {i < notifications.length - 1 && (
              <div role="separator" className="border-b border-lyra-border-subtle my-1.5" />
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );

  return {
    title: "Notifications",
    titleBadge,
    titleClassName: "lyra-heading-md leading-none",
    headerActions,
    body,
  };
}

/* ── Component ── */

const AgentNotifications = React.forwardRef<HTMLDivElement, AgentNotificationsProps>(
  ({ notifications, onClearAll, onMarkAllRead, onClose, onFullScreen, onNotificationClick, onDismiss,
     defaultWidth = 320, maxWidth, height,
     draggableVariant: draggableVariantProp = "float", onVariantChange, onWidthChange, onResizeStateChange,
     onInteract, className }, ref) => {
    const [draggableVariant, setDraggableVariant] = React.useState<DraggableVariant>(draggableVariantProp);

    // Sync when parent forces a variant change (single-dock rule)
    React.useEffect(() => { setDraggableVariant(draggableVariantProp); }, [draggableVariantProp]);

    // Everything content-specific (unread `titleBadge`, the "Mark all as
    // read"/"Clear all" overflow menu, the notification list itself) now
    // lives in `useAgentNotificationsContent`, shared with any OTHER shell
    // that wants this same content embedded (see that hook's own doc
    // comment) — `AgentNotifications` itself is just one caller of it,
    // using `titleBadge`/`titleClassName`/`headerActions`/`body` below
    // exactly where its own inline versions of those used to be.
    const { titleBadge, titleClassName, headerActions, body } = useAgentNotificationsContent({
      notifications, onClearAll, onMarkAllRead, onNotificationClick, onDismiss,
    });

    return (
      <Draggable
        ref={ref}
        variant={draggableVariant}
        defaultWidth={defaultWidth}
        defaultHeight={height ?? 480}
        minWidth={280}
        maxWidth={maxWidth}
        minHeight={200}
        onVariantChange={(v) => { setDraggableVariant(v); onVariantChange?.(v); }}
        onWidthChange={onWidthChange}
        onResizeStateChange={onResizeStateChange}
        onInteract={onInteract}
        className={cn(
          "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",
          draggableVariant === "float" ? "shadow-lg" : "h-full",
          className
        )}
        renderHeaderControls={({ gripProps, dockButtonProps, dockIcon, variant }) => (
          <ContainerHeader
            title="Notifications"
            /* Grip icon in float mode; no icon at all in docked mode — see
               draggable-panel.tsx's matching comment. The blank `w-4`
               spacer this used to render in docked mode was a leftover
               height-preservation hack from before ContainerHeader's title
               got its own fixed-height box; it no longer does anything but
               misalign the docked title with the rest of the panel. */
            icon={
              variant === "float"
                ? <div {...gripProps}><GripVertical className="h-4 w-4" strokeWidth={1.5} /></div>
                : undefined
            }
            /* Count badge sits inline right after the title */
            titleBadge={titleBadge}
            /* lyra-heading-md line-height collapses so items-center aligns the badge correctly */
            titleClassName={titleClassName}
            actions={
              <>
                {/* Overflow menu — "Mark all as read" + "Clear all" (built
                    on MenuRadix — see `useAgentNotificationsContent`'s own
                    comment for why). */}
                {headerActions}
                {/* Full screen (only when the consumer handles it) */}
                {onFullScreen && (
                  <Tooltip content="Full Screen" placement="bottom" asLabel>
                    <ActionIconButton
                      aria-label="Full Screen"
                      size="sm"
                      onClick={onFullScreen}
                      className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
                    >
                      <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </ActionIconButton>
                  </Tooltip>
                )}
                {/* Dock / undock toggle */}
                <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                  <button
                    {...dockButtonProps}
                    className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                  >
                    {dockIcon}
                  </button>
                </Tooltip>
              </>
            }
            onClose={onClose}
            bordered
          />
        )}
      >
        {/* ── Notification list ── */}
        {body}
      </Draggable>
    );
  }
);
AgentNotifications.displayName = "AgentNotifications";

export { AgentNotifications, useAgentNotificationsContent };
