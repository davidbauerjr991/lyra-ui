import * as React from "react";
import { useRef, useCallback, useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { KebabMenuButton } from "./kebab-menu-button";
import { Menu, type MenuEntry } from "./menu";
import { Tooltip } from "./tooltip";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/* ── Tab List (container with bottom border) ── */

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When true, tabs stretch to fill the full width */
  fullWidth?: boolean;
  /**
   * Native responsive overflow behavior. Reacts to this `TabList`'s own
   * available width via a CSS container query (not the viewport — a docked
   * side panel, a narrow card, or any other layout squeeze can make this
   * width small for reasons that have nothing to do with the browser
   * window). Once that width drops to 400px or below, the row collapses to
   * exactly two full-width slots: the active tab, and a "{n} More" dropdown
   * listing every other tab, in its original order (e.g. a record detail
   * panel's Overview/Details/Tickets/Accounts/... tab bar). Selecting a
   * tab from the dropdown just changes which `Tab` has `active` — the
   * "other tabs" list is re-derived fresh from `children` order on every
   * render, so the tab that was active a moment ago reappears in the
   * dropdown at its original position automatically; nothing here tracks
   * or reorders anything itself.
   *
   * Off by default so it's an explicit opt-in per `TabList` — but it's the
   * standing default for any new tab bar (see CLAUDE.md/CONTRIBUTING.md):
   * turn it on unless that `TabList` already has its own different,
   * purpose-built collapse strategy. `ChannelTab` (`channel-row.tsx`) used
   * to be the one documented exception (shedding each tab's own text at
   * its own narrower breakpoints instead of moving tabs into a menu); that
   * bespoke behavior was removed and `ChannelTab` bars now just use this
   * prop like any other `TabList`.
   */
  overflowMenu?: boolean;
  /**
   * How `overflowMenu` decides when to collapse (default: `"wide"`).
   *
   * `"wide"` — a fixed ≤400px CSS container-query threshold (see the doc
   * comment above; originally 991px, lowered per explicit request once
   * `Tab`'s own shrink-disabling + `max-w-[22ch]` cap gave the scrollable
   * state below real room to fire before the row collapses instead of
   * being preempted by it every time), tuned for a wide record-detail
   * page's own tab bar. Above that threshold, the full row also becomes
   * horizontally scrollable on its own — if the tabs' natural width
   * exceeds the row's available width (but the row hasn't yet dropped to
   * ≤400px), left/right chevron buttons appear at each end to scroll one
   * tab at a time (native scroll/trackpad/arrow-key-driven-focus scrolling
   * all still work; the chevrons are just an explicit affordance) instead
   * of the row silently overflowing or clipping. Once the row actually
   * crosses the ≤400px threshold, this scrollable state is replaced by the
   * collapsed "active tab + N More" row below, same as always.
   *
   * `"compact"` — content-aware instead of a fixed threshold: measures
   * whether the tabs actually fit their available width (via a hidden,
   * unconstrained clone + `ResizeObserver`), rather than guessing a pixel
   * number tuned to one specific tab set. Meant for hosts where a fixed
   * threshold would be basically always wrong — either a narrow,
   * resizable panel like `InteriorPanel`'s own tabs (200–425px wide, see
   * interior-panel.tsx) whose whole range sits below "wide" mode's own
   * fixed 400px trigger, or (the opposite problem) a row that SHARES its
   * space with sibling buttons/dividers, where the tabs' own genuinely
   * available width has no fixed relationship to any single container
   * breakpoint (e.g. `AgentNextGenPage.tsx`'s record-header tabs, sharing
   * a row with a Customer Information toggle button whose OWN icon-only
   * breakpoint is a different pixel value entirely — a fixed CSS
   * threshold on the tabs read as arbitrary and disconnected from what
   * was actually changing on screen).
   *
   * Same three-state progression `"wide"` mode's own row goes through —
   * full row, then a horizontally-scrollable strip with chevrons once the
   * tabs' real content stops fitting, then "active tab + N More" (equal-
   * width slots) once even that's too cramped
   * (`TAB_LIST_COMPACT_COLLAPSE_WIDTH`, currently 400px of this
   * `TabList`'s own real rendered width) — just driven by this mode's own
   * measured fit rather than "wide" mode's fixed container-query
   * threshold. Unlike an earlier version of this mode, there's no
   * separate "stretch 2 tabs instead of collapsing" carve-out — collapses
   * at 2+ tabs same as 3+ (`allowOverflowCollapse`'s own doc comment),
   * per explicit request for one consistent overflow behavior across
   * every `TabList` in the design system regardless of tab count.
   *
   * Note: the hidden measurement clone duplicates `children` in the DOM
   * (aria-hidden, non-interactive) purely to read its natural width —
   * avoid `"compact"` for a `TabList` whose children rely on
   * globally-unique `id`/`panelId` values.
   */
  overflowBreakpoint?: "wide" | "compact";
  /** Formats the dropdown trigger's label from the number of tabs it
   *  holds (every tab except the active one). Defaults to `"{n} More"`. */
  overflowMoreLabel?: (count: number) => string;
  /**
   * Enables click-and-drag reordering of this `TabList`'s tabs — the same
   * whole-element-is-the-handle, native HTML5 drag-and-drop convention
   * `useColumnReorder`'s `SortableTableHead` already uses for table
   * columns (mouse/pointer-driven only, no keyboard alternative, matching
   * that existing precedent rather than inventing a second convention).
   *
   * `TabList` doesn't own tab order itself — `children`'s own render order
   * IS the current order, same as always — so this only reports the
   * *result* of a drag via `onReorder`; the consumer applies it to
   * whatever state actually drives `children`'s order (e.g. re-sorting an
   * array before mapping it to `<Tab>`s) and the reordered `children` flow
   * back down on the next render.
   *
   * Each direct `Tab` child must have a stable, unique `key` — used as its
   * drag identity and as the string each entry in `onReorder`'s array is.
   * A `Tab` with no `key` is rendered normally but isn't made draggable
   * (there'd be no stable identity to report), so give every tab one when
   * turning this on.
   *
   * Scoped to the always-rendered tab row itself — if this `TabList` also
   * collapses via `overflowMenu` (its own `compactCollapsed`/≤400px
   * states), dragging only works while that row is actually visible, not
   * from the collapsed "N More" dropdown or the collapsed row's single
   * visible active-tab slot.
   */
  reorderable?: boolean;
  /** Called with the new key order once a drag-reorder completes. Required
   *  for `reorderable` to have any visible effect — see its doc comment. */
  onReorder?: (order: string[]) => void;
  /**
   * Only meaningful alongside `overflowMenu` (default: `false`). Makes this
   * `TabList`'s own outer wrapper (the actual top-level node it renders
   * once `overflowMenu` is on — see that wrapper's own doc comment) a
   * `flex-1` flex item, so it claims the rest of its row instead of sizing
   * to its own near-content-less `container-type`-constrained width. Needed
   * for a tab bar sharing a horizontal row with sibling buttons/dividers
   * (e.g. a record header's "Customer History | SMS | Voice | ... | +"
   * row) — without it, this wrapper can end up measuring itself as
   * genuinely narrow regardless of how much room the row actually has,
   * collapsing the `overflowMenu` breakpoint early.
   *
   * Opt-in rather than a standing default specifically because `flex-1`
   * isn't safe to assume: it's a no-op in a *row*-direction flex ancestor
   * with room to spare, but actively wrong in a *column*-direction one (a
   * page's own vertical header/tabs/content stack) — there, `flex-grow`
   * makes this `TabList` greedily claim the remaining *vertical* space
   * instead, stretching the tab row itself and opening a large blank gap
   * above whatever content follows it. Turn this on only for a `TabList`
   * that's actually a flex *row* item competing for horizontal space with
   * real siblings; leave it off for one that's simply the next block in a
   * vertical stack (the common case — most `TabList`s render below a page/
   * panel header with nothing beside them).
   */
  growToFillRow?: boolean;
}

