import * as React from "react";
import { cn } from "../lib/utils";

/* ── MenuItem ──
   A standalone, single-row "menu item" primitive — the same visual/
   interaction pattern `Menu`'s internal `MenuItemRow` renders for a plain
   (non-submenu) `MenuItemDef` (left accent bar that's persistent when
   `active` and otherwise shows on hover/press, optional leading icon,
   label + description, trailing shortcut/custom element, destructive/
   disabled states) — but exposed as a real, directly-usable component
   instead of something only reachable by building a `MenuItemDef[]` and
   handing it to `Menu`.

   Reach for this when you need one menu-styled row somewhere that isn't
   `Menu`'s own data-driven `items` list — e.g. a single custom row
   embedded in a bespoke dropdown, a virtualized list, or any other
   composed surface that wants "looks and behaves like a menu item"
   without adopting `Menu`'s full array/keyboard-nav/submenu machinery.
   For an actual list of menu items — especially anything needing
   submenus, section labels, or arrow-key/Home/End navigation — use `Menu`
   directly rather than hand-assembling a list of these; `MenuItem` is
   intentionally the single-row primitive, not a replacement for `Menu`.

   `Menu`'s own internal row (`MenuItemRow`, menu.tsx) now renders THIS
   component for its actual row markup, instead of a second duplicated
   copy — `Menu` still owns everything specific to being a list (submenu
   open/hover/keyboard/portal logic, the wrapping `relative` row div), but
   the button/accent-bar/icon/label/shortcut visuals live here as the one
   shared implementation. `highlighted` and `trailingIcon` exist
   specifically to support that: `Menu` uses `highlighted` to force the
   hover-look on a row whose submenu flyout is currently open via mouse
   hover (not a real `:hover`, so it can't rely on the CSS pseudo-class
   alone), and `trailingIcon` to render its submenu chevron after
   `rightElement`/`shortcut` — neither is expected to be needed outside
   that use case. */

export interface MenuItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** Optional bolded title line rendered above the label, inside the same
   *  hoverable/clickable row — NOT a separate element sitting above the
   *  row's own hover area (that would make part of the "group" visually
   *  read as attached but not actually respond to hover/click together).
   *  Styled like `ListItem`'s own title (`lyra-body-md-emphasis`), for
   *  previewing a menu item stacked under a bolded heading within one row
   *  — e.g. "New Case" above a "Menu Item" label. */
  header?: React.ReactNode;
  /** Primary label */
  label: React.ReactNode;
  /** Optional secondary/description text below the label */
  description?: React.ReactNode;
  /** Optional leading icon (React node, e.g. a Lucide icon) */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut label displayed on the right */
  shortcut?: string;
  /** Optional custom element rendered on the right (overrides shortcut) */
  rightElement?: React.ReactNode;
  /** Highlight as the current/active/selected item — persistent left
   *  accent bar + active background, matching `Menu`'s own `active` item
   *  styling. */
  active?: boolean;
  /** Render in destructive (red) styling */
  destructive?: boolean;
  /** Disable the item */
  disabled?: boolean;
  /** Fires when the item is clicked (and not disabled) */
  onClick?: () => void;
  /** ARIA role for the row. Defaults to "menuitem"; use "option" for
   *  listbox/combobox contexts. */
  itemRole?: React.AriaRole;
  /** Forces the same look as hover/press (background + accent bar) without
   *  requiring an actual `:hover`/`:active` state — for a consumer that
   *  needs to reflect some other "currently highlighted" condition (e.g.
   *  `Menu`'s row while its submenu flyout is open via mouse hover). Has
   *  no effect when `active` or `destructive` is set. */
  highlighted?: boolean;
  /** Extra element rendered furthest right, after `rightElement`/
   *  `shortcut` rather than replacing them — for `Menu`'s submenu chevron. */
  trailingIcon?: React.ReactNode;
  /** Row density — `true` (default) is the standard "comfortable" row,
   *  12px top/bottom padding (`py-3`); `false` is a denser 6px top/bottom
   *  (`py-1.5`), for contexts that need to fit more rows in the same
   *  space without shrinking type. */
  comfortable?: boolean;
}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      header,
      label,
      description,
      icon,
      shortcut,
      rightElement,
      active = false,
      destructive = false,
      disabled = false,
      onClick,
      itemRole = "menuitem",
      highlighted = false,
      trailingIcon,
      comfortable = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        role={itemRole}
        disabled={disabled}
        aria-selected={itemRole === "option" ? active : undefined}
        onClick={disabled ? undefined : onClick}
        className={cn(
          "group/item relative flex w-full items-center gap-2.5 rounded-lyra-sm px-3 text-left lyra-body-md transition-colors",
          comfortable ? "py-3" : "py-1.5",
          "focus:outline-none focus-visible:bg-lyra-state-hover",
          destructive
            ? "text-lyra-status-critical-strong hover:bg-lyra-status-critical-subtle active:bg-lyra-status-critical-medium"
            : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
          active &&
            !destructive &&
            "bg-lyra-bg-active-subtle text-lyra-fg-active-strong hover:bg-lyra-state-hover-active-subtle active:bg-lyra-state-pressed-active-subtle",
          highlighted && !active && !destructive && "bg-lyra-state-hover",
          disabled && "cursor-not-allowed opacity-40 hover:bg-transparent active:bg-transparent",
          className
        )}
        {...props}
      >
        {/* Left accent bar — persistent for the active item; otherwise
            visible on hover/press, or when `highlighted` is forced on. */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full opacity-0 transition-opacity",
            destructive
              ? "bg-lyra-status-critical-strong group-hover/item:opacity-100 group-active/item:opacity-100"
              : active
                ? "bg-lyra-fg-active-strong opacity-100"
                : cn(
                    "bg-lyra-fg-default group-hover/item:opacity-100 group-active/item:opacity-100",
                    highlighted && "opacity-100"
                  ),
            disabled && "group-hover/item:opacity-0 group-active/item:opacity-0"
          )}
        />

        {/* Leading icon — always vertically centered on the row (even
            alongside a `description` line, unlike the old top-aligned
            treatment) and given its own small padding so it doesn't sit
            flush against the accent bar/label, regardless of how large the
            icon content itself is (e.g. `AgentNotifications`' 36px
            circular avatar icons vs. a plain 16px Lucide icon). */}
        {icon && (
          <span
            aria-hidden="true"
            className={cn(
              "flex flex-shrink-0 items-center justify-center p-0.5",
              destructive ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
            )}
          >
            {icon}
          </span>
        )}

        {/* Optional header + label + optional description */}
        <span className="min-w-0 flex-1">
          {header && (
            <span className="block truncate lyra-body-md-emphasis text-lyra-fg-default">
              {header}
            </span>
          )}
          <span className="block truncate">{label}</span>
          {description && (
            <span className="block truncate lyra-body-sm text-lyra-fg-secondary">
              {description}
            </span>
          )}
        </span>

        {/* Right element (custom) or shortcut */}
        {rightElement
          ? <span className="ml-2 flex-shrink-0">{rightElement}</span>
          : shortcut && (
            <span className="ml-4 flex-shrink-0 lyra-body-sm text-lyra-fg-secondary">
              {shortcut}
            </span>
          )}

        {/* Trailing icon (e.g. Menu's submenu chevron) — always furthest
            right, in addition to (not instead of) rightElement/shortcut. */}
        {trailingIcon}
      </button>
    );
  }
);
MenuItem.displayName = "MenuItem";

export { MenuItem };
