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
  | "pink"
  // Semantic status colors — resolve to the `status-*` tokens (the same
  // ones the circle shape's success/info/warning/critical roles use), not
  // the accent families. `critical` is the error color.
  | "success"
  | "info"
  | "warning"
  | "critical";

const STATUS_COLORS: ReadonlySet<BadgeColor> = new Set<BadgeColor>(["success", "info", "warning", "critical"]);

/**
 * subtle — rounded-rect, soft tinted background, strong-color text
 * solid  — rounded-rect, strong filled background, white text
 */
export type BadgePillVariant = "subtle" | "solid";
export type BadgeIconPosition = "left" | "right" | "both";

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
  const family = STATUS_COLORS.has(color) ? "status" : "accent";
  const soft = `var(--lyra-color-${family}-${color}-${family === "status" ? "subtle" : "soft"})`;
  const strong = `var(--lyra-color-${family}-${color}-strong)`;

  switch (variant) {
    case "subtle":
      return { backgroundColor: soft, color: strong };
    case "solid":
      // fg-inverse, not fg-on-primary: white in light mode (unchanged), but
      // near-black in dark mode, where every accent "-strong" stop turns
      // light — white text on those was 1.2–1.6:1 (WCAG 1.4.3 needs 4.5:1).
      return { backgroundColor: strong, color: "var(--lyra-color-fg-inverse)" };
  }
}

/* ── Circle shape (formerly StatusBadge) ── */

export type BadgeCircleVariant = "default" | "info" | "success" | "warning" | "critical" | "neutral";
export type BadgeCircleFill = "solid" | "subtle";
export type BadgeSize = "sm" | "md" | "lg";
/** Font size for the pill shape: 12px, 14px or 16px. Omit to keep the default
 *  (`lyra-body-md-emphasis`). Pill only — circle badges use `size`. */
export type BadgePillFontSize = 12 | 14 | 16;

