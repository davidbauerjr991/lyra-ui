import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LeftNav, type NavItem } from "../left-nav";
import { CreateNew, OutboundAddButton, type CreateNewOutboundContact, type CreateNewOutboundConfig } from "../create-new";
import { InteractionNavItem, type InteractionChannel, type ChannelType } from "../interaction-nav-item";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";

/** Body copy below each channel chip shows the routing skill, not a message
 *  preview — randomized per channel from this pool of sample skill names. */
const SKILL_NAMES = ["Chat_General", "CXi SME Email", "CXoneSMS_1-833-457-2672"];
function randomSkill(): string {
  return SKILL_NAMES[Math.floor(Math.random() * SKILL_NAMES.length)];
}
import { Container } from "../container";
import { ContentArea } from "../content-area";
import {
  Monitor,
  LayoutGrid,
  Settings,
  PencilRuler,
  FileText,
  Home,
  Users,
  BookUser,
  CalendarDays,
  Gauge,
  BarChart3,
} from "lucide-react";

// Computed once at module load (not inside the story's render function) so
// the randomized skill name stays fixed across re-renders — e.g. toggling
// which InteractionNavItem card is active shouldn't reshuffle these.
const AGENT_NEXT_GEN_SOFIA_CHANNELS: InteractionChannel[] = [
  {
    type: "chat",
    elapsed: "08:27",
    current: true,
    awaitingResponse: true,
    preview: randomSkill(),
  },
];
const AGENT_NEXT_GEN_RAY_CHANNELS: InteractionChannel[] = [
  {
    type: "chat",
    elapsed: "06:12",
    current: true,
    awaitingResponse: true,
    preview: randomSkill(),
  },
];
const AGENT_NEXT_GEN_CALL_CHANNELS: InteractionChannel[] = [
  {
    type: "voice",
    elapsed: "02:05",
    current: true,
    preview: randomSkill(),
  },
];

/** One InteractionNavItem card in the "Agent Next Gen Left Nav" story below.
 *  Kept as a flat elapsed string (not the live-ticking clock-tick tracking
 *  `agent-next-gen-v1`/`AgentNextGenTemplate.stories.tsx` use) since this
 *  story only needs to demonstrate a card appearing, not a running timer —
 *  new cards just start at "00:00". */
interface AgentNextGenDemoInteraction {
  id: string;
  customerName?: string;
  awaitingResponse?: boolean;
  elapsed: string;
  channels: InteractionChannel[];
  /** Address(es)/number(s)/handle(s) used to start each currently-open
   *  channel with this contact — a list per channel type since two channels
   *  can share a type (e.g. two SMS threads on different numbers). Kept as
   *  its own map rather than a field on `InteractionChannel` itself, since
   *  that type is `channel-row.tsx`'s own rendering prop shape (shared with
   *  every other InteractionNavItem consumer) and has no use for an address
   *  CreateNew needs but the row itself never displays. Feeds CreateNew's
   *  `openChannelAddresses` so reopening the outbound picker for this
   *  contact disables only those exact addresses, not the whole field —
   *  see agent-next-gen-v1's AgentNextGenPage.tsx for the other two
   *  consumers' equivalent (there, a local `TrackedChannel.value` on each
   *  channel works instead, since those use their own local channel type
   *  rather than `InteractionChannel` directly). */
  channelAddresses?: Partial<Record<ChannelType, string[]>>;
}

const INITIAL_AGENT_NEXT_GEN_INTERACTIONS: AgentNextGenDemoInteraction[] = [
  { id: "sofia", customerName: "Sofia Martinez", awaitingResponse: true, elapsed: "08:27", channels: AGENT_NEXT_GEN_SOFIA_CHANNELS },
  { id: "ray",   customerName: "Ray Torres",     awaitingResponse: true, elapsed: "06:12", channels: AGENT_NEXT_GEN_RAY_CHANNELS },
  { id: "call",  elapsed: "02:05", channels: AGENT_NEXT_GEN_CALL_CHANNELS },
];

