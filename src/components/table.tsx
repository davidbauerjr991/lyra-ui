import * as React from "react";
import { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown, ChevronRight as ChevronRightIcon, Group, MoreVertical, PanelLeft, PanelRight } from "lucide-react";
import { cn } from "../lib/utils";
import { SearchInput } from "./search-input";
import { Select } from "./select";
import { Tooltip } from "./tooltip";
import { Popover } from "./popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "./button";
import { Menu } from "./menu";
import { Input } from "./input";
import { SlidersHorizontal } from "lucide-react";
import { ColumnsIcon } from "./icons/columns-icon";
import { FilterChip } from "./filter-chip";
import type { FilterChipOption } from "./filter-chip";

/* ── Column resize ──
   `Table` is a flex-based "fake table" (see table.tsx's own top-of-file
   history/CONTRIBUTING.md — no native `<table>`/`<colgroup>`), so a
   column's width isn't one thing the browser applies everywhere it's
   used: it's a Tailwind flex-basis className repeated independently on
   that column's `TableHead` *and* every row's matching `TableCell`. Making
   a column resizable therefore can't live inside `TableHead` alone —
   there'd be nothing keeping the body cells in sync with a drag that only
   `TableHead` knew about. Instead, `Table` itself owns a
   `{ columnKey: width }` map via `useColumnResize` below and provides it
   through context; `TableHead`/`SortableTableHead` (the drag handle) and
   `TableCell` (matching `columnKey`) all read the *same* map, so a resize
   applies everywhere that column is rendered without any consumer having
   to wire the width through manually. Columns that never set `columnKey`
   (i.e. every existing table today) never touch this map at all — they
   keep rendering exactly as before, off their own className. */

interface ColumnResizeContextValue {
  /** Current resized width (px) per columnKey — only set for columns that have actually been dragged */
  widths: Record<string, number>;
  /** Begins a drag-resize for `key`, starting from `startWidth`, clamped to [min, max] */
  startResize: (key: string, e: React.MouseEvent, startWidth: number, min: number, max: number) => void;
  /** Nudges `key`'s width by `delta` from `current`, clamped to [min, max] — keyboard resize (arrow keys) */
  nudge: (key: string, delta: number, current: number, min: number, max: number) => void;
  /**
   * Reports a column's current natural (className-driven) width getter, so
   * the *first* resize in a table can freeze every column at once — see the
   * comment on `useColumnResize`'s `registryRef` for why that matters.
   * Returns an unregister function.
   */
  registerColumn: (key: string, getWidth: () => number) => () => void;
  /** Sum of every registered column's current width (px) — `undefined` until the first resize. See `useColumnResize`'s return statement for why `Table` applies this as an explicit `min-width` instead of relying on CSS to size the row automatically. */
  totalWidth?: number;
}

const ColumnResizeContext = React.createContext<ColumnResizeContextValue | null>(null);

/**
 * Owns the `{ columnKey: width }` map for one `Table`. Uncontrolled by
 * default (plain internal state); pass `controlledWidths`/`onWidthsChange`
 * (wired through `Table`'s own `columnWidths`/`onColumnWidthsChange` props)
 * to lift the map to a consumer that wants to persist it (e.g. a cookie,
 * same pattern as `InteriorPanel`'s `storageKey`).
 */
