import { useEffect } from "react";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { AICard, type AICardColor } from "../ai-card";
import { MAIN_CARDS, TAG_TYPES } from "./AICard.shared";
import { withControlsFor } from "./storyControls";
import type { TagVariant, TagShape } from "../tag";
import type { AvatarColor } from "../avatar";
import { AVATAR_COLORS } from "./Avatar.shared";

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
  customTitle?: string;
  showSubhead?: boolean;
  subheadText?: string;
  customContent?: string;
  iconType?: "icon" | "avatar";
  avatarColor?: AvatarColor;
  /** Hidden plumbing: "Color is White" / "Color is White AND Icon type is Avatar" (`argTypes.if` takes one condition). */
  iconTypeOn?: boolean;
  avatarOn?: boolean;
  showTag?: boolean;
  tagType?: string;
  /** Hidden plumbing: "tag is on AND type is Custom" (`argTypes.if` takes one condition). */
  tagCustomOn?: boolean;
  tagLabel?: string;
  tagVariant?: TagVariant;
  tagShape?: TagShape;
  tagDot?: boolean;
  tagPulse?: boolean;
  /** Hidden plumbing: "the tag shows a dot" (`argTypes.if` takes one condition). */
  tagPulseOn?: boolean;
}

function AICardDemo({ card = "Autosummary", color = "default", accordion = "default", defaultOpen = true, showIcon = true, showDismiss = false, showOpenWindow = false, customerInfoLayout = "list", populated = false, autosummaryFormat = "summary", sentimentLevel = "neutral", checklistState = "start", appointmentStep = "start", ratingStep = "start", density = "compact", radius = "md", showSubhead = false, subheadText = "Subhead text", customTitle = "My custom card", customContent = "Write whatever you like here.", iconType = "icon", avatarColor = "info", showTag = false, tagType = "New", tagLabel = "New", tagVariant = "info", tagShape = "pill", tagDot = true, tagPulse = false }: AICardDemoProps) {
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
          showTag,
          tagType,
          tagLabel,
          tagVariant,
          tagShape,
          tagDot,
          tagPulse,
          showSubhead,
          subheadText,
          customTitle,
          customContent,
          iconType,
          avatarColor,
        }}
      />
    </div>
  );
}

