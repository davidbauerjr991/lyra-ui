import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { Label } from "./label";
import { Calendar, type DateRange } from "./calendar";
import { Menu } from "./menu";
import {
  FORMAT, formatRange, parseRange, inputClass, textInputClass, CalendarPanel,
  CalendarIconButton, DateFieldError, formatDate, formatDateLong, startOfDay,
} from "./date-picker-shared";

/* ══════════════════════════════
   DateRangePicker
═══════════════════════════════ */

/** A quick range shown beside the calendar when `presets` is on. `range` is
 *  called when the list renders and when it's picked, so "Today" stays current. */
export interface DateRangePreset {
  id: string;
  label: string;
  range: () => { from: Date; to: Date };
}

const today = () => startOfDay(new Date());
const shift = (d: Date, days: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);

/** The presets `presets={true}` shows: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month. */
export const DEFAULT_DATE_RANGE_PRESETS: DateRangePreset[] = [
  { id: "today", label: "Today", range: () => ({ from: today(), to: today() }) },
  { id: "yesterday", label: "Yesterday", range: () => ({ from: shift(today(), -1), to: shift(today(), -1) }) },
  { id: "last7", label: "Last 7 days", range: () => ({ from: shift(today(), -6), to: today() }) },
  { id: "last30", label: "Last 30 days", range: () => ({ from: shift(today(), -29), to: today() }) },
  {
    id: "thisMonth", label: "This month",
    range: () => { const t = today(); return { from: new Date(t.getFullYear(), t.getMonth(), 1), to: new Date(t.getFullYear(), t.getMonth() + 1, 0) }; },
  },
  {
    id: "lastMonth", label: "Last month",
    range: () => { const t = today(); return { from: new Date(t.getFullYear(), t.getMonth() - 1, 1), to: new Date(t.getFullYear(), t.getMonth(), 0) }; },
  },
];

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
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
   * Error message from the consumer (e.g. "Select a date range"). Shows the
   * field's error styling and the message below it, and sets `aria-invalid`.
   * Takes priority over the picker's own typed-range messages. Unset by default.
   */
  error?: string;
  /**
   * Message shown when someone leaves the field (or presses Enter) with text
   * that isn't a full range of real dates, e.g. "10/05/2026" alone or
   * "02/31/2026 – 03/04/2026". Only appears after typing; `onChange` behaves
   * exactly as before. Default: "Enter a date range (MM/DD/YYYY – MM/DD/YYYY)."
   */
  invalidDateMessage?: string;
  /** Opt-in: earliest selectable date. Earlier days are disabled in the
   *  calendar, and a typed range starting earlier shows an error instead of being picked. */
  minDate?: Date;
  /** Opt-in: latest selectable date. Same treatment as `minDate`. */
  maxDate?: Date;
  /**
   * Opt-in: quick ranges in a list beside the calendar. `true` shows
   * `DEFAULT_DATE_RANGE_PRESETS`; pass your own list to customize. Picking one
   * fills the field and closes the calendar. Default: no presets.
   */
  presets?: boolean | DateRangePreset[];
}

