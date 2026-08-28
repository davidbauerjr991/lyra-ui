import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Draggable, type DraggableVariant, type EmbeddablePanelContent } from "../draggable";
import { AppHeader } from "../app-header";
import { AppName } from "../app-name";
import { AppMenu, type AppMenuGroup } from "../app-menu";
import { CXoneLogo } from "../cxone-logo";
import { ActionIconButton } from "../actions";
import { NotificationsBell } from "../notifications-bell";
import { useAgentNotificationsContent, type AgentNotification } from "../agent-notifications";
import { AgentChat } from "../agent-chat";
import { useAgentSearchContent } from "../agent-search";
import { useScreenPopContent } from "../screen-pop";
import { useScheduleContent } from "../schedule-panel";
import { KebabMenuButton } from "../kebab-menu-button";
import { type MenuEntry } from "../menu";
import { Badge } from "../badge";
import { Separator } from "../separator";
import { Tooltip } from "../tooltip";
import { ContainerHeader } from "../container-header";
import { AgentProfile, type AgentStatus } from "../agent-profile";
import { LeftNav, type NavItem } from "../left-nav";
import { CreateNew, useOutboundAddButton, type CreateNewOutboundContact, type CreateNewOutboundConfig } from "../create-new";
import { InteractionNavItem, type InteractionChannel, type ChannelType } from "../interaction-nav-item";
import { AssignmentsSectionCaption, type AssignmentSortValue } from "../assignments-section-caption";
import { InteractionComposer, type InteractionComposerQuickReplyItem } from "../interaction-composer";
import { SessionDetailsSection, type SessionDetailsInfo, type SessionDetailsFingerprint } from "../session-details";
import { ChatMessage, type ChatMessageTag } from "../chat-message";
import type { TagPickerOption } from "../tag-picker";
import { ChannelTab, CHANNEL_TYPE_META } from "../channel-row";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";
import { ContentArea } from "../content-area";
import { Container } from "../container";
import { InteriorPanel } from "../interior-panel";
import { SidePanel } from "../side-panel";
import { PanelPinButton } from "../panel-pin-button";
import { PageHeader } from "../page-header";
import { Icon } from "../icon";
import { Toast, ToastContainer, useToast } from "../toast";
import {
  AgentDashboard,
  AgentDashboardHeader,
  AgentDashboardQueueDrilldown,
  AgentDashboardContactHistoryEntryDetail,
  AGENT_DASHBOARD_QUEUE_ITEMS,
  AGENT_DASHBOARD_QUEUE_SUB_ITEMS,
  type AgentDashboardContactHistoryEntry,
} from "../agent-dashboard";
// Shared ported v2 Customer Information experience (record draft, width
// guards, toggle-with-hover-preview, composed right-docked panel) — the
// same module CustomerInformationPanel.stories.tsx and PageHeader.
// stories.tsx's "Record Header (Customers)" story wire. See its own doc
// comments for the full v2 rationale.
import {
  buildCustomerInfoFields,
  useCustomerRecordDraft,
  useCustomerPanelWidthGuards,
  CustomerInformationDockedPanel,
  CustomerInformationPanelToggle,
} from "./customer-information-demo";
import { TabList, Tab } from "../tabs";
import { Button } from "../button";
import appIcon from "../../assets/app-icon.svg";
import { Input } from "../input";
import { cn } from "../../lib/utils";
import {
  Bell,
  CalendarDays,
  GripVertical,
  Home,
  LayoutGrid,
  MessageSquare,
  MonitorUp,
  Pin,
  Search,
  Settings,
  Plus,
  User,
  UserCog,
  PhoneOutgoing,
  RotateCcw,
  PanelRightClose,
  type LucideIcon,
} from "lucide-react";

/* ── App menu data ──
   Matches agent-next-gen-v2's own `buildAppMenuGroups` exactly
   (agent-next-gen-outbound-data.tsx) — one group, one tier switcher per
   entry, "Agent Workspace 2.0" (the 2.0/base tier, this template's own
   analog) marked active. No `onClick` here (this story has no other tiers
   to navigate to), unlike v2's real cross-page navigation. */
const APP_MENU_GROUPS: AppMenuGroup[] = [
  {
    items: [
      { label: "Agent Workspace 2.0", active: true },
      { label: "Agent Workspace 2.0 Advanced" },
      { label: "Agent Workspace 2.0 Premium" },
    ],
  },
];

/* ── Left nav data ──
   The "Create New" header uses the shared Outbound-flow config (see
   create-new-outbound-mock.tsx) rather than the old flat channel list. NAV_
   ITEMS and the header's InteractionNavItem cards mirror LeftNav.stories.tsx's
   "Agent Next Gen Left Nav" story exactly (no item marked `active` — the rail
   itself doesn't track a "current page" here, same as that story). */

const NAV_ITEMS: NavItem[] = [
  // Home + Settings only (Contacts/Directory/Schedule removed per explicit
  // request) — the rail stays minimal; everything else lives in the header
  // app-panel icons instead.
  {
    icon: <Home className="h-4 w-4" strokeWidth={1.5} />,
    label: "Home",
  },
  {
    icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
    label: "Settings",
  },
];

/** A channel open within one live interaction — tracks when it started
 *  (in ticks of the shared clock below) rather than a fixed elapsed string,
 *  so the rendered `InteractionChannel.elapsed` keeps counting up live. */
interface TrackedChannel {
  /** Unique identity for this specific channel, so two channels of the same
   *  `type` (e.g. two SMS threads on different numbers) are tracked as
   *  separate rows instead of one overwriting the other — see
   *  `InteractionChannel.id`'s own doc comment in channel-row.tsx. Built
   *  from `type` + `value` so restarting the *same* address correctly
   *  reuses/refreshes the existing row while a different address never
   *  collides with it. */
  id: string;
  type: ChannelType;
  startTick: number;
  /** Routing skill label for this channel, shown as its body copy — looked
   *  up from `OUTBOUND_CONFIG.skillOptions` at start-call time. */
  preview?: string;
  /** The phone number/email address/WhatsApp handle this channel was
   *  started on — surfaced back into CreateNew's `openChannelAddresses` so
   *  reopening the outbound picker for this contact disables only that
   *  exact address, not the whole field. See agent-next-gen-v1's own copy
   *  of this doc comment. */
  value?: string;
  /** Human-readable version of `value` for display on this channel's
   *  `ChannelTab` (e.g. "(456) 383-3329" vs. `value`'s raw "+14563833329").
   *  See agent-next-gen-v1's own copy of this field for the full rationale. */
  addressLabel?: string;
  /** Whether the customer has sent a message on this channel that the agent
   *  hasn't replied to yet — drives the row's red/critical chip+clock
   *  styling (green/success otherwise). Always omitted (falsy) at
   *  start-call/quick-dial time: an agent-initiated outbound channel has
   *  nothing pending from the customer the moment it opens, so it should
   *  never render red immediately just because its `type` isn't voice. See
   *  agent-next-gen-v1's own copy of this doc comment. */
  awaitingResponse?: boolean;
  /** Synthesized message count/conversation id shown on this channel's
   *  `ChannelTab` tooltip — see agent-next-gen-v1's own copy of these two
   *  fields for the full rationale. */
  messageCount?: number;
  interactionId?: string;
}

/** One live interaction in the left nav — an agent/customer/team/skill
 *  contact (or, for a quick-dialed number with no contact record, the
 *  number itself) plus every channel currently open with them. Keyed by
 *  contact id (or `quickdial:<number>`) so starting a second channel with
 *  the same contact adds to this interaction's `channels` instead of
 *  creating a second card — per InteractionNavItem's own design (one card
 *  per interaction, one row per channel). */
interface ActiveInteraction {
  id: string;
  customerName?: string;
  /** Customer/agent/team/skill record id shown under the name on this
   *  interaction's detail page header — the contact's real id
   *  (`CreateNewOutboundContact.subtitle`) when known, or a freshly
   *  generated case number (`generateCaseId`) for quick-dialed numbers with
   *  no matching record. See agent-next-gen-v1's own copy of this field. */
  recordId: string;
  channels: TrackedChannel[];
  /** Which open channel is "current" — shared between this interaction's
   *  InteractionNavItem card and its ChannelTab bar. See agent-next-gen-v1's
   *  own copy of this field for the full rationale. */
  currentChannelId?: string;
}

/** Fallback case id for interactions with no real record behind them
 *  (quick-dialed numbers) — see agent-next-gen-v1's own copy. */
function generateCaseId(): string {
  return `CS-${Math.floor(1000000 + Math.random() * 9000000)}`;
}

/** Synthesized per-channel conversation/session id — see agent-next-gen-v1's
 *  own copy of this helper for the full rationale. */
function generateInteractionId(): string {
  return String(Math.floor(100000000000 + Math.random() * 900000000000));
}

/** Renders a tick count (seconds since the channel/interaction started) as
 *  the "MM:SS" format InteractionNavItem's `elapsed` prop expects. */
function formatElapsedTime(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds);
  const mm = Math.floor(clamped / 60);
  const ss = clamped % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

/** Local equivalent of agent-next-gen-v2's own `sortAssignments` — same
 *  three orders (`AssignmentsSectionCaption`'s `AssignmentSortValue`), just
 *  over this story's own `ActiveInteraction`/`TrackedChannel` shape instead
 *  of v2's `Interaction`/`Thread`. One simplification: v2's "Longest Wait"
 *  ranks by `lastCustomerMessageTick ?? startTick` — a separate tick
 *  recorded the moment the customer's own last message actually landed, so
 *  a channel that's been open a while but only recently WENT quiet on the
 *  customer's side ranks by that recent silence, not by when it first
 *  opened. `TrackedChannel` here has no such field (only `startTick`), so
 *  this always falls back to it — every wait is measured "since this
 *  channel opened," not "since the customer's last message" — fine for a
 *  story's demo data, where a channel's `awaitingResponse` is set once at
 *  seed time and never actually updates. `interactions` itself stays in
 *  insertion order for everything else that reads it (`activeInteraction`,
 *  dismiss/redial handlers, etc.) — only this rendering reorders a copy. */
function sortAssignments(interactions: ActiveInteraction[], sort: AssignmentSortValue): ActiveInteraction[] {
  if (sort === "awaitingLongest") {
    const key = (i: ActiveInteraction) => {
      const awaitingTicks = i.channels.filter((c) => c.awaitingResponse).map((c) => c.startTick);
      return awaitingTicks.length > 0 ? Math.min(...awaitingTicks) : Infinity;
    };
    // Ascending, not descending like the other two — the OLDEST tick (the
    // longest wait) needs to sort first here.
    return [...interactions].sort((a, b) => key(a) - key(b));
  }
  const key = (i: ActiveInteraction) => {
    const ticks = i.channels.map((c) => c.startTick);
    return sort === "startDate" ? Math.min(...ticks) : Math.max(...ticks);
  };
  return [...interactions].sort((a, b) => key(b) - key(a));
}

/* ── Sample notifications ── */

/** Seed data for the "Active Interaction" story below — 3 already-active
 *  assignments, each the exact shape `handleStartCall` produces for a real
 *  outbound call, using the same phone/skill option values as
 *  `OUTBOUND_CONFIG` (`create-new-outbound-mock.tsx`) so this story renders
 *  identically to what starting each one by hand would produce. Ordered
 *  oldest → newest (array order is render order, same as every card
 *  `handleStartCall` appends via `setInteractions((prev) => [...prev,
 *  ...])`) so David Santos' card — the latest/most-recently-started — is
 *  last; `AgentNextGenTemplate` initializes `activeInteractionId` to the
 *  last entry here (see its own doc comment below), so that's also the one
 *  shown active/expanded on load.
 *
 *  Each channel's already-elapsed time at mount comes from a NEGATIVE
 *  `startTick` rather than `0` — `clockTick` (the shared per-second timer
 *  driving every live "MM:SS" display) starts at 0, and elapsed is always
 *  computed as `clockTick - startTick`, so e.g. `startTick: -342` reads as
 *  "342 seconds (05:42) already elapsed" from the very first render, same
 *  as if that channel had actually been running that long. */
const ACTIVE_INTERACTIONS_DEMO: ActiveInteraction[] = [
  {
    id: "agent-1",
    customerName: "Jamie Torres",
    recordId: "AGT-2000",
    channels: [
      {
        id: "voice:+14563833329",
        type: "voice",
        startTick: -342,
        preview: "General Support",
        value: "+14563833329",
        addressLabel: "(456) 383-3329",
      },
    ],
    currentChannelId: "voice:+14563833329",
  },
  {
    id: "agent-2",
    customerName: "Priya Nair",
    recordId: "AGT-2001",
    channels: [
      {
        id: "sms:+14565559981",
        type: "sms",
        startTick: -135,
        preview: "Technical Support",
        value: "+14565559981",
        addressLabel: "(456) 555-9981",
        awaitingResponse: true,
        messageCount: 3,
      },
    ],
    currentChannelId: "sms:+14565559981",
  },
  {
    id: "customer-3",
    customerName: "David Santos",
    recordId: "CST-10074",
    channels: [
      {
        id: "voice:+14565550147",
        type: "voice",
        startTick: -39,
        preview: "General Support",
        value: "+14565550147",
        addressLabel: "(456) 555-0147",
      },
    ],
    currentChannelId: "voice:+14565550147",
  },
];

/** Local demo "chat fingerprint" data for `SessionDetailsSection`'s footer
 *  below — mirrors agent-next-gen-v2's own `TRANSCRIPT_SESSION_FINGERPRINT`/
 *  `_VOICE` mock constants (agent-next-gen-transcript.tsx): one shared shape
 *  for chat/SMS/WhatsApp channels, a separate WebRTC-flavored one for Voice
 *  (this story has no real per-session client telemetry for it to vary by,
 *  same reasoning those mocks document). */
const SESSION_FINGERPRINT_TEXT: SessionDetailsFingerprint = {
  os: "Windows 10",
  browser: "Edge v.150.0.0.0",
  language: "en-US",
  deviceType: "Desktop",
  applicationType: "Browser",
};
const SESSION_FINGERPRINT_VOICE: SessionDetailsFingerprint = {
  os: "macOS Sonoma",
  browser: "Chrome v.128.0.0.0",
  language: "en-US",
  deviceType: "Desktop",
  applicationType: "WebRTC Call",
};

/** Builds `SessionDetailsSection`'s `session` prop from an
 *  `ActiveInteraction`'s current channel — `startTime`/`date` derive from
 *  `mountedAt` (when this story instance loaded) offset by that channel's
 *  own `startTick` (seconds before/after mount it opened), same tick math
 *  `formatElapsedTime`'s callers already use elsewhere in this file, so a
 *  channel seeded with e.g. `startTick: -342` reports as having started
 *  ~5:42 before the page loaded rather than an arbitrary fixed clock time.
 *  `agent` reuses "John Smith" — this story's own demo agent identity (see
 *  the `AgentProfile` below). */
