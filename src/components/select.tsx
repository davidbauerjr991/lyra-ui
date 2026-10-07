import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { ErrorIconSolid } from "./icons/error-icon-solid";
import { Label } from "./label";
import { Popover } from "./popover";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { Spinner } from "./spinner";
import { cn } from "../lib/utils";
import { useScrollChevrons, ScrollChevronButton } from "./scroll-chevron";

/**
 * Select — built on Radix primitives instead of hand-rolled open/close,
 * positioning, and keyboard-navigation logic (formerly a manual
 * `document`-listener + `getBoundingClientRect` + `ReactDOM.createPortal`
 * implementation — see git history for the pre-Radix version). Exported name, props, and
 * `SelectOption` shape are unchanged — this was a pure internals swap, so
 * no consumer (`FilterChip`, `table.tsx`'s `ColumnToggle`, `CreateNew`, or
 * any external app) needed to change.
 *
 * Two different Radix primitives back this component depending on mode,
 * because Radix's Select primitive is single-value only (it models the
 * native <select> element and has no multi-select concept at all):
 *
 *   - Single-select (`multiple` unset/false): `@radix-ui/react-select`
 *     directly — Root/Trigger/Value/Content/Viewport/Item.
 *   - Multi-select (`multiple` true): there's no Radix Select equivalent,
 *     so this composes `Popover` (already Radix-based here, wraps
 *     `@radix-ui/react-dialog`'s sibling `@radix-ui/react-popover`) with
 *     this repo's own `Checkbox` (already wraps `@radix-ui/react-checkbox`)
 *     for each row — the same approach `FilterChip` already uses, just
 *     with Select's own search / max-selection / select-all UI layered on
 *     top. The row buttons themselves are plain elements (no Radix
 *     primitive covers "a list of checkable rows in a popover" as a single
 *     thing), styled to match `Menu`'s row treatment for visual
 *     consistency with the rest of the library.
 *
 * What Radix gives for free in the single-select path that the original
 * computed by hand: automatic collision-aware flip/positioning, portal
 * rendering out of the box, and `data-highlighted` / `data-state`
 * attributes that unify mouse and keyboard focus styling instead of
 * separate `:hover` / `:focus-visible` rules. The multi-select path gets
 * the same collision-aware positioning and portal rendering from `Popover`,
 * but the row list itself is still hand-managed state (Radix doesn't have
 * anything to delegate that to).
 */

/* ── Types ── */

interface SelectOption {
  /** Unique value */
  value: string;
  /** Display label */
  label: string;
  /** Disable this option */
  disabled?: boolean;
  /** Optional leading icon shown to the left of `label` in the dropdown
   *  list (both single- and multi-select). Rendered at a fixed `h-4 w-4`
   *  regardless of the size it's authored at, so a consumer's icon doesn't
   *  need to hand-tune its own className to line up with this component's
   *  own row height. Omit for the plain, icon-less row every existing
   *  consumer already renders — this is purely additive. Not shown on the
   *  closed trigger's own selected-value text (Radix's `Select.Value` in
   *  single-select mode only accepts a placeholder node, not the live
   *  selection's icon) — only inside the open dropdown's rows. */
  icon?: React.ReactNode;
  /** Group heading this option sits under. Consecutive options with the same
   *  `group` are rendered together under one heading (single- and
   *  multi-select); options without one render ungrouped, as before. Keep
   *  options of a group next to each other in `options`. */
  group?: string;
}

/* ── Select ── */

interface SelectProps {
  /** Label text displayed above the select */
  label?: string;
  /** Help text shown in a tooltip on the label's info icon */
  labelHelpText?: string;
  /** Marks the field as required — shows asterisk on label */
  required?: boolean;
  /** Marks the field as read-only — affects label and trigger styling */
  readonly?: boolean;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Options to display */
  options: SelectOption[];
  /** Error message — triggers error styling */
  error?: string;
  /** Disable the select */
  disabled?: boolean;
  /** Allow multiple selections — switches from the Radix Select primitive
   *  to a Popover + Checkbox composition (see top comment). */
  multiple?: boolean;
  /** Show a search input in the dropdown */
  searchable?: boolean;
  /** Show a "select all" checkbox (only for multiple mode) */
  showSelectAll?: boolean;
  /**
   * Maximum number of items that can be selected (multiple mode only).
   * Shows a header with selection count. When limit is reached, remaining
   * options are disabled and the header changes to "Limit Reached (N)".
   */
  maxSelection?: number;
  /**
   * Custom label for the selection header (default: "Select up to N items").
   * Only used when maxSelection is set.
   */
  selectionLabel?: string;

  /** Custom trigger element — replaces the default text-field-with-chevron
   *  trigger. In multi-select mode this composes onto `Popover`'s own
   *  `asChild` trigger (a `<button>` element is used as-is; anything else
   *  is wrapped in the default icon-button shell). In single-select mode,
   *  Radix's own `Select.Trigger` can't be swapped out via `asChild` (it
   *  doesn't support it — see the inline comment above its usage below),
   *  so a `<button>` trigger's className/children are read off and
   *  rendered *through* Radix's real Trigger instead; Radix still owns
   *  click-to-open/keyboard/aria wiring either way. */
  trigger?: React.ReactNode;

