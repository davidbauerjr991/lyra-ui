import * as React from "react";
import { GripVertical, PanelRight, Move } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Panel Resize Direction Rules ─────────────────────────────────────────
 *
 *  FLOAT mode — bottom-right corner handle
 *    • Left edge is ANCHORED (fixed CSS `left` position stored in a ref).
 *    • Resizing always grows the RIGHT edge rightward.
 *    • The `floatLeft` ref MUST be set when the panel opens and cleared when
 *      it closes so that the `left` style value does NOT recalculate on every
 *      render as `width` changes (which would move the left edge leftward and
 *      make the panel appear to resize in the wrong direction).
 *    • Rule: anchor floatLeft.current = containerWidth - panelWidth - margin
 *      on open; reset to null on close; update on variant change (dock→float).
 *
 *  DOCKED mode — left edge handle
 *    • Right edge is fixed at the viewport/container boundary.
 *    • Dragging the left edge LEFTWARD grows the panel (into the content area).
 *    • Dragging RIGHTWARD shrinks the panel.
 *    • This is the correct natural behavior for a right-docked panel.
 *
 * ── Panel Open / Close Animation Rules ────────────────────────────────────
 *
 *  All panels and dropdowns in the design system use the same data-state
 *  animation pattern driven by tailwindcss-animate utility classes.
 *
 *  Standard classes (apply to the outermost wrapper div of the panel):
 *    open:   animate-in fade-in-0 slide-in-from-top-2 duration-150
 *    close:  data-[state=closed]:animate-out data-[state=closed]:fade-out-0
 *            data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100
 *
 *  data-state attribute:
 *    • Set to "open" or "closed" on the wrapper div.
 *    • Driven by a `visible` state variable that is toggled to false IMMEDIATELY
 *      when the panel closes — this triggers the CSS animate-out before removal.
 *    • A separate `mounted` state variable stays true for 300 ms after close
 *      (via setTimeout) to keep the element in the DOM long enough for the
 *      animate-out to complete before unmounting.
 *    • `visible` → false immediately on close (triggers CSS close animation)
 *    • `mounted` → false after 300 ms (removes element from DOM)
 *
 *  Float panels:
 *    • Apply all open AND close classes (slide-in/slide-out from top).
 *    • data-state={visible ? "open" : "closed"}
 *
 *  Docked panels:
 *    • The width wrapper already provides a slide effect via CSS width transition.
 *    • Apply only fade-in/fade-out to the inner content wrapper (no slide).
 *    • data-state={visible ? "open" : "closed"}
 *
 * ── Multi-Panel Z-Index & Docking Rules ──────────────────────────────────
 *
 *  Z-INDEX (float mode only)
 *    • The most recently opened or clicked panel gets z-index: 10000.
 *    • Other float panels get z-index: 9999.
 *    • Track with `topPanel` state in the parent; attach onMouseDown to float wrapper.
 *
 *  SINGLE-DOCK RULE
 *    • Only one panel may be docked at a time.
 *    • When a second panel docks, force the current docked panel back to float.
 *    • Reset the displaced panel's floatLeft ref to containerWidth - panelWidth - 16.
 *    • Requires variant prop to be synced into internal state via useEffect so the
 *      parent can force a variant change externally.
 *
 * ─────────────────────────────────────────────────────────────────────── */

/* ── Types ── */

export type DraggableVariant = "float" | "docked";

/** Props passed to renderHeaderControls so the consumer can inline grip + dock. */
export interface DraggableHeaderControls {
  /** Spread onto a draggable handle element (float mode only — noop in docked). */
  gripProps: {
    onMouseDown: React.MouseEventHandler<HTMLElement>;
    "aria-hidden": true;
    className: string;
  };
  /** Spread onto the dock/undock button. */
  dockButtonProps: {
    type: "button";
    onClick: () => void;
    "aria-label": string;
    className: string;
  };
  /** Current icon for the dock button (already correct for the active variant). */
  dockIcon: React.ReactNode;
  /** Current variant — lets the consumer conditionally render the grip. */
  variant: DraggableVariant;
}

