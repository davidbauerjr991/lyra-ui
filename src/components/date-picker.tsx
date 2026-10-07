import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Label } from "./label";
import { Calendar } from "./calendar";
import { Button } from "./button";
import {
  FORMAT, formatDate, parseDate, inputClass, textInputClass, CalendarPanel,
  CalendarIconButton, DateFieldError, formatDateLong, startOfDay,
} from "./date-picker-shared";

/* ══════════════════════════════
   DatePicker
═══════════════════════════════ */

/** How the field shows a date: "numeric" = 01/04/2026 (default), "medium" = Jan 4, 2026. */
export type DatePickerDisplayFormat = "numeric" | "medium";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelHelpText?: string;
  required?: boolean;
  readonly?: boolean;
  defaultMonth?: Date;
  className?: string;
  id?: string;
  /** Field height. "md" (36px, default) or "sm" (32px) for dense contexts. */
  size?: "sm" | "md";
  /**
   * Error message from the consumer (e.g. "Due date is required"). Shows the
   * field's error styling and the message below it, and sets `aria-invalid`.
   * Takes priority over the picker's own typed-date messages. Unset by default.
   */
  error?: string;
  /**
   * Message shown when someone leaves the field (or presses Enter) with text
   * that isn't a real date, e.g. "13/45/2026" or "02/31/2026". Only appears
   * after typing; `onChange` is never called with an invalid date.
   * Default: "Enter a valid date (MM/DD/YYYY)." (or "(MMM D, YYYY)" in the
   * "medium" format).
   */
  invalidDateMessage?: string;
  /** Opt-in: earliest selectable date. Earlier days are disabled in the
   *  calendar, and a typed earlier date shows an error instead of being picked. */
  minDate?: Date;
  /** Opt-in: latest selectable date. Same treatment as `minDate`. */
  maxDate?: Date;
  /** Opt-in: previous / next day buttons beside the field. Default `false`. */
  showDaySteppers?: boolean;
  /** Opt-in: "medium" shows dates as "Jan 4, 2026" and also accepts that
   *  format when typed. Default "numeric" (MM/DD/YYYY), today's behavior. */
  displayFormat?: DatePickerDisplayFormat;
}

/* ── Helpers ── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MEDIUM_FORMAT = "MMM D, YYYY";
const formatMedium = formatDateLong;

/* "Jan 4, 2026", "jan 04 2026", "January 4, 2026" — month name first. */
function parseMedium(s: string): Date | undefined {
  const m = s.trim().match(/^([A-Za-z]{3,9})\.?\s+(\d{1,2}),?\s+(\d{4})$/);
  if (!m) return undefined;
  const mo = MONTHS.findIndex((name) => m[1].slice(0, 3).toLowerCase() === name.toLowerCase());
  if (mo < 0) return undefined;
  return parseDate(`${mo + 1}/${m[2]}/${m[3]}`);
}

