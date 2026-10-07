import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { NumberField } from "./number-field";
import { Select } from "./select";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/* Helpers and UI shared by `TimePicker` (time-picker.tsx) and
   `TimeRangePicker` (time-range-picker.tsx). */

/* ── Helpers ── */

export function padTwo(n: number): string {
  return String(n).padStart(2, "0");
}

export function formatTime(hour: number, minute: number, ampm: "AM" | "PM"): string {
  return `${padTwo(hour)}:${padTwo(minute)} ${ampm}`;
}

export function parseTime(s: string): { hour: number; minute: number; ampm: "AM" | "PM" } | undefined {
  const m = s.match(/^(\d{1,2}):(\d{2})\s*(AM|PM|am|pm)$/i);
  if (!m) return undefined;
  let hour = parseInt(m[1], 10);
  const minute = parseInt(m[2], 10);
  const ampm = m[3].toUpperCase() as "AM" | "PM";
  if (hour < 1 || hour > 12 || minute < 0 || minute > 59) return undefined;
  return { hour, minute, ampm };
}

/** Convert 12h state → 24h Date-style hours */
export function toHours24(hour: number, ampm: "AM" | "PM"): number {
  let h = hour % 12;
  if (ampm === "PM") h += 12;
  return h;
}

/* ── TimeSelector (shared UI) ── */

export interface TimeSelectorProps {
  hour: number;
  minute: number;
  ampm: "AM" | "PM";
  onHourChange:   (h: number) => void;
  onMinuteChange: (m: number) => void;
  onAmpmChange:   (a: "AM" | "PM") => void;
  /** Opt-in: AM/PM is a `Select` dropdown instead of a toggle button. */
  ampmSelect?: boolean;
}

export const AMPM_OPTIONS = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

export function TimeSelector({ hour, minute, ampm, onHourChange, onMinuteChange, onAmpmChange, ampmSelect }: TimeSelectorProps) {
  return (
    <div className="flex items-center gap-1.5 p-3">
      <NumberField
        value={hour}
        min={1} max={12} wrap
        padWidth={2}
        onChange={onHourChange}
        className="flex-1 min-w-0"
        aria-label="Hour"
      />
      <span className="lyra-body-md text-lyra-fg-secondary flex-shrink-0">:</span>
      <NumberField
        value={minute}
        min={0} max={59} wrap
        padWidth={2}
        onChange={onMinuteChange}
        className="flex-1 min-w-0"
        aria-label="Minute"
      />
      {ampmSelect ? (
        <Select
          aria-label="AM or PM"
          options={AMPM_OPTIONS}
          value={ampm}
          onValueChange={(v) => onAmpmChange(v as "AM" | "PM")}
          className="flex-shrink-0 w-[88px]"
        />
      ) : (
      <button
        type="button"
        onClick={() => onAmpmChange(ampm === "AM" ? "PM" : "AM")}
        className="flex-shrink-0 w-12 h-9 rounded-lyra-sm lyra-label font-medium transition-colors bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
        aria-label={`Toggle AM/PM, currently ${ampm}`}
        aria-pressed={ampm === "PM"}
      >
        {ampm}
      </button>
      )}
    </div>
  );
}

/* ── TimeMenu (opt-in list of times) ── */

export const MENU_STEP_MINUTES = 30;
export type TimeOption = { hour: number; minute: number; ampm: "AM" | "PM"; label: string };

/** Times through the day every `step` minutes (default 30). */
export function buildTimeOptions(step = MENU_STEP_MINUTES): TimeOption[] {
  const s = Math.max(1, Math.min(720, Math.round(step)));
  return Array.from({ length: Math.ceil((24 * 60) / s) }, (_, i) => {
    const total = i * s;
    const h24 = Math.floor(total / 60);
    const minute = total % 60;
    const ampm = h24 >= 12 ? ("PM" as const) : ("AM" as const);
    const hour = h24 % 12 || 12;
    return { hour, minute, ampm, label: formatTime(hour, minute, ampm) };
  });
}

export const MENU_OPTIONS: TimeOption[] = buildTimeOptions(MENU_STEP_MINUTES);

/** Index of the option matching a time, or -1 when it isn't in the list. */
export function menuIndexOf(t: { hour: number; minute: number; ampm: "AM" | "PM" } | undefined, options: TimeOption[] = MENU_OPTIONS): number {
  if (!t) return -1;
  return options.findIndex((o) => o.hour === t.hour && o.minute === t.minute && o.ampm === t.ampm);
}

export interface TimeMenuProps {
  listId: string;
  activeIndex: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  /** The times to list. Default: every 30 minutes (`MENU_OPTIONS`). */
  options?: TimeOption[];
}

