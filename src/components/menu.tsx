import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/* ── Types ── */

interface MenuItemDef {
  /** Unique key */
  id: string;
  /** Display label */
  label: string;
  /** Fires when the item is clicked */
  onClick?: () => void;
  /** Nested submenu items — renders a flyout on hover */
  submenu?: MenuEntry[];
  /** Render the item in destructive (red) styling */
  destructive?: boolean;
  /** Disable the item */
  disabled?: boolean;
  /** Optional leading icon (React node, e.g. a Lucide icon) */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut label displayed on the right */
  shortcut?: string;
  /** Optional secondary/description text below the label */
  description?: string;
}

type MenuEntry = MenuItemDef | "separator";

/* ── Menu ── */

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of items and separators */
  items: MenuEntry[];
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, items, ...props }, ref) => {
    const menuRef = React.useRef<HTMLDivElement>(null);

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
      const menu = menuRef.current;
      if (!menu) return;

      const menuItems = Array.from(
        menu.querySelectorAll<HTMLElement>(':scope > div > [role="menuitem"]:not([disabled]), :scope > [role="menuitem"]:not([disabled])')
      );
      const current = document.activeElement as HTMLElement;
      const idx = menuItems.indexOf(current);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = idx < menuItems.length - 1 ? menuItems[idx + 1] : menuItems[0];
        next?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = idx > 0 ? menuItems[idx - 1] : menuItems[menuItems.length - 1];
        prev?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        menuItems[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        menuItems[menuItems.length - 1]?.focus();
      }
    }, []);

    return (
      <div
        ref={(node) => {
          (menuRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="menu"
        onKeyDown={handleKeyDown}
        className={cn(
          "min-w-[200px] rounded-lyra-lg bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg py-1.5",
          className
        )}
        {...props}
      >
        {items.map((entry, i) => {
          if (entry === "separator") {
            return (
              <div
                key={`sep-${i}`}
                role="separator"
                className="border-b border-lyra-border-subtle my-1.5"
              />
            );
          }

          return <MenuItemRow key={entry.id} item={entry} />;
        })}
      </div>
    );
  }
);
Menu.displayName = "Menu";

/* ── MenuItemRow (internal) ── */

interface MenuItemRowProps {
  item: MenuItemDef;
}

const MenuItemRow: React.FC<MenuItemRowProps> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const openSubmenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    timeoutRef.current = setTimeout(() => setSubmenuOpen(false), 150);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    if (item.disabled) return;
    if (hasSubmenu) {
      setSubmenuOpen((prev) => !prev);
      return;
    }
    item.onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasSubmenu) {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        setSubmenuOpen(true);
      }
    }
    if (e.key === "ArrowLeft" && submenuOpen) {
      e.preventDefault();
      e.stopPropagation();
      setSubmenuOpen(false);
    }
    if (e.key === "Escape" && submenuOpen) {
      e.preventDefault();
      e.stopPropagation();
      setSubmenuOpen(false);
    }
  };

  const isDestructive = item.destructive;

  return (
    <div
      className="relative"
      onMouseEnter={hasSubmenu ? openSubmenu : undefined}
      onMouseLeave={hasSubmenu ? closeSubmenu : undefined}
    >
      <button
        type="button"
        role="menuitem"
        disabled={item.disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-haspopup={hasSubmenu ? "menu" : undefined}
        aria-expanded={hasSubmenu ? submenuOpen : undefined}
        className={cn(
          "group flex w-full items-center gap-2.5 px-3 py-2.5 lyra-body-md transition-colors text-left relative",
          "focus:outline-none focus-visible:bg-lyra-state-hover",
          isDestructive
            ? "text-lyra-status-critical-strong hover:bg-lyra-status-critical-subtle active:bg-lyra-status-critical-medium"
            : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
          item.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent active:bg-transparent"
        )}
      >
        {/* Left accent bar — visible on hover/active */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full opacity-0 transition-opacity",
            isDestructive
              ? "bg-lyra-status-critical-strong group-hover:opacity-100 group-active:opacity-100"
              : "bg-lyra-fg-default group-hover:opacity-100 group-active:opacity-100",
            item.disabled && "group-hover:opacity-0 group-active:opacity-0"
          )}
        />

        {/* Leading icon */}
        {item.icon && (
          <span
            aria-hidden="true"
            className={cn(
              "flex h-5 w-5 items-center justify-center flex-shrink-0",
              item.description && "self-start mt-0.5",
              isDestructive ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
            )}
          >
            {item.icon}
          </span>
        )}

        {/* Label + optional description */}
        <span className="flex-1 min-w-0">
          <span className="block truncate">{item.label}</span>
          {item.description && (
            <span className="block lyra-body-sm text-lyra-fg-secondary truncate">{item.description}</span>
          )}
        </span>

        {/* Shortcut */}
        {item.shortcut && (
          <span className="lyra-body-sm text-lyra-fg-secondary flex-shrink-0 ml-4">
            {item.shortcut}
          </span>
        )}

        {/* Submenu chevron */}
        {hasSubmenu && (
          <ChevronRight
            className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        )}
      </button>

      {/* Submenu flyout */}
      {hasSubmenu && submenuOpen && (
        <div
          className="absolute left-full top-0 z-50 ml-1"
          onMouseEnter={openSubmenu}
          onMouseLeave={closeSubmenu}
        >
          <Menu items={item.submenu!} />
        </div>
      )}
    </div>
  );
};

export { Menu };
export type { MenuItemDef, MenuEntry };
