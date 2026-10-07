import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Clock } from "lucide-react";
import { Label } from "./label";
import {
  formatTime, parseTime, toHours24, TimeSelector, inputShell, TimePanel, initState,
} from "./time-picker-shared";

/* ══════════════════════════════════════
   TimeRangePicker
══════════════════════════════════════ */

export interface TimeRangeValue {
  from?: Date;
  to?: Date;
}

export interface TimeRangePickerProps {
  value?: TimeRangeValue;
  onChange?: (range: TimeRangeValue | undefined) => void;
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
  /** Opt-in: AM/PM in the spinner panel is a dropdown instead of a toggle button. */
  ampmSelect?: boolean;
}

function formatRange(v: TimeRangeValue | undefined): string {
  if (!v) return "";
  const s = initState(v.from);
  const e = initState(v.to);
  const from = v.from ? formatTime(s.hour, s.minute, s.ampm) : "";
  const to   = v.to   ? formatTime(e.hour, e.minute, e.ampm) : "";
  if (from && to) return `${from} – ${to}`;
  return from;
}

/** "09:00 AM – 05:00 PM" (en dash, em dash or hyphen) → both times, or undefined unless both are real. */
function parseRangeText(s: string) {
  const parts = s.split(/\s*[–—-]\s*/);
  if (parts.length !== 2) return undefined;
  const from = parseTime(parts[0].trim());
  const to = parseTime(parts[1].trim());
  return from && to ? { from, to } : undefined;
}

const TimeRangePicker = React.forwardRef<HTMLDivElement, TimeRangePickerProps>(
  ({ value, onChange, placeholder = "HH:MM AM – HH:MM AM", disabled, label, labelHelpText, required, readonly, className, id, size = "md", ampmSelect = false }, ref) => {
    const autoId   = React.useId();
    const inputId  = id ?? autoId;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const panelRef = React.useRef<HTMLDivElement>(null);

    type TS = { hour: number; minute: number; ampm: "AM" | "PM" };
    const [open,     setOpen]     = React.useState(false);
    const [text,     setText]     = React.useState(formatRange(value));
    const [fromTs,   setFromTs]   = React.useState<TS>(initState(value?.from));
    const [toTs,     setToTs]     = React.useState<TS>(initState(value?.to));

    React.useEffect(() => {
      if (document.activeElement !== inputRef.current) {
        setFromTs(initState(value?.from));
        setToTs(initState(value?.to));
        setText(formatRange(value));
      }
    }, [value]);

    const buildDate = (ts: TS, base?: Date): Date => {
      const now = base ?? new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), toHours24(ts.hour, ts.ampm), ts.minute);
    };

    const commit = (ft: TS, tt: TS) => {
      const next: TimeRangeValue = { from: buildDate(ft, value?.from), to: buildDate(tt, value?.to) };
      setText(formatRange(next));
      onChange?.(next);
    };

    const handleFrom = (patch: Partial<TS>) => {
      const next = { ...fromTs, ...patch };
      setFromTs(next);
      commit(next, toTs);
    };

    const handleTo = (patch: Partial<TS>) => {
      const next = { ...toTs, ...patch };
      setToTs(next);
      commit(fromTs, next);
    };

    // Typing: once both times are real they're sent on as typed (the text is
    // left alone so the caret doesn't jump); leaving the field tidies it to
    // "HH:MM AM – HH:MM AM", or puts the last good value back if it isn't a range.
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setText(v);
      if (v.trim() === "") { onChange?.(undefined); return; }
      const parsed = parseRangeText(v);
      if (parsed) {
        setFromTs(parsed.from);
        setToTs(parsed.to);
        onChange?.({ from: buildDate(parsed.from, value?.from), to: buildDate(parsed.to, value?.to) });
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Moving into our own panel isn't "leaving" the field.
      const next = e.relatedTarget as Node | null;
      if (next && (panelRef.current?.contains(next) || inputRef.current?.parentElement?.contains(next))) return;
      if (text.trim() === "") return;
      const parsed = parseRangeText(text);
      setText(parsed ? formatRange({ from: buildDate(parsed.from, value?.from), to: buildDate(parsed.to, value?.to) }) : formatRange(value));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readonly) return;
      if (!open && (e.key === "ArrowDown" || (e.key === "Enter" && !e.altKey))) {
        e.preventDefault();
        setOpen(true);
      } else if (open && e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };

    return (
      <div ref={ref} className={className}>
        {label && (
          <Label label={label} labelFor={inputId} labelHelpText={labelHelpText}
            required={required} disabled={disabled} readonly={readonly} className="mb-1.5" />
        )}
        <PopoverPrimitive.Root open={!disabled && !readonly && open} onOpenChange={setOpen}>
          <PopoverPrimitive.Anchor asChild>
            <div className={inputShell(disabled, readonly, size)} onClick={() => !disabled && !readonly && setOpen(true)}>
              <input
                ref={inputRef} id={inputId} type="text" value={text}
                onChange={handleTextChange} onBlur={handleBlur} onKeyDown={handleKeyDown}
                placeholder={placeholder} disabled={disabled} readOnly={readonly}
                className="flex-1 bg-transparent outline-none pl-3 pr-1 truncate placeholder:text-lyra-fg-disabled"
                role="combobox" aria-expanded={open} aria-haspopup="dialog"
                aria-label={label ?? "Time range"} autoComplete="off"
              />
              <span className="pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0">
                <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>
          </PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            {/* Opening the panel leaves focus (and the caret) in the text field,
                so the range can be typed as well as picked. */}
            <TimePanel
              wide={ampmSelect}
              onOpenAutoFocus={(e) => { e.preventDefault(); inputRef.current?.focus(); }}
            >
              <div ref={panelRef}>
              <div className="px-3 pt-3 pb-1">
                <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Start time</p>
              </div>
              <TimeSelector
                hour={fromTs.hour} minute={fromTs.minute} ampm={fromTs.ampm}
                onHourChange={(h) => handleFrom({ hour: h })}
                onMinuteChange={(m) => handleFrom({ minute: m })}
                onAmpmChange={(a) => handleFrom({ ampm: a })}
                ampmSelect={ampmSelect}
              />
              <div className="border-t border-lyra-border-subtle mx-3" />
              <div className="px-3 pt-3 pb-1">
                <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">End time</p>
              </div>
              <TimeSelector
                hour={toTs.hour} minute={toTs.minute} ampm={toTs.ampm}
                onHourChange={(h) => handleTo({ hour: h })}
                onMinuteChange={(m) => handleTo({ minute: m })}
                onAmpmChange={(a) => handleTo({ ampm: a })}
                ampmSelect={ampmSelect}
              />
              </div>
            </TimePanel>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </div>
    );
  }
);
TimeRangePicker.displayName = "TimeRangePicker";


export { TimeRangePicker };
