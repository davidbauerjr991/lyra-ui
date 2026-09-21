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
  "inline-flex items-center gap-1.5 text-left text-lyra-fg-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 rounded-lyra-xs disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      size: {
        sm: "lyra-body-sm",
        md: "lyra-body-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLButtonElement, LinkProps>(
  ({ className, size, ...props }, ref) => (
    <button ref={ref} type="button" className={cn(linkVariants({ size }), className)} {...props} />
  )
);
Link.displayName = "Link";

export { Link, linkVariants };
