import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Link ──
 *  Extracted from a pattern already hand-rolled twice in this codebase —
 *  `contact-overview.tsx`'s own "View customer info" (both the Contact
 *  Snapshot row's inline link and the Autosummary block's own copy) and
 *  agent-next-gen-v3's "View All"/"Edit" links (agent-next-gen-customer-
 *  info-panel.tsx) — always the same shape: `lyra-body-sm`/`lyra-body-md`
 *  + `text-lyra-fg-link` + `hover:underline`, rendered as a plain
 *  `<button type="button">` (these are in-app action triggers — "open
 *  this panel," "start editing" — not real URL navigation, so a `<button>`
 *  is the correct native element, not an `<a>` with no real `href`).
 *
 *  No Radix primitive covers this (checked Radix's own primitive catalog
 *  and this package's existing `@radix-ui/react-*` dependencies — nothing
 *  named/shaped like a link exists there; a link has no complex
 *  open/closed or focus-trap state machine to justify one), so this is a
 *  Custom, not Headless, Primitive — plain `cva` variants over a native
 *  button, same shape as `button.tsx`'s own `buttonVariants`. */

const linkVariants = cva(
  "inline-flex items-center gap-1.5 text-left text-lyra-fg-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 rounded-lyra-xs disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      size: {
        sm: "lyra-body-sm",
        md: "lyra-body-md",
      },
      // "hover" (default) is the original behavior: no underline at rest.
      // "always" underlines at rest — needed when the link sits inside a
      // sentence, where color alone can't distinguish it from the body text
      // (WCAG 1.4.1 Use of Color).
      underline: {
        hover: "hover:underline",
        always: "underline underline-offset-2",
      },
    },
    defaultVariants: {
      size: "md",
      underline: "hover",
    },
  }
);

export interface LinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVariants> {
  /**
   * When set, renders an `<a>` (same styles) instead of a `<button>` — use it
   * for real navigation to a URL; keep the default `<button>` for in-app
   * actions ("open this panel"). Omitted by default, so existing usage still
   * renders a `<button type="button">`.
   */
  href?: string;
  /** Anchor-only (`href` set): where to open the URL. */
  target?: React.HTMLAttributeAnchorTarget;
  /** Anchor-only (`href` set): link relationship, e.g. `"noopener noreferrer"`. */
  rel?: string;
  /** Anchor-only (`href` set): download the target instead of navigating. */
  download?: boolean | string;
}

/** Renders a `<button>` by default and an `<a>` when `href` is set — the ref is typed for either element. */
const Link = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkProps>(
  ({ className, size, underline, href, target, rel, download, disabled, onClick, ...props }, ref) => {
    const classes = cn(linkVariants({ size, underline }), className);
    if (href !== undefined) {
      // `type` is a button attribute (a consumer-supplied `type="submit"`
      // would be a bogus MIME hint on an anchor), so it isn't forwarded.
      const { type: _buttonType, ...anchorProps } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          download={download}
          // An anchor has no `disabled` attribute: drop the href and expose
          // the state with aria-disabled instead.
          aria-disabled={disabled ? true : undefined}
          className={cn(classes, disabled && "pointer-events-none opacity-40")}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement> | undefined}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={classes}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link, linkVariants };
