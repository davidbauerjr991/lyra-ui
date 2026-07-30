import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import type { MenuEntry, MenuItemDef } from "./menu";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/**
 * MenuRadix — experimental rebuild of `Menu` on `@radix-ui/react-dropdown-menu`
 * instead of hand-rolled open/close, keyboard-navigation, and submenu
 * positioning logic. Not wired into `index.ts` or either consuming app —
 * exists purely as a side-by-side Storybook comparison (see "Radix
 * Primitives/Menu") so the visual/behavioral differences can be reviewed
 * before deciding whether to adopt, adjust, or drop it. The original
 * `menu.tsx` is untouched.
 *
 * Architectural difference from the original, unavoidable given Radix's
 * design: the hand-rolled `Menu` is a bare list — it has no trigger or
 * open/close state of its own, so `Select` and `Popover` can embed it as
 * "just the list part" (`bare` prop). Radix's `DropdownMenu` doesn't
 * decompose that way — `DropdownMenu.Root` requires exactly one
 * `DropdownMenu.Trigger`, and owns open/close state, focus return, and
 * portal rendering itself. So `MenuRadix` is a self-contained
 * trigger-plus-menu unit (`trigger` + `items` props), not a drop-in
 * replacement for `<Menu bare>` inside `Select`/`Popover`.
 *
 * What Radix gives for free here: open/close state, full keyboard
 * navigation (arrows, Home/End, typeahead), focus management/return-to-
 * trigger, and — the biggest win over the original — genuinely built-in
 * nested submenus (`DropdownMenu.Sub`/`SubTrigger`/`SubContent`) with
 * automatic collision-aware flip positioning. The original's submenu
 * implementation hand-tracks anchor rects, flip-to-left/bottom, and a
 * hover-close timeout (~60 lines in menu.tsx's MenuItemRow); Radix replaces
 * all of that.
 *
 * What Radix does NOT give for free here, unlike `Select`: there is no
 * `DropdownMenu.ScrollUpButton`/`ScrollDownButton` — that's specific to
 * Select-family primitives (Select has it; DropdownMenu's own API
 * reference has no such parts). The chevron-instead-of-scrollbar behavior
 * below is hand-rolled scroll-position tracking, the same category of
 * manual work the original `Menu` already does elsewhere (e.g. its
 * arrow-key navigation) — Radix just doesn't cover this specific piece for
 * this specific primitive.
 */

