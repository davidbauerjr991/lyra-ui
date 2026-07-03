import type { Meta, StoryObj } from "@storybook/react";
import {
  ChatChannelRow,
  EmailChannelRow,
  SmsChannelRow,
  WhatsAppChannelRow,
  VoiceChannelRow,
} from "../channel-row";

/** Card-like frame matching how these rows actually appear inside an
 *  `InteractionNavItem` expanded card (bordered, rounded, clipped). */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[360px] overflow-hidden rounded-lyra-sm border border-lyra-border-subtle bg-lyra-bg-surface-base">
      {children}
    </div>
  );
}

const meta: Meta = {
  title: "UI/ChannelRow",
  parameters: {
    backgrounds: { default: "lyra-shell" },
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

/* ── One row per channel type ── */

export const Chat: Story = {
  render: () => (
    <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" isFirst />
    </Frame>
  ),
};

export const Email: Story = {
  render: () => (
    <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" isFirst />
    </Frame>
  ),
};

export const Sms: Story = {
  name: "SMS",
  render: () => (
    <Frame>
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
  ),
};

export const WhatsApp: Story = {
  render: () => (
    <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
  ),
};

export const Voice: Story = {
  render: () => (
    <Frame>
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" isFirst />
    </Frame>
  ),
};

/* ── States ── */

export const AwaitingResponse: Story = {
  name: "Chat — Awaiting Response (red chip + red time)",
  render: () => (
    <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" awaitingResponse isFirst />
    </Frame>
  ),
};

export const Highlighted: Story = {
  name: "WhatsApp — Highlighted (current + active card)",
  render: () => (
    <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted isFirst />
    </Frame>
  ),
};

export const NoKebabMenu: Story = {
  name: "Email — No Kebab Menu (removable=false)",
  render: () => (
    <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" removable={false} isFirst />
    </Frame>
  ),
};

export const VoiceMenuDiffersFromDigital: Story = {
  name: "Voice — Different Default Menu (Listen/Download Recording)",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">
          Chat/Email/SMS/WhatsApp share one default kebab menu (Send/Download Transcript, Translate Messages).
          Voice swaps those for recording-appropriate actions instead — open each kebab to compare.
        </p>
      </div>
      <Frame>
        <ChatChannelRow elapsed="08:27" preview="Chat_General" isFirst />
      </Frame>
      <Frame>
        <VoiceChannelRow elapsed="01:12" preview="Chat_General" isFirst />
      </Frame>
    </div>
  ),
};

/* ── All types stacked in one card ── */

export const AllTypesStacked: Story = {
  name: "All Types — Stacked in One Card",
  render: () => (
    <Frame>
      <ChatChannelRow elapsed="08:00" preview="Chat_General" awaitingResponse isFirst />
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" />
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" />
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted />
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" />
    </Frame>
  ),
};
