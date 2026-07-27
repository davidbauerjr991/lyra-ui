import * as React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { cn } from "../lib/utils";

/* ── Chart ──
   Thin, generic wrapper around echarts-for-react — the shared base for
   every ECharts-backed chart in lyra-ui (DonutChart, Sparkline, more chart
   types as they're needed). Deliberately unopinionated: it takes a raw
   ECharts `option` object and renders it, nothing else. Chart-type-specific
   components own building that `option` object and any lyra-token color
   resolution — this component's only job is mounting/sizing the ECharts
   instance consistently.

   Not controlled in the §4 CONTRIBUTING.md sense (no primary user-editable
   value/onChange) — a chart renders data, it doesn't collect input. */

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Raw ECharts option object. Chart-type wrapper components build this. */
  option: EChartsOption;
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ option, className, ...props }, ref) => (
    <div ref={ref} className={cn("h-full w-full", className)} {...props}>
      <ReactECharts option={option} notMerge style={{ height: "100%", width: "100%" }} />
    </div>
  )
);
Chart.displayName = "Chart";

/* ── Shared canvas color-resolution helpers ──
   ECharts renders to `<canvas>`, and the Canvas 2D API can't resolve CSS
   custom properties the way DOM/CSSOM styles can — `ctx.fillStyle =
   "var(--lyra-color-status-success-strong)"` is silently invalid and falls
   back to black. So every color reaching an ECharts `option` has to be
   resolved to a concrete value via `getComputedStyle` first. Originally
   local to `donut-chart.tsx`; moved here once `Sparkline` needed the exact
   same resolution + dark-mode-revalidation logic, so any future
   ECharts-backed component in this repo reuses one implementation instead
   of re-deriving it a third time. */

/** Resolves a `"var(--x)"` string to its concrete computed value; passes any other string through unchanged. */
export function resolveCssColor(value: string): string {
  const match = value.match(/var\((--[\w-]+)\)/);
  if (!match) return value;
  const resolved = getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim();
  return resolved || value;
}

/** Bumps whenever `[data-theme]` on `document.documentElement` changes, so
    color resolution above can be recomputed instead of staying pinned to
    whatever theme was active on first render. */
export function useThemeVersion(): number {
  const [version, setVersion] = React.useState(0);
  React.useEffect(() => {
    const observer = new MutationObserver(() => setVersion((v) => v + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return version;
}

/* ── Shared default accent palette ──
   For any chart whose nodes/stages/segments are arbitrary categories with
   no per-datum `colorVar` supplied (`FunnelChart`'s stages, `TreemapChart`/
   `SunburstChart`'s top-level nodes) — cycles through the accent (data-
   visualization) palette so a consumer doesn't have to hand-pick a color
   for every single item just to get *some* reasonable default. Per the
   dashboard color rule (CLAUDE.md: "never use primary/brand, or a raw
   light/dark literal, for ... a chart series"), this list deliberately
   excludes `accent-blue-strong` (too easily read as the primary/brand
   color) — every other `-strong` accent tone is fair game. A consumer that
   wants specific, meaningful colors (e.g. matching a real status) should
   still pass its own `colorVar` per item instead of relying on this
   default — this exists for "I don't have an opinion, just give it a
   color" cases, not as a substitute for a chart whose colors should carry
   real meaning. */
export const DEFAULT_ACCENT_COLOR_VARS: string[] = [
  "var(--lyra-color-accent-teal-strong)",
  "var(--lyra-color-accent-purple-strong)",
  "var(--lyra-color-accent-orange-strong)",
  "var(--lyra-color-accent-pink-strong)",
  "var(--lyra-color-accent-lime-strong)",
  "var(--lyra-color-accent-red-strong)",
  "var(--lyra-color-accent-yellow-strong)",
  "var(--lyra-color-accent-slate-strong)",
];

/** Picks a color from `DEFAULT_ACCENT_COLOR_VARS`, cycling once the index runs past the end. */
export function getDefaultAccentColorVar(index: number): string {
  return DEFAULT_ACCENT_COLOR_VARS[index % DEFAULT_ACCENT_COLOR_VARS.length];
}

/* ── Shared default accent hue pairs (soft/strong) ──
   For a *hierarchical* chart (`TreemapChart`/`SunburstChart`) where a
   parent node's children should read as "part of the same category, one
   shade lighter" rather than each getting an unrelated color of their
   own: assigns a top-level node the hue's `-strong` token and its
   (uncolored) children that same hue's `-soft` token, reusing each accent
   hue's existing soft/strong pair from lyra-tokens.css instead of deriving
   a lighter shade mathematically (no color-manipulation library needed —
   the two-stop pair already exists for exactly this kind of "same hue,
   two weights" use). Same 8 hues as `DEFAULT_ACCENT_COLOR_VARS`, same
   exclusion of blue. */
export const DEFAULT_ACCENT_HUES: { soft: string; strong: string }[] = [
  { soft: "var(--lyra-color-accent-teal-soft)", strong: "var(--lyra-color-accent-teal-strong)" },
  { soft: "var(--lyra-color-accent-purple-soft)", strong: "var(--lyra-color-accent-purple-strong)" },
  { soft: "var(--lyra-color-accent-orange-soft)", strong: "var(--lyra-color-accent-orange-strong)" },
  { soft: "var(--lyra-color-accent-pink-soft)", strong: "var(--lyra-color-accent-pink-strong)" },
  { soft: "var(--lyra-color-accent-lime-soft)", strong: "var(--lyra-color-accent-lime-strong)" },
  { soft: "var(--lyra-color-accent-red-soft)", strong: "var(--lyra-color-accent-red-strong)" },
  { soft: "var(--lyra-color-accent-yellow-soft)", strong: "var(--lyra-color-accent-yellow-strong)" },
  { soft: "var(--lyra-color-accent-slate-soft)", strong: "var(--lyra-color-accent-slate-strong)" },
];

/** Picks a hue pair from `DEFAULT_ACCENT_HUES`, cycling once the index runs past the end. */
export function getDefaultAccentHue(index: number): { soft: string; strong: string } {
  return DEFAULT_ACCENT_HUES[index % DEFAULT_ACCENT_HUES.length];
}

export { Chart };
export type { EChartsOption };
