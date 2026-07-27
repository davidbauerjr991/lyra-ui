import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion, getDefaultAccentHue } from "./chart";
import { cn } from "../lib/utils";

/* ── SunburstChart ──
   A multi-level hierarchical part-to-whole chart built on the shared
   `Chart` (ECharts) wrapper — radial sibling of `TreemapChart` (area
   encoding) for when a hierarchy reads better as rings radiating from a
   center than as nested rectangles. Same `data`/`colorVar`/coloring
   convention as `TreemapChart` — top-level nodes cycle through
   `DEFAULT_ACCENT_HUES` (chart.tsx) using each hue's `-strong` stop, and
   their uncolored children inherit that same hue's `-soft` stop, so a
   branch reads as "one category, one shade lighter per ring out" rather
   than a differently-colored slice at every level. A node at any level can
   still set its own `colorVar` to opt out.

   Same **canvas color gotcha** as every other chart here — resolved via
   `resolveCssColor`, re-run on `useThemeVersion` changes. */

export interface SunburstChartNode {
  /** Node label. */
  name: string;
  /** Node size — drives its arc's angular span relative to its siblings. Omit on a parent that only exists to group `children` (ECharts sums children's values automatically in that case). */
  value?: number;
  /** A lyra CSS variable for this node's fill. Omit to use the shared default accent-hue cycle (see `DEFAULT_ACCENT_HUES`) — top-level nodes get a hue's `-strong` stop, their uncolored children get that same hue's `-soft` stop. */
  colorVar?: string;
  /** Nested nodes, for additional rings. */
  children?: SunburstChartNode[];
}

export interface SunburstChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top-level (innermost ring) nodes. */
  data: SunburstChartNode[];
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
}

/** Same inheritance convention as `treemap-chart.tsx`'s `mapNode` — see its
    doc comment. Kept as a separate copy rather than a shared helper since
    the two components' ECharts node shapes (treemap vs. sunburst) differ
    enough (label/upperLabel vs. plain label, breadcrumb, etc.) that a
    shared generic would need its own indirection for little real reuse. */
function mapNode(
  node: SunburstChartNode,
  ownColorVar: string | undefined,
  childColorVar: string | undefined
): Record<string, unknown> {
  const colorVar = node.colorVar ?? ownColorVar;
  return {
    name: node.name,
    value: node.value,
    itemStyle: colorVar ? { color: resolveCssColor(colorVar) } : undefined,
    children: node.children?.map((child) => mapNode(child, childColorVar, childColorVar)),
  };
}

const SunburstChart = React.forwardRef<HTMLDivElement, SunburstChartProps>(
  ({ data, showTooltip = true, className, ...props }, ref) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const labelTextColor = resolveCssColor("var(--lyra-color-fg-default)");
      const borderColor = resolveCssColor("var(--lyra-color-bg-surface-container)");

      return {
        tooltip: showTooltip ? { formatter: "{b}: {c}" } : { show: false },
        series: [
          {
            type: "sunburst",
            radius: [0, "90%"],
            label: { color: labelTextColor, minAngle: 8 },
            itemStyle: { borderWidth: 1, borderColor },
            data: data.map((node, i) => {
              const hue = getDefaultAccentHue(i);
              return mapNode(node, hue.strong, hue.soft);
            }),
          },
        ],
      };
    }, [data, showTooltip, themeVersion]);

    return (
      <div ref={ref} className={cn("h-full w-full", className)} {...props}>
        <Chart option={option} />
      </div>
    );
  }
);
SunburstChart.displayName = "SunburstChart";

export { SunburstChart };
