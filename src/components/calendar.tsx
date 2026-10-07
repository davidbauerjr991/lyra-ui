import * as React from "react";
import {
  DayPicker,
  useDayPicker,
  labelDayButton,
  type DayPickerProps,
  type DateRange,
  type Matcher,
} from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

export type CalendarMode = "single" | "range" | "week";
type CalendarView = "days" | "months" | "years";

/** Dot color for a marked date. "info" (blue) by default. */
export type CalendarMarkerColor = "info" | "success" | "warning" | "critical" | "neutral";

/** A set of dates marked with a small dot under the day number (events, special dates). */
export interface CalendarModifier {
  /** Which dates to mark — a Date, an array of Dates, a range, a weekday matcher, a function… (react-day-picker's `Matcher`). */
  dates: Matcher | Matcher[];
  /** Dot color. Default "info". */
  color?: CalendarMarkerColor;
  /** Read by screen readers after the date, e.g. "Team meeting". Strongly recommended: a dot alone means nothing without sight. */
  label?: string;
}

interface CalendarBaseProps {
  /**
   * Day-cell size. "md" (default) is today's 36px cell. "lg" is a 40px cell
   * with a taller month/year button, for touch or roomier layouts — it needs
   * at least 280px of width (7 × 40px), so give the Calendar a container
   * wider than the default 248px of content that "md" fits in.
   */
  size?: "md" | "lg";
  /**
   * Opt-in date markers: each entry puts a small dot under the day number for
   * its `dates`, in its `color`, and adds its `label` to the day's spoken name.
   * Default `undefined` — no markers. (Today already has its own outline, bold
   * text and "Today," in its spoken name.)
   */
  modifiers?: CalendarModifier[];
  className?: string;
  showWeekNumbers?: boolean;
  /** Opt-in: on mount, move keyboard focus to the selected day (or today, or
   *  the first enabled day). For a calendar opened from the keyboard, e.g.
   *  `DatePicker`'s Alt+↓. Default `false` (no focus change). */
  autoFocus?: boolean;
}

export interface CalendarSingleProps extends CalendarBaseProps {
  mode: "single";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: DayPickerProps["disabled"];
  defaultMonth?: Date;
}

export interface CalendarRangeProps extends CalendarBaseProps {
  mode: "range";
  selected?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
  disabled?: DayPickerProps["disabled"];
  defaultMonth?: Date;
}

export interface CalendarWeekProps extends CalendarBaseProps {
  mode: "week";
  selected?: Date;
  onSelect?: (weekStart: Date | undefined) => void;
  disabled?: DayPickerProps["disabled"];
  defaultMonth?: Date;
}

export type CalendarProps =
  | CalendarSingleProps
  | CalendarRangeProps
  | CalendarWeekProps;

/* ── View context ── */

interface ViewCtx {
  size: "md" | "lg";
  view: CalendarView;
  viewYear: number;
  setView: (v: CalendarView) => void;
  setViewYear: (y: number) => void;
  /** Navigate the DayPicker to a new month */
  goTo: (date: Date) => void;
}
const ViewContext = React.createContext<ViewCtx>({
  size: "md", view: "days", viewYear: new Date().getFullYear(),
  setView: () => {}, setViewYear: () => {}, goTo: () => {},
});

/* ── Shared day-cell classes ── */

const dayBase = (cell: string) => cn(
  `${cell} rounded-lyra-sm lyra-body-md transition-colors`,
  "flex items-center justify-center",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-1",
  "hover:bg-lyra-state-hover active:bg-lyra-state-pressed cursor-pointer",
  "aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent"
);

