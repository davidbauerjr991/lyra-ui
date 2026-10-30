import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GripVertical } from "lucide-react";
import { useListReorder } from "../use-list-reorder";
import { cn } from "../../lib/utils";

/* useListReorder is a hook, not a component: these stories show a plain list
   wired to it. The consumer owns the order (the wrapper's useState); the hook
   reports each move through onReorder. Same conventions as TabList's
   reorderable / keyboardReorder. */

const meta: Meta = {
  title: "Headless Primitives/useListReorder",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj;

const ITEMS: Record<string, string> = {
  summary: "Real-Time Summary",
  journey: "Journey Summary",
  customer: "Customer Info",
  orders: "Orders",
  notes: "Notes",
};

function ReorderableList({ keyboardReorder }: { keyboardReorder: boolean }) {
  const [order, setOrder] = useState(Object.keys(ITEMS));
  const { itemProps } = useListReorder({
    order,
    onReorder: setOrder,
    keyboardReorder,
    getLabel: (key) => ITEMS[key],
  });
  return (
    <div className="flex w-80 flex-col gap-2">
      <ul className="flex flex-col gap-1" aria-label="Cards">
        {order.map((key) => (
          <li
            key={key}
            {...itemProps(key)}
            tabIndex={0}
            aria-label={ITEMS[key]}
            className={cn(
              "flex cursor-grab items-center gap-2 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base px-3 py-2 active:cursor-grabbing",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-active",
              "data-[drag-over]:bg-lyra-bg-active-moderate data-[dragging]:opacity-50"
            )}
          >
            <GripVertical className="h-4 w-4 text-lyra-fg-secondary" aria-hidden="true" />
            <span className="lyra-body-md">{ITEMS[key]}</span>
          </li>
        ))}
      </ul>
      <p className="lyra-body-sm text-lyra-fg-secondary">Order: {order.join(", ")}</p>
    </div>
  );
}

/** Drag a row onto another to move it there. */
export const Default: Story = {
  render: () => <ReorderableList keyboardReorder={false} />,
};

/** Focus a row (Tab) and press Ctrl+Shift+Up / Down to move it; the move is announced. Dragging still works. */
export const KeyboardReorder: Story = {
  render: () => <ReorderableList keyboardReorder />,
};

/* ── Between lists: two lists in one `group`. Each hook gets its list `id`,
   `onMove` (the receiving list's) and `canAccept`; the list element gets
   `listProps()` so a drop on its empty area (or an empty list) lands at its
   end. "Voice controls" can't go in Main: the drop is refused and the reason
   announced. Keyboard: Ctrl+Shift+Up / Down within a list, Ctrl+Shift+Left /
   Right to the previous / next list. ── */

const PARTS: Record<string, string> = {
  assignments: "Assignments",
  voice: "Voice controls",
  conversation: "Conversation",
  summary: "Real-Time Summary",
  journey: "Journey Summary",
};
const LISTS = { leftNav: "Left nav", main: "Main" } as const;
type ListId = keyof typeof LISTS;

function GroupList({
  id,
  order,
  onReorder,
  onMove,
}: {
  id: ListId;
  order: string[];
  onReorder: (order: string[]) => void;
  onMove: (key: string, from: string, to: string, index: number) => void;
}) {
  const { itemProps, listProps } = useListReorder({
    order,
    onReorder,
    keyboardReorder: true,
    getLabel: (key) => PARTS[key],
    group: "layout",
    id,
    label: LISTS[id],
    onMove,
    canAccept: (key) => (id === "main" && key === "voice" ? "Voice controls can't go in Main" : true),
  });
  return (
    <div className="flex w-64 flex-col gap-2">
      <span className="lyra-label" id={`list-${id}`}>{LISTS[id]}</span>
      <ul
        {...listProps()}
        aria-labelledby={`list-${id}`}
        className="flex min-h-24 flex-col gap-1 rounded-lyra-md border border-dashed border-lyra-border-subtle p-2 data-[drag-over]:bg-lyra-bg-active-moderate"
      >
        {order.map((key) => (
          <li
            key={key}
            {...itemProps(key)}
            tabIndex={0}
            aria-label={PARTS[key]}
            className={cn(
              "flex cursor-grab items-center gap-2 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base px-3 py-2 active:cursor-grabbing",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-active",
              "data-[drag-over]:bg-lyra-bg-active-moderate data-[dragging]:opacity-50"
            )}
          >
            <GripVertical className="h-4 w-4 text-lyra-fg-secondary" aria-hidden="true" />
            <span className="lyra-body-md">{PARTS[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BetweenListsDemo() {
  const [lists, setLists] = useState<Record<ListId, string[]>>({
    leftNav: ["assignments", "voice"],
    main: ["conversation", "summary", "journey"],
  });
  const move = (key: string, from: string, to: string, index: number) =>
    setLists((prev) => {
      const next = { ...prev, [from]: prev[from as ListId].filter((k) => k !== key) };
      const target = [...next[to as ListId]];
      target.splice(index, 0, key);
      return { ...next, [to]: target };
    });
  return (
    <div className="flex gap-6">
      {(Object.keys(LISTS) as ListId[]).map((id) => (
        <GroupList key={id} id={id} order={lists[id]} onReorder={(order) => setLists((prev) => ({ ...prev, [id]: order }))} onMove={move} />
      ))}
    </div>
  );
}

/** Drag a row into the other list, or onto its empty area; focus a row and press Ctrl+Shift+Left / Right to move it between lists. */
export const BetweenLists: Story = {
  name: "Between lists",
  render: () => <BetweenListsDemo />,
};

/** Both modes side by side. */
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="flex flex-col gap-2">
        <span className="lyra-label">Pointer drag</span>
        <ReorderableList keyboardReorder={false} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="lyra-label">Pointer drag + keyboard</span>
        <ReorderableList keyboardReorder />
      </div>
    </div>
  ),
};
