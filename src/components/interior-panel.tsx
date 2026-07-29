import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { PanelHeader } from "./panel-header";
import { PanelContent } from "./panel-content";
import { PanelFooter } from "./panel-footer";
import { Tooltip } from "./tooltip";
import { usePanelDragResize } from "./use-panel-drag-resize";
import { cn } from "../lib/utils";

/* ── Cookie helpers (remembered resize width only) — same small local
   getCookie/setCookie pattern already duplicated per-component elsewhere
   in this codebase (e.g. admin-shell.tsx's own pinned-state cookies)
   rather than a shared util. ── */
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}
function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
}
function readNumberCookie(name: string): number | null {
  const val = getCookie(name);
  const num = val ? Number(val) : NaN;
  return Number.isFinite(num) ? num : null;
}

/* ── InteriorPanel ──
   The inline detail/properties panel that lives BELOW the page header,
   inside the main container (e.g. the record-details panel in
   admin-shell.tsx's "interior panels row"). Always inline and resizable;
   opened via a click/trigger elsewhere in the main container (a button, a
   row select, etc. — there's no hover-to-open concept here, unlike
   `SidePanel`). Below 1024px of its parent container's width it switches
   to an absolute overlay instead of squeezing the content column further —
   the same 1024px threshold `SidePanel`'s own consumers (`AdminShell`, the
   "Agent Next Gen" template) use for their pin guard, unified so every
   panel in the system reacts to the same pixel width rather than each
   picking its own nearby value (previously 1050px here).

   This is one of exactly two panel types in the design system — the other
   being `SidePanel` (over the page header, hover/pin, left or right).
   They're deliberately separate components with different behavior, not
   one component switching on a `variant` prop — a prior unified `Panel`
   (`variant="side" | "interior"`) caused enough confusion between the two
   that it was split back into these two.

   Also distinct from `Draggable`/`DraggablePanel` (float/dockable overlay
   shells for things like the AI panel or notifications dropdown) — those
   aren't part of the app shell's side/interior panel system at all, see
   draggable.tsx. */

export interface InteriorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which edge of the main container the panel is docked to (default: "right") */
  side?: "left" | "right";
  /** Whether the panel is open (default: true) */
  open?: boolean;
  /** Called when the header's close (×) button is clicked */
  onClose?: () => void;

  /** Allow drag-to-resize on the panel's leading border (default: true) */
  resizable?: boolean;
  /** Min width when resizing, px (default: 350) */
  minWidth?: number;
  /** Max width when resizing, px (default: 425) */
  maxWidth?: number;
  /** Fired when a resize drag starts (true) or ends (false) */
  onResizeStateChange?: (isResizing: boolean) => void;
  /** Fired whenever the width changes during a drag */
  onWidthChange?: (width: number) => void;
  /**
   * Width in px. Defaults to `maxWidth` (opens fully expanded) — unless
   * `storageKey` is set and a previously drag-resized width was found under
   * that key, in which case that remembered width is used instead. Passing
   * this prop explicitly always wins over both.
   */
  width?: number;
  /**
   * Cookie key to remember this panel's drag-resized width under, across
   * opens/closes and even full remounts (e.g. navigating away from the page
   * and back, which unmounts the component and would otherwise lose the
   * resize). Omit to keep the current per-mount-only behavior (resizes
   * persist while the component stays mounted, same as before this prop
   * existed, but reset to `maxWidth` on a fresh mount). Give each distinct
   * interior panel in an app its own key — sharing one between two
   * different panels (e.g. two different pages' own interior panels) would
   * incorrectly apply one's remembered size to the other.
   */
  storageKey?: string;

  headerTitle?: string;
  /** Optional line below `headerTitle`, e.g. a record's name + id */
  headerSubhead?: string;
  headerIcon?: React.ReactNode;
  headerActions?: React.ReactNode;
  /**
   * A `TabList` rendered inside the header itself, below the title/subhead
   * row — forwarded straight to `PanelHeader`'s own `tabs` prop (see
   * container-header.tsx). This keeps the tabs genuinely fixed: they sit
   * outside `PanelContent` (the `flex-1 overflow-y-auto` scroll region
   * `children` renders into), not inside it with a hand-rolled `sticky`
   * wrapper — see CONTRIBUTING.md's "Composing panel body content" for why
   * that used to be the only option and what was wrong with it (the
   * surrounding scroll container's own scrollbar still ran alongside a
   * merely-`sticky` tab row, and selecting from a collapsed "N More"
   * overflow menu had its own separate bug on top of that). Pass the same
   * `TabList` you'd otherwise have put at the top of `children` — nothing
   * else about how you build it changes.
   */
  headerTabs?: React.ReactNode;

  /**
   * Adds a full-screen toggle button to the header (a `Maximize2`/
   * `Minimize2` icon, matching `ContainerHeader.stories.tsx`'s own
   * fullscreen-toggle reference) that expands the panel to the full width
   * of its container — same overlay mechanism the panel already uses below
   * 1024px of its parent's width (`isNarrow`, see the class doc comment
   * above), just user-triggered instead of width-triggered, so it needs no
   * extra cooperation from whatever main-content column sits next to this
   * panel: the panel simply covers it, rather than requiring that sibling
   * to shrink out of the way itself. Default `false` — every existing
   * panel is unaffected; opt in per usage for whichever ones actually
   * benefit from more room on demand (e.g. a wide table or transcript
   * inside the panel). Self-contained open/closed state (not controlled
   * from outside) — same "the component owns this interaction, not the
   * consumer" status as the resize drag state already has. Resizing
   * (`resizable`) is disabled while full-screen, since dragging a width
   * that's currently `100%` doesn't mean anything; it resumes at whatever
   * width was active before entering full-screen once toggled back off.
   */
  allowFullScreen?: boolean;

  footer?: React.ReactNode;
}