  /* ── Controlled single-select ── */
  /** Controlled value (single select) */
  value?: string;
  /** Called when the value changes (single select) */
  onValueChange?: (value: string) => void;

  /* ── Controlled multi-select ── */
  /** Controlled values (multi select) */
  values?: string[];
  /** Called when the values change (multi select) */
  onValuesChange?: (values: string[]) => void;

  /** Called when the dropdown opens or closes */
  onOpenChange?: (open: boolean) => void;

  /** Dropdown alignment relative to the trigger. Defaults to "left".
   *  Maps to Radix's own `align` prop ("left" → "start", "right" → "end")
   *  on both the single-select `Select.Content` and the multi-select
   *  `Popover`. Unlike the pre-Radix implementation's hand-computed
   *  `dropdownAlign` (a hard pin with no collision awareness), this is a
   *  *preference* — Radix still flips/shifts automatically if the
   *  preferred side would overflow the viewport. */
  dropdownAlign?: "left" | "right";

  /**
   * Radix's Select/Popover primitives always portal their content, so
   * this has no effect — a repo-wide grep found no caller anywhere
   * passing `portalDropdown={false}` (every real usage is the bare-true
   * shorthand), so the old inline/non-portal rendering path was
   * intentionally not carried over. Accepted (and ignored) purely so
   * existing call sites don't need to be touched.
   */
  portalDropdown?: boolean;

  /**
   * Extra classes merged onto the dropdown's portaled content (the Radix
   * `Select.Content` in single-select mode, `Popover`'s content in
   * multi-select mode) — an escape hatch for the z-index, not styling.
   * The dropdown defaults to `z-[9999]` (single) / `z-50` (multi, via
   * `Popover`'s own default), the base "portal wrapper" tier in
   * CONTRIBUTING.md §4. That's wrong when this `Select` itself renders
   * inside a *higher* tier — e.g. `AddChannelButton`'s own `z-[10003]`
   * "popover nested inside another popover" panel (create-new.tsx): the
   * dropdown would portal to `document.body` same as always, but at a
   * *lower* z-index than its own ancestor panel, so it paints underneath
   * it — invisible (or only visible where it happens to poke out past the
   * ancestor panel's edges) rather than not rendering at all. Same
   * escape-hatch shape as `PhoneInput`'s `dropdownClassName` — pass the
   * next-higher z-index tier from that table (e.g. `"z-[10005]"`), do not
   * invent an arbitrary number.
   */
  dropdownClassName?: string;

  /** Additional class on the root */
  className?: string;

  id?: string;

  /**
   * Trigger height. "md" (36px, default) matches every other field in the
   * library; "sm" (32px) is for dense contexts — a table toolbar's filter
   * row is the motivating case. Only affects the closed trigger itself —
   * the open dropdown's search field, rows, and "select all"/footer
   * controls stay full-size regardless, same as any other popover content
   * doesn't shrink to match a compact trigger.
   */
  size?: "sm" | "md";

  /**
   * Accessible name for a Select rendered without a visible `label` (e.g.
   * in a toolbar or panel header). The trigger is a `role="combobox"`,
   * which — unlike a plain button — does NOT take its name from its text
   * content, so an unlabeled Select is otherwise announced with no name
   * at all. Falls back to `placeholder` when omitted. Ignored while
   * `label` is set (that wires `aria-labelledby` instead).
   */
  "aria-label"?: string;

  /* ── Loading / empty / no-results / load-error states (all opt-in) ── */

  /** Show a spinner row in the dropdown while options load, and mark the list
   *  `aria-busy`. Default: false. */
  loading?: boolean;
  /** Text for the loading row (default: "Loading..."). */
  loadingMessage?: string;
  /** Text shown when `options` is empty (default: "No results found"). */
  emptyMessage?: string;
  /** Text shown when a search matches nothing (default: "No results found"). */
  noResultsMessage?: string;
  /** Message shown in the dropdown when loading the options failed. Replaces
   *  the option list while set. Pair with `onRetry`. */
  loadError?: string;
  /** Adds a "Retry" button next to `loadError`. */
  onRetry?: () => void;

  /* ── Multi-select only ── */

