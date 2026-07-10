import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { DraggableVariant } from "../draggable";
import { AppHeader } from "../app-header";
import { AppName } from "../app-name";
import { AppMenu, type AppMenuGroup } from "../app-menu";
import { CXoneLogo } from "../cxone-logo";
import { AiPanel } from "../ai-panel";
import { NotificationsBell } from "../notifications-bell";
import { AgentNotifications, type AgentNotification } from "../agent-notifications";
import { AgentProfile, type AgentStatus } from "../agent-profile";
import { LeftNav, type NavItem } from "../left-nav";
import { CreateNew, useOutboundAddButton, type CreateNewOutboundContact, type CreateNewOutboundConfig } from "../create-new";
import { InteractionNavItem, type InteractionChannel, type ChannelType } from "../interaction-nav-item";
import { ChannelTab } from "../channel-row";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";
import { ContentArea } from "../content-area";
import { Container } from "../container";
import { Panel } from "../panel";
import { CustomerInformationPanel } from "../customer-information-panel";
import { PanelPinButton } from "../panel-pin-button";
import { PageHeader } from "../page-header";
import { TabList } from "../tabs";
import { Button } from "../button";
import appIcon from "../../assets/app-icon.svg";
import { Input } from "../input";
import {
  Home,
  Users,
  BookUser,
  CalendarDays,
  Settings,
  Plus,
  User,
} from "lucide-react";

/* ── Sparkle icon ── */

function AiSparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 10C17 9.94181 16.9795 9.88562 16.9424 9.84082C16.9051 9.79597 16.8532 9.76559 16.7959 9.75488L16.7949 9.75391L12.6279 8.96582C12.2329 8.89119 11.8693 8.69934 11.585 8.41504C11.3007 8.13074 11.1088 7.76715 11.0342 7.37207L10.2461 3.20508L10.2451 3.2041C10.2344 3.14679 10.204 3.09487 10.1592 3.05762C10.1144 3.02051 10.0582 3 10 3C9.94182 3 9.88563 3.02051 9.84082 3.05762C9.79597 3.09486 9.76559 3.14679 9.75488 3.2041L9.75391 3.20508L8.96582 7.37207C8.89119 7.76715 8.69934 8.13074 8.41504 8.41504C8.13074 8.69934 7.76715 8.89119 7.37207 8.96582L3.20508 9.75391L3.2041 9.75488C3.14679 9.76559 3.09486 9.79597 3.05762 9.84082C3.02051 9.88563 3 9.94182 3 10C3 10.0582 3.02051 10.1144 3.05762 10.1592C3.07625 10.1816 3.09828 10.2013 3.12305 10.2158L3.2041 10.2451L3.20508 10.2461L7.37207 11.0342C7.76715 11.1088 8.13074 11.3007 8.41504 11.585C8.69934 11.8693 8.89119 12.2329 8.96582 12.6279L9.75391 16.7949L9.75488 16.7959C9.76559 16.8532 9.79597 16.9051 9.84082 16.9424C9.88562 16.9795 9.94181 17 10 17C10.0582 17 10.1144 16.9795 10.1592 16.9424C10.204 16.9051 10.2344 16.8532 10.2451 16.7959L10.2461 16.7949L11.0342 12.6279C11.1088 12.2329 11.3007 11.8693 11.585 11.585C11.8693 11.3007 12.2329 11.1088 12.6279 11.0342L16.7949 10.2461L16.7959 10.2451C16.8532 10.2344 16.9051 10.204 16.9424 10.1592C16.9795 10.1144 17 10.0582 17 10ZM5.00098 15.999C5.00098 15.4469 4.55306 14.999 4.00098 14.999C3.4491 14.9993 3.00195 15.4471 3.00195 15.999C3.0022 16.5507 3.44925 16.9978 4.00098 16.998C4.55291 16.998 5.00073 16.5509 5.00098 15.999ZM6.00098 15.999C6.00073 17.1032 5.1052 17.998 4.00098 17.998C2.89697 17.9978 2.0022 17.103 2.00195 15.999C2.00195 14.8948 2.89682 13.9993 4.00098 13.999C5.10535 13.999 6.00098 14.8947 6.00098 15.999ZM18 10C18 10.2917 17.8983 10.5745 17.7119 10.7988C17.5256 11.0232 17.2662 11.174 16.9795 11.2275L16.9805 11.2285L12.8135 12.0166C12.616 12.0539 12.4341 12.1499 12.292 12.292C12.1499 12.4341 12.0539 12.616 12.0166 12.8135L11.2285 16.9805C11.1748 17.2668 11.023 17.5257 10.7988 17.7119C10.5745 17.8983 10.2917 18 10 18C9.70834 18 9.42555 17.8983 9.20117 17.7119C8.97704 17.5257 8.82516 17.2668 8.77148 16.9805L7.9834 12.8135C7.94609 12.616 7.85013 12.4341 7.70801 12.292C7.56588 12.1499 7.38403 12.0539 7.18652 12.0166L3.01953 11.2285V11.2275C2.73324 11.1738 2.47421 11.0229 2.28809 10.7988C2.10174 10.5745 2 10.2917 2 10C2 9.70834 2.10174 9.42554 2.28809 9.20117C2.47425 8.97704 2.73317 8.82516 3.01953 8.77148L7.18652 7.9834C7.38403 7.94609 7.56588 7.85013 7.70801 7.70801C7.85013 7.56588 7.94609 7.38403 7.9834 7.18652L8.77148 3.01953C8.82516 2.73317 8.97704 2.47425 9.20117 2.28809C9.42554 2.10174 9.70834 2 10 2C10.2917 2 10.5745 2.10174 10.7988 2.28809C11.023 2.47425 11.1748 2.73317 11.2285 3.01953L12.0166 7.18652C12.0539 7.38403 12.1499 7.56588 12.292 7.70801C12.4341 7.85013 12.616 7.94609 12.8135 7.9834L16.9805 8.77148H16.9795C17.2662 8.82503 17.5256 8.97683 17.7119 9.20117C17.8983 9.42555 18 9.70834 18 10ZM17.8271 4.0791C17.8271 4.22843 17.775 4.37334 17.6797 4.48828C17.5842 4.60329 17.4507 4.68056 17.3037 4.70801L17.3047 4.70898L16.6699 4.82812L16.5498 5.46191C16.5224 5.60887 16.4451 5.74238 16.3301 5.83789C16.2151 5.93334 16.0703 5.98532 15.9209 5.98535C15.7715 5.98535 15.6267 5.93328 15.5117 5.83789C15.3971 5.74266 15.3187 5.6103 15.291 5.46387L15.1709 4.82812L14.5361 4.70898V4.70801C14.3898 4.68032 14.2573 4.6029 14.1621 4.48828C14.0907 4.40218 14.0436 4.29937 14.0244 4.19043L14.0146 4.0791L14.0244 3.96875C14.0436 3.85949 14.0904 3.75624 14.1621 3.66992C14.2576 3.55499 14.3903 3.47672 14.5371 3.44922L15.1709 3.3291L15.291 2.69531C15.3186 2.54862 15.3969 2.41569 15.5117 2.32031L15.6025 2.25781C15.6989 2.20264 15.8086 2.17285 15.9209 2.17285L16.0312 2.18262C16.1041 2.19538 16.174 2.22111 16.2383 2.25781L16.3301 2.32031L16.4092 2.39941C16.4808 2.48388 16.5302 2.58618 16.5508 2.69629H16.5498L16.6699 3.3291L17.3027 3.44922H17.3037C17.4138 3.46978 17.5161 3.5192 17.6006 3.59082L17.6797 3.66992L17.7422 3.76172C17.7971 3.85791 17.8271 3.96706 17.8271 4.0791Z" fill="currentColor"/>
    </svg>
  );
}

/* ── App menu data ── */

