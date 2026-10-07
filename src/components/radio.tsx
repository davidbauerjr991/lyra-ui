import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../lib/utils";
import { Label } from "./label";

/* ── RadioGroup ── */

interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled usage */
  defaultValue?: string;
  /** Called when the selected value changes */
  onValueChange?: (value: string) => void;
  /** Shared name attribute for all radios in the group */
  name?: string;
  /** Disable all radios in the group */
  disabled?: boolean;
  /** Label displayed above the radio group */
  label?: string;
  /** Help text shown in a tooltip on the label */
  labelHelpText?: string;
  /** Shows required asterisk on the label */
  required?: boolean;
  /** Layout orientation of the radio items */
  orientation?: "vertical" | "horizontal";
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue, onValueChange, name, disabled, label, labelHelpText, required, orientation = "vertical", children,
     // Pulled out of `props` so they land on the real role="radiogroup"
     // element below, not the outer layout <div> (where they'd be ignored)
     // — lets a wrapper like RadioButtonGroup name the group and wire its
     // own error message.
     "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid,
     ...props }, ref) => {
    const labelId = React.useId();

    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        {label && (
          <Label
            id={labelId}
            label={label}
            labelHelpText={labelHelpText}
            required={required}
            disabled={disabled}
            className="mb-1.5"
          />
        )}
        <RadioGroupPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          name={name}
          disabled={disabled}
          // `orientation` is deliberately NOT passed to Radix: any value
          // restricts the roving-focus keys to one axis (vertical = ↑/↓ only),
          // so ←/→ did nothing. Left unset, all four arrows move + select,
          // like a native radio group. Layout comes from the class below.
          // Home/End also select (Radix only moves focus for them).
          onKeyDownCapture={(e) => {
            if (e.key !== "Home" && e.key !== "End") return;
            const radios = Array.from(
              e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="radio"]:not(:disabled)')
            );
            const target = e.key === "Home" ? radios[0] : radios[radios.length - 1];
            if (!target) return;
            e.preventDefault();
            e.stopPropagation();
            target.focus();
            if (target.getAttribute("aria-checked") !== "true") target.click();
          }}
          aria-labelledby={label ? labelId : ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          className={cn(
            "flex",
            orientation === "horizontal" ? "flex-row gap-6" : "flex-col gap-2"
          )}
        >
          {children}
        </RadioGroupPrimitive.Root>
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

/* ── RadioGroupItem ── */

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** Value for this radio option */
  value: string;
  /** Label content — usually plain text, but any node works (e.g. a
   *  stacked title + description block for a richer option card) since
   *  this just renders straight into a `<span>` either way. */
  label?: React.ReactNode;
}

const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, value, label, disabled: itemDisabled, id, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id || autoId;
    // A consumer that hides the circle (`[&_[role=radio]]:sr-only`) or brings
    // its own focus ring in `className` (`has-[[role=radio]:focus-visible]:ring-2`,
    // ...) already anchors the keyboard ring somewhere visible, so the default
    // ring around radio + label steps aside rather than doubling up.
    const ownFocus = typeof className === "string" && (/focus-visible\]?:ring/.test(className) || className.includes("sr-only"));
    const showLabelRing = !!label && !ownFocus;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "group/radio flex items-center gap-1.5",
          // Keyboard focus ring wraps radio + label together (`:focus-visible`
          // only, so mouse clicks show nothing). The circle's own ring is
          // dropped when there's a label — see the Item classes below.
          showLabelRing && "rounded-lyra-sm has-[[role=radio]:focus-visible]:ring-2 has-[[role=radio]:focus-visible]:ring-lyra-border-focus has-[[role=radio]:focus-visible]:ring-offset-2",
          itemDisabled ? "cursor-not-allowed" : "cursor-pointer",
          className
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          id={inputId}
          value={value}
          disabled={itemDisabled}
          className={cn(
            "peer group relative flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full border transition-colors outline-none",
            /* Unchecked — border color/width matches Checkbox's enabled/hover states (checkbox.tsx) */
            "data-[state=unchecked]:border-lyra-border-strong data-[state=unchecked]:bg-lyra-bg-control",
            "data-[state=unchecked]:hover:border-lyra-state-border-hover-neutral",
            "data-[state=unchecked]:active:border-lyra-state-border-hover-neutral data-[state=unchecked]:active:bg-lyra-state-pressed",
            /* Checked */
            "data-[state=checked]:border-lyra-bg-primary data-[state=checked]:bg-lyra-bg-primary",
            "data-[state=checked]:hover:border-lyra-state-hover-primary data-[state=checked]:hover:bg-lyra-state-hover-primary",
            "data-[state=checked]:active:border-lyra-state-pressed-primary data-[state=checked]:active:bg-lyra-state-pressed-primary",
            /* Disabled — must come after checked/unchecked to win */
            "disabled:cursor-not-allowed",
            "disabled:data-[state=unchecked]:border-lyra-border-disabled disabled:data-[state=unchecked]:bg-lyra-bg-disabled",
            // Unchecked+disabled+hover — without this, the plain
            // `data-[state=unchecked]:hover:border-lyra-state-border-hover-
            // neutral` above still fires on a disabled unchecked radio
            // (native `disabled` doesn't block `:hover`). The checked case
            // right below already had this override; unchecked didn't.
            "disabled:data-[state=unchecked]:hover:border-lyra-border-disabled",
            "disabled:data-[state=checked]:border-lyra-border-disabled disabled:data-[state=checked]:bg-lyra-bg-disabled",
            "disabled:data-[state=checked]:hover:border-lyra-border-disabled disabled:data-[state=checked]:hover:bg-lyra-bg-disabled",
            /* Focus */
            "focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
            // With a label the wrapper rings box + label instead
            showLabelRing && "focus-visible:ring-0 focus-visible:ring-offset-0"
          )}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            {/* group-disabled targets the parent button's :disabled state */}
            <span className="h-1.5 w-1.5 rounded-full bg-lyra-fg-on-primary group-disabled:bg-lyra-fg-disabled" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          /* peer-disabled targets the button above; drives label text color */
          <span className="lyra-body-md text-lyra-fg-default peer-disabled:text-lyra-fg-disabled">
            {label}
          </span>
        )}
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };
