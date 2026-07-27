import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── GaugeChart ──
   A single-value-against-a-range chart built on the shared `Chart`
   (ECharts) wrapper — "how far along is this one metric" (e.g.
   containment rate, SLA attainment), as opposed to `DonutChart`'s
   "composition of several categories." Renders as a partial ring (progress
   arc over a track) with the value as a large centered figure and an
   optional caption below it — no needle/pointer (`pointer: { show: false }`),
   since a numeric readout is more precise than a needle position for the
   kind of single-metric dashboard tile this is meant for.

   `colorVar` is the progress arc — an accent (data-visualization) color by
   default, same rule as every other chart in this library (never primary/
   brand, never `accent-blue-strong`). If a specific gauge's value genuinely
   represents a status (e.g. a critically low SLA), the same "colors that
   map to a real semantic element may use that element's color" exception
   from the dashboard color rule applies — pass a `status-*` token's
   `colorVar` instead of an accent one in that case.

   Same **canvas color gotcha** as every other chart here — the arc,
   track, value text, and label text are all resolved via `resolveCssColor`
   and re-run on `useThemeVersion` changes. */

export interface GaugeChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. */
  value: number;
  /** Scale minimum. Default `0`. */
  min?: number;
  /** Scale maximum. Default `100`. */
  max?: number;
  /** Caption shown below the value (e.g. `"Containment"`). */
  label?: string;
  /** Unit suffix appended to the displayed value, e.g. `"%"`. Default `"%"`. Pass `""` for none. */
  unit?: string;
  /** A lyra CSS variable for the progress arc's color, e.g. `"var(--lyra-color-accent-teal-strong)"`. Default `"var(--lyra-color-accent-teal-strong)"`. */
  colorVar?: string;
  /** A lyra CSS variable for the unfilled track behind the arc. Default `"var(--lyra-color-border-subtle)"`. */
  trackColorVar?: string;
}

const GaugeChart = React.forwardRef<HTMLDivElement, GaugeChartProps>(
  (
    {
      value,
      min = 0,
      max = 100,
      label,
      unit = "%",
      colorVar = "var(--lyra-color-accent-teal-strong)",
      trackColorVar = "var(--lyra-color-border-subtle)",
      className,
      ...props
    },
    ref
  ) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const arcColor = resolveCssColor(colorVar);
      const trackColor = resolveCssColor(trackColorVar);
      const valueTextColor = resolveCssColor("var(--lyra-color-fg-default)");
      const labelTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");

      return {
        series: [
          {
            type: "gauge",
            startAngle: 200,
            endAngle: -20,
            min,
            max,
            progress: { show: true, width: 14, itemStyle: { color: arcColor } },
            axisLine: { lineStyle: { width: 14, color: [[1, trackColor]] } },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            anchor: { show: false },
            title: { show: !!label, offsetCenter: [0, "35%"], fontSize: 13, color: labelTextColor },
            detail: {
              valueAnimation: true,
              formatter: (v: number) => `${Math.round(v)}${unit}`,
              offsetCenter: [0, "-5%"],
              fontSize: 28,
              fontWeight: 500,
              color: valueTextColor,
            },
            data: [{ value, name: label }],
          },
        ],
      };
    }, [value, min, max, label, unit, colorVar, trackColorVar, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
GaugeChart.displayName = "GaugeChart";

export { GaugeChart };
