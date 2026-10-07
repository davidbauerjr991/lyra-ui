import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../calendar";
import { AllModesDemo, DisabledDatesDemo, LargeCellsDemo, MarkersDemo } from "./Calendar.shared";

/* One page per Calendar variant, shown under "Calendar/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Calendar → Default. "!autodocs" keeps this folder from getting a second
   Docs page. */
const meta: Meta<typeof Calendar> = {
  title: "Headless Primitives/Calendar/Variants",
  component: Calendar,
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => <AllModesDemo />,
};

export const WithDisabledDates: Story = {
  name: "With Disabled Dates",
  render: () => <DisabledDatesDemo />,
};

/* `size="lg"` — 40px day cells and a taller month/year button. */
export const LargeCells: Story = {
  name: "Large Cells",
  render: () => <LargeCellsDemo />,
};

/* `modifiers` — a small colored dot under marked dates; screen readers hear each label. */
export const WithMarkers: Story = {
  name: "With Markers",
  render: () => <MarkersDemo />,
};
