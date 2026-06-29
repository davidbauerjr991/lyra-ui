import * as React from "react";
import { GripVertical, PanelRight, Move } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

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
    minHeight             = 200,
    onVariantChange,
    renderHeaderControls,
    showHeaderControls = true,
    lockVariant = false,
    onWidthChange,
    onResizeStateChange,
    className,
  }, ref) => {
    const [variant, setVariant] = React.useState<DraggableVariant>(variantProp);
    const [offset,  setOffset]  = React.useState({ x: 0, y: 0 });
    const [width,   setWidth]   = React.useState(defaultWidth);
    const [height,  setHeight]  = React.useState(defaultHeight);

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
        const newW = Math.max(minWidth, resizeStart.current.w + ev.clientX - resizeStart.current.mx);
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
        const newW = Math.max(minWidth, resizeStart.current.w + resizeStart.current.mx - ev.clientX);
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
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, width, height }}
        className={cn("relative flex flex-col overflow-hidden", className)}
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