const circleBadgeVariants = cva(
  // Base: inline-flex, centered content, font
  "inline-flex items-center justify-center font-medium leading-none select-none shrink-0",
  {
    variants: {
      /** Color — the semantic role; the actual classes come from `fill` below */
      variant: {
        default: "",
        info: "",
        success: "",
        warning: "",
        critical: "",
        neutral: "",
      },
      /** Fill — solid (strong bg, inverse text) or subtle (tinted bg, strong text) */
      fill: {
        solid: "",
        subtle: "",
      },
      /** Size — controls diameter and text size */
      size: {
        sm: "text-[10px] min-w-[16px] h-[16px] px-1 rounded-full",
        md: "text-[11px] min-w-[20px] h-[20px] px-1.5 rounded-full",
        lg: "text-[12px] min-w-[24px] h-[24px] px-2 rounded-full",
      },
      /** Bordered — 1px border (white on solid fills, role color on subtle) */
      bordered: {
        true: "border",
        false: "",
      },
      /** Dot — no text, fixed circle */
      dot: {
        true:  "",
        false: "",
      },
    },
    compoundVariants: [
      // Solid fills. `text-lyra-fg-inverse` (white in light mode, near-black
      // in dark) instead of white/fg-on-primary: these status fills turn
      // light in dark mode, where white text measured 1.5–3.1:1 (WCAG
      // 1.4.3). Light mode is unchanged. `default` keeps fg-on-primary —
      // its bg-primary stays dark blue in both themes.
      { fill: "solid", variant: "default",  className: "bg-lyra-bg-primary text-lyra-fg-on-primary" },
      { fill: "solid", variant: "info",     className: "bg-lyra-status-info-strong text-lyra-fg-inverse" },
      { fill: "solid", variant: "success",  className: "bg-lyra-status-success-strong text-lyra-fg-inverse" },
      { fill: "solid", variant: "warning",  className: "bg-lyra-status-warning-strong text-lyra-fg-inverse" },
      { fill: "solid", variant: "critical", className: "bg-lyra-status-critical-strong text-lyra-fg-inverse" },
      { fill: "solid", variant: "neutral",  className: "bg-lyra-fg-secondary text-lyra-fg-inverse" },
      // Subtle fills: tinted background with the role's strong text.
      { fill: "subtle", variant: "default",  className: "bg-lyra-bg-active-subtle text-lyra-fg-active-strong" },
      { fill: "subtle", variant: "info",     className: "bg-lyra-status-info-subtle text-lyra-status-info-strong" },
      { fill: "subtle", variant: "success",  className: "bg-lyra-status-success-subtle text-lyra-status-success-strong" },
      { fill: "subtle", variant: "warning",  className: "bg-lyra-status-warning-subtle text-lyra-status-warning-strong" },
      { fill: "subtle", variant: "critical", className: "bg-lyra-status-critical-subtle text-lyra-status-critical-strong" },
      { fill: "subtle", variant: "neutral",  className: "bg-lyra-state-hover text-lyra-fg-secondary" },
      // Bordered: a solid fill gets a white border (separates it from
      // whatever it's stacked on); a subtle fill gets the role's *solid*
      // color as its border.
      { bordered: true, fill: "solid", className: "border-white" },
      { bordered: true, fill: "subtle", variant: "default", className: "border-lyra-bg-primary" },
      { bordered: true, fill: "subtle", variant: "info", className: "border-lyra-status-info-strong" },
      { bordered: true, fill: "subtle", variant: "success", className: "border-lyra-status-success-strong" },
      { bordered: true, fill: "subtle", variant: "warning", className: "border-lyra-status-warning-strong" },
      { bordered: true, fill: "subtle", variant: "critical", className: "border-lyra-status-critical-strong" },
      { bordered: true, fill: "subtle", variant: "neutral", className: "border-lyra-fg-secondary" },
      // Dot overrides: fixed square → circle, no padding
      { dot: true, size: "sm", className: "w-2 h-2 min-w-0 p-0 rounded-full" },
      { dot: true, size: "md", className: "w-3 h-3 min-w-0 p-0 rounded-full" },
      { dot: true, size: "lg", className: "w-4 h-4 min-w-0 p-0 rounded-full" },
    ],
    defaultVariants: {
      variant: "default",
      fill: "solid",
      bordered: false,
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
  /** Optional icon (e.g. a 14px lucide icon). Decorative: hidden from screen readers. */
  icon?: React.ReactNode;
  /** Where `icon` goes: before the label, after it, or on both sides. Default "left". */
  iconPosition?: BadgeIconPosition;
  /** Pill font size in px (12, 14 or 16). Default: the standard pill text style. */
  fontSize?: BadgePillFontSize;
}

interface BadgeCircleProps extends React.HTMLAttributes<HTMLSpanElement> {
  shape: "circle";
  /** Semantic color role. Default "default". */
  variant?: BadgeCircleVariant;
  /** Fill style — "solid" (default) or "subtle" (tinted background). */
  fill?: BadgeCircleFill;
  /** Adds a 1px border: white on a solid fill, the role's solid color on a subtle fill. Default false. */
  bordered?: boolean;
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
  /**
   * Pulse a `dot` badge: a ring of the dot's own color radiates outward and fades, on a loop — the "new
   * assignment" indicator look (`InteractionNavItem`). Ignored unless `dot` is on. Hidden for people who
   * prefer reduced motion. Default false.
   */
  pulse?: boolean;
  /**
   * Optional icon next to a word or number (e.g. a 12px lucide icon, or a small `ProgressBar shape="ring"`).
   * Decorative: hidden from screen readers. Ignored for a `dot`. For a badge that is only an icon glyph, pass
   * the glyph as `children` instead.
   */
  icon?: React.ReactNode;
  /** Where `icon` goes: before the text, after it, or on both sides. Default "left". */
  iconPosition?: BadgeIconPosition;
}

export type BadgeShape = "pill" | "circle";
export type BadgeProps = BadgePillProps | BadgeCircleProps;

/* ── Component ── */

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  if (props.shape === "circle") {
    const {
      shape: _shape,
      variant = "default",
      fill = "solid",
      bordered = false,
      size = "md",
      dot = false,
      pulse = false,
      icon: circleIcon,
      iconPosition: circleIconPosition = "left",
      count,
      max = 99,
      className,
      children,
      // Pulled out of `rest` (rather than left to land there via the
      // spread below) so the default label computed just below and any
      // caller-supplied override can be resolved into one single value —
      // needed to decide `role` as well as `aria-label` itself, not just
      // to pick which one wins.
      "aria-label": ariaLabelProp,
      ...rest
    } = props;

    let label: React.ReactNode = children;
    if (!dot && count !== undefined) {
      label = count > max ? `${max}+` : String(count);
    }

    // Caller-supplied `aria-label` (e.g. `InteractionNavItem`'s single-
    // channel-type badge, interaction-nav-item.tsx) wins over the default
    // "{n} notifications" reading; a `dot` badge never gets one (nothing to
    // announce).
    const resolvedAriaLabel =
      ariaLabelProp ?? (dot ? undefined : count !== undefined ? `${count > max ? `${max}+` : count} notifications` : undefined);

    // A glyph beside the text. Sized by the badge's own size; a non-svg icon (a ring) sizes itself.
    const circleIconEl =
      circleIcon && !dot ? (
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex shrink-0",
            size === "sm" ? "[&>svg]:h-2.5 [&>svg]:w-2.5" : size === "lg" ? "[&>svg]:h-3.5 [&>svg]:w-3.5" : "[&>svg]:h-3 [&>svg]:w-3"
          )}
        >
          {circleIcon}
        </span>
      ) : null;

    return (
      <span
        ref={ref}
        className={cn(circleBadgeVariants({ variant, fill, bordered, size, dot }), dot && pulse && "relative", circleIconEl && "gap-1", className)}
        aria-label={resolvedAriaLabel}
        // `role="img"` only when there's an actual label to announce — a
        // bare, role-less `<span>` carrying `aria-label` is exactly what
        // axe-core's `aria-allowed-attr` check flags as "not well
        // supported" (some screen readers ignore `aria-label` on an
        // element with no ARIA role at all). Same convention this repo
        // already uses for a non-text element that exists purely to carry
        // an `aria-label` (`PlaceholderQrCode`'s `role="img"`,
        // login-card-pair-authenticator.tsx). A `dot` badge or a plain
        // icon-glyph badge with no `aria-label` at all stays role-less,
        // unchanged — `role="img"` with nothing to announce would be worse
        // than no role.
        role={resolvedAriaLabel ? "img" : undefined}
        {...rest}
      >
        {circleIconEl && circleIconPosition !== "right" && circleIconEl}
        {!dot && label}
        {circleIconEl && circleIconPosition !== "left" && circleIconEl}
        {dot && pulse && (
          // The ring copies the dot's own background (`bg-inherit`) so it always matches the dot, whatever its
          // variant, fill or a caller's color override, and is scaled up and faded by Tailwind's `animate-ping`.
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-inherit opacity-60 motion-reduce:hidden" />
        )}
      </span>
    );
  }

  const {
    shape: _shape,
    color = "slate",
    variant = "subtle",
    icon,
    iconPosition = "left",
    fontSize,
    className,
    children,
    style,
    ...rest
  } = props;
  const iconEl = icon ? (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0",
        // Icon matches the pill's font size (12px font = 12px icon); default stays 14px.
        fontSize === 12
          ? "[&>svg]:h-3 [&>svg]:w-3"
          : fontSize === 16
          ? "[&>svg]:h-4 [&>svg]:w-4"
          : "[&>svg]:h-3.5 [&>svg]:w-3.5"
      )}
    >
      {icon}
    </span>
  ) : null;

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center px-2 lyra-body-md-emphasis whitespace-nowrap rounded-lyra-md",
        fontSize === 16 ? "h-7" : "h-6",
        iconEl && "gap-1",
        className
      )}
      style={{ ...getPillInlineStyles(variant, color), ...(fontSize ? { fontSize: `${fontSize}px` } : null), ...style }}
      {...rest}
    >
      {iconEl && iconPosition !== "right" && iconEl}
      {children}
      {iconEl && iconPosition !== "left" && iconEl}
    </span>
  );
});
Badge.displayName = "Badge";

export { Badge };