const buildClassNames = (size: "md" | "lg"): DayPickerProps["classNames"] => {
  // Literal class strings so Tailwind's scanner finds them.
  const cell = size === "lg" ? "h-10 w-10" : "h-9 w-9";
  return {
  root:          "w-full",
  months:        "flex flex-col gap-4",
  month:         "flex flex-col gap-3",
  month_caption: "",
  caption_label: "hidden",
  nav:           "hidden",
  button_previous: "hidden",
  button_next:   "hidden",
  month_grid:    "w-full border-collapse",
  weekdays:      "flex",
  weekday:       `${cell} flex items-center justify-center lyra-body-sm text-lyra-fg-secondary`,
  week:          "flex mt-0.5",
  week_number:   `${size === "lg" ? "h-10" : "h-9"} w-8 flex items-center justify-center lyra-body-sm text-lyra-fg-disabled`,
  day:           cn(dayBase(cell), "text-lyra-fg-default"),
  day_button:    "w-full h-full flex items-center justify-center",
  selected:      cn(
    "bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm",
    "hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary"
  ),
  today:         "border border-lyra-border-active text-lyra-fg-active-strong font-medium",
  outside:       "text-lyra-fg-disabled opacity-40",
  disabled:      "opacity-40 cursor-not-allowed",
  range_start:   "bg-lyra-bg-primary text-lyra-fg-on-primary rounded-l-lyra-sm rounded-r-none",
  range_middle:  "bg-lyra-bg-active-subtle text-lyra-fg-active-strong rounded-none",
  range_end:     "bg-lyra-bg-primary text-lyra-fg-on-primary rounded-r-lyra-sm rounded-l-none",
  hidden:        "invisible",
  };
};

const CLASS_NAMES_BY_SIZE = { md: buildClassNames("md"), lg: buildClassNames("lg") };

/* Date-marker dot: a small circle centered under the day number, drawn with
   ::after so it adds no element and no layout. White on a selected day, where
   the colored dot would disappear into the selection fill. */
const MARKER_BASE =
  "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full aria-selected:after:bg-lyra-fg-on-primary";
const MARKER_COLOR: Record<CalendarMarkerColor, string> = {
  info:     "after:bg-lyra-bg-active-strong",
  success:  "after:bg-lyra-status-success-strong",
  warning:  "after:bg-lyra-status-warning-strong",
  critical: "after:bg-lyra-status-critical-strong",
  neutral:  "after:bg-lyra-fg-secondary",
};

/* ── Custom caption header ── */

function CalendarCaption() {
  const { goToMonth, nextMonth, previousMonth, months } = useDayPicker();
  const { view, setView, setViewYear, size } = React.useContext(ViewContext);
  const lg = size === "lg";
  const currentMonth = months?.[0]?.date ?? new Date();
  const label = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Suppress tooltips for 400ms after mount — prevents tooltip firing when the
  // calendar appears under the cursor on click (browser fires mouseenter on render)
  const [tooltipsActive, setTooltipsActive] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setTooltipsActive(true), 400);
    return () => clearTimeout(t);
  }, []);

  const btnClass = cn(
    lg ? "h-10 w-10" : "h-8 w-8",
    "rounded-lyra-sm flex items-center justify-center transition-colors flex-shrink-0",
    "text-lyra-fg-secondary hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
  );

  const handleLabelClick = () => {
    if (view === "days") { setViewYear(currentMonth.getFullYear()); setView("years"); }
    else if (view === "months") setView("years");
    else setView("days");
  };

  const prevBtn = (
    <button type="button" onClick={() => previousMonth && goToMonth(previousMonth)}
      disabled={!previousMonth} aria-label="Previous month" className={btnClass}>
      <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );

  const nextBtn = (
    <button type="button" onClick={() => nextMonth && goToMonth(nextMonth)}
      disabled={!nextMonth} aria-label="Next month" className={btnClass}>
      <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );

  return (
    <div className={cn("flex items-center px-1", lg ? "h-10" : "h-9")}>
      {view === "days" && (
        tooltipsActive
          ? <Tooltip content="Previous month" placement="bottom" delayMs={400}>{prevBtn}</Tooltip>
          : prevBtn
      )}
      {view !== "days" && <div className={cn("flex-shrink-0", lg ? "w-10 h-10" : "w-8 h-8")} />}

      <button type="button" onClick={handleLabelClick}
        className={cn("flex-1 text-center lyra-body-md-emphasis text-lyra-fg-default select-none hover:text-lyra-fg-active-strong transition-colors", lg && "h-10")}>
        {label}
      </button>

      {view === "days" && (
        tooltipsActive
          ? <Tooltip content="Next month" placement="bottom" delayMs={400}>{nextBtn}</Tooltip>
          : nextBtn
      )}
      {view !== "days" && <div className={cn("flex-shrink-0", lg ? "w-10 h-10" : "w-8 h-8")} />}
    </div>
  );
}

