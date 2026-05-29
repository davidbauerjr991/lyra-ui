import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
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
  /**
   * When true, the tooltip sets aria-label on the trigger instead of
   * aria-describedby. Use for icon-only buttons where the tooltip IS
   * the accessible name (not supplementary description).
   */
  asLabel?: boolean;
}

/* ── Map our placement names to Radix side ── */

const placementToSide: Record<TooltipPlacement, "top" | "bottom" | "left" | "right"> = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};

/* ── Tooltip ── */

const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = "top",
  delayMs = 200,
  className,
  children,
  asLabel = false,
}) => {
  // Build ARIA props for the trigger element when asLabel is true
  const contentString = typeof content === "string" ? content : undefined;
  const triggerAriaProps: Record<string, unknown> = {};
  if (asLabel && contentString) {
    triggerAriaProps["aria-label"] = contentString;
  }

  return (
    <TooltipPrimitive.Provider delayDuration={delayMs} skipDelayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild {...triggerAriaProps}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placementToSide[placement]}
            sideOffset={4}
            className={cn(
              "z-50 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay px-3 py-2 shadow-md",
              "lyra-body-md text-lyra-fg-default",
              "animate-in fade-in-0 zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              className
            )}
          >
            {content}
            <TooltipPrimitive.Arrow
              className="fill-lyra-bg-surface-overlay drop-shadow-[0_1px_0_var(--lyra-border-subtle)]"
              width={16}
              height={8}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = "Tooltip";

export { Tooltip };
export type { TooltipProps, TooltipPlacement };
