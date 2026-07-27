import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

/**
 * "purple"/"teal"/"pink" are the three fixed accent-hue variants — not
 * status colors like the rest of this union, but a categorical color set
 * for distinguishing same-weight *types* of thing that don't have a
 * success/warning/critical reading (the motivating case: Voice/Chat/Email
 * channel-type tags — see `channelTypeTagVariant` in CONTRIBUTING.md's
 * "Channel type colors" convention). Pick from these three rather than
 * inventing a fourth accent hue for a new categorical grouping — the
 * `lyra-accent-*` token set has more hues available (slate/red/orange/
 * yellow/lime/green/blue), but Tag only exposes the three actually in use
 * so call sites can't drift into an arbitrary, undocumented pairing.
 */
export type TagVariant = "default" | "success" | "warning" | "critical" | "info" | "neutral" | "purple" | "teal" | "pink";
export type TagSize = "sm";

export type TagShape = "default" | "pill";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tag label */
  label: string;
  /** Visual variant */
  variant?: TagVariant;
  /** Shape — "default" uses rounded-xs corners, "pill" uses 50px border-radius */
  shape?: TagShape;
  /** Optional leading icon, rendered before the label — e.g. a channel-type glyph (`Phone`/`MessageCircle`/`Mail`) on a "purple"/"teal"/"pink" channel tag. Sized/colored to match the label text; pass a Lucide icon element at `h-3 w-3` (matches the `X` remove glyph's own size). */
  icon?: React.ReactNode;
  /** Show a remove button — calls onRemove when clicked */
  onRemove?: () => void;
  /** Accessible label for the remove button (default: "Remove {label}") */
  removeLabel?: string;
  /** Disable the tag and remove button */
  disabled?: boolean;
}

/* ── CVA definitions ── */

const tagVariants = cva(
  "inline-flex items-center border transition-colors px-1.5 py-0.5 lyra-body-sm gap-0.5",
  {
    variants: {
      /* Note: border colors use a CSS color-mix() Tailwind arbitrary value
         rather than Tailwind's built-in slash opacity-modifier syntax (e.g.
         border-lyra-border-active at 30 percent). Tailwind can only generate
         opacity-modified utilities for theme colors defined as raw RGB/HSL
         channel triples; our design tokens are CSS custom properties holding
         full hex/rgba strings (see lyra-tokens.css), so a slash-opacity
         modifier on them silently produces no matching CSS rule at all and
         the border falls back to Tailwind's Preflight default (#e5e7eb gray)
         — which is why Tags previously rendered with a washed-out gray border
         instead of a tinted one. color-mix() works with any color value and
         has broad modern browser support. */
      variant: {
        default:  "bg-lyra-bg-active-subtle text-lyra-fg-active-strong border-[color-mix(in_srgb,var(--lyra-color-border-active)_30%,transparent)]",
        success:  "bg-lyra-status-success-subtle text-lyra-status-success-strong border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_30%,transparent)]",
        warning:  "bg-lyra-status-warning-subtle text-lyra-status-warning-strong border-[color-mix(in_srgb,var(--lyra-color-status-warning-strong)_30%,transparent)]",
        critical: "bg-lyra-status-critical-subtle text-lyra-status-critical-strong border-[color-mix(in_srgb,var(--lyra-color-status-critical-strong)_30%,transparent)]",
        info:     "bg-lyra-status-info-subtle text-lyra-status-info-strong border-[color-mix(in_srgb,var(--lyra-color-status-info-strong)_30%,transparent)]",
        neutral:  "bg-lyra-bg-surface-canvas text-lyra-fg-secondary border-lyra-border-subtle",
        purple:   "bg-lyra-accent-purple-soft text-lyra-accent-purple-strong border-[color-mix(in_srgb,var(--lyra-color-accent-purple-strong)_30%,transparent)]",
        teal:     "bg-lyra-accent-teal-soft text-lyra-accent-teal-strong border-[color-mix(in_srgb,var(--lyra-color-accent-teal-strong)_30%,transparent)]",
        pink:     "bg-lyra-accent-pink-soft text-lyra-accent-pink-strong border-[color-mix(in_srgb,var(--lyra-color-accent-pink-strong)_30%,transparent)]",
      },
      shape: {
        default: "rounded-lyra-xs",
        pill:    "rounded-[50px]",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
    },
  }
);

const tagRemoveHoverVariants = cva("", {
  variants: {
    variant: {
      default:  "hover:bg-lyra-state-hover-active-subtle",
      success:  "hover:bg-lyra-status-success-subtle",
      warning:  "hover:bg-lyra-status-warning-subtle",
      critical: "hover:bg-lyra-state-hover-critical-subtle",
      info:     "hover:bg-lyra-status-info-subtle",
      neutral:  "hover:bg-lyra-state-hover",
      purple:   "hover:bg-lyra-accent-purple-soft",
      teal:     "hover:bg-lyra-accent-teal-soft",
      pink:     "hover:bg-lyra-accent-pink-soft",
    },
  },
  defaultVariants: { variant: "default" },
});

/* ── Component ── */

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      variant = "default",
      shape = "default",
      icon,
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
          tagVariants({ variant, shape, className }),
          disabled && "bg-lyra-bg-disabled text-lyra-fg-disabled border-lyra-border-disabled opacity-60"
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0 [&>svg]:h-3 [&>svg]:w-3" aria-hidden="true">
            {icon}
          </span>
        )}
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
                tagRemoveHoverVariants({ variant })
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

export { Tag, tagVariants };
