import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── BarChart ──
   A categorical, (optionally) multi-series bar chart built on the shared
   `Chart` (ECharts) wrapper — the first axis-labeled chart in this
   library (`DonutChart`/`Sparkline` are both deliberately bare, no axes/
   grid/legend). Unlike those two, `BarChart` is meant to be read/compared
   against, not just glanced at as a shape: real category/value axes,
   an optional legend distinguishing series, and a hover tooltip are all on
   by default.

   `orientation` picks which axis is the category axis vs. the value axis:
   `"vertical"` (default) draws upright columns — categories along the
   x-axis, values up the y-axis, the conventional "bar chart" reading.
   `"horizontal"` swaps them — categories down the y-axis, values along
   the x-axis — for a case that specifically calls for that reading (e.g.
   Outbound-Campaigns' Monitor "Outbound Email" card: "x-axis amount of
   emails and y-axis day"). Multiple `series` render as grouped bars per
   category by default (ECharts' own `barGap`/`barCategoryGap` — bars for
   the same category sit right next to each other, gaps between
   categories). Pass `stacked` to stack them instead (ECharts `stack:
   "total"` per series) — each series becomes a segment of one bar per
   category rather than its own adjacent bar. Segment corners are only
   rounded in grouped mode; a stacked bar's individual segments stay
   square so the stack reads as one continuous column, with only the
   outermost end rounded.

   Same **canvas color gotcha** `DonutChart`/`Sparkline` already document:
   `<canvas>` can't resolve a CSS custom property directly, so every
   series color is resolved via `resolveCssColor` (chart.tsx) before it
   reaches ECharts, and `useThemeVersion` forces that resolution to rerun
   whenever `[data-theme]` flips (otherwise a color resolved once at
   light-mode mount would go stale after switching to dark mode without a
   remount). Reuses the exact same two helpers — don't re-derive them a
   third time.

   The same gotcha applies to every bit of chart *text*, not just the bar
   colors — axis tick labels, the axis name, and the legend are all
   canvas-rendered too, so they were silently stuck on ECharts' own
   hardcoded default gray regardless of `[data-theme]` until this was
   fixed to resolve real lyra tokens instead: `--lyra-color-fg-secondary`
   for label/legend text, `--lyra-color-border-subtle` for the axis and
   split (grid) lines, both through the same `resolveCssColor`/
   `useThemeVersion` pair. `DonutChart`/`Sparkline` never needed this —
   both are deliberately bare, no axes/legend of their own — but any
   *future* axis-labeled or legend-bearing chart in this library should
   set the same `axisLabel`/`axisLine`/`splitLine`/legend `textStyle`
   instead of leaving ECharts' defaults in place. */

export interface BarChartSeries {
  /** Series name — shown in the legend and the hover tooltip. */
  label: string;
  /** One value per category, same order as `categories`. */
  data: number[];
  /** A lyra CSS variable reference for this series' bar color, e.g. `"var(--lyra-color-status-info-strong)"` — resolved to a concrete color at render time, see the canvas note above. */
  colorVar: string;
}

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Category labels (e.g. day names), one per data point in each series. */
  categories: string[];
  /** One or more series, grouped side-by-side per category. */
  series: BarChartSeries[];
  /** Which axis is the category axis. `"vertical"` (default) = categories on x, values on y (upright columns). `"horizontal"` = categories on y, values on x. */
  orientation?: "vertical" | "horizontal";
  /** Stack every series into one bar per category instead of drawing them as separate, adjacent bars. Default `false`. */
  stacked?: boolean;
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
  /** Show the legend (series names, only meaningful with 2+ series). Default `series.length > 1`. */
  showLegend?: boolean;
  /** Label for the value axis, e.g. `"Emails"`. Omit for no axis label. */
  valueAxisLabel?: string;
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      categories,
      series,
      orientation = "vertical",
      stacked = false,
      showTooltip = true,
      showLegend,
      valueAxisLabel,
      className,
      ...props
    },
    ref
  ) => {
    const themeVersion = useThemeVersion();
    const resolvedShowLegend = showLegend ?? series.length > 1;

    const option: EChartsOption = React.useMemo(() => {
      // Same canvas color gotcha as each series' own `colorVar` (see the
      // class doc comment above) — axis labels, axis lines, and the split
      // (grid) lines are all canvas-rendered text/strokes, not DOM, so they
      // need the same `resolveCssColor` treatment or they're stuck on
      // whatever hardcoded gray ECharts defaults to regardless of theme.
      // `fg-secondary` (muted body text) for label text, `border-subtle`
      // (light separator) for the axis/grid lines — both re-resolved on
      // every `themeVersion` bump so switching `[data-theme]` actually
      // updates them instead of staying pinned to whichever theme was
      // active on first mount.
      const axisTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");
      const axisLineColor = resolveCssColor("var(--lyra-color-border-subtle)");
      const axisTextStyle = { color: axisTextColor };
      const axisLineStyle = { lineStyle: { color: axisLineColor } };
      const splitLineStyle = { lineStyle: { color: axisLineColor } };

      const categoryAxis = {
        type: "category" as const,
        data: categories,
        axisTick: { alignWithLabel: true },
        axisLabel: axisTextStyle,
        axisLine: axisLineStyle,
      };
      const valueAxis = {
        type: "value" as const,
        name: valueAxisLabel,
        axisLabel: axisTextStyle,
        axisLine: axisLineStyle,
        splitLine: splitLineStyle,
        nameTextStyle: axisTextStyle,
      };
      const isHorizontal = orientation === "horizontal";

      return {
        tooltip: showTooltip ? { trigger: "axis", axisPointer: { type: "shadow" } } : { show: false },
        legend: resolvedShowLegend
          ? { bottom: 0, data: series.map((s) => s.label), textStyle: axisTextStyle }
          : undefined,
        grid: {
          left: isHorizontal ? 64 : 40,
          right: 16,
          top: 16,
          bottom: resolvedShowLegend ? 48 : 24,
          containLabel: true,
        },
        xAxis: isHorizontal ? valueAxis : categoryAxis,
        yAxis: isHorizontal ? categoryAxis : valueAxis,
        series: series.map((s, i) => ({
          type: "bar",
          name: s.label,
          data: s.data,
          stack: stacked ? "total" : undefined,
          // Rounded corners read as "one bar" — fine in grouped mode where
          // every bar really is its own column, but wrong for a stack:
          // rounding every segment makes a stacked bar look like several
          // separate pill shapes glued together instead of one continuous
          // column. Stacked mode only rounds the outermost segment's outer
          // edge (the last series in the stack), and leaves every other
          // segment square.
          itemStyle: {
            color: resolveCssColor(s.colorVar),
            borderRadius: !stacked
              ? isHorizontal ? [0, 3, 3, 0] : [3, 3, 0, 0]
              : i === series.length - 1
                ? isHorizontal ? [0, 3, 3, 0] : [3, 3, 0, 0]
                : 0,
          },
          barMaxWidth: 24,
        })),
      };
    }, [categories, series, orientation, stacked, showTooltip, resolvedShowLegend, valueAxisLabel, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
BarChart.displayName = "BarChart";

export { BarChart };
