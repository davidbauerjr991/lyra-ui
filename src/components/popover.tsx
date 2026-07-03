import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { PanelHeader } from "./panel-header";

/* ── Types ── */

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

/** Radix's own Content prop types, reused below so the passthrough handlers
 *  can't drift out of sync with the primitive they forward to. */
type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

export interface PopoverProps {
  children: React.ReactElement;
  content: React.ReactNode;
  /** Fixed footer rendered outside the scroll area */
  footer?: React.ReactNode;
  title?: string;
  placement?: PopoverPlacement;
  /** Alignment relative to the trigger along the placement axis (default: "center") */
  align?: "start" | "center" | "end";
  /** Gap between the trigger and the content, in pixels (default: 10) */
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showArrow?: boolean;
  maxHeight?: string;
  maxWidth?: string;
  className?: string;
  /** Passthrough Radix Content event hooks for cases that need more control
   *  than the default behavior — e.g. focusing a specific field on open
   *  instead of the first focusable element, or ignoring outside-clicks on
   *  a portaled submenu rendered outside this popover's own DOM subtree.
   *  Left undefined, Radix's defaults apply exactly as before. */
  onOpenAutoFocus?: PopoverContentProps["onOpenAutoFocus"];
  onCloseAutoFocus?: PopoverContentProps["onCloseAutoFocus"];
  onEscapeKeyDown?: PopoverContentProps["onEscapeKeyDown"];
  onInteractOutside?: PopoverContentProps["onInteractOutside"];
}

/* ── Arrow — CSS rotated square inside Content so it never moves independently ── */
const PopoverArrow = () => (
  <span
    aria-hidden="true"
    className={cn(
      "absolute w-[10px] h-[10px] rotate-45",
      "bg-lyra-bg-surface-overlay",
      "border-lyra-border-subtle",
      // side=bottom → arrow points UP → top edge
      "group-data-[side=bottom]:-top-[5px]",
      "group-data-[side=bottom]:left-1/2",
      "group-data-[side=bottom]:-translate-x-1/2",
      "group-data-[side=bottom]:border-t",
      "group-data-[side=bottom]:border-l",
      // side=top → arrow points DOWN → bottom edge
      "group-data-[side=top]:-bottom-[5px]",
      "group-data-[side=top]:left-1/2",
      "group-data-[side=top]:-translate-x-1/2",
      "group-data-[side=top]:border-b",
      "group-data-[side=top]:border-r",
      // side=right → arrow points LEFT → left edge
      "group-data-[side=right]:-left-[5px]",
      "group-data-[side=right]:top-1/2",
      "group-data-[side=right]:-translate-y-1/2",
      "group-data-[side=right]:border-l",
      "group-data-[side=right]:border-b",
      // side=left → arrow points RIGHT → right edge
      "group-data-[side=left]:-right-[5px]",
      "group-data-[side=left]:top-1/2",
      "group-data-[side=left]:-translate-y-1/2",
      "group-data-[side=left]:border-r",
      "group-data-[side=left]:border-t",
    )}
  />
);

/* ── Component ── */

const Popover = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverProps>(({
  children,
  content,
  footer,
  title,
  placement = "bottom",
  align = "center",
  sideOffset = 10,
  open,
  onOpenChange,
  showArrow = true,
  maxHeight,
  maxWidth,
  className,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onInteractOutside,
}, ref) => (
  <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        side={placement}
        align={align}
        sideOffset={sideOffset}
        onOpenAutoFocus={onOpenAutoFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onInteractOutside={onInteractOutside}
        style={{
          maxWidth,
          /* overflow:hidden + maxHeight constrains the flex algorithm so children can distribute space */
          ...(footer && maxHeight
            ? { maxHeight, display: "flex", flexDirection: "column", overflow: "hidden" }
            : {}),
        }}
        className={cn(
          "relative group z-50",
          "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
          "animate-in fade-in-0 duration-150",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-100",
          "data-[state=closed]:data-[side=bottom]:slide-out-to-top-1 data-[state=closed]:data-[side=top]:slide-out-to-bottom-1",
          "data-[state=closed]:data-[side=left]:slide-out-to-right-1 data-[state=closed]:data-[side=right]:slide-out-to-left-1",
          className
        )}
      >
        {title && <PanelHeader title={title} bordered={false} />}
        {/* Content scrolls; footer is flex-shrink-0 so it stays visible.
            overflow-auto is only applied when maxHeight actually constrains
            the height — otherwise it's dead weight that can backfire: a
            CSS-transform entrance animation on something inside (e.g. a
            slide-in) can register as scrollable overflow and paint a
            horizontal scrollbar even though nothing is meant to scroll here. */}
        <div
          className={maxHeight ? "overflow-auto" : undefined}
          style={
            footer && maxHeight
              ? { flex: "1 1 auto", minHeight: 0, overflowY: "auto" }
              : maxHeight
              ? { maxHeight }
              : undefined
          }
        >
          {content}
        </div>
        {footer && <div style={{ flexShrink: 0 }}>{footer}</div>}
        {showArrow && <PopoverArrow />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
));

Popover.displayName = "Popover";

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = PopoverPrimitive.Content;
const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };
