import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── HeatmapChart ──
   A two-categorical-axis density chart built on the shared `Chart`
   (ECharts) wrapper — e.g. contact volume by day-of-week × hour. Unlike
   every other chart in this library, color here isn't a per-series
   "which group is this" encoding — it's a single continuous scale
   standing in for magnitude (low → high), so it doesn't use per-datum
   `colorVar`s the way `BarChart`/`LineChart`/`ScatterChart` do. Instead
   `minColorVar`/`maxColorVar` set the two ends of that scale (default: one
   accent hue's soft → strong stops, `--lyra-color-accent-teal-{soft,
   strong}`) and ECharts' own `visualMap` interpolates every value between
   them. This is still "an accent (data-visualization) color, never
   primary/brand" per the dashboard color rule — it just reads as a
   sequential ramp instead of a flat fill, which is the conventional
   treatment for a density/heatmap scale (a single hue's light→dark ramp,
   not a diverging or rainbow scale, per this chart family's own "dos").
   `visualMap` is rendered as a visible slider/legend, not hidden — a
   heatmap without a legend has no way to read what a given shade means.

   Same **canvas color gotcha** as every other chart here — resolves both
   ends of the color scale via `resolveCssColor`, re-run on `useThemeVersion`
   changes so the ramp still matches the active theme after a `[data-theme]`
   flip. Axis labels use the same `--lyra-color-fg-secondary` token as
   `BarChart`/`LineChart`/`ScatterChart`. */

export interface HeatmapChartCell {
  /** Index into `xCategories`. */
  x: number;
  /** Index into `yCategories`. */
  y: number;
  /** Magnitude at this cell — drives its color via the `minColorVar`→`maxColorVar` scale. */
  value: number;
}

export interface HeatmapChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Category labels along the x-axis (e.g. hours). */
  xCategories: string[];
  /** Category labels along the y-axis (e.g. days). */
  yCategories: string[];
  /** One entry per populated cell — cells with no entry render empty. */
  data: HeatmapChartCell[];
  /** A lyra CSS variable for the low end of the color scale. Default `"var(--lyra-color-accent-teal-soft)"`. */
  minColorVar?: string;
  /** A lyra CSS variable for the high end of the color scale. Default `"var(--lyra-color-accent-teal-strong)"`. */
  maxColorVar?: string;
  /** Unit label appended in the hover tooltip, e.g. `"contacts"`. */
  valueLabel?: string;
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
}

const HeatmapChart = React.forwardRef<HTMLDivElement, HeatmapChartProps>(
  (
    {
      xCategories,
      yCategories,
      data,
      minColorVar = "var(--lyra-color-accent-teal-soft)",
      maxColorVar = "var(--lyra-color-accent-teal-strong)",
      valueLabel,
      showTooltip = true,
      className,
      ...props
    },
    ref
  ) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const axisTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");
      const axisLineColor = resolveCssColor("var(--lyra-color-border-subtle)");
      const cellBorderColor = resolveCssColor("var(--lyra-color-border-subtle)");
      const axisTextStyle = { color: axisTextColor };
      const axisLineStyle = { lineStyle: { color: axisLineColor } };
      const values = data.map((d) => d.value);
      const min = values.length ? Math.min(...values) : 0;
      const max = values.length ? Math.max(...values) : 1;

      return {
        tooltip: showTooltip
          ? {
              position: "top",
              formatter: (p: unknown) => {
                const value = (p as { value: [number, number, number] }).value;
                return `${yCategories[value[1]]}, ${xCategories[value[0]]}<br/>${value[2]}${valueLabel ? " " + valueLabel : ""}`;
              },
            }
          : { show: false },
        grid: { left: 56, right: 16, top: 16, bottom: 56, containLabel: true },
        xAxis: {
          type: "category",
          data: xCategories,
          splitArea: { show: true },
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
        },
        yAxis: {
          type: "category",
          data: yCategories,
          splitArea: { show: true },
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
        },
        visualMap: {
          min,
          max,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: 0,
          itemWidth: 12,
          itemHeight: 80,
          textStyle: axisTextStyle,
          inRange: { color: [resolveCssColor(minColorVar), resolveCssColor(maxColorVar)] },
        },
        series: [
          {
            type: "heatmap",
            data: data.map((d) => [d.x, d.y, d.value]),
            itemStyle: { borderColor: cellBorderColor, borderWidth: 1 },
            emphasis: { itemStyle: { shadowBlur: 8, shadowColor: "rgba(0, 0, 0, 0.25)" } },
          },
        ],
      };
    }, [xCategories, yCategories, data, minColorVar, maxColorVar, valueLabel, showTooltip, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
HeatmapChart.displayName = "HeatmapChart";

export { HeatmapChart };
