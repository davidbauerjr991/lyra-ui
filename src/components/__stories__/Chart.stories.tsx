import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "../chart";
import { DonutChart, type DonutChartDatum } from "../donut-chart";
import { BarChart, type BarChartSeries } from "../bar-chart";
import { LineChart, type LineChartSeries } from "../line-chart";
import { ScatterChart, type ScatterChartSeries } from "../scatter-chart";
import { HeatmapChart, type HeatmapChartCell } from "../heatmap-chart";
import { GaugeChart } from "../gauge-chart";
import { FunnelChart, type FunnelChartStage } from "../funnel-chart";
import { TreemapChart, type TreemapChartNode } from "../treemap-chart";
import { SunburstChart, type SunburstChartNode } from "../sunburst-chart";
import { BoxPlotChart, type BoxPlotChartCategory } from "../box-plot-chart";
import { cn } from "../../lib/utils";

const meta = {
  title: "Custom Primitives/Chart",
  component: Chart,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    option: { table: { disable: true } },
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Donut ──
   DonutChart — a ring/donut chart-type component built on top of `Chart`
   (a deliberately generic ECharts wrapper — see chart.tsx's own doc
   comment; chart-type components like this one build the actual ECharts
   `option` object and own any lyra-token color resolution, `Chart` itself
   makes no assumptions about chart type or styling). Moved into this same
   story file/category from its own former `DonutChart.stories.tsx` file —
   same component, same props, just grouped alongside Chart's other
   ECharts-backed examples instead of a separate top-level story entry.
   (This file used to open with two raw-`Chart`, hand-written-`option`
   stories — `Default`/`AllVariants` — demonstrating that genericness
   directly; removed once every real chart-type component below made the
   same point on-brand, with actual lyra token colors instead of ECharts'
   own hardcoded defaults, which is why those two visually stood out from
   everything else in this file.) */

/* Same status breakdown shape the home screen's Activity card uses. */
const ACTIVITY_DATA: (DonutChartDatum & { dotClassName: string })[] = [
  { label: "Available",   value: 22, colorVar: "var(--lyra-color-status-success-strong)",  dotClassName: "bg-lyra-status-success-strong" },
  { label: "Working",     value: 61, colorVar: "var(--lyra-color-status-warning-strong)",  dotClassName: "bg-lyra-status-warning-strong" },
  { label: "Unavailable", value: 17, colorVar: "var(--lyra-color-status-critical-strong)", dotClassName: "bg-lyra-status-critical-strong" },
];

export const Donut: Story = {
  name: "Donut",
  render: () => (
    <div className="h-[160px] w-[160px]">
      <DonutChart data={ACTIVITY_DATA} />
    </div>
  ),
};

/* ── DonutVariants ──
   Ring-only (default), a thinner ring via a smaller innerRadius, and the
   "ring + external legend" composition every real consumer (e.g. the home
   screen's Activity card) actually uses — DonutChart intentionally has no
   legend of its own (see the component's own doc comment), so the third
   example shows the intended pairing: showTooltip disabled, with a
   consumer-owned legend built from the same `data` array sitting next to
   it. */

export const DonutVariants: Story = {
  name: "Donut - All Variants",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Thinner ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} innerRadius="80%" outerRadius="95%" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Ring + external legend</p>
        <div className="flex items-center gap-4">
          <div className="h-[120px] w-[120px] shrink-0">
            <DonutChart data={ACTIVITY_DATA} showTooltip={false} />
          </div>
          <div className="flex flex-col gap-2">
            {ACTIVITY_DATA.map((d) => (
              <div key={d.label} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary">
                  <span className={cn("h-2.5 w-2.5 rounded-full", d.dotClassName)} aria-hidden="true" />
                  {d.label}
                </span>
                <span className="lyra-heading-sm text-lyra-fg-default">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

/* ── BarChart ──
   The first axis-labeled chart-type component built on `Chart` (category/
   value axes, legend, tooltip all on by default — see bar-chart.tsx's own
   doc comment for why that's a deliberate contrast with the bare
   Donut/Sparkline above). `orientation="vertical"` (default, upright
   columns) and `"horizontal"` (categories down the y-axis, values along
   the x-axis) shown side by side with the same 2-series data — the
   horizontal one matches Outbound-Campaigns' Monitor "Outbound Email"
   card ("x-axis amount of emails and y-axis day"), its own first real
   consumer. */

const EMAIL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
/* Accent (data-viz) colors, never a status/fg token or `accent-blue-strong`
   — see CLAUDE.md's "never use primary, light or dark colors for charts or
   icons in dashboards" rule. These two series are arbitrary categorical
   data with no status meaning, so the status-color exception doesn't
   apply. Matches Monitor's own real usage (MonitorDashboardPage.tsx). */
const EMAIL_SERIES: BarChartSeries[] = [
  { label: "Emails Launched",  data: [120, 98, 140, 110, 132, 60, 40],  colorVar: "var(--lyra-color-accent-teal-strong)" },
  { label: "Emails Remaining", data: [30, 42, 18, 25, 20, 55, 70],      colorVar: "var(--lyra-color-accent-purple-strong)" },
];

export const BarChartStory: Story = {
  name: "BarChart",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Vertical (default) — categories on x, values on y</p>
        <div className="h-[280px] w-[480px]">
          <BarChart categories={EMAIL_DAYS} series={EMAIL_SERIES} />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Horizontal — categories on y, values on x</p>
        <div className="h-[280px] w-[480px]">
          <BarChart categories={EMAIL_DAYS} series={EMAIL_SERIES} orientation="horizontal" valueAxisLabel="Emails" />
        </div>
      </div>
    </div>
  ),
};

/* ── BarChartStacked ──
   `stacked` — each series becomes a segment of one bar per category
   instead of its own adjacent bar. Team disposition breakdown (resolved/
   escalated/dropped contacts per team) — a genuine "parts of a whole per
   category" case stacking is meant for, unlike the grouped Emails example
   above (two independent counts, not parts of one total). */

const TEAM_DAYS = ["Tier 1", "Tier 2", "Billing", "Tech", "Retention"];
const DISPOSITION_SERIES: BarChartSeries[] = [
  { label: "Resolved",   data: [312, 218, 184, 156, 98], colorVar: "var(--lyra-color-accent-teal-strong)" },
  { label: "Escalated",  data: [48, 31, 22, 64, 18],     colorVar: "var(--lyra-color-accent-orange-strong)" },
  { label: "Dropped",    data: [12, 8, 5, 14, 4],        colorVar: "var(--lyra-color-accent-red-strong)" },
];

export const BarChartStacked: Story = {
  name: "BarChart - Stacked",
  render: () => (
    <div className="h-[320px] w-[520px]">
      <BarChart categories={TEAM_DAYS} series={DISPOSITION_SERIES} stacked valueAxisLabel="Contacts" />
    </div>
  ),
};

/* ── Histogram ──
   Not a distinct chart-type component — a histogram is a bar chart over
   pre-binned data (ECharts has no binning of its own; the bucketing into
   ranges has to happen before the data reaches any chart). Handle-time
   distribution, one bar per half-minute bucket, single series, no legend
   (`series.length` is 1, so `BarChart`'s own default already hides it). */

const AHT_BUCKETS = ["0–1m", "1–2m", "2–3m", "3–4m", "4–5m", "5–6m", "6–7m", "7–8m", "8–9m"];
const AHT_DIST_SERIES: BarChartSeries[] = [
  { label: "Contacts", data: [24, 58, 132, 210, 248, 190, 110, 52, 21], colorVar: "var(--lyra-color-accent-purple-strong)" },
];

export const Histogram: Story = {
  name: "Histogram (BarChart, pre-binned data)",
  render: () => (
    <div className="h-[280px] w-[480px]">
      <BarChart categories={AHT_BUCKETS} series={AHT_DIST_SERIES} valueAxisLabel="Contacts" />
    </div>
  ),
};

/* ── DonutCenterLabel ──
   `centerLabel`/`centerValue` — the "counter donut" pattern (a headline
   figure inside the ring): sentiment breakdown with "Positive 58%" as the
   focal read, and a 2-segment "Service Level" variant (in-SLA vs.
   out-of-SLA) with just the percentage, no caption. Both reuse
   `ACTIVITY_DATA`-style status-colored data — sentiment/SLA are exactly
   the "colors map to a specific semantic element" exception the dashboard
   color rule carves out, not arbitrary categorical data. */

const SENTIMENT_DATA: DonutChartDatum[] = [
  { label: "Positive", value: 58, colorVar: "var(--lyra-color-status-success-strong)" },
  { label: "Neutral",  value: 28, colorVar: "var(--lyra-color-status-warning-strong)" },
  { label: "Negative", value: 14, colorVar: "var(--lyra-color-status-critical-strong)" },
];

const SLA_DATA: DonutChartDatum[] = [
  { label: "In SLA",  value: 97.3, colorVar: "var(--lyra-color-status-success-strong)" },
  { label: "Out",     value: 2.7,  colorVar: "var(--lyra-color-status-critical-strong)" },
];

export const DonutCenterLabel: Story = {
  name: "Donut - Center label (counter donut)",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Sentiment breakdown</p>
        <div className="h-[180px] w-[180px]">
          <DonutChart data={SENTIMENT_DATA} centerLabel="Positive" centerValue="58%" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Service level</p>
        <div className="h-[180px] w-[180px]">
          <DonutChart data={SLA_DATA} centerValue="97.3%" />
        </div>
      </div>
    </div>
  ),
};

/* ── LineChart ──
   Trend family — `area`/`stacked` shown as three progressively different
   readings of the same shape of data: a plain multi-series line, one
   series with its area filled in, and every series stacked (a "stacked
   area" chart, since `stacked` implies `area` — see line-chart.tsx's own
   doc comment for why that's not two independent props). */

const TREND_WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const TREND_SERIES: LineChartSeries[] = [
  { label: "Voice", data: [420, 460, 440, 480, 510, 495, 530, 560], colorVar: "var(--lyra-color-accent-teal-strong)" },
  { label: "Chat",  data: [260, 280, 300, 290, 320, 340, 350, 370], colorVar: "var(--lyra-color-accent-purple-strong)" },
  { label: "Email", data: [140, 150, 145, 160, 158, 170, 165, 180], colorVar: "var(--lyra-color-accent-orange-strong)" },
];

export const LineChartStory: Story = {
  name: "LineChart",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Line — multi-series</p>
        <div className="h-[260px] w-[520px]">
          <LineChart categories={TREND_WEEKS} series={TREND_SERIES} valueAxisLabel="Contacts" />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Area — one series, filled</p>
        <div className="h-[260px] w-[520px]">
          <LineChart categories={TREND_WEEKS} series={[TREND_SERIES[0]]} area valueAxisLabel="Contacts" />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Stacked area — every series stacked</p>
        <div className="h-[260px] w-[520px]">
          <LineChart categories={TREND_WEEKS} series={TREND_SERIES} stacked valueAxisLabel="Contacts" />
        </div>
      </div>
    </div>
  ),
};

/* ── ScatterChart ──
   Correlation family — AHT vs. CSAT per team (scatter, uniform points),
   then the same data as a Bubble variant with call volume encoded via
   point size. Each team is its own series/color, same convention as
   `BarChart`/`LineChart`'s `series` shape. */

const AHT_CSAT_SERIES: ScatterChartSeries[] = [
  { label: "Tier 1", colorVar: "var(--lyra-color-accent-teal-strong)", data: [
    { x: 2.4, y: 4.6, size: 60 }, { x: 3.1, y: 4.4, size: 90 }, { x: 2.8, y: 4.5, size: 75 }, { x: 3.6, y: 4.2, size: 110 },
  ] },
  { label: "Tier 2", colorVar: "var(--lyra-color-accent-purple-strong)", data: [
    { x: 4.8, y: 3.9, size: 140 }, { x: 5.5, y: 3.6, size: 160 }, { x: 5.0, y: 3.8, size: 130 }, { x: 6.1, y: 3.4, size: 180 },
  ] },
  { label: "Tech", colorVar: "var(--lyra-color-accent-orange-strong)", data: [
    { x: 6.8, y: 3.2, size: 200 }, { x: 7.4, y: 3.0, size: 220 }, { x: 6.2, y: 3.5, size: 170 }, { x: 8.0, y: 2.8, size: 240 },
  ] },
];

export const ScatterChartStory: Story = {
  name: "ScatterChart",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Scatter — uniform points</p>
        <div className="h-[300px] w-[520px]">
          <ScatterChart
            series={AHT_CSAT_SERIES.map((s) => ({ ...s, data: s.data.map((p) => ({ x: p.x, y: p.y })) }))}
            xAxisLabel="Avg handle time (min)"
            yAxisLabel="CSAT"
          />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Bubble — point size encodes call volume</p>
        <div className="h-[300px] w-[520px]">
          <ScatterChart series={AHT_CSAT_SERIES} xAxisLabel="Avg handle time (min)" yAxisLabel="CSAT" />
        </div>
      </div>
    </div>
  ),
};

