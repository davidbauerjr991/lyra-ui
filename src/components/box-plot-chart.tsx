import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── BoxPlotChart ──
   A distribution-by-group chart built on the shared `Chart` (ECharts)
   wrapper — median/quartiles/range per category, e.g. handle-time spread
   across teams. Distinct from `Histogram`-style usage of `BarChart`
   (distribution of ONE group's values into bins) — this is several
   groups' distributions compared side by side, each condensed to five
   numbers instead of a full binned shape.

   Each category supplies its own five-number summary (`min`/`q1`/
   `median`/`q3`/`max`) — this component doesn't compute quartiles from raw
   samples itself, same as ECharts' own `boxplot` series expects
   pre-computed values, not raw data arrays. `outliers`, if given, render as
   a separate overlaid scatter series (the standard ECharts recipe for
   outlier points — `boxplot` itself only ever draws the box-and-whiskers).

   Every box uses the same `colorVar` — unlike `BarChart`, categories here
   are the x-axis groups being compared, not different series, so there's
   nothing for per-category color to distinguish; one consistent accent
   color reads as "this is all the same metric, split by group."

   Same **canvas color gotcha** and axis text-color resolution as every
   other axis-labeled chart in this library — resolved via
   `resolveCssColor`, re-run on `useThemeVersion` changes. */

export interface BoxPlotChartCategory {
  /** Category label (e.g. a team name). */
  label: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  /** Individual values that fall outside the whiskers, rendered as separate points. */
  outliers?: number[];
}

export interface BoxPlotChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One five-number summary per category. */
  data: BoxPlotChartCategory[];
  /** A lyra CSS variable for every box's fill/stroke, e.g. `"var(--lyra-color-accent-teal-strong)"`. Default `"var(--lyra-color-accent-teal-strong)"`. */
  colorVar?: string;
  /** A lyra CSS variable for outlier point markers. Default `"var(--lyra-color-accent-red-strong)"`. */
  outlierColorVar?: string;
  /** Label for the value axis, e.g. `"Handle time (min)"`. */
  valueAxisLabel?: string;
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
}

const BoxPlotChart = React.forwardRef<HTMLDivElement, BoxPlotChartProps>(
  (
    {
      data,
      colorVar = "var(--lyra-color-accent-teal-strong)",
      outlierColorVar = "var(--lyra-color-accent-red-strong)",
      valueAxisLabel,
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
      const axisTextStyle = { color: axisTextColor };
      const axisLineStyle = { lineStyle: { color: axisLineColor } };
      const splitLineStyle = { lineStyle: { color: axisLineColor } };
      const boxColor = resolveCssColor(colorVar);
      const outlierColor = resolveCssColor(outlierColorVar);

      const outlierPoints: [number, number][] = [];
      data.forEach((d, i) => {
        (d.outliers ?? []).forEach((v) => outlierPoints.push([i, v]));
      });

      return {
        tooltip: showTooltip ? { trigger: "item" } : { show: false },
        grid: { left: 48, right: 16, top: 16, bottom: 32, containLabel: true },
        xAxis: {
          type: "category",
          data: data.map((d) => d.label),
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
          boundaryGap: true,
        },
        yAxis: {
          type: "value",
          name: valueAxisLabel,
          axisLabel: axisTextStyle,
          axisLine: axisLineStyle,
          splitLine: splitLineStyle,
          nameTextStyle: axisTextStyle,
        },
        series: [
          {
            type: "boxplot",
            data: data.map((d) => [d.min, d.q1, d.median, d.q3, d.max]),
            itemStyle: { color: boxColor, borderColor: boxColor },
            boxWidth: [16, 40],
          },
          {
            type: "scatter",
            data: outlierPoints,
            symbolSize: 6,
            itemStyle: { color: outlierColor },
          },
        ],
      };
    }, [data, colorVar, outlierColorVar, valueAxisLabel, showTooltip, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
BoxPlotChart.displayName = "BoxPlotChart";

export { BoxPlotChart };
