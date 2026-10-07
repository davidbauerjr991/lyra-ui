import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "../date-range-picker";
import {
  DateRangePickerVariantsDemo, DateRangePickerErrorDemo, DateRangePickerConstraintsDemo,
  DateRangePickerPresetsDemo, DateRangePickerWithTimeDemo,
} from "./DatePicker.shared";

/* One page per DateRangePicker variant, shown under "DateRangePicker/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is DateRangePicker → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof DateRangePicker> = {
  title: "Custom Primitives/DateRangePicker/Variants",
  component: DateRangePicker,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => <DateRangePickerVariantsDemo />,
};

export const ErrorState: Story = {
  name: "Error",
  render: () => <DateRangePickerErrorDemo />,
};

export const Constraints: Story = {
  name: "Constraints",
  render: () => <DateRangePickerConstraintsDemo />,
};

export const Presets: Story = {
  name: "Presets",
  render: () => <DateRangePickerPresetsDemo />,
};

export const WithTime: Story = {
  name: "With Time",
  render: () => <DateRangePickerWithTimeDemo />,
};