/* ── HeatmapChart ──
   Correlation family — contact volume across two categorical axes (day of
   week × hour). A single continuous color scale (see heatmap-chart.tsx's
   own doc comment for why that's a deliberate contrast with every other
   chart's per-series `colorVar`), rendered here with the default teal
   soft→strong ramp, plus a visible `visualMap` legend underneath. */

const HEATMAP_HOURS = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);
const HEATMAP_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const HEATMAP_DATA: HeatmapChartCell[] = (() => {
  const cells: HeatmapChartCell[] = [];
  for (let d = 0; d < HEATMAP_DAYS.length; d++) {
    for (let h = 0; h < HEATMAP_HOURS.length; h++) {
      const peak = h >= 2 && h <= 8 ? 1 : 0.4;
      cells.push({ x: h, y: d, value: Math.round((30 + Math.sin(h / 2) * 20 + h * 3) * peak) });
    }
  }
  return cells;
})();

export const HeatmapChartStory: Story = {
  name: "HeatmapChart",
  render: () => (
    <div className="h-[320px] w-[640px]">
      <HeatmapChart xCategories={HEATMAP_HOURS} yCategories={HEATMAP_DAYS} data={HEATMAP_DATA} valueLabel="contacts" />
    </div>
  ),
};

/* ── GaugeChart ──
   KPI family — a single metric against its full range, e.g. containment
   rate. Default accent color; the second example shows the "colors that
   map to a real semantic element may use that element's color" exception
   applied to a gauge whose value is genuinely a status read (a
   critically low SLA), using a status token's `colorVar` instead. */