  /** How a multi-select trigger summarises 2+ selections: `"count"` shows
   *  "3 selected" (default, as before); `"values"` shows the labels, e.g.
   *  "Yellow, Blue +1". */
  triggerDisplay?: "count" | "values";
  /** Hold changes in a draft until the user presses Apply in a footer;
   *  Cancel, Escape or clicking outside discards them. `onValuesChange` fires
   *  only on Apply. Default: false (changes apply immediately, as before). */
  applyFooter?: boolean;
  /** Show a "Clear" button that unselects everything (on the Select All row,
   *  or on its own row without `showSelectAll`). Hidden while nothing is
   *  selected. Not needed with `maxSelection`, which already has one.
   *  Default: false. */
  showClear?: boolean;
  /** Show an "N items | M selected" line at the bottom of the dropdown (beside
   *  the Apply / Cancel buttons when `applyFooter` is on). Default: false. */
  showCount?: boolean;
  /** Footer button labels when `applyFooter` is set. */
  applyLabel?: string;
  cancelLabel?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      labelHelpText,
      required,
      readonly,
      placeholder = "Select...",
      options,
      error,
      disabled,
      multiple = false,
      searchable = false,
      showSelectAll = false,
      maxSelection,
      selectionLabel,
      trigger,
      value,
      onValueChange,
      values,
      onValuesChange,
      onOpenChange,
      dropdownAlign = "left",
      portalDropdown = true,
      dropdownClassName,
      className,
      id,
      size = "md",
      "aria-label": ariaLabelProp,
      loading = false,
      loadingMessage = "Loading...",
      emptyMessage,
      noResultsMessage = "No results found",
      loadError,
      onRetry,
      triggerDisplay = "count",
      applyFooter = false,
      showClear = false,
      showCount = false,
      applyLabel = "Apply",
      cancelLabel = "Cancel",
    },
    ref
  ) => {
    // Name used only when there's no visible `label` — see the prop's doc.
    const fallbackAriaLabel = label ? undefined : (ariaLabelProp ?? placeholder);
    // Radix always portals its content — see the prop's own doc comment
    // above. Referenced (as a no-op) purely so it's clear this isn't an
    // oversight.
    void portalDropdown;
    const radixAlign = dropdownAlign === "left" ? "start" : "end";

    const autoId = React.useId();
    const inputId = id ?? autoId;
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const searchRef = React.useRef<HTMLInputElement>(null);

    // Uncontrolled fallback for multi-select — the single-select path
    // delegates uncontrolled state to Radix's own SelectPrimitive.Root
    // instead, so this is only read/written on the `multiple` branch.
    const [internalValues, setInternalValues] = React.useState<string[]>([]);
    const isControlledMulti = values !== undefined;
    const committedValues = isControlledMulti ? values! : internalValues;
    // With `applyFooter`, edits go to a draft while the dropdown is open and
    // only reach `onValuesChange` on Apply.
    const [draftValues, setDraftValues] = React.useState<string[] | null>(null);
    const currentValues = applyFooter && draftValues ? draftValues : committedValues;

    const filtered = React.useMemo(() => {
      if (!search) return options;
      const q = search.toLowerCase();
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, search]);

    // Multi-select's listbox is a plain div (no Radix primitive covers "a
    // scrollable list of custom checkbox rows"), so it gets the same
    // hover-chevron affordance as MenuRadix instead of a native scrollbar —
    // see scroll-chevron.tsx. `maxHeight` is intentionally NOT passed to
    // the Popover below: Popover's own maxHeight path wraps `content` in
    // its own `overflow-auto` scrolling div, which would create a second,
    // nested scroll container around this one. The max-height/scroll
    // constraint lives entirely inside `content`.
    //
    // That said, Popover applies that same body-wrapping `overflow-auto`
    // whenever `header` is set too (not just when `maxHeight` is passed) —
    // and `header` below is always set for this dropdown (search field/
    // Select All row). So this listbox already sat inside two nested
    // scroll containers; it only became visibly a DOUBLE scrollbar once
    // Popover's available height (it falls back to Radix's own
    // `--radix-popover-content-available-height` for its `maxHeight` when
    // header/footer is set) shrank below this list's 300px cap — i.e.
    // whenever the viewport got short enough. Fixed by giving the wrapper
    // below `flex-1 min-h-0` alongside its existing `max-h-[300px]`
    // (replacing an earlier `h-full` attempt that turned out unreliable —
    // percentage-height through a non-flex-container ancestor is exactly
    // the kind of thing real browsers disagree on): Popover's own body div
    // is now a real flex container in the header/footer branch (see
    // popover.tsx's matching comment), so this wrapper correctly shrinks
    // to `min(300px, whatever room Popover's body has left)` the same
    // proven way its own `listRef` child already shrinks against it one
    // level down. It never exceeds — and therefore never triggers a
    // scrollbar on — that outer body div. `flex-1 min-h-0` is inert when
    // there's no `header`/`footer` (body isn't a flex container in that
    // branch, so these have nothing to size against), so this doesn't
    // change anything for that case. `TagPicker` (tag-picker.tsx) has the
    // exact same structure/bug/fix, for the same reason — same fix
    // mirrored there.
    const listRef = React.useRef<HTMLDivElement | null>(null);
    const { canScrollUp, canScrollDown, onScroll: onListScroll } = useScrollChevrons(
      listRef,
      [open, filtered.length]
    );
    const scrollListBy = (delta: number) => {
      listRef.current?.scrollBy({ top: delta });
    };

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (next) setSearch("");
      if (applyFooter) setDraftValues(next ? committedValues : null);
      onOpenChange?.(next);
    };

    React.useEffect(() => {
      if (open && searchable) {
        requestAnimationFrame(() => searchRef.current?.focus());
      }
    }, [open, searchable]);

    // Single place every multi-select edit goes through: straight to the
    // consumer normally, into the draft when `applyFooter` is on.
    const emitMulti = (next: string[]) => {
      if (applyFooter) {
        setDraftValues(next);
        return;
      }
      if (!isControlledMulti) setInternalValues(next);
      onValuesChange?.(next);
    };

    const applyDraft = () => {
      if (draftValues) {
        if (!isControlledMulti) setInternalValues(draftValues);
        onValuesChange?.(draftValues);
      }
      handleOpenChange(false);
    };

    const toggleMultiValue = (val: string) => {
      const next = currentValues.includes(val)
        ? currentValues.filter((v) => v !== val)
        : [...currentValues, val];
      emitMulti(next);
    };

    const toggleAll = () => {
      const allVals = filtered.filter((o) => !o.disabled).map((o) => o.value);
      const allSelected = allVals.length > 0 && allVals.every((v) => currentValues.includes(v));
      const next = allSelected
        ? currentValues.filter((v) => !allVals.includes(v))
        : [...new Set([...currentValues, ...allVals])];
      emitMulti(next);
    };

    const handleClearAll = () => {
      if (applyFooter) {
        setDraftValues([]);
        return;
      }
      if (isControlledMulti) onValuesChange?.([]);
      else setInternalValues([]);
    };

    /* ── Multi-select display text ── */
    const multiDisplayText = React.useMemo(() => {
      if (committedValues.length === 0) return null;
      const labelOf = (v: string) => options.find((o) => o.value === v)?.label ?? v;
      if (committedValues.length === 1) {
        return options.find((o) => o.value === committedValues[0])?.label;
      }
      if (triggerDisplay === "values") {
        const shown = committedValues.slice(0, 2).map(labelOf).join(", ");
        const extra = committedValues.length - 2;
        return extra > 0 ? `${shown} +${extra}` : shown;
      }
      return `${committedValues.length} selected`;
    }, [committedValues, options, triggerDisplay]);

    /* ── Groups + non-option rows (loading / error / empty / no results) ── */
    // Consecutive options sharing a `group` render under one heading; with no
    // `group` anywhere this is a single ungrouped run, rendered as before.
    const groupedRuns = React.useMemo(() => {
      const runs: { group?: string; items: SelectOption[] }[] = [];
      for (const o of filtered) {
        const last = runs[runs.length - 1];
        if (last && last.group === o.group) last.items.push(o);
        else runs.push({ group: o.group, items: [o] });
      }
      return runs;
    }, [filtered]);
    const showStateRow = loading || !!loadError;
    const emptyText = options.length === 0 ? (emptyMessage ?? noResultsMessage) : noResultsMessage;
    const stateRow = loadError ? (
      <div role="alert" className="flex items-center justify-between gap-2 px-3 py-2">
        <span className="lyra-body-sm text-lyra-status-critical-strong">{loadError}</span>
        {onRetry && (
          <Button type="button" variant="ghost" size="sm" onClick={onRetry}>
            Retry
          </Button>
        )}
      </div>
    ) : loading ? (
      <div role="status" className="flex items-center gap-2 px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
        <Spinner variant="bar" size="sm" label={loadingMessage} />
        <span>{loadingMessage}</span>
      </div>
    ) : null;
    // Multi-select rows are plain buttons: make only ONE of them a Tab stop
    // (the first selected row, else the first enabled one) and move between the
    // rest with ↑/↓/Home/End, so Tab goes search → list → footer instead of
    // through every row.
    const tabStopValue = (
      filtered.find((o) => !o.disabled && currentValues.includes(o.value)) ??
      filtered.find((o) => !o.disabled)
    )?.value;
    // "Clear" on the Select All row — only while something is selected, and not
    // with `maxSelection` (its own header row already has a Clear link).
    const clearRow = showClear && maxSelection === undefined && currentValues.length > 0;
    const countText = `${options.length} ${options.length === 1 ? "item" : "items"} | ${currentValues.length} selected`;
    const showEmptyRow = !showStateRow && filtered.length === 0;

    const focusOption = (list: HTMLElement, target: "first" | "last" | "next" | "prev") => {
      const opts = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="option"]:not(:disabled)'));
      if (opts.length === 0) return;
      const i = opts.indexOf(document.activeElement as HTMLButtonElement);
      const idx =
        target === "first" ? 0 : target === "last" ? opts.length - 1 : target === "next" ? Math.min(i + 1, opts.length - 1) : Math.max(i - 1, 0);
      opts[idx].focus();
    };

    /* ── Multi-select derived state ── */
    const allFilteredVals = filtered.filter((o) => !o.disabled).map((o) => o.value);
    const allSelected = allFilteredVals.length > 0 && allFilteredVals.every((v) => currentValues.includes(v));
    const someSelected = !allSelected && allFilteredVals.some((v) => currentValues.includes(v));
    const limitReached = multiple && maxSelection !== undefined && currentValues.length >= maxSelection;

    // Shared trigger visual treatment — identical between the Radix Select
    // trigger and the Popover trigger button below, so single- and
    // multi-select look the same regardless of which primitive backs them.
    const triggerClassName = cn(
      "group flex w-full items-center justify-between rounded-lyra-sm border px-3 lyra-body-md transition-colors",
      size === "sm" ? "h-8" : "h-9",
      // ADA-compliance focus indicator: same focus-visible ring
      // buttons/tabs use (see input.tsx for the fuller comment). Per
      // explicit follow-up request, layered with the ORIGINAL pre-
      // unification mouse/programmatic-focus ring — split on our own
      // tracked input-modality attribute, not `:focus-visible` (this
      // trigger is a real `<button>`, so `:focus-visible` alone would
      // actually have worked correctly here — but kept consistent with
      // every text-entry field, where it does NOT work, per input.tsx's
      // own fuller comment on that bug).
      "[html[data-lyra-input-modality=keyboard]_&:focus]:outline-none [html[data-lyra-input-modality=keyboard]_&:focus]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus]:ring-offset-2",
      "[html:not([data-lyra-input-modality=keyboard])_&:focus]:outline-none [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-2",
      error
        ? "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-fg-default [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-status-critical-strong [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-status-critical-strong/20"
        : "border-lyra-border-strong bg-lyra-bg-field text-lyra-fg-default hover:border-lyra-state-border-hover-neutral focus:border-lyra-border-active [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-border-focus [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-border-active/20",
      disabled &&
        "bg-lyra-bg-disabled border-transparent text-lyra-fg-disabled cursor-not-allowed pointer-events-none",
      readonly &&
        "bg-lyra-bg-surface-canvas cursor-default pointer-events-none"
      // Note: `className` is NOT merged in here — it targets the root
      // wrapper (see below). Merging it into the trigger instead would
      // silently mis-target e.g. `FilterChip`'s
      // `className="inline-flex relative"` (meant for the root) onto the
      // trigger button.
    );

    // Custom trigger shell: a `<button>` trigger is used as-is
    // (multi-select composes it via Popover's `asChild`; single-select
    // reads its className/children onto Radix's real Trigger — see
    // comment further down), anything else gets wrapped in the default
    // icon-button shell.
    // Error message and (when set) the label's help text, so both are read with the trigger
    const describedBy =
      [error ? `${inputId}-error` : null, label && labelHelpText && !disabled ? `${inputId}-help` : null]
        .filter(Boolean)
        .join(" ") || undefined;
    const isTriggerButton = React.isValidElement(trigger) && trigger.type === "button";
    const triggerIconShellClassName =
      "inline-flex items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors h-8 w-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2";

    if (multiple) {
      return (
        <div className={cn("relative", className)}>
          {label && (
            <Label
              id={`${inputId}-label`}
              label={label}
              labelHelpText={labelHelpText}
              helpTextId={`${inputId}-help`}
              required={required}
              disabled={disabled}
              readonly={readonly}
              className="mb-1.5"
            />
          )}

          <Popover
            open={open}
            onOpenChange={handleOpenChange}
            placement="bottom"
            align={radixAlign}
            // Matches the single-select path's `sideOffset={4}` on Radix's
            // own `SelectPrimitive.Content` below — left unset here, this
            // fell back to `Popover`'s own default (10), so multi-select's
            // dropdown sat visibly further from the trigger than
            // single-select's for no real reason (both are the same "select
            // trigger + dropdown" pattern and should sit the same distance
            // away).
            sideOffset={4}
            showArrow={false}
            // The listbox below is a full-bleed row list (its own `p-1`
            // inset for the hover background, matching `Menu`'s own
            // convention) — Popover's default 16px body inset would push
            // every row in by another 16px on each side, so this opts out.
            bodyPadding={false}
            className={cn(
              trigger ? "w-[240px]" : "w-[var(--radix-popover-trigger-width)]",
              dropdownClassName
            )}
            header={
              (searchable || (maxSelection !== undefined) || showSelectAll || showClear) ? (
                <div className="flex flex-col">
                  {searchable && (
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
                          aria-label="Search options"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          // ↓ from the search field jumps into the option list
                          onKeyDown={(e) => {
                            if (e.key === "ArrowDown" && listRef.current) {
                              e.preventDefault();
                              focusOption(listRef.current, "first");
                            }
                          }}
                          placeholder="Search"
                          className={cn(
                            "h-9 w-full rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field pl-9 pr-9 lyra-body-md text-lyra-fg-default transition-colors",
                            "placeholder:text-lyra-fg-disabled",
                            "hover:border-lyra-state-border-hover-neutral",
                            // Per explicit follow-up request — see
                            // input.tsx's own fuller comment.
                            "focus:border-lyra-border-active [html[data-lyra-input-modality=keyboard]_&:focus]:outline-none [html[data-lyra-input-modality=keyboard]_&:focus]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus]:ring-offset-2",
                            "[html:not([data-lyra-input-modality=keyboard])_&:focus]:outline-none [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-border-active/20"
                          )}
                        />
                        {search && (
                          <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors"
                            tabIndex={-1}
                            aria-label="Clear search"
                          >
                            <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {maxSelection !== undefined && (
                    <div className="shrink-0 flex items-center justify-between px-3 py-2 border-b border-lyra-border-subtle">
                      <span className={cn(
                        "lyra-label",
                        limitReached ? "text-lyra-status-critical-strong" : "text-lyra-fg-default"
                      )}>
                        {limitReached
                          ? `Limit Reached (${maxSelection})`
                          : selectionLabel ?? `Select up to ${maxSelection} items`}
                      </span>
                      {currentValues.length > 0 && (
                        <button
                          type="button"
                          onClick={handleClearAll}
                          className="lyra-body-sm text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  )}

                  {(showSelectAll || clearRow) && (
                    <div className="shrink-0 px-1 pt-1">
                      <div className="flex items-center">
                        {showSelectAll ? (
                          <button
                            type="button"
                            className="flex flex-1 items-center gap-2 px-3 py-2 text-left hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors rounded-lyra-sm"
                            onClick={toggleAll}
                          >
                            <Checkbox
                              decorative
                              checked={allSelected ? true : someSelected ? "indeterminate" : false}
                            />
                            <span className="lyra-body-md text-lyra-fg-default">Select All</span>
                          </button>
                        ) : (
                          <span className="flex-1" />
                        )}
                        {clearRow && (
                          <Button type="button" variant="ghost" size="sm" onClick={handleClearAll} className="mr-1">
                            Clear
                          </Button>
                        )}
                      </div>
                      <div className="border-b border-lyra-border-subtle mt-1" />
                    </div>
                  )}
                </div>
              ) : undefined
            }
            footer={
              applyFooter || showCount ? (
                <div className={cn("flex items-center gap-2 border-t border-lyra-border-subtle px-3 py-2", applyFooter ? "justify-between" : "justify-start")}>
                  {showCount && (
                    <span className="lyra-body-sm text-lyra-fg-secondary tabular-nums" aria-live="polite">
                      {countText}
                    </span>
                  )}
                  {applyFooter && (
                    <div className="flex gap-2 ml-auto">
                      <Button type="button" variant="outline" size="default" onClick={() => handleOpenChange(false)}>
                        {cancelLabel}
                      </Button>
                      <Button type="button" size="default" onClick={applyDraft}>
                        {applyLabel}
                      </Button>
                    </div>
                  )}
                </div>
              ) : undefined
            }
            content={
              // Outer wrapper owns the 300px height cap and stacks the
              // chevrons (pinned) around the actual scrollable div —
              // mirrors MenuRadix's structure exactly, for the same reason:
              // a chevron nested inside the scrollable region would only
              // become visible once already scrolled to that end.
              <div className="flex max-h-[300px] flex-1 min-h-0 flex-col">
                {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollListBy(-6)} />}
                <div
                  ref={listRef}
                  onScroll={onListScroll}
                  role="listbox"
                  aria-labelledby={label ? `${inputId}-label` : undefined}
                  aria-label={fallbackAriaLabel}
                  aria-multiselectable
                  aria-busy={loading || undefined}
                  // ↑/↓/Home/End move between options (they're plain buttons,
                  // so there's no built-in arrow navigation)
                  onKeyDown={(e) => {
                    const t = e.key === "ArrowDown" ? "next" : e.key === "ArrowUp" ? "prev" : e.key === "Home" ? "first" : e.key === "End" ? "last" : null;
                    if (!t) return;
                    e.preventDefault();
                    focusOption(e.currentTarget, t);
                  }}
                  className="flex-1 min-h-0 overflow-y-auto lyra-scrollbar-hide p-1"
                >
                  {stateRow}
                  {showEmptyRow && (
                    <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                      {emptyText}
                    </div>
                  )}
                  {!loadError && groupedRuns.map((run, runIdx) => {
                    const rows = run.items.map((option) => {
                    const isSelected = currentValues.includes(option.value);
                    const isDisabledByLimit = !isSelected && !!limitReached;
                    const isDisabled = option.disabled || isDisabledByLimit;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        disabled={isDisabled}
                        tabIndex={option.value === tabStopValue ? 0 : -1}
                        onClick={() => !isDisabled && toggleMultiValue(option.value)}
                        className={cn(
                          "group/item relative flex w-full items-center gap-2.5 px-3 py-2.5 lyra-body-md text-left transition-colors rounded-lyra-sm",
                          "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                          "focus:outline-none focus-visible:bg-lyra-state-hover",
                          isDisabled && "opacity-40 cursor-not-allowed hover:bg-transparent"
                        )}
                      >
                        {/* Left accent bar — visible on hover/press, matching
                            Menu's row treatment (see menu.tsx's MenuItemRow).
                            Multi-select rows are plain buttons (not Radix
                            Select.Item, not Menu itself), so this is
                            reproduced by hand. */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full opacity-0 transition-opacity",
                            "bg-lyra-fg-default group-hover/item:opacity-100 group-active/item:opacity-100",
                            isDisabled && "group-hover/item:opacity-0 group-active/item:opacity-0"
                          )}
                        />
                        <Checkbox
                          decorative
                          checked={isSelected}
                          disabled={isDisabledByLimit}
                          className="pointer-events-none"
                        />
                        {/* Optional leading icon (`SelectOption.icon`) —
                            same purely-additive treatment as the
                            single-select row above. */}
                        {option.icon && (
                          <span
                            aria-hidden="true"
                            className="flex-shrink-0 [&_svg]:h-4 [&_svg]:w-4 text-lyra-fg-secondary"
                          >
                            {option.icon}
                          </span>
                        )}
                        <span className="flex-1 min-w-0 truncate text-lyra-fg-default">{option.label}</span>
                      </button>
                    );
                    });
                    return run.group ? (
                      <div key={`g-${runIdx}`} role="group" aria-labelledby={`${inputId}-g-${runIdx}`}>
                        <div id={`${inputId}-g-${runIdx}`} className="px-3 pt-2 pb-1 lyra-body-sm text-lyra-fg-secondary">
                          {run.group}
                        </div>
                        {rows}
                      </div>
                    ) : (
                      <React.Fragment key={`g-${runIdx}`}>{rows}</React.Fragment>
                    );
                  })}
                </div>
                {canScrollDown && <ScrollChevronButton direction="down" onStep={() => scrollListBy(6)} />}
              </div>
            }
          >
            {trigger ? (
              isTriggerButton ? (
                React.cloneElement(trigger as React.ReactElement<any>, { ref })
              ) : (
                <button
                  ref={ref}
                  type="button"
                  disabled={disabled}
                  aria-label={label || placeholder}
                  className={triggerIconShellClassName}
                >
                  {trigger}
                </button>
              )
            ) : (
              <button
                ref={ref}
                type="button"
                id={inputId}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                // The button's own id comes second so its visible text ("Select...",
                // "3 selected") is part of the name, not only the label's.
                aria-labelledby={label ? `${inputId}-label ${inputId}` : undefined}
                aria-label={fallbackAriaLabel}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                // ↓ opens the list, like the single-select trigger
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" && !open && !readonly) {
                    e.preventDefault();
                    handleOpenChange(true);
                  }
                }}
                className={triggerClassName}
              >
                <span className={cn("truncate", !multiDisplayText && "text-lyra-fg-disabled")}>
                  {multiDisplayText || placeholder}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transition-transform",
                    disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary",
                    open && "rotate-180"
                  )}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            )}
          </Popover>

          {error && (
            <div id={`${inputId}-error`} role="alert" className="flex items-center gap-1 mt-1.5">
              <ErrorIconSolid
                className="h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong"
                aria-hidden="true"
              />
              <span className="lyra-body-sm text-lyra-status-critical-strong">{error}</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className={cn("relative", className)}>
        {label && (
          <Label
            id={`${inputId}-label`}
            label={label}
            labelHelpText={labelHelpText}
            helpTextId={`${inputId}-help`}
            required={required}
            disabled={disabled}
            readonly={readonly}
            className="mb-1.5"
          />
        )}

        <SelectPrimitive.Root
          value={value}
          onValueChange={onValueChange}
          open={open}
          onOpenChange={handleOpenChange}
          disabled={disabled}
        >
          {/* Custom trigger: unlike `Popover`'s Trigger, Radix's own
              `SelectTrigger` does NOT support `asChild` (its type extends
              plain button props only — it must stay the real DOM node
              carrying the combobox's `role`/`aria-*`/`data-state`, since
              Select's accessibility model is tied directly to it, not to a
              Slot-cloned child). So a custom `trigger` here is applied as a
              *skin* — its className/children are read off the element and
              rendered through Radix's own Trigger — rather than swapping
              the element out entirely. Radix still owns the click-to-open,
              keyboard nav, and all aria-* wiring either way. */}
          {trigger ? (
            <SelectPrimitive.Trigger
              ref={ref}
              id={inputId}
              disabled={disabled}
              aria-label={
                isTriggerButton
                  ? (trigger as React.ReactElement<any>).props["aria-label"] ?? ariaLabelProp ?? label ?? placeholder
                  : ariaLabelProp ?? (label || placeholder)
              }
              className={
                isTriggerButton
                  ? (trigger as React.ReactElement<any>).props.className
                  : triggerIconShellClassName
              }
            >
              {isTriggerButton ? (trigger as React.ReactElement<any>).props.children : trigger}
            </SelectPrimitive.Trigger>
          ) : (
            <SelectPrimitive.Trigger
              ref={ref}
              id={inputId}
              aria-labelledby={label ? `${inputId}-label` : undefined}
              aria-label={fallbackAriaLabel}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy}
              className={cn(
                triggerClassName,
                "data-[state=open]:border-lyra-border-active data-[state=open]:ring-2 data-[state=open]:ring-lyra-border-active/20",
                error && "data-[state=open]:border-lyra-status-critical-strong data-[state=open]:ring-lyra-status-critical-strong/20"
              )}
            >
              <span className="truncate">
                <SelectPrimitive.Value placeholder={<span className="text-lyra-fg-disabled">{placeholder}</span>} />
              </span>
              <SelectPrimitive.Icon className="flex-shrink-0">
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary",
                    "group-data-[state=open]:rotate-180"
                  )}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
          )}

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              align={radixAlign}
              sideOffset={4}
              aria-busy={loading || undefined}
              className={cn(
                "z-[9999] max-h-[300px]",
                trigger ? "w-[240px]" : "w-[var(--radix-select-trigger-width)]",
                "rounded-lyra-lg bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg",
                "overflow-hidden flex flex-col",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
                dropdownClassName
              )}
            >
              {searchable && (
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
                      aria-label="Search options"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      // Stop these from bubbling to Radix's own Content
                      // keydown handler — otherwise typing letters triggers
                      // Radix's built-in typeahead (jumps focus to the item
                      // starting with that letter) instead of just filtering.
                      onKeyDown={(e) => e.stopPropagation()}
                      placeholder="Search"
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
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors"
                        tabIndex={-1}
                        aria-label="Clear search"
                      >
                        <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
                </div>
              )}

              <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-1 text-lyra-fg-secondary">
                <ChevronUp className="h-4 w-4" strokeWidth={1.5} />
              </SelectPrimitive.ScrollUpButton>

              <SelectPrimitive.Viewport className="p-1 overflow-y-auto">
                {stateRow}
                {showEmptyRow && (
                  <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                    {emptyText}
                  </div>
                )}
                {!loadError && groupedRuns.map((run, runIdx) => {
                  const rows = run.items.map((option) => (
                  // Item states mirror `Menu`'s own item treatment exactly
                  // (see menu.tsx's MenuItemRow) — a persistent blue left
                  // accent bar + blue bg/text for the current item, no
                  // checkmark. Radix's Select.Item can't embed the real
                  // `Menu` component directly (they'd fight over
                  // keyboard/focus/ARIA handling), so the classes below
                  // reproduce the same look using Radix's own data-state
                  // ("checked"/"unchecked") and data-highlighted (Radix's
                  // unified mouse+keyboard focus indicator, in place of
                  // Menu's separate hover/focus-visible rules).
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      "group relative flex w-full items-center gap-2.5 px-3 py-2.5 lyra-body-md text-left transition-colors rounded-lyra-sm cursor-pointer select-none outline-none",
                      "text-lyra-fg-default data-[highlighted]:bg-lyra-state-hover",
                      "data-[state=checked]:bg-lyra-bg-active-subtle data-[state=checked]:text-lyra-fg-active-strong",
                      "data-[state=checked]:data-[highlighted]:bg-lyra-state-hover-active-subtle",
                      "data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed data-[disabled]:data-[highlighted]:bg-transparent"
                    )}
                  >
                    {/* Left accent bar — persistently blue for the current
                        item; otherwise visible only while highlighted. */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full transition-opacity",
                        "bg-lyra-fg-default opacity-0 group-data-[highlighted]:opacity-100",
                        "group-data-[state=checked]:opacity-100 group-data-[state=checked]:bg-lyra-fg-active-strong",
                        "group-data-[disabled]:opacity-0"
                      )}
                    />
                    {/* Optional leading icon (`SelectOption.icon`) — purely
                        additive, so an option that doesn't set one renders
                        exactly as before (no empty icon slot reserving
                        space). */}
                    {option.icon && (
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 [&_svg]:h-4 [&_svg]:w-4 text-lyra-fg-secondary group-data-[state=checked]:text-lyra-fg-active-strong"
                      >
                        {option.icon}
                      </span>
                    )}
                    <span className="flex-1 min-w-0">
                      <SelectPrimitive.ItemText>
                        <span className="block truncate">{option.label}</span>
                      </SelectPrimitive.ItemText>
                    </span>
                  </SelectPrimitive.Item>
                  ));
                  return run.group ? (
                    <SelectPrimitive.Group key={`g-${runIdx}`}>
                      <SelectPrimitive.Label className="px-3 pt-2 pb-1 lyra-body-sm text-lyra-fg-secondary">
                        {run.group}
                      </SelectPrimitive.Label>
                      {rows}
                    </SelectPrimitive.Group>
                  ) : (
                    <React.Fragment key={`g-${runIdx}`}>{rows}</React.Fragment>
                  );
                })}
              </SelectPrimitive.Viewport>

              <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1 text-lyra-fg-secondary">
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {error && (
          <div id={`${inputId}-error`} role="alert" className="flex items-center gap-1 mt-1.5">
            <ErrorIconSolid
              className="h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong"
              aria-hidden="true"
            />
            <span className="lyra-body-sm text-lyra-status-critical-strong">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
export type { SelectProps, SelectOption };
