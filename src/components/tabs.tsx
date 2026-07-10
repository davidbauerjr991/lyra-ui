import * as React from "react";
import { useRef, useCallback } from "react";
import { cn } from "../lib/utils";
import { KebabMenuButton } from "./kebab-menu-button";
import { type MenuEntry } from "./menu";

/* ── Tab List (container with bottom border) ── */

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When true, tabs stretch to fill the full width */
  fullWidth?: boolean;
}

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, fullWidth, onKeyDown, ...props }, ref) => {
    const listRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        onKeyDown?.(e);
        const list = listRef.current;
        if (!list) return;

        const tabs = Array.from(
          list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])')
        );
        const current = document.activeElement as HTMLElement;
        const index = tabs.indexOf(current);
        if (index === -1) return;

        let next: HTMLElement | undefined;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          next = tabs[(index + 1) % tabs.length];
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          next = tabs[(index - 1 + tabs.length) % tabs.length];
        } else if (e.key === "Home") {
          e.preventDefault();
          next = tabs[0];
        } else if (e.key === "End") {
          e.preventDefault();
          next = tabs[tabs.length - 1];
        }

        if (next) {
          next.focus();
          next.click();
        }
      },
      [onKeyDown]
    );

    return (
      <div
        ref={(node) => {
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="tablist"
        onKeyDown={handleKeyDown}
        className={cn(
          "flex border-b border-lyra-border-subtle",
          fullWidth ? "[&>*]:flex-1" : "gap-1",
          className
        )}
        {...props}
      />
    );
  }
);
TabList.displayName = "TabList";

/* ── Tab (individual tab button) ── */

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  /** Right-side icon (e.g. close or menu icon) */
  rightIcon?: React.ReactNode;
  /** Called when the remove button is clicked (renders an × button on the right) */
  onRemove?: (e: React.MouseEvent) => void;
  /** Accessible label for the remove button (default: "Remove tab") */
  removeLabel?: string;
  /**
   * Renders a trailing kebab (⋮) menu on this tab — e.g. a channel tab's
   * "Unassign & Dismiss"/"Consult / Transfer"/etc. actions (see
   * `ChannelTab` in `channel-row.tsx`, the first consumer of this). Uses
   * `KebabMenuButton`'s `as="span"` mode rather than nesting a real
   * `<button>` inside this `<button>`, which HTML forbids — same reasoning
   * as `onRemove`'s own `role="button"` span below. Mutually exclusive with
   * `onRemove`/`rightIcon` (this takes priority if more than one is passed —
   * a tab needs at most one trailing action).
   */
  menuItems?: MenuEntry[];
  /** Accessible label for the kebab menu trigger (default: "More options") */
  menuAriaLabel?: string;
  /** ID of the associated TabPanel */
  panelId?: string;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      className,
      active,
      icon,
      rightIcon,
      onRemove,
      removeLabel = "Remove tab",
      menuItems,
      menuAriaLabel = "More options",
      panelId,
      children,
      id,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 px-3 py-2.5 lyra-body-md-emphasis transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
        active
          ? "text-lyra-fg-action"
          : "text-lyra-fg-secondary hover:text-lyra-fg-default",
        className
      )}
      {...props}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={cn("flex-shrink-0 transition-colors", active ? "text-lyra-fg-action" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary")}
        >
          {icon}
        </span>
      )}
      {children}
      {menuItems && (
        <KebabMenuButton
          as="span"
          items={menuItems}
          ariaLabel={menuAriaLabel}
          className={cn(
            "h-5 w-5 flex-shrink-0",
            active ? "text-lyra-fg-action" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
          )}
        />
      )}
      {onRemove && !menuItems && (
        <span
          role="button"
          tabIndex={0}
          aria-label={removeLabel}
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); onRemove(e as unknown as React.MouseEvent); } }}
          className={cn(
            "flex h-4 w-4 items-center justify-center rounded-lyra-xs flex-shrink-0 transition-colors",
            "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
            active ? "text-lyra-fg-action" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary"
          )}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" />
            <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" />
          </svg>
        </span>
      )}
      {rightIcon && !onRemove && !menuItems && (
        <span
          aria-hidden="true"
          className={cn("flex-shrink-0 transition-colors", active ? "text-lyra-fg-action" : "text-lyra-fg-disabled group-hover:text-lyra-fg-secondary")}
        >
          {rightIcon}
        </span>
      )}
      {/* Active indicator — blue bar */}
      {active && (
        <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[3px] bg-lyra-bg-primary" />
      )}
      {/* Hover indicator — gray bar (only when not active) */}
      {!active && (
        <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-lyra-border-medium transition-colors" />
      )}
    </button>
  )
);
Tab.displayName = "Tab";

/* ── Tab Panel (content area) ── */

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  /** ID of the associated Tab */
  tabId?: string;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, active, tabId, ...props }, ref) => {
    if (!active) return null;
    return (
      <div
        ref={ref}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={tabId}
        className={cn("flex-1", className)}
        {...props}
      />
    );
  }
);
TabPanel.displayName = "TabPanel";

export { TabList, Tab, TabPanel };
export type { TabListProps, TabProps, TabPanelProps };
