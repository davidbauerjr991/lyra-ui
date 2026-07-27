import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion, getDefaultAccentHue } from "./chart";
import { cn } from "../lib/utils";

/* ── TreemapChart ──
   A hierarchical part-to-whole chart built on the shared `Chart` (ECharts)
   wrapper — area-encoded composition with as many categories as fit (the
   "part-to-whole" alternative to `DonutChart` once a breakdown has more
   than ~6 segments, per that chart family's own "when/notWhen" guidance).
   `data` nests via `children`, same shape ECharts' own `treemap` series
   expects.

   Color follows `DEFAULT_ACCENT_HUES` (chart.tsx) by default: each
   top-level node gets one hue's `-strong` token, and that node's own
   (uncolored) children inherit the *same* hue's `-soft` token — "part of
   this category, one shade lighter" rather than an unrelated color per
   child. A node at any level can still set its own `colorVar` to opt out
   of the default entirely — useful when a leaf's color should carry real
   meaning (the "semantic status color" exception in the dashboard color
   rule) rather than just visually group with its parent.

   Same **canvas color gotcha** as every other chart here — resolved via
   `resolveCssColor`, re-run on `useThemeVersion` changes. */

export interface TreemapChartNode {
  /** Node label. */
  name: string;
  /** Node size — drives its rectangle's area relative to its siblings. Omit on a parent that only exists to group `children` (ECharts sums children's values automatically in that case). */
  value?: number;
  /** A lyra CSS variable for this node's fill. Omit to use the shared default accent-hue cycle (see `DEFAULT_ACCENT_HUES`) — top-level nodes get a hue's `-strong` stop, their uncolored children get that same hue's `-soft` stop. */
  colorVar?: string;
  /** Nested nodes, for a multi-level treemap. */
  children?: TreemapChartNode[];
}

export interface TreemapChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top-level nodes. */
  data: TreemapChartNode[];
  /** Show each node's name (and value, space permitting) directly on its rectangle. Default `true`. */
  showLabels?: boolean;
  /** Show the built-in hover tooltip. Default `true`. */
  showTooltip?: boolean;
}

/** `ownColorVar` colors this node (falling back to the node's own `colorVar`
    if set); `childColorVar` is what gets passed down as EVERY descendant's
    own fallback — a child only overrides it by setting its own `colorVar`. */
function mapNode(
  node: TreemapChartNode,
  ownColorVar: string | undefined,
  childColorVar: string | undefined,
  labelTextColor: string
): Record<string, unknown> {
  const colorVar = node.colorVar ?? ownColorVar;
  return {
    name: node.name,
    value: node.value,
    itemStyle: colorVar ? { color: resolveCssColor(colorVar) } : undefined,
    label: { color: labelTextColor },
    children: node.children?.map((child) => mapNode(child, childColorVar, childColorVar, labelTextColor)),
  };
}

const TreemapChart = React.forwardRef<HTMLDivElement, TreemapChartProps>(
  ({ data, showLabels = true, showTooltip = true, className, ...props }, ref) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(() => {
      const labelTextColor = resolveCssColor("var(--lyra-color-fg-default)");
      const childLabelTextColor = resolveCssColor("var(--lyra-color-fg-secondary)");

      return {
        tooltip: showTooltip ? { formatter: "{b}: {c}" } : { show: false },
        series: [
          {
            type: "treemap",
            roam: false,
            nodeClick: false,
            breadcrumb: { show: false },
            label: { show: showLabels, color: labelTextColor },
            upperLabel: { show: false },
            itemStyle: { borderWidth: 1, gapWidth: 2 },
            levels: [
              {},
              { itemStyle: { borderWidth: 0 }, label: { color: labelTextColor } },
              { itemStyle: { borderWidth: 0 }, label: { color: childLabelTextColor, fontSize: 11 } },
            ],
            data: data.map((node, i) => {
              const hue = getDefaultAccentHue(i);
              return mapNode(node, hue.strong, hue.soft, labelTextColor);
            }),
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
TreemapChart.displayName = "TreemapChart";

export { TreemapChart };
