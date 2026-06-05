import * as React from "react";
import { GripVertical, PanelRight, Move } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

export type DraggableVariant = "float" | "docked";

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
    className,
  }, ref) => {
    const [variant, setVariant] = React.useState<DraggableVariant>(variantProp);
    const [offset,  setOffset]  = React.useState({ x: 0, y: 0 });
    const [width,   setWidth]   = React.useState(defaultWidth);
    const [height,  setHeight]  = React.useState(defaultHeight);

    const dragStart   = React.useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);
    const resizeStart = React.useRef<{ mx: number; my: number; w: number; h: number } | null>(null);

    const toggleVariant = () => {
      const next: DraggableVariant = variant === "float" ? "docked" : "float";
      setVariant(next);
      setOffset({ x: 0, y: 0 }); // reset position when toggling
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
      const onMove = (ev: MouseEvent) => {
        if (!resizeStart.current) return;
        setWidth( Math.max(minWidth,  resizeStart.current.w + ev.clientX - resizeStart.current.mx));
        setHeight(Math.max(minHeight, resizeStart.current.h + ev.clientY - resizeStart.current.my));
      };
      const onUp = () => {
        resizeStart.current = null;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
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
      const onMove = (ev: MouseEvent) => {
        if (!resizeStart.current) return;
        setWidth(Math.max(minWidth, resizeStart.current.w + resizeStart.current.mx - ev.clientX));
      };
      const onUp = () => {
        resizeStart.current = null;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };

    /* ── Grip overlay — float only, left-aligned, doesn't block right-side header actions ── */
    /* h-11 = 44px matches standard lyra header (py-3 + body-md line-height) */
    const HeaderControls = (
      <div className="absolute inset-x-0 top-0 h-11 z-20 flex items-center justify-between px-2 pointer-events-none">
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

    /* ── Docked ── */
    if (variant === "docked") {
      return (
        <div
          ref={ref}
          style={{ width, minWidth }}
          className={cn("relative flex flex-col h-full overflow-hidden", className)}
        >
          {/* Left edge resize handle */}
          <div
            onMouseDown={onLeftEdgeResizeDown}
            className="absolute left-0 top-0 bottom-0 w-1.5 cursor-ew-resize z-10 group/edge"
            aria-hidden="true"
          >
            <div className="absolute inset-y-0 left-0 w-px bg-lyra-border-subtle group-hover/edge:bg-lyra-border-active transition-colors" />
          </div>

          {HeaderControls}
          {/* pr-8 reserves space for the dock/undock button on the right */}
          <div className="flex flex-col flex-1 min-h-0 [&>*:first-child]:pr-8">{children}</div>
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
        {HeaderControls}
        {/* pl-7 reserves space for the grip; pr-8 reserves space for the dock button */}
        <div className="flex flex-col flex-1 min-h-0 [&>*:first-child]:pl-7 [&>*:first-child]:pr-8">{children}</div>

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
