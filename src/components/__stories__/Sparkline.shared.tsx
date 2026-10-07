/* Shared example data for Sparkline.stories.tsx (Default playground) and
   Sparkline.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */

/* Same shape of series a "vs last week" metric trend would plot — jagged
   but generally trending up, matching the reference screenshot. */
export const TREND_UP = [4, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16];
export const TREND_DOWN = [16, 14, 15, 12, 13, 10, 11, 8, 9, 6, 7, 4];
export const TREND_FLAT = [8, 9, 8, 7, 8, 9, 8, 8, 9, 8, 7, 8];

export type Trend = "up" | "flat" | "down";
export const TREND_DATA: Record<Trend, number[]> = {
  up: TREND_UP,
  flat: TREND_FLAT,
  down: TREND_DOWN,
};

/* The three trend directions `DashboardCard`'s metric trend arrow also uses
   (success/warning/critical) — Sparkline itself has no notion of "trend
   direction," it just plots whatever `colorVar` it's given, but these are
   the colors a consumer pairs it with in practice. */
export type TrendColor = "default" | "success" | "warning" | "critical";
export const COLOR_VARS: Record<TrendColor, string | undefined> = {
  default: undefined, // component default (active blue)
  success: "var(--lyra-color-status-success-strong)",
  warning: "var(--lyra-color-status-warning-strong)",
  critical: "var(--lyra-color-status-critical-strong)",
};
