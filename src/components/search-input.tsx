import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";
import { ClearButton } from "./clear-button";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Controlled value */
  value?: string;
  /** Called when the value changes */
  onValueChange?: (value: string) => void;
  /** Read-only: no hover, focus, or clear button */
  readonly?: boolean;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onValueChange, onChange, readonly, ...props }, ref) => {
    const hasValue = value != null && value.length > 0;

    const searchLabel = props["aria-label"] || "Search";

    return (
      <div className={cn("relative", className)} role="search" aria-label={searchLabel}>
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lyra-fg-secondary pointer-events-none"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="search"
          aria-label={searchLabel}
          value={value}
          onChange={(e) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
          }}
          readOnly={readonly}
          className={cn(
            "h-9 w-full rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field pl-9 pr-9 lyra-body-md text-lyra-fg-default transition-colors",
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
            "placeholder:text-lyra-fg-disabled",
            !readonly && "hover:border-lyra-state-border-hover-neutral",
            !readonly && "focus:outline-none focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20",
            readonly && "bg-lyra-bg-surface-canvas cursor-default pointer-events-none",
            "disabled:opacity-40 disabled:border-transparent disabled:hover:border-transparent disabled:cursor-not-allowed disabled:bg-lyra-bg-disabled"
          )}
          {...props}
        />
        {hasValue && !readonly && (
          <ClearButton
            onClick={() => onValueChange?.("")}
            className="absolute right-2 top-1/2 -translate-y-1/2"
            aria-label="Clear search"
          />
        )}
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
export type { SearchInputProps };
