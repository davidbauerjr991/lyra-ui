import * as React from "react";
import { cn } from "../lib/utils";
import { Link } from "./link";

/** Default `id` of the element a SkipLink jumps to. `AdminShell` puts it on its content column. */
export const MAIN_CONTENT_ID = "main-content";

export interface SkipLinkProps {
  /**
   * `id` of the element to move focus to (default `"main-content"`). If no
   * element has this id, falls back to the page's first `<main>` /
   * `[role="main"]`; if there is none either, the link does nothing.
   */
  targetId?: string;
  /** Link text (default "Skip to main content"). */
  children?: React.ReactNode;
  className?: string;
}

/* ── SkipLink ──
 *  A "bypass block" link (WCAG 2.4.1): invisible until a keyboard user tabs
 *  onto it, then it appears and, on Enter, moves focus straight to the main
 *  content so they don't have to tab through the whole nav / side panel first.
 *
 *  Composes `Link` (renders an `<a>`) — only the "hidden until focused" chrome
 *  is added here. The jump is handled in JS (`preventDefault` + `focus()`)
 *  rather than left to the `#hash` so it also works in hash-routed or
 *  single-page apps where changing the hash would navigate. The target gets
 *  `tabindex="-1"` if it doesn't already have one so it can take focus.
 *
 *  Built into `LeftNav` and `SidePanel` (`side="left"`); use it directly for
 *  anything else that sits ahead of the main content in tab order. */
const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ targetId = MAIN_CONTENT_ID, children = "Skip to main content", className }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const target =
        document.getElementById(targetId) ?? document.querySelector<HTMLElement>("main, [role='main']");
      if (!target) return;
      e.preventDefault();
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus();
    };
    return (
      <Link
        ref={ref}
        href={`#${targetId}`}
        onClick={handleClick}
        className={cn(
          // Visually hidden until keyboard focus, then a small floating chip.
          "sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[30] focus:whitespace-nowrap",
          "focus:rounded-lyra-md focus:border focus:border-lyra-border-subtle focus:bg-lyra-bg-surface-base focus:px-3 focus:py-2 focus:shadow-lg",
          className
        )}
      >
        {children}
      </Link>
    );
  }
);
SkipLink.displayName = "SkipLink";

export { SkipLink };
