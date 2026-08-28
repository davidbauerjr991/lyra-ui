import type { Meta, StoryObj } from "@storybook/react";
import { AgentChat } from "../agent-chat";
import { ContainerHeader } from "../container-header";

/* ── AgentChat stories ──
   The "Agent Chat" app panel body from the Agent Next Gen AppHeader's
   top-right app area — faithful to the reference (agent-next-gen-v2),
   where this panel renders the shared blank "Nothing here yet."
   placeholder (centered text, no icon, no invented chat UI). Its real home
   is the shared app panel in AgentNextGenTemplate.stories.tsx; this story
   shows it inside a plain panel-shaped frame with a `ContainerHeader`
   mimicking that context (bordered — the placeholder body has no header
   row of its own to carry the divider). */

const meta: Meta<typeof AgentChat> = {
  title: "UI/Agent Chat",
  component: AgentChat,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof AgentChat>;

export const Default: Story = {
  render: () => (
    <div className="flex h-[480px] w-[360px] flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      <ContainerHeader title="Agent Chat" bordered />
      <AgentChat />
    </div>
  ),
};
