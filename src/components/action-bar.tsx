import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { InfoIconSolid } from "./icons/info-icon-solid";
import { WarningIconSolid } from "./icons/warning-icon-solid";
import { ErrorIconSolid } from "./icons/error-icon-solid";

/* ── Variants ── */

const barVariants = cva(
  "flex w-full items-center gap-4 px-4 py-3 border-b",
  {
    variants: {
      variant: {
        info: "bg-lyra-bg-active-subtle border-lyra-bg-active-moderate",
        // `warning`/`error` opacity-modified borders — NOT
        // `border-lyra-status-*-strong/40`. That token resolves to a bare
        // `var(--lyra-color-status-*-strong)` reference (see
        // `tailwind-tokens.cjs`), not the `<r> <g> <b>`-component format
        // Tailwind's `/<alpha>` modifier needs to synthesize an opacity
        // variant; with a bare `var()` value Tailwind silently emits NO CSS
        // rule at all for the class (confirmed by inspecting the built
        // output — no `.border-lyra-status-warning-strong\/40` selector
        // exists anywhere in it). The border then falls back to the
        // browser's `currentColor` default, which is why this rendered as
        // a plain (near-white in dark mode) border instead of warning-
        // colored — this exact bug is what a follow-up report ("double
        // check the warning outline dark mode state - it is white - this
        // should still be warning color") caught in a consumer that
        // exposes this border. `color-mix()` is the fix already
        // established elsewhere in this library for the identical problem
        // (see contact-overview.tsx's Next Best Action/success-summary
        // borders) — it computes the alpha-blended color directly rather
        // than relying on Tailwind's opacity-modifier synthesis, so it
        // works with any color value regardless of format.
        warning:
          "bg-lyra-status-warning-subtle border-[color-mix(in_srgb,var(--lyra-color-status-warning-strong)_40%,transparent)]",
        error:
          "bg-lyra-status-critical-subtle border-[color-mix(in_srgb,var(--lyra-color-status-critical-strong)_40%,transparent)]",
      },
    },
    defaultVariants: { variant: "info" },
  }
);

const iconVariants = cva("h-5 w-5 shrink-0", {
  variants: {
    variant: {
      info:    "text-lyra-bg-primary",
      warning: "text-lyra-status-warning-strong",
      error:   "text-lyra-status-critical-strong",
    },
  },
  defaultVariants: { variant: "info" },
});

const titleVariants = cva("lyra-body-md-emphasis", {
  variants: {
    variant: {
      info:    "text-lyra-fg-default",
      warning: "text-lyra-status-warning-strong",
      error:   "text-lyra-status-critical-strong",
    },
  },
  defaultVariants: { variant: "info" },
});

/* ── Types ── */

export interface ActionBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof barVariants> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

/* ── Icon map ──
   Solid/filled glyphs (`*IconSolid`) — `fill="currentColor"` on the shape
   instead of a hardcoded hex, so the `text-lyra-status-*-strong` token
   class already applied below via `iconVariants({ variant })` actually
   reaches the icon's color (previously a no-op: the original `WarningIcon`/
   `InfoIcon`/`ErrorIcon` assets ignore `className` color and always paint
   their fixed light-mode hex, so this className had no visible effect and
   the icon never shifted in dark mode). Same pattern as `Toast` and
   `InlineNotification`. */
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  info:    (p) => <InfoIconSolid  {...p} />,
  warning: (p) => <WarningIconSolid {...p} />,
  error:   (p) => <ErrorIconSolid {...p} />,
};

/* ── Component ── */

const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  ({ className, variant = "info", title, description, actions, ...props }, ref) => {
    const Icon = IconMap[variant ?? "info"];
    return (
      <div
        ref={ref}
        className={cn(barVariants({ variant }), className)}
        role="status"
        aria-live="polite"
        {...props}
      >
        {/* Icon */}
        <Icon className={iconVariants({ variant })} />

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className={titleVariants({ variant })}>{title}</p>
          {description && (
            <p className="lyra-body-sm text-lyra-fg-secondary mt-0.5">{description}</p>
          )}
        </div>

        {/* Actions */}
        {actions && (
          <div className="flex items-center gap-2 shrink-0">
            {actions}
          </div>
        )}
      </div>
    );
  }
);
ActionBar.displayName = "ActionBar";

export { ActionBar };