function buildSessionDetails(
  interaction: ActiveInteraction,
  currentChannel: TrackedChannel | undefined,
  messageCount: number,
  mountedAt: number
): SessionDetailsInfo {
  const startedAt = new Date(mountedAt + (currentChannel?.startTick ?? 0) * 1000);
  return {
    contactId: interaction.recordId,
    date: startedAt.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }),
    startTime: startedAt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
    endTime: "—",
    channel: currentChannel ? CHANNEL_TYPE_META[currentChannel.type].label : "—",
    skill: currentChannel?.preview ?? "General Support",
    agent: "John Smith",
    status: "Open",
    fingerprint: currentChannel?.type === "voice" ? SESSION_FINGERPRINT_VOICE : SESSION_FINGERPRINT_TEXT,
  };
}

/** Canned responses for `InteractionComposer`'s "/trigger" picker below —
 *  app-local business content (same "reusable UI in lyra-ui, real data in
 *  the story/app" split as `ACTIVE_INTERACTIONS_DEMO`/`OUTBOUND_CONFIG`), a
 *  representative subset of agent-next-gen-v2's own `QUICK_REPLIES`
 *  (agent-next-gen-transcript.tsx) — plain items insert verbatim, `rich`
 *  ones prompt for their `{token}` value(s) via `QuickReplyVariableForm`
 *  first. Type "/" in the composer, or click its lightning-bolt toolbar
 *  button, to try it. */
const AGENT_NEXT_GEN_QUICK_REPLIES: InteractionComposerQuickReplyItem[] = [
  { id: "greeting", title: "Greeting", template: "Thank you for contacting us. How can I assist you today?" },
  { id: "acknowledge", title: "Acknowledge", template: "I understand your concern. Let me look into that for you." },
  { id: "escalate", title: "Escalate", template: "I'm escalating this to our specialist team right away." },
  {
    id: "timeline",
    title: "Processing Time",
    template: "Please allow {days} business days for this to take effect.",
    rich: true,
    fields: [
      {
        key: "days",
        label: "Business Days",
        type: "select",
        options: [
          { value: "1–2", label: "1–2" },
          { value: "3–5", label: "3–5" },
          { value: "5–7", label: "5–7" },
          { value: "7–10", label: "7–10" },
        ],
      },
    ],
  },
  {
    id: "callback",
    title: "Schedule Callback",
    template: "I'll arrange a callback on {date} at {time} for you.",
    rich: true,
    fields: [
      { key: "date", label: "Date", type: "date" },
      { key: "time", label: "Time", type: "time" },
    ],
  },
  { id: "closing", title: "Closing", template: "Is there anything else I can help you with today?" },
  { id: "thankyou", title: "Thank You", template: "Thank you so much for your patience. We really appreciate it!" },
];

/** `ChatMessage`'s "Add tag" picker options below — a representative
 *  subset of agent-next-gen-v2's own `QUICK_TAG_OPTIONS`
 *  (agent-next-gen-transcript.tsx). Same app-local business content split
 *  as `AGENT_NEXT_GEN_QUICK_REPLIES` above. */
const AGENT_NEXT_GEN_MESSAGE_TAG_OPTIONS: TagPickerOption[] = [
  { label: "Billing", variant: "warning" },
  { label: "Technical", variant: "info" },
  { label: "Escalated", variant: "critical" },
  { label: "Follow-Up", variant: "purple" },
  { label: "Resolved", variant: "success" },
];

const INITIAL_NOTIFICATIONS: AgentNotification[] = [
  { id: "1", type: "new-case",    title: "New Case",    subtitle: "Noah Patel",    timestamp: "13m ago", read: false },
  { id: "2", type: "new-chat",    title: "New Chat",    subtitle: "Sarah Miller",  timestamp: "18m ago", read: false },
  { id: "3", type: "escalation",  title: "Escalation",  subtitle: "Lauren Kim",    timestamp: "24m ago", read: false },
  { id: "4", type: "new-case",    title: "New Case",    subtitle: "Ethan Zhang",   timestamp: "37m ago", read: true  },
  { id: "5", type: "new-chat",    title: "New Chat",    subtitle: "Olivia Reed",   timestamp: "51m ago", read: true  },
  { id: "6", type: "missed-call", title: "Missed Call", subtitle: "David Brown",   timestamp: "1h ago",  read: true  },
];

/* ── Top-right app panels (ported from agent-next-gen-v2) ──
   The AppHeader's top-right area is a row of pinned app icon buttons
   (Search/Agent Chat/Schedule pinned by default) plus a trailing
   "View All Apps" kebab listing every app with a `PanelPinButton` per row.
   Every app shares ONE `Draggable`-backed panel (the template's single
   dock slot): clicking a button opens it docked showing that app; clicking
   the same button again closes it; clicking a different one swaps the
   panel's content in place — the container itself (variant/width/position)
   never changes, only its header/body content does. This replaced the two
   separate AI + Notifications panels (and the standalone Ask AI header
   button) this template used to carry — v2's Desk header has no AI button,
   and with a single shared panel there's no cross-panel single-dock rule
   left to enforce. For an isolated Storybook sandbox of the underlying
   multi-panel Draggable mechanics, see Draggable.stories.tsx's
   `MultiplePanelsSingleDock` story.

   Deliberate simplifications vs. agent-next-gen-v2 (story scope):
   - No drag-to-reorder of the header icons / menu rows (v2's
     `useColumnReorder` wiring).
   - No responsive hide/reveal of pinned icons (v2's measured 16px/84px
     hysteresis against `AppName`).
   - No <768px combined-panel two-tab mode; the template keeps its existing
     "close + undock when the viewport narrows" behavior instead.
   - No per-app fullscreen (v2's Maximize2 header action + overlay). */

type PanelKey = "search" | "wem" | "screenpop" | "conversations" | "schedule" | "notif";

/** Per-key label/icon for the header icon buttons AND the "View All Apps"
 *  menu rows — centralized so the two can't drift apart. "notif" uses
 *  `Bell` for its menu row only; the header itself renders the specialized
 *  `NotificationsBell` (badge count) for that key instead. "conversations"
 *  is v2's internal key for the renamed "Agent Chat" panel — kept so the
 *  two implementations stay greppable against each other. */
const PANEL_KEY_METADATA: Record<PanelKey, { label: string; icon: LucideIcon }> = {
  search: { label: "Search", icon: Search },
  // WEM = Workforce Engagement Management
  wem: { label: "WEM", icon: UserCog },
  screenpop: { label: "Screen Pop", icon: MonitorUp },
  conversations: { label: "Agent Chat", icon: MessageSquare },
  schedule: { label: "Schedule", icon: CalendarDays },
  notif: { label: "Notifications", icon: Bell },
};

/** Fixed order for the header icon row and the "View All Apps" menu — v2's
 *  `PANEL_KEY_INITIAL_ORDER` filtered to the keys this template carries
 *  (user-reorderable there; static here, see the simplifications note). */
const PANEL_KEY_ORDER: PanelKey[] = ["search", "wem", "screenpop", "conversations", "schedule", "notif"];

/** Default pinned set — header shows (left to right) Search, Agent Chat,
 *  Schedule; the rest (including Notifications) start unpinned but stay
 *  reachable from "View All Apps". Matches v2's own current defaults —
 *  Notifications/Schedule swapped per that app's own explicit follow-up
 *  ("move the notifications into the app menu list unpinned and pin the
 *  Schedule so it is visible when the app loads"), previously Search/Agent
 *  Chat/Notifications here. */
const DEFAULT_PINNED_KEYS: Record<PanelKey, boolean> = {
  search: true,
  wem: false,
  screenpop: false,
  conversations: true,
  schedule: true,
  notif: false,
};

/** "Selected" treatment for whichever AppHeader icon button currently owns
 *  the shared panel — the same `bg-lyra-bg-active-moderate`/`text-lyra-fg-
 *  active-strong` "active" idiom `PanelPinButton`/`LeftNav`/`Tabs` already
 *  use (and lyra-ui's own "Multiple Containers" Draggable.stories.tsx
 *  demos), not a plain hover tint. */
const PANEL_BUTTON_SELECTED_CLASS = "bg-lyra-bg-active-moderate text-lyra-fg-active-strong hover:bg-lyra-bg-active-moderate";

const APP_PANEL_DEFAULT_WIDTH = 360;

/* ── Shared-panel min/max width behavior — ported from v2's
   `AgentNextGenPage.tsx` so this template's docked panel and main content
   column size identically to v2's (previously this template used a
   never-validated `minWidth={280}` and `Draggable`'s built-in generic
   responsive max, which made the containers render slightly different
   widths than v2). See v2's own doc comments on these constants for the
   full reasoning; summarized here. ── */

/* The true VISUAL minimum content width the main content column
   (`containerRef`) and the docked shared panel should both deliver at
   their floors — the same on-screen size at minimum, not just the same
   raw CSS number. The docked panel's outer box has no padding of its own,
   so it uses this value directly as `Draggable`'s `minWidth`; the main
   content column pays a `pr-3` padding tax on top (see
   `INTERACTION_MAIN_CONTENT_MIN_WIDTH`). */
const SHARED_CONTENT_MIN_VISUAL_WIDTH = 362;

/* `containerRef`'s own border-box floor: `SHARED_CONTENT_MIN_VISUAL_WIDTH`
   + 12 (its `pr-3`), so the CONTENT area — not the padded border-box —
   never drops below the shared visual minimum. The literal `min-w-[374px]`
   class on `containerRef`'s div must be kept in sync with this by hand
   (Tailwind arbitrary-value classes need a literal string at build time). */
const INTERACTION_MAIN_CONTENT_MIN_WIDTH = SHARED_CONTENT_MIN_VISUAL_WIDTH + 12;

/* Absolute ceiling for the shared panel in any variant (docked also gets
   the floor-aware `maxDockedWidthForMainFloor` cap, computed in-component). */
const SHARED_PANEL_MAX_WIDTH = 1024;

