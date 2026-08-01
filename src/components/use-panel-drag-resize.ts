import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shared drag-to-resize plumbing for `SidePanel` and `InteriorPanel`.
 *
 * Not exported from `index.ts` — this is internal wiring shared between the
 * two panel components (which are otherwise intentionally separate, public
 * components; see CONTRIBUTING.md "Panels" section) so the resize math and
 * cursor/user-select handling during a drag doesn't have to be hand-copied
 * twice and drift apart.
 */
export function usePanelDragResize(
  side: "left" | "right",
  initialWidth: number,
  min: number,
  max: number,
  onResizeStateChange?: (isResizing: boolean) => void,
  onWidthChange?: (width: number) => void
) {
  const [dragWidth, setDragWidth] = useState<number | null>(null);
  // Once a drag has happened, `dragWidth` would otherwise permanently win
  // over `initialWidth` in the `?? ` below (see the returned `width`),
  // silently ignoring any FUTURE external change to the caller's own
  // `width` prop (e.g. a consumer programmatically setting a new width to
  // animate a full-screen toggle) even though this is meant to be a
  // controlled value. Resetting it back to `null` here whenever
  // `initialWidth` itself changes keeps `dragWidth` scoped to only the
  // currently-in-progress drag gesture (still read once at its start via
  // `startW.current` below) rather than persisting past it — safe because
  // by the time this prop changes from anything OTHER than this hook's own
  // `onWidthChange` echo, the caller's value is already the source of
  // truth `startW.current` should read from on the next drag anyway.
  useEffect(() => {
    setDragWidth(null);
  }, [initialWidth]);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startW = useRef(0);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dragging.current = true;
      startX.current = e.clientX;
      startW.current = dragWidth ?? initialWidth;
      onResizeStateChange?.(true);

      const onMove = (ev: MouseEvent) => {
        if (!dragging.current) return;
        const delta = side === "right"
          ? startX.current - ev.clientX
          : ev.clientX - startX.current;
        const newW = Math.min(max, Math.max(min, startW.current + delta));
        setDragWidth(newW);
        onWidthChange?.(newW);
      };
      const onUp = () => {
        dragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        onResizeStateChange?.(false);
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [side, dragWidth, initialWidth, min, max, onResizeStateChange, onWidthChange]
  );

  return { width: dragWidth ?? initialWidth, onMouseDown };
}
