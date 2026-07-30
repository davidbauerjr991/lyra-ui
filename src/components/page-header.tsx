import * as React from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { Tooltip } from "./tooltip";
import { Badge } from "./badge";
import type { BadgeColor, BadgePillVariant } from "./badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis } from "./breadcrumb";
import { cn } from "../lib/utils";

interface PageHeaderBreadcrumb {
  /** Parent page label */
  label: string;
  /** Click handler for the parent link */
  onClick?: () => void;
}

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page title text */
  title: string;
  /**
   * Leading icon rendered before the title, with a vertical divider between
   * them — switches the header into a "record header" layout (icon | title
   * stacked above `subtitle`), for pages about a specific customer, agent,
   * case, etc. rather than a static section title. Mutually exclusive with
   * `breadcrumb` — when both are passed, `icon` takes precedence.
   */
  icon?: React.ReactNode;
  /**
   * Arbitrary content rendered immediately after the title/subtitle block
   * (before `actions`) — e.g. a compact `ChannelToggleGroup` distinguishing
   * which of an interaction's several open channels is current, sitting
   * directly right of the customer name. Was `titlePrefix` (rendered
   * before the title instead) until an explicit request to flip the
   * order — renamed along with the move since "prefix" would otherwise be
   * actively wrong once it's rendering after. Unlike `icon`, this doesn't
   * add its own divider or switch the header into the "record header"
   * layout — it's just an extra flex item in the same left-side row, so it
   * composes with any of the three title layouts (plain/`icon`/
   * `breadcrumb`) rather than being mutually exclusive with them. Renders
   * once regardless of which title layout is active. Add your own visual
   * divider inside this slot's own content if you want one (see
   * `agent-next-gen-v1`'s usage) — this prop doesn't render one itself,
   * since not every consumer will want the same treatment.
   */
  titleSuffix?: React.ReactNode;
  /**
   * Lets `titleSuffix`'s own wrapper grow to fill whatever width is left in
   * the header row (between the title block and `actions`), instead of its
   * default `shrink-0` (content-sized, snug against the title). Off by
   * default — a compact cluster like a `ChannelToggleGroup` should stay
   * snug against the title rather than stretching away from it (see
   * `titleSuffix`'s own doc comment for why `shrink-0` is the default in
   * the first place). Turn this on when `titleSuffix` instead holds
   * something built to size itself off its own available width, e.g. a
   * `TabList` — `Tab`'s 48px-tall row/bottom-border design collapses into
   * its 2-slot "active + N More" layout (or worse, visibly clips/squishes)
   * almost immediately when confined to a `shrink-0` sliver next to the
   * title, since `TabList`'s own internal `w-full` then has almost nothing
   * real to fill. Confirmed via screenshot: a single-channel `ChannelTab`
   * cluster in `titleSuffix` rendering as a disjointed icon + orphaned
   * kebab + stray underline fragment instead of a real tab.
   */
  titleSuffixGrow?: boolean;
  /**
   * Whether the `icon` slot's wrapper span is `aria-hidden` (default: true).
   * The wrapper is hidden from assistive tech by default because `icon` is
   * normally purely decorative — set this to `false` when `icon` itself is
   * or contains a real interactive control (e.g. a `PanelPinButton`), since
   * `aria-hidden` on an ancestor removes the whole subtree from the
   * accessibility tree regardless of the control's own `aria-label`.
   */
  iconAriaHidden?: boolean;
  /**
   * Secondary line rendered under the title. With `icon`, this pairs with
   * the leading icon (record header layout). Without `icon`/`breadcrumb`
   * (the plain title branch), it still renders under the title as a plain
   * caption — e.g. a category label like "CALL CENTERS" under a section
   * title — just without the icon/divider treatment. Not rendered in the
   * `breadcrumb` branch (a caption under an inline breadcrumb trail hasn't
   * had a real usage yet).
   */
  subtitle?: React.ReactNode;
  /** Actions rendered on the right side (buttons, icons, etc.) */
  actions?: React.ReactNode;
  /**
   * Which panel toggle(s) to show:
   * - "left"  — outer panel toggle (PanelLeft icon, before the title)
   * - "right" — inner panel toggle (PanelRight icon, after actions)
   * - "both"  — both toggles
   */
  panelToggle?: "left" | "right" | "both";
  /** Called when the left (outer) panel toggle is clicked (pinned mode) */
  onPanelToggle?: () => void;
  /** Whether the outer panel is pinned — controls click vs hover behavior */
  panelPinned?: boolean;
  /** Called when hovering over the outer panel toggle (unpinned mode) */
  onPanelHoverStart?: () => void;
  /** Called when hover leaves the outer panel toggle (unpinned mode) */
  onPanelHoverEnd?: () => void;
  /** Called when the right (inner) panel toggle is clicked */
  onInnerPanelToggle?: () => void;
  /** Called when hovering over the right panel toggle (unpinned mode) */
  onInnerPanelHoverStart?: () => void;
  /** Called when hover leaves the right panel toggle (unpinned mode) */
  onInnerPanelHoverEnd?: () => void;
  /**
   * Parent breadcrumb(s) — renders "ParentName / Title" for a single crumb,
   * or "ParentA / ParentB / … / Title" when passed an array for a deeper
   * trail. Composed from the shared `Breadcrumb` parts (see breadcrumb.tsx)
   * rather than a one-off `<nav>`.
   */
  breadcrumb?: PageHeaderBreadcrumb | PageHeaderBreadcrumb[];
  /** Optional badge displayed inline after the title */
  badge?: string;
  /** Badge color — defaults to "green" */
  badgeColor?: BadgeColor;
  /** Badge variant — defaults to "subtle" */
  badgeVariant?: BadgePillVariant;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    {
      className,
      title,
      icon,
      titleSuffix,
      titleSuffixGrow = false,
      iconAriaHidden = true,
      subtitle,
      actions,
      panelToggle,
      onPanelToggle,
      panelPinned = true,
      onPanelHoverStart,
      onPanelHoverEnd,
      onInnerPanelToggle,
      onInnerPanelHoverStart,
      onInnerPanelHoverEnd,
      breadcrumb,
      badge,
      badgeColor = "green",
      badgeVariant = "subtle",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        // min-h-[68px] = py-4 (32px) + a default (`lg`) Button's own 36px
        // height — the tallest thing this row's `actions` slot typically
        // holds. Without a fixed floor, the row's real height shrinks to
        // just the title text whenever `actions` is empty/removed, which
        // shifts the title vertically relative to any external sibling
        // that assumes a constant PageHeader height (e.g. LeftNav's own
        // toggle button, positioned via a hardcoded `top` offset — see its
        // doc comment). Kept as a min-height, not a fixed height, so a
        // future taller `actions` element can still grow the row.
        "lyra-page-header-suffix-wrap flex min-h-[68px] items-center justify-between border-b border-lyra-border-subtle px-6 py-4",
        className
      )}
      {...props}
    >
      <div className="lyra-page-header-left flex flex-1 min-w-0 items-center gap-3">
        {(panelToggle === "left" || panelToggle === "both") && (
          <>
            <div
              onMouseEnter={!panelPinned ? onPanelHoverStart : undefined}
              onMouseLeave={!panelPinned ? onPanelHoverEnd : undefined}
            >
              <Tooltip content="Toggle left panel" placement="right" asLabel>
                <button
                  onClick={panelPinned ? onPanelToggle : undefined}
                  aria-label="Toggle left panel"
                  className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                >
                  <PanelLeft className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
            <div className="h-5 w-px bg-lyra-border-subtle" />
          </>
        )}
        {/* Each of the three branches below used to carry its own `flex-1`
            (claiming the outer row's — this div's parent, `flex flex-1
            min-w-0 items-center gap-3` — leftover space directly). Dropped
            in favor of `min-w-0` alone once `titleSuffix` shipped: a
            flex-1 title column with nothing else competing for space
            stretches to fill the whole row regardless of how short the
            title text actually is (text still just left-aligns inside
            that oversized box), so `titleSuffix` rendered right after it
            would sit wherever that box happened to end, not snug against
            the text — confirmed from a screenshot of exactly that, the
            toggle group floating at the row's far right next to `actions`
            instead of directly after "Noah Bennett". A lone child of the
            parent's own `flex-1` doesn't need its own flex-grow to reach
            the same rendered width when `titleSuffix` is absent, and
            default flex-shrink (with `min-w-0`) still lets each branch's
            `truncate` work exactly as before. */}
        {icon ? (
          <>
            <span
              className="flex items-center justify-center text-lyra-fg-default shrink-0"
              aria-hidden={iconAriaHidden ? "true" : undefined}
            >
              {icon}
            </span>
            <div className="h-8 w-px bg-lyra-border-subtle shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h1 className="lyra-heading-lg text-lyra-fg-default leading-tight truncate min-w-0">{title}</h1>
                {badge && <Badge color={badgeColor} variant={badgeVariant}>{badge}</Badge>}
              </div>
              {subtitle && <span className="lyra-body-sm text-lyra-fg-secondary truncate">{subtitle}</span>}
            </div>
          </>
        ) : breadcrumb ? (
          // Two `Breadcrumb` instances, both always rendered — CSS (see
          // `.lyra-page-header-breadcrumb-wrap` in lyra-tokens.css/
          // storybook.css) toggles between them once this slot's own width
          // drops to 480px or below, collapsing every parent crumb into a
          // single ellipsis trigger (its popover lists them all, per
          // BreadcrumbEllipsis's `items` prop) so the current-page title
          // truncates on one line instead of the trail wrapping onto a
          // second one. Same DOM-swap technique TabList's `overflowMenu`
          // uses for `.lyra-tab-overflow-full`/`-collapsed`.
          <div className="lyra-page-header-breadcrumb-wrap min-w-0">
            <Breadcrumb className="lyra-page-header-breadcrumb-full min-w-0">
              <BreadcrumbList className="flex-nowrap min-w-0">
                {(Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb]).map((crumb, i) => (
                  <React.Fragment key={i}>
                    <BreadcrumbItem className="shrink-0">
                      <BreadcrumbLink onClick={crumb.onClick}>{crumb.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="shrink-0" />
                  </React.Fragment>
                ))}
                <BreadcrumbItem aria-current="page" className="gap-2 min-w-0 flex-1">
                  <h1 className="lyra-heading-lg text-lyra-fg-default truncate min-w-0">{title}</h1>
                  {badge && <Badge color={badgeColor} variant={badgeVariant}>{badge}</Badge>}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Breadcrumb className="lyra-page-header-breadcrumb-collapsed min-w-0">
              <BreadcrumbList className="flex-nowrap min-w-0">
                <BreadcrumbItem className="shrink-0">
                  <BreadcrumbEllipsis
                    ariaLabel="Show parent pages"
                    items={(Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb]).map((crumb, i) => ({
                      id: `crumb-${i}`,
                      label: crumb.label,
                      onClick: crumb.onClick,
                    }))}
                  />
                </BreadcrumbItem>
                <BreadcrumbSeparator className="shrink-0" />
                <BreadcrumbItem aria-current="page" className="gap-2 min-w-0 flex-1">
                  <h1 className="lyra-heading-lg text-lyra-fg-default truncate min-w-0">{title}</h1>
                  {badge && <Badge color={badgeColor} variant={badgeVariant}>{badge}</Badge>}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        ) : (
          <div className="flex flex-col justify-center min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <h1 className="lyra-heading-lg text-lyra-fg-default truncate min-w-0">{title}</h1>
              {badge && <Badge color={badgeColor} variant={badgeVariant}>{badge}</Badge>}
            </div>
            {subtitle && <span className="lyra-body-sm text-lyra-fg-secondary truncate">{subtitle}</span>}
          </div>
        )}
        {titleSuffix && (
          <span className={cn("lyra-page-header-suffix", titleSuffixGrow ? "flex-1 min-w-0" : "shrink-0")}>
            {titleSuffix}
          </span>
        )}
      </div>
      <div className="lyra-page-header-actions flex items-center gap-2">
        {actions}
        {(panelToggle === "right" || panelToggle === "both") && (
          <>
            {actions && <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />}
            <div
              onMouseEnter={onInnerPanelHoverStart}
              onMouseLeave={onInnerPanelHoverEnd}
            >
              <Tooltip content="Toggle right panel" placement="left" asLabel>
                <button
                  onClick={onInnerPanelToggle}
                  aria-label="Toggle right panel"
                  className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                >
                  <PanelRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </div>
  )
);
PageHeader.displayName = "PageHeader";

export { PageHeader };
export type { PageHeaderBreadcrumb, PageHeaderProps };
