import type { Meta, StoryObj } from "@storybook/react";
import { ShowMore } from "../show-more";
import { withControlsFor } from "./storyControls";

const meta: Meta<typeof ShowMore> = {
  title: "Headless Primitives/Show More",
  component: ShowMore,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ShowMore>;

/* ── Default — the interactive playground: trigger text, text size, weight, chevron side, starting state. ── */
export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: { label: "Show more", openLabel: "Show less", textSize: "md", emphasis: false, chevronPosition: "end", chevronDirection: "down", defaultOpen: false },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "The trigger text (`label`).",
      table: { category: "Content" },
    },
    openLabel: {
      name: "Label when open",
      control: "text",
      description: "The trigger text while open (`openLabel`), e.g. \"Show less\". Empty keeps the label.",
      table: { category: "Content" },
    },
    textSize: {
      name: "Text size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the trigger text and chevron (`textSize`): sm 12px, md 14px, lg 16px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    emphasis: {
      name: "Bold",
      control: "boolean",
      description: "Bolder trigger text (`emphasis`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    chevronPosition: {
      name: "Chevron position",
      control: "radio",
      options: ["start", "end"],
      description: "Which side of the label the chevron is on (`chevronPosition`).",
      table: { category: "Appearance", defaultValue: { summary: "end" } },
    },
    chevronDirection: {
      name: "Chevron direction",
      control: "radio",
      options: ["down", "up", "right", "left"],
      description: "Which way the chevron points while closed (`chevronDirection`). Down turns up when open; up, right and left turn down. Unset: right with the chevron at the start, down at the end.",
      table: { category: "Appearance", defaultValue: { summary: "down (end) / right (start)" } },
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the content is open on first render (`defaultOpen`).",
      table: { category: "State", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    <div className="w-full max-w-md">
      {/* key: Starts open only applies on first render, so remount when it changes */}
      <ShowMore key={String(args.defaultOpen)} {...args}>
        <p className="mt-2 lyra-body-md text-lyra-fg-default">
          The extra content. It folds away under the trigger and opens with a short height animation; keyboard users open it with Enter or Space.
        </p>
      </ShowMore>
    </div>
  ),
});
