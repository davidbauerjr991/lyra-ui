import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { Minimize2 } from "lucide-react";
import { AgentNotifications, useAgentNotificationsContent, type AgentNotification } from "../agent-notifications";
import { ContainerHeader } from "../container-header";
import { ActionIconButton } from "../actions";
import { Tooltip } from "../tooltip";
import type { DraggableVariant } from "../draggable";
import { NOTIFICATION_COUNTS, SAMPLE_NOTIFICATIONS, type NotificationCount } from "./AgentNotifications.shared";

const meta: Meta<typeof AgentNotifications> = {
  title: "UI/AgentNotifications",
  component: AgentNotifications,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", backgrounds: { default: "lyra-shell" } },
};
export default meta;

/* Docs page plus one interactive playground. Empty / all-read / docked
   examples live under "AgentNotifications/Variants". */

/* ── Default — interactive playground ──
   The notification list is real state: Mark all as read, Clear all, the
   per-row Clear button and clicking a row all work. */

interface AgentNotificationsDemoProps {
  variant?: DraggableVariant;
  count?: NotificationCount;
  hasUnread?: boolean;
  showClose?: boolean;
  showFullScreen?: boolean;
  showMarkAllRead?: boolean;
  showClearAll?: boolean;
}

function AgentNotificationsDemo({
  variant: initialVariant = "float",
  count = "many",
  hasUnread = true,
  showClose = true,
  showFullScreen = false,
  showMarkAllRead = true,
  showClearAll = true,
}: AgentNotificationsDemoProps) {
  const [items, setItems] = useState<AgentNotification[]>(() =>
    SAMPLE_NOTIFICATIONS.slice(0, NOTIFICATION_COUNTS[count]).map((n) => (hasUnread ? n : { ...n, read: true }))
  );
  const [open, setOpen] = useState(true);
  // Fed back from the panel's own dock/undock button so the wrapper below always matches the real mode.
  const [variant, setVariant] = useState<DraggableVariant>(initialVariant);

  // Full screen — same approach and animation as agent-next-gen-v3: the panel has no full-screen
  // mode of its own, so full screen is a separate overlay filling the demo container, built from
  // `useAgentNotificationsContent`, and the panel is unmounted while it shows.
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenRendered, setFullScreenRendered] = useState(false);
  const [fullScreenVisible, setFullScreenVisible] = useState(false);
  const fullScreenTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    if (fullScreen) {
      clearTimeout(fullScreenTimer.current);
      setFullScreenRendered(true);
      // Double rAF so the overlay is painted once at its hidden style before `visible` flips.
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setFullScreenVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }
    setFullScreenVisible(false);
    clearTimeout(fullScreenTimer.current);
    fullScreenTimer.current = setTimeout(() => setFullScreenRendered(false), 180);
    return () => clearTimeout(fullScreenTimer.current);
  }, [fullScreen]);

  const markAllRead = showMarkAllRead ? () => setItems((prev) => prev.map((i) => ({ ...i, read: true }))) : undefined;
  const clearAll = showClearAll ? () => setItems([]) : undefined;
  const dismiss = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const markRead = (n: AgentNotification) => setItems((prev) => prev.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
  const content = useAgentNotificationsContent({
    notifications: items,
    onMarkAllRead: markAllRead,
    onClearAll: clearAll,
    onDismiss: dismiss,
    onNotificationClick: markRead,
  });

  const fullScreenOverlay =
    showFullScreen && fullScreenRendered ? (
      <div
        className="absolute top-0 left-0 right-3 bottom-3 z-[9] flex flex-col rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden"
        style={{
          opacity: fullScreenVisible ? 1 : 0,
          transform: fullScreenVisible ? "scale(1)" : "scale(0.98)",
          transition: fullScreenVisible
            ? "opacity 200ms ease, transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "opacity 150ms ease, transform 150ms ease",
          pointerEvents: fullScreenVisible ? "auto" : "none",
        }}
      >
        <ContainerHeader
          title={content.title}
          titleBadge={content.titleBadge}
          titleClassName={content.titleClassName}
          bordered
          actions={
            <>
              {content.headerActions}
              <Tooltip content="Exit Full Screen" placement="bottom" asLabel>
                <ActionIconButton
                  aria-label="Exit Full Screen"
                  size="sm"
                  onClick={() => setFullScreen(false)}
                  className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
                >
                  <Minimize2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                </ActionIconButton>
              </Tooltip>
            </>
          }
          onClose={
            showClose
              ? () => {
                  setFullScreen(false);
                  setOpen(false);
                }
              : undefined
          }
        />
        {content.body}
      </div>
    ) : null;

  const panel = open && !fullScreen ? (
    <AgentNotifications
      notifications={items}
      draggableVariant={variant}
      onVariantChange={setVariant}
      onMarkAllRead={markAllRead}
      onClearAll={clearAll}
      onClose={showClose ? () => setOpen(false) : undefined}
      onFullScreen={showFullScreen ? () => setFullScreen(true) : undefined}
      onDismiss={dismiss}
      onNotificationClick={markRead}
    />
  ) : null;

  return (
    <div className="relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1" />
      {fullScreenOverlay}
      {variant === "docked" ? (
        <div className="h-full pr-3 pb-3">{panel}</div>
      ) : (
        // `pointer-events-none`: only positions the panel's starting spot; the panel's own root stays interactive.
        <div className="absolute top-16 left-16 pointer-events-none">{panel}</div>
      )}
    </div>
  );
}

