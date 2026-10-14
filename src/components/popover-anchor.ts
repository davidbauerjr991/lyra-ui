/** What Radix's `Popover.Anchor virtualRef` measures. */
export interface MeasurableAnchor {
  getBoundingClientRect(): DOMRect;
}

/**
 * Wraps a virtual anchor element so it keeps reporting its LAST on-page
 * position once the element leaves the page.
 *
 * Why: a popover anchored to some other element (e.g. `CreateNew`'s dial
 * pad, anchored to a Redial button via `Popover`'s `virtualAnchorRef`) keeps
 * measuring that element while it fades out. If the element is removed
 * during the fade — the page navigates away, a panel closes — a detached
 * element measures as all zeros, and the fading popover jumps to the
 * top-left corner of the window for a frame or two. Reporting the last
 * measured position instead lets it fade out where it was.
 *
 * While the element is on the page this measures it live, so open popovers
 * still follow scrolling and resizing exactly as before. A new element
 * starts fresh (no position carried over from the previous one).
 */
export function createLastKnownAnchor(getElement: () => HTMLElement | null | undefined): MeasurableAnchor {
  let lastElement: HTMLElement | null = null;
  let lastRect: DOMRect | null = null;
  return {
    getBoundingClientRect() {
      const element = getElement() ?? null;
      if (element !== lastElement) {
        lastElement = element;
        lastRect = null;
      }
      if (element && element.isConnected) {
        lastRect = element.getBoundingClientRect();
        return lastRect;
      }
      return lastRect ?? element?.getBoundingClientRect() ?? new DOMRect();
    },
  };
}
