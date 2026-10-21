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
import { Container } from "../container";
import { footerButtons, headerActions as containerHeaderActionButtons } from "./Container.shared";
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
import { QueryBuilder, describeQuery, emptyQuery, queryHasCriteria } from "../query-builder";
import type { QueryGroup } from "../query-builder";
import { sampleQueryCriteria } from "./QueryBuilder.shared";

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
  striped?: boolean;
  container?: boolean;
  containerHeader?: boolean;
  containerHeaderTitle?: string;
  containerHeaderSubhead?: string;
  containerHeaderActions?: boolean;
  containerHeaderBordered?: boolean;
  containerFooter?: boolean;
  containerFooterAlign?: "left" | "right" | "full";
  containerFooterBordered?: boolean;
  toolbar?: boolean;
  showSearch?: boolean;
  serverSearch?: boolean;
  /** Story plumbing, not a table setting: true while the toolbar AND its search are on. Drives which controls show. */
  searchControlsOn?: boolean;
  showFilters?: boolean;
  queryBuilder?: boolean;
  queryBuilderLabel?: string;
  queryBuilderFooter?: boolean;
  queryBuilderSave?: boolean;
  /** Story plumbing, not a table setting: true while the toolbar AND its Query Builder are on. Drives which controls show. */
  queryBuilderControlsOn?: boolean;
  filterCount?: number;
  showColumns?: boolean;
  showActions?: boolean;
  showTitle?: boolean;
  showRecordCount?: boolean;
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
  striped = false,
  container = false,
  containerHeader = false,
  containerHeaderTitle = "Agent desktops",
  containerHeaderSubhead = "",
  containerHeaderActions = true,
  containerHeaderBordered = true,
  containerFooter = false,
  containerFooterAlign = "right",
  containerFooterBordered = true,
  toolbar = false,
  showSearch = true,
  serverSearch = false,
  showFilters: showFiltersArg = true,
  queryBuilder = false,
  queryBuilderLabel = "Query Builder",
  queryBuilderFooter = true,
  queryBuilderSave = true,
  filterCount = 2,
  showColumns = true,
  showActions = true,
  showTitle = false,
  showRecordCount = false,
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

  // Filter chips and the query builder can be on together; both narrow the rows.
  const showFilters = showFiltersArg;

  // Query builder state — only used while `queryBuilder` is on. Applying it
  // is display-only here (its criteria describe people, not these rows).
  const [qbRoot, setQbRoot] = useState<QueryGroup>(emptyQuery);
  const [qbApplied, setQbApplied] = useState<QueryGroup | null>(null);
  const [qbName, setQbName] = useState<string | undefined>(undefined);
  const qbIsApplied = qbApplied !== null && queryHasCriteria(qbApplied);

  const activeFilterDefs = defaultFilterDefs.slice(0, filterCount);
  // Server-side search: the rows only react to the term once it is submitted
  // (button or Enter), the way a request to a server would; `query` is just the
  // text being typed. Live search filters on every keystroke.
  const [submittedQuery, setSubmittedQuery] = useState("");
  const q = toolbar && showSearch ? (serverSearch ? submittedQuery : query).trim().toLowerCase() : "";
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

  // `TableToolbar` and `TableFooter` have no built-in side padding (they only add
  // `py-3` / `py-2.5`), so full-bleed pages pass their own `px-*`. Inside a
  // Container they would sit flush against its edge, so the demo insets both.
  const insetClass = container ? "px-4" : undefined;
  const content = (
    // Max height on: a fixed 400px box (the table scrolls inside it). Off: the
    // box fills the page (the canvas's 1rem padding on each side is
    // subtracted) and the footer, when shown, sits at the very bottom.
    <div
      className={container ? "flex min-h-0 flex-1 flex-col" : "flex flex-col"}
      style={container ? undefined : { height: maxHeight ? 400 : "calc(100vh - 2rem)" }}
    >
      {toolbar && (
        <TableToolbar
          className={insetClass}
          title={showTitle ? "Agent desktops" : undefined}
          searchQuery={showSearch ? query : undefined}
          onSearchChange={showSearch ? setQuery : undefined}
          onSearchSubmit={showSearch && serverSearch ? setSubmittedQuery : undefined}
          recordCount={rows.length}
          showRecordCount={showRecordCount}
          showAdvancedSearch={queryBuilder}
          advancedSearchLabel={queryBuilderLabel.trim() || undefined}
          advancedSearchContent={
            queryBuilder ? (
              <QueryBuilder
                criteria={sampleQueryCriteria}
                value={qbRoot}
                onChange={(g) => {
                  setQbRoot(g);
                  // With the footer on, a query only applies on Apply; without one there is nothing to
                  // confirm, so every edit applies straight away.
                  if (!queryBuilderFooter) setQbApplied(queryHasCriteria(g) ? g : null);
                  else if (qbApplied !== null && !queryHasCriteria(g)) setQbApplied(null);
                }}
              />
            ) : undefined
          }
          advancedSearchApplied={queryBuilder && qbIsApplied}
          advancedSearchTitle={qbName}
          advancedSearchDescription={qbIsApplied && qbApplied ? describeQuery(qbApplied, sampleQueryCriteria) || undefined : undefined}
          onAdvancedSearchApply={() => setQbApplied(qbRoot)}
          advancedSearchFooter={queryBuilderFooter}
          onSaveSearch={
            queryBuilderFooter && queryBuilderSave
              ? (name) => {
                  setQbName(name);
                  setQbApplied(qbRoot);
                }
              : undefined
          }
          filterDefs={showFilters ? activeFilterDefs : undefined}
          filterValues={showFilters ? filterValues : undefined}
          onFilterChange={showFilters ? (key, vals) => setFilterValues((p) => ({ ...p, [key]: vals })) : undefined}
          // One Clear button for whichever of the two are on — with both on, it resets both.
          onFilterClear={
            showFilters || queryBuilder
              ? () => {
                  if (showFilters) setFilterValues(emptyFilterValues());
                  if (queryBuilder) {
                    setQbApplied(null);
                    setQbRoot(emptyQuery());
                    setQbName(undefined);
                  }
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
      <Table aria-label={ariaLabel} striped={striped}>
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
          className={insetClass}
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
  // Container on: the whole demo sits in a lyra-ui `Container` the reader can drag to resize
  // (bottom-right corner) — to try the footer's auto-fit rows (rows per page
  // follows the box's height) and the toolbar/footer's width breakpoints. The
  // box's size replaces Max height.
  return container ? (
    <Container
      radius="md"
      className="flex flex-col overflow-hidden"
      headerTitle={containerHeader ? containerHeaderTitle : undefined}
      headerSubhead={containerHeader ? containerHeaderSubhead || undefined : undefined}
      headerActions={containerHeader && containerHeaderActions ? containerHeaderActionButtons : undefined}
      headerBordered={containerHeader && containerHeaderBordered}
      footerActions={containerFooter ? footerButtons : undefined}
      footerAlign={containerFooterAlign}
      footerBordered={containerFooter && containerFooterBordered}
      style={{ resize: "both", width: "100%", maxWidth: "100%", height: 420, minWidth: 320, minHeight: 200 }}
    >
      {content}
    </Container>
  ) : (
    content
  );
}

type TableDemoStory = StoryObj<typeof TableDemo>;

export const Default: TableDemoStory = {
  args: {
    startingSelection: "none",
    sortable: false,
    resizable: false,
    striped: false,
    container: false,
    containerHeader: false,
    containerHeaderTitle: "Agent desktops",
    containerHeaderSubhead: "",
    containerHeaderActions: true,
    containerHeaderBordered: true,
    containerFooter: false,
    containerFooterAlign: "right",
    containerFooterBordered: true,
    toolbar: false,
    showSearch: true,
    serverSearch: false,
    searchControlsOn: false,
    showFilters: true,
    queryBuilder: false,
    queryBuilderLabel: "Query Builder",
    queryBuilderFooter: true,
    queryBuilderSave: true,
    queryBuilderControlsOn: false,
    filterCount: 2,
    showColumns: true,
    showActions: true,
    showTitle: false,
    showRecordCount: false,
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
        "striped",
        "container",
        "containerHeader",
        "containerHeaderTitle",
        "containerHeaderSubhead",
        "containerHeaderActions",
        "containerHeaderBordered",
        "containerFooter",
        "containerFooterAlign",
        "containerFooterBordered",
        "toolbar",
        "showSearch",
        "serverSearch",
        "showFilters",
        "queryBuilder",
        "Query builder",
        "queryBuilderLabel",
        "Query builder label",
        "queryBuilderFooter",
        "Query builder footer",
        "queryBuilderSave",
        "Query builder save",
        "filterCount",
        "showColumns",
        "showActions",
        "showTitle",
        "showRecordCount",
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
        "Striped rows",
        "Resizable container",
        "Container header",
        "Header title",
        "Header subhead",
        "Header actions",
        "Header divider",
        "Container footer",
        "Footer alignment",
        "Footer divider",
        "Toolbar",
        "Search",
        "Server-side search",
        "Filters",
        "Number of filters",
        "Column toggle",
        "Action buttons",
        "Title",
        "Record count",
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
        "Adds a drag handle on the right edge of the Name, Description and Created By headers (`resizable`, `columnKey`). Focus a handle and use the arrow keys to resize from the keyboard. The dividers only show while the pointer is over the table header (always on touch screens).",
      table: { category: "Behavior" },
    },
    striped: {
      name: "Striped rows",
      control: "boolean",
      description:
        "Shades every other body row with a subtle surface so long rows are easier to follow (`striped` on `Table`). Hover and selected rows keep their own colors; the header is never striped.",
      table: { category: "Appearance" },
    },
    container: {
      name: "Resizable container",
      control: "boolean",
      description:
        "Puts the table in a lyra-ui `Container` you can drag to resize from its bottom-right corner. Use it to try Auto-fit rows (turn on Footer, then Auto-fit rows: rows per page follows the box's height) and the toolbar and footer width breakpoints. The box's size replaces Max height.",
      table: { category: "Behavior" },
    },
    containerHeader: {
      name: "Container header",
      control: "boolean",
      description: "A title and a settings button across the top of the container (`headerTitle`, `headerActions`), with a divider below it.",
      if: { arg: "container", truthy: true },
      table: { category: "Behavior" },
    },
    containerFooter: {
      name: "Container footer",
      control: "boolean",
      description: "Cancel and Save buttons along the bottom of the container (`footerActions`), with a divider above them.",
      if: { arg: "container", truthy: true },
      table: { category: "Behavior" },
    },
    containerHeaderTitle: {
      name: "Header title",
      control: "text",
      description: "Title text in the container header (`headerTitle`).",
      if: { arg: "containerHeader", truthy: true },
      table: { category: "Container header" },
    },
    containerHeaderSubhead: {
      name: "Header subhead",
      control: "text",
      description: "Caption under the title (`headerSubhead`). Leave empty for none.",
      if: { arg: "containerHeader", truthy: true },
      table: { category: "Container header" },
    },
    containerHeaderActions: {
      name: "Header actions",
      control: "boolean",
      description: "A settings icon button on the right of the header (`headerActions`).",
      if: { arg: "containerHeader", truthy: true },
      table: { category: "Container header" },
    },
    containerHeaderBordered: {
      name: "Header divider",
      control: "boolean",
      description: "A dividing line below the header (`headerBordered`).",
      if: { arg: "containerHeader", truthy: true },
      table: { category: "Container header" },
    },
    containerFooterAlign: {
      name: "Footer alignment",
      control: "inline-radio",
      options: ["left", "right", "full"],
      description: "Where the footer buttons sit: left, right, or stretched to fill the width (`footerAlign`).",
      if: { arg: "containerFooter", truthy: true },
      table: { category: "Container footer" },
    },
    containerFooterBordered: {
      name: "Footer divider",
      control: "boolean",
      description: "A dividing line above the footer (`footerBordered`).",
      if: { arg: "containerFooter", truthy: true },
      table: { category: "Container footer" },
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
    serverSearch: {
      name: "Server-side search",
      control: "boolean",
      description:
        "Adds a submit button to the search field (`onSearchSubmit`). Once a term is typed, an arrow button appears; the rows only filter when it is clicked or Enter is pressed, instead of on every keystroke. Clearing the field resets the results.",
      // Only while the toolbar and its Search are both on (see `searchControlsOn`
      // and the `useEffect` in `render` — a control can only depend on one arg).
      if: { arg: "searchControlsOn", truthy: true },
      table: { category: "Toolbar" },
    },
    searchControlsOn: {
      description: "Story plumbing: true while Toolbar and Search are both on.",
      control: false,
      table: { disable: true },
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
        "A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (`showAdvancedSearch`). It can be on together with the filter chips; one Clear button resets both. Applying a query is display-only in this demo.",
      if: { arg: "toolbar", truthy: true },
      table: { category: "Toolbar" },
    },
    queryBuilderLabel: {
      name: "Query builder label",
      control: "text",
      description: "Text on the Query Builder button (`advancedSearchLabel`). Once a query is applied the button reads \"Applied Filters\" (`advancedSearchAppliedLabel`).",
      if: { arg: "queryBuilderControlsOn", truthy: true },
      table: { category: "Toolbar" },
    },
    queryBuilderFooter: {
      name: "Query builder footer",
      control: "boolean",
      description:
        "The Apply and Cancel buttons along the bottom of the Query Builder popover (`advancedSearchFooter`). Off: no footer, so there's nothing to confirm and every edit applies straight away (this demo does that).",
      if: { arg: "queryBuilderControlsOn", truthy: true },
      table: { category: "Toolbar" },
    },
    queryBuilderSave: {
      name: "Query builder save",
      control: "boolean",
      description:
        "The Save Search button in the popover footer (shown when `onSaveSearch` is passed). Only applies while the footer is on.",
      if: { arg: "queryBuilderControlsOn", truthy: true },
      table: { category: "Toolbar" },
    },
    queryBuilderControlsOn: {
      description: "Story plumbing: true while Toolbar and Query builder are both on.",
      control: false,
      table: { disable: true },
    },
    filterCount: {
      name: "Number of filters",
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description:
        "How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",
      if: { arg: "toolbar", truthy: true },
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
    showRecordCount: {
      name: "Record count",
      control: "boolean",
      description:
        "Shows the total record count in the toolbar's title area (`showRecordCount` + `recordCount`). With Title on it reads \"Title | 5 Records\"; with Title off the count shows on its own. Off with Title on shows the title only.",
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
        "On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page. Hidden while Resizable container is on, because the container's own size sets the height then.",
      if: { arg: "container", truthy: false },
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
    // A control can only depend on one other control, but Server-side search needs
    // Toolbar and Search on, and the Query builder options need Toolbar and Query
    // builder on — so keep hidden args in step with each pair.
    const [, updateArgs] = useArgs();
    const searchControlsOn = Boolean(args.toolbar && args.showSearch);
    const queryBuilderControlsOn = Boolean(args.toolbar && args.queryBuilder);
    useEffect(() => {
      if (args.searchControlsOn !== searchControlsOn) updateArgs({ searchControlsOn });
      if (args.queryBuilderControlsOn !== queryBuilderControlsOn) updateArgs({ queryBuilderControlsOn });
    }, [args.searchControlsOn, searchControlsOn, args.queryBuilderControlsOn, queryBuilderControlsOn, updateArgs]);
    return (
      // `key` remounts the demo when a control changes — `useState`'s initial
      // value only applies on first mount.
      <TableDemo key={JSON.stringify(args)} {...args} />
    );
  },
};
