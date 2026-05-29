import * as React from "react";
import { PanelLeft } from "lucide-react";
import { Tooltip } from "./tooltip";
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
  /** Show a left-panel toggle button */
  showPanelToggle?: boolean;
  /** Called when the panel toggle is clicked (pinned mode) */
  onPanelToggle?: () => void;
  /** Whether the panel is pinned — controls click vs hover behavior */
  panelPinned?: boolean;
  /** Called when hovering over the toggle (unpinned mode) */
  onPanelHoverStart?: () => void;
  /** Called when hover leaves the toggle (unpinned mode) */
  onPanelHoverEnd?: () => void;
  /** Parent breadcrumb — renders "ParentName / Title" */
  breadcrumb?: PageHeaderBreadcrumb;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    {
      className,
      title,
      actions,
      showPanelToggle,
      onPanelToggle,
      panelPinned = true,
      onPanelHoverStart,
      onPanelHoverEnd,
      breadcrumb,
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
        {showPanelToggle && (
          <>
            <div
              onMouseEnter={!panelPinned ? onPanelHoverStart : undefined}
              onMouseLeave={!panelPinned ? onPanelHoverEnd : undefined}
            >
              <Tooltip content="Toggle panel" placement="bottom" asLabel>
                <button
                  onClick={panelPinned ? onPanelToggle : undefined}
                  aria-label="Toggle panel"
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
              <li aria-current="page">
                <h1 className="lyra-heading-lg text-lyra-fg-default">{title}</h1>
              </li>
            </ol>
          </nav>
        ) : (
          <h1 className="lyra-heading-lg text-lyra-fg-default">{title}</h1>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2">{actions}</div>
      )}
    </div>
  )
);
PageHeader.displayName = "PageHeader";

export { PageHeader };
export type { PageHeaderBreadcrumb };
