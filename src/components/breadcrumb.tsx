import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";
import { KebabMenuButton } from "./kebab-menu-button";
import type { MenuEntry } from "./menu";

/* ── Breadcrumb ──
   A compound component — `Breadcrumb` (nav) > `BreadcrumbList` (ol) >
   `BreadcrumbItem` (li), each holding a `BreadcrumbLink` (parent crumbs) or
   the final `BreadcrumbPage` (current page, non-interactive), separated by
   `BreadcrumbSeparator`. `BreadcrumbEllipsis` collapses a long middle
   section of a deep trail. Uses `@radix-ui/react-slot` for `BreadcrumbLink`'s
   `asChild` — the same pattern `Button` uses (see button.tsx) — so a
   consumer can swap in a router `<Link>`/real `<a href>` instead of the
   default `<button>`.

   `PageHeader`'s own `breadcrumb` prop composes these parts internally —
   see page-header.tsx — rather than hand-rolling its own `<nav>/<ol>`, per
   CONTRIBUTING.md's "composition over reimplementation" rule. Reach for
   this component directly (not a one-off `<nav>`) any time a breadcrumb
   trail is needed outside a `PageHeader`. */

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="Breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

/* ── BreadcrumbList ── */

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-2 m-0 p-0 list-none break-words",
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

/* ── BreadcrumbItem ──
   `gap-1.5` accommodates an item that pairs a link with its own trailing
   affordance (e.g. a kebab/dropdown trigger) — plain text-only items are
   unaffected since there's nothing else in the flex row to space out. */

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

/* ── BreadcrumbLink (parent crumb — interactive) ──
   Defaults to a real `<button type="button">` rather than an `<a>` since
   this library's navigation is click-handler driven (matches every other
   "clickable, no href" element in lyra-ui) and a `<button>` is keyboard-
   operable without requiring a `href`. Pass `asChild` to render a router
   `<Link>` or a real `<a href>` instead — same `Slot` pattern as `Button`. */

export interface BreadcrumbLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const BreadcrumbLink = React.forwardRef<HTMLButtonElement, BreadcrumbLinkProps>(
  ({ asChild = false, className, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(
          "lyra-heading-md text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 rounded-lyra-xs",
          className
        )}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

/* ── BreadcrumbPage (current page — non-interactive) ──
   For use outside `PageHeader` (which renders its own `<h1>` for the
   current-page crumb since that one really is the page's document
   heading — see page-header.tsx). Everywhere else, this `<span>` is the
   right choice: same visual weight, no heading semantics implied. */

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("lyra-heading-lg text-lyra-fg-default", className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

/* ── BreadcrumbSeparator ──
   Defaults to "/" (matches the design); pass an icon (e.g. `ChevronRight`)
   as `children` to override. */

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("lyra-heading-md text-lyra-fg-secondary select-none", className)}
    {...props}
  >
    {children ?? "/"}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

/* ── BreadcrumbEllipsis (collapsed middle crumbs) ──
   Drop in place of one or more middle `BreadcrumbItem`s in a deep trail.
   Pass `items` (the collapsed crumbs, as `MenuEntry`s) to make it a real
   trigger that opens a `Menu` popover listing them — built on
   `KebabMenuButton` (same button+portal+Menu plumbing as any other kebab
   trigger in the library, just with the horizontal-dots glyph instead of
   the vertical one) rather than reimplementing that wiring here. Per
   CONTRIBUTING.md's "every menu must be built on Menu" rule. Omit `items`
   for a purely decorative ellipsis (e.g. a static visual example). */

export interface BreadcrumbEllipsisProps extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {
  /** Collapsed crumbs to show in the popover. Omit to render a
   *  non-interactive, decorative ellipsis instead. */
  items?: MenuEntry[];
  /** Accessible label for the trigger button when `items` is set (default: "Show more") */
  ariaLabel?: string;
}

const BreadcrumbEllipsis = ({ className, items, ariaLabel = "Show more", ...props }: BreadcrumbEllipsisProps) => {
  if (items) {
    return (
      <KebabMenuButton
        items={items}
        ariaLabel={ariaLabel}
        icon={<MoreHorizontal className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
        align="left"
        className={cn("h-6 w-6", className)}
      />
    );
  }
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-6 w-6 items-center justify-center text-lyra-fg-secondary", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" strokeWidth={1.5} />
      <span className="sr-only">More</span>
    </span>
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
