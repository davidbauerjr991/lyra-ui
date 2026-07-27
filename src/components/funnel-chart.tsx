import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion, getDefaultAccentColorVar } from "./chart";
import { cn } from "../lib/utils";

/* ── FunnelChart ──
   A stage-to-stage drop-off chart built on the shared `Chart` (ECharts)
   wrapper — the "flow/conversion" family (issue resolution, sign-up
   funnels), distinct from every "compare"/"trend"/"composition" chart
   elsewhere in this library. `data` is ordered top (widest, first stage)
   to bottom (narrowest, last stage) — same convention as ECharts' own
   `funnel` series and every real funnel reference.

   Each stage takes an explicit `colorVar`; when omitted, stages cycle
   through `DEFAULT_ACCENT_COLOR_VARS` (chart.tsx) in order — see that
   constant's own doc comment for when a default cycle is/isn't
   appropriate.

   Same **canvas color gotcha** as every other chart here — resolved via
   `resolveCssColor`, re-run on `useThemeVersion` changes. */

export interface FunnelChartStage {
  /** Stage label, e.g. `"Contacted"`. */
  label: string;
  /** Stage value — count or percentage, whichever the funnel is measuring. */
  value: number;
  /** A lyra CSS variable for this stage's fill. Omit to use the shared default accent cycle (see `DEFAULT_ACCENT_COLOR_VARS`). */
  colorVar?: string;
}

export interface FunnelChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stages, ordered widest (first) to narrowest (last). */
  data: FunnelChartStage[];
  /** Show each stage's label + value directly on the funnel. Default `true`. */
  showLabels?: boolean;
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
}

const FunnelChart = React.forwardRef<HTMLDivElement, FunnelChartProps>(
  ({ data, showLabels = true, showTooltip = true, className, ...props }, ref) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const labelTextColor = resolveCssColor("var(--lyra-color-fg-default)");

      return {
        tooltip: showTooltip ? { trigger: "item", formatter: "{b}: {c}" } : { show: false },
        series: [
          {
            type: "funnel",
            left: "8%",
            right: "8%",
            top: 16,
            bottom: 16,
            sort: "none",
            gap: 4,
            label: {
              show: showLabels,
              position: "inside",
              color: labelTextColor,
              formatter: "{b}\n{c}",
            },
            itemStyle: { borderWidth: 0 },
            data: data.map((d, i) => ({
              name: d.label,
              value: d.value,
              itemStyle: { color: resolveCssColor(d.colorVar ?? getDefaultAccentColorVar(i)) },
            })),
          },
        ],
      };
    }, [data, showLabels, showTooltip, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
FunnelChart.displayName = "FunnelChart";

export { FunnelChart };
