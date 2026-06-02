import * as React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown, ChevronRight as ChevronRightIcon, Group, MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";
import { SearchInput } from "./search-input";
import { Select } from "./select";
import { Tooltip } from "./tooltip";
import { ColumnsIcon } from "./icons/columns-icon";
import { FilterChip } from "./filter-chip";
import type { FilterChipOption } from "./filter-chip";
import { Button } from "./button";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full flex flex-col overflow-x-auto h-full" role="presentation">
    <table
      ref={ref}
      role="table"
      className={cn("w-full caption-bottom flex flex-col h-full", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    role="rowgroup"
    className={cn("bg-lyra-bg-surface-base flex-shrink-0", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    role="rowgroup"
    className={cn("flex-1 [&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    role="row"
    className={cn(
      "flex w-full border-b border-lyra-border-subtle transition-colors",
      /* default row states */
      "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
      /* selected row states */
      "data-[state=selected]:bg-lyra-bg-active-subtle",
      "data-[state=selected]:hover:bg-lyra-state-hover-active-subtle",
      "data-[state=selected]:active:bg-lyra-state-pressed-active-subtle",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, children, title, ...props }, ref) => (
  <th
    ref={ref}
    role="columnheader"
    title={title ?? (typeof children === "string" ? children : undefined)}
    className={cn(
      "flex items-center h-10 px-3 text-left text-[14px] font-medium text-lyra-fg-default border-b border-lyra-border-default [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0",
      className
    )}
    {...props}
  >
    <span className="truncate">{children}</span>
  </th>
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, children, title, ...props }, ref) => (
  <td
    ref={ref}
    role="cell"
    title={title ?? (typeof children === "string" ? children : undefined)}
    className={cn(
      "flex items-center h-10 px-3 lyra-body-md text-lyra-fg-default [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0",
      className
    )}
    {...props}
  >
    <span className="truncate">{children}</span>
  </td>
));
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
  /** Column key used by useColumnReorder — enables drag when provided */
  columnKey?: string;
  /** Drag handlers returned by useColumnReorder */
  dragHandlers?: ColumnDragHandlers;
  /** Whether this column is currently being dragged over */
  isDragOver?: boolean;
}

const SortableTableHead = React.forwardRef<
  HTMLTableCellElement,
  SortableTableHeadProps
>(({ className, children, sortDirection = null, onSort, columnKey, dragHandlers, isDragOver, ...props }, ref) => {
  const draggable = !!(columnKey && dragHandlers);

  return (
    <th
      ref={ref}
      role="columnheader"
      tabIndex={0}
      draggable={draggable}
      onDragStart={draggable ? (e) => dragHandlers.onDragStart(e, columnKey!) : undefined}
      onDragOver={draggable ? (e) => dragHandlers.onDragOver(e, columnKey!) : undefined}
      onDrop={draggable ? (e) => dragHandlers.onDrop(e, columnKey!) : undefined}
      onDragEnd={draggable ? dragHandlers.onDragEnd : undefined}
      onDragLeave={draggable ? dragHandlers.onDragLeave : undefined}
      className={cn(
        "flex items-center h-10 px-3 text-left text-[14px] font-medium text-lyra-fg-default border-b border-lyra-border-default whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px] min-w-0 relative",
        "group/sort cursor-pointer select-none hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset",
        sortDirection && "border-b-2 border-b-lyra-bg-primary",
        isDragOver && "bg-lyra-bg-active-moderate",
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
    </th>
  );
});
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
  /** Search placeholder text (default: "Quick Search") */
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
}

const TableToolbar = React.forwardRef<HTMLDivElement, TableToolbarProps>(
  ({ className, searchQuery, onSearchChange, searchPlaceholder = "Quick Search", recordCount, recordLabel = "Records", filters, filterDefs, filterValues, onFilterChange, onFilterClear, actions, actionDefs, ...props }, ref) => {
    const [moreOpen, setMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);

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

    const hasActiveFilters = filterDefs && filterValues && filterDefs.some((f) => (filterValues[f.key]?.length ?? 0) > 0);

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
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onFilterClear}>
            Clear
          </Button>
        )}
      </>
    ) : null;

    const hasSearch = onSearchChange !== undefined;
    const hasFilters = filterChips || filters;

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 py-3", className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {hasSearch && (
              <SearchInput
                placeholder={searchPlaceholder}
                value={searchQuery ?? ""}
                onValueChange={onSearchChange}
                className="w-[260px]"
                aria-label={searchPlaceholder}
              />
            )}
            {/* Filters inline when no search, or on large screens */}
            {hasFilters && (!hasSearch ? (
              <div className="flex items-center gap-2">
                {filterChips}
                {filters}
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                {filterChips}
                {filters}
              </div>
            ))}
          </div>
          {(actions || actionDefs) && (
            <>
              {/* Inline actions on large screens */}
              <div className="hidden lg:flex items-center gap-1">
                {actionDefs?.map((a) => (
                  <React.Fragment key={a.key}>
                    {a.divider && <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />}
                    <Button variant="icon" size="icon" title={a.label} disabled={a.disabled} onClick={a.onClick}>
                      {a.icon}
                    </Button>
                  </React.Fragment>
                ))}
                {actionDefs && actionDefs.length > 0 && actions && (
                  <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />
                )}
                {actions}
              </div>
              {/* More button on small screens */}
              <div className="relative lg:hidden flex items-center gap-1" ref={moreRef}>
                {/* Non-menu actions (like ColumnToggle) stay visible */}
                {actions}
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
              </div>
            </>
          )}
        </div>
        {/* Filters on second row below 1024px when search is present */}
        {hasSearch && hasFilters && (
          <div className="flex items-center gap-2 lg:hidden">
            {filterChips}
            {filters}
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
    ...props
  }, ref) => {
    const safePage = Math.min(currentPage, totalPages);

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between border-t border-lyra-border-subtle py-2.5",
          className
        )}
        {...props}
      >
        {/* Left: display range + rows per page */}
        <div className="flex items-center gap-2 lyra-body-sm text-lyra-fg-secondary">
          <span>
            Displaying {displayStart}-{displayEnd} of {totalRecords}
          </span>
          {onRowsPerPageChange && (
            <>
              <span className="text-lyra-border-default">|</span>
              <span>Rows per page:</span>
              <div className="relative inline-flex items-center">
                <select
                  value={rowsPerPage}
                  onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                  aria-label="Rows per page"
                  className="appearance-none rounded-lyra-sm border border-lyra-border-default bg-lyra-bg-control px-2 py-0.5 pr-6 lyra-body-sm text-lyra-fg-default hover:bg-lyra-bg-surface-shell transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-lyra-border-active"
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
          <button
            onClick={() => onPageChange(1)}
            disabled={safePage <= 1}
            aria-label="First page"
            className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
          >
            <ChevronsLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </button>
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
            className="h-6 w-8 rounded-lyra-sm border border-lyra-border-default bg-lyra-bg-field text-center lyra-body-sm text-lyra-fg-default focus:outline-none focus:ring-1 focus:ring-lyra-border-active"
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
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={safePage >= totalPages}
            aria-label="Last page"
            className="flex h-6 w-6 items-center justify-center rounded-lyra-sm hover:bg-lyra-bg-surface-shell transition-colors disabled:text-lyra-fg-disabled disabled:hover:bg-transparent text-lyra-fg-secondary"
          >
            <ChevronsRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </button>
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
        "flex w-full border-b border-lyra-border-subtle bg-lyra-bg-surface-shell cursor-pointer select-none hover:bg-lyra-state-hover transition-colors",
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
    <div
      ref={menuRef}
      role="menu"
      className="absolute left-0 top-full mt-1 z-50 min-w-[180px] rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay py-1 shadow-lg"
    >
      {isGrouped ? (
        <button
          role="menuitem"
          onClick={() => { onGroupBy(null); onClose(); }}
          className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left lyra-body-md text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus:outline-none"
        >
          <Group className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
          <span>Ungroup rows</span>
        </button>
      ) : (
        <button
          role="menuitem"
          onClick={() => { onGroupBy(columnKey); onClose(); }}
          className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left lyra-body-md text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus:outline-none"
        >
          <Group className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
          <span>Group by "{columnLabel}"</span>
        </button>
      )}
    </div>
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
export type { SortDirection, ColumnDragHandlers, TableToolbarProps, ToolbarFilterDef, ToolbarActionDef, TableFooterProps, ColumnToggleItem, ColumnToggleProps, TableGroupRowProps, GroupedData, UseTableGroupingReturn, UseAutoFitRowsReturn };
