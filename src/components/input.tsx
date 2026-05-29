import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed above the input */
  label?: string;
  /** Error message — triggers error styling when provided */
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, disabled, id, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id || autoId;

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "lyra-label block mb-1.5",
              disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            "h-9 w-full rounded-lyra-sm border px-3 lyra-body-md transition-colors",
            "placeholder:text-lyra-fg-disabled",
            "focus:outline-none",
            error
              ? "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-fg-default focus:ring-2 focus:ring-lyra-status-critical-strong/20"
              : "border-lyra-border-default bg-lyra-bg-field text-lyra-fg-default hover:border-lyra-border-strong focus:border-lyra-border-active focus:ring-2 focus:ring-lyra-border-active/20",
            disabled && "bg-lyra-bg-disabled border-lyra-border-disabled text-lyra-fg-disabled cursor-not-allowed hover:border-lyra-border-disabled"
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <div id={`${inputId}-error`} role="alert" className="flex items-center gap-1 mt-1.5">
            <AlertCircle className="h-3.5 w-3.5 text-lyra-status-critical-strong flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
            <span className="lyra-body-sm text-lyra-status-critical-strong">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
