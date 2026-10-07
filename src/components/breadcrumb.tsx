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

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
  /**
   * Opt-in: the most crumbs to show (current page included) before the
   * middle ones collapse into an ellipsis menu — the first crumb, "…", and
   * the last ones stay. E.g. `maxItems={4}` shows a 5-crumb trail as
   * "Home / … / Parent / Page" (Sol's behavior). Works on a trail of
   * `BreadcrumbItem` / `BreadcrumbSeparator` children; the menu lists each
   * hidden crumb's text and runs its `BreadcrumbLink`'s `onClick` (called
   * without an event) or goes to its `href`. Unset = never collapses (today).
   */
  maxItems?: number;
  /**
   * Opt-in: when the trail doesn't fit its width, collapse middle crumbs
   * (then the first one) into the ellipsis menu until it does, and keep the
   * trail on one line. Re-checks whenever the width changes. Default `false`.
   */
  collapseOnOverflow?: boolean;
  /** Accessible name of the auto-collapse ellipsis button. Default "Show hidden pages". */
  ellipsisLabel?: string;
}

/* ── Auto-collapse helpers ── */

/* Children with fragments flattened, so `[a, <>b c</>]` reads as `[a, b, c]`. */
function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === React.Fragment) {
      out.push(...flattenChildren((child.props as { children?: React.ReactNode }).children));
    } else if (child !== null && child !== undefined && child !== false) {
      out.push(child);
    }
  });
  return out;
}

function textOf(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (React.isValidElement(node)) return textOf((node.props as { children?: React.ReactNode }).children);
  return "";
}

