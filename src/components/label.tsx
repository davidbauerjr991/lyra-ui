import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Info } from "lucide-react";
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
}

/* ── Component ── */

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      label,
      labelFor,
      labelHelpText,
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

    return (
      <LabelPrimitive.Root
        ref={ref}
        htmlFor={labelFor}
        className={cn(
          "inline-flex items-center gap-1 lyra-label",
          disabled
            ? "text-lyra-fg-disabled"
            : readonly
            ? "text-lyra-fg-secondary"
            : "text-lyra-fg-default",
          className
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
              <Info
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
  }
);

Label.displayName = "Label";

export { Label };
