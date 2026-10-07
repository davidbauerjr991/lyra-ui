import type { Meta, StoryObj } from "@storybook/react";
import { TimeRangePicker } from "../time-range-picker";
import { TimePickerError, timeAt } from "./TimePicker.shared";

/* One page per TimeRangePicker variant, shown under "TimeRangePicker/Variants"
   in the sidebar. Static references for design review; the interactive
   playground is TimeRangePicker → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof TimeRangePicker> = {
  title: "Custom Primitives/TimeRangePicker/Variants",
  component: TimeRangePicker,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TimeRangePicker>;

/* ── All Variants — every state in one column. ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <TimeRangePicker label="Default" />
      <TimeRangePicker label="With value" value={{ from: timeAt(9, 0), to: timeAt(17, 0) }} />
      <TimeRangePicker label="Disabled" disabled />
      <TimeRangePicker label="Read-only" readonly value={{ from: timeAt(9, 0), to: timeAt(17, 0) }} />
      <TimeRangePicker label="Required" required />
      <TimePickerError error>
        <TimeRangePicker label="Error" />
      </TimePickerError>
      <TimeRangePicker label="With AM/PM select" ampmSelect />
      <TimeRangePicker label="Small" size="sm" />
    </div>
  ),
};