export interface DraggableProps {
  children: React.ReactNode;
  /** "float" — freely draggable. "docked" — pinned to right edge. */
  variant?: DraggableVariant;
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  /** Called when variant changes via the dock toggle button */
  onVariantChange?: (variant: DraggableVariant) => void;
  /**
   * When provided, Draggable skips its built-in overlay and calls this instead,
   * passing grip + dock props so the consumer can place them inside its own header.
   * When used, the automatic pl-7 padding on the first child is also suppressed.
   */
  renderHeaderControls?: (controls: DraggableHeaderControls) => React.ReactNode;
  /** Hide the built-in grip/dock header controls (use when the consumer renders them inline) */
  showHeaderControls?: boolean;
  /** Prevent the variant from being toggled via the header button */
  lockVariant?: boolean;
  /** Called when width changes via resize */
  onWidthChange?: (width: number) => void;
  /** Called when resize drag starts/ends */
  onResizeStateChange?: (resizing: boolean) => void;
  /**
   * Called on any mousedown inside the panel root.
   * Use this in the parent to implement "bring to front" z-index management.
   * Prefer this over onMouseDown on the float wrapper div — the wrapper's layout
   * box stays at the original position when the panel is dragged via CSS transform,
   * creating an invisible ghost hit area. The Draggable root div follows the transform.
   */
  onInteract?: () => void;
  className?: string;
}

/* ── Component ── */