const sameDay = (a?: Date, b?: Date) => !!a && !!b && startOfDay(a).getTime() === startOfDay(b).getTime();

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value, onChange, placeholder = `${FORMAT} – ${FORMAT}`, disabled, label, labelHelpText, required, readonly,
      defaultMonth, className, id, size = "md",
      error, invalidDateMessage, minDate, maxDate, presets,
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

    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState(formatRange(value));
    // Typed-range problem shown under the field; only set after a blur/Enter.
    const [typedError, setTypedError] = React.useState<string | undefined>();
    // Calendar opened from the keyboard (Alt+↓, ↓, Enter): focus moves into
    // the calendar and comes back to the field on close. The ref is read when
    // the calendar closes, after the state has reset.
    const [keyboardOpen, setKeyboardOpen] = React.useState(false);
    const keyboardOpenRef = React.useRef(false);

    // Fix #2: only sync value→text when input is not focused
    React.useEffect(() => {
      if (document.activeElement !== inputRef.current) {
        setText(formatRange(value));
      }
      setTypedError(undefined);
    }, [value]);

    const min = minDate ? startOfDay(minDate) : undefined;
    const max = maxDate ? startOfDay(maxDate) : undefined;
    const inRange = (d: Date) => (!min || startOfDay(d) >= min) && (!max || startOfDay(d) <= max);

    const rangeMessage = (): string =>
      min && max
        ? `Enter dates from ${formatDate(min)} to ${formatDate(max)}.`
        : min
        ? `Enter dates on or after ${formatDate(min)}.`
        : `Enter dates on or before ${formatDate(max!)}.`;

    /* What's wrong with `t`, if anything (empty text is fine). */
    const problemWith = (t: string): string | undefined => {
      if (t.trim() === "") return undefined;
      const parsed = parseRange(t);
      if (!parsed?.from || !parsed.to) return invalidDateMessage ?? `Enter a date range (${FORMAT} – ${FORMAT}).`;
      if (startOfDay(parsed.to) < startOfDay(parsed.from)) return "The end date must be on or after the start date.";
      if (!inRange(parsed.from) || !inRange(parsed.to)) return rangeMessage();
      return undefined;
    };

    const validate = () => {
      if (disabled || readonly) return;
      setTypedError(problemWith(text));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setText(v);
      if (typedError && !problemWith(v)) setTypedError(undefined);
      if (v === "") { onChange?.(undefined); return; }
      const parsed = parseRange(v);
      // Unchanged: a full range is passed on as typed. With `minDate`/`maxDate`
      // (opt-in), a range outside them isn't.
      if (parsed?.from && parsed?.to && (!(min || max) || (inRange(parsed.from) && inRange(parsed.to)))) onChange?.(parsed);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Moving into our own calendar or icon button isn't "leaving" the field.
      const next = e.relatedTarget as Node | null;
      if (next && (fieldRef.current?.contains(next) || contentRef.current?.contains(next))) return;
      validate();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (open || disabled || readonly) return;
      if (e.key === "ArrowDown" || (e.key === "Enter" && !e.altKey)) {
        e.preventDefault();
        // Enter with text that isn't a range shows the error instead of opening.
        if (e.key === "Enter") {
          const problem = problemWith(text);
          if (problem) { setTypedError(problem); return; }
        }
        keyboardOpenRef.current = true;
        setKeyboardOpen(true);
        setOpen(true);
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

    const handleCalendarSelect = (range: DateRange | undefined) => {
      setText(formatRange(range));
      setTypedError(undefined);
      onChange?.(range);
      // Fix #3: never auto-close — user closes by clicking outside or the trigger
    };

    const presetList = presets === true ? DEFAULT_DATE_RANGE_PRESETS : presets || [];
    const handlePreset = (preset: DateRangePreset) => {
      const range = preset.range();
      setText(formatRange(range));
      setTypedError(undefined);
      onChange?.(range);
      setOpen(false);
      setKeyboardOpen(false);
      // Mouse: leave the field, as picking a date in DatePicker does. Keyboard:
      // focus returns to the field (onCloseAutoFocus below).
      if (!keyboardOpenRef.current) inputRef.current?.blur();
    };

    const parsedText = parseRange(text);
    const selectedRange = parsedText ?? value;
    const current = parsedText?.from && parsedText.to ? parsedText : value;
    const calendarDisabled =
      min || max
        ? [...(min ? [{ before: min }] : []), ...(max ? [{ after: max }] : [])]
        : undefined;
    const shownError = error ?? typedError;
    const interactive = !disabled && !readonly;
    const iconLabel = current?.from && current.to
      ? `Choose dates, selected range is ${formatDateLong(current.from)} to ${formatDateLong(current.to)}`
      : "Choose dates";

    const calendar = (
      <Calendar mode="range" selected={selectedRange}
        onSelect={handleCalendarSelect} defaultMonth={defaultMonth ?? selectedRange?.from}
        disabled={calendarDisabled} autoFocus={keyboardOpen || undefined} />
    );

    return (
      <div ref={ref} className={className}>
        {label && (
          <Label label={label} labelFor={inputId} labelHelpText={labelHelpText}
            required={required} disabled={disabled} readonly={readonly} className="mb-1.5" />
        )}
        <PopoverPrimitive.Root open={interactive && open} onOpenChange={handleOpenChange}>
          <PopoverPrimitive.Anchor asChild>
            <div ref={fieldRef} data-disabled={disabled || undefined} data-readonly={readonly || undefined}
              data-invalid={shownError ? true : undefined} data-size={size}
              className={inputClass} onClick={() => interactive && setOpen(v => !v)}>
              <input ref={inputRef} id={inputId} type="text" value={text}
                onChange={handleTextChange} onKeyDown={handleKeyDown} onBlur={handleBlur}
                placeholder={placeholder}
                disabled={disabled} readOnly={readonly}
                className={cn(textInputClass, (disabled || readonly) && "cursor-not-allowed")}
                role="combobox" aria-expanded={open} aria-haspopup="dialog"
                aria-label={label ?? "Date range"} autoComplete="off"
                aria-invalid={shownError ? true : undefined}
                aria-describedby={cn(shownError && errorId, hintId) || undefined} />
              <span id={hintId} className="sr-only">
                {`Format ${FORMAT} – ${FORMAT}. Press Alt+Down Arrow to open the calendar.`}
              </span>
              <CalendarIconButton label={iconLabel} open={open} disabled={!interactive} />
            </div>
          </PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            <CalendarPanel
              className={presetList.length ? "w-auto" : undefined}
              // Opened from the keyboard: let the calendar put focus on the
              // selected start day (Calendar `autoFocus`) instead of Radix's
              // default first-button focus, and bring focus back to the field
              // on close. Mouse-opened calendars keep Radix's default behavior.
              // Mouse-opened: focus (and the caret) stays in the text field so the
              // range can be typed while the calendar is open.
              onOpenAutoFocus={keyboardOpen ? (e) => e.preventDefault() : (e) => { e.preventDefault(); inputRef.current?.focus(); }}
              onCloseAutoFocus={(e) => {
                if (!keyboardOpenRef.current) return; // mouse: Radix default, as before
                keyboardOpenRef.current = false;
                e.preventDefault();
                inputRef.current?.focus();
              }}
            >
              <div ref={contentRef} className={presetList.length ? "flex gap-3" : undefined}>
                {presetList.length > 0 && (
                  <div className="w-40 flex-shrink-0 border-r border-lyra-border-subtle pr-2">
                    <Menu bare aria-label="Quick ranges"
                      items={presetList.map((p) => {
                        const r = p.range();
                        return {
                          id: p.id,
                          label: p.label,
                          active: !!current && sameDay(current.from, r.from) && sameDay(current.to, r.to),
                          disabled: !inRange(r.from) || !inRange(r.to),
                          onClick: () => handlePreset(p),
                        };
                      })} />
                  </div>
                )}
                {presetList.length > 0 ? <div className="w-[264px]">{calendar}</div> : calendar}
              </div>
            </CalendarPanel>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
        {shownError && <DateFieldError id={errorId}>{shownError}</DateFieldError>}
      </div>
    );
  }
);
DateRangePicker.displayName = "DateRangePicker";


export { DateRangePicker };