const APP_MENU_GROUPS: AppMenuGroup[] = [
  {
    items: [
      { label: "Admin" },
      { label: "Supervisor" },
      { label: "Agent", active: true },
      { label: "Cognigy AI" },
    ],
  },
  {
    items: [
      { label: "Workforce Management" },
      { label: "Quality Management" },
      { label: "Interaction Hub" },
      { label: "My Zone" },
    ],
  },
  {
    items: [
      { label: "Dashboard" },
      { label: "Analytics" },
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

/* ── Sample notifications ── */

/** Seed data for the "Active Interaction" story below — the exact shape
 *  `handleStartCall` produces for a real outbound voice call to "Jamie
 *  Torres" (`CREATE_NEW_AGENTS[0]`, id "agent-1", `agentId` "AGT-2000") on
 *  the "General Support" skill, using the same phone/skill option values
 *  as `OUTBOUND_CONFIG` (`create-new-outbound-mock.tsx`) so this story
 *  renders identically to what starting that call by hand would produce. */
const ACTIVE_INTERACTION_DEMO: ActiveInteraction = {
  id: "agent-1",
  customerName: "Jamie Torres",
  recordId: "AGT-2000",
  channels: [
    {
      id: "voice:+14563833329",
      type: "voice",
      startTick: 0,
      preview: "General Support",
      value: "+14563833329",
      addressLabel: "(456) 383-3329",
    },
  ],
  currentChannelId: "voice:+14563833329",
};

const INITIAL_NOTIFICATIONS: AgentNotification[] = [
  { id: "1", type: "new-case",    title: "New Case",    subtitle: "Noah Patel",    timestamp: "13m ago", read: false },
  { id: "2", type: "new-chat",    title: "New Chat",    subtitle: "Sarah Miller",  timestamp: "18m ago", read: false },
  { id: "3", type: "escalation",  title: "Escalation",  subtitle: "Lauren Kim",    timestamp: "24m ago", read: false },
  { id: "4", type: "new-case",    title: "New Case",    subtitle: "Ethan Zhang",   timestamp: "37m ago", read: true  },
  { id: "5", type: "new-chat",    title: "New Chat",    subtitle: "Olivia Reed",   timestamp: "51m ago", read: true  },
  { id: "6", type: "missed-call", title: "Missed Call", subtitle: "David Brown",   timestamp: "1h ago",  read: true  },
];

/* ── Template component ── */

const AI_PANEL_DEFAULT_WIDTH = 360;

function AgentNextGenTemplate({
  showPageHeader = false,
  showPanelToggle = false,
  showInteriorPanel = true,
  initialInteraction,
  sidePanelToggleLabel,
}: {
  showPageHeader?: boolean;
  showPanelToggle?: boolean;
  showInteriorPanel?: boolean;
  /**
   * Seeds `interactions`/`activeInteractionId` with an already-active call,
   * for stories that need to render the interaction detail view directly
   * (e.g. "Active Interaction") instead of requiring a manual New Outbound
   * click first. Shaped exactly like what `handleStartCall` itself would
   * produce, so it's indistinguishable from a real session once rendered.
   */
  initialInteraction?: ActiveInteraction;
  /**
   * Overrides the record-header `PanelPinButton`'s tooltip — both the
   * pinned and unpinned label, since a story-specific override like
   * "Toggle Overview" describes the action generically rather than the
   * pin/unpin state pair "Unpin/Pin Designer panel" defaults to. Leave
   * unset to keep those defaults.
   */
  sidePanelToggleLabel?: string;
}) {
  const [navOpen, setNavOpen] = useState(!!initialInteraction);
  // No interactions exist until the agent launches one from the CreateNew
  // menu (Start Interaction / quick dial) — see handleStartCall/handleQuick
  // Dial below. Click any resulting InteractionNavItem card to make it the
  // active one, same interactive pattern as LeftNav.stories.tsx's "Agent
  // Next Gen Left Nav" story. `initialInteraction` (see above) seeds this
  // instead, for stories that want to start already mid-call.
  const [interactions, setInteractions] = useState<ActiveInteraction[]>(
    () => (initialInteraction ? [initialInteraction] : [])
  );
  const [activeInteractionId, setActiveInteractionId] = useState<string | null>(
    () => initialInteraction?.id ?? null
  );
  // Drives the main content area — see agent-next-gen-v1's own copy of this
  // derived value and the PageHeader switch below.
  const activeInteraction = interactions.find((i) => i.id === activeInteractionId) ?? null;
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
  const [agentStatus, setAgentStatus] = useState<AgentStatus>("available");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [appMenuOpen, setAppMenuOpen] = useState(false);

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

  /* AI panel state */
  const [aiPanelOpen,   setAiPanelOpen]   = useState(false);
  const [aiMounted,     setAiMounted]     = useState(false); // true after first open, never resets
  const [aiState,       setAiState]       = useState<PanelState>("closed");
  const [aiVariant,     setAiVariant]     = useState<DraggableVariant>("float");
  const [aiWidth,       setAiWidth]       = useState(AI_PANEL_DEFAULT_WIDTH);
  const [aiHeight,      setAiHeight]      = useState(860);
  const [aiIsResizing,  setAiIsResizing]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const aiFloatLeft = useRef<number | null>(null);
  const aiFloatTop  = useRef<number | null>(null);
  // Ref on the AiPanel/Draggable root — getBoundingClientRect() here includes the CSS
  // transform drag offset, so we capture the actual visual position before docking.
  const aiPanelRef  = useRef<HTMLDivElement>(null);
  const aiAnimTimer = useRef<ReturnType<typeof setTimeout>>();

  /* Notifications panel state */
  const [notifOpen,       setNotifOpen]       = useState(false);
  const [notifMounted,    setNotifMounted]    = useState(false); // true after first open, never resets
  const [notifState,      setNotifState]      = useState<PanelState>("closed");
  const [notifVariant,    setNotifVariant]    = useState<DraggableVariant>("float");
  const [notifWidth,      setNotifWidth]      = useState(360);
  const [notifHeight,     setNotifHeight]     = useState(860);
  const [notifIsResizing, setNotifIsResizing] = useState(false);
  const [topPanel,        setTopPanel]        = useState<"ai" | "notif" | null>(null);
  const notifFloatLeft = useRef<number | null>(null);
  const notifFloatTop  = useRef<number | null>(null);
  const notifPanelRef  = useRef<HTMLDivElement>(null);
  const notifAnimTimer = useRef<ReturnType<typeof setTimeout>>();

  /* Interior panel (right) */
  const [interiorPanelOpen, setInteriorPanelOpen] = useState(false);

  /* Side panel */
  const [sidePanelOpen,      setSidePanelOpen]      = useState(false);
  const [sidePanelPinned,    setSidePanelPinned]    = useState(false);
  const [sidePanelResizing,  setSidePanelResizing]  = useState(false);
  const [sidePanelWidth,     setSidePanelWidth]     = useState(256);
  const [containerWidth,     setContainerWidth]     = useState(9999);
  const sidePanelTimer = useRef<ReturnType<typeof setTimeout>>();

  // Track container width to force unpinned below 768px
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isNarrowContainer = containerWidth < 768;
  // When narrow: force overlay mode and hide pin button
  const effectivePinned = isNarrowContainer ? false : sidePanelPinned;

  // Close (and fully unpin) the Designer panel the moment the container
  // drops below 768px. See agent-next-gen-v1's copy of this effect for the
  // full rationale.
  useEffect(() => {
    if (isNarrowContainer) {
      setSidePanelOpen(false);
      setSidePanelPinned(false);
    }
  }, [isNarrowContainer]);

  // The Designer panel belongs to the interaction it was opened from — its
  // only trigger is the record icon on the interaction `PageHeader`, which
  // doesn't exist outside an interaction. See agent-next-gen-v1's copy of
  // this effect for the full rationale.
  useEffect(() => {
    if (!activeInteractionId) {
      setSidePanelOpen(false);
      setSidePanelPinned(false);
    }
  }, [activeInteractionId]);

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

  // Close and undock any docked panels when viewport drops below 1280px
  useEffect(() => {
    if (isNavNarrow) {
      if (aiVariant === "docked") {
        setAiVariant("float");
        setAiPanelOpen(false);
      }
      if (notifVariant === "docked") {
        setNotifVariant("float");
        setNotifOpen(false);
      }
    }
  }, [isNavNarrow]); // eslint-disable-line react-hooks/exhaustive-deps

  // No hidden gating here — matches `Panel.stories.tsx`'s "Side Panel"
  // story, where `pinned` and `open` are two plain, independent booleans
  // and nothing about toggling one disables the other's normal control
  // going forward. Hovering the icon always previews the panel while
  // unpinned, exactly like that story's `Panel` does — including right
  // after an icon-click unpin, which previously left a `sidePanelHoverEnabled`
  // flag permanently `false` for the rest of the interaction (reset only on
  // leaving the interaction or going narrow) — a stricter, one-off "click
  // to reopen" behavior that doesn't match the plain Panel model and that
  // this fixes.
  const onSidePanelHoverStart = () => {
    clearTimeout(sidePanelTimer.current);
    setSidePanelOpen(true);
  };
  // Guarded on `sidePanelPinned` — see agent-next-gen-v1's copy of this
  // handler for the full rationale.
  const onSidePanelHoverEnd = () => {
    if (sidePanelPinned) return;
    sidePanelTimer.current = setTimeout(() => setSidePanelOpen(false), 300);
  };
  const handleSidePanelPinToggle = () => {
    setSidePanelPinned((v) => !v);
    setSidePanelOpen(true); // keep open when toggling pin state
  };
  /* Click on the interaction record icon — a real on/off toggle, distinct
     from `handleSidePanelPinToggle` above. See agent-next-gen-v1's copy of
     this handler for the full rationale. */
  const handleSidePanelIconToggle = () => {
    clearTimeout(sidePanelTimer.current);
    const nextPinned = !sidePanelPinned;
    setSidePanelPinned(nextPinned);
    setSidePanelOpen(nextPinned);
  };

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
  // story) wants the exact same "+" behavior on each InteractionNavItem
  // card — look up that interaction's underlying outbound contact, scope
  // the flyout to whatever channels it actually supports (falling back to
  // the full unfiltered list for quick-dialed numbers with no matching
  // contact record), and deep-link a picked channel into CreateNew's
  // `launchRequest`. That's `useOutboundAddButton` (create-new.tsx) — a
  // single shared implementation instead of three hand-copied ones that
  // could (and did) quietly drift out of sync.
  const { launchRequest: outboundLaunchRequest, onLaunchRequestHandled, getHeaderAction } = useOutboundAddButton(outboundConfig);

  /* AI panel show/hide */
  useEffect(() => {
    clearTimeout(aiAnimTimer.current);
    if (aiPanelOpen) {
      if (containerRef.current && aiFloatLeft.current === null) {
        // Store absolute viewport x so the panel doesn't shift when the left nav opens/closes
        const r = containerRef.current.getBoundingClientRect();
        aiFloatLeft.current = r.left + containerRef.current.offsetWidth - aiWidth - 16;
      }
      setAiHeight(computePanelHeight());
      setAiMounted(true);
      setAiState("open");   // data-state="open" → enter animation triggers
      setTopPanel("ai");
    } else {
      setAiState("closing"); // data-state="closed" → exit animation plays
      aiAnimTimer.current = setTimeout(() => {
        setAiState("closed");
      }, 150);
    }
    return () => clearTimeout(aiAnimTimer.current);
  }, [aiPanelOpen]);

  /* Shrink panel height with viewport when open */
  useEffect(() => {
    if (!aiPanelOpen) return;
    const onResize = () => setAiHeight(computePanelHeight());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [aiPanelOpen]);

  /* Notifications panel show/hide — same state machine as AI panel */
  useEffect(() => {
    clearTimeout(notifAnimTimer.current);
    if (notifOpen) {
      if (containerRef.current && notifFloatLeft.current === null) {
        const r = containerRef.current.getBoundingClientRect();
        notifFloatLeft.current = r.left + containerRef.current.offsetWidth - notifWidth - 16;
      }
      setNotifHeight(computePanelHeight());
      setNotifMounted(true);
      setNotifState("open");
      setTopPanel("notif");
    } else {
      setNotifState("closing");
      notifAnimTimer.current = setTimeout(() => {
        setNotifState("closed");
      }, 150);
    }
    return () => clearTimeout(notifAnimTimer.current);
  }, [notifOpen]);

  useEffect(() => {
    if (!notifOpen) return;
    const onResize = () => setNotifHeight(computePanelHeight());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [notifOpen]);

  const handleNotifVariantChange = (v: DraggableVariant) => {
    // When docking: read from the Draggable root element (not the fixed wrapper) so that
    // getBoundingClientRect() includes the CSS transform drag offset — the true visual position.
    if (v === "docked" && notifPanelRef.current) {
      const r = notifPanelRef.current.getBoundingClientRect();
      notifFloatLeft.current = r.left;
      notifFloatTop.current  = r.top;
    }
    // Single-dock rule: if docking and AI panel is already docked, force AI to float.
    // AI has no float wrapper right now so fall back to a computed default position.
    if (v === "docked" && aiVariant === "docked" && containerRef.current) {
      const r = containerRef.current.getBoundingClientRect();
      aiFloatLeft.current = r.left + containerRef.current.offsetWidth - aiWidth - 16;
      aiFloatTop.current  = null; // use computed default top
      setAiVariant("float");
    }
    setNotifVariant(v);
  };

  const getNotifFloatStyle = (): React.CSSProperties => {
    const rect = containerRef.current?.getBoundingClientRect();
    // left is stored as an absolute viewport x-coordinate so it doesn't shift when the
    // left nav opens/closes (which changes rect.left but not the panel's intended position)
    const left = notifFloatLeft.current !== null
      ? notifFloatLeft.current
      : containerRef.current
        ? (rect?.left ?? 0) + containerRef.current.offsetWidth - notifWidth - 16
        : 0;
    const top = notifFloatTop.current !== null
      ? notifFloatTop.current
      : (rect?.top ?? 0);
    return {
      position: "fixed",
      top,
      left,
      zIndex: topPanel === "notif" ? 10000 : 9999,
    };
  };

  const notifPanel = notifMounted ? (
    <AgentNotifications
      ref={notifPanelRef}
      notifications={notifications}
      draggableVariant={notifVariant}
      onVariantChange={handleNotifVariantChange}
      onWidthChange={setNotifWidth}
      onResizeStateChange={setNotifIsResizing}
      onInteract={() => setTopPanel("notif")}
      onMarkAllRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
      onClearAll={() => setNotifications([])}
      onDismiss={(id) => setNotifications((prev) => prev.filter((n) => n.id !== id))}
      onNotificationClick={(n) => setNotifications((prev) => prev.map((i) => i.id === n.id ? { ...i, read: true } : i))}
      onClose={() => setNotifOpen(false)}
      defaultWidth={notifWidth}
      maxWidth={600}
      height={notifHeight}
    />
  ) : null;

  const handleAiVariantChange = (v: DraggableVariant) => {
    // When docking: read from the Draggable root element (not the fixed wrapper) so that
    // getBoundingClientRect() includes the CSS transform drag offset — the true visual position.
    if (v === "docked" && aiPanelRef.current) {
      const r = aiPanelRef.current.getBoundingClientRect();
      aiFloatLeft.current = r.left;
      aiFloatTop.current  = r.top;
    }
    // Single-dock rule: if docking and notif panel is already docked, force notif to float.
    // Notif has no float wrapper right now so fall back to a computed default position.
    if (v === "docked" && notifVariant === "docked" && containerRef.current) {
      const r = containerRef.current.getBoundingClientRect();
      notifFloatLeft.current = r.left + containerRef.current.offsetWidth - notifWidth - 16;
      notifFloatTop.current  = null; // use computed default top
      setNotifVariant("float");
    }
    setAiVariant(v);
  };

  /* Float position — stored and returned as absolute viewport x-coordinate */
  const getAiFloatStyle = (): React.CSSProperties => {
    const rect = containerRef.current?.getBoundingClientRect();
    const left = aiFloatLeft.current !== null
      ? aiFloatLeft.current
      : containerRef.current
        ? (rect?.left ?? 0) + containerRef.current.offsetWidth - aiWidth - 16
        : 0;
    const top = aiFloatTop.current !== null
      ? aiFloatTop.current
      : (rect?.top ?? 0);
    return {
      position: "fixed",
      top,
      left,
      zIndex: topPanel === "ai" ? 10000 : 9999,
    };
  };

  const aiPanel = aiMounted ? (
    <AiPanel
      ref={aiPanelRef}
      draggable
      draggableVariant={aiVariant}
      defaultDraggableWidth={aiWidth}
      maxDraggableWidth={600}
      defaultDraggableHeight={aiHeight}
      onVariantChange={handleAiVariantChange}
      onWidthChange={setAiWidth}
      onResizeStateChange={setAiIsResizing}
      onInteract={() => setTopPanel("ai")}
      userName="John"
      suggestions={[
        { id: "1", label: "Summarise this contact's history" },
        { id: "2", label: "Suggest a response to the customer" },
        { id: "3", label: "What changed since yesterday?" },
      ]}
      onClose={() => setAiPanelOpen(false)}
      className={aiVariant === "docked" ? "h-full" : undefined}
    />
  ) : null;

  return (
    <div className="flex flex-col h-screen bg-lyra-bg-surface-shell overflow-hidden">

      {/* ── App Header ── */}
      <AppHeader
        appName={
          <PopoverPrimitive.Root open={appMenuOpen} onOpenChange={setAppMenuOpen}>
            <PopoverPrimitive.Trigger asChild>
              <AppName
                icon={<img src={appIcon} alt="Agent Next Gen" className="h-6 w-6" />}
                name="Agent Next Gen"
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
                  header={isCompactHeader ? "Agent Next Gen" : undefined}
                />
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </PopoverPrimitive.Root>
        }
        actions={
          <>
            <NotificationsBell
              notifications={notifications}
              open={notifOpen}
              onOpenChange={setNotifOpen}
              renderPanel={false}
            />
            <button
              type="button"
              aria-label="Ask AI"
              aria-expanded={aiPanelOpen}
              onClick={() => setAiPanelOpen((v) => !v)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-lyra-lg text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus ${aiPanelOpen ? "bg-lyra-state-hover" : ""}`}
            >
              <AiSparkleIcon />
            </button>
            <AgentProfile
              name="John Smith"
              initials="JS"
              status={agentStatus}
              onStatusChange={handleStatusChange}
              timer={formattedTimer}
              className="ml-1"
            />
          </>
        }
      />

      {/* ── Body: LeftNav + Content ── */}
      {/* overflow-hidden ensures docked panels never push layout past the viewport */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        <LeftNav
          items={NAV_ITEMS}
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
                launchRequest: outboundLaunchRequest,
                onLaunchRequestHandled,
              }}
              expanded={navOpen}
            />
          }
          header={
            <>
              {/* No cards until the agent actually starts one above — each
                  card is one contact (or quick-dialed number), with every
                  channel they're being reached on folded into that same
                  card unless it's a different address on an already-open
                  type, which opens as its own row instead (see
                  handleStartCall's merge-by-type+address logic). */}
              {interactions.map((interaction) => {
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
                    headerAction={getHeaderAction(interaction.id)}
                    currentChannelKey={currentId}
                    onCurrentChannelChange={(key) => handleChannelSelect(interaction.id, key)}
                  />
                );
              })}
            </>
          }
        />

        {/* Content area — flex-1 shrinks to give space to docked panels.
            ref used to position float panels. */}
        <div ref={containerRef} className="relative flex flex-1 min-w-0 overflow-hidden pr-3 pb-3">

          {/* Main Container — flex row so pinned Panel sits left of PageHeader + content.
              relative so unpinned Panel can overlay the full surface. */}
          <Container className="flex flex-1 overflow-hidden relative">

            {/* Customer Information Panel — one instance whose `pinned` prop
                just flips Panel's own internal inline-vs-overlay branch,
                matching the "Side Panel" story (a single element, props
                toggle) so the width transition animates correctly. Gated on
                `activeInteraction`, not just `showPanelToggle` — its only
                trigger is the record icon on the interaction `PageHeader`
                below, which doesn't exist on the "Home" page.
                Was a bare `<Panel headerTitle="Designer" .../>` with no body
                content — swapped for `CustomerInformationPanel`, which
                fixes the header to "Customer Information" and adds a
                "{name} · {id}" subhead for whoever this interaction is
                with. See agent-next-gen-v1's copy of this block for the
                full rationale. */}
            {showPanelToggle && activeInteraction && (
              <CustomerInformationPanel
                side="left"
                open={sidePanelOpen}
                pinned={effectivePinned}
                person={{ name: activeInteraction.customerName ?? "Customer", id: activeInteraction.recordId }}
                onPinToggle={isNarrowContainer ? undefined : handleSidePanelPinToggle}
                width={sidePanelWidth}
                onWidthChange={setSidePanelWidth}
                onResizeStateChange={setSidePanelResizing}
                onMouseEnter={onSidePanelHoverStart}
                onMouseLeave={sidePanelResizing ? undefined : onSidePanelHoverEnd}
              />
            )}

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
                      // Hovering this record icon reveals the Designer side
                      // panel; clicking it is a real on/off toggle via the
                      // shared `PanelPinButton` atom — the same trigger
                      // `Panel`'s own internal pin button uses, just with its
                      // icon swapped to `User`. See agent-next-gen-v1's copy
                      // of this block for the full rationale.
                      icon={
                        <span
                          onMouseEnter={onSidePanelHoverStart}
                          onMouseLeave={sidePanelResizing ? undefined : onSidePanelHoverEnd}
                        >
                          <PanelPinButton
                            pinned={sidePanelPinned}
                            onToggle={handleSidePanelIconToggle}
                            icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
                            pinnedLabel={sidePanelToggleLabel ?? "Unpin Designer panel"}
                            unpinnedLabel={sidePanelToggleLabel ?? "Pin Designer panel"}
                          />
                        </span>
                      }
                      iconAriaHidden={false}
                      title={activeInteraction.customerName ?? "Customer"}
                      subtitle={activeInteraction.recordId}
                    />
                  )}
                  {/* One tab per open channel — kept in sync with the same
                      interaction's InteractionNavItem card via
                      currentChannelId/handleChannelSelect. Shown even with
                      just one channel open. See agent-next-gen-v1's own
                      copy of this block. */}
                  {showPageHeader && activeInteraction.channels.length > 0 && (
                    <TabList className="px-6 bg-lyra-bg-surface-base shrink-0 lyra-channel-tab-list-wrap">
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
                  <div className="flex-1 overflow-y-auto" />
                </>
              ) : (
                <>
                  {showPageHeader && (
                    <PageHeader
                      title="Home"
                      panelToggle={
                        showPanelToggle && showInteriorPanel ? "both"
                        : showPanelToggle ? "left"
                        : showInteriorPanel ? "right"
                        : undefined
                      }
                      panelPinned={effectivePinned}
                      onPanelToggle={effectivePinned ? () => setSidePanelOpen((v) => !v) : undefined}
                      onPanelHoverStart={!effectivePinned ? onSidePanelHoverStart : undefined}
                      onPanelHoverEnd={!effectivePinned ? onSidePanelHoverEnd : undefined}
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
                  )}
                  {/* Body row: main content + interior panel */}
                  <div className="relative flex flex-1 overflow-hidden">
                    <div className="flex-1" />
                    {showInteriorPanel && (
                      <Panel
                        variant="interior"
                        side="right"
                        open={interiorPanelOpen}
                        headerTitle="Case Details"
                        onClose={() => setInteriorPanelOpen(false)}
                      >
                        <div className="flex flex-col gap-4 px-4 py-4">
                          <Input label="Subject" placeholder="Enter subject" />
                          <Input label="Priority" placeholder="Select priority" />
                          <Input label="Assignee" placeholder="Search agents" />
                          <Input label="Tags" placeholder="Add tags" />
                        </div>
                      </Panel>
                    )}
                  </div>
                </>
              )}
            </div>

          </Container>

          {/* Notifications — float
            * Uses CSS transitions (not keyframe animations) to avoid the GPU compositor
            * fill-mode flash. Transitions interpolate between explicit values with no
            * animation lifecycle; visibility:hidden keeps the element in the render tree
            * so the close transition always completes before the element is hidden. */}
          {notifVariant === "float" && notifMounted && (
            <div
              style={{
                ...getNotifFloatStyle(),
                pointerEvents: "none",
                visibility: notifState === "closed" ? "hidden" : "visible",
                opacity: notifState === "open" ? 1 : 0,
                transform: notifState === "open" ? "translateY(0)" : "translateY(-8px)",
                transition: notifState === "open"
                  ? "opacity 150ms ease, transform 150ms ease"
                  : "opacity 100ms ease, transform 100ms ease",
              }}
            >
              {notifPanel}
            </div>
          )}

          {/* AI Panel — float (same CSS transition pattern as Notifications) */}
          {aiVariant === "float" && aiMounted && (
            <div
              style={{
                ...getAiFloatStyle(),
                pointerEvents: "none",
                visibility: aiState === "closed" ? "hidden" : "visible",
                opacity: aiState === "open" ? 1 : 0,
                transform: aiState === "open" ? "translateY(0)" : "translateY(-8px)",
                transition: aiState === "open"
                  ? "opacity 150ms ease, transform 150ms ease"
                  : "opacity 100ms ease, transform 100ms ease",
              }}
            >
              {aiPanel}
            </div>
          )}

        </div>

        {/* Notifications — docked (sibling of containerRef so flex layout keeps it in-bounds) */}
        {notifVariant === "docked" && (
          <div className="pb-3" style={{
            width: notifState === "open" ? notifWidth : 0,
            marginRight: notifState === "open" ? 12 : 0,
            overflow: "hidden",
            flexShrink: 0,
            transition: notifIsResizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            <div
              className="h-full animate-in fade-in-0 duration-150"
              style={{
                width: notifWidth,
                display: notifState === "open" ? "block" : "none",
              }}
            >
              {notifPanel}
            </div>
          </div>
        )}

        {/* AI Panel — docked (sibling of containerRef so flex layout keeps it in-bounds) */}
        {aiVariant === "docked" && (
          <div className="pb-3" style={{
            width: aiState === "open" ? aiWidth : 0,
            marginRight: aiState === "open" ? 12 : 0,
            overflow: "hidden",
            flexShrink: 0,
            transition: aiIsResizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            <div
              className="h-full animate-in fade-in-0 duration-150"
              style={{
                width: aiWidth,
                display: aiState === "open" ? "block" : "none",
              }}
            >
              {aiPanel}
            </div>
          </div>
        )}

      </div>
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
   Same template, but seeded via `initialInteraction` (see
   `ACTIVE_INTERACTION_DEMO` above) so it renders straight into the
   interaction detail view — record header, single Voice `ChannelTab`, and
   the matching `InteractionNavItem` card already expanded in the left nav
   — instead of requiring a manual New Outbound click first. Useful as a
   stable reference for what an in-progress call actually looks like. */
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
      initialInteraction={ACTIVE_INTERACTION_DEMO}
      sidePanelToggleLabel="Toggle Overview"
    />
  ),
};
