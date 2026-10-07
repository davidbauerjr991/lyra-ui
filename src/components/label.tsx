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
  /**
   * `id` for the visually hidden copy of `labelHelpText` that a form control
   * can point `aria-describedby` at, so its help is read with the field and
   * not only on hover. Defaults to `${labelFor}-help` when `labelFor` is set;
   * with neither, no hidden copy is rendered (the focusable help button and
   * its tooltip still work). Input, Textarea and Select wire this up for you.
   */
  helpTextId?: string;
}

/* ── Component ── */

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      label,
      labelFor,
      labelHelpText,
      supportingText,
      helpTextId,
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
    // Id of the hidden help-text description (see `helpTextId`)
    const helpId = helpTextId ?? (labelFor ? `${labelFor}-help` : undefined);

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
          // A real (focusable) button, so keyboard users can Tab to the help
          // icon and get the tooltip on focus (Escape closes it). Same size
          // and spacing as the span it replaces; the focus ring only shows on
          // keyboard focus. `aria-label` names it; the help text itself is
          // exposed to the control via `helpTextId` below, not inside the
          // label (it used to be sr-only text in the label, which made the
          // field's accessible name include the whole help sentence).
          <Tooltip content={labelHelpText!} placement="right">
            <button
              type="button"
              aria-label={`More info about ${label}`}
              className="inline-flex items-center rounded-lyra-xs p-[5px] -m-[5px] text-lyra-fg-secondary hover:text-lyra-fg-action transition-colors cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
            >
              <CircleHelp
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
          </Tooltip>
        )}
      </LabelPrimitive.Root>
    );

    // Visually hidden copy of the help text for `aria-describedby`. `sr-only`
    // is absolutely positioned, so it takes no space in the parent's layout.
    const helpDescription =
      showHelp && helpId ? (
        <span id={helpId} className="sr-only">
          {labelHelpText}
        </span>
      ) : null;

    // No supporting text: the `<label>` as before (plus the hidden help
    // description when there is help text and an id to give it).
    if (!showSupportingText) {
      return helpDescription ? (
        <>
          {labelRow}
          {helpDescription}
        </>
      ) : (
        labelRow
      );
    }

    return (
      <div className={cn("flex flex-col", className)}>
        {labelRow}
        {helpDescription}
        <p id={labelFor ? `${labelFor}-supporting` : undefined} className="lyra-body-md text-lyra-fg-secondary">
          {supportingText}
        </p>
      </div>
    );
  }
);

Label.displayName = "Label";

export { Label };
