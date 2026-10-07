import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../separator";
import { StackedFrame, InlineRow, Text } from "./Separator.shared";

/* One page per Separator variant, shown under "Separator/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Separator → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof Separator> = {
  title: "Custom Primitives/Separator/Variants",
  component: Separator,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  name: "Horizontal",
  render: () => (
    <StackedFrame>
      <Text>Section one</Text>
      <Separator className="my-4" />
      <Text>Section two</Text>
    </StackedFrame>
  ),
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <InlineRow>
      <Text>Item one</Text>
      <Separator orientation="vertical" />
      <Text>Item two</Text>
      <Separator orientation="vertical" />
      <Text>Item three</Text>
    </InlineRow>
  ),
};
