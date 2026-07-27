import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker, DateRangePicker } from "../date-picker";
import type { DateRange } from "../calendar";

const meta: Meta<typeof DatePicker> = {
  title: "Custom Primitives/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/* ── Single date ── */

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div className="w-72">
        <DatePicker
          label="Date"
          value={date}
          onChange={setDate}
          size={args.size}
        />
      </div>
    );
  },
};

export const WithValue: Story = {
  name: "With Value",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="w-72">
        <DatePicker
          label="Date"
          labelHelpText="Select any date."
          value={date}
          onChange={setDate}
          required
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <DatePicker label="Date" value={new Date()} disabled />
    </div>
  ),
};

export const Readonly: Story = {
  render: () => (
    <div className="w-72">
      <DatePicker label="Date" value={new Date()} readonly />
    </div>
  ),
};

/* ── Date range ── */

export const DateRange: StoryObj<{ size: "sm" | "md" }> = {
  name: "Date Range Picker",
  argTypes: {
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
  args: {
    size: "md",
  },
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>();
    return (
      <div className="w-96">
        <DateRangePicker
          label="Date Range"
          value={range}
          onChange={setRange}
          size={args.size}
        />
      </div>
    );
  },
};

export const DateRangeWithValue: Story = {
  name: "Date Range — With Value",
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const [range, setRange] = useState<DateRange | undefined>({ from: today, to: nextWeek });
    return (
      <div className="w-96">
        <DateRangePicker
          label="Date Range"
          labelHelpText="Select start and end dates."
          required
          value={range}
          onChange={setRange}
        />
      </div>
    );
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const [range, setRange] = useState<DateRange | undefined>({ from: today, to: nextWeek });

    return (
      /* Extra bottom padding reserves space so the last calendar opens below */
      <div className="flex flex-col gap-6 max-w-sm pb-[420px]">
        <DatePicker label="Single date" value={date} onChange={setDate} />
        <DatePicker label="Disabled" value={new Date()} disabled />
        <DatePicker label="Readonly" value={new Date()} readonly />
        <DateRangePicker label="Date range" value={range} onChange={setRange} />
      </div>
    );
  },
};
