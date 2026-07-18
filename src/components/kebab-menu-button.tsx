import * as React from "react";
import { MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";
import { type MenuEntry } from "./menu";
import { MenuRadix } from "./menu-radix";

/* ── KebabMenuButton ──
   Kebab (⋮) trigger + dropdown. Extracted out of `channel-row.tsx` (where
   it was first built, one per channel row) into its own atom so any other
   component that needs the same "small icon button that opens a Menu"
   pattern — e.g. `DashboardCard`'s header — can reuse it instead of
   re-deriving the same trigger/positioning logic a second time.

   Built on `MenuRadix` (`@radix-ui/react-dropdown-menu`) rather than a
   hand-rolled portal + `getBoundingClientRect` + outside-click/Escape
   listener (what this file used to do) — this is exactly the
   "self-triggered" shape `MenuRadix` is designed for: this component
   already owns its own trigger and doesn't need to embed a bare list
   inside someone else's surface. Radix's own collision-aware positioning,
   outside-click/Escape dismissal, and close-on-select replace all of that
   hand-rolled logic; the exported `KebabMenuButtonProps` API is unchanged,
   so no caller needs to change. */

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
   * own `onRemove` span. Behavior (positioning, keyboard, outside click) is
   * identical either way — `"span"` just adds `tabIndex={0}` and an
   * Enter/Space key handler to stand in for the button semantics browsers
   * give `<button>` for free.
   */
  as?: "button" | "span";
  /** Trigger icon — defaults to the vertical kebab (⋮). Pass a different
   *  icon (e.g. `MoreHorizontal`) for callers that need the same
   *  button+dropdown behavior with a different glyph, like
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
   * the left of the viewport instead. Maps directly to Radix's own
   * `align="end"`/`"start"`.
   */
  align?: "left" | "right";
}

const KebabMenuButton = React.forwardRef<HTMLButtonElement, KebabMenuButtonProps>(
  ({ items, ariaLabel, className, as = "button", icon: iconProp, align = "right" }, ref) => {
    const triggerClassName = cn(
      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
      className
    );
    const icon = iconProp ?? <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />;

    // stopPropagation matches the original's `handleTriggerClick` — keeps a
    // click on the kebab from also bubbling to whatever row/card wraps it
    // (e.g. a table row's own onClick). MenuRadix's own open/close toggle
    // still fires — Radix composes this handler with its internal one
    // rather than replacing it.
    const trigger =
      as === "span" ? (
        <span
          role="button"
          tabIndex={0}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          aria-label={ariaLabel}
          className={triggerClassName}
        >
          {icon}
        </span>
      ) : (
        <button
          type="button"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          aria-label={ariaLabel}
          className={triggerClassName}
        >
          {icon}
        </button>
      );

    return (
      <MenuRadix
        ref={ref}
        trigger={trigger}
        items={items}
        align={align === "left" ? "start" : "end"}
        sideOffset={4}
      />
    );
  }
);
KebabMenuButton.displayName = "KebabMenuButton";

export { KebabMenuButton };
