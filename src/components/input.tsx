import * as React from "react";
import { ErrorIcon } from "./icons/error-icon";
import { cn } from "../lib/utils";
import { Label } from "./label";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label text displayed above the input */
  label?: string;
  /** Help text shown in a tooltip on the label's info icon */
  labelHelpText?: string;
  /** Marks the field as required — shows asterisk on label */
  required?: boolean;
  /** Marks the field as read-only — affects label styling */
  readonly?: boolean;
  /** Error message — triggers error styling when provided */
  error?: string;
  /** Icon rendered at the start (left) of the input */
  startIcon?: React.ReactNode;
  /** Icon rendered at the end (right) of the input */
  endIcon?: React.ReactNode;
  /**
   * Field height. "md" (36px, default) matches every other field in the
   * library; "sm" (32px) is for dense contexts — a table toolbar's quick
   * search/filter row, a compact form — where the default height reads too
   * tall next to 32px buttons/chips. Doesn't touch icon size/position or
   * horizontal padding, only the field's own height.
   */
  size?: "sm" | "md";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      labelHelpText,
      required,
      readonly,
      error,
      disabled,
      id,
      startIcon,
      endIcon,
      size = "md",
      ...props
    },
    ref
  ) => {
    const autoId = React.useId();
    const inputId = id || autoId;

    return (
      <div className={className}>
        {label && (
          <Label
            label={label}
            labelFor={inputId}
            labelHelpText={labelHelpText}
            required={required}
            disabled={disabled}
            readonly={readonly}
            className="mb-1.5"
          />
        )}

        <div className="relative flex items-center">
          {startIcon && (
            <span className="absolute left-3 flex items-center pointer-events-none">
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            readOnly={readonly}
            className={cn(
              size === "sm" ? "h-8" : "h-9",
              "w-full rounded-lyra-sm border lyra-body-md transition-colors",
              "placeholder:text-lyra-fg-disabled",
              // Per explicit follow-up request ("I want the focus state of
              // the input to be what it was before BUT have the focus
              // border when a user is not using the mouse (keyboard
              // only)"): two DISTINCT focus treatments layered on top of
              // each other. NOT split via `:focus-visible` — a real, shipped
              // bug in a first attempt at this: `:focus-visible` ALWAYS
              // matches on a text-type `<input>` regardless of whether
              // focus came from a click or Tab (a documented browser
              // heuristic — see input-modality.ts's own fuller comment for
              // why), so `:not(:focus-visible)` never actually applied and
              // a plain mouse click still showed the bold keyboard ring
              // (confirmed via user report on `SearchInput`). Split instead
              // on our own tracked `data-lyra-input-modality` attribute
              // (input-modality.ts) — `html[data-lyra-input-modality=
              // keyboard] &:focus` is the bold outer ring this session's
              // earlier focus-ring unification added (ADA-compliance pass,
              // same treatment Button/Tab use); `html:not([data-lyra-
              // input-modality=keyboard]) &:focus` restores the ORIGINAL
              // pre-unification ring this field had (a soft 20%-opacity
              // inset ring) for mouse/programmatic focus.
              "[html[data-lyra-input-modality=keyboard]_&:focus]:outline-none [html[data-lyra-input-modality=keyboard]_&:focus]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus]:ring-offset-2",
              "[html:not([data-lyra-input-modality=keyboard])_&:focus]:outline-none [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-2",
              startIcon ? "pl-9" : "pl-3",
              endIcon ? "pr-9" : "pr-3",
              error
                ? "border-lyra-status-critical-strong bg-lyra-status-critical-subtle text-lyra-fg-default [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-status-critical-strong [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-status-critical-strong/20"
                : readonly
                ? "border-lyra-border-strong bg-lyra-bg-surface-canvas text-lyra-fg-default cursor-default pointer-events-none"
                : "border-lyra-border-strong bg-lyra-bg-field text-lyra-fg-default hover:border-lyra-state-border-hover-neutral focus:border-lyra-border-active [html[data-lyra-input-modality=keyboard]_&:focus]:ring-lyra-border-focus [html:not([data-lyra-input-modality=keyboard])_&:focus]:ring-lyra-border-active/20",
              disabled &&
                // `pointer-events-none` (matching the `readonly` branch
                // above) blocks `:hover` from matching at all — without it,
                // the plain `hover:border-lyra-state-border-hover-neutral`
                // above still fires on a disabled field (native `disabled`
                // only blocks focus/typing, not `:hover`), showing a border
                // that's supposed to be `border-transparent`.
                "bg-lyra-bg-disabled border-transparent text-lyra-fg-disabled cursor-not-allowed pointer-events-none"
            )}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          {endIcon && (
            <span className="absolute right-3 flex items-center pointer-events-none">
              {endIcon}
            </span>
          )}
        </div>

        {error && (
          <div
            id={`${inputId}-error`}
            role="alert"
            className="flex items-center gap-1 mt-1.5"
          >
            <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
            <span className="lyra-body-sm text-lyra-status-critical-strong">
              {error}
            </span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
export type { InputProps };
