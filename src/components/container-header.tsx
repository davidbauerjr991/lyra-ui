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
  /**
   * Icon rendered inside the built-in close button (only meaningful when
   * `onClose` is set). Default: lucide `X`, unchanged for every existing
   * consumer. Lets a caller swap in a more specific glyph — e.g. `PanelRightClose`
   * for a panel that's genuinely being dismissed/closed as a docked panel,
   * as opposed to a plain "X" which reads more like closing a tab/dialog.
   */
  closeIcon?: React.ReactNode;
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
  /** Show a bottom border (default: true) — ignored (no border rendered
   *  here) whenever `tabs` is set, since the `TabList` passed there already
   *  supplies its own `border-b` as the header's true bottom edge; a second
   *  border directly above it would just double up. */
  bordered?: boolean;
  /**
   * Header background. `"subtle"` applies `bg-lyra-bg-control-subtle` (the
   * same subdued fill used by `FilterChip`'s default variant) — useful when
   * the header needs to read as a distinct control/toolbar strip rather than
   * blend into the surface behind it. Default `"none"` (transparent, inherits
   * whatever surface it's placed on).
   */
  background?: "none" | "subtle";
  /**
   * A `TabList` (or similar) rendered directly below the title/subhead row,
   * still inside this header — i.e. outside whatever scrolling body sits
   * below the header (`PanelContent` in `SidePanel`/`InteriorPanel`, for
   * instance). Exists specifically so a panel's tabs can stay genuinely
   * fixed without a hand-rolled `sticky` wrapper inside the scrollable body
   * (see CONTRIBUTING.md's "Composing panel body content") — that approach
   * still scrolled with the surrounding container's own scrollbar and, in
   * `agent-next-gen-v1`'s real usage, needed extra plumbing just to fake a
   * fixed position. Passing `tabs` here is the real fix: the tab row simply
   * isn't part of the scrolling region at all.
   *
   * When set, this header's own bottom padding is dropped (the tab row's
   * own top edge sits flush against the title/subhead row above it) and
   * `bordered` is ignored, since `TabList` already renders its own
   * `border-b`. Pass the `TabList` element exactly as you would to any
   * other consumer — including its own horizontal inset (`className="px-4"`
   * to match this header's own `px-4`) — this prop doesn't wrap or restyle
   * it.
   */
  tabs?: React.ReactNode;
  /**
   * Marks this header (`.lyra-container-header-actions-wrap`) as scoped
   * into the shared responsive-collapse family: a chip-style trigger in
   * `actions` (e.g. `DateFilterChip` in agent-next-gen-v1) can shrink to a
   * compact icon via its own `-filter-full`/`-filter-compact` markup, and a
   * `SearchInput` pair can swap which of two copies is visible via
   * `-search-inline`/`-search-below` (one sitting in `actions`, the other
   * passed through `tabs` so it renders on its own full-width row below the
   * title) — see lyra-tokens.css's "Container header actions" families for
   * the concrete classes. Default `false`: a header with a couple of plain
   * icon buttons in `actions` doesn't need any of this.
   *
   * On its own this does nothing — it does NOT establish the CSS
   * container-query boundary those collapse rules react to. That's a
   * SEPARATE, explicitly opt-in class, `.lyra-container-header-query-
   * boundary` (`container-type: inline-size`), which the caller applies to
   * whichever ancestor's width should actually decide the collapse —
   * typically the card's own outer root, one level OUTSIDE this component,
   * via that card's own `className` (e.g. `DashboardCard`'s `className`).
   * Kept deliberately separate from this prop after a real regression: an
   * earlier version had `actionsWrap` establish that boundary right here,
   * on this header's own row — every consumer that turned `actionsWrap` on
   * shared the exact same width and threshold with no way to opt out, so
   * raising `ContactHistoryCard`'s own 768px threshold silently broke
   * narrower dashboard widgets (Performance/Productivity's `DateFilterChip`)
   * that had only turned `actionsWrap` on for the icon-collapse fallback —
   * they went from "always full" to "always collapsed" with no code of
   * their own changing. See `.lyra-container-header-query-boundary`'s own
   * doc comment (lyra-tokens.css) for the full story.
   *
   * Does NOT wrap `actions` itself as a block (an earlier version of this
   * prop did — `.lyra-container-header-actions-row`/`-actions` forcibly
   * dropped the *whole* actions cluster to a new line, but that meant a
   * lone filter chip with nothing else to make room for still got shoved
   * onto its own row, and a `SearchInput` + `FilterChip` pair moved
   * together as one unit even though only the search box actually needed
   * to move — confirmed from a screenshot showing a lone `DateFilterChip`
   * overlapping the title once forced onto its own full-width line for no
   * reason). Prefer the per-element `-filter-*`/`-search-*` classes above
   * instead: each piece of `actions` decides its own collapse behavior,
   * nothing moves that doesn't need to.
   */
  actionsWrap?: boolean;
}

