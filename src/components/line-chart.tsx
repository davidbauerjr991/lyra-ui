import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── LineChart ──
   A categorical, multi-series line chart built on the shared `Chart`
   (ECharts) wrapper — the trend-family sibling of `BarChart` (comparison
   family). Same `categories`/`series` shape as `BarChart` deliberately,
   right down to the `label`/`data`/`colorVar` series fields, so a consumer
   switching between "compare categories" (bar) and "track over time"
   (line) reuses the exact same data-prep code, just a different component.

   `area` fills the region under each line (a plain area chart). `stacked`
   stacks every series on top of each other (ECharts `stack: "total"` per
   series) and implies `area` — a "stacked area" chart is just a stacked
   line chart with its fill on, not a distinct chart type, so `stacked`
   turns `area` on automatically rather than requiring both props set by
   hand. `area` alone (no `stacked`) draws overlapping, non-stacked fills —
   only sensible with one series, or a small number with clearly different
   magnitudes; nothing stops a consumer from passing more, same as ECharts
   itself doesn't.

   Same **canvas color gotcha**, and the same axis/legend text-color
   resolution, as `bar-chart.tsx` (see its own doc comment for the full
   explanation) — reuses `resolveCssColor`/`useThemeVersion` and the same
   `--lyra-color-fg-secondary`/`--lyra-color-border-subtle` tokens for
   axis labels, axis lines, split lines, and the legend. Don't re-derive
   this a third time; any new axis-labeled or legend-bearing chart in this
   library should follow the same pattern. */

export interface LineChartSeries {
  /** Series name — shown in the legend and the hover tooltip. */
  label: string;
  /** One value per category, same order as `categories`. */
  data: number[];
  /** A lyra CSS variable reference for this series' line/fill color, e.g. `"var(--lyra-color-accent-teal-strong)"` — resolved to a concrete color at render time, see the canvas note above. */
  colorVar: string;
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Category labels (e.g. day names, month names), one per data point in each series. */
  categories: string[];
  /** One or more series, each drawn as its own line. */
  series: LineChartSeries[];
  /** Fill the area under each line. Default `false`. Automatically `true` whenever `stacked` is `true` — a stacked area chart is a stacked line chart with fill on, not a separate option. */
  area?: boolean;
  /** Stack every series on top of each other instead of drawing them as independent, overlapping lines. Implies `area`. Default `false`. */
  stacked?: boolean;
  /** Smooth (curved) lines instead of straight segments between points. Default `true`. */
  smooth?: boolean;
  /** Show the built-in hover tooltip (a shared crosshair reading every series at that category). Default `true`. */
  showTooltip?: boolean;
  /** Show the legend (series names, only meaningful with 2+ series). Default `series.length > 1`. */
  showLegend?: boolean;
  /** Label for the value axis, e.g. `"Contacts"`. Omit for no axis label. */
  valueAxisLabel?: string;
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      categories,
      series,
      area = false,
      stacked = false,
      smooth = true,
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
    const resolvedArea = area || stacked;

    const option: EChartsOption = React.useMemo(() => {
      // Same canvas color gotcha as each series' own `colorVar` — axis
      // labels, axis lines, and split (grid) lines are all canvas-rendered,
      // not DOM, so they need `resolveCssColor` too or they're stuck on
      // ECharts' own hardcoded gray regardless of `[data-theme]`.
      const axisTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");
      const axisLineColor = resolveCssColor("var(--lyra-color-border-subtle)");
      const axisTextStyle = { color: axisTextColor };
      const axisLineStyle = { lineStyle: { color: axisLineColor } };
      const splitLineStyle = { lineStyle: { color: axisLineColor } };

      return {
        tooltip: showTooltip ? { trigger: "axis" } : { show: false },
        legend: resolvedShowLegend
          ? { bottom: 0, data: series.map((s) => s.label), textStyle: axisTextStyle }
          : undefined,
        grid: {
          left: 40,
          right: 16,
          top: 16,
          bottom: resolvedShowLegend ? 48 : 24,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: categories,
          boundaryGap: false,
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
        },
        yAxis: {
          type: "value",
          name: valueAxisLabel,
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
          splitLine: splitLineStyle,
          nameTextStyle: axisTextStyle,
        },
        series: series.map((s) => {
          const color = resolveCssColor(s.colorVar);
          return {
            type: "line",
            name: s.label,
            data: s.data,
            smooth,
            symbolSize: 6,
            showSymbol: false,
            stack: stacked ? "total" : undefined,
            lineStyle: { color, width: 2 },
            itemStyle: { color },
            areaStyle: resolvedArea ? { color, opacity: stacked ? 0.7 : 0.15 } : undefined,
          };
        }),
      };
    }, [categories, series, resolvedArea, stacked, smooth, showTooltip, resolvedShowLegend, valueAxisLabel, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
LineChart.displayName = "LineChart";

export { LineChart };
