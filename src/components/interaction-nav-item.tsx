import * as React from "react";
import { cn } from "../lib/utils";
import { CHANNEL_ROW_COMPONENTS, type InteractionChannel } from "./channel-row";

/* ── Helpers ── */

/** First + last name initials (e.g. "Sofia Martinez" → "SM"). Falls back to
 *  "C" (for "Customer") when there's no name to derive initials from. */
function getInitials(name?: string): string {
  const parts = name?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (parts.length === 0) return "C";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

/* ── InteractionNavItem ── */

export interface InteractionNavItemProps {
  /** Customer's full name — initials (compact mode) and the card title
   *  (expanded mode) are derived from this. Falls back to "C" / "Customer"
   *  when there's no customer attached to the interaction yet. */
  customerName?: string;
  /** Open channels/conversations for this interaction. A compact-mode count
   *  badge appears when there's more than one; the expanded card lists each
   *  as its own row (chip + elapsed time + preview), dispatched to the
   *  matching per-type row component (`ChatChannelRow`/`EmailChannelRow`/
   *  `SmsChannelRow`/`WhatsAppChannelRow`/`VoiceChannelRow` in
   *  `channel-row.tsx`) based on `type`. */
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
   * CreateNew's `expanded` prop so it can be used the same way as a LeftNav
   * `header`/`footer` slot.
   */
  expanded?: boolean;
  onClick?: () => void;
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
      className,
    },
    ref
  ) => {
    const initials = getInitials(customerName);
    const displayName = customerName || "Customer";
    const channelCount = channels.length;

    const tone = awaitingResponse
      ? { bg: "bg-lyra-status-critical-subtle", text: "text-lyra-status-critical-strong", border: active ? "border-lyra-status-critical-strong" : "border-lyra-status-critical-medium/30" }
      : { bg: "bg-lyra-status-info-subtle", text: "text-lyra-status-info-strong", border: active ? "border-lyra-status-info-strong" : "border-lyra-status-info-medium/30" };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    };

    const ariaLabel = `${displayName}${awaitingResponse ? ", awaiting response" : ""}${channelCount > 1 ? `, ${channelCount} open channels` : ""}, ${elapsed}`;

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
              const highlighted = active && !!ch.current;
              const RowComponent = CHANNEL_ROW_COMPONENTS[ch.type];
              return (
                <RowComponent
                  key={i}
                  elapsed={ch.elapsed}
                  preview={ch.preview}
                  highlighted={highlighted}
                  isFirst={i === 0}
                  awaitingResponse={ch.awaitingResponse}
                  removable={ch.removable}
                  menuItems={ch.menuItems}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
InteractionNavItem.displayName = "InteractionNavItem";

export type { InteractionChannel, ChannelType } from "./channel-row";
export { InteractionNavItem };
