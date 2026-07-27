import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Popover } from "./popover";
import { RadioGroup, RadioGroupItem } from "./radio";
import { DateRangePicker, type DateRangePickerProps } from "./date-picker";
import { filterChipVariants } from "./filter-chip";

/* ── DateRangeFilterChip ──
   A single-select date-range filter, styled as a `FilterChip`-shaped
   trigger (`filterChipVariants({ variant: "default" })`, so it reads as a
   neutral control, not a permanently-"active" filter) that opens a
   `RadioGroup` popover instead of `FilterChip`'s own checkbox multiset —
   only one range applies at a time, so radios are the correct control,
   not a reason to reach for `FilterChip` and ignore its multi-select
   semantics.

   Extracted out of `AgentDashboard` (agent-dashboard.tsx), which used to
   define this identical component locally (as an unexported
   `DateFilterChip`) and repeat it three times (Contact History,
   Performance, Productivity) — all three now import this one. Pulled out
   to lyra-ui proper (rather than staying agent-dashboard-only) once a
   second consumer needed the exact same "Date: {label}" radio-popover
   pattern outside `AgentDashboard` — see PROJECT_SUMMARY.md's "Outbound-
   Campaigns' Monitor cards reuse AgentDashboard's date filter" entry.

   Uncontrolled by default (own internal `today`-initialized state, same
   as every original `AgentDashboard` usage — none of them passed a
   `value`), but accepts `value`/`onValueChange` for a controlled usage
   too. `options` defaults to `DATE_RANGE_FILTER_OPTIONS` (Today/
   Yesterday/Last 7 days/Custom); pass a different list to relabel/reorder
   the choices, but keep `"custom"` in the list only where a `DateRangePicker`
   reveal actually makes sense — selecting `"custom"` always shows that
   picker when `"custom"` is among `options`.

   `DateRangeFilterValue` also has `"last30"`/`"last90"` (added for
   Outbound-Campaigns' Monitor page — a page-level toolbar filter with
   Today/Yesterday/Last 7 days/Last 30 Days/Last 90 Days, no "Custom") —
   additive only, `DATE_RANGE_FILTER_OPTIONS` itself is unchanged so every
   existing consumer (`AgentDashboard`'s per-card usage) keeps its
   original four options; a consumer that wants the wider range passes
   its own `options` list instead. */

/* ── Trigger `stopPropagation()` — same reason `KebabMenuButton`'s own
   trigger does it (kebab-menu-button.tsx): this chip sits in a
   `DashboardCard`'s `headerActions` slot, and a `DashboardCard` can
   itself be made clickable (Outbound-Campaigns' Monitor page does this
   — see `MonitorDashboardPage.tsx`'s doc comment). Without this, opening
   the date popover would also fire the card's own `onClick`. */

export type DateRangeFilterValue = "today" | "yesterday" | "last7" | "last30" | "last90" | "custom";

export interface DateRangeFilterOption {
  value: DateRangeFilterValue;
  label: string;
}

export const DATE_RANGE_FILTER_OPTIONS: DateRangeFilterOption[] = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last7", label: "Last 7 days" },
  { value: "custom", label: "Custom" },
];

export interface DateRangeFilterChipProps {
  /** Controlled value. Omit for uncontrolled usage (internal state, default `defaultValue`). */
  value?: DateRangeFilterValue;
  /** Initial value for uncontrolled usage. Default `"today"`. */
  defaultValue?: DateRangeFilterValue;
  /** Called whenever the selection changes (controlled or uncontrolled). */
  onValueChange?: (value: DateRangeFilterValue) => void;
  /** Available options. Default `DATE_RANGE_FILTER_OPTIONS`. */
  options?: DateRangeFilterOption[];
  /** Controlled custom-range value, passed to the revealed `DateRangePicker` when `value === "custom"`. */
  customValue?: DateRangePickerProps["value"];
  /** Called when the custom-range value changes. */
  onCustomValueChange?: (value: DateRangePickerProps["value"]) => void;
  /** Label shown before the selected option, e.g. `"Date: Today"`. Default `"Date"`. */
  label?: string;
  /** Optional class on the trigger button. */
  className?: string;
}

function DateRangeFilterChip({
  value: controlledValue,
  defaultValue = "today",
  onValueChange,
  options = DATE_RANGE_FILTER_OPTIONS,
  customValue: controlledCustomValue,
  onCustomValueChange,
  label = "Date",
  className,
}: DateRangeFilterChipProps) {
  const [open, setOpen] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React.useState<DateRangeFilterValue>(defaultValue);
  const value = controlledValue ?? uncontrolledValue;

  const [uncontrolledCustomValue, setUncontrolledCustomValue] = React.useState<DateRangePickerProps["value"]>(undefined);
  const customValue = controlledCustomValue ?? uncontrolledCustomValue;

  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";
  const showCustomPicker = value === "custom" && options.some((o) => o.value === "custom");

  const handleValueChange = (v: DateRangeFilterValue) => {
    if (controlledValue === undefined) setUncontrolledValue(v);
    onValueChange?.(v);
  };
  const handleCustomValueChange = (v: DateRangePickerProps["value"]) => {
    if (controlledCustomValue === undefined) setUncontrolledCustomValue(v);
    onCustomValueChange?.(v);
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      placement="bottom"
      content={
        <div className="flex flex-col gap-3 py-3 w-[260px]">
          <RadioGroup value={value} onValueChange={(v) => handleValueChange(v as DateRangeFilterValue)}>
            {options.map((option) => (
              <RadioGroupItem key={option.value} value={option.value} label={option.label} />
            ))}
          </RadioGroup>
          {showCustomPicker && (
            <DateRangePicker value={customValue} onChange={handleCustomValueChange} placeholder="Select date range" />
          )}
        </div>
      }
    >
      <button
        type="button"
        className={cn(filterChipVariants({ variant: "default" }), "rounded-lyra-md", className)}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="inline-flex items-baseline gap-1">
          <span className="lyra-body-md-emphasis whitespace-nowrap">{label}:</span>
          <span className="lyra-body-md truncate">{selectedLabel}</span>
        </span>
        <ChevronDown className={cn("h-3.5 w-3.5 flex-shrink-0 transition-transform", open && "rotate-180")} strokeWidth={1.5} aria-hidden="true" />
      </button>
    </Popover>
  );
}

export { DateRangeFilterChip };
