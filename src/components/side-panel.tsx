import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { PanelHeader } from "./panel-header";
import { PanelContent } from "./panel-content";
import { PanelPinButton } from "./panel-pin-button";
import { usePanelDragResize } from "./use-panel-drag-resize";
import { cn } from "../lib/utils";

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

   Also distinct from `Draggable`/`DraggablePanel` (float/dockable overlay
   shells for things like the AI panel or notifications dropdown) — those
   aren't part of the app shell's side/interior panel system at all, see
   draggable.tsx. */

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which edge of the layout the panel is docked to (default: "right") */
  side?: "left" | "right";
  /** Whether the panel is open (default: true) */
  open?: boolean;
  /**
   * Pinned = inline, pushes content. Unpinned = hover overlay above the
   * page header. Defaults to `false` (unpinned) — only start a side panel
   * pinned when a specific prototype calls for it.
   */
  pinned?: boolean;
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
  /** Optional line below `headerTitle`, e.g. a record's name + id */
  headerSubhead?: string;
  headerIcon?: React.ReactNode;
  /**
   * Rendered inline immediately after `headerTitle`, same row (forwarded
   * to `PanelHeader`/`ContainerHeader`'s own `titleBadge` slot) — e.g. a
   * view-switcher trigger (a bare chevron opening a `Select` of view
   * options) sitting right next to the title text itself. Distinct from
   * `headerActions` below, which renders at the far right of the header
   * row instead.
   */
  headerTitleBadge?: React.ReactNode;
  headerActions?: React.ReactNode;
  /**
   * A `TabList` rendered inside the header itself, below the title/subhead
   * row — forwarded to `PanelHeader`'s own `tabs` prop (see
   * container-header.tsx and `InteriorPanel`'s matching `headerTabs`,
   * which this mirrors for consistency between the two panel types). Keeps
   * tabs outside `PanelContent`'s scroll region entirely rather than
   * living in `children` with a hand-rolled `sticky` wrapper.
   */
  headerTabs?: React.ReactNode;

  footer?: React.ReactNode;

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
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  (
    {
      className,
      side = "right",
      open = true,
      pinned = false,
      onPinToggle,
      resizable = true,
      minWidth = 200,
      maxWidth = 425,
      onResizeStateChange,
      onWidthChange,
      width = 256,
      headerTitle,
      headerSubhead,
      headerIcon,
      headerTitleBadge,
      headerActions,
      headerTabs,
      footer,
      instantWidthChange = false,
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
    const { width: currentWidth, onMouseDown, onKeyDown: onResizeKeyDown } = usePanelDragResize(
      side, width, minWidth, maxWidth, handleResizeStateChange, onWidthChange
    );
    // Restored to a real conditional — see `instantWidthChange`'s own doc
    // comment for why a prior version of this made this unconditionally
    // `"none"`, and why that overcorrected. `isResizing` keeps drag-resizing
    // snappy (no animated width while actively dragging, same as always);
    // `instantWidthChange` is the caller-driven escape hatch for the
    // full-screen-toggle case specifically. Anything else (a normal `open`
    // toggle, still docked) animates through the 250ms cubic-bezier
    // transition, same as this component's original default behavior.
    const widthTransition =
      isResizing || instantWidthChange ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)";

    const pinButton = onPinToggle ? (
      <PanelPinButton pinned={pinned} onToggle={onPinToggle} />
    ) : null;

    const dragHandle = resizable ? (
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
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center group focus-visible:outline-none"
        style={{ [side === "right" ? "left" : "right"]: -4, width: 8, cursor: "col-resize" }}
      >
        <div className="w-0.5 h-8 rounded-full bg-lyra-border-soft opacity-0 group-hover:bg-lyra-bg-primary group-hover:opacity-100 group-focus-visible:w-1 group-focus-visible:bg-lyra-border-focus group-focus-visible:opacity-100 transition-opacity" />
      </div>
    ) : null;

    const inner = (
      <div
        className="relative flex flex-col h-full"
        style={{ width: currentWidth, minWidth: currentWidth }}
      >
        {dragHandle}
        {/* Snap content invisible on close (no squish); fade in on open */}
        <div
          className="flex flex-col flex-1 min-h-0"
          style={{
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transition: open ? "opacity 150ms ease 30ms" : "none",
          }}
        >
          {headerTitle && (
            <PanelHeader
              title={headerTitle}
              subhead={headerSubhead}
              icon={headerIcon}
              titleBadge={headerTitleBadge}
              actions={<>{headerActions}{pinButton}</>}
              tabs={headerTabs}
              bordered={false}
            />
          )}
          <PanelContent>{children}</PanelContent>
          {footer && <div className="shrink-0">{footer}</div>}
        </div>
      </div>
    );

    const border = side === "left" ? "border-r border-lyra-border-subtle" : "border-l border-lyra-border-subtle";

    /* ── Pinned: inline, pushes content ── */
    if (pinned) {
      return (
        <div
          ref={ref}
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
          className={cn("shrink-0 h-full overflow-hidden bg-lyra-bg-surface-container-subtle", open && border, className)}
          style={{ width: open ? currentWidth : 0, transition: widthTransition }}
          {...props}
        >
          {inner}
        </div>
      );
    }

    /* ── Unpinned: hover overlay above the page header ── */
    const pos = side === "left" ? "left-0" : "right-0";
    return (
      <div
        ref={ref}
        role="region"
        aria-label={headerTitle || "Side panel"}
        className={cn("absolute top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-container-subtle shadow-lg", pos, open ? border : "pointer-events-none", className)}
        style={{ width: open ? currentWidth : 0, transition: widthTransition }}
        {...props}
      >
        {inner}
      </div>
    );
  }
);
SidePanel.displayName = "SidePanel";

export { SidePanel };
