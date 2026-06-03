import * as React from "react";
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
  /** Additional className on the root element */
  className?: string;
}

/* ── Size maps ── */

const barSizeMap: Record<SpinnerSize, { bar: string; gap: string }> = {
  sm: { bar: "h-3 w-[3px]",  gap: "gap-[2px]" },
  md: { bar: "h-5 w-1",      gap: "gap-0.5"   },
  lg: { bar: "h-6 w-[5px]",  gap: "gap-[3px]" },
};

const circleSizeMap: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

/* ── Color map ── */

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
  `;
  document.head.appendChild(style);
}

/* ── Bar Spinner ── */

const BarSpinner: React.FC<{ size: SpinnerSize; color: SpinnerColor }> = ({ size, color }) => {
  React.useEffect(() => { ensureKeyframes(); }, []);
  const { bar, gap } = barSizeMap[size];
  const bg = colorVar[color];
  return (
    <div className={cn("flex items-center", gap)}>
      {[0.1, 0.2, 0.3].map((delay, i) => (
        <span
          key={i}
          className={cn("rounded-sm origin-center", bar)}
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
  const sizeClass = circleSizeMap[size];
  const bg = colorVar[color];
  return (
    <div className={cn("relative rounded-full", sizeClass)}>
      {[0, 0.5].map((delay, i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: bg,
            animation: `lyra-circle-pulse 1s ease-out ${delay}s infinite`,
          }}
        />
      ))}
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
      className,
    },
    ref
  ) => (
    <div
      ref={ref}
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      {variant === "bar"
        ? <BarSpinner size={size} color={color} />
        : <CircleSpinner size={size} color={color} />
      }
    </div>
  )
);

Spinner.displayName = "Spinner";

export { Spinner };
