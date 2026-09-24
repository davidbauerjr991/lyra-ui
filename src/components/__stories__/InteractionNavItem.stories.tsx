import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { InteractionNavItem, type InteractionChannel } from "../interaction-nav-item";
import { CreateNew, useOutboundAddButton, type CreateNewOutboundConfig } from "../create-new";
import { WhatsAppIcon, type ChannelType, type ChannelOutcomeConfig } from "../channel-row";
import { Badge } from "../badge";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";
import type { DispositionOption } from "../disposition-select";
import type { TagPickerOption } from "../tag-picker";

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

/* ── Compact — new assignment ──
   `isNewAssignment` (interaction-nav-item.tsx) — a red "!" badge at the
   avatar's top-left corner plus a red dot at its bottom-right, both
   independent of `awaitingResponse`: this card sets `awaitingResponse` to
   `false` on purpose, per explicit request ("they can have the red dot and
   not be awaiting a response"), to demonstrate the two are decoupled — a
   just-assigned card reads as new whether or not the customer's also
   waiting on a reply. Hover the tile to see the same signal repeated in
   the expanded-style preview's header row (a plain red dot to the far
   left of the customer name, ahead of any other badge there) — see
   "Compact — Hover Popover" further below for that same hover mechanic. */
export const CompactNewAssignment: Story = {
  name: "Compact — New Assignment",
  args: {
    customerName: "Sofia Martinez",
    active: false,
    awaitingResponse: false,
    isNewAssignment: true,
    elapsed: "08:27",
    expanded: false,
    channels: [{ type: "chat", elapsed: "08:27", current: true }],
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

/* ── Outcome popover, wired ──
   The blue check (`SuccessIconSolid`) button on a channel row only opens a
   real "Log Outcome" popover once the row's own `outcome` field is set (see
   `ChannelOutcomeConfig`'s own doc comment in channel-row.tsx) — every
   story below that renders a full channel row (any "Expanded — ..." story,
   plus "Header — Add Outbound Button" and "Compact — Hover Popover", which
   both render the same full row inside their own header/hover-preview
   content) wires one up via `useOutcomeDemos` below, so the button is live
   everywhere it's visible. Compact tiles with no hover preview never render
   a channel row at all — there's no blue check to wire there.

   `useOutcomeDemos(count)` — not `useOutcomeDemo()` called once per channel
   — because React hooks can't be called a variable number of times in a
   loop; one hook call holding an array of `count` independent states (one
   per channel that needs an `outcome`) sidesteps that while still giving
   each channel its own open/resolution/tags/disposition/summary, matching
   how a real consumer lifts this per channel (`AgentNextGenPage.tsx`, the
   closest real example). `withOutcomes` then zips a base channel list with
   that array, purely (no hooks), so it can run once per render without
   itself needing to be a hook. */

const OUTCOME_RESOLUTION_OPTIONS: ChannelOutcomeConfig["resolutionOptions"] = [
  { label: "Open", dotColor: "var(--lyra-color-status-info-strong)" },
  { label: "Pending", dotColor: "var(--lyra-color-status-warning-strong)" },
  { label: "Escalated", dotColor: "var(--lyra-color-status-critical-strong)" },
  { label: "Resolved", dotColor: "var(--lyra-color-status-success-strong)" },
  { label: "Closed", dotColor: "var(--lyra-color-fg-secondary)" },
];

const OUTCOME_TAG_OPTIONS: TagPickerOption[] = [
  { label: "Billing", variant: "warning" },
  { label: "Technical", variant: "info" },
  { label: "Escalated", variant: "critical" },
  { label: "Follow-Up", variant: "purple" },
  { label: "Resolved", variant: "success" },
];

const OUTCOME_DISPOSITION_OPTIONS: DispositionOption[] = [
  { value: "resolved-first-contact", label: "Resolved — First Contact", category: "Resolution" },
  { value: "resolved-follow-up", label: "Resolved — Follow-Up Required", category: "Resolution" },
  { value: "escalated-tier-2", label: "Escalated — Tier 2", category: "Escalation" },
  { value: "transferred-billing", label: "Transferred — Billing", category: "Transfer" },
  { value: "no-action-needed", label: "No Action Needed", category: "Resolution" },
];

/** One independent `{ open, resolution, selectedTags, dispositionCode,
 *  summary }` slice of state per channel — plain data, not the field's own
 *  React state, so a single `useState` can hold all `count` of them and
 *  every field's setter can update just its own channel's slice
 *  immutably. */
interface DemoOutcomeState {
  open: boolean;
  resolution: string;
  selectedTags: string[];
  dispositionCode: string;
  summary: string;
}

function makeDemoOutcomeState(initialTags: string[] = []): DemoOutcomeState {
  return { open: false, resolution: "Open", selectedTags: initialTags, dispositionCode: "", summary: "" };
}

/** Builds `count` independent, fully-wired `ChannelOutcomeConfig`s from one
 *  `useState` call — see this section's own top-of-file doc comment for
 *  why it's shaped this way instead of one `useState` per channel.
 *  `initialTags` (optional, by channel index) seeds a starting tag
 *  selection so at least one demo channel doesn't look freshly blank. */
function useOutcomeDemos(count: number, initialTags: Record<number, string[]> = {}): ChannelOutcomeConfig[] {
  const [states, setStates] = React.useState<DemoOutcomeState[]>(() =>
    Array.from({ length: count }, (_, i) => makeDemoOutcomeState(initialTags[i]))
  );

  const updateAt = (index: number, patch: Partial<DemoOutcomeState>) =>
    setStates((prev) => prev.map((s, i) => (i === index ? { ...s, ...patch } : s)));

  return states.map((state, index) => ({
    open: state.open,
    onOpenChange: (open: boolean) => updateAt(index, { open }),
    resolutionOptions: OUTCOME_RESOLUTION_OPTIONS,
    resolution: state.resolution,
    onResolutionChange: (resolution: string) => updateAt(index, { resolution }),
    tagOptions: OUTCOME_TAG_OPTIONS,
    selectedTags: state.selectedTags,
    onTagsChange: (selectedTags: string[]) => updateAt(index, { selectedTags }),
    dispositionOptions: OUTCOME_DISPOSITION_OPTIONS,
    dispositionCode: state.dispositionCode,
    onDispositionChange: (dispositionCode: string) => updateAt(index, { dispositionCode }),
    summary: state.summary,
    onSummaryChange: (summary: string) => updateAt(index, { summary }),
    onSave: () => updateAt(index, { open: false }),
    onCancel: () => updateAt(index, { open: false }),
  }));
}

/** Zips a base channel list with an equal-or-longer-length outcomes array,
 *  purely — no hooks, so it's safe to call on every render (unlike
 *  `useOutcomeDemos` itself, this isn't one). */
function withOutcomes(channels: InteractionChannel[], outcomes: ChannelOutcomeConfig[]): InteractionChannel[] {
  return channels.map((channel, i) => ({ ...channel, outcome: outcomes[i] }));
}

// Precomputed once at module load (like `SOFIA_CHANNELS`/`RAY_CHANNELS`
// above), not inline in a render body — a single-channel wired story's
// `channels` array is otherwise easy to accidentally rebuild on every
// re-render (e.g. every keystroke in the Summary field, since that's
// `useState` inside the very story component reading this constant), and
// a fresh `randomSkill()` call each time would re-roll the skill name
// shown under the chip as you type. One fixed value per story avoids that
// class of bug outright rather than relying on every story author
// remembering to memoize it.
const EXPANDED_PREVIEW = randomSkill();
const EXPANDED_NOT_AWAITING_PREVIEW = randomSkill();
const EXPANDED_INACTIVE_PREVIEW = randomSkill();
const EXPANDED_NO_CUSTOMER_PREVIEW = randomSkill();
const EXPANDED_VOICE_PREVIEW = randomSkill();
const STACK_VOICE_PREVIEW = randomSkill();
const NAV_HEADER_VOICE_PREVIEW = randomSkill();
const HOVER_CARD_VOICE_PREVIEW = randomSkill();
const EXPANDED_NEW_ASSIGNMENT_PREVIEW = randomSkill();

function ExpandedDemo() {
  const [outcome] = useOutcomeDemos(1, { 0: ["Technical"] });
  return (
    <InteractionNavItem
      customerName="Sofia Martinez"
      active
      awaitingResponse
      elapsed="08:27"
      expanded
      // Per v2: every real card is `collapsible` unconditionally — the
      // chevron replaces `headerAction` in the header row and toggles this
      // card's own channel list independently of any other card's.
      collapsible
      channels={[{
        type: "chat",
        elapsed: "08:27",
        current: true,
        awaitingResponse: true,
        preview: EXPANDED_PREVIEW,
        outcome,
      }]}
    />
  );
}

export const Expanded: Story = {
  name: "Expanded — Active, Awaiting Response",
  render: () => <ExpandedDemo />,
  parameters: { layout: "padded" },
};

/* ── Expanded — new assignment ──
   `isNewAssignment` (interaction-nav-item.tsx) — the red dot to the far
   left of the customer name, ahead of any other header-row badge. Set
   `awaitingResponse` to `false` here on purpose, per explicit request
   ("they can have the red dot and not be awaiting a response"), the same
   decoupling "Compact — New Assignment" above demonstrates for the
   collapsed tile's own red badges. */
function ExpandedNewAssignmentDemo() {
  const [outcome] = useOutcomeDemos(1);
  return (
    <InteractionNavItem
      customerName="Sofia Martinez"
      active
      awaitingResponse={false}
      isNewAssignment
      elapsed="08:27"
      expanded
      collapsible
      channels={[{
        type: "chat",
        elapsed: "08:27",
        current: true,
        preview: EXPANDED_NEW_ASSIGNMENT_PREVIEW,
        outcome,
      }]}
    />
  );
}

export const ExpandedNewAssignment: Story = {
  name: "Expanded — New Assignment",
  render: () => <ExpandedNewAssignmentDemo />,
  parameters: { layout: "padded" },
};

function ExpandedActiveNotAwaitingDemo() {
  const [outcome] = useOutcomeDemos(1);
  return (
    <InteractionNavItem
      customerName="Priya Nair"
      active
      awaitingResponse={false}
      elapsed="03:41"
      expanded
      collapsible
      channels={[{
        type: "chat",
        elapsed: "03:41",
        current: true,
        preview: EXPANDED_NOT_AWAITING_PREVIEW,
        outcome,
      }]}
    />
  );
}

export const ExpandedActiveNotAwaiting: Story = {
  name: "Expanded — Active, Not Awaiting Response",
  render: () => <ExpandedActiveNotAwaitingDemo />,
  parameters: { layout: "padded" },
};

function ExpandedInactiveDemo() {
  const [outcome] = useOutcomeDemos(1);
  return (
    <InteractionNavItem
      customerName="Ray Torres"
      active={false}
      awaitingResponse
      elapsed="06:12"
      expanded
      collapsible
      channels={[{
        type: "chat",
        elapsed: "06:12",
        current: true,
        awaitingResponse: true,
        preview: EXPANDED_INACTIVE_PREVIEW,
        outcome,
      }]}
    />
  );
}

export const ExpandedInactive: Story = {
  name: "Expanded — Inactive, Awaiting Response",
  render: () => <ExpandedInactiveDemo />,
  parameters: { layout: "padded" },
};

function ExpandedNoCustomerDemo() {
  const [outcome] = useOutcomeDemos(1);
  return (
    <InteractionNavItem
      active={false}
      awaitingResponse={false}
      elapsed="02:05"
      expanded
      collapsible
      channels={[{
        type: "voice",
        elapsed: "02:05",
        current: true,
        preview: EXPANDED_NO_CUSTOMER_PREVIEW,
        outcome,
      }]}
    />
  );
}

export const ExpandedNoCustomer: Story = {
  name: "Expanded — No Customer (not awaiting)",
  render: () => <ExpandedNoCustomerDemo />,
  parameters: { layout: "padded" },
};

function ExpandedMultiChannelActiveDemo() {
  const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length, { 3: ["Technical"] });
  return (
    <InteractionNavItem
      customerName="Sofia Martinez"
      active
      awaitingResponse
      elapsed="08:27"
      expanded
      collapsible
      channels={withOutcomes(SOFIA_CHANNELS, outcomes)}
    />
  );
}

export const ExpandedMultiChannelActive: Story = {
  name: "Expanded — Multiple Channels (Active Card)",
  render: () => <ExpandedMultiChannelActiveDemo />,
  parameters: { layout: "padded" },
};

function ExpandedMultiChannelInactiveDemo() {
  const outcomes = useOutcomeDemos(RAY_CHANNELS.length);
  return (
    <InteractionNavItem
      customerName="Ray Torres"
      active={false}
      awaitingResponse
      elapsed="04:00"
      expanded
      collapsible
      channels={withOutcomes(RAY_CHANNELS, outcomes)}
    />
  );
}

export const ExpandedMultiChannelInactive: Story = {
  name: "Expanded — Multiple Channels (Inactive Card)",
  render: () => <ExpandedMultiChannelInactiveDemo />,
  parameters: { layout: "padded" },
};

export const ExpandedVoice: Story = {
  name: "Expanded — Voice Channel",
  // `channels` (a nested array prop) isn't something Storybook's
  // autogenerated Controls can reach into on its own, so this story adds
  // its own top-level `showDismissButton` arg/control (not a real
  // `InteractionNavItem` prop — same "custom arg feeding a nested field"
  // pattern `MenuItemBasic` uses in ListItem.stories.tsx) and a `render`
  // that threads it onto the one voice channel's own
  // `InteractionChannel.showDismissButton` (channel-row.tsx) below.
  args: {
    showDismissButton: false,
  },
  argTypes: {
    showDismissButton: {
      name: "Show Unassign & Dismiss",
      control: "boolean",
      description:
        'Toggles the voice channel row\'s standalone "Unassign & Dismiss" icon button (`InteractionChannel.showDismissButton`, channel-row.tsx). Off by default — that same action stays reachable from the row\'s kebab ("More Options") menu either way.',
    },
  },
  render: (args) => {
    const [outcome] = useOutcomeDemos(1);
    return (
      <InteractionNavItem
        customerName="Marcus Webb"
        active
        awaitingResponse={false}
        elapsed="01:12"
        expanded
        collapsible
        channels={[{
          type: "voice",
          elapsed: "01:12",
          current: true,
          preview: EXPANDED_VOICE_PREVIEW,
          showDismissButton: args.showDismissButton,
          outcome,
        }]}
      />
    );
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
function ExpandedCollapsedDemo() {
  const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length);
  return (
    <InteractionNavItem
      customerName="Sofia Martinez"
      active
      awaitingResponse
      elapsed="08:27"
      expanded
      collapsible
      channelsExpandedOverride={{ expanded: false, version: 1 }}
      channels={withOutcomes(SOFIA_CHANNELS, outcomes)}
    />
  );
}

export const ExpandedCollapsed: Story = {
  name: "Expanded — Collapsible (Channels Collapsed)",
  render: () => <ExpandedCollapsedDemo />,
  parameters: { layout: "padded" },
};

function ExpandedStackDemo() {
  const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length + RAY_CHANNELS.length + 1);
  const sofiaOutcomes = outcomes.slice(0, SOFIA_CHANNELS.length);
  const rayOutcomes = outcomes.slice(SOFIA_CHANNELS.length, SOFIA_CHANNELS.length + RAY_CHANNELS.length);
  const [voiceOutcome] = outcomes.slice(SOFIA_CHANNELS.length + RAY_CHANNELS.length);
  return (
    <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
      <InteractionNavItem
        customerName="Sofia Martinez"
        active
        awaitingResponse
        elapsed="08:27"
        expanded
        collapsible
        channels={withOutcomes(SOFIA_CHANNELS, sofiaOutcomes)}
      />
      <InteractionNavItem
        customerName="Ray Torres"
        awaitingResponse
        elapsed="04:00"
        expanded
        collapsible
        channels={withOutcomes(RAY_CHANNELS, rayOutcomes)}
      />
      <InteractionNavItem
        elapsed="02:05"
        expanded
        collapsible
        channels={[{ type: "voice", elapsed: "02:05", current: true, preview: STACK_VOICE_PREVIEW, outcome: voiceOutcome }]}
      />
    </div>
  );
}

export const ExpandedStack: Story = {
  name: "Expanded — Stacked (rail open)",
  render: () => <ExpandedStackDemo />,
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
    const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length + RAY_CHANNELS.length + 1);
    const sofiaOutcomes = outcomes.slice(0, SOFIA_CHANNELS.length);
    const rayOutcomes = outcomes.slice(SOFIA_CHANNELS.length, SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    const [voiceOutcome] = outcomes.slice(SOFIA_CHANNELS.length + RAY_CHANNELS.length);
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
          channels={withOutcomes(SOFIA_CHANNELS, sofiaOutcomes)}
          headerAction={getHeaderAction("sofia-martinez")}
        />
        <InteractionNavItem
          customerName="Ray Torres"
          awaitingResponse
          elapsed="04:00"
          expanded
          channels={withOutcomes(RAY_CHANNELS, rayOutcomes)}
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
          channels={[{ type: "voice", elapsed: "02:05", current: true, preview: NAV_HEADER_VOICE_PREVIEW, outcome: voiceOutcome }]}
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
   `OutboundContactRow`'s own hover flyout in create-new.tsx. The hover
   preview renders the same `ChannelRow`s as the expanded card (see that
   file's own doc comment on `!expanded`), so the blue check here opens the
   same wired Outcome popover too. */

export const CompactHoverCard: Story = {
  name: "Compact — Hover Popover",
  render: () => {
    const { getHeaderAction } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length + RAY_CHANNELS.length + 1);
    const sofiaOutcomes = outcomes.slice(0, SOFIA_CHANNELS.length);
    const rayOutcomes = outcomes.slice(SOFIA_CHANNELS.length, SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    const [voiceOutcome] = outcomes.slice(SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    return (
      <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG} />
        <InteractionNavItem
          customerName="Sofia Martinez"
          active
          awaitingResponse
          elapsed="08:27"
          channels={withOutcomes(SOFIA_CHANNELS, sofiaOutcomes)}
          headerAction={getHeaderAction("sofia-martinez")}
        />
        <InteractionNavItem
          customerName="Ray Torres"
          awaitingResponse
          elapsed="04:00"
          channels={withOutcomes(RAY_CHANNELS, rayOutcomes)}
          headerAction={getHeaderAction("ray-torres")}
        />
        <InteractionNavItem
          elapsed="02:05"
          channels={[{ type: "voice", elapsed: "02:05", current: true, preview: HOVER_CARD_VOICE_PREVIEW, outcome: voiceOutcome }]}
          headerAction={getHeaderAction("anonymous-voice")}
        />
      </div>
    );
  },
};
