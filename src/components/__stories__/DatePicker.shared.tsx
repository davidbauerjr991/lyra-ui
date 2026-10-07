/* Shared example data and demo components for the DatePicker and
   DateRangePicker stories (DatePicker.stories.tsx, DatePicker.variants.stories.tsx,
   DateRangePicker.stories.tsx, DateRangePicker.variants.stories.tsx). Not a
   stories file — it only holds what they share, so they can't drift apart. */
import { useState } from "react";
import { DatePicker } from "../date-picker";
import { DateTimePicker, DateRangeTimePicker, type DateRangeTimeValue } from "../date-time-picker";
import { DateRangePicker } from "../date-range-picker";
import type { DateRange } from "../calendar";

export const DATE_HELP_TEXT = "Select any date.";
export const RANGE_HELP_TEXT = "Select start and end dates.";

/** Today through a week from now — the range every range example starts with. */
export const nextWeekRange = (): DateRange => {
  const from = new Date();
  const to = new Date(from);
  to.setDate(from.getDate() + 7);
  return { from, to };
};

/** Every DatePicker state in one column. */
export function DatePickerVariantsDemo() {
  const [empty, setEmpty] = useState<Date | undefined>();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [small, setSmall] = useState<Date | undefined>();

  return (
    /* Extra bottom padding reserves space so the last calendar opens below */
    <div className="flex flex-col gap-6 max-w-sm pb-[420px]">
      <DatePicker label="Empty" value={empty} onChange={setEmpty} />
      <DatePicker
        label="With value"
        labelHelpText={DATE_HELP_TEXT}
        value={date}
        onChange={setDate}
        required
      />
      <DatePicker label="Small (32px)" value={small} onChange={setSmall} size="sm" />
      <DatePicker label="Disabled" value={new Date()} disabled />
      <DatePicker label="Readonly" value={new Date()} readonly />
    </div>
  );
}

/** Every DateRangePicker state in one column. */
export function DateRangePickerVariantsDemo() {
  const [empty, setEmpty] = useState<DateRange | undefined>();
  const [range, setRange] = useState<DateRange | undefined>(nextWeekRange);
  const [small, setSmall] = useState<DateRange | undefined>();

  return (
    /* Extra bottom padding reserves space so the last calendar opens below */
    <div className="flex flex-col gap-6 max-w-md pb-[420px]">
      <DateRangePicker label="Empty" value={empty} onChange={setEmpty} />
      <DateRangePicker
        label="With value"
        labelHelpText={RANGE_HELP_TEXT}
        value={range}
        onChange={setRange}
        required
      />
      <DateRangePicker label="Small (32px)" value={small} onChange={setSmall} size="sm" />
      <DateRangePicker label="Disabled" value={nextWeekRange()} disabled />
      <DateRangePicker label="Readonly" value={nextWeekRange()} readonly />
    </div>
  );
}

/** Today ± `days`, at midnight. */
export const daysFromToday = (days: number): Date => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
};

/** Error states: a message from the app (`error`), and the picker's own
    message for typed text that isn't a date (type "13/45/2026", then Tab). */
export function DatePickerErrorDemo() {
  const [a, setA] = useState<Date | undefined>();
  const [b, setB] = useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-6 max-w-sm pb-[420px]">
      <DatePicker label="Due Date" value={a} onChange={setA} required error={a ? undefined : "Select a due date."} />
      <DatePicker label="Typed date (try 13/45/2026, then Tab)" value={b} onChange={setB} />
    </div>
  );
}

/** `minDate` / `maxDate`: only the next 30 days can be picked or typed. */
export function DatePickerConstraintsDemo() {
  const [date, setDate] = useState<Date | undefined>(daysFromToday(0));
  return (
    <div className="flex flex-col gap-2 max-w-sm pb-[420px]">
      <DatePicker
        label="Follow-up Date"
        labelHelpText="Pick a date in the next 30 days."
        value={date}
        onChange={setDate}
        minDate={daysFromToday(0)}
        maxDate={daysFromToday(30)}
        showDaySteppers
      />
    </div>
  );
}

/** `showDaySteppers`: previous / next day buttons beside the field. */
export function DatePickerDayStepperDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [small, setSmall] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-6 max-w-sm pb-[420px]">
      <DatePicker label="Date" value={date} onChange={setDate} showDaySteppers />
      <DatePicker label="Small (32px)" value={small} onChange={setSmall} showDaySteppers size="sm" />
      <DatePicker label="Disabled" value={new Date()} showDaySteppers disabled />
    </div>
  );
}

/** `displayFormat="medium"`: shows "Jan 4, 2026" and accepts it when typed. */
export function DatePickerMediumFormatDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [empty, setEmpty] = useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-6 max-w-sm pb-[420px]">
      <DatePicker label="Date" value={date} onChange={setDate} displayFormat="medium" />
      <DatePicker label="Empty" value={empty} onChange={setEmpty} displayFormat="medium" />
    </div>
  );
}

/** Date and time — the existing `DateTimePicker` component. */
export function DatePickerWithTimeDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-2 max-w-sm pb-[460px]">
      <DateTimePicker label="Date and Time" value={date} onChange={setDate} />
      <span className="lyra-body-sm text-lyra-fg-secondary">
        Uses `DateTimePicker` (Custom Primitives/DateTimePicker).
      </span>
    </div>
  );
}

/** DateRangePicker error states: a message from the app (`error`), and the
    picker's own message for typed text that isn't a full range (type
    "10/05/2026" alone, then Tab). */
export function DateRangePickerErrorDemo() {
  const [a, setA] = useState<DateRange | undefined>();
  const [b, setB] = useState<DateRange | undefined>();
  return (
    <div className="flex flex-col gap-6 max-w-md pb-[420px]">
      <DateRangePicker label="Report Period" value={a} onChange={setA} required
        error={a?.from && a.to ? undefined : "Select a date range."} />
      <DateRangePicker label="Typed range (try 10/05/2026, then Tab)" value={b} onChange={setB} />
    </div>
  );
}

/** `minDate` / `maxDate`: only the last 90 days can be picked or typed. */
export function DateRangePickerConstraintsDemo() {
  const [range, setRange] = useState<DateRange | undefined>({ from: daysFromToday(-7), to: daysFromToday(0) });
  return (
    <div className="flex flex-col gap-2 max-w-md pb-[420px]">
      <DateRangePicker
        label="Report Period"
        labelHelpText="Pick dates in the last 90 days."
        value={range}
        onChange={setRange}
        minDate={daysFromToday(-90)}
        maxDate={daysFromToday(0)}
      />
    </div>
  );
}

/** `presets`: quick ranges beside the calendar. Open the calendar to see them. */
export function DateRangePickerPresetsDemo() {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <div className="flex flex-col gap-2 max-w-md pb-[420px]">
      <DateRangePicker label="Date Range" value={range} onChange={setRange} presets />
    </div>
  );
}

/** Date and time range — the existing `DateRangeTimePicker` component. */
export function DateRangePickerWithTimeDemo() {
  const [range, setRange] = useState<DateRangeTimeValue | undefined>();
  return (
    <div className="flex flex-col gap-2 max-w-md pb-[460px]">
      <DateRangeTimePicker label="Date and Time Range" value={range} onChange={setRange} />
      <span className="lyra-body-sm text-lyra-fg-secondary">
        Uses `DateRangeTimePicker` (date-time-picker.tsx).
      </span>
    </div>
  );
}