export function TimeMenu({ listId, activeIndex, selectedIndex, onSelect, options = MENU_OPTIONS }: TimeMenuProps) {
  // Same structure as `Select`'s multi-select listbox: the outer wrapper owns
  // the 300px cap and pins the hover-scroll chevrons around the scrollable
  // list, so they show whenever there is more above or below.
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const { canScrollUp, canScrollDown, onScroll } = useScrollChevrons(listRef, []);
  const activeRef = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const list = listRef.current;
    const row = activeRef.current;
    if (!list || !row) return;
    if (row.offsetTop < list.scrollTop) list.scrollTop = row.offsetTop;
    else if (row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = row.offsetTop + row.offsetHeight - list.clientHeight;
  }, [activeIndex]);
  // Start with the picked time in view.
  React.useLayoutEffect(() => {
    // Scroll only the list (not the page) so the picked time sits mid-list.
    const list = listRef.current;
    const row = document.getElementById(`${listId}-${selectedIndex}`);
    if (list && row) list.scrollTop = row.offsetTop - list.clientHeight / 2 + row.offsetHeight / 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollListBy = (delta: number) => listRef.current?.scrollBy({ top: delta });
  return (
    <div className="flex max-h-[300px] min-h-0 flex-col">
      {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollListBy(-6)} />}
      <div
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label="Times"
        onScroll={onScroll}
        className="relative flex-1 min-h-0 overflow-y-auto lyra-scrollbar-hide p-1"
      >
        {options.map((o, i) => (
          // Row states mirror `Select`'s single-select item (a blue accent bar
          // + blue text for the picked time, hover/arrow-key highlight).
          <div
            key={o.label}
            id={`${listId}-${i}`}
            ref={i === activeIndex ? activeRef : undefined}
            role="option"
            aria-selected={i === selectedIndex}
            data-state={i === selectedIndex ? "checked" : "unchecked"}
            data-highlighted={i === activeIndex ? "" : undefined}
            // Keep focus in the text field while picking.
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onSelect(i)}
            className={cn(
              "group relative flex w-full items-center gap-2.5 px-3 py-2.5 lyra-body-md text-left transition-colors rounded-lyra-sm cursor-pointer select-none",
              "text-lyra-fg-default hover:bg-lyra-state-hover data-[highlighted]:bg-lyra-state-hover",
              "data-[state=checked]:bg-lyra-bg-active-subtle data-[state=checked]:text-lyra-fg-active-strong",
              "data-[state=checked]:hover:bg-lyra-state-hover-active-subtle data-[state=checked]:data-[highlighted]:bg-lyra-state-hover-active-subtle"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full transition-opacity",
                "bg-lyra-fg-default opacity-0 group-hover:opacity-100 group-data-[highlighted]:opacity-100",
                "group-data-[state=checked]:opacity-100 group-data-[state=checked]:bg-lyra-fg-active-strong"
              )}
            />
            <span className="flex-1 min-w-0 truncate">{o.label}</span>
          </div>
        ))}
      </div>
      {canScrollDown && <ScrollChevronButton direction="down" onStep={() => scrollListBy(6)} />}
    </div>
  );
}

/* ── Input shell ── */

export const inputShell = (disabled?: boolean, readonly?: boolean, size?: "sm" | "md", invalid?: boolean) =>
  cn(
    "relative flex w-full items-center rounded-lyra-sm border lyra-body-md transition-colors cursor-text",
    size === "sm" ? "h-8" : "h-9",
    "bg-lyra-bg-field text-lyra-fg-default",
    "border-lyra-border-strong hover:border-lyra-state-border-hover-neutral",
    // ADA-compliance focus indicator: same focus-visible ring buttons/tabs
    // use (see input.tsx for the fuller comment), applied focus-within
    // since this wraps the trigger's inner content, not a real <input>.
    // Per explicit follow-up request, split via our own tracked
    // input-modality attribute (input-modality.ts), NOT
    // `:has(:focus-visible)` — see input-modality.ts's own fuller comment
    // on why that pseudo-class can't distinguish mouse from keyboard on a
    // text field.
    "focus-within:border-lyra-border-active",
    "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2",
    "[html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-border-active/20",
    // `pointer-events-none` blocks `:hover` from matching at all — without
    // it, the hover border above would still show on a disabled field.
    disabled  && "bg-lyra-bg-disabled border-transparent cursor-not-allowed pointer-events-none",
    readonly  && "bg-lyra-bg-surface-canvas cursor-default pointer-events-none",
    // Error state (only when `invalid` is passed) — same tokens as `Input`'s `error`.
    invalid && !disabled && [
      "!border-lyra-status-critical-strong bg-lyra-status-critical-subtle",
      "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-status-critical-strong",
      "[html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-status-critical-strong/20",
    ]
  );

/* ── Popover panel ── */

export function TimePanel({ children, menu, wide, onOpenAutoFocus, onCloseAutoFocus, onKeyDown }: {
  children: React.ReactNode; menu?: boolean; wide?: boolean;
  /** Optional — overrides where focus goes when the panel opens (unset keeps Radix's default, or the field when `menu`). */
  onOpenAutoFocus?: (e: Event) => void;
  /** Optional — passed straight to Radix's `Content` (unset keeps its default). */
  onCloseAutoFocus?: (e: Event) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}) {
  return (
    <PopoverPrimitive.Content
      side="bottom" sideOffset={6} align="start"
      avoidCollisions collisionPadding={4}
      // Menu mode keeps focus (and the caret) in the text field.
      onOpenAutoFocus={onOpenAutoFocus ?? (menu ? (e) => e.preventDefault() : undefined)}
      onCloseAutoFocus={onCloseAutoFocus}
      onKeyDown={onKeyDown}
      className={cn(
        menu
          ? "w-[var(--radix-popover-trigger-width)]"
          // `wide` (used with the AM/PM dropdown, which is wider than the toggle
          // button) gives the number fields room for their spinner arrows, and
          // never makes the panel narrower than the field it opens from.
          : wide
          ? "w-[max(300px,var(--radix-popover-trigger-width))]"
          : "w-[260px]",
        "z-50 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
        "animate-in fade-in-0 slide-in-from-top-2 duration-150",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
      )}
    >
      {children}
    </PopoverPrimitive.Content>
  );
}


export const initState = (d?: Date) => {
  if (!d) return { hour: 12, minute: 0, ampm: "PM" as const };
  let h = d.getHours();
  const ampm = h >= 12 ? "PM" as const : "AM" as const;
  h = h % 12 || 12;
  return { hour: h, minute: d.getMinutes(), ampm };
};

