import type { Meta, StoryObj } from "@storybook/react";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { InteractionNavItem, type InteractionChannel } from "../interaction-nav-item";

/* ── WhatsApp icon (not in lucide) — same SVG used in AddChannel/LeftNav stories ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHAT_ICON = <MessageSquare className="h-3 w-3" strokeWidth={1.5} />;
const EMAIL_ICON = <Mail className="h-3 w-3" strokeWidth={1.5} />;
const SMS_ICON = <MessageSquare className="h-3 w-3" strokeWidth={1.5} />;
const CALL_ICON = <Phone className="h-3 w-3" strokeWidth={1.5} />;

/** Body copy below each channel chip shows the routing skill, not a message
 *  preview — randomized per channel from this pool of sample skill names. */
const SKILL_NAMES = ["Chat_General", "CXi SME Email", "CXoneSMS_1-833-457-2672"];
function randomSkill(): string {
  return SKILL_NAMES[Math.floor(Math.random() * SKILL_NAMES.length)];
}

const meta: Meta<typeof InteractionNavItem> = {
  title: "UI/InteractionNavItem",
  component: InteractionNavItem,
  parameters: {
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
  argTypes: {
    expanded: { control: "boolean" },
    active: { control: "boolean" },
    awaitingResponse: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InteractionNavItem>;

/* ── Compact (rail collapsed) ── */

export const Compact: Story = {
  name: "Compact — Active, Awaiting Response",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: false,
    channels: [{ icon: CHAT_ICON, label: "Chat", elapsed: "08:27", current: true }],
  },
};

export const CompactInactive: Story = {
  name: "Compact — Inactive, Awaiting Response",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "06:12",
    expanded: false,
    channels: [{ icon: CHAT_ICON, label: "Chat", elapsed: "06:12", current: true }],
  },
};

export const CompactNoCustomer: Story = {
  name: "Compact — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: false,
    channels: [{ icon: CALL_ICON, label: "Call", elapsed: "02:05", current: true }],
  },
};

export const CompactMultiChannel: Story = {
  name: "Compact — Multiple Channels Open",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: false,
    channels: [
      { icon: CHAT_ICON, label: "Chat", elapsed: "08:00" },
      { icon: EMAIL_ICON, label: "Email", elapsed: "Now" },
      { icon: SMS_ICON, label: "SMS", elapsed: "Now" },
      { icon: <WhatsAppIcon />, label: "WhatsApp", elapsed: "Now", current: true },
    ],
  },
};

export const CompactStack: Story = {
  name: "Compact — Stacked (rail collapsed)",
  render: () => (
    <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
      <InteractionNavItem
        customerName="Sofia Martinez"
        active
        awaitingResponse
        elapsed="08:27"
        channels={[
          { icon: CHAT_ICON, label: "Chat", elapsed: "08:00" },
          { icon: EMAIL_ICON, label: "Email", elapsed: "Now" },
          { icon: SMS_ICON, label: "SMS", elapsed: "Now" },
          { icon: <WhatsAppIcon />, label: "WhatsApp", elapsed: "Now", current: true },
        ]}
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="06:12"
        channels={[{ icon: CHAT_ICON, label: "Chat", elapsed: "06:12", current: true }]}
      />
      <InteractionNavItem
        elapsed="02:05"
        channels={[{ icon: CALL_ICON, label: "Call", elapsed: "02:05", current: true }]}
      />
    </div>
  ),
};

/* ── Expanded (rail open) ── */

const SOFIA_CHANNELS: InteractionChannel[] = [
  {
    icon: CHAT_ICON,
    label: "Chat",
    elapsed: "08:00",
    preview: randomSkill(),
    awaitingResponse: true,
  },
  { icon: EMAIL_ICON, label: "Email", elapsed: "Now", preview: randomSkill(), removable: true },
  { icon: SMS_ICON, label: "SMS", elapsed: "Now", preview: randomSkill(), removable: true },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    elapsed: "Now",
    preview: randomSkill(),
    current: true,
    removable: true,
  },
];

const RAY_CHANNELS: InteractionChannel[] = [
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    elapsed: "4m",
    preview: randomSkill(),
    current: true,
    awaitingResponse: true,
  },
  { icon: SMS_ICON, label: "SMS", elapsed: "Now", preview: randomSkill(), removable: true },
];

export const Expanded: Story = {
  name: "Expanded — Active, Awaiting Response",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    channels: [{
      icon: CHAT_ICON,
      label: "Chat",
      elapsed: "08:27",
      current: true,
      awaitingResponse: true,
      preview: randomSkill(),
    }],
  },
  parameters: { layout: "padded" },
};

export const ExpandedActiveNotAwaiting: Story = {
  name: "Expanded — Active, Not Awaiting Response",
  args: {
    customerName: "Priya Nair",
    active: true,
    awaitingResponse: false,
    elapsed: "03:41",
    expanded: true,
    channels: [{
      icon: CHAT_ICON,
      label: "Chat",
      elapsed: "03:41",
      current: true,
      preview: randomSkill(),
    }],
  },
  parameters: { layout: "padded" },
};

export const ExpandedInactive: Story = {
  name: "Expanded — Inactive, Awaiting Response",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "06:12",
    expanded: true,
    channels: [{
      icon: CHAT_ICON,
      label: "Chat",
      elapsed: "06:12",
      current: true,
      awaitingResponse: true,
      preview: randomSkill(),
    }],
  },
  parameters: { layout: "padded" },
};

export const ExpandedNoCustomer: Story = {
  name: "Expanded — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: true,
    channels: [{
      icon: CALL_ICON,
      label: "Call",
      elapsed: "02:05",
      current: true,
      preview: randomSkill(),
    }],
  },
  parameters: { layout: "padded" },
};

export const ExpandedMultiChannelActive: Story = {
  name: "Expanded — Multiple Channels (Active Card)",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    channels: SOFIA_CHANNELS,
  },
  parameters: { layout: "padded" },
};

export const ExpandedMultiChannelInactive: Story = {
  name: "Expanded — Multiple Channels (Inactive Card)",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "04:00",
    expanded: true,
    channels: RAY_CHANNELS,
  },
  parameters: { layout: "padded" },
};

export const ExpandedStack: Story = {
  name: "Expanded — Stacked (rail open)",
  render: () => (
    <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
      <InteractionNavItem
        customerName="Sofia Martinez"
        active
        awaitingResponse
        elapsed="08:27"
        expanded
        channels={SOFIA_CHANNELS}
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="04:00"
        expanded
        channels={RAY_CHANNELS}
      />
      <InteractionNavItem
        elapsed="02:05"
        expanded
        channels={[{ icon: CALL_ICON, label: "Call", elapsed: "02:05", current: true, preview: randomSkill() }]}
      />
    </div>
  ),
};
