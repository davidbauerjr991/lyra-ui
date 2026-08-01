import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { PanelHeader } from "./panel-header";

/* ── Types ── */

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

/** Radix's own Content prop types, reused below so the passthrough handlers
 *  can't drift out of sync with the primitive they forward to. */
type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

export interface PopoverProps {
  children: React.ReactElement;
  content: React.ReactNode;
  /** Fixed header rendered outside the scroll area, above `content` — e.g. a
   *  custom title bar with a back/close button, or a group picker + search
   *  field that should stay pinned while only the list below it scrolls.
   *  For a plain string title without custom controls, use `title` instead;
   *  this prop is for anything with its own markup/behavior. */
  header?: React.ReactNode;
  /** Fixed footer rendered outside the scroll area */
  footer?: React.ReactNode;
  title?: string;
  placement?: PopoverPlacement;
  /** Alignment relative to the trigger along the placement axis (default: "center") */
  align?: "start" | "center" | "end";
  /** Gap between the trigger and the content, in pixels (default: 10) */
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showArrow?: boolean;
  maxHeight?: string;
  maxWidth?: string;
  /**
   * Whether the `content` slot gets a built-in 20px (`px-5`) left/right
   * inset (default: true). The built-in `title` header (via `PanelHeader`)
   * is aligned to the same 20px, so the header and body line up on the
   * same left/right edge. This is the right default for plain body
   * content — text, forms, a couple of fields — which is why every simple
   * `content` usage no longer needs to remember its own horizontal padding.
   *
   * Set to `false` for content that needs to span edge-to-edge instead —
   * a `Menu`/listbox whose rows already carry their own small `p-1`-style
   * inset for the hover background (`select.tsx`'s multi-select listbox,
   * `create-new.tsx`'s channel/action menus, `agent-profile.tsx`'s status
   * menu, both menu demos in `MenuRadix.stories.tsx`), or content that
   * supplies its own complete chrome and deliberately wants zero framing
   * from Popover itself (`interaction-nav-item.tsx`'s hover-preview card,
   * `create-new.tsx`'s multi-screen panel, `table.tsx`'s Advanced Search,
   * whose `advancedSearchContent` is an arbitrary consumer-supplied slot
   * that already owns its own padding end to end). An automatic inset
   * would double up with padding those cases already provide, or break a
   * full-bleed row's flush alignment against the panel's own edges.
   */
  bodyPadding?: boolean;
  className?: string;
  /** Passthrough Radix Content event hooks for cases that need more control
   *  than the default behavior — e.g. focusing a specific field on open
   *  instead of the first focusable element, or ignoring outside-clicks on
   *  a portaled submenu rendered outside this popover's own DOM subtree.
   *  Left undefined, Radix's defaults apply exactly as before. */
  onOpenAutoFocus?: PopoverContentProps["onOpenAutoFocus"];
  onCloseAutoFocus?: PopoverContentProps["onCloseAutoFocus"];
  onEscapeKeyDown?: PopoverContentProps["onEscapeKeyDown"];
  onInteractOutside?: PopoverContentProps["onInteractOutside"];
}

