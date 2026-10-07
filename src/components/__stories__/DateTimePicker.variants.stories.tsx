import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker, DateRangeTimePicker } from "../date-time-picker";
import type { DateRangeTimeValue } from "../date-time-picker";
import { SAMPLE_DATE_TIME, SAMPLE_RANGE, SINGLE_FRAME, RANGE_FRAME } from "./DateTimePicker.shared";

const meta: Meta<typeof DateTimePicker> = {
  title: "Custom Primitives/DateTimePicker/Variants",
  component: DateTimePicker,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

/* ── States — every prop-based state side by side (single picker). ── */

export const States: Story = {
  name: "States (Default, Required, Disabled, Read Only)",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <DateTimePicker label="Default" />
      <DateTimePicker label="Required" required />
      <DateTimePicker label="Disabled" value={SAMPLE_DATE_TIME()} disabled />
      <DateTimePicker label="Read only" value={SAMPLE_DATE_TIME()} readonly />
    </div>
  ),
};

function WithValueDemo() {
  const [date, setDate] = useState<Date | undefined>(SAMPLE_DATE_TIME());
  return (
    <div className={SINGLE_FRAME}>
      <DateTimePicker
        label="Scheduled time"
        labelHelpText="Select the date and time for the scheduled action."
        required
        value={date}
        onChange={setDate}
      />
    </div>
  );
}

export const WithValue: Story = {
  name: "With Value",
  render: () => <WithValueDemo />,
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <DateTimePicker label="Small (32px)" size="sm" />
      <DateTimePicker label="Medium (36px, default)" size="md" />
    </div>
  ),
};

/* ── Range with time ── */

function RangeDemo() {
  const [range, setRange] = useState<DateRangeTimeValue | undefined>();
  return (
    <div className={RANGE_FRAME}>
      <DateRangeTimePicker
        label="Date & Time Range"
        labelHelpText="Select start and end date with time."
        value={range}
        onChange={setRange}
      />
    </div>
  );
}

export const RangeWithTime: Story = {
  name: "Date Range with Time",
  render: () => <RangeDemo />,
};

export const RangeStates: Story = {
  name: "Date Range States (Required, Disabled, Read Only)",
  render: () => (
    <div className="flex flex-col gap-4 w-[500px]">
      <DateRangeTimePicker label="Required" required />
      <DateRangeTimePicker label="Disabled" value={SAMPLE_RANGE()} disabled />
      <DateRangeTimePicker label="Read only" value={SAMPLE_RANGE()} readonly />
    </div>
  ),
};