function useColumnResize(
  controlledWidths?: Record<string, number>,
  onWidthsChange?: (widths: Record<string, number>) => void
): ColumnResizeContextValue {
  const [internalWidths, setInternalWidths] = useState<Record<string, number>>({});
  const isControlled = controlledWidths !== undefined;
  const widths = isControlled ? controlledWidths! : internalWidths;

  // Always mirrors the latest widths map (controlled or not) — read inside
  // the `mousemove` handler below, which closes over a single `startResize`
  // call and would otherwise see a stale map from whichever render it
  // started in.
  const widthsRef = useRef(widths);
  widthsRef.current = widths;

  const commit = useCallback(
    (next: Record<string, number>) => {
      if (!isControlled) setInternalWidths(next);
      onWidthsChange?.(next);
    },
    [isControlled, onWidthsChange]
  );

  // Every column with a `columnKey` registers a lazy width-getter here on
  // mount (see `TableHead`/`SortableTableHead`'s registration effect) — not
  // measured until actually needed.
  const registryRef = useRef(new Map<string, () => number>());
  const registerColumn = useCallback((key: string, getWidth: () => number) => {
    registryRef.current.set(key, getWidth);
    return () => {
      registryRef.current.delete(key);
    };
  }, []);

  /**
   * Before applying a resize, freezes every *other* registered column at
   * its current natural width too, but only the first time this table has
   * ever been resized (`widthsRef.current` still empty). Without this, only
   * the dragged column becomes a fixed pixel width — every sibling still
   * using its original `flex-1`/`flex-[n]` proportional className keeps
   * doing exactly what flex-grow means: expand to absorb whatever space is
   * freed up. Shrinking a couple of columns wouldn't shrink the table, it'd
   * just force-feed that space into whichever column was still flexible,
   * ballooning it out with blank space — reported via screenshot as the
   * table's row separators appearing to vanish into a wide gap between two
   * columns. Freezing the whole row's current layout at the moment of the
   * first drag matches how resize behaves in a spreadsheet/data-grid: from
   * that point on, every column's width is explicit, none of them are still
   * "growing to fill leftover space" behind the scenes.
   */
  const freezeIfFirstResize = useCallback(
    (key: string, ownWidth: number): Record<string, number> => {
      if (Object.keys(widthsRef.current).length > 0) return { ...widthsRef.current };
      const seeded: Record<string, number> = {};
      registryRef.current.forEach((getWidth, k) => {
        seeded[k] = k === key ? ownWidth : getWidth();
      });
      if (!(key in seeded)) seeded[key] = ownWidth;
      return seeded;
    },
    []
  );

  const startResize = useCallback(
    (key: string, e: React.MouseEvent, startWidth: number, min: number, max: number) => {
      e.preventDefault();
      e.stopPropagation();
      const startX = e.clientX;
      commit(freezeIfFirstResize(key, startWidth));
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const onMove = (ev: MouseEvent) => {
        const delta = ev.clientX - startX;
        const next = Math.min(max, Math.max(min, startWidth + delta));
        commit({ ...widthsRef.current, [key]: next });
      };
      const onUp = () => {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [commit, freezeIfFirstResize]
  );

  const nudge = useCallback(
    (key: string, delta: number, current: number, min: number, max: number) => {
      const base = freezeIfFirstResize(key, current);
      const next = Math.min(max, Math.max(min, current + delta));
      commit({ ...base, [key]: next });
    },
    [commit, freezeIfFirstResize]
  );

  // Explicit, computed-in-JS floor for the table's own width — see the long
  // comment on `Table`'s `<table>` element for why this replaced trying to
  // get CSS to size the row via flexbox's "automatic minimum size": that's
  // spec-correct in theory (confirmed by re-reading the spec closely) but
  // Chrome does not reliably propagate it through this many nested flex
  // levels (table → tbody → tr → td) in practice — confirmed directly via a
  // screenshot showing the row's own hover background (which fills its
  // real box, not just wherever a border happens to be drawn) still ending
  // at the old boundary after the CSS-only fix. Summing every column's
  // known width here and applying it as a concrete pixel `min-width` sidesteps
  // that entirely: an explicit min-width in px is a basic, universally
  // reliable CSS clamp (not dependent on any "automatic"/content-aware
  // sizing heuristic), and normal top-down `align-items: stretch` (parent's
  // *actual* size cascading to children) reliably carries that width down
  // through `<thead>`/`<tbody>`/`<tr>` without needing any of them to have
  // their own explicit width. Only reflects registered (`columnKey`-bearing)
  // columns — a table's checkbox column and any other column without a
  // `columnKey` (e.g. Outbound-Campaigns' fixed-width "controls" column)
  // aren't counted, so this can under-count by up to roughly their combined
  // width; harmless in practice since those are small, fixed-width columns,
  // not the source of the overflow this exists to handle.
  const totalWidth = Object.keys(widths).length > 0
    ? Object.values(widths).reduce((sum, w) => sum + w, 0)
    : undefined;

  return { widths, startResize, nudge, registerColumn, totalWidth };
}

/** Thin drag/keyboard handle rendered on a resizable column's right edge — shared by `TableHead` and `SortableTableHead` so their resize behavior can't drift apart. */
function ColumnResizeHandle({
  columnKey,
  minWidth,
  maxWidth,
  currentWidth,
  label,
}: {
  columnKey: string;
  minWidth: number;
  maxWidth: number;
  currentWidth: () => number;
  label?: string;
}) {
  const ctx = React.useContext(ColumnResizeContext);
  if (!ctx) return null;
  return (
    <span
      role="separator"
      aria-orientation="vertical"
      aria-label={label ? `Resize ${label} column` : "Resize column"}
      tabIndex={0}
      draggable={false}
      // Stops both the native HTML5 drag (column reorder, SortableTableHead)
      // and the cell's own onClick (sort toggle) from firing when the user
      // is actually grabbing this handle — a plain child of a `draggable`/
      // `onClick`-bearing `<th>` would otherwise trigger both.
      onMouseDown={(e) => {
        e.stopPropagation();
        ctx.startResize(columnKey, e, currentWidth(), minWidth, maxWidth);
      }}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          ctx.nudge(columnKey, -10, currentWidth(), minWidth, maxWidth);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          ctx.nudge(columnKey, 10, currentWidth(), minWidth, maxWidth);
        }
      }}
      className="absolute right-0 top-0 z-10 h-full w-2 -mr-1 cursor-col-resize touch-none select-none focus-visible:outline-none focus-visible:bg-lyra-border-active/60 hover:bg-lyra-border-active/40 active:bg-lyra-border-active"
    />
  );
}

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /** Controlled `{ columnKey: width }` map (px) — pairs with `onColumnWidthsChange` for consumers that want to persist resized column widths. Uncontrolled (plain internal state) when omitted; resize still works fully without either prop. */
  columnWidths?: Record<string, number>;
  /** Called with the full updated widths map on every resize (drag or keyboard) */
  onColumnWidthsChange?: (widths: Record<string, number>) => void;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, columnWidths, onColumnWidthsChange, style, ...props }, ref) => {
    const resize = useColumnResize(columnWidths, onColumnWidthsChange);
    return (
      <ColumnResizeContext.Provider value={resize}>
        <div className="relative w-full flex flex-col overflow-x-auto h-full" role="presentation">
          <table
            ref={ref}
            role="table"
            // No CSS-only `width`/`min-width` class here — two earlier
            // attempts at that (`w-full`, then `min-w-full`) both failed:
            // an explicit `min-width` *replaces* the browser's automatic,
            // content-aware minimum size for a flex item rather than adding
            // a floor on top of it, and even after fixing that (removing
            // the explicit class so the automatic mechanism could theoretically
            // take over), a live test showed Chrome still doesn't reliably
            // propagate it through this many nested flex levels (table →
            // tbody → tr → td) — confirmed via a screenshot where the row's
            // own hover background (its real painted box, not just a
            // border) still stopped short of its resized-wide cells.
            // Sidestepping that entirely: `resize.totalWidth` is computed
            // directly from the known column widths (useColumnResize's
            // return statement), so this sets a concrete pixel `min-width`
            // via inline style — a basic, universally reliable CSS clamp,
            // not dependent on any browser's "automatic sizing" heuristic.
            // Normal top-down `align-items: stretch` then reliably carries
            // that width down through `<thead>`/`<tbody>`/`<tr>` without any
            // of them needing their own explicit width.
            style={resize.totalWidth !== undefined ? { ...style, minWidth: resize.totalWidth } : style}
            className={cn("caption-bottom flex flex-col h-full", className)}
            {...props}
          />
        </div>
      </ColumnResizeContext.Provider>
    );
  }
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    role="rowgroup"
    // `flex flex-col` — explicit, not relied-on-by-accident. `<thead>`'s
    // native default is `display: table-header-group`, which only means
    // something browser-consistently when its ancestor `<table>` is
    // genuinely `display: table` — ours is overridden to `flex` (this whole
    // component is a flex-based "fake table"), so a `table-header-group`
    // box with no real table to belong to is exactly the kind of edge case
    // that's inconsistent across engines rather than reliably falling back
    // to block. Setting the display explicitly removes that ambiguity.
    // No `min-w-full`/`w-full` here — see the long comment on `Table`'s
    // `<table>` above for why an explicit width/min-width is actively wrong
    // here, not just unnecessary.
    className={cn("flex flex-col bg-lyra-bg-surface-base flex-shrink-0", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, onKeyDown, ...props }, ref) => (
  <tbody
    ref={ref}
    role="rowgroup"
    // Built-in ArrowUp/ArrowDown row-to-row keyboard navigation — moves
    // focus to the row directly above/below the one the key originated in
    // (or one of ITS OWN descendants — `closest('tr[role="row"]')` resolves
    // either case to the same row), regardless of which element inside that
    // row currently has focus. Delegated once here via bubbling rather than
    // wired per-row.
    //
    // Two landing targets, tried in order:
    //  1. The target row itself, IF it's a real focus target (`tabIndex`
    //     resolves to 0+, i.e. `TableRow`'s own `selectable` prop is on) —
    //     lands the user back on a row that can itself be Enter/Space-
    //     selected, matching `selectable`'s whole point.
    //  2. Otherwise, the SAME-POSITION focusable element in the target row
    //     (e.g. checkbox-column → checkbox-column, kebab-menu → kebab-menu)
    //     — for tables that put their own real controls directly in cells
    //     (a leading bulk-select checkbox, a trailing kebab/"more options"
    //     button) without making the row itself a `selectable` unit. Without
    //     this fallback, arrow keys would silently do nothing the moment
    //     focus was on one of those controls, since a non-`selectable` `<tr>`
    //     was never given a `tabIndex` to `.focus()` in the first place —
    //     exactly the bug report this fallback fixes ("for rows with
    //     interactive elements - the checkbox... does not allow the up/down
    //     of the rows").
    // Both are inert (no-ops, key falls through to default) for any table
    // that neither opts into `selectable` nor puts focusable elements in
    // its rows at all.
    onKeyDown={(e) => {
      onKeyDown?.(e);
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const target = e.target as HTMLElement;
      const currentRow = target.closest('tr[role="row"]');
      if (!(currentRow instanceof HTMLElement)) return;
      const rows = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('tr[role="row"]'));
      const rowIdx = rows.indexOf(currentRow);
      if (rowIdx === -1) return;
      const targetRow = rows[e.key === "ArrowDown" ? rowIdx + 1 : rowIdx - 1];
      if (!targetRow) return;

      if (targetRow.tabIndex >= 0) {
        e.preventDefault();
        targetRow.focus();
        return;
      }

      const focusableSelector =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const targetFocusables = Array.from(targetRow.querySelectorAll<HTMLElement>(focusableSelector));
      if (targetFocusables.length === 0) return;
      const currentFocusables = Array.from(currentRow.querySelectorAll<HTMLElement>(focusableSelector));
      const currentIdx = currentFocusables.indexOf(target);
      const clampedIdx = Math.min(Math.max(currentIdx, 0), targetFocusables.length - 1);
      e.preventDefault();
      targetFocusables[clampedIdx]?.focus();
    }}
    // Same reasoning as `TableHeader` above — explicit `flex flex-col`
    // instead of relying on `table-row-group`'s behavior with no real
    // `display:table` ancestor to belong to, and no `min-w-full`/`w-full`
    // (see the long comment on `Table`'s `<table>` for why).
    className={cn("flex flex-col flex-1 [&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Makes this row a real, independent keyboard tab stop and selectable
   *  unit, not just a hover/click target for mouse users — `tabIndex={0}`,
   *  the same ADA focus-visible ring every other interactive lyra-ui
   *  component uses, and Enter/Space triggering the row's own `onClick`
   *  (via a real native `.click()`, so it behaves exactly like a mouse
   *  click rather than a hand-rolled re-implementation). Off by default:
   *  not every table row is a clickable unit (plenty are purely
   *  presentational, e.g. a static data table with no row-level action),
   *  so this is opt-in per-row rather than automatic.
   *
   *  Pairs with `TableBody`'s own built-in ArrowUp/ArrowDown handling
   *  above — once a row has focus (landed on via Tab, arrow keys, or a
   *  click), Up/Down moves to the row directly above/below it, and Tab
   *  continues on into that row's own interactive descendants (native
   *  DOM-order tab sequencing, no extra code needed) before reaching the
   *  next row. */
  selectable?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selectable = false, tabIndex, onKeyDown, ...props }, ref) => (
    <tr
      ref={ref}
      role="row"
      tabIndex={selectable ? tabIndex ?? 0 : tabIndex}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        if (
          selectable &&
          (e.key === "Enter" || e.key === " ") &&
          e.target === e.currentTarget
        ) {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      className={cn(
        // No `width`/`min-width` class here — neither `w-full` (the original)
        // nor `min-w-full` (a previous, insufficient attempt at fixing this)
        // is correct. Both pin this row's own box to exactly 100% of its
        // container: `w-full` obviously (a hard `width: 100%`), but
        // `min-w-full` too — setting an explicit `min-width` *replaces* the
        // browser's automatic, content-aware minimum size for a flex item
        // rather than adding a floor on top of it, so it doesn't actually let
        // the row grow when a resized cell inside needs more than 100%; it
        // just pins the floor to 100% by a different property. Either way,
        // cells inside can render wider than the row's own (capped) box
        // without being clipped (`overflow: visible` is the default) — so a
        // resized-wide row would visually spill past its right edge while
        // `border-bottom`, painted at the row's own box edge, stayed at the
        // old 100% boundary, looking like the separator "disappeared" under
        // whichever columns rendered past that point.
        // Leaving both properties at their default (`auto`) is what actually
        // works: `align-items: stretch` (this row's flex-column ancestors'
        // default) sizes it to 100% as a baseline, and flexbox's *own*
        // automatic minimum size — which explicitly does account for
        // descendant content, including a non-shrinking resized cell — grows
        // it further if needed. No manual width class should be added back
        // here for this reason.
        "flex border-b border-lyra-border-subtle transition-colors",
        /* default row states */
        "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        /* selected row states */
        "data-[state=selected]:bg-lyra-bg-active-subtle",
        "data-[state=selected]:hover:bg-lyra-state-hover-active-subtle",
        "data-[state=selected]:active:bg-lyra-state-pressed-active-subtle",
        selectable &&
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lyra-border-focus",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Enables the drag/keyboard resize handle on this column's right edge. Requires `columnKey`. */
  resizable?: boolean;
  /** Identifies this column — must match the `columnKey` used on this column's `TableCell`s so a resize applies to the whole column, not just the header. */
  columnKey?: string;
  /** Minimum width (px) a drag/keyboard resize can reach (default: 80) */
  minWidth?: number;
  /** Maximum width (px) a drag/keyboard resize can reach (default: 600) */
  maxWidth?: number;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      className,
      children,
      title,
      style,
      resizable,
      columnKey,
      minWidth = 80,
      maxWidth = 600,
      ...props
    },
    ref
  ) => {
    const resizeCtx = React.useContext(ColumnResizeContext);
    const localRef = useRef<HTMLTableCellElement | null>(null);
    const setRefs = useCallback(
      (node: HTMLTableCellElement | null) => {
        localRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLTableCellElement | null>).current = node;
      },
      [ref]
    );
    const resizedWidth = columnKey ? resizeCtx?.widths[columnKey] : undefined;

    // Registers this column's natural width so a sibling's first resize can
    // freeze it in place too (see `freezeIfFirstResize` in table.tsx).
    // `registerColumn` itself is a stable reference (empty-deps useCallback
    // in useColumnResize) even though `resizeCtx` is a new object every
    // render, so depending on it directly here — not on `resizeCtx` — keeps
    // this from re-registering on every width change elsewhere in the table.
    const registerColumn = resizeCtx?.registerColumn;
    useEffect(() => {
      if (!columnKey || !registerColumn) return;
      return registerColumn(columnKey, () => localRef.current?.getBoundingClientRect().width ?? 0);
    }, [columnKey, registerColumn]);

    return (
      <th
        ref={setRefs}
        role="columnheader"
        title={title ?? (typeof children === "string" ? children : undefined)}
        style={resizedWidth !== undefined ? { ...style, flex: `0 0 ${resizedWidth}px` } : style}
        className={cn(
          "relative flex items-center h-10 px-3 text-left lyra-label text-lyra-fg-default border-b border-lyra-border-soft [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0",
          resizable && "pr-4",
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        {resizable && columnKey && (
          <ColumnResizeHandle
            columnKey={columnKey}
            minWidth={minWidth}
            maxWidth={maxWidth}
            label={typeof children === "string" ? children : undefined}
            currentWidth={() => resizedWidth ?? localRef.current?.getBoundingClientRect().width ?? minWidth}
          />
        )}
      </th>
    );
  }
);
TableHead.displayName = "TableHead";

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Column key matching this column's `TableHead`'s `columnKey` — only needed when that column is `resizable`, so this cell picks up the same resized width. */
  columnKey?: string;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, title, style, columnKey, ...props }, ref) => {
    const resizeCtx = React.useContext(ColumnResizeContext);
    const resizedWidth = columnKey ? resizeCtx?.widths[columnKey] : undefined;

    return (
      <td
        ref={ref}
        role="cell"
        title={title ?? (typeof children === "string" ? children : undefined)}
        style={resizedWidth !== undefined ? { ...style, flex: `0 0 ${resizedWidth}px` } : style}
        className={cn(
          "flex items-center h-10 px-3 lyra-body-md text-lyra-fg-default [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0",
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
      </td>
    );
  }
);
TableCell.displayName = "TableCell";

/* ── Sort direction type ── */

type SortDirection = "asc" | "desc" | null;

/* ── SortableTableHead ── */

interface SortableTableHeadProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "onClick" | "onDragStart" | "onDragOver" | "onDrop" | "onDragEnd"> {
  /** Current sort direction for this column — null means unsorted */
  sortDirection?: SortDirection;
  /** Called when the user clicks to toggle sort */
  onSort?: () => void;
  /** Column key used by useColumnReorder — enables drag when provided. Also identifies this column for resize when `resizable` is set (must match this column's `TableCell`s' `columnKey`). */
  columnKey?: string;
  /** Drag handlers returned by useColumnReorder */
  dragHandlers?: ColumnDragHandlers;
  /** Whether this column is currently being dragged over */
  isDragOver?: boolean;
  /** Enables the drag/keyboard resize handle on this column's right edge. Requires `columnKey`. */
  resizable?: boolean;
  /** Minimum width (px) a drag/keyboard resize can reach (default: 80) */
  minWidth?: number;
  /** Maximum width (px) a drag/keyboard resize can reach (default: 600) */
  maxWidth?: number;
}

const SortableTableHead = React.forwardRef<HTMLTableCellElement, SortableTableHeadProps>(
  (
    {
      className,
      children,
      sortDirection = null,
      onSort,
      columnKey,
      dragHandlers,
      isDragOver,
      resizable,
      minWidth = 80,
      maxWidth = 600,
      style,
      ...props
    },
    ref
  ) => {
    const draggable = !!(columnKey && dragHandlers);
    const resizeCtx = React.useContext(ColumnResizeContext);
    const localRef = useRef<HTMLTableCellElement | null>(null);
    const setRefs = useCallback(
      (node: HTMLTableCellElement | null) => {
        localRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLTableCellElement | null>).current = node;
      },
      [ref]
    );
    const resizedWidth = columnKey ? resizeCtx?.widths[columnKey] : undefined;

    // Registers this column's natural width so a sibling's first resize can
    // freeze it in place too (see `freezeIfFirstResize` in table.tsx).
    // `registerColumn` itself is a stable reference (empty-deps useCallback
    // in useColumnResize) even though `resizeCtx` is a new object every
    // render, so depending on it directly here — not on `resizeCtx` — keeps
    // this from re-registering on every width change elsewhere in the table.
    const registerColumn = resizeCtx?.registerColumn;
    useEffect(() => {
      if (!columnKey || !registerColumn) return;
      return registerColumn(columnKey, () => localRef.current?.getBoundingClientRect().width ?? 0);
    }, [columnKey, registerColumn]);

    return (
      <th
        ref={setRefs}
        role="columnheader"
        tabIndex={0}
        draggable={draggable}
        onDragStart={draggable ? (e) => dragHandlers.onDragStart(e, columnKey!) : undefined}
        onDragOver={draggable ? (e) => dragHandlers.onDragOver(e, columnKey!) : undefined}
        onDrop={draggable ? (e) => dragHandlers.onDrop(e, columnKey!) : undefined}
        onDragEnd={draggable ? dragHandlers.onDragEnd : undefined}
        onDragLeave={draggable ? dragHandlers.onDragLeave : undefined}
        style={resizedWidth !== undefined ? { ...style, flex: `0 0 ${resizedWidth}px` } : style}
        className={cn(
          "flex items-center h-10 px-3 text-left lyra-label text-lyra-fg-default border-b border-lyra-border-soft whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0 relative",
          "group/sort cursor-pointer select-none hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset",
          sortDirection && "border-b-2 border-b-lyra-bg-primary",
          isDragOver && "bg-lyra-bg-active-moderate",
          resizable && "pr-4",
          className
        )}
        onClick={onSort}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSort?.();
          }
        }}
        aria-sort={
          sortDirection === "asc"
            ? "ascending"
            : sortDirection === "desc"
              ? "descending"
              : "none"
        }
        {...props}
      >
        <span className="flex-1 truncate">
          {/* Render only text/string children inside the truncated span */}
          {React.Children.map(children, (child) =>
            typeof child === "string" || typeof child === "number" ? child : null
          )}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "ml-1.5 flex-shrink-0 transition-opacity",
            sortDirection ? "opacity-100" : "opacity-0 group-hover/sort:opacity-100"
          )}
        >
          {sortDirection === "asc" ? (
            <ArrowUp className="h-3.5 w-3.5 text-lyra-fg-active-strong" strokeWidth={1.5} />
          ) : sortDirection === "desc" ? (
            <ArrowDown className="h-3.5 w-3.5 text-lyra-fg-active-strong" strokeWidth={1.5} />
          ) : (
            <ArrowUpDown className="h-3.5 w-3.5 text-lyra-fg-disabled" strokeWidth={1.5} />
          )}
        </span>
        {/* Render non-text children (e.g. context menus) outside the truncated span */}
        {React.Children.map(children, (child) =>
          typeof child !== "string" && typeof child !== "number" ? child : null
        )}
        {resizable && columnKey && (
          <ColumnResizeHandle
            columnKey={columnKey}
            minWidth={minWidth}
            maxWidth={maxWidth}
            label={typeof children === "string" ? children : undefined}
            currentWidth={() => resizedWidth ?? localRef.current?.getBoundingClientRect().width ?? minWidth}
          />
        )}
      </th>
    );
  }
);
SortableTableHead.displayName = "SortableTableHead";