/* ── Arrow ──
   Was a hand-rolled CSS rotated square, always horizontally/vertically
   centered on the *content box* via `left-1/2`/`top-1/2` (same approach
   `tooltip.tsx`'s arrow used to take, and the same bug: as soon as Radix's
   `avoidCollisions` shifts the content box to stay on-screen, a
   fixed-position hand-rolled arrow drifts away from the actual trigger
   instead of following it). A rotated square is also fundamentally the
   wrong shape for a non-square arrow — rotating a 24×12 rectangle 45°
   produces a lopsided rhombus, not a symmetric triangle, so a wider/
   flatter arrow can't be done with this trick at all.

   Fixed the same way `tooltip.tsx`'s arrow was: render Radix's real
   `PopoverPrimitive.Arrow` (built on `@radix-ui/react-popper`'s `Arrow`,
   the same primitive Tooltip's Content sits on) instead. Radix measures
   this element and feeds it into Floating UI's `arrow` middleware, which
   repositions it along the content box's cross-axis to stay centered on
   the trigger no matter how far the box has shifted, and auto-rotates it
   per side — no more manual `group-data-[side=*]` classes needed.

   Styling note (see tooltip.tsx's own arrow comment for the full
   explanation): don't pass `asChild`/custom children to try to render a
   two-tone (border + fill) shape — `@radix-ui/react-arrow`'s `asChild`
   passes straight through to the underlying `Primitive.svg`'s own,
   unrelated `asChild`, which swaps the `<svg>` for a `Slot` that requires
   exactly one child; two stacked polygons either throw or silently render
   nothing. Style the *default* polygon purely via `className`/`style` on
   `Arrow` itself instead — `fill`/`stroke`/`stroke-width` are inherited SVG
   properties that cascade to the polygon for free. The default polygon is
   always `points="0,0 30,0 15,10"` regardless of the `width`/`height`
   props (those just scale the rendered SVG's viewBox, `preserveAspectRatio="none"`
   stretches non-uniformly to fit), so the same `stroke-dasharray: "0 30 40"`
   mask Tooltip uses — 0 drawn, skip the 30-unit flat base (the edge that
   overlaps the content box), draw the next 40 units (comfortably covers
   both ~18-unit slanted edges) — works unchanged at this larger 24×12 size
   too, leaving the border only on the two visible slanted "wing" edges. */
const PopoverArrow = () => (
  <PopoverPrimitive.Arrow
    width={24}
    height={12}
    className="fill-lyra-bg-surface-overlay stroke-lyra-border-default stroke-1"
    style={{ strokeDasharray: "0 30 40" }}
  />
);

/* ── Component ── */

// React re-dispatches synthetic events up the *React* fiber tree, not the
// DOM tree — a Portal's content still bubbles to its logical React
// ancestors even though it's mounted elsewhere in the DOM (React docs:
// "an event fired from inside a portal will propagate to ancestors in the
// containing React tree"). Popover.Content is rendered through exactly
// such a Portal, so when a Popover is wrapped by a Tooltip from the
// *outside* (the only way Tooltip+Popover can compose — see the
// "Tooltip must wrap Popover from the outside" comments in create-new.tsx
// and agent-profile.tsx), hovering or focusing anything inside the
// popover panel bubbles a pointermove/focus event all the way up to that
// outer Tooltip's trigger. Radix Tooltip's own Trigger opens on
// onPointerMove/onPointerDown/onFocus and closes on onPointerLeave/onBlur
// (see @radix-ui/react-tooltip's Trigger), so without this guard, hovering
// e.g. a menu item inside the popover re-opens (or re-closes) a completely
// unrelated tooltip sitting on the icon button that opened the popover.
// Stopping these at the Content root contains them to this popover's own
// subtree — Radix's own outside-click/focus-trap handling lives on native
// document-level listeners, not React bubbling, so it's unaffected.
// See CONTRIBUTING.md §17.
const stopSyntheticBubble = (e: React.SyntheticEvent) => e.stopPropagation();

