import type { Meta, StoryObj } from "@storybook/react";
import { AICard, type AICardColor } from "../ai-card";
import { MAIN_CARDS } from "./AICard.shared";

/* ── Custom Primitives / AICard ──
   The interactive playground. "Card" picks any of the cards from the "AICard/Variants" page
   (Autosummary first; cards that come in several versions are one entry with a control for the version); Color, Accordion, Icon and Starts open then override that card, so any card
   can be tried in any color, collapsible or not. Buttons inside the cards are static and do nothing. */

// Alphabetical, so a card is easy to find in the dropdown ("~New" cards sort together, first).
const CARD_NAMES = MAIN_CARDS.map(([name]) => name).sort((a, b) => a.localeCompare(b));

type AccordionChoice = "default" | "on" | "off";

interface AICardDemoProps {
  card?: string;
  color?: "default" | AICardColor;
  accordion?: AccordionChoice;
  defaultOpen?: boolean;
  showIcon?: boolean;
  showDismiss?: boolean;
  showOpenWindow?: boolean;
  customerInfoLayout?: "list" | "conversational";
  populated?: boolean;
  autosummaryFormat?: string;
  sentimentLevel?: string;
  checklistState?: string;
  appointmentStep?: string;
  ratingStep?: string;
  density?: "comfortable" | "compact";
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

function AICardDemo({ card = "Autosummary", color = "default", accordion = "default", defaultOpen = true, showIcon = true, showDismiss = false, showOpenWindow = false, customerInfoLayout = "list", populated = false, autosummaryFormat = "summary", sentimentLevel = "neutral", checklistState = "start", appointmentStep = "start", ratingStep = "start", density = "compact", radius = "md" }: AICardDemoProps) {
  const Card = MAIN_CARDS.find(([name]) => name === card)?.[1] ?? MAIN_CARDS[0][1];
  // The version control that belongs to the picked card.
  const variant = { "Autosummary": autosummaryFormat, "Customer Sentiment": sentimentLevel, "Warranty Claim Checklist": checklistState, "Schedule Your Appointment": appointmentStep, "Rate Your Copilot Experience": ratingStep }[card];
  return (
    <div className="w-full">
      <Card
        // `key` remounts when a control changes so the open state follows "Starts open".
        key={`${card}-${variant}-${accordion}-${defaultOpen}`}
        o={{
          color: color === "default" ? undefined : color,
          accordion: accordion === "default" ? undefined : accordion === "on",
          defaultOpen: accordion === "default" ? undefined : defaultOpen,
          showIcon,
          showDismiss,
          showOpenWindow,
          customerInfoLayout,
          populated,
          variant,
          density,
          radius,
        }}
      />
    </div>
  );
}

const meta: Meta<typeof AICardDemo> = {
  title: "UI/AICard",
  component: AICard as never,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof AICardDemo>;

export const Default: Story = {
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display name, so names and keys are both listed.
      include: ["Card", "Color", "Density", "Corner radius", "Accordion", "Starts open", "Icon", "Format", "Sentiment", "Checklist state", "Appointment step", "Rating step", "Layout", "Populated", "Open in new window", "Dismiss", "card", "color", "density", "radius", "accordion", "defaultOpen", "showIcon", "showOpenWindow", "showDismiss", "customerInfoLayout", "populated", "autosummaryFormat", "sentimentLevel", "checklistState", "appointmentStep", "ratingStep"],
      sort: "none",
    },
  },
  args: { card: "Autosummary", color: "default", accordion: "default", defaultOpen: true, showIcon: true, showDismiss: false, showOpenWindow: false, customerInfoLayout: "list", populated: false, autosummaryFormat: "summary", sentimentLevel: "neutral", checklistState: "start", appointmentStep: "start", ratingStep: "start", density: "compact", radius: "md" },
  argTypes: {
    card: {
      name: "Card",
      control: "select",
      options: CARD_NAMES,
      description: "Which card to show. These are the same cards as the Variants page.",
      table: { category: "Content", defaultValue: { summary: "Autosummary" } },
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["default", "purple", "blue", "yellow", "green", "red", "neutral"],
      labels: { default: "Card default", purple: "Purple", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red", neutral: "Neutral" },
      description: "Header tint (`color`). Card default keeps the picked card's own color.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      labels: { comfortable: "Comfortable", compact: "Compact" },
      description: "Header height (`density`): compact is 40px (default), comfortable is 48px.",
      table: { category: "Appearance", defaultValue: { summary: "compact" } },
    },
    radius: {
      name: "Corner radius",
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Corner radius token (`radius`): none 0, xs 4, sm 6, md 8 (default), lg 12, xl 16px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show the icon left of the title (`icon`). It takes the color's strong tone.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    autosummaryFormat: {
      name: "Format",
      control: "radio",
      options: ["summary", "page"],
      labels: { summary: "Summary", page: "Page" },
      description: "Autosummary only: the short summary with edit and copy, or the full page with headed sections.",
      if: { arg: "card", eq: "Autosummary" },
      table: { category: "Content", defaultValue: { summary: "summary" } },
    },
    sentimentLevel: {
      name: "Sentiment",
      control: "radio",
      options: ["negative", "neutral", "positive"],
      labels: { negative: "Negative", neutral: "Neutral", positive: "Positive" },
      description: "Customer Sentiment only: which read of the customer to show. Each has its own color, which the Color control can still override.",
      if: { arg: "card", eq: "Customer Sentiment" },
      table: { category: "Content", defaultValue: { summary: "neutral" } },
    },
    checklistState: {
      name: "Checklist state",
      control: "radio",
      options: ["start", "items", "complete"],
      labels: { start: "Start", items: "Items", complete: "Complete" },
      description: "Warranty Claim Checklist only: the intro with an Open button, the checkable items, or the completed card.",
      if: { arg: "card", eq: "Warranty Claim Checklist" },
      table: { category: "Content", defaultValue: { summary: "start" } },
    },
    appointmentStep: {
      name: "Appointment step",
      control: "radio",
      options: ["start", "form"],
      labels: { start: "Start", form: "Form" },
      description: "Schedule Your Appointment only: the intro with an Open button, or the scheduling form.",
      if: { arg: "card", eq: "Schedule Your Appointment" },
      table: { category: "Content", defaultValue: { summary: "start" } },
    },
    ratingStep: {
      name: "Rating step",
      control: "radio",
      options: ["start", "rating", "thanks"],
      labels: { start: "Start", rating: "Rating", thanks: "Thanks" },
      description: "Rate Your Copilot Experience only: the invitation, the thumbs rating form, or the thank-you.",
      if: { arg: "card", eq: "Rate Your Copilot Experience" },
      table: { category: "Content", defaultValue: { summary: "start" } },
    },
    customerInfoLayout: {
      name: "Layout",
      control: "radio",
      options: ["list", "conversational"],
      labels: { list: "List", conversational: "Conversational" },
      description: "How Customer Info presents the customer: label and value rows (list), or an avatar, tags and a written summary (conversational). Only applies to the Customer Info card.",
      if: { arg: "card", eq: "Customer Info" },
      table: { category: "Content", defaultValue: { summary: "list" } },
    },
    populated: {
      name: "Populated",
      control: "boolean",
      description: "Artifacts only: show the interaction's artifacts as a list of links (on), or the \"No artifacts on this interaction yet.\" message (off).",
      if: { arg: "card", eq: "~New - Artifacts" },
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showOpenWindow: {
      name: "Open in new window",
      control: "boolean",
      description: "Show an open-in-new-window icon button in the header, before the dismiss X (`onOpenInNewWindow`). Does nothing here.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    showDismiss: {
      name: "Dismiss",
      control: "boolean",
      description: "Show a dismiss X at the right end of the header (`onDismiss`). Clicking it hides the card; the demo leaves a Restore card button.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    accordion: {
      name: "Accordion",
      control: "radio",
      options: ["default", "on", "off"],
      labels: { default: "Card default", on: "On", off: "Off" },
      description: "Make the card collapsible: a chevron on the header toggles the body (`accordion`). Off is a plain card with the body always shown. Card default keeps the picked card's own setting.",
      table: { category: "Behavior", defaultValue: { summary: "default" } },
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the accordion starts expanded (`defaultOpen`).",
      if: { arg: "accordion", eq: "on" },
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
  },
  render: (args) => <AICardDemo {...args} />,
};
