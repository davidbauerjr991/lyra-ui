import type { Meta, StoryObj } from "@storybook/react";
import { AICard } from "../ai-card";
import {
  ALL_CARDS,
  AutosummaryCard,
  AutosummaryPageCard,
  JourneySummaryCard,
  SelfServiceSummaryCard,
  TransferSummaryCard,
  ApprovalRequestCard,
  ArtifactsCard,
  ConversationTopicsCard,
  SentimentNegativeCard,
  SentimentNeutralCard,
  SentimentPositiveCard,
  SuggestedQuestionsCard,
  DecisionTreeCard,
  ChecklistCard,
  ChecklistItemsCard,
  InformationNeededCard,
  CustomerInfoAvailableCard,
  CustomerInfoCard,
  ScheduleAppointmentStartCard,
  ScheduleAppointmentCard,
  ChecklistCompleteCard,
  RateCopilotStartCard,
  RateCopilotCard,
  RateCopilotThanksCard,
} from "./AICard.shared";

/* One page per card, shown under "AICard/Variants" in the sidebar, modelled on the contact details
   panel. "!autodocs" keeps this folder from getting a second Docs page. The interactive playground is
   AICard -> Default. Buttons and icons in these examples are static stand-ins and do nothing. */
const meta: Meta<typeof AICard> = {
  title: "UI/AICard/Variants",
  component: AICard,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;
type Story = StoryObj<typeof AICard>;

const Frame = ({ children }: { children: React.ReactNode }) => <div className="w-full">{children}</div>;

export const Autosummary: Story = {
  name: "Autosummary",
  render: () => <Frame><AutosummaryCard /></Frame>,
};

export const AutosummaryPage: Story = {
  name: "Autosummary Page",
  render: () => <Frame><AutosummaryPageCard /></Frame>,
};

export const JourneySummary: Story = {
  name: "Journey Summary",
  render: () => <Frame><JourneySummaryCard /></Frame>,
};

export const SelfServiceSummary: Story = {
  name: "Self Service Summary",
  render: () => <Frame><SelfServiceSummaryCard /></Frame>,
};

export const TransferSummary: Story = {
  name: "Transfer Summary",
  render: () => <Frame><TransferSummaryCard /></Frame>,
};

export const ApprovalRequest: Story = {
  name: "~New - Approval Request",
  render: () => <Frame><ApprovalRequestCard /></Frame>,
};

export const ArtifactsEmpty: Story = {
  name: "~New - Artifacts (Empty)",
  render: () => <Frame><ArtifactsCard /></Frame>,
};

export const ArtifactsPopulated: Story = {
  name: "~New - Artifacts (Populated)",
  render: () => <Frame><ArtifactsCard o={{ populated: true }} /></Frame>,
};

export const ConversationTopics: Story = {
  name: "Conversation Topics",
  render: () => <Frame><ConversationTopicsCard /></Frame>,
};

export const SentimentNegative: Story = {
  name: "Sentiment Negative",
  render: () => <Frame><SentimentNegativeCard /></Frame>,
};

export const SentimentNeutral: Story = {
  name: "Sentiment Neutral",
  render: () => <Frame><SentimentNeutralCard /></Frame>,
};

export const SentimentPositive: Story = {
  name: "Sentiment Positive",
  render: () => <Frame><SentimentPositiveCard /></Frame>,
};

export const SuggestedQuestions: Story = {
  name: "Suggested Questions",
  render: () => <Frame><SuggestedQuestionsCard /></Frame>,
};

export const DecisionTree: Story = {
  name: "Decision Tree",
  render: () => <Frame><DecisionTreeCard /></Frame>,
};

export const Checklist: Story = {
  name: "Checklist",
  render: () => <Frame><ChecklistCard /></Frame>,
};

export const ChecklistItems: Story = {
  name: "Checklist Items",
  render: () => <Frame><ChecklistItemsCard /></Frame>,
};

export const InformationNeeded: Story = {
  name: "Information Needed",
  render: () => <Frame><InformationNeededCard /></Frame>,
};

export const CustomerInfoAvailable: Story = {
  name: "Customer Info Available",
  render: () => <Frame><CustomerInfoAvailableCard /></Frame>,
};

export const CustomerInfo: Story = {
  name: "Customer Info",
  render: () => <Frame><CustomerInfoCard /></Frame>,
};

export const ScheduleAppointmentStart: Story = {
  name: "Schedule Appointment (Start)",
  render: () => <Frame><ScheduleAppointmentStartCard /></Frame>,
};

export const ScheduleAppointment: Story = {
  name: "Schedule Appointment",
  render: () => <Frame><ScheduleAppointmentCard /></Frame>,
};

export const ChecklistComplete: Story = {
  name: "Checklist Complete",
  render: () => <Frame><ChecklistCompleteCard /></Frame>,
};

export const RateCopilotStart: Story = {
  name: "Rate Copilot Start",
  render: () => <Frame><RateCopilotStartCard /></Frame>,
};

export const RateCopilot: Story = {
  name: "Rate Copilot Rating",
  render: () => <Frame><RateCopilotCard /></Frame>,
};

export const RateCopilotThanks: Story = {
  name: "Rate Copilot Thanks",
  render: () => <Frame><RateCopilotThanksCard /></Frame>,
};

export const AllCards: Story = {
  name: "All cards",
  render: () => (
    <div className="flex w-full flex-col gap-6">
      {ALL_CARDS.map(([name, Card]) => (
        <Card key={name} />
      ))}
    </div>
  ),
};
