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
}

const KebabMenuButton = React.forwardRef<HTMLButtonElement, KebabMenuButtonProps>(
  ({ items, ariaLabel, className }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);
    const internalButtonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => internalButtonRef.current as HTMLButtonElement);

    const openMenu = () => {
      const rect = internalButtonRef.current?.getBoundingClientRect();
      if (rect) setPosition({ top: rect.bottom + 4, left: rect.right });
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

    return (
      <>
        <button
          ref={internalButtonRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (open) setOpen(false);
            else openMenu();
          }}
          aria-label={ariaLabel}
          aria-haspopup="menu"
          aria-expanded={open}
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
            className
          )}
        >
          <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        </button>
        {open && position && createPortal(
          <div
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "translateX(-100%)",
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
