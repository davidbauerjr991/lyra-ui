import type { Meta, StoryObj } from "@storybook/react";
import { AgenticAICard } from "../agentic-ai-card";
import type { AICardColor } from "../ai-card";
import type { AgenticStatus } from "../agentic-ai-card";
import type { AvatarColor } from "../avatar";
import { AVATAR_COLORS } from "./Avatar.shared";
import {
  ANSWER_FRAMES,
  JOURNEY_FRAMES,
  JourneySummaryCard,
  KnowledgeBaseAnswerCard,
  CustomerSentimentCard,
  NBA_FRAMES,
  NextBestActionCard,
  PROCESS_FRAMES,
  PROCESS_VIEWS,
  ProcessAutomationCard,
  RealTimeSummaryCard,
  SENTIMENT_FRAMES,
  STATUS_OPTIONS,
  SUMMARY_FRAMES,
  WIDGET_NAMES,
  type AnswerFrame,
  type JourneyFrame,
  type NbaFrame,
  type ProcessFrame,
  type ProcessView,
  type SentimentFrame,
  type SummaryFrame,
  type WidgetName,
} from "./AgenticAICard.shared";
import { withControlsFor } from "./storyControls";

/* ── UI / AgenticAICard ──
   The interactive playground. "Widget" picks one of the cards on the "AgenticAICard/Widgets" page and the
   frame control that follows it picks that widget's state; the rest override the card's own look. The
   widgets are compositions of the parts shown on "AgenticAICard/Parts". Buttons do nothing. */

interface AgenticDemoProps {
  widget?: WidgetName;
  sentimentFrame?: SentimentFrame;
  summaryFrame?: SummaryFrame;
  answerFrame?: AnswerFrame;
  journeyFrame?: JourneyFrame;
  nbaFrame?: NbaFrame;
  processFrame?: ProcessFrame;
  processView?: ProcessView;
  showDetail?: boolean;
  status?: "auto" | AgenticStatus;
  showSubhead?: boolean;
  forYou?: boolean;
  color?: AICardColor;
  avatarColor?: AvatarColor;
  accordion?: boolean;
  defaultOpen?: boolean;
  showDismiss?: boolean;
  showOpenWindow?: boolean;
  density?: "comfortable" | "compact";
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  width?: "max-width" | "full";
}

function AgenticAICardDemo({
  widget = "Customer Sentiment",
  sentimentFrame = "Neutral",
  summaryFrame = "Live",
  answerFrame = "Answer",
  journeyFrame = "Journey found",
  nbaFrame = "Say or ask",
  processFrame = "Capturing",
  processView = "Guided form",
  showDetail = true,
  status = "auto",
  showSubhead = true,
  forYou = true,
  color = "white",
  avatarColor,
  accordion = true,
  defaultOpen = true,
  showDismiss = false,
  showOpenWindow = false,
  density = "compact",
  radius = "md",
  width = "max-width",
}: AgenticDemoProps) {
  const card = {
    statusOverride: status,
    showSubhead,
    forYou,
    color,
    // Sentiment picks its own avatar color per frame unless one is chosen here.
    avatarColor,
    accordion,
    defaultOpen,
    density,
    radius,
    onDismiss: showDismiss ? () => {} : undefined,
    onOpenInNewWindow: showOpenWindow ? () => {} : undefined,
  };
  // `key` remounts when the open-state controls change so "Starts open" takes effect.
  const key = `${widget}-${accordion}-${defaultOpen}`;
  return (
    // Max width caps the card at 350px (a narrow side panel); full takes the whole width available.
    <div className={width === "max-width" ? "w-full max-w-[350px]" : "w-full"}>
      {widget === "Customer Sentiment" && <CustomerSentimentCard key={key} frame={sentimentFrame} {...card} />}
      {widget === "Real-Time Summary" && <RealTimeSummaryCard key={key} frame={summaryFrame} {...card} />}
      {widget === "Knowledge Base Answer" && <KnowledgeBaseAnswerCard key={key} frame={answerFrame} {...card} />}
      {widget === "Journey Summary" && <JourneySummaryCard key={key} frame={journeyFrame} showDetail={showDetail} {...card} />}
      {widget === "Next Best Action" && <NextBestActionCard key={key} frame={nbaFrame} {...card} />}
      {widget === "Process Automation" && <ProcessAutomationCard key={key} frame={processFrame} view={processView} {...card} />}
    </div>
  );
}

