import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface TreeMenuChild {
  label: string;
  active?: boolean;
  onClick?: () => void;
  /**
   * Optional leading icon for this row — e.g. a per-item type glyph in a
   * flat list of leaves under a category (see the "Call Centers" story,
   * each call center gets the same small icon). Only meaningful when this
   * row has no `children` of its own: a childless (leaf) row renders this
   * icon exactly as passed with no recoloring — the reference screenshot
   * shows every leaf icon the same fixed color regardless of which row is
   * active, so the consumer's own icon className is the only thing
   * controlling its color. A row WITH `children` recolors its icon based
   * on active/parent-active state instead, same as a top-level
   * `TreeMenuItem`'s icon — see `TreeMenuRow` below.
   */
  icon?: React.ReactNode;
  /**
   * Nested children — when present, this row becomes expandable/
   * collapsible itself (its own chevron), recursively supporting
   * arbitrary depth (e.g. "Enterprise" > "Financial Services" > individual
   * call centers, three levels deep — see the "Call Centers" story).
   * Omit for a flat leaf row, the original/most common case.
   */
  children?: TreeMenuChild[];
  /** Only meaningful when `children` is present. */
  defaultOpen?: boolean;
}

export interface TreeMenuItem {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  children?: TreeMenuChild[];
  defaultOpen?: boolean;
  onClick?: () => void;
}

/* ── CollapsiblePanel (animated height) ── */

