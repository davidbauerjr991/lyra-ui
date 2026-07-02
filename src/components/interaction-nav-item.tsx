import * as React from "react";
import { createPortal } from "react-dom";
import {
  MoreVertical,
  Clock,
  TriangleAlert,
  User,
  ArrowUpRight,
  CircleCheck,
  Send,
  FileDown,
  Languages,
} from "lucide-react";
import { cn } from "../lib/utils";
import { tagVariants } from "./tag";
import { Menu, type MenuEntry } from "./menu";

/* ── Kebab menu ── */

/** Person + redirect-arrow composite — no single Lucide icon covers "transfer". */
const ConsultTransferIcon = () => (
  <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
    <User className="h-4 w-4" strokeWidth={1.5} />
    <ArrowUpRight className="absolute -right-1 -top-1 h-2.5 w-2.5" strokeWidth={2.5} />
  </span>
);

/** Default kebab (⋮) menu — standard interaction actions. Override via the
 *  `menuItems` prop to customize. */
const DEFAULT_MORE_MENU_ITEMS: MenuEntry[] = [
  { id: "unassign-dismiss", label: "Unassign & Dismiss", icon: <TriangleAlert className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "consult-transfer", label: "Consult / Transfer", icon: <ConsultTransferIcon /> },
  { id: "outcome", label: "Outcome", icon: <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} /> },
  { id: "send-transcript", label: "Send Transcript", icon: <Send className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "download-transcript", label: "Download Transcript", icon: <FileDown className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "translate-messages", label: "Translate Messages", icon: <Languages className="h-4 w-4" strokeWidth={1.5} /> },
];

/** Kebab (⋮) trigger + dropdown, used once per channel row. Rendered via
 *  portal (not inline) so it isn't clipped by a card's own `overflow-hidden`/
 *  rounded corners or by neighboring cards in a scrolling stack — positioned
 *  with `fixed` coords measured from the button's own bounding rect. */
interface KebabMenuButtonProps {
  items: MenuEntry[];
  ariaLabel: string;
  className?: string;
}

const KebabMenuButton: React.FC<KebabMenuButtonProps> = ({ items, ariaLabel, className }) => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const openMenu = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) setPosition({ top: rect.bottom + 4, left: rect.right });
    setOpen(true);
  };

  React.useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const entries: MenuEntry[] = items.map((entry) =>
    entry === "separator"
      ? entry
      : { ...entry, onClick: () => { entry.onClick?.(); setOpen(false); } }
  );

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (open) setOpen(false);
          else openMenu();
        }}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
          className
        )}
      >
        <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open && position && createPortal(
        <div
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            transform: "translateX(-100%)",
            zIndex: 9999,
          }}
        >
          <Menu items={entries} aria-label={ariaLabel} />
        </div>,
        document.body
      )}
    </>
  );
};

/* ── Helpers ── */

/** First + last name initials (e.g. "Sofia Martinez" → "SM"). Falls back to
 *  "C" (for "Customer") when there's no name to derive initials from. */
