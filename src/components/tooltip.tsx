import * as React from "react";
import { useState, useEffect } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../lib/utils";

/* ── Types ── */

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delayMs?: number;
  className?: string;
  children: React.ReactElement;
  asLabel?: boolean;
  /** Let Radix flip `placement` to whichever side actually has room
   *  (default: true). Set to `false` when the caller needs a deterministic
   *  side regardless of viewport/container edges — e.g. a short tooltip
   *  that's always meant to open toward a specific side of its trigger. */
  avoidCollisions?: boolean;
  /** Force the tooltip permanently closed (default: false) without
   *  conditionally removing the `<Tooltip>` wrapper from the tree. Useful
   *  when a trigger sometimes doesn't need a tooltip (e.g. it already shows
   *  its own visible label) but must keep the exact same wrapper structure
   *  across that state change — conditionally wrapping vs. not wrapping a
   *  child in `<Tooltip>` changes the JSX tree shape, which forces React to
   *  unmount and remount everything inside it (including a `Popover` and
   *  its own open state), breaking any CSS transition on the trigger and
   *  losing in-progress interaction state. Keep the wrapper, toggle
   *  `disabled` instead. */
  disabled?: boolean;
}

/* ── Arrow ──
   Was a hand-rolled CSS rotated square, always horizontally/vertically
   centered on the *content box* via `left-1/2`/`top-1/2` — which is wrong
   as soon as Radix shifts that box to avoid a viewport edge (its default
   `avoidCollisions` behavior keeps the requested `side`, e.g. "bottom", and
   just slides the box left/right to stay on-screen). The box moves, the
   hand-rolled arrow doesn't, so the triangle drifts away from the actual
   trigger center exactly like the report: tooltip pinned bottom-right of a
   button near the screen edge, arrow floating off to one side instead of
   pointing at the button.

   Fixed by rendering Radix's real `TooltipPrimitive.Arrow` (built on
   `@radix-ui/react-popper`'s `Arrow`) instead. Radix measures this element
   and feeds it into Floating UI's `arrow` middleware, which repositions it
   along the content box's cross-axis to stay centered on the trigger no
   matter how far the box has shifted — and also auto-rotates it per side
   (no more manual `group-data-[side=*]` classes needed). If centering ever
   becomes geometrically impossible (box already flush against the padding
   edge with nowhere left to slide the arrow), Radix hides the arrow rather
   than showing a misaligned one, which is a better fallback than what was
   here before.

   Note this does NOT make the tooltip flip to a left/right placement when
   horizontally constrained — `avoidCollisions` only flips the *main* axis
   (e.g. bottom → top) when there's no room in the requested direction; a
   horizontal shift while `side="bottom"` is Radix's normal, correct
   behavior for a cross-axis collision, not a bug. Pass an explicit
   `placement="left"`/`"right"` on a per-trigger basis if a given tooltip
   specifically needs to never sit bottom/top near that edge.

   Styling note: don't pass `asChild` to `TooltipPrimitive.Arrow` to try to
   render a custom two-tone (border + fill) shape. `@radix-ui/react-arrow`'s
   own `asChild` check isn't scoped to "use my custom children instead of
   the default polygon" the way it looks — the prop also passes straight
   through to the underlying `Primitive.svg`, which has its *own*,
   unrelated `asChild` (Radix's general compose-into-child-element
   pattern) and swaps the outer `<svg>` itself for a `Slot`. A `Slot`
   requires exactly one child element; passing the two stacked polygons
   needed for a bordered look either throws or silently renders nothing —
   which is exactly what made the arrow disappear entirely after an earlier
   attempt at this.

   So: no `asChild`, no custom children. Style the *default* polygon purely
   via `className`/`style` props on `Arrow` itself — those land on the
   outer `<svg>`, and `fill`/`stroke`/`stroke-width` are inherited SVG
   properties, so they cascade down to the polygon with nothing extra
   needed.

   Getting the border onto just the two slanted "wing" edges (not the flat
   base that overlaps the content box) turns out not to need custom
   children at all: the default polygon is always `points="0,0 30,0 15,10"`
   — a fixed path, traced in that point order — and Radix's own per-side
   `rotate()` on the wrapping `<span>` (see `PopperArrow` in
   `@radix-ui/react-popper`) is specifically designed to keep the *same*
   first edge (0,0 → 30,0) flush against the content box for every side,
   only rotating which way the tip points on screen. That first edge is
   always exactly 30 (of the viewBox's 30×10) units long, so
   `stroke-dasharray: "0 30 40"` — 0 drawn, skip 30 (hides the base edge),
   then draw the next 40 units (comfortably covers both remaining slanted
   edges, ~36 units combined) — masks the stroke off that one edge and
   leaves it on the other two, recreating the original two-edge-only
   bordered-diamond look without ever touching `asChild`/`Slot`. */