function CollapsiblePanel({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(open ? undefined as number | undefined : 0);
  const isOpen = useRef(open);
  const isAnimating = useRef(false);
  const isInitialRender = useRef(true);

  /* Keep content height in sync while open (handles dynamic content) */
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ro = new ResizeObserver(() => {
      if (isOpen.current && !isAnimating.current) {
        setHeight(content.scrollHeight);
      }
    });
    ro.observe(content);
    return () => ro.disconnect();
  }, []);

  /* Set explicit pixel height on first render if defaultOpen */
  useEffect(() => {
    if (open && contentRef.current && height === undefined) {
      setHeight(contentRef.current.scrollHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Animate open/close */
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const el = wrapperRef.current;
    const content = contentRef.current;
    if (!el || !content) return;

    isAnimating.current = true;
    isOpen.current = open;

    if (open) {
      setHeight(content.scrollHeight);
    } else {
      /* Pin to current scrollHeight, force reflow, then collapse to 0 */
      const scrollH = content.scrollHeight;
      setHeight(scrollH);
      requestAnimationFrame(() => {
        el.getBoundingClientRect();
        setHeight(0);
      });
    }
  }, [open]);

  const handleTransitionEnd = () => {
    isAnimating.current = false;
    /* Keep height as explicit pixels — never switch to auto */
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        height: height ?? 0,
        overflow: "hidden",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

/* ── TreeMenu ── */

interface TreeMenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Menu items to render */
  items: TreeMenuItem[];
  /**
   * Where the expand/collapse chevron sits on every expandable row,
   * relative to the label — default `"right"` (chevron trailing, icon
   * leading, the original layout). `"left"` swaps both ends: chevron
   * leading, icon trailing. Applies at every depth (a nested row with its
   * own `children` gets a chevron the same way a top-level one does).
   */
  chevronPosition?: "left" | "right";
  /**
   * Default `false` — unchanged behavior: a parent row shows the active
   * (blue, bold text) treatment whenever any of its direct children is
   * active, and only a childless leaf row gets the selected background
   * pill. Set `true` for a tree where selection is meant to be exactly one
   * row at a time across every depth, parent or leaf: the selected row
   * gets the same background pill regardless of whether it has children,
   * and a parent no longer inherits the active look just because a
   * descendant happens to be selected. Off by default so every existing
   * consumer (`LeftNav`, `AdminShell`, every other `TreeMenu` story) is
   * completely unaffected — added for, and currently only used by,
   * Outbound-Campaigns' Monitor dashboard side menu (a tree where clicking
   * ANY row, at any depth, selects exactly that row and nothing else); not
   * yet adopted as the default everywhere. See PROJECT_SUMMARY.md's
   * "TreeMenu gains exactSelection" entry.
   */
  exactSelection?: boolean;
}

const TreeMenu = React.forwardRef<HTMLElement, TreeMenuProps>(
  ({ className, items, chevronPosition = "right", exactSelection = false, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Navigation menu"
      className={cn("flex flex-col gap-0.5 py-1", className)}
      {...props}
    >
      <ul role="tree" className="flex flex-col gap-0.5 list-none m-0 p-0">
        {items.map((item, i) => (
          <li key={i} role="treeitem" aria-expanded={item.children && item.children.length > 0 ? undefined : undefined}>
            <TreeMenuRow item={item} chevronPosition={chevronPosition} exactSelection={exactSelection} />
          </li>
        ))}
      </ul>
    </nav>
  )
);
TreeMenu.displayName = "TreeMenu";

/* ── TreeMenuRow (internal) ──
   Recursive — handles a top-level `TreeMenuItem` (depth 0) and any nested
   `TreeMenuChild` (depth 1, 2, ...) with the same logic, differing only in
   indentation and default text color. This replaced two separate code
   paths (a depth-0 expandable row here, and a second, flat/non-expandable
   rendering block for children inline in the old version) once a nested
   row needed to become expandable itself (own chevron + further nested
   children) — see PROJECT_SUMMARY.md's "TreeMenu supports arbitrary
   nesting depth" entry for the concrete request this came from (an
   "Enterprise" root wrapping a whole existing category list). */

function TreeMenuRow({
  item,
  depth = 0,
  chevronPosition = "right",
  exactSelection = false,
}: {
  item: TreeMenuItem | TreeMenuChild;
  depth?: number;
  chevronPosition?: "left" | "right";
  exactSelection?: boolean;
}) {
  const [open, setOpen] = useState(item.defaultOpen ?? false);
  const hasChildren = Boolean(item.children && item.children.length > 0);
  // In `exactSelection` mode, a parent never inherits the active look from
  // a descendant — only this exact row's own `active` flag counts, and
  // "leaf active" styling (background pill, below) applies to ANY selected
  // row regardless of whether it has children, not just true leaves, since
  // exactly one row is selected at a time across the whole tree and every
  // depth should look the same when selected.
  const isParentActive = exactSelection
    ? false
    : item.active || (hasChildren && item.children!.some((c) => c.active));
  /* Leaf items (no children) that are active get the stronger moderate bg */
  const isLeafActive = exactSelection ? item.active : item.active && !hasChildren;

  // Indentation: depth 0 sits flush (10px, the original `px-2.5`); every
  // deeper level adds the same 30px step the original flat-child indent
  // used (`pl-10` = 40px = 10px + 1×30px) — depth 2+ just continues that
  // step consistently instead of introducing a new increment.
  const paddingLeftPx = 10 + depth * 30;
  // Guide-line offset for THIS row's own children list (rendered below,
  // one level deeper at `depth + 1`) — 18px into that deeper level's own
  // indent. Matches the original depth-1 guide line position
  // (`left-[18px]`) exactly when this row is depth 0, and continues the
  // same per-level offset deeper.
  const childGuideLeftPx = depth * 30 + 18;

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setOpen((v) => !v);
          item.onClick?.();
        }}
        aria-expanded={hasChildren ? open : undefined}
        aria-current={!hasChildren && item.active ? "page" : undefined}
        style={{ paddingLeft: paddingLeftPx, paddingRight: 10 }}
        className={cn(
          "relative flex w-full items-center gap-2.5 rounded-lyra-sm h-9 text-left lyra-body-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          isLeafActive
            ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong lyra-body-md-emphasis hover:bg-lyra-bg-active-moderate active:bg-lyra-bg-active-subtle"
            : isParentActive
              ? "text-lyra-fg-active-strong lyra-body-md-emphasis hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
              : depth === 0
                ? "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
                : "text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default active:bg-lyra-state-pressed"
        )}
      >
        {/* Left accent bar — visible only on leaf (non-expandable) active items, depth 0 only (matches the original: nested leaves rely on the active pill background alone, no bar). */}
        {isLeafActive && depth === 0 && (
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-lyra-border-active"
          />
        )}
        {(() => {
          // A row's icon only recolors on active state when the row is
          // itself expandable (parent behavior, same as a top-level
          // item always had) — a childless leaf row's icon renders
          // exactly as passed, no recoloring (see `TreeMenuChild.icon`'s
          // doc comment: the reference screenshot's call-center icons
          // stay the same fixed color regardless of active state).
          const icon = item.icon && (
            <span
              aria-hidden="true"
              className={cn(
                "flex-shrink-0",
                hasChildren && (isParentActive || isLeafActive) ? "text-lyra-fg-active-strong" : hasChildren ? "text-lyra-fg-default" : undefined
              )}
            >
              {item.icon}
            </span>
          );
          const label = <span className="flex-1 text-left truncate">{item.label}</span>;
          const chevron = hasChildren && (
            <span
              aria-hidden="true"
              className="text-lyra-fg-disabled transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          );
          return chevronPosition === "left" ? (
            <>
              {chevron}
              {label}
              {icon}
            </>
          ) : (
            <>
              {icon}
              {label}
              {chevron}
            </>
          );
        })()}
      </button>

      {/* Children — animated expand/collapse, recursing into this same
          component one level deeper. Each row's own left padding creates
          the indent instead of a margin on the list, so the active
          highlight can span the row's *full* width (edge to edge of the
          container) rather than being confined to a narrower,
          already-indented list box.

          Guide-line vertical connector: ONE continuous line per expanded
          list of children — not a separate short segment drawn by each
          child row. It's the `relative` wrapper here (around the whole
          `<ul>`) that owns it, sized to that wrapper's natural height, so
          it runs from the first child straight down through the last —
          including through any of those children's OWN expanded
          descendants below them, since this div's height already includes
          that nested content. Caught from a screenshot: an earlier version
          scoped the line to each individual row's own height instead, so
          it broke into disconnected dashes — one short stub per row —
          rather than one line running from e.g. "Financial Services" down
          through "Hospitality" down to "Insurance". Placed after the
          button in the markup so it always paints on top of the row
          background beneath it. */}
      {hasChildren && (
        <CollapsiblePanel open={open}>
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 w-px bg-lyra-border-subtle"
              style={{ left: childGuideLeftPx }}
            />
            <ul role="group" className="mt-0.5 flex flex-col gap-0.5 list-none m-0 p-0">
              {item.children!.map((child, j) => (
                <li key={j} role="treeitem">
                  <TreeMenuRow item={child} depth={depth + 1} chevronPosition={chevronPosition} exactSelection={exactSelection} />
                </li>
              ))}
            </ul>
          </div>
        </CollapsiblePanel>
      )}
    </div>
  );
}

export { TreeMenu, CollapsiblePanel };
export type { TreeMenuProps };
