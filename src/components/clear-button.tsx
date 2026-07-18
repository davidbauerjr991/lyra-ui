import * as React from "react";
import { X } from "lucide-react";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

/* ── ClearButton ──
   Shared "clear text" trigger — a small (20px) rounded box around an X
   glyph, with a hover background and a "Clear" tooltip. Used by both
   `SearchInput` and `Autocomplete` so the two can't drift into two
   different hand-rolled clear buttons the way they had: `SearchInput`
   already had the `hover:bg-lyra-state-hover` treatment but no tooltip,
   while `Autocomplete`'s own copy had neither the hover background nor a
   tooltip (just a color-only hover on the icon itself). Extracting this
   fixes both gaps in one place instead of patching each hand-rolled copy
   separately.

   `aria-label` stays a passthrough prop (via `...props`) so each consumer
   can keep as specific an accessible name as it wants (`SearchInput` uses
   "Clear search", `Autocomplete` uses "Clear") — independent of
   `tooltipLabel`, which is the *visible* tooltip text and defaults to the
   plain "Clear" both consumers actually want shown on hover. */

export interface ClearButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visible tooltip text (default: "Clear"). Independent of `aria-label`. */
  tooltipLabel?: string;
}

const ClearButton = React.forwardRef<HTMLButtonElement, ClearButtonProps>(
  ({ className, tooltipLabel = "Clear", ...props }, ref) => (
    <Tooltip content={tooltipLabel}>
      <button
        ref={ref}
        type="button"
        tabIndex={-1}
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-secondary hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors",
          className
        )}
        {...props}
      >
        <X className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
    </Tooltip>
  )
);
ClearButton.displayName = "ClearButton";

export { ClearButton };
