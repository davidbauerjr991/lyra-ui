import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Check, Minus } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Label } from "./label";

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
  /** Help text shown in a tooltip on the label's info icon */
  labelHelpText?: string;
  /** Marks the field as required — shows asterisk on label */
  required?: boolean;
  /** Marks the field as read-only — affects label styling */
  readonly?: boolean;
}

/* ── CVA definitions ── */

const switchTrackVariants = cva("", {
  variants: {
    size: {
      lg: "h-[24px] w-[40px]",
      sm: "h-[16px] w-[32px]",
    },
  },
  defaultVariants: { size: "lg" },
});

/* Border width — both sizes now use a 1px border (was 2px, shared via a
   hardcoded `border-2` on the root). */
const switchBorderVariants = cva("", {
  variants: {
    size: {
      lg: "border",
      sm: "border",
    },
  },
  defaultVariants: { size: "lg" },
});

const switchThumbVariants = cva("", {
  variants: {
    size: {
      lg: "h-[18px] w-[18px]",
      sm: "h-[12px] w-[12px]",
    },
  },
  defaultVariants: { size: "lg" },
});

const switchThumbTranslateVariants = cva("", {
  variants: {
    size: {
      /* 19px keeps the thumb's 2px gap from the track's outer right edge
         matching its 2px gap from the left edge in the off position below
         (1px border + 1px translate each side) — recomputed from the new
         24x40 track / 18px thumb / 1px border dimensions so the thumb
         doesn't overshoot the track when on. */
      lg: "translate-x-[19px]",
      sm: "translate-x-[17px]",
    },
  },
  defaultVariants: { size: "lg" },
});

/* Off-position translate — was a flat `translate-x-[2px]` for every size;
   both sizes now use 1px. */
const switchThumbOffTranslateVariants = cva("", {
  variants: {
    size: {
      lg: "translate-x-[1px]",
      sm: "translate-x-[1px]",
    },
  },
  defaultVariants: { size: "lg" },
});

const switchIconVariants = cva("", {
  variants: {
    size: {
      lg: "h-3 w-3",
      sm: "h-2.5 w-2.5",
    },
  },
  defaultVariants: { size: "lg" },
});

const switchLabelVariants = cva("", {
  variants: {
    size: {
      lg: "lyra-body-md",
      sm: "lyra-body-md",
    },
  },
  defaultVariants: { size: "lg" },
});

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, checked = false, onCheckedChange, size = "lg", label, labelHelpText, required, readonly, disabled, id, ...props }, ref) => {
  const autoId = React.useId();
  const switchId = id || (label ? autoId : undefined);
  const isOn = checked === true;
  const isIndeterminate = checked === "indeterminate";
  const isCheckedOff = checked === "checked";
  const isOff = checked === false;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      <SwitchPrimitive.Root
        ref={ref}
        id={switchId}
        checked={isOn}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(
          "peer relative inline-flex shrink-0 items-center rounded-full transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",

          /* Size */
          switchTrackVariants({ size }),
          switchBorderVariants({ size }),

          /* ── Track colors ── */
          /* On */
          isOn && [
            "bg-lyra-bg-primary border-lyra-bg-primary",
            !disabled && "hover:bg-lyra-state-hover-primary hover:border-lyra-state-hover-primary",
            !disabled && "active:bg-lyra-state-pressed-primary active:border-lyra-state-pressed-primary",
          ],

          /* Off */
          isOff && [
            "bg-lyra-bg-secondary border-lyra-border-strong",
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
            switchThumbVariants({ size }),

            /* Position */
            isOn ? switchThumbTranslateVariants({ size }) : switchThumbOffTranslateVariants({ size }),

            /* Thumb color */
            isOn ? "bg-lyra-bg-surface-base" : "bg-lyra-fg-secondary"
          )}
        >
          {/* Icons inside thumb */}
          {isOn && (
            <Check className={cn(switchIconVariants({ size }), "text-lyra-bg-primary")} strokeWidth={3} />
          )}
          {isOff && (
            <Minus className={cn(switchIconVariants({ size }), "text-lyra-fg-on-primary")} strokeWidth={3} />
          )}
          {isIndeterminate && (
            <Minus className={cn(switchIconVariants({ size }), "text-lyra-fg-on-primary")} strokeWidth={3} />
          )}
          {isCheckedOff && (
            <Check className={cn(switchIconVariants({ size }), "text-lyra-fg-on-primary")} strokeWidth={3} />
          )}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      {label && (
        <Label
          label={label}
          labelFor={switchId}
          labelHelpText={labelHelpText}
          required={required}
          disabled={disabled}
          readonly={readonly}
          className={switchLabelVariants({ size })}
        />
      )}
    </div>
  );
});
Switch.displayName = "Switch";

export { Switch };
export type { SwitchProps };
