import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── ScatterChart ──
   A two-axis correlation chart built on the shared `Chart` (ECharts)
   wrapper — the "reveal a relationship between two continuous variables"
   family (as opposed to `BarChart`'s "compare discrete categories" or
   `LineChart`'s "track over time"). Points are grouped into `series` the
   same way `BarChart`/`LineChart` group into series — each series is one
   color-coded group (e.g. one per team/queue/agent tier), not one series
   per point.

   Bubble mode isn't a separate prop: pass `size` on individual data points
   and ECharts' `symbolSize` scales the marker accordingly (see the Bubble
   story) — a plain scatter is just every point's `size` left unset. Both
   axes need real `xAxisLabel`/`yAxisLabel` (unlike `BarChart`'s single
   `valueAxisLabel`) since neither axis is a category axis here — a
   scatter plot with unlabeled axes doesn't communicate what's being
   compared at all.

   Same **canvas color gotcha** and axis/legend text-color resolution as
   `bar-chart.tsx`/`line-chart.tsx` (see either's own doc comment) — reuses
   `resolveCssColor`/`useThemeVersion` and the same `--lyra-color-fg-
   secondary`/`--lyra-color-border-subtle` tokens. */

export interface ScatterChartPoint {
  /** X value. */
  x: number;
  /** Y value. */
  y: number;
  /** Marker size in px — set on some or all points to encode a third variable (the "bubble" reading). Points without a `size` fall back to `ScatterChartProps.pointSize`. */
  size?: number;
}

export interface ScatterChartSeries {
  /** Series (group) name — shown in the legend and the hover tooltip. */
  label: string;
  /** Points belonging to this group. */
  data: ScatterChartPoint[];
  /** A lyra CSS variable reference for this series' marker color, e.g. `"var(--lyra-color-accent-teal-strong)"` — resolved to a concrete color at render time, see the canvas note above. */
  colorVar: string;
}

export interface ScatterChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One or more groups of points, each its own color. */
  series: ScatterChartSeries[];
  /** Label for the x-axis, e.g. `"Avg handle time (min)"`. Required in practice — an unlabeled scatter plot doesn't communicate anything. */
  xAxisLabel?: string;
  /** Label for the y-axis, e.g. `"CSAT"`. */
  yAxisLabel?: string;
  /** Default marker size (px) for any point that doesn't set its own `size`. Default `10`. */
  pointSize?: number;
  /** Show the built-in hover tooltip (reads x, y, and the series name for the hovered point). Default `true`. */
  showTooltip?: boolean;
  /** Show the legend (series names, only meaningful with 2+ series). Default `series.length > 1`. */
  showLegend?: boolean;
}

const ScatterChart = React.forwardRef<HTMLDivElement, ScatterChartProps>(
  (
    {
      series,
      xAxisLabel,
      yAxisLabel,
      pointSize = 10,
      showTooltip = true,
      showLegend,
      className,
      ...props
    },
    ref
  ) => {
    const themeVersion = useThemeVersion();
    const resolvedShowLegend = showLegend ?? series.length > 1;

    const option: EChartsOption = React.useMemo(() => {
      const axisTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");
      const axisLineColor = resolveCssColor("var(--lyra-color-border-subtle)");
      const axisTextStyle = { color: axisTextColor };
      const axisLineStyle = { lineStyle: { color: axisLineColor } };
      const splitLineStyle = { lineStyle: { color: axisLineColor } };

      return {
        tooltip: showTooltip
          ? {
              trigger: "item",
              formatter: (p: unknown) => {
                const { seriesName, value } = p as { seriesName: string; value: [number, number, number] };
                return `${seriesName}<br/>${xAxisLabel ?? "x"}: ${value[0]}<br/>${yAxisLabel ?? "y"}: ${value[1]}`;
              },
            }
          : { show: false },
        legend: resolvedShowLegend
          ? { bottom: 0, data: series.map((s) => s.label), textStyle: axisTextStyle }
          : undefined,
        grid: {
          left: 48,
          right: 24,
          top: 16,
          bottom: resolvedShowLegend ? 56 : 40,
          containLabel: true,
        },
        xAxis: {
          type: "value",
          name: xAxisLabel,
          nameLocation: "middle",
          nameGap: 28,
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
          splitLine: splitLineStyle,
          nameTextStyle: axisTextStyle,
        },
        yAxis: {
          type: "value",
          name: yAxisLabel,
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
          splitLine: splitLineStyle,
          nameTextStyle: axisTextStyle,
        },
        series: series.map((s) => {
          const color = resolveCssColor(s.colorVar);
          return {
            type: "scatter",
            name: s.label,
            data: s.data.map((p) => [p.x, p.y, p.size ?? pointSize]),
            symbolSize: (val: number[]) => val[2],
            itemStyle: { color, opacity: 0.65 },
            emphasis: { itemStyle: { opacity: 0.95 } },
          };
        }),
      };
    }, [series, xAxisLabel, yAxisLabel, pointSize, showTooltip, resolvedShowLegend, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
ScatterChart.displayName = "ScatterChart";

export { ScatterChart };