const Popover = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverProps>(({
  children,
  content,
  header,
  footer,
  title,
  placement = "bottom",
  align = "center",
  sideOffset = 10,
  open,
  onOpenChange,
  showArrow = true,
  maxHeight,
  maxWidth,
  bodyPadding = true,
  className,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onInteractOutside,
}, ref) => (
  <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        side={placement}
        align={align}
        sideOffset={sideOffset}
        onOpenAutoFocus={onOpenAutoFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onInteractOutside={onInteractOutside}
        onPointerMove={stopSyntheticBubble}
        onPointerDown={stopSyntheticBubble}
        onPointerLeave={stopSyntheticBubble}
        onFocus={stopSyntheticBubble}
        onBlur={stopSyntheticBubble}
        style={{
          maxWidth,
          /* overflow:hidden + maxHeight constrains the flex algorithm so children can distribute space.
             Falls back to Radix Popper's own computed available-height (this
             CSS var is set automatically on Content, from `avoidCollisions`'s
             own measurement of the real gap between the trigger and the
             nearest viewport edge — see @radix-ui/react-popper) whenever the
             caller doesn't pass an explicit `maxHeight`, so a header/footer
             popover (title + pinned actions, e.g. this app's own "Log
             Outcome" popover) always self-constrains to whatever room is
             actually available and scrolls its `content` instead of being
             cut off by the viewport edge — per explicit follow-up request,
             this no longer requires each such consumer to remember to pass
             its own `maxHeight`. Content-only popovers (no header/footer)
             are deliberately NOT given this same fallback below — that's the
             case the "dead weight" comment further down guards against, and
             plain body content is a fixed one-section shape that doesn't
             carry the same "silently cut off, no way to reach the rest"
             risk a pinned title/footer sandwich does. */
          ...(header || footer
            ? {
                maxHeight: maxHeight ?? "var(--radix-popover-content-available-height)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }
            : {}),
        }}
        className={cn(
          "relative z-50",
          // border-default resolves to rgba(0, 0, 0, 0.16) in light mode
          // (lyra-tokens.css) — "border-soft" per request; there's no
          // token literally named that, but border-default is the exact
          // 0.16-alpha value asked for (border-subtle, used before, is a
          // lighter 0.10).
          "rounded-lyra-lg border border-lyra-border-default bg-lyra-bg-surface-overlay shadow-lg",
          "animate-in fade-in-0 duration-150",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-100",
          "data-[state=closed]:data-[side=bottom]:slide-out-to-top-1 data-[state=closed]:data-[side=top]:slide-out-to-bottom-1",
          "data-[state=closed]:data-[side=left]:slide-out-to-right-1 data-[state=closed]:data-[side=right]:slide-out-to-left-1",
          className
        )}
      >
        {/* px-5 pb-0: ContainerHeader/PanelHeader's own base classes are
            `px-4 py-2.5` — overridden here so the title row lines up with
            the body's own 20px (`px-5`) left/right inset instead of
            ContainerHeader's usual 16px, and so the bottom half of that
            `py-2.5` (which just adds dead space between the title and
            whatever sits directly below it) is dropped. `cn`'s twMerge
            resolves `px-4 py-2.5` + `px-5 pb-0` down to effectively
            `px-5 pt-2.5 pb-0`. */}
        {title && <PanelHeader title={title} bordered={false} className="px-5 pb-0" />}
        {header && <div style={{ flexShrink: 0 }}>{header}</div>}
        {/* Content scrolls; header/footer are flex-shrink-0 so they stay
            visible. A header/footer popover always gets `overflow-auto` now
            (falling back to the Radix available-height var above when no
            explicit `maxHeight` is passed — see that style block's own doc
            comment). Content-only popovers keep the old behavior exactly:
            overflow-auto is only applied when an explicit `maxHeight` is
            passed — otherwise it's dead weight that can backfire: a
            CSS-transform entrance animation on something inside (e.g. a
            slide-in) can register as scrollable overflow and paint a
            horizontal scrollbar even though nothing is meant to scroll here.
            `bodyPadding`'s `px-5` (20px) is the default inset for plain body
            content — see its own doc comment above for which real consumers
            opt out with `bodyPadding={false}` instead (full-bleed Menu/
            listbox rows, or content supplying its own complete chrome). */}
        <div
          className={cn(bodyPadding && "px-5", (header || footer || maxHeight) && "overflow-auto")}
          style={
            header || footer
              ? { flex: "1 1 auto", minHeight: 0, overflowY: "auto" }
              : maxHeight
              ? { maxHeight }
              : undefined
          }
        >
          {content}
        </div>
        {footer && <div style={{ flexShrink: 0 }}>{footer}</div>}
        {showArrow && <PopoverArrow />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
));

Popover.displayName = "Popover";

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = PopoverPrimitive.Content;
const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };
