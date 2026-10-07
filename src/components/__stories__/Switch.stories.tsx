import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../switch";
import { cn } from "../../lib/utils";
import { HELP_TEXT, REQUIRED_ERROR } from "./Switch.shared";

const meta: Meta<typeof Switch> = {
  title: "Headless Primitives/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real Switch props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    disabled: { control: "boolean" },
    size: { control: "radio", options: ["lg", "sm"] },
    label: { control: "text" },
  },
};

export default meta;

/* Every state at both sizes, on light and dark surfaces, has its own page under
   "Switch/Variants" — see Switch.variants.stories.tsx. */

/* ── Default — consolidated Interactive, Large — All States and Small — All
   States into one controls-driven story. `on`, `help`, `label` and
   `withIcon` are story-only args: `on` is the Switch's starting `checked`
   value, `help` turns `labelHelpText` on and off. Clicking the switch really
   toggles it. The demo keeps that value in state and remounts
   (via `key`) whenever a control changes. ── */

interface SwitchDemoProps {
  on?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  label?: string;
  help?: boolean;
  size?: "lg" | "sm";
  withIcon?: boolean;
  labelPosition?: "left" | "right";
  fullWidth?: boolean;
}

function SwitchDemo({
  on = false,
  disabled = false,
  readonly = false,
  required = false,
  label = "Switch Label",
  help = false,
  size = "lg",
  withIcon = true,
  labelPosition = "right",
  fullWidth = false,
}: SwitchDemoProps) {
  const [checked, setChecked] = useState(on);
  // Required and not switched on yet: show the error under the switch.
  const showError = required && !checked && !disabled && !readonly;
  return (
    // `Switch` has no prop to hide the check/minus in its thumb, so "With icon"
    // off hides the thumb's SVG from here (the label's help icon sits outside
    // the switch button, so it stays).
    <div className={cn("flex flex-col", fullWidth && "w-full", !withIcon && "[&_[role=switch]_svg]:hidden")}>
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
        readonly={readonly}
        required={required}
        label={label || undefined}
        labelHelpText={help ? HELP_TEXT : undefined}
        size={size}
        // `Switch` always puts its label on the right; its `className` lands on
        // the outer row, so reversing that row moves the label to the left.
        className={cn(
          labelPosition === "left" && "flex-row-reverse",
          // Full width: the row fills its container and pushes the label and
          // switch to opposite ends. Otherwise it hugs its content.
          fullWidth ? "w-full justify-between" : "self-start",
        )}
        error={showError ? REQUIRED_ERROR : undefined}
      />
    </div>
  );
}

type SwitchDemoStory = StoryObj<SwitchDemoProps>;

export const Default: SwitchDemoStory = {
  render: (args) => <SwitchDemo key={JSON.stringify(args)} {...args} />,
  args: {
    on: false,
    disabled: false,
    readonly: false,
    required: false,
    label: "Switch Label",
    help: false,
    size: "lg",
    withIcon: true,
    labelPosition: "right",
    fullWidth: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "On", "Disabled", "Read-only", "Required", "Label", "Help text", "Size", "With icon", "Label position", "Full width",
        "on", "disabled", "readonly", "required", "label", "help", "size", "withIcon", "labelPosition", "fullWidth",
      ],
      sort: "none",
    },
  },
  argTypes: {
    on: {
      name: "On",
      control: "boolean",
      description: "Whether the switch starts on (`checked`). Clicking it toggles it.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the switch and stops it toggling.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Shows the current value but blocks changes: muted track, default cursor, still focusable. Different from Disabled, which dims it.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label, and shows a red error (`error`) under the switch, with a red outline on the track, until it is switched on.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text next to the switch. Clear it for a switch with no label.",
      table: { category: "Content", defaultValue: { summary: "Switch Label" } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["lg", "sm"],
      description: "Large is 40×24px, small is 32×16px.",
      table: { category: "Appearance", defaultValue: { summary: "lg" } },
    },
    withIcon: {
      name: "With icon",
      control: "boolean",
      description: "Shows the check or minus inside the thumb. Off hides it.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    labelPosition: {
      name: "Label position",
      control: "radio",
      options: ["left", "right"],
      description: "Which side of the switch the label sits on. Needs a label.",
      if: { arg: "label", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "right" } },
    },
    fullWidth: {
      name: "Full width",
      control: "boolean",
      description: "Stretches the row to the full width of its container and pushes the label and switch to opposite ends.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
};
