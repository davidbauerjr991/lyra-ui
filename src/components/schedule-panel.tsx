import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LocateFixed,
  Plus,
  // Aliased — this file also imports lyra-ui's own `Calendar` (the
  // date-grid component) and this would otherwise collide with it.
  Calendar as CalendarIcon,
  CalendarRange,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "./button";
import { ToggleGroup } from "./toggle-group";
import { Select } from "./select";
import { Popover } from "./popover";
import { Calendar } from "./calendar";
import type { EmbeddablePanelContent } from "./draggable";

/* ── SchedulePanel ──
   Basic scheduler shown in the Agent Next Gen AppHeader's shared app panel
   behind the CalendarDays "Schedule" icon — ported from agent-next-gen-v2's
   SchedulePanel.tsx (app-only there; promoted here so any consumer can
   reach for it).

   The calendar/date-grid mechanics below are hand-rolled plain React (no
   calendar-grid primitive exists in lyra-ui to build on), but every visible
   piece of chrome (nav buttons, the Day/Week toggle, the date-jump popover,
   the Add menu) is composed from real lyra-ui primitives (Button/
   buttonVariants, ToggleGroup, Select, Popover, Calendar) rather than
   hand-styled markup.

   No real event data/backend exists yet (matching the reference, which
   shows an empty grid) — this lays out the shell: date navigation, Day/Week
   switching, the current-time indicator, and a placeholder "Shift" resource
   lane.

   Two consumption shapes, same convention as `AgentSearch`/`ScreenPop`:
   `useScheduleContent` returns an `EmbeddablePanelContent` (toolbar in
   `headerContent`, grid in `body`) for a shared `Draggable`/
   `DraggablePanel` shell; `SchedulePanel` renders the same content
   standalone with its own fixed toolbar row. */

/* ── Date helpers (plain — no date-fns dependency in this library) ── */

function startOfDay(d: Date): Date {
  const next = new Date(d);
  next.setHours(0, 0, 0, 0);
  return next;
}

function addDays(d: Date, amount: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + amount);
  return next;
}

/** Sunday of the week containing `d` — matches the reference's week layout
 *  (Sunday 8/2 → Saturday 8/8). */
