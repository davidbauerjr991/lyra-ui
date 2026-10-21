import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Track ── */
const trackVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-lyra-border-subtle",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: { size: "md" },
  }
);

/* ── Indicator ── */
const indicatorVariants = cva(
  "h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:  "bg-lyra-bg-active-strong",
        success:  "bg-lyra-status-success-strong",
        warning:  "bg-lyra-status-warning-strong",
        critical: "bg-lyra-status-critical-strong",
        neutral:  "bg-lyra-fg-secondary",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

/* Ring: the arc's color per variant (same palette as the bar's indicator). */
const RING_STROKE: Record<NonNullable<VariantProps<typeof indicatorVariants>["variant"]>, string> = {
  default: "stroke-lyra-bg-active-strong",
  success: "stroke-lyra-status-success-strong",
  warning: "stroke-lyra-status-warning-strong",
  critical: "stroke-lyra-status-critical-strong",
  neutral: "stroke-lyra-fg-secondary",
};

/* Keyframes for the indeterminate bar — injected once, like Spinner's. */
const STYLE_ID = "lyra-progress-keyframes";
function ensureKeyframes() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes lyra-progress-indeterminate {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(250%); }
    }
    /* Reduced motion: no sliding. A half-width bar fades in and out instead. */
    @keyframes lyra-progress-fade { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      [data-lyra-progress-indeterminate] {
        animation: lyra-progress-fade 1.6s ease-in-out infinite !important;
        transform: none !important;
        margin-left: 25%;
      }
    }
  `;
  document.head.appendChild(style);
}

export interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof trackVariants>,
    VariantProps<typeof indicatorVariants> {
  /** 0–100 */
  value?: number;
  /** Show percentage label to the right of the track */
  showLabel?: boolean;
  /** Override the label text (defaults to "{value}%") */
  label?: string;
  /**
   * Escape hatch to override the indicator's transition (default
   * `transition-all duration-300 ease-in-out`, from `indicatorVariants`) for
   * a specific usage — e.g. matching a particular reference animation curve
   * — without changing the default for every other consumer. Merged in via
   * `cn()`/tailwind-merge, so e.g. `"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"`
   * correctly overrides just those two utility groups. See
   * `ProgressBar.stories.tsx`'s "Animated — Dashboard Loading" story for a
   * real usage (matching Radix's own Progress primitive docs easing curve).
   */
  indicatorClassName?: string;
  /**
   * Unknown progress: a segment slides along the track, and the bar reports
   * no value to assistive tech (no `aria-valuenow`). `value` is ignored and
   * the percentage label is hidden; `label` still shows as text. Default:
   * false. Honors reduced motion (the segment fades in place instead).
   */
  indeterminate?: boolean;
  /** Horizontal alignment of the label (`showLabel`) under the track: "start" (default), "center" or "end". */
  labelAlign?: "start" | "center" | "end";
  /**
   * "bar" (default) is the horizontal track. "ring" draws the same progress as a circle: a small mark that fits
   * beside a label or inside a Badge. A ring ignores `size`, `showLabel` and `labelAlign` (use `label` to name
   * it for assistive tech, and put the numbers in text next to it); `variant` colors the arc.
   */
  shape?: "bar" | "ring";
  /** Ring diameter in px. Default 18. Rings over 30px get a thicker stroke. Only used when `shape="ring"`. */
  ringSize?: number;
}

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressBarProps
>(({ className, value = 0, size, variant, showLabel, label, indicatorClassName, indeterminate = false, labelAlign = "start", shape = "bar", ringSize = 18, ...props }, ref) => {
  const labelId = React.useId();
  React.useEffect(() => {
    if (indeterminate) ensureKeyframes();
  }, [indeterminate]);
  if (shape === "ring") {
    const stroke = ringSize > 30 ? 5 : 3;
    const r = (ringSize - stroke) / 2;
    const c = 2 * Math.PI * r;
    const m = ringSize / 2;
    // Unknown progress: a quarter arc that spins (still, for reduced motion).
    const p = indeterminate ? 0.25 : Math.min(1, Math.max(0, value) / 100);
    return (
      <ProgressPrimitive.Root
        ref={ref}
        value={indeterminate ? null : value}
        max={100}
        className={cn("inline-flex shrink-0", className)}
        aria-label={label ?? "Progress"}
        {...props}
      >
        <svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`} aria-hidden="true" className={cn(indeterminate && "animate-spin motion-reduce:animate-none")}>
          <circle cx={m} cy={m} r={r} fill="none" strokeWidth={stroke} className="stroke-lyra-border-subtle" />
          <circle
            cx={m}
            cy={m}
            r={r}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c.toFixed(2)}
            strokeDashoffset={(c * (1 - p)).toFixed(2)}
            transform={`rotate(-90 ${m} ${m})`}
            className={cn("transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none", RING_STROKE[variant ?? "default"], indicatorClassName)}
          />
        </svg>
      </ProgressPrimitive.Root>
    );
  }
  // A visible custom label names the bar by reference (`aria-labelledby`), so
  // the name is the text people actually see. A bare percentage ("45%") isn't
  // a good name, so that case keeps the default "Progress".
  const hasVisibleLabel = !!showLabel && !!label;
  return (
  <div className="flex flex-col gap-1 w-full">
    <ProgressPrimitive.Root
      ref={ref}
      value={indeterminate ? null : value}
      max={100}
      className={cn(trackVariants({ size }), "w-full", className)}
      // Default accessible name (axe aria-progressbar-name) — a consumer's own
      // aria-label/aria-labelledby in {...props} still wins.
      {...(hasVisibleLabel ? { "aria-labelledby": labelId } : { "aria-label": label ?? "Progress" })}
      {...props}
    >
      <ProgressPrimitive.Indicator
        {...(indeterminate ? { "data-lyra-progress-indeterminate": "" } : {})}
        className={cn(
          indicatorVariants({ variant }),
          indeterminate && "w-2/5 flex-none transition-none",
          indicatorClassName
        )}
        style={
          indeterminate
            ? { animation: "lyra-progress-indeterminate 1.4s ease-in-out infinite" }
            : { transform: `translateX(-${100 - Math.min(100, Math.max(0, value))}%)` }
        }
      />
    </ProgressPrimitive.Root>
    {(showLabel && !(indeterminate && !label)) && (
      <span id={labelId} className={cn("lyra-body-sm text-lyra-fg-secondary tabular-nums", labelAlign === "center" && "text-center", labelAlign === "end" && "text-right")}>
        {label ?? `${Math.round(value)}%`}
      </span>
    )}
  </div>
  );
});
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