export const GaugeChartStory: Story = {
  name: "GaugeChart",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Containment rate</p>
        <div className="h-[200px] w-[240px]">
          <GaugeChart value={68} label="Containment" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">SLA attainment (below target)</p>
        <div className="h-[200px] w-[240px]">
          <GaugeChart value={54} label="SLA" colorVar="var(--lyra-color-status-critical-strong)" />
        </div>
      </div>
    </div>
  ),
};

/* ── FunnelChart ──
   Flow family — stage-to-stage drop-off through issue resolution. No
   per-stage `colorVar` passed, so stages cycle through
   `DEFAULT_ACCENT_COLOR_VARS` (chart.tsx) in order. */

const RESOLUTION_STAGES: FunnelChartStage[] = [
  { label: "Contacted", value: 4200 },
  { label: "Diagnosed", value: 3550 },
  { label: "Resolution offered", value: 2680 },
  { label: "Resolved", value: 2140 },
];

export const FunnelChartStory: Story = {
  name: "FunnelChart",
  render: () => (
    <div className="h-[320px] w-[480px]">
      <FunnelChart data={RESOLUTION_STAGES} />
    </div>
  ),
};

/* ── TreemapChart ──
   Part-to-whole family — automation volume by skill, grouped into
   categories (Account/Order/Billing/Tech). No `colorVar` passed anywhere,
   so top-level categories cycle through `DEFAULT_ACCENT_HUES` (chart.tsx)
   using each hue's `-strong` stop, and their children inherit that same
   hue's `-soft` stop automatically. */

