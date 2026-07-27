import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimePicker } from "../time-picker";
import { TimeRangePicker } from "../time-picker";

const meta: Meta = {
  title: "Custom Primitives/TimePicker",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: StoryObj<{ size: "sm" | "md" }> = {
  name: "Time Picker",
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
  args: {
    size: "md",
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <div className="w-56">
        <TimePicker
          label="Time"
          value={value}
          onChange={setValue}
          size={args.size}
        />
        {value && (
          <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            Selected: {value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        )}
      </div>
    );
  },
};

export const WithDefaultValue: Story = {
  name: "With default value",
  render: () => {
    const defaultTime = new Date();
    defaultTime.setHours(9, 30, 0, 0);
    const [value, setValue] = useState<Date | undefined>(defaultTime);
    return (
      <div className="w-56">
        <TimePicker
          label="Meeting time"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-56">
      <TimePicker label="Default" />
      <TimePicker label="Disabled" disabled />
      <TimePicker label="Read Only" readonly value={(() => { const d = new Date(); d.setHours(14,30); return d; })()} />
      <TimePicker label="Required" required />
    </div>
  ),
};

export const Range: StoryObj<{ size: "sm" | "md" }> = {
  name: "Time Range Picker",
  argTypes: {
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
  args: {
    size: "md",
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <div className="w-72">
        <TimeRangePicker
          label="Time range"
          value={value}
          onChange={setValue}
          size={args.size}
        />
        {value?.from && value?.to && (
          <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            {value.from.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            {" – "}
            {value.to.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        )}
      </div>
    );
  },
};
