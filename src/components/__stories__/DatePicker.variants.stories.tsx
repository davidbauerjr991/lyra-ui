import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../date-picker";
import {
  DatePickerVariantsDemo, DatePickerErrorDemo, DatePickerConstraintsDemo,
  DatePickerDayStepperDemo, DatePickerMediumFormatDemo, DatePickerWithTimeDemo,
} from "./DatePicker.shared";

/* One page per DatePicker variant, shown under "DatePicker/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is DatePicker → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof DatePicker> = {
  title: "Custom Primitives/DatePicker/Variants",
  component: DatePicker,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => <DatePickerVariantsDemo />,
};

export const ErrorState: Story = {
  name: "Error",
  render: () => <DatePickerErrorDemo />,
};

export const Constraints: Story = {
  name: "Constraints",
  render: () => <DatePickerConstraintsDemo />,
};

export const DaySteppers: Story = {
  name: "Day Steppers",
  render: () => <DatePickerDayStepperDemo />,
};

export const MediumFormat: Story = {
  name: "Medium Format",
  render: () => <DatePickerMediumFormatDemo />,
};

export const WithTime: Story = {
  name: "With Time",
  render: () => <DatePickerWithTimeDemo />,
};
