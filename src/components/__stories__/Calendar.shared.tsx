/* Shared example data and demo components for Calendar.stories.tsx (Default
   playground) and Calendar.variants.stories.tsx (Variants pages). Not a
   stories file — it only holds what both use, so the two can't drift apart. */
import * as React from "react";
import { useState } from "react";
import { Calendar, type DateRange, type CalendarModifier } from "../calendar";

export type { DateRange };

/** Card every Calendar story sits in (surface, border, shadow, 280px wide). */
export function CalendarCard({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  // `wide` (size="lg"): seven 40px cells need 280px plus the card's padding.
  return (
    <div className={`rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 ${wide ? "w-[312px]" : "w-[280px]"}`}>
      {children}
    </div>
  );
}

export const startOfWeek = (from: Date = new Date()) => {
  const d = new Date(from);
  d.setDate(d.getDate() - d.getDay());
  return d;
};

export const endOfWeek = (start: Date) => {
  const d = new Date(start);
  d.setDate(start.getDate() + 6);
  return d;
};

/** Today through six days from now — the range every range example starts with. */
export const sampleRange = (): DateRange => {
  const to = new Date();
  to.setDate(to.getDate() + 6);
  return { from: new Date(), to };
};

export const formatLongDate = (d: Date) =>
  d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

export const formatRange = (range?: DateRange) =>
  range?.from && range?.to
    ? `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`
    : range?.from
      ? `From ${range.from.toLocaleDateString()}`
      : "Select a range";

export const formatWeek = (weekStart?: Date) =>
  weekStart
    ? `Week of ${weekStart.toLocaleDateString()} – ${endOfWeek(weekStart).toLocaleDateString()}`
    : "Select a week";

/** Sample event markers in the current month, one per color. */
export const sampleMarkers = (): CalendarModifier[] => {
  const now = new Date();
  const day = (n: number) => new Date(now.getFullYear(), now.getMonth(), n);
  return [
    { dates: day(3), color: "info", label: "Team meeting" },
    { dates: day(12), color: "success", label: "Release" },
    { dates: [day(18), day(19)], color: "warning", label: "Deadline" },
    { dates: day(25), color: "critical", label: "Outage" },
    { dates: day(28), color: "neutral", label: "Office closed" },
  ];
};

const caption = "lyra-body-sm text-lyra-fg-secondary mt-3 text-center";

/** One Calendar in the given mode, with its selection summary underneath. */
export function CalendarDemo({
  mode,
  defaultMonth,
  disablePast = false,
  size = "md",
  showMarkers = false,
}: {
  mode: "single" | "range" | "week";
  defaultMonth?: Date;
  disablePast?: boolean;
  size?: "md" | "lg";
  showMarkers?: boolean;
}) {
  const modifiers = showMarkers ? sampleMarkers() : undefined;
  // Midnight today, so today itself stays selectable.
  const disabled = disablePast ? { before: new Date(new Date().setHours(0, 0, 0, 0)) } : undefined;
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>(sampleRange);
  const [week, setWeek] = useState<Date | undefined>(() => startOfWeek());

  return (
    <CalendarCard wide={size === "lg"}>
      {mode === "single" && (
        <>
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={defaultMonth} disabled={disabled} size={size} modifiers={modifiers} />
          <p className={caption}>{date ? formatLongDate(date) : "No date selected"}</p>
        </>
      )}
      {mode === "range" && (
        <>
          <Calendar mode="range" selected={range} onSelect={setRange} defaultMonth={defaultMonth} disabled={disabled} size={size} modifiers={modifiers} />
          <p className={caption}>{formatRange(range)}</p>
        </>
      )}
      {mode === "week" && (
        <>
          <Calendar mode="week" selected={week} onSelect={setWeek} defaultMonth={defaultMonth} disabled={disabled} size={size} modifiers={modifiers} />
          <p className={caption}>{formatWeek(week)}</p>
        </>
      )}
    </CalendarCard>
  );
}

/** Single, Range and Week side by side. */
export function AllModesDemo() {
  const [single, setSingle] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>();
  const [week, setWeek] = useState<Date | undefined>(() => startOfWeek());

  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Single</span>
        <CalendarCard>
          <Calendar mode="single" selected={single} onSelect={setSingle} />
        </CalendarCard>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Range</span>
        <CalendarCard>
          <Calendar mode="range" selected={range} onSelect={setRange} />
        </CalendarCard>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Week</span>
        <CalendarCard>
          <Calendar mode="week" selected={week} onSelect={setWeek} />
        </CalendarCard>
      </div>
    </div>
  );
}

/** Single-date Calendar with every date before today disabled. */
export function DisabledDatesDemo() {
  const [date, setDate] = useState<Date | undefined>();
  const today = new Date();

  return (
    <CalendarCard>
      <Calendar mode="single" selected={date} onSelect={setDate} disabled={{ before: today }} />
      <p className="lyra-body-sm text-lyra-fg-secondary mt-2 text-center">Past dates are disabled</p>
    </CalendarCard>
  );
}

/** Single, Range and Week side by side at size="lg" (40px cells). */
export function LargeCellsDemo() {
  const [single, setSingle] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>(sampleRange);
  const [week, setWeek] = useState<Date | undefined>(() => startOfWeek());
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Single</span>
        <CalendarCard wide>
          <Calendar mode="single" size="lg" selected={single} onSelect={setSingle} />
        </CalendarCard>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Range</span>
        <CalendarCard wide>
          <Calendar mode="range" size="lg" selected={range} onSelect={setRange} />
        </CalendarCard>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lyra-label text-lyra-fg-default">Week</span>
        <CalendarCard wide>
          <Calendar mode="week" size="lg" selected={week} onSelect={setWeek} />
        </CalendarCard>
      </div>
    </div>
  );
}

/** Date markers: one dot color each, plus a marked day that is selected. */
export function MarkersDemo() {
  const [date, setDate] = useState<Date | undefined>(() => new Date(new Date().getFullYear(), new Date().getMonth(), 12));
  return (
    <div className="flex flex-col gap-2">
      <CalendarCard>
        <Calendar mode="single" selected={date} onSelect={setDate} modifiers={sampleMarkers()} />
        <p className={caption}>
          Dots: team meeting (blue), release (green), deadline (amber), outage (red), office closed (gray)
        </p>
      </CalendarCard>
    </div>
  );
}
