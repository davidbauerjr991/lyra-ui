import * as React from "react";
import { Tags, Search, X } from "lucide-react";
import { ActionIconButton, type ActionIconButtonProps } from "./actions";
import { Popover, type PopoverPlacement } from "./popover";
import { Checkbox } from "./checkbox";
import { type TagVariant } from "./tag";
import { cn } from "../lib/utils";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/* ── TagPicker ──
   Extracted out of `agent-next-gen-v1`'s conversation transcript (where a
   message's hover toolbar has an "Add tag" action) into its own atom, per
   CONTRIBUTING.md §0/"Composition over reimplementation".

   Row list + checkbox markup below is a deliberate copy of `Select`'s own
   `multiple` mode listbox (select.tsx — accent bar, `Checkbox`, truncated
   label, "no results" state, same class names), not a fresh design — per
   explicit request, this needed to become a real checkbox multi-select
   ("dropdown like this" — screenshot of `Select`'s own multi-select
   result), not the single-click pill-row list this had before. It's a
   copy rather than `TagPicker` literally rendering `<Select multiple>`
   underneath for one hard reason: `Select`'s own open/closed state is
   fully internal (no controlled `open` prop, only a fire-and-forget
   `onOpenChange` callback — see select.tsx's own `const [open, setOpen] =
   useState(false)`), but this trigger's open state has to stay externally
   controlled here — the message hover toolbar keeps at most one message's
   picker open at a time (`tagPickerOpenId` in AgentNextGenPage.tsx) and
   uses that same open flag to force the toolbar itself visible while the
   popover is open. `Popover`'s own `open`/`onOpenChange` (used directly
   below) support exactly that; `Select` doesn't expose a way in. If a
   later need comes up for `Select` to support a controlled `open` prop
   too, this could go back to wrapping it directly instead of duplicating
   its row markup — flagged here so that migration is easy to spot.

   Rows show plain text labels only, no color swatch (matching the
   reference screenshot exactly) — the actual colored `Tag` pill per
   applied label still renders, just in the caller's own "applied tags"
   row below the message, same as before; this popover's own job is only
   picking which labels are checked. */

interface TagPickerOption {
  /** Tag label */
  label: string;
  /** Tag color/variant — see `TagVariant` (tag.tsx). Not shown inside this
   *  picker's own rows (see top doc comment) — only used by the caller's
   *  own applied-tags pill row, and echoed back on `onSelect` so callers
   *  don't need a second lookup by label. */
  variant: TagVariant;
}

interface TagPickerProps {
  /** Every tag option that could be offered — always all shown, each as
   *  its own checkbox row (checked when in `appliedLabels`); unlike the
   *  old pill-grid version, applied ones stay in the list rather than
   *  disappearing from it. */
  options: TagPickerOption[];
  /** Currently-applied tag labels (checked rows). */
  appliedLabels?: string[];
  /** Fires once for each tag newly checked in a single toggle. */
  onSelect: (option: TagPickerOption) => void;
  /** Fires once for each tag newly unchecked in a single toggle. */
  onDeselect: (label: string) => void;
  /** Controlled open state — same convention as every other Popover-based
   *  trigger in this library. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Popover placement (default: "bottom"). */
  placement?: PopoverPlacement;
  /** Trigger button size — see `ActionIconButton`'s own `size` scale
   *  (default: "sm", matching the reference usage's compact message-hover
   *  toolbar). */
  triggerSize?: ActionIconButtonProps["size"];
  /** Trigger tooltip/aria-label (default: "Add tag"). */
  triggerLabel?: string;
  /** Additional className on the trigger button. */
  className?: string;
}

