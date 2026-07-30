import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { MenuItem } from "./menu-item";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/* ── Types ── */

interface MenuItemDef {
  /** Unique key */
  id: string;
  /** Display label */
  label: string;
  /** Fires when the item is clicked */
  onClick?: () => void;
  /** Nested submenu items — renders a flyout on hover, styled as a nested Menu */
  submenu?: MenuEntry[];
  /** Arbitrary custom content rendered in the flyout instead of a nested Menu
   *  (e.g. a rich panel). Takes precedence over `submenu` when both are set.
   *  Reuses the same hover/click/keyboard, portal, and viewport-flip
   *  positioning as `submenu` — use this instead of hand-rolling a separate
   *  flyout/portal for non-menu-list content. */
  submenuContent?: React.ReactNode;
  /**
   * Override the submenu flyout's z-index class. Defaults to `z-[9999]` —
   * the standard "portal wrapper" tier from CONTRIBUTING.md §5's z-index
   * hierarchy, correct for a submenu in normal, top-level use. Needed when
   * this item's own `Menu`/`submenuContent` is nested inside something
   * already at or above that tier — e.g. `AgentProfile`'s "Connected Apps"
   * row, whose flyout lives inside the status menu's own `z-[10001]`
   * panel, so the default `z-[9999]` would render behind it. Same escape-
   * hatch pattern as `PhoneInput`'s `dropdownClassName`: nested overlay-ish
   * content can't assume its own default z-index will clear whatever it
   * happens to be nested inside.
   */
  submenuZIndexClassName?: string;
  /** Render the item in destructive (red) styling */
  destructive?: boolean;
  /** Disable the item */
  disabled?: boolean;
  /** Optional leading icon (React node, e.g. a Lucide icon) */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut label displayed on the right */
  shortcut?: string;
  /** Optional custom element rendered on the right (overrides shortcut) */
  rightElement?: React.ReactNode;
  /** Optional secondary/description text below the label */
  description?: string;
  /** Highlight as the current/active item (e.g. the current page in a nav
   *  menu, or the selected status in a status menu) — persistent blue
   *  background + left accent bar, with dedicated one-shade-darker hover
   *  and pressed states (`active`, `active-hover`, `active-pressed`). */
  active?: boolean;
  /**
   * MenuRadix only — has no effect on the hand-rolled `Menu` above, which
   * never closes itself (whatever composes it owns that decision entirely,
   * e.g. `ProfileMenu`'s own `close()` wrapping). Radix's own
   * `DropdownMenu.Item`, unlike bare `Menu`, closes on select by default;
   * set this to `false` to keep the menu open after this item is chosen —
   * e.g. a theme toggle you want to stay open so its new state is visible
   * immediately. Defaults to `true` (Radix's own default behavior).
   */
  closeOnSelect?: boolean;
  /**
   * MenuRadix only (like `closeOnSelect` above) — has no effect on the
   * hand-rolled `Menu`, which doesn't render its own item root at all in a
   * way drag events could attach to. Enables native HTML5 drag-and-drop
   * reordering on this row: pass the same `onDragStart`/`onDragOver`/
   * `onDrop`/`onDragEnd`/`onDragLeave` handlers to every item in the list —
   * typically all five sourced from one shared `useColumnReorder`-style
   * hook (see table.tsx), so dropping one row onto another reorders the
   * whole array in one place rather than each row owning a fragment of the
   * logic. See `AgentNextGenPage.tsx`'s app-header "View All Apps" menu,
   * whose rows are reorderable in lockstep with the header's own icon
   * buttons (same shared order state, same hook instance, driving both).
   */
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  /** True while another row is being dragged over this one — adds a drop-
   *  target highlight (`bg-lyra-bg-active-moderate`, the same class
   *  `SortableTableHead`'s own `isDragOver` state uses). */
  dragOver?: boolean;
}

/** Non-interactive section header rendered inline within the list (e.g.
 *  "Favorites", "All Codes (2)"). Keyed on `sectionLabel` rather than a
 *  discriminant field so plain `{ sectionLabel: "..." }` literals work
 *  without importing a type. Skipped entirely by the arrow-key/Home/End
 *  keyboard navigation in Menu below since it has no `role="menuitem"`. */
interface MenuSectionLabel {
  sectionLabel: string;
}

type MenuEntry = MenuItemDef | "separator" | MenuSectionLabel;

