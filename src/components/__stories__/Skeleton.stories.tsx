import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../skeleton";
import { withControlsFor } from "./storyControls";

const meta: Meta<typeof Skeleton> = {
  title: "Custom Primitives/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/* ── Default — the interactive playground: how many lines, how tall, how far apart, how long the last one is. ── */
export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: { lines: 3, size: "md", gap: "md", lastLineWidth: 55 },
  argTypes: {
    lines: {
      name: "Lines",
      control: { type: "range", min: 1, max: 8, step: 1 },
      description: "Number of placeholder lines (`lines`).",
      table: { category: "Content", defaultValue: { summary: "3" } },
    },
    lastLineWidth: {
      name: "Last line width",
      control: { type: "range", min: 20, max: 100, step: 5 },
      description: "Width of the last line, in percent (`lastLineWidth`). 100 makes every line equal.",
      table: { category: "Content", defaultValue: { summary: "55" } },
    },
    size: {
      name: "Line height",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Height of each line (`size`): sm 8px, md 10px, lg 14px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    gap: {
      name: "Gap",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Space between lines (`gap`).",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Skeleton {...args} />
    </div>
  ),
});
