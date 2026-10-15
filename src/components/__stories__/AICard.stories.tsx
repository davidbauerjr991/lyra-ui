import type { Meta, StoryObj } from "@storybook/react";
import { AICard, type AICardColor } from "../ai-card";
import { ALL_CARDS } from "./AICard.shared";

/* ── Custom Primitives / AICard ──
   The interactive playground. "Card" picks any of the cards from the "AICard/Variants" page
   (Autosummary first); Color, Accordion, Icon and Starts open then override that card, so any card
   can be tried in any color, collapsible or not. Buttons inside the cards are static and do nothing. */

const CARD_NAMES = ALL_CARDS.map(([name]) => name);

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
}

function AICardDemo({ card = "Autosummary", color = "default", accordion = "default", defaultOpen = true, showIcon = true, showDismiss = false, showOpenWindow = false, customerInfoLayout = "list" }: AICardDemoProps) {
  const Card = ALL_CARDS.find(([name]) => name === card)?.[1] ?? ALL_CARDS[0][1];
  return (
    <div className="w-full">
      <Card
        // `key` remounts when a control changes so the open state follows "Starts open".
        key={`${card}-${accordion}-${defaultOpen}`}
        o={{
          color: color === "default" ? undefined : color,
          accordion: accordion === "default" ? undefined : accordion === "on",
          defaultOpen: accordion === "default" ? undefined : defaultOpen,
          showIcon,
          showDismiss,
          showOpenWindow,
          customerInfoLayout,
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
      include: ["Card", "Color", "Accordion", "Starts open", "Icon", "Layout", "Open in new window", "Dismiss", "card", "color", "accordion", "defaultOpen", "showIcon", "showOpenWindow", "showDismiss", "customerInfoLayout"],
      sort: "none",
    },
  },
  args: { card: "Autosummary", color: "default", accordion: "default", defaultOpen: true, showIcon: true, showDismiss: false, showOpenWindow: false, customerInfoLayout: "list" },
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
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show the icon left of the title (`icon`). It takes the color's strong tone.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
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
