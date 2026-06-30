import * as React from "react";
import { useMemo, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TreeMenu, type TreeMenuItem } from "./tree-menu";
import { Tooltip } from "./tooltip";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface NavChild {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  expandable?: boolean;
  defaultOpen?: boolean;
  children?: NavChild[];
  onClick?: () => void;
}

/* ── LeftNav ── */

interface LeftNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items to render */
  items: NavItem[];
  /** Whether the nav is expanded or collapsed */
  open?: boolean;
  /** Called when the toggle button is clicked */
  onToggle?: () => void;
  /** Show/hide the collapse toggle button */
  collapsible?: boolean;
  /**
   * Overlay mode (narrow screens): the aside keeps a fixed 52px footprint;
   * the expanded panel slides out as an absolutely-positioned overlay.
   */
  overlay?: boolean;
  /** Content pinned to the bottom of the nav rail (e.g. an AddChannel button) */
  footer?: React.ReactNode;
}

/** Convert NavItem[] → TreeMenuItem[] so TreeMenu can render them */
function toTreeItems(items: NavItem[]): TreeMenuItem[] {
  return items.map((item) => ({
    icon: item.icon,
    label: item.label,
    active: item.active,
    defaultOpen: item.defaultOpen,
    onClick: item.onClick,
    children: item.expandable ? item.children : undefined,
  }));
}

const LeftNav = React.forwardRef<HTMLElement, LeftNavProps>(
  (
    {
      className,
      items,
      open = true,
      onToggle,
      collapsible = true,
      overlay = false,
      footer,
      ...props
    },
    ref
  ) => {
    const treeItems = useMemo(() => toTreeItems(items), [items]);

    // Hover-open state used in overlay mode
    const [hoverOpen, setHoverOpen] = useState(false);
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const onHoverStart = useCallback(() => {
      clearTimeout(hoverTimer.current);
      setHoverOpen(true);
    }, []);
    const onHoverEnd = useCallback(() => {
      hoverTimer.current = setTimeout(() => setHoverOpen(false), 300);
    }, []);

    const toggleButton = collapsible ? (
      <Tooltip content={open ? "Collapse sidebar" : "Expand sidebar"} placement="right" asLabel>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          className="absolute -right-3 top-[25px] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-lyra-border-default bg-lyra-bg-surface-base text-lyra-fg-secondary shadow-sm hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          {open ? (
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </Tooltip>
    ) : null;

    const iconOnlyNav = (
      <nav aria-label="Main navigation" className="flex flex-1 flex-col gap-0.5 items-center overflow-y-auto overflow-x-hidden px-2 py-3">
        {items.map((item, i) => {
          const isActive =
            item.active ||
            (item.children && item.children.some((c) => c.active));
          return (
            <Tooltip key={i} content={item.label} placement="right" asLabel>
              <button
                onClick={item.onClick}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lyra-sm transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
                  isActive
                    ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong"
                    : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
                )}
              >
                <span aria-hidden="true">{item.icon}</span>
              </button>
            </Tooltip>
          );
        })}
      </nav>
    );

    /* ── Overlay mode (narrow screens): hover to open, no toggle button ── */
    if (overlay) {
      return (
        <aside
          ref={ref}
          aria-label="Main navigation"
          className={cn("relative z-10 flex-shrink-0 overflow-visible bg-lyra-bg-surface-shell w-[52px]", className)}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          {...props}
        >
          {/* Sliding panel: 52px footprint when closed, 256px overlay when open */}
          <div
            className="absolute left-0 top-0 bottom-0 flex flex-col bg-lyra-bg-surface-shell overflow-hidden"
            style={{
              width: hoverOpen ? 256 : 52,
              zIndex: hoverOpen ? 20 : 10,
              transition: "width 200ms cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: hoverOpen ? "4px 0 12px rgba(0,0,0,0.1)" : "none",
            }}
          >
            <div className="flex flex-1 flex-col overflow-hidden min-h-0">
              {hoverOpen ? (
                <TreeMenu items={treeItems} className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3" />
              ) : (
                iconOnlyNav
              )}
            </div>
            {footer && (
              <div className="flex-shrink-0 flex items-center justify-center px-2 pb-3">
                {React.isValidElement(footer)
                  ? React.cloneElement(footer as React.ReactElement<{ expanded?: boolean }>, { expanded: hoverOpen })
                  : footer}
              </div>
            )}
          </div>
        </aside>
      );
    }

    /* ── Default (inline) mode ── */
    return (
      <aside
        ref={ref}
        aria-label="Main navigation"
        className={cn(
          "relative z-10 flex h-full flex-shrink-0 flex-col overflow-visible bg-lyra-bg-surface-shell transition-all duration-200",
          open ? "w-[256px]" : "w-[52px]",
          className
        )}
        {...props}
      >
        {toggleButton}

        {/* Scroll wrapper — overflow-hidden + min-h-0 constrains height so overflow-y-auto
            on the inner content triggers. The aside keeps overflow-visible for the toggle
            button that pokes out; this wrapper sits as a sibling to that button. */}
        <div className="flex flex-1 flex-col overflow-hidden min-h-0">
          {open ? (
            <TreeMenu items={treeItems} className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3" />
          ) : (
            iconOnlyNav
          )}
        </div>
        {footer && (
          <div className="flex-shrink-0 flex items-center justify-center px-2 pb-3">
            {footer}
          </div>
        )}
      </aside>
    );
  }
);
LeftNav.displayName = "LeftNav";

export { LeftNav };
export type { LeftNavProps };
