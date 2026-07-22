import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { CircleHelp } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ──
   Was a hand-rolled `<label>` — genuinely is a Radix primitive
   (`@radix-ui/react-label`, unlike `Autocomplete`/`DatePicker`/
   `DateTimePicker`/`PhoneInput`/`Table`/`TimePicker`, which only use Radix
   internally as an implementation detail and were moved out of the "Radix
   Primitives" Storybook category for exactly that reason). Rebuilt on
   `LabelPrimitive.Root` — same "swap internals, keep the same export API"
   playbook used for `Select`/`Accordion`/`Separator`. Radix's `Root` renders
   the same `<label>` element and adds one behavior the hand-rolled version
   didn't have: it guards against a Safari quirk where double-clicking a
   label selects text in whatever's next to it instead of just interacting
   with the associated control. Everything else — `htmlFor` via `labelFor`,
   the required asterisk, the help-text tooltip — is unchanged. */

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The label text */
  label: string;
  /**
   * Associates the label with a form control.
   * Maps to the native `htmlFor` / `for` attribute.
   */
  labelFor?: string;
  /**
   * Help text displayed in a tooltip via an info icon.
   * Hidden when empty or when `disabled` is true.
   */
  labelHelpText?: string;
  /** Shows a required asterisk. Hidden automatically when `disabled` or `readonly`. */
  required?: boolean;
  /** Applies disabled styling and hides both the required indicator and help text. */
  disabled?: boolean;
  /** Applies read-only styling and hides the required indicator (help text remains visible). */
  readonly?: boolean;
  /**
   * Optional second line rendered directly below the label row — a short
   * plain-language description of the field/section, distinct from
   * `labelHelpText` (which surfaces in a tooltip on hover/focus of the help
   * icon rather than always being visible). Hidden when `disabled`. When
   * provided, `Label` renders a wrapping `<div>` around the label row + this
   * text instead of returning the bare `<label>` element directly — every
   * existing consumer that doesn't pass this prop is unaffected.
   */
  supportingText?: string;
}

/* ── Component ── */

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      label,
      labelFor,
      labelHelpText,
      supportingText,
      required = false,
      disabled = false,
      readonly = false,
      className,
      ...props
    },
    ref
  ) => {
    if (!label) return null;

    // Required indicator is hidden when disabled or readonly
    const showRequired = required && !disabled && !readonly;
    // Help text is hidden when disabled
    const showHelp = !!labelHelpText && !disabled;
    // Supporting text is hidden when disabled, same as help text
    const showSupportingText = !!supportingText && !disabled;

    const labelRow = (
      <LabelPrimitive.Root
        ref={ref}
        htmlFor={labelFor}
        className={cn(
          "flex items-center gap-1 lyra-label",
          disabled
            ? "text-lyra-fg-disabled"
            : readonly
            ? "text-lyra-fg-secondary"
            : "text-lyra-fg-default",
          // Only applied here (not the outer wrapper below) — every
          // existing consumer already expects `className` to land on the
          // `<label>` element itself, and this keeps that unchanged
          // whether or not `supportingText` is also passed.
          !showSupportingText && className
        )}
        {...props}
      >
        <span>{label}</span>

        {showRequired && (
          <span
            aria-hidden="true"
            className="text-lyra-status-critical-strong leading-none"
          >
            *
          </span>
        )}

        {showHelp && (
          <Tooltip content={labelHelpText!} placement="right">
            <span className="inline-flex items-center text-lyra-fg-secondary hover:text-lyra-fg-action transition-colors cursor-default">
              <CircleHelp
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="sr-only">{labelHelpText}</span>
            </span>
          </Tooltip>
        )}
      </LabelPrimitive.Root>
    );

    // No supporting text: return the bare `<label>` exactly as before —
    // zero markup change for the vast majority of existing call sites.
    if (!showSupportingText) return labelRow;

    return (
      <div className={cn("flex flex-col", className)}>
        {labelRow}
        <p className="lyra-body-md text-lyra-fg-secondary">{supportingText}</p>
      </div>
    );
  }
);

Label.displayName = "Label";

export { Label };