const TooltipArrow = () => (
  <TooltipPrimitive.Arrow
    width={16}
    height={8}
    className="fill-lyra-bg-surface-overlay stroke-lyra-border-subtle stroke-1"
    style={{ strokeDasharray: "0 30 40" }}
  />
);

/* ── Tooltip ── */

const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = "top",
  delayMs = 200,
  className,
  children,
  asLabel = false,
  avoidCollisions = true,
  disabled = false,
}) => {
  const contentString = typeof content === "string" ? content : undefined;
  const triggerAriaProps: Record<string, unknown> = {};
  if (asLabel && contentString) {
    triggerAriaProps["aria-label"] = contentString;
  }

  // Guard against tooltip firing on mount (e.g. when a modal opens under the cursor —
  // browsers synthesize a pointer event for whatever now sits under a stationary
  // cursor when new DOM appears, which would otherwise pop the tooltip open with no
  // real hover intent). That phantom event fires in the same tick the content mounts,
  // so a short guard is enough to catch it. Keep this short: any Tooltip that lives
  // inside a Popover/Menu remounts (and restarts this guard) every time that content
  // reopens, since Radix unmounts it on close. A long guard here previously raced
  // against completely normal, fast hovering right after opening a menu — e.g. the
  // favorite-star tooltip in AgentProfile's status menu, which only becomes reachable
  // after hovering its row, an interaction that easily happens within a couple hundred
  // ms of the menu opening.
  const [allowOpen, setAllowOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAllowOpen(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Per a real, reported bug (console flooded with "Tooltip is changing from
  // controlled to uncontrolled" warnings): `open` below used to be
  // `disabled || !allowOpen ? false : undefined` — a literal `false` (a
  // controlled value) for as long as either guard held, then `undefined` (an
  // UNCONTROLLED value, letting Radix drive its own internal open state) the
  // moment `allowOpen` flipped true ~50ms after mount. React treats whether
  // `open` was first passed as `undefined` as fixing this `Root` as
  // "uncontrolled" for its whole lifetime — switching to a defined value
  // later (or back) is exactly the anti-pattern this warning exists for, and
  // it fired on literally every `Tooltip` in the app, every mount, ~50ms in.
  // Fixed by keeping `open` a plain boolean for the component's entire
  // lifetime — never `undefined` — with its own `open`/`setOpen` state
  // standing in for Radix's internal one (updated via `onOpenChange`, same
  // as any fully-controlled Radix primitive) whenever neither guard is
  // active; the guards simply override that state to `false` while they
  // hold, rather than handing control back to Radix.
  const [open, setOpen] = useState(false);

  return (
    <TooltipPrimitive.Provider delayDuration={delayMs} skipDelayDuration={0}>
      <TooltipPrimitive.Root
        open={disabled || !allowOpen ? false : open}
        onOpenChange={(next) => {
          if (disabled || !allowOpen) return;
          setOpen(next);
        }}
      >
        <TooltipPrimitive.Trigger asChild {...triggerAriaProps}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placement}
            sideOffset={8}
            avoidCollisions={avoidCollisions}
            collisionPadding={8}
            className={cn(
              "relative z-[10000]",
              "rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay px-3 py-2 shadow-md",
              "lyra-body-md text-lyra-fg-default",
              "animate-in fade-in-0 duration-100",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-75",
              className
            )}
          >
            {content}
            <TooltipArrow />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = "Tooltip";

export { Tooltip };
export type { TooltipProps, TooltipPlacement };
