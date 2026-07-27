import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";

/* ── Sparkline ──
   A minimal inline line+area chart built on the shared `Chart` (ECharts)
   wrapper — e.g. the small trend graphic next to a metric's "+12.4% vs
   last week" line on a `DashboardCard`. Deliberately bare: no axes, grid
   lines, or tooltip — a sparkline reads as a shape at a glance, not a
   chart you interact with, so all of ECharts' normal chrome is switched
   off (`xAxis`/`yAxis` `show: false`, `grid` collapsed to 0, `tooltip`
   off). `symbol: "none"` keeps the line itself the only visible mark — no
   per-point dots cluttering a shape this small. Sharp/linear points by
   default (`smooth: false`) rather than a smoothed curve — a deliberate
   choice for the metric-trend use case, not an ECharts default left as-is.

   Line color fades into a soft gradient area fill underneath — same
   `resolveCssColor`/`useThemeVersion` pair `DonutChart` uses (now shared
   in `chart.tsx`) to resolve a lyra CSS variable to a concrete value
   before it reaches the canvas, since `<canvas>` can't read `var(--x)`
   itself. The gradient's alpha-faded stop needs an actual rgba string,
   not just the resolved hex — `withAlpha` below does that conversion; it
   only needs to handle the `#rrggbb` shape every lyra color token is
   authored in, not the general CSS color grammar. */

export interface SparklineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The series to plot, left to right. */
  data: number[];
  /** A lyra CSS variable reference for the line/fill color, e.g. `"var(--lyra-color-border-active)"`. Default `"var(--lyra-color-border-active)"` (the same blue `FilterChip`'s active state and other "info" surfaces use). */
  colorVar?: string;
  /** Line stroke width in px. Default `2`. */
  strokeWidth?: number;
  /** Smoothed curve instead of sharp/linear points between data points. Default `false`. */
  smooth?: boolean;
}

function withAlpha(hex: string, alpha: number): string {
  const match = hex.match(/^#([0-9a-f]{6})$/i);
  if (!match) return hex;
  const n = parseInt(match[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const Sparkline = React.forwardRef<HTMLDivElement, SparklineProps>(
  ({ data, colorVar = "var(--lyra-color-border-active)", strokeWidth = 2, smooth = false, className, ...props }, ref) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const lineColor = resolveCssColor(colorVar);

      return {
        tooltip: { show: false },
        grid: { left: 0, right: 0, top: 4, bottom: 2 },
        xAxis: { type: "category", show: false, data: data.map((_, i) => i), boundaryGap: false },
        yAxis: { type: "value", show: false, min: "dataMin", max: "dataMax" },
        series: [
          {
            type: "line",
            data,
            smooth,
            symbol: "none",
            lineStyle: { color: lineColor, width: strokeWidth },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: withAlpha(lineColor, 0.25) },
                  { offset: 1, color: withAlpha(lineColor, 0) },
                ],
              },
            },
          },
        ],
      };
    }, [data, colorVar, strokeWidth, smooth, themeVersion]);

    // No separate wrapping div here — `Chart` already renders its own
    // `h-full w-full` div around the real `ReactECharts` instance and
    // forwards `ref`/`className`/rest props straight onto it
    // (`ChartProps extends React.HTMLAttributes<HTMLDivElement>`), so
    // adding another div around `Chart` here was a redundant, do-nothing
    // extra layer — confirmed live via DevTools showing two identical
    // `<div class="h-full w-full">` wrappers stacked around one `<canvas>`.
    return <Chart ref={ref} option={option} className={className} {...props} />;
  }
);
Sparkline.displayName = "Sparkline";

export { Sparkline };
