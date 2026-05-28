import * as React from "react";
import { useMemo } from "react";
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
      ...props
    },
    ref
  ) => {
    const treeItems = useMemo(() => toTreeItems(items), [items]);

    return (
      <aside
        ref={ref}
        className={cn(
          "relative z-10 flex flex-shrink-0 flex-col overflow-visible bg-lyra-bg-surface-shell transition-all duration-200",
          open ? "w-[256px]" : "w-[52px]",
          className
        )}
        {...props}
      >
        {/* Toggle button */}
        {collapsible && (
          <Tooltip content="Toggle sidebar" placement="right">
            <button
              onClick={onToggle}
              className="absolute -right-3 top-[25px] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-lyra-border-default bg-lyra-bg-surface-base text-lyra-fg-secondary shadow-sm hover:bg-lyra-bg-surface-shell transition-colors"
            >
              {open ? (
                <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              )}
            </button>
          </Tooltip>
        )}

        {open ? (
          /* Expanded — delegate to TreeMenu */
          <TreeMenu items={treeItems} className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3" />
        ) : (
          /* Collapsed — icon-only buttons */
          <nav className="flex flex-1 flex-col gap-0.5 items-center overflow-y-auto overflow-x-hidden px-2 py-3">
            {items.map((item, i) => {
              const isActive =
                item.active ||
                (item.children && item.children.some((c) => c.active));

              return (
                <Tooltip key={i} content={item.label} placement="right">
                  <button
                    onClick={item.onClick}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lyra-sm transition-colors",
                      isActive
                        ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong"
                        : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
                    )}
                  >
                    {item.icon}
                  </button>
                </Tooltip>
              );
            })}
          </nav>
        )}
      </aside>
    );
  }
);
LeftNav.displayName = "LeftNav";

export { LeftNav };