/* ── useColumnReorder hook ── */

interface ColumnDragHandlers {
  onDragStart: (e: React.DragEvent, key: string) => void;
  onDragOver: (e: React.DragEvent, key: string) => void;
  onDrop: (e: React.DragEvent, key: string) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
}

interface UseColumnReorderReturn<K extends string> {
  /** Current column order */
  columnOrder: K[];
  /** Which column key is being dragged over (for highlight) */
  dragOverKey: string | null;
  /** Drag handler object — pass to SortableTableHead's dragHandlers prop */
  dragHandlers: ColumnDragHandlers;
  /** Reset to initial order */
  resetOrder: () => void;
}

function useColumnReorder<K extends string>(initialOrder: K[]): UseColumnReorderReturn<K> {
  const [columnOrder, setColumnOrder] = useState<K[]>(initialOrder);
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const dragKeyRef = useRef<string | null>(null);

  const onDragStart = useCallback((e: React.DragEvent, key: string) => {
    dragKeyRef.current = key;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", key);
    // Make the drag image semi-transparent
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "0.5";
    }
  }, []);

  const onDragOver = useCallback((e: React.DragEvent, key: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (key !== dragKeyRef.current) {
      setDragOverKey(key);
    }
  }, []);

  const onDrop = useCallback((e: React.DragEvent, targetKey: string) => {
    e.preventDefault();
    setDragOverKey(null);
    const sourceKey = dragKeyRef.current;
    if (!sourceKey || sourceKey === targetKey) return;

    setColumnOrder((prev) => {
      const next = [...prev];
      const fromIdx = next.indexOf(sourceKey as K);
      const toIdx = next.indexOf(targetKey as K);
      if (fromIdx === -1 || toIdx === -1) return prev;
      next.splice(fromIdx, 1);
      next.splice(toIdx, 0, sourceKey as K);
      return next;
    });
    dragKeyRef.current = null;
  }, []);

  const onDragEnd = useCallback((e: React.DragEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "";
    }
    setDragOverKey(null);
    dragKeyRef.current = null;
  }, []);

  const onDragLeave = useCallback((_e: React.DragEvent) => {
    setDragOverKey(null);
  }, []);

  const resetOrder = useCallback(() => {
    setColumnOrder(initialOrder);
  }, [initialOrder]);

  return {
    columnOrder,
    dragOverKey,
    dragHandlers: { onDragStart, onDragOver, onDrop, onDragEnd, onDragLeave },
    resetOrder,
  };
}

