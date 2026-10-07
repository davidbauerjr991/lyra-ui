/* Shared example data for DateTimePicker.stories.tsx (Default playground) and
   DateTimePicker.variants.stories.tsx (Variants pages). Not a stories file —
   it only holds the fixtures both use, so the two can't drift apart. */
import type { DateRangeTimeValue } from "../date-time-picker";

/** Today at the given local time. */
export function todayAt(hours: number, minutes = 0): Date {
  const d = new Date();
  d.setHours(hours, minutes, 0, 0);
  return d;
}

/** A single date + time used as a "starting value". */
export const SAMPLE_DATE_TIME = (): Date => todayAt(14, 30);

/** A start/end date + time range used as a "starting value". */
export const SAMPLE_RANGE = (): DateRangeTimeValue => {
  const to = todayAt(17, 0);
  to.setDate(to.getDate() + 3);
  return { from: todayAt(9, 0), to };
};

/* The popover opens below the field, so each demo reserves space under it
   to keep the open calendar inside the story canvas. */
export const SINGLE_FRAME = "w-72 pb-[440px]";
export const RANGE_FRAME = "w-[500px] pb-[520px]";
