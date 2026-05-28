import * as React from "react";
import { ChevronDown, Search, X, Check } from "lucide-react";
import { Checkbox } from "./checkbox";
import { cn } from "../lib/utils";

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
  /** Label displayed above the select */
  label?: string;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Options to display */
  options: SelectOption[];
  /** Error message — triggers error styling */
  error?: string;
  /** Disable the select */
  disabled?: boolean;
  /** Allow multiple selections */
  multiple?: boolean;
  /** Show a search input in the dropdown */
  searchable?: boolean;
  /** Show a "select all" checkbox (only for multiple mode) */
  showSelectAll?: boolean;

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

  /** Additional class on the root */
  className?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      placeholder = "Select...",
      options,
      error,
      disabled,
      multiple = false,
      searchable = false,
      showSelectAll = false,
      value,
      onValueChange,
      values,
      onValuesChange,
      className,
    },
    ref
  ) => {
    const autoId = React.useId();

    /* ── State ── */
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");

    // Uncontrolled fallback
    const [internalValue, setInternalValue] = React.useState<string>("");
    const [internalValues, setInternalValues] = React.useState<string[]>([]);

    const isControlledSingle = value !== undefined;
    const isControlledMulti = values !== undefined;

    const currentValue = isControlledSingle ? value : internalValue;
    const currentValues = isControlledMulti ? values : internalValues;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const searchRef = React.useRef<HTMLInputElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);

    // Merge forwarded ref with internal ref
    const setTriggerRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      },
      [ref]
    );

    /* ── Filtered options ── */
    const filtered = React.useMemo(() => {
      if (!search) return options;
      const q = search.toLowerCase();
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, search]);

    /* ── Handlers ── */
    const toggleOpen = () => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) {
          // Opening — reset search
          setSearch("");
        }
        return !prev;
      });
    };

    const selectSingle = (val: string) => {
      if (!isControlledSingle) setInternalValue(val);
      onValueChange?.(val);
      setOpen(false);
    };

    const toggleMultiValue = (val: string) => {
      const next = currentValues.includes(val)
        ? currentValues.filter((v) => v !== val)
        : [...currentValues, val];
      if (!isControlledMulti) setInternalValues(next);
      onValuesChange?.(next);
    };

    const toggleAll = () => {
      const allVals = filtered.filter((o) => !o.disabled).map((o) => o.value);
      const allSelected = allVals.every((v) => currentValues.includes(v));
      const next = allSelected
        ? currentValues.filter((v) => !allVals.includes(v))
        : [...new Set([...currentValues, ...allVals])];
      if (!isControlledMulti) setInternalValues(next);
      onValuesChange?.(next);
    };

    /* ── Close on outside click ── */
    React.useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    /* ── Close on Escape ── */
    React.useEffect(() => {
      if (!open) return;
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, [open]);

    /* ── Focus search on open ── */
    React.useEffect(() => {
      if (open && searchable) {
        // Slight delay so the dropdown renders first
        requestAnimationFrame(() => searchRef.current?.focus());
      }
    }, [open, searchable]);

    /* ── Display value ── */
    const displayText = React.useMemo(() => {
      if (multiple) {
        if (currentValues.length === 0) return null;
        if (currentValues.length === 1) {
          return options.find((o) => o.value === currentValues[0])?.label;
        }
        return `${currentValues.length} selected`;
      }
      if (!currentValue) return null;
      return options.find((o) => o.value === currentValue)?.label;
    }, [multiple, currentValue, currentValues, options]);

    /* ── Select-all state ── */
    const allFilteredVals = filtered.filter((o) => !o.disabled).map((o) => o.value);
    const allSelected = allFilteredVals.length > 0 && allFilteredVals.every((v) => currentValues.includes(v));
    const someSelected = !allSelected && allFilteredVals.some((v) => currentValues.includes(v));

    return (
      <div ref={rootRef} className={cn("relative", className)}>
        {/* Label */}
        {label && (
          <label
            className={cn(
              "lyra-label block mb-1.5",
              disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
            )}
          >
            {label}
          </label>
        )}

        {/* Trigger */}
        <button
          ref={setTriggerRef}
          type="button"
          disabled={disabled}
          onClick={toggleOpen}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${autoId}-error` : undefined}
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-lyra-sm border px-3 lyra-body-md transition-colors",
            "focus:outline-none",
            error
              ? "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-fg-default focus:ring-2 focus:ring-lyra-status-critical-strong/20"
              : "border-lyra-border-default bg-lyra-bg-field text-lyra-fg-default hover:border-lyra-border-strong focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20",
            disabled &&
              "bg-lyra-bg-disabled border-lyra-border-disabled text-lyra-fg-disabled cursor-not-allowed hover:border-lyra-border-disabled",
            open && !error && "border-lyra-border-active ring-2 ring-lyra-border-active/20"
          )}
        >
          <span className={cn(!displayText && "text-lyra-fg-disabled")}>
            {displayText || placeholder}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 flex-shrink-0 transition-transform",
              disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary",
              open && "rotate-180"
            )}
            strokeWidth={1.5}
          />
        </button>

        {/* Error */}
        {error && (
          <div id={`${autoId}-error`} className="flex items-center gap-1 mt-1.5">
            <span className="lyra-body-sm text-lyra-status-critical-strong">{error}</span>
          </div>
        )}

        {/* Dropdown */}
        {open && (
          <div
            className="absolute z-50 mt-1 w-full rounded-lyra-lg bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg"
          >
            {/* Search */}
            {searchable && (
              <div className="p-2 pb-0">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lyra-fg-secondary pointer-events-none"
                    strokeWidth={1.5}
                  />
                  <input
                    ref={searchRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className={cn(
                      "h-9 w-full rounded-lyra-sm border border-lyra-border-default bg-lyra-bg-field pl-9 pr-9 lyra-body-md text-lyra-fg-default transition-colors",
                      "placeholder:text-lyra-fg-disabled",
                      "hover:border-lyra-border-strong",
                      "focus:outline-none focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20"
                    )}
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-secondary hover:text-lyra-fg-default hover:bg-lyra-state-hover transition-colors"
                      tabIndex={-1}
                      aria-label="Clear search"
                    >
                      <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Select All header (multi only) */}
            {multiple && showSelectAll && (
              <>
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={allSelected ? true : someSelected ? "indeterminate" : false}
                      onCheckedChange={() => toggleAll()}
                    />
                    <span className="lyra-body-md text-lyra-fg-default">All</span>
                  </div>
                </div>
                <div className="border-b border-lyra-border-subtle" />
              </>
            )}

            {/* Options list */}
            <div
              ref={listRef}
              role="listbox"
              aria-multiselectable={multiple || undefined}
              className="max-h-[240px] overflow-y-auto py-1"
            >
              {filtered.length === 0 && (
                <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">
                  No results found
                </div>
              )}

              {multiple
                ? filtered.map((option) => {
                    const isSelected = currentValues.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        disabled={option.disabled}
                        onClick={() => toggleMultiValue(option.value)}
                        className={cn(
                          "flex w-full items-center gap-2.5 px-3 py-2 lyra-body-md text-left transition-colors",
                          "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                          "focus:outline-none focus-visible:bg-lyra-state-hover",
                          option.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"
                        )}
                      >
                        <Checkbox
                          checked={isSelected}
                          tabIndex={-1}
                          className="pointer-events-none"
                        />
                        <span className="text-lyra-fg-default">{option.label}</span>
                      </button>
                    );
                  })
                : filtered.map((option) => {
                    const isSelected = currentValue === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        disabled={option.disabled}
                        onClick={() => selectSingle(option.value)}
                        className={cn(
                          "flex w-full items-center gap-2.5 px-3 py-2 lyra-body-md text-left transition-colors",
                          "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                          "focus:outline-none focus-visible:bg-lyra-state-hover",
                          isSelected && "bg-lyra-bg-active-subtle",
                          option.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"
                        )}
                      >
                        <span className={cn(
                          "flex h-4 w-4 items-center justify-center flex-shrink-0",
                          isSelected ? "text-lyra-bg-primary" : "text-transparent"
                        )}>
                          <Check className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className="text-lyra-fg-default">{option.label}</span>
                      </button>
                    );
                  })}
            </div>
          </div>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
export type { SelectProps, SelectOption };