/* ── TableToolbar ── */

/** Configuration for a single filter chip in the toolbar */
interface ToolbarFilterDef {
  /** Unique key for this filter */
  key: string;
  /** Display label on the chip */
  label: string;
  /** Available options */
  options: FilterChipOption[];
}

/** Configuration for a single action in the toolbar */
interface ToolbarActionDef {
  /** Unique key for this action */
  key: string;
  /** Display label (shown in overflow menu, used as title on icon buttons) */
  label: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Whether to show a divider before this action */
  divider?: boolean;
}

interface TableToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Search query value */
  searchQuery?: string;
  /** Called when search value changes */
  onSearchChange?: (value: string) => void;
  /** Search placeholder text (default: "Search") */
  searchPlaceholder?: string;
  /** Total record count to display */
  recordCount?: number;
  /** Custom label for record count (default: "Records") */
  recordLabel?: string;
  /** Content rendered below the search row (e.g. filter chips, badges) */
  filters?: React.ReactNode;
  /** Declarative filter definitions — renders FilterChip components automatically */
  filterDefs?: ToolbarFilterDef[];
  /** Current filter values keyed by filter key */
  filterValues?: Record<string, string[]>;
  /** Called when any filter selection changes */
  onFilterChange?: (key: string, values: string[]) => void;
  /** Called when clear all filters is clicked */
  onFilterClear?: () => void;
  /** Action buttons rendered on the right side */
  actions?: React.ReactNode;
  /** Structured action definitions — renders icon buttons inline on large screens, labeled menu on small screens */
  actionDefs?: ToolbarActionDef[];
  /** Optional title — when provided, renders inline with action buttons on row 1; search + filters move to row 2 */
  title?: string;
  /** Show panel toggle icon button(s) at the far right of the toolbar — always opens interior panels */
  toolbarPanelToggle?: "left" | "right" | "both";
  /** Called when the left interior panel toggle is clicked */
  onLeftPanelToggle?: () => void;
  /** Called when the right interior panel toggle is clicked */
  onRightPanelToggle?: () => void;
  /**
   * When true, shows an "Query Builder" button that opens a filter-builder popover.
   */
  showAdvancedSearch?: boolean;
  /**
   * Written-out criteria description shown as a tooltip on the "Applied Filters" button.
   */
  advancedSearchDescription?: string;
  /** Title shown in the Advanced Search popover header (e.g. a saved search name) */
  advancedSearchTitle?: string;
  /** Content rendered inside the Advanced Search popover (the filter builder) */
  advancedSearchContent?: React.ReactNode;
  /** Whether advanced filters are currently applied — changes button label to "Applied Filters" */
  advancedSearchApplied?: boolean;
  /** Called when the Apply button in the popover is clicked */
  onAdvancedSearchApply?: () => void;
  /** Called when the Cancel button is clicked or popover closes without applying */
  onAdvancedSearchCancel?: () => void;
  /** Called when user saves a named search — receives the search name */
  onSaveSearch?: (name: string) => void;
}

