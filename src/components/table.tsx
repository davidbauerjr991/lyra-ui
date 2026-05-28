import * as React from "react";
import { useState, useCallback, useRef } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { cn } from "../lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full flex flex-col overflow-hidden h-full">
    <table
      ref={ref}
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
    className={cn("flex-1 overflow-y-auto [&_tr:last-child]:border-0", className)}
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
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "flex items-center h-10 px-3 text-left text-[14px] font-medium text-lyra-fg-default border-b border-lyra-border-default whitespace-nowrap overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px]",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "flex items-center h-10 px-3 lyra-body-md text-lyra-fg-default whitespace-nowrap overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px]",
      className
    )}
    {...props}
  />
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
      draggable={draggable}
      onDragStart={draggable ? (e) => dragHandlers.onDragStart(e, columnKey!) : undefined}
      onDragOver={draggable ? (e) => dragHandlers.onDragOver(e, columnKey!) : undefined}
      onDrop={draggable ? (e) => dragHandlers.onDrop(e, columnKey!) : undefined}
      onDragEnd={draggable ? dragHandlers.onDragEnd : undefined}
      onDragLeave={draggable ? dragHandlers.onDragLeave : undefined}
      className={cn(
        "flex items-center h-10 px-3 text-left text-[14px] font-medium text-lyra-fg-default border-b border-lyra-border-default whitespace-nowrap overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[40px]",
        "group/sort cursor-pointer select-none hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors",
        isDragOver && "bg-lyra-bg-active-moderate",
        className
      )}
      onClick={onSort}
      aria-sort={
        sortDirection === "asc"
          ? "ascending"
          : sortDirection === "desc"
            ? "descending"
            : "none"
      }
      {...props}
    >
      <span className="flex-1 truncate">{children}</span>
      <span
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

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  useColumnReorder,
};
export type { SortDirection, ColumnDragHandlers };
