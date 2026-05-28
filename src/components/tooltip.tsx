import * as React from "react";
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { cn } from "../lib/utils";

/* ── Types ── */

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  /** The content displayed inside the tooltip */
  content: React.ReactNode;
  /** Preferred placement of the tooltip relative to the trigger */
  placement?: TooltipPlacement;
  /** Delay in ms before the tooltip appears (default 200) */
  delayMs?: number;
  /** Additional className for the tooltip bubble */
  className?: string;
  /** The trigger element */
  children: React.ReactElement;
}

/* ── Arrow ── */

const arrowSize = 8;

function Arrow({ placement }: { placement: TooltipPlacement }) {
  const base =
    "absolute h-0 w-0 border-solid border-transparent";

  switch (placement) {
    case "top":
      return (
        <span
          className={cn(base, "left-1/2 -translate-x-1/2")}
          style={{
            bottom: -arrowSize,
            borderWidth: arrowSize,
            borderBottomWidth: 0,
            borderTopColor: "var(--lyra-border-subtle)",
          }}
        >
          {/* inner arrow for fill */}
          <span
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: -(arrowSize + 1),
              borderWidth: arrowSize,
              borderBottomWidth: 0,
              borderStyle: "solid",
              borderColor: "transparent",
              borderTopColor: "var(--lyra-bg-surface-overlay, #fff)",
            }}
          />
        </span>
      );
    case "bottom":
      return (
        <span
          className={cn(base, "left-1/2 -translate-x-1/2")}
          style={{
            top: -arrowSize,
            borderWidth: arrowSize,
            borderTopWidth: 0,
            borderBottomColor: "var(--lyra-border-subtle)",
          }}
        >
          <span
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: -(arrowSize + 1),
              borderWidth: arrowSize,
              borderTopWidth: 0,
              borderStyle: "solid",
              borderColor: "transparent",
              borderBottomColor: "var(--lyra-bg-surface-overlay, #fff)",
            }}
          />
        </span>
      );
    case "left":
      return (
        <span
          className={cn(base, "top-1/2 -translate-y-1/2")}
          style={{
            right: -arrowSize,
            borderWidth: arrowSize,
            borderRightWidth: 0,
            borderLeftColor: "var(--lyra-border-subtle)",
          }}
        >
          <span
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: -(arrowSize + 1),
              borderWidth: arrowSize,
              borderRightWidth: 0,
              borderStyle: "solid",
              borderColor: "transparent",
              borderLeftColor: "var(--lyra-bg-surface-overlay, #fff)",
            }}
          />
        </span>
      );
    case "right":
      return (
        <span
          className={cn(base, "top-1/2 -translate-y-1/2")}
          style={{
            left: -arrowSize,
            borderWidth: arrowSize,
            borderLeftWidth: 0,
            borderRightColor: "var(--lyra-border-subtle)",
          }}
        >
          <span
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              right: -(arrowSize + 1),
              borderWidth: arrowSize,
              borderLeftWidth: 0,
              borderStyle: "solid",
              borderColor: "transparent",
              borderRightColor: "var(--lyra-bg-surface-overlay, #fff)",
            }}
          />
        </span>
      );
  }
}

/* ── Tooltip ── */

const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = "top",
  delayMs = 200,
  className,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [positioned, setPositioned] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const show = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(true), delayMs);
  }, [delayMs]);

  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
    setPositioned(false);
  }, []);

  /* Position the tooltip synchronously before paint */
  useLayoutEffect(() => {
    if (!visible || !triggerRef.current || !tooltipRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const gap = 4;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = trigger.top - tooltip.height - gap - arrowSize;
        left = trigger.left + trigger.width / 2 - tooltip.width / 2;
        break;
      case "bottom":
        top = trigger.bottom + gap + arrowSize;
        left = trigger.left + trigger.width / 2 - tooltip.width / 2;
        break;
      case "left":
        top = trigger.top + trigger.height / 2 - tooltip.height / 2;
        left = trigger.left - tooltip.width - gap - arrowSize;
        break;
      case "right":
        top = trigger.top + trigger.height / 2 - tooltip.height / 2;
        left = trigger.right + gap + arrowSize;
        break;
    }

    setPos({ top, left });
    setPositioned(true);
  }, [visible, placement]);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: (e: React.MouseEvent) => {
          show();
          children.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          hide();
          children.props.onMouseLeave?.(e);
        },
        onFocus: (e: React.FocusEvent) => {
          show();
          children.props.onFocus?.(e);
        },
        onBlur: (e: React.FocusEvent) => {
          hide();
          children.props.onBlur?.(e);
        },
      })}
      {visible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            "fixed z-50 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay px-3 py-2 shadow-md",
            "lyra-body-md text-lyra-fg-default",
            className
          )}
          style={{
            top: pos.top,
            left: pos.left,
            opacity: positioned ? 1 : 0,
            transition: positioned ? "opacity 150ms ease-in" : "none",
          }}
        >
          {content}
          <Arrow placement={placement} />
        </div>
      )}
    </>
  );
};

Tooltip.displayName = "Tooltip";

export { Tooltip };
export type { TooltipProps, TooltipPlacement };