export interface MenuRadixProps {
  /** Trigger element — must accept a ref and forward props (Radix clones
   *  onto it via `asChild`), same convention as `Popover`'s `children`. */
  trigger: React.ReactElement;
  /** Array of items and separators — same shape as `Menu`'s `items`. */
  items: MenuEntry[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  /** Additional class on the menu surface */
  className?: string;
}

/* ── Shared surface classes (top-level Content and every SubContent) ──
   `overflow-hidden` here (matching the original Menu's own wrapper) keeps
   the rounded corners clean; the actual scrolling — where relevant — always
   happens in an inner div, never on this outer surface. */
/* Selecting an item is a real DOM click inside this portaled content —
 * and per CONTRIBUTING.md §16 ("Portals still bubble through the React
 * tree"), React re-dispatches it up the *React* fiber tree the dropdown
 * was declared in, not the DOM tree it's actually portaled into. Unlike
 * Popover's own `stopSyntheticBubble` (which deliberately leaves `onClick`
 * alone — bubbling it there is harmless), a click bubbling out of *this*
 * dropdown is a real, shipped bug: `KebabMenuButton`'s "Unassign &
 * Dismiss" item lives inside `ChannelRow`'s own clickable row (`onClick`
 * selects that channel) which itself lives inside `InteractionNavItem`'s
 * clickable card (`onClick` selects/re-activates that whole interaction).
 * Without stopping it here, choosing "Unassign & Dismiss" removes the
 * interaction and then the *same* click keeps bubbling and re-fires both
 * ancestor `onClick`s, re-selecting the very card that was just dismissed
 * — which no longer exists in state, so the screen falls back to the
 * dashboard even when other assignments are still open. Stopped at the
 * Content/SubContent root (not the individual `Item`) so every consumer
 * gets this for free, the same "fix belongs on the portal-rendering
 * component" rule §16 already established for Popover. */
const stopClickBubble = (e: React.SyntheticEvent) => e.stopPropagation();

const surfaceClassName = cn(
  // `max-h-[300px]` used to be a fixed cap regardless of how much room the
  // viewport actually had — a short menu on a tall screen still got the
  // hand-rolled scroll-chevron affordance (see "View All Apps", 9 short
  // rows, cut off + scrollable on a full-height desktop viewport). Radix's
  // Popper positioning already exposes exactly how much space is actually
  // available in the direction the content opened
  // (`--radix-dropdown-menu-content-available-height`, kept live as the
  // trigger scrolls/the window resizes) — using that as the cap instead
  // means the surface grows to fit its content up to that real limit, and
  // only the small/overflow case still gets the inner scroll + chevrons.
  "z-[9999] min-w-[200px] max-h-[var(--radix-dropdown-menu-content-available-height)] rounded-lyra-lg bg-lyra-bg-surface-overlay",
  "border border-lyra-border-subtle shadow-lg p-1 flex flex-col outline-none overflow-hidden",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
);

/* ── Hand-rolled scroll-chevron affordance ──
   Radix DropdownMenu has no ScrollUpButton/ScrollDownButton (unlike
   Select), so overflow is tracked manually — see scroll-chevron.tsx, shared
   with Select's multi-select listbox (same gap: no Radix primitive covers
   a plain scrollable list of custom rows). */

/* ── Entry rendering (recursive — used for top-level Content and every
   nested SubContent) ── */
function renderEntries(entries: MenuEntry[]) {
  return entries.map((entry, i) => {
    if (entry === "separator") {
      return (
        <DropdownMenuPrimitive.Separator
          key={`sep-${i}`}
          className="border-b border-lyra-border-subtle my-1.5"
        />
      );
    }
    if ("sectionLabel" in entry) {
      return (
        <DropdownMenuPrimitive.Label
          key={`label-${i}`}
          className="px-3 pt-2.5 pb-1 lyra-body-sm text-lyra-fg-secondary truncate"
        >
          {entry.sectionLabel}
        </DropdownMenuPrimitive.Label>
      );
    }
    return <MenuRadixItem key={entry.id} item={entry} />;
  });
}

/* ── Single item row — plain item, or a Sub if it has a submenu ── */
function MenuRadixItem({ item }: { item: MenuItemDef }) {
  const isDestructive = item.destructive;
  const hasSubmenu = !!item.submenuContent || (item.submenu && item.submenu.length > 0);

  const rowClassName = cn(
    // Plain "group" (not "group/item") — the accent bar below reacts via
    // unnamed `group-data-[highlighted]:` selectors, so the parent must use
    // the matching unnamed group. A named group here (as the original
    // hand-rolled Menu uses, "group/item") silently breaks that connection:
    // Tailwind only wires up a `group-*` variant to an ancestor whose group
    // suffix matches exactly, so a named parent + unnamed child selector
    // compiles to CSS that never matches anything (this was the bug behind
    // the missing hover/accent-bar styling).
    "group relative flex w-full items-center gap-2.5 px-3 py-2.5 lyra-body-md transition-colors text-left rounded-lyra-sm cursor-pointer select-none outline-none",
    isDestructive
      ? "text-lyra-status-critical-strong data-[highlighted]:bg-lyra-status-critical-subtle"
      : "text-lyra-fg-default data-[highlighted]:bg-lyra-state-hover",
    item.active && !isDestructive &&
      "bg-lyra-bg-active-subtle text-lyra-fg-active-strong data-[highlighted]:bg-lyra-state-hover-active-subtle",
    "data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed data-[disabled]:data-[highlighted]:bg-transparent",
    // Drag-to-reorder affordance/feedback — `dragOver` is the same "another
    // row is being dragged over this one" highlight `SortableTableHead` uses
    // (`bg-lyra-bg-active-moderate`), driven entirely by whatever hook the
    // caller wires up (e.g. `useColumnReorder`), not local state here.
    item.draggable && "cursor-grab active:cursor-grabbing",
    item.dragOver && "bg-lyra-bg-active-moderate"
  );

  // `reactToSubmenuOpen` is only passed for SubTrigger rows. Radix sets
  // data-state=open/closed on the SubTrigger itself as its submenu opens/
  // closes, so we key off that live attribute via `group-data-[state=open]`
  // rather than baking a static boolean into the class string. This mirrors
  // the original Menu's semantics: an open submenu gets the same *neutral*
  // dark accent bar as a sustained hover, not the blue `active` treatment —
  // `item.active` (a separate, independent flag) is the only thing that
  // turns the bar blue.
  const accentBar = (reactToSubmenuOpen?: boolean) => (
    <span
      aria-hidden="true"
      className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full transition-opacity",
        isDestructive
          ? "bg-lyra-status-critical-strong opacity-0 group-data-[highlighted]:opacity-100"
          : item.active
            ? "opacity-100 bg-lyra-fg-active-strong"
            : cn(
                "opacity-0 bg-lyra-fg-default group-data-[highlighted]:opacity-100",
                reactToSubmenuOpen && "group-data-[state=open]:opacity-100"
              ),
        "group-data-[disabled]:opacity-0"
      )}
    />
  );

  const leading = item.icon && (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-5 w-5 items-center justify-center flex-shrink-0",
        item.description && "self-start mt-0.5",
        isDestructive ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
      )}
    >
      {item.icon}
    </span>
  );

  const label = (
    <span className="flex-1 min-w-0">
      <span className="block truncate">{item.label}</span>
      {item.description && (
        <span className="block lyra-body-sm text-lyra-fg-secondary truncate">{item.description}</span>
      )}
    </span>
  );

  const trailing = item.rightElement
    ? <span className="flex-shrink-0 ml-2">{item.rightElement}</span>
    : item.shortcut && (
      <span className="lyra-body-sm text-lyra-fg-secondary flex-shrink-0 ml-4">{item.shortcut}</span>
    );

  if (hasSubmenu) {
    return (
      <DropdownMenuPrimitive.Sub>
        <DropdownMenuPrimitive.SubTrigger
          disabled={item.disabled}
          className={cn(
            rowClassName,
            // Neutral hover-style bg while the submenu is open — only when
            // the row isn't already the blue `active` state, matching the
            // original's `!item.active && hasSubmenu && submenuOpen` guard.
            !item.active && !isDestructive && "data-[state=open]:bg-lyra-state-hover"
          )}
        >
          {accentBar(true)}
          {leading}
          {label}
          <ChevronRight className="h-4 w-4 text-lyra-fg-secondary flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
        </DropdownMenuPrimitive.SubTrigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.SubContent
            sideOffset={4}
            alignOffset={-4}
            className={surfaceClassName}
            onClick={stopClickBubble}
          >
            {item.submenuContent ?? renderEntries(item.submenu!)}
          </DropdownMenuPrimitive.SubContent>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Sub>
    );
  }

  return (
    <DropdownMenuPrimitive.Item
      disabled={item.disabled}
      draggable={item.draggable}
      onDragStart={item.onDragStart}
      onDragOver={item.onDragOver}
      onDrop={item.onDrop}
      onDragEnd={item.onDragEnd}
      onDragLeave={item.onDragLeave}
      onSelect={(e) => {
        // Radix closes the menu on select by default, unlike bare Menu
        // (which has no concept of closing itself at all). closeOnSelect
        // === false opts a specific item out — e.g. a theme toggle whose
        // new state should stay visible immediately.
        if (item.closeOnSelect === false) e.preventDefault();
        item.onClick?.();
      }}
      className={rowClassName}
    >
      {accentBar()}
      {leading}
      {label}
      {trailing}
    </DropdownMenuPrimitive.Item>
  );
}