type DemoStory = StoryObj<typeof AgentNotificationsDemo>;

export const Default: DemoStory = {
  name: "Default",
  args: {
    variant: "float",
    count: "many",
    hasUnread: true,
    showClose: true,
    showFullScreen: false,
    showMarkAllRead: true,
    showClearAll: true,
  },
  parameters: {
    // Full-viewport demo — render in an iframe on the Docs page so `h-screen` has a bounded height.
    docs: { story: { inline: false, iframeHeight: 560 } },
    controls: {
      // Storybook matches `include` against a control's display name when `name` is set,
      // so both the labels and the prop keys are listed.
      include: [
        "Starts as", "Notifications", "Unread", "Close button", "Full screen button", "Mark all as read", "Clear all",
        "variant", "count", "hasUnread", "showClose", "showFullScreen", "showMarkAllRead", "showClearAll",
      ],
      sort: "none",
    },
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (`draggableVariant`).",
      table: { category: "Behavior", defaultValue: { summary: "float" } },
    },
    showClose: {
      name: "Close button",
      control: "boolean",
      description: "Show the close (×) button in the header (`onClose`). Clicking it hides the panel.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    showFullScreen: {
      name: "Full screen button",
      control: "boolean",
      description: "Adds a full-screen button to the header (`onFullScreen`). The panel expands to fill the container with a short fade-and-scale, and an exit button takes it back.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showMarkAllRead: {
      name: "Mark all as read",
      control: "boolean",
      description: "Offer \"Mark all as read\" in the header's overflow menu (`onMarkAllRead`). It only appears while something is unread.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    showClearAll: {
      name: "Clear all",
      control: "boolean",
      description: "Offer \"Clear all\" in the header's overflow menu (`onClearAll`).",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    count: {
      name: "Notifications",
      control: "radio",
      options: ["none", "few", "many"],
      description: "How many notifications to start with: none (empty state), 3, or 8 (`notifications`).",
      table: { category: "Content", defaultValue: { summary: "many" } },
    },
    hasUnread: {
      name: "Unread",
      control: "boolean",
      description: "On: some notifications start unread (highlighted, with a count badge in the header). Off: all start read.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
  },
  // `key` remounts the demo when a control changes — `useState`'s initial value only applies on first mount.
  render: (args) => <AgentNotificationsDemo key={JSON.stringify(args)} {...args} />,
};