const meta: Meta<typeof AgenticAICardDemo> = {
  title: "UI/AgenticAICard",
  component: AgenticAICard as never,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;
type Story = StoryObj<typeof AgenticAICardDemo>;

export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: {
    widget: "Customer Sentiment",
    sentimentFrame: "Neutral",
    summaryFrame: "Live",
    answerFrame: "Answer",
    journeyFrame: "Journey found",
    nbaFrame: "Say or ask",
    processFrame: "Capturing",
    processView: "Guided form",
    showDetail: true,
    status: "auto",
    showSubhead: true,
    forYou: true,
    color: "white",
    accordion: true,
    defaultOpen: true,
    showDismiss: false,
    showOpenWindow: false,
    density: "compact",
    radius: "md",
    width: "max-width",
  },
  argTypes: {
    widget: {
      name: "Widget",
      control: "select",
      options: [...WIDGET_NAMES],
      description: "Which widget to show. These are the cards on the Widgets page.",
      table: { category: "Content", defaultValue: { summary: "Customer Sentiment" } },
    },
    sentimentFrame: {
      name: "Frame",
      control: "radio",
      options: [...SENTIMENT_FRAMES],
      description: "Which reading the card shows.",
      if: { arg: "widget", eq: "Customer Sentiment" },
      table: { category: "Content" },
    },
    summaryFrame: {
      name: "Frame",
      control: "radio",
      options: [...SUMMARY_FRAMES],
      description: "Nothing yet, a summary that just changed, or the finished summary.",
      if: { arg: "widget", eq: "Real-Time Summary" },
      table: { category: "Content" },
    },
    answerFrame: {
      name: "Frame",
      control: "select",
      options: [...ANSWER_FRAMES],
      description: "Which state the answer is in.",
      if: { arg: "widget", eq: "Knowledge Base Answer" },
      table: { category: "Content" },
    },
    journeyFrame: {
      name: "Frame",
      control: "radio",
      options: [...JOURNEY_FRAMES],
      description: "Which state the journey is in.",
      if: { arg: "widget", eq: "Journey Summary" },
      table: { category: "Content" },
    },
    nbaFrame: {
      name: "Frame",
      control: "select",
      options: [...NBA_FRAMES],
      description: "Which state the suggestion is in.",
      if: { arg: "widget", eq: "Next Best Action" },
      table: { category: "Content" },
    },
    processFrame: {
      name: "Frame",
      control: "select",
      options: [...PROCESS_FRAMES],
      description: "Which stage the process is at: capturing, ready to review, running, a task failed, or done.",
      if: { arg: "widget", eq: "Process Automation" },
      table: { category: "Content" },
    },
    processView: {
      name: "Capture view",
      control: "radio",
      options: [...PROCESS_VIEWS],
      description: "While capturing, open with the form (Guided form) or with the task list (Tasks first). Same widget, same data.",
      if: { arg: "widget", eq: "Process Automation" },
      table: { category: "Content", defaultValue: { summary: "Guided form" } },
    },
    showDetail: {
      name: "Detailed view",
      control: "boolean",
      description: "Show the per-contact lines under the summary.",
      if: { arg: "widget", eq: "Journey Summary" },
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    status: {
      name: "Status",
      control: "select",
      options: STATUS_OPTIONS,
      labels: { auto: "Auto (the frame's own)" },
      description: "The header pill (`status`). Auto keeps the pill the frame normally has.",
      table: { category: "Header", defaultValue: { summary: "auto" } },
    },
    showSubhead: {
      name: "Subhead",
      control: "boolean",
      description: "Show the line under the title (`subhead`). The header turns comfortable by itself to make room.",
      table: { category: "Header", defaultValue: { summary: "true" } },
    },
    forYou: {
      name: "For you note",
      control: "boolean",
      description: "Show the “For you · not part of the conversation” note (`forYou`).",
      table: { category: "Header", defaultValue: { summary: "true" } },
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["white", "purple", "blue", "yellow", "green", "red", "neutral"],
      labels: { white: "White", purple: "Purple", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red", neutral: "Neutral" },
      description: "Header tint (`color`). White is the default for agentic cards.",
      table: { category: "Appearance", defaultValue: { summary: "white" } },
    },
    avatarColor: {
      name: "Avatar color",
      control: "select",
      options: AVATAR_COLORS.map(([value]) => value),
      labels: Object.fromEntries(AVATAR_COLORS),
      description: "Color of the avatar behind the header icon (`avatarColor`, white header only). Sentiment follows its reading when none is picked.",
      if: { arg: "color", eq: "white" },
      table: { category: "Appearance" },
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      labels: { comfortable: "Comfortable", compact: "Compact" },
      description: "Header height (`density`): compact is 40px (default), comfortable is 48px. Hidden while Subhead is on, because a subhead sets its own header height.",
      if: { arg: "showSubhead", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "compact" } },
    },
    width: {
      name: "Width",
      control: "radio",
      options: ["max-width", "full"],
      labels: { "max-width": "Max width (350px)", full: "Full screen" },
      description: "Max width caps the card at 350px, like a narrow side panel. Full screen lets it take all the width available.",
      table: { category: "Appearance", defaultValue: { summary: "max-width" } },
    },
    radius: {
      name: "Corner radius",
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Corner radius token (`radius`).",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    accordion: {
      name: "Accordion",
      control: "boolean",
      description: "Header collapses the body (`accordion`).",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Initial open state when Accordion is on (`defaultOpen`).",
      if: { arg: "accordion" },
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    showDismiss: {
      name: "Dismiss button",
      control: "boolean",
      description: "Header “X” (`onDismiss`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showOpenWindow: {
      name: "Open in window button",
      control: "boolean",
      description: "Header “open in new window” button (`onOpenInNewWindow`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => <AgenticAICardDemo {...args} />,
});
