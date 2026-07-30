import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { ErrorIcon } from "./icons/error-icon";
import { Label } from "./label";
import { Popover } from "./popover";
import { Checkbox } from "./checkbox";
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
   * inside a *higher* tier — e.g. `OutboundAddButton`'s own `z-[10003]`
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
    },
    ref
  ) => {
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
    const currentValues = isControlledMulti ? values! : internalValues;

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
      onOpenChange?.(next);
    };

    React.useEffect(() => {
      if (open && searchable) {
        requestAnimationFrame(() => searchRef.current?.focus());
      }
    }, [open, searchable]);

    const toggleMultiValue = (val: string) => {
      const next = currentValues.includes(val)
        ? currentValues.filter((v) => v !== val)
        : [...currentValues, val];
      if (!isControlledMulti) setInternalValues(next);
      onValuesChange?.(next);
    };

    const toggleAll = () => {
      const allVals = filtered.filter((o) => !o.disabled).map((o) => o.value);
      const allSelected = allVals.length > 0 && allVals.every((v) => currentValues.includes(v));
      const next = allSelected
        ? currentValues.filter((v) => !allVals.includes(v))
        : [...new Set([...currentValues, ...allVals])];
      if (!isControlledMulti) setInternalValues(next);
      onValuesChange?.(next);
    };

    const handleClearAll = () => {
      if (isControlledMulti) onValuesChange?.([]);
      else setInternalValues([]);
    };

    /* ── Multi-select display text ── */
    const multiDisplayText = React.useMemo(() => {
      if (currentValues.length === 0) return null;
      if (currentValues.length === 1) {
        return options.find((o) => o.value === currentValues[0])?.label;
      }
      return `${currentValues.length} selected`;
    }, [currentValues, options]);

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
      "focus:outline-none",
      error
        ? "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-fg-default focus:ring-2 focus:ring-lyra-status-critical-strong/20"
        : "border-lyra-border-strong bg-lyra-bg-field text-lyra-fg-default hover:border-lyra-state-border-hover-neutral focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20",
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
              (searchable || (maxSelection !== undefined) || showSelectAll) ? (
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

                  {showSelectAll && (
                    <div className="shrink-0 px-1 pt-1">
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors rounded-lyra-sm"
                        onClick={toggleAll}
                      >
                        <Checkbox
                          checked={allSelected ? true : someSelected ? "indeterminate" : false}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                        <span className="lyra-body-md text-lyra-fg-default">Select All</span>
                      </button>
                      <div className="border-b border-lyra-border-subtle mt-1" />
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
              <div className="flex flex-col max-h-[300px]">
                {canScrollUp && <ScrollChevronButton direction="up" onStep={() => scrollListBy(-6)} />}
                <div
                  ref={listRef}
                  onScroll={onListScroll}
                  role="listbox"
                  aria-labelledby={label ? `${inputId}-label` : undefined}
                  aria-multiselectable
                  className="flex-1 min-h-0 overflow-y-auto lyra-scrollbar-hide p-1"
                >
                  {filtered.length === 0 && (
                    <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                      No results found
                    </div>
                  )}
                  {filtered.map((option) => {
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
                          checked={isSelected}
                          disabled={isDisabledByLimit}
                          tabIndex={-1}
                          className="pointer-events-none"
                        />
                        <span className="flex-1 min-w-0 truncate text-lyra-fg-default">{option.label}</span>
                      </button>
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
                aria-labelledby={label ? `${inputId}-label` : undefined}
                aria-invalid={error ? true : undefined}
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
              <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
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
                  ? (trigger as React.ReactElement<any>).props["aria-label"]
                  : label || placeholder
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
              aria-invalid={error ? true : undefined}
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
                {filtered.length === 0 && (
                  <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                    No results found
                  </div>
                )}
                {filtered.map((option) => (
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
                    <span className="flex-1 min-w-0">
                      <SelectPrimitive.ItemText>
                        <span className="block truncate">{option.label}</span>
                      </SelectPrimitive.ItemText>
                    </span>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>

              <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1 text-lyra-fg-secondary">
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {error && (
          <div id={`${inputId}-error`} role="alert" className="flex items-center gap-1 mt-1.5">
            <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
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
