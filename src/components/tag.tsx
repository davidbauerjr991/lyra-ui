import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

export type TagVariant = "default" | "success" | "warning" | "critical" | "info" | "neutral";
export type TagSize = "sm";

export type TagShape = "default" | "pill";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tag label */
  label: string;
  /** Visual variant */
  variant?: TagVariant;
  /** Shape — "default" uses rounded-xs corners, "pill" uses 50px border-radius */
  shape?: TagShape;
  /** Show a remove button — calls onRemove when clicked */
  onRemove?: () => void;
  /** Accessible label for the remove button (default: "Remove {label}") */
  removeLabel?: string;
  /** Disable the tag and remove button */
  disabled?: boolean;
}

/* ── Variant styles ── */

const variantStyles: Record<TagVariant, string> = {
  default:  "bg-lyra-bg-active-subtle text-lyra-fg-active-strong border-lyra-border-active/30",
  success:  "bg-lyra-status-success-subtle text-lyra-status-success-strong border-lyra-status-success-strong/30",
  warning:  "bg-lyra-status-warning-subtle text-lyra-status-warning-strong border-lyra-status-warning-strong/30",
  critical: "bg-lyra-status-critical-subtle text-lyra-status-critical-strong border-lyra-status-critical-strong/30",
  info:     "bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-strong/30",
  neutral:  "bg-lyra-bg-surface-canvas text-lyra-fg-secondary border-lyra-border-subtle",
};

const removeHoverStyles: Record<TagVariant, string> = {
  default:  "hover:bg-lyra-state-hover-active-subtle",
  success:  "hover:bg-lyra-status-success-subtle",
  warning:  "hover:bg-lyra-status-warning-subtle",
  critical: "hover:bg-lyra-state-hover-critical-subtle",
  info:     "hover:bg-lyra-status-info-subtle",
  neutral:  "hover:bg-lyra-state-hover",
};

/* ── Component ── */

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      variant = "default",
      shape = "default",
      onRemove,
      removeLabel,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
      return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center border transition-colors",
          shape === "pill" ? "rounded-[50px]" : "rounded-lyra-xs",
          "px-1.5 py-0.5 lyra-body-sm gap-0.5",
          disabled
            ? "bg-lyra-bg-disabled text-lyra-fg-disabled border-lyra-border-disabled opacity-60"
            : variantStyles[variant],
          className
        )}
        {...props}
      >
        <span className="truncate max-w-[200px]">{label}</span>

        {onRemove && !disabled && (
          <Tooltip content={removeLabel ?? `Remove ${label}`} placement="top" delayMs={400}>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              aria-label={removeLabel ?? `Remove ${label}`}
              className={cn(
                "rounded-full flex-shrink-0 transition-colors",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lyra-border-focus",
                removeHoverStyles[variant]
              )}
            >
              <X className={cn("h-3 w-3", "block")} strokeWidth={2} aria-hidden="true" />
            </button>
          </Tooltip>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
