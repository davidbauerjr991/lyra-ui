import type { Meta, StoryObj } from "@storybook/react";
import { InteractionNavItem, type InteractionChannel } from "../interaction-nav-item";
import { OutboundAddButton } from "../create-new";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";

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
    channels: [{ type: "chat", elapsed: "08:27", current: true }],
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
    channels: [{ type: "chat", elapsed: "06:12", current: true }],
  },
};

export const CompactNoCustomer: Story = {
  name: "Compact — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: false,
    channels: [{ type: "voice", elapsed: "02:05", current: true }],
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
      { type: "chat", elapsed: "08:00" },
      { type: "email", elapsed: "Now" },
      { type: "sms", elapsed: "Now" },
      { type: "whatsapp", elapsed: "Now", current: true },
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
          { type: "chat", elapsed: "08:00" },
          { type: "email", elapsed: "Now" },
          { type: "sms", elapsed: "Now" },
          { type: "whatsapp", elapsed: "Now", current: true },
        ]}
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="06:12"
        channels={[{ type: "chat", elapsed: "06:12", current: true }]}
      />
      <InteractionNavItem
        elapsed="02:05"
        channels={[{ type: "voice", elapsed: "02:05", current: true }]}
      />
    </div>
  ),
};

/* ── Expanded (rail open) ── */

const SOFIA_CHANNELS: InteractionChannel[] = [
  {
    type: "chat",
    elapsed: "08:00",
    preview: randomSkill(),
    awaitingResponse: true,
  },
  { type: "email", elapsed: "Now", preview: randomSkill(), removable: true },
  { type: "sms", elapsed: "Now", preview: randomSkill(), removable: true },
  {
    type: "whatsapp",
    elapsed: "Now",
    preview: randomSkill(),
    current: true,
    removable: true,
  },
];

const RAY_CHANNELS: InteractionChannel[] = [
  {
    type: "whatsapp",
    elapsed: "4m",
    preview: randomSkill(),
    current: true,
    awaitingResponse: true,
  },
  { type: "sms", elapsed: "Now", preview: randomSkill(), removable: true },
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
      type: "chat",
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
      type: "chat",
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
      type: "chat",
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
      type: "voice",
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

export const ExpandedVoice: Story = {
  name: "Expanded — Voice Channel",
  args: {
    customerName: "Marcus Webb",
    active: true,
    awaitingResponse: false,
    elapsed: "01:12",
    expanded: true,
    channels: [{
      type: "voice",
      elapsed: "01:12",
      current: true,
      preview: randomSkill(),
    }],
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
        channels={[{ type: "voice", elapsed: "02:05", current: true, preview: randomSkill() }]}
      />
    </div>
  ),
};

/* ── Header (headerAction slot) ──
   `headerAction` is a generic `React.ReactNode` slot in the card's header
   row (see interaction-nav-item.tsx) — these stories demonstrate it filled
   with the real `OutboundAddButton` from create-new.tsx, which is how every
   production consumer (AgentNextGenPage.tsx, AgentNextGenTemplate.stories.tsx,
   LeftNav.stories.tsx) actually wires it. Only rendered in expanded mode,
   since compact (icon-rail) cards have no header row to put it in. This
   story doesn't render a `CreateNew` popover alongside it — there's no
   outbound flow to hand off to here — so `onSelect` just logs the chosen
   channel, purely to demonstrate the header layout and the button's own
   tooltip/flyout behavior in isolation. */

export const NavItemHeader: Story = {
  name: "Header — Add Outbound Button",
  render: () => (
    <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
      <InteractionNavItem
        customerName="Sofia Martinez"
        active
        awaitingResponse
        elapsed="08:27"
        expanded
        channels={SOFIA_CHANNELS}
        headerAction={
          <OutboundAddButton
            channelOptions={OUTBOUND_CONFIG.channelOptions}
            // eslint-disable-next-line no-console
            onSelect={(channel) => console.log("Add Outbound:", channel)}
          />
        }
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="04:00"
        expanded
        channels={RAY_CHANNELS}
        headerAction={
          <OutboundAddButton
            channelOptions={OUTBOUND_CONFIG.channelOptions}
            // eslint-disable-next-line no-console
            onSelect={(channel) => console.log("Add Outbound:", channel)}
          />
        }
      />
      <InteractionNavItem
        elapsed="02:05"
        expanded
        channels={[{ type: "voice", elapsed: "02:05", current: true, preview: randomSkill() }]}
        headerAction={
          <OutboundAddButton
            channelOptions={OUTBOUND_CONFIG.channelOptions}
            // eslint-disable-next-line no-console
            onSelect={(channel) => console.log("Add Outbound:", channel)}
          />
        }
      />
    </div>
  ),
};