// Below this width, `overflowBreakpoint="compact"`'s own content-measured
// overflow state (`compactScrolling`) gives up on the chevron/scroll strip
// and collapses to "active tab + N More" (`compactCollapsed`) instead — the
// same numeric value `"wide"` mode's own fixed CSS `@container` query used
// to gate its analogous scroll-vs-collapse switch, kept here as the point
// past which even a single active tab plus chevrons doesn't leave
// meaningfully more room than the collapsed row would, not as a hard rule
// tied to any one consumer's container. See `overflowBreakpoint`'s own doc
// comment above for the full three-state progression this drives.
const TAB_LIST_COMPACT_COLLAPSE_WIDTH = 400;

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      className,
      fullWidth,
      overflowMenu,
      overflowBreakpoint = "wide",
      overflowMoreLabel = (count) => `${count} More`,
      reorderable,
      onReorder,
      onKeyDown,
      children,
      growToFillRow = false,
      ...props
    },
    ref
  ) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [overflowOpen, setOverflowOpen] = useState(false);
    const [overflowPosition, setOverflowPosition] = useState<{ top: number; left: number; width: number; maxHeight?: number } | null>(null);
    const overflowTriggerRef = useRef<HTMLButtonElement>(null);
    const overflowMenuRef = useRef<HTMLDivElement>(null);
    // Declared unconditionally up here (hooks can't be conditional) even
    // though it's only ever read/written further down, past the
    // `if (!overflowMenu) return tablistEl` early return — see this
    // state's own read/write sites (`openOverflowMenu`'s `setOverflowEntries`
    // call, and the `<Menu items={overflowEntries} .../>` render) for the
    // full reasoning.
    const [overflowEntries, setOverflowEntries] = useState<MenuEntry[]>([]);

    // ── "compact" content-aware measurement ──
    // `compactMeasureRef` is a hidden, unconstrained clone of the tab row
    // (absolutely positioned, `whiteSpace: nowrap`, no wrapping ancestor to
    // shrink it) — its `scrollWidth` is exactly how much space all the tabs
    // need laid out in a single row with nothing squeezing them. Comparing
    // that to `compactWrapRef`'s actual `clientWidth` (via `ResizeObserver`,
    // since a docked/resizable panel can change width without the browser
    // window resizing) tells us whether the real, visible row would clip —
    // collapsing only when it actually would, not at some pre-guessed pixel
    // number. Re-measures whenever `children` changes too, since a
    // different tab set needs a different amount of space.
    const compactWrapRef = useRef<HTMLDivElement>(null);
    const compactMeasureRef = useRef<HTMLDivElement>(null);
    const [compactCollapsed, setCompactCollapsed] = useState(false);
    // True whenever the tabs' real content doesn't fit but
    // `compactWrapRef`'s own rendered width is still ≥
    // `TAB_LIST_COMPACT_COLLAPSE_WIDTH` — the tabs hold their natural width
    // (`[&>[role='tab']]:flex-shrink-0` below) and scroll horizontally with
    // chevrons instead of collapsing straight to "active tab + N More",
    // same intermediate state "wide" mode's own `hasScrollableOverflow`
    // provides, just driven by this mode's own measured fit rather than a
    // fixed CSS threshold. Mutually exclusive with `compactCollapsed` (see
    // `recompute` below) — never both at once.
    const [compactScrolling, setCompactScrolling] = useState(false);
    const isCompact = overflowMenu && overflowBreakpoint === "compact";

    useLayoutEffect(() => {
      if (!isCompact) return;
      const wrapEl = compactWrapRef.current;
      const measureEl = compactMeasureRef.current;
      if (!wrapEl || !measureEl) return;

      const recompute = () => {
        const wouldOverflow = measureEl.scrollWidth > wrapEl.clientWidth;
        if (!wouldOverflow) {
          setCompactCollapsed(false);
          setCompactScrolling(false);
          return;
        }
        // Below `TAB_LIST_COMPACT_COLLAPSE_WIDTH`: collapse to "active tab +
        // N More" instead of leaving a scrollable strip too cramped to be
        // useful. At or above it: scroll instead — see that const's own doc
        // comment for why this specific number, and `compactScrolling`'s
        // own doc comment for the "wide" mode parallel. No `allowOverflowCollapse`-
        // style tab-count gate here (unlike an earlier version of this
        // effect) — per explicit request, this collapses at 2 tabs same as
        // 3+, one consistent overflow behavior regardless of count. See
        // `allowOverflowCollapse`'s own doc comment below (shared by both
        // modes) for the same change there.
        const collapse = wrapEl.clientWidth < TAB_LIST_COMPACT_COLLAPSE_WIDTH;
        setCompactCollapsed(collapse);
        setCompactScrolling(!collapse);
      };
      recompute();

      const ro = new ResizeObserver(recompute);
      ro.observe(wrapEl);
      return () => ro.disconnect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCompact, children]);

    // ── "wide" mode's own scroll-with-chevrons state ──
    // Only meaningful when `overflowMenu` is on with the default `"wide"`
    // breakpoint — the bridge state between "everything fits" and "the row
    // has actually dropped to ≤400px and collapsed to the 2-slot row" (see
    // `overflowBreakpoint`'s doc comment). `listRef` (already the real
    // `role="tablist"` element) doubles as the scroll container here — no
    // second ref needed.
    //
    // Uses the same shared hover-driven chevron affordance as `Select`'s
    // multi-select listbox and `MenuRadix` (`scroll-chevron.tsx`) instead of
    // this row's own former click-to-scroll-one-tab implementation
    // (`scrollTabsBy`, discrete `scrollTo({ behavior: "smooth" })` steps) —
    // per explicit request to match that hover behavior here too: hovering
    // a chevron scrolls continuously (a `requestAnimationFrame` loop that
    // runs for as long as the pointer stays over it) with no click needed,
    // rather than one click moving exactly one tab. `canScrollStart`/
    // `canScrollEnd` (left/right here) already double as the old
    // `tabOverflow` gate too — when nothing overflows, `scrollWidth` never
    // exceeds `clientWidth`, so both come back `false` and neither chevron
    // renders; no separate flag needed.
    const isWideOverflow = Boolean(overflowMenu) && overflowBreakpoint === "wide";
    // Scrolling only makes sense with >1 tab — with a single tab, hovering
    // the chevrons would just pan that one tab's own label back and forth
    // in place, revealing nothing new. In that case the row should behave
    // like a plain flex item instead: `Tab`'s own `min-w-0` + `truncate`
    // (tabs.tsx, `Tab`'s `labelRef` span) already handles a too-long label
    // fine on its own once `flex-shrink-0` below isn't forcing it to hold
    // its full natural width. Everything else about `isWideOverflow` (the
    // `.lyra-tab-overflow-full` CSS class, the ≤400px collapse threshold)
    // is unaffected — this only gates the scroll/chevron-specific styling
    // and handlers further down.
    //
    // `React.Children.toArray`, NOT `React.Children.count` — callers here
    // (`AgentNextGenPage.tsx`'s record-header `TabList`) mix real `Tab`s
    // with a conditional slot (`{historyConversationForActive && <Tab .../>}`),
    // and `Children.count` counts that slot even while it's `false` and
    // rendering nothing — confirmed live: a single real tab still measured
    // as "2 children" and stayed in scroll mode. `Children.toArray` drops
    // null/undefined/boolean children entirely, so it reflects what's
    // actually on screen.
    const hasScrollableOverflow = isWideOverflow && React.Children.toArray(children).length > 1;
    // Same idea as `hasScrollableOverflow` just above, but covering BOTH
    // modes' own "genuinely scrolling right now" state — `"wide"`'s own
    // (CSS-container-driven) or `"compact"`'s `compactScrolling` (content-
    // measured). Drives every piece of `tablistEl`'s own scroll-specific
    // wiring below (the `overflow-x-auto`/`flex-1`/`min-w-0`/
    // `lyra-scrollbar-hide` classes, the `onScroll` handler) — previously
    // gated on `hasScrollableOverflow` alone, which left `"compact"` mode's
    // own scrolling state with none of that wiring even though it now
    // renders the exact same chevron-flanked `tablistEl` (see `leftChevron`/
    // `rightChevron` and the `isCompact` return branch, both below).
    const showChevronScroll = hasScrollableOverflow || (isCompact && compactScrolling);
    // True at 2+ tabs — collapses to "active tab + N More" (equal-width
    // slots, `collapsedRowEl` below) once the row can't fit them, same
    // threshold `"compact"` mode's own `recompute` effect above now uses.
    // Used to require 3+ (collapsing exactly 2 tabs down to "the active one
    // + a 1-item dropdown" was judged not worth an extra click when both
    // slots still render either way) — lowered per explicit follow-up
    // request for one consistent overflow behavior across every `TabList`
    // regardless of tab count, rather than a special 2-tab carve-out that
    // stretched instead. Computed here (not down by `childArray` below,
    // where it's consumed the most) since `tablistEl`'s own
    // `.lyra-tab-overflow-full` className needs it too, and that's built
    // well before `childArray` exists.
    // `Children.toArray`, not `Children.count` — same reasoning as
    // `hasScrollableOverflow` just above: a conditional `Tab` slot that's
    // currently `false` shouldn't count toward "how many real tabs are
    // here" for this collapse-eligibility check either.
    const allowOverflowCollapse = React.Children.toArray(children).length > 1;
    // Mirrors the CSS `@container (max-width: 400px)` threshold that
    // actually drives which of the two rows (`tablistEl` vs.
    // `collapsedRowEl`) is visually shown (`.lyra-tab-overflow-full`/
    // `-collapsed`, lyra-tokens.css) — in JS, purely so the ACTIVE tab's
    // `outcome` config (`ChannelTab`'s own Outcome popover, channel-
    // row.tsx) can be handed to whichever of its two rendered copies is
    // actually on screen, and stripped from the other.
    //
    // Both `tablistEl`'s own copy of the active tab AND `collapsedRowEl`'s
    // `cloneElement` mirror of it are ALWAYS mounted simultaneously once
    // there are >2 tabs (`allowOverflowCollapse`) — only one is ever
    // CSS-visible at a time, but the OTHER is still a real, live component
    // instance, not actually removed from the tree. For a plain `Tab` that
    // was harmless (an inert visual duplicate). It stopped being harmless
    // the moment a channel tab carried its own externally-shared,
    // independently-poppable `outcome.open` state (`ChannelTab`): both
    // copies read the SAME shared value, so the instant it turned `true`,
    // BOTH mounted their OWN `Popover`, portaling two separate "Log
    // Outcome" panels at once — confirmed via screenshot, reported for
    // "the last tab in the list" specifically (the LAST tab is the one
    // `activeIndex` defaults to whenever nothing else is explicitly
    // `active`, so it's the one most likely to be both the active channel
    // AND the one this duplication actually affects).
    //
    // Only observed when it's actually needed (`isWideOverflow &&
    // allowOverflowCollapse` — 2-or-fewer tabs never render
    // `collapsedRowEl` at all, so there's no second copy to disambiguate)
    // — see the effect below.
    const wrapRef = useRef<HTMLDivElement>(null);
    const [isNarrow, setIsNarrow] = useState(false);
    useLayoutEffect(() => {
      if (!isWideOverflow || !allowOverflowCollapse) return;
      const el = wrapRef.current;
      if (!el) return;
      const recompute = () => setIsNarrow(el.getBoundingClientRect().width <= 400);
      recompute();
      const ro = new ResizeObserver(recompute);
      ro.observe(el);
      return () => ro.disconnect();
    }, [isWideOverflow, allowOverflowCollapse]);
    const { canScrollStart: canScrollLeft, canScrollEnd: canScrollRight, recompute: updateTabScrollState } =
      useScrollChevrons(listRef, [isWideOverflow, children], "horizontal");

    // The hook above only recomputes on mount + when `deps` change (see its
    // own doc comment — that's enough for a dropdown's fixed-at-open-time
    // list, but this row's available width can change at any time as its
    // container resizes) — so still own a `ResizeObserver` here to call its
    // `recompute` continuously, same as before.
    useLayoutEffect(() => {
      if (!isWideOverflow) return;
      const el = listRef.current;
      if (!el) return;
      const ro = new ResizeObserver(updateTabScrollState);
      ro.observe(el);
      return () => ro.disconnect();
    }, [isWideOverflow, updateTabScrollState]);

    const scrollTabsStep = useCallback((delta: number) => {
      listRef.current?.scrollBy({ left: delta });
    }, []);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        onKeyDown?.(e);
        const list = listRef.current;
        if (!list) return;

        const tabs = Array.from(
          list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])')
        );
        const current = document.activeElement as HTMLElement;
        const index = tabs.indexOf(current);
        if (index === -1) return;

        let next: HTMLElement | undefined;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          next = tabs[(index + 1) % tabs.length];
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          next = tabs[(index - 1 + tabs.length) % tabs.length];
        } else if (e.key === "Home") {
          e.preventDefault();
          next = tabs[0];
        } else if (e.key === "End") {
          e.preventDefault();
          next = tabs[tabs.length - 1];
        }

        if (next) {
          next.focus();
          next.click();
        }
      },
      [onKeyDown]
    );

    // ── `reorderable` drag-and-drop state ──
    // Purely local UI feedback (which key is currently being dragged over,
    // for the highlight below) plus the transient "what's mid-drag" ref —
    // never the tab order itself, which stays fully owned by the consumer
    // (see `reorderable`'s own doc comment). Mirrors `useColumnReorder`'s
    // internal drag bookkeeping in table.tsx, minus the `columnOrder` state
    // that hook owns and this one deliberately doesn't.
    const [reorderDragOverKey, setReorderDragOverKey] = useState<string | null>(null);
    const reorderDragKeyRef = useRef<string | null>(null);

    const handleReorderDragStart = useCallback((e: React.DragEvent, key: string) => {
      reorderDragKeyRef.current = key;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", key);
      if (e.currentTarget instanceof HTMLElement) e.currentTarget.style.opacity = "0.5";
    }, []);

    const handleReorderDragOver = useCallback((e: React.DragEvent, key: string) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (key !== reorderDragKeyRef.current) setReorderDragOverKey(key);
    }, []);

    const handleReorderDrop = useCallback(
      (e: React.DragEvent, targetKey: string, currentOrder: string[]) => {
        e.preventDefault();
        setReorderDragOverKey(null);
        const sourceKey = reorderDragKeyRef.current;
        reorderDragKeyRef.current = null;
        if (!sourceKey || sourceKey === targetKey) return;
        const next = [...currentOrder];
        const fromIdx = next.indexOf(sourceKey);
        const toIdx = next.indexOf(targetKey);
        if (fromIdx === -1 || toIdx === -1) return;
        next.splice(fromIdx, 1);
        next.splice(toIdx, 0, sourceKey);
        onReorder?.(next);
      },
      [onReorder]
    );

    const handleReorderDragEnd = useCallback((e: React.DragEvent) => {
      if (e.currentTarget instanceof HTMLElement) e.currentTarget.style.opacity = "";
      setReorderDragOverKey(null);
      reorderDragKeyRef.current = null;
    }, []);

    const handleReorderDragLeave = useCallback(() => setReorderDragOverKey(null), []);

    // Attaches the drag handlers above to each direct `Tab` child that has
    // a `key` (see `reorderable`'s doc comment — a keyless tab is left
    // exactly as-is, just not draggable). `Tab`'s own `TabProps` already
    // extends `ButtonHTMLAttributes`, so `draggable`/`onDragStart`/etc. are
    // valid props that land on its real underlying `<button>` via `Tab`'s
    // own `{...props}` spread — no changes needed to `Tab` itself.
    //
    // Reads each child's key from the `React.Children.map` CALLBACK
    // ARGUMENT, not from the array `React.Children.toArray`/`.map` itself
    // return — those return re-keyed clones (React prefixes every key with
    // a positional path, e.g. `"home"` becomes `".$home"`, to keep keys
    // unique when lists get flattened/nested), so reading `.key` off the
    // OUTPUT silently hands the consumer's `onReorder` these mangled,
    // prefixed strings instead of the real keys it authored its tabs with —
    // a real, shipped bug caught via manual testing (dragging a tab made
    // the whole row appear to vanish, since the reordered array's values no
    // longer matched anything the consumer's own render logic recognized).
    // The callback argument itself is always the untouched original
    // element, so its `.key` is the true developer-supplied one; collecting
    // it into `orderedKeys` as a side effect during this same pass (rather
    // than a second `toArray` pass) keeps every downstream closure (each
    // tab's own `onDrop`) referencing that one true, shared array.
    const orderedKeys: string[] = [];
    // Neutralizes the ACTIVE tab's `outcome` prop (`ChannelTab`'s own
    // Outcome popover config, channel-row.tsx) on THIS copy specifically
    // whenever `collapsedRowEl`'s separate `cloneElement` mirror of that
    // same tab is the one actually visible right now (`isNarrow` — see
    // that state's own doc comment above) — the two-live-copies-of-the-
    // active-tab duplicate-popover bug this whole block exists to fix.
    // Every OTHER child (every non-active tab, plus the active one
    // whenever THIS row is the visible copy instead) passes through with
    // its real `outcome` intact.
    const stripOutcomeFromActive = isWideOverflow && allowOverflowCollapse && isNarrow;
    const renderedChildren = reorderable || stripOutcomeFromActive
      ? React.Children.map(children, (child) => {
          if (!React.isValidElement<TabProps>(child)) return child;
          const key = child.key != null ? String(child.key) : null;
          const overrides: Record<string, unknown> = {};
          if (reorderable && key != null) {
            orderedKeys.push(key);
            overrides.draggable = true;
            overrides.onDragStart = (e: React.DragEvent) => handleReorderDragStart(e, key);
            overrides.onDragOver = (e: React.DragEvent) => handleReorderDragOver(e, key);
            overrides.onDrop = (e: React.DragEvent) => handleReorderDrop(e, key, orderedKeys);
            overrides.onDragEnd = handleReorderDragEnd;
            overrides.onDragLeave = handleReorderDragLeave;
            overrides.className = cn(
              "cursor-grab active:cursor-grabbing",
              reorderDragOverKey === key && "bg-lyra-bg-active-moderate",
              child.props.className
            );
          }
          if (stripOutcomeFromActive && child.props?.active) {
            overrides.outcome = undefined;
          }
          return Object.keys(overrides).length > 0 ? React.cloneElement(child, overrides) : child;
        })
      : children;

    // Close the overflow dropdown on outside click / Escape — same pattern
    // as `KebabMenuButton`'s own portal dropdown.
    useEffect(() => {
      if (!overflowOpen) return;
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          overflowMenuRef.current && !overflowMenuRef.current.contains(e.target as Node) &&
          overflowTriggerRef.current && !overflowTriggerRef.current.contains(e.target as Node)
        ) setOverflowOpen(false);
      };
      const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOverflowOpen(false); };
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [overflowOpen]);

    // Keep the overflow dropdown on-screen. `openOverflowMenu` below only
    // knows the TRIGGER's position when it fires (before the menu itself
    // has ever rendered, so its real height isn't knowable yet) and always
    // guesses "open downward, full height" — fine when there's room, but
    // with a long tab list (or a trigger sitting low in a docked panel) that
    // guess routinely runs the dropdown past the bottom of the viewport
    // (confirmed via screenshot: the last couple of rows rendered off the
    // bottom edge with nothing to catch them). This runs once the guessed
    // position has actually put the menu in the DOM (`overflowMenuRef` is
    // only non-null after that commit), measures its real rendered size,
    // and corrects course:
    //   - Fits below as guessed → keep it, just cap `maxHeight` to the real
    //     available space defensively (matches `menu-radix.tsx`'s own
    //     `max-h-[var(--radix-dropdown-menu-content-available-height)]`
    //     convention — an internal scroll, via `Menu`'s own built-in
    //     scroll-chevron affordance, rather than a hard clip).
    //   - Doesn't fit below, but there's more room above the trigger →
    //     flip to open upward instead, capped to whichever space it landed
    //     in — the same "flip when the preferred side doesn't fit" behavior
    //     Radix's own Popper primitive gives `MenuRadix`/`KebabMenuButton`
    //     for free; this hand-rolled portal has to do it manually.
    //   - Doesn't fit below and flipping doesn't meaningfully help either →
    //     stay below (matches the original position most people expect) and
    //     let it scroll internally instead of overflowing the viewport.
    // Also reruns whenever the entry count changes (a consumer's `children`
    // can change while open) so resizing the actual content re-measures
    // instead of leaving a stale position/cap from before the change.
    useLayoutEffect(() => {
      if (!overflowOpen) return;
      const menuEl = overflowMenuRef.current;
      const triggerEl = overflowTriggerRef.current;
      if (!menuEl || !triggerEl) return;

      const VIEWPORT_PADDING = 8;
      const GAP = 4;
      const triggerRect = triggerEl.getBoundingClientRect();
      const menuRect = menuEl.getBoundingClientRect();
      const spaceBelow = window.innerHeight - triggerRect.bottom - GAP - VIEWPORT_PADDING;
      const spaceAbove = triggerRect.top - GAP - VIEWPORT_PADDING;

      let top: number;
      let maxHeight: number;
      if (menuRect.height <= spaceBelow) {
        top = triggerRect.bottom + GAP;
        maxHeight = spaceBelow;
      } else if (spaceAbove > spaceBelow) {
        maxHeight = spaceAbove;
        top = Math.max(VIEWPORT_PADDING, triggerRect.top - GAP - Math.min(menuRect.height, spaceAbove));
      } else {
        top = triggerRect.bottom + GAP;
        maxHeight = Math.max(spaceBelow, 100);
      }

      // Same idea horizontally — a menu wider than its trigger (or a
      // trigger sitting near the right edge of a narrow docked panel)
      // could otherwise render partway off the right side of the screen.
      let left = triggerRect.left;
      if (left + menuRect.width > window.innerWidth - VIEWPORT_PADDING) {
        left = Math.max(VIEWPORT_PADDING, window.innerWidth - menuRect.width - VIEWPORT_PADDING);
      }

      setOverflowPosition((prev) =>
        prev && prev.top === top && prev.left === left && prev.maxHeight === maxHeight
          ? prev
          : { top, left, width: prev?.width ?? triggerRect.width, maxHeight }
      );
      // `React.Children.count(children)`, not `overflowEntries.length` —
      // `overflowEntries` is only ever populated lazily, when the dropdown
      // actually opens (see `openOverflowMenu` below), so its length stays
      // stale/`0` the rest of the time and wouldn't reflect the real
      // current tab count as a re-measure signal here. Counting `children`
      // directly gives that same "re-measure if the tab set changes size"
      // signal without depending on a value that isn't kept in sync with
      // it.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [overflowOpen, React.Children.toArray(children).length]);

    const tablistEl = (
      <div
        ref={(node) => {
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="tablist"
        onKeyDown={handleKeyDown}
        onScroll={showChevronScroll ? updateTabScrollState : undefined}
        className={cn(
          "flex border-b border-lyra-border-subtle",
          // `fullWidth` also overrides `Tab`'s own `max-w-[22ch]` cap (via
          // `max-w-none` on the direct `[role="tab"]` children — higher
          // specificity than that plain utility class on `Tab` itself, so
          // it wins regardless of source order) — the whole point of
          // `fullWidth` is equal-width columns that stretch to fill the
          // row, which a fixed character cap would silently fight against
          // once a column's share of the row exceeds ~22 characters.
          fullWidth ? "[&>*]:flex-1 [&>[role='tab']]:max-w-none" : "[&>[role='tab']]:px-5",
          // Stays in the DOM (just CSS-hidden below 400px, see
          // `.lyra-tab-overflow-full` in lyra-tokens.css) so its buttons
          // can still be `.click()`ed programmatically from the collapsed
          // dropdown below. Only applies in `"wide"` mode — `"compact"`
          // toggles which row renders via JS state instead (see below), so
          // this CSS class would be a harmless no-op there, but leaving it
          // off keeps that distinction unambiguous.
          //
          // 2 tabs or fewer (`allowOverflowCollapse` false) get
          // `.lyra-tab-overflow-stretch` instead — same ≤400px trigger, but
          // stretches both tabs to fill the row evenly rather than hiding
          // either one, per explicit request ("still want the 2 tabs to
          // stretch full width in responsive mode" — the equal-width look
          // the collapsed row would have had, just as two real tabs instead
          // of one tab + a dropdown). See that class's own doc comment in
          // lyra-tokens.css.
          overflowMenu &&
            overflowBreakpoint === "wide" &&
            (allowOverflowCollapse ? "lyra-tab-overflow-full" : "lyra-tab-overflow-stretch"),
          // `flex-1 min-w-0` — unconditional whenever `overflowMenu` is on
          // (not just while `showChevronScroll`/actually scrolling): both
          // the "wide" and "compact" branches below mount `tablistEl` as a
          // flex ITEM inside their own `<div className="flex items-stretch">
          // {leftChevron}{tablistEl}{rightChevron}</div>` row, and a plain
          // flex item defaults to its own content width (`flex: 0 auto`) —
          // so whenever the tabs' real content is narrower than that row's
          // full available width (few short tabs in a wide docked panel,
          // say), `tablistEl` itself only ever grew as wide as its own
          // labels, and this element's own `border-b` (above) is drawn on
          // ITS box, not the row's — so the divider visibly stopped dead
          // partway across, instead of spanning the panel's full width.
          // `flex-1` lets `tablistEl` claim the row's remaining space (its
          // OWN children, the individual `Tab`s, stay left-aligned at their
          // natural width regardless — only `fullWidth` above stretches
          // those; this is just the outer box growing so its border reaches
          // the far edge), `min-w-0` alongside it so that growth doesn't
          // fight the separate scrolling/collapsing this row already does
          // once its content genuinely doesn't fit (confirmed safe: once
          // content truly overflows, `scrollWidth` still exceeds the row's
          // capped `clientWidth` regardless of how that `clientWidth` was
          // arrived at, so `hasScrollableOverflow`/`compactCollapsed`'s own
          // measurements — driven by that same comparison — are unaffected
          // by this class being unconditional now).
          overflowMenu && "flex-1 min-w-0",
          // Makes the full row itself the horizontally-scrollable element
          // (see `showChevronScroll`'s own doc comment above) — `lyra-
          // scrollbar-hide` (lyra-tokens.css) since the chevrons are the
          // intended scroll affordance, not a visible native scrollbar.
          // `showChevronScroll`, not the narrower `hasScrollableOverflow` —
          // this same `tablistEl` is also what `"compact"` mode's own
          // scrolling state (`compactScrolling`) wraps with chevrons now
          // (the `isCompact` return branch below), and needs the identical
          // scroll wiring there. `flex-1 min-w-0` themselves moved up into
          // the unconditional class just above (still needed here too, just
          // no longer only-here).
          showChevronScroll && "overflow-x-auto lyra-scrollbar-hide",
          // `[&>[role='tab']]:flex-shrink-0` — each `Tab` keeps its own
          // natural (or `max-w-[22ch]`-capped) width instead of the default
          // flex-shrink:1 letting it compress toward zero as the row
          // narrows. Without this, `Tab`'s own `min-w-0` + `truncate` let
          // every tab absorb the missing space by shrinking its own label
          // first — which meant `scrollWidth` never genuinely exceeded
          // `clientWidth` until each tab was already crushed down to an
          // icon and a sliver of an ellipsis, a floor far narrower than the
          // (original) ≤991px threshold where the row collapses to "active
          // tab + N More" instead. That made the chevron/scroll state
          // effectively unreachable: the row went straight from "labels
          // quietly truncating" to "collapsed" without ever passing through
          // it. With shrinking disabled, tabs stay at their real (capped)
          // width, the row's true content width can genuinely exceed the
          // available space while still above the collapse threshold
          // (lowered to ≤400px — see `.lyra-tab-overflow-wrap` in
          // lyra-tokens.css — specifically so this scrollable state has
          // real room to occupy), and the chevrons appear exactly when
          // they're supposed to — confirmed via the
          // reference: Radix's `Tooltip` (`asChild`) clones the button
          // directly with no wrapper, so it really is `tablistEl`'s direct
          // `[role="tab"]` child this selector targets, same as the
          // existing `[&>[role='tab']]:px-5` above.
          //
          // Also applied in `"compact"` mode (`isCompact`), not just
          // `isWideOverflow` — this same `tablistEl` is what `isCompact`'s
          // own branch renders as its "not collapsed yet" row (see
          // `compactCollapsed`'s conditional `hidden` class below), and
          // without this it has exactly the same hole: every `Tab` free to
          // individually flex-shrink+truncate instead of holding its real
          // width. The hidden measurement clone that decides
          // `compactCollapsed` is immune to this on its own (it's
          // `position: absolute` with no imposed width, so nothing forces
          // it to shrink regardless of this class), but the *visible* row
          // isn't — confirmed from a screenshot of `agent-next-gen-v1`'s
          // Customer Information panel (an `overflowBreakpoint="compact"`
          // consumer) showing all 8 tabs simultaneously, each individually
          // truncated to a few letters ("Overvi...", "Det...", "Directo..."),
          // instead of either its full natural width or the collapsed
          // "active tab + N More" row `isCompact` is supposed to produce —
          // there's no third, partially-shrunk state in either mode's
          // design.
          //
          // Safe to apply across all three of `isCompact`'s own states now
          // (full/`compactScrolling`/`compactCollapsed`, not just the
          // "scrolling" one) — there used to be a "stretch 2 tabs instead
          // of collapsing" state here (`compactStretch`) that this class
          // would have wrongly blocked from shrinking+truncating, but that
          // carve-out is gone (`allowOverflowCollapse`'s own doc comment
          // above): every tab count now either fits (this class is a
          // no-op), scrolls (this class is exactly the point, same as
          // "wide" mode), or collapses to `collapsedRowEl` — which doesn't
          // render `tablistEl`'s own tabs at all, so this class has nothing
          // to affect there either.
          (hasScrollableOverflow || isCompact) && "[&>[role='tab']]:flex-shrink-0",
          // Consumer's `className` (e.g. a horizontal inset like `px-4`/
          // `px-6`) merges onto THIS SAME element as `border-b` above —
          // that's deliberate, not incidental. `border` sits outside
          // `padding` in the box model, so an inset here only pushes the
          // `Tab` children in from the edges while the bottom border still
          // spans the element's full box, edge-to-edge — as long as nothing
          // ABOVE `TabList` in the tree adds its own horizontal padding.
          // This is the standing way to build ANY tab strip: pass the
          // inset straight to `TabList` itself, never onto a wrapping div
          // (that would inset the border along with the tabs, defeating
          // the point). See `lyra-ux-templates`' `DesktopDesignsPage.tsx`
          // (`<TabList overflowMenu className="px-6">`) and
          // PROJECT_SUMMARY.md's "TabList's inset always goes directly on
          // TabList, never a wrapping div" entry.
          className
        )}
        {...props}
      >
        {renderedChildren}
      </div>
    );

    if (!overflowMenu) return tablistEl;

    // Chevron buttons flank the scrollable full row — rendered only once
    // there's actually something to scroll to that side (`canScrollLeft`/
    // `canScrollRight`, which also double as the old `tabOverflow` gate:
    // both come back `false` whenever nothing overflows at all). Shared
    // `ScrollChevronButton` (scroll-chevron.tsx) instead of a hand-rolled
    // click-to-scroll-one-tab button — continuous hover-driven scroll,
    // matching `Select`'s multi-select listbox/`MenuRadix`'s own chevrons,
    // not a discrete per-click step. `showChevronScroll`, not
    // `hasScrollableOverflow` — computed up here (rather than down by the
    // "wide" mode return below, where these used to live) so the
    // `isCompact` branch just below can flank its own `tablistEl` copy with
    // the exact same chevrons while it's in its own `compactScrolling`
    // state.
    const leftChevron = showChevronScroll && canScrollLeft && (
      <ScrollChevronButton direction="left" onStep={() => scrollTabsStep(-6)} />
    );
    const rightChevron = showChevronScroll && canScrollRight && (
      <ScrollChevronButton direction="right" onStep={() => scrollTabsStep(6)} />
    );

    const childArray = React.Children.toArray(children) as React.ReactElement<TabProps>[];
    const rawActiveIndex = childArray.findIndex((child) => child.props?.active);
    const activeIndex = rawActiveIndex === -1 ? 0 : rawActiveIndex;
    const activeChild = childArray[activeIndex];
    const otherChildren = childArray.filter((_, i) => i !== activeIndex);

    // Built lazily, right as the dropdown opens (`openOverflowMenu` below)
    // rather than inline on every render — this needs the REAL, committed
    // DOM (`listRef.current`'s `[role="tab"]` elements), which isn't
    // reliably available yet on whichever render happens to run first
    // (refs attach *after* React commits, and nothing here forces a
    // second render just to re-read them). Computing this inside a click
    // handler sidesteps the whole timing question — by the time an agent
    // can actually click "N More," the tabs have obviously already
    // mounted.
    const openOverflowMenu = () => {
      const rect = overflowTriggerRef.current?.getBoundingClientRect();
      if (rect) setOverflowPosition({ top: rect.bottom + 4, left: rect.left, width: rect.width });
      setOverflowOpen(true);
      setOverflowEntries(
        otherChildren.map((child) => {
          const originalIndex = childArray.indexOf(child);
          const tabEl = listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]')[originalIndex];
          // `child.props.children` covers the common case — a plain `Tab`
          // given a simple string label directly — without needing to
          // touch the DOM at all. Falls back to a `[data-tab-label]`
          // element for anything else: a composite wrapper like
          // `ChannelTab` (channel-row.tsx) has no `children`/`icon` prop
          // of its own for `TabList` to read here — it builds its own
          // label/icon internally from a `type` prop instead, so there's
          // nothing at the `<ChannelTab>` element level to introspect.
          // `[data-tab-label]` is a convention each such wrapper opts into
          // on its OWN specific label element (not `Tab`'s own generic
          // children-wrapper span — see that span's own doc comment for
          // why marking the wrong, too-broad element there duplicated the
          // address into the label text), so this stays correct for *any*
          // composite wrapper, present or future, with no special-casing
          // needed here. Only truly falls to "Tab N" if even that comes up
          // empty (e.g. an icon-only tab with no label text at all).
          const label =
            typeof child.props.children === "string"
              ? child.props.children
              : tabEl?.querySelector("[data-tab-label]")?.textContent?.trim() || `Tab ${originalIndex + 1}`;
          // Same reasoning as `label` above, for the icon: `child.props
          // .icon` covers a plain `Tab`; a composite wrapper's own
          // rendered icon `<span>` (the one immediately preceding the
          // label span, `Tab`'s own `{icon && <span aria-hidden="true">
          // ...` above) is cloned via its real markup instead, since
          // there's no React element to read off `child.props` for it
          // either. `dangerouslySetInnerHTML` is safe here specifically
          // because the source is this same render's own trusted output
          // (an SVG this app already rendered), not third-party/user
          // content.
          const iconHtml = tabEl?.querySelector('span[aria-hidden="true"]')?.innerHTML;
          const icon =
            child.props.icon ??
            (iconHtml ? <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconHtml }} /> : undefined);
          // `MenuEntry`'s `description` — rendered as a secondary line
          // below the label (menu-item.tsx) — reused here as this entry's
          // subhead once collapsed: an agent scanning "SMS"/"Voice"/
          // "WhatsApp" entries in this dropdown has no way to tell two
          // same-type channels apart without the number/email/handle each
          // one is actually on, the same reason it's already on this same
          // tab's `Tooltip` (`ChannelTab`'s own `address`/`metaLine`, see
          // channel-row.tsx). `[data-tab-subhead]` (`ChannelTab`'s own
          // doc comment) is what makes this available here even when a
          // consumer has `showAddressOnFace={false}` (hiding it from the
          // tab face itself, per its own doc comment) — this dropdown
          // still gets it regardless, same "read what's actually there"
          // approach as `label`/`icon` above rather than a plain `Tab`-only
          // prop this composite wrapper doesn't have.
          const description = tabEl?.querySelector("[data-tab-subhead]")?.textContent?.trim() || undefined;
          return {
            id: child.key != null ? String(child.key) : `tab-overflow-${originalIndex}`,
            label,
            icon,
            description,
            disabled: child.props.disabled,
            onClick: () => {
              // Click the real (hidden) tab button rather than reaching
              // into its `onClick` prop directly — same reasoning as the
              // arrow-key navigation above: it fires exactly the same
              // handlers a real click would, with no separate "select
              // this tab" code path to keep in sync.
              tabEl?.click();
              setOverflowOpen(false);
            },
          };
        })
      );
    };
    const handleOverflowTriggerClick = () => {
      if (overflowOpen) setOverflowOpen(false);
      else openOverflowMenu();
    };

    // `className` merges onto this collapsed "active + N more" row too, same
    // as `tablistEl` above — otherwise a consumer's horizontal inset would
    // only apply while the tabs fit (the uncollapsed row) and silently
    // disappear once the strip actually collapses at ≤400px/measured-too-
    // narrow, which would break the "always inset, border always full-bleed"
    // pattern right when a real user is most likely to hit it (a narrower
    // window/panel).
    //
    // `allowOverflowCollapse &&` — never build this row at all for 2 tabs or
    // fewer (see that const's own doc comment); nothing left to gate via CSS
    // alone in `"wide"` mode without it existing in the tree to begin with.
    //
    // The "each direct child grows to fill its half" rule used to live
    // right here as a Tailwind arbitrary-variant utility (`[&>*]:flex-1`)
    // instead of the plain hand-written CSS rule this class now gets in
    // lyra-tokens.css (`.lyra-tab-overflow-collapsed > *`) — moved to match
    // `.lyra-tab-overflow-stretch`'s own already-verified-working pattern
    // (that file's own doc comment), after this specific rule was reported
    // as not actually stretching a `ChannelTab`'s slot in practice despite
    // every other check (compiled Tailwind output, `cn()`/twMerge class
    // survival, the real DOM chain Radix builds) coming back clean in
    // isolation — moving it off Tailwind's JIT-generated arbitrary-variant
    // path entirely removes that whole class of doubt rather than trying
    // to keep chasing why it wasn't landing.
    // `pt-1.5` below (was `py-1.5`, top *and* bottom) — per explicit
    // request: dropping just the bottom half leaves each tab's own active/
    // hover indicator bar (`absolute bottom-0` inside `Tab`'s button,
    // tabs.tsx) sitting flush against this row's own bottom `border-b`
    // instead of floating 6px above it (confirmed via a DevTools
    // screenshot — the highlighted row box visibly extended well past the
    // indicator bar before this change). Top padding is untouched, so the
    // row still has the same breathing room above the tabs it always did.
    const collapsedRowEl = allowOverflowCollapse && activeChild && (
      <div className={cn("lyra-tab-overflow-collapsed flex items-stretch gap-2 border-b border-lyra-border-subtle pt-1.5", className)}>
        {React.cloneElement(activeChild as React.ReactElement<Record<string, unknown>>, {
          key: `${activeChild.key ?? activeIndex}-overflow-active`,
          // No `id` here — the tab with the real id lives in the full row
          // (hidden in `"wide"` mode via `.lyra-tab-overflow-full`, or not
          // rendered at all alongside this one in `"compact"` mode); this
          // is purely a visible mirror of it for the collapsed two-slot
          // layout, and duplicating that id on a second DOM node would be
          // invalid HTML.
          id: undefined,
          // Same reasoning as `fullWidth`'s own `max-w-none` override above:
          // this slot is `[&>*]:flex-1` (equal-width with the "N More"
          // trigger beside it), so `Tab`'s own `max-w-[22ch]` cap would
          // silently fight that stretch here too — the collapsed row is
          // its own "fill the available half" layout, not a plain
          // fixed-content-width tab. `className` merges last in `Tab`'s own
          // `cn(...)` call, and `twMerge` (via `cn`) resolves the
          // conflicting `max-w-*` utility in favor of this one over the
          // base class, regardless of source order.
          className: cn("max-w-none", (activeChild.props as TabProps).className),
          // Inverse of `renderedChildren`'s own `stripOutcomeFromActive`
          // override above — see `isNarrow`'s doc comment for the full
          // "two live copies of the active tab, only one should ever be
          // interactive" reasoning. This clone only keeps its real
          // `outcome` (`ChannelTab`'s own Outcome popover config) while
          // it's actually the visible copy (`isNarrow`); otherwise it's
          // stripped here too, same as `tablistEl`'s own copy is whenever
          // THIS one is the visible copy instead. Exactly one of the two
          // ever has a real `outcome` at a time — never both, never
          // neither.
          outcome: isNarrow ? (activeChild.props as { outcome?: unknown }).outcome : undefined,
        })}
        {otherChildren.length > 0 && (
          // Styled as a plain (never-"active") `Tab` — no border/fill —
          // rather than a bordered pill/chip, per feedback on the first
          // pass: this is still just a tab, it just happens to open a
          // menu instead of a panel directly. Same base classes and
          // bottom hover indicator as `Tab`'s own non-active state
          // below, minus the `role="tab"`/`aria-selected` semantics
          // that wouldn't make sense for a trigger with no panel of its
          // own.
          <button
            ref={overflowTriggerRef}
            type="button"
            onClick={handleOverflowTriggerClick}
            aria-haspopup="menu"
            aria-expanded={overflowOpen}
            aria-label={`${otherChildren.length} more tabs`}
            className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 px-3 py-2.5 lyra-body-md-emphasis text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
          >
            {overflowMoreLabel(otherChildren.length)}
            <ChevronDown
              className="h-4 w-4 flex-shrink-0 text-lyra-fg-disabled transition-colors group-hover:text-lyra-fg-secondary"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[4px] bg-transparent group-hover:bg-lyra-border-medium transition-colors" />
          </button>
        )}
      </div>
    );

    const portalEl = overflowOpen && overflowPosition && createPortal(
      <div
        ref={overflowMenuRef}
        onClick={(e) => e.stopPropagation()}
        // Marked with the same `data-radix-popper-content-wrapper`
        // attribute every REAL Radix Popper-based primitive's portaled
        // Content gets (Popover/Select/DropdownMenu/Tooltip, all built on
        // `@radix-ui/react-popper`) — even though this dropdown is its own
        // hand-rolled `createPortal`, not an actual Radix component. This
        // is a plain `closest("[data-radix-popper-content-wrapper]")`
        // marker, not anything Radix's own internals read — it exists
        // purely so an ANCESTOR Popover's `onInteractOutside` guard (the
        // established convention for "some other overlay is portaled
        // outside my content, don't treat clicking it as outside me" —
        // see e.g. `InteractionNavItem`'s own kebab-menu guard, this
        // exact comment reused there) also recognizes clicks on THIS menu
        // as belonging to a known nested overlay, not a genuine outside
        // click. Without this, a `TabList overflowMenu` nested inside any
        // Popover (e.g. the Customer Information hover preview,
        // agent-next-gen-v2) closed that whole Popover the instant its
        // own "N More" dropdown was clicked — confirmed live.
        data-radix-popper-content-wrapper=""
        style={{
          position: "fixed",
          top: overflowPosition.top,
          left: overflowPosition.left,
          minWidth: overflowPosition.width,
          zIndex: 9999,
        }}
      >
        {/* `maxHeight` (set by the collision-correction effect above, once
            it's measured this menu's real rendered size against the
            viewport) caps `Menu`'s own inner scrollable list — the same
            "consumer-supplied max height overflows internally" pattern
            `Autocomplete`'s `max-h-60` already relies on (see menu.tsx's own
            doc comment) — rather than letting the dropdown just keep
            growing past the edge of the screen. `undefined` on the very
            first paint (before that effect has measured anything yet), so
            it renders at its natural size for one frame — corrected before
            that frame is actually painted, since the effect is a
            `useLayoutEffect`. */}
        <Menu items={overflowEntries} aria-label="More tabs" style={{ maxHeight: overflowPosition.maxHeight }} />
      </div>,
      document.body
    );

    if (isCompact) {
      return (
        // `overflow-x-hidden` matters here, not just tidiness: the hidden
        // measurement clone below is deliberately wider than this wrapper
        // (that's the whole point — it needs to report its true
        // unconstrained width). `visibility: hidden` keeps it unpainted but
        // NOT removed from layout, so without clipping its overflow here,
        // an ancestor with its own scrollable overflow (e.g. `PanelContent`
        // — `overflow-y-auto` implicitly forces its `overflow-x` to `auto`
        // too, per the CSS overflow spec, rather than leaving it `visible`)
        // would pick up the clone's extra width and show an unwanted
        // horizontal scrollbar under the actually-visible tabs.
        // `growToFillRow ? "flex-1" : "w-full"`, plus `min-w-0` — same
        // `growToFillRow`-driven sizing "wide" mode's own
        // `.lyra-tab-overflow-wrap` div uses (further down), NOT the
        // original bare `w-full` this used to be: confirmed live as a real
        // bug once this mode had a consumer sharing its row with other
        // siblings (`AgentNextGenPage.tsx`'s record-header, alongside the
        // Customer Information toggle button) — `width: 100%` on a flex
        // item resolves against the ROW's own full content-box width
        // regardless of what siblings need, and without `min-w-0` this
        // wrapper's default `min-width: auto` floor (based on its visible
        // child's own content, once `[&>[role='tab']]:flex-shrink-0` below
        // holds each tab at its natural width) then refused to shrink back
        // down even after that — between the two, this wrapper claimed
        // however much space it wanted and simply overlapped/overflowed
        // past the button next to it instead of sharing the row. Without
        // `growToFillRow`, `w-full` is kept as the prior default (a
        // standalone consumer with nothing else in its row, this mode's
        // original use case, still wants to fill 100% of that ROW on its
        // own — there's just no sibling here for it to be sharing with).
        <div ref={compactWrapRef} className={cn("relative min-w-0 overflow-x-hidden", growToFillRow ? "flex-1" : "w-full")}>
          {/* Hidden measurement clone — never visible, never interactive,
              exists purely so `compactMeasureRef.current.scrollWidth`
              reflects the tabs' true unconstrained width. `whiteSpace:
              nowrap` + no `flex-wrap` + absolute positioning (out of normal
              flow, so it can't be squeezed by `compactWrapRef`'s own
              width) is what makes that measurement meaningful. */}
          <div
            ref={compactMeasureRef}
            aria-hidden="true"
            inert
            style={{ position: "absolute", top: 0, left: 0, visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" }}
            className={cn("flex", !fullWidth && "[&>[role='tab']]:px-5")}
          >
            {children}
          </div>
          {/* Real tab row — stays mounted even once collapsed, just
              visually hidden (`hidden`), rather than being swapped out
              entirely. This used to be a straight `compactCollapsed ?
              collapsedRowEl : tablistEl` ternary — unmounting `tablistEl`
              also tore out its `[role="tab"]` buttons, which is what the
              "N More" overflow menu's own entries actually click (see
              `overflowEntries` above — `listRef.current?.querySelectorAll
              ('[role="tab"]')[originalIndex]?.click()`, chosen specifically
              so a menu selection fires the exact same handlers a real
              click would). With `tablistEl` gone, `listRef.current` had
              nothing left to query, so every "N More" selection silently
              did nothing — a real, shipped bug, not a one-off edge case.
              "Wide" mode never had this problem because it always keeps
              the full row mounted (`.lyra-tab-overflow-full` just hides it
              with CSS at ≤400px); "compact" mode now does the same.

              Flanked with the same `leftChevron`/`rightChevron`
              `"wide"` mode's own row uses (both computed once, above,
              shared by both modes) while `compactScrolling` is true — the
              tabs hold their natural width (`[&>[role='tab']]:flex-shrink-0`
              above) and this becomes a real horizontally-scrollable strip,
              same intermediate state between "everything fits" and
              "collapsed to active + N More" that "wide" mode's own fixed
              ≤400px CSS threshold provides, just reached via this mode's
              own measured fit instead. */}
          <div className={cn("flex items-stretch", compactCollapsed && "hidden")}>
            {leftChevron}
            {tablistEl}
            {rightChevron}
          </div>
          {compactCollapsed && collapsedRowEl}
          {portalEl}
        </div>
      );
    }

    return (
      // `w-full` here is load-bearing, not cosmetic — and it's a distinct
      // fix from the `className`-routing change that was reverted earlier
      // (see PROJECT_SUMMARY.md's "TabList + overflowMenu" entry): this is
      // an unconditional class on `TabList`'s own markup, not an attempt to
      // reroute a consumer's `className` anywhere. `.lyra-tab-overflow-wrap`
      // carries `container-type: inline-size` (lyra-tokens.css), and an
      // element with size containment can't use its own content to
      // determine its size — so without an explicit width, this div can
      // collapse to a near-zero width even while sitting inside a flex
      // ancestor that's supposedly stretching it (the exact "container-
      // type: inline-size root needs an explicit w-full" gotcha documented
      // elsewhere in PROJECT_SUMMARY.md). Confirmed from a screenshot: the
      // Monitor dashboard's tabs were wrapping their own text onto 2–3
      // lines instead of scrolling/collapsing at all, because this wrapper
      // (and everything inside it) had almost no real width to work with.
      //
      // `min-w-0` — related, but scoped tighter than a first pass at this
      // fix tried: this outer wrap is the actual top-level node `TabList`
      // renders once `overflowMenu` is on (`tablistEl` itself sits two
      // levels deeper, inside `.lyra-tab-overflow-full`'s row — see that
      // div below), and without this, a flex item's default `min-width:
      // auto` can refuse to shrink below its content's natural width,
      // fighting the very collapse/scroll behavior this whole component
      // exists to provide. `min-w-0` alone is a no-op outside an actual
      // flex ancestor (same as `w-full` above), so there's no downside for
      // a `TabList` that isn't inside one — unlike `flex-1` (see
      // `growToFillRow` below), which is NOT a safe unconditional default:
      // it's a no-op in a *row*-direction flex ancestor with room to
      // spare, but actively wrong in a *column*-direction one (a page's
      // own vertical header/tabs/content stack, say), where `flex-grow`
      // makes this wrap greedily claim the remaining *vertical* space
      // instead — confirmed from a screenshot of a dashboard page's own
      // `Dashboard/Customers/Accounts/...` tab row growing to swallow the
      // entire body height, leaving a huge blank gap above its content
      // cards, the moment `flex-1` was added here unconditionally on a
      // first pass at this exact fix. `growToFillRow` below opts a
      // specific `TabList` into that behavior instead, rather than every
      // `overflowMenu` consumer inheriting it regardless of which axis its
      // own parent flexes along.
      <div ref={wrapRef} className={cn("lyra-tab-overflow-wrap w-full min-w-0", growToFillRow && "flex-1")}>
        {/* `.lyra-tab-overflow-full`/`-stretch` moved onto this wrapping div
            (rather than left solely on `tablistEl`) so the chevrons hide
            together with the tab row the moment the CSS container query
            below reacts at ≤400px — leaving either class on `tablistEl`
            too is harmless (same class, same selector), just redundant.
            2 tabs or fewer (`!allowOverflowCollapse`) get
            `.lyra-tab-overflow-stretch` instead of `.lyra-tab-overflow-full`
            — both tabs stay visible and simply stretch to fill the row at
            ≤400px rather than either of them hiding behind
            `collapsedRowEl` (which isn't even in the tree for that case —
            see its own doc comment). The chevron-scroll behavior
            (`leftChevron`/`rightChevron` below) is unaffected either way —
            that's driven by `useScrollChevrons`'s own `ResizeObserver`
            measurement, not this CSS container query. */}
        <div
          className={cn(
            "flex items-stretch",
            isWideOverflow && (allowOverflowCollapse ? "lyra-tab-overflow-full" : "lyra-tab-overflow-stretch")
          )}
        >
          {leftChevron}
          {tablistEl}
          {rightChevron}
        </div>
        {collapsedRowEl}
        {portalEl}
      </div>
    );
  }
);
TabList.displayName = "TabList";

/* ── Tab (individual tab button) ──
   Label (`children`) always truncates with an ellipsis rather than wrapping
   or overflowing once the tab itself is narrower than its label needs
   (`fullWidth`'s equal-width columns, or a squeezed row before `TabList`'s
   own overflow handling engages) — a `Tooltip` showing the full label
   appears on hover, but only once the label is actually truncated (measured
   live via `ResizeObserver`, not assumed from a fixed width). See the
   component body below for the measurement/tooltip wiring. */

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  /** Right-side icon (e.g. close or menu icon) */
  rightIcon?: React.ReactNode;
  /** Called when the remove button is clicked (renders an × button on the right) */
  onRemove?: (e: React.MouseEvent) => void;
  /** Accessible label for the remove button (default: "Remove tab") */
  removeLabel?: string;
  /**
   * Renders a trailing kebab (⋮) menu on this tab — e.g. a channel tab's
   * "Unassign & Dismiss"/"Consult / Transfer"/etc. actions (see
   * `ChannelTab` in `channel-row.tsx`, the first consumer of this). Uses
   * `KebabMenuButton`'s `as="span"` mode rather than nesting a real
   * `<button>` inside this `<button>`, which HTML forbids — same reasoning
   * as `onRemove`'s own `role="button"` span below. Mutually exclusive with
   * `onRemove`/`rightIcon` (this takes priority if more than one is passed —
   * a tab needs at most one trailing action).
   */
  menuItems?: MenuEntry[];
  /** Accessible label for the kebab menu trigger (default: "More options") */
  menuAriaLabel?: string;
  /**
   * Fires whenever this tab's own `menuItems` kebab dropdown opens/closes —
   * forwarded straight from `KebabMenuButton`'s own `onOpenChange`. A
   * caller that wraps this whole `Tab` in its own outer `Tooltip` (e.g.
   * `ChannelTab` in channel-row.tsx) has no other way to find out the
   * dropdown opened, since the tooltip's trigger and the dropdown's trigger
   * are the same DOM node — pass this straight to that outer `Tooltip`'s
   * `disabled` prop. See `KebabMenuButton.onOpenChange`'s own doc comment.
   */
  onMenuOpenChange?: (open: boolean) => void;
  /** ID of the associated TabPanel */
  panelId?: string;
  /**
   * Suppresses this tab's own built-in truncation tooltip (see the class
   * doc comment above). Default `true`. Set `false` when a caller already
   * wraps this whole `Tab` in its own outer `Tooltip` covering at least the
   * same text — e.g. `ChannelTab` (channel-row.tsx), whose outer tooltip
   * shows "{label} {address}" plus a message-count/id line, a strict
   * superset of this tab's own truncated label. Left both tooltips on and
   * they'd both fire together whenever the label happens to be truncated —
   * two stacked tooltip bubbles on one hover, a real, shipped bug. Only
   * ever turn this off when the outer tooltip's content is confirmed to
   * cover this tab's full untruncated label — otherwise an agent hovering
   * a truncated tab with no fallback loses the only way to read its full
   * text.
   */
  showTruncationTooltip?: boolean;
  /**
   * Recolors this tab's look (label text, leading icon, and — while
   * `active` — the bottom indicator bar) from the plain blue
   * `text-lyra-fg-active-strong`/`bg-lyra-fg-active-strong` to the same
   * green/amber/red status tokens `ChannelRow`'s own elapsed-time text uses
   * for `awaitingSeverity` (channel-row.tsx) — "success" green (a reply
   * just landed, still well within SLA), "warning" amber, "critical" red.
   * The label text and leading `icon` both stay in this color EVEN ON AN
   * INACTIVE tab — per explicit request, so an agent scanning the tab bar
   * can read which channel needs attention (or just got a reply) without
   * selecting it first (see `textColorClass`/`iconColorClass` below). Only
   * the kebab/remove/rightIcon slots and the bottom indicator bar still
   * follow the plain "colored only while active, gray otherwise" rule —
   * the bar in particular only ever renders for the active tab in the
   * first place, so it has nothing to show on an inactive one regardless.
   * Omit (the default) to leave this tab exactly the plain blue/gray it's
   * always been; every existing consumer that doesn't pass this is
   * unaffected. First consumer: `ChannelTab` (channel-row.tsx), passing
   * through a channel's own `awaitingResponse`/`awaitingSeverity` (and
   * swapping the icon itself to a warning/breached glyph once it's
   * actually "warning"/"critical" — see that component's own `tabIcon`),
   * so the record-header tab bar reflects the exact same "how urgently
   * does this channel need a reply" signal the LeftNav's
   * `InteractionNavItem` cards already show, instead of that tab staying a
   * neutral blue/gray no matter how overdue the channel actually is.
   */
  severity?: "success" | "warning" | "critical";
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      className,
      active,
      icon,
      rightIcon,
      onRemove,
      removeLabel = "Remove tab",
      menuItems,
      menuAriaLabel = "More options",
      onMenuOpenChange,
      panelId,
      showTruncationTooltip = true,
      severity,
      children,
      id,
      ...props
    },
    ref
  ) => {
    // Resolved once, reused everywhere this tab would otherwise hardcode
    // `text-lyra-fg-active-strong`/`bg-lyra-fg-active-strong` for its
    // active look — see `severity`'s own doc comment above for why this
    // only ever applies while `active` is true.
    const activeTextClass =
      active && severity === "critical"
        ? "text-lyra-status-critical-strong"
        : active && severity === "warning"
        ? "text-lyra-status-warning-strong"
        : active && severity === "success"
        ? "text-lyra-status-success-strong"
        : active
        ? "text-lyra-fg-active-strong"
        : "";
    const activeBarClass =
      severity === "critical"
        ? "bg-lyra-status-critical-strong"
        : severity === "warning"
        ? "bg-lyra-status-warning-strong"
        : severity === "success"
        ? "bg-lyra-status-success-strong"
        : "bg-lyra-fg-active-strong";
    // Unlike `activeTextClass` above, NOT gated on `active` — per explicit
    // request, the leading `icon` slot (below) stays in its success/warning/
    // critical color even while this tab isn't the selected one, so an
    // agent scanning the tab bar can spot which channel needs attention
    // without having to select it first. Only the kebab/remove/rightIcon
    // slots still fall back to the plain gray "inactive" look via
    // `activeTextClass` when `active` is false, unchanged — the label text
    // gets this same treatment too, see `textColorClass` right below.
    const iconColorClass =
      severity === "critical"
        ? "text-lyra-status-critical-strong"
        : severity === "warning"
        ? "text-lyra-status-warning-strong"
        : severity === "success"
        ? "text-lyra-status-success-strong"
        : active
        ? activeTextClass
        : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary";
    // Same "stays colored regardless of `active`" treatment as
    // `iconColorClass` above, per explicit follow-up request — only the
    // "no severity" fallback differs (this is the button's own base text
    // color, which the plain label `<span>` below has no color class of its
    // own and so inherits — `text-lyra-fg-secondary hover:text-lyra-fg-
    // default`, the tab's ordinary inactive-label look, not the dimmer
    // `-disabled` tone the icon alone uses inactive). Applied on the
    // `<button>` itself (below) rather than a class on the label span
    // directly, so it keeps covering the label the exact same way the
    // pre-existing `active ? activeTextClass : ...` base color always has.
    const textColorClass =
      severity === "critical"
        ? "text-lyra-status-critical-strong"
        : severity === "warning"
        ? "text-lyra-status-warning-strong"
        : severity === "success"
        ? "text-lyra-status-success-strong"
        : active
        ? activeTextClass
        : "text-lyra-fg-secondary hover:text-lyra-fg-default";
    // ── Truncate + tooltip-on-truncation ──
    // A `Tab` can end up narrower than its own label needs — `fullWidth`
    // mode's equal-width columns, or just a squeezed row before `TabList`'s
    // own overflow handling (chevrons/collapse) kicks in. `labelRef`
    // measures whether the label's real content (`scrollWidth`) currently
    // exceeds the space it's actually given (`clientWidth`); `isTruncated`
    // drives the `Tooltip` via its `disabled` prop rather than
    // conditionally wrapping/unwrapping — per `Tooltip`'s own doc comment,
    // toggling `disabled` keeps the wrapper's shape constant across that
    // change instead of unmounting/remounting the button (and losing focus/
    // interaction state) every time the truncation state flips.
    const labelRef = useRef<HTMLSpanElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);
    // This tab's own embedded `menuItems` kebab (below) shares this same
    // `button` with this tooltip — hovering it to reach the dropdown is
    // still hovering the tooltip's trigger. Without tracking the dropdown's
    // own open state here too, the tooltip has no reason to close once the
    // dropdown takes over, and stays visible over it (see
    // `KebabMenuButton.onOpenChange`'s doc comment for the full mechanism).
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpenChange = (open: boolean) => {
      setMenuOpen(open);
      onMenuOpenChange?.(open);
    };

    useLayoutEffect(() => {
      const el = labelRef.current;
      if (!el) return;
      const recompute = () => setIsTruncated(el.scrollWidth > el.clientWidth + 1);
      recompute();
      const ro = new ResizeObserver(recompute);
      ro.observe(el);
      return () => ro.disconnect();
    }, [children]);

    const button = (
      <button
        ref={ref}
        id={id}
        role="tab"
        aria-selected={active}
        aria-controls={panelId}
        tabIndex={active ? 0 : -1}
        className={cn(
          // `max-w-[22ch]` — a hard cap on any single tab's label width in
          // the PLAIN (fixed-content-width) case, independent of how much
          // room the row actually has. `ch` is the width of the font's own
          // "0" character, a reasonable proxy for "character count" across
          // variable-width fonts without needing to measure real text.
          // Without this, one unusually long label (a campaign name, a
          // customer's name, anything not authored copy) could dominate the
          // whole row on its own even when there'd otherwise be plenty of
          // space for every tab; `Tab`'s existing truncate + tooltip-on-
          // truncation below already handles showing the full label on
          // hover once this (or the row's own available space) clips it.
          // Deliberately NOT applied whenever a tab is meant to STRETCH to
          // fill an equal-width slot instead of sizing to its own content —
          // `fullWidth` mode (`[&>[role='tab']]:max-w-none` above, in
          // `TabList`) and the collapsed "active tab + N More" row's active
          // slot (`className: "max-w-none"` in `collapsedRowEl`'s
          // `cloneElement` below) both override this back off, since a
          // fixed character cap would just fight the stretch in either of
          // those two layouts.
          "group relative inline-flex min-h-[48px] min-w-0 max-w-[22ch] items-center justify-center gap-2 px-3 py-2.5 lyra-body-md-emphasis transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          textColorClass,
          className
        )}
        {...props}
      >
        {icon && (
          <span aria-hidden="true" className={cn("flex-shrink-0 transition-colors", iconColorClass)}>
            {icon}
          </span>
        )}
        {/* No `data-tab-label` marker here (deliberately) — a first pass at
            this put it on THIS span, since it wraps `children` and seemed
            like the obvious "the label lives here" spot. But `children` for
            a composite wrapper like `ChannelTab` (channel-row.tsx) isn't
            just the label — it's a small fragment (an icon-less label
            `<span>` plus an optional address `<span>`), and marking this
            outer span meant `TabList`'s "N More" dropdown (`openOverflowMenu`,
            below in this file) read its `textContent` as BOTH pieces
            concatenated with no separator ("Voice(456) 383-3329" instead of
            "Voice"), duplicating the address that's already shown on its own
            subhead line right below (confirmed via screenshot). Each
            composite wrapper marks its OWN, more specific label element
            instead — see `ChannelTab`'s own `data-tab-label` span — so this
            generic span here stays a plain, unmarked truncation-measurement
            box with no assumptions about what's actually inside it. */}
        <span ref={labelRef} className="min-w-0 truncate">
          {children}
        </span>
        {menuItems && (
          <KebabMenuButton
            as="span"
            items={menuItems}
            ariaLabel={menuAriaLabel}
            onOpenChange={handleMenuOpenChange}
            className={cn(
              "h-5 w-5 flex-shrink-0",
              active ? activeTextClass : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
            )}
          />
        )}
        {onRemove && !menuItems && (
          <span
            role="button"
            tabIndex={0}
            aria-label={removeLabel}
            onClick={(e) => { e.stopPropagation(); onRemove(e); }}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); onRemove(e as unknown as React.MouseEvent); } }}
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-lyra-xs flex-shrink-0 transition-colors",
              "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
              active ? activeTextClass : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
            )}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" />
              <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" />
            </svg>
          </span>
        )}
        {rightIcon && !onRemove && !menuItems && (
          <span
            aria-hidden="true"
            className={cn("flex-shrink-0 transition-colors", active ? activeTextClass : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary")}
          >
            {rightIcon}
          </span>
        )}
        {/* Active indicator — blue bar */}
        {active && (
          <span aria-hidden="true" className={cn("absolute bottom-0 left-0 right-0 h-[4px]", activeBarClass)} />
        )}
        {/* Hover indicator — gray bar (only when not active) */}
        {!active && (
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[4px] bg-transparent group-hover:bg-lyra-border-medium transition-colors" />
        )}
      </button>
    );

    return (
      <Tooltip content={children} placement="top" disabled={!showTruncationTooltip || !isTruncated || menuOpen}>
        {button}
      </Tooltip>
    );
  }
);
Tab.displayName = "Tab";

/* ── Tab Panel (content area) ── */

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  /** ID of the associated Tab */
  tabId?: string;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, active, tabId, ...props }, ref) => {
    if (!active) return null;
    return (
      <div
        ref={ref}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={tabId}
        className={cn("flex-1", className)}
        {...props}
      />
    );
  }
);
TabPanel.displayName = "TabPanel";

export { TabList, Tab, TabPanel };
export type { TabListProps, TabProps, TabPanelProps };
