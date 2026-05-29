import * as React from "react";
import { Pin } from "lucide-react";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the panel is open */
  open: boolean;
  /** Panel width in pixels (default 256) */
  width?: number;
  /** Whether the panel is pinned (inline) or floating (overlay) */
  pinned?: boolean;
  /** Called when the pin toggle is clicked */
  onPinToggle?: () => void;
  /** Panel header title */
  headerTitle?: string;
}

/**
 * An animated side panel that slides open/closed from the left.
 *
 * - **Pinned** (default): takes up inline space, pushing sibling content.
 * - **Unpinned / overlay**: floats on top of content with a shadow.
 */
const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  (
    {
      className,
      open,
      width = 256,
      pinned = true,
      onPinToggle,
      headerTitle,
      children,
      ...props
    },
    ref
  ) => {
    if (pinned) {
      /* ── Pinned: inline panel that pushes content ── */
      return (
        <div
          ref={ref}
          role="region"
          aria-label={headerTitle || "Side panel"}
          aria-hidden={!open || undefined}
          className={cn(
            "shrink-0 overflow-hidden bg-lyra-bg-surface-container-subtle",
            open && "border-r border-lyra-border-subtle",
            className
          )}
          style={{
            width: open ? width : 0,
            transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          {...props}
        >
          <div
            className="flex h-full flex-col overflow-auto"
            style={{ width, minWidth: width }}
          >
            {headerTitle && (
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <h2 className="lyra-heading-lg text-lyra-fg-default">
                  {headerTitle}
                </h2>
                {onPinToggle && (
                  <Tooltip content="Unpin panel" placement="bottom" asLabel>
                    <button
                      onClick={onPinToggle}
                      aria-label="Unpin panel"
                      className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                    >
                      <Pin className="h-4 w-4 rotate-45" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </Tooltip>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      );
    }

    /* ── Unpinned: overlay panel that floats on top ── */
    return (
      <div
        ref={ref}
        role="region"
        aria-label={headerTitle || "Side panel"}
        aria-hidden={!open || undefined}
        className={cn(
          "absolute left-0 top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-container-subtle shadow-lg",
          open
            ? "border-r border-lyra-border-subtle"
            : "pointer-events-none",
          className
        )}
        style={{
          width: open ? width : 0,
          transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        {...props}
      >
        <div
          className="flex h-full flex-col overflow-auto"
          style={{ width, minWidth: width }}
        >
          {headerTitle && (
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <h2 className="lyra-heading-lg text-lyra-fg-default">
                {headerTitle}
              </h2>
              {onPinToggle && (
                <Tooltip content="Pin panel" placement="bottom" asLabel>
                  <button
                    onClick={onPinToggle}
                    aria-label="Pin panel"
                    className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                  >
                    <Pin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </Tooltip>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);
SidePanel.displayName = "SidePanel";

export { SidePanel };
