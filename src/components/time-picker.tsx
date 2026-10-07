import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Clock } from "lucide-react";
import { Label } from "./label";
import { cn } from "../lib/utils";
import {
  formatTime, parseTime, toHours24, TimeSelector, TimeMenu, MENU_OPTIONS, MENU_STEP_MINUTES, buildTimeOptions, menuIndexOf, inputShell, TimePanel, initState,
} from "./time-picker-shared";
import { CalendarIconButton, DateFieldError } from "./date-picker-shared";

/* ══════════════════════════════════════
   TimePicker
══════════════════════════════════════ */

export interface TimePickerProps {
  /** Controlled value — 24h Date object (only time portion is used) */
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelHelpText?: string;
  required?: boolean;
  readonly?: boolean;
  className?: string;
  id?: string;
  /** Field height. "md" (36px, default) or "sm" (32px) for dense contexts. */
  size?: "sm" | "md";
  /**
   * Opt-in: replaces the hour/minute spinner panel with a scrollable list of
   * times in half-hour steps. Typing a time still works; Arrow Up/Down move
   * through the list and Enter picks.
   */
  menu?: boolean;
  /** Opt-in: AM/PM in the spinner panel is a dropdown instead of a toggle button. */
  ampmSelect?: boolean;
  /**
   * Error message from the consumer (e.g. "Select a time"). Shows the field's
   * error styling and the message below it, and sets `aria-invalid`. Takes
   * priority over the picker's own typed-time messages. Unset by default.
   */
  error?: string;
  /**
   * Message shown when someone leaves the field (or presses Enter) with text
   * that isn't a time, e.g. "25:99" or "lunch". Only appears after typing;
   * `onChange` is never called with it. Default: "Enter a valid time (HH:MM AM)."
   */
  invalidTimeMessage?: string;
  /** Opt-in: earliest allowed time (only the time of day is used). Earlier
   *  times are left out of the `menu` list, and a typed or spun earlier time
   *  shows an error instead of being picked. */
  minTime?: Date;
  /** Opt-in: latest allowed time. Same treatment as `minTime`. */
  maxTime?: Date;
  /** Opt-in: minutes between times in the `menu` list. Default 30. */
  step?: number;
  /**
   * Where the clock icon sits. "inside" (default) keeps it inside the field's
   * box at any width. "outside" keeps the old layout, where the text input
   * keeps its browser-default minimum width, so in a field narrower than about
   * 260px the clock ends up just past the box's right edge.
   */
  iconPlacement?: "inside" | "outside";
}