const meta: Meta<typeof AICardDemo> = {
  title: "UI/AICard",
  component: AICard as never,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;
type Story = StoryObj<typeof AICardDemo>;

export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: { card: "Autosummary", color: "default", accordion: "default", defaultOpen: true, showIcon: true, showDismiss: false, showOpenWindow: false, customerInfoLayout: "list", populated: false, autosummaryFormat: "summary", sentimentLevel: "neutral", checklistState: "start", appointmentStep: "start", ratingStep: "start", density: "compact", radius: "md", showSubhead: false, subheadText: "Subhead text", showTag: false, tagType: "New", tagCustomOn: false, tagLabel: "New", tagVariant: "info", tagShape: "pill", tagDot: true, tagPulse: false, tagPulseOn: false, customTitle: "My custom card", customContent: "Write whatever you like here.", iconType: "icon", avatarColor: "info", iconTypeOn: false, avatarOn: false },
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
      options: ["default", "purple", "blue", "yellow", "green", "red", "neutral", "white"],
      labels: { default: "Card default", purple: "Purple", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red", neutral: "Neutral", white: "White" },
      description: "Header tint (`color`). Card default keeps the picked card's own color.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    showSubhead: {
      name: "Subhead",
      control: "boolean",
      description: "A second line under the title (`subhead`). The header turns comfortable by itself to make room, whatever Density says.",
      table: { category: "Header", defaultValue: { summary: "false" } },
    },
    subheadText: {
      name: "Subhead text",
      control: "text",
      description: "The subhead's text.",
      if: { arg: "showSubhead", truthy: true },
      table: { category: "Header", defaultValue: { summary: "Subhead text" } },
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
    customTitle: {
      name: "Title",
      control: "text",
      description: "Custom card only: the header title.",
      if: { arg: "card", eq: "Custom" },
      table: { category: "Content" },
    },
    customContent: {
      name: "Content",
      control: "text",
      description: "Custom card only: the body text.",
      if: { arg: "card", eq: "Custom" },
      table: { category: "Content" },
    },
    iconType: {
      name: "Icon type",
      control: "radio",
      options: ["icon", "avatar"],
      labels: { icon: "Icon", avatar: "Avatar" },
      description: "White header only: the bare icon, or the icon inside an extra-small rounded avatar (`avatarColor`).",
      if: { arg: "iconTypeOn", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "icon" } },
    },
    avatarColor: {
      name: "Avatar color",
      control: "select",
      options: AVATAR_COLORS.map(([color]) => color),
      description: "Background and glyph color pair of the avatar.",
      if: { arg: "avatarOn", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "info" } },
    },
    tagPulse: {
      name: "Tag pulse",
      control: "boolean",
      description: "Pulse the tag's dot — a ring radiates out and fades, the new-assignment look (`dotPulse`). Needs Tag dot on.",
      if: { arg: "tagPulseOn", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "false" } },
    },
    tagPulseOn: { table: { disable: true } },
    iconTypeOn: { table: { disable: true } },
    avatarOn: { table: { disable: true } },
    showTag: {
      name: "Tag",
      control: "boolean",
      description: "Show a `Tag` at the right end of the header (after any header content the card already has).",
      table: { category: "Tag", defaultValue: { summary: "false" } },
    },
    tagType: {
      name: "Tag type",
      control: "select",
      options: TAG_TYPES,
      description: "Which header tag to show: the status tags the AI cards use (New, Ready, Answer found, Live, Suggested, Internal only), or Custom to set the text, color, shape and dot yourself.",
      if: { arg: "showTag", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "New" } },
    },
    tagCustomOn: { table: { disable: true } },
    tagLabel: {
      name: "Tag text",
      control: "text",
      description: "The tag's label (`label`).",
      if: { arg: "tagCustomOn", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "New" } },
    },
    tagVariant: {
      name: "Tag variant",
      control: "select",
      options: ["default", "success", "warning", "critical", "info", "neutral", "purple", "teal", "pink"],
      description: "The tag's color (`variant`).",
      if: { arg: "tagCustomOn", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "info" } },
    },
    tagShape: {
      name: "Tag shape",
      control: "radio",
      options: ["default", "pill"],
      description: "Rounded corners (`default`) or a full pill (`shape`).",
      if: { arg: "tagCustomOn", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "pill" } },
    },
    tagDot: {
      name: "Tag dot",
      control: "boolean",
      description: "A small dot before the label (`dot`), for any tag type. Turning it on reveals Tag pulse.",
      if: { arg: "showTag", truthy: true },
      table: { category: "Tag", defaultValue: { summary: "true" } },
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
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync so the free-form tag controls only show for the Custom tag type.
    const customOn = Boolean(args.showTag && args.tagType === "Custom");
    const iconTypeOn = args.color === "white";
    const avatarOn = iconTypeOn && args.iconType === "avatar";
    // Pulse only makes sense while the tag shows its dot.
    const tagPulseOn = Boolean(args.showTag && args.tagDot);
    useEffect(() => {
      const next: Partial<typeof args> = {};
      if (args.tagCustomOn !== customOn) next.tagCustomOn = customOn;
      if (args.iconTypeOn !== iconTypeOn) next.iconTypeOn = iconTypeOn;
      if (args.avatarOn !== avatarOn) next.avatarOn = avatarOn;
      if (args.tagPulseOn !== tagPulseOn) next.tagPulseOn = tagPulseOn;
      if (Object.keys(next).length) updateArgs(next);
    }, [args.tagCustomOn, customOn, args.iconTypeOn, iconTypeOn, args.avatarOn, avatarOn, args.tagPulseOn, tagPulseOn, updateArgs]);
    return <AICardDemo {...args} />;
  },
});
