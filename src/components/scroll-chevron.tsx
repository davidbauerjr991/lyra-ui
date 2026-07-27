import * as React from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Shared hover-driven scroll-chevron affordance, used by `MenuRadix`
 * (`@radix-ui/react-dropdown-menu`, which has no ScrollUpButton/
 * ScrollDownButton at all), `Select`'s multi-select listbox (a plain
 * Popover + Checkbox composition, since Radix's Select primitive is
 * single-value only and its ScrollUpButton/ScrollDownButton are wired to
 * Select's own internal viewport context — not reusable outside it), and
 * `TabList`'s "wide" overflow mode's horizontal scroll (tabs.tsx).
 *
 * Extracted into one place after a real bug: the first two independent
 * copies of this logic (one per file) started drifting — a fix applied to
 * one (removing the hover background, per user feedback) wasn't reflected
 * in the other. All consumers now import from here so there's exactly one
 * implementation to keep correct.
 *
 * Originally vertical-only (`up`/`down`, `scrollTop`/`scrollHeight`) since
 * both original consumers were dropdown lists. `TabList`'s chevrons used to
 * be a separate, click-to-scroll-one-tab implementation (`scrollTabsBy`,
 * discrete `scrollTo({ behavior: "smooth" })` steps, its own `canScrollLeft`/
 * `canScrollRight`/`tabOverflow` state) — replaced with this shared,
 * continuous hover-driven affordance per explicit request ("make the
 * chevrons scroll on hover like the select menu chevrons... no need to
 * click"), so `orientation` was added rather than forking a second copy of
 * this same logic for the horizontal case.
 */

export function useScrollChevrons(
  ref: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList,
  orientation: "vertical" | "horizontal" = "vertical"
) {
  // Named for the scroll axis's start/end edge, not literally "up"/"down" —
  // "Start" is `scrollTop`/`scrollLeft` > 0 (already vertical's "up"), "End"
  // is "there's more content past the current viewport" (vertical's
  // "down"). Kept as two booleans (not renamed to canScrollLeft/Right) so
  // every consumer — vertical or horizontal — destructures the same two
  // names regardless of orientation.
  const [canScrollStart, setCanScrollStart] = React.useState(false);
  const [canScrollEnd, setCanScrollEnd] = React.useState(false);

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (orientation === "horizontal") {
      setCanScrollStart(el.scrollLeft > 0);
      setCanScrollEnd(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    } else {
      setCanScrollStart(el.scrollTop > 0);
      setCanScrollEnd(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
    }
  }, [ref, orientation]);

  React.useLayoutEffect(() => {
    requestAnimationFrame(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {
    canScrollStart,
    canScrollEnd,
    // Back-compat aliases — every existing (vertical) consumer destructures
    // these names; keeping them means `select.tsx`/`menu-radix.tsx` don't
    // need to change at all.
    canScrollUp: canScrollStart,
    canScrollDown: canScrollEnd,
    onScroll: update,
    recompute: update,
  };
}

/** Continuous hover-driven scroll, not click — matches what Radix's own
 *  Select.ScrollUpButton/ScrollDownButton actually do internally (a
 *  requestAnimationFrame loop that runs for as long as the pointer stays
 *  over the button, stepping the viewport a few pixels each frame). No
 *  hover background — an earlier version had one and it was removed per
 *  feedback; the arrow's own opacity/color is the only affordance.
 *  `direction` covers both axes now: `"up"`/`"down"` for a vertical list
 *  (`Select`, `MenuRadix`), `"left"`/`"right"` for `TabList`'s horizontal
 *  row. */
export function ScrollChevronButton({
  direction,
  onStep,
}: {
  direction: "up" | "down" | "left" | "right";
  onStep: () => void;
}) {
  const rafRef = React.useRef<number | null>(null);

  const stop = React.useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const start = React.useCallback(() => {
    const tick = () => {
      onStep();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [onStep]);

  React.useEffect(() => stop, [stop]);

  const isHorizontal = direction === "left" || direction === "right";
  const Icon = { up: ChevronUp, down: ChevronDown, left: ChevronLeft, right: ChevronRight }[direction];
  const ariaLabel = { up: "Scroll up", down: "Scroll down", left: "Scroll left", right: "Scroll right" }[direction];

  return (
    <button
      type="button"
      tabIndex={-1}
      onMouseEnter={start}
      onMouseLeave={stop}
      onMouseDown={(e) => e.preventDefault()}
      aria-label={ariaLabel}
      className={cn(
        "shrink-0 flex items-center justify-center text-lyra-fg-secondary rounded-lyra-xs",
        // Vertical chevrons stack above/below a column, so their own
        // padding is on the cross axis (top/bottom); horizontal chevrons
        // flank a row, so theirs is left/right instead.
        isHorizontal ? "px-1" : "py-1"
      )}
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );
}