const minutesOf = (t: { hour: number; minute: number; ampm: "AM" | "PM" }) => toHours24(t.hour, t.ampm) * 60 + t.minute;
const minutesOfDate = (d: Date) => d.getHours() * 60 + d.getMinutes();
const labelOfDate = (d: Date) => { const s = initState(d); return formatTime(s.hour, s.minute, s.ampm); };

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value, onChange, placeholder = "HH:MM AM", disabled, label, labelHelpText, required, readonly, className, id, size = "md",
      menu = false, ampmSelect = false, error, invalidTimeMessage, minTime, maxTime, step = MENU_STEP_MINUTES,
      iconPlacement = "inside",
    },
    ref
  ) => {
    const autoId   = React.useId();
    const listId   = `${React.useId()}-times`;
    const inputId  = id ?? autoId;
    const errorId  = `${inputId}-error`;
    const hintId   = `${inputId}-format`;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const fieldRef = React.useRef<HTMLDivElement>(null);
    const panelRef = React.useRef<HTMLDivElement | null>(null);

    const [open, setOpen]     = React.useState(false);
    const [ts,   setTs]       = React.useState(initState(value));
    const [text, setText]     = React.useState(value ? formatTime(initState(value).hour, initState(value).minute, initState(value).ampm) : "");
    // Typed-time problem shown under the field; only set after a blur/Enter.
    const [typedError, setTypedError] = React.useState<string | undefined>();
    // Opened from the keyboard (Alt+↓, ↓ or Enter): focus comes back to the field on close.
    const keyboardOpenRef = React.useRef(false);

    React.useEffect(() => {
      if (document.activeElement !== inputRef.current) {
        const s = initState(value);
        setTs(s);
        setText(value ? formatTime(s.hour, s.minute, s.ampm) : "");
      }
      setTypedError(undefined);
    }, [value]);

    /* ── Allowed range (opt-in) ── */
    const minM = minTime ? minutesOfDate(minTime) : undefined;
    const maxM = maxTime ? minutesOfDate(maxTime) : undefined;
    const inRange = (t: { hour: number; minute: number; ampm: "AM" | "PM" }) => {
      const m = minutesOf(t);
      return (minM === undefined || m >= minM) && (maxM === undefined || m <= maxM);
    };
    const rangeMessage = () =>
      minTime && maxTime ? `Enter a time from ${labelOfDate(minTime)} to ${labelOfDate(maxTime)}.`
      : minTime ? `Enter a time at or after ${labelOfDate(minTime)}.`
      : `Enter a time at or before ${labelOfDate(maxTime!)}.`;
    const options = React.useMemo(() => {
      const all = step === MENU_STEP_MINUTES ? MENU_OPTIONS : buildTimeOptions(step);
      return minM === undefined && maxM === undefined ? all : all.filter((o) => inRange(o));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, minM, maxM]);

    /* What's wrong with `t`, if anything (empty text is fine). */
    const problemWith = (t: string): string | undefined => {
      if (t.trim() === "") return undefined;
      const parsed = parseTime(t.trim());
      if (!parsed) return invalidTimeMessage ?? "Enter a valid time (HH:MM AM).";
      if (!inRange(parsed)) return rangeMessage();
      return undefined;
    };
    const validate = () => {
      if (disabled || readonly) return;
      setTypedError(problemWith(text));
    };

    const commit = (next: typeof ts) => {
      setText(formatTime(next.hour, next.minute, next.ampm));
      // Opt-in range: a time outside it is shown with an error, not sent on.
      if (!inRange(next)) { setTypedError(rangeMessage()); return; }
      setTypedError(undefined);
      const now = value ?? new Date();
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), toHours24(next.hour, next.ampm), next.minute);
      onChange?.(d);
    };

    const handleChange = (patch: Partial<typeof ts>) => {
      const next = { ...ts, ...patch };
      setTs(next);
      commit(next);
    };

    // Menu mode: which option the arrow keys are on (-1 = none yet).
    const [activeIndex, setActiveIndex] = React.useState(-1);
    React.useEffect(() => {
      if (open && menu) setActiveIndex(menuIndexOf(ts, options));
    }, [open, menu]); // eslint-disable-line react-hooks/exhaustive-deps

    const pickMenuOption = (i: number) => {
      const o = options[i];
      if (!o) return;
      const next = { hour: o.hour, minute: o.minute, ampm: o.ampm };
      setTs(next);
      commit(next);
      setOpen(false);
    };

    const openFromKeyboard = () => {
      keyboardOpenRef.current = true;
      setOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readonly) return;
      if (menu) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          if (!open) { openFromKeyboard(); return; }
          const delta = e.key === "ArrowDown" ? 1 : -1;
          setActiveIndex((i) => (i < 0 ? (delta === 1 ? 0 : options.length - 1) : Math.min(options.length - 1, Math.max(0, i + delta))));
        } else if (e.key === "Enter") {
          if (open && activeIndex >= 0) { e.preventDefault(); pickMenuOption(activeIndex); }
          else if (!open) {
            e.preventDefault();
            const problem = problemWith(text);
            if (problem) setTypedError(problem); else openFromKeyboard();
          }
        }
        return;
      }
      // Spinner panel: Alt+↓, ↓ or Enter opens it, with focus on the hour field.
      if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
        e.preventDefault();
        if (e.key === "Enter") {
          const problem = problemWith(text);
          if (problem) { setTypedError(problem); return; }
        }
        openFromKeyboard();
      }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setText(v);
      if (typedError && !problemWith(v)) setTypedError(undefined);
      if (v === "") { onChange?.(undefined); return; }
      const parsed = parseTime(v);
      if (parsed) {
        // As before: a valid typed time is tidied to "HH:MM AM" and sent on
        // (unless it's outside an opt-in min/max, which shows an error).
        setTs(parsed);
        commit(parsed);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Moving into our own panel or icon button isn't "leaving" the field.
      const next = e.relatedTarget as Node | null;
      if (next && (fieldRef.current?.contains(next) || panelRef.current?.contains(next))) return;
      validate();
    };

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (!next && !keyboardOpenRef.current && document.activeElement !== inputRef.current) validate();
    };

    const shownError = error ?? typedError;
    const interactive = !disabled && !readonly;
    const currentLabel = value ? labelOfDate(value) : undefined;

    return (
      <div ref={ref} className={className}>
        {label && (
          <Label label={label} labelFor={inputId} labelHelpText={labelHelpText}
            required={required} disabled={disabled} readonly={readonly} className="mb-1.5" />
        )}
        <PopoverPrimitive.Root open={interactive && open} onOpenChange={handleOpenChange}>
          <PopoverPrimitive.Anchor asChild>
            <div ref={fieldRef} className={inputShell(disabled, readonly, size, !!shownError)} onClick={() => interactive && setOpen(true)}>
              <input
                ref={inputRef} id={inputId} type="text" value={text}
                onChange={handleTextChange} placeholder={placeholder}
                disabled={disabled} readOnly={readonly}
                className={cn(
                  "flex-1 bg-transparent outline-none pl-3 pr-1 truncate placeholder:text-lyra-fg-disabled",
                  // `min-w-0` lets the input shrink below its default ~20-character
                  // width, so the clock stays inside the box in narrow fields.
                  iconPlacement === "inside" && "min-w-0"
                )}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                role="combobox" aria-expanded={open} aria-haspopup={menu ? "listbox" : "dialog"}
                aria-controls={menu && open ? listId : undefined}
                aria-activedescendant={menu && open && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
                aria-label={label ?? "Time"} autoComplete="off"
                aria-invalid={shownError ? true : undefined}
                aria-describedby={[shownError ? errorId : "", hintId].filter(Boolean).join(" ")}
              />
              <span id={hintId} className="sr-only">
                {menu ? "Format HH:MM AM. Press Down Arrow for a list of times." : "Format HH:MM AM. Press Alt+Down Arrow to open the time picker."}
              </span>
              <CalendarIconButton
                open={open} disabled={!interactive}
                label={currentLabel ? `Choose time, selected time is ${currentLabel}` : "Choose time"}
                icon={<Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
              />
            </div>
          </PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            <TimePanel
              menu={menu} wide={ampmSelect}
              // Opened from the keyboard: focus comes back to the field on close.
              // Mouse-opened panels keep Radix's default behavior.
              onCloseAutoFocus={(e) => {
                if (!keyboardOpenRef.current) return;
                keyboardOpenRef.current = false;
                e.preventDefault();
                inputRef.current?.focus();
              }}
              // Spinner panel: Enter in it closes it, keeping the time.
              onKeyDown={!menu ? (e) => {
                if (e.key === "Enter" && !(e.target as HTMLElement).closest("button,[role=combobox],[role=listbox]")) {
                  e.preventDefault();
                  keyboardOpenRef.current = true;
                  setOpen(false);
                }
              } : undefined}
            >
              <div ref={panelRef}>
              {menu ? (
                <TimeMenu
                  listId={listId}
                  activeIndex={activeIndex}
                  selectedIndex={menuIndexOf(ts, options)}
                  onSelect={pickMenuOption}
                  options={options}
                />
              ) : (
                <TimeSelector
                  hour={ts.hour} minute={ts.minute} ampm={ts.ampm}
                  onHourChange={(h) => handleChange({ hour: h })}
                  onMinuteChange={(m) => handleChange({ minute: m })}
                  onAmpmChange={(a) => handleChange({ ampm: a })}
                  ampmSelect={ampmSelect}
                />
              )}
              </div>
            </TimePanel>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
        {shownError && <DateFieldError id={errorId}>{shownError}</DateFieldError>}
      </div>
    );
  }
);
TimePicker.displayName = "TimePicker";


export { TimePicker, TimeSelector };
