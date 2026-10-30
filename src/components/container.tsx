import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ContainerHeaderSlot } from "./container-header";
import { ContainerFooterSlot, type ContainerFooterAlign } from "./container-footer";
import { cn } from "../lib/utils";

/*
 * Container variant naming convention: {color}-{border-style}
 *
 * Colors  : base | overlay | info | success | warning | error | neutral
 * Borders : none | subtle | strong | dotted
 *
 * Special surfaces (popover, modal) keep their own names.
 */
const containerVariants = cva("", {
  variants: {
    /** Corner radius, from the radius tokens. Default "lg" (12px). */
    radius: {
      none: "rounded-none",
      xs: "rounded-lyra-xs",
      sm: "rounded-lyra-sm",
      md: "rounded-lyra-md",
      lg: "rounded-lyra-lg",
      xl: "rounded-lyra-xl",
    },
    variant: {
      /* ── Base / overlay surfaces ── */
      default:          "bg-lyra-bg-surface-base border border-lyra-border-subtle shadow-sm",
      popover:          "bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg",
      modal:            "bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-xl",

      /* ── Info (blue) ── */
      "info-none":      "bg-lyra-bg-active-subtle",
      "info-subtle":    "bg-lyra-bg-active-subtle border border-lyra-bg-active-moderate",
      "info-strong":    "bg-lyra-bg-active-subtle border border-lyra-border-active",
      "info-dotted":    "bg-lyra-bg-active-subtle border border-dotted border-lyra-border-active",

      /* ── Success (green) ── */
      "success-none":   "bg-lyra-status-success-subtle",
      "success-subtle": "bg-lyra-status-success-subtle border border-lyra-status-success-medium/30",
      "success-strong": "bg-lyra-status-success-subtle border border-lyra-status-success-strong",
      "success-dotted": "bg-lyra-status-success-subtle border border-dotted border-lyra-status-success-strong",

      /* ── Warning (amber) ── */
      "warning-none":   "bg-lyra-status-warning-subtle",
      "warning-subtle": "bg-lyra-status-warning-subtle border border-lyra-status-warning-strong/30",
      "warning-solid":  "bg-lyra-status-warning-subtle border border-lyra-status-warning-strong",
      "warning-dotted": "bg-lyra-status-warning-subtle border border-dotted border-lyra-status-warning-strong",

      /* ── Error / Critical (red) ── */
      "error-none":     "bg-lyra-status-critical-subtle",
      "error-subtle":   "bg-lyra-status-critical-subtle border border-lyra-state-pressed-critical-subtle",
      "error-strong":   "bg-lyra-status-critical-subtle border border-lyra-status-critical-strong",
      "error-dotted":   "bg-lyra-status-critical-subtle border border-dotted border-lyra-status-critical-strong",

      /* ── Purple (the AI accent) ── */
      "purple-subtle":  "bg-lyra-accent-purple-soft border border-[color-mix(in_srgb,var(--lyra-color-accent-purple-strong)_30%,transparent)]",

      /* ── Neutral ── */
      "neutral-none":   "bg-lyra-bg-surface-container-subtle",
      "neutral-subtle": "bg-lyra-bg-surface-container-subtle border border-lyra-border-subtle",
      "neutral-strong": "bg-lyra-bg-surface-container-subtle border border-lyra-border-soft",
      "neutral-dotted": "bg-lyra-bg-surface-container-subtle border border-dotted border-lyra-border-soft",

      /* ── Legacy aliases (kept for backwards compatibility) ── */
      info:             "bg-lyra-bg-active-subtle border border-lyra-bg-active-moderate",
      success:          "bg-lyra-status-success-subtle border border-lyra-status-success-medium/30",
      warning:          "bg-lyra-status-warning-subtle border border-dotted border-lyra-status-warning-strong",
      critical:         "bg-lyra-status-critical-subtle border border-lyra-state-pressed-critical-subtle",
      "neutral-flat":   "bg-lyra-bg-surface-container-subtle",
      "neutral-card":   "bg-lyra-bg-surface-container-subtle border border-lyra-border-subtle",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "lg",
  },
});

/* ── Borders and accent bar ──
   `borders` picks which sides draw the variant's border; `accent` adds a thick bar on one side in the
   variant's strong color. Both are also used by `InteractionNavItem` (see `containerBorderClasses`). */

type ContainerBorderSide = "top" | "right" | "bottom" | "left";
/** "all": the variant's own border (default). "none": no border. Or a list of the sides that keep it. */
type ContainerBorders = "all" | "none" | ContainerBorderSide[];
type ContainerAccent = "none" | "all" | ContainerBorderSide;

const BORDER_SIDE_CLASS: Record<ContainerBorderSide, string> = {
  top: "border-t",
  right: "border-r",
  bottom: "border-b",
  left: "border-l",
};

/** Classes that limit the border to some sides. "all" returns "" so the variant's own border stays (a borderless variant stays borderless). */
function containerBorderClasses(borders: ContainerBorders = "all"): string {
  if (borders === "all") return "";
  const sides = borders === "none" ? [] : borders;
  if (sides.length >= 4) return "";
  return cn("border-0", sides.map((side) => BORDER_SIDE_CLASS[side]));
}

type ContainerAccentSide = Exclude<ContainerAccent, "none">;

/* Accent: 4px on one side, or on all four ("all"). Static strings so Tailwind keeps them. */
const ACCENT_WIDTH: Record<ContainerAccentSide, string> = { all: "border-4", top: "border-t-4", right: "border-r-4", bottom: "border-b-4", left: "border-l-4" };
const ACCENT_COLOR: Record<ContainerAccentSide, Record<"active" | "success" | "warning" | "critical" | "purple" | "neutral", string>> = {
  all: { active: "border-lyra-border-active", success: "border-lyra-status-success-strong", warning: "border-lyra-status-warning-strong", critical: "border-lyra-status-critical-strong", purple: "border-lyra-accent-purple-strong", neutral: "border-lyra-border-strong" },
  top: { active: "border-t-lyra-border-active", success: "border-t-lyra-status-success-strong", warning: "border-t-lyra-status-warning-strong", critical: "border-t-lyra-status-critical-strong", purple: "border-t-lyra-accent-purple-strong", neutral: "border-t-lyra-border-strong" },
  right: { active: "border-r-lyra-border-active", success: "border-r-lyra-status-success-strong", warning: "border-r-lyra-status-warning-strong", critical: "border-r-lyra-status-critical-strong", purple: "border-r-lyra-accent-purple-strong", neutral: "border-r-lyra-border-strong" },
  bottom: { active: "border-b-lyra-border-active", success: "border-b-lyra-status-success-strong", warning: "border-b-lyra-status-warning-strong", critical: "border-b-lyra-status-critical-strong", purple: "border-b-lyra-accent-purple-strong", neutral: "border-b-lyra-border-strong" },
  left: { active: "border-l-lyra-border-active", success: "border-l-lyra-status-success-strong", warning: "border-l-lyra-status-warning-strong", critical: "border-l-lyra-status-critical-strong", purple: "border-l-lyra-accent-purple-strong", neutral: "border-l-lyra-border-strong" },
};

function accentTone(variant?: string | null): "active" | "success" | "warning" | "critical" | "purple" | "neutral" {
  const v = variant ?? "default";
  if (v.startsWith("success")) return "success";
  if (v.startsWith("warning")) return "warning";
  if (v.startsWith("error") || v === "critical") return "critical";
  if (v.startsWith("purple")) return "purple";
  if (v.startsWith("neutral")) return "neutral";
  return "active";
}

/* ── Rounded corners ──
   `corners` picks which corners keep the `radius` size; the rest are square. tailwind-merge doesn't know the
   `rounded-lyra-*` names, so a `rounded-none` stacked on the variant's own rounded class would not replace it.
   Instead, when corners are restricted the variant is built with `radius: "none"` and the kept corners get
   their own per-corner class from this static table (so Tailwind keeps them). */
type ContainerCorner = "top-left" | "top-right" | "bottom-right" | "bottom-left";
/** "all": every corner at the `radius` size (default). "none": all square. Or a list of the corners that keep it. */
type ContainerCorners = "all" | "none" | ContainerCorner[];
type ContainerRadiusName = "xs" | "sm" | "md" | "lg" | "xl";

const CORNER_CLASS: Record<ContainerRadiusName, Record<ContainerCorner, string>> = {
  xs: { "top-left": "rounded-tl-lyra-xs", "top-right": "rounded-tr-lyra-xs", "bottom-right": "rounded-br-lyra-xs", "bottom-left": "rounded-bl-lyra-xs" },
  sm: { "top-left": "rounded-tl-lyra-sm", "top-right": "rounded-tr-lyra-sm", "bottom-right": "rounded-br-lyra-sm", "bottom-left": "rounded-bl-lyra-sm" },
  md: { "top-left": "rounded-tl-lyra-md", "top-right": "rounded-tr-lyra-md", "bottom-right": "rounded-br-lyra-md", "bottom-left": "rounded-bl-lyra-md" },
  lg: { "top-left": "rounded-tl-lyra-lg", "top-right": "rounded-tr-lyra-lg", "bottom-right": "rounded-br-lyra-lg", "bottom-left": "rounded-bl-lyra-lg" },
  xl: { "top-left": "rounded-tl-lyra-xl", "top-right": "rounded-tr-lyra-xl", "bottom-right": "rounded-br-lyra-xl", "bottom-left": "rounded-bl-lyra-xl" },
};

/** True when `corners` limits rounding to some corners (so the variant must be built with `radius: "none"`). */
function containerCornersRestricted(corners: ContainerCorners = "all"): boolean {
  return corners !== "all" && !(Array.isArray(corners) && corners.length >= 4);
}

/** Per-corner classes for the corners that keep the `radius` size. "" when corners aren't restricted or `radius` is "none". */
function cornerClasses(corners: ContainerCorners = "all", radius: ContainerRadiusName | "none" | null = "lg"): string {
  if (!containerCornersRestricted(corners) || corners === "none" || radius === "none") return "";
  return cn((corners as ContainerCorner[]).map((corner) => CORNER_CLASS[radius ?? "lg"][corner]));
}

/* ── Border style ──
   Overrides the variant's own border style. Applied after the variant classes so tailwind-merge drops the
   variant's own border-style class. */
type ContainerBorderStyle = "solid" | "dashed" | "dotted";
const BORDER_STYLE_CLASS: Record<ContainerBorderStyle, string> = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

/* ── Gradient background ──
   A semantic tone at the top fading to the surface (the `--lyra-gradient-*` tokens). The tokens carry their own
   opaque surface layer, so it covers the variant's background color; the variant still sets the border. */
type ContainerBackground =
  | "gradient-brand"
  | "gradient-info"
  | "gradient-success"
  | "gradient-warning"
  | "gradient-critical"
  | "gradient-neutral";

/* Static strings so Tailwind keeps them. */
const BACKGROUND_CLASS: Record<ContainerBackground, string> = {
  "gradient-brand": "bg-[image:var(--lyra-gradient-brand)]",
  "gradient-info": "bg-[image:var(--lyra-gradient-info)]",
  "gradient-success": "bg-[image:var(--lyra-gradient-success)]",
  "gradient-warning": "bg-[image:var(--lyra-gradient-warning)]",
  "gradient-critical": "bg-[image:var(--lyra-gradient-critical)]",
  "gradient-neutral": "bg-[image:var(--lyra-gradient-neutral)]",
};

/** Classes for an accent bar on `side`, colored to match `variant`. */
function containerAccentClasses(side: ContainerAccent = "none", variant?: string | null): string {
  if (side === "none") return "";
  return cn(ACCENT_WIDTH[side], ACCENT_COLOR[side][accentTone(variant)]);
}

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /**
   * Which sides draw the variant's border: "all" (default), "none", or a list such as `["top", "bottom"]`.
   * Needs a variant that has a border (`default`, `*-subtle`, `*-strong`…); the `*-none` variants have none to show.
   */
  borders?: ContainerBorders;
  /**
   * Which corners keep the `radius` size: "all" (default), "none" (square), or a list such as `["top-left", "top-right"]`.
   * The corners not listed are square.
   */
  corners?: ContainerCorners;
  /**
   * The border's line style. Unset keeps the variant's own (the `-dotted` variants draw dotted, the rest solid).
   * Only shows on a variant that has a border.
   */
  borderStyle?: ContainerBorderStyle;
  /**
   * A thick (4px) bar on one side, in the variant's strong color ("left" for a leading accent), or "all" for the
   * same 4px and color on all four sides. It follows the corner radius and sits on top of `borders`, so
   * `borders="none"` with `accent="left"` is a bar alone; "all" replaces `borders` entirely. `borderStyle` applies
   * to the accent too.
   */
  accent?: ContainerAccent;
  /**
   * A gradient background: the named semantic tone at the top fading to the surface at the bottom (white in light,
   * the surface in dark), from the `--lyra-gradient-*` tokens. Covers the variant's own background color; the variant still sets the border.
   */
  background?: ContainerBackground;
  /**
   * Header title — renders a `ContainerHeader` when this or any other
   * `header*` prop below is present. Optional on its own (not just when
   * every `header*` prop is absent): an icon-only or tag-only header with
   * no title text is valid — see `ContainerHeader`'s `title` doc comment.
   */
  headerTitle?: string;
  /** Icon shown to the left of the title */
  headerIcon?: React.ReactNode;
  /** Actions rendered on the right of the header */
  headerActions?: React.ReactNode;
  /** Badge/tag shown inline immediately after the title */
  headerTitleBadge?: React.ReactNode;
  /** Rendered on its own line above the icon+title row — e.g. a status `Tag` ("Anomaly", "Alert"). See `ContainerHeader`'s `topSlot`. */
  headerTopSlot?: React.ReactNode;
  /** Subtitle shown below the title in body-sm secondary */
  headerSubhead?: string;
  /** Show a dividing border below the header (default: false) */
  headerBordered?: boolean;
  /** Typography class for the header title (default: "lyra-heading-md", set on ContainerHeader) */
  headerTitleClassName?: string;
  /** Additional className merged onto the header's own wrapper div — e.g. to zero its padding (`"px-0 py-0"`) when a consumer is rendering a chromeless/bare card. */
  headerClassName?: string;
  /** Forwarded to `ContainerHeader`'s `actionsWrap` — see that prop's own doc comment (container-header.tsx) for when a header's `headerActions` needs this. */
  headerActionsWrap?: boolean;
  /** Forwarded to `ContainerHeader`'s `tabs` — a `TabList` (or similar, e.g. a second `SearchInput` copy — see that prop's own doc comment) rendered on its own full-width row below the title, outside `children`. */
  headerTabs?: React.ReactNode;
  /** Footer content (normally `Button`s) — renders a `ContainerFooter` after `children` when set. */
  footerActions?: React.ReactNode;
  /** Where the footer's buttons sit: `"left"`, `"right"` (default) or `"full"` (every button stretches equally). See `ContainerFooter`'s `align`. */
  footerAlign?: ContainerFooterAlign;
  /** Show a border along the top edge of the footer (default: false) */
  footerBordered?: boolean;
  /** Forwarded to `ContainerFooter`'s `scrollShadow` — shadow above the footer while content scrolls behind it (default: false). */
  footerScrollShadow?: boolean;
  /** Fade the content out into the footer while it scrolls behind it, instead of a hard edge. Forwarded to `ContainerFooter`'s `scrollFade`; when on, `footerScrollShadow` and `footerBordered` are ignored (default: false). */
  footerScrollFade?: boolean;
  /** Additional className merged onto the footer's own wrapper div. */
  footerClassName?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({
    className, variant, radius, corners, borderStyle, borders, accent, background,
    headerTitle, headerIcon, headerActions,
    headerTitleBadge, headerTopSlot, headerSubhead, headerBordered = false,
    headerTitleClassName, headerClassName, headerActionsWrap, headerTabs,
    footerActions, footerAlign, footerBordered = false, footerScrollShadow = false, footerScrollFade, footerClassName,
    children, ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({ variant, radius: containerCornersRestricted(corners) ? "none" : radius }),
          cornerClasses(corners, radius),
          containerBorderClasses(borders),
          borderStyle && BORDER_STYLE_CLASS[borderStyle],
          containerAccentClasses(accent, variant),
          background && BACKGROUND_CLASS[background],
          className,
        )}
        {...props}
      >
        <ContainerHeaderSlot
          title={headerTitle}
          icon={headerIcon}
          actions={headerActions}
          titleBadge={headerTitleBadge}
          topSlot={headerTopSlot}
          subhead={headerSubhead}
          bordered={headerBordered}
          className={headerClassName}
          actionsWrap={headerActionsWrap}
          tabs={headerTabs}
          {...(headerTitleClassName ? { titleClassName: headerTitleClassName } : {})}
        />
        {children}
        <ContainerFooterSlot
          content={footerActions}
          align={footerAlign}
          bordered={footerBordered}
          scrollShadow={footerScrollShadow}
          scrollFade={footerScrollFade}
          className={footerClassName}
          defaultScrollShadow={false}
        />
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants, containerBorderClasses, containerAccentClasses };
export type { ContainerProps, ContainerBorders, ContainerBorderSide, ContainerAccent, ContainerBackground, ContainerCorner, ContainerCorners, ContainerBorderStyle };