const TagPicker = React.forwardRef<HTMLButtonElement, TagPickerProps>(
  (
    {
      options,
      appliedLabels = [],
      onSelect,
      onDeselect,
      open,
      onOpenChange,
      placement = "bottom",
      triggerSize = "sm",
      triggerLabel = "Add tag",
      className,
    },
    ref
  ) => {
    const toggle = (option: TagPickerOption) => {
      if (appliedLabels.includes(option.label)) onDeselect(option.label);
      else onSelect(option);
    };

    // Local, uncontrolled search text — same "own state, reset on open"
    // shape `Select`'s own searchable dropdown uses (this component's own
    // `open` lives in the consumer, but what's TYPED into the search field
    // doesn't need to). Reset on every open (not just first mount) since
    // the same `TagPicker` instance is reused across opens.
    const [search, setSearch] = React.useState("");
    const searchRef = React.useRef<HTMLInputElement>(null);

    // Combobox wiring (WAI-ARIA combobox + listbox, "aria-activedescendant"
    // variant): DOM focus stays in the search field while ↓/↑ move a
    // virtual "active" option. Options stay real, Tab-reachable buttons too.
    const baseId = React.useId();
    const listboxId = `${baseId}-listbox`;
    const optionId = (i: number) => `${baseId}-option-${i}`;
    const [activeIndex, setActiveIndex] = React.useState(-1);

    // The trigger's own ref (for returning focus on close) merged with the
    // forwarded one.
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const setTriggerRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      },
      [ref]
    );

    React.useEffect(() => {
      if (!open) return;
      setSearch("");
      setActiveIndex(-1);
      // Next-frame focus, same timing `Select`'s own searchable dropdown
      // uses — focusing synchronously on open can fight Radix's own
      // Popover open-focus handling.
      requestAnimationFrame(() => searchRef.current?.focus());
    }, [open]);

    const filtered = search.trim()
      ? options.filter((opt) => opt.label.toLowerCase().includes(search.trim().toLowerCase()))
      : options;

    // Keep the active option valid as the filtered list changes, and scroll
    // it into view as ↓/↑ move through a long list.
    React.useEffect(() => {
      setActiveIndex((i) => (i >= filtered.length ? filtered.length - 1 : i));
    }, [filtered.length]);
    React.useEffect(() => {
      if (activeIndex < 0) return;
      document.getElementById(optionId(activeIndex))?.scrollIntoView?.({ block: "nearest" });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const count = filtered.length;
      if (count === 0) return;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => (i + 1) % count);
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => (i <= 0 ? count - 1 : i - 1));
          break;
        // Home/End jump between options only once arrow navigation has
        // started; before that they keep moving the text caret.
        case "Home":
          if (activeIndex >= 0) { e.preventDefault(); setActiveIndex(0); }
          break;
        case "End":
          if (activeIndex >= 0) { e.preventDefault(); setActiveIndex(count - 1); }
          break;
        case "Enter":
          if (activeIndex >= 0) { e.preventDefault(); toggle(filtered[activeIndex]); }
          break;
        case " ":
          // Space toggles the active option unless the user is typing a
          // multi-word search (then it's just a space).
          if (activeIndex >= 0 && search === "") { e.preventDefault(); toggle(filtered[activeIndex]); }
          break;
      }
    };

    // Same hover-driven scroll-chevron affordance every other overflowing
    // dropdown list in this library uses (`Select`'s own multi-select
    // listbox, `MenuRadix`, `TabList`'s horizontal row) — extracted into
    // `scroll-chevron.tsx` specifically so a fix/feature here doesn't have
    // to be re-applied by hand to each copy. `filtered.length` (not
    // `appliedLabels.length`) in the deps — the VISIBLE ROW COUNT is what
    // can make this list start/stop overflowing; which of those rows
    // happen to be checked doesn't change how tall the list is.
    const listRef = React.useRef<HTMLDivElement>(null);
    const { canScrollUp, canScrollDown, onScroll: onListScroll } = useScrollChevrons(
      listRef,
      [open, filtered.length]
    );
    const scrollListBy = (delta: number) => {
      listRef.current?.scrollBy({ top: delta });
    };

    return (
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        placement={placement}
        sideOffset={4}
        showArrow={false}
        // Full-bleed row list (own `p-1` inset for the hover background,
        // matching `Select`'s own multi-select listbox) — Popover's
        // default 16px body inset would push every row in further, same
        // reasoning `Select`'s own multi-select `Popover` usage documents.
        bodyPadding={false}
        aria-label={triggerLabel}
        className="w-[220px]"
        // Radix's default behavior returns focus to the trigger
        // (`ActionIconButton` below) when the popover closes. That trigger
        // is wrapped in a `Tooltip` (Button's own `isIconVariant && title`
        // handling), and Tooltip opens on focus as well as hover — so
        // without this, closing the popover hands focus back to the icon
        // and pops the "Add tag" tooltip right back open with no real
        // hover intent behind it, left dangling until something else
        // happens to steal focus. Suppressing the auto-focus-return keeps
        // the close action from re-triggering the tooltip; the picker was
        // opened by a click, not keyboard nav, so there's no keyboard-focus
        // chain here worth preserving.
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          // Keyboard users (Esc, or toggling with the keyboard then
          // leaving) get focus back on the "Add tag" trigger — otherwise it
          // falls to <body> (WCAG 2.4.3). Pointer users keep the behavior
          // described above: no focus return, so the tooltip doesn't pop
          // back open.
          if (document.documentElement.dataset.lyraInputModality === "keyboard") {
            triggerRef.current?.focus();
          }
        }}
        header={
          // Fixed above the scrolling list (`Popover`'s own `header`/
          // `content` split — see popover.tsx), same layered structure and
          // markup `Select`'s own searchable dropdown uses (select.tsx).
          <div className="shrink-0 px-2 pt-2 pb-1">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lyra-fg-secondary pointer-events-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <input
                ref={searchRef}
                type="text"
                role="combobox"
                aria-label="Search tags"
                aria-expanded={open}
                aria-controls={listboxId}
                aria-autocomplete="list"
                aria-activedescendant={activeIndex >= 0 && activeIndex < filtered.length ? optionId(activeIndex) : undefined}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setActiveIndex(-1); }}
                onKeyDown={onSearchKeyDown}
                placeholder="Search tags"
                className={cn(
                  "h-9 w-full rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field pl-9 pr-9 lyra-body-md text-lyra-fg-default transition-colors",
                  "placeholder:text-lyra-fg-disabled",
                  "hover:border-lyra-state-border-hover-neutral",
                  "focus:outline-none focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20"
                )}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="lyra-hit-24 absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors"
                  tabIndex={-1}
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              )}
            </div>
          </div>
        }
        content={
          // Outer wrapper owns the height cap and stacks the (conditionally
          // rendered) chevrons around the actual scrollable div — mirrors
          // `Select`'s own multi-select structure exactly, for the same
          // reason: a chevron nested INSIDE the scrollable region would
          // only ever become visible once already scrolled to that end,
          // which defeats the point of it as a "there's more" affordance.
          //
          // `flex-1 min-h-0` alongside the existing `max-h-[280px]` fixes
          // the same double-scrollbar bug `Select`'s own multi-select
          // listbox had — see that component's fuller comment (select.tsx,
          // just above its own `listRef`/`useScrollChevrons`) for the full
          // explanation, including why an earlier `h-full` attempt here
          // wasn't reliable. Short version: this `header` (the search field
          // above) makes `Popover`'s own body div a real flex container
          // (popover.tsx), so this wrapper correctly shrinks to whatever
          // room is actually left in it instead of ever overflowing it —
          // so that outer body's own `overflow-auto` never has anything to
          // show.
          <div className="flex max-h-[280px] flex-1 min-h-0 flex-col">
            {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollListBy(-6)} />}
            <div
              ref={listRef}
              onScroll={onListScroll}
              id={listboxId}
              role="listbox"
              aria-label={triggerLabel}
              aria-multiselectable
              className="flex flex-1 min-h-0 flex-col overflow-y-auto lyra-scrollbar-hide p-1"
            >
              {filtered.length === 0 && (
                <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                  {options.length === 0 ? "No tags available" : "No tags found"}
                </div>
              )}
              {filtered.map((option, index) => {
                const isSelected = appliedLabels.includes(option.label);
                const isActive = index === activeIndex;
                return (
                  <button
                    key={option.label}
                    id={optionId(index)}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => toggle(option)}
                    className={cn(
                      "group/item relative flex w-full items-center gap-2.5 rounded-lyra-sm px-3 py-2.5 lyra-body-md text-left transition-colors",
                      "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                      "focus:outline-none focus-visible:bg-lyra-state-hover",
                      // Keyboard-active option (aria-activedescendant) — same
                      // highlight as hover/focus.
                      isActive && "bg-lyra-state-hover"
                    )}
                  >
                    {/* Left accent bar — visible on hover/press, matching
                        `Select`'s own multi-select row treatment (itself
                        matching `Menu`'s row template). Plain buttons here
                        (not Radix `Select.Item`/`Menu`), so reproduced by
                        hand, same as `Select`'s own copy. */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-lyra-fg-default opacity-0 transition-opacity group-hover/item:opacity-100 group-active/item:opacity-100"
                    />
                    <Checkbox decorative checked={isSelected} className="pointer-events-none" />
                    <span className="min-w-0 flex-1 truncate text-lyra-fg-default">{option.label}</span>
                  </button>
                );
              })}
            </div>
            {canScrollDown && <ScrollChevronButton direction="down" onStep={() => scrollListBy(6)} />}
          </div>
        }
      >
        <ActionIconButton ref={setTriggerRef} size={triggerSize} title={triggerLabel} className={className}>
          <Tags className="h-3.5 w-3.5" strokeWidth={1.5} />
        </ActionIconButton>
      </Popover>
    );
  }
);
TagPicker.displayName = "TagPicker";

export { TagPicker };
export type { TagPickerOption, TagPickerProps };
