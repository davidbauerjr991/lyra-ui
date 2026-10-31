import type * as React from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
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
 *
 * **Between lists** (opt-in `group` + `id`): lists sharing a `group` accept
 * each other's items. A drop on an item of another list, or on that list's
 * own element (`listProps()`, which also catches drops on an empty list),
 * reports `onMove(key, fromList, toList, index)` to the receiving list. A list
 * can refuse an item (`canAccept` returning a reason string): the drop isn't
 * allowed and the reason is announced. With `keyboardReorder`, the cross-axis
 * arrows (Ctrl+Shift+Left / Right for a vertical list) move the focused item
 * to the previous / next list in the group, in document order: to the end of
 * the previous one or the start of the next. Focus follows the item into
 * its new list (by `data-reorder-key`) on the first render of that list that
 * holds it, so an `onMove` that commits a little later still gets focus
 * there. A `disabled` list refuses keyboard moves into it as it refuses
 * drops. A list that doesn't spread `listProps()` is still a keyboard target
 * while it has items (found by its items' `data-reorder-list`); an empty one
 * needs `listProps()`.
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
  /** Lists with the same `group` accept each other's items. Needs `id`. */
  group?: string;
  /** This list's id within its `group`. */
  id?: string;
  /** The list's name in announcements ("moved to {label}"). Defaults to `id`. */
  label?: string;
  /** Called on the receiving list when an item arrives from another list in
   *  the group, with the index it was dropped at in this list. */
  onMove?: (key: string, fromList: string, toList: string, index: number) => void;
  /** Whether this list takes an item from another list: `true`, or the reason
   *  it doesn't (announced). Default: every item. */
  canAccept?: (key: string, fromList: string) => true | string;
}

export interface ListReorderListProps {
  ref: (el: HTMLElement | null) => void;
  onDragEnter: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLElement>) => void;
  /** Present while an item from another list is over this list and would be accepted. */
  "data-drag-over"?: "";
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
  /** Between lists only: which list the item belongs to (a per-list token, used to find the list's items). */
  "data-reorder-list"?: string;
  /** Present while another item is dragged over this one — style the drop
   *  target with `data-[drag-over]:` utilities. */
  "data-drag-over"?: "";
  /** Present on the item being dragged. */
  "data-dragging"?: "";
}

