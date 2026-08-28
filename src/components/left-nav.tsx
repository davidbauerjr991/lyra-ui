import * as React from "react";
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TreeMenu, type TreeMenuItem } from "./tree-menu";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface NavChild {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  expandable?: boolean;
  defaultOpen?: boolean;
  children?: NavChild[];
  onClick?: () => void;
}

/* ── LeftNav ── */

interface LeftNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items to render */
  items: NavItem[];
  /** Whether the nav is expanded or collapsed */
  open?: boolean;
  /** Called when the toggle button is clicked */
  onToggle?: () => void;
  /** Show/hide the collapse toggle button */
  collapsible?: boolean;
  /**
   * Overlay mode (narrow screens): the aside keeps a fixed 60px footprint;
   * the expanded panel slides out as an absolutely-positioned overlay.
   *
   * Defaults to `"auto"`: LeftNav tracks the window width itself and
   * switches into overlay mode below `overlayBreakpoint` — the same
   * responsive behavior the Agent Next Gen template wires up by hand
   * (`overlay={isNavNarrow}`). Pass an explicit boolean to opt out of the
   * built-in tracking and control the mode yourself (e.g. a template that
   * already tracks width for other reasons, like docked-panel handling).
   */
  overlay?: boolean | "auto";
  /**
   * Window width (px) below which `overlay="auto"` engages overlay mode.
   * 1280 matches the Agent Next Gen template's own nav breakpoint. Ignored
   * when `overlay` is an explicit boolean.
   */
  overlayBreakpoint?: number;
  /** Content pinned to the bottom of the nav rail (e.g. a CreateNew button) */
  footer?: React.ReactNode;
  /**
   * Content pinned to the very top of the nav rail, above everything else
   * — exempt from scrolling, unlike `header` below (e.g. a CreateNew
   * trigger button, which should always stay put while a long list of
   * interaction cards or nav items scrolls underneath it). Like `footer`,
   * consumers should pass their own `expanded` prop tied to `open` in
   * inline mode; overlay mode auto-injects it based on hover state.
   */
  pinnedHeader?: React.ReactNode;
  /**
   * Content rendered at the top of the scrollable item list (e.g. a list
   * of InteractionNavItem active-interaction cards) — scrolls together
   * with the nav items below it in one continuous region, rather than
   * being fixed itself. Use `pinnedHeader` instead for content that must
   * stay fixed (e.g. the CreateNew trigger). Consumers should pass their
   * own `expanded` prop tied to `open` in inline mode; overlay mode
   * auto-injects it based on hover state.
   */
  header?: React.ReactNode;
  /**
   * Renders `items` (the icon+label nav rail — Home/Settings and friends)
   * ABOVE `header` instead of below it, and switches the nav list's own
   * sticky edge from the bottom of the scroll region to the top —
   * "always visible, everything else scrolls past it" now anchors at the
   * top since the rail is first in flow, rather than at the bottom (its
   * position when it's last, the default). Off by default — every existing
   * consumer (AdminShell, the Agent Next Gen template, this component's own
   * stories) already relies on `header`'s "cards above the rail" order and
   * the rail sticking to the bottom of a long card list; this only opts a
   * caller into the opposite arrangement (e.g. a "Home"/"Settings" rail
   * with a section caption + list of cards *below* it, rather than above)
   * without changing anyone else's layout.
   */
  itemsFirst?: boolean;
}

/**
 * Clone `expanded` onto every top-level element inside `node` — used to
 * auto-inject overlay mode's `hoverOpen` into `header`/`footer`. Consumers
 * commonly pass more than one element (e.g. a `CreateNew` button plus a
 * list of `InteractionNavItem` cards) wrapped in a `<>...</>` fragment.
 * `React.isValidElement`/`cloneElement` treat a fragment as a single
 * element and clone the fragment itself, which doesn't forward props to
 * its children — so a bare `cloneElement(node, { expanded })` silently
 * no-ops for fragment children. This unwraps one level of fragment first,
 * then clones each real child, so both a single element and a
 * multi-element fragment get `expanded` applied correctly.
 */
function injectExpanded(node: React.ReactNode, expanded: boolean): React.ReactNode {
  const children =
    React.isValidElement(node) && node.type === React.Fragment
      ? (node.props as { children?: React.ReactNode }).children
      : node;

  return React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<{ expanded?: boolean }>, { expanded })
      : child
  );
}

