import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "../time-picker";
import { HELP_TEXT, ERROR_TEXT, formatSelected, timeAt } from "./TimePicker.shared";

const meta: Meta<typeof TimePicker> = {
  title: "Custom Primitives/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real TimePicker props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md"] },
  },
};

export default meta;

/* Every state side by side has its own page
   under "TimePicker/Variants" — see TimePicker.variants.stories.tsx. */

/* ── Default — consolidated Time Picker and With default value into one
   controls-driven story. `value` and `help` are story-only args: `value`
   starts the picker at 9:30 AM, `help` turns `labelHelpText` on and off. The
   demo keeps the picked time in state and remounts (via `key`) whenever a
   control changes. ── */

interface TimePickerDemoProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  label?: string;
  placeholder?: string;
  value?: boolean;
  help?: boolean;
  menu?: boolean;
  ampmSelect?: boolean;
  size?: "sm" | "md";
  allowed?: "any" | "business";
  step?: 15 | 30 | 60;
  iconPlacement?: "inside" | "outside";
}

function TimePickerDemo({
  disabled = false,
  readonly = false,
  required = false,
  error = false,
  label = "Time",
  placeholder = "HH:MM AM",
  value = false,
  help = false,
  menu = false,
  ampmSelect = true,
  size = "md",
  allowed = "any",
  step = 30,
  iconPlacement = "inside",
}: TimePickerDemoProps) {
  const [time, setTime] = useState<Date | undefined>(value ? timeAt(9, 30) : undefined);
  return (
    <div className="w-56">
      <TimePicker
        label={label || undefined}
        labelHelpText={help ? HELP_TEXT : undefined}
        placeholder={placeholder}
        value={time}
        onChange={setTime}
        disabled={disabled}
        readonly={readonly}
        required={required}
        size={size}
        menu={menu}
        ampmSelect={ampmSelect}
        error={error ? ERROR_TEXT : undefined}
        minTime={allowed === "business" ? timeAt(9) : undefined}
        maxTime={allowed === "business" ? timeAt(17) : undefined}
        step={step}
        iconPlacement={iconPlacement}
      />
      {time && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Selected: {formatSelected(time)}</p>
      )}
    </div>
  );
}

type TimePickerDemoStory = StoryObj<TimePickerDemoProps>;

export const Default: TimePickerDemoStory = {
  render: (args) => <TimePickerDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Time",
    placeholder: "HH:MM AM",
    value: false,
    help: false,
    menu: false,
    ampmSelect: true,
    size: "md",
    allowed: "any",
    step: 30,
    iconPlacement: "inside",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error", "Allowed times",
        "Label", "Placeholder", "Value", "Help text",
        "Menu", "Step", "AM/PM select", "Size", "Icon placement",
        "disabled", "readonly", "required", "error", "allowed",
        "label", "placeholder", "value", "help",
        "menu", "step", "ampmSelect", "size", "iconPlacement",
      ],
      sort: "none",
    },
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the picker and stops it opening or typing.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Locks the picker and mutes the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Error message from the app (`error`): red field, \"Required\" under it, `aria-invalid`. Separately, typing text that isn't a time (e.g. 25:99) and leaving the field, or pressing Enter, shows the picker's own message.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    allowed: {
      name: "Allowed times",
      control: "radio",
      options: ["any", "business"],
      labels: { any: "Any time", business: "9:00 AM – 5:00 PM" },
      description: "Earliest and latest time (`minTime` / `maxTime`). The Menu list only shows times in range, and a typed or spun time outside it shows an error.",
      table: { category: "Behavior", defaultValue: { summary: "Any time" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field. Clear it for a picker with no label.",
      table: { category: "Content", defaultValue: { summary: "Time" } },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while no time is picked.",
      table: { category: "Content", defaultValue: { summary: "HH:MM AM" } },
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the picker at 9:30 AM (`value`). Off starts it empty.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    menu: {
      name: "Menu",
      control: "boolean",
      description: "Opens a scrollable list of times instead of the hour/minute spinners (`menu`). Typing a time still works; Arrow Up/Down open and move through the list and Enter picks.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    step: {
      name: "Step",
      control: "radio",
      options: [15, 30, 60],
      labels: { 15: "15 min", 30: "30 min", 60: "1 hour" },
      description: "Minutes between times in the Menu list (`step`).",
      if: { arg: "menu", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "30" } },
    },
    ampmSelect: {
      name: "AM/PM select",
      control: "boolean",
      description: "Makes AM/PM a dropdown instead of a toggle button in the hour/minute panel (`ampmSelect`). Not used while Menu is on.",
      if: { arg: "menu", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Small is 32px tall, medium is 36px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    iconPlacement: {
      name: "Icon placement",
      control: "radio",
      options: ["inside", "outside"],
      labels: { inside: "Inside the field", outside: "Outside (old layout)" },
      description: "Where the clock icon sits (`iconPlacement`). Outside keeps the old layout, where a narrow field pushes the clock past its right edge; agent-next-gen-v3's quick-reply form uses it.",
      table: { category: "Appearance", defaultValue: { summary: "inside" } },
    },
  },
};
