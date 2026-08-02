import * as React from "react";
import { MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";
import { type MenuEntry } from "./menu";
import { MenuRadix } from "./menu-radix";
import { Badge } from "./badge";

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

export interface KebabMenuButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className" | "onClick"> {
  /**
   * Extends `HTMLAttributes` (minus `children`/`className`/`onClick`, which
   * this component already owns) so this trigger can be wrapped directly in
   * a `<Tooltip>` — e.g. `channel-row.tsx`'s "More Options" tooltip on this
   * exact kebab. `Tooltip`'s `TooltipPrimitive.Trigger asChild` clones
   * whatever single child it wraps and injects its own hover/focus tracking
   * props (`onPointerEnter`/`onPointerLeave`/`onFocus`/`onBlur`, etc.) onto
   * it — that works automatically for a plain DOM element (React merges
   * cloned props directly onto it), but NOT for a custom component like
   * this one unless it explicitly accepts and forwards those extra props
   * itself. Before this, wrapping `<KebabMenuButton>` in `<Tooltip>` silently
   * did nothing on hover: the injected props landed on this component's own
   * prop object, where they were destructured away and dropped (this
   * function only ever read its own known prop names), never reaching the
   * actual `<button>`/`<span>` Radix needs to attach its hover listeners to.
   * `onClick` is still handled separately below (not spread generically)
   * since it has to be composed with this component's own `stopPropagation`
   * call rather than just overwritten either direction.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
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
  /**
   * Fires whenever the dropdown opens or closes. Lets a caller that also
   * wraps this trigger in its own `Tooltip` (e.g. `Tab`'s `menuItems` slot,
   * or a card header's kebab) know when the dropdown is showing, so it can
   * pass that straight to `Tooltip`'s own `disabled` prop and force the
   * tooltip closed for as long as the dropdown is open. Without this, the
   * two components have no way to coordinate: the tooltip's trigger and the
   * dropdown's trigger are the same DOM node, so nothing tells the tooltip
   * to stay shut once the dropdown takes over that same area — see
   * CONTRIBUTING.md's "Tooltip wrapping a nested Menu trigger" note.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Count badge overlaid on the trigger's top-right corner — hidden when 0
   * or undefined. Same shared idiom `Button`'s own `badge` prop uses
   * (button.tsx: a `relative inline-flex` wrapper around the icon plus a
   * `Badge shape="circle" variant="critical" size="sm"` positioned
   * `absolute -top-2 -right-2`), reproduced here rather than composing
   * `Button` itself — this trigger isn't built on `Button` (see the class
   * comment above: it's its own hand-rolled `<button>`/`<span>` so it can
   * render as either). First added for "View All Apps" (`AgentNextGenPage
   * .tsx`) surfacing an unread-notifications count once Notifications
   * itself is unpinned from the header (and so no longer showing its own
   * `NotificationsBell` badge) — without this, unpinning Notifications
   * would silently hide the only visual cue that new notifications exist.
   */
  badge?: number;
}

const KebabMenuButton = React.forwardRef<HTMLButtonElement, KebabMenuButtonProps>(
  ({ items, ariaLabel, className, as = "button", icon: iconProp, align = "right", onOpenChange, badge, onClick, ...rest }, ref) => {
    const triggerClassName = cn(
      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
      className
    );
    const iconContent = iconProp ?? <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />;
    const icon =
      badge != null && badge > 0 ? (
        <span className="relative inline-flex">
          <span aria-hidden="true">{iconContent}</span>
          <Badge shape="circle" variant="critical" size="sm" count={badge} className="absolute -top-2 -right-2" />
        </span>
      ) : (
        iconContent
      );

    // stopPropagation matches the original's `handleTriggerClick` — keeps a
    // click on the kebab from also bubbling to whatever row/card wraps it
    // (e.g. a table row's own onClick). MenuRadix's own open/close toggle
    // still fires — Radix composes this handler with its internal one
    // rather than replacing it. `onClick` is called through explicitly here
    // (not part of the generic `...rest` spread below) since a wrapping
    // `Tooltip`'s own `asChild` composes an `onClick` onto this trigger too
    // (to dismiss the tooltip on click) — this still has to run alongside
    // (not instead of) that, same as any other prop `Tooltip` injects.
    const handleTriggerClick = (e: React.MouseEvent<HTMLElement>) => {
      onClick?.(e);
      e.stopPropagation();
    };

    const trigger =
      as === "span" ? (
        <span
          role="button"
          tabIndex={0}
          aria-label={ariaLabel}
          className={triggerClassName}
          {...rest}
          onClick={handleTriggerClick}
        >
          {icon}
        </span>
      ) : (
        <button
          type="button"
          aria-label={ariaLabel}
          className={triggerClassName}
          {...rest}
          onClick={handleTriggerClick}
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
        onOpenChange={onOpenChange}
      />
    );
  }
);
KebabMenuButton.displayName = "KebabMenuButton";

export { KebabMenuButton };
