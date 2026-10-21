import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AgenticAICard } from "../agentic-ai-card";
import {
  ANSWER_FRAMES,
  JOURNEY_FRAMES,
  JourneySummaryCard,
  KnowledgeBaseAnswerCard,
  CustomerSentimentCard,
  NBA_FRAMES,
  NextBestActionCard,
  PROCESS_FRAMES,
  ProcessAutomationCard,
  RealTimeSummaryCard,
  SENTIMENT_FRAMES,
  SUMMARY_FRAMES,
} from "./AgenticAICard.shared";

/* One page per widget, shown under "AgenticAICard/Widgets" in the sidebar: every frame (state) of the widget,
   side by side, for design review. The interactive playground is AgenticAICard → Default. Each widget is a
   small composition of the parts on "AgenticAICard/Parts". "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof AgenticAICard> = {
  title: "UI/AgenticAICard/Widgets",
  component: AgenticAICard,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;
type Story = StoryObj<typeof AgenticAICard>;

/** One caption per frame, then the card. */
function Frames({ names, children }: { names: readonly string[]; children: (frame: string) => React.ReactNode }) {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))] items-start gap-6">
      {names.map((name) => (
        <div key={name} className="flex flex-col gap-2">
          <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">{name}</span>
          {children(name)}
        </div>
      ))}
    </div>
  );
}

/** How the customer feels right now and why: the reading, its color and the reason. Each reading replaces the last. */
export const CustomerSentiment: Story = {
  name: "Customer Sentiment",
  render: () => <Frames names={SENTIMENT_FRAMES}>{(f) => <CustomerSentimentCard frame={f as (typeof SENTIMENT_FRAMES)[number]} forYou />}</Frames>,
};

/** One concise summary of the contact. Each update replaces the whole text, and what changed is marked for a moment. */
export const RealTimeSummary: Story = {
  name: "Real-Time Summary",
  render: () => <Frames names={SUMMARY_FRAMES}>{(f) => <RealTimeSummaryCard frame={f as (typeof SUMMARY_FRAMES)[number]} forYou />}</Frames>,
};

/** The answer to what was asked, the passages it rests on, the steps to follow and the articles it came from. */
export const KnowledgeBaseAnswer: Story = {
  name: "Knowledge Base Answer",
  render: () => <Frames names={ANSWER_FRAMES}>{(f) => <KnowledgeBaseAnswerCard frame={f as (typeof ANSWER_FRAMES)[number]} forYou />}</Frames>,
};

/** What the customer’s recent contacts add up to, ready before the agent says hello. */
export const JourneySummary: Story = {
  name: "Journey Summary",
  render: () => <Frames names={JOURNEY_FRAMES}>{(f) => <JourneySummaryCard frame={f as (typeof JOURNEY_FRAMES)[number]} forYou />}</Frames>,
};

/** A proactive suggestion for what to say, ask or do next, with the reason and a reply or action ready to use. */
export const NextBestAction: Story = {
  name: "Next Best Action",
  render: () => <Frames names={NBA_FRAMES}>{(f) => <NextBestActionCard frame={f as (typeof NBA_FRAMES)[number]} forYou />}</Frames>,
};

/** Captures what a process needs from the conversation, then runs its tasks in parallel once the agent approves. */
export const ProcessAutomation: Story = {
  name: "Process Automation",
  render: () => (
    <Frames names={PROCESS_FRAMES}>{(f) => <ProcessAutomationCard frame={f as (typeof PROCESS_FRAMES)[number]} forYou />}</Frames>
  ),
};

/** The same widget, opening with the task list instead of the form while it captures. */
export const ProcessAutomationTasksFirst: Story = {
  name: "Process Automation · tasks first",
  render: () => (
    <Frames names={["Capturing"]}>{() => <ProcessAutomationCard frame="Capturing" view="Tasks first" forYou />}</Frames>
  ),
};
