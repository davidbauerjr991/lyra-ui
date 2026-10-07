import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Fragment, useEffect, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  TableToolbar,
  ColumnToggle,
  TableFooter,
  TableGroupRow,
  useAutoFitRows,
} from "../table";
import type { SortDirection } from "../table";
import { Checkbox } from "../checkbox";
import { MenuRadix } from "../menu-radix";
import { CircleCheck, Minus, MoreVertical, ChevronDown, Group } from "lucide-react";
import {
  sortableData,
  makeSortableData,
  toolbarActionDefs,
  defaultFilterDefs,
  defaultToggleColumns,
  filterValueFor,
  emptyFilterValues,
} from "./Table.shared";
import { AdvancedSearchContent, asBuildString, asHasAnyFilters, emptyAsRoot } from "./Table.queryBuilder";
import type { AsGroup } from "./Table.queryBuilder";

const meta: Meta<typeof Table> = {
  title: "Custom Primitives/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

/* Variants (selected rows, reorderable and resizable columns, toolbar,
   footer, column toggle, grouped rows, auto-fit, query builder) each have
   their own page under "Table/Variants" — see Table.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With Selected Rows' selection and Sortable into a single
   playground built from the same primitives (`Table`, `TableRow`,
   `TableCell`, `SortableTableHead`). Fully controlled: row and header
   checkboxes change the selection, and clicking a sortable header cycles
   ascending, descending, off. ── */

type SortKey = "name" | "description" | "createdBy" | "region" | "status";

function nextDirection(current: SortDirection): SortDirection {
  if (current === null) return "asc";
  if (current === "asc") return "desc";
  return null;
}

interface TableDemoProps {
  startingSelection?: "none" | "some" | "all";
  sortable?: boolean;
  resizable?: boolean;
  toolbar?: boolean;
  showSearch?: boolean;
  showFilters?: boolean;
  queryBuilder?: boolean;
  filterCount?: number;
  showColumns?: boolean;
  showActions?: boolean;
  showTitle?: boolean;
  grouped?: boolean;
  groupBy?: string;
  footer?: boolean;
  showDisplayCount?: boolean;
  showRowsPerPage?: boolean;
  showJumpButtons?: boolean;
  autoFit?: boolean;
  rowActions?: boolean;
  rowCount?: number;
  maxHeight?: boolean;
  ariaLabel?: string;
}

/* Smallest width (px) each resizable column can be dragged down to. */
const MIN_WIDTH: Record<SortKey, number> = { name: 120, description: 120, createdBy: 100, region: 90, status: 90 };

function TableDemo({
  startingSelection = "none",
  sortable = false,
  resizable = false,
  toolbar = false,
  showSearch = true,
  showFilters: showFiltersArg = true,
  queryBuilder = false,
  filterCount = 2,
  showColumns = true,
  showActions = true,
  showTitle = false,
  grouped = false,
  groupBy = "team",
  footer = false,
  showDisplayCount = true,
  showRowsPerPage = true,
  autoFit = false,
  showJumpButtons = true,
  rowActions = true,
  rowCount = 5,
  maxHeight = true,
  ariaLabel = "Agent desktops",
}: TableDemoProps) {
  const data = useMemo(() => makeSortableData(rowCount), [rowCount]);
  const [selected, setSelected] = useState<number[]>(
    startingSelection === "all"
      ? data.map((r) => r.id)
      : startingSelection === "some"
        ? data.slice(0, 2).map((r) => r.id)
        : []
  );
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      const next = nextDirection(sortDir);
      setSortDir(next);
      if (next === null) setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Toolbar state — only used while `toolbar` is on.
  const [query, setQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>(emptyFilterValues);
  const [visibleCols, setVisibleCols] = useState<Set<string>>(new Set(defaultToggleColumns.map((c) => c.key)));

  // The query builder replaces the filter chips — they are never shown together.
  const showFilters = showFiltersArg && !queryBuilder;

  // Query builder state — only used while `queryBuilder` is on. Applying it
  // is display-only here (its criteria describe people, not these rows).
  const [qbRoot, setQbRoot] = useState<AsGroup>(emptyAsRoot);
  const [qbApplied, setQbApplied] = useState<AsGroup | null>(null);
  const [qbName, setQbName] = useState<string | undefined>(undefined);
  const qbIsApplied = qbApplied !== null && asHasAnyFilters(qbApplied);

  const activeFilterDefs = defaultFilterDefs.slice(0, filterCount);
  const q = toolbar && showSearch ? query.trim().toLowerCase() : "";
  const matches = (r: (typeof sortableData)[number]) => {
    if (q && ![r.name, r.description, r.createdBy].some((v) => v.toLowerCase().includes(q))) return false;
    if (toolbar && showFilters) {
      for (const { key } of activeFilterDefs) {
        const picked = filterValues[key] ?? [];
        if (picked.length > 0 && !picked.includes(filterValueFor(r, key))) return false;
      }
    }
    return true;
  };
  // A column is hidden only when the toolbar's column toggle is shown and it is switched off.
  const showCol = (key: string) => !(toolbar && showColumns) || visibleCols.has(key);

  const rows = data.filter(matches).sort((a, b) => {
    if (!sortable || !sortKey || !sortDir) return 0;
    const aVal = filterValueFor(a, sortKey).toLowerCase();
    const bVal = filterValueFor(b, sortKey).toLowerCase();
    if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  // Footer pagination — only applied while `footer` is on. It uses the
  // footer's normal page sizes (10 / 25 / 50 / 100).
  const [page, setPage] = useState(1);
  const [manualRowsPerPage, setRowsPerPage] = useState(10);
  // Auto-fit (footer only): rows per page is however many rows fit in the
  // table's own area, measured from its height — no extra container.
  const autoFitRows = useAutoFitRows(40, 40, 3);
  const useAuto = footer && autoFit;
  const rowsPerPage = useAuto ? autoFitRows.rowsPerPage : manualRowsPerPage;
  const totalPages = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * rowsPerPage;
  const visibleRows = footer ? rows.slice(pageStart, pageStart + rowsPerPage) : rows;

  const allSelected = selected.length === data.length;
  const headerChecked = allSelected ? true : selected.length > 0 ? "indeterminate" : false;
  const dirFor = (key: SortKey): SortDirection => (sortKey === key ? sortDir : null);

  // Drag the thin strip on a header's right edge (or focus it and use the
  // arrow keys) to resize. `columnKey` on the header and its cells is what
  // applies a resize to the whole column — see the "Column resize" notes in
  // table.tsx.
  const resizeProps = (key: SortKey) =>
    resizable ? { resizable: true, columnKey: key, minWidth: MIN_WIDTH[key] } : {};
  const cellKey = (key: SortKey) => (resizable ? { columnKey: key } : {});

  // Grouping column — starts as the "Group by" control's value; the header
  // menu buttons (shown while Grouped is on) change it, or clear it.
  const [groupKey, setGroupKey] = useState<string | null>(grouped ? groupBy : null);
  const groupingActive = grouped && groupKey !== null;

  // A menu button for each header — the keyboard- and screen-reader-friendly
  // way to group (Radix handles Enter/Space/arrows, Escape and returning
  // focus). On sortable headers it goes through `SortableTableHead`'s
  // `labelAction`, which keeps it next to the label on the left with the sort
  // arrows on the right, and stops its clicks from also sorting.
  const groupMenu = (key: string, label: string) => (
    <MenuRadix
      align="start"
      modal={false}
      className="w-56"
      trigger={
        <button
          type="button"
          aria-label={`${label} column menu`}
          className="flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      }
      items={[
        groupKey === key
          ? {
              id: "ungroup",
              label: "Ungroup rows",
              icon: <Group className="h-4 w-4" strokeWidth={1.5} />,
              onClick: () => setGroupKey(null),
            }
          : {
              id: "group",
              label: `Group by "${label}"`,
              icon: <Group className="h-4 w-4" strokeWidth={1.5} />,
              onClick: () => setGroupKey(key),
            },
      ]}
    />
  );

  // Label + menu button for the plain (non-sortable) headers.
  const headerLabel = (key: string, label: string) =>
    grouped ? (
      <span className="flex items-center gap-1">
        {label}
        {groupMenu(key, label)}
      </span>
    ) : (
      label
    );

  const header = (key: SortKey, label: string, className: string) =>
    sortable ? (
      <SortableTableHead
        className={className}
        sortDirection={dirFor(key)}
        onSort={() => handleSort(key)}
        labelAction={grouped ? groupMenu(key, label) : undefined}
        {...resizeProps(key)}
      >
        {label}
      </SortableTableHead>
    ) : (
      <TableHead className={className} {...resizeProps(key)}>
        {headerLabel(key, label)}
      </TableHead>
    );

  // Grouping — rows of the current page, bucketed by the chosen column. Groups
  // start expanded so turning it on never hides rows.
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const toggleGroup = (label: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  const groups = (() => {
    const map = new Map<string, (typeof sortableData)[number][]>();
    for (const row of visibleRows) {
      const label = filterValueFor(row, groupKey ?? groupBy);
      map.set(label, [...(map.get(label) ?? []), row]);
    }
    return Array.from(map, ([label, rows]) => ({ label, rows }));
  })();

  const renderRow = (row: (typeof sortableData)[number]) => {
      const isSelected = selected.includes(row.id);
      return (
        <TableRow key={row.id} data-state={isSelected ? "selected" : undefined}>
          <TableCell className="w-[40px] shrink-0">
            <Checkbox
              aria-label={`Select ${row.name}`}
              checked={isSelected}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked === true ? [...prev, row.id] : prev.filter((id) => id !== row.id)
                )
              }
            />
          </TableCell>
          {showCol("name") && (
            <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline" {...cellKey("name")}>{row.name}</TableCell>
          )}
          {showCol("published") && (
            <TableCell className="flex-1">
              {row.published ? (
                <CircleCheck className="h-5 w-5 text-lyra-status-success-strong" strokeWidth={1.5} />
              ) : (
                <Minus className="h-5 w-5 text-lyra-fg-disabled" strokeWidth={1.5} />
              )}
            </TableCell>
          )}
          {showCol("description") && (
            <TableCell className="flex-[2]" {...cellKey("description")}>{row.description}</TableCell>
          )}
          {showCol("createdBy") && (
            <TableCell className="flex-[1.3]" {...cellKey("createdBy")}>{row.createdBy}</TableCell>
          )}
          {showCol("region") && (
            <TableCell className="flex-1" {...cellKey("region")}>{filterValueFor(row, "region")}</TableCell>
          )}
          {showCol("status") && (
            <TableCell className="flex-1" {...cellKey("status")}>{filterValueFor(row, "status")}</TableCell>
          )}
          {rowActions && (
            <TableCell className="w-[48px] shrink-0">
              <button aria-label="More options" className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
                <MoreVertical className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </TableCell>
          )}
        </TableRow>
      );
  };

  return (
    // Max height on: a fixed 400px box (the table scrolls inside it). Off: the
    // box fills the page (the canvas's 1rem padding on each side is
    // subtracted) and the footer, when shown, sits at the very bottom.
    <div
      className="flex flex-col"
      style={{ height: maxHeight ? 400 : "calc(100vh - 2rem)" }}
    >
      {toolbar && (
        <TableToolbar
          title={showTitle ? "Agent desktops" : undefined}
          searchQuery={showSearch ? query : undefined}
          onSearchChange={showSearch ? setQuery : undefined}
          recordCount={rows.length}
          showAdvancedSearch={queryBuilder}
          advancedSearchContent={
            queryBuilder ? (
              <AdvancedSearchContent
                root={qbRoot}
                onUpdate={(g) => {
                  setQbRoot(g);
                  if (qbApplied !== null && !asHasAnyFilters(g)) setQbApplied(null);
                }}
              />
            ) : undefined
          }
          advancedSearchApplied={queryBuilder && qbIsApplied}
          advancedSearchTitle={qbName}
          advancedSearchDescription={qbIsApplied && qbApplied ? asBuildString(qbApplied) || undefined : undefined}
          onAdvancedSearchApply={() => setQbApplied(qbRoot)}
          onSaveSearch={(name) => {
            setQbName(name);
            setQbApplied(qbRoot);
          }}
          filterDefs={showFilters ? activeFilterDefs : undefined}
          filterValues={showFilters ? filterValues : undefined}
          onFilterChange={showFilters ? (key, vals) => setFilterValues((p) => ({ ...p, [key]: vals })) : undefined}
          onFilterClear={
            showFilters
              ? () => setFilterValues(emptyFilterValues())
              : queryBuilder
                ? () => {
                    setQbApplied(null);
                    setQbRoot(emptyAsRoot());
                    setQbName(undefined);
                  }
                : undefined
          }
          actionDefs={showActions ? toolbarActionDefs : undefined}
          actions={
            showColumns ? (
              <ColumnToggle columns={defaultToggleColumns} visibleColumns={visibleCols} onVisibilityChange={setVisibleCols} />
            ) : undefined
          }
        />
      )}
      <div ref={useAuto ? autoFitRows.containerRef : undefined} className="min-h-0 flex-1">
      <Table aria-label={ariaLabel}>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0">
              <Checkbox
                aria-label="Select all rows"
                checked={headerChecked}
                onCheckedChange={(checked) =>
                  setSelected(checked === true ? data.map((r) => r.id) : [])
                }
              />
            </TableHead>
            {showCol("name") && header("name", "Name", "flex-[2]")}
            {showCol("published") && <TableHead className="flex-1">{headerLabel("published", "Published")}</TableHead>}
            {showCol("description") && header("description", "Description", "flex-[2]")}
            {showCol("createdBy") && header("createdBy", "Created By", "flex-[1.3]")}
            {showCol("region") && header("region", "Region", "flex-1")}
            {showCol("status") && header("status", "Status", "flex-1")}
            {rowActions && (
              <TableHead className="w-[48px] shrink-0">
                <span className="sr-only">Actions</span>
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupingActive
            ? groups.map((group) => (
                <Fragment key={group.label}>
                  <TableGroupRow
                    label={group.label}
                    count={group.rows.length}
                    expanded={!collapsed.has(group.label)}
                    onToggle={() => toggleGroup(group.label)}
                  />
                  {!collapsed.has(group.label) && group.rows.map(renderRow)}
                </Fragment>
              ))
            : visibleRows.map(renderRow)}
        </TableBody>
      </Table>
      </div>
      {footer && (
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(n) => {
            setRowsPerPage(n);
            setPage(1);
          }}
          totalRecords={rows.length}
          displayStart={rows.length === 0 ? 0 : pageStart + 1}
          displayEnd={Math.min(pageStart + rowsPerPage, rows.length)}
          showDisplayCount={showDisplayCount}
          showRowsPerPage={showRowsPerPage && !autoFit}
          showJumpButtons={showJumpButtons}
        />
      )}
    </div>
  );
}

type TableDemoStory = StoryObj<typeof TableDemo>;

export const Default: TableDemoStory = {
  args: {
    startingSelection: "none",
    sortable: false,
    resizable: false,
    toolbar: false,
    showSearch: true,
    showFilters: true,
    queryBuilder: false,
    filterCount: 2,
    showColumns: true,
    showActions: true,
    showTitle: false,
    grouped: false,
    groupBy: "team",
    footer: false,
    showDisplayCount: true,
    showRowsPerPage: true,
    autoFit: false,
    showJumpButtons: true,
    rowActions: true,
    rowCount: 5,
    maxHeight: true,
    ariaLabel: "Agent desktops",
  },
  parameters: {
    controls: {
      include: [
        "startingSelection",
        "sortable",
        "resizable",
        "toolbar",
        "showSearch",
        "showFilters",
        "queryBuilder",
        "Query builder",
        "filterCount",
        "showColumns",
        "showActions",
        "showTitle",
        "grouped",
        "groupBy",
        "footer",
        "showDisplayCount",
        "showRowsPerPage",
        "autoFit",
        "Auto-fit rows",
        "showJumpButtons",
        "ariaLabel",
        "rowActions",
        "rowCount",
        "maxHeight",
        "Max height",
        "Number of rows",
        "Starting selection",
        "Sortable columns",
        "Resizable columns",
        "Toolbar",
        "Search",
        "Filters",
        "Number of filters",
        "Column toggle",
        "Action buttons",
        "Title",
        "Grouped",
        "Group by",
        "Footer",
        "Display count",
        "Rows per page",
        "Jump buttons",
        "Accessible label",
        "Row actions column",
      ],
      sort: "none",
    },
  },
  argTypes: {
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "some", "all"],
      description:
        "Which rows start selected. Selected rows are highlighted, and the header checkbox shows a dash when only some are selected.",
      table: { category: "Behavior" },
    },
    sortable: {
      name: "Sortable columns",
      control: "boolean",
      description: "Makes Name, Description and Created By sortable headers (`SortableTableHead`).",
      table: { category: "Behavior" },
    },
    resizable: {
      name: "Resizable columns",
      control: "boolean",
      description:
        "Adds a drag handle on the right edge of the Name, Description and Created By headers (`resizable`, `columnKey`). Focus a handle and use the arrow keys to resize from the keyboard.",
      table: { category: "Behavior" },
    },
    toolbar: {
      name: "Toolbar",
      control: "boolean",
      description:
        "Shows a toolbar above the table (`TableToolbar`) with a record count. Its own controls appear under Toolbar once this is on.",
      table: { category: "Behavior" },
    },
    showSearch: {
      name: "Search",
      control: "boolean",
      description: "Quick search in the toolbar. It filters the rows by name, description or creator (`searchQuery`).",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    showFilters: {
      name: "Filters",
      control: "boolean",
      description: "Filter chips for Description and Created By that filter the rows (`filterDefs`).",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    queryBuilder: {
      name: "Query builder",
      control: "boolean",
      description:
        "A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (`showAdvancedSearch`). It replaces the filter chips, so turning it on switches Filters off and Filters can't be turned back on while it is on. Applying a query is display-only in this demo.",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    filterCount: {
      name: "Number of filters",
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description:
        "How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",
      if: { arg: "showFilters", truthy: true },
      table: { category: "Toolbar" },
    },
    showColumns: {
      name: "Column toggle",
      control: "boolean",
      description: "A menu to show or hide the table's columns (`ColumnToggle`).",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    showActions: {
      name: "Action buttons",
      control: "boolean",
      description: "Refresh, Edit, Copy and Delete icon buttons (`actionDefs`). They don't do anything in this demo.",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Shows a title above the search row (`title`).",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    grouped: {
      name: "Grouped",
      control: "boolean",
      description:
        "Buckets the rows under collapsible group headers with a count (`TableGroupRow`). Groups start expanded. Each column header also gets a menu button to group by that column or ungroup.",
      table: { category: "Behavior" },
    },
    groupBy: {
      name: "Group by",
      control: "select",
      options: ["team", "region", "status", "published", "description", "createdBy"],
      description:
        "Which attribute the rows are grouped by. Description and Created By are unique per row here, so each makes one group per row; Team, Region, Status and Published give a few larger groups.",
      if: { arg: "grouped", truthy: true },
      table: { category: "Behavior" },
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description:
        "Shows a pagination footer below the table (`TableFooter`). Its own controls appear under Footer once this is on.",
      table: { category: "Behavior" },
    },
    showDisplayCount: {
      name: "Display count",
      control: "boolean",
      description: "The “Displaying X–Y of Z” record count (`showDisplayCount`).",
      if: { arg: "footer", truthy: true },
      table: { category: "Footer" },
    },
    autoFit: {
      name: "Auto-fit rows",
      control: "boolean",
      description:
        "Rows per page is worked out from the table's height, so exactly as many rows as fit are shown and the footer pages through the rest (resize the window to see it adapt). The rows-per-page selector is hidden while this is on.",
      if: { arg: "footer", truthy: true },
      table: { category: "Footer" },
    },
    showRowsPerPage: {
      name: "Rows per page",
      control: "boolean",
      description: "The rows-per-page selector (`showRowsPerPage`).",
      if: { arg: "footer", truthy: true },
      table: { category: "Footer" },
    },
    showJumpButtons: {
      name: "Jump buttons",
      control: "boolean",
      description: "First-page and last-page buttons (`showJumpButtons`).",
      if: { arg: "footer", truthy: true },
      table: { category: "Footer" },
    },
    rowCount: {
      name: "Number of rows",
      control: "select",
      options: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      description: "Total rows in the table.",
      table: { category: "Content" },
    },
    maxHeight: {
      name: "Max height",
      control: "boolean",
      description:
        "On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page.",
      table: { category: "Appearance" },
    },
    ariaLabel: {
      name: "Accessible label",
      control: "text",
      description: "Name read by screen readers for the table (`aria-label`).",
      table: { category: "Content" },
    },
    rowActions: {
      name: "Row actions column",
      control: "boolean",
      description: "Shows the ⋮ button at the end of each row.",
      table: { category: "Appearance" },
    },
  },
  render: function Render(args) {
    // `useArgs` only works inside a story function, so it lives here rather
    // than in a child component. Query builder and filter chips are mutually
    // exclusive: while the query builder is on, Filters is switched off and
    // stays off.
    const [, updateArgs] = useArgs();
    useEffect(() => {
      if (args.queryBuilder && args.showFilters) updateArgs({ showFilters: false });
    }, [args.queryBuilder, args.showFilters, updateArgs]);
    return (
      // `key` remounts the demo when a control changes — `useState`'s initial
      // value only applies on first mount.
      <TableDemo key={JSON.stringify(args)} {...args} />
    );
  },
};
