import * as React from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { Tooltip } from "./tooltip";
import { Chip } from "./chip";
import type { ChipColor, ChipVariant } from "./chip";
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
  /** Parent breadcrumb — renders "ParentName / Title" */
  breadcrumb?: PageHeaderBreadcrumb;
  /** Optional chip displayed inline after the title */
  chip?: string;
  /** Chip color — defaults to "green" */
  chipColor?: ChipColor;
  /** Chip variant — defaults to "subtle" */
  chipVariant?: ChipVariant;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    {
      className,
      title,
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
      chip,
      chipColor = "green",
      chipVariant = "subtle",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between border-b border-lyra-border-subtle px-6 py-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
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
        {breadcrumb ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li>
                <button
                  onClick={breadcrumb.onClick}
                  className="lyra-heading-md text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 rounded-lyra-xs"
                >
                  {breadcrumb.label}
                </button>
              </li>
              <li aria-hidden="true">
                <span className="lyra-heading-md text-lyra-fg-secondary">/</span>
              </li>
              <li aria-current="page" className="flex items-center gap-2">
                <h1 className="lyra-heading-lg text-lyra-fg-default">{title}</h1>
                {chip && <Chip color={chipColor} variant={chipVariant}>{chip}</Chip>}
              </li>
            </ol>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <h1 className="lyra-heading-lg text-lyra-fg-default">{title}</h1>
            {chip && <Chip color={chipColor} variant={chipVariant}>{chip}</Chip>}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
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
export type { PageHeaderBreadcrumb };