const MenuRadix = React.forwardRef<HTMLButtonElement, MenuRadixProps>(
  (
    {
      trigger,
      items,
      open,
      onOpenChange,
      side = "bottom",
      align = "start",
      sideOffset = 4,
      className,
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    const handleOpenChange = (next: boolean) => {
      setIsOpen(next);
      onOpenChange?.(next);
    };

    const { canScrollUp, canScrollDown, onScroll, recompute } = useScrollChevrons(
      contentRef,
      [isOpen, items]
    );

    // Instant (not smooth) — this fires every animation frame while
    // hovered, so a smooth/eased scroll would fight its own next step and
    // stutter. The per-frame step is small enough (6px) that the instant
    // jump still reads as continuous motion, matching Select's own feel.
    const scrollStep = (delta: number) => {
      contentRef.current?.scrollBy({ top: delta });
    };

    return (
      <DropdownMenuPrimitive.Root open={open ?? isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuPrimitive.Trigger ref={ref} asChild>
          {trigger}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            className={cn(surfaceClassName, className)}
            onAnimationEnd={recompute}
            onClick={stopClickBubble}
          >
            {/* Chevrons are siblings of the scrollable div below, not
                children of it — they must stay pinned at the top/bottom of
                the visible surface regardless of scroll position. Nesting
                them inside the scrollable div (as an earlier version of
                this file did) put the down-chevron after all the items,
                so it only became visible once already scrolled to the
                very bottom — defeating the point of the affordance. */}
            {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollStep(-6)} />}
            <div
              ref={contentRef}
              onScroll={onScroll}
              className="flex-1 min-h-0 overflow-y-auto lyra-scrollbar-hide flex flex-col"
            >
              {renderEntries(items)}
            </div>
            {canScrollDown && <ScrollChevronButton direction="down" onStep={() => scrollStep(6)} />}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    );
  }
);
MenuRadix.displayName = "MenuRadix";

export { MenuRadix };
