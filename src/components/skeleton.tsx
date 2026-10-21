import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Skeleton ──
   Soft placeholder bars shown where content will be once it has loaded. Purely
   visual (`aria-hidden`): put the loading message, or a `Spinner`, next to it so
   assistive tech hears what is happening. Pulses, and holds still under
   `prefers-reduced-motion`. */

const skeletonLineVariants = cva("block animate-pulse rounded-full bg-lyra-border-subtle motion-reduce:animate-none", {
  variants: {
    size: {
      sm: "h-2",
      md: "h-2.5",
      lg: "h-3.5",
    },
  },
  defaultVariants: { size: "md" },
});

export interface SkeletonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof skeletonLineVariants> {
  /** Number of placeholder lines. Default 3. */
  lines?: number;
  /** Width of the last line, as a percent of the full width, so a block of text looks natural. Default 55. Use 100 for equal lines. */
  lastLineWidth?: number;
  /** Space between lines: "sm" 6px, "md" 8px (default), "lg" 12px. */
  gap?: "sm" | "md" | "lg";
}

const GAP: Record<NonNullable<SkeletonProps["gap"]>, string> = { sm: "gap-1.5", md: "gap-2", lg: "gap-3" };

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ lines = 3, lastLineWidth = 55, gap = "md", size, className, ...props }, ref) => (
  <div ref={ref} aria-hidden="true" className={cn("flex flex-col", GAP[gap], className)} {...props}>
    {Array.from({ length: Math.max(1, lines) }, (_, i) => (
      <span
        key={i}
        className={skeletonLineVariants({ size })}
        // The last line is shorter; the others taper slightly so the block reads as a paragraph.
        style={{ width: `${lines > 1 && i === lines - 1 ? lastLineWidth : lines > 1 && lastLineWidth < 100 ? 100 - i * 8 : 100}%` }}
      />
    ))}
  </div>
));
Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonLineVariants };
