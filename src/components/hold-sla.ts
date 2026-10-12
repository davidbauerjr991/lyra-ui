/**
 * Hold-time SLA for voice calls: a call on hold turns "warning" after 15s and
 * "critical" after 30s. Used by every hold-time badge (channel row, collapsed
 * interaction nav card, voice call controls) so they all escalate together.
 */
export const HOLD_WARNING_SECONDS = 15;
export const HOLD_CRITICAL_SECONDS = 30;

export type HoldSeverity = "success" | "warning" | "critical";

export function getHoldSeverity(seconds: number): HoldSeverity {
  if (seconds >= HOLD_CRITICAL_SECONDS) return "critical";
  if (seconds >= HOLD_WARNING_SECONDS) return "warning";
  return "success";
}

/** Seconds from an "mm:ss" / "h:mm:ss" label (what the hold timers render). */
export function parseElapsedSeconds(label: string): number {
  const parts = label.split(":").map((p) => Number.parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  return parts.reduce((total, n) => total * 60 + n, 0);
}

/** Badge color for a hold-time label. */
export function getHoldBadgeColor(label: string): HoldSeverity {
  return getHoldSeverity(parseElapsedSeconds(label));
}
