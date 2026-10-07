import type { TooltipPlacement } from "../tooltip";

/* Shared by Tooltip.stories.tsx and Tooltip.variants.stories.tsx. */

export const TOOLTIP_PLACEMENTS: TooltipPlacement[] = ["top", "bottom", "left", "right"];

export const SHORT_TEXT = "Tooltip text in here";
export const LONG_TEXT =
  "This is a longer tooltip message that wraps across multiple lines to show how the component handles it.";
