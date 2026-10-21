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
      "info-dotted":    "bg-lyra-bg-active-subtle border border-dashed border-lyra-border-active",

      /* ── Success (green) ── */
      "success-none":   "bg-lyra-status-success-subtle",
      "success-subtle": "bg-lyra-status-success-subtle border border-lyra-status-success-medium/30",
      "success-strong": "bg-lyra-status-success-subtle border border-lyra-status-success-strong",
      "success-dotted": "bg-lyra-status-success-subtle border border-dashed border-lyra-status-success-strong",

      /* ── Warning (amber) ── */
      "warning-none":   "bg-lyra-status-warning-subtle",
      "warning-subtle": "bg-lyra-status-warning-subtle border border-lyra-status-warning-strong/30",
      "warning-solid":  "bg-lyra-status-warning-subtle border border-lyra-status-warning-strong",
      "warning-dotted": "bg-lyra-status-warning-subtle border border-dashed border-lyra-status-warning-strong",

      /* ── Error / Critical (red) ── */
      "error-none":     "bg-lyra-status-critical-subtle",
      "error-subtle":   "bg-lyra-status-critical-subtle border border-lyra-state-pressed-critical-subtle",
      "error-strong":   "bg-lyra-status-critical-subtle border border-lyra-status-critical-strong",
      "error-dotted":   "bg-lyra-status-critical-subtle border border-dashed border-lyra-status-critical-strong",

      /* ── Purple (the AI accent) ── */
      "purple-subtle":  "bg-lyra-accent-purple-soft border border-[color-mix(in_srgb,var(--lyra-color-accent-purple-strong)_30%,transparent)]",

      /* ── Neutral ── */
      "neutral-none":   "bg-lyra-bg-surface-container-subtle",
      "neutral-subtle": "bg-lyra-bg-surface-container-subtle border border-lyra-border-subtle",
      "neutral-strong": "bg-lyra-bg-surface-container-subtle border border-lyra-border-soft",
      "neutral-dotted": "bg-lyra-bg-surface-container-subtle border border-dashed border-lyra-border-soft",

      /* ── Legacy aliases (kept for backwards compatibility) ── */
      info:             "bg-lyra-bg-active-subtle border border-lyra-bg-active-moderate",
      success:          "bg-lyra-status-success-subtle border border-lyra-status-success-medium/30",
      warning:          "bg-lyra-status-warning-subtle border border-dashed border-lyra-status-warning-strong",
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

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
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
    className, variant, radius,
    headerTitle, headerIcon, headerActions,
    headerTitleBadge, headerTopSlot, headerSubhead, headerBordered = false,
    headerTitleClassName, headerClassName, headerActionsWrap, headerTabs,
    footerActions, footerAlign, footerBordered = false, footerScrollShadow = false, footerScrollFade, footerClassName,
    children, ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant, radius }), className)}
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

export { Container, containerVariants };
export type { ContainerProps };
