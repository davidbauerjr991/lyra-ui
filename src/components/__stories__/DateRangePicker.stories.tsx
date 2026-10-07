import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateRangePicker } from "../date-range-picker";
import type { DateRange } from "../calendar";
import { RANGE_HELP_TEXT, nextWeekRange, daysFromToday } from "./DatePicker.shared";

const meta: Meta<typeof DateRangePicker> = {
  title: "Custom Primitives/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real DateRangePicker props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* Every state side by side has its own page under "DateRangePicker/Variants" —
   see DateRangePicker.variants.stories.tsx. */

/* ── Default — consolidated Date Range Picker, Date Range — With Value, and
   the disabled/readonly states into one controls-driven story. Fully
   controlled, so typing or picking dates really changes it. ── */

interface DateRangePickerDemoProps {
  value?: "none" | "nextWeek";
  size?: "sm" | "md";
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  helpText?: boolean;
  error?: string;
  constraints?: "none" | "past90" | "next90";
  presets?: boolean;
}

function DateRangePickerDemo({
  value = "none",
  size = "md",
  disabled = false,
  readonly = false,
  required = false,
  helpText = false,
  error = "",
  constraints = "none",
  presets = false,
}: DateRangePickerDemoProps) {
  const minDate = constraints === "past90" ? daysFromToday(-90) : constraints === "next90" ? daysFromToday(0) : undefined;
  const maxDate = constraints === "past90" ? daysFromToday(0) : constraints === "next90" ? daysFromToday(90) : undefined;
  const [range, setRange] = useState<DateRange | undefined>(value === "nextWeek" ? nextWeekRange() : undefined);

  return (
    <div className="w-96">
      <DateRangePicker
        label="Date Range"
        labelHelpText={helpText ? RANGE_HELP_TEXT : undefined}
        value={range}
        onChange={setRange}
        size={size}
        disabled={disabled}
        readonly={readonly}
        required={required}
        error={error || undefined}
        minDate={minDate}
        maxDate={maxDate}
        presets={presets}
      />
    </div>
  );
}

type DateRangePickerDemoStory = StoryObj<DateRangePickerDemoProps>;

export const Default: DateRangePickerDemoStory = {
  args: {
    value: "none",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
    helpText: false,
    error: "",
    constraints: "none",
    presets: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error", "Allowed dates", "Presets", "Value", "Help text", "Size",
        "disabled", "readonly", "required", "error", "constraints", "presets", "value", "helpText", "size",
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
      description: "Error message from the app (`error`): red field, message below, `aria-invalid`. Separately, typing text that isn't a full range of real dates (e.g. 10/05/2026 alone) and leaving the field shows the picker's own message.",
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    constraints: {
      name: "Allowed dates",
      control: "radio",
      options: ["none", "past90", "next90"],
      labels: { none: "Any date", past90: "Last 90 days", next90: "Next 90 days" },
      description: "Earliest and latest date (`minDate` / `maxDate`). Other days are disabled in the calendar, presets outside the range are disabled, and a typed range outside it shows an error.",
      table: { category: "Behavior", defaultValue: { summary: "Any date" } },
    },
    presets: {
      name: "Presets",
      control: "boolean",
      description: "Quick ranges beside the calendar: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month (`presets`). Pass your own list to customize.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    value: {
      name: "Value",
      control: "radio",
      options: ["none", "nextWeek"],
      labels: { none: "Empty", nextWeek: "Today to next week" },
      description: "Starting value. Typing or picking dates changes it.",
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
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <DateRangePickerDemo key={JSON.stringify(args)} {...args} />
  ),
};
