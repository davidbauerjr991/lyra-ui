import { useState } from "react";
import { ArrowUpDown, ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Tooltip } from "./tooltip";
import { Popover } from "./popover";
import { RadioGroup, RadioGroupItem } from "./radio";
import { ActionIconButton } from "./actions";
import { Separator } from "./separator";

/* ── Assignments section caption ──
   Ported from agent-next-gen-v2's `agent-next-gen-interaction-dashboard.tsx`
   (`AssignmentsSectionCaption`/`AssignmentsSortButton`/
   `AssignmentsExpandCollapseAllButton`) — the header row that sits at the
   very top of LeftNav's scrollable `header` region, directly under a
   pinned "New Outbound" trigger (if any) and above the list of
   `InteractionNavItem` cards, both passed together as `header`. See each
   piece's own doc comment below for the full v2 rationale.

   `sortAssignments`/`AssignmentSortValue` themselves are NOT ported here —
   v2's own copies operate on v2's own `Interaction`/`Thread` shapes (start
   ticks, a live clock, a customer-last-message tick), and every lyra-ui
   consumer of this caption defines its own local interaction shape (e.g.
   LeftNav.stories.tsx's `AgentNextGenDemoInteraction`, AgentNextGenTemplate
   .stories.tsx's `ActiveInteraction`) — there's no one shared type to sort
   here. Each story instead keeps its own small `sortAssignments`-equivalent
   next to that local type, passing only the resulting `AssignmentSortValue`
   in and out of this caption. */

export type AssignmentSortValue = "lastUpdated" | "startDate" | "awaitingLongest";

export const ASSIGNMENT_SORT_OPTIONS: { value: AssignmentSortValue; label: string }[] = [
  { value: "lastUpdated", label: "Last Updated" },
  { value: "startDate", label: "Start Date" },
  { value: "awaitingLongest", label: "Longest Wait" },
];

/* Sort trigger — same `Popover` + `RadioGroup` composition lyra-ui's own
   `DateFilterChip`-style pickers use for an identical "single choice from a
   short, mutually exclusive list" shape, just an icon-only `ActionIconButton`
   trigger instead of a labeled chip (there's no room for chip text this deep
   in the rail). Closes itself on selection — picking either option here is
   the whole interaction, so there's nothing left to keep the popover open
   for. */
export function AssignmentsSortButton({
  value,
  onValueChange,
}: {
  value: AssignmentSortValue;
  onValueChange: (value: AssignmentSortValue) => void;
}) {
  const [open, setOpen] = useState(false);
  const selectedLabel = ASSIGNMENT_SORT_OPTIONS.find((o) => o.value === value)?.label ?? "";

  return (
    <Tooltip content={`Sort by: ${selectedLabel}`} placement="right" disabled={open}>
      <span className="inline-flex">
        <Popover
          open={open}
          onOpenChange={setOpen}
          placement="bottom"
          // Popover's own content defaults to `z-50` — lower than
          // `InteractionNavItem`'s compact-tile hover-preview card
          // (`z-[9999]`, interaction-nav-item.tsx), which sits right next
          // to this button in the collapsed rail and can overlap it.
          // Bumped above that so the sort menu isn't hidden behind an
          // assignment card's hover preview.
          className="z-[10000]"
          content={
            <div className="flex flex-col gap-1 p-3 w-[180px]">
              <RadioGroup
                value={value}
                onValueChange={(v) => {
                  onValueChange(v as AssignmentSortValue);
                  setOpen(false);
                }}
              >
                {ASSIGNMENT_SORT_OPTIONS.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value} label={option.label} />
                ))}
              </RadioGroup>
            </div>
          }
        >
          {/* `aria-label`, not `title` — `ActionIconButton`/`Button` auto-
              wraps an icon button in its OWN `Tooltip` whenever `title` is
              set (button.tsx), which would stack a second, redundant "Sort
              by: ..." tooltip underneath this component's own outer one.
              Passing `aria-label` instead keeps the accessible name (it
              flows through Button's own `{...props}` spread, which runs
              after — and so overrides — its internal
              `aria-label={isIconVariant ? title : undefined}` line) without
              triggering that second Tooltip, since only `title` opts a
              button into it. */}
          <ActionIconButton size="sm" aria-label={`Sort by: ${selectedLabel}`} aria-expanded={open}>
            <ArrowUpDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          </ActionIconButton>
        </Popover>
      </span>
    </Tooltip>
  );
}

