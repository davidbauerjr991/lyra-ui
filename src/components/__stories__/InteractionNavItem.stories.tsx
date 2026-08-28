import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { InteractionNavItem, type InteractionChannel } from "../interaction-nav-item";
import { CreateNew, useOutboundAddButton, type CreateNewOutboundConfig } from "../create-new";
import { WhatsAppIcon, type ChannelType } from "../channel-row";
import { Badge } from "../badge";
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
    collapsible: { control: "boolean" },
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

/* ── Compact — channel icon in the badge, instead of a count ──
   Storybook-only demo: the real compact tile's top-left badge always shows
   a numeric open-channel count (see interaction-nav-item.tsx — it only
   appears once `channels.length > 1`, and always renders that length as
   text, with no slot for arbitrary content). This story hand-builds the
   same tile markup (avatar square + badge position/tone, matching the real
   component's classes exactly) but swaps the badge's content for that
   channel's own icon — a single-channel visual concept, not a new real
   prop on `InteractionNavItem` itself.

   Lucide's default thin (1.5) stroke icons all but disappear this small,
   but a full solid `fill` turns line icons like `MessageSquare`/`Mail`/
   `Phone` into unrecognizable blobs (they're built as open stroke paths,
   not closed fillable shapes) — a heavier stroke (3, same weight
   `agent-profile.tsx`'s `StatusIcon` glyphs already use) reads far better
   than either extreme. `WhatsAppIcon` is already a solid glyph (see
   channel-row.tsx), so it's untouched.

   Badge is `size="md"` (Badge's standard 20×20 circle — no custom
   dimension override) with an h-2 w-2 (8px) icon: 8px content + `md`'s
   `px-1.5` padding (6px each side) = 20px, exactly matching `md`'s own
   `min-w-[20px]`, so it renders as a true 20×20 circle using the same
   size any other `Badge` consumer reaches for, not a one-off value. */

const ICON_BADGE_TYPES: { type: ChannelType; label: string; icon: React.ReactNode }[] = [
  { type: "chat", label: "Chat", icon: <MessageSquare className="h-2 w-2" strokeWidth={3} /> },
  { type: "email", label: "Email", icon: <Mail className="h-2 w-2" strokeWidth={3} /> },
  { type: "voice", label: "Voice", icon: <Phone className="h-2 w-2" strokeWidth={3} /> },
  { type: "whatsapp", label: "WhatsApp", icon: <WhatsAppIcon className="h-2 w-2" /> },
];

export const CompactChannelIconBadge: Story = {
  name: "Compact — Channel Icon Badge",
  render: () => (
    <div className="flex items-end gap-6">
      {ICON_BADGE_TYPES.map(({ type, label, icon }) => (
        <div key={type} className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-1 rounded-lyra-sm p-1.5">
            <span className="relative inline-flex">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis"
                aria-hidden="true"
              >
                {type === "email" ? "SM" : "RT"}
              </span>
              <Badge
                shape="circle"
                variant="info"
                size="md"
                className="absolute -left-2 -top-2"
                aria-label={`${label} channel`}
              >
                {icon}
              </Badge>
            </span>
            <span className="lyra-body-xs text-lyra-fg-secondary" aria-hidden="true">08:27</span>
          </div>
          <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
        </div>
      ))}
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
    // Per v2: every real card is `collapsible` unconditionally — the
    // chevron replaces `headerAction` in the header row and toggles this
    // card's own channel list independently of any other card's.
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
    channels: [{
      type: "voice",
      elapsed: "01:12",
      current: true,
      preview: randomSkill(),
    }],
  },
  parameters: { layout: "padded" },
};

/* `collapsible`'s own channel-list expand/collapse state is internal (see
   that prop's doc comment, interaction-nav-item.tsx) and defaults to
   expanded — every "Expanded — ..." story above demonstrates the toggle
   available, but always starting open. This story instead starts
   COLLAPSED via `channelsExpandedOverride`, the same one-shot `{ expanded,
   version }` object a page-level "Collapse all" button uses (see
   `AssignmentsExpandCollapseAllButton`, assignments-section-caption.tsx) —
   here just applied once, on mount, so the story itself renders straight
   into the collapsed look instead of requiring a manual chevron click to
   see it. Once rendered, the chevron toggles this card independently, same
   as any other collapsible card. */
export const ExpandedCollapsed: Story = {
  name: "Expanded — Collapsible (Channels Collapsed)",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    collapsible: true,
    channelsExpandedOverride: { expanded: false, version: 1 },
    channels: SOFIA_CHANNELS,
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
        collapsible
        channels={SOFIA_CHANNELS}
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="04:00"
        expanded
        collapsible
        channels={RAY_CHANNELS}
      />
      <InteractionNavItem
        elapsed="02:05"
        expanded
        collapsible
        channels={[{ type: "voice", elapsed: "02:05", current: true, preview: randomSkill() }]}
      />
    </div>
  ),
};