const InteriorPanel = React.forwardRef<HTMLDivElement, InteriorPanelProps>(
  (
    {
      className,
      side = "right",
      open = true,
      onClose,
      resizable = true,
      minWidth = 350,
      maxWidth = 425,
      onResizeStateChange,
      onWidthChange,
      width,
      storageKey,
      headerTitle,
      headerSubhead,
      headerIcon,
      headerActions,
      headerTabs,
      allowFullScreen = false,
      footer,
      children,
      ...props
    },
    ref
  ) => {
    // Resolution order: an explicit `width` prop always wins; otherwise a
    // previously drag-resized width remembered under `storageKey` (so it
    // survives even a full remount, e.g. navigating away and back);
    // otherwise `maxWidth` — panels open fully expanded by default. Read
    // once via `useState(() => ...)` rather than on every render, since
    // this only matters for the very first render's initial width; after
    // that, drag state (`usePanelDragResize`'s own `dragWidth`) takes over.
    const [initialWidth] = useState(() => {
      if (width !== undefined) return width;
      const stored = storageKey ? readNumberCookie(storageKey) : null;
      return stored ?? maxWidth;
    });

    const [isResizing, setIsResizing] = useState(false);
    const handleResizeStateChange = useCallback((r: boolean) => {
      setIsResizing(r);
      onResizeStateChange?.(r);
    }, [onResizeStateChange]);
    const handleWidthChange = useCallback((w: number) => {
      if (storageKey) setCookie(storageKey, String(w));
      onWidthChange?.(w);
    }, [storageKey, onWidthChange]);
    const { width: currentWidth, onMouseDown } = usePanelDragResize(
      side, initialWidth, minWidth, maxWidth, handleResizeStateChange, handleWidthChange
    );
    const widthTransition = isResizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)";

    // Keep border visible during the close animation so it doesn't snap away
    const [isClosing, setIsClosing] = useState(false);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    useEffect(() => {
      if (!open) {
        setIsClosing(true);
        closeTimerRef.current = setTimeout(() => setIsClosing(false), 260);
      } else {
        clearTimeout(closeTimerRef.current);
        setIsClosing(false);
      }
      return () => clearTimeout(closeTimerRef.current);
    }, [open]);

    // Full-screen toggle (see `allowFullScreen`'s own doc comment above) —
    // self-contained, not controlled from outside. Deliberately NOT reset
    // when the panel closes: closing while full-screen and reopening later
    // should come back full-screen, the same way a resized width is
    // remembered across a close/reopen (just per-mount rather than via a
    // `storageKey` cookie) — confirmed as the wanted behavior over
    // "always reopens at the pre-full-screen size."
    const [isFullScreen, setIsFullScreen] = useState(false);
    const fullScreenToggle = allowFullScreen ? (
      <Tooltip content={isFullScreen ? "Exit full screen" : "Full screen"} placement="bottom" asLabel>
        <button
          type="button"
          aria-label={isFullScreen ? "Exit full screen" : "Full screen"}
          onClick={() => setIsFullScreen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          {isFullScreen ? (
            <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </Tooltip>
    ) : null;

    /* ── Go absolute/overlay when the parent container is < 1024px, instead
       of squeezing the main content column further — matches SidePanel's
       own pin-guard threshold (admin-shell.tsx / AgentNextGenTemplate),
       previously 1050px here ── */
    const outerRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(9999);
    const isNarrow = parentWidth < 1024;

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

    // Dragging a width that's currently forced to 100% doesn't mean
    // anything, so the handle disappears while full-screen — it comes back
    // at whatever width was active before, once toggled back off.
    const dragHandle = resizable && open && !isFullScreen ? (
      <div
        onMouseDown={onMouseDown}
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center group"
        style={{ [side === "right" ? "left" : "right"]: -4, width: 8, cursor: "col-resize" }}
        aria-hidden="true"
      >
        <div className="w-0.5 h-8 rounded-full bg-lyra-border-default opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    ) : null;

    // `currentWidth` (px, from drag-resize state) everywhere below, except
    // while full-screen — then the panel's actual on-screen size is "100%
    // of its container" instead, and every place that otherwise sizes off
    // `currentWidth` needs to say so too, not just the outermost shell
    // (`inner`'s own width, and the left-side absolute-positioning wrapper
    // further down, would otherwise still cap content at the pre-full-
    // screen px width inside an outer shell that's already gone full width,
    // leaving empty space instead of actually filling it).
    const displayWidth: number | string = isFullScreen ? "100%" : currentWidth;

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
              actions={<>{headerActions}{fullScreenToggle}</>}
              tabs={headerTabs}
              onClose={onClose}
              bordered={false}
            />
          )}
          <PanelContent>{children}</PanelContent>
          {footer && <PanelFooter>{footer}</PanelFooter>}
        </div>
      </div>
    );

    // Keep border visible during close animation so it doesn't snap away
    const border = (open || isClosing)
      ? (side === "right" ? "border-l border-lyra-border-subtle" : "border-r border-lyra-border-subtle")
      : "";
    const interiorWidth: number | string = open ? displayWidth : 0;
    const pos = side === "right" ? "right-0" : "left-0";

    // Overlay instead of pushing the main content column: either the
    // parent container is genuinely too narrow to squeeze further
    // (`isNarrow`), or the panel is explicitly full-screen — same
    // mechanism either way (`position: absolute`, covering whatever's
    // beside it rather than requiring that sibling to shrink out of the
    // way), just a different trigger. See `allowFullScreen`'s own doc
    // comment for why full-screen deliberately reuses this instead of
    // needing its own separate layout branch.
    if (isNarrow || isFullScreen) {
      return (
        <div
          ref={stableOuterRef}
          className={cn("absolute top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-overlay shadow-lg", pos, border, className)}
          style={{ width: interiorWidth, transition: widthTransition }}
          {...props}
        >
          {inner}
        </div>
      );
    }

    return (
      <div
        ref={stableOuterRef}
        className={cn("relative flex flex-col h-full bg-lyra-bg-surface-overlay shrink-0", border, className)}
        style={{
          width: interiorWidth,
          minWidth: 0,
          overflow: "hidden",
          transition: widthTransition,
        }}
        {...props}
      >
        {/* Left-side interior: align content to right edge during animation */}
        {side === "left"
          ? <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: displayWidth, minWidth: displayWidth }}>{inner}</div>
          : inner
        }
      </div>
    );
  }
);
InteriorPanel.displayName = "InteriorPanel";

export { InteriorPanel };
