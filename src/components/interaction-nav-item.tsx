import * as React from "react";
import { cn } from "../lib/utils";
import { CHANNEL_ROW_COMPONENTS, CHANNEL_TYPE_META, type InteractionChannel, type ChannelType } from "./channel-row";
import { Popover } from "./popover";
import { Badge } from "./badge";

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
   *  composes whatever trigger it needs. Compact (icon-rail) mode has no
   *  header row of its own to put this in, but it isn't dropped there —
   *  hovering the compact tile opens a popover previewing the full expanded
   *  card (see the compact-mode branch below), and that preview's header
   *  row renders this exact same `headerAction`. If whatever's passed here
   *  opens its own popover (like `OutboundAddButton` does), make sure its
   *  z-index accounts for sometimes being nested inside that hover
   *  popover — see `OutboundAddButton`'s own doc comment in create-new.tsx. */
  headerAction?: React.ReactNode;
  /**
   * Controls which open channel is "current" (the blue-highlighted row on
   * an `active` card) from outside this component — e.g. a `ChannelTab` bar
   * rendered elsewhere (under a record-header `PageHeader`) that needs to
   * stay in lockstep with this same card. When provided, this always wins
   * over whatever the card would otherwise compute on its own (a row click,
   * or a newly-opened channel taking over as current); when omitted, the
   * card manages its own current-channel state exactly as before — every
   * existing consumer that doesn't pass this keeps working unchanged. Pass
   * the same key `onCurrentChannelChange` reports back (see below) — a
   * `channelKey`: `channel.id` when set, else `channel.type`.
   */
  currentChannelKey?: string;
  /**
   * Fired whenever the effective current channel changes — from a row
   * click, from a newly-opened channel auto-taking over, or (if this
   * component is uncontrolled) just to notify a listener without it having
   * to own `currentChannelKey` itself. A consumer building a synced
   * `ChannelTab` bar should store this in the same piece of state it passes
   * back in as `currentChannelKey`, so a click on either side updates both.
   */
  onCurrentChannelChange?: (key: string) => void;
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
      currentChannelKey,
      onCurrentChannelChange,
      className,
    },
    ref
  ) => {
    const initials = getInitials(customerName);
    const displayName = customerName || "Customer";
    const channelCount = channels.length;
    // Whether there's a real customer name to derive initials from at all —
    // an interaction identified only by a raw address (a quick-dialed phone
    // number, an anonymous inbound email/WhatsApp handle) has none, and
    // `getInitials`' own "C" fallback (or, worse, a stray leading digit/
    // symbol off whatever raw string ended up passed as a name) reads as
    // meaningless in the compact tile — a channel icon communicates "this is
    // an unidentified voice/email/WhatsApp contact" far better than a letter
    // that isn't actually anyone's initial. Real name still wins whenever
    // there is one, same as every other name-driven bit of this component
    // (`displayName`/`initials` above, the expanded card's header).
    const hasCustomerName = Boolean(customerName?.trim());

    // Internal handle onto the compact tile's own DOM node, alongside
    // (not instead of) the forwarded `ref` — needed so the Tab-trap logic
    // below (see `previewContentRef`'s own doc comment) can call
    // `.focus()` on the tile itself without depending on what shape of
    // ref, if any, a consumer happened to pass in.
    const tileRef = React.useRef<HTMLDivElement | null>(null);
    const setTileRef = (node: HTMLDivElement | null) => {
      tileRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

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
      if (justOpenedKey !== undefined) {
        setManualCurrentKey(justOpenedKey);
        // Also notify a controlling parent — when this component is
        // controlled (`currentChannelKey` prop passed), the internal
        // `setManualCurrentKey` above is inert for *display* purposes (see
        // `effectiveCurrentKey` below), so the parent's own state needs
        // this notification to actually pick up the newly-opened channel.
        onCurrentChannelChange?.(justOpenedKey);
      }
    }

    const fallbackCurrentChannel = [...channels].reverse().find((c) => c.current) ?? channels[channels.length - 1];
    const fallbackCurrentKey = fallbackCurrentChannel ? channelKey(fallbackCurrentChannel) : undefined;
    // Controlled (a `currentChannelKey` prop was passed) always wins over
    // whatever this card would otherwise compute on its own — see the
    // prop's own doc comment. Uncontrolled: unchanged from before, the
    // manual pick (if it still matches an open channel) or the fallback.
    const effectiveCurrentKey =
      currentChannelKey !== undefined
        ? currentChannelKey
        : channels.some((c) => channelKey(c) === manualCurrentKey) ? manualCurrentKey : fallbackCurrentKey;

    // Which channel's icon stands in for a missing customer name in the
    // compact tile below — the current one (the same one the agent's tabs/
    // rows already treat as "the" channel), falling back to the first open
    // channel when nothing's current yet.
    const primaryChannel = channels.find((c) => channelKey(c) === effectiveCurrentKey) ?? channels[0];

    // Compact mode only: hovering the icon-rail avatar tile opens a popover
    // previewing the full expanded card (name, headerAction, every channel
    // row) so the agent can read — and act on — the card's detail without
    // switching the whole rail to expanded mode. Same hover-intent pattern
    // as `OutboundContactRow`'s flyout in create-new.tsx: open immediately
    // on enter, but close on a short delay (rather than instantly on
    // mouseleave) so there's time to move the pointer from the tile into
    // the popover's own content — both the tile and the content re-arm the
    // open state on their own mouseenter, so hovering over either keeps it
    // open. Declared unconditionally (not inside the `!expanded` branch
    // below) because hooks can't be called conditionally, even though
    // they're only ever read there.
    const [hoverCardOpen, setHoverCardOpen] = React.useState(false);
    const closeHoverCardTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    // Which of this card's channel rows currently have their own kebab
    // dropdown open (see `handleChannelMenuOpenChange` below) — a Set, not a
    // single bool, since a multi-channel card has one independent kebab per
    // row. While non-empty, the hover-preview popover must never close out
    // from under an open dropdown: `KebabMenuButton`'s menu portals its
    // content straight to `document.body` (same as every Radix Popper-based
    // primitive), landing outside both the compact tile and this preview's
    // own wrapper div DOM-wise — so moving the pointer off the wrapper and
    // onto that portaled menu genuinely fires the wrapper's `onMouseLeave`
    // even though the agent is still actively using the card. Without this,
    // clicking a row's kebab and then moving toward its dropdown reads as
    // "left the card," the 150ms timer below elapses, and the whole preview
    // (dropdown included, since it's a child of `content`) unmounts out from
    // under the agent before they can pick an item.
    const openChannelMenuKeysRef = React.useRef<Set<string>>(new Set());
    const openHoverCard = () => {
      if (closeHoverCardTimeoutRef.current) {
        clearTimeout(closeHoverCardTimeoutRef.current);
        closeHoverCardTimeoutRef.current = null;
      }
      setHoverCardOpen(true);
    };
    const scheduleCloseHoverCard = () => {
      if (closeHoverCardTimeoutRef.current) clearTimeout(closeHoverCardTimeoutRef.current);
      // Never arm the close timer while any channel row's kebab dropdown is
      // still open — see `openChannelMenuKeysRef`'s own doc comment above.
      if (openChannelMenuKeysRef.current.size > 0) return;
      closeHoverCardTimeoutRef.current = setTimeout(() => setHoverCardOpen(false), 150);
    };
    // Passed to each channel row as `onMenuOpenChange` (threaded through
    // `ChannelRow`/`ChannelRowInstanceProps` in channel-row.tsx down to that
    // row's own `KebabMenuButton`). Opening a dropdown cancels/prevents the
    // close timer immediately (`openHoverCard`); closing one only re-arms it
    // once every kebab on this card is shut — a card can have more than one
    // channel row, each with its own kebab, and this only ever fires for the
    // one whose menu actually changed.
    const handleChannelMenuOpenChange = (key: string, open: boolean) => {
      if (open) {
        openChannelMenuKeysRef.current.add(key);
        openHoverCard();
      } else {
        openChannelMenuKeysRef.current.delete(key);
        if (openChannelMenuKeysRef.current.size === 0) scheduleCloseHoverCard();
      }
    };
    React.useEffect(() => {
      return () => {
        if (closeHoverCardTimeoutRef.current) clearTimeout(closeHoverCardTimeoutRef.current);
      };
    }, []);

    const tone = awaitingResponse
      ? { bg: "bg-lyra-status-critical-subtle", text: "text-lyra-status-critical-strong", border: active ? "border-lyra-status-critical-strong" : "border-lyra-status-critical-medium/30" }
      : { bg: "bg-lyra-status-info-subtle", text: "text-lyra-status-info-strong", border: active ? "border-lyra-status-info-strong" : "border-lyra-status-info-medium/30" };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      // `e.target !== e.currentTarget` — keydown bubbles, and this handler
      // is shared by the tile, the preview wrapper, and the real expanded
      // card, each of which also contains real nested interactive
      // descendants (the preview wrapper's Tab-trap loop below walks
      // straight through several: "+" headerAction, a channel row's kebab,
      // etc). Without this guard, Enter/Space pressed while focus is on one
      // of THOSE bubbles up here too, and this always calls
      // `preventDefault()` — which silently cancels the focused element's
      // own native "Enter/Space triggers a click" default action before it
      // can fire. Same `target === currentTarget` guard `modal.tsx`/
      // `overlay.tsx` already use for their own backdrop-click checks —
      // only a keydown that originates on the tile/wrapper itself (tabbing
      // to it directly, the common case) still activates `onClick`;
      // anything bubbling up from a nested descendant is left alone to
      // handle its own Enter/Space activation normally.
      if (e.target !== e.currentTarget) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    };

    // Compact mode only: the hover-preview's own content (see the `!expanded`
    // branch below) is a Radix `Popover.Content`, portaled straight to the
    // very end of `document.body` — its position in the DOM (and so its
    // place in the browser's *default* Tab order) is completely decoupled
    // from where it visually/logically sits, right next to this tile.
    // Confirmed live: tabbing forward from the tile skipped over all of the
    // preview's own content entirely and landed in unrelated main-content
    // dashboard/queue elements instead — the preview's "+" header action,
    // channel rows, and kebabs were only ever reachable by continuing to
    // tab through the *rest of the whole page* first, if at all. Fixed with
    // a small, self-contained "roving" Tab loop instead of relying on raw
    // DOM order: forward-Tab from the tile jumps straight into the
    // preview's own first stop (the content wrapper itself, see
    // `previewContentRef` below); forward-Tab off the *last* focusable row
    // inside it loops back to the tile rather than escaping into the page.
    // Shift+Tab off that first stop steps back out to the tile the same
    // way. The tile's own Shift+Tab (leaving the loop from its own start)
    // is left alone — normal page order already handles that correctly.
    const previewContentRef = React.useRef<HTMLDivElement | null>(null);

    // Every element inside the preview a Tab press could land on, in DOM
    // (== visual) order — deliberately a plain allow-list query, not a
    // library, since this only ever needs to answer "is focus currently on
    // the last one of these" below.
    const getPreviewFocusables = (): HTMLElement[] => {
      const root = previewContentRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };
    const handleTileKeyDown = (e: React.KeyboardEvent) => {
      handleKeyDown(e);
      // Only while the preview is actually mounted — otherwise there's
      // nothing to jump into, and eating the keypress here would strand
      // focus on the tile with nowhere for Tab to go.
      if (e.key === "Tab" && !e.shiftKey && previewContentRef.current) {
        e.preventDefault();
        previewContentRef.current.focus();
      }
    };
    const handlePreviewContentKeyDown = (e: React.KeyboardEvent) => {
      handleKeyDown(e);
      if (e.key !== "Tab") return;
      const focusables = getPreviewFocusables();
      if (e.shiftKey) {
        if (document.activeElement === previewContentRef.current) {
          e.preventDefault();
          tileRef.current?.focus();
        }
        return;
      }
      const last = focusables.length > 0 ? focusables[focusables.length - 1] : previewContentRef.current;
      if (document.activeElement === last) {
        e.preventDefault();
        tileRef.current?.focus();
      }
    };

    const ariaLabel = `${displayName}${awaitingResponse ? ", awaiting response" : ""}${channelCount > 1 ? `, ${channelCount} open channels` : ""}, ${elapsed}`;

    // Header row + channel list — the expanded card's actual content,
    // factored out so it can be rendered both by the real expanded return
    // below and inside the compact tile's hover popover (see `!expanded`
    // branch), without keeping two copies of this markup in sync by hand.
    const cardBody = (
      <>
        <div className="flex items-center gap-2 px-4 pt-2 pb-1">
          <span className="min-w-0 flex-1 truncate lyra-heading-sm text-lyra-fg-default">{displayName}</span>
          {headerAction}
        </div>

        {channels.length > 0 && (
          <div className="flex flex-col">
            {channels.map((ch, i) => {
              // Only ever highlighted on the active card — an inactive card's
              // "current" channel still renders plain, same as every other row.
              const highlighted = active && channelKey(ch) === effectiveCurrentKey;
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
                  // Keeps the hover-preview popover open (and its close
                  // timer disarmed) for as long as this row's own kebab
                  // dropdown is open — see `handleChannelMenuOpenChange`'s
                  // doc comment above.
                  onMenuOpenChange={(open) => handleChannelMenuOpenChange(channelKey(ch), open)}
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
                  onSelect={() => {
                    // Unconditional even when controlled — harmless (ignored
                    // by `effectiveCurrentKey` while `currentChannelKey` is
                    // defined) and keeps the uncontrolled path unchanged.
                    setManualCurrentKey(channelKey(ch));
                    onCurrentChannelChange?.(channelKey(ch));
                  }}
                />
              );
            })}
          </div>
        )}
      </>
    );

    // The expanded card's own outer chrome (border/shadow/background),
    // shared between the real expanded return and the hover popover's
    // preview of it — same reasoning as `cardBody` above.
    const expandedCardClassName = cn(
      "flex w-full cursor-pointer flex-col overflow-hidden rounded-lyra-sm border-y border-r bg-lyra-bg-surface-base text-left transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
      active ? "border-l-4" : "border-l",
      // Active cards get a permanent `shadow-md` (the "elevated" token per
      // Shadows.stories.tsx); inactive cards stay flat, hover or not — the
      // real expanded (rail-expanded) card intentionally has no hover
      // shadow. Only the compact tile below (and its hover-popover preview,
      // which reuses this same class) gets a hover shadow — see that
      // branch's own comment for why the drop shadow is scoped to the
      // collapsed rail specifically, per an explicit follow-up request.
      active && "shadow-md",
      // Border color reflects active state first — an inactive card never
      // gets the red "needs attention" border, even when awaiting a
      // response (that's conveyed via the channel chip / avatar badge
      // instead). Only an active card that's also awaiting response
      // shows red; every other active card shows the blue active border.
      //
      // Each branch also gets a `hover:` darkening of that same border,
      // per an explicit follow-up request ("darker border color... around
      // the entire card" — this is the card's own outer chrome, shared by
      // both the real expanded card and the compact tile's hover-popover
      // preview above, which is why this lives here rather than as a
      // one-off on either render path). Two different techniques, deliberately:
      //  - The inactive card's `border-subtle` (rgba(0,0,0,.10) /
      //    rgba(255,255,255,.10), lyra-tokens.css) darkens to the real next
      //    tier up, `border-default` (.16 alpha) — an actual token that
      //    already exists for exactly this "a little darker than subtle"
      //    step, in both themes.
      //  - `border-active` (#166cca / #4896ec) and `status-critical-strong`
      //    (#bc2626 / #fa7f7f) have no such next-darker token — each is
      //    already its theme's most saturated tier, and `border-focus`
      //    isn't a substitute (it's yellow in dark mode, a focus-ring
      //    color, not a "darker active" one). `color-mix()` toward black
      //    is used instead, computed against whichever theme's value the
      //    token already resolves to, so it darkens correctly in both
      //    themes without hardcoding either one's hex directly.
      active
        ? awaitingResponse
          ? "border-lyra-status-critical-strong hover:border-[color-mix(in_srgb,var(--lyra-color-status-critical-strong)_80%,black_20%)]"
          : "border-lyra-border-active hover:border-[color-mix(in_srgb,var(--lyra-color-border-active)_80%,black_20%)]"
        : "border-lyra-border-subtle hover:border-lyra-border-default"
    );

    /* ── Compact: icon-rail avatar tile ── */
    if (!expanded) {
      return (
        <Popover
          open={hoverCardOpen}
          onOpenChange={setHoverCardOpen}
          placement="right"
          align="start"
          sideOffset={8}
          showArrow={false}
          // Hover-opened, not click-opened — stealing focus into the
          // popover the instant the pointer happens to land on the tile
          // would be disruptive (and isn't what a hover preview is for).
          onOpenAutoFocus={(e) => e.preventDefault()}
          // Radix's default on close is to return focus to the trigger —
          // exactly the compact tile itself, which (per its own onFocus
          // doc comment below) opens this same popover on focus. Left
          // unguarded, EVERY close (the 150ms mouse-away timer, Escape,
          // clicking elsewhere) refocused the tile, which immediately
          // reopened it right back — a close that never actually stuck,
          // confirmed live: `openHoverCard` firing again in the same tick
          // right after the close timer fired. This was also the real
          // cause of "hovering one tile sometimes opens a different one" —
          // with a card stuck permanently reopening itself, a second,
          // genuinely-hovered tile's own preview could end up rendered
          // alongside a first one that visually never left. Same "don't
          // hand focus back to the trigger on close" fix already
          // established for `TagPicker` (tag-picker.tsx) — this is that
          // same fix, just missing here until now.
          onCloseAutoFocus={(e) => e.preventDefault()}
          // Each channel row's kebab menu (`KebabMenuButton`, built on
          // `MenuRadix`/Radix DropdownMenu) portals its own dropdown content
          // straight to `document.body` — outside this hover popover's own
          // DOM subtree — same as every other Radix Popper-based primitive
          // (Popover, Select, DropdownMenu, Tooltip all share
          // `@radix-ui/react-popper` under the hood, and every one of their
          // portaled Content nodes gets wrapped in a
          // `[data-radix-popper-content-wrapper]` div). Radix's own
          // outside-interaction detection has no way to know that dropdown
          // "belongs" to this popover, so clicking a kebab item registers as
          // an interaction outside *this* popover's content and closes the
          // whole hover card out from under the menu — see the identical fix
          // for `FilterChip`'s nested dropdown-in-overflow-panel case
          // (CONTRIBUTING.md §17).
          onInteractOutside={(e) => {
            if ((e.target as Element)?.closest?.("[data-radix-popper-content-wrapper]")) {
              e.preventDefault();
            }
          }}
          // The preview card below already supplies its own complete
          // chrome (border/background/shadow, via `expandedCardClassName`)
          // matching the real expanded card exactly, so this popover's own
          // default panel styling is stripped down to a bare, invisible
          // frame around it — same "let the real content supply its own
          // chrome" convention `OutboundAddButton`'s Menu-in-Popover uses
          // in create-new.tsx.
          className="z-[9999] w-64 rounded-lyra-sm border-0 bg-transparent p-0 shadow-none"
          // The preview card below supplies its own complete chrome (see
          // the comment above `className`) — Popover's default 16px body
          // inset would add an unwanted gap between this bare frame and
          // that card's own edges.
          bodyPadding={false}
          content={
            <div
              // Re-arms the open state on its own hover so moving the
              // pointer from the tile into this preview (to actually read
              // it or click something in it) doesn't let the close timer
              // started by leaving the tile go on to close it.
              onMouseEnter={openHoverCard}
              onMouseLeave={scheduleCloseHoverCard}
              // Keyboard equivalent of the mouseenter/mouseleave pair above
              // — see the compact tile's own `onFocus`/`onBlur` doc comment
              // below for why this needs to exist at all. React's
              // `onFocus`/`onBlur` bubble (unlike native `focus`/`blur`),
              // so these fire for a focus landing on ANY descendant here —
              // the "+" headerAction, a channel row, its kebab button —
              // not just this wrapper div itself, exactly mirroring how
              // `onMouseEnter`/`onMouseLeave` already re-arm/disarm the
              // close timer for the mouse case above. Tabbing onward from
              // the compact tile into this now-open preview keeps it open;
              // tabbing past its last focusable element with nothing else
              // grabbing focus within `scheduleCloseHoverCard`'s own delay
              // lets it close, same as moving the mouse away.
              onFocus={openHoverCard}
              onBlur={scheduleCloseHoverCard}
              role="button"
              tabIndex={0}
              onClick={onClick}
              onKeyDown={handlePreviewContentKeyDown}
              ref={previewContentRef}
              aria-label={ariaLabel}
              // `shadow-md` added here only (not baked into
              // `expandedCardClassName` itself, which the real expanded
              // card also uses and should stay flat) — always on while this
              // preview is shown, not just conditional on hover, per an
              // explicit follow-up ("this should always be there"). Skipped
              // when `active`, which already carries its own permanent
              // shadow via `expandedCardClassName`.
              className={cn(expandedCardClassName, !active && "shadow-md")}
            >
              {cardBody}
            </div>
          }
        >
          <div
            ref={setTileRef}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleTileKeyDown}
            onMouseEnter={openHoverCard}
            onMouseLeave={scheduleCloseHoverCard}
            // Keyboard equivalent of the hover pair above — per explicit
            // accessibility request: this compact tile's own popover
            // preview (`content` above) is the ONLY way to reach anything
            // in the expanded card — the "+" headerAction, each channel
            // row, its kebab menu (Outcome/Consult-Transfer/etc.) — and
            // Radix's `Popover.Content` isn't even mounted into the DOM
            // while closed, so a keyboard user tabbing to this tile
            // previously had no way to open it at all: pressing Tab again
            // just skipped straight past every bit of that content to the
            // next rail item. Opening on focus (and closing on blur, via
            // the exact same `openHoverCard`/`scheduleCloseHoverCard`
            // functions the mouse handlers already use — including their
            // existing "don't close while a channel row's own kebab
            // dropdown is open" guard) makes tabbing here behave like
            // hovering it, with no change to the mouse experience at all.
            onFocus={openHoverCard}
            onBlur={scheduleCloseHoverCard}
            aria-label={ariaLabel}
            aria-current={active ? "true" : undefined}
            className={cn(
              // `mb-2` lives here (on the item itself) rather than as a `gap` on
              // LeftNav's wrapping container, so spacing between cards — and
              // between the last card and the nav list below it — only appears
              // when there's an actual rendered tile to carry it. A parent `gap`
              // would still reserve that space even with zero interactions open,
              // since LeftNav's `header` slot is an always-truthy React node
              // (a Fragment around a `.map()`) even when it renders nothing.
              "flex cursor-pointer flex-col items-center gap-1 rounded-lyra-sm p-1.5 mb-2 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
              // No shadow on the tile itself, hover or not — per an explicit
              // follow-up, the drop shadow belongs only on the hover-popover
              // preview card above (the thing that actually appears on
              // hover), not this small icon-rail square.
              //
              // Background driven by `hoverCardOpen` state, not CSS `:hover`
              // — the pointer leaves this tile's own DOM node the moment it
              // moves into the preview popover next to it, which would
              // otherwise drop the `:hover` pseudo-class (and the
              // background with it) even though the preview it triggered is
              // still open and the tile should still read as "the one being
              // shown." `hoverCardOpen` stays true across that move (the
              // preview's own onMouseEnter re-arms it), so the background
              // does too.
              active ? "bg-lyra-bg-surface-base shadow-sm" : hoverCardOpen && "bg-lyra-state-hover",
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
                {hasCustomerName || !primaryChannel ? initials : CHANNEL_TYPE_META[primaryChannel.type].icon}
              </span>
              {channelCount > 1 && (
                <span
                  className={cn(
                    "absolute -left-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-bold text-lyra-fg-on-primary",
                    // Blue by default — only switches to the same critical
                    // red the avatar/border already use once the
                    // interaction is actually awaiting a response. This
                    // badge is just a count, not itself a "needs attention"
                    // signal, so it shouldn't default to red the way a
                    // notification badge would.
                    awaitingResponse ? "bg-lyra-bg-destructive" : "bg-lyra-bg-primary"
                  )}
                  aria-label={`${channelCount} open channels`}
                >
                  <span aria-hidden="true">{channelCount}</span>
                </span>
              )}
              {awaitingResponse && (
                /* Bottom-right corner (was top-right), now a small `Badge`
                   dot (`size="sm"` — Badge's own size vocabulary) instead
                   of a bespoke span, so this dot indicator shares the same
                   implementation as every other corner badge in the
                   library. */
                <Badge
                  shape="circle"
                  dot
                  variant="critical"
                  size="sm"
                  className="absolute bottom-[-2px] right-[-2px] ring-2 ring-lyra-bg-surface-shell"
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="lyra-body-xs text-lyra-fg-secondary" aria-hidden="true">{elapsed}</span>
          </div>
        </Popover>
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
        // `mb-2` (not baked into `expandedCardClassName`, which the compact
        // mode's hover-popover preview above also uses — that preview floats
        // in a Popover and shouldn't pick up a bottom margin) — same
        // per-item-not-parent-gap spacing as the compact tile above.
        className={cn(expandedCardClassName, "mb-2", className)}
      >
        {cardBody}
      </div>
    );
  }
);
InteractionNavItem.displayName = "InteractionNavItem";

export type { InteractionChannel, ChannelType } from "./channel-row";
export { InteractionNavItem };