/** Convert NavItem[] → TreeMenuItem[] so TreeMenu can render them */
function toTreeItems(items: NavItem[]): TreeMenuItem[] {
  return items.map((item) => ({
    icon: item.icon,
    label: item.label,
    active: item.active,
    defaultOpen: item.defaultOpen,
    onClick: item.onClick,
    children: item.expandable ? item.children : undefined,
  }));
}

const LeftNav = React.forwardRef<HTMLElement, LeftNavProps>(
  (
    {
      className,
      items,
      open = true,
      onToggle,
      collapsible = true,
      overlay = "auto",
      overlayBreakpoint = 1280,
      footer,
      pinnedHeader,
      header,
      itemsFirst = false,
      ...props
    },
    ref
  ) => {
    const treeItems = useMemo(() => toTreeItems(items), [items]);

    /* `overlay="auto"` (the default): track window width internally and
       engage overlay mode below `overlayBreakpoint`. Only wired up in auto
       mode — an explicit boolean skips the listener entirely. SSR-safe:
       starts at Infinity (inline mode) until a real window width is read. */
    const [viewportWidth, setViewportWidth] = useState(() =>
      typeof window === "undefined" ? Number.POSITIVE_INFINITY : window.innerWidth
    );
    useEffect(() => {
      if (overlay !== "auto") return;
      const onResize = () => setViewportWidth(window.innerWidth);
      onResize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [overlay]);
    const effectiveOverlay =
      overlay === "auto" ? viewportWidth < overlayBreakpoint : overlay;

    // Hover-open state used in overlay mode
    const [hoverOpen, setHoverOpen] = useState(false);
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const onHoverStart = useCallback(() => {
      clearTimeout(hoverTimer.current);
      setHoverOpen(true);
    }, []);
    const onHoverEnd = useCallback(() => {
      hoverTimer.current = setTimeout(() => setHoverOpen(false), 300);
    }, []);

    const toggleButton = collapsible ? (
      <Tooltip content={open ? "Collapse sidebar" : "Expand sidebar"} placement="right" asLabel>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          className={cn(
            "absolute -right-3 top-[25px] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-lyra-border-soft bg-lyra-bg-surface-base text-lyra-fg-secondary shadow-sm hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
            // Fixed regardless of `header` — this button must stay aligned
            // with the page's PageHeader row (an external, constant-height
            // sibling elsewhere in the layout), not shift based on whatever
            // content happens to be first inside `header`.
          )}
        >
          {open ? (
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </Tooltip>
    ) : null;

    // No `overflow`/`flex-1` of its own — this list shares one scroll
    // region with `header` (see the scroll wrapper in both render branches
    // below), rather than owning its own separate scrollbar. `flex-shrink-0`
    // on both the `<nav>` and each item guards against the rail's items
    // compressing their spacing to fit when content overflows instead of
    // scrolling — the bug this replaced (see left-nav.tsx's git history/
    // PROJECT_SUMMARY.md for the reference screenshot).
    const iconOnlyNav = (
      <nav aria-label="Main navigation" className="flex flex-shrink-0 flex-col gap-0.5 items-center">
        {items.map((item, i) => {
          const isActive =
            item.active ||
            (item.children && item.children.some((c) => c.active));
          return (
            // `relative w-9` — matching the button's own `h-9 w-9` exactly,
            // not `w-full`/`justify-center`, and centered within the nav
            // rail via the parent `<nav>`'s `items-center`. `<nav>` has no
            // explicit width, so its default flex cross-axis behavior
            // stretches it to fill the rail's full content width (44px,
            // after the rail's own `px-2`); a `w-full` row here used to
            // inherit that same 44px against the button's 36px, leaving a
            // ~4px gap between the absolutely-positioned `left-0` active bar
            // and the button itself instead of sitting flush against it.
            // Sizing the row to the button's own width removes that gap
            // regardless of the rail's actual width (e.g. with vs. without
            // a `header`) — see the "active bar detached from collapsed nav
            // item" incident in PROJECT_SUMMARY.md.
            <div key={i} className="relative flex w-9 flex-shrink-0 justify-center">
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-lyra-state-hover-primary"
                />
              )}
              <Tooltip content={item.label} placement="right" asLabel>
                <button
                  onClick={item.onClick}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lyra-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
                    isActive
                      ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong"
                      : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
                  )}
                >
                  <span aria-hidden="true">{item.icon}</span>
                </button>
              </Tooltip>
            </div>
          );
        })}
      </nav>
    );

    // Whether the shared scroll region (`header` cards + the sticky nav
    // rail) actually has anything scrolling at all — per explicit report,
    // the sticky rail's own "soft fade instead of a hard edge" (below, both
    // branches) used to render unconditionally, so with few enough cards to
    // fit without scrolling, the fade still overlaid the last visible
    // card's bottom edge even though nothing was actually hidden/scrolling
    // underneath it to indicate. Gated on this instead: `false` (no fade)
    // whenever the content fits without overflowing, `true` once there's
    // enough to actually scroll.
    //
    // Only ONE ref/state pair, shared by both the overlay- and inline-mode
    // branches below — they're mutually exclusive returns (never both
    // mounted at once), so whichever branch is active just attaches this
    // same ref to its own copy of the scroll container.
    //
    // Deliberately `scrollHeight > clientHeight`, not one of
    // `useScrollChevrons`' own `canScrollStart`/`canScrollEnd` booleans
    // (scroll-chevron.tsx, used elsewhere in this library for a similar-
    // looking affordance) — those answer "is there more content PAST THE
    // CURRENT SCROLL POSITION," which is exactly right for a chevron button
    // that should disappear once you've scrolled as far as it points, but
    // wrong here: this fade's job is only to signal "this list can scroll
    // at all," and disappearing again once scrolled all the way to the
    // bottom would just reintroduce the same "fades over content with
    // nothing left to hide" report this fix exists for, at the opposite
    // end of the list instead of the near end.
    //
    // Recomputed two ways: the effect's own dependency array (`header`/
    // `items`/`open`/`hoverOpen` — whatever can actually change how much
    // content is rendered or how much room it has) catches content/layout
    // changes driven by props, and the `ResizeObserver` on the scroll
    // container itself catches anything a prop change wouldn't (e.g. a
    // bare browser window resize changing the rail's own available
    // height) — content growing/shrinking alone doesn't resize the
    // scroll container's own box (it's a fixed-height flex child,
    // `flex-1 min-h-0`), which is exactly why the dependency array half of
    // this still matters and the ResizeObserver alone wouldn't be enough.
    const listScrollRef = useRef<HTMLDivElement>(null);
    const [listHasOverflow, setListHasOverflow] = useState(false);
    useEffect(() => {
      const el = listScrollRef.current;
      if (!el) return;
      const update = () => setListHasOverflow(el.scrollHeight > el.clientHeight + 1);
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [header, items, open, hoverOpen]);

    /* ── Overlay mode (narrow screens): hover to open, no toggle button ── */
    if (effectiveOverlay) {
      return (
        <aside
          ref={ref}
          aria-label="Main navigation"
          className={cn("relative z-10 flex-shrink-0 overflow-visible bg-lyra-bg-surface-shell w-[60px]", className)}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          {...props}
        >
          {/* Sliding panel: 60px footprint when closed, 256px overlay when open */}
          <div
            className="absolute left-0 top-0 bottom-0 flex flex-col bg-lyra-bg-surface-shell overflow-hidden"
            style={{
              width: hoverOpen ? 256 : 60,
              zIndex: hoverOpen ? 20 : 10,
              transition: "width 200ms cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: hoverOpen ? "4px 0 12px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {pinnedHeader && (
              // No top padding here — the pinned header's first item (e.g.
              // CreateNew) should sit flush with the rail's top edge,
              // top-aligned with the container itself rather than inset to
              // match the nav list. Exempt from scrolling, unlike `header`
              // below (see the scroll wrapper's own comment).
              //
              // `pb-1` (4px) while collapsed (`!hoverOpen`) — per explicit
              // request/reference screenshot: with no `header` content
              // above it to add its own top inset (icon-rail mode has none
              // visible), the collapsed "+" icon (e.g. CreateNew) sat flush
              // against the Home icon directly below it with zero gap.
              // Expanded mode is untouched — its own spacing wasn't
              // reported as a problem, so left alone rather than changing
              // both to stay "consistent" when only one was actually asked
              // to change.
              <div className={cn("flex-shrink-0 flex flex-col items-center px-2 pt-0", hoverOpen ? "gap-2" : "gap-1 pb-1")}>
                {injectExpanded(pinnedHeader, hoverOpen)}
              </div>
            )}
            {/* `header` (e.g. InteractionNavItem cards) and the nav item
                list share one scrollable region — the nav list stays in
                its normal flow position right after `header`'s content
                (no artificial gap when there are only one or two cards),
                but is `position: sticky; bottom: 0`, so once a long list
                of cards would otherwise push it below the visible rail, it
                sticks to the bottom of the scroll viewport instead and the
                cards keep scrolling underneath/behind it (see the
                reference screenshot in PROJECT_SUMMARY.md — the nav items
                scrolled out of view entirely before this; an earlier fix
                pinned them to the bottom *unconditionally*, which the user
                caught as wrong too — it left a large empty gap above them
                whenever there were only a few cards, since "sticky", not
                "always pinned regardless of content", is what was asked
                for). Needs an opaque background so scrolled-under cards
                don't show through the nav items' icons/labels. */}
            <div className="flex flex-1 flex-col overflow-hidden min-h-0">
              <div ref={listScrollRef} className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden lyra-scrollbar-hide min-h-0">
                {/* No `gap` here — `header` (InteractionNavItem cards) supplies its own
                    bottom margin per item (see InteractionNavItem), so spacing only
                    appears when there's a real card to space out. Order (and which edge
                    the rail sticks to) flips with `itemsFirst` — see its own doc comment. */}
                {itemsFirst && (
                  <div
                    className={cn(
                      "flex flex-shrink-0 flex-col bg-lyra-bg-surface-shell px-2 sticky top-0",
                      hoverOpen ? "items-stretch" : "items-center",
                      !header && "pb-3",
                      // 4px, not the usual 12px (`pt-3`) — just enough gap
                      // under `pinnedHeader` (e.g. the "New Outbound"
                      // trigger) to read as a separate row, per an explicit
                      // request to match this exact spacing. Only applies
                      // when `itemsFirst` puts the rail directly under
                      // `pinnedHeader` — the default (rail last) arrangement
                      // never sits next to `pinnedHeader`, so its own
                      // spacing there is untouched.
                      "pt-1"
                    )}
                  >
                    {hoverOpen ? <TreeMenu items={treeItems} /> : iconOnlyNav}
                  </div>
                )}
                {header && (
                  <div
                    className={cn(
                      "flex flex-shrink-0 flex-col px-2",
                      hoverOpen ? "items-stretch" : "items-center",
                      // No top padding at all now (was `!itemsFirst &&
                      // "pt-3"`) — per explicit request/reference
                      // screenshot, `header`'s own first child (e.g.
                      // `AssignmentsSectionCaption`) should sit flush
                      // against the top of the scroll region with no gap
                      // above it, matching `itemsFirst`'s own
                      // already-flush arrangement (its first child there is
                      // that same caption's separator, which already sits
                      // flush under the rail above it).
                      itemsFirst && "pb-3"
                    )}
                  >
                    {injectExpanded(header, hoverOpen)}
                  </div>
                )}
                {!itemsFirst && (
                  <div className={cn("sticky bottom-0 flex flex-shrink-0 flex-col bg-lyra-bg-surface-shell px-2 pb-3", !header && "pt-3")}>
                    {/* Soft fade instead of a hard edge — per explicit
                        request, same technique used elsewhere for content
                        scrolling underneath a fixed/sticky bar (a solid-to-
                        transparent gradient overlaying the scrolled content
                        rather than the rail's opaque background just
                        cutting it off). `-top-8` places it outside this
                        div's own box, extending up into whatever `header`
                        content (e.g. nav cards) is scrolling underneath the
                        rail, rather than adding empty space inside the
                        rail itself. Gradient runs transparent at the top
                        down to solid (matching the rail's own background)
                        at the bottom, so it blends into the rail exactly
                        where the hard edge used to be.

                        `listHasOverflow &&` — per explicit follow-up
                        report, this used to render unconditionally, so a
                        short list that fits without ever needing to scroll
                        still had this fade cutting across the bottom of
                        its last visible card, even though nothing was
                        actually scrolling underneath the rail to indicate.
                        See `listHasOverflow`'s own doc comment above for
                        how it's computed. */}
                    {listHasOverflow && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-lyra-bg-surface-shell"
                      />
                    )}
                    {hoverOpen ? <TreeMenu items={treeItems} /> : iconOnlyNav}
                  </div>
                )}
              </div>
            </div>
            {footer && (
              <div className="flex-shrink-0 flex items-center justify-center px-2 pb-3">
                {injectExpanded(footer, hoverOpen)}
              </div>
            )}
          </div>
        </aside>
      );
    }

    /* ── Default (inline) mode ── */
    return (
      <aside
        ref={ref}
        aria-label="Main navigation"
        className={cn(
          "relative z-10 flex h-full flex-shrink-0 flex-col overflow-visible bg-lyra-bg-surface-shell transition-all duration-200",
          open ? "w-[256px]" : "w-[60px]",
          className
        )}
        {...props}
      >
        {toggleButton}

        {pinnedHeader && (
          // Same reasoning as the overlay branch above: flush to the top,
          // no pt-3 inset, so the pinned header's first item (CreateNew) is
          // top-aligned with the rail itself. Exempt from scrolling — see
          // the scroll wrapper's own comment below. `pb-1` while collapsed
          // — see the overlay-mode branch above for the full explanation;
          // same change, same reasoning, just this mode's own copy.
          <div className={cn("flex-shrink-0 flex flex-col items-center px-2 pt-0", open ? "gap-2" : "gap-1 pb-1")}>
            {pinnedHeader}
          </div>
        )}

        {/* Scroll wrapper — overflow-hidden + min-h-0 on the outer div constrains height so
            overflow-y-auto on the inner div triggers. The aside keeps overflow-visible for
            the toggle button that pokes out; this wrapper sits as a sibling to that button.
            `header` (e.g. InteractionNavItem cards) and the nav item list share one
            scrollable region — the nav list stays in its normal flow position right after
            `header`'s content (no artificial gap when there are only one or two cards), but
            is `position: sticky; bottom: 0`, so once a long list of cards would otherwise
            push it below the visible rail, it sticks to the bottom of the scroll viewport
            instead and the cards keep scrolling underneath/behind it (see the reference
            screenshot in PROJECT_SUMMARY.md — the nav items scrolled out of view entirely
            before this; an earlier fix pinned them to the bottom *unconditionally*, which the
            user caught as wrong too — it left a large empty gap above them whenever there
            were only a few cards, since "sticky", not "always pinned regardless of content",
            is what was asked for). Needs an opaque background so scrolled-under cards don't
            show through the nav items' icons/labels. */}
        <div className="flex flex-1 flex-col overflow-hidden min-h-0">
          <div ref={listScrollRef} className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden lyra-scrollbar-hide min-h-0">
            {/* No `gap` here — `header`'s items (InteractionNavItem cards) carry their own
                bottom margin, so an empty-but-truthy `header` (e.g. a Fragment wrapping a
                zero-length `.map()`) contributes zero visible space instead of a phantom gap
                before the nav list below. Order (and which edge the rail sticks to) flips
                with `itemsFirst` — see its own doc comment. */}
            {itemsFirst && (
              <div
                className={cn(
                  // 4px, not the usual 12px (`pt-3`) — just enough gap under
                  // `pinnedHeader` (e.g. the "New Outbound" trigger) to read
                  // as a separate row, per an explicit request to match this
                  // exact spacing. Only applies when `itemsFirst` puts the
                  // rail directly under `pinnedHeader`.
                  "flex flex-shrink-0 flex-col bg-lyra-bg-surface-shell px-2 sticky top-0 pt-1",
                  open ? "items-stretch" : "items-center",
                  !header && "pb-3"
                )}
              >
                {open ? <TreeMenu items={treeItems} /> : iconOnlyNav}
              </div>
            )}
            {header && (
              <div
                className={cn(
                  "flex flex-shrink-0 flex-col px-2",
                  open ? "items-stretch" : "items-center",
                  // No top padding at all now — see the overlay-mode
                  // branch above for the full explanation; same change,
                  // same reasoning, just this mode's own copy.
                  itemsFirst && "pb-3"
                )}
              >
                {header}
              </div>
            )}
            {!itemsFirst && (
              <div className={cn("sticky bottom-0 flex flex-shrink-0 flex-col bg-lyra-bg-surface-shell px-2 pb-3", !header && "pt-3")}>
                {/* Soft fade instead of a hard edge — see the overlay-mode
                    branch above for the full explanation (including
                    `listHasOverflow`, gating this the same way here); same
                    technique, same reasoning, just this mode's own copy of
                    the rail. */}
                {listHasOverflow && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-lyra-bg-surface-shell"
                  />
                )}
                {open ? <TreeMenu items={treeItems} /> : iconOnlyNav}
              </div>
            )}
          </div>
        </div>
        {footer && (
          <div className="flex-shrink-0 flex items-center justify-center px-2 pb-3">
            {footer}
          </div>
        )}
      </aside>
    );
  }
);
LeftNav.displayName = "LeftNav";

export { LeftNav };
export type { LeftNavProps };
