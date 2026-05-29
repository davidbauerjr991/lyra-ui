import * as React from "react";
import { useState } from "react";
import { ChevronDown, AlertCircle, X } from "lucide-react";
import { Select } from "./select";
import { cn } from "../lib/utils";

/* ── Types ── */

interface FilterChipOption {
  /** Unique value */
  value: string;
  /** Display label */
  label: string;
}

type FilterChipVariant = "default" | "active" | "error" | "disabled";

interface FilterChipProps {
  /** Filter label (e.g. "Status", "Region") */
  label: string;
  /** Available options in the dropdown */
  options: FilterChipOption[];
  /** Currently selected values */
  selectedValues?: string[];
  /** Called when selection changes */
  onSelectionChange?: (values: string[]) => void;
  /** Error state — shows red styling and error icon */
  error?: boolean;
  /** Disable the chip */
  disabled?: boolean;
  /** Show a remove (×) button — called when the chip is dismissed */
  onRemove?: () => void;
  /** Additional className */
  className?: string;
}

/* ── FilterChip ── */

const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
  (
    {
      label,
      options,
      selectedValues = [],
      onSelectionChange,
      error = false,
      disabled = false,
      onRemove,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const hasValues = selectedValues.length > 0;
    const firstSelectedLabel = hasValues
      ? options.find((o) => o.value === selectedValues[0])?.label ?? selectedValues[0]
      : null;
    const extraCount = selectedValues.length - 1;

    /* Variant */
    const variant: FilterChipVariant = disabled
      ? "disabled"
      : error
        ? "error"
        : hasValues
          ? "active"
          : "default";

    /* Chip trigger button */
    const chipTrigger = (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 border px-3 h-8 transition-colors",
          onRemove && !disabled ? "rounded-l-lyra-md" : "rounded-lyra-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          variant === "default" && [
            "border-lyra-border-default bg-lyra-bg-control-subtle text-lyra-fg-default",
            "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
          ],
          variant === "active" && [
            "border-lyra-border-active bg-lyra-bg-active-subtle text-lyra-fg-active-strong",
            "hover:bg-lyra-state-hover-active-subtle active:bg-lyra-state-pressed-active-subtle",
          ],
          variant === "error" && [
            "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-status-critical-strong",
            "hover:bg-lyra-state-hover-critical-subtle active:bg-lyra-state-pressed-critical-subtle",
          ],
          variant === "disabled" && [
            "border-lyra-border-disabled bg-lyra-bg-disabled text-lyra-fg-disabled cursor-not-allowed",
          ]
        )}
      >
        {/* Error icon */}
        {variant === "error" && (
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
        )}

        {/* Label + value */}
        {hasValues ? (
          <span className="inline-flex items-baseline gap-1 max-w-[200px]">
            <span className="lyra-body-md-emphasis whitespace-nowrap">{label}:</span>
            <span className="lyra-body-md truncate">{firstSelectedLabel}</span>
          </span>
        ) : (
          <span className="lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap">{label}</span>
        )}

        {/* Extra count badge */}
        {extraCount > 0 && (
          <span
            className={cn(
              "inline-flex items-center justify-center h-5 min-w-[20px] px-1 rounded-lyra-xs lyra-body-sm-emphasis",
              variant === "active" && "bg-lyra-state-pressed-active-subtle text-lyra-fg-active-strong",
              variant === "error" && "bg-lyra-state-pressed-critical-subtle text-lyra-status-critical-strong"
            )}
          >
            +{extraCount}
          </span>
        )}

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 flex-shrink-0 transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
    );

    return (
      <div className={cn("inline-flex", className)}>
        <Select
          options={options}
          multiple
          searchable
          showSelectAll
          portalDropdown
          values={selectedValues}
          onValuesChange={onSelectionChange}
          onOpenChange={setOpen}
          disabled={disabled}
          trigger={chipTrigger}
          dropdownAlign="left"
          className="inline-flex relative"
        />

        {/* Remove button */}
        {onRemove && !disabled && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            aria-label={`Remove ${label} filter`}
            className={cn(
              "inline-flex items-center justify-center h-8 w-8 -ml-px rounded-r-lyra-md border transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
              variant === "default" && [
                "border-lyra-border-default bg-lyra-bg-control-subtle text-lyra-fg-secondary",
                "hover:bg-lyra-state-hover hover:text-lyra-fg-default active:bg-lyra-state-pressed",
              ],
              variant === "active" && [
                "border-lyra-border-active bg-lyra-bg-active-subtle text-lyra-fg-active-strong",
                "hover:bg-lyra-state-hover-active-subtle active:bg-lyra-state-pressed-active-subtle",
              ],
              variant === "error" && [
                "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-status-critical-strong",
                "hover:bg-lyra-state-hover-critical-subtle active:bg-lyra-state-pressed-critical-subtle",
              ],
            )}
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        )}
      </div>
    );
  }
);
FilterChip.displayName = "FilterChip";

export { FilterChip };
export type { FilterChipProps, FilterChipOption, FilterChipVariant };
