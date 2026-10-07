import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TimeRangePicker } from "../time-range-picker";
import type { TimeRangeValue } from "../time-range-picker";
import { HELP_TEXT, TimePickerError, formatSelected, timeAt } from "./TimePicker.shared";

const meta: Meta<typeof TimeRangePicker> = {
  title: "Custom Primitives/TimeRangePicker",
  component: TimeRangePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real TimeRangePicker props stay on the Docs page; Default's own
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

/* Every state side by side has its own page under "TimeRangePicker/Variants" —
   see TimeRangePicker.variants.stories.tsx. */

/* ── Default — one controls-driven story. `value`, `help` and `error` are
   story-only args that turn real props on and off (`value`,
   `labelHelpText`, an error style). The demo keeps the picked range in state
   and remounts (via `key`) whenever a control changes. ── */

interface TimeRangePickerDemoProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  label?: string;
  placeholder?: string;
  value?: boolean;
  help?: boolean;
  ampmSelect?: boolean;
  size?: "sm" | "md";
}

function TimeRangePickerDemo({
  disabled = false,
  readonly = false,
  required = false,
  error = false,
  label = "Time range",
  placeholder = "HH:MM AM – HH:MM AM",
  value = false,
  help = false,
  ampmSelect = true,
  size = "md",
}: TimeRangePickerDemoProps) {
  const [range, setRange] = useState<TimeRangeValue | undefined>(
    value ? { from: timeAt(9, 0), to: timeAt(17, 0) } : undefined,
  );
  return (
    <div className="w-72">
      <TimePickerError error={error}>
        <TimeRangePicker
          label={label || undefined}
          labelHelpText={help ? HELP_TEXT : undefined}
          placeholder={placeholder}
          value={range}
          onChange={setRange}
          disabled={disabled}
          readonly={readonly}
          required={required}
          ampmSelect={ampmSelect}
          size={size}
        />
      </TimePickerError>
      {range?.from && range?.to && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          {formatSelected(range.from)}
          {" – "}
          {formatSelected(range.to)}
        </p>
      )}
    </div>
  );
}

type TimeRangePickerDemoStory = StoryObj<TimeRangePickerDemoProps>;

export const Default: TimeRangePickerDemoStory = {
  render: (args) => <TimeRangePickerDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Time range",
    placeholder: "HH:MM AM – HH:MM AM",
    value: false,
    help: false,
    ampmSelect: true,
    size: "md",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error",
        "Label", "Placeholder", "Value", "Help text",
        "AM/PM select", "Size",
        "disabled", "readonly", "required", "error",
        "label", "placeholder", "value", "help",
        "ampmSelect", "size",
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
      description: "Shows the red error style and a \"Required\" message under the field.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field. Clear it for a picker with no label.",
      table: { category: "Content", defaultValue: { summary: "Time range" } },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while no range is picked.",
      table: { category: "Content", defaultValue: { summary: "HH:MM AM – HH:MM AM" } },
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the picker at 9:00 AM – 5:00 PM (`value`). Off starts it empty.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    ampmSelect: {
      name: "AM/PM select",
      control: "boolean",
      description: "Makes AM/PM a dropdown instead of a toggle button in the start and end panels (`ampmSelect`).",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Small is 32px tall, medium is 36px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
  },
};
