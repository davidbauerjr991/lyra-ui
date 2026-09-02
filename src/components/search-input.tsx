import * as React from "react";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "../lib/utils";
import { ClearButton } from "./clear-button";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onSubmit"> {
  /** Controlled value */
  value?: string;
  /** Called when the value changes */
  onValueChange?: (value: string) => void;
  /** Read-only: no hover, focus, or clear button */
  readonly?: boolean;
  /**
   * Field height. "md" (36px, default) matches every other field in the
   * library; "sm" (32px) is for dense contexts — a table toolbar's quick
   * search row is the motivating case. The search icon and clear button
   * are already vertically centered independent of height, so neither
   * needs repositioning for "sm".
   */
  size?: "sm" | "md";
  /**
   * Opt-in explicit-submit affordance — per explicit request ("add a
   * 'search' icon button into the input" that appears once the agent has
   * typed something, and only THEN run the search on click, rather than
   * live-filtering on every keystroke). When provided, a primary-colored
   * circular button appears at the input's trailing edge once there's a
   * value, alongside the existing clear button; clicking it (or pressing
   * Enter while focused) calls this with the current value. Per a
   * follow-up reference screenshot, the glyph is an `ArrowRight` (matching
   * `AIInput`'s own submit-button treatment), not a magnifying glass, and
   * the button is squared off with `rounded-lyra-sm` (the library's
   * standard button radius, matching `Button`/`ActionIconButton`) rather
   * than a circle. Omitted entirely (the default) reproduces every
   * existing call site's
   * exact prior layout — the extra reserved padding for this button only
   * applies when the prop is passed, so no other consumer of this
   * component is affected. */
  onSubmit?: (value: string) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onValueChange, onChange, readonly, size = "md", onSubmit, ...props }, ref) => {
    const hasValue = value != null && value.length > 0;
    const showSubmitButton = hasValue && !readonly && !!onSubmit;

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
          onKeyDown={(e) => {
            props.onKeyDown?.(e);
            if (onSubmit && e.key === "Enter" && hasValue) {
              e.preventDefault();
              onSubmit(value ?? "");
            }
          }}
          readOnly={readonly}
          className={cn(
            size === "sm" ? "h-8" : "h-9",
            "w-full rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field pl-9 lyra-body-md text-lyra-fg-default transition-colors",
            // Extra reserved right padding only when `onSubmit` is set (room
            // for BOTH the clear button and the new submit button below) —
            // every other, `onSubmit`-less call site keeps its original
            // `pr-9` unchanged.
            onSubmit ? "pr-14" : "pr-9",
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
            "placeholder:text-lyra-fg-disabled",
            !readonly && "hover:border-lyra-state-border-hover-neutral",
            // Per explicit follow-up request — see input.tsx's own fuller
            // comment on the mouse-vs-keyboard focus-ring split (and on why
            // it has to be driven by our own tracked input-modality
            // attribute, not `:focus-visible` — the exact bug a real user
            // report caught right here, on this field: clicking into this
            // search box with the mouse still showed the bold keyboard
            // ring, since `:focus-visible` always matches a text `<input>`
            // regardless of input method).
            !readonly &&
              "focus:border-lyra-border-active [html[data-lyra-input-modality=keyboard]_&:focus]:outline-none [html[data-lyra-input-modality=keyboard]_&:focus]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus]:ring-offset-2",
            !readonly &&
              "[html:not([data-lyra-input-modality=keyboard])_&:focus]:outline-none [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-border-active/20",
            readonly && "bg-lyra-bg-surface-canvas cursor-default pointer-events-none",
            "disabled:opacity-40 disabled:border-transparent disabled:hover:border-transparent disabled:cursor-not-allowed disabled:bg-lyra-bg-disabled"
          )}
          {...props}
        />
        {hasValue && !readonly && (
          <ClearButton
            onClick={() => onValueChange?.("")}
            className={cn("absolute top-1/2 -translate-y-1/2", onSubmit ? "right-9" : "right-2")}
            aria-label="Clear search"
          />
        )}
        {showSubmitButton && (
          <button
            type="button"
            onClick={() => onSubmit(value ?? "")}
            aria-label="Search"
            className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 flex items-center justify-center rounded-lyra-sm bg-lyra-bg-primary text-lyra-fg-on-primary transition-colors hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
          >
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
export type { SearchInputProps };
