import { RefreshCw, Pencil, Copy, Trash2 } from "lucide-react";
/* Shared example data for Table.stories.tsx (Default playground) and
   Table.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */

/* Rows for the "With Selected Rows" variant. */
export const sampleData = [
  { id: 1, name: "Agent Desktop #1", published: true, description: "Back office", createdBy: "Jim Smith" },
  { id: 2, name: "Agent Desktop #2", published: true, description: "Custom", createdBy: "Jim Smith" },
  { id: 3, name: "Agent Desktop #3", published: false, description: "Knowledge Worker", createdBy: "Jim Smith" },
  { id: 4, name: "Agent Desktop #4", published: true, description: "BPO", createdBy: "Jim Smith" },
  { id: 5, name: "Agent Desktop #5", published: true, description: "Collections", createdBy: "Jim Smith" },
];

/* Rows with distinct creators, so sorting by "Created By" visibly reorders
   them — used by the Default playground when its headers are sortable. */
export const sortableData = [
  { id: 1, name: "Agent Desktop #1", published: true, description: "Back office", createdBy: "Alice Johnson" },
  { id: 2, name: "Agent Desktop #2", published: true, description: "Custom", createdBy: "Bob Smith" },
  { id: 3, name: "Agent Desktop #3", published: false, description: "Knowledge Worker", createdBy: "Charlie Lee" },
  { id: 4, name: "Agent Desktop #4", published: true, description: "BPO", createdBy: "Diana Park" },
  { id: 5, name: "Agent Desktop #5", published: true, description: "Collections", createdBy: "Eve Martinez" },
];

/** `count` rows for the Default playground's "Number of rows" control. The
    first five are `sortableData`; later rows reuse its values in rotation. */
export const makeSortableData = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const base = sortableData[i % sortableData.length];
    return i < sortableData.length ? base : { ...base, id: i + 1, name: `Agent Desktop #${i + 1}` };
  });

/* ── Toolbar fixtures — shared by the Default playground's toolbar and the
   Variants "Toolbar" page. ── */

export const toolbarFilterDefs = [
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

export const toolbarActionDefs = [
  { key: "refresh", label: "Refresh", icon: <RefreshCw className="h-4 w-4" strokeWidth={1.5} /> },
  { key: "edit",    label: "Edit",    icon: <Pencil   className="h-4 w-4" strokeWidth={1.5} /> },
  { key: "copy",    label: "Copy",    icon: <Copy     className="h-4 w-4" strokeWidth={1.5} /> },
  { key: "delete",  label: "Delete",  icon: <Trash2   className="h-4 w-4" strokeWidth={1.5} /> },
];

/* Filters the Default playground's "Number of filters" control can add, in
   order. The first three use the rows' own fields; the rest are extra
   attributes that are not shown as columns, handed out to the rows in rotation
   (see `filterValueFor`) so every chip still filters something real. */
const EXTRA_FILTER_ATTRS = [
  { key: "team", label: "Team", values: ["Support", "Sales", "Billing"] },
  { key: "region", label: "Region", values: ["North", "South", "East"] },
  { key: "status", label: "Status", values: ["Active", "Paused"] },
  { key: "priority", label: "Priority", values: ["High", "Medium", "Low"] },
  { key: "channel", label: "Channel", values: ["Voice", "Chat", "Email"] },
  { key: "language", label: "Language", values: ["English", "Spanish", "French"] },
  { key: "tier", label: "Tier", values: ["Basic", "Premium"] },
];

type SortableRow = (typeof sortableData)[number];

/** The value a row has for a given filter key. */
export function filterValueFor(row: SortableRow, key: string): string {
  if (key === "name") return row.name;
  if (key === "description") return row.description;
  if (key === "createdBy") return row.createdBy;
  if (key === "published") return row.published ? "Published" : "Unpublished";
  const attr = EXTRA_FILTER_ATTRS.find((a) => a.key === key);
  return attr ? attr.values[(row.id - 1) % attr.values.length] : "";
}

export const defaultFilterDefs = [
  {
    key: "description",
    label: "Description",
    options: Array.from(new Set(sortableData.map((r) => r.description))).map((v) => ({ value: v, label: v })),
  },
  {
    key: "createdBy",
    label: "Created By",
    options: Array.from(new Set(sortableData.map((r) => r.createdBy))).map((v) => ({ value: v, label: v })),
  },
  {
    key: "published",
    label: "Published",
    options: [
      { value: "Published", label: "Published" },
      { value: "Unpublished", label: "Unpublished" },
    ],
  },
  ...EXTRA_FILTER_ATTRS.map((a) => ({
    key: a.key,
    label: a.label,
    options: a.values.map((v) => ({ value: v, label: v })),
  })),
];

/** An empty selection for every filter, so each chip starts unset. */
export const emptyFilterValues = (): Record<string, string[]> =>
  Object.fromEntries(defaultFilterDefs.map((d) => [d.key, [] as string[]]));

/* Columns the Default playground's column toggle can show or hide. */
export const defaultToggleColumns = [
  { key: "name", label: "Name" },
  { key: "published", label: "Published" },
  { key: "description", label: "Description" },
  { key: "createdBy", label: "Created By" },
  { key: "region", label: "Region" },
  { key: "status", label: "Status" },
];
