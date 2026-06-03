import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

export type IconSize = "sm" | "md" | "lg";
export type IconColor =
  | "default"
  | "secondary"
  | "action"
  | "disabled"
  | "inverse"
  | "on-primary"
  | "active-strong"
  | "active-subtle"
  | "status-success"
  | "status-warning"
  | "status-critical"
  | "status-info"
  | "inherit";

export interface IconProps {
  /** Lucide icon component to render */
  icon: LucideIcon;
  /** Visual size of the icon */
  size?: IconSize;
  /** Token-mapped color */
  color?: IconColor;
  /** Additional class names */
  className?: string;
  /**
   * Decorative icons are hidden from assistive technology.
   * Use when the icon is purely visual and nearby text already
   * conveys the meaning. Mutually exclusive with `label`.
   */
  decorative?: boolean;
  /**
   * Accessible label for informative icons.
   * When provided the icon is announced by screen readers.
   * Mutually exclusive with `decorative`.
   */
  label?: string;
  /**
   * When true, wraps the icon in a Tooltip using the `label` as
   * the tooltip content. Requires `label` to be set.
   */
  tooltip?: boolean;
}

/* ── Size map ── */

const sizeClasses: Record<IconSize, string> = {
  sm: "h-4 w-4",   // 16px
  md: "h-5 w-5",   // 20px
  lg: "h-6 w-6",   // 24px
};

/* ── Color map (Tailwind classes keyed to lyra tokens) ── */

const colorClasses: Record<IconColor, string> = {
  default:         "text-lyra-fg-default",
  secondary:       "text-lyra-fg-secondary",
  action:          "text-lyra-fg-action",
  disabled:        "text-lyra-fg-disabled",
  inverse:         "text-lyra-fg-inverse",
  "on-primary":    "text-lyra-fg-on-primary",
  "active-strong": "text-lyra-fg-active-strong",
  "active-subtle": "text-lyra-fg-active-subtle",
  "status-success": "text-lyra-status-success-strong",
  "status-warning": "text-lyra-status-warning-strong",
  "status-critical": "text-lyra-status-critical-strong",
  "status-info":    "text-lyra-status-info-strong",
  inherit:          "text-current",
};

/* ── Component ── */

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: LucideIconComponent,
      size = "md",
      color = "inherit",
      className,
      decorative = false,
      label,
      tooltip = false,
    },
    ref
  ) => {
    const svgProps = decorative
      ? { "aria-hidden": true as const, focusable: false }
      : label
      ? { role: "img" as const, "aria-label": label }
      : { "aria-hidden": true as const, focusable: false };

    const iconEl = (
      <LucideIconComponent
        ref={ref}
        strokeWidth={1.5}
        className={cn(sizeClasses[size], colorClasses[color], className)}
        {...svgProps}
      />
    );

    if (tooltip && label) {
      return <Tooltip content={label}>{iconEl}</Tooltip>;
    }

    return iconEl;
  }
);

Icon.displayName = "Icon";

export { Icon };
