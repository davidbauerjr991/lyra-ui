import * as React from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";
import { Menu, type MenuEntry } from "./menu";

/* ── KebabMenuButton ──
   Kebab (⋮) trigger + dropdown. Extracted out of `channel-row.tsx` (where
   it was first built, one per channel row) into its own atom so any other
   component that needs the same "small icon button that opens a Menu"
   pattern — e.g. `DashboardCard`'s header — can reuse it instead of
   re-deriving the same portal/positioning logic a second time. Same
   extraction rationale as `FavoriteButton`: a genuinely reused piece of UI
   shouldn't stay locked inside the one component that happened to need it
   first.

   Rendered via a portal (not inline) so the dropdown isn't clipped by a
   card's own `overflow-hidden`/rounded corners or by neighboring content in
   a scrolling stack — positioned with `fixed` coordinates measured from the
   trigger button's own bounding rect, per the z-index hierarchy in
   CONTRIBUTING.md §5 (`z-[9999]` for the portal wrapper). */

export interface KebabMenuButtonProps {
  items: MenuEntry[];
  ariaLabel: string;
  className?: string;
  /**
   * Render the trigger as a real `<button>` (default) or as a
   * `role="button"` `<span>`. Use `"span"` when composing this inside
   * another real `<button>` — e.g. `Tab`'s `menuItems` slot — since HTML
   * forbids nesting interactive controls inside a `<button>` (the browser
   * will otherwise silently mis-parse the DOM). Same reasoning as
   * `InteractionNavItem`'s own `role="button"` outer `<div>` and `Tab`'s
   * own `onRemove` span. Behavior (portal, positioning, keyboard, outside
   * click) is identical either way — `"span"` just adds `tabIndex={0}` and
   * an Enter/Space key handler to stand in for the button semantics browsers
   * give `<button>` for free.
   */
  as?: "button" | "span";
  /** Trigger icon — defaults to the vertical kebab (⋮). Pass a different
   *  icon (e.g. `MoreHorizontal`) for callers that need the same
   *  button+portal+Menu behavior with a different glyph, like
   *  `BreadcrumbEllipsis` (see breadcrumb.tsx). */
  icon?: React.ReactNode;
  /**
   * Which edge of the trigger the dropdown's own edge aligns to (default:
   * `"right"`). `"right"` — the dropdown's right edge aligns with the
   * trigger's right edge, opening to the left — is correct for a trigger
   * that sits at the *end* of a row (a card header, a table row) where
   * opening rightward would run off the viewport. `"left"` — the
   * dropdown's left edge aligns with the trigger's left edge, opening to
   * the right — is for triggers nearer the left edge of the screen, e.g.
   * `BreadcrumbEllipsis` mid-trail; `"right"` there runs the dropdown off
   * the left of the viewport instead.
   */
  align?: "left" | "right";
}

const KebabMenuButton = React.forwardRef<HTMLButtonElement, KebabMenuButtonProps>(
  ({ items, ariaLabel, className, as = "button", icon: iconProp, align = "right" }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);
    const internalButtonRef = React.useRef<HTMLElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => internalButtonRef.current as HTMLButtonElement);

    const openMenu = () => {
      const rect = internalButtonRef.current?.getBoundingClientRect();
      if (rect) setPosition({ top: rect.bottom + 4, left: align === "left" ? rect.left : rect.right });
      setOpen(true);
    };

    React.useEffect(() => {
      if (!open) return;
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          menuRef.current && !menuRef.current.contains(e.target as Node) &&
          internalButtonRef.current && !internalButtonRef.current.contains(e.target as Node)
        ) setOpen(false);
      };
      const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [open]);

    const entries: MenuEntry[] = items.map((entry) =>
      entry === "separator" || "sectionLabel" in entry
        ? entry
        : { ...entry, onClick: () => { entry.onClick?.(); setOpen(false); } }
    );

    const handleTriggerClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (open) setOpen(false);
      else openMenu();
    };
    const triggerClassName = cn(
      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
      className
    );
    const icon = iconProp ?? <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />;

    return (
      <>
        {as === "span" ? (
          <span
            ref={internalButtonRef as unknown as React.RefObject<HTMLSpanElement>}
            role="button"
            tabIndex={0}
            onClick={handleTriggerClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleTriggerClick(e as unknown as React.MouseEvent);
              }
            }}
            aria-label={ariaLabel}
            aria-haspopup="menu"
            aria-expanded={open}
            className={triggerClassName}
          >
            {icon}
          </span>
        ) : (
          <button
            ref={internalButtonRef as unknown as React.RefObject<HTMLButtonElement>}
            type="button"
            onClick={handleTriggerClick}
            aria-label={ariaLabel}
            aria-haspopup="menu"
            aria-expanded={open}
            className={triggerClassName}
          >
            {icon}
          </button>
        )}
        {open && position && createPortal(
          <div
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: align === "left" ? undefined : "translateX(-100%)",
              zIndex: 9999,
            }}
          >
            <Menu items={entries} aria-label={ariaLabel} />
          </div>,
          document.body
        )}
      </>
    );
  }
);
KebabMenuButton.displayName = "KebabMenuButton";

export { KebabMenuButton };