/* The `BreadcrumbLink` (or `asChild` child) inside a crumb, if any. */
function findLinkProps(node: React.ReactNode): { onClick?: () => void; href?: string } | undefined {
  let found: { onClick?: () => void; href?: string } | undefined;
  React.Children.forEach(node, (child) => {
    if (found || !React.isValidElement(child)) return;
    const props = child.props as { onClick?: () => void; href?: string; asChild?: boolean; children?: React.ReactNode };
    if (child.type === BreadcrumbLink) {
      const inner = props.asChild && React.isValidElement(props.children)
        ? (props.children.props as { href?: string; onClick?: () => void })
        : undefined;
      found = { onClick: props.onClick ?? inner?.onClick, href: props.href ?? inner?.href };
    } else {
      found = findLinkProps(props.children);
    }
  });
  return found;
}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, maxItems, collapseOnOverflow = false, ellipsisLabel = "Show hidden pages", children, ...props }, ref) => {
    const autoCollapse = maxItems !== undefined || collapseOnOverflow;
    const olRef = React.useRef<HTMLOListElement | null>(null);
    const setRefs = React.useCallback(
      (node: HTMLOListElement | null) => {
        olRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );
    // Extra crumbs hidden because the trail didn't fit (collapseOnOverflow).
    const [overflowHidden, setOverflowHidden] = React.useState(0);

    const flat = autoCollapse ? flattenChildren(children) : [];
    const crumbs = flat.filter(
      (c): c is React.ReactElement<BreadcrumbItemProps> => React.isValidElement(c) && c.type === BreadcrumbItem
    );
    const separator = flat.find((c) => React.isValidElement(c) && c.type === BreadcrumbSeparator) as
      | React.ReactElement<BreadcrumbSeparatorProps>
      | undefined;
    const hasManualEllipsis = crumbs.some((c) =>
      flattenChildren(c.props.children).some((n) => React.isValidElement(n) && n.type === BreadcrumbEllipsis)
    );
    const n = crumbs.length;
    // Only a plain trail (crumbs and separators, no hand-placed ellipsis) is collapsed.
    const canCollapse =
      autoCollapse && !hasManualEllipsis && n >= 3 &&
      flat.every((c) => React.isValidElement(c) && (c.type === BreadcrumbItem || c.type === BreadcrumbSeparator));
    const maxHide = n - 1; // the current page always stays
    const baseHidden = maxItems !== undefined && n > Math.max(maxItems, 2) ? n - (Math.max(maxItems, 2) - 1) : 0;
    const hidden = canCollapse ? Math.min(baseHidden + (collapseOnOverflow ? overflowHidden : 0), maxHide) : 0;

    // Hide middle crumbs first (2nd, 3rd, …), then the first one.
    const hiddenSet = new Set<number>();
    for (let k = 0; k < hidden; k++) hiddenSet.add(k < n - 2 ? k + 1 : 0);

    React.useLayoutEffect(() => {
      if (!canCollapse || !collapseOnOverflow) return;
      const el = olRef.current;
      if (el && el.scrollWidth > el.clientWidth + 1 && hidden < maxHide) setOverflowHidden((h) => h + 1);
    });
    React.useEffect(() => {
      if (!canCollapse || !collapseOnOverflow) return;
      const el = olRef.current;
      if (!el || typeof ResizeObserver === "undefined") return;
      let lastWidth = el.clientWidth;
      const ro = new ResizeObserver(() => {
        if (el.clientWidth !== lastWidth) {
          lastWidth = el.clientWidth;
          setOverflowHidden(0); // re-measure from scratch at the new width
        }
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [canCollapse, collapseOnOverflow]);

    let content: React.ReactNode = children;
    if (canCollapse && hidden > 0) {
      const sep = (key: string) =>
        separator ? React.cloneElement(separator, { key }) : <BreadcrumbSeparator key={key} />;
      const menuItems = crumbs
        .map((c, i) => ({ c, i }))
        .filter(({ i }) => hiddenSet.has(i))
        .map(({ c, i }) => {
          const link = findLinkProps(c.props.children);
          return {
            id: `crumb-${i}`,
            label: textOf(c.props.children),
            onClick: () => {
              if (link?.onClick) link.onClick();
              else if (link?.href && typeof window !== "undefined") window.location.assign(link.href);
            },
          };
        });
      const firstHidden = Math.min(...Array.from(hiddenSet));
      const parts: React.ReactNode[] = [];
      crumbs.forEach((c, i) => {
        if (i === firstHidden) {
          if (parts.length) parts.push(sep(`sep-e`));
          parts.push(
            <BreadcrumbItem key="ellipsis" className="shrink-0">
              <BreadcrumbEllipsis items={menuItems} ariaLabel={ellipsisLabel} />
            </BreadcrumbItem>
          );
        }
        if (hiddenSet.has(i)) return;
        if (parts.length) parts.push(sep(`sep-${i}`));
        parts.push(React.cloneElement(c, { key: `crumb-${i}` }));
      });
      content = parts;
    }

    return (
      <ol
        ref={setRefs}
        className={cn(
          "flex flex-wrap items-center gap-2 m-0 p-0 list-none break-words",
          // Overflow collapse measures a one-line trail.
          canCollapse && collapseOnOverflow && "flex-nowrap min-w-0",
          className
        )}
        {...props}
      >
        {content}
      </ol>
    );
  }
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
   operable without requiring a `href`. Pass `href` to render a real
   `<a href>` (with link styling by default — see `appearance`), or
   `asChild` to render a router `<Link>` — same `Slot` pattern as `Button`. */

export interface BreadcrumbLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  /**
   * Opt-in: renders a real `<a href>` instead of a `<button>`, so the crumb
   * can be opened in a new tab, copied or previewed, and screen readers call
   * it a link. `onClick` still runs (call `e.preventDefault()` in it for
   * client-side routing). Without `href` (today's usage) it stays a button.
   */
  href?: string;
  /** With `href`: the link's `target` (e.g. "_blank"). */
  target?: string;
  /** With `href`: the link's `rel`. */
  rel?: string;
  /**
   * How the crumb looks. "default": gray, darker on hover (today's look).
   * "link": link color (`text-lyra-fg-link`) with an underline on hover and
   * keyboard focus, so it reads as a link at rest, like Sol's. Defaults to
   * "link" when `href` is set and "default" otherwise, so existing
   * click-handler crumbs look exactly as before.
   */
  appearance?: "default" | "link";
}

const BreadcrumbLink = React.forwardRef<HTMLButtonElement, BreadcrumbLinkProps>(
  ({ asChild = false, className, type = "button", href, target, rel, appearance, ...props }, ref) => {
    const look = appearance ?? (href ? "link" : "default");
    const classes = cn(
      look === "link"
        ? "lyra-heading-md text-lyra-fg-link transition-colors hover:underline focus-visible:underline underline-offset-4"
        : "lyra-heading-md text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 rounded-lyra-xs",
      className
    );
    if (href && !asChild) {
      return (
        <a
          // Callback ref: `ref` is typed for the default <button>; it gets the <a> here.
          ref={(node: HTMLAnchorElement | null) => {
            const el = node as unknown as HTMLButtonElement | null;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={classes}
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
