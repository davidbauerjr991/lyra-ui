import type * as React from "react";
import { useCallback, useRef, useState } from "react";
import { announceToScreenReader } from "./tabs";

/**
 * Controlled reorder for any list — the one reorder primitive for lists of
 * cards, rows or settings entries (a nav's assignment cards, a settings list).
 *
 * Same conventions as `TabList`'s `reorderable` / `onReorder` /
 * `keyboardReorder` (tabs.tsx), lifted out so a list that isn't a tab row
 * gets them too:
 * - **Controlled.** The consumer owns `order` and applies what `onReorder`
 *   reports; the hook only keeps transient drag state (which key is being
 *   dragged, which one it's over). Unlike `useColumnReorder` (table.tsx),
 *   there's no internal copy of the order to drift from the consumer's.
 * - **Pointer drag** is native HTML5 drag-and-drop on each item (the whole
 *   item is the handle), like `SortableTableHead` and reorderable tabs.
 * - **Keyboard** (opt-in `keyboardReorder`, WCAG 2.1.1 / 2.5.7):
 *   Ctrl+Shift+Up / Down (Left / Right for `orientation="horizontal"`) moves
 *   the item holding focus — the item itself or anything inside it — one
 *   slot through the same `onReorder`, and announces the result
 *   ("Billing, moved to position 2 of 5"). Focus stays where it was: the
 *   item's DOM node moves with its key.
 *
 * Spread `itemProps(key)` onto each item's outermost element.
 */
export interface UseListReorderOptions {
  /** The current order, as the consumer renders it. */
  order: string[];
  /** Called with the new order after a drop or a keyboard move. */
  onReorder: (order: string[]) => void;
  /** Ctrl+Shift+Arrow moves the focused item. Default `false`. */
  keyboardReorder?: boolean;
  /** Which arrows move an item. Default `"vertical"` (Up / Down). */
  orientation?: "vertical" | "horizontal";
  /** Turns dragging and keyboard moves off without unmounting anything. */
  disabled?: boolean;
  /** The name announced after a keyboard move. Defaults to the item's
   *  `aria-label`, then its text, then the key. */
  getLabel?: (key: string) => string;
}

export interface ListReorderItemProps {
  draggable: boolean;
  onDragStart: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  "data-reorder-key": string;
  /** Present while another item is dragged over this one — style the drop
   *  target with `data-[drag-over]:` utilities. */
  "data-drag-over"?: "";
  /** Present on the item being dragged. */
  "data-dragging"?: "";
}

export interface UseListReorderReturn {
  itemProps: (key: string) => ListReorderItemProps;
  /** The key currently dragged over, or `null`. */
  dragOverKey: string | null;
  /** The key being dragged, or `null`. */
  draggingKey: string | null;
}

/** `order` with `key` moved to index `to` (clamped). */
function moveKey(order: string[], key: string, to: number): string[] {
  const next = order.filter((k) => k !== key);
  next.splice(Math.max(0, Math.min(to, next.length)), 0, key);
  return next;
}

export function useListReorder({
  order,
  onReorder,
  keyboardReorder = false,
  orientation = "vertical",
  disabled = false,
  getLabel,
}: UseListReorderOptions): UseListReorderReturn {
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  const dragKeyRef = useRef<string | null>(null);

  const finish = useCallback(() => {
    dragKeyRef.current = null;
    setDraggingKey(null);
    setDragOverKey(null);
  }, []);

  const itemProps = useCallback(
    (key: string): ListReorderItemProps => ({
      draggable: !disabled,
      onDragStart: (e) => {
        if (disabled) return;
        dragKeyRef.current = key;
        setDraggingKey(key);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", key);
      },
      onDragOver: (e) => {
        if (disabled || dragKeyRef.current == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (key !== dragKeyRef.current) setDragOverKey(key);
      },
      onDrop: (e) => {
        const source = dragKeyRef.current;
        if (disabled || source == null) return;
        e.preventDefault();
        finish();
        if (source === key || !order.includes(source) || !order.includes(key)) return;
        onReorder(moveKey(order, source, order.indexOf(key)));
      },
      onDragEnd: finish,
      onDragLeave: (e) => {
        // Moving onto a child of this item isn't leaving it.
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
        setDragOverKey((k) => (k === key ? null : k));
      },
      onKeyDown: (e) => {
        if (!keyboardReorder || disabled || !e.ctrlKey || !e.shiftKey) return;
        const back = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
        const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
        if (e.key !== back && e.key !== forward) return;
        e.preventDefault();
        e.stopPropagation();
        const from = order.indexOf(key);
        if (from === -1) return;
        const to = from + (e.key === forward ? 1 : -1);
        const el = e.currentTarget;
        const name = getLabel?.(key) || el.getAttribute("aria-label") || el.textContent?.trim() || key;
        if (to < 0 || to >= order.length) {
          announceToScreenReader(`${name}, already ${to < 0 ? "first" : "last"}`);
          return;
        }
        announceToScreenReader(`${name}, moved to position ${to + 1} of ${order.length}`);
        onReorder(moveKey(order, key, to));
      },
      "data-reorder-key": key,
      ...(dragOverKey === key ? { "data-drag-over": "" as const } : {}),
      ...(draggingKey === key ? { "data-dragging": "" as const } : {}),
    }),
    [order, onReorder, keyboardReorder, orientation, disabled, getLabel, dragOverKey, draggingKey, finish]
  );

  return { itemProps, dragOverKey, draggingKey };
}
