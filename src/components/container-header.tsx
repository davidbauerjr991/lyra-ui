import * as React from "react";
import { X } from "lucide-react";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface ContainerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header title. Optional so the header can still render for icon-only /
   * tag-only layouts (e.g. `DashboardCard`'s "show/hide header text"
   * control) — when omitted, the title line simply isn't rendered rather
   * than showing an empty heading.
   */
  title?: string;
  /** Optional icon to the left of the title */
  icon?: React.ReactNode;
  /** Actions rendered to the right of the title (buttons, badges, etc.) */
  actions?: React.ReactNode;
  /** Renders a built-in close button and calls this when clicked */
  onClose?: () => void;
  /** Typography class for the title (default: "lyra-heading-md") */
  titleClassName?: string;
  /** Optional subtitle displayed below the title in body-sm secondary */
  subhead?: string;
  /** Badge or tag rendered inline immediately after the title */
  titleBadge?: React.ReactNode;
  /**
   * Rendered on its own line above the icon+title row — e.g. a status
   * `Tag` ("Anomaly", "Alert") that needs to sit above the headline rather
   * than inline beside it like `titleBadge`. Left-aligned with the icon
   * (i.e. flush with the header's own left edge), not indented to the
   * title's start.
   */
  topSlot?: React.ReactNode;
  /** Show a bottom border (default: true) */
  bordered?: boolean;
  /**
   * Header background. `"subtle"` applies `bg-lyra-bg-control-subtle` (the
   * same subdued fill used by `FilterChip`'s default variant) — useful when
   * the header needs to read as a distinct control/toolbar strip rather than
   * blend into the surface behind it. Default `"none"` (transparent, inherits
   * whatever surface it's placed on).
   */
  background?: "none" | "subtle";
}

/* ── Component ── */

const ContainerHeader = React.forwardRef<HTMLDivElement, ContainerHeaderProps>(
  ({
    className,
    title,
    icon,
    actions,
    onClose,
    titleClassName = "lyra-heading-md",
    subhead,
    titleBadge,
    topSlot,
    bordered = true,
    background = "none",
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cn(
        // py-2.5 (10px), not py-3 (12px) — the title+subhead block below is
        // a fixed-height overflow-hidden box (h-10, 40px, was h-9/36px); at
        // 12px top/bottom padding the row read taller than that box needed,
        // py-2.5 keeps the header snug around it now that it's sized to fit
        // the subhead's descenders (see that div's own comment).
        "flex items-center justify-between px-4 py-2.5 shrink-0",
        bordered && "border-b border-lyra-border-subtle",
        background === "subtle" && "bg-lyra-bg-control-subtle",
        className
      )}
      {...props}
    >
      {/* Left: optional top slot, above icon + title + optional subhead.
          `flex-1` (instead of relying on default flex-basis:auto shrinking)
          + `min-w-0` at every level down to the title/subhead text is what
          actually makes `truncate` take effect here — the right side is
          `shrink-0` (never gives up width), so without an explicit
          flex-basis on this side the title text was overflowing past its
          box and getting visually painted over by the action buttons
          rather than genuinely truncating with an ellipsis.

          Deliberately NOT `items-start`: this div is a flex COLUMN, so
          `align-items` governs its children's CROSS-axis size — i.e. their
          width. `items-start` (still what a first pass at this reasonably
          reached for, since it's also what visually left-aligns the
          column's rows) sizes each child to its own fit-content width
          instead of stretching it to match this box's own (flex-1/min-w-0-
          computed) width — so the icon+title row below silently stopped
          being width-constrained at all, and the `min-w-0`/`truncate`
          chain inside it had no real box to clip against: the title just
          grew to its natural content width and got visually painted over
          by the header's actions instead of ellipsis-truncating. Left
          alignment of the column's own content doesn't need `items-start`
          at all — nothing inside this column is centered/stretched
          horizontally on its own, so plain default stretch (this box's
          full width, left-aligned content within it) reads identically
          when everything fits, and actually constrains width once it
          doesn't. Caught from a screenshot: cards in a narrow 3-up grid
          (`DashboardCard`'s "Metric Card" mode) showing "Last 30 days"
          overlapping straight through the title text with no ellipsis at
          all. */}
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        {/* `self-start`, not inherited stretch: this column deliberately
            doesn't set `items-start` at its own level (see the comment
            below — the icon+title row needs real stretch-to-full-width to
            make its `truncate` chain work), but that same default stretch
            also reaches `topSlot`, which should hug its own content instead
            (e.g. a `Tag` like "Anomaly") — without this override it stretches
            to the column's full width, rendering as a full-width pill
            instead of a compact tag. */}
        {topSlot && <div className="self-start">{topSlot}</div>}
        <div className="flex items-center gap-2 min-w-0">
          {icon && <span className="flex-shrink-0 text-lyra-fg-secondary">{icon}</span>}
          <div className="min-w-0 flex-1">
            {(title || titleBadge) && (
              <div className="flex h-10 flex-col justify-center overflow-hidden min-w-0">
                {/* h-10 (40px), not h-9 (36px) — at 36px the subhead's
                    descenders (g, y, etc.) were clipped by `overflow-hidden`;
                    40px gives the title + subhead two lines enough room to
                    render in full. */}
                {/* titleBadge sits in its own row with just the title text,
                    so it's centered against the title's line height — not
                    stretched to align against the full title+subhead block
                    the way it was when it lived in a row alongside that
                    whole two-line container. No `shrink-0` wrapper around
                    it anymore either — that wrapper was a `<span>` (inline
                    by default) sitting next to the title's flex column,
                    which threw off `items-center`'s vertical centering;
                    rendered directly as a sibling flex item here instead. */}
                <div className="flex items-center gap-2 min-w-0">
                  {title && (
                    <h2 className={cn(titleClassName, "text-lyra-fg-default truncate min-w-0")}>{title}</h2>
                  )}
                  {titleBadge}
                </div>
                {subhead && (
                  <p className="lyra-body-sm text-lyra-fg-secondary truncate min-w-0">{subhead}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: actions + optional close button */}
      <div className="flex items-center gap-1 shrink-0 ml-4">
        {actions}
        {onClose && (
          <Tooltip content={title ? `Close ${title}` : "Close"} placement="bottom" asLabel>
            <button
              aria-label={title ? `Close ${title}` : "Close"}
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  )
);
ContainerHeader.displayName = "ContainerHeader";

export { ContainerHeader };
