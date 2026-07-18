import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../lib/utils";

/* ── Separator ──
   Was `Divider` (`divider.tsx`) — a plain hand-rolled `<div role="separator"
   aria-orientation={...}>`. Renamed and rebuilt on Radix's own Separator
   primitive (`@radix-ui/react-separator`) instead, matching every other
   structural atom in this library that already wraps a Radix primitive
   (`Accordion`, `Select`, `Popover`, `Tooltip`, etc.) rather than
   hand-rolling its own ARIA semantics. Radix's `Root` renders the same
   underlying `<div>` and handles `role`/`aria-orientation` itself —
   `role="separator"` + `aria-orientation="vertical"` when not `decorative`
   and vertical (horizontal has no `aria-orientation`, since that's the
   ARIA-implicit default), or `role="none"` when `decorative` (the default
   in most consumers' actual usage — a purely visual rule, not a semantic
   boundary between sections of content) — rather than always forcing
   `role="separator"` the way the old hand-rolled version did regardless of
   context. Visual output (the border classes below) is unchanged, so this
   is a drop-in rename for every existing call site: `Divider` → `Separator`,
   same `orientation`/`className` props. */

export type SeparatorOrientation = "horizontal" | "vertical";

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /**
   * Layout direction of the separator line.
   * "horizontal" spans the full width of its parent (use inside a block/flex-column layout).
   * "vertical" spans the full height of its parent (use inside a flex-row layout with a defined height).
   */
  orientation?: SeparatorOrientation;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    orientation={orientation}
    className={cn(
      orientation === "horizontal"
        ? "w-full shrink-0 border-t border-lyra-border-subtle"
        : "h-full shrink-0 border-l border-lyra-border-subtle",
      className
    )}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
