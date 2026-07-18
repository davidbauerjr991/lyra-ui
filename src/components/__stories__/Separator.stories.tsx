import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../separator";

const meta = {
  title: "Custom Primitives/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Horizontal ── */

export const Horizontal: Story = {
  name: "Horizontal",
  render: () => (
    <div className="w-96 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5">
      <span className="lyra-body-md text-lyra-fg-default">Section one</span>
      <Separator className="my-4" />
      <span className="lyra-body-md text-lyra-fg-default">Section two</span>
    </div>
  ),
};

/* ── Vertical ── */

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <div className="flex h-6 items-center gap-3">
      <span className="lyra-body-md text-lyra-fg-default">Item one</span>
      <Separator orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item two</span>
      <Separator orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item three</span>
    </div>
  ),
};
