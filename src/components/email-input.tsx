import * as React from "react";
import { Mail } from "lucide-react";
import { ErrorIcon } from "./icons/error-icon";
import { cn } from "../lib/utils";
import { Label } from "./label";

/* ── Validation ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string | null {
  if (!value.trim()) return null;
  return EMAIL_RE.test(value.trim()) ? null : "Enter a valid email address (e.g. name@example.com)";
}

/* ── Types ── */
export interface EmailInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  labelHelpText?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  /** External error — overrides internal validation message */
  error?: string;
  className?: string;
  id?: string;
  /** Field height. "md" (36px, default) or "sm" (32px) for dense contexts. */
  size?: "sm" | "md";
}

/* ── Component ── */
const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({
    value = "",
    onChange,
    label,
    labelHelpText,
    required,
    disabled,
    readonly,
    error: externalError,
    placeholder = "name@example.com",
    className,
    id,
    size = "md",
    ...props
  }, ref) => {
    const autoId   = React.useId();
    const inputId  = id ?? autoId;
    const errorId  = `${inputId}-error`;

    const [touched,       setTouched]       = React.useState(false);
    const [internalError, setInternalError] = React.useState<string | null>(null);

    const error = externalError ?? (touched ? internalError : null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      onChange?.(v);
      if (touched) setInternalError(validateEmail(v));
    };

    const handleBlur = () => {
      setTouched(true);
      setInternalError(validateEmail(value));
    };

    const shellClass = cn(
      "relative flex w-full items-center rounded-lyra-sm border lyra-body-md transition-colors",
      size === "sm" ? "h-8" : "h-9",
      "bg-lyra-bg-field text-lyra-fg-default",
      // ADA-compliance focus indicator: same focus-visible ring
      // buttons/tabs use (see input.tsx for the fuller comment), applied
      // focus-within since the shell wraps the actual <input>. Per explicit
      // follow-up request, split via our own tracked input-modality
      // attribute (input-modality.ts), NOT `:has(:focus-visible)` — a real,
      // shipped bug in a first attempt at this: `:focus-visible` always
      // matches a text `<input>` regardless of input method (confirmed via
      // user report), so `:has(:focus-visible)` on this wrapper was
      // ALWAYS true whenever its inner `<input>` had focus at all, mouse
      // click included — see input-modality.ts's own fuller comment.
      error
        ? "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-status-critical-strong [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-status-critical-strong/20 border-lyra-status-critical-strong hover:border-lyra-status-critical-strong"
        : "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-border-active/20 border-lyra-border-strong hover:border-lyra-state-border-hover-neutral focus-within:border-lyra-border-active",
      // `pointer-events-none` blocks `:hover` from matching at all — without
      // it, the hover border above would still show on a disabled field.
      disabled && "bg-lyra-bg-disabled border-transparent cursor-not-allowed pointer-events-none",
      readonly && "bg-lyra-bg-surface-canvas cursor-default pointer-events-none"
    );

    return (
      <div className={className}>
        {label && (
          <Label
            label={label} labelFor={inputId}
            labelHelpText={labelHelpText}
            required={required} disabled={disabled} readonly={readonly}
            className="mb-1.5"
          />
        )}

        <div className={shellClass}>
          <input
            ref={ref}
            id={inputId}
            type="email"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className="flex-1 bg-transparent outline-none pl-3 pr-1 truncate placeholder:text-lyra-fg-disabled disabled:cursor-not-allowed"
            {...props}
          />
          <span className={cn(
            "pr-3 flex items-center flex-shrink-0 transition-colors",
            error ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
          )}>
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>

        {error && (
          <p id={errorId} role="alert" className="mt-1.5 lyra-body-sm text-lyra-status-critical-strong flex items-start gap-1">
            <ErrorIcon className="h-4 w-4 shrink-0 mt-px" aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
EmailInput.displayName = "EmailInput";

export { EmailInput };