/* Collapse-all/Expand-all trigger — sits directly left of
   `AssignmentsSortButton` in the caption row, only shown alongside it (same
   `count > 1` gate — with zero or one assignment there's nothing meaningful
   to bulk-collapse/expand either). Same `ActionIconButton size="sm"` +
   `Tooltip`/`aria-label` shape as that button, so the two read as one
   matched pair rather than two differently-styled icons side by side.

   A single toggle, not two separate buttons — `allExpanded` (owned by the
   consumer, alongside a version counter each click should bump) tracks
   which action the NEXT click performs, and the icon swaps to match:
   showing `ChevronsDownUp` ("Collapse all") while currently all-expanded,
   `ChevronsUpDown` ("Expand all") once collapsed. This doesn't try to track
   each individual card's own true expanded/collapsed state (an agent can
   still toggle any one card by hand after a bulk action) — it's just "which
   direction does the NEXT click bulk-apply," the same single-toggle idiom
   the per-card chevron itself uses. Pair with `InteractionNavItem`'s own
   `collapsible`/`channelsExpandedOverride` props: pass `{ expanded:
   allExpanded, version }` (bumping `version` on every `onToggle`) as each
   card's `channelsExpandedOverride` — see that prop's own doc comment in
   interaction-nav-item.tsx for why a version nonce, not a plain boolean, is
   what actually re-applies the override on every click. */
export function AssignmentsExpandCollapseAllButton({
  allExpanded,
  onToggle,
}: {
  allExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Tooltip content={allExpanded ? "Collapse all" : "Expand all"} placement="right">
      <ActionIconButton
        size="sm"
        aria-label={allExpanded ? "Collapse all" : "Expand all"}
        onClick={onToggle}
      >
        {allExpanded ? (
          <ChevronsDownUp className="h-3.5 w-3.5" strokeWidth={1.5} />
        ) : (
          <ChevronsUpDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        )}
      </ActionIconButton>
    </Tooltip>
  );
}

/* "Assignments (N)" section caption — pass this (followed by the
   list of `InteractionNavItem` cards) as `LeftNav`'s `header` slot, directly
   under a `pinnedHeader` like "New Outbound" (fixed above it, exempt from
   scrolling) — `count` should be the exact same live list length the cards
   render from, so the two numbers can't drift apart. Collapsed to icon-only
   rail (`expanded` false), the text has nowhere to go — but the sort button
   is a real standalone action, not just a label, so it stays reachable as a
   lone icon rather than disappearing along with the text the way the rest
   of this caption does.

   Sort/collapse-all buttons only show once there's actually something to
   sort or bulk-toggle — with zero or one assignment there's only one
   possible order/state either way, so the controls would just be dead
   clicks. Collapsed rail: with the sort button hidden too, there's nothing
   left in that state to show at all, so the whole caption returns null
   instead of an empty centered row. */
export function AssignmentsSectionCaption({
  expanded,
  count,
  sort,
  onSortChange,
  allExpanded,
  onToggleAllExpanded,
}: {
  expanded?: boolean;
  count: number;
  sort: AssignmentSortValue;
  onSortChange: (value: AssignmentSortValue) => void;
  /** See `AssignmentsExpandCollapseAllButton`'s own doc comment above. */
  allExpanded: boolean;
  onToggleAllExpanded: () => void;
}) {
  const showActions = count > 1;
  if (!expanded) {
    if (!showActions) return null;
    return (
      <div className="flex justify-center pb-2">
        <AssignmentsSortButton value={sort} onValueChange={onSortChange} />
      </div>
    );
  }
  return (
    <div className="flex flex-col pb-2">
      <div className="flex items-center justify-between gap-2 pl-2 py-2">
        <div className="flex items-baseline gap-1">
          <span className="lyra-body-md-emphasis text-lyra-fg-default">Assignments</span>
          <span className="lyra-body-md text-lyra-fg-secondary">({count})</span>
        </div>
        {showActions && (
          <div className="flex items-center gap-1">
            <AssignmentsExpandCollapseAllButton allExpanded={allExpanded} onToggle={onToggleAllExpanded} />
            <AssignmentsSortButton value={sort} onValueChange={onSortChange} />
          </div>
        )}
      </div>
      <Separator />
    </div>
  );
}
