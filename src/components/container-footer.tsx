import * as React from "react";
import { cn } from "../lib/utils";

/* ── Types ── */

export type ContainerFooterAlign = "left" | "right" | "full";

export interface ContainerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Footer content — normally one or more `Button`s. Rendered in a row with
   * an 8px gap; how that row sits in the footer is set by `align`.
   */
  actions?: React.ReactNode;
  /**
   * Where the buttons sit in the footer:
   * - `"left"` — grouped at the start edge.
   * - `"right"` (default) — grouped at the end edge, the usual dialog/card
   *   convention for a primary action.
   * - `"full"` — every button stretches equally to fill the row (a single
   *   button becomes one full-width button).
   */
  align?: ContainerFooterAlign;
  /** Show a border along the top edge of the footer (default: false) */
  bordered?: boolean;
  /**
   * Show a soft shadow above the footer while content is scrolled behind it
   * (default: false). Same mechanism `PanelFooter` uses: a zero-height
   * sentinel sits just above the footer, and when it scrolls out of view
   * (hidden under scrolled content) the footer is elevated. Only meaningful
   * when the footer is pinned at the bottom of a scrolling region (e.g.
   * `sticky bottom-0` with a background such as `bg-inherit`); in a footer
   * that simply follows its content the sentinel is always visible and no
   * shadow shows. Adds a 1px sentinel element above the footer while on.
   */
  scrollShadow?: boolean;
  /**
   * Fade the content out into the footer while it is scrolled behind it (default: false). A short
   * gradient sits just above the footer and goes from transparent to the surface color, so rows
   * dissolve instead of being cut off by a hard edge. Same trigger as `scrollShadow` (shown only
   * while content is hidden under the footer), but they are alternatives: when `scrollFade` is
   * on, `scrollShadow` and `bordered` are ignored. The fade ends in
   * `--lyra-footer-fade-color` (default: the base surface color); set that variable, e.g. through
   * `className`, when the footer sits on another surface. Like `scrollShadow`, it only matters when
   * the footer is pinned at the bottom of a scrolling region.
   */
  scrollFade?: boolean;
}

/* Literal class strings so Tailwind's content scanner can find each one. */
const ALIGN_CLASSES: Record<ContainerFooterAlign, string> = {
  left: "justify-start",
  right: "justify-end",
  full: "[&>*]:flex-1",
};

/* ── Component ── */

/**
 * Footer row for a `Container` (mirror of `ContainerHeader`). `Container`
 * renders this itself when any `footer*` prop is set; it can also be used
 * standalone at the bottom of any surface.
 */
const ContainerFooter = React.forwardRef<HTMLDivElement, ContainerFooterProps>(
  ({ className, actions, align = "right", bordered: borderedProp = false, scrollShadow: scrollShadowProp = false, scrollFade = false, children, ...props }, ref) => {
    // Fade and shadow are alternatives; fade wins.
    const scrollShadow = scrollShadowProp && !scrollFade;
    // The fade replaces the hard edge, so a top border is ignored while it is on.
    const bordered = borderedProp && !scrollFade;
    const sentinelRef = React.useRef<HTMLDivElement>(null);
    const [elevated, setElevated] = React.useState(false);

    // Watch the sentinel just above the footer; when it is hidden under
    // scrolled content, elevate the footer with a shadow.
    React.useEffect(() => {
      const el = sentinelRef.current;
      if (!(scrollShadow || scrollFade) || !el) {
        setElevated(false);
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => setElevated(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, [scrollShadow, scrollFade]);

    const footer = (
      <div
        ref={ref}
        className={cn(
          "flex shrink-0 items-center gap-2 px-4 py-3",
          // The fade is positioned against the footer; `className` (e.g. `sticky`) can still override this.
          scrollFade && "relative",
          ALIGN_CLASSES[align],
          bordered && "border-t border-lyra-border-subtle",
          scrollShadow && "transition-shadow duration-150",
          scrollShadow && elevated && "shadow-[0_-4px_12px_0_rgba(0,0,0,0.08)]",
          className
        )}
        {...props}
      >
        {scrollFade && (
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-full h-6 transition-opacity duration-150",
              "bg-gradient-to-t from-[var(--lyra-footer-fade-color,var(--lyra-color-bg-surface-base))] to-transparent",
              elevated ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        {actions}
        {children}
      </div>
    );

    return scrollShadow || scrollFade ? (
      <>
        {/* Zero-height sentinel — sits just above the footer in the scroll container */}
        <div ref={sentinelRef} className="shrink-0 h-px" aria-hidden="true" />
        {footer}
      </>
    ) : (
      footer
    );
  }
);
ContainerFooter.displayName = "ContainerFooter";

/* ── ContainerFooterSlot ──
   The one place the host components (`Container`, `Modal`, `SidePanel`,
   `InteriorPanel`) turn their `footer*` props into a footer, so the wrapping rules and the
   defaults live here instead of being copied into each of them. */

export interface ContainerFooterSlotProps {
  /** Footer content. Nothing renders when empty. */
  content?: React.ReactNode;
  align?: ContainerFooterAlign;
  bordered?: boolean;
  scrollShadow?: boolean;
  scrollFade?: boolean;
  className?: string;
  /** Used when `scrollShadow` is undefined. Panels default to `true`, `Container`/`Modal` to `false`. */
  defaultScrollShadow?: boolean;
  /**
   * Back-compat for panels whose `footer` used to render as-is: when none of `align`, `bordered`,
   * `scrollShadow` or `className` is set, `content` is rendered unwrapped (in a `shrink-0` div) rather
   * than inside a `ContainerFooter`. Off by default, so the footer is always a `ContainerFooter`.
   */
  rawWhenUnstyled?: boolean;
}

const ContainerFooterSlot: React.FC<ContainerFooterSlotProps> = ({
  content,
  align,
  bordered,
  scrollShadow,
  scrollFade,
  className,
  defaultScrollShadow = true,
  rawWhenUnstyled = false,
}) => {
  if (!content) return null;
  if (rawWhenUnstyled && align === undefined && bordered === undefined && scrollShadow === undefined && scrollFade === undefined && !className) {
    return <div className="shrink-0">{content}</div>;
  }
  return (
    <ContainerFooter
      align={align}
      bordered={bordered ?? false}
      scrollShadow={scrollShadow ?? defaultScrollShadow}
      scrollFade={scrollFade}
      className={className}
    >
      {content}
    </ContainerFooter>
  );
};
ContainerFooterSlot.displayName = "ContainerFooterSlot";

/**
 * @deprecated Use `ContainerFooter`. Kept only so existing consumers of the
 * old `PanelFooter` keep rendering identically: it is `ContainerFooter` with
 * `scrollShadow` on by default (the old `PanelFooter` always had it).
 */
const PanelFooter = React.forwardRef<HTMLDivElement, ContainerFooterProps>((props, ref) => (
  <ContainerFooter ref={ref} scrollShadow {...props} />
));
PanelFooter.displayName = "PanelFooter";
export type PanelFooterProps = ContainerFooterProps;

export { ContainerFooter, ContainerFooterSlot, PanelFooter };
