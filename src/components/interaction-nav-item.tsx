import * as React from "react";
import { cn } from "../lib/utils";
import { CHANNEL_ROW_COMPONENTS, type InteractionChannel, type ChannelType } from "./channel-row";

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
  /**
   * Called when the agent chooses "Unassign & Dismiss" from a channel's
   * kebab menu while this card has only that *one* channel open — with
   * nothing left once it's gone, the whole card goes with it, so the
   * consumer should remove it entirely (e.g. filter it out of whatever list
   * rendered it). When a card has more than one open channel, "Unassign &
   * Dismiss" calls `onDismissChannel` instead (see below) — this component
   * decides which of the two applies based on `channels.length` at click
   * time, so the consumer never has to duplicate that check itself. Omit to
   * leave "Unassign & Dismiss" inert on a single-channel card — e.g. for a
   * fixed demo card with no backing state to remove it from. Only wired onto
   * each channel's *default* menu; a channel with a `menuItems` override
   * handles its own actions instead. */
  onDismiss?: () => void;
  /**
   * Called with the specific channel object when the agent chooses
   * "Unassign & Dismiss" from a card that has *more than one* open channel —
   * ends just that one channel (the consumer should drop it from this
   * interaction's own channel list, matching on `channel.id ?? channel.type`
   * since two open channels can share the same `type`), leaving the rest of
   * the card and its other channels open. See `onDismiss` above for the
   * single-channel case, where the whole card goes instead. */
  onDismissChannel?: (channel: InteractionChannel) => void;
  /** Rendered at the end of the expanded card's header row, next to the
   *  customer name — e.g. an "Add Outbound" button (see `OutboundAddButton`
   *  in `create-new.tsx`) letting the agent start another channel with this
   *  same contact without leaving the card. Kept as a generic slot (not a
   *  dedicated `onAddOutbound` prop) so this component has no direct
   *  dependency on `create-new.tsx`'s outbound-picker types — the consumer
   *  composes whatever trigger it needs. Not rendered in compact (icon-rail)
   *  mode, which has no header row to put it in. */
  headerAction?: React.ReactNode;
  className?: string;
}

/** Identity used for current-channel tracking, click-to-select, and dismiss
 *  — `id` when the consumer supplied one, else `type`. See
 *  `InteractionChannel.id`'s own doc comment for why `type` alone isn't
 *  enough once an interaction can have two channels of the same type open
 *  at once. */
function channelKey(ch: InteractionChannel): string {
  return ch.id ?? ch.type;
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
      onDismiss,
      onDismissChannel,
      headerAction,
      className,
    },
    ref
  ) => {
    const initials = getInitials(customerName);
    const displayName = customerName || "Customer";
    const channelCount = channels.length;

    // The single channel actually treated as "current" (the one that gets
    // the blue-highlighted row) — resolved here rather than trusting each
    // `InteractionChannel.current` flag verbatim, since a consumer flipping
    // one channel's `current` to true has no way to also flip every sibling
    // back to false in that same update (a real bug: two channels both
    // landing on `current: true`, both rendering highlighted at once).
    // Keyed by `channelKey` (id, or `type` when no id was supplied) rather
    // than `type` alone — two channels can share a `type` (e.g. two SMS
    // threads with the same customer on different numbers), and keying on
    // `type` would highlight/select/dismiss *both* of them together instead
    // of just the one actually clicked. Falls back to the *last* channel
    // actually flagged `current` (ignoring any earlier stale ones), or the
    // last channel overall if none are flagged. Clicking any row (see
    // `onSelect` below) overrides this default — the override self-heals
    // back to the fallback once that channel is no longer present (e.g. it
    // was dismissed), since the `.some(...)` check below stops matching it.
    // This is what lets an agent toggle which open channel is "current"
    // within one card.
    const [manualCurrentKey, setManualCurrentKey] = React.useState<string | null>(null);

    // Opening a new channel on this interaction (e.g. the agent starts a
    // second channel with a contact who already has a card) always takes
    // over as "current" — even overriding a previous manual pick above —
    // since the whole point of opening it was to bring it into view now.
    // Without this, a card where the agent had earlier clicked to view one
    // channel would silently keep that one "current" forever, leaving every
    // newly-opened channel after it unhighlighted. Detected by diffing this
    // render's channel keys against the last render's (tracked as state,
    // not a ref, and adjusted directly during render per React's "adjusting
    // state when a prop changes" pattern — this re-renders immediately
    // before paint instead of one tick late the way a `useEffect` would).
    const currentChannelKeys = channels.map(channelKey);
    const [prevChannelKeys, setPrevChannelKeys] = React.useState<string[]>(currentChannelKeys);
    const channelKeysChanged =
      currentChannelKeys.length !== prevChannelKeys.length ||
      currentChannelKeys.some((k, i) => k !== prevChannelKeys[i]);
    if (channelKeysChanged) {
      setPrevChannelKeys(currentChannelKeys);
      const justOpenedKey = currentChannelKeys.find((k) => !prevChannelKeys.includes(k));
      if (justOpenedKey !== undefined) setManualCurrentKey(justOpenedKey);
    }

    const fallbackCurrentChannel = [...channels].reverse().find((c) => c.current) ?? channels[channels.length - 1];
    const fallbackCurrentKey = fallbackCurrentChannel ? channelKey(fallbackCurrentChannel) : undefined;
    const currentKey = channels.some((c) => channelKey(c) === manualCurrentKey) ? manualCurrentKey : fallbackCurrentKey;

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
          <span className="min-w-0 flex-1 truncate lyra-heading-sm text-lyra-fg-default">{displayName}</span>
          {headerAction}
        </div>

        {channels.length > 0 && (
          <div className="flex flex-col">
            {channels.map((ch, i) => {
              // Only ever highlighted on the active card — an inactive card's
              // "current" channel still renders plain, same as every other row.
              const highlighted = active && channelKey(ch) === currentKey;
              const RowComponent = CHANNEL_ROW_COMPONENTS[ch.type];
              return (
                <RowComponent
                  key={`${channelKey(ch)}-${i}`}
                  elapsed={ch.elapsed}
                  preview={ch.preview}
                  highlighted={highlighted}
                  isFirst={i === 0}
                  awaitingResponse={ch.awaitingResponse}
                  removable={ch.removable}
                  menuItems={ch.menuItems}
                  // More than one open channel — "Unassign & Dismiss" only
                  // ends this one, not the whole card (see `onDismissChannel`
                  // above). With just one, ending it means ending the card.
                  // Passes the whole channel (not just its `type`) so a
                  // consumer with two same-type channels open can tell
                  // exactly which one to drop.
                  onDismiss={() => {
                    if (channels.length > 1) onDismissChannel?.(ch);
                    else onDismiss?.();
                  }}
                  onSelect={() => setManualCurrentKey(channelKey(ch))}
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