function getInitials(name?: string): string {
  const parts = name?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (parts.length === 0) return "C";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

/* ── InteractionChannel ── */

export interface InteractionChannel {
  /** Channel icon (chat bubble, envelope, etc.) */
  icon: React.ReactNode;
  /** Channel name, e.g. "Chat", "Email", "SMS", "WhatsApp" — rendered as-is in the chip. */
  label: string;
  /** Elapsed time for this channel's last message, as 4-digit MM:SS, or "Now". */
  elapsed: string;
  /** Message preview for this channel. */
  preview?: string;
  /**
   * Whether this is the channel currently open/being viewed for this
   * interaction. Only highlighted (blue background) when the parent
   * `InteractionNavItem` itself is `active` — on an inactive card, no
   * channel row is highlighted even if one is marked `current`.
   */
  current?: boolean;
  /** Whether this specific channel is the one awaiting a response —
   *  renders its chip in critical (red) instead of success (green). */
  awaitingResponse?: boolean;
  /** Show the trailing kebab (⋮) menu for this channel row. Default: true. */
  removable?: boolean;
  /** @deprecated No longer used — the trailing action is now a shared kebab
   *  dropdown (see `menuItems` on InteractionNavItemProps) instead of a
   *  single remove button. */
  onRemove?: () => void;
}

/* ── InteractionNavItem ── */

export interface InteractionNavItemProps {
  /** Customer's full name — initials (compact mode) and the card title
   *  (expanded mode) are derived from this. Falls back to "C" / "Customer"
   *  when there's no customer attached to the interaction yet. */
  customerName?: string;
  /** Open channels/conversations for this interaction. A compact-mode count
   *  badge appears when there's more than one; the expanded card lists each
   *  as its own row (chip + elapsed time + preview). */
  channels?: InteractionChannel[];
  /** Elapsed time label as 4-digit MM:SS (e.g. "00:02" = 2 seconds since the
   *  customer's last response) — shown under the compact avatar tile. */
  elapsed: string;
  /**
   * True when the customer has sent a message the agent hasn't replied to
   * yet: the avatar switches from primary (blue) to critical (red) and a
   * red badge dot appears. Default (false) is primary with no badge.
   */
  awaitingResponse?: boolean;
  /** Whether this is the currently-open/selected interaction. */
  active?: boolean;
  /**
   * Whether the parent LeftNav rail is expanded. False renders the compact
   * avatar tile (icon-rail mode); true renders the full detail card. Mirrors
   * AddChannel's `expanded` prop so it can be used the same way as a LeftNav
   * `header`/`footer` slot.
   */
  expanded?: boolean;
  onClick?: () => void;
  /** Expanded mode only — items shown in each channel row's kebab (⋮)
   *  dropdown. Defaults to the standard interaction actions (Unassign &
   *  Dismiss, Consult/Transfer, Outcome, Send Transcript, Download
   *  Transcript, Translate Messages). */
  menuItems?: MenuEntry[];
  className?: string;
}

const InteractionNavItem = React.forwardRef<HTMLDivElement, InteractionNavItemProps>(
  (
    {
      customerName,
      channels = [],
      elapsed,
      awaitingResponse = false,
      active = false,
      expanded = false,
      onClick,
      menuItems,
      className,
    },
    ref
  ) => {
    const initials = getInitials(customerName);
    const displayName = customerName || "Customer";
    const channelCount = channels.length;

    const tone = awaitingResponse
      ? { bg: "bg-lyra-status-critical-subtle", text: "text-lyra-status-critical-strong", border: "border-lyra-status-critical-strong" }
      : { bg: "bg-lyra-status-info-subtle", text: "text-lyra-status-info-strong", border: "border-lyra-status-info-strong" };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    };

    const ariaLabel = `${displayName}${awaitingResponse ? ", awaiting response" : ""}${channelCount > 1 ? `, ${channelCount} open channels` : ""}, ${elapsed}`;

    const resolvedMenuItems = menuItems ?? DEFAULT_MORE_MENU_ITEMS;

    /* ── Compact: icon-rail avatar tile ── */
    if (!expanded) {
      return (
        <div
          ref={ref}
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          aria-label={ariaLabel}
          aria-current={active ? "true" : undefined}
          className={cn(
            "flex cursor-pointer flex-col items-center gap-1 rounded-lyra-sm p-1.5 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
            active ? "bg-lyra-bg-surface-base shadow-sm" : "hover:bg-lyra-state-hover",
            className
          )}
        >
          <span className="relative inline-flex">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lyra-sm border lyra-body-sm-emphasis",
                tone.bg,
                tone.text,
                tone.border
              )}
              aria-hidden="true"
            >
              {initials}
            </span>
            {channelCount > 1 && (
              <span
                className="absolute -left-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-lyra-bg-destructive px-1 text-[10px] font-bold text-lyra-fg-on-primary"
                aria-label={`${channelCount} open channels`}
              >
                <span aria-hidden="true">{channelCount}</span>
              </span>
            )}
            {awaitingResponse && (
              <span
                className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-lyra-status-critical-strong ring-2 ring-lyra-bg-surface-shell"
                aria-hidden="true"
              />
            )}
          </span>
          <span className="lyra-body-xs text-lyra-fg-secondary" aria-hidden="true">{elapsed}</span>
        </div>
      );
    }

    /* ── Expanded: full detail card ── */
    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        aria-current={active ? "true" : undefined}
        className={cn(
          "flex w-full cursor-pointer flex-col overflow-hidden rounded-lyra-sm border-y border-r bg-lyra-bg-surface-base text-left transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          active ? "border-l-4" : "border-l",
          active && "shadow-md",
          // Border color reflects active state first — an inactive card never
          // gets the red "needs attention" border, even when awaiting a
          // response (that's conveyed via the channel chip / avatar badge
          // instead). Only an active card that's also awaiting response
          // shows red; every other active card shows the blue active border.
          active
            ? awaitingResponse
              ? "border-lyra-status-critical-strong"
              : "border-lyra-border-active"
            : "border-lyra-border-subtle",
          className
        )}
      >
        <div className="flex items-center gap-2 px-4 pt-2 pb-1">
          <span className="lyra-heading-sm text-lyra-fg-default truncate">{displayName}</span>
        </div>

        {channels.length > 0 && (
          <div className="flex flex-col">
            {channels.map((ch, i) => {
              // Only ever highlighted on the active card — an inactive card's
              // "current" channel still renders plain, same as every other row.
              const highlighted = active && ch.current;
              return (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col gap-1 px-4 py-2.5 transition-colors",
                    i > 0 && "border-t border-lyra-border-subtle",
                    highlighted ? "bg-lyra-status-info-subtle" : "hover:bg-lyra-state-hover"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className={cn(tagVariants({ variant: ch.awaitingResponse ? "critical" : "success", shape: "pill" }))}>
                      <span aria-hidden="true">{ch.icon}</span>
                      {ch.label}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1 lyra-body-xs",
                        ch.awaitingResponse ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
                      )}
                    >
                      <Clock className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                      {ch.elapsed}
                    </span>
                    <span className="flex-1" />
                    {ch.removable !== false && (
                      <KebabMenuButton items={resolvedMenuItems} ariaLabel={`More options for ${ch.label}`} />
                    )}
                  </div>
                  {ch.preview && (
                    <p className="lyra-body-sm text-lyra-fg-secondary truncate">{ch.preview}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
InteractionNavItem.displayName = "InteractionNavItem";

export { InteractionNavItem };
