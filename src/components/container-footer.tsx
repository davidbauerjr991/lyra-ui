import * as React from "react";
import { cn } from "../lib/utils";

/* ── Types ── */

export type ContainerFooterAlign = "left" | "right" | "full";

export interface ContainerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Footer content — normally one or more `Button`s. Rendered in a row with
   * an 8px gap; how that row sits in the footer is set by `align`.
   */
  actions?: React.ReactNode;
  /**
   * Where the buttons sit in the footer:
   * - `"left"` — grouped at the start edge.
   * - `"right"` (default) — grouped at the end edge, the usual dialog/card
   *   convention for a primary action.
   * - `"full"` — every button stretches equally to fill the row (a single
   *   button becomes one full-width button).
   */
  align?: ContainerFooterAlign;
  /** Show a border along the top edge of the footer (default: false) */
  bordered?: boolean;
}

/* Literal class strings so Tailwind's content scanner can find each one. */
const ALIGN_CLASSES: Record<ContainerFooterAlign, string> = {
  left: "justify-start",
  right: "justify-end",
  full: "[&>*]:flex-1",
};

/* ── Component ── */

/**
 * Footer row for a `Container` (mirror of `ContainerHeader`). `Container`
 * renders this itself when any `footer*` prop is set; it can also be used
 * standalone at the bottom of any surface.
 */
const ContainerFooter = React.forwardRef<HTMLDivElement, ContainerFooterProps>(
  ({ className, actions, align = "right", bordered = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex shrink-0 items-center gap-2 px-4 py-3",
        ALIGN_CLASSES[align],
        bordered && "border-t border-lyra-border-subtle",
        className
      )}
      {...props}
    >
      {actions}
      {children}
    </div>
  )
);
ContainerFooter.displayName = "ContainerFooter";

export { ContainerFooter };
