import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker, DateRangeTimePicker } from "../date-time-picker";
import type { DateRangeTimeValue } from "../date-time-picker";

const meta: Meta<typeof DateTimePicker> = {
  title: "Custom Primitives/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div className="w-72 pb-[440px]">
        <DateTimePicker label="Date & Time" value={date} onChange={setDate} size={args.size} />
      </div>
    );
  },
};

export const WithValue: Story = {
  name: "With Value",
  render: () => {
    const initial = new Date();
    initial.setHours(14, 30, 0, 0);
    const [date, setDate] = useState<Date | undefined>(initial);
    return (
      <div className="w-72 pb-[440px]">
        <DateTimePicker
          label="Scheduled time"
          labelHelpText="Select the date and time for the scheduled action."
          required
          value={date}
          onChange={setDate}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const d = new Date(); d.setHours(9, 0, 0, 0);
    return (
      <div className="w-72">
        <DateTimePicker label="Date & Time" value={d} disabled />
      </div>
    );
  },
};

export const Readonly: Story = {
  render: () => {
    const d = new Date(); d.setHours(9, 0, 0, 0);
    return (
      <div className="w-72">
        <DateTimePicker label="Date & Time" value={d} readonly />
      </div>
    );
  },
};

export const RangeWithTime: StoryObj<{ size: "sm" | "md" }> = {
  name: "Date Range with Time",
  argTypes: {
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
  args: {
    size: "md",
  },
  render: (args) => {
    const [range, setRange] = useState<DateRangeTimeValue | undefined>();
    return (
      <div className="w-[500px] pb-[520px]">
        <DateRangeTimePicker
          label="Date & Time Range"
          labelHelpText="Select start and end date with time."
          value={range}
          onChange={setRange}
          size={args.size}
        />
      </div>
    );
  },
};
