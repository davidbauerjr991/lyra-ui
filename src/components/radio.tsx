import * as React from "react";
import { cn } from "../lib/utils";

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
  /** Layout orientation of the radio items */
  orientation?: "vertical" | "horizontal";
}

interface RadioGroupContextValue {
  name?: string;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue, onValueChange, name, disabled, label, orientation = "vertical", children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;

    const handleChange = React.useCallback(
      (val: string) => {
        if (!controlled) setInternalValue(val);
        onValueChange?.(val);
      },
      [controlled, onValueChange]
    );

    return (
      <RadioGroupContext.Provider value={{ name, value: currentValue, disabled, onValueChange: handleChange }}>
        <div ref={ref} className={cn("flex flex-col", className)} {...props}>
          {label && (
            <span
              className={cn(
                "lyra-label block mb-1.5",
                disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
              )}
            >
              {label}
            </span>
          )}
          <div
            role="radiogroup"
            className={cn(
              "flex",
              orientation === "horizontal" ? "flex-row gap-6" : "flex-col gap-2"
            )}
          >
            {children}
          </div>
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

/* ── RadioGroupItem ── */

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** Value for this radio option */
  value: string;
  /** Label text */
  label?: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, label, disabled: itemDisabled, id, ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext);
    const autoId = React.useId();
    const inputId = id || autoId;
    const isDisabled = itemDisabled || ctx.disabled;
    const isChecked = ctx.value === value;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "flex items-center gap-2.5",
          isDisabled ? "cursor-not-allowed" : "cursor-pointer",
          className
        )}
      >
        <span className="relative flex-shrink-0">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            name={ctx.name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => ctx.onValueChange?.(value)}
            className="sr-only peer"
            {...props}
          />
          {/* Outer circle */}
          <span
            className={cn(
              "flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] transition-colors",
              /* Unchecked */
              !isChecked && !isDisabled && "border-lyra-border-default bg-lyra-bg-control peer-hover:border-lyra-border-strong peer-active:border-lyra-border-strong peer-active:bg-lyra-state-pressed",
              /* Checked */
              isChecked && !isDisabled && "border-lyra-bg-primary bg-lyra-bg-primary peer-hover:border-lyra-state-hover-primary peer-hover:bg-lyra-state-hover-primary peer-active:border-lyra-state-pressed-primary peer-active:bg-lyra-state-pressed-primary",
              /* Disabled unchecked */
              !isChecked && isDisabled && "border-lyra-border-disabled bg-lyra-bg-disabled",
              /* Disabled checked */
              isChecked && isDisabled && "border-lyra-border-disabled bg-lyra-bg-disabled",
              /* Focus */
              "peer-focus-visible:ring-2 peer-focus-visible:ring-lyra-border-focus peer-focus-visible:ring-offset-2"
            )}
          >
            {/* Inner dot */}
            {isChecked && (
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  isDisabled ? "bg-lyra-fg-disabled" : "bg-lyra-fg-on-primary"
                )}
              />
            )}
          </span>
        </span>
        {label && (
          <span
            className={cn(
              "lyra-body-md",
              isDisabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