export interface UseListReorderReturn {
  itemProps: (key: string) => ListReorderItemProps;
  /** Spread onto the list's own element (between lists only): drops on it, or on an empty list, land at its end. */
  listProps: () => ListReorderListProps;
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

/** One list of a group, as the group's other lists see it (kept current every render). */
interface GroupList {
  id: string;
  label: string;
  order: string[];
  /** The element from `listProps()`, if the list spreads it. */
  el: HTMLElement | null;
  /** The value of this list's items' `data-reorder-list`. */
  token: string;
  disabled: boolean;
  accepts: (key: string, fromList: string) => true | string;
  receive: (key: string, fromList: string, index: number) => void;
  /** Focuses `key`'s item on the first render of this list that holds it (the consumer may commit the move late). */
  focusWhenArrived: (key: string) => void;
  /** Clears this list's drag state: its item left for another list, so its own `dragend` (on a node no longer in
   *  the document) never reaches it. */
  reset: () => void;
}

/** How long a keyboard move waits for the target list to render the item before giving up on focusing it. */
const FOCUS_WAIT_MS = 5000;

/** A list's element for document order: its own (`listProps()`), else its first item. */
function anchorOf(list: GroupList): Element | null {
  return list.el ?? document.querySelector(`[data-reorder-list="${CSS.escape(list.token)}"]`);
}

/** The item being dragged in a group, and the lists that already announced refusing it. */
interface GroupDrag {
  key: string;
  from: string;
  announced: Set<string>;
}

/** Every mounted list, by group then id; and the item being dragged in each group. Module state: lists in one
 *  group are separate hook instances (often separate components). */
const groups = new Map<string, Map<string, GroupList>>();
const groupDrags = new Map<string, GroupDrag>();

/** The group's lists in document order. */
function listsInOrder(group: string): GroupList[] {
  return [...(groups.get(group)?.values() ?? [])]
    .map((list) => ({ list, anchor: anchorOf(list) }))
    .filter((l): l is { list: GroupList; anchor: Element } => l.anchor != null)
    .sort((a, b) => (a.anchor.compareDocumentPosition(b.anchor) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
    .map((l) => l.list);
}

export function useListReorder({
  order,
  onReorder,
  keyboardReorder = false,
  orientation = "vertical",
  disabled = false,
  getLabel,
  group,
  id,
  label,
  onMove,
  canAccept,
}: UseListReorderOptions): UseListReorderReturn {
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  const [listOver, setListOver] = useState(false);
  const dragKeyRef = useRef<string | null>(null);
  const grouped = group != null && id != null;
  const token = useId();
  const pendingFocus = useRef<{ key: string; until: number } | null>(null);

  // This list as its group sees it, refreshed each render; registered while mounted.
  const self = useRef<GroupList>({
    id: id ?? "", label: label ?? id ?? "", order, el: null, token, disabled,
    accepts: () => true, receive: () => {}, focusWhenArrived: () => {}, reset: () => {},
  });
  self.current.id = id ?? "";
  self.current.label = label ?? id ?? "";
  self.current.order = order;
  self.current.disabled = disabled;
  self.current.accepts = (key, fromList) => canAccept?.(key, fromList) ?? true;
  self.current.receive = (key, fromList, index) => onMove?.(key, fromList, id ?? "", index);
  self.current.focusWhenArrived = (key) => {
    pendingFocus.current = { key, until: Date.now() + FOCUS_WAIT_MS };
  };

  // A keyboard move into this list: focus the item once a render of this list holds it (every render checks).
  useEffect(() => {
    const pending = pendingFocus.current;
    if (!pending) return;
    if (Date.now() > pending.until) {
      pendingFocus.current = null;
      return;
    }
    if (!order.includes(pending.key)) return;
    const el = document.querySelector<HTMLElement>(
      `[data-reorder-list="${CSS.escape(token)}"][data-reorder-key="${CSS.escape(pending.key)}"]`
    );
    if (!el) return;
    pendingFocus.current = null;
    // Only while focus is still the moved item's (its old node, or the body once that node left): never steal it.
    const active = document.activeElement;
    if (active && active !== document.body && active.getAttribute("data-reorder-key") !== pending.key) return;
    el.focus();
  });
  useEffect(() => {
    if (!grouped) return;
    const lists = groups.get(group!) ?? new Map<string, GroupList>();
    groups.set(group!, lists);
    lists.set(id!, self.current);
    return () => {
      if (lists.get(id!) === self.current) lists.delete(id!);
      if (lists.size === 0) groups.delete(group!);
      // Unmounted mid-drag: its drag would otherwise read as foreign to every later drag over the group.
      if (groupDrags.get(group!)?.from === id) groupDrags.delete(group!);
    };
  }, [grouped, group, id]);

  /** The item dragged from another list of this group, if that's what's being dragged. */
  const foreignDrag = useCallback(() => {
    if (!grouped || dragKeyRef.current != null) return null;
    const drag = groupDrags.get(group!);
    return drag && drag.from !== id ? drag : null;
  }, [grouped, group, id]);

  const finish = useCallback(() => {
    dragKeyRef.current = null;
    if (grouped && groupDrags.get(group!)?.from === id) groupDrags.delete(group!);
    setDraggingKey(null);
    setDragOverKey(null);
    setListOver(false);
  }, [grouped, group, id]);
  self.current.reset = finish;

  /** Lands a foreign item here at `index`, or announces why not. */
  const receiveForeign = useCallback(
    (drag: GroupDrag, index: number) => {
      groupDrags.delete(group!);
      groups.get(group!)?.get(drag.from)?.reset();
      setDragOverKey(null);
      setListOver(false);
      const ok = self.current.accepts(drag.key, drag.from);
      if (ok !== true) {
        announceToScreenReader(ok);
        return;
      }
      self.current.receive(drag.key, drag.from, index);
    },
    [group]
  );

  const itemProps = useCallback(
    (key: string): ListReorderItemProps => ({
      draggable: !disabled,
      onDragStart: (e) => {
        if (disabled) return;
        dragKeyRef.current = key;
        if (grouped) groupDrags.set(group!, { key, from: id!, announced: new Set() });
        setDraggingKey(key);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", key);
      },
      onDragOver: (e) => {
        if (disabled) return;
        const foreign = foreignDrag();
        if (dragKeyRef.current == null && !foreign) return;
        // A refused item from another list: no drop here (the list's dragenter announced why).
        if (foreign && self.current.accepts(foreign.key, foreign.from) !== true) return;
        e.preventDefault();
        // Grouped only: the list's own handlers mustn't see an item's drag (ungrouped lists behave as before).
        if (grouped) e.stopPropagation();
        e.dataTransfer.dropEffect = "move";
        if (key !== dragKeyRef.current) setDragOverKey(key);
      },
      onDrop: (e) => {
        if (disabled) return;
        const foreign = foreignDrag();
        if (foreign) {
          e.preventDefault();
          e.stopPropagation();
          receiveForeign(foreign, order.indexOf(key));
          return;
        }
        const source = dragKeyRef.current;
        if (source == null) return;
        e.preventDefault();
        if (grouped) e.stopPropagation();
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
        const prevList = orientation === "vertical" ? "ArrowLeft" : "ArrowUp";
        const nextList = orientation === "vertical" ? "ArrowRight" : "ArrowDown";
        if (grouped && (e.key === prevList || e.key === nextList)) {
          const name = () => getLabel?.(key) || e.currentTarget.getAttribute("aria-label") || e.currentTarget.textContent?.trim() || key;
          e.preventDefault();
          e.stopPropagation();
          const lists = listsInOrder(group!);
          const at = lists.findIndex((l) => l.id === id);
          const target = lists[at + (e.key === nextList ? 1 : -1)];
          if (at === -1 || !target) {
            announceToScreenReader(`${name()}, already in the ${e.key === nextList ? "last" : "first"} list`);
            return;
          }
          // A disabled list takes nothing, by keyboard as by drop.
          const ok = target.disabled ? `${target.label} isn't taking items` : target.accepts(key, id!);
          if (ok !== true) {
            announceToScreenReader(ok);
            return;
          }
          const index = e.key === nextList ? 0 : target.order.length;
          announceToScreenReader(`${name()}, moved to ${target.label}, position ${index + 1} of ${target.order.length + 1}`);
          // The item remounts in its new list: give it focus back there, whenever that list renders it.
          target.focusWhenArrived(key);
          target.receive(key, id!, index);
          return;
        }
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
      ...(grouped ? { "data-reorder-list": token } : {}),
      ...(dragOverKey === key ? { "data-drag-over": "" as const } : {}),
      ...(draggingKey === key ? { "data-dragging": "" as const } : {}),
    }),
    [order, onReorder, keyboardReorder, orientation, disabled, getLabel, dragOverKey, draggingKey, finish, grouped, group, id, foreignDrag, receiveForeign]
  );

  const listProps = useCallback(
    (): ListReorderListProps => ({
      ref: (el) => {
        self.current.el = el;
      },
      onDragEnter: () => {
        // Announced once per drag and list (dragenter fires again for every child entered).
        const foreign = foreignDrag();
        if (disabled || !foreign || foreign.announced.has(id!)) return;
        const ok = self.current.accepts(foreign.key, foreign.from);
        if (ok === true) return;
        foreign.announced.add(id!);
        announceToScreenReader(ok);
      },
      onDragOver: (e) => {
        if (disabled) return;
        const foreign = foreignDrag();
        // Its own item (a drop on the empty area moves it to the end) or an accepted one from another list.
        if (dragKeyRef.current == null && !foreign) return;
        if (foreign && self.current.accepts(foreign.key, foreign.from) !== true) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (foreign) setListOver(true);
      },
      onDrop: (e) => {
        // Drops on an item are handled (and stopped) there; this is the list's own area.
        if (disabled) return;
        const foreign = foreignDrag();
        if (foreign) {
          e.preventDefault();
          receiveForeign(foreign, order.length);
          return;
        }
        const source = dragKeyRef.current;
        if (source == null) return;
        e.preventDefault();
        finish();
        if (order.includes(source)) onReorder(moveKey(order, source, order.length));
      },
      onDragLeave: (e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
        setListOver(false);
      },
      ...(listOver ? { "data-drag-over": "" as const } : {}),
    }),
    [disabled, foreignDrag, receiveForeign, order, onReorder, finish, listOver]
  );

  return { itemProps, listProps, dragOverKey, draggingKey };
}