/* ── Component ── */

const ContainerHeader = React.forwardRef<HTMLDivElement, ContainerHeaderProps>(
  ({
    className,
    title,
    icon,
    actions,
    onClose,
    closeIcon = <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
    titleClassName = "lyra-heading-md",
    subhead,
    titleBadge,
    topSlot,
    tabs,
    bordered = true,
    background = "none",
    actionsWrap = false,
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col shrink-0",
        bordered && !tabs && "border-b border-lyra-border-subtle",
        background === "subtle" && "bg-lyra-bg-control-subtle",
        actionsWrap && "lyra-container-header-actions-wrap"
      )}
      {...props}
    >
      {/* Title/subhead/actions row — its own inner row now that `tabs` can
          render below it in the same header. `py-2.5` (10px), not `py-3`
          (12px) — the title+subhead block below is a fixed-height
          overflow-hidden box (h-10, 40px, was h-9/36px); at 12px top/bottom
          padding the row read taller than that box needed, py-2.5 keeps
          the header snug around it now that it's sized to fit the
          subhead's descenders (see that div's own comment). When `tabs` is
          set, bottom padding drops to 0 so the tab row sits flush right
          below this one — no gap for the tabs' own `border-b` to visually
          detach from.

          `className` lands HERE, not on the outer wrapper above — every
          real consumer that passes it (`Popover`'s built-in `title` header,
          `DashboardCard`'s `headerClassName` in `metrics` mode,
          `agent-next-gen-v1`'s "Add tag" popover header) is overriding
          THIS row's own `px-4`/`py-2.5` (e.g. `pb-0` to zero the bottom
          gap, `px-5` to line up with a wider body inset) — before the
          outer flex-col wrapper existed (added for `tabs`), this row and
          the outer element were the same div, so `className` reaching it
          was automatic; splitting them without moving `className` too
          silently broke every one of those overrides (twMerge had nothing
          of this row's classes to resolve against, so e.g. `pb-0` just sat
          inertly on the outer wrapper, which has no padding of its own to
          cancel) — caught from a screenshot of `agent-next-gen-v1`'s "Add
          tag" popover header reading as visually centered instead of
          flush-left: its `className="px-5 pb-0"` was stacking as *extra*
          padding on the outer wrapper on top of this row's own unchanged
          `px-4`, insetting the title+close cluster from both edges by
          36px combined instead of cleanly swapping to 20px. */}
      <div className={cn("flex items-center justify-between px-4", tabs ? "pt-2.5" : "py-2.5", className)}>
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
              <div className="flex min-h-10 flex-col justify-center overflow-hidden min-w-0">
                {/* min-h-10 (40px floor), not a fixed h-10 — 40px is exactly
                    enough for the plain title+subhead case (was h-9/36px;
                    at that height the subhead's descenders, g/y/etc., were
                    clipped by `overflow-hidden`), so a text-only header
                    still renders at exactly 40px same as before. But a FIXED
                    h-10 also silently clipped the subhead again whenever
                    `titleBadge` itself was taller than the title text's own
                    line height — e.g. a real icon button (`ActionIconButton`,
                    36px) rather than the small `Tag`/`Badge` this slot was
                    originally sized around: `items-center` on the icon+title
                    row right below sizes that ROW to its tallest child (the
                    36px button), which by itself already nearly filled the
                    old fixed 40px box, squeezing the subhead paragraph
                    beneath it almost entirely out of view (caught from a
                    screenshot: `CustomerRowInfoPanel`'s full-screen "Add
                    Channel" button in `headerTitleBadge`, subhead reduced to
                    a sliver of clipped descenders). `min-h-10` keeps the
                    40px floor for the common case and simply lets this box
                    grow to actually fit its content whenever a taller
                    `titleBadge` needs more room — `overflow-hidden` stays as
                    a safety net, but with `min-h` instead of `h` it no
                    longer has anything of this box's own content left to
                    clip. */}
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
              {closeIcon}
            </button>
          </Tooltip>
        )}
      </div>
      </div>
      {tabs}
    </div>
  )
);
ContainerHeader.displayName = "ContainerHeader";

export { ContainerHeader };
