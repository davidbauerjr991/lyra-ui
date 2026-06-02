import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useCallback } from "react";
import {
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
} from "../table";
import type { ColumnToggleItem } from "../table";
import type { SortDirection } from "../table";
import { Button } from "../button";
import { Pencil, Copy, Trash2, RefreshCw } from "lucide-react";
import { Checkbox } from "../checkbox";
import { cn } from "../../lib/utils";
import { CircleCheck, Minus, MoreVertical } from "lucide-react";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, name: "Agent Desktop #1", published: true, description: "Back office", createdBy: "Jim Smith" },
  { id: 2, name: "Agent Desktop #2", published: true, description: "Custom", createdBy: "Jim Smith" },
  { id: 3, name: "Agent Desktop #3", published: false, description: "Knowledge Worker", createdBy: "Jim Smith" },
  { id: 4, name: "Agent Desktop #4", published: true, description: "BPO", createdBy: "Jim Smith" },
  { id: 5, name: "Agent Desktop #5", published: true, description: "Collections", createdBy: "Jim Smith" },
];

export const Default: Story = {
  render: () => (
    <div className="h-[400px]">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableHead>
            <TableHead className="flex-[2]">Name</TableHead>
            <TableHead className="flex-1">Published</TableHead>
            <TableHead className="flex-[2]">Description</TableHead>
            <TableHead className="flex-[1.3]">Created By</TableHead>
            <TableHead className="w-[48px] shrink-0"><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableCell>
              <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">{row.name}</TableCell>
              <TableCell className="flex-1">
                {row.published ? (
                  <CircleCheck className="h-5 w-5 text-lyra-status-success-strong" strokeWidth={1.5} />
                ) : (
                  <Minus className="h-5 w-5 text-lyra-fg-disabled" strokeWidth={1.5} />
                )}
              </TableCell>
              <TableCell className="flex-[2]">{row.description}</TableCell>
              <TableCell className="flex-[1.3]">{row.createdBy}</TableCell>
              <TableCell className="w-[48px] shrink-0">
                <button aria-label="More options" className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

export const WithSelectedRows: Story = {
  render: () => (
    <div className="h-[400px]">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0"><Checkbox checked="indeterminate" aria-label="Select all rows" /></TableHead>
            <TableHead className="flex-[2]">Name</TableHead>
            <TableHead className="flex-1">Published</TableHead>
            <TableHead className="flex-[2]">Description</TableHead>
            <TableHead className="flex-[1.3]">Created By</TableHead>
            <TableHead className="w-[48px] shrink-0"><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id} data-state={row.id <= 2 ? "selected" : undefined}>
              <TableCell className="w-[40px] shrink-0"><Checkbox checked={row.id <= 2} aria-label="Select row" /></TableCell>
              <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">{row.name}</TableCell>
              <TableCell className="flex-1">
                {row.published ? (
                  <CircleCheck className="h-5 w-5 text-lyra-status-success-strong" strokeWidth={1.5} />
                ) : (
                  <Minus className="h-5 w-5 text-lyra-fg-disabled" strokeWidth={1.5} />
                )}
              </TableCell>
              <TableCell className="flex-[2]">{row.description}</TableCell>
              <TableCell className="flex-[1.3]">{row.createdBy}</TableCell>
              <TableCell className="w-[48px] shrink-0">
                <button aria-label="More options" className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/* ── Sortable ── */

const sortableData = [
  { id: 1, name: "Agent Desktop #1", description: "Back office", createdBy: "Alice Johnson" },
  { id: 2, name: "Agent Desktop #2", description: "Custom", createdBy: "Bob Smith" },
  { id: 3, name: "Agent Desktop #3", description: "Knowledge Worker", createdBy: "Charlie Lee" },
  { id: 4, name: "Agent Desktop #4", description: "BPO", createdBy: "Diana Park" },
  { id: 5, name: "Agent Desktop #5", description: "Collections", createdBy: "Eve Martinez" },
];

type SortKey = "name" | "description" | "createdBy";

function nextDirection(current: SortDirection): SortDirection {
  if (current === null) return "asc";
  if (current === "asc") return "desc";
  return null;
}

function SortableDemo() {
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

  const sorted = [...sortableData].sort((a, b) => {
    if (!sortKey || !sortDir) return 0;
    const aVal = a[sortKey].toLowerCase();
    const bVal = b[sortKey].toLowerCase();
    if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const dirFor = (key: SortKey): SortDirection =>
    sortKey === key ? sortDir : null;

  return (
    <div className="h-[400px]">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableHead>
            <SortableTableHead
              className="flex-[2]"
              sortDirection={dirFor("name")}
              onSort={() => handleSort("name")}
            >
              Name
            </SortableTableHead>
            <SortableTableHead
              className="flex-[2]"
              sortDirection={dirFor("description")}
              onSort={() => handleSort("description")}
            >
              Description
            </SortableTableHead>
            <SortableTableHead
              className="flex-[1.3]"
              sortDirection={dirFor("createdBy")}
              onSort={() => handleSort("createdBy")}
            >
              Created By
            </SortableTableHead>
            <TableHead className="w-[48px] shrink-0"><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableCell>
              <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">{row.name}</TableCell>
              <TableCell className="flex-[2]">{row.description}</TableCell>
              <TableCell className="flex-[1.3]">{row.createdBy}</TableCell>
              <TableCell className="w-[48px] shrink-0">
                <button aria-label="More options" className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const Sortable: Story = {
  name: "Sortable",
  render: () => <SortableDemo />,
};

/* ── Reorderable + Sortable ── */

type ReorderColKey = "name" | "description" | "createdBy";

const reorderColumnConfig: Record<ReorderColKey, { label: string; flex: string }> = {
  name: { label: "Name", flex: "flex-[2]" },
  description: { label: "Description", flex: "flex-[2]" },
  createdBy: { label: "Created By", flex: "flex-[1.3]" },
};

const reorderData = [
  { id: 1, name: "Agent Desktop #1", description: "Back office", createdBy: "Alice Johnson" },
  { id: 2, name: "Agent Desktop #2", description: "Custom", createdBy: "Bob Smith" },
  { id: 3, name: "Agent Desktop #3", description: "Knowledge Worker", createdBy: "Charlie Lee" },
  { id: 4, name: "Agent Desktop #4", description: "BPO", createdBy: "Diana Park" },
  { id: 5, name: "Agent Desktop #5", description: "Collections", createdBy: "Eve Martinez" },
];

function ReorderableDemo() {
  const [sortKey, setSortKey] = useState<ReorderColKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const { columnOrder, dragOverKey, dragHandlers } = useColumnReorder<ReorderColKey>([
    "name",
    "description",
    "createdBy",
  ]);

  const handleSort = (key: ReorderColKey) => {
    if (sortKey === key) {
      const next: SortDirection = sortDir === null ? "asc" : sortDir === "asc" ? "desc" : null;
      setSortDir(next);
      if (next === null) setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...reorderData].sort((a, b) => {
    if (!sortKey || !sortDir) return 0;
    const aVal = a[sortKey].toLowerCase();
    const bVal = b[sortKey].toLowerCase();
    if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const dirFor = (key: ReorderColKey): SortDirection =>
    sortKey === key ? sortDir : null;

  return (
    <div className="h-[400px]">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableHead>
            {columnOrder.map((key) => {
              const col = reorderColumnConfig[key];
              return (
                <SortableTableHead
                  key={key}
                  className={col.flex}
                  sortDirection={dirFor(key)}
                  onSort={() => handleSort(key)}
                  columnKey={key}
                  dragHandlers={dragHandlers}
                  isDragOver={dragOverKey === key}
                >
                  {col.label}
                </SortableTableHead>
              );
            })}
            <TableHead className="w-[48px] shrink-0"><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox aria-label="Select row" /></TableCell>
              {columnOrder.map((key) => {
                const col = reorderColumnConfig[key];
                return (
                  <TableCell
                    key={key}
                    className={cn(
                      col.flex,
                      key === "name" && "text-lyra-fg-link cursor-pointer hover:underline"
                    )}
                  >
                    {row[key]}
                  </TableCell>
                );
              })}
              <TableCell className="w-[48px] shrink-0">
                <button aria-label="More options" className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const Reorderable: Story = {
  name: "Reorderable",
  render: () => <ReorderableDemo />,
};

/* ── TableToolbar ── */

const toolbarColumns: ColumnToggleItem[] = [
  { key: "name", label: "Name" },
  { key: "published", label: "Published" },
  { key: "description", label: "Description" },
  { key: "createdBy", label: "Created By" },
  { key: "createdDate", label: "Created Date" },
];

const toolbarFilterDefs = [
  {
    key: "description",
    label: "Description",
    options: [
      { value: "Back office", label: "Back office" },
      { value: "Custom", label: "Custom" },
      { value: "Knowledge Worker", label: "Knowledge Worker" },
    ],
  },
  {
    key: "createdBy",
    label: "Created By",
    options: [
      { value: "Jim Smith", label: "Jim Smith" },
      { value: "Alice Johnson", label: "Alice Johnson" },
    ],
  },
];

interface ToolbarDemoProps {
  showSearch: boolean;
  showFilters: boolean;
  showColumns: boolean;
  showActions: boolean;
  showTitle: boolean;
  toolbarPanelToggle: string;
}

function ToolbarDemo({ showSearch, showFilters, showColumns, showActions, showTitle, toolbarPanelToggle }: ToolbarDemoProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>({ description: [], createdBy: [] });
  const [visibleCols, setVisibleCols] = useState<Set<string>>(new Set(toolbarColumns.map((c) => c.key)));

  return (
    <div className="border border-lyra-border-subtle rounded-lyra-md overflow-hidden">
      <TableToolbar
        title={showTitle ? "Records" : undefined}
        searchQuery={showSearch ? searchQuery : undefined}
        onSearchChange={showSearch ? setSearchQuery : undefined}
        searchPlaceholder="Quick Search"
        filterDefs={showFilters ? toolbarFilterDefs : undefined}
        filterValues={showFilters ? filterValues : undefined}
        onFilterChange={showFilters ? (key, vals) => setFilterValues((p) => ({ ...p, [key]: vals })) : undefined}
        onFilterClear={showFilters ? () => setFilterValues({ description: [], createdBy: [] }) : undefined}
        actionDefs={showActions ? [
          { key: "refresh", label: "Refresh", icon: <RefreshCw className="h-4 w-4" strokeWidth={1.5} /> },
          { key: "edit",    label: "Edit",    icon: <Pencil   className="h-4 w-4" strokeWidth={1.5} /> },
          { key: "copy",    label: "Copy",    icon: <Copy     className="h-4 w-4" strokeWidth={1.5} /> },
          { key: "delete",  label: "Delete",  icon: <Trash2   className="h-4 w-4" strokeWidth={1.5} /> },
        ] : undefined}
        actions={showColumns ? (
          <ColumnToggle columns={toolbarColumns} visibleColumns={visibleCols} onVisibilityChange={setVisibleCols} />
        ) : undefined}
        toolbarPanelToggle={toolbarPanelToggle === "none" ? undefined : toolbarPanelToggle as "left" | "right" | "both"}
        onLeftPanelToggle={() => {}}
        onRightPanelToggle={() => {}}
      />
    </div>
  );
}

export const Toolbar: Story = {
  name: "Toolbar",
  parameters: {
    controls: {
      include: ["showSearch", "showFilters", "showColumns", "showActions", "showTitle", "toolbarPanelToggle"],
    },
  },
  args: {
    showSearch: true,
    showFilters: true,
    showColumns: true,
    showActions: true,
    showTitle: false,
    toolbarPanelToggle: "none",
  } as unknown as Record<string, unknown>,
  argTypes: {
    showSearch:         { control: "boolean", description: "Show quick search" },
    showFilters:        { control: "boolean", description: "Show filter chips" },
    showColumns:        { control: "boolean", description: "Show column toggle" },
    showActions:        { control: "boolean", description: "Show action icon buttons" },
    showTitle:          { control: "boolean", description: "Show title above search row" },
    toolbarPanelToggle: { control: "select", options: ["none", "left", "right", "both"], description: "Panel toggle button(s)" },
  } as unknown as Record<string, unknown>,
  render: (args) => <ToolbarDemo {...(args as unknown as ToolbarDemoProps)} />,
};

/* ── TableFooter (Pagination) ── */

interface FooterDemoProps {
  showDisplayCount: boolean;
  showRowsPerPage: boolean;
  showJumpButtons: boolean;
}

function FooterDemo({ showDisplayCount, showRowsPerPage, showJumpButtons }: FooterDemoProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalRecords = 53;
  const totalPages = Math.ceil(totalRecords / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalRecords);

  return (
    <TableFooter
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={(val) => { setRowsPerPage(val); setCurrentPage(1); }}
      totalRecords={totalRecords}
      displayStart={start}
      displayEnd={end}
      showDisplayCount={showDisplayCount}
      showRowsPerPage={showRowsPerPage}
      showJumpButtons={showJumpButtons}
    />
  );
}

export const Footer: Story = {
  name: "Footer (Pagination)",
  argTypes: {
    showDisplayCount: { control: "boolean", description: "Show display count (Displaying X-Y of Z)" },
    showRowsPerPage:  { control: "boolean", description: "Show rows per page selector" },
    showJumpButtons:  { control: "boolean", description: "Show jump to first/last page buttons" },
  } as unknown as Record<string, unknown>,
  args: {
    showDisplayCount: true,
    showRowsPerPage: true,
    showJumpButtons: true,
  } as unknown as Record<string, unknown>,
  render: (args) => <FooterDemo {...(args as unknown as FooterDemoProps)} />,
};

/* ── ColumnToggle ── */

const allColumns = [
  { key: "name", label: "Name" },
  { key: "published", label: "Published" },
  { key: "description", label: "Description" },
  { key: "createdBy", label: "Created By" },
  { key: "customerCard", label: "Customer Card" },
  { key: "createdDate", label: "Created Date" },
  { key: "modifiedDate", label: "Modified Date" },
  { key: "version", label: "Version" },
];

function ColumnToggleDemo() {
  const [visible, setVisible] = useState<Set<string>>(
    new Set(["name", "published", "description", "createdBy"])
  );

  return (
    <div className="flex items-center gap-4">
      <ColumnToggle
        columns={allColumns}
        visibleColumns={visible}
        onVisibilityChange={setVisible}
      />
      <span className="lyra-body-sm text-lyra-fg-secondary">
        {visible.size} of {allColumns.length} columns visible
      </span>
    </div>
  );
}

export const ColumnVisibility: Story = {
  name: "Column Toggle",
  render: () => <ColumnToggleDemo />,
};

/* ── Grouped Rows ── */

type GroupColKey = "description" | "createdBy";

const groupData = [
  { id: 1, name: "Agent Desktop #1", description: "Back office", createdBy: "Jim Smith" },
  { id: 2, name: "Agent Desktop #2", description: "Custom", createdBy: "Jim Smith" },
  { id: 3, name: "Agent Desktop #3", description: "Knowledge Worker", createdBy: "Alice Johnson" },
  { id: 4, name: "Agent Desktop #4", description: "BPO", createdBy: "Alice Johnson" },
  { id: 5, name: "Agent Desktop #5", description: "Collections", createdBy: "Jim Smith" },
  { id: 6, name: "Agent Desktop #6", description: "Back office", createdBy: "Bob Lee" },
  { id: 7, name: "Agent Desktop #7", description: "Custom", createdBy: "Bob Lee" },
  { id: 8, name: "Agent Desktop #8", description: "BPO", createdBy: "Alice Johnson" },
];

function GroupedDemo() {
  const getValueForKey = useCallback(
    (row: (typeof groupData)[number], key: string) => {
      if (key === "name") return row.name;
      if (key === "description") return row.description;
      if (key === "createdBy") return row.createdBy;
      return "";
    },
    []
  );

  const { groupByKey, groups, toggleGroup, collapsedGroups, setGroupByKey } =
    useTableGrouping(groupData, getValueForKey);

  const [contextMenuKey, setContextMenuKey] = useState<string | null>(null);

  const handleContextMenu = (
    e: React.MouseEvent,
    columnKey: string,
  ) => {
    e.preventDefault();
    setContextMenuKey(columnKey);
  };

  const colCount = 5;

  const headerColumns: { key: string; label: string; flex: string }[] = [
    { key: "name", label: "Name", flex: "flex-[2]" },
    { key: "description", label: "Description", flex: "flex-[2]" },
    { key: "createdBy", label: "Created By", flex: "flex-[1.3]" },
  ];

  return (
    <div className="h-[500px]">
      <p className="lyra-body-sm text-lyra-fg-secondary mb-3">
        Right-click any column header to group rows by that column.
      </p>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px] shrink-0">
              <Checkbox aria-label="Select all" />
            </TableHead>
            {headerColumns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(col.flex, "relative")}
                onContextMenu={(e) => handleContextMenu(e, col.key)}
              >
                {col.label}
                {contextMenuKey === col.key && (
                  <ColumnHeaderContextMenu
                    columnKey={col.key}
                    columnLabel={col.label}
                    currentGroupBy={groupByKey}
                    onGroupBy={(key) => {
                      setGroupByKey(key);
                      setContextMenuKey(null);
                    }}
                    onClose={() => setContextMenuKey(null)}
                  />
                )}
              </TableHead>
            ))}
            <TableHead className="w-[48px] shrink-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupByKey && groups
            ? groups.map((group) => (
                <React.Fragment key={group.label}>
                  <TableGroupRow
                    label={group.label}
                    count={group.rows.length}
                    expanded={!collapsedGroups.has(group.label)}
                    onToggle={() => toggleGroup(group.label)}
                    colSpan={colCount}
                  />
                  {!collapsedGroups.has(group.label) &&
                    group.rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="w-[40px] shrink-0">
                          <Checkbox aria-label="Select row" />
                        </TableCell>
                        <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">
                          {row.name}
                        </TableCell>
                        <TableCell className="flex-[2]">
                          {row.description}
                        </TableCell>
                        <TableCell className="flex-[1.3]">
                          {row.createdBy}
                        </TableCell>
                        <TableCell className="w-[48px] shrink-0">
                          <button
                            aria-label="More options"
                            className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors"
                          >
                            <MoreVertical
                              className="h-4 w-4"
                              strokeWidth={1.5}
                            />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </React.Fragment>
              ))
            : groupData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="w-[40px] shrink-0">
                    <Checkbox aria-label="Select row" />
                  </TableCell>
                  <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">
                    {row.name}
                  </TableCell>
                  <TableCell className="flex-[2]">
                    {row.description}
                  </TableCell>
                  <TableCell className="flex-[1.3]">
                    {row.createdBy}
                  </TableCell>
                  <TableCell className="w-[48px] shrink-0">
                    <button
                      aria-label="More options"
                      className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors"
                    >
                      <MoreVertical
                        className="h-4 w-4"
                        strokeWidth={1.5}
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

    </div>
  );
}

export const Grouped: Story = {
  name: "Grouped Rows",
  render: () => <GroupedDemo />,
};

/* ── Auto-Fit Rows (Dashboard) ── */

const autoFitData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Agent Desktop #${i + 1}`,
  description: ["Back office", "Custom", "Knowledge Worker", "BPO", "Collections"][i % 5],
  createdBy: ["Jim Smith", "Alice Johnson", "Bob Lee"][i % 3],
}));

function AutoFitDemo() {
  const { containerRef, rowsPerPage } = useAutoFitRows(40, 40, 3);
  const [currentPage, setCurrentPage] = useState(1);

  const totalRecords = autoFitData.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / rowsPerPage));

  // Reset to page 1 if rowsPerPage changes and current page is now out of range
  React.useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [rowsPerPage, totalPages, currentPage]);

  const start = (currentPage - 1) * rowsPerPage;
  const visibleRows = autoFitData.slice(start, start + rowsPerPage);
  const displayStart = start + 1;
  const displayEnd = Math.min(start + rowsPerPage, totalRecords);

  return (
    <div>
      <p className="lyra-body-sm text-lyra-fg-secondary mb-3">
        Dashboard variant — rows per page is automatically calculated from
        container height (resize your browser to see it adapt). Pagination
        adjusts dynamically.
      </p>
      <div
        ref={containerRef}
        className="border border-lyra-border-subtle rounded-lyra-lg overflow-hidden"
        style={{ height: 360 }}
      >
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="flex-[2]">Name</TableHead>
              <TableHead className="flex-[2]">Description</TableHead>
              <TableHead className="flex-[1.3]">Created By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">
                  {row.name}
                </TableCell>
                <TableCell className="flex-[2]">{row.description}</TableCell>
                <TableCell className="flex-[1.3]">{row.createdBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <TableFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        rowsPerPage={rowsPerPage}
        totalRecords={totalRecords}
        displayStart={displayStart}
        displayEnd={displayEnd}
      />
    </div>
  );
}

export const AutoFit: Story = {
  name: "Auto-Fit (Dashboard)",
  render: () => <AutoFitDemo />,
};
