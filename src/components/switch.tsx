import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Check, Minus } from "lucide-react";
import { cn } from "../lib/utils";

/* ── Types ── */

interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    "checked" | "onCheckedChange"
  > {
  /** Current state: true (on), false (off), "indeterminate", or "checked" (off with checkmark) */
  checked?: boolean | "indeterminate" | "checked";
  /** Called when the switch is toggled */
  onCheckedChange?: (checked: boolean) => void;
  /** Size variant */
  size?: "sm" | "lg";
  /** Label text displayed next to the switch */
  label?: string;
}

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, checked = false, onCheckedChange, size = "lg", label, disabled, ...props }, ref) => {
  const isOn = checked === true;
  const isIndeterminate = checked === "indeterminate";
  const isCheckedOff = checked === "checked";
  const isOff = checked === false;

  const lg = size === "lg";

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      <SwitchPrimitive.Root
        ref={ref}
        checked={isOn}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(
          "peer relative inline-flex shrink-0 items-center rounded-full border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",

          /* Size */
          lg ? "h-[28px] w-[52px]" : "h-[20px] w-[36px]",

          /* ── Track colors ── */
          /* On */
          isOn && [
            "bg-lyra-bg-primary border-lyra-bg-primary",
            !disabled && "hover:bg-lyra-state-hover-primary hover:border-lyra-state-hover-primary",
            !disabled && "active:bg-lyra-state-pressed-primary active:border-lyra-state-pressed-primary",
          ],

          /* Off */
          isOff && [
            "bg-lyra-bg-secondary border-lyra-border-default",
            !disabled && "hover:border-lyra-border-strong hover:bg-lyra-state-hover",
            !disabled && "active:border-lyra-border-strong active:bg-lyra-state-pressed",
          ],

          /* Indeterminate */
          isIndeterminate && "bg-lyra-bg-secondary border-lyra-border-default",

          /* Checked off */
          isCheckedOff && "bg-lyra-bg-secondary border-lyra-border-default",

          /* Disabled */
          disabled && "opacity-40 cursor-not-allowed"
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none flex items-center justify-center rounded-full shadow-sm transition-transform",

            /* Size */
            lg ? "h-[20px] w-[20px]" : "h-[14px] w-[14px]",

            /* Position */
            isOn
              ? lg ? "translate-x-[24px]" : "translate-x-[16px]"
              : "translate-x-[2px]",

            /* Thumb color */
            isOn ? "bg-white" : "bg-lyra-fg-secondary"
          )}
        >
          {/* Icons inside thumb */}
          {isOn && (
            <Check className={cn(lg ? "h-3 w-3" : "h-2.5 w-2.5", "text-lyra-bg-primary")} strokeWidth={3} />
          )}
          {isOff && (
            <Minus className={cn(lg ? "h-3 w-3" : "h-2.5 w-2.5", "text-white")} strokeWidth={3} />
          )}
          {isIndeterminate && (
            <Minus className={cn(lg ? "h-3 w-3" : "h-2.5 w-2.5", "text-white")} strokeWidth={3} />
          )}
          {isCheckedOff && (
            <Check className={cn(lg ? "h-3 w-3" : "h-2.5 w-2.5", "text-white")} strokeWidth={3} />
          )}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      {label && (
        <span
          className={cn(
            lg ? "lyra-body-md" : "lyra-body-sm",
            disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
});
Switch.displayName = "Switch";

export { Switch };
export type { SwitchProps };
