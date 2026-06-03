import * as React from "react";
import { X } from "lucide-react";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header title */
  title: string;
  /** Optional icon to the left of the title */
  icon?: React.ReactNode;
  /** Additional actions rendered to the right of the title */
  actions?: React.ReactNode;
  /** Renders a close button and calls this when clicked */
  onClose?: () => void;
  /** Typography class for the title (default: "lyra-heading-md") */
  titleClassName?: string;
}

const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  ({ className, title, icon, actions, onClose, titleClassName = "lyra-heading-md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-4 py-5 shrink-0",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <h2 className={`${titleClassName} text-lyra-fg-default`}>{title}</h2>
      </div>
      <div className="flex items-center gap-1">
        {actions}
        {onClose && (
          <Tooltip content={`Close ${title}`} placement="bottom" asLabel>
            <button
              aria-label="Close"
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
PanelHeader.displayName = "PanelHeader";

export { PanelHeader };
export type { PanelHeaderProps };