/* ── Year picker overlay ── */

function YearPicker({ currentYear }: { currentYear: number }) {
  const { viewYear, setViewYear, setView, size } = React.useContext(ViewContext);
  const today = new Date().getFullYear();
  // 24 years centred on viewYear
  const start = viewYear - 10;
  const years = Array.from({ length: 24 }, (_, i) => start + i);

  return (
    <div className="absolute inset-0 bg-lyra-bg-surface-base z-10 flex flex-col gap-3 overflow-auto">
      <div className="grid grid-cols-4 gap-1">
        {years.map(y => (
          <button key={y} type="button"
            onClick={() => { setViewYear(y); setView("months"); }}
            className={cn(
              size === "lg" ? "h-10" : "h-9",
              "rounded-lyra-sm lyra-body-md transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
              y === currentYear
                ? "bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary"
                : y === today
                ? "border border-lyra-border-active text-lyra-fg-active-strong font-medium hover:bg-lyra-state-hover"
                : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
            )}
          >
            {y}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Month picker overlay ── */

const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function MonthPicker({ currentMonth }: { currentMonth: Date }) {
  const { viewYear, setView, goTo, size } = React.useContext(ViewContext);
  const todayMonth = new Date().getMonth();
  const todayYear  = new Date().getFullYear();

  return (
    <div className="absolute inset-0 bg-lyra-bg-surface-base z-10 flex flex-col gap-3 overflow-auto">
      <div className="grid grid-cols-4 gap-1">
        {MONTHS_SHORT.map((name, i) => {
          const isSelected = viewYear === currentMonth.getFullYear() && i === currentMonth.getMonth();
          const isToday    = viewYear === todayYear && i === todayMonth;
          return (
            <button key={name} type="button"
              onClick={() => { goTo(new Date(viewYear, i, 1)); setView("days"); }}
              className={cn(
                size === "lg" ? "h-10" : "h-9",
                "rounded-lyra-sm lyra-label transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
                isSelected
                  ? "bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary"
                  : isToday
                  ? "border border-lyra-border-active text-lyra-fg-active-strong font-medium hover:bg-lyra-state-hover"
                  : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Calendar ── */

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const { mode, className, showWeekNumbers, disabled, autoFocus, size = "md", modifiers } = props;
    const [view, setView] = React.useState<CalendarView>("days");
    const [viewYear, setViewYear] = React.useState(
      (props.defaultMonth ?? new Date()).getFullYear()
    );
    const [currentDisplayMonth, setCurrentDisplayMonth] = React.useState<Date>(
      props.defaultMonth ?? new Date()
    );
    const [dpMonth, setDpMonth] = React.useState<Date | undefined>(
      props.defaultMonth
    );

    const goTo = (date: Date) => {
      setDpMonth(date);
      setCurrentDisplayMonth(date);
    };

    const ctx: ViewCtx = { size, view, viewYear, setView, setViewYear, goTo };

    // Polite announcement when the displayed month changes (prev/next, the
    // month/year picker, PageUp/PageDown). Skipped on first render, so opening
    // a calendar doesn't announce itself.
    const monthKey = `${currentDisplayMonth.getFullYear()}-${currentDisplayMonth.getMonth()}`;
    const [announcement, setAnnouncement] = React.useState("");
    const firstMonthRender = React.useRef(true);
    React.useEffect(() => {
      if (firstMonthRender.current) {
        firstMonthRender.current = false;
        return;
      }
      setAnnouncement(currentDisplayMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthKey]);

    // Date markers → react-day-picker modifiers + their dot classes + spoken
    // labels. Nothing is passed when `modifiers` is unset, so the default
    // DayPicker props are exactly as before.
    // Spoken day label: react-day-picker says "October 1st"; the visible text is
    // "1", and "1" must appear in the name (WCAG 2.5.3, Label in Name), so drop
    // the ordinal suffix: "Thursday, October 1, 2026".
    const dayLabel = (date: Date, mods: Record<string, boolean>, options?: unknown, dateLib?: unknown) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      labelDayButton(date, mods as any, options as any, dateLib as any).replace(/\b(\d{1,2})(st|nd|rd|th)\b/, "$1");
    const markerProps = modifiers && modifiers.length > 0
      ? {
          modifiers: Object.fromEntries(modifiers.map((m, i) => [`lyraMarker${i}`, m.dates])) as Record<string, Matcher | Matcher[]>,
          modifiersClassNames: Object.fromEntries(
            modifiers.map((m, i) => [`lyraMarker${i}`, cn(MARKER_BASE, MARKER_COLOR[m.color ?? "info"])])
          ),
          labels: {
            labelDayButton: (date: Date, mods: Record<string, boolean>, options?: unknown, dateLib?: unknown) => {
              let label = dayLabel(date, mods, options, dateLib);
              modifiers.forEach((m, i) => {
                if (m.label && mods[`lyraMarker${i}`]) label = `${label}, ${m.label}`;
              });
              return label;
            },
          },
        }
      : { labels: { labelDayButton: dayLabel } };

    const sharedProps = {
      disabled,
      autoFocus,
      showWeekNumber: showWeekNumbers,
      classNames: CLASS_NAMES_BY_SIZE[size],
      ...markerProps,
      month: dpMonth,
      onMonthChange: (m: Date) => { setCurrentDisplayMonth(m); setDpMonth(m); },
      components: { MonthCaption: CalendarCaption },
    } as const;

    const renderPicker = () => {
      if (view === "years") return <YearPicker currentYear={currentDisplayMonth.getFullYear()} />;
      if (view === "months") return <MonthPicker currentMonth={currentDisplayMonth} />;
      return null;
    };

    const overlayActive = view !== "days";

    return (
      <ViewContext.Provider value={ctx}>
        <div ref={ref} className={cn("relative", className)}>
          {/* Screen-reader-only: the new month, announced politely on change. */}
          <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">{announcement}</div>
          {/* Invisible wrapper hides the DayPicker grid when an overlay is active,
              preserving layout height so the overlay covers the right area */}
          <div className={overlayActive ? "invisible" : undefined}>
          {mode === "week" ? (() => {
            const { selected, onSelect } = props as CalendarWeekProps;
            const getWeekRange = (d: Date | undefined): DateRange | undefined => {
              if (!d) return undefined;
              const s = new Date(d); s.setDate(s.getDate() - s.getDay());
              const e = new Date(s); e.setDate(s.getDate() + 6);
              return { from: s, to: e };
            };
            return (
              <DayPicker mode="range" selected={getWeekRange(selected)}
                onDayClick={(day) => { const s = new Date(day); s.setDate(s.getDate() - s.getDay()); (onSelect as (d: Date) => void)?.(s); }}
                defaultMonth={props.defaultMonth ?? selected}
                {...sharedProps} />
            );
          })() : mode === "single" ? (() => {
            const { selected, onSelect, defaultMonth } = props as CalendarSingleProps;
            return (
              <DayPicker mode="single" selected={selected} onSelect={onSelect}
                defaultMonth={defaultMonth ?? selected} {...sharedProps} />
            );
          })() : (() => {
            const { selected, onSelect, defaultMonth } = props as CalendarRangeProps;
            return (
              <DayPicker mode="range" selected={selected} onSelect={onSelect}
                defaultMonth={defaultMonth ?? selected?.from} {...sharedProps} />
            );
          })()}
          </div>{/* end invisible wrapper */}
          {renderPicker()}
        </div>
      </ViewContext.Provider>
    );
  }
);

Calendar.displayName = "Calendar";

export { Calendar };
export type { DateRange };
