import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../lib/utils";
import { Label } from "./label";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Show error/destructive styling */
  error?: boolean;
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Help text shown in a tooltip on the label's info icon */
  labelHelpText?: string;
  /** Supporting line shown under the label. Only rendered when `label` is set. */
  secondaryText?: string;
  /** Marks the field as required — shows asterisk on label */
  required?: boolean;
  /**
   * Marks the field as read-only — visually muted, not interactive,
   * preserves current checked state.
   */
  readonly?: boolean;
  /** Additional class applied to the wrapper div (only used when label is provided) */
  wrapperClassName?: string;
  /**
   * Render as a purely visual, non-focusable check indicator (an
   * `aria-hidden` <span>, same look) instead of a real checkbox — for use
   * INSIDE another interactive element that already owns the checked
   * semantics, e.g. a listbox option with `aria-selected` (Select's
   * multi-select rows, TagPicker). A real checkbox nested in a button is an
   * interactive-inside-interactive violation (axe nested-interactive) and
   * invalid HTML.
   */
  decorative?: boolean;
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, error, label, labelHelpText, secondaryText, required, readonly, wrapperClassName, disabled, id, onCheckedChange, decorative, ...props }, ref) => {
  const autoId = React.useId();
  const checkboxId = id || (label ? autoId : undefined);

  const indicator = (
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current" aria-hidden="true">
      {props.checked === "indeterminate" ? (
        <Minus className="h-3 w-3" strokeWidth={3} />
      ) : (
        <Check className="h-3 w-3" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  );

  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      disabled={disabled}
      // Block changes in readonly mode without visually disabling
      onCheckedChange={readonly ? undefined : onCheckedChange}
      aria-readonly={readonly || undefined}
      aria-invalid={error || undefined}
      aria-describedby={label && secondaryText ? `${checkboxId}-secondary` : undefined}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-lyra-xs border transition-colors",

        /* Readonly — locked but still legible: a flat canvas-colored box with a
           solid soft border, and a full-strength secondary-gray mark when
           checked. Deliberately NOT the faded, gray-filled look disabled uses
           (`disabled:opacity-40` + `bg-lyra-bg-disabled`), so the two read as
           different things: read-only = "you can't change this", disabled =
           "this doesn't apply". No hover/active effects, cursor default. Its
           keyboard focus ring is the same one every checkbox gets (below). */
        readonly && [
          "border-lyra-border-soft bg-lyra-bg-surface-canvas cursor-default",
          "data-[state=checked]:bg-lyra-fg-secondary data-[state=checked]:border-lyra-fg-secondary data-[state=checked]:text-lyra-fg-inverse",
          "data-[state=indeterminate]:bg-lyra-fg-secondary data-[state=indeterminate]:border-lyra-fg-secondary data-[state=indeterminate]:text-lyra-fg-inverse",
          "hover:border-lyra-border-soft active:border-lyra-border-soft active:bg-lyra-bg-surface-canvas",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
        ],

        /* Normal states (when not readonly) */
        !readonly && [
          /* Unchecked default */
          error
            ? "border-lyra-status-critical-strong bg-lyra-bg-control disabled:bg-lyra-bg-disabled"
            : "border-lyra-border-strong bg-lyra-bg-control disabled:bg-lyra-bg-disabled",
          /* Unchecked hover/pressed */
          error
            ? "hover:border-lyra-status-critical-strong active:border-lyra-status-critical-strong active:bg-lyra-state-pressed"
            : "hover:border-lyra-state-border-hover-neutral hover:bg-lyra-state-hover active:border-lyra-state-border-hover-neutral active:bg-lyra-state-pressed",
          /* Focus */
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          /* Checked */
          error
            ? [
                "data-[state=checked]:bg-lyra-bg-destructive data-[state=checked]:border-lyra-bg-destructive data-[state=checked]:text-lyra-fg-on-primary",
                "data-[state=checked]:hover:bg-lyra-state-hover-destructive data-[state=checked]:hover:border-lyra-state-hover-destructive",
                "data-[state=checked]:active:bg-lyra-state-pressed-destructive data-[state=checked]:active:border-lyra-state-pressed-destructive",
              ]
            : [
                "data-[state=checked]:bg-lyra-bg-primary data-[state=checked]:border-lyra-bg-primary data-[state=checked]:text-lyra-fg-on-primary",
                "data-[state=checked]:hover:bg-lyra-state-hover-primary data-[state=checked]:hover:border-lyra-state-hover-primary",
                "data-[state=checked]:active:bg-lyra-state-pressed-primary data-[state=checked]:active:border-lyra-state-pressed-primary",
              ],
          /* Indeterminate */
          error
            ? [
                "data-[state=indeterminate]:bg-lyra-bg-destructive data-[state=indeterminate]:border-lyra-bg-destructive data-[state=indeterminate]:text-lyra-fg-on-primary",
                "data-[state=indeterminate]:hover:bg-lyra-state-hover-destructive data-[state=indeterminate]:hover:border-lyra-state-hover-destructive",
                "data-[state=indeterminate]:active:bg-lyra-state-pressed-destructive data-[state=indeterminate]:active:border-lyra-state-pressed-destructive",
              ]
            : [
                "data-[state=indeterminate]:bg-lyra-bg-primary data-[state=indeterminate]:border-lyra-bg-primary data-[state=indeterminate]:text-lyra-fg-on-primary",
                "data-[state=indeterminate]:hover:bg-lyra-state-hover-primary data-[state=indeterminate]:hover:border-lyra-state-hover-primary",
                "data-[state=indeterminate]:active:bg-lyra-state-pressed-primary data-[state=indeterminate]:active:border-lyra-state-pressed-primary",
              ],
        ],

        /* Disabled (applies on top of everything) */
        "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-lyra-border-soft",
        /* With a `label`, the keyboard focus ring moves from the 16px box to
           the whole box + label row (the wrapper below draws it), so the
           focus target is as big as the click target. */
        label && !decorative && "focus-visible:ring-0 focus-visible:ring-offset-0",
        /* Decorative mode renders a <span>, which never matches :disabled —
           mirror the same treatment off Radix's own data-disabled attr. */
        decorative && "inline-flex items-center justify-center data-[disabled]:opacity-40",

        className
      )}
      {...props}
      // Decorative: Radix Slot merges everything above onto the <span>
      // below (same classes/data-state, so it looks identical) — a span has
      // no tabindex, so nothing here is focusable, and aria-hidden drops it
      // from the accessibility tree.
      asChild={decorative || undefined}
    >
      {decorative ? (
        <span aria-hidden="true">{indicator}</span>
      ) : (
        indicator
      )}
    </CheckboxPrimitive.Root>
  );

  if (!label) return checkbox;

  const labelElement = (
    <Label
      label={label}
      labelFor={checkboxId}
      labelHelpText={labelHelpText}
      required={required}
      disabled={disabled}
      readonly={readonly}
      // `readonly` still suppresses the required asterisk (Label's own
      // behavior) — only overriding the color here, since Label's
      // default readonly treatment mutes it to `text-lyra-fg-secondary`
      // and a readonly checkbox's label should read the same as a
      // normal one.
      className={cn("lyra-body-md leading-5", readonly && "text-lyra-fg-default")}
    />
  );

  return (
    // `align-top`: an inline-flex box's baseline comes from its first item,
    // and the checkbox button's own baseline shifts once the check/minus
    // icon renders inside it, which nudged the surrounding line box
    // (24.5px unchecked vs 24px checked). Top alignment takes the baseline
    // out of the equation; it has no effect when the wrapper is a flex/grid
    // item, which is where it normally sits.
    <div
      className={cn(
        "inline-flex items-start gap-2 align-top rounded-lyra-sm",
        // Keyboard focus only (:focus-visible): a mouse click shows no ring.
        // Rings the box, the label and any secondary text together.
        "has-[[role=checkbox]:focus-visible]:ring-2 has-[[role=checkbox]:focus-visible]:ring-lyra-border-focus has-[[role=checkbox]:focus-visible]:ring-offset-2",
        wrapperClassName
      )}
    >
      <div className="flex items-center h-5">{checkbox}</div>
      {secondaryText ? (
        <div>
          {labelElement}
          <span
            id={`${checkboxId}-secondary`}
            className={cn(
              "lyra-body-sm block",
              disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary"
            )}
          >
            {secondaryText}
          </span>
        </div>
      ) : (
        labelElement
      )}
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export type { CheckboxProps };
