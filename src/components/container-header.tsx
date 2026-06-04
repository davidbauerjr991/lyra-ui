import * as React from "react";
import { X } from "lucide-react";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface ContainerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header title */
  title: string;
  /** Optional icon to the left of the title */
  icon?: React.ReactNode;
  /** Actions rendered to the right of the title (buttons, badges, etc.) */
  actions?: React.ReactNode;
  /** Renders a built-in close button and calls this when clicked */
  onClose?: () => void;
  /** Typography class for the title (default: "lyra-heading-md") */
  titleClassName?: string;
  /** Optional subtitle displayed below the title in body-sm secondary */
  subhead?: string;
  /** Badge or tag rendered inline immediately after the title */
  titleBadge?: React.ReactNode;
  /** Show a bottom border (default: true) */
  bordered?: boolean;
}

/* ── Component ── */

const ContainerHeader = React.forwardRef<HTMLDivElement, ContainerHeaderProps>(
  ({
    className,
    title,
    icon,
    actions,
    onClose,
    titleClassName = "lyra-heading-md",
    subhead,
    titleBadge,
    bordered = true,
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-4 py-5 shrink-0",
        bordered && "border-b border-lyra-border-subtle",
        className
      )}
      {...props}
    >
      {/* Left: icon + title + optional subhead */}
      <div className="flex items-center gap-2 min-w-0">
        {icon && <span className="flex-shrink-0 text-lyra-fg-secondary">{icon}</span>}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className={cn(titleClassName, "text-lyra-fg-default truncate")}>{title}</h2>
            {titleBadge && <span className="shrink-0">{titleBadge}</span>}
          </div>
          {subhead && (
            <p className="lyra-body-sm text-lyra-fg-secondary truncate">{subhead}</p>
          )}
        </div>
      </div>

      {/* Right: actions + optional close button */}
      <div className="flex items-center gap-1 shrink-0 ml-4">
        {actions}
        {onClose && (
          <Tooltip content={`Close ${title}`} placement="bottom" asLabel>
            <button
              aria-label={`Close ${title}`}
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  )
);
ContainerHeader.displayName = "ContainerHeader";

export { ContainerHeader };