const sampleItems: NavItem[] = [
  {
    icon: <Monitor className="h-4 w-4" strokeWidth={1.5} />,
    label: "Monitor",
  },
  {
    icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />,
    label: "Dashboard",
  },
  {
    icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
    label: "Configure",
    expandable: true,
    defaultOpen: false,
    children: [
      { label: "General" },
      { label: "Security" },
      { label: "Integrations" },
    ],
  },
  {
    icon: <PencilRuler className="h-4 w-4" strokeWidth={1.5} />,
    label: "Designer",
    expandable: true,
    defaultOpen: true,
    children: [
      { label: "Desktop Library", active: true },
      { label: "Templates" },
      { label: "Components" },
    ],
  },
  {
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    label: "Examples",
  },
  {
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    label: "Product Mockups",
  },
];

const meta: Meta<typeof LeftNav> = {
  title: "UI/LeftNav",
  component: LeftNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen bg-lyra-bg-surface-shell">
        <Story />
        <ContentArea>
          <Container className="flex flex-1" />
        </ContentArea>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LeftNav>;

/* ── Default (expanded) ── */

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <LeftNav
        items={sampleItems}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── Collapsed ── */

export const Collapsed: Story = {
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <LeftNav
        items={sampleItems}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── No Toggle (always expanded) ── */

export const NoToggle: Story = {
  name: "No Toggle Button",
  render: () => (
    <LeftNav items={sampleItems} open={true} collapsible={false} />
  ),
};

/* ── Agent Next Gen ── */

export const AgentNextGen: Story = {
  name: "Agent Next Gen Left Nav",
  render: () => {
    const [open, setOpen] = useState(false);
    // Click any InteractionNavItem card below to make it the active one —
    // lets you test the active/inactive + awaiting-response border and
    // highlight states interactively instead of only via fixed args.
    const [activeId, setActiveId] = useState("sofia");

    // Seeded with the 3 fixed demo cards below; grows as the agent launches
    // new outbound calls from CreateNew's "New Outbound" flow (see
    // handleStartCall/handleQuickDial) — same merge-by-id pattern the live
    // app (`agent-next-gen-v1`) and `AgentNextGenTemplate.stories.tsx` use,
    // so redialing an existing contact restarts their card instead of
    // stacking a duplicate.
    const [interactions, setInteractions] = useState<AgentNextGenDemoInteraction[]>(
      INITIAL_AGENT_NEXT_GEN_INTERACTIONS
    );
    // Set by an InteractionNavItem card's own "Add Outbound" button (see
    // OutboundAddButton usage below) to deep-link CreateNew straight to the
    // call-setup screen for that contact+channel — see
    // CreateNewOutboundConfig.launchRequest's own doc comment in create-new.tsx.
    // Cleared back to null once CreateNew reports it's been handled.
    const [outboundLaunchRequest, setOutboundLaunchRequest] = useState<{ contactId: string; channel: ChannelType } | null>(null);

    // Starting a new outbound call/quick dial adds (or restarts) a card —
    // and, since a collapsed nav would otherwise hide that new card from
    // view entirely, also expands the nav so the agent immediately sees
    // what they just started instead of having to notice and open it
    // themselves.
    const handleStartCall = (selection: {
      contact: CreateNewOutboundContact;
      channel: ChannelType;
      phone: string;
      skillId: string;
    }) => {
      // Body copy shows the *actual* skill the agent picked in CreateNew's
      // outbound flow — not a random one — so the card reads as "here's
      // what this call was routed under," matching what the agent just
      // chose. `selection.skillId` is the value from `OUTBOUND_CONFIG.
      // skillOptions`; resolve it back to that option's own label.
      const skillLabel = OUTBOUND_CONFIG.skillOptions.find((o) => o.value === selection.skillId)?.label;
      const newChannel: InteractionChannel = {
        id: `${selection.channel}:${selection.phone}`,
        type: selection.channel,
        elapsed: "00:00",
        current: true,
        preview: skillLabel,
      };
      setInteractions((prev) => {
        const idx = prev.findIndex((i) => i.id === selection.contact.id);
        // No existing card for this contact — start a new one.
        if (idx === -1) {
          return [
            ...prev,
            {
              id: selection.contact.id,
              customerName: selection.contact.name,
              elapsed: "00:00",
              channels: [newChannel],
              channelAddresses: { [selection.channel]: [selection.phone] },
            },
          ];
        }
        // Same contact already has a card open — restart the matching
        // channel if this is the *same* type+address (e.g. redialing the
        // same SMS number), or add a new row alongside the existing ones if
        // it's a different address on the same type (e.g. a second SMS
        // thread on a different number) — those are genuinely separate
        // conversations, not a duplicate of the first, so they shouldn't
        // overwrite it.
        return prev.map((interaction, i) => {
          if (i !== idx) return interaction;
          const chIdx = interaction.channels.findIndex((c) => (c.id ?? c.type) === newChannel.id);
          const channels = chIdx === -1
            ? [...interaction.channels, newChannel]
            : interaction.channels.map((c, j) => (j === chIdx ? newChannel : c));
          const existingAddresses = interaction.channelAddresses?.[selection.channel] ?? [];
          return {
            ...interaction,
            elapsed: "00:00",
            channels,
            channelAddresses: {
              ...interaction.channelAddresses,
              [selection.channel]: existingAddresses.includes(selection.phone)
                ? existingAddresses
                : [...existingAddresses, selection.phone],
            },
          };
        });
      });
      setActiveId(selection.contact.id);
      setOpen(true);
    };

    const handleQuickDial = (phoneNumber: string) => {
      // No contact record for a quick-dialed number — key the card off the
      // number itself so redialing it restarts the existing card rather
      // than stacking up duplicates.
      const id = `quickdial:${phoneNumber}`;
      const newChannel: InteractionChannel = { id: "voice", type: "voice", elapsed: "00:00", current: true };
      setInteractions((prev) => {
        const idx = prev.findIndex((i) => i.id === id);
        if (idx === -1) return [...prev, { id, elapsed: "00:00", channels: [newChannel] }];
        return prev.map((interaction, i) => (i === idx ? { ...interaction, elapsed: "00:00", channels: [newChannel] } : interaction));
      });
      setActiveId(id);
      setOpen(true);
    };

    // "Unassign & Dismiss" — InteractionNavItem itself decides which of
    // these two applies (based on how many channels the card has open when
    // it's clicked): `onDismiss` (whole card, only called when just one
    // channel was open) removes the interaction entirely, clearing
    // `activeId` too if it was the active one, same as the live app's
    // `handleDismissInteraction`; `onDismissChannel` (only called when more
    // than one channel was open) drops just that one channel.
    const handleDismissInteraction = (id: string) => {
      setInteractions((prev) => prev.filter((interaction) => interaction.id !== id));
      setActiveId((current) => (current === id ? "" : current));
    };

    const handleDismissChannel = (id: string, channel: InteractionChannel) => {
      // Match on `id` (falling back to `type`, same as InteractionNavItem's
      // own `channelKey` convention) — two open channels can share a `type`
      // (e.g. two SMS threads on different numbers), so filtering by `type`
      // alone would drop *both* instead of just the one dismissed.
      const dismissedKey = channel.id ?? channel.type;
      // `id` is built as `${type}:${address}` in handleStartCall — recover
      // the address so only *that* entry (not every address for this type)
      // is dropped from `channelAddresses` too, otherwise a still-open
      // second SMS thread would wrongly stop disabling its own address in
      // CreateNew once this one is dismissed.
      const addressPrefix = `${channel.type}:`;
      const dismissedAddress = channel.id?.startsWith(addressPrefix) ? channel.id.slice(addressPrefix.length) : undefined;
      setInteractions((prev) =>
        prev.map((interaction) => {
          if (interaction.id !== id) return interaction;
          const remainingAddresses = dismissedAddress
            ? {
                ...interaction.channelAddresses,
                [channel.type]: (interaction.channelAddresses?.[channel.type] ?? []).filter(
                  (a) => a !== dismissedAddress
                ),
              }
            : interaction.channelAddresses;
          return {
            ...interaction,
            channels: interaction.channels.filter((c) => (c.id ?? c.type) !== dismissedKey),
            channelAddresses: remainingAddresses,
          };
        })
      );
    };

    // A contact already reachable via a currently-open channel still shows
    // that channel in "Select Channel" and every address in the detail
    // screen's second field — except the one exact address already in use,
    // which is disabled. See AgentNextGenTemplate.stories.tsx's own copy of
    // this comment for the full rationale. Recomputed whenever
    // `interactions` changes so an address re-enables once its card is
    // dismissed.
    const outboundConfig = useMemo<CreateNewOutboundConfig>(() => {
      const openAddressesByContactId = new Map<string, Partial<Record<ChannelType, string[]>>>(
        interactions
          .filter((interaction) => interaction.channelAddresses)
          .map((interaction) => [interaction.id, interaction.channelAddresses as Partial<Record<ChannelType, string[]>>])
      );
      return {
        ...OUTBOUND_CONFIG,
        groups: OUTBOUND_CONFIG.groups.map((group) => {
          if (!group.contacts) return group;
          return {
            ...group,
            contacts: group.contacts.map((contact) => {
              const openChannelAddresses = openAddressesByContactId.get(contact.id);
              if (!openChannelAddresses || Object.keys(openChannelAddresses).length === 0) return contact;
              return { ...contact, openChannelAddresses };
            }),
          };
        }),
      };
    }, [interactions]);

    // Every outbound contact (agent/team/skill/customer), keyed by id — used
    // to look up which channels a *live interaction*'s underlying contact
    // actually supports, for that card's own "Add Outbound" button (see
    // OutboundAddButton usage below). Fixed demo cards ("sofia"/"ray"/"call")
    // have no matching contact record, same as `quickdial:`-prefixed ids —
    // both fall back to no button at all (see the render below).
    const outboundContactsById = useMemo(
      () => new Map(outboundConfig.groups.flatMap((g) => g.contacts ?? []).map((c) => [c.id, c])),
      [outboundConfig]
    );

    const items: NavItem[] = [
      {
        icon: <Home className="h-4 w-4" strokeWidth={1.5} />,
        label: "Home",
      },
      {
        icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
        label: "Contacts",
      },
      {
        icon: <BookUser className="h-4 w-4" strokeWidth={1.5} />,
        label: "Directory",
      },
      {
        icon: <CalendarDays className="h-4 w-4" strokeWidth={1.5} />,
        label: "Schedule",
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Settings",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
        header={
          <>
            <CreateNew
              title="New Outbound"
              outbound={{
                ...outboundConfig,
                onStartCall: handleStartCall,
                onQuickDial: handleQuickDial,
                launchRequest: outboundLaunchRequest,
                onLaunchRequestHandled: () => setOutboundLaunchRequest(null),
              }}
              expanded={open}
            />
            {interactions.map((interaction) => {
              // Fixed demo cards and quick-dialed numbers have no backing
              // Agent/Customer/Team/Skill contact record to look up real
              // per-contact channel support from — offer the full unfiltered
              // channel list for those so the "+" still appears on every
              // card's header, per design request.
              const contactRecord = outboundContactsById.get(interaction.id);
              const addOutboundChannelOptions = contactRecord
                ? OUTBOUND_CONFIG.channelOptions.filter((c) => contactRecord.channels.includes(c.id))
                : OUTBOUND_CONFIG.channelOptions;
              return (
                <InteractionNavItem
                  key={interaction.id}
                  customerName={interaction.customerName}
                  active={activeId === interaction.id}
                  onClick={() => setActiveId(interaction.id)}
                  awaitingResponse={interaction.awaitingResponse}
                  elapsed={interaction.elapsed}
                  expanded={open}
                  channels={interaction.channels}
                  onDismiss={() => handleDismissInteraction(interaction.id)}
                  onDismissChannel={(channel) => handleDismissChannel(interaction.id, channel)}
                  headerAction={
                    <OutboundAddButton
                      channelOptions={addOutboundChannelOptions}
                      onSelect={(channel) => setOutboundLaunchRequest({ contactId: interaction.id, channel })}
                    />
                  }
                />
              );
            })}
          </>
        }
      />
    );
  },
};

/* ── Outbound Engagement ── */

export const OutboundEngagement: Story = {
  name: "Outbound Engagement Left Nav",
  render: () => {
    const [open, setOpen] = useState(true);
    const items: NavItem[] = [
      {
        icon: <Gauge className="h-4 w-4" strokeWidth={1.5} />,
        label: "Monitor",
        active: true,
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Configure",
      },
      {
        icon: <BarChart3 className="h-4 w-4" strokeWidth={1.5} />,
        label: "Review",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── Custom Items ── */

export const CustomItems: Story = {
  name: "Custom Items",
  render: () => {
    const [open, setOpen] = useState(true);
    const items: NavItem[] = [
      {
        icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />,
        label: "Overview",
        active: true,
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Settings",
        expandable: true,
        defaultOpen: true,
        children: [
          { label: "Profile" },
          { label: "Notifications", active: true },
          { label: "Privacy" },
        ],
      },
      {
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
        label: "Reports",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};