function startOfWeek(d: Date): Date {
  return addDays(startOfDay(d), -d.getDay());
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const WEEKDAY_FORMAT = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const MONTH_DAY_YEAR_FORMAT = new Intl.DateTimeFormat(undefined, {
  month: "long",
  day: "numeric",
  year: "numeric",
});

/** "Sunday 8/2" — the day-column header format the reference uses. */
function formatDayHeader(d: Date): string {
  return `${WEEKDAY_FORMAT.format(d)} ${d.getMonth() + 1}/${d.getDate()}`;
}

/** "August 2, 2026" — the date-nav label format the reference uses. */
function formatNavDate(d: Date): string {
  return MONTH_DAY_YEAR_FORMAT.format(d);
}

function formatHourLabel(hour: number): string {
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const HOUR_HEIGHT = 64; // px per hour row
const GUTTER_WIDTH = 56; // px, fixed time-label column
const DAY_COLUMN_MIN_WIDTH = 112; // px, per day column in week view

// `ScheduleToolbar`'s own single-row/two-row breakpoint — Tailwind's (and
// lyra-ui's, which doesn't override the default `screens` scale) standard
// `md` value, used here as a container-width threshold rather than a
// viewport media query (see that component's own doc comment).
const TOOLBAR_WIDE_BREAKPOINT = 768;

// Below this width, Add and Day/Week collapse to icon-only — there's no
// standard Tailwind breakpoint down at this size (its smallest, `sm`, is
// 640), so this is a one-off number picked from this toolbar's own
// content: comfortably below where "Add"/"Day"/"Week" text still fits
// two-per-row alongside the nav cluster and Today.
const TOOLBAR_COMPACT_BREAKPOINT = 400;

export type ScheduleView = "day" | "week";

/* ── Current-time indicator ── a blue dot + line at the fractional-hour
   offset for "right now", only rendered inside the column(s) representing
   today. Ticks once a minute — enough granularity for a line indicator,
   without a per-second re-render. */
function useNowOffset(): number {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return (now.getHours() + now.getMinutes() / 60) * HOUR_HEIGHT;
}

function NowIndicator({ top }: { top: number }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10 flex items-center"
      style={{ top }}
      aria-hidden="true"
    >
      <span className="-ml-[5px] h-2.5 w-2.5 shrink-0 rounded-full bg-lyra-bg-primary" />
      <span className="h-0.5 flex-1 bg-lyra-bg-primary" />
    </div>
  );
}

/* ── Grid — day header row, "Shift" resource lane, hour rows ──
   A single scroll container (both axes) so the sticky top header row and
   sticky left time gutter can pin against the SAME scrolling ancestor —
   the standard "frozen row + frozen column" approach, same idea `Table`'s
   sticky columns already use. */
function ScheduleGrid({ days }: { days: Date[] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const nowTop = useNowOffset();
  const today = React.useMemo(() => new Date(), []);

  // Bring ~8 AM into view by default (matches the reference, scrolled so
  // 9 AM sits near the top) rather than opening on 12 AM.
  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: 8 * HOUR_HEIGHT });
  }, [days.length]);

  const gridMinWidth = GUTTER_WIDTH + days.length * DAY_COLUMN_MIN_WIDTH;

  return (
    // `isolate` contains every z-index below (the sticky header/gutter, the
    // today-column tint, the now-indicator) inside its own stacking context
    // — without it, those z-10/z-20 values get compared against a hosting
    // `Draggable` panel's own left-edge resize handle (also z-10,
    // draggable.tsx) at whatever ancestor stacking context they actually
    // share, occasionally winning the tie and swallowing the resize
    // handle's mousedown over the body area (the handle stays grabbable
    // only next to the header, where this grid doesn't render underneath
    // it — a real, shipped bug in the reference app). Isolating this
    // subtree guarantees nothing in here can ever shadow chrome that lives
    // outside it, regardless of the exact ancestor stacking layout.
    <div ref={scrollRef} className="relative isolate flex-1 min-h-0 overflow-auto">
      <div style={{ minWidth: gridMinWidth }}>
        {/* Sticky header block: day-of-week row + "Shift" resource lane */}
        <div className="sticky top-0 z-20 bg-lyra-bg-surface-base">
          <div className="flex border-b border-lyra-border-subtle">
            <div
              className="sticky left-0 z-10 shrink-0 bg-lyra-bg-surface-base"
              style={{ width: GUTTER_WIDTH }}
              aria-hidden="true"
            />
            {days.map((d) => (
              <div
                key={d.toISOString()}
                className={cn(
                  "flex-1 border-l border-lyra-border-subtle px-2 py-2 text-center lyra-body-md",
                  isSameDay(d, today) ? "bg-lyra-bg-active-subtle text-lyra-fg-active-strong" : "text-lyra-fg-default"
                )}
                style={{ minWidth: DAY_COLUMN_MIN_WIDTH }}
              >
                {formatDayHeader(d)}
              </div>
            ))}
          </div>
          <div className="flex border-b border-lyra-border-subtle bg-lyra-bg-surface-shell">
            <div
              className="sticky left-0 z-10 flex shrink-0 items-center bg-lyra-bg-surface-shell px-2 py-2 lyra-label text-lyra-fg-default"
              style={{ width: GUTTER_WIDTH }}
            >
              Shift
            </div>
            {days.map((d) => (
              <div
                key={d.toISOString()}
                className={cn(
                  "flex-1 border-l border-lyra-border-subtle",
                  isSameDay(d, today) && "bg-lyra-bg-active-subtle"
                )}
                style={{ minWidth: DAY_COLUMN_MIN_WIDTH }}
              />
            ))}
          </div>
        </div>

        {/* Hour grid */}
        <div className="relative flex">
          <div
            className="sticky left-0 z-10 shrink-0 bg-lyra-bg-surface-base"
            style={{ width: GUTTER_WIDTH }}
          >
            {HOURS.map((h) => (
              <div key={h} className="relative" style={{ height: HOUR_HEIGHT }}>
                <span className="absolute -top-2.5 right-1.5 lyra-body-sm text-lyra-fg-secondary">
                  {formatHourLabel(h)}
                </span>
              </div>
            ))}
          </div>
          {days.map((d) => {
            const isToday = isSameDay(d, today);
            return (
              <div
                key={d.toISOString()}
                className={cn(
                  "relative flex-1 border-l border-lyra-border-subtle",
                  isToday && "bg-lyra-bg-active-subtle"
                )}
                style={{ minWidth: DAY_COLUMN_MIN_WIDTH }}
              >
                {HOURS.map((h) => (
                  <div key={h} className="border-b border-lyra-border-subtle" style={{ height: HOUR_HEIGHT }} />
                ))}
                {isToday && <NowIndicator top={nowTop} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Toolbar — date nav, date-jump popover (Calendar), Today, Day/Week
   toggle, Add menu. Single row once there's genuinely enough room, two
   balanced rows below that — measured against this toolbar's OWN rendered
   width via `ResizeObserver` (a hosting panel can be docked at its ~360px
   default, resized up to 1024px, or fill the main content area, so a
   viewport media query can't drive this; same "measure my own container"
   approach `TableToolbar` already uses for its own `isWide` breakpoint,
   table.tsx). */
function ScheduleToolbar({
  view,
  onViewChange,
  anchorDate,
  onAnchorDateChange,
}: {
  view: ScheduleView;
  onViewChange: (view: ScheduleView) => void;
  anchorDate: Date;
  onAnchorDateChange: (date: Date) => void;
}) {
  const [datePopoverOpen, setDatePopoverOpen] = React.useState(false);

  const goToPrevious = () => onAnchorDateChange(addDays(anchorDate, view === "day" ? -1 : -7));
  const goToNext = () => onAnchorDateChange(addDays(anchorDate, view === "day" ? 1 : 7));
  const goToToday = () => onAnchorDateChange(startOfDay(new Date()));

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isWide, setIsWide] = React.useState(true);
  const [isCompact, setIsCompact] = React.useState(false);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setIsWide(width >= TOOLBAR_WIDE_BREAKPOINT);
      setIsCompact(width < TOOLBAR_COMPACT_BREAKPOINT);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // `stretch` — true only for the narrow layout's row 1, where the date
  // nav is the sole occupant of the row (Today moved to row 2, see below)
  // and should fill that full width between the chevrons instead of
  // staying a compact pill. The wide, single-row layout keeps the original
  // compact-pill sizing, matching the reference.
  const renderNavCluster = (stretch: boolean) => (
    <div className={cn("flex items-center gap-2", stretch && "w-full")}>
      <Button variant="outline" size="icon" className="shrink-0" title="Previous" onClick={goToPrevious}>
        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
      </Button>

      <Popover
        open={datePopoverOpen}
        onOpenChange={setDatePopoverOpen}
        placement="bottom"
        align="start"
        sideOffset={4}
        showArrow={false}
        // `bodyPadding`'s default only insets left/right (`px-5`) — vertical
        // space around `content` normally comes from the `title`/`header`
        // slot's own padding, neither of which this popover uses. lyra-ui's
        // own `DatePicker` (date-picker.tsx's `CalendarPanel`) sidesteps
        // this by wrapping its Calendar in a plain, uniform `p-3` — matching
        // that exactly here (and opting out of `bodyPadding`, which would
        // otherwise double up the left/right inset to 20px+12px) instead of
        // leaving the calendar flush against the popover's top edge.
        bodyPadding={false}
        // `z-[9999]` (not Popover's own `z-50` default) — this toolbar's
        // primary home is inside a floating `Draggable` app panel, whose
        // wrapper sits at the §4 "floating Draggable panels" tier (9999);
        // Popover portals its content to `document.body`, so its default
        // `z-50` would paint UNDER that panel. Matching the same `z-[9999]`
        // tier `Select`'s own dropdown already defaults to puts it above
        // the panel (equal z-index, portal renders later in the DOM), the
        // exact behavior the Add menu's `Select` beside it already gets for
        // free.
        className="w-[288px] z-[9999]"
        content={
          <div className="p-3">
            <Calendar
              mode="single"
              selected={anchorDate}
              defaultMonth={anchorDate}
              onSelect={(date) => {
                if (!date) return;
                onAnchorDateChange(startOfDay(date));
                setDatePopoverOpen(false);
              }}
            />
          </div>
        }
      >
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "justify-center whitespace-nowrap",
            stretch && "flex-1"
          )}
        >
          {formatNavDate(anchorDate)}
        </button>
      </Popover>

      <Button variant="outline" size="icon" className="shrink-0" title="Next" onClick={goToNext}>
        <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
      </Button>
    </div>
  );

  const todayButton = (
    <Button variant="ghost" size="lg" className="shrink-0 gap-1.5" onClick={goToToday}>
      <LocateFixed className="h-4 w-4" strokeWidth={1.5} />
      Today
    </Button>
  );

  // Below `TOOLBAR_COMPACT_BREAKPOINT`, both collapse to icon-only —
  // `ToggleGroup`'s `label` accepts any `ReactNode`, so the icon swap is
  // just a different `label` per item; the text itself moves to a
  // visually-hidden `sr-only` span in each so screen readers still get
  // "Day"/"Week" as the accessible name (a bare icon has none on its own).
  const viewToggle = (
    <ToggleGroup
      items={
        isCompact
          ? [
              {
                value: "day",
                label: (
                  <span className="flex items-center">
                    <span className="sr-only">Day</span>
                    <CalendarIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                ),
              },
              {
                value: "week",
                label: (
                  <span className="flex items-center">
                    <span className="sr-only">Week</span>
                    <CalendarRange className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                ),
              },
            ]
          : [
              { value: "day", label: "Day" },
              { value: "week", label: "Week" },
            ]
      }
      value={view}
      // ToggleGroup's single-select mode deselects on re-click of the
      // already-active item (empty string) — a Day/Week switch should
      // always have exactly one side active, so an empty next value is
      // ignored rather than passed through.
      onValueChange={(next) => {
        if (next === "day" || next === "week") onViewChange(next);
      }}
    />
  );

  const addMenu = (
    <Select
      options={[
        { value: "shift", label: "Shift" },
        { value: "time-off", label: "Time Off" },
        { value: "meeting", label: "Meeting" },
      ]}
      onValueChange={() => {}}
      dropdownAlign="right"
      trigger={
        isCompact ? (
          <button
            type="button"
            aria-label="Add"
            className={cn(buttonVariants({ variant: "default", size: "icon" }))}
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        ) : (
          <button
            type="button"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "gap-1.5")}
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
            Add
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </button>
        )
      }
    />
  );

  return (
    <div ref={containerRef} className="w-full">
      {isWide ? (
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {renderNavCluster(false)}
            {todayButton}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {viewToggle}
            {addMenu}
          </div>
        </div>
      ) : (
        // Today moves down to the second row here (alongside Day/Week +
        // Add) rather than sharing row 1 with the date nav — at narrow
        // widths, a long formatted date (e.g. "November 4, 2021") left
        // Today competing with it for the same row's space and could push
        // it off the edge. Row 1 is just the nav cluster now, stretched
        // (renderNavCluster(true)) to fill that full row width on its own.
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center">{renderNavCluster(true)}</div>
          <div className="flex w-full items-center justify-between gap-2">
            {todayButton}
            <div className="flex shrink-0 items-center gap-2">
              {viewToggle}
              {addMenu}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Body — Day or Week grid, driven by the toolbar's view/anchorDate ── */
function ScheduleBody({ view, anchorDate }: { view: ScheduleView; anchorDate: Date }) {
  const days = React.useMemo(
    () => (view === "day" ? [anchorDate] : Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(anchorDate), i))),
    [view, anchorDate]
  );
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <ScheduleGrid days={days} />
    </div>
  );
}

export interface ScheduleContentProps {
  /** Controlled Day/Week view — pair with `onViewChange`. Omit to let the
   *  component manage it internally (uncontrolled, starts on "day"). */
  view?: ScheduleView;
  /** Initial view when uncontrolled (default: "day") */
  defaultView?: ScheduleView;
  /** Called when the Day/Week view changes */
  onViewChange?: (view: ScheduleView) => void;
  /** Controlled anchor date — pair with `onAnchorDateChange`. Omit to let
   *  the component manage it internally (uncontrolled, starts today). */
  anchorDate?: Date;
  /** Initial anchor date when uncontrolled (default: today) */
  defaultAnchorDate?: Date;
  /** Called when the anchor date changes (nav chevrons, Today, date jump) */
  onAnchorDateChange?: (date: Date) => void;
}

/** Everything the Schedule app panel shows, as one `EmbeddablePanelContent`
 *  — the Day/Week toolbar in `headerContent` (fixed above the divider),
 *  the scrolling hour grid in `body`. */
function useScheduleContent({
  view,
  defaultView = "day",
  onViewChange,
  anchorDate,
  defaultAnchorDate,
  onAnchorDateChange,
}: ScheduleContentProps = {}): EmbeddablePanelContent {
  // Controlled-when-provided, internal otherwise — same hybrid pattern
  // `ToggleGroup`/`useAgentSearchContent` use. The reference kept both
  // values purely local (nothing else needed to read them); the controlled
  // halves exist for consumers that do.
  const [internalView, setInternalView] = React.useState<ScheduleView>(defaultView);
  const [internalAnchorDate, setInternalAnchorDate] = React.useState<Date>(
    () => defaultAnchorDate ?? startOfDay(new Date())
  );
  const currentView = view ?? internalView;
  const currentAnchorDate = anchorDate ?? internalAnchorDate;

  const handleViewChange = (next: ScheduleView) => {
    if (view === undefined) setInternalView(next);
    onViewChange?.(next);
  };
  const handleAnchorDateChange = (next: Date) => {
    if (anchorDate === undefined) setInternalAnchorDate(next);
    onAnchorDateChange?.(next);
  };

  return {
    title: "Schedule",
    headerContent: (
      <ScheduleToolbar
        view={currentView}
        onViewChange={handleViewChange}
        anchorDate={currentAnchorDate}
        onAnchorDateChange={handleAnchorDateChange}
      />
    ),
    body: <ScheduleBody view={currentView} anchorDate={currentAnchorDate} />,
  };
}

export interface SchedulePanelProps
  extends ScheduleContentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const SchedulePanel = React.forwardRef<HTMLDivElement, SchedulePanelProps>(
  (
    { view, defaultView, onViewChange, anchorDate, defaultAnchorDate, onAnchorDateChange, className, ...props },
    ref
  ) => {
    const { headerContent, body } = useScheduleContent({
      view,
      defaultView,
      onViewChange,
      anchorDate,
      defaultAnchorDate,
      onAnchorDateChange,
    });
    return (
      <div ref={ref} className={cn("flex min-h-0 flex-1 flex-col", className)} {...props}>
        {/* Fixed toolbar row — see `AgentSearch`'s matching comment for the
            inset/`pt-3` reasoning. */}
        <div className="shrink-0 border-b border-lyra-border-subtle px-4 pt-3 pb-3">
          {headerContent}
        </div>
        {body}
      </div>
    );
  }
);
SchedulePanel.displayName = "SchedulePanel";

export { SchedulePanel, useScheduleContent };
