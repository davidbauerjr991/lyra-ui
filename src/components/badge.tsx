import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Badge ──
   Merges what used to be two separate components — `Chip` (a static
   rounded-rect pill in one of 10 accent color families) and `StatusBadge`
   (a small circular badge showing a count, a plain dot, or arbitrary
   content like an icon glyph) — into one `Badge` component with a `shape`
   discriminant, since both were fundamentally "a small colored label," just
   different shapes with different prop vocabularies:

     - `shape="pill"` (default) — the old `Chip`: `color` (10 accent
       families: slate/red/orange/yellow/lime/green/teal/blue/purple/pink)
       + `variant` ("subtle" soft-bg/strong-text or "solid" strong-bg/white
       text). Inline `style` resolves each accent color's CSS variables at
       render time (same reasoning as `Chart`'s canvas color note — plain
       DOM elements *can* resolve `var(--x)` directly via CSS, but the
       "soft"/"strong" pairing per color family only exists as CSS custom
       properties, not pre-baked Tailwind utility classes, so composing the
       pairing needs `style`, not a class lookup).
     - `shape="circle"` — the old `StatusBadge`: `variant` (6 semantic
       roles: default/info/success/warning/critical/neutral) + `size`
       (sm/md/lg diameter) + `dot` (plain circle, no content) + `count`
       (auto-formats "{max}+" past the cap) or arbitrary `children` (e.g.
       an icon glyph — see `AgentProfile`'s status-menu icons).

   Same `shape`-based discriminated-union pattern already used elsewhere in
   this repo for "one component, structurally different modes" (e.g.
   `Select`'s `multiple`, `Calendar`'s `mode`) — `variant` deliberately means
   different things per `shape` (pill tint vs. circle semantic role) rather
   than inventing separate prop names, since TypeScript narrows correctly
   off the `shape` discriminant either way. */

/* ── Pill shape (formerly Chip) ── */

export type BadgeColor =
  | "slate"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "pink";

/**
 * subtle — rounded-rect, soft tinted background, strong-color text
 * solid  — rounded-rect, strong filled background, white text
 */
export type BadgePillVariant = "subtle" | "solid";

/**
 * Exported (was module-private) so other components needing this exact
 * "soft-bg/strong-text" or "strong-bg/white-text" accent-color pairing —
 * without wanting the rest of the pill shape (rounded-rect, text padding,
 * etc.) — can reuse the same CSS-variable lookup instead of re-deriving
 * it. First reused by `InteractionNavItem`'s single-open-channel `circle`
 * badge (interaction-nav-item.tsx) to color that badge by channel type
 * (the same purple/teal/pink `CHANNEL_TYPE_TAG_VARIANT` mapping,
 * channel-row.tsx, already colors each channel's own `Tag` chip with) —
 * `circle` shape's own `variant` only covers 6 semantic roles, not the 10
 * accent color families, so an inline style override (via this same
 * helper) was the correct way to reach a channel-appropriate color there
 * without inventing a second, parallel color-resolution function.
 */
export function getPillInlineStyles(
  variant: BadgePillVariant,
  color: BadgeColor
): React.CSSProperties {
  const soft = `var(--lyra-color-accent-${color}-soft)`;
  const strong = `var(--lyra-color-accent-${color}-strong)`;

  switch (variant) {
    case "subtle":
      return { backgroundColor: soft, color: strong };
    case "solid":
      return { backgroundColor: strong, color: "var(--lyra-color-fg-on-primary)" };
  }
}

/* ── Circle shape (formerly StatusBadge) ── */

export type BadgeCircleVariant = "default" | "info" | "success" | "warning" | "critical" | "neutral";
export type BadgeSize = "sm" | "md" | "lg";

const circleBadgeVariants = cva(
  // Base: inline-flex, centered content, font
  "inline-flex items-center justify-center font-medium leading-none select-none shrink-0",
  {
    variants: {
      /** Color */
      variant: {
        default:  "bg-lyra-bg-primary text-lyra-fg-on-primary",
        info:     "bg-lyra-bg-active-strong text-lyra-fg-on-primary",
        success:  "bg-lyra-status-success-strong text-white",
        warning:  "bg-lyra-status-warning-strong text-white",
        critical: "bg-lyra-status-critical-strong text-white",
        neutral:  "bg-lyra-fg-secondary text-white",
      },
      /** Size — controls diameter and text size */
      size: {
        sm: "text-[10px] min-w-[16px] h-[16px] px-1 rounded-full",
        md: "text-[11px] min-w-[20px] h-[20px] px-1.5 rounded-full",
        lg: "text-[12px] min-w-[24px] h-[24px] px-2 rounded-full",
      },
      /** Dot — no text, fixed circle */
      dot: {
        true:  "",
        false: "",
      },
    },
    compoundVariants: [
      // Dot overrides: fixed square → circle, no padding
      { dot: true, size: "sm", className: "w-2 h-2 min-w-0 p-0 rounded-full" },
      { dot: true, size: "md", className: "w-3 h-3 min-w-0 p-0 rounded-full" },
      { dot: true, size: "lg", className: "w-4 h-4 min-w-0 p-0 rounded-full" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      dot: false,
    },
  }
);

/* ── Props (discriminated union on `shape`) ── */

interface BadgePillProps extends React.HTMLAttributes<HTMLSpanElement> {
  shape?: "pill";
  /** Accent color family. Default "slate". */
  color?: BadgeColor;
  /** Visual variant. Default "subtle". */
  variant?: BadgePillVariant;
}

interface BadgeCircleProps extends React.HTMLAttributes<HTMLSpanElement> {
  shape: "circle";
  /** Semantic color role. Default "default". */
  variant?: BadgeCircleVariant;
  /** Diameter / text size. Default "md". */
  size?: BadgeSize;
  /**
   * Numeric value to display. Numbers > `max` show as "{max}+".
   * Omit (or combine with `dot`) to render a plain badge / dot.
   */
  count?: number;
  /** Cap value before showing "+". Default 99. */
  max?: number;
  /**
   * Render as a plain dot with no text.
   * If both `dot` and `count` are provided, `dot` wins.
   */
  dot?: boolean;
}

export type BadgeShape = "pill" | "circle";
export type BadgeProps = BadgePillProps | BadgeCircleProps;

/* ── Component ── */

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  if (props.shape === "circle") {
    const {
      shape: _shape,
      variant = "default",
      size = "md",
      dot = false,
      count,
      max = 99,
      className,
      children,
      ...rest
    } = props;

    let label: React.ReactNode = children;
    if (!dot && count !== undefined) {
      label = count > max ? `${max}+` : String(count);
    }

    return (
      <span
        ref={ref}
        className={cn(circleBadgeVariants({ variant, size, dot }), className)}
        aria-label={dot ? undefined : (count !== undefined ? `${count > max ? `${max}+` : count} notifications` : undefined)}
        {...rest}
      >
        {!dot && label}
      </span>
    );
  }

  const {
    shape: _shape,
    color = "slate",
    variant = "subtle",
    className,
    children,
    ...rest
  } = props;

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center h-6 px-2 lyra-body-md-emphasis whitespace-nowrap rounded-lyra-md",
        className
      )}
      style={getPillInlineStyles(variant, color)}
      {...rest}
    >
      {children}
    </span>
  );
});
Badge.displayName = "Badge";

export { Badge };