const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value, onChange, placeholder, disabled, label, labelHelpText, required, readonly,
      defaultMonth, className, id, size = "md",
      error, invalidDateMessage, minDate, maxDate, showDaySteppers = false, displayFormat = "numeric",
    },
    ref
  ) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-format`;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const fieldRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const medium = displayFormat === "medium";
    const format = medium ? formatMedium : formatDate;
    const parse = React.useCallback(
      (s: string) => (medium ? parseMedium(s) ?? parseDate(s.trim()) : parseDate(s)),
      [medium]
    );
    const formatLabel = medium ? MEDIUM_FORMAT : FORMAT;

    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState(value ? format(value) : "");
    // Typed-date problem shown under the field; only set after a blur/Enter.
    const [typedError, setTypedError] = React.useState<string | undefined>();
    // True while the calendar was opened from the keyboard (Alt+↓, ↓, Enter):
    // focus moves into the calendar and comes back to the field on close.
    const [keyboardOpen, setKeyboardOpen] = React.useState(false);
    // Same flag as a ref, read when the calendar closes (after state resets).
    const keyboardOpenRef = React.useRef(false);

    // Fix #2: only sync value→text when the input is NOT focused (user isn't typing)
    React.useEffect(() => {
      if (document.activeElement !== inputRef.current) {
        setText(value ? format(value) : "");
      }
      setTypedError(undefined);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const min = minDate ? startOfDay(minDate) : undefined;
    const max = maxDate ? startOfDay(maxDate) : undefined;
    const inRange = (d: Date) => (!min || d >= min) && (!max || d <= max);

    const rangeMessage = (): string =>
      min && max
        ? `Enter a date from ${format(min)} to ${format(max)}.`
        : min
        ? `Enter a date on or after ${format(min)}.`
        : `Enter a date on or before ${format(max!)}.`;

    /* What's wrong with `t`, if anything (empty text is fine). */
    const problemWith = (t: string): string | undefined => {
      if (t.trim() === "") return undefined;
      const parsed = parse(t);
      if (!parsed) return invalidDateMessage ?? `Enter a valid date (${formatLabel}).`;
      if (!inRange(parsed)) return rangeMessage();
      return undefined;
    };

    const validate = () => {
      if (disabled || readonly) return;
      const problem = problemWith(text);
      setTypedError(problem);
      // In the "medium" format, tidy a valid typed date into that format.
      if (!problem && medium && text.trim() !== "") {
        const parsed = parse(text);
        if (parsed) setText(format(parsed));
      }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setText(v);
      const parsed = parse(v);
      // Only propagate valid dates or explicit clear — never propagate partial input
      if (parsed && inRange(parsed)) onChange?.(parsed);
      else if (v === "") onChange?.(undefined);
      // Once an error is showing, clear it as soon as the text is fixed.
      if (typedError && !problemWith(v)) setTypedError(undefined);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Moving into our own calendar or icon button isn't "leaving" the field.
      const next = e.relatedTarget as Node | null;
      if (next && (fieldRef.current?.contains(next) || contentRef.current?.contains(next))) return;
      validate();
    };

    const openFromKeyboard = () => {
      if (disabled || readonly) return;
      keyboardOpenRef.current = true;
      setKeyboardOpen(true);
      setOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (open || disabled || readonly) return;
      if (e.key === "ArrowDown" || (e.key === "Enter" && !e.altKey)) {
        e.preventDefault();
        // Enter with text that isn't a date shows the error instead of opening.
        if (e.key === "Enter") {
          const problem = problemWith(text);
          if (problem) { setTypedError(problem); return; }
        }
        openFromKeyboard();
      }
    };

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (!next) {
        setKeyboardOpen(false);
        // Closing a mouse-opened calendar by clicking elsewhere counts as
        // leaving the field. (A keyboard-opened one returns focus to the field.)
        if (!keyboardOpenRef.current && document.activeElement !== inputRef.current) validate();
      }
    };

    const handleCalendarSelect = (date: Date | undefined) => {
      setText(date ? format(date) : "");
      setTypedError(undefined);
      onChange?.(date);
      setOpen(false);
      setKeyboardOpen(false);
      if (keyboardOpenRef.current) return; // focus goes back to the field (see onCloseAutoFocus)
      inputRef.current?.blur();
    };

    const step = (days: number) => {
      const base = parse(text) ?? value ?? startOfDay(new Date());
      let next = addDays(base, days);
      if (min && next < min) next = min;
      if (max && next > max) next = max;
      setText(format(next));
      setTypedError(undefined);
      onChange?.(next);
    };

    const selectedDate = parse(text) ?? value;
    const calendarDisabled =
      min || max
        ? [...(min ? [{ before: min }] : []), ...(max ? [{ after: max }] : [])]
        : undefined;
    const shownError = error ?? typedError;
    const current = parse(text) ?? value;
    const interactive = !disabled && !readonly;

    const field = (
      <div ref={fieldRef} data-disabled={disabled || undefined} data-readonly={readonly || undefined}
        data-invalid={shownError ? true : undefined} data-size={size}
        className={cn(inputClass, showDaySteppers && "flex-1 min-w-0")}
        onClick={() => interactive && setOpen(true)}>
        <input ref={inputRef} id={inputId} type="text" value={text}
          onChange={handleTextChange} onKeyDown={handleKeyDown} onBlur={handleBlur}
          placeholder={placeholder ?? formatLabel}
          disabled={disabled} readOnly={readonly}
          className={cn(textInputClass, (disabled || readonly) && "cursor-not-allowed")}
          role="combobox" aria-expanded={open} aria-haspopup="dialog"
          aria-label={label ?? "Date"} autoComplete="off"
          aria-invalid={shownError ? true : undefined}
          aria-describedby={cn(shownError && errorId, hintId) || undefined} />
        <span id={hintId} className="sr-only">
          {`Format ${formatLabel}. Press Alt+Down Arrow to open the calendar.`}
        </span>
        <CalendarIconButton open={open} disabled={!interactive}
          label={current ? `Choose date, selected date is ${formatMedium(current)}` : "Choose date"} />
      </div>
    );

    const minReached = !!(min && current && startOfDay(current) <= min);
    const maxReached = !!(max && current && startOfDay(current) >= max);
    const stepperSize = size === "sm" ? "icon" : "icon-lg";

    return (
      <div ref={ref} className={className}>
        {label && (
          <Label label={label} labelFor={inputId} labelHelpText={labelHelpText}
            required={required} disabled={disabled} readonly={readonly} className="mb-1.5" />
        )}
        <PopoverPrimitive.Root open={interactive && open} onOpenChange={handleOpenChange}>
          {showDaySteppers ? (
            <div className="flex items-center gap-2">
              <PopoverPrimitive.Anchor asChild>{field}</PopoverPrimitive.Anchor>
              <Button type="button" variant="outline" size={stepperSize} aria-label="Previous day"
                disabled={!interactive || minReached} onClick={() => step(-1)}>
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Button>
              <Button type="button" variant="outline" size={stepperSize} aria-label="Next day"
                disabled={!interactive || maxReached} onClick={() => step(1)}>
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Button>
            </div>
          ) : (
            <PopoverPrimitive.Anchor asChild>{field}</PopoverPrimitive.Anchor>
          )}
          <PopoverPrimitive.Portal>
            <CalendarPanel
              // Opened from the keyboard: let the calendar put focus on the
              // selected day (Calendar `autoFocus`) instead of Radix's default
              // first-button focus, and bring focus back to the field on close.
              // Mouse-opened calendars keep Radix's default behavior.
              onOpenAutoFocus={keyboardOpen ? (e) => e.preventDefault() : undefined}
              onCloseAutoFocus={(e) => {
                if (!keyboardOpenRef.current) return; // mouse: Radix default, as before
                keyboardOpenRef.current = false;
                e.preventDefault();
                inputRef.current?.focus();
              }}
            >
              <div ref={contentRef}>
                <Calendar mode="single" selected={selectedDate}
                  onSelect={handleCalendarSelect} defaultMonth={defaultMonth ?? selectedDate}
                  disabled={calendarDisabled} autoFocus={keyboardOpen || undefined} />
              </div>
            </CalendarPanel>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
        {shownError && <DateFieldError id={errorId}>{shownError}</DateFieldError>}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";


export { DatePicker };
