import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import type { DateRange } from "./calendar";
import { ErrorIconSolid } from "./icons/error-icon-solid";

/* Helpers and styles shared by `DatePicker` (date-picker.tsx) and
   `DateRangePicker` (date-range-picker.tsx). */

/* ── Date formatting helpers ── */

export const FORMAT = "MM/DD/YYYY";

export function formatDate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}/${dd}/${d.getFullYear()}`;
}

export function parseDate(s: string): Date | undefined {
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return undefined;
  const [, mo, da, yr] = m.map(Number);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return undefined;
  const d = new Date(yr, mo - 1, da);
  // Reject impossible dates instead of letting `Date` roll them over
  // ("02/31/2026" used to become March 3).
  if (isNaN(d.getTime()) || d.getMonth() !== mo - 1 || d.getDate() !== da) return undefined;
  return d;
}

export function formatRange(r: DateRange | undefined): string {
  if (!r) return "";
  if (r.from && r.to) return `${formatDate(r.from)} – ${formatDate(r.to)}`;
  if (r.from) return formatDate(r.from);
  return "";
}

export function parseRange(s: string): DateRange | undefined {
  const parts = s.split(/\s*[–-]\s*/);
  if (parts.length === 2) {
    const from = parseDate(parts[0].trim());
    const to   = parseDate(parts[1].trim());
    if (from && to) return { from, to };
    if (from) return { from };
  }
  const single = parseDate(s.trim());
  return single ? { from: single } : undefined;
}

/* ── Shared input trigger styles ── */

// Shared by `DatePicker` and `DateRangePicker` — a plain module-level
// const, not a per-render function, same as the disabled/readonly states
// above it use `data-[disabled=true]`/`data-[readonly=true]` selectors
// instead of JS-computed classes. `size` follows the same pattern
// (`data-size` on the wrapping div, read via `data-[size=sm]:h-8`) so this
// can stay a static string rather than needing to become a function that
// both components would otherwise have to call with their own `size` prop.
export const inputClass = cn(
  "relative flex h-9 w-full items-center rounded-lyra-sm border lyra-body-md transition-colors",
  "data-[size=sm]:h-8",
  "bg-lyra-bg-field text-lyra-fg-default cursor-text",
  "border-lyra-border-strong hover:border-lyra-state-border-hover-neutral",
  // ADA-compliance focus indicator: same focus-visible ring buttons/tabs
  // use (see input.tsx for the fuller comment), applied focus-within
  // since this wraps the trigger's inner content, not a real <input>. Per
  // explicit follow-up request, split via our own tracked input-modality
  // attribute (input-modality.ts), NOT `:has(:focus-visible)` — see
  // input-modality.ts's own fuller comment on why that pseudo-class can't
  // distinguish mouse from keyboard on a text field.
  "focus-within:border-lyra-border-active",
  "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2",
  "[html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-border-active/20",
  "data-[disabled=true]:bg-lyra-bg-disabled data-[disabled=true]:border-transparent",
  "data-[disabled=true]:text-lyra-fg-disabled data-[disabled=true]:cursor-not-allowed",
  // `pointer-events-none` blocks `:hover` from matching at all — without
  // it, the hover border above would still show on a disabled trigger.
  "data-[disabled=true]:pointer-events-none",
  "data-[readonly=true]:bg-lyra-bg-surface-canvas data-[readonly=true]:cursor-default data-[readonly=true]:pointer-events-none",
  // Error state (`data-invalid`, set only by `DatePicker` when it has an
  // error to show) — same tokens as `Input`'s `error` styling. Every class is
  // scoped to `data-[invalid=true]`, so a field without an error is unchanged.
  "data-[invalid=true]:border-lyra-status-critical-strong data-[invalid=true]:bg-lyra-status-critical-subtle",
  "data-[invalid=true]:hover:border-lyra-status-critical-strong data-[invalid=true]:focus-within:border-lyra-status-critical-strong",
  "[html[data-lyra-input-modality=keyboard]_&[data-invalid=true]:focus-within]:ring-lyra-status-critical-strong",
  "[html:not([data-lyra-input-modality=keyboard])_&[data-invalid=true]:focus-within]:ring-lyra-status-critical-strong/20"
);

export const textInputClass = cn(
  "flex-1 bg-transparent outline-none pl-3 pr-1 truncate h-full",
  "placeholder:text-lyra-fg-disabled"
);

/* ── Calendar popover panel ── */

export function CalendarPanel({
  children,
  onOpenAutoFocus,
  onCloseAutoFocus,
  className,
}: {
  children: React.ReactNode;
  /** Optional — passed straight to Radix's `Content` (unset keeps its default). */
  onOpenAutoFocus?: (e: Event) => void;
  onCloseAutoFocus?: (e: Event) => void;
  /** Optional extra classes, e.g. `w-auto` for a panel with a presets column. */
  className?: string;
}) {
  return (
    <PopoverPrimitive.Content
      onOpenAutoFocus={onOpenAutoFocus}
      onCloseAutoFocus={onCloseAutoFocus}
      side="bottom"
      sideOffset={6}
      align="start"
      avoidCollisions
      collisionPadding={4}

      className={cn(
        "z-50 w-[288px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-3",
        "animate-in fade-in-0 slide-in-from-top-2 duration-150",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100",
        className
      )}
    >
      {children}
    </PopoverPrimitive.Content>
  );
}

/* ── Calendar icon button (inside the field) ──
   A labelled button for screen readers and mouse users. `tabIndex={-1}`
   keeps forms' Tab order unchanged (keyboard users open the calendar with
   Alt+↓ from the field instead), and it keeps exactly the old decorative
   icon's look — like `NumberField`'s own in-field step buttons, it's a
   field-internal affordance, not a standalone `Button`. A click bubbles to
   the field, which opens the calendar; `preventDefault` on mouse down keeps
   focus where it was, as the old icon did. */
export function CalendarIconButton({ label, open, disabled, icon }: { label: string; open: boolean; disabled: boolean; /** Glyph to show instead of the calendar (e.g. TimePicker's clock). */ icon?: React.ReactNode }) {
  return (
    <button type="button" tabIndex={-1}
      aria-label={label} aria-haspopup="dialog" aria-expanded={open}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      className="pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0 cursor-[inherit]">
      {icon ?? <CalendarIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
    </button>
  );
}

/* ── Error message under the field — same markup and tokens as `Input`'s ── */
export function DateFieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} role="alert" className="flex items-center gap-1 mt-1.5">
      <ErrorIconSolid className="h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong" aria-hidden="true" />
      <span className="lyra-body-sm text-lyra-status-critical-strong">{children}</span>
    </div>
  );
}

/** "Jan 4, 2026" — for screen-reader labels and messages. */
const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatDateLong(d: Date): string {
  return `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/** Midnight on `d`'s day. */
export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