function AgentNextGenTemplate({
  showPageHeader = false,
  showPanelToggle = false,
  showInteriorPanel = true,
  initialInteractions,
  homeBody,
  homeHeader,
  homeTabs,
  interiorPanelOverride,
  navOpen: navOpenProp,
  onNavOpenChange,
  connectAgentLegSignal,
  onAgentLegStatusChange: onAgentLegStatusChangeProp,
  hideConnectedApps,
  leftPanel,
  rightPanel,
  navItems = NAV_ITEMS,
}: {
  showPageHeader?: boolean;
  showPanelToggle?: boolean;
  showInteriorPanel?: boolean;
  /**
   * Rendered as the FIRST child inside `Container` (the flex row that
   * already exists to seat a pinned panel beside PageHeader + content —
   * see that row's own "flex row so pinned Panel sits left of PageHeader +
   * content" comment), immediately left of the content column — below
   * `AppHeader`, right of `LeftNav`. NOT a sibling of `LeftNav` at the
   * outer body-row level, and NOT a wrapper OUTSIDE this whole template.
   * A fully caller-configured element (this template renders it as-is, no
   * props of its own): pass a real `<SidePanel side="left" pinned .../>`
   * (side-panel.tsx) already wired with whatever open/content state the
   * caller owns. See `rightPanel` below for the same slot on the opposite
   * edge — nothing in this template currently uses `leftPanel` (the "Agent
   * Home Dashboard" story's own panel moved to `rightPanel`, per explicit
   * follow-up request), kept as a symmetric, generic slot rather than a
   * dedicated `agentInfoPanelOverride`-shaped prop the way
   * `interiorPanelOverride` is: unlike that panel (one shared docked slot
   * with several jobs, all needing the exact same header/footer shape),
   * nothing else in this template needs a left `SidePanel` at all yet, so
   * there's no shared shape worth abstracting — just render the whole thing
   * directly. Omitted (default) renders nothing here, unaffected — matches
   * every existing story.
   */
  leftPanel?: React.ReactNode;
  /**
   * Same generic slot as `leftPanel` above, mirrored onto the opposite edge:
   * rendered as the LAST child inside `Container`, immediately right of the
   * content column (after it in the same flex row, before the separate
   * `CustomerInformationDockedPanel` slot further down — the two don't
   * currently coexist in any story, so relative order between them doesn't
   * matter yet). Pass a real `<SidePanel side="right" pinned .../>`. Built
   * for the "Agent Home Dashboard" story's "Workspace Settings" panel — per
   * explicit follow-up request ("open the side panel on the RIGHT instead
   * of the left") — see that story's own doc comment. Omitted (default)
   * renders nothing here, unaffected — matches every existing story.
   */
  rightPanel?: React.ReactNode;
  /**
   * Overrides the icon rail's `LeftNav` items — defaults to the module-level
   * `NAV_ITEMS` (plain "Home"/"Settings", neither marked `active`, matching
   * every other story). Built for the "Agent Home Dashboard" story, which
   * needs "Home" marked `active` (it's the page actually showing) and
   * "Settings" hidden entirely (the rail's own gear icon, distinct from the
   * `Workspace Settings` `SidePanel` the header's "Workspace Settings"
   * button opens — showing both would be two different "Settings" entry
   * points) —
   * every other story is unaffected since it still gets the default
   * `NAV_ITEMS`.
   */
  navItems?: NavItem[];
  /**
   * Seeds `interactions`/`activeInteractionId` with one or more already-
   * active calls, for stories that need to render the interaction detail
   * view directly (e.g. "Active Interaction") instead of requiring a manual
   * New Outbound click first. Each entry is shaped exactly like what
   * `handleStartCall` itself would produce, so it's indistinguishable from
   * a real session once rendered. `activeInteractionId` initializes to the
   * LAST entry — pass these oldest → newest (matching real render/array
   * order) so the most-recently-started assignment is the one shown
   * active/expanded on load, same as what actually happens the instant a
   * real "Start Interaction" click lands (`setActiveInteractionId(selection
   * .contact.id)` in `handleStartCall` below).
   */
  initialInteractions?: ActiveInteraction[];
  /**
   * Rendered inside the Home placeholder's body row (the `flex-1` column
   * that sits beside the interior "Case Details" panel, next to the "no
   * active interaction" branch's `PageHeader`) — the empty `<div
   * className="flex-1" />` this used to always render there stays the
   * default (`undefined`) behavior for every other story, unaffected. Added
   * for the "Agent Home Dashboard" story, which needs this exact Shell
   * (LeftNav/header/Container chrome) with `AgentDashboard`
   * (agent-dashboard.tsx) placed in that body container — see that story's
   * own doc comment. When set, this column also gets its own
   * `overflow-y-auto px-6 py-6` scroll wrapper (matching
   * `AgentDashboard.stories.tsx`'s own `AgentDashboardTemplate` wrapper, and
   * agent-next-gen-v2's own identical `px-6 py-6` home-tab scroll region) —
   * only when `homeBody` is actually passed, so the empty div every other
   * story still renders here keeps its exact prior (no padding, no scroll)
   * behavior.
   */
  homeBody?: React.ReactNode;
  /**
   * Opt-in override for the Home tab's own top header row — rendered above
   * the "Body row" (in the same slot the "Home" `PageHeader` below occupies
   * when `showPageHeader` is on), as a real non-scrolling row that does NOT
   * scroll with `homeBody`. When set, this REPLACES that default "Home"
   * `PageHeader` outright (regardless of `showPageHeader`); every other
   * story (which never passes this) keeps that exact prior behavior,
   * unaffected. Built for the "Agent Home Dashboard" story's `header`
   * toggle — pass `AgentDashboardHeader` (agent-dashboard.tsx) here (and
   * `header` to the paired `<AgentDashboard>` in `homeBody`, to suppress its
   * own inline copy) to move the greeting/date/Personal Queue chip out of
   * the scrollable dashboard body into this fixed slot instead — matching
   * agent-next-gen-v2's own former identical "greeting in a separate
   * non-scrolling header slot" treatment (see that app's own doc comment,
   * `AgentNextGenPage.tsx`, near its Home-tab `showPageHeader` gate) before
   * that app moved it into the body.
   */
  homeHeader?: React.ReactNode;
  /**
   * Opt-in row rendered directly below the Home tab's header (whichever of
   * `homeHeader`/the default "Home" `PageHeader` is showing) and above the
   * "Body row" — a real non-scrolling row, same placement `TabList` occupies
   * below the Customers record header above. `undefined` (every other
   * story's default) renders nothing here, unaffected. Built for the "Agent
   * Home Dashboard" story's `tabs` toggle — pass a `TabList` of top-level
   * app tabs ("Dashboard"/"Customers"/"Tickets"/"Accounts") here; this slot
   * doesn't drive what `homeBody` renders on its own (there's no real
   * Customers/Tickets/Accounts content in this demo composition), it's
   * purely the visual row itself.
   */
  homeTabs?: React.ReactNode;
  /**
   * Opt-in override for the Home tab's own right-docked `InteriorPanel` —
   * when set, every field below replaces that panel's default `open`/
   * `interiorPanelOpen` toggle state, hardcoded "Case Details" header, and
   * placeholder `Input` fields; every other story (which never passes this)
   * keeps that exact prior placeholder panel, unaffected. Built for the
   * "Agent Home Dashboard" story, which needs this one shared panel slot to
   * actually react to `AgentDashboard`'s own `selectedQueueId`/
   * `selectedContactHistoryEntryId` selections — the same "one docked slot,
   * several jobs" pattern agent-next-gen-v2's own `AgentNextGenPage.tsx`
   * documents for its identical `InteriorPanel` (Case Details / queue
   * drill-down / Contact History summary, priority-ordered) — rather than
   * hardcoding any one of those jobs into this template itself, which no
   * other story wants.
   */
  interiorPanelOverride?: {
    open: boolean;
    headerTitle: string;
    headerSubhead?: string;
    /** Footer content (e.g. a Redial/Re-open `Button`) — omit for no footer. */
    footer?: React.ReactNode;
    onClose: () => void;
    content: React.ReactNode;
  };
  /**
   * Controls the LeftNav's open/collapsed state from outside — uncontrolled
   * by default (this template manages `navOpen` itself, exactly as before);
   * pass alongside `onNavOpenChange` to drive it externally instead. Same
   * controlled/uncontrolled split `DashboardQueue`'s own `selectedId`/
   * `onSelect` documents. Built for the "Agent Home Dashboard" story, which
   * needs its own `AgentDashboard`-rendered "Personal Queue: Empty" chip
   * (outside this template's own render tree) to toggle the SAME nav state
   * agent-next-gen-v2's own identical header chip does
   * (`setNavOpen((v) => !v)`) — every other story leaves both props unset
   * and keeps this template's fully self-contained internal toggle
   * (LeftNav's own collapse/expand button, `handleStartCall`'s auto-expand,
   * etc.), unaffected.
   */
  navOpen?: boolean;
  /** Called with the resolved next `navOpen` value — fires on every toggle regardless of controlled/uncontrolled, same as `DashboardQueue`'s own `onSelect`. */
  onNavOpenChange?: (open: boolean) => void;
  /**
   * Forwarded straight through to the internal `AgentProfile`'s own,
   * identically-named prop (agent-profile.tsx) — bump this (a changing
   * number, not a boolean/callback; see that prop's own doc comment for
   * why) to imperatively start connecting the agent leg from OUTSIDE this
   * template's own render tree. Built for the "Agent Home Dashboard"
   * story's "Connect Agent Leg" header link (agent-dashboard.tsx) — per
   * explicit request ("when you click connect agent leg from the header
   * link it should connect the agent leg (in the profile) and display a
   * toast success message - same behavior as if the agent connected from
   * the profile"), so that link needs a way to trigger the SAME connect
   * flow `AgentProfile`'s own "Agent Leg Disconnected" menu row does,
   * without this template handing back a ref or lifting `agentLegStatus`
   * itself out. Omit for every other story — `AgentProfile`'s own menu
   * row remains the only way to connect, unaffected. See
   * `handleAgentLegStatusChange`'s own doc comment (in-component) for the
   * success-toast half of this feature.
   */
  connectAgentLegSignal?: number;
  /**
   * Fired whenever `AgentProfile`'s own `onAgentLegStatusChange` reports a
   * REAL connect or disconnect (never for the in-between "connecting"
   * state, and never on initial mount — see that prop's own doc comment,
   * agent-profile.tsx) — this template's OWN `handleAgentLegStatusChange`
   * (in-component, fires the success toast) always runs regardless of
   * whether this is set; this is purely an additional outward notification.
   * Built for the "Agent Home Dashboard" story's header link, per explicit
   * follow-up request ("when the agent leg is disconnected, update the page
   * header to say 'Connect Agent Leg' link again") — that story's own
   * `agentLegStatus` demo state has no other way to learn that the agent
   * disconnected via `AgentProfile`'s own "Agent Leg Connected" menu row
   * (a path entirely inside this template, outside that story's own click
   * handler) without this callback. Omit for every other story.
   */
  onAgentLegStatusChange?: (status: "disconnected" | "connected") => void;
  /**
   * Forwarded straight through to the internal `AgentProfile`'s own
   * identically-named prop (agent-profile.tsx) — hides its "Connected Apps"
   * menu row (and flyout panel) entirely. Built for the "Agent Home
   * Dashboard" story per explicit request ("hide the connected apps");
   * every other story leaves this unset and keeps the row, unaffected.
   */
  hideConnectedApps?: boolean;
}) {
  const [internalNavOpen, setInternalNavOpen] = useState(!!initialInteractions?.length);
  const navOpen = navOpenProp !== undefined ? navOpenProp : internalNavOpen;
  const setNavOpen = (update: boolean | ((prev: boolean) => boolean)) => {
    const next = typeof update === "function" ? (update as (prev: boolean) => boolean)(navOpen) : update;
    if (navOpenProp === undefined) setInternalNavOpen(next);
    onNavOpenChange?.(next);
  };
  // No interactions exist until the agent launches one from the CreateNew
  // menu (Start Interaction / quick dial) — see handleStartCall/handleQuick
  // Dial below. Click any resulting InteractionNavItem card to make it the
  // active one, same interactive pattern as LeftNav.stories.tsx's "Agent
  // Next Gen Left Nav" story. `initialInteractions` (see above) seeds this
  // instead, for stories that want to start already mid-call(s).
  const [interactions, setInteractions] = useState<ActiveInteraction[]>(
    () => initialInteractions ?? []
  );
  const [activeInteractionId, setActiveInteractionId] = useState<string | null>(
    () => initialInteractions?.[initialInteractions.length - 1]?.id ?? null
  );
  // Drives `AssignmentsSectionCaption`'s sort button — "Last Updated"
  // (default, matching a typical inbox's own default order), "Start Date",
  // or "Longest Wait". Actual ordering happens where the cards render
  // (`sortAssignments` above), leaving `interactions` itself in insertion
  // order for everything else that reads it.
  const [assignmentSort, setAssignmentSort] = useState<AssignmentSortValue>("lastUpdated");
  // Drives `AssignmentsExpandCollapseAllButton` — see that component's own
  // doc comment for why this is a one-shot "which direction does the NEXT
  // click bulk-apply" toggle (`channelsAllExpanded`) plus a version nonce
  // (`channelsExpandedOverrideVersion`, bumped on every click) rather than a
  // plain controlled boolean threaded straight into every card: each
  // `InteractionNavItem`'s own channel list still needs to keep toggling
  // independently after a bulk action, not stay permanently locked to this
  // one shared value. Both passed down as one `channelsExpandedOverride`
  // object (interaction-nav-item.tsx) at each card's own call site below.
  const [channelsAllExpanded, setChannelsAllExpanded] = useState(true);
  const [channelsExpandedOverrideVersion, setChannelsExpandedOverrideVersion] = useState(0);
  const handleToggleAllChannelsExpanded = () => {
    setChannelsAllExpanded((v) => !v);
    setChannelsExpandedOverrideVersion((v) => v + 1);
  };
  // Drives the main content area — see agent-next-gen-v1's own copy of this
  // derived value and the PageHeader switch below.
  const activeInteraction = interactions.find((i) => i.id === activeInteractionId) ?? null;
  // Messages sent via `InteractionComposer` below, per interaction id — this
  // story has no real transcript/messaging backend, so this is just enough
  // state to make "Send" visibly do something (render each sent message as
  // a `ChatMessage` bubble above the composer, with real Copy/Add-tag
  // support — see below) rather than a full chat implementation.
  // `InteractionComposer` itself owns nothing but the textarea's own text
  // and clears it after `onSend` fires; `timestamp` is stamped here at
  // send time for `ChatMessage`'s header row. `id` gives each message a
  // stable key independent of its position, needed once messages carry
  // their own tag state (`composerMessageTagsById` below) keyed by it.
  const messageIdCounter = useRef(0);
  const [composerMessagesByInteraction, setComposerMessagesByInteraction] = useState<
    Record<string, { id: string; text: string; timestamp: string }[]>
  >({});
  const handleSendComposerMessage = (interactionId: string, text: string) => {
    const timestamp = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    const id = `composer-msg-${++messageIdCounter.current}`;
    setComposerMessagesByInteraction((prev) => ({
      ...prev,
      [interactionId]: [...(prev[interactionId] ?? []), { id, text, timestamp }],
    }));
  };
  // Per explicit follow-up request, every `ChatMessage` bubble below gets
  // real Copy/Add-tag support (not just a one-off demo) — `onCopy` writes
  // to the clipboard, tags live here per message id. `tagPickerOpenId`
  // coordinates across every rendered bubble so only one message's picker
  // is ever open at a time, same reasoning `ChatMessage`'s/`TagPicker`'s
  // own doc comments document.
  const [composerMessageTagsById, setComposerMessageTagsById] = useState<Record<string, ChatMessageTag[]>>({});
  const [tagPickerOpenId, setTagPickerOpenId] = useState<string | null>(null);
  const handleCopyComposerMessage = (text: string) => {
    navigator.clipboard?.writeText(text);
  };
  const handleAddComposerMessageTag = (messageId: string, option: TagPickerOption) => {
    setComposerMessageTagsById((prev) => ({
      ...prev,
      [messageId]: [...(prev[messageId] ?? []), { id: `${messageId}-${option.label}`, label: option.label, variant: option.variant }],
    }));
  };
  const handleRemoveComposerMessageTag = (messageId: string, tagId: string) => {
    setComposerMessageTagsById((prev) => ({
      ...prev,
      [messageId]: (prev[messageId] ?? []).filter((t) => t.id !== tagId),
    }));
  };
  const handleClearComposerMessageTags = (messageId: string) => {
    setComposerMessageTagsById((prev) => ({ ...prev, [messageId]: [] }));
  };
  // When this story instance loaded — `buildSessionDetails`'s anchor for
  // turning a channel's relative `startTick` into an actual "Start"/"Date"
  // wall-clock value. Captured once (not re-read per render) so those
  // values stay stable rather than drifting with `clockTick`.
  const [mountedAt] = useState(() => Date.now());
  // `SessionDetailsSection`'s own open/closed state — a single flag (not
  // per-interaction) is enough since only the current `activeInteraction`'s
  // session details ever show at once. Starts open, matching the reference
  // screenshot.
  const [sessionDetailsOpen, setSessionDetailsOpen] = useState(true);
  // Shared clock powering every open channel's live "MM:SS since it
  // started" elapsed display — independent of `elapsedSeconds` below, which
  // is the agent's own status timer and resets on status change.
  const [clockTick, setClockTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setClockTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  // Search app panel's query — lifted here per the controlled-components
  // convention (the panel's SearchInput reports into template state).
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  // Screen Pop app panel's selected external app. Defaults to "salesforce"
  // (matching the reference) so the panel opens straight into the mocked
  // Salesforce login instead of an empty picker.
  const [screenPopApp, setScreenPopApp] = useState("salesforce");
  const [agentStatus, setAgentStatus] = useState<AgentStatus>("available");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [appMenuOpen, setAppMenuOpen] = useState(false);
  // Agent-leg connect/disconnect toast stack — see `handleAgentLegStatusChange`
  // below (near `handleStatusChange`) for the full wiring rationale.
  const { toasts, addToast, dismissToast } = useToast();

  /* Panel animation state machine
   * "closed"  → visibility:hidden + data-state="closed" (preserves Draggable offset, no display:none flash)
   * "open"    → visibility:visible + data-state="open"  (enter animation plays)
   * "closing" → visibility:visible + data-state="closed" (exit animation plays)
   *
   * Using visibility:hidden instead of display:none avoids a GPU compositor race where
   * one frame of the enter animation's fill-mode (opacity:0) can appear before display:none
   * propagates to the compositor — the root cause of the close flicker.
   */
  type PanelState = "closed" | "open" | "closing";

  /* Shared app panel state — ONE Draggable-backed panel every top-right app
     button (Search/WEM/Screen Pop/Agent Chat/Schedule/Notifications) shares;
     `activePanelKey` picks whose content it currently shows. See the
     "Top-right app panels" comment above the component. */
  const [activePanelKey,  setActivePanelKey]  = useState<PanelKey | null>(null);
  const [panelOpen,       setPanelOpen]       = useState(false);
  const [panelMounted,    setPanelMounted]    = useState(false); // true after first open, never resets
  const [panelState,      setPanelState]      = useState<PanelState>("closed");
  const [panelVariant,    setPanelVariant]    = useState<DraggableVariant>("docked");
  const [panelWidth,      setPanelWidth]      = useState(APP_PANEL_DEFAULT_WIDTH);
  const [panelHeight,     setPanelHeight]     = useState(860);
  const [panelIsResizing, setPanelIsResizing] = useState(false);
  /* Which apps show a persistent header icon — toggled per row from the
     "View All Apps" menu's `PanelPinButton`s. An unpinned app just loses
     its header icon; it stays reachable from that menu. */
  const [pinnedKeys, setPinnedKeys] = useState<Record<PanelKey, boolean>>(DEFAULT_PINNED_KEYS);
  /* Tracked only so the "View All Apps" Tooltip can be disabled while the
     menu is open — trigger and tooltip share the same DOM node, see
     `KebabMenuButton.onOpenChange`'s own doc comment. */
  const [appsMenuOpen, setAppsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Body row (LeftNav + content + docked panel) width — feeds
  // `maxDockedWidthForMainFloor` below, same measurement v2's
  // `bodyContainerRef` takes. Distinct from `containerWidth` (the content
  // area only), which shrinks as the docked panel grows and so can't anchor
  // the panel's own ceiling without feedback.
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  const [bodyContainerWidth, setBodyContainerWidth] = useState(9999);
  useEffect(() => {
    const el = bodyContainerRef.current;
    if (!el) return;
    setBodyContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setBodyContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const panelFloatLeft = useRef<number | null>(null);
  const panelFloatTop  = useRef<number | null>(null);
  // Ref on the Draggable root — getBoundingClientRect() here includes the CSS
  // transform drag offset, so we capture the actual visual position before docking.
  const panelRef  = useRef<HTMLDivElement>(null);
  const panelAnimTimer = useRef<ReturnType<typeof setTimeout>>();

  /* Interior panel (right) */
  const [interiorPanelOpen, setInteriorPanelOpen] = useState(false);

  /* ── Customer Information panel (right-docked, ported from v2) ──
     Replaces the old LEFT-docked "Designer"-style side panel and its
     whole pin/hover state machine (`sidePanelOpen`/`sidePanelPinned`/
     hover handlers/`handleSidePanelPinToggle`/`handleSidePanelIconToggle`)
     — v2's current panel has NO unpin path (always pinned while wide
     enough) and no hover-open-on-unpinned mode, so all of that wiring is
     retired rather than repurposed. Open/closed is driven by the record
     header's Customer Information toggle button plus the interaction
     lifecycle effect below; everything else (drag width 340 starting,
     325..min(425, containerWidth), <768 float, ≤425 auto full-screen,
     ≤350 hide the full-screen toggle, container clamps) lives in the
     shared `useCustomerPanelWidthGuards` hook. NOTE: v2's pin guard for
     THIS panel is <768 of the content container's own width — not the
     1024 guard the old Designer panel borrowed from `AdminShell`; that
     1024 convention still applies to its remaining consumers elsewhere,
     it just has none left in this template. */
  const [customerInfoOpen, setCustomerInfoOpen] = useState(!!initialInteractions?.length);
  const [customerOverviewEditing, setCustomerOverviewEditing] = useState(false);
  const [containerWidth, setContainerWidth] = useState(9999);

  // Track the content container's width — feeds the Customer Information
  // panel's shared width guards (see the block comment above).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const customerInfoGuards = useCustomerPanelWidthGuards(containerWidth, customerInfoOpen);

  // v2: the Customer Information panel starts open (and pinned) whenever
  // an interaction is active, and belongs to that interaction — it has no
  // trigger outside one (the record header doesn't exist on "Home"), so
  // it closes when the interaction is dismissed. A pending Overview edit
  // dies with the interaction too (the shared record draft itself resets
  // via `useCustomerRecordDraft`'s own recordId key below).
  useEffect(() => {
    setCustomerInfoOpen(!!activeInteractionId);
    setCustomerOverviewEditing(false);
  }, [activeInteractionId]);

  /* Shared customer record draft — keyed on the active interaction's
     recordId (resets on a genuine record switch), lifted here so the
     docked panel AND the toggle's hover preview edit the same draft (see
     the module's own doc comments). Falls back to a "Customer"/"" person
     while no interaction is active — the panel/toggle aren't rendered
     then, but hooks must run unconditionally. */
  const customerPerson = useMemo(
    () => ({
      name: activeInteraction?.customerName ?? "Customer",
      id: activeInteraction?.recordId ?? "",
    }),
    [activeInteraction?.customerName, activeInteraction?.recordId]
  );
  const customerFields = useMemo(
    () => buildCustomerInfoFields(customerPerson.name, customerPerson.id),
    [customerPerson]
  );
  const customerRecordDraft = useCustomerRecordDraft(customerFields, customerPerson.name, customerPerson.id);

  /* Record-header width — v2's `recordHeaderRef`: the Customer Information
     toggle collapses to icon-only below 768px of the HEADER's own measured
     width, not the viewport's. Re-attached whenever the header (re)mounts
     (it only exists while an interaction is active). */
  const recordHeaderRef = useRef<HTMLDivElement>(null);
  const [recordHeaderWidth, setRecordHeaderWidth] = useState(9999);
  useEffect(() => {
    const el = recordHeaderRef.current;
    if (!el) return;
    setRecordHeaderWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setRecordHeaderWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [activeInteractionId, showPageHeader]);

  // Track window width for nav overlay breakpoint
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isNavNarrow = windowWidth < 1280;
  const isCompactHeader = windowWidth < 760;

  // Auto-collapse the expanded nav when viewport drops below 1280px
  useEffect(() => {
    if (isNavNarrow && navOpen) setNavOpen(false);
  }, [isNavNarrow]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close and undock a docked app panel when viewport drops below 1280px —
  // the template's pre-existing behavior, kept in place of v2's <768px
  // combined-panel two-tab mode (out of scope here, see the simplifications
  // note above the component).
  useEffect(() => {
    if (isNavNarrow && panelVariant === "docked") {
      setPanelVariant("float");
      setPanelOpen(false);
    }
  }, [isNavNarrow]); // eslint-disable-line react-hooks/exhaustive-deps

  const MAX_PANEL_HEIGHT = 860;
  const BOTTOM_PADDING   = 8;

  const computePanelHeight = () => {
    if (!containerRef.current) return MAX_PANEL_HEIGHT;
    const top = containerRef.current.getBoundingClientRect().top;
    return Math.min(window.innerHeight - top - BOTTOM_PADDING, MAX_PANEL_HEIGHT);
  };

  /* Timer */
  useEffect(() => {
    const id = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(elapsedSeconds / 3600);
  const m = Math.floor((elapsedSeconds % 3600) / 60);
  const s = elapsedSeconds % 60;
  const formattedTimer = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  const handleStatusChange = (status: AgentStatus) => {
    setAgentStatus(status);
    setElapsedSeconds(0);
  };

  // Fired by `AgentProfile`'s own `onAgentLegStatusChange` (agent-profile.tsx)
  // once the agent leg actually finishes connecting — never for the in-
  // between "connecting" state, and never on initial mount (see that prop's
  // own doc comment). Same "success toast on real connect" pattern
  // `AgentNextGenPage.tsx`'s own `showAgentLegToast` documents (agent-next-
  // gen-v2) — this template only wires the "connected" half of the TOAST
  // (no dedicated `AgentLegDisconnectedToast`/persistent-banner treatment;
  // nothing has asked for one here). This fires identically whether
  // `AgentProfile`'s own "Agent Leg Disconnected" menu row was clicked
  // directly, OR `connectAgentLegSignal` was bumped from outside (e.g. the
  // "Agent Home Dashboard" story's own "Connect Agent Leg" header link, per
  // that feature's explicit request: "same behavior as if the agent
  // connected from the profile") — both paths converge on `AgentProfile`'s
  // own internal connect flow, so there's exactly one place this toast
  // needs to live. Also relays BOTH statuses (not just "connected") to
  // `onAgentLegStatusChangeProp` — see that prop's own doc comment for why
  // a real disconnect (from `AgentProfile`'s own menu row — this template's
  // only disconnect path) needs to reach outside this template too, per
  // later explicit follow-up ("when the agent leg is disconnected, update
  // the page header to say 'Connect Agent Leg' link again").
  const handleAgentLegStatusChange = (status: "disconnected" | "connected") => {
    onAgentLegStatusChangeProp?.(status);
    if (status !== "connected") return;
    addToast({
      variant: "success",
      title: "Agent Leg Connected",
      message: "Your agent leg is now connected.",
      duration: 4000,
    });
  };

  /* ── Launching interactions from CreateNew ──
     Overrides OUTBOUND_CONFIG's default onStartCall/onQuickDial (which just
     console.log) so this template actually surfaces what gets launched as
     InteractionNavItem cards in the left nav, instead of always showing the
     same 3 fixed demo cards regardless of what the agent does. Each handler
     below also expands the nav (`setNavOpen(true)`) — a collapsed rail would
     otherwise hide the card it just launched/updated from view entirely, so
     starting a call always surfaces it regardless of whether the nav
     happened to be collapsed at the time. */
  const handleStartCall = (selection: {
    contact: CreateNewOutboundContact;
    channel: ChannelType;
    phone: string;
    skillId: string;
  }) => {
    const skillLabel = OUTBOUND_CONFIG.skillOptions.find((o) => o.value === selection.skillId)?.label;
    // `phoneOptions` only has a value→label mapping for phone numbers (raw
    // digits → formatted display string) — email/WhatsApp addresses are
    // already human-readable as-is (see `create-new.tsx`'s
    // `defaultDetailValueFor`, where their `value` and `label` are the same
    // string), so falling back to `selection.phone` itself is correct there,
    // not a placeholder.
    const addressLabel = OUTBOUND_CONFIG.phoneOptions.find((o) => o.value === selection.phone)?.label ?? selection.phone;
    // A freshly started outbound conversation hasn't exchanged any messages
    // yet — `0` (not omitted) so the tooltip actually reads "0 Messages"
    // instead of showing nothing. Voice has no message concept at all, so
    // it's left `undefined` there — see agent-next-gen-v1's own copy of
    // this logic for the full rationale.
    const newChannel: TrackedChannel = {
      id: `${selection.channel}:${selection.phone}`,
      type: selection.channel,
      startTick: clockTick,
      preview: skillLabel,
      value: selection.phone,
      addressLabel,
      messageCount: selection.channel === "voice" ? undefined : 0,
      interactionId: generateInteractionId(),
    };

    setInteractions((prev) => {
      const idx = prev.findIndex((i) => i.id === selection.contact.id);
      // No existing interaction with this contact — start a new card.
      if (idx === -1) {
        return [...prev, {
          id: selection.contact.id,
          customerName: selection.contact.name,
          recordId: selection.contact.subtitle ?? generateCaseId(),
          channels: [newChannel],
          currentChannelId: newChannel.id,
        }];
      }
      // Same contact already has an interaction open — restart the matching
      // channel's timer if this is the *same* type+address (e.g. redialing
      // the same SMS number), or add a new row alongside the existing ones
      // if it's a different address on the same type (e.g. a second SMS
      // thread on a different number) — those are genuinely separate
      // conversations, not a duplicate of the first, so they shouldn't
      // overwrite it.
      return prev.map((interaction, i) => {
        if (i !== idx) return interaction;
        const chIdx = interaction.channels.findIndex((c) => c.id === newChannel.id);
        const channels = chIdx === -1
          ? [...interaction.channels, newChannel]
          : interaction.channels.map((c, j) => (j === chIdx ? newChannel : c));
        return { ...interaction, channels, currentChannelId: newChannel.id };
      });
    });
    setActiveInteractionId(selection.contact.id);
    setNavOpen(true);
  };

  const handleQuickDial = (phoneNumber: string) => {
    // No contact record for a quick-dialed number — key the card off the
    // number itself so redialing the same number restarts its card rather
    // than stacking up duplicates.
    const id = `quickdial:${phoneNumber}`;
    // Voice has no message concept at all, so `messageCount` is left
    // undefined here (not `0`) — see the `handleStartCall` comment above.
    const newChannel: TrackedChannel = {
      id: "voice",
      type: "voice",
      startTick: clockTick,
      value: phoneNumber,
      addressLabel: phoneNumber,
      interactionId: generateInteractionId(),
    };
    setInteractions((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx === -1) return [...prev, { id, recordId: generateCaseId(), channels: [newChannel], currentChannelId: newChannel.id }];
      return prev.map((interaction, i) => (i === idx ? { ...interaction, channels: [newChannel], currentChannelId: newChannel.id } : interaction));
    });
    setActiveInteractionId(id);
    setNavOpen(true);
  };

  /* "Unassign & Dismiss" — `InteractionNavItem` itself decides which of
     these two applies (based on how many channels the card has open when
     it's clicked): `onDismiss` (whole card, only called when just one
     channel was open) removes the interaction entirely, clearing
     `activeInteractionId` too if it was the active one; `onDismissChannel`
     (only called when more than one channel was open) drops just that one
     channel, leaving the rest of the card open. */
  const handleDismissInteraction = (id: string) => {
    setInteractions((prev) => prev.filter((interaction) => interaction.id !== id));
    setActiveInteractionId((current) => (current === id ? null : current));
  };

  const handleDismissChannel = (id: string, channel: Pick<InteractionChannel, "id" | "type">) => {
    // Match on `id` (falling back to `type`, same as InteractionNavItem's
    // own `channelKey` convention) rather than `type` alone — two open
    // channels can share a `type` (e.g. two SMS threads on different
    // numbers), and filtering by `type` would drop *both* instead of just
    // the one the agent actually dismissed.
    const dismissedKey = channel.id ?? channel.type;
    setInteractions((prev) =>
      prev.map((interaction) => {
        if (interaction.id !== id) return interaction;
        const channels = interaction.channels.filter((c) => (c.id ?? c.type) !== dismissedKey);
        const currentChannelId = interaction.currentChannelId === dismissedKey
          ? channels[channels.length - 1]?.id
          : interaction.currentChannelId;
        return { ...interaction, channels, currentChannelId };
      })
    );
  };

  /** Fired by a card row's `onCurrentChannelChange` or a `ChannelTab`'s
   *  `onClick` — see `ActiveInteraction.currentChannelId`'s own doc comment. */
  const handleChannelSelect = (interactionId: string, channelKey: string) => {
    setInteractions((prev) =>
      prev.map((interaction) =>
        interaction.id === interactionId ? { ...interaction, currentChannelId: channelKey } : interaction
      )
    );
  };

  /* ── Preventing duplicate channels from the CreateNew picker ──
     A contact already reachable via a currently-open channel still shows
     that channel in "Select Channel" and every address in the detail
     screen's second field ("Select Phone"/"Select Email Address"/"Select
     WhatsApp Handle") — except whichever exact address(es) are already in
     use, which are disabled so starting another interaction on one of them
     wouldn't just duplicate the one already running (a different, still-
     unused outbound line for the same channel stays selectable).
     `CreateNewOutboundContact.openChannelAddresses` is exactly the
     mechanism `CreateNew` exposes for this (see its own doc comment), so
     rather than adding new disabling logic to that shared component, this
     derives a per-render copy of OUTBOUND_CONFIG that tags each contact
     with every address in use for whichever channels they already have
     open in `interactions` (read off each `TrackedChannel.value` — a
     contact can have more than one channel of the same type open at once,
     e.g. two SMS threads on different numbers, so this is a list per
     channel type, not a single address), across every group. Recomputed
     whenever `interactions` changes so an address re-enables the moment its
     interaction is dismissed. See agent-next-gen-v1's AgentNextGenPage.tsx
     for the mirrored consumer app implementation. */
  const outboundConfig = useMemo<CreateNewOutboundConfig>(() => {
    const openAddressesByContactId = new Map<string, Partial<Record<ChannelType, string[]>>>(
      interactions.map((interaction) => {
        const byType: Partial<Record<ChannelType, string[]>> = {};
        for (const c of interaction.channels) {
          if (!c.value) continue;
          (byType[c.type] ??= []).push(c.value);
        }
        return [interaction.id, byType];
      })
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

  // Every "Agent Next Gen" consumer (this story, agent-next-gen-v1's
  // AgentNextGenPage.tsx, LeftNav.stories.tsx's "Agent Next Gen Left Nav"
  // story, InteractionNavItem.stories.tsx) wants the exact same "+" behavior
  // on each InteractionNavItem card — look up that interaction's underlying
  // outbound contact and scope the flyout to whatever channels it actually
  // supports. That's `useOutboundAddButton` (create-new.tsx) — a single
  // shared implementation instead of hand-copied ones that could (and did)
  // quietly drift out of sync. `OutboundAddButton` is fully self-contained
  // now (no more `launchRequest`/`onLaunchRequestHandled` — see its own doc
  // comment in create-new.tsx), so there's nothing to wire into this story's
  // own `CreateNew` instance anymore.
  // `onStartCall: handleStartCall` override is required — `outboundConfig`
  // itself still carries whatever placeholder `onStartCall` it was built
  // with (see its own `useMemo` above), not this story's real
  // `handleStartCall`, so the bare `outboundConfig` here would silently
  // no-op "Start Interaction" instead of opening a card (same bug fixed in
  // agent-next-gen-v1/AgentNextGenPage.tsx and LeftNav.stories.tsx — see
  // either one's own comment on this line).
  const { getHeaderAction } = useOutboundAddButton({ ...outboundConfig, onStartCall: handleStartCall });

  /* Shared app panel show/hide — same visibility state machine the AI +
     Notifications panels used before they were consolidated into this one
     shared panel (see `PanelState` above). */
  useEffect(() => {
    clearTimeout(panelAnimTimer.current);
    if (panelOpen) {
      if (containerRef.current && panelFloatLeft.current === null) {
        // Store absolute viewport x so the panel doesn't shift when the left nav opens/closes
        const r = containerRef.current.getBoundingClientRect();
        panelFloatLeft.current = r.left + containerRef.current.offsetWidth - panelWidth - 16;
      }
      setPanelHeight(computePanelHeight());
      setPanelMounted(true);
      setPanelState("open");   // data-state="open" → enter animation triggers
    } else {
      setPanelState("closing"); // data-state="closed" → exit animation plays
      panelAnimTimer.current = setTimeout(() => {
        setPanelState("closed");
      }, 150);
    }
    return () => clearTimeout(panelAnimTimer.current);
  }, [panelOpen]);

  /* Shrink panel height with viewport when open */
  useEffect(() => {
    if (!panelOpen) return;
    const onResize = () => setPanelHeight(computePanelHeight());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [panelOpen]);

  const handlePanelVariantChange = (v: DraggableVariant) => {
    // When docking: read from the Draggable root element (not the fixed wrapper) so that
    // getBoundingClientRect() includes the CSS transform drag offset — the true visual position.
    // No cross-panel single-dock rule needed anymore — every app shares this
    // ONE panel, so there's never a second docked panel to displace.
    if (v === "docked" && panelRef.current) {
      const r = panelRef.current.getBoundingClientRect();
      panelFloatLeft.current = r.left;
      panelFloatTop.current  = r.top;
    }
    setPanelVariant(v);
  };

  /* Float position — stored and returned as absolute viewport x-coordinate
     so it doesn't shift when the left nav opens/closes (which changes
     rect.left but not the panel's intended position). zIndex 9999 — the §4
     "floating Draggable panels" base tier; with a single shared panel
     there's no front-most/`topPanel` split to track anymore, and the
     app-header menus (the "View All Apps" kebab, the app-switcher popover,
     both z-[9999] and portaled to document.body LATER in the DOM) still
     paint above it on the equal-z tie. */
  const getPanelFloatStyle = (): React.CSSProperties => {
    const rect = containerRef.current?.getBoundingClientRect();
    const left = panelFloatLeft.current !== null
      ? panelFloatLeft.current
      : containerRef.current
        ? (rect?.left ?? 0) + containerRef.current.offsetWidth - panelWidth - 16
        : 0;
    const top = panelFloatTop.current !== null
      ? panelFloatTop.current
      : (rect?.top ?? 0);
    return {
      position: "fixed",
      top,
      left,
      zIndex: 9999,
    };
  };

  /* ── Content for each app button ──
     All hooks called unconditionally every render (Rules of Hooks)
     regardless of which app's content the shared panel currently shows.
     Notifications is the REAL panel content the template rendered before —
     the same `useAgentNotificationsContent` hook `AgentNotifications`
     itself composes internally — with the exact same handlers, not a
     reimplementation. */
  const notifContent = useAgentNotificationsContent({
    notifications,
    onMarkAllRead: () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true }))),
    onClearAll: () => setNotifications([]),
    onDismiss: (id) => setNotifications((prev) => prev.filter((n) => n.id !== id)),
    onNotificationClick: (n) => setNotifications((prev) => prev.map((i) => i.id === n.id ? { ...i, read: true } : i)),
  });
  const searchContent = useAgentSearchContent({
    query: globalSearchQuery,
    onQueryChange: setGlobalSearchQuery,
  });
  const screenPopContent = useScreenPopContent({
    app: screenPopApp,
    onAppChange: setScreenPopApp,
  });
  // Schedule keeps its view/anchorDate internal (uncontrolled) — nothing
  // else in this template needs to read them, matching the reference.
  const scheduleContent = useScheduleContent();
  const contentByPanelKey: Record<PanelKey, EmbeddablePanelContent> = {
    search: searchContent,
    // WEM has no real content yet — v2's shared blank placeholder.
    wem: {
      title: "WEM",
      body: (
        <div className="overflow-y-auto flex-1 flex items-center justify-center p-4">
          <p className="lyra-body-md text-lyra-fg-disabled text-center">Nothing here yet.</p>
        </div>
      ),
    },
    screenpop: screenPopContent,
    conversations: { title: "Agent Chat", body: <AgentChat /> },
    schedule: scheduleContent,
    notif: notifContent,
  };
  const activePanelContent = activePanelKey ? contentByPanelKey[activePanelKey] : null;
  const unreadCount = notifications.filter((n) => !n.read).length;

  /* Clicking an app button: re-clicking the CURRENTLY showing one closes
     the shared panel outright. Otherwise, if it's closed, open it docked;
     if it's already open showing a DIFFERENT key, only `activePanelKey`
     changes — the container itself never resizes, repositions, or
     re-animates open+close, only its title/body content does. Same
     contract as v2's `handlePanelButtonClick`. */
  const handlePanelButtonClick = (key: PanelKey) => {
    if (panelOpen && activePanelKey === key) {
      setPanelOpen(false);
      return;
    }
    if (!panelOpen) {
      setPanelVariant("docked");
      setPanelOpen(true);
    }
    setActivePanelKey(key);
  };

  /* "View All Apps" menu rows — every app (pinned or not) with its icon,
     the same click handler its header icon uses, and a trailing
     `PanelPinButton` controlling `pinnedKeys`. `KebabMenuButton` (not bare
     `Menu`) because its rows render as Radix `<div role="menuitem">`s
     rather than `<button>`s — required since each row nests a real
     `<button>` (`PanelPinButton`) in `rightElement`, which would be
     invalid HTML nested inside another button. `closeOnSelect: false` so a
     caller can pin/unpin or jump between several apps in one pass; the pin
     button's own click is wrapped in a `stopPropagation` span so it
     doesn't also fire the row's `onClick`. */
  const appsMenuItems: MenuEntry[] = PANEL_KEY_ORDER.map((key) => {
    const { label, icon: KeyIcon } = PANEL_KEY_METADATA[key];
    return {
      id: key,
      label,
      icon: <KeyIcon className="h-4 w-4" strokeWidth={1.5} />,
      // Mirrors the header icons' own `PANEL_BUTTON_SELECTED_CLASS`
      // condition — whichever app owns the shared panel reads active here too.
      active: panelOpen && activePanelKey === key,
      onClick: () => handlePanelButtonClick(key),
      closeOnSelect: false,
      rightElement: (
        <span className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {/* Same unread count `NotificationsBell`'s own header icon shows —
              reused, not recomputed with different criteria. `Badge`'s
              circle/critical/sm is the exact styling `Button`'s built-in
              `badge` prop uses for this count elsewhere (button.tsx) —
              reused directly since a menu row's `rightElement` isn't an
              icon-shaped `Button` itself. */}
          {key === "notif" && unreadCount > 0 && (
            <Badge shape="circle" variant="critical" size="sm" count={unreadCount} />
          )}
          <PanelPinButton
            pinned={pinnedKeys[key]}
            onToggle={() => setPinnedKeys((prev) => ({ ...prev, [key]: !prev[key] }))}
            pinnedLabel={`Unpin ${label}`}
            unpinnedLabel={`Pin ${label}`}
            /* Only override the icon/className when PINNED — unpinned rows
               pass neither prop, falling through to `PanelPinButton`'s own
               default rendering (plain gray outline Pin). Pinned rows get a
               solid blue pin (`fill-lyra-fg-active-strong` + matching
               `text-*`, the same "filled + colored icon" idiom
               `FavoriteButton`'s star uses) instead of the default's plain
               45°-rotated outline. Passing a custom `icon` also opts into
               `PanelPinButton`'s "selected button background" treatment —
               not wanted here, just the icon should read as filled/blue —
               so `className` overrides that back to transparent (twMerge
               drops the conflicting `bg-*`), also only when pinned. */
            icon={
              pinnedKeys[key] ? (
                <Pin className="h-4 w-4 rotate-45 fill-lyra-fg-active-strong text-lyra-fg-active-strong" strokeWidth={1.5} />
              ) : undefined
            }
            className={pinnedKeys[key] ? "bg-transparent hover:bg-lyra-state-hover" : undefined}
          />
        </span>
      ),
    };
  });

  /* How much room the DOCKED shared panel can claim without pushing
     `containerRef`'s own `min-w-[374px]` floor (and so the whole row) past
     the viewport — ported from v2 (see `INTERACTION_MAIN_CONTENT_MIN_WIDTH`'s
     doc comment). Feeds both `Draggable`'s `maxWidth` (so a live drag stops
     at the wall) and `dockedPanelRenderWidth`'s clamp in the docked render
     block. One adaptation vs. v2's `isNavNarrow ? 0 : ...`: this template's
     `LeftNav` keeps a 60px rail footprint even in overlay mode (left-nav.tsx),
     so narrow mode reserves 60, not 0. */
  const leftNavRenderWidth = !isNavNarrow && navOpen ? 256 : 60;
  const maxDockedWidthForMainFloor = Math.max(
    0,
    bodyContainerWidth - leftNavRenderWidth - INTERACTION_MAIN_CONTENT_MIN_WIDTH - 12
  );

  /* The one shared Draggable — its header (title/badge/actions) and body
     swap to whichever app's content is active; the container itself
     (variant/width/position) never does. Header shape ported from v2's
     `sharedPanel` (ContainerHeader + grip-in-float + dock/close actions),
     minus the per-app fullscreen action (out of scope). */
  const sharedPanel = panelMounted && activePanelContent ? (
    <Draggable
      ref={panelRef}
      variant={panelVariant}
      defaultWidth={panelWidth}
      defaultHeight={panelHeight}
      // Same real on-screen minimum as the main content column's floor —
      // v2's `SHARED_CONTENT_MIN_VISUAL_WIDTH`, not the old 280 (see the
      // constant's own doc comment for the padding asymmetry).
      minWidth={SHARED_CONTENT_MIN_VISUAL_WIDTH}
      minHeight={200}
      // This instance computes its own precise ceiling from real sibling
      // layout (`maxDockedWidthForMainFloor`) — opt out of `Draggable`'s
      // generic "below 1440px viewport, tighten to 800px" heuristic so the
      // floor-aware ceiling is the only cap, matching v2.
      disableResponsiveMaxWidth
      maxWidth={panelVariant === "docked" ? Math.min(SHARED_PANEL_MAX_WIDTH, maxDockedWidthForMainFloor) : SHARED_PANEL_MAX_WIDTH}
      onVariantChange={handlePanelVariantChange}
      onWidthChange={setPanelWidth}
      onResizeStateChange={setPanelIsResizing}
      className={cn(
        "rounded-lyra-lg border border-lyra-border-subtle",
        // Floating (undocked/dragged) gets an 80%-opacity background +
        // slight backdrop blur, matching v2 — plain `bg-lyra-bg-surface-
        // base/80` can't work here since Tailwind can't generate opacity-
        // modified utilities for our `var(--lyra-color-*)` tokens, so
        // `color-mix()` against the same variable is used instead. Docked
        // keeps the normal fully-opaque background.
        panelVariant === "float"
          ? "shadow-lg backdrop-blur-sm bg-[color-mix(in_srgb,var(--lyra-color-bg-surface-base)_80%,transparent)]"
          : "h-full bg-lyra-bg-surface-base"
      )}
      renderHeaderControls={({ gripProps, dockButtonProps, dockIcon, variant: dVariant }) => (
        <>
          <ContainerHeader
            title={activePanelContent.title}
            titleBadge={activePanelContent.titleBadge}
            titleClassName={activePanelContent.titleClassName}
            icon={
              dVariant === "float"
                ? <div {...gripProps}><GripVertical className="h-4 w-4" strokeWidth={1.5} /></div>
                : activePanelContent.dockedIcon
            }
            bordered={!activePanelContent.headerContent}
            actions={
              <>
                {activePanelContent.headerActions}
                <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                  <ActionIconButton
                    {...dockButtonProps}
                    size="sm"
                    className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
                  >
                    {dockIcon}
                  </ActionIconButton>
                </Tooltip>
              </>
            }
            onClose={() => setPanelOpen(false)}
          />
          {activePanelContent.headerContent && (
            // Fixed between the title row and the scrollable body — same
            // wrapper `DraggablePanel` gives its own `headerContent`.
            <div className="shrink-0 px-4 pb-3 border-b border-lyra-border-subtle">
              {activePanelContent.headerContent}
            </div>
          )}
        </>
      )}
    >
      {activePanelContent.body}
    </Draggable>
  ) : null;

  return (
    <div className="flex flex-col h-screen bg-lyra-bg-surface-shell overflow-hidden">

      {/* ── App Header ── */}
      <AppHeader
        appName={
          <PopoverPrimitive.Root open={appMenuOpen} onOpenChange={setAppMenuOpen}>
            <PopoverPrimitive.Trigger asChild>
              <AppName
                icon={<img src={appIcon} alt="Agent Workspace 2.0" className="h-6 w-6" />}
                name="Agent Workspace 2.0"
                compact={isCompactHeader}
                aria-expanded={appMenuOpen}
              />
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
              <PopoverPrimitive.Content
                side="bottom"
                align="start"
                sideOffset={6}
                onOpenAutoFocus={(e: Event) => e.preventDefault()}
                className="z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
              >
                <AppMenu
                  groups={APP_MENU_GROUPS}
                  footer={<CXoneLogo />}
                  header={isCompactHeader ? "Agent Workspace 2.0" : undefined}
                />
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </PopoverPrimitive.Root>
        }
        actions={
          <>
            {/* Pinned app icon row — one `ActionIconButton size="xl"` (44px,
                the AppHeader standard) per pinned key, in `PANEL_KEY_ORDER`,
                each toggling the shared app panel to its own content.
                "notif" renders the specialized `NotificationsBell` (unread
                badge) instead of a generic icon button; unpinned keys stay
                reachable from the "View All Apps" kebab after the row.
                The standalone Ask AI button that used to sit here (with its
                own separate AiPanel) is gone — v2's Desk header has no AI
                button; see the "Top-right app panels" comment above the
                component. */}
            <div className="flex items-center gap-0">
              {PANEL_KEY_ORDER.filter((key) => pinnedKeys[key]).map((key) => {
                const { label, icon: KeyIcon } = PANEL_KEY_METADATA[key];
                const isActive = panelOpen && activePanelKey === key;
                return key === "notif" ? (
                  <NotificationsBell
                    key={key}
                    notifications={notifications}
                    open={isActive}
                    onOpenChange={() => handlePanelButtonClick("notif")}
                    renderPanel={false}
                  />
                ) : (
                  <ActionIconButton
                    key={key}
                    size="xl"
                    title={label}
                    aria-expanded={isActive}
                    onClick={() => handlePanelButtonClick(key)}
                    className={isActive ? PANEL_BUTTON_SELECTED_CLASS : undefined}
                  >
                    <KeyIcon className="h-5 w-5" strokeWidth={1.5} />
                  </ActionIconButton>
                );
              })}
            </div>
            {/* Separator between the icon row and the "View All Apps" kebab
                — same `h-auto self-stretch` sizing lyra-ui's other vertical
                Separator usages (dashboard-card.tsx's metric-row divider)
                use, so it stretches to the row's height inside AppHeader's
                `flex items-center` actions container. */}
            <Separator orientation="vertical" className="h-auto self-stretch pl-lyra-1 pr-lyra-1" />
            {/* Trailing "View All Apps" kebab — lists every app (pinned or
                not) with a pin toggle per row; see `appsMenuItems` above.
                Wrapped in `Tooltip`+`span` because `KebabMenuButton`'s
                trigger needs the intermediate span for Tooltip's `asChild`
                cloning (same fix as agent-notifications.tsx's overflow
                menu). Sized up from its 24px default to the 44px
                `ActionIconButton` standard via `className` (twMerge dedupes
                the conflicting h-6/w-6); "outline" treatment (border +
                `bg-lyra-bg-control`, same tokens as `Button`'s own outline
                variant) so it reads as a distinct "more" control rather
                than another app shortcut — reproduced directly since
                `KebabMenuButton` isn't built on `Button`. */}
            <Tooltip content="View All Apps" placement="bottom" disabled={appsMenuOpen}>
              <span className="inline-flex">
                <KebabMenuButton
                  items={appsMenuItems}
                  ariaLabel="View All Apps"
                  icon={<LayoutGrid className="h-5 w-5" strokeWidth={1.5} />}
                  className="h-11 w-11 rounded-lyra-sm border border-lyra-border-soft bg-lyra-bg-control text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed data-[state=open]:bg-lyra-state-hover"
                  onOpenChange={setAppsMenuOpen}
                  // Once Notifications' own header icon is unpinned (its
                  // NotificationsBell badge gone with it), surface the same
                  // unread count here instead, so an unread notification is
                  // never silently invisible — only while the header ISN'T
                  // already showing that count itself, to avoid the same
                  // number appearing on two icons at once.
                  badge={!pinnedKeys.notif ? unreadCount : undefined}
                />
              </span>
            </Tooltip>
            <AgentProfile
              name="John Smith"
              initials="JS"
              status={agentStatus}
              onStatusChange={handleStatusChange}
              timer={formattedTimer}
              className="ml-1"
              onAgentLegStatusChange={handleAgentLegStatusChange}
              connectAgentLegSignal={connectAgentLegSignal}
              hideConnectedApps={hideConnectedApps}
            />
          </>
        }
      />

      {/* ── Body: LeftNav + Content ── */}
      {/* overflow-hidden ensures docked panels never push layout past the viewport.
          ref measured by `bodyContainerRef` — feeds `maxDockedWidthForMainFloor`. */}
      <div ref={bodyContainerRef} className="flex flex-1 min-h-0 overflow-hidden">

        <LeftNav
          items={navItems}
          open={navOpen}
          onToggle={() => setNavOpen((v) => !v)}
          overlay={isNavNarrow}
          pinnedHeader={
            <CreateNew
              title="New Outbound"
              outbound={{
                ...outboundConfig,
                onStartCall: handleStartCall,
                onQuickDial: handleQuickDial,
              }}
              expanded={navOpen}
            />
          }
          header={
            <>
              {/* "Assignments (N active)" caption + collapse-all/sort —
                  see assignments-section-caption.tsx's own doc comment.
                  `count` is `interactions.length`, the exact same live list
                  the cards below render from, so the two numbers can't
                  drift apart. */}
              <AssignmentsSectionCaption
                expanded={navOpen}
                count={interactions.length}
                sort={assignmentSort}
                onSortChange={setAssignmentSort}
                allExpanded={channelsAllExpanded}
                onToggleAllExpanded={handleToggleAllChannelsExpanded}
              />
              {/* No cards until the agent actually starts one above — each
                  card is one contact (or quick-dialed number), with every
                  channel they're being reached on folded into that same
                  card unless it's a different address on an already-open
                  type, which opens as its own row instead (see
                  handleStartCall's merge-by-type+address logic). Sorted per
                  `assignmentSort` (`AssignmentsSectionCaption`'s own sort
                  button) — `interactions` itself stays in insertion order
                  for everything else that reads it, only this rendering
                  reorders a copy. */}
              {sortAssignments(interactions, assignmentSort).map((interaction) => {
                const mostRecentId = interaction.channels[interaction.channels.length - 1]?.id;
                const currentId = interaction.currentChannelId ?? mostRecentId;
                const channels: InteractionChannel[] = interaction.channels.map((c) => ({
                  id: c.id,
                  type: c.type,
                  elapsed: formatElapsedTime(clockTick - c.startTick),
                  preview: c.preview,
                  current: c.id === currentId,
                  // Read straight off the tracked channel (see
                  // TrackedChannel.awaitingResponse's own doc comment) —
                  // not derived from `type` — so a freshly-started outbound
                  // channel never renders red just for being SMS/chat/
                  // email/WhatsApp instead of voice.
                  awaitingResponse: c.awaitingResponse ?? false,
                }));
                const earliestStart = Math.min(...interaction.channels.map((c) => c.startTick));
                return (
                  <InteractionNavItem
                    key={interaction.id}
                    customerName={interaction.customerName}
                    active={activeInteractionId === interaction.id}
                    onClick={() => setActiveInteractionId(interaction.id)}
                    awaitingResponse={channels.some((c) => c.awaitingResponse)}
                    elapsed={formatElapsedTime(clockTick - earliestStart)}
                    expanded={navOpen}
                    channels={channels}
                    onDismiss={() => handleDismissInteraction(interaction.id)}
                    onDismissChannel={(channel) => handleDismissChannel(interaction.id, channel)}
                    // Per v2: the expanded card's "+" (Add Channel,
                    // `getHeaderAction` below) is replaced with a chevron
                    // that expands/collapses this card's own channel list —
                    // `headerAction` itself is left wired below (harmless;
                    // `InteractionNavItem` ignores it whenever `collapsible`
                    // is true) rather than removed, so Add Channel is one
                    // prop-flip away from coming back to this exact spot if
                    // that's ever wanted again.
                    headerAction={getHeaderAction(interaction.id)}
                    collapsible
                    // "Collapse all"/"Expand all" (`AssignmentsExpandCollapseAllButton`
                    // above) — see `channelsAllExpanded`'s own doc comment
                    // near its declaration for why this is a one-shot
                    // `{ expanded, version }` override object rather than a
                    // plain controlled boolean.
                    channelsExpandedOverride={{
                      expanded: channelsAllExpanded,
                      version: channelsExpandedOverrideVersion,
                    }}
                    currentChannelKey={currentId}
                    onCurrentChannelChange={(key) => handleChannelSelect(interaction.id, key)}
                  />
                );
              })}
            </>
          }
        />

        {/* Content area — flex-1 shrinks to give space to docked panels, but
            never below `INTERACTION_MAIN_CONTENT_MIN_WIDTH` (374 = 362 visual
            + 12 `pr-3`; keep the literal in sync with the constant by hand) —
            below that, the docked panel's own render width clamps down instead
            (`dockedPanelRenderWidth`) so this floor never pushes the row past
            the viewport. Matches v2. ref used to position float panels. */}
        <div ref={containerRef} className="relative flex flex-1 min-w-[374px] overflow-hidden pr-3 pb-3">

          {/* Main Container — flex row so a pinned `leftPanel`/`rightPanel`
              sits beside PageHeader + content, on either edge.
              relative so an unpinned Panel can overlay the full surface. */}
          <Container className="flex flex-1 overflow-hidden relative">

            {leftPanel}

            {/* Content column: PageHeader + page body */}
            <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
              {activeInteraction ? (
                // ── Active interaction's detail page — replaces the "Home"
                // page the moment a new assignment is started/quick-dialed
                // (see `activeInteraction` above). Just the record header for
                // now; the blank body below is where a real case/contact
                // detail view will go. Reverts back automatically once the
                // interaction is dismissed (`activeInteractionId` clears).
                <>
                  {showPageHeader && (
                    <PageHeader
                      // ── Customers record header, ported from v2's own
                      // interaction record header (`AgentNextGenPage.tsx`)
                      // and matching PageHeader.stories.tsx's "Record
                      // Header (Customers)" story exactly. Replaces the old
                      // `PanelPinButton`+`User` hover trigger for the
                      // retired left "Designer" panel (see the Customer
                      // Information state block above):
                      // — circle avatar (`Icon` `User` on `background=
                      //   "shell"`, `iconDivider={false}` — the circle's own
                      //   background already provides the separation the
                      //   default divider doubled up on);
                      // — no `subtitle` — v2 hides the record-header subhead
                      //   (`SHOW_RECORD_HEADER_SUBTITLE = false` there); the
                      //   record id shows in the panel's Overview instead;
                      // — actions: the "+" Add Channel trigger (v2's
                      //   `AddChannelAdHocButton` trigger shape — a plain
                      //   solid-primary `size="icon-md"` button whose
                      //   `title` supplies Tooltip + aria-label; static demo
                      //   trigger here, the template has no ad-hoc channel
                      //   flow of its own) and the Customer Information
                      //   toggle (shared module) — hidden while the panel is
                      //   docked AND open (v2's redundancy rule), hover
                      //   preview while closed, icon-only below 768px of the
                      //   HEADER's own measured width (`recordHeaderRef`).
                      ref={recordHeaderRef}
                      icon={<Icon icon={User} background="shell" shape="circle" size="md" />}
                      iconDivider={false}
                      title={activeInteraction.customerName ?? "Customer"}
                      actions={
                        <>
                          <Button variant="default" size="icon-md" title="Add Channel">
                            <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                          </Button>
                          {showPanelToggle &&
                            !(customerInfoGuards.effectivePinned && customerInfoOpen) && (
                              <CustomerInformationPanelToggle
                                person={customerPerson}
                                open={customerInfoOpen}
                                onToggle={() => setCustomerInfoOpen((v) => !v)}
                                iconOnly={recordHeaderWidth < 768}
                                recordDraft={customerRecordDraft}
                                overviewEditing={customerOverviewEditing}
                                onOverviewEditingChange={setCustomerOverviewEditing}
                              />
                            )}
                        </>
                      }
                    />
                  )}
                  {/* One tab per open channel — kept in sync with the same
                      interaction's InteractionNavItem card via
                      currentChannelId/handleChannelSelect. Shown even with
                      just one channel open. See agent-next-gen-v1's own
                      copy of this block. */}
                  {showPageHeader && activeInteraction.channels.length > 0 && (
                    <TabList className="px-6 bg-lyra-bg-surface-base shrink-0" overflowMenu>
                      {activeInteraction.channels.map((c) => {
                        const key = c.id ?? c.type;
                        return (
                          <ChannelTab
                            key={key}
                            type={c.type}
                            address={c.addressLabel}
                            messageCount={c.messageCount}
                            interactionId={c.interactionId}
                            active={(activeInteraction.currentChannelId ?? activeInteraction.channels[activeInteraction.channels.length - 1]?.id) === key}
                            onClick={() => handleChannelSelect(activeInteraction.id, key)}
                            onDismiss={() => {
                              if (activeInteraction.channels.length > 1) handleDismissChannel(activeInteraction.id, c);
                              else handleDismissInteraction(activeInteraction.id);
                            }}
                          />
                        );
                      })}
                    </TabList>
                  )}
                  {/* Session Details — ported from v2's own
                      `TranscriptSessionSeparator`/`TranscriptSessionDetails`
                      (agent-next-gen-transcript.tsx), scoped down to just
                      what the reference screenshot shows (see
                      `session-details.tsx`'s own doc comment for the pieces
                      deliberately left out — status pill, Consult/Transfer,
                      Outcome, Unassign & Dismiss). `messageCount` reads off
                      `composerMessagesByInteraction` so it climbs in real
                      time as the agent sends messages below; "Delete Draft"
                      reuses the same `handleDismissInteraction` the tab
                      bar's own close button already calls. */}
                  <div className="px-6">
                    <SessionDetailsSection
                      session={buildSessionDetails(
                        activeInteraction,
                        activeInteraction.channels.find(
                          (c) =>
                            (c.id ?? c.type) ===
                            (activeInteraction.currentChannelId ??
                              activeInteraction.channels[activeInteraction.channels.length - 1]?.id)
                        ),
                        (composerMessagesByInteraction[activeInteraction.id] ?? []).length,
                        mountedAt
                      )}
                      open={sessionDetailsOpen}
                      onToggle={() => setSessionDetailsOpen((v) => !v)}
                      messageCount={(composerMessagesByInteraction[activeInteraction.id] ?? []).length}
                      onDeleteDraft={() => handleDismissInteraction(activeInteraction.id)}
                    />
                  </div>
                  {/* Message area + `InteractionComposer` footer — ported
                      per the user's request from v2's own "Chat with
                      Customer" composer (`agent-next-gen-transcript.tsx`).
                      This template has no real transcript backend, so sent
                      messages just echo into a simple list above the
                      composer via `composerMessagesByInteraction` (see
                      state above) rather than driving an actual
                      conversation — the composer component itself (quick
                      replies, toolbar, Send button) is the real deliverable
                      here, not this story's placeholder message list. */}
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {(composerMessagesByInteraction[activeInteraction.id] ?? []).length === 0 ? (
                        <p className="lyra-body-sm text-lyra-fg-disabled">
                          No messages yet — sent messages will appear here.
                        </p>
                      ) : (
                        <div className="flex flex-col gap-3">
                          {(composerMessagesByInteraction[activeInteraction.id] ?? []).map((msg) => (
                            <ChatMessage
                              key={msg.id}
                              variant="agent"
                              name="John Smith"
                              initials="JS"
                              timestamp={msg.timestamp}
                              text={msg.text}
                              onCopy={handleCopyComposerMessage}
                              tagOptions={AGENT_NEXT_GEN_MESSAGE_TAG_OPTIONS}
                              tags={composerMessageTagsById[msg.id] ?? []}
                              tagPickerOpen={tagPickerOpenId === msg.id}
                              onTagPickerOpenChange={(open) => setTagPickerOpenId(open ? msg.id : null)}
                              onAddTag={(option) => handleAddComposerMessageTag(msg.id, option)}
                              onRemoveTag={(tagId) => handleRemoveComposerMessageTag(msg.id, tagId)}
                              onClearTags={() => handleClearComposerMessageTags(msg.id)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    {/* No extra wrapper/border here — `InteractionComposer`
                        already renders its own `relative shrink-0
                        bg-lyra-bg-surface-base px-6 py-4` container with a
                        soft top-edge fade built in (matching v2's own
                        composer exactly); wrapping it in another bordered
                        box just doubled the padding and drew a hard line
                        over that fade. */}
                    <InteractionComposer
                      quickReplies={AGENT_NEXT_GEN_QUICK_REPLIES}
                      onSend={(text) => handleSendComposerMessage(activeInteraction.id, text)}
                    />
                  </div>
                </>
              ) : (
                <>
                  {homeHeader ? (
                    homeHeader
                  ) : (
                    showPageHeader && (
                      <PageHeader
                        title="Home"
                        // Interior-panel toggle only — the left slot used to
                        // point at the retired left "Designer" panel (see the
                        // Customer Information state block above); the
                        // Customer Information feature `showPanelToggle` now
                        // gates lives on the interaction record header, which
                        // doesn't exist on "Home", so Home carries no left
                        // toggle at all anymore.
                        panelToggle={showInteriorPanel ? "right" : undefined}
                        onInnerPanelToggle={showInteriorPanel ? () => setInteriorPanelOpen((v) => !v) : undefined}
                        actions={
                          <>
                            <Button variant="outline">Export</Button>
                            <Button>
                              <Plus className="h-4 w-4" strokeWidth={1.5} />
                              New Case
                            </Button>
                          </>
                        }
                      />
                    )
                  )}
                  {homeTabs}
                  {/* Body row: main content + interior panel */}
                  <div className="relative flex flex-1 overflow-hidden">
                    <div className={cn("flex-1 min-w-0", homeBody && "overflow-y-auto px-6 py-6")}>
                      {homeBody}
                    </div>
                    {showInteriorPanel && (
                      <InteriorPanel
                        side="right"
                        open={interiorPanelOverride ? interiorPanelOverride.open : interiorPanelOpen}
                        headerTitle={interiorPanelOverride?.headerTitle ?? "Case Details"}
                        headerSubhead={interiorPanelOverride?.headerSubhead}
                        footer={interiorPanelOverride?.footer}
                        onClose={interiorPanelOverride ? interiorPanelOverride.onClose : () => setInteriorPanelOpen(false)}
                      >
                        {interiorPanelOverride ? (
                          interiorPanelOverride.content
                        ) : (
                          <div className="flex flex-col gap-4 px-4 py-4">
                            <Input label="Subject" placeholder="Enter subject" />
                            <Input label="Priority" placeholder="Select priority" />
                            <Input label="Assignee" placeholder="Search agents" />
                            <Input label="Tags" placeholder="Add tags" />
                          </div>
                        )}
                      </InteriorPanel>
                    )}
                  </div>
                </>
              )}
            </div>

            {rightPanel}

            {/* Customer Information — the ported v2 right-docked panel
                (shared module; same composed pieces the
                CustomerInformationPanel and PageHeader "Record Header
                (Customers)" stories render). Docks RIGHT of the content
                column inside this Container — v2 moved it from the old
                left position — and only exists alongside the record header
                that toggles it, i.e. while an interaction is active and
                `showPanelToggle` (the feature gate) is on. Width guards,
                draft state, and the header toggle all share the instances
                declared in the Customer Information state block above. */}
            {showPanelToggle && activeInteraction && (
              <CustomerInformationDockedPanel
                person={customerPerson}
                open={customerInfoOpen}
                onClose={() => setCustomerInfoOpen(false)}
                guards={customerInfoGuards}
                recordDraft={customerRecordDraft}
                overviewEditing={customerOverviewEditing}
                onOverviewEditingChange={setCustomerOverviewEditing}
              />
            )}

          </Container>

          {/* Shared app panel — float
            * Uses CSS transitions (not keyframe animations) to avoid the GPU compositor
            * fill-mode flash. Transitions interpolate between explicit values with no
            * animation lifecycle; visibility:hidden keeps the element in the render tree
            * so the close transition always completes before the element is hidden.
            * pointerEvents:"none" on this positioning wrapper is load-bearing (the
            * documented Draggable ghost-hit-area rule): the panel itself moves via CSS
            * transform, this wrapper's layout box does NOT — Draggable's own root
            * already sets pointer-events:auto on itself, so no inner "auto" div either. */}
          {panelVariant === "float" && panelMounted && (
            <div
              style={{
                ...getPanelFloatStyle(),
                pointerEvents: "none",
                visibility: panelState === "closed" ? "hidden" : "visible",
                opacity: panelState === "open" ? 1 : 0,
                transform: panelState === "open" ? "translateY(0)" : "translateY(-8px)",
                transition: panelState === "open"
                  ? "opacity 150ms ease, transform 150ms ease"
                  : "opacity 100ms ease, transform 100ms ease",
              }}
            >
              {sharedPanel}
            </div>
          )}

        </div>

        {/* Shared app panel — docked (sibling of containerRef so flex layout
            keeps it in-bounds). This is the template's single dock slot —
            every app's content shares it via `activePanelKey`. */}
        {panelVariant === "docked" && (() => {
          /* Clamp the rendered width to the floor-aware ceiling (not just the
             drag ceiling on `Draggable`'s `maxWidth`) so a panel widened on a
             large window can't push `containerRef` under its `min-w-[374px]`
             floor after the window shrinks — the panel is the sibling that
             gives up space. Matches v2's `dockedPanelRenderWidth`. */
          const dockedPanelRenderWidth = Math.min(panelWidth, maxDockedWidthForMainFloor);
          return (
          <div className="pb-3" style={{
            width: panelState === "open" ? dockedPanelRenderWidth : 0,
            marginRight: panelState === "open" ? 12 : 0,
            overflow: "hidden",
            flexShrink: 0,
            transition: panelIsResizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            <div
              className="h-full animate-in fade-in-0 duration-150"
              style={{
                width: dockedPanelRenderWidth,
                display: panelState === "open" ? "block" : "none",
              }}
            >
              {sharedPanel}
            </div>
          </div>
          );
        })()}

      </div>

      {/* Agent-leg connect success toast — see `handleAgentLegStatusChange`'s
          own doc comment above for the full "same behavior as connecting
          from the profile" rationale. Only ever holds this one toast today
          (no other feature in this template uses `useToast`), but built on
          the same `ToastContainer`/`useToast` pair every other lyra-ui
          consumer with a toast stack uses, not a one-off inline `<Toast>`. */}
      <ToastContainer>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            variant={t.variant}
            title={t.title}
            duration={t.duration}
            onDismiss={() => dismissToast(t.id)}
          >
            {t.message}
          </Toast>
        ))}
      </ToastContainer>
    </div>
  );
}

/* ── Story ── */

const meta: Meta<typeof AgentNextGenTemplate> = {
  title: "Templates/Agent Next Gen",
  component: AgentNextGenTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof AgentNextGenTemplate>;

export const Default: Story = {
  name: "Agent Next Gen – Shell",
  render: () => <AgentNextGenTemplate />,
};

export const WithPageHeader: Story = {
  name: "Agent Next Gen – With Page Header",
  args: {
    showPanelToggle: true,
    showInteriorPanel: true,
  },
  argTypes: {
    showPanelToggle: {
      control: "boolean",
      description: "Show the left panel toggle button in the page header",
    },
    showInteriorPanel: {
      control: "boolean",
      description: "Show the right interior (Case Details) panel",
    },
  },
  render: (args) => (
    <AgentNextGenTemplate
      showPageHeader
      showPanelToggle={args.showPanelToggle}
      showInteriorPanel={args.showInteriorPanel}
    />
  ),
};

/* ── Active Interaction ──
   Same template, but seeded via `initialInteractions` (see
   `ACTIVE_INTERACTIONS_DEMO` above) so it renders straight into the
   interaction detail view — record header, `ChannelTab` bar, and 3
   `InteractionNavItem` cards already populating the left nav (single- and
   multi-channel, one awaiting response) with the latest one already active
   — instead of requiring a manual New Outbound click first. Useful as a
   stable reference for what multiple concurrent in-progress assignments
   actually look like. */
export const ActiveInteractionStory: Story = {
  name: "Agent Next Gen – Active Interaction",
  args: {
    showPanelToggle: true,
    showInteriorPanel: false,
  },
  argTypes: {
    showPanelToggle: {
      control: "boolean",
      description: "Show the left panel toggle button in the page header",
    },
    showInteriorPanel: {
      control: "boolean",
      description: "Show the right interior (Case Details) panel",
    },
  },
  render: (args) => (
    <AgentNextGenTemplate
      showPageHeader
      showPanelToggle={args.showPanelToggle}
      showInteriorPanel={args.showInteriorPanel}
      initialInteractions={ACTIVE_INTERACTIONS_DEMO}
    />
  ),
};

/* ── Agent Home Dashboard ──
   The Agent Shell (this same `AgentNextGenTemplate` the "Default"/"With
   Page Header"/"Active Interaction" stories above render — LeftNav,
   header, Container chrome, docked/floating panel logic) with
   `AgentDashboard` (agent-dashboard.tsx, this library's own promoted
   Agent Next Gen "Home" tab composition) placed in the Home placeholder's
   body container — the same `flex-1` column that otherwise renders empty
   in every other story here, via the `homeBody` prop `AgentNextGenTemplate`
   now accepts (see that prop's own doc comment). No active interaction is
   seeded, so this loads straight into the Home tab, matching what an agent
   actually sees on login.

   Per explicit follow-up request ("it should open a right interior panel
   (also the redial button should be in the panel)"), this is no longer a
   bare `<AgentDashboard />` render — this small wrapper component holds
   `selectedQueueId`/`selectedContactHistoryEntry` state, wires
   `AgentDashboard`'s own `onSelectQueueId`/`onSelectContactHistoryEntry`
   callbacks to it, and drives `AgentNextGenTemplate`'s new
   `interiorPanelOverride` prop so a queue click or a Contact History row
   click actually opens the shared right `InteriorPanel` with real content
   — `AgentDashboardQueueDrilldown`/`AgentDashboardContactHistoryEntryDetail`
   (both exported from agent-dashboard.tsx for exactly this) — same
   "one docked slot, several jobs, queue takes priority over Contact
   History" structure agent-next-gen-v2's own `AgentNextGenPage.tsx` uses
   for its identical panel. The footer's Redial/Re-open `Button` is built
   here (not inside `AgentDashboardContactHistoryEntryDetail` itself, which
   only renders read-only summary content) — mutually exclusive by
   `entry.redial`, matching that app's own gating — and both just close the
   panel on click, since this demo composition has no live interaction
   system to actually reopen a contact into.

   Per further explicit follow-up ("the personal queue: empty should toggle
   the left nav open and closed like in agent-next-gen-v2"), this wrapper
   also holds its own `navOpen` state and drives `AgentNextGenTemplate`'s
   new `navOpen`/`onNavOpenChange` controlled props with it, wiring
   `AgentDashboard`'s `onPersonalQueueClick` to `setNavOpen((v) => !v)` —
   the exact same toggle function agent-next-gen-v2's own identical header
   chip calls (`AgentNextGenPage.tsx`, `Personal Queue: {N}` action).

   Per further explicit follow-up ("add a control in the agent home
   dashboard component that toggles header true/false and when set to true
   move the Good Morning ... subhead and personal queue chip to the header
   and do not display it in the body of the dashboard"), this wrapper takes
   a `header` prop (wired to a real Storybook boolean control on this story,
   see below) and forwards it straight through as `AgentDashboard`'s own
   `header` prop (suppressing that component's inline greeting) while
   passing `AgentDashboardHeader` — the separately-exported piece with the
   exact same content — into `AgentNextGenTemplate`'s new `homeHeader` slot,
   a real non-scrolling row above the Home tab's body. `false` (the
   Storybook control's default) keeps every prior behavior unchanged: the
   greeting renders inline, scrolling with the rest of the dashboard, same
   as before this prop existed.

   Per further explicit follow-up ("add a control in the agent home
   dashboard component that toggles tabs true/false and display Dashboard/
   Customers/Tickets/Accounts when true"), this wrapper also takes a `tabs`
   prop (its own Storybook boolean control, default `false`) and, when on,
   renders a plain `TabList` of those four top-level app tabs into
   `AgentNextGenTemplate`'s new `homeTabs` slot — "Dashboard" active by
   default, matching what's actually on screen (this demo composition has
   no real Customers/Tickets/Accounts content to swap in, so the other
   three are static labels here; clicking still updates the active tab
   visually via its own local `homeTab` state). `false` keeps every prior
   render (no tab row at all) unchanged. */
const HOME_TABS = ["Dashboard", "Customers", "Tickets", "Accounts"] as const;

/** Tab strip for the "Workspace Settings" `rightPanel` (`SidePanel`'s own
 *  `headerTabs`) — matches the reference screenshot exactly. Content isn't
 *  split per tab yet (the demo fields below render the same regardless of
 *  which tab is active); this is purely the tab chrome the screenshot asked
 *  for. */
const WORKSPACE_SETTINGS_TABS = [
  "Login & Voice Preferences",
  "A/V Notifications",
  "Display & Keyboard",
  "Information",
] as const;

/** Demo identity shown only when `greeting=false` — full name (not just a
 *  first name, despite the `agentFirstName` prop it's passed through), per
 *  explicit follow-up ("make it the agent's full name John Smith not just
 *  John"). `greeting=true` (default) keeps passing no `agentFirstName`/
 *  `agentId` at all, same as before this control existed (plain "Good
 *  Morning", no name) — these two constants exist solely to give the
 *  `greeting=false` state something real to show ("John Smith" / "User
 *  Name: JohnSmith229393") rather than the generic "Agent" / "User Name:
 *  —" fallbacks. `DEMO_AGENT_ID`'s format went through two later follow-ups:
 *  first to "johnsmith329202" (matching a screenshot, replacing the earlier
 *  "AGT-2001"), then — once the subhead's label changed from "Agent ID:" to
 *  "User Name:" (`AgentDashboardHeader`, see `resolveGreetingContent`'s own
 *  doc comment there) — to a PascalCase-plus-digits username shape,
 *  "JohnSmith229393" (per explicit request: "make the user name something
 *  like JohnSmith229393"). */
const DEMO_AGENT_FIRST_NAME = "John Smith";
const DEMO_AGENT_ID = "JohnSmith229393";
/** Demo "Connection Lag Time" value shown once `agentLegStatus` reads
 *  `"connected"` (see `AgentHomeDashboardDemo`'s own state below) — the
 *  literal value the request's own screenshot showed ("Connection Lag Time:
 *  00:32"), not a live-ticking timer; nothing asked for one. */
const DEMO_CONNECTION_LAG_TIME = "00:32";

function AgentHomeDashboardDemo({
  header = false,
  tabs = false,
  greeting = true,
}: {
  header?: boolean;
  tabs?: boolean;
  greeting?: boolean;
}) {
  const [selectedQueueId, setSelectedQueueId] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<AgentDashboardContactHistoryEntry | null>(null);
  // Whether `AgentDashboardHeader`'s own "Workspace Settings" button has
  // opened its `SidePanel` — a real, separate `SidePanel` (side-panel.tsx),
  // PINNED, `side="right"`, rendered inside `AgentNextGenTemplate`'s own
  // `Container` row (via its `rightPanel` slot — per explicit follow-up
  // request to open on the right instead of the left), not a job of the
  // shared right `InteriorPanel` (that's `selectedQueueId`/`selectedEntry`'s
  // panel, a different component entirely — see side-panel.tsx's own doc
  // comment for why the two are deliberately separate). Also feeds the
  // trigger button's own pressed/toggled state (`AgentDashboardHeader`'s
  // `panelOpen`) — toggled by that same button, since this simple
  // click-only usage has no pin/hover affordance of its own.
  const [agentInfoOpen, setAgentInfoOpen] = useState(false);
  const [agentSettingsTab, setAgentSettingsTab] = useState<(typeof WORKSPACE_SETTINGS_TABS)[number]>(
    WORKSPACE_SETTINGS_TABS[0]
  );
  const [navOpen, setNavOpen] = useState(false);
  const [homeTab, setHomeTab] = useState<(typeof HOME_TABS)[number]>("Dashboard");
  // Drives the `greeting=false` subhead's Connect Agent Leg link/
  // "Connecting..."/lag time (see `AgentDashboardHeaderProps.agentLegStatus`'s
  // own doc comment, agent-dashboard.tsx) — per explicit request chain: "if
  // the agent leg is disconnected show a link ... if it's connected show
  // Connection Lag Time: 00:32", then "it should connect the agent leg (in
  // the profile) ... same behavior as if the agent connected from the
  // profile", then "when the agent leg is connecting, make the subhead say
  // 'Connecting...'" and "when the agent leg is disconnected, update the
  // page header to say 'Connect Agent Leg' link again". Starts
  // `"disconnected"` on every mount. Set to `"connecting"` immediately by
  // `handleConnectAgentLeg` below (the header link click); set to whatever
  // `AgentNextGenTemplate`'s real `AgentProfile` actually reports
  // (`"connected"` once its own ~2s connecting animation finishes, OR
  // `"disconnected"` if the agent later disconnects via `AgentProfile`'s own
  // "Agent Leg Connected" menu row — a path entirely outside this
  // component's own click handler) via the `onAgentLegStatusChange` callback
  // passed to `<AgentNextGenTemplate>` below. This is now genuinely synced
  // to the real agent-leg state (not independent demo-only state the way it
  // started) — `connectAgentLegSignal` below is the only thing that still
  // needs its own separate counter, since starting a connect and reporting
  // its outcome are two different signals.
  const [agentLegStatus, setAgentLegStatus] = useState<"disconnected" | "connecting" | "connected">("disconnected");
  // Bumped by the "Connect Agent Leg" click (`handleConnectAgentLeg` below)
  // — passed straight through to `AgentNextGenTemplate`'s own
  // `connectAgentLegSignal` prop (forwarded to its internal `AgentProfile`)
  // so the header link actually starts the real connect flow there. A
  // separate counter from `agentLegStatus` above — one is "start
  // connecting" (an imperative trigger, needs to fire even if already
  // `"connecting"` for any reason), the other is "what's the current status"
  // (a value, read back via `onAgentLegStatusChange`) — same split
  // `AgentProfile`'s own `connectAgentLegSignal`/`agentLegStatus` pair makes
  // internally.
  const [connectAgentLegSignal, setConnectAgentLegSignal] = useState(0);

  const closePanel = () => {
    setSelectedQueueId(null);
    setSelectedEntry(null);
  };

  // Shared "Connect Agent Leg" click handler for both call sites below
  // (`<AgentDashboard>`'s inline header copy and the standalone
  // `<AgentDashboardHeader>`) — flips this demo's own subhead to
  // "Connecting..." immediately AND bumps `connectAgentLegSignal` so
  // `AgentNextGenTemplate`'s real `AgentProfile` actually starts connecting
  // (and, ~2s later, reports back "connected" via `onAgentLegStatusChange`
  // below, which is what actually flips `agentLegStatus` to `"connected"` —
  // not this handler).
  const handleConnectAgentLeg = () => {
    setAgentLegStatus("connecting");
    setConnectAgentLegSignal((n) => n + 1);
  };

  const interiorPanelOverride = selectedQueueId
    ? {
        open: true,
        headerTitle: AGENT_DASHBOARD_QUEUE_ITEMS.find((q) => q.id === selectedQueueId)?.name ?? "Queue",
        headerSubhead: `${(AGENT_DASHBOARD_QUEUE_SUB_ITEMS[selectedQueueId] ?? []).length} Skills`,
        onClose: closePanel,
        content: <AgentDashboardQueueDrilldown queueId={selectedQueueId} />,
      }
    : selectedEntry
    ? {
        open: true,
        headerTitle: selectedEntry.name,
        headerSubhead: selectedEntry.skillName,
        onClose: closePanel,
        footer: selectedEntry.redial ? (
          <Button variant="outline" onClick={closePanel}>
            <PhoneOutgoing className="h-3.5 w-3.5" strokeWidth={1.5} />
            Redial
          </Button>
        ) : (
          <Button onClick={closePanel}>
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
            Re-open
          </Button>
        ),
        content: <AgentDashboardContactHistoryEntryDetail entry={selectedEntry} />,
      }
    : undefined;

  return (
    // `rightPanel` — a real `SidePanel`, PINNED, `side="right"`, rendered
    // inside `AgentNextGenTemplate`'s own `Container` row (immediately right
    // of the PageHeader/content column) — per explicit follow-up request
    // ("open the side panel on the RIGHT instead of the left"), moved here
    // from `leftPanel` (which earlier passes had established after several
    // corrections: "it should be inside the left nav not outside" / "the
    // side panel should be INSIDE the main container not outside" — see
    // `leftPanel`'s own doc comment on `AgentNextGenTemplate` for that
    // history; the position-inside-Container part still applies, just
    // mirrored onto the opposite edge now).
    <AgentNextGenTemplate
      // Per explicit request: "Home" reads `active` (this story IS the Home
      // page) and "Settings" is hidden entirely from the rail — the rail's
      // gear icon would otherwise sit alongside the header's own
      // "Workspace Settings" trigger as a second, redundant settings entry
      // point. Derived from the shared `NAV_ITEMS` (rather than a separate
      // hand-written array) so this stays in sync with its "Home" item's
      // icon/label if that ever changes.
      navItems={NAV_ITEMS.filter((item) => item.label === "Home").map((item) => ({ ...item, active: true }))}
      rightPanel={
        <SidePanel
          side="right"
          open={agentInfoOpen}
          pinned
          // `width`/`minWidth` both need to be 350 (not just `minWidth`) —
          // `usePanelDragResize`'s own `min`/`max` only clamp a DRAG in
          // progress, they don't affect the panel's initial rendered width
          // (`width`, default 256) at all — see use-panel-drag-resize.ts.
          width={350}
          minWidth={350}
          headerTitle="Workspace Settings"
          headerTabs={
            <TabList className="px-4" overflowMenu>
              {WORKSPACE_SETTINGS_TABS.map((label) => (
                <Tab key={label} active={agentSettingsTab === label} onClick={() => setAgentSettingsTab(label)}>
                  {label}
                </Tab>
              ))}
            </TabList>
          }
          // Toggle-closed icon, right of the header title — same
          // `PanelPinButton pinned={false}` "momentary action, not a
          // persistent-highlight toggle" treatment `CustomerInformationDockedPanel`
          // uses for its own close button (customer-information-demo.tsx),
          // matched glyph-for-side too (`PanelRightClose`, since this panel
          // is also `side="right"`) — per explicit request ("add the toggle
          // closed icon to the right of the workspace settings header (like
          // customer information)"). No `onPinToggle` passed to `SidePanel`
          // itself (same as Customer Information) — this is a plain close
          // action, not a pin/unpin affordance.
          headerActions={
            <PanelPinButton
              pinned={false}
              onToggle={() => setAgentInfoOpen(false)}
              icon={<PanelRightClose className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
              pinnedLabel="Close Workspace Settings"
              unpinnedLabel="Close Workspace Settings"
            />
          }
        >
          <div className="flex flex-col gap-4 px-4 py-4">
            <Input label="Name" defaultValue={DEMO_AGENT_FIRST_NAME} readonly />
            <Input label="Agent ID" defaultValue={DEMO_AGENT_ID} readonly />
            <Input label="Email" defaultValue="john.smith@example.com" readonly />
            <Input label="Time Zone" defaultValue="Eastern Time (ET)" readonly />
          </div>
        </SidePanel>
      }
      homeBody={
        <AgentDashboard
          header={header}
          greeting={greeting}
          agentFirstName={greeting ? undefined : DEMO_AGENT_FIRST_NAME}
          agentId={greeting ? undefined : DEMO_AGENT_ID}
          agentLegStatus={agentLegStatus}
          connectionLagTime={DEMO_CONNECTION_LAG_TIME}
          onConnectAgentLeg={handleConnectAgentLeg}
          selectedQueueId={selectedQueueId}
          onSelectQueueId={(id) => {
            setSelectedEntry(null);
            setSelectedQueueId(id);
          }}
          selectedContactHistoryEntryId={selectedEntry?.id ?? null}
          onSelectContactHistoryEntry={(entry) => {
            // Clicking the ALREADY-active row again closes the interior
            // panel instead of re-opening/re-selecting it — same
            // click-to-toggle idea `closePanel` already exists for, just
            // triggered from the row click itself rather than the panel's
            // own close button.
            if (selectedEntry?.id === entry.id) {
              setSelectedEntry(null);
              return;
            }
            setSelectedQueueId(null);
            setSelectedEntry(entry);
          }}
          onPersonalQueueClick={() => setNavOpen((v) => !v)}
        />
      }
      homeHeader={
        header ? (
          <AgentDashboardHeader
            onPersonalQueueClick={() => setNavOpen((v) => !v)}
            // `AgentDashboardHeader`'s own "Workspace Settings" button — per
            // explicit follow-up request, opens the real "Workspace
            // Settings" `SidePanel` rendered below (NOT the shared right
            // `InteriorPanel` a first pass wired this to, and NOT the
            // LeftNav `onPersonalQueueClick` already toggles — see
            // `agentInfoOpen`'s own doc comment above for why this needed
            // its own dedicated panel/state).
            onPanelToggle={() => setAgentInfoOpen((v) => !v)}
            panelOpen={agentInfoOpen}
            // Per explicit follow-up ("if header is true and tabs are true
            // use the border-bottom:none page header variant"): the tab row
            // below already draws its own `border-b` once `tabs` is on, so
            // the header drops its own to avoid the doubled-line look —
            // same rule as the interaction record headers (see
            // `AgentDashboardHeaderProps.bordered`'s own doc comment).
            bordered={!tabs}
            greeting={greeting}
            agentFirstName={greeting ? undefined : DEMO_AGENT_FIRST_NAME}
            agentId={greeting ? undefined : DEMO_AGENT_ID}
            agentLegStatus={agentLegStatus}
            connectionLagTime={DEMO_CONNECTION_LAG_TIME}
            onConnectAgentLeg={handleConnectAgentLeg}
          />
        ) : undefined
      }
      homeTabs={
        tabs ? (
          <TabList className="px-6 bg-lyra-bg-surface-base shrink-0">
            {HOME_TABS.map((label) => (
              <Tab key={label} active={homeTab === label} onClick={() => setHomeTab(label)}>
                {label}
              </Tab>
            ))}
          </TabList>
        ) : undefined
      }
      interiorPanelOverride={interiorPanelOverride}
      navOpen={navOpen}
      onNavOpenChange={setNavOpen}
      connectAgentLegSignal={connectAgentLegSignal}
      // Reports the real `AgentProfile` connect/disconnect back into this
      // demo's own `agentLegStatus` — see that state's own doc comment for
      // the full "Connecting..." / disconnect-reverts-the-link rationale.
      onAgentLegStatusChange={setAgentLegStatus}
      // Per explicit request ("hide the connected apps") — scoped to this
      // story only, see `AgentNextGenTemplate`'s own `hideConnectedApps`
      // prop doc comment.
      hideConnectedApps
    />
  );
}

// Typed against `AgentHomeDashboardDemo` itself (not the shared `Story` =
// `StoryObj<typeof AgentNextGenTemplate>` alias every other export above
// uses) — this story's own `header` control has no equivalent prop on
// `AgentNextGenTemplate` directly (it maps to `AgentDashboard`'s `header` +
// `AgentNextGenTemplate`'s `homeHeader`, both via this wrapper), so it needs
// its own `args`/`argTypes` shape rather than reusing that alias.
export const AgentHomeDashboardStory: StoryObj<typeof AgentHomeDashboardDemo> = {
  name: "Agent Home Dashboard",
  args: {
    header: false,
    tabs: false,
    greeting: true,
  },
  argTypes: {
    header: {
      control: "boolean",
      description:
        "Move the greeting/date/Personal Queue chip out of the dashboard body into a real non-scrolling header row above it (AgentDashboard's own `header` prop + AgentNextGenTemplate's `homeHeader` slot).",
    },
    tabs: {
      control: "boolean",
      description:
        "Show a Dashboard/Customers/Tickets/Accounts tab row below the header (AgentNextGenTemplate's new `homeTabs` slot). Cosmetic only — this demo composition has no real Customers/Tickets/Accounts content behind the other three tabs.",
    },
    greeting: {
      control: "boolean",
      description:
        "When on (default), shows the time-of-day greeting (\"Good Morning\"[, name]) with the date as the subhead. When off, shows the agent's name as the title and \"Agent ID: {AgentID}\" as the subhead (AgentDashboard's/AgentDashboardHeader's `greeting` prop).",
    },
  },
  render: (args) => <AgentHomeDashboardDemo header={args.header} tabs={args.tabs} greeting={args.greeting} />,
};
