import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ContainerFooterSlot, type ContainerFooterAlign } from "./container-footer";
import { Maximize2, Minimize2, PanelLeftClose, PanelRightClose } from "lucide-react";
import { ContainerHeader } from "./container-header";
import { PanelContent } from "./panel-content";
import { PanelPinButton } from "./panel-pin-button";
import { Tooltip } from "./tooltip";
import { usePanelDragResize } from "./use-panel-drag-resize";
import { cn } from "../lib/utils";
import { SkipLink } from "./skip-link";

/* ── SidePanel ──
   The navigation/tool panel that lives OVER the page header, on the left or
   right edge of the app shell (e.g. the "Designer"/record-context panel in
   admin-shell.tsx). Two states:

     - unpinned (default) — floats as a hover overlay above the page header
       (`position: absolute`, elevated z-index, drop shadow). Doesn't push
       or resize the page content.
     - pinned — sits inline, pushing the main content column over. Toggled
       via the pin button (rendered when `onPinToggle` is passed).

   Opening on hover is a convention this component enables rather than
   manages itself: `open` is a controlled prop, and the native
   `onMouseEnter`/`onMouseLeave` handlers (inherited from
   `HTMLAttributes<HTMLDivElement>`) are how a consumer wires up "open on
   hover, close after a short delay" — see Panel.stories.tsx's "Side Panel —
   Left/Right" stories, or admin-shell.tsx, for the reference pattern. This
   keeps hover-timing/debounce policy with the app, not baked into the
   component.

   This is one of exactly two panel types in the design system — the other
   being `InteriorPanel` (inline, below the page header, click/trigger-
   opened). They're deliberately separate components with different
   behavior, not one component switching on a `variant` prop — a prior
   unified `Panel` (`variant="side" | "interior"`) caused enough confusion
   between the two that it was split back into these two.

   Also distinct from `Draggable` (float/dockable overlay
   shells for things like the AI panel or notifications dropdown) — those
   aren't part of the app shell's side/interior panel system at all, see
   draggable.tsx. */

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which edge of the layout the panel is docked to (default: "right") */
  side?: "left" | "right";
  /**
   * Renders a "Skip to main content" link as the panel's first tab stop —
   * invisible until focused; Enter jumps focus to the main content
   * (WCAG 2.4.1) so keyboard users needn't tab through the whole panel.
   * Defaults to `true` for `side="left"` panels (they sit before the main
   * content in tab order) and `false` for `side="right"` (they come after it).
   */
  skipToMain?: boolean;
  /** `id` of the main content element the skip link targets (default `"main-content"`; falls back to the page's `<main>`). */
  skipToMainTargetId?: string;
  /** Whether the panel is open (default: true) */
  open?: boolean;
  /**
   * Pinned = inline, pushes content. Unpinned = hover overlay above the
   * page header. Defaults to `false` (unpinned) — only start a side panel
   * pinned when a specific prototype calls for it.
   */
  pinned?: boolean;
  /**
   * Container width (px) below which a pinned panel stops pushing the content
   * and floats over it as an overlay instead, like `InteriorPanel`'s
   * `absoluteBreakpoint`. Opt-in: leave it unset (default) and `pinned` is the
   * only thing that decides.
   */
  absoluteBreakpoint?: number;
  /**
   * Preview a closed, pinned panel: when `true` while `pinned` and not `open`,
   * the panel slides in as an overlay (without pushing the content) and slides
   * back out when it turns `false`. The consumer decides what drives it —
   * typically hovering the button that opens the panel.
   */
  preview?: boolean;
  /**
   * Show a close button at the far right of the header (default: false). It
   * calls `onClose`; the panel's `open` is controlled, so the consumer flips it.
   */
  showCloseButton?: boolean;
  /** Called when the header's close button is clicked. */
  onClose?: () => void;
  /** Show a full-screen toggle in the header (default: false). */
  allowFullScreen?: boolean;
  /** Called whenever the panel enters or leaves full screen. */
  onFullScreenChange?: (fullScreen: boolean) => void;
  /**
   * Start in full screen (covers the container, with an exit button in the
   * header). Initial value only — the panel manages it afterwards.
   */
  defaultFullScreen?: boolean;
  /** Renders a pin/unpin button in the header when provided */
  onPinToggle?: () => void;

  /** Allow drag-to-resize on the panel's inner edge (default: true) */
  resizable?: boolean;
  /** Min width when resizing, px (default: 200) */
  minWidth?: number;
  /** Max width when resizing, px (default: 425) */
  maxWidth?: number;
  /** Fired when a resize drag starts (true) or ends (false) */
  onResizeStateChange?: (isResizing: boolean) => void;
  /** Fired whenever the width changes during a drag */
  onWidthChange?: (width: number) => void;
  /** Width in px (default: 256) */
  width?: number;

  headerTitle?: string;
  /** Extra className on the header row (e.g. a grab cursor for a draggable host). */
  headerClassName?: string;
  /**
   * Also render the header when there is no `headerTitle` but other header content is set (icon, subhead,
   * badge, actions, tabs, buttons), for an icon-only or actions-only header. Off by default: without a
   * title the header is omitted, as before.
   */
  headerWithoutTitle?: boolean;
  /** Optional line below `headerTitle`, e.g. a record's name + id —
   *  `ReactNode`, same widened type as `ContainerHeader`'s own `subhead`
   *  this forwards straight into (see that prop's own doc comment). */
  headerSubhead?: React.ReactNode;
  headerIcon?: React.ReactNode;
  /**
   * Rendered inline immediately after `headerTitle`, same row (forwarded
   * to `ContainerHeader`'s own `titleBadge` slot) — e.g. a
   * view-switcher trigger (a bare chevron opening a `Select` of view
   * options) sitting right next to the title text itself. Distinct from
   * `headerActions` below, which renders at the far right of the header
   * row instead.
   */
  headerTitleBadge?: React.ReactNode;
  headerActions?: React.ReactNode;
  /**
   * A `TabList` rendered inside the header itself, below the title/subhead
   * row — forwarded to `ContainerHeader`'s own `tabs` prop (see
   * container-header.tsx and `InteriorPanel`'s matching `headerTabs`,
   * which this mirrors for consistency between the two panel types). Keeps
   * tabs outside `PanelContent`'s scroll region entirely rather than
   * living in `children` with a hand-rolled `sticky` wrapper.
   */
  headerTabs?: React.ReactNode;

  /**
   * Footer content. Pass buttons plus any `footer*` prop below and the panel
   * wraps them in `ContainerFooter`; with none of them set, the node is
   * rendered as-is (legacy behavior — e.g. a hand-built `ContainerFooter`).
   */
  footer?: React.ReactNode;
  /** Where the footer's buttons sit: `"left"`, `"right"` or `"full"`. Forwarded to `ContainerFooter`'s `align`. */
  footerAlign?: ContainerFooterAlign;
  /** Border along the footer's top edge. Forwarded to `ContainerFooter`'s `bordered`. */
  footerBordered?: boolean;
  /** Shadow above the footer while content scrolls behind it. Forwarded to `ContainerFooter`'s `scrollShadow`. */
  footerScrollShadow?: boolean;
  /** Fade the content out into the footer while it scrolls behind it, instead of a hard edge. Forwarded to `ContainerFooter`'s `scrollFade`; when on, `footerScrollShadow` and `footerBordered` are ignored (default: false). */
  footerScrollFade?: boolean;

  /**
   * Suppresses the width transition for this render only — the panel's
   * width jumps straight to its new value instead of sliding through the
   * normal 250ms cubic-bezier `width` transition. Default `false` (normal
   * animated open/close, same as always).
   *
   * This component has no notion of "full screen" itself — a consumer that
   * fakes full-screen by flipping `pinned`/`width` together (rather than
   * `InteriorPanel`'s own dedicated `allowFullScreen` toggle) is the one
   * case that needs this: per explicit request ("I want the session
   * details side panel to still animate in and out when docked on toggle,
   * just not animate when it goes full screen"), that specific transition
   * should be instant while a normal `open` toggle (still docked, not going
   * full screen) keeps animating. See `CustomerInformationSidePanel`'s own
   * `fullScreenJustToggled` ref (agent-next-gen-customer-info-panel.tsx)
   * for the one real consumer of this — it computes the "did full screen
   * just change" moment (this component can't, since it never sees a
   * `fullScreen` prop) and passes `true` here for exactly the render(s)
   * right after. A prior version of this component made EVERY width
   * transition unconditionally `"none"` to fix that same full-screen case
   * — overcorrected, since it silently killed the normal open/close
   * animation for every consumer of this shared component, not just the
   * one that needed the full-screen fix. This prop scopes the fix to
   * exactly the case that asked for it instead.
   */
  instantWidthChange?: boolean;
  /**
   * Jump to full screen automatically once the panel reaches 90% of
   * its container's width — by dragging it wider or by the container
   * shrinking (default: false — opt-in, nothing changes for existing
   * consumers). Works with or without a `maxWidth`. Full screen covers the whole container as
   * an absolute overlay (like the unpinned state, so the container must be
   * positioned) and the header shows an exit (minimize) button while it's
   * active; exiting restores a width just under 90% so the panel doesn't
   * immediately jump again. There is no general full-screen button on
   * `SidePanel` — the button only appears once the panel is full screen.
   */
  autoFullScreen?: boolean;
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  (
    {
      className,
      side = "right",
      skipToMain,
      skipToMainTargetId,
      open = true,
      pinned: pinnedProp = false,
      absoluteBreakpoint,
      preview = false,
      defaultFullScreen = false,
      allowFullScreen = false,
      showCloseButton = false,
      onClose,
      onFullScreenChange,
      onPinToggle,
      resizable = true,
      minWidth = 200,
      maxWidth = 425,
      onResizeStateChange,
      onWidthChange,
      width = 256,
      headerTitle,
      headerClassName,
      headerWithoutTitle = false,
      headerSubhead,
      headerIcon,
      headerTitleBadge,
      headerActions,
      headerTabs,
      footer,
      footerAlign,
      footerBordered,
      footerScrollShadow,
      footerScrollFade,
      instantWidthChange = false,
      autoFullScreen = false,
      children,
      ...props
    },
    ref
  ) => {
    const [isResizing, setIsResizing] = useState(false);
    const handleResizeStateChange = useCallback((r: boolean) => {
      setIsResizing(r);
      onResizeStateChange?.(r);
    }, [onResizeStateChange]);

    // `autoFullScreen`: the container the panel sits in, measured the same way
    // InteriorPanel does (its parent element), and the full-screen state the
    // drag callback below flips.
    const outerRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(9999);
    const parentWidthRef = useRef(9999);
    parentWidthRef.current = parentWidth;
    const [isFullScreen, setIsFullScreen] = useState(defaultFullScreen);
    const isFullScreenRef = useRef(false);
    isFullScreenRef.current = isFullScreen;
    const autoEnteredRef = useRef(false);

    const stableOuterRef = useCallback((el: HTMLDivElement | null) => {
      (outerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
      const el = outerRef.current?.parentElement;
      if (!el) return;
      setParentWidth(el.getBoundingClientRect().width);
      const ro = new ResizeObserver(([entry]) => setParentWidth(entry.contentRect.width));
      ro.observe(el);
      return () => ro.disconnect();
    }, []);

    const handleWidthChange = useCallback((w: number) => {
      onWidthChange?.(w);
      if (
        autoFullScreen &&
        !isFullScreenRef.current &&
        w >= parentWidthRef.current * 0.9
      ) {
        autoEnteredRef.current = true;
        setIsFullScreen(true);
      }
    }, [onWidthChange, autoFullScreen, maxWidth]);
    const { width: currentWidth, onMouseDown, onKeyDown: onResizeKeyDown, setWidth } = usePanelDragResize(
      side, width, minWidth, maxWidth, handleResizeStateChange, handleWidthChange
    );
    // While full screen the panel is as wide as its container.
    const displayWidth = isFullScreen ? parentWidth : currentWidth;

    // The container shrinking can push the panel past 90% of it too, not just dragging.
    useEffect(() => {
      if (
        autoFullScreen && open && !isFullScreen &&
        currentWidth >= parentWidth * 0.9
      ) {
        autoEnteredRef.current = true;
        setIsFullScreen(true);
      }
    }, [autoFullScreen, open, isFullScreen, currentWidth, parentWidth]);

    // Entering/exiting full screen snaps instantly instead of sliding.
    const prevIsFullScreenRef = useRef(isFullScreen);
    const fullScreenJustToggled = prevIsFullScreenRef.current !== isFullScreen;
    useEffect(() => {
      prevIsFullScreenRef.current = isFullScreen;
    });
    // Restored to a real conditional — see `instantWidthChange`'s own doc
    // comment for why a prior version of this made this unconditionally
    // `"none"`, and why that overcorrected. `isResizing` keeps drag-resizing
    // snappy (no animated width while actively dragging, same as always);
    // `instantWidthChange` is the caller-driven escape hatch for the
    // full-screen-toggle case specifically. Anything else (a normal `open`
    // toggle, still docked) animates through the 250ms cubic-bezier
    // transition, same as this component's original default behavior.
    const widthTransition =
      isResizing || instantWidthChange || fullScreenJustToggled || isFullScreen ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)";

    // Only while full screen (see `autoFullScreen`): the way back out.
    const onFullScreenChangeRef = useRef(onFullScreenChange);
    onFullScreenChangeRef.current = onFullScreenChange;
    const didMountFs = useRef(false);
    useEffect(() => {
      if (!didMountFs.current) { didMountFs.current = true; return; }
      onFullScreenChangeRef.current?.(isFullScreen);
    }, [isFullScreen]);

    // Manual way in (`allowFullScreen`); the exit button below is the way out.
    const enterFullScreen = allowFullScreen && !isFullScreen ? (
      <Tooltip content="Full screen" placement="bottom" asLabel>
        <button
          type="button"
          aria-label="Full screen"
          onClick={() => {
            autoEnteredRef.current = false;
            setIsFullScreen(true);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Tooltip>
    ) : null;

    const exitFullScreen = isFullScreen ? (
      <Tooltip content="Exit full screen" placement="bottom" asLabel>
        <button
          type="button"
          aria-label="Exit full screen"
          onClick={() => {
            if (autoEnteredRef.current) {
              autoEnteredRef.current = false;
              setWidth(Math.min(maxWidth, Math.max(minWidth, Math.floor(parentWidth * 0.9) - 1)));
            }
            setIsFullScreen(false);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Tooltip>
    ) : null;

    // Far right of the header, after the pin button. Icon points the way the panel slides out.
    const CloseIcon = side === "right" ? PanelRightClose : PanelLeftClose;
    const closeButton = showCloseButton ? (
      <Tooltip content="Close" placement="bottom" asLabel>
        <button
          type="button"
          aria-label="Close panel"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          <CloseIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Tooltip>
    ) : null;

    const pinButton = onPinToggle ? (
      <PanelPinButton pinned={pinnedProp} onToggle={onPinToggle} />
    ) : null;

    // Only rendered while the panel is open. A closed panel (width 0 /
    // `visibility: hidden` content) used to keep this focusable separator
    // mounted, so it was the first Tab stop on the page while invisible
    // (WCAG 2.4.7 / 2.4.3). Unmounting it removes it from the Tab order.
    const dragHandle = resizable && open && !isFullScreen ? (
      <div
        onMouseDown={onMouseDown}
        // Keyboard-operable "window splitter" (WCAG 2.1.1): focusable,
        // arrow keys resize — see usePanelDragResize's onKeyDown.
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panel"
        aria-valuenow={Math.round(currentWidth)}
        aria-valuemin={minWidth}
        aria-valuemax={maxWidth}
        tabIndex={0}
        onKeyDown={onResizeKeyDown}
        // `ring-inset`: the panel clips its own overflow, so an outer ring on
        // this 8px edge strip (half of it sits outside the panel) would be
        // cut off — an inset ring is always fully visible on keyboard focus.
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lyra-border-focus"
        style={{ [side === "right" ? "left" : "right"]: -4, width: 8, cursor: "col-resize" }}
      >
        {/* Full-height edge line, same affordance as Draggable's docked left-edge handle: blue (active border) on hover, thicker focus color on keyboard focus. Sits on the panel's own edge so it overlays the existing border. */}
        <div
          className={`absolute inset-y-0 ${side === "right" ? "left-1/2" : "right-1/2"} w-0.5 bg-transparent group-hover:bg-lyra-border-active group-focus-visible:w-1 group-focus-visible:bg-lyra-border-focus transition-colors`}
          aria-hidden="true"
        />
      </div>
    ) : null;

    // Pinned + closed + preview: float in as an overlay instead of pushing content.
    // Narrower than the breakpoint, a pinned panel behaves as unpinned (overlay).
    const pinned = pinnedProp && !(absoluteBreakpoint !== undefined && parentWidth < absoluteBreakpoint);
    const previewing = preview && pinned && !open;
    const visible = open || previewing;
    // Pinned + closed: the panel lives in an absolute layer on a zero-width slot,
    // so previewing it can never move or resize the surrounding content.
    const previewLayer = pinned && !open && !isFullScreen;

    const inner = (
      <div
        className="relative flex flex-col h-full"
        style={{ width: displayWidth, minWidth: displayWidth }}
      >
        {dragHandle}
        {/* Snap content invisible on close (no squish); fade in on open */}
        <div
          className="flex flex-col flex-1 min-h-0"
          style={{
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
            transition: visible ? "opacity 150ms ease 30ms" : "none",
          }}
        >
          {(skipToMain ?? side === "left") && <SkipLink targetId={skipToMainTargetId} />}
          {/* Without a title the header is omitted unless `headerWithoutTitle` opts in. */}
          {(headerTitle || (headerWithoutTitle && (headerSubhead || headerIcon || headerTitleBadge || headerActions || headerTabs || enterFullScreen || exitFullScreen || pinButton || closeButton))) && (
            <ContainerHeader
              title={headerTitle}
              subhead={headerSubhead}
              icon={headerIcon}
              titleBadge={headerTitleBadge}
              actions={<>{headerActions}{enterFullScreen}{exitFullScreen}{pinButton}{closeButton}</>}
              tabs={headerTabs}
              bordered={false}
              className={headerClassName}
            />
          )}
          <PanelContent>{children}</PanelContent>
          <ContainerFooterSlot
            content={footer}
            align={footerAlign}
            bordered={footerBordered}
            scrollShadow={footerScrollShadow}
            scrollFade={footerScrollFade}
            rawWhenUnstyled
          />
        </div>
      </div>
    );

    const border = side === "left" ? "border-r border-lyra-border-subtle" : "border-l border-lyra-border-subtle";

    /* ── Pinned: inline, pushes content ── */
    if (pinned && !isFullScreen) {
      return (
        <div
          ref={stableOuterRef}
          role="region"
          aria-label={headerTitle || "Side panel"}
          // `h-full` — explicit, not left to this flex item's own default
          // cross-axis `align-items: stretch` (which a plain flex-ROW
          // parent, e.g. `AgentNextGenPage`'s "Customer Information panel +
          // content column" row, would otherwise apply here implicitly).
          // Confirmed live: relying on implicit stretch alone left `inner`
          // below (and `PanelContent` inside it, both already `h-full`/
          // `flex-1`) without a reliably DEFINITE height to resolve
          // against in docked/pinned mode specifically — internal
          // scrolling silently never engaged, while the unpinned/full-
          // screen branch below (which reaches its height a completely
          // different way — `position: absolute` against the nearest
          // POSITIONED ancestor, a real flex-column `flex-1` box with an
          // unambiguous MAIN-axis-grow height, not cross-axis stretch)
          // worked correctly the whole time. An explicit `h-full` here
          // makes this box's own height a plain, unambiguous percentage
          // resolution against its parent instead of depending on
          // implicit stretch ever being treated as "definite" for `inner`/
          // `PanelContent` to build on — same fix mirrored on the
          // `AgentNextGenPage` caller's own wrapper around this component,
          // since that wrapper had the identical implicit-stretch gap one
          // level higher.
          className={cn("relative shrink-0 h-full bg-lyra-bg-surface-container-subtle", !previewLayer && "overflow-hidden", open && border, className)}
          style={{ width: open ? currentWidth : 0, transition: widthTransition }}
          {...props}
        >
          {previewLayer ? (
            <div
              className={cn(
                "absolute top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-container-subtle",
                side === "left" ? "left-0" : "right-0",
                previewing ? `shadow-lg ${border}` : "pointer-events-none",
              )}
              style={{ width: previewing ? currentWidth : 0, transition: widthTransition }}
            >
              {inner}
            </div>
          ) : (
            inner
          )}
        </div>
      );
    }

    /* ── Unpinned: hover overlay above the page header ── */
    const pos = side === "left" ? "left-0" : "right-0";
    return (
      <div
        ref={stableOuterRef}
        role="region"
        aria-label={headerTitle || "Side panel"}
        className={cn("absolute top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-container-subtle shadow-lg", pos, visible ? border : "pointer-events-none", className)}
        style={{ width: visible ? displayWidth : 0, transition: widthTransition }}
        {...props}
      >
        {inner}
      </div>
    );
  }
);
SidePanel.displayName = "SidePanel";

export { SidePanel };
