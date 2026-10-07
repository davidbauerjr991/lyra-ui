import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "../date-picker";
import { DATE_HELP_TEXT, daysFromToday } from "./DatePicker.shared";

const meta: Meta<typeof DatePicker> = {
  title: "Custom Primitives/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real DatePicker props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* Every state side by side has its own page under "DatePicker/Variants" — see
   DatePicker.variants.stories.tsx. The range picker has its own title,
   "DateRangePicker". */

/* ── Default — consolidated Default, With Value, Disabled and Readonly into
   one controls-driven story (previously four separate stories). Fully
   controlled, so typing or picking a date really changes it. ── */

interface DatePickerDemoProps {
  value?: "none" | "today";
  size?: "sm" | "md";
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  helpText?: boolean;
  error?: string;
  constraints?: "none" | "next30" | "past30";
  showDaySteppers?: boolean;
  displayFormat?: "numeric" | "medium";
}

function DatePickerDemo({
  value = "none",
  size = "md",
  disabled = false,
  readonly = false,
  required = false,
  helpText = false,
  error = "",
  constraints = "none",
  showDaySteppers = false,
  displayFormat = "numeric",
}: DatePickerDemoProps) {
  const minDate = constraints === "next30" ? daysFromToday(0) : constraints === "past30" ? daysFromToday(-30) : undefined;
  const maxDate = constraints === "next30" ? daysFromToday(30) : constraints === "past30" ? daysFromToday(0) : undefined;
  const [date, setDate] = useState<Date | undefined>(value === "today" ? new Date() : undefined);

  return (
    <div className="w-72">
      <DatePicker
        label="Date"
        labelHelpText={helpText ? DATE_HELP_TEXT : undefined}
        value={date}
        onChange={setDate}
        size={size}
        disabled={disabled}
        readonly={readonly}
        required={required}
        error={error || undefined}
        minDate={minDate}
        maxDate={maxDate}
        showDaySteppers={showDaySteppers}
        displayFormat={displayFormat}
      />
    </div>
  );
}

type DatePickerDemoStory = StoryObj<DatePickerDemoProps>;

export const Default: DatePickerDemoStory = {
  args: {
    value: "none",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
    helpText: false,
    error: "",
    constraints: "none",
    showDaySteppers: false,
    displayFormat: "numeric",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error", "Allowed dates", "Value", "Help text",
        "Size", "Day steppers", "Display format",
        "disabled", "readonly", "required", "error", "constraints", "value", "helpText",
        "size", "showDaySteppers", "displayFormat",
      ],
      sort: "none",
    },
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the field.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Keeps the current value but blocks changes.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds an asterisk to the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    error: {
      name: "Error",
      control: "text",
      description: "Error message from the app (`error`): red field, message below, `aria-invalid`. Separately, typing text that isn't a real date (e.g. 13/45/2026) and leaving the field shows the picker's own message.",
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    constraints: {
      name: "Allowed dates",
      control: "radio",
      options: ["none", "next30", "past30"],
      labels: { none: "Any date", next30: "Next 30 days", past30: "Past 30 days" },
      description: "Earliest and latest date (`minDate` / `maxDate`). Other days are disabled in the calendar, and a typed date outside the range shows an error.",
      table: { category: "Behavior", defaultValue: { summary: "Any date" } },
    },
    value: {
      name: "Value",
      control: "radio",
      options: ["none", "today"],
      labels: { none: "Empty", today: "Today" },
      description: "Starting value. Typing or picking a date changes it.",
      table: { category: "Content", defaultValue: { summary: "none" } },
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip on the label (`labelHelpText`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["md", "sm"],
      labels: { md: "Medium (36px)", sm: "Small (32px)" },
      description: "Field height. Small is for dense contexts.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    showDaySteppers: {
      name: "Day steppers",
      control: "boolean",
      description: "Previous / next day buttons beside the field (`showDaySteppers`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    displayFormat: {
      name: "Display format",
      control: "radio",
      options: ["numeric", "medium"],
      labels: { numeric: "01/04/2026", medium: "Jan 4, 2026" },
      description: "How the date is shown and typed (`displayFormat`).",
      table: { category: "Appearance", defaultValue: { summary: "numeric" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <DatePickerDemo key={JSON.stringify(args)} {...args} />
  ),
};
