import * as React from "react";
import type { EChartsOption } from "echarts";
import { Chart, resolveCssColor, useThemeVersion } from "./chart";
import { cn } from "../lib/utils";

/* ── DonutChart ──
   A ring/donut chart built on the shared `Chart` (ECharts) wrapper — e.g.
   the home screen's Activity card (Available/Working/Unavailable
   breakdown). Hovering a slice adds a soft shadow and dims the other
   slices (`emphasis`/`blur` below) — this is a fixed default, not exposed
   as a prop, since every current consumer wants the same hover feedback;
   revisit if a future consumer genuinely needs it off. Deliberately does
   NOT use ECharts' hover scale-out (`emphasis.scale`): it grows the
   slice's actual drawn radius, and with the default `outerRadius` already
   at 95% there's almost no headroom left inside the chart's own canvas, so
   the grown slice gets hard-clipped against the canvas edge (visible as a
   flat-cut arc on hover) — a shadow glow gives equivalent "this one's
   active" feedback without growing the geometry past the canvas bounds.
   Renders only the ring; a consumer that also wants a legend
   (colored dot + label + value, à la the Activity card) builds it
   alongside from the same `data` array rather than this component owning
   two different jobs — keeps DonutChart reusable for any "ring + external
   legend/breakdown" layout, not just this one card's exact look.

   `centerLabel`/`centerValue` render a headline caption/figure centered
   inside the ring — the "counter donut" pattern (a queue count, a
   callback total, an SLA percentage) rather than an external legend.
   Both are a plain absolutely-positioned DOM overlay (`pointer-events-
   none` so it never intercepts the ring's own hover/tooltip), not an
   ECharts `graphic` element — real text picking up theme/typography CSS
   for free beats re-deriving the canvas color-resolution dance below just
   to draw two lines of centered text. Omit `centerValue` for a plain ring
   with nothing inside it (the original, still-default behavior).

   **Canvas color gotcha:** ECharts renders to `<canvas>`, and the Canvas 2D
   API can't resolve CSS custom properties the way DOM/CSSOM styles can —
   `ctx.fillStyle = "var(--lyra-color-status-success-strong)"` is silently
   invalid and falls back to black. So every slice color has to be resolved
   to a concrete value via `getComputedStyle` before it reaches ECharts.
   `resolveCssColor`/`useThemeVersion` (now shared in `chart.tsx` — see its
   own doc comment — since `Sparkline` needs the exact same resolution)
   re-trigger that resolution whenever the app's `[data-theme]` attribute
   flips (the same mechanism AgentProfile/LoginCard use for dark mode),
   since a color resolved once at light-mode mount would otherwise go stale
   the moment the user switches to dark mode without a remount. Any future
   canvas-based chart in this repo should reuse those same two helpers
   rather than re-deriving them — don't assume a `var()` string just works
   because it does for every other DOM-based component in this library. */

export interface DonutChartDatum {
  /** Slice label — shown in the hover tooltip. */
  label: string;
  /** Slice value (percentage, count, or any comparable numeric measure). */
  value: number;
  /** A lyra CSS variable reference for this slice's fill, e.g. `"var(--lyra-color-status-success-strong)"` — resolved to a concrete color at render time, see the canvas note above. */
  colorVar: string;
}

export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: DonutChartDatum[];
  /** Inner radius of the ring, as an ECharts percentage string. Default `"65%"`. */
  innerRadius?: string;
  /** Outer radius of the ring, as an ECharts percentage string. Default `"95%"`. */
  outerRadius?: string;
  /** Show the built-in hover tooltip. Set false when a consumer's own legend already surfaces every value. Default `true`. */
  showTooltip?: boolean;
  /** Caption shown above `centerValue`, inside the ring (e.g. `"Positive"`, `"Callbacks"`). Ignored if `centerValue` is unset. */
  centerLabel?: string;
  /** Headline figure shown centered inside the ring (e.g. `"58%"`, `"13"`) — the "counter donut" / "big number in a ring" pattern (queue counts, SLA percentages, sentiment breakdowns). A plain DOM overlay, not an ECharts `graphic` element, so it's real text that inherits theme/typography CSS for free instead of needing its own canvas color resolution. Omit for a plain ring with no center content. */
  centerValue?: string;
}

const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  ({ data, innerRadius = "65%", outerRadius = "95%", showTooltip = true, centerLabel, centerValue, className, ...props }, ref) => {
    const themeVersion = useThemeVersion();

    const option: EChartsOption = React.useMemo(
      () => ({
        // `appendToBody: true` — per explicit bug report, the tooltip was
        // getting hard-clipped by the home screen's Activity card (any
        // ancestor with `overflow: hidden`, e.g. a rounded `DashboardCard`).
        // ECharts' default tooltip is a plain `position: absolute` DOM node
        // appended as a CHILD of the chart's own container div, so it's
        // subject to whatever overflow behavior that container's ancestors
        // impose — same as any other absolutely-positioned DOM content
        // would be. `appendToBody` instead renders it as a direct child of
        // `document.body`, escaping every ancestor's overflow/stacking
        // context the same way a portal-based tooltip/popover elsewhere in
        // this library already does, so it can render outside the card's
        // bounds without being cut off.
        tooltip: showTooltip ? { trigger: "item", formatter: "{b}: {c}", appendToBody: true } : { show: false },
        series: [
          {
            type: "pie",
            radius: [innerRadius, outerRadius],
            avoidLabelOverlap: false,
            label: { show: false },
            labelLine: { show: false },
            itemStyle: { borderWidth: 0 },
            emphasis: {
              // scale: false — the default `outerRadius` ("95%") already
              // leaves very little headroom inside the chart's own canvas,
              // and ECharts' hover scale-out grows the slice's actual drawn
              // radius (not just a CSS transform), so at any radius above
              // roughly 90% the grown slice gets hard-clipped against the
              // canvas edge — confirmed visually (a slice's outer arc
              // visibly cut flat on hover). A soft shadow glow on the
              // hovered slice gives the same "this one's active" feedback
              // without growing the drawn geometry past the canvas bounds.
              scale: false,
              focus: "self",
              itemStyle: { shadowBlur: 10, shadowColor: "rgba(0, 0, 0, 0.25)" },
            },
            blur: { itemStyle: { opacity: 0.35 } },
            data: data.map((d) => ({
              name: d.label,
              value: d.value,
              itemStyle: { color: resolveCssColor(d.colorVar) },
            })),
          },
        ],
      }),
      [data, innerRadius, outerRadius, showTooltip, themeVersion]
    );

    return (
      <div ref={ref} className={cn("relative h-full w-full", className)} {...props}>
        <Chart option={option} />
        {centerValue && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            {centerLabel && (
              <span className="lyra-body-sm-emphasis text-lyra-fg-secondary uppercase tracking-wide">
                {centerLabel}
              </span>
            )}
            <span className="lyra-heading-lg text-lyra-fg-default">{centerValue}</span>
          </div>
        )}
      </div>
    );
  }
);
DonutChart.displayName = "DonutChart";

export { DonutChart };