const TableToolbar = React.forwardRef<HTMLDivElement, TableToolbarProps>(
  ({ className, searchQuery, onSearchChange, searchPlaceholder = "Search", recordCount, recordLabel = "Records", filters, filterDefs, filterValues, onFilterChange, onFilterClear, actions, actionDefs, title, toolbarPanelToggle, onLeftPanelToggle, onRightPanelToggle, showAdvancedSearch, advancedSearchContent, advancedSearchApplied, advancedSearchDescription, advancedSearchTitle, onAdvancedSearchApply, onAdvancedSearchCancel, onSaveSearch, ...props }, ref) => {
    const [advancedOpen, setAdvancedOpen] = useState(false);
    const [saveSearchOpen, setSaveSearchOpen] = useState(false);
    const [saveSearchName, setSaveSearchName] = useState("");
    const [moreOpen, setMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(9999);

    /* Stable callback ref — useCallback with [] ensures it never recreates,
       so React never detaches/reattaches it on re-renders triggered by
       setContainerWidth, which would disconnect the ResizeObserver. */
    const stableRef = useCallback((el: HTMLDivElement | null) => {
      (measureRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
      const el = measureRef.current;
      if (!el) return;
      setContainerWidth(el.getBoundingClientRect().width);
      const ro = new ResizeObserver(([entry]) => {
        setContainerWidth(entry.contentRect.width);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, []);

    const isWide = containerWidth >= 991;
    // Narrowest stage: below this, action buttons (whichever form `isWide`
    // above has already put them in — inline icons or the collapsed "More"
    // menu) no longer share a row with search at all — nor do the filters
    // (whichever form they're already in — collapsed dropdown chip, the
    // custom `filters` node, Query Builder). Per "when the right buttons
    // go to the second line, the filters should also go to the second
    // line" — search (if present) is left alone on its own row; filters
    // and action buttons both wrap down together onto one shared row
    // beneath it — filters floated left, action buttons right (`justify-
    // between`, not both crowded onto one right-aligned side) — in both
    // the title and no-title layouts. Raised from 360 to 768, then per a
    // further explicit follow-up ("update the container breakpoint to
    // 768px so search goes to a row below sooner" — clarified to mean
    // raising the wrap point further, to close out the crowded 769–990px
    // dead zone entirely, not literally re-lowering it to 768) raised
    // again to match `isWide`'s own 991 threshold exactly: `isNarrow` is
    // now simply `!isWide`, so the row wraps the INSTANT the toolbar drops
    // out of the wide tier — no gap where the actions/filters row is
    // already crowded (`isWide` false) but still hasn't wrapped.
    const isNarrow = containerWidth < 991;

    useEffect(() => {
      if (!moreOpen) return;
      const onClickOutside = (e: MouseEvent) => {
        if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
          setMoreOpen(false);
        }
      };
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }, [moreOpen]);

    // Also true once the Query Builder / Advanced Search popover has an
    // applied query — not just when a `filterDefs` chip has a selected
    // value — so the top-level "Clear" button shows up for either
    // filtering mechanism, not only the `filterDefs`-driven one.
    const hasActiveFilters = Boolean(
      (filterDefs && filterValues && filterDefs.some((f) => (filterValues[f.key]?.length ?? 0) > 0)) ||
      advancedSearchApplied
    );
    const activeFilterCount = filterDefs && filterValues
      ? filterDefs.filter((f) => (filterValues[f.key]?.length ?? 0) > 0).length
      : 0;

    /* Collapsed filter dropdown — shown when toolbar is narrow */
    const [filtersDropdownOpen, setFiltersDropdownOpen] = useState(false);
    const filtersDropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!filtersDropdownOpen) return;
      const handler = (e: MouseEvent) => {
        // Each `FilterChip` below renders its own nested dropdown (a
        // multi-select `Select`) via Radix Popper, which portals its
        // content straight to `document.body` — outside this panel's own
        // DOM subtree, even though it's visually/logically nested inside
        // it. `filtersDropdownRef.contains()` can't see that, so clicking
        // an option in a nested FilterChip's dropdown (e.g. "Jim Smith" in
        // a "Created By" filter) registered as an outside click and closed
        // this whole collapsed Filters panel out from under it. Every
        // Radix Popper-based primitive (Popover, Select, DropdownMenu,
        // Tooltip) wraps its portaled content in a
        // `[data-radix-popper-content-wrapper]` div — same fix already
        // used for this exact "nested portal reads as outside" shape in
        // `interaction-nav-item.tsx`'s hover-preview `onInteractOutside`.
        if ((e.target as Element)?.closest?.("[data-radix-popper-content-wrapper]")) {
          return;
        }
        if (filtersDropdownRef.current && !filtersDropdownRef.current.contains(e.target as Node)) {
          setFiltersDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [filtersDropdownOpen]);

    // ── Content-aware filter-chip "+N" overflow ──
    // Bundling extra filter chips behind a "+N" trigger once they'd
    // otherwise collide/overflow — regardless of the toolbar's own width
    // tier — rather than either (a) rendering every chip unconditionally
    // and letting them silently overflow the row past whatever room is
    // actually left after search/actions/the custom `filters` node take
    // theirs (the bug: 6 added filters spilling off the right edge of the
    // Customers table toolbar, confirmed via screenshot, even though the
    // toolbar itself measured `isWide`), or (b) collapsing ALL filters into
    // one single dropdown the moment the toolbar drops below 991px even
    // though most of them still comfortably fit. Same "measure the real
    // available space, fit as many as genuinely fit" philosophy as
    // `TabList`'s own `overflowBreakpoint="compact"` mode (tabs.tsx).
    //
    // `filterGroupWrapRef` is the outer wrapper holding the chips AND the
    // trailing group (custom `filters` node / Advanced Search / Clear) —
    // it's the one that's `flex-1 min-w-0` in the row below, so its own
    // `clientWidth` is the row's genuine leftover space after search/
    // actions. Available room for CHIPS specifically is that width minus
    // `filterTrailingRef`'s own real rendered width (that group stays its
    // natural, un-stretched size). Deliberately NOT making the chips row
    // itself `flex-1` (an earlier version did, and it technically measured
    // correctly, but a `flex-1` chips row still greedily claims all
    // leftover space even with zero chips to show, shoving the trailing
    // `filters` group all the way to the far right of the row instead of
    // sitting immediately beside the chips/search, per feedback on that
    // version) — subtracting the trailing group's width up front instead
    // keeps chips shrink-to-content and `filters` floating left, adjacent.
    const filterGroupWrapRef = useRef<HTMLDivElement>(null);
    const filterTrailingRef = useRef<HTMLDivElement>(null);
    const filterChipsMeasureRef = useRef<HTMLDivElement>(null);
    const [visibleFilterCount, setVisibleFilterCount] = useState(filterDefs?.length ?? 0);
    const [filterOverflowOpen, setFilterOverflowOpen] = useState(false);
    const filterOverflowRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!filterDefs || filterDefs.length === 0) {
        setVisibleFilterCount(0);
        return;
      }
      const groupEl = filterGroupWrapRef.current;
      const measureEl = filterChipsMeasureRef.current;
      if (!groupEl || !measureEl) return;

      const GAP = 8; // matches gap-2 (0.5rem)
      const recompute = () => {
        const trailingWidth = filterTrailingRef.current?.offsetWidth ?? 0;
        const available = groupEl.clientWidth - trailingWidth - (trailingWidth > 0 ? GAP : 0);
        const chipEls = Array.from(measureEl.querySelectorAll<HTMLElement>("[data-measure-chip]"));
        const overflowEl = measureEl.querySelector<HTMLElement>("[data-measure-overflow]");
        const overflowWidth = overflowEl?.offsetWidth ?? 0;
        const widths = chipEls.map((el) => el.offsetWidth);
        const total = widths.reduce((sum, w, i) => sum + w + (i > 0 ? GAP : 0), 0);
        if (total <= available) {
          setVisibleFilterCount(widths.length);
          return;
        }
        // Doesn't all fit — find the max leading count that still leaves
        // room for a trailing "+N" trigger after it.
        let used = 0;
        let count = 0;
        for (let i = 0; i < widths.length; i++) {
          const next = used + widths[i] + (i > 0 ? GAP : 0);
          if (next + GAP + overflowWidth <= available) {
            used = next;
            count++;
          } else {
            break;
          }
        }
        setVisibleFilterCount(count);
      };
      recompute();
      const ro = new ResizeObserver(recompute);
      ro.observe(groupEl);
      return () => ro.disconnect();
    }, [filterDefs, filterValues]);

    useEffect(() => {
      if (!filterOverflowOpen) return;
      const handler = (e: MouseEvent) => {
        // Same nested-Radix-portal exemption as `filtersDropdownOpen`'s own
        // handler below — each overflowed `FilterChip`'s own dropdown
        // portals to `document.body`, outside this panel's DOM subtree.
        if ((e.target as Element)?.closest?.("[data-radix-popper-content-wrapper]")) return;
        if (filterOverflowRef.current && !filterOverflowRef.current.contains(e.target as Node)) {
          setFilterOverflowOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [filterOverflowOpen]);

    const collapsedFilterChip = filterDefs && filterDefs.length > 0 ? (
      <div ref={filtersDropdownRef} className="relative">
        <button
          onClick={() => setFiltersDropdownOpen((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1.5 h-8 px-3 rounded-lyra-md lyra-body-md-emphasis border transition-colors whitespace-nowrap",
            activeFilterCount > 0
              ? "bg-lyra-bg-active-subtle border-lyra-border-active text-lyra-fg-active-strong"
              : "bg-lyra-bg-control border-lyra-border-soft text-lyra-fg-default hover:bg-lyra-state-hover"
          )}
        >
          Filters{activeFilterCount > 0 ? `: ${activeFilterCount} Active` : ""}
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
        {filtersDropdownOpen && (
          <div className="absolute left-0 top-full mt-1 z-50 min-w-[280px] rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-3 flex flex-col gap-2">
            {filterDefs.map((f) => (
              <FilterChip
                key={f.key}
                label={f.label}
                options={f.options}
                selectedValues={filterValues?.[f.key] ?? []}
                onSelectionChange={(vals) => onFilterChange?.(f.key, vals)}
              />
            ))}
            {hasActiveFilters && (
              <button
                onClick={() => { onFilterClear?.(); setFiltersDropdownOpen(false); }}
                className="lyra-body-md text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors text-left"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>
    ) : null;

    // Kept as the `hasFilters` boolean's source below — no longer rendered
    // directly (see `filterChipsRow`, which supersedes it for actual
    // display with the content-aware "+N" overflow above).
    const filterChips = filterDefs ? (
      <>
        {filterDefs.map((f) => (
          <FilterChip
            key={f.key}
            label={f.label}
            options={f.options}
            selectedValues={filterValues?.[f.key] ?? []}
            onSelectionChange={(vals) => onFilterChange?.(f.key, vals)}
          />
        ))}
      </>
    ) : null;

    const visibleFilterDefs = filterDefs?.slice(0, visibleFilterCount) ?? [];
    const overflowFilterDefs = filterDefs?.slice(visibleFilterCount) ?? [];

    const filterOverflowChip = overflowFilterDefs.length > 0 ? (
      <div ref={filterOverflowRef} className="relative shrink-0">
        <button
          onClick={() => setFilterOverflowOpen((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1 h-8 px-2.5 rounded-lyra-md lyra-body-md-emphasis border transition-colors whitespace-nowrap",
            overflowFilterDefs.some((f) => (filterValues?.[f.key]?.length ?? 0) > 0)
              ? "bg-lyra-bg-active-subtle border-lyra-border-active text-lyra-fg-active-strong"
              : "bg-lyra-bg-control border-lyra-border-soft text-lyra-fg-default hover:bg-lyra-state-hover"
          )}
          aria-label={`${overflowFilterDefs.length} more filters`}
          aria-expanded={filterOverflowOpen}
        >
          +{overflowFilterDefs.length}
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
        {filterOverflowOpen && (
          <div className="absolute left-0 top-full mt-1 z-50 min-w-[240px] rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-3 flex flex-col gap-2">
            {overflowFilterDefs.map((f) => (
              <FilterChip
                key={f.key}
                label={f.label}
                options={f.options}
                selectedValues={filterValues?.[f.key] ?? []}
                onSelectionChange={(vals) => onFilterChange?.(f.key, vals)}
              />
            ))}
          </div>
        )}
      </div>
    ) : null;

    // Real, visible row — as many chips as `visibleFilterCount` (computed
    // above) says fit, plus the "+N" trigger for the rest. Deliberately
    // shrink-to-content (no `flex-1` here — see `filterGroupWrapRef`'s own
    // doc comment above for why that was wrong: it kept the row measurable
    // but also shoved the trailing `filters` group to the far right even
    // with zero/few chips shown, instead of it floating left, adjacent).
    const filterChipsRow = filterDefs ? (
      <div className="relative flex items-center gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
          {visibleFilterDefs.map((f) => (
            <FilterChip
              key={f.key}
              label={f.label}
              options={f.options}
              selectedValues={filterValues?.[f.key] ?? []}
              onSelectionChange={(vals) => onFilterChange?.(f.key, vals)}
            />
          ))}
        </div>
        {filterOverflowChip}
        {/* Hidden measurement clone — see the "Content-aware filter-chip
            '+N' overflow" doc comment above for why this exists and how
            it's read. Absolutely positioned so it never affects this row's
            own layout/width. */}
        <div
          ref={filterChipsMeasureRef}
          aria-hidden="true"
          inert
          style={{ position: "absolute", top: 0, left: 0, visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap", display: "flex", gap: "var(--lyra-spacing-2)" }}
        >
          {filterDefs.map((f) => (
            <div key={f.key} data-measure-chip>
              <FilterChip label={f.label} options={f.options} selectedValues={filterValues?.[f.key] ?? []} />
            </div>
          ))}
          <div data-measure-overflow>
            <button className="inline-flex items-center gap-1 h-8 px-2.5 rounded-lyra-md lyra-body-md-emphasis border whitespace-nowrap">
              +99
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    ) : null;

    // Sits at the far right of the whole filters group (after filterDefs'
    // own chips, any custom `filters` node, and the Advanced Search
    // button) — not folded into `filterChips` itself, since that only
    // covers the filterDefs-driven chips and would otherwise land in the
    // middle of the group instead of trailing all of it.
    const clearFiltersButton = hasActiveFilters ? (
      <Button variant="ghost" size="default" onClick={onFilterClear}>
        Clear
      </Button>
    ) : null;

    const hasSearch = onSearchChange !== undefined;
    const hasFilters = filterChips || filters || showAdvancedSearch;

    /* Advanced Search popover button */
    const advancedSearchButton = showAdvancedSearch ? (
      <Popover
        open={advancedOpen}
        onOpenChange={(o) => {
          setAdvancedOpen(o);
          if (!o) onAdvancedSearchCancel?.();
        }}
        showArrow={false}
        maxHeight={`calc(100vh - 120px)`}
        // advancedSearchContent is an arbitrary consumer-supplied slot (the
        // filter-builder UI is defined by whoever renders TableToolbar, not
        // by this component) that's always expected to own its own padding
        // end to end (see AdvancedSearchContent in Table.stories.tsx, which
        // already wraps itself in `p-4`) — Popover's default 20px body inset
        // would double up on top of whatever padding that content supplies.
        bodyPadding={false}
        content={advancedSearchContent}
        footer={
          <div className="flex items-center justify-end gap-2 px-4 pb-4 pt-2">
            {/* Save Search */}
            {onSaveSearch && (
              <PopoverPrimitive.Root
                open={saveSearchOpen}
                onOpenChange={(o) => { setSaveSearchOpen(o); if (!o) setSaveSearchName(""); }}
              >
                {/* Anchor instead of Trigger — avoids aria-controls on a portal that may be unmounted */}
                <PopoverPrimitive.Anchor asChild>
                  <Button variant="outline" onClick={() => setSaveSearchOpen(v => !v)}>
                    Save Search
                  </Button>
                </PopoverPrimitive.Anchor>
                <PopoverPrimitive.Portal>
                  <PopoverPrimitive.Content
                    side="top"
                    sideOffset={8}
                    avoidCollisions
                    collisionPadding={4}
                    className="z-50 w-[320px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
                  >
                    <div className="px-4 pt-4 pb-1">
                      <h3 className="lyra-heading-sm text-lyra-fg-default mb-3">Save Search</h3>
                    </div>
                    <div className="flex flex-col gap-4 px-4 pb-4">
                      <Input
                        label="Search name"
                        placeholder="e.g. Active agents in Engineering"
                        value={saveSearchName}
                        onChange={(e) => setSaveSearchName(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && saveSearchName.trim()) {
                            onSaveSearch(saveSearchName.trim());
                            setSaveSearchOpen(false);
                            setSaveSearchName("");
                          }
                        }}
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => { setSaveSearchOpen(false); setSaveSearchName(""); }}>
                          Cancel
                        </Button>
                        <Button
                          disabled={!saveSearchName.trim()}
                          onClick={() => {
                            if (saveSearchName.trim()) {
                              onSaveSearch(saveSearchName.trim());
                              setSaveSearchOpen(false);
                              setSaveSearchName("");
                            }
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
              </PopoverPrimitive.Root>
            )}

            <div className="flex-1" />

            <Button
              variant="outline"
              onClick={() => {
                setAdvancedOpen(false);
                onAdvancedSearchCancel?.();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setAdvancedOpen(false);
                onAdvancedSearchApply?.();
              }}
            >
              Apply
            </Button>
          </div>
        }
        placement="bottom"
        title={advancedSearchTitle}
        className="w-[min(1024px,90vw)]"
      >
        {/* Button is always the direct Popover trigger (asChild requires a DOM element) */}
        <Button variant={advancedSearchApplied ? "default" : "outline"} size="md">
          <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          {advancedSearchApplied ? "Applied Filters" : "Query Builder"}
        </Button>
      </Popover>
    ) : null;

    /* Build tooltip content — name label + criteria description */
    const tooltipContent = advancedSearchApplied && (advancedSearchTitle || advancedSearchDescription) ? (
      <div className="flex flex-col gap-1 max-w-xs">
        {advancedSearchTitle && (
          <span className="lyra-label text-lyra-fg-default">{advancedSearchTitle}</span>
        )}
        {advancedSearchDescription && (
          <span className="lyra-body-sm text-lyra-fg-secondary font-mono break-all">{advancedSearchDescription}</span>
        )}
      </div>
    ) : null;

    /* Wrap in Tooltip AFTER building the Popover node — span is a valid asChild target */
    const advancedSearchNode = advancedSearchApplied && tooltipContent && advancedSearchButton ? (
      <Tooltip content={tooltipContent} placement="bottom" delayMs={300}>
        <span className="inline-flex">{advancedSearchButton}</span>
      </Tooltip>
    ) : advancedSearchButton;

    /* Panel toggle buttons (always at far right of toolbar) */
    /* Right panel toggle only — left appears before search (see below) */
    const panelToggleButtons = (toolbarPanelToggle === "right" || toolbarPanelToggle === "both") ? (
      <div className="flex items-center gap-2 ml-2 pl-2 border-l border-lyra-border-subtle">
        <Tooltip content="Toggle right panel" placement="left" asLabel>
          <Button variant="icon" size="icon" onClick={onRightPanelToggle} aria-label="Toggle right panel">
            <PanelRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </Tooltip>
      </div>
    ) : null;

    /* Shared action buttons block */
    const actionButtons = (actions || actionDefs || toolbarPanelToggle) ? (
      <>
        {/* Inline actions when toolbar is wide */}
        {isWide && <div className="flex items-center gap-2">
          {actionDefs?.map((a) => (
            <React.Fragment key={a.key}>
              {a.divider && <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />}
              <Button variant="icon" size="icon" title={a.label} disabled={a.disabled} onClick={a.onClick}>
                {a.icon}
              </Button>
            </React.Fragment>
          ))}
          {actionDefs && actionDefs.length > 0 && actions && (
            <div className="mx-2 h-6 w-px bg-lyra-border-subtle" />
          )}
          {actions}
          {panelToggleButtons}
        </div>}
        {/* More button when toolbar is narrow */}
        {!isWide && <div className="relative flex items-center gap-2" ref={moreRef}>
          {actions}
          {panelToggleButtons}
          {actionDefs && actionDefs.length > 0 && (
            <>
              <Button
                variant="icon"
                size="icon"
                title="More actions"
                onClick={() => setMoreOpen((v) => !v)}
              >
                <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-1 z-50 min-w-[180px] rounded-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-lg py-1">
                  {actionDefs.map((a) => (
                    <React.Fragment key={a.key}>
                      {a.divider && <div className="my-1 h-px bg-lyra-border-subtle" />}
                      <button
                        className={cn(
                          "flex w-full items-center gap-3 px-3 py-2 text-sm text-lyra-content-primary hover:bg-lyra-bg-surface-container-subtle transition-colors",
                          a.disabled && "opacity-40 pointer-events-none"
                        )}
                        disabled={a.disabled}
                        onClick={() => { a.onClick?.(); setMoreOpen(false); }}
                      >
                        {a.icon && <span className="flex-shrink-0 h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{a.icon}</span>}
                        {a.label}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </>
          )}
        </div>}
      </>
    ) : null;


    if (title) {
      /* ── Title mode: row 1 = title + actions, row 2 = search + filters ── */
      return (
        <div
          ref={stableRef}
          className={cn("flex flex-col gap-2 py-3", className)}
          {...props}
        >
          {/* Row 1: title + action buttons — action buttons move to their
              own row below search/filters once ≤360px (`isNarrow` above),
              rather than staying pinned next to the title where they'd
              otherwise be forced to squeeze against it. */}
          <div className="flex items-center justify-between">
            <span className="lyra-body-md-emphasis text-lyra-fg-default">{title}</span>
            {!isNarrow && actionButtons}
          </div>
          {/* Row 2: search + filters — filters collapse into the same
              dropdown-chip + Query Builder pairing the no-title layout
              uses once the toolbar itself gets too narrow for everything
              inline, rather than always rendering every filter chip
              regardless of available width. Per "the filters do not go
              responsive - they should always respond to the query
              regardless of if they are inline with the action button or
              not" — `isWide` is measured off the toolbar's own root
              (`stableRef`/`containerWidth` above), not off row 1, so it
              applies here exactly the same way it already did in the
              no-title layout. Once `isNarrow`, the filters portion moves
              out of this row entirely — down to the shared row below,
              alongside action buttons — so this row is search-only then. */}
          {(hasSearch || (hasFilters && !isNarrow)) && (
            <div className="flex items-center gap-2">
              {hasSearch && (
                <SearchInput
                  placeholder={searchPlaceholder}
                  value={searchQuery ?? ""}
                  onValueChange={onSearchChange}
                  className="flex-1 min-w-[240px] max-w-[320px]"
                  aria-label={searchPlaceholder}
                  size="sm"
                />
              )}
              {hasFilters && !isNarrow && (
                <div ref={filterGroupWrapRef} className="flex items-center gap-2 flex-1 min-w-0">
                  {filterChipsRow}
                  <div ref={filterTrailingRef} className="flex items-center gap-2 shrink-0">
                    {filters}
                    {advancedSearchNode}
                    {clearFiltersButton}
                  </div>
                </div>
              )}
            </div>
          )}
          {/* `isNarrow`: filters (whichever form — collapsed chip, custom
              node, Query Builder) and action buttons share one row here
              instead of the former just wrapping down alone while filters
              stayed stranded on row 2 — filters float left, action buttons
              float right (`justify-between`), rather than crowding both
              onto one right-aligned side. */}
          {isNarrow && (hasFilters || actionButtons) && (
            <div className="flex items-center justify-between gap-2">
              {hasFilters ? (
                <div className="flex items-center gap-2">
                  {collapsedFilterChip}
                  {filters}
                  {advancedSearchNode}
                </div>
              ) : <div />}
              {actionButtons}
            </div>
          )}
        </div>
      );
    }

    /* ── No title: original layout ── */
    return (
      <div
        ref={stableRef}
        className={cn("flex flex-col gap-2 py-3", className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Left panel toggle — appears before search */}
            {(toolbarPanelToggle === "left" || toolbarPanelToggle === "both") && (
              <Button variant="icon" size="icon" title="Toggle left panel" onClick={onLeftPanelToggle}>
                <PanelLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            )}
            {hasSearch && (
              <SearchInput
                placeholder={searchPlaceholder}
                value={searchQuery ?? ""}
                onValueChange={onSearchChange}
                className="flex-1 min-w-[240px] max-w-[320px]"
                aria-label={searchPlaceholder}
                size="sm"
              />
            )}
            {/* Filters: inline when wide, collapsed chip once narrower than
                that — but once `isNarrow`, filters move off this row
                entirely, down to the shared row below with action
                buttons (both were previously identical branches here
                regardless of `hasSearch`, so that no-op split is gone). */}
            {hasFilters && !isNarrow && (
              <div ref={filterGroupWrapRef} className="flex items-center gap-2 flex-1 min-w-0">
                {filterChipsRow}
                <div ref={filterTrailingRef} className="flex items-center gap-2 shrink-0">
                  {filters}
                  {advancedSearchNode}
                  {clearFiltersButton}
                </div>
              </div>
            )}
          </div>
          {/* Action buttons move to their own row below search/filters
              once ≤360px (`isNarrow` above) instead of squeezing onto
              this row via `justify-between`. */}
          {!isNarrow && actionButtons}
        </div>
        {/* `isNarrow`: filters (whichever form — collapsed chip, custom
            node, Query Builder) and action buttons share one row here
            instead of the former just wrapping down alone while filters
            stayed stranded on row 1 — filters float left, action buttons
            float right (`justify-between`), rather than crowding both
            onto one right-aligned side. */}
        {isNarrow && (hasFilters || actionButtons) && (
          <div className="flex items-center justify-between gap-2">
            {hasFilters ? (
              <div className="flex items-center gap-2">
                {collapsedFilterChip}
                {filters}
                {advancedSearchNode}
              </div>
            ) : <div />}
            {actionButtons}
          </div>
        )}
      </div>
    );
  }
);
TableToolbar.displayName = "TableToolbar";

/* ── TableFooter (Pagination) ── */

interface TableFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Called when page changes */
  onPageChange: (page: number) => void;
  /** Current rows per page value */
  rowsPerPage: number;
  /** Called when rows per page changes */
  onRowsPerPageChange?: (rows: number) => void;
  /** Options for rows per page dropdown */
  rowsPerPageOptions?: number[];
  /** Total number of records */
  totalRecords: number;
  /** Index of first visible record (1-based) */
  displayStart: number;
  /** Index of last visible record */
  displayEnd: number;
  /** Show the "Displaying X-Y of Z" record count (default: true) */
  showDisplayCount?: boolean;
  /** Show the "Rows per page" selector (default: true) */
  showRowsPerPage?: boolean;
  /** Show first/last page jump buttons (default: true) */
  showJumpButtons?: boolean;
}

const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  ({
    className,
    currentPage,
    totalPages,
    onPageChange,
    rowsPerPage,
    onRowsPerPageChange,
    rowsPerPageOptions = [10, 25, 50, 100],
    totalRecords,
    displayStart,
    displayEnd,
    showDisplayCount = true,
    showRowsPerPage = true,
    showJumpButtons = true,
    ...props
  }, ref) => {
    const safePage = Math.min(currentPage, totalPages);

    const footerMeasureRef = useRef<HTMLDivElement>(null);
    const [footerWidth, setFooterWidth] = useState(9999);
    const footerStableRef = useCallback((el: HTMLDivElement | null) => {
      (footerMeasureRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useLayoutEffect(() => {
      const el = footerMeasureRef.current;
      if (!el) return;
      setFooterWidth(el.getBoundingClientRect().width);
      const ro = new ResizeObserver(([entry]) => setFooterWidth(entry.contentRect.width));
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    const isFooterNarrow = footerWidth < 760;

    return (
      <div
        ref={footerStableRef}
        className={cn(
          "flex border-t border-lyra-border-subtle py-2.5",
          isFooterNarrow ? "flex-col gap-2" : "flex-row items-center justify-between",
          className
        )}
        {...props}
      >
        {/* Left: display range + rows per page */}
        <div className="flex items-center gap-2 lyra-body-sm text-lyra-fg-secondary">
          {showDisplayCount && (
            <span>Displaying {displayStart}-{displayEnd} of {totalRecords}</span>
          )}
          {showRowsPerPage && onRowsPerPageChange && (
            <>
              {showDisplayCount && <span className="text-lyra-border-soft">|</span>}
              <span>Rows per page:</span>
              <div className="relative inline-flex items-center">
                <select
                  value={rowsPerPage}
                  onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                  aria-label="Rows per page"
                  className="appearance-none rounded-lyra-sm border border-lyra-border-soft bg-lyra-bg-control px-2 py-0.5 pr-6 lyra-body-sm text-lyra-fg-default hover:bg-lyra-bg-surface-shell transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-lyra-border-active"
                >
                  {rowsPerPageOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-1 h-3 w-3 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </>
          )}
        </div>

        {/* Right: page navigation */}
        <nav className="flex items-center gap-1 lyra-body-sm text-lyra-fg-secondary" aria-label="Pagination">
          <span>Page</span>
          {showJumpButtons && (
            <button
              onClick={() => onPageChange(1)}
              disabled={safePage <= 1}
              aria-label="First page"
              className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
            >
              <ChevronsLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
          <button
            onClick={() => onPageChange(Math.max(1, safePage - 1))}
            disabled={safePage <= 1}
            aria-label="Previous page"
            className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <input
            type="text"
            value={safePage}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val) && val >= 1 && val <= totalPages) {
                onPageChange(val);
              }
            }}
            aria-label="Current page"
            className="h-6 w-8 rounded-lyra-sm border border-lyra-border-soft bg-lyra-bg-field text-center lyra-body-sm text-lyra-fg-default focus:outline-none focus:ring-1 focus:ring-lyra-border-active"
          />
          <span>of {totalPages}</span>
          <button
            onClick={() => onPageChange(Math.min(totalPages, safePage + 1))}
            disabled={safePage >= totalPages}
            aria-label="Next page"
            className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
          >
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          {showJumpButtons && (
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={safePage >= totalPages}
              aria-label="Last page"
              className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
            >
              <ChevronsRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
        </nav>
      </div>
    );
  }
);
TableFooter.displayName = "TableFooter";

/* ── useAutoFitRows hook ── */

interface UseAutoFitRowsReturn {
  /** Ref to attach to the table's scrollable container */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Number of rows that fit in the visible area */
  rowsPerPage: number;
}

/**
 * Measures the container height and calculates how many rows fit.
 * Attach `containerRef` to the div wrapping the Table.
 * @param rowHeight Height of each data row in px (default: 40)
 * @param headerHeight Height of the header row in px (default: 40)
 * @param minRows Minimum rows to show (default: 3)
 */
function useAutoFitRows(
  rowHeight = 40,
  headerHeight = 40,
  minRows = 3
): UseAutoFitRowsReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(minRows);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // AutoFit containers should never scroll vertically
    el.style.overflowY = "hidden";

    function measure() {
      if (!containerRef.current) return;
      const available = containerRef.current.clientHeight - headerHeight;
      const fits = Math.max(minRows, Math.floor(available / rowHeight));
      setRowsPerPage(fits);
    }

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [rowHeight, headerHeight, minRows]);

  return { containerRef, rowsPerPage };
}

/* ── ColumnToggle ── */

interface ColumnToggleItem {
  /** Unique key for the column */
  key: string;
  /** Display label */
  label: string;
}

interface ColumnToggleProps {
  /** All available columns */
  columns: ColumnToggleItem[];
  /** Set of currently visible column keys */
  visibleColumns: Set<string>;
  /** Called when visibility changes */
  onVisibilityChange: (visibleColumns: Set<string>) => void;
  /** Optional class on the root wrapper */
  className?: string;
}

function ColumnToggle({ columns, visibleColumns, onVisibilityChange, className }: ColumnToggleProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const options = columns.map((c) => ({ value: c.key, label: c.label }));
  const currentValues = columns.filter((c) => visibleColumns.has(c.key)).map((c) => c.key);

  return (
    <Tooltip content="Show/hide columns" placement="bottom" delayMs={menuOpen ? 999999 : 200}>
      <div className={cn("inline-flex", className)}>
        <Select
          placeholder="Columns"
          options={options}
          multiple
          searchable
          showSelectAll
          values={currentValues}
          onValuesChange={(vals) => onVisibilityChange(new Set(vals))}
          onOpenChange={setMenuOpen}
          className="w-auto"
          trigger={<ColumnsIcon className="h-4 w-4" aria-hidden="true" />}
          dropdownAlign="right"
        />
      </div>
    </Tooltip>
  );
}

/* ── TableGroupRow ── */

interface TableGroupRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Group label (typically the column value being grouped) */
  label: string;
  /** Number of rows in the group */
  count: number;
  /** Whether the group is expanded */
  expanded: boolean;
  /** Called when the group is toggled */
  onToggle: () => void;
  /** Number of total columns (for spanning) */
  colSpan?: number;
}

const TableGroupRow = React.forwardRef<HTMLTableRowElement, TableGroupRowProps>(
  ({ className, label, count, expanded, onToggle, colSpan, ...props }, ref) => (
    <tr
      ref={ref}
      role="row"
      className={cn(
        // No `width`/`min-width` class — same corrected reasoning as
        // `TableRow` above: an explicit `min-w-full` replaces flexbox's own
        // content-aware automatic minimum size rather than adding to it, so
        // it wouldn't actually let this row grow past 100% when needed.
        // Leaving both at their default lets stretch (100% baseline) and
        // the automatic minimum (content-aware) combine correctly instead.
        "flex border-b border-lyra-border-subtle bg-lyra-bg-surface-shell cursor-pointer select-none hover:bg-lyra-state-hover transition-colors",
        className
      )}
      onClick={onToggle}
      {...props}
    >
      <td role="cell" className="flex items-center h-10 px-3 gap-2 w-full" colSpan={colSpan}>
        {expanded ? (
          <ChevronDown className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <ChevronRightIcon className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
        )}
        <span className="lyra-body-md-emphasis text-lyra-fg-default">{label}</span>
        <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-lyra-round bg-lyra-bg-active-moderate lyra-body-sm-emphasis text-lyra-fg-active-strong">
          {count}
        </span>
      </td>
    </tr>
  )
);
TableGroupRow.displayName = "TableGroupRow";

/* ── useTableGrouping hook ── */

interface GroupedData<T> {
  /** The group label (value of the grouped column) */
  label: string;
  /** The rows in this group */
  rows: T[];
}

interface UseTableGroupingReturn<T> {
  /** Column key currently being grouped by, or null */
  groupByKey: string | null;
  /** Set the column to group by (null clears grouping) */
  setGroupByKey: (key: string | null) => void;
  /** Grouped data — empty if no grouping active */
  groups: GroupedData<T>[];
  /** Set of collapsed group labels */
  collapsedGroups: Set<string>;
  /** Toggle a specific group's expanded/collapsed state */
  toggleGroup: (label: string) => void;
  /** Expand all groups */
  expandAll: () => void;
  /** Collapse all groups */
  collapseAll: () => void;
}

function useTableGrouping<T>(
  data: T[],
  getValueForKey: (row: T, key: string) => string
): UseTableGroupingReturn<T> {
  const [groupByKey, setGroupByKey] = useState<string | null>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  const groups = React.useMemo<GroupedData<T>[]>(() => {
    if (!groupByKey) return [];
    const map = new Map<string, T[]>();
    for (const row of data) {
      const val = getValueForKey(row, groupByKey);
      const label = val || "(empty)";
      if (!map.has(label)) map.set(label, []);
      map.get(label)!.push(row);
    }
    return Array.from(map.entries()).map(([label, rows]) => ({ label, rows }));
  }, [data, groupByKey, getValueForKey]);

  // Default all groups to collapsed when grouping key changes
  const prevGroupByKeyRef = React.useRef<string | null>(null);
  useEffect(() => {
    if (groupByKey !== prevGroupByKeyRef.current) {
      prevGroupByKeyRef.current = groupByKey;
      if (groupByKey && groups.length > 0) {
        setCollapsedGroups(new Set(groups.map((g) => g.label)));
      } else {
        setCollapsedGroups(new Set());
      }
    }
  }, [groupByKey, groups]);

  const toggleGroup = useCallback((label: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => setCollapsedGroups(new Set()), []);

  const collapseAll = useCallback(() => {
    setCollapsedGroups(new Set(groups.map((g) => g.label)));
  }, [groups]);

  return { groupByKey, setGroupByKey, groups, collapsedGroups, toggleGroup, expandAll, collapseAll };
}

/* ── ColumnHeaderContextMenu ── */

interface ColumnHeaderContextMenuProps {
  /** The column key that was right-clicked */
  columnKey: string;
  /** The column label */
  columnLabel: string;
  /** Current groupBy key (to show "Ungroup" option) */
  currentGroupBy: string | null;
  /** Called when user selects "Group by" */
  onGroupBy: (key: string | null) => void;
  /** Called to close the menu */
  onClose: () => void;
}

function ColumnHeaderContextMenu({ columnKey, columnLabel, currentGroupBy, onGroupBy, onClose }: ColumnHeaderContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const isGrouped = currentGroupBy === columnKey;

  return (
    <Menu
      ref={menuRef}
      className="absolute left-0 top-full mt-1 z-50"
      items={[
        isGrouped
          ? {
              id: "ungroup",
              label: "Ungroup rows",
              icon: <Group className="h-4 w-4" strokeWidth={1.5} />,
              onClick: () => { onGroupBy(null); onClose(); },
            }
          : {
              id: "group",
              label: `Group by "${columnLabel}"`,
              icon: <Group className="h-4 w-4" strokeWidth={1.5} />,
              onClick: () => { onGroupBy(columnKey); onClose(); },
            },
      ]}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  TableToolbar,
  TableFooter,
  ColumnToggle,
  TableGroupRow,
  ColumnHeaderContextMenu,
  useColumnReorder,
  useTableGrouping,
  useAutoFitRows,
};
export type { SortDirection, ColumnDragHandlers, TableProps, TableHeadProps, TableCellProps, TableToolbarProps, ToolbarFilterDef, ToolbarActionDef, TableFooterProps, ColumnToggleItem, ColumnToggleProps, TableGroupRowProps, GroupedData, UseTableGroupingReturn, UseAutoFitRowsReturn };