const Draggable = React.forwardRef<HTMLDivElement, DraggableProps>(
  ({
    children,
    variant: variantProp  = "float",
    defaultWidth          = 320,
    defaultHeight         = 480,
    minWidth              = 280,
    maxWidth              = Infinity,
    minHeight             = 200,
    onVariantChange,
    renderHeaderControls,
    showHeaderControls = true,
    lockVariant = false,
    onWidthChange,
    onResizeStateChange,
    onInteract,
    className,
  }, ref) => {
    const [variant, setVariant] = React.useState<DraggableVariant>(variantProp);
    const [offset,  setOffset]  = React.useState({ x: 0, y: 0 });
    const [width,   setWidth]   = React.useState(defaultWidth);
    const [height,  setHeight]  = React.useState(defaultHeight);

    // Sync variant when parent changes the prop (e.g. forced float by single-dock rule)
    React.useEffect(() => { setVariant(variantProp); }, [variantProp]);

    // Sync when defaultHeight changes (e.g. viewport resize)
    React.useEffect(() => { setHeight(defaultHeight); }, [defaultHeight]);

    const dragStart   = React.useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);
    const resizeStart = React.useRef<{ mx: number; my: number; w: number; h: number } | null>(null);

    const toggleVariant = () => {
      if (lockVariant) return;
      const next: DraggableVariant = variant === "float" ? "docked" : "float";
      setVariant(next);
      setOffset({ x: 0, y: 0 });
      onVariantChange?.(next);
    };

    /* ── Float: drag ── */
    const onDragMouseDown = (e: React.MouseEvent) => {
      if (variant !== "float") return;
      if ((e.target as HTMLElement).closest("button")) return;
      e.preventDefault();
      dragStart.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
      document.body.style.cursor     = "grabbing";
      document.body.style.userSelect = "none";
      const onMove = (ev: MouseEvent) => {
        if (!dragStart.current) return;
        setOffset({ x: dragStart.current.ox + ev.clientX - dragStart.current.mx,
                    y: dragStart.current.oy + ev.clientY - dragStart.current.my });
      };
      const onUp = () => {
        dragStart.current = null;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };

    /* ── Float: corner resize ── */
    const onCornerResizeDown = (e: React.MouseEvent) => {
      e.preventDefault(); e.stopPropagation();
      resizeStart.current = { mx: e.clientX, my: e.clientY, w: width, h: height };
      document.body.style.cursor     = "se-resize";
      document.body.style.userSelect = "none";
      onResizeStateChange?.(true);
      const onMove = (ev: MouseEvent) => {
        if (!resizeStart.current) return;
        const newW = Math.min(maxWidth, Math.max(minWidth, resizeStart.current.w + ev.clientX - resizeStart.current.mx));
        setWidth(newW); onWidthChange?.(newW);
        setHeight(Math.max(minHeight, resizeStart.current.h + ev.clientY - resizeStart.current.my));
      };
      const onUp = () => {
        resizeStart.current = null;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        onResizeStateChange?.(false);
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };

    /* ── Docked: left edge resize ── */
    const onLeftEdgeResizeDown = (e: React.MouseEvent) => {
      e.preventDefault(); e.stopPropagation();
      resizeStart.current = { mx: e.clientX, my: e.clientY, w: width, h: height };
      document.body.style.cursor     = "ew-resize";
      document.body.style.userSelect = "none";
      onResizeStateChange?.(true);
      const onMove = (ev: MouseEvent) => {
        if (!resizeStart.current) return;
        const newW = Math.min(maxWidth, Math.max(minWidth, resizeStart.current.w + resizeStart.current.mx - ev.clientX));
        setWidth(newW); onWidthChange?.(newW);
      };
      const onUp = () => {
        resizeStart.current = null;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        onResizeStateChange?.(false);
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };

    /* ── Built-in overlay (used when renderHeaderControls is NOT provided) ── */
    /* h-16 = 64px matches ContainerHeader (py-5 + heading-md line-height) */
    const BuiltInHeaderControls = (
      <div className="absolute inset-x-0 top-0 h-16 z-20 flex items-center justify-between px-2 pointer-events-none">
        {/* Grip — float only */}
        {variant === "float" ? (
          <div
            className="flex items-center pointer-events-auto cursor-grab active:cursor-grabbing text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors"
            onMouseDown={onDragMouseDown}
            aria-hidden="true"
          >
            <GripVertical className="h-4 w-4" strokeWidth={1.5} />
          </div>
        ) : <span />}

        {/* Dock/undock toggle */}
        <Tooltip content={variant === "float" ? "Dock to side" : "Undock"} placement="bottom">
          <button
            type="button"
            onClick={toggleVariant}
            aria-label={variant === "float" ? "Dock to side" : "Undock"}
            className="flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus pointer-events-auto"
          >
            {variant === "float"
              ? <PanelRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              : <Move       className="h-3.5 w-3.5" strokeWidth={1.5} />}
          </button>
        </Tooltip>
      </div>
    );

    /* Controls object passed to renderHeaderControls consumers */
    const headerControlProps: DraggableHeaderControls = {
      gripProps: {
        onMouseDown: onDragMouseDown,
        "aria-hidden": true,
        className: "flex items-center cursor-grab active:cursor-grabbing text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors",
      },
      dockButtonProps: {
        type: "button",
        onClick: toggleVariant,
        "aria-label": variant === "float" ? "Dock to side" : "Undock",
        className: "flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
      },
      dockIcon: variant === "float"
        ? <PanelRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        : <Move       className="h-3.5 w-3.5" strokeWidth={1.5} />,
      variant,
    };

    const useInlineControls = !!renderHeaderControls;

    /* ── Docked ── */
    if (variant === "docked") {
      return (
        <div
          ref={ref}
          style={{ width, minWidth }}
          className={cn("relative flex flex-col h-full overflow-hidden", className)}
          onMouseDown={() => onInteract?.()}
        >
          {/* Left edge resize handle — expands left, right side stays fixed */}
          <div
            onMouseDown={onLeftEdgeResizeDown}
            className="absolute left-0 top-0 bottom-0 w-1.5 cursor-ew-resize z-10 group/edge"
            aria-hidden="true"
          >
            <div className="absolute inset-y-0 left-0 w-px bg-lyra-border-subtle group-hover/edge:bg-lyra-border-active transition-colors" />
          </div>

          {!useInlineControls && showHeaderControls && BuiltInHeaderControls}
          <div className="flex flex-col flex-1 min-h-0">
            {useInlineControls ? renderHeaderControls!(headerControlProps) : null}
            {children}
          </div>
        </div>
      );
    }

    /* ── Float ── */
    return (
      <div
        ref={ref}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, width, height, pointerEvents: "auto" }}
        className={cn("relative flex flex-col overflow-hidden", className)}
        onMouseDown={() => onInteract?.()}
      >
        {!useInlineControls && showHeaderControls && BuiltInHeaderControls}
        {/* pl-7 gives the first child's header room for the grip icon — only when using built-in overlay */}
        <div className={cn("flex flex-col flex-1 min-h-0", !useInlineControls && "[&>*:first-child]:pl-7")}>
          {useInlineControls ? renderHeaderControls!(headerControlProps) : null}
          {children}
        </div>

        {/* Bottom-right corner resize handle */}
        <div
          onMouseDown={onCornerResizeDown}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end pb-1 pr-1 group/resize z-10"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-lyra-border-default group-hover/resize:text-lyra-border-active transition-colors">
            <path d="M9 1L1 9M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }
);
Draggable.displayName = "Draggable";

export { Draggable };
