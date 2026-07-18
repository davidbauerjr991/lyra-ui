import * as React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

/**
 * Shared hover-driven scroll-chevron affordance, used by both `MenuRadix`
 * (`@radix-ui/react-dropdown-menu`, which has no ScrollUpButton/
 * ScrollDownButton at all) and `Select`'s multi-select listbox (a plain
 * Popover + Checkbox composition, since Radix's Select primitive is
 * single-value only and its ScrollUpButton/ScrollDownButton are wired to
 * Select's own internal viewport context — not reusable outside it).
 *
 * Extracted into one place after a real bug: the first two independent
 * copies of this logic (one per file) started drifting — a fix applied to
 * one (removing the hover background, per user feedback) wasn't reflected
 * in the other. Both now import from here so there's exactly one
 * implementation to keep correct.
 */

export function useScrollChevrons(ref: React.RefObject<HTMLElement | null>, deps: React.DependencyList) {
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const [canScrollDown, setCanScrollDown] = React.useState(false);

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }, [ref]);

  React.useLayoutEffect(() => {
    requestAnimationFrame(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { canScrollUp, canScrollDown, onScroll: update, recompute: update };
}

/** Continuous hover-driven scroll, not click — matches what Radix's own
 *  Select.ScrollUpButton/ScrollDownButton actually do internally (a
 *  requestAnimationFrame loop that runs for as long as the pointer stays
 *  over the button, stepping the viewport a few pixels each frame). No
 *  hover background — an earlier version had one and it was removed per
 *  feedback; the arrow's own opacity/color is the only affordance. */
export function ScrollChevronButton({
  direction,
  onStep,
}: {
  direction: "up" | "down";
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

  const Icon = direction === "up" ? ChevronUp : ChevronDown;
  return (
    <button
      type="button"
      tabIndex={-1}
      onMouseEnter={start}
      onMouseLeave={stop}
      onMouseDown={(e) => e.preventDefault()}
      aria-label={direction === "up" ? "Scroll up" : "Scroll down"}
      className="shrink-0 flex items-center justify-center py-1 text-lyra-fg-secondary rounded-lyra-xs"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );
}
