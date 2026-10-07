import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker, DateRangeTimePicker } from "../date-time-picker";
import type { DateRangeTimeValue } from "../date-time-picker";
import { SAMPLE_DATE_TIME, SAMPLE_RANGE, SINGLE_FRAME, RANGE_FRAME } from "./DateTimePicker.shared";

const meta: Meta<typeof DateTimePicker> = {
  title: "Custom Primitives/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (field states, with a value, range with time, sizes) each have
   their own page under "DateTimePicker/Variants" — see
   DateTimePicker.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates the old Default,
   With Value, Disabled, Readonly and Date Range with Time stories: "Picker"
   switches between a single date-time and a range, "Field state" covers
   required / disabled / read-only, and "Starting value" covers With Value.
   Fully controlled, so picking a date updates the field. ── */

type PickerMode = "single" | "range";
type FieldState = "default" | "required" | "disabled" | "readOnly";

interface DateTimePickerDemoProps {
  mode?: PickerMode;
  fieldState?: FieldState;
  startingValue?: "none" | "filled";
  label?: string;
  labelHelpText?: string;
  placeholder?: string;
  size?: "sm" | "md";
}

function DateTimePickerDemo({
  mode = "single",
  fieldState = "default",
  startingValue = "none",
  label = "Date & Time",
  labelHelpText = "",
  placeholder = "",
  size = "md",
}: DateTimePickerDemoProps) {
  const [date, setDate] = useState<Date | undefined>(
    startingValue === "filled" ? SAMPLE_DATE_TIME() : undefined
  );
  const [range, setRange] = useState<DateRangeTimeValue | undefined>(
    startingValue === "filled" ? SAMPLE_RANGE() : undefined
  );

  const shared = {
    label,
    labelHelpText: labelHelpText || undefined,
    placeholder: placeholder || undefined,
    required: fieldState === "required",
    disabled: fieldState === "disabled",
    readonly: fieldState === "readOnly",
    size,
  };

  return mode === "single" ? (
    <div className={SINGLE_FRAME}>
      <DateTimePicker {...shared} value={date} onChange={setDate} />
    </div>
  ) : (
    <div className={RANGE_FRAME}>
      <DateRangeTimePicker {...shared} value={range} onChange={setRange} />
    </div>
  );
}

type DateTimePickerDemoStory = StoryObj<typeof DateTimePickerDemo>;

export const Default: DateTimePickerDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so the
  // Docs page's autodocs table still lists every real DateTimePicker prop.
  // Storybook matches `include` against each control's display `name`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: [
        "mode", "fieldState", "startingValue", "label", "labelHelpText", "placeholder", "size",
        "Picker", "Field state", "Starting value", "Label", "Label help text", "Placeholder", "Size",
      ],
      sort: "none",
    },
  },
  args: {
    mode: "single",
    fieldState: "default",
    startingValue: "none",
    label: "Date & Time",
    labelHelpText: "",
    placeholder: "",
    size: "md",
  },
  argTypes: {
    mode: {
      name: "Picker",
      control: "radio",
      options: ["single", "range"],
      description: "A single date and time (`DateTimePicker`) or a start and end date with times (`DateRangeTimePicker`).",
      table: { category: "Behavior" },
    },
    fieldState: {
      name: "Field state",
      control: "radio",
      options: ["default", "required", "disabled", "readOnly"],
      description: "Editable, required (label indicator), disabled (non-interactive), or read-only (shows the value, locked).",
      table: { category: "Behavior" },
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["none", "filled"],
      description: "Empty, or pre-filled with today's date and a time (a range for the range picker). Disabled and read-only fields look best filled.",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Field label (`label`).",
      table: { category: "Content" },
    },
    labelHelpText: {
      name: "Label help text",
      control: "text",
      description: "Optional help text beside the label (`labelHelpText`). Leave empty for none.",
      table: { category: "Content" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Input placeholder (`placeholder`). Empty uses the component's own default.",
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Field height — sm (32px) for dense contexts, md (36px, default).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo whenever a control changes — `useState`'s
    // initial value only applies on first mount.
    <DateTimePickerDemo key={JSON.stringify(args)} {...args} />
  ),
};