const AUTOMATION_TREEMAP: TreemapChartNode[] = [
  { name: "Account", children: [
    { name: "Password reset", value: 1820 },
    { name: "Update address", value: 420 },
    { name: "Cancel service", value: 620 },
  ] },
  { name: "Order", children: [
    { name: "Order tracking", value: 1640 },
    { name: "Return status", value: 540 },
  ] },
  { name: "Billing", children: [
    { name: "Plan changes", value: 980 },
    { name: "Refund status", value: 720 },
  ] },
  { name: "Tech", children: [
    { name: "Outage check", value: 540 },
    { name: "Speed test", value: 280 },
  ] },
];

export const TreemapChartStory: Story = {
  name: "TreemapChart",
  render: () => (
    <div className="h-[360px] w-[560px]">
      <TreemapChart data={AUTOMATION_TREEMAP} />
    </div>
  ),
};

/* ── SunburstChart ──
   Same data/coloring convention as TreemapChart above, radial instead of
   area-encoded — same automation-by-skill hierarchy, one ring per level. */

const AUTOMATION_SUNBURST: SunburstChartNode[] = AUTOMATION_TREEMAP;

export const SunburstChartStory: Story = {
  name: "SunburstChart",
  render: () => (
    <div className="h-[360px] w-[360px]">
      <SunburstChart data={AUTOMATION_SUNBURST} />
    </div>
  ),
};

/* ── BoxPlotChart ──
   Distribution family — handle-time spread by team, five-number summary
   per category plus a couple of outlier points per team. Every box uses
   the same `colorVar` (see box-plot-chart.tsx's own doc comment for why
   that's the right default here, unlike BarChart's per-series colors). */

const AHT_BY_TEAM: BoxPlotChartCategory[] = [
  { label: "Tier 1",    min: 1.2, q1: 2.4, median: 3.6, q3: 5.0, max: 8.2,  outliers: [9.4, 11.2] },
  { label: "Tier 2",    min: 2.0, q1: 3.8, median: 5.4, q3: 7.6, max: 12.0, outliers: [14.5, 16.0] },
  { label: "Billing",   min: 1.5, q1: 3.0, median: 4.2, q3: 5.5, max: 9.0,  outliers: [10.5] },
  { label: "Tech",      min: 2.4, q1: 4.5, median: 6.8, q3: 9.4, max: 14.2, outliers: [17.0, 19.5] },
  { label: "Retention", min: 3.5, q1: 5.0, median: 6.5, q3: 8.5, max: 12.5, outliers: [15.0] },
];

export const BoxPlotChartStory: Story = {
  name: "BoxPlotChart",
  render: () => (
    <div className="h-[320px] w-[560px]">
      <BoxPlotChart data={AHT_BY_TEAM} valueAxisLabel="Handle time (min)" />
    </div>
  ),
};