/* ── Header (headerAction slot) ──
   `headerAction` is a generic `React.ReactNode` slot in the card's header
   row (see interaction-nav-item.tsx). The "Add Outbound" flow it's
   demonstrating here is `OutboundAddButton` (create-new.tsx) — a fully
   self-contained popover. Clicking the "+" opens a small channel-picker
   flyout, and picking a channel swaps that same popover to the "Select
   Channel / Select Phone / Outbound Skill → Start Interaction" detail
   form, right where the "+" was clicked. There's no hand-off to a
   separate, remotely-anchored `CreateNew` instance — an earlier version
   of `OutboundAddButton` routed a picked channel through `CreateNew`'s
   `launchRequest` prop into the LeftNav's own "New Outbound" popover,
   which visually opened in the wrong place. This story uses its own
   small, self-contained `CreateNewOutboundConfig` (below) and the real
   `useOutboundAddButton` hook — the exact same hook every production
   consumer (AgentNextGenPage.tsx, AgentNextGenTemplate.stories.tsx,
   LeftNav.stories.tsx) uses. `CreateNew` itself is still rendered here
   (its own "New Outbound" trigger button included, same as every real
   consumer) so the story reflects a real page layout, but it's otherwise
   unrelated to what `getHeaderAction`'s popover does. See "Compact — Hover
   Popover" further below for the same `headerAction` rendered in compact
   mode instead — there's no header row on the compact tile itself, but
   hovering it opens a popover previewing the full expanded card, header
   row included. */

const NAV_ITEM_HEADER_OUTBOUND_CONFIG: CreateNewOutboundConfig = {
  outboundTitle: "New Outbound",
  groups: [
    {
      id: "contacts",
      label: "Contacts",
      contacts: [
        { id: "sofia-martinez", name: "Sofia Martinez", initials: "SM", channels: ["voice", "email", "sms", "whatsapp"] },
        { id: "ray-torres", name: "Ray Torres", initials: "RT", channels: ["voice", "sms", "whatsapp"] },
      ],
    },
  ],
  channelOptions: OUTBOUND_CONFIG.channelOptions,
  phoneOptions: OUTBOUND_CONFIG.phoneOptions,
  skillOptions: OUTBOUND_CONFIG.skillOptions,
  onStartCall: (selection) => {
    // eslint-disable-next-line no-console
    console.log("Start call:", selection.channel, "→", selection.contact.name);
  },
};

export const NavItemHeader: Story = {
  name: "Header — Add Outbound Button",
  render: () => {
    const { getHeaderAction } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return (
      <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
        <CreateNew
          title="New Outbound"
          outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG}
          // Every card below renders in expanded mode (full header row,
          // name + headerAction) — CreateNew's own trigger needs the same
          // `expanded` flag or it falls back to its default collapsed,
          // icon-only square button (see create-new.tsx's own `expanded`
          // doc comment), which looks disconnected from the fully-expanded
          // rail this story is otherwise depicting.
          expanded
        />
        <InteractionNavItem
          customerName="Sofia Martinez"
          active
          awaitingResponse
          elapsed="08:27"
          expanded
          channels={SOFIA_CHANNELS}
          headerAction={getHeaderAction("sofia-martinez")}
        />
        <InteractionNavItem
          customerName="Ray Torres"
          awaitingResponse
          elapsed="04:00"
          expanded
          channels={RAY_CHANNELS}
          headerAction={getHeaderAction("ray-torres")}
        />
        {/* No matching contact for this one (same as a quick-dialed number
            in the real app) — demonstrates that getHeaderAction returns
            `null` rather than rendering a "+" button with no contact to
            back it (a button that would open but whose selection could
            never actually resolve an address). No headerAction renders
            here at all. */}
        <InteractionNavItem
          elapsed="02:05"
          expanded
          channels={[{ type: "voice", elapsed: "02:05", current: true, preview: randomSkill() }]}
          headerAction={getHeaderAction("anonymous-voice")}
        />
      </div>
    );
  },
};

/* ── Compact hover popover ──
   Hover any compact tile below — it opens a popover previewing the full
   expanded card (name, `headerAction`, every channel row), fully
   interactive rather than a read-only tooltip: clicking a channel row
   makes it "current," the kebab menu's "Unassign & Dismiss" works, and
   `headerAction`'s own "+" opens its channel flyout and can hand off into
   `CreateNew`'s call-setup screen exactly like it does in expanded mode
   (see the "Header — Add Outbound Button" story above; this reuses the
   exact same `NAV_ITEM_HEADER_OUTBOUND_CONFIG`/`useOutboundAddButton`
   wiring, just with `expanded={false}` cards). Moving the pointer from the
   tile into the popover (to actually click something) doesn't close it —
   see interaction-nav-item.tsx's `openHoverCard`/`scheduleCloseHoverCard`
   for the hover-intent/delayed-close mechanics, mirrored from
   `OutboundContactRow`'s own hover flyout in create-new.tsx. */

export const CompactHoverCard: Story = {
  name: "Compact — Hover Popover",
  render: () => {
    const { getHeaderAction } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return (
      <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG} />
        <InteractionNavItem
          customerName="Sofia Martinez"
          active
          awaitingResponse
          elapsed="08:27"
          channels={SOFIA_CHANNELS}
          headerAction={getHeaderAction("sofia-martinez")}
        />
        <InteractionNavItem
          customerName="Ray Torres"
          awaitingResponse
          elapsed="04:00"
          channels={RAY_CHANNELS}
          headerAction={getHeaderAction("ray-torres")}
        />
        <InteractionNavItem
          elapsed="02:05"
          channels={[{ type: "voice", elapsed: "02:05", current: true, preview: randomSkill() }]}
          headerAction={getHeaderAction("anonymous-voice")}
        />
      </div>
    );
  },
};
