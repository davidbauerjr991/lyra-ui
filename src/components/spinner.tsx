import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Types ── */

export type SpinnerVariant = "bar" | "circle";
export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerColor = "primary" | "inverse";

export interface SpinnerProps {
  /** Visual style of the spinner */
  variant?: SpinnerVariant;
  /** Size */
  size?: SpinnerSize;
  /** Color — primary (blue) for light surfaces, inverse (white) for dark surfaces */
  color?: SpinnerColor;
  /** Accessible label announced by screen readers */
  label?: string;
  /** Also show `label` as visible text next to the spinner (default: false —
   *  the label is announced to screen readers only). */
  showLabel?: boolean;
  /** Additional className on the root element */
  className?: string;
}

/* ── CVA definitions ── */

/** Bar wrapper gap classes */
const spinnerBarGapVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-lyra-05",
      md: "gap-0.5",
      lg: "gap-[3px]",
    },
  },
  defaultVariants: { size: "md" },
});

/** Individual bar size classes */
const spinnerBarVariants = cva("rounded-sm origin-center", {
  variants: {
    size: {
      sm: "h-3 w-[3px]",
      md: "h-5 w-1",
      lg: "h-6 w-[5px]",
    },
  },
  defaultVariants: { size: "md" },
});

/** Circle size classes */
const spinnerCircleVariants = cva("relative rounded-full", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: { size: "md" },
});

/* ── Color map (CSS variable values — used in inline style, not Tailwind classes) ── */

const colorVar: Record<SpinnerColor, string> = {
  primary: "var(--lyra-color-bg-primary)",
  inverse: "var(--lyra-color-fg-inverse)",
};

/* ── Keyframe injection (only once per page) ── */

const STYLE_ID = "lyra-spinner-keyframes";

function ensureKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes lyra-bar-pulse {
      0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
      50%       { transform: scaleY(1);    opacity: 1;   }
    }
    @keyframes lyra-circle-pulse {
      0%   { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(1); opacity: 0;   }
    }
    @keyframes lyra-spinner-fade {
      0%, 100% { opacity: 0.35; }
      50%      { opacity: 1;    }
    }
    /* Reduced motion: no scaling or pulsing size. Bars stay full height and
       fade slowly; a circle shows one small dot fading in and out. */
    @media (prefers-reduced-motion: reduce) {
      [data-lyra-spinner] [data-lyra-bar],
      [data-lyra-spinner] [data-lyra-ripple] {
        animation: lyra-spinner-fade 1.6s ease-in-out infinite !important;
        transform: none !important;
      }
      [data-lyra-spinner] [data-lyra-ripple="0"] { inset: 25%; }
      [data-lyra-spinner] [data-lyra-ripple="1"] { display: none; }
    }
  `;
  document.head.appendChild(style);
}

/* ── Bar Spinner ── */

const BarSpinner: React.FC<{ size: SpinnerSize; color: SpinnerColor }> = ({ size, color }) => {
  React.useEffect(() => { ensureKeyframes(); }, []);
  const bg = colorVar[color];
  return (
    <div className={spinnerBarGapVariants({ size })}>
      {[0.1, 0.2, 0.3].map((delay, i) => (
        <span
          key={i}
          data-lyra-bar=""
          className={spinnerBarVariants({ size })}
          style={{
            backgroundColor: bg,
            animation: `lyra-bar-pulse 0.6s linear ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

/* ── Circle Spinner ── */

const CircleSpinner: React.FC<{ size: SpinnerSize; color: SpinnerColor }> = ({ size, color }) => {
  React.useEffect(() => { ensureKeyframes(); }, []);
  const bg = colorVar[color];
  return (
    <div className={spinnerCircleVariants({ size })}>
      {[0, 0.5].map((delay, i) => (
        <span
          key={i}
          data-lyra-ripple={i}
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: bg,
            animation: `lyra-circle-pulse 1s ease-out ${delay}s infinite`,
          }}
        />
      ))}
      {/* Constant center dot on the primary circle. The pulsing rings fade to
          nothing, so on a light background the circle alone was too faint
          (under 3:1 for most of each cycle); this keeps a solid mark in the
          full-strength brand color. The inverse (white-on-dark) circle is
          unchanged. */}
      {color === "primary" && (
        <span
          data-lyra-dot
          className="absolute inset-[30%] rounded-full"
          style={{ backgroundColor: bg }}
        />
      )}
    </div>
  );
};

/* ── Spinner ── */

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      variant = "bar",
      size = "md",
      color = "primary",
      label = "Loading",
      showLabel = false,
      className,
    },
    ref
  ) => (
    <div
      ref={ref}
      role="status"
      // With a visible label the text is the name, so don't announce it twice
      aria-label={showLabel ? undefined : label}
      data-lyra-spinner=""
      className={cn("inline-flex items-center justify-center", showLabel && "gap-2", className)}
    >
      {showLabel ? (
        <>
          <span aria-hidden="true" className="inline-flex">
            {variant === "bar"
              ? <BarSpinner size={size} color={color} />
              : <CircleSpinner size={size} color={color} />
            }
          </span>
          <span className={cn("lyra-body-sm", color === "inverse" ? "text-lyra-fg-inverse" : "text-lyra-fg-secondary")}>
            {label}
          </span>
        </>
      ) : variant === "bar" ? (
        <BarSpinner size={size} color={color} />
      ) : (
        <CircleSpinner size={size} color={color} />
      )}
    </div>
  )
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerBarVariants, spinnerCircleVariants };
