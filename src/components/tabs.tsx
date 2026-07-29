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
   * unconstrained clone + `ResizeObserver`) and only collapses once they
   * genuinely don't, at any container width. Meant for narrow, often-
   * resizable hosts like an `InteriorPanel`'s own tabs (200–425px wide,
   * see interior-panel.tsx) — a fixed threshold there is basically always
   * wrong: either the panel's whole range sits above it (never collapses,
   * clipping once tabs stop fitting) or below it (permanently collapsed,
   * no visible response to resizing). Content-aware measurement collapses
   * exactly when needed regardless of the panel's width or the tabs'
   * label lengths, rather than guessing a pixel number tuned to one
   * specific tab set. Note: the hidden measurement clone duplicates
   * `children` in the DOM (aria-hidden, non-interactive) purely to read
   * its natural width — avoid `"compact"` for a `TabList` whose children
   * rely on globally-unique `id`/`panelId` values.
   */
  overflowBreakpoint?: "wide" | "compact";
  /** Formats the dropdown trigger's label from the number of tabs it
   *  holds (every tab except the active one). Defaults to `"{n} More"`. */
  overflowMoreLabel?: (count: number) => string;
}

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      className,
      fullWidth,
      overflowMenu,
      overflowBreakpoint = "wide",
      overflowMoreLabel = (count) => `${count} More`,
      onKeyDown,
      children,
      ...props
    },
    ref
  ) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [overflowOpen, setOverflowOpen] = useState(false);
    const [overflowPosition, setOverflowPosition] = useState<{ top: number; left: number; width: number } | null>(null);
    const overflowTriggerRef = useRef<HTMLButtonElement>(null);
    const overflowMenuRef = useRef<HTMLDivElement>(null);

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
    const isCompact = overflowMenu && overflowBreakpoint === "compact";

    useLayoutEffect(() => {
      if (!isCompact) return;
      const wrapEl = compactWrapRef.current;
      const measureEl = compactMeasureRef.current;
      if (!wrapEl || !measureEl) return;

      const recompute = () => {
        setCompactCollapsed(measureEl.scrollWidth > wrapEl.clientWidth);
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

    const tablistEl = (
      <div
        ref={(node) => {
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="tablist"
        onKeyDown={handleKeyDown}
        onScroll={isWideOverflow ? updateTabScrollState : undefined}
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
          overflowMenu && overflowBreakpoint === "wide" && "lyra-tab-overflow-full",
          // Makes the full row itself the horizontally-scrollable element
          // (see `isWideOverflow`'s own state/effect above) — `min-w-0` so
          // it can actually shrink to whatever room the chevrons alongside
          // it leave, `lyra-scrollbar-hide` (lyra-tokens.css) since the
          // chevrons are the intended scroll affordance, not a visible
          // native scrollbar. Mutually exclusive with `!overflowMenu`/
          // `isCompact` (this is only ever true in the one render path that
          // wraps `tablistEl` with chevrons, below), so it's safe to always
          // include here rather than threading a second flag through.
          isWideOverflow && "min-w-0 flex-1 overflow-x-auto lyra-scrollbar-hide",
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
          (isWideOverflow || isCompact) && "[&>[role='tab']]:flex-shrink-0",
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
        {children}
      </div>
    );

    if (!overflowMenu) return tablistEl;

    const childArray = React.Children.toArray(children) as React.ReactElement<TabProps>[];
    const rawActiveIndex = childArray.findIndex((child) => child.props?.active);
    const activeIndex = rawActiveIndex === -1 ? 0 : rawActiveIndex;
    const activeChild = childArray[activeIndex];
    const otherChildren = childArray.filter((_, i) => i !== activeIndex);

    const openOverflowMenu = () => {
      const rect = overflowTriggerRef.current?.getBoundingClientRect();
      if (rect) setOverflowPosition({ top: rect.bottom + 4, left: rect.left, width: rect.width });
      setOverflowOpen(true);
    };
    const handleOverflowTriggerClick = () => {
      if (overflowOpen) setOverflowOpen(false);
      else openOverflowMenu();
    };

    const overflowEntries: MenuEntry[] = otherChildren.map((child) => {
      const originalIndex = childArray.indexOf(child);
      const label = typeof child.props.children === "string" ? child.props.children : `Tab ${originalIndex + 1}`;
      return {
        id: child.key != null ? String(child.key) : `tab-overflow-${originalIndex}`,
        label,
        icon: child.props.icon,
        disabled: child.props.disabled,
        onClick: () => {
          // Click the real (hidden) tab button rather than reaching into
          // its `onClick` prop directly — same reasoning as the arrow-key
          // navigation above: it fires exactly the same handlers a real
          // click would, with no separate "select this tab" code path to
          // keep in sync.
          listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]')[originalIndex]?.click();
          setOverflowOpen(false);
        },
      };
    });

    // `className` merges onto this collapsed "active + N more" row too, same
    // as `tablistEl` above — otherwise a consumer's horizontal inset would
    // only apply while the tabs fit (the uncollapsed row) and silently
    // disappear once the strip actually collapses at ≤400px/measured-too-
    // narrow, which would break the "always inset, border always full-bleed"
    // pattern right when a real user is most likely to hit it (a narrower
    // window/panel).
    const collapsedRowEl = activeChild && (
      <div className={cn("lyra-tab-overflow-collapsed [&>*]:flex-1 flex items-stretch gap-2 border-b border-lyra-border-subtle py-1.5", className)}>
        {React.cloneElement(activeChild, {
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
        style={{
          position: "fixed",
          top: overflowPosition.top,
          left: overflowPosition.left,
          minWidth: overflowPosition.width,
          zIndex: 9999,
        }}
      >
        <Menu items={overflowEntries} aria-label="More tabs" />
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
        // `w-full` here for the same reason the "wide" mode wrapper below
        // needs it (see that return statement's own comment): without an
        // explicit width, this flex item can collapse toward its own
        // content instead of the real available space, which would also
        // throw off `updateScrollState`'s `wrapEl.clientWidth` comparison
        // against the hidden clone.
        <div ref={compactWrapRef} className="relative w-full overflow-x-hidden">
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
              with CSS at ≤400px); "compact" mode now does the same. */}
          <div className={cn(compactCollapsed && "hidden")}>{tablistEl}</div>
          {compactCollapsed && collapsedRowEl}
          {portalEl}
        </div>
      );
    }

    // Chevron buttons flank the scrollable full row — rendered only once
    // there's actually something to scroll to that side (`canScrollLeft`/
    // `canScrollRight`, which also double as the old `tabOverflow` gate:
    // both come back `false` whenever nothing overflows at all). Shared
    // `ScrollChevronButton` (scroll-chevron.tsx) instead of a hand-rolled
    // click-to-scroll-one-tab button — continuous hover-driven scroll,
    // matching `Select`'s multi-select listbox/`MenuRadix`'s own chevrons,
    // not a discrete per-click step.
    const leftChevron = isWideOverflow && canScrollLeft && (
      <ScrollChevronButton direction="left" onStep={() => scrollTabsStep(-6)} />
    );
    const rightChevron = isWideOverflow && canScrollRight && (
      <ScrollChevronButton direction="right" onStep={() => scrollTabsStep(6)} />
    );

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
      <div className="lyra-tab-overflow-wrap w-full">
        {/* `.lyra-tab-overflow-full` moved onto this wrapping div (rather
            than left solely on `tablistEl`) so the chevrons hide together
            with the tab row the moment the CSS container query below
            collapses this to the 2-slot row at ≤400px — leaving it on
            `tablistEl` too is harmless (same class, same selector), just
            redundant. */}
        <div className={cn("flex items-stretch", isWideOverflow && "lyra-tab-overflow-full")}>
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
      children,
      id,
      ...props
    },
    ref
  ) => {
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
          active
            ? "text-lyra-fg-active-strong"
            : "text-lyra-fg-secondary hover:text-lyra-fg-default",
          className
        )}
        {...props}
      >
        {icon && (
          <span
            aria-hidden="true"
            className={cn("flex-shrink-0 transition-colors", active ? "text-lyra-fg-active-strong" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary")}
          >
            {icon}
          </span>
        )}
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
              active ? "text-lyra-fg-active-strong" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
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
              active ? "text-lyra-fg-active-strong" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
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
            className={cn("flex-shrink-0 transition-colors", active ? "text-lyra-fg-active-strong" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary")}
          >
            {rightIcon}
          </span>
        )}
        {/* Active indicator — blue bar */}
        {active && (
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[4px] bg-lyra-fg-active-strong" />
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
