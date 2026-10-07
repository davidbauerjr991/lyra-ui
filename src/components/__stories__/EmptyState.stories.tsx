import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../empty-state";
import { EmptyFrame, sampleIcon } from "./EmptyState.shared";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;

/* Variants (with icon, with description, both tones) each have their own page
   under "EmptyState/Variants" — see EmptyState.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With icon and With description into a single playground.
   EmptyState is display-only, so there is no state to wire. ── */

interface EmptyStateDemoProps {
  showIcon?: boolean;
  message?: string;
  description?: string;
  tone?: "disabled" | "secondary";
}

function EmptyStateDemo({
  showIcon = false,
  message = "No data available",
  description = "",
  tone = "secondary",
}: EmptyStateDemoProps) {
  return (
    <EmptyFrame>
      <EmptyState
        icon={showIcon ? sampleIcon : undefined}
        message={message}
        description={description || undefined}
        tone={tone}
      />
    </EmptyFrame>
  );
}

type EmptyStateDemoStory = StoryObj<typeof EmptyStateDemo>;

export const Default: EmptyStateDemoStory = {
  args: {
    showIcon: false,
    message: "No data available",
    description: "",
    tone: "secondary",
  },
  parameters: {
    controls: {
      include: [
        "showIcon",
        "message",
        "description",
        "tone",
        "Icon",
        "Message",
        "Description",
        "Tone",
      ],
      sort: "none",
    },
  },
  argTypes: {
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Shows an icon above the message (`icon`).",
      table: { category: "Content" },
    },
    message: {
      name: "Message",
      control: "text",
      description: "Main line of text (`message`).",
      table: { category: "Content" },
    },
    description: {
      name: "Description",
      control: "text",
      description: "Smaller secondary line under the message (`description`). Empty for none.",
      table: { category: "Content" },
    },
    tone: {
      name: "Tone",
      control: "radio",
      options: ["secondary", "disabled"],
      description:
        "Secondary is the readable default. Disabled is the most muted tone and is below WCAG contrast for real text.",
      table: { category: "Appearance" },
    },
  },
  render: (args) => <EmptyStateDemo key={JSON.stringify(args)} {...args} />,
};