/* ── Menu ── */

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of items and separators */
  items: MenuEntry[];
  /** Override the ARIA role on the menu container. Defaults to "menu".
   *  Use "listbox" for combobox/autocomplete dropdowns. */
  menuRole?: React.AriaRole;
  /** Override the ARIA role on each item. Defaults to "menuitem".
   *  Use "option" when menuRole is "listbox". */
  itemRole?: React.AriaRole;
  /** Render without Menu's own surface — no border, shadow, background, or
   *  rounded corners, and no 200px min-width floor (stretches to 100% of
   *  the parent instead). Use whenever Menu is embedded inside something
   *  that already supplies its own surface (e.g. `Popover`'s content
   *  wrapper) — without this, the two surfaces stack into a visible
   *  "double contained" look (nested border/shadow/background). Item
   *  padding (`p-1`) is preserved either way so rows still have breathing
   *  room from the parent's own edge. */
  bare?: boolean;
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, items, menuRole = "menu", itemRole = "menuitem", bare = false, ...props }, ref) => {
    // `listRef` is the direct parent of the mapped items — same node the
    // keyboard-nav query below has always searched relative to — now also
    // doubling as the scrollable region for the hover-chevron affordance
    // (see scroll-chevron.tsx). Previously this was also the component's
    // own forwarded `ref` (a single div was both the outer surface and the
    // scrollable/keyboard-nav root); splitting the surface into an outer
    // wrapper + this inner scrollable div means the two refs are now
    // properly distinct: `ref` is the whole surface, `listRef` is just the
    // scrolling item list inside it.
    const listRef = React.useRef<HTMLDivElement>(null);

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
      const menu = listRef.current;
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

    // Same hover-chevron affordance as `MenuRadix`/`Select`'s multi-select
    // listbox, instead of a native scrollbar — every scrollable dropdown
    // in the library should look the same unless a consumer specifically
    // wants a native scrollbar (flagged from a screenshot of `Autocomplete`
    // showing a plain OS scrollbar where every other dropdown uses these
    // chevrons). Only actually appears once a consumer's own `className`
    // caps the height (e.g. `Autocomplete`'s `max-h-60`) enough to overflow
    // — most `Menu` consumers render short, non-scrolling lists and never
    // see these at all.
    const { canScrollUp, canScrollDown, onScroll } = useScrollChevrons(listRef, [items]);
    const scrollStep = (delta: number) => { listRef.current?.scrollBy({ top: delta }); };

    return (
      <div
        ref={ref}
        className={cn(
          "p-1 flex flex-col overflow-hidden",
          bare
            ? "w-full"
            : "min-w-[200px] rounded-lyra-lg bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg",
          className
        )}
      >
        {/* Chevrons are siblings of the scrollable div below, not children
            of it — they must stay pinned at the top/bottom of the visible
            surface regardless of scroll position (matching MenuRadix's
            own structure/comment on this exact point). */}
        {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollStep(-6)} />}
        <div
          ref={listRef}
          role={menuRole}
          onKeyDown={handleKeyDown}
          onScroll={onScroll}
          className="flex-1 min-h-0 overflow-y-auto lyra-scrollbar-hide flex flex-col"
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

            if ("sectionLabel" in entry) {
              return (
                <div
                  key={`label-${i}`}
                  className="px-3 pt-2.5 pb-1 lyra-body-sm text-lyra-fg-secondary truncate"
                >
                  {entry.sectionLabel}
                </div>
              );
            }

            return <MenuItemRow key={entry.id} item={entry} itemRole={itemRole} />;
          })}
        </div>
        {canScrollDown && <ScrollChevronButton direction="down" onStep={() => scrollStep(6)} />}
      </div>
    );
  }
);
Menu.displayName = "Menu";

/* ── MenuItemRow (internal) ── */

interface MenuItemRowProps {
  item: MenuItemDef;
  itemRole?: React.AriaRole;
}

