import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  useColumnReorder,
} from "../table";
import type { SortDirection } from "../table";
import { Checkbox } from "../checkbox";
import { cn } from "../../lib/utils";
import { CircleCheck, Minus, MoreVertical } from "lucide-react";

const meta: Meta<typeof Table> = {
  title: "UI/PageContent/Table",
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
            <TableHead className="w-[40px] shrink-0"><Checkbox /></TableHead>
            <TableHead className="flex-[2]">Name</TableHead>
            <TableHead className="flex-1">Published</TableHead>
            <TableHead className="flex-[2]">Description</TableHead>
            <TableHead className="flex-[1.3]">Created By</TableHead>
            <TableHead className="w-[48px] shrink-0"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox /></TableCell>
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
                <button className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
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
            <TableHead className="w-[40px] shrink-0"><Checkbox checked="indeterminate" /></TableHead>
            <TableHead className="flex-[2]">Name</TableHead>
            <TableHead className="flex-1">Published</TableHead>
            <TableHead className="flex-[2]">Description</TableHead>
            <TableHead className="flex-[1.3]">Created By</TableHead>
            <TableHead className="w-[48px] shrink-0"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id} data-state={row.id <= 2 ? "selected" : undefined}>
              <TableCell className="w-[40px] shrink-0"><Checkbox checked={row.id <= 2} /></TableCell>
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
                <button className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
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
            <TableHead className="w-[40px] shrink-0"><Checkbox /></TableHead>
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
            <TableHead className="w-[48px] shrink-0" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox /></TableCell>
              <TableCell className="flex-[2] text-lyra-fg-link cursor-pointer hover:underline">{row.name}</TableCell>
              <TableCell className="flex-[2]">{row.description}</TableCell>
              <TableCell className="flex-[1.3]">{row.createdBy}</TableCell>
              <TableCell className="w-[48px] shrink-0">
                <button className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
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
            <TableHead className="w-[40px] shrink-0"><Checkbox /></TableHead>
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
            <TableHead className="w-[48px] shrink-0" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="w-[40px] shrink-0"><Checkbox /></TableCell>
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
                <button className="flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors">
                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
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