const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, itemRole = "menuitem" }) => {
  const [submenuOpen, setSubmenuOpen] = React.useState(false);
  const [submenuPos, setSubmenuPos] = React.useState<{ top?: number; bottom?: number; left?: number; right?: number }>({ top: 0, left: 0 });
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowRef = React.useRef<HTMLDivElement>(null);
  const submenuRef = React.useRef<HTMLDivElement>(null);
  const anchorRectRef = React.useRef<DOMRect | null>(null);
  const hasSubmenu = !!item.submenuContent || (item.submenu && item.submenu.length > 0);

  const openSubmenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Only compute the anchor/initial position on the transition from
    // closed to open. openSubmenu also fires on every re-entry while
    // already open — e.g. the flyout's own onMouseEnter, which exists so
    // moving the cursor off the row and onto the flyout doesn't close it —
    // and resetting the position on those calls would stomp the flip
    // computed by the layout effect below, snapping an already-flipped
    // flyout back to its default (unflipped) spot the moment the cursor
    // reaches it, before the user can interact with it.
    if (!submenuOpen) {
      // Rendered through a portal to document.body (see below) so it can
      // never be clipped by Menu's own overflow-hidden root — a submenu
      // positioned with plain CSS `left-full` inside that container would be
      // cut off entirely, not just its shadow, since it extends past the
      // parent's own clipped bounds. Position is computed here, before open,
      // from this row's own rect (not the whole Menu's).
      const rect = rowRef.current?.getBoundingClientRect();
      if (rect) {
        anchorRectRef.current = rect;
        setSubmenuPos({ top: rect.top, left: rect.right + 4 });
      }
    }
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

  /* Top-align and right-of-row by default (set in openSubmenu above); if
     the flyout's actual rendered size would push it past the bottom or
     right edge of the viewport, flip to bottom-aligned and/or left-of-row
     instead so the whole thing stays visible — e.g. a trigger anchored
     near the right edge of the screen (like AgentProfile's status menu)
     needs its submenu to open to the left. Runs before paint so there's no
     visible flash of the wrong alignment. */
  React.useLayoutEffect(() => {
    if (!submenuOpen) return;
    const el = submenuRef.current;
    const anchor = anchorRectRef.current;
    if (!el || !anchor) return;
    const rect = el.getBoundingClientRect();
    setSubmenuPos((prev) => {
      const next = { ...prev };
      if (rect.right > window.innerWidth) {
        next.left = undefined;
        next.right = window.innerWidth - anchor.left + 4;
      }
      if (rect.bottom > window.innerHeight) {
        next.top = undefined;
        next.bottom = window.innerHeight - anchor.bottom;
      }
      return next;
    });
  }, [submenuOpen]);

  const handleClick = () => {
    if (item.disabled) return;
    if (hasSubmenu) {
      // Always open, never toggle closed — matches the keyboard handler
      // below. Hovering already opens the submenu via onMouseEnter, so a
      // toggle here would immediately close it again on click (the submenu
      // was already open by the time the click fires), making click look
      // like a no-op.
      openSubmenu();
      return;
    }
    item.onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasSubmenu) {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        // Route through openSubmenu (not setSubmenuOpen directly) so a
        // keyboard-triggered open also gets its anchor position computed —
        // otherwise it would open pinned at the flyout's default (0, 0).
        openSubmenu();
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
      ref={rowRef}
      className="relative"
      onMouseEnter={hasSubmenu ? openSubmenu : undefined}
      onMouseLeave={hasSubmenu ? closeSubmenu : undefined}
    >
      <MenuItem
        itemRole={itemRole}
        disabled={item.disabled}
        data-menu-item-id={item.id}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-haspopup={hasSubmenu ? "menu" : undefined}
        aria-expanded={hasSubmenu ? submenuOpen : undefined}
        label={item.label}
        description={item.description}
        icon={item.icon}
        shortcut={item.shortcut}
        rightElement={item.rightElement}
        active={item.active}
        destructive={isDestructive}
        highlighted={hasSubmenu && submenuOpen}
        trailingIcon={
          hasSubmenu && (
            <ChevronRight
              className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          )
        }
      />

      {/* Submenu flyout — top-aligned with this row by default; flips to
          bottom-aligned (see the layout effect above) if that would push
          it past the bottom of the viewport. Rendered through a portal to
          document.body (see openSubmenu above) and positioned with fixed
          viewport coordinates from submenuPos so it's never clipped by
          this Menu's own overflow-hidden root. Renders `submenuContent` as-is
          when provided (for rich, non-menu-list flyouts); otherwise wraps
          `submenu` in a nested Menu. */}
      {hasSubmenu && submenuOpen && ReactDOM.createPortal(
        <div
          ref={submenuRef}
          data-menu-submenu-for={item.id}
          style={{ position: "fixed", top: submenuPos.top, bottom: submenuPos.bottom, left: submenuPos.left, right: submenuPos.right }}
          className={item.submenuZIndexClassName ?? "z-[9999]"}
          onMouseEnter={openSubmenu}
          onMouseLeave={closeSubmenu}
        >
          {item.submenuContent ?? <Menu items={item.submenu!} />}
        </div>,
        document.body
      )}
    </div>
  );
};

export { Menu };
export type { MenuItemDef, MenuEntry, MenuProps, MenuSectionLabel };
