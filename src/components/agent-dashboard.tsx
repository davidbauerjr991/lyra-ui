import * as React from "react";
import {
  CheckCircle2,
  CircleDot,
  MinusCircle,
  MessageSquare,
  Mail,
  MessageCircle,
  PhoneIncoming,
  PhoneOutgoing,
  Phone,
  Voicemail,
  ClipboardList,
  Share2,
  Inbox,
  Gauge,
  TrendingUp,
  Info,
  Clock,
  History,
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import { DashboardTemplate } from "./dashboard-template";
import { DashboardCard } from "./dashboard-card";
import { DashboardQueue, type DashboardQueueItem } from "./dashboard-queue";
import { Icon } from "./icon";
import { PageHeader } from "./page-header";
import { Tag, type TagVariant } from "./tag";
import { Badge } from "./badge";
import { Button } from "./button";
import { Separator } from "./separator";
import { DonutChart } from "./donut-chart";
import { Tooltip } from "./tooltip";
import { Popover } from "./popover";
import { RadioGroup, RadioGroupItem } from "./radio";
import { SearchInput } from "./search-input";
import { TableFooter } from "./table";
import { filterChipVariants } from "./filter-chip";
import { WhatsAppIcon, type ChannelType } from "./channel-row";
import { CREATE_NEW_CUSTOMERS } from "./__stories__/create-new-customers-data";
import { Label } from "./label";
import { ChatMessage } from "./chat-message";

/* ── AgentDashboard ──
   The "Home" tab of the Agent Next Gen experience — a greeting, a row of
   queue widgets, a Contact History list, and Performance/Productivity
   summary cards. Promoted here (Templates/Dashboards) from
   agent-next-gen-v1's own hand-built Home tab so every "Agent Next Gen"
   consumer (that app, `lyra-ux-templates`, and this library's own
   `Templates/Agent Next Gen` story) can render the exact same composition
   from one real component instead of three hand-copied ones — the same
   motivation as `useOutboundAddButton` (create-new.tsx): identical demo
   content living in more than one place is exactly the kind of thing that
   quietly drifts. See CONTRIBUTING.md §"Composition over reimplementation" —
   every piece below is built from existing lyra-ui atoms (`DashboardCard`,
   `DashboardQueue`, `Tag`, `Icon`, `DonutChart`, `Separator`, `Popover` +
   `RadioGroup`), nothing hand-rolled.

   This is NOT the reusable "dashboard template" — it's one specific,
   fully-baked composition (this exact greeting, these exact queue widgets,
   Contact History + Redial, this exact Performance/Productivity pair) for
   one specific persona's Home tab. A new dashboard-style page with
   different content should reach for `DashboardTemplate` (dashboard-
   template.tsx) instead — the generic container/width/breakpoint shell
   this component's own outer wrapper used to inline directly, now
   extracted so any page can reuse it with its own cards. See that file's
   doc comment, and PROJECT_SUMMARY.md's "AgentDashboard shouldn't be the
   template" entry for the incident that prompted the extraction.

   All of the demo data (queue counts, contact history rows, performance/
   productivity numbers) is bundled in as sensible defaults — none of it is
   real business data, it's the same illustrative content the reference
   screenshots this was built from show, so there's nothing for a consumer
   to configure to get a faithful "Agent Next Gen" home screen out of the
   box. `selectedQueueId`/`onSelectQueueId` and `selectedContactHistoryEntryId`/
   `onSelectContactHistoryEntry` are exposed so a consumer can drive its own
   side/interior panel from the queue row or Contact History row a user
   clicked — that panel itself stays the consumer's concern (its shell,
   placement, footer actions like Redial/Re-open, and any other tabs sharing
   the same panel differ per app), so `AgentDashboard` only reports the
   selection, the same "report, don't own" split `DashboardQueue` itself
   already follows for its own `selectedId`/`onSelect`. Use
   `AGENT_DASHBOARD_QUEUE_SUB_ITEMS`/`AgentDashboardQueueDrilldown` and
   `AgentDashboardContactHistoryEntryDetail` (all exported below) to render
   that drill-down/summary content — see `Templates/Dashboards`' "Agent Home
   Dashboard" story for a full worked example including the side panel and
   its Redial/Re-open footer buttons. Similarly, `header` (paired with the
   separately-exported `AgentDashboardHeader`) lets a consumer move the
   greeting/date/Personal Queue chip out of this component's own scrollable
   body and into a real header slot of its own instead (e.g.
   `AgentNextGenTemplate`'s `homeHeader` prop) — see `header`'s own doc
   comment for the full rationale. */

export interface AgentDashboardQueueSubItem {
  id: string;
  label: string;
  icon: LucideIcon;
  inQueueCount: number;
  wait: string;
  available: number;
  working: number;
  unavailable: number;
}

/** Per-queue drill-down rows — keyed by the same ids as
 *  `AGENT_DASHBOARD_QUEUE_ITEMS`. Exported so a consumer's own side/interior
 *  panel can render the same "click a queue card → see its skills" content
 *  agent-next-gen-v1's Home tab does. */
export const AGENT_DASHBOARD_QUEUE_SUB_ITEMS: Record<string, AgentDashboardQueueSubItem[]> = {
  "1": [
    { id: "d1", label: "UX Chat",        icon: MessageSquare, inQueueCount: 2, wait: "3m 5s", available: 3, working: 1, unavailable: 0 },
    { id: "d2", label: "UX Email",       icon: Mail,          inQueueCount: 2, wait: "3m 5s", available: 3, working: 1, unavailable: 0 },
    { id: "d3", label: "UX SMS",         icon: MessageCircle, inQueueCount: 2, wait: "3m 5s", available: 3, working: 1, unavailable: 0 },
    { id: "d4", label: "Social Support", icon: Share2,        inQueueCount: 2, wait: "3m 5s", available: 3, working: 1, unavailable: 0 },
  ],
  "2": [
    { id: "v1", label: "AKR_Phone_IB",               icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 0, working: 0, unavailable: 1 },
    { id: "v2", label: "AKR_Phone_IB_Sales",         icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 0, working: 0, unavailable: 1 },
    { id: "v3", label: "Auto Attendant",             icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 0, working: 0, unavailable: 1 },
    { id: "v4", label: "Auto Inbound",                icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 0, working: 0, unavailable: 1 },
    { id: "v5", label: "KJ_Inbound_Phone",           icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 1, working: 0, unavailable: 1 },
    { id: "v6", label: "mojo_finance_voice_support", icon: PhoneIncoming, inQueueCount: 0, wait: "0s", available: 0, working: 0, unavailable: 1 },
  ],
  "3": [
    { id: "vm1", label: "UX Voicemail",   icon: Voicemail, inQueueCount: 3, wait: "15m", available: 1, working: 0, unavailable: 1 },
    { id: "vm2", label: "After-Hours VM", icon: Voicemail, inQueueCount: 0, wait: "0s",  available: 0, working: 0, unavailable: 0 },
  ],
  "4": [
    { id: "w1", label: "Case Management", icon: ClipboardList, inQueueCount: 4, wait: "30m", available: 2, working: 3, unavailable: 0 },
    { id: "w2", label: "Escalations",     icon: ClipboardList, inQueueCount: 1, wait: "10m", available: 1, working: 1, unavailable: 0 },
    { id: "w3", label: "Billing Review",  icon: ClipboardList, inQueueCount: 0, wait: "0s",  available: 1, working: 0, unavailable: 0 },
  ],
  // 5th queue — added to match agent-next-gen-v2's own current 5-queue
  // home tab (Digital / Inbound Voice / Voicemail / Work Item / Outbound
  // Voice), per explicit request to match that app's content and
  // functionality. Same ids/labels/counts as that app's own
  // `INITIAL_QUEUE_SUB_ITEMS["5"]`.
  "5": [
    { id: "ov1", label: "Outbound_Sales_Voice",       icon: PhoneOutgoing, inQueueCount: 1, wait: "0s", available: 2, working: 1, unavailable: 0 },
    { id: "ov2", label: "Outbound_Renewals",          icon: PhoneOutgoing, inQueueCount: 0, wait: "0s", available: 1, working: 0, unavailable: 0 },
    { id: "ov3", label: "Outbound_Win_Back_Campaign", icon: PhoneOutgoing, inQueueCount: 1, wait: "0s", available: 1, working: 1, unavailable: 1 },
  ],
};

function sumInQueue(id: string): number {
  return AGENT_DASHBOARD_QUEUE_SUB_ITEMS[id].reduce((total, item) => total + item.inQueueCount, 0);
}

/** Static per-queue "Agents" metric + baseline wait seconds — same values
 *  (including the 5th, "Outbound Voice" queue) as agent-next-gen-v2's own
 *  `AGENTS_COUNT_BY_QUEUE`/`QUEUE_WAIT_BASE_SECONDS`. `AgentDashboard`'s own
 *  live simulation (see that component below) adds `clockTick` to these
 *  baselines every second, and nudges `AGENT_DASHBOARD_QUEUE_SUB_ITEMS`'
 *  `inQueueCount`s every 4 seconds — matching that app's own Home tab
 *  behavior, so the queue row visibly ticks/fluctuates here too instead of
 *  sitting frozen at fixed numbers forever. */
export const AGENTS_COUNT_BY_QUEUE: Record<string, number> = { "1": 3, "2": 2, "3": 3, "4": 11, "5": 4 };
export const QUEUE_WAIT_BASE_SECONDS: Record<string, number> = { "1": 154, "2": 0, "3": 120, "4": 24, "5": 0 };

function formatWaitTime(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds);
  const hh = Math.floor(clamped / 3600);
  const mm = Math.floor((clamped % 3600) / 60);
  const ss = clamped % 60;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

/** Default/seed queue-widget row — 5 queues (Digital / Inbound Voice /
 *  Voicemail / Work Item / Outbound Voice), matching agent-next-gen-v2's
 *  own current Home tab. `contactsCount`/`skillsCount` derived from
 *  `AGENT_DASHBOARD_QUEUE_SUB_ITEMS` so the two can never drift apart (the
 *  bug this pattern was originally fixed for in agent-next-gen-v1 — see
 *  that file's own comment on `sumInQueue`). This is only the SEED —
 *  `AgentDashboard` itself holds a live copy it nudges every few seconds
 *  (see that component below); `AgentDashboardQueueDrilldown` (a
 *  consumer-owned side/interior panel's content, not part of `AgentDashboard`
 *  itself) still reads this static seed, same as before. */
export const AGENT_DASHBOARD_QUEUE_ITEMS: DashboardQueueItem[] = [
  { id: "1", name: "Digital",        icon: MessageSquare, wait: formatWaitTime(QUEUE_WAIT_BASE_SECONDS["1"]), skillsCount: AGENT_DASHBOARD_QUEUE_SUB_ITEMS["1"].length, contactsCount: sumInQueue("1"), agentsCount: AGENTS_COUNT_BY_QUEUE["1"] },
  { id: "2", name: "Inbound Voice",  icon: PhoneIncoming, wait: formatWaitTime(QUEUE_WAIT_BASE_SECONDS["2"]), skillsCount: AGENT_DASHBOARD_QUEUE_SUB_ITEMS["2"].length, contactsCount: sumInQueue("2"), agentsCount: AGENTS_COUNT_BY_QUEUE["2"] },
  { id: "3", name: "Voicemail",      icon: Voicemail,     wait: formatWaitTime(QUEUE_WAIT_BASE_SECONDS["3"]), skillsCount: AGENT_DASHBOARD_QUEUE_SUB_ITEMS["3"].length, contactsCount: sumInQueue("3"), agentsCount: AGENTS_COUNT_BY_QUEUE["3"] },
  { id: "4", name: "Work Item",      icon: ClipboardList, wait: formatWaitTime(QUEUE_WAIT_BASE_SECONDS["4"]), skillsCount: AGENT_DASHBOARD_QUEUE_SUB_ITEMS["4"].length, contactsCount: sumInQueue("4"), agentsCount: AGENTS_COUNT_BY_QUEUE["4"] },
  { id: "5", name: "Outbound Voice", icon: PhoneOutgoing, wait: formatWaitTime(QUEUE_WAIT_BASE_SECONDS["5"]), skillsCount: AGENT_DASHBOARD_QUEUE_SUB_ITEMS["5"].length, contactsCount: sumInQueue("5"), agentsCount: AGENTS_COUNT_BY_QUEUE["5"] },
];

/** Renders one queue's skill/channel breakdown — the content a consumer's
 *  side/interior panel shows once a user clicks a queue widget. Exposed as
 *  its own component (rather than folded into `AgentDashboard` itself)
 *  since the panel it lives inside is the consumer's own — see the class
 *  doc comment above. */
export function AgentDashboardQueueDrilldown({ queueId }: { queueId: string }) {
  const items = AGENT_DASHBOARD_QUEUE_SUB_ITEMS[queueId] ?? [];
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={cn("flex flex-col gap-2 px-4 py-4", i > 0 && "border-t border-lyra-border-subtle")}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 lyra-body-md-emphasis text-lyra-fg-default">
              <item.icon className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />
              {item.label}
            </span>
            <span className="lyra-body-sm text-lyra-fg-secondary whitespace-nowrap">
              {item.inQueueCount} In Queue
            </span>
          </div>
          <span className="inline-flex items-center gap-1 lyra-body-sm text-lyra-fg-secondary">
            <Clock className="h-3 w-3" strokeWidth={1.5} />
            Longest Wait Time: {item.wait}
          </span>
          {/* Each badge gets a hover tooltip spelling out what the count
              means, since the color/icon alone doesn't say "agents". */}
          <div className="flex items-center gap-3">
            <Tooltip content="Available Agents" placement="top">
              <span className="inline-flex items-center gap-1.5">
                <Icon icon={CheckCircle2} size="sm" background="success" shape="circle" decorative />
                <span className="lyra-body-sm-emphasis text-lyra-fg-default">{item.available}</span>
              </span>
            </Tooltip>
            <Tooltip content="Working Agents" placement="top">
              <span className="inline-flex items-center gap-1.5">
                <Icon icon={CircleDot} size="sm" background="warning" shape="circle" decorative />
                <span className="lyra-body-sm-emphasis text-lyra-fg-default">{item.working}</span>
              </span>
            </Tooltip>
            <Tooltip content="Unavailable Agents" placement="top">
              <span className="inline-flex items-center gap-1.5">
                <Icon icon={MinusCircle} size="sm" background="critical" shape="circle" decorative />
                <span className="lyra-body-sm-emphasis text-lyra-fg-default">{item.unavailable}</span>
              </span>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Shared date filter chip (Performance / Productivity) ──
   Ported back in as a local, unexported `DateFilterChip` matching agent-
   next-gen-v2's own identically-named component (agent-next-gen-
   interaction-dashboard.tsx) — Tooltip-wrapped trigger (so a collapsed,
   icon-only chip below 480px still has a readable hover label) with a
   `ChevronDown`/`MoreVertical` swap driven by the same shared
   "Filter chip icon collapse" CSS family (`lyra-container-header-filter-*`
   classes, lyra-tokens.css) `DashboardCard`'s own `headerActionsWrap`
   establishes the container-query boundary for. Per explicit request to
   match that app's content AND functionality (not just layout), not
   `DateRangeFilterChip` (date-range-filter-chip.tsx, the plainer extracted
   version this file used to import) — kept local rather than changed in
   place, since `DateRangeFilterChip` has other consumers (Outbound-
   Campaigns' Monitor dashboard) that weren't asked to gain the Tooltip/
   icon-collapse behavior too.

   `AgentDashboardDateRange` — same four values
   (Today/Yesterday/Last 7 days/Custom) as before, just declared directly
   instead of derived from `DateRangeFilterValue` now that this file no
   longer imports that type. */

export type AgentDashboardDateRange = "today" | "yesterday" | "last7" | "custom";

const DATE_FILTER_OPTIONS: { value: AgentDashboardDateRange; label: string }[] = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last7", label: "Last 7 days" },
  { value: "custom", label: "Custom" },
];

function DateFilterChip({ onValueChange }: { onValueChange?: (value: AgentDashboardDateRange) => void }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<AgentDashboardDateRange>("today");

  const selectedLabel = DATE_FILTER_OPTIONS.find((o) => o.value === value)?.label ?? "";

  const handleValueChange = (v: AgentDashboardDateRange) => {
    setValue(v);
    onValueChange?.(v);
  };

  return (
    <Tooltip content={`Date filter: ${selectedLabel}`} placement="bottom" disabled={open}>
      <span className="inline-flex">
        <Popover
          open={open}
          onOpenChange={setOpen}
          placement="bottom"
          content={
            <div className="flex flex-col gap-3 p-3 w-[260px]">
              <RadioGroup value={value} onValueChange={(v) => handleValueChange(v as AgentDashboardDateRange)}>
                {DATE_FILTER_OPTIONS.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value} label={option.label} />
                ))}
              </RadioGroup>
            </div>
          }
        >
          <Button
            variant="ghost"
            aria-label={open ? "Close date filter" : `Date filter: ${selectedLabel}`}
            className={cn(filterChipVariants({ variant: "default" }), "rounded-lyra-md lyra-container-header-filter-trigger")}
          >
            <span className="lyra-container-header-filter-full inline-flex items-baseline gap-1">
              <span className="lyra-body-md-emphasis whitespace-nowrap">Date:</span>
              <span className="lyra-body-md truncate">{selectedLabel}</span>
            </span>
            <ChevronDown className={cn("lyra-container-header-filter-full h-3.5 w-3.5 flex-shrink-0 transition-transform", open && "rotate-180")} strokeWidth={1.5} aria-hidden="true" />
            <MoreVertical className="lyra-container-header-filter-compact h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </Popover>
      </span>
    </Tooltip>
  );
}

/* ── Productivity (agent state duration bars + ring chart) ── */

type ProductivityStatusId = "available" | "working" | "unavailable";

interface ProductivityStatusMeta {
  id: ProductivityStatusId;
  label: string;
  icon: LucideIcon;
  iconColorClassName: string;
  dotClassName: string;
  colorVar: string;
}

const PRODUCTIVITY_STATUS_META: ProductivityStatusMeta[] = [
  { id: "available",   label: "Available",   icon: CheckCircle2, iconColorClassName: "text-lyra-status-success-strong",  dotClassName: "bg-lyra-status-success-strong",  colorVar: "var(--lyra-color-status-success-strong)" },
  { id: "working",     label: "Working",     icon: CircleDot,    iconColorClassName: "text-lyra-status-warning-strong",  dotClassName: "bg-lyra-status-warning-strong",  colorVar: "var(--lyra-color-status-warning-strong)" },
  { id: "unavailable", label: "Unavailable", icon: MinusCircle,  iconColorClassName: "text-lyra-status-critical-strong", dotClassName: "bg-lyra-status-critical-strong", colorVar: "var(--lyra-color-status-critical-strong)" },
];

interface ProductivityStatusValue {
  percent: number;
  teamPercent: number;
  time: string;
  teamTime: string;
}

const PRODUCTIVITY_DATA_BY_RANGE: Record<AgentDashboardDateRange, Record<ProductivityStatusId, ProductivityStatusValue>> = {
  today: {
    available:   { percent: 22, teamPercent: 28, time: "01:45:12", teamTime: "02:14:40" },
    working:     { percent: 61, teamPercent: 55, time: "04:53:08", teamTime: "04:24:00" },
    unavailable: { percent: 17, teamPercent: 17, time: "01:21:40", teamTime: "01:21:20" },
  },
  yesterday: {
    available:   { percent: 18, teamPercent: 24, time: "01:26:24", teamTime: "01:55:12" },
    working:     { percent: 67, teamPercent: 58, time: "05:21:36", teamTime: "04:38:24" },
    unavailable: { percent: 15, teamPercent: 18, time: "01:12:00", teamTime: "01:26:24" },
  },
  last7: {
    available:   { percent: 24, teamPercent: 27, time: "13:26:00", teamTime: "15:07:20" },
    working:     { percent: 58, teamPercent: 54, time: "32:26:24", teamTime: "30:14:24" },
    unavailable: { percent: 18, teamPercent: 19, time: "10:04:48", teamTime: "10:38:16" },
  },
  custom: {
    available:   { percent: 0, teamPercent: 0, time: "00:00:00", teamTime: "00:00:00" },
    working:     { percent: 0, teamPercent: 0, time: "00:00:00", teamTime: "00:00:00" },
    unavailable: { percent: 0, teamPercent: 0, time: "00:00:00", teamTime: "00:00:00" },
  },
};

const UNAVAILABLE_STATE_BREAKDOWN: { label: string; percent: number }[] = [
  { label: "Bio Break", percent: 100 },
  { label: "Break",     percent: 0 },
  { label: "Meeting",   percent: 0 },
  { label: "Team",      percent: 100 },
];

function PerformanceBreakdownCard() {
  const [dateFilter, setDateFilter] = React.useState<AgentDashboardDateRange>("today");
  const values = PRODUCTIVITY_DATA_BY_RANGE[dateFilter];

  return (
    <DashboardCard
      variant="neutral-subtle"
      headerTitle="Productivity"
      headerIcon={<Icon icon={Gauge} size="md" background="info" shape="rounded" decorative />}
      headerActions={<DateFilterChip onValueChange={setDateFilter} />}
      // Establishes the container-query boundary `DateFilterChip`'s own
      // icon-collapse relies on (see that component's own doc comment) —
      // matches agent-next-gen-v2's identical `headerActionsWrap` usage on
      // this same card.
      headerActionsWrap
    >
      <div className="flex flex-col gap-4 px-4 pb-4">
        {PRODUCTIVITY_STATUS_META.map((meta) => {
          const row = values[meta.id];
          return (
            <div key={meta.id} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 lyra-body-md-emphasis text-lyra-fg-default">
                  <meta.icon className={cn("h-4 w-4", meta.iconColorClassName)} strokeWidth={1.5} />
                  {meta.label}
                  <span className="lyra-body-sm text-lyra-fg-secondary font-normal">({row.percent}%)</span>
                  {meta.id === "unavailable" && (
                    <Tooltip
                      placement="right"
                      content={
                        <div className="flex flex-col gap-1">
                          {UNAVAILABLE_STATE_BREAKDOWN.map((state) => (
                            <span key={state.label} className="lyra-body-sm text-lyra-fg-default whitespace-nowrap">
                              {state.label} ({state.percent}%)
                            </span>
                          ))}
                        </div>
                      }
                    >
                      <span className="inline-flex items-center text-lyra-fg-secondary hover:text-lyra-fg-action transition-colors cursor-default">
                        <Info className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">
                          Unavailable breakdown: {UNAVAILABLE_STATE_BREAKDOWN.map((s) => `${s.label} (${s.percent}%)`).join(", ")}
                        </span>
                      </span>
                    </Tooltip>
                  )}
                </span>
                {/* No `tabular-nums` here — matches agent-next-gen-v2's
                    identical Productivity row (BEHAVIOR.md §54): Inter's
                    tabular digit glyphs are drawn differently from its
                    proportional ones (used everywhere else in this UI),
                    which reads as "a different font" at a glance. */}
                <span className="lyra-body-md-emphasis text-lyra-fg-default">{row.time}</span>
              </div>
              <div className="flex items-center justify-between gap-3 pl-6">
                <span className="lyra-body-sm text-lyra-fg-secondary">Team ({row.teamPercent}%)</span>
                <span className="lyra-body-sm text-lyra-fg-secondary">{row.teamTime}</span>
              </div>
            </div>
          );
        })}

        <Separator />

        <div className="flex items-center gap-6">
          <div className="h-[120px] w-[120px] shrink-0">
            <DonutChart
              data={PRODUCTIVITY_STATUS_META.map((meta) => ({
                label: meta.label,
                value: values[meta.id].percent,
                colorVar: meta.colorVar,
              }))}
            />
          </div>
          <div className="flex flex-1 flex-col gap-2.5">
            {PRODUCTIVITY_STATUS_META.map((meta) => (
              <div key={meta.id} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary">
                  <span className={cn("h-2.5 w-2.5 rounded-full", meta.dotClassName)} aria-hidden="true" />
                  {meta.label}
                </span>
                <span className="lyra-heading-sm text-lyra-fg-default">{values[meta.id].percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

/* ── Performance (Cases Resolved / CSAT + Channel Type breakdown) ── */

type ChannelTypeId = "inbound" | "outbound";

interface ChannelTypeMeta {
  id: ChannelTypeId;
  label: string;
  icon: LucideIcon;
}

const CHANNEL_TYPE_META: ChannelTypeMeta[] = [
  { id: "inbound",  label: "Inbound",  icon: PhoneIncoming },
  { id: "outbound", label: "Outbound", icon: PhoneOutgoing },
];

interface ChannelTypeValue {
  you: number;
  team: number;
}

const CHANNEL_TYPE_DATA_BY_RANGE: Record<AgentDashboardDateRange, Record<ChannelTypeId, ChannelTypeValue>> = {
  today: {
    inbound:  { you: 0, team: 0 },
    outbound: { you: 0, team: 0 },
  },
  yesterday: {
    inbound:  { you: 14, team: 162 },
    outbound: { you: 9,  team: 98  },
  },
  last7: {
    inbound:  { you: 88, team: 1024 },
    outbound: { you: 52, team: 640  },
  },
  custom: {
    inbound:  { you: 0, team: 0 },
    outbound: { you: 0, team: 0 },
  },
};

/* Per explicit request ("remove the assignments resolved row from the
   performance card") this card no longer shows Cases Resolved/CSAT Score
   rows at all — matching agent-next-gen-v2's own `PERFORMANCE_DATA_BY_RANGE`,
   which replaced both with a single "Overall Performance" percentage row.
   `casesResolved`/`handleTime`/`improvement` are kept in the record shape
   (unused by this card) purely for content parity with that app's own
   still-wider record type, in case some future card here wants them. */
const PERFORMANCE_DATA_BY_RANGE: Record<
  AgentDashboardDateRange,
  { casesResolved: string; overallPerformance: string; handleTime: string; improvement: string }
> = {
  today:     { casesResolved: "12",  overallPerformance: "96%", handleTime: "8m 32s", improvement: "15% improvement" },
  yesterday: { casesResolved: "19",  overallPerformance: "92%", handleTime: "9m 05s", improvement: "8% improvement" },
  last7:     { casesResolved: "104", overallPerformance: "94%", handleTime: "8m 50s", improvement: "11% improvement" },
  custom:    { casesResolved: "—",   overallPerformance: "—",   handleTime: "—",      improvement: "Select a range" },
};

function percentOfTeam(you: number, team: number): number {
  return team > 0 ? Math.round((you / team) * 100) : 0;
}

function PerformanceSummaryCard() {
  const [dateFilter, setDateFilter] = React.useState<AgentDashboardDateRange>("today");
  const data = PERFORMANCE_DATA_BY_RANGE[dateFilter];
  const channelData = CHANNEL_TYPE_DATA_BY_RANGE[dateFilter];
  const overallYou = CHANNEL_TYPE_META.reduce((sum, meta) => sum + channelData[meta.id].you, 0);
  const overallTeam = CHANNEL_TYPE_META.reduce((sum, meta) => sum + channelData[meta.id].team, 0);

  return (
    <DashboardCard
      variant="neutral-subtle"
      headerTitle="Performance"
      headerIcon={<Icon icon={TrendingUp} size="md" background="success" shape="rounded" decorative />}
      headerActions={<DateFilterChip onValueChange={setDateFilter} />}
      headerActionsWrap
    >
      <div className="flex flex-col gap-3 px-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="lyra-body-md text-lyra-fg-secondary">Overall Performance</span>
          <span className="lyra-heading-sm text-lyra-status-success-strong">{data.overallPerformance}</span>
        </div>
        <Separator />

        <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Channel Type</span>
        <div className="flex flex-col gap-4">
          {CHANNEL_TYPE_META.map((meta) => {
            const row = channelData[meta.id];
            const pct = percentOfTeam(row.you, row.team);
            return (
              <div key={meta.id} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 lyra-body-md-emphasis text-lyra-fg-default">
                    <meta.icon className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />
                    {meta.label}
                  </span>
                  <span className="lyra-body-md-emphasis tabular-nums text-lyra-fg-default">{row.you}</span>
                </div>
                <div className="flex items-center justify-between gap-3 pl-6">
                  <span className="lyra-body-sm text-lyra-fg-secondary">Team ({pct}% of Team)</span>
                  <span className="lyra-body-sm tabular-nums text-lyra-fg-secondary">{row.team}</span>
                </div>
              </div>
            );
          })}

          <Separator />

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-3">
              <span className="lyra-body-md-emphasis text-lyra-fg-default">Overall</span>
              <span className="lyra-body-md-emphasis tabular-nums text-lyra-fg-default">{overallYou}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="lyra-body-sm text-lyra-fg-secondary">Team ({percentOfTeam(overallYou, overallTeam)}% of Team)</span>
              <span className="lyra-body-sm tabular-nums text-lyra-fg-secondary">{overallTeam}</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

/* ── Contact History ──
   Per explicit request to match agent-next-gen-v2's own content AND
   functionality (not just layout), ported from that app's richer
   `ContactHistoryEntry`/`ContactHistoryCard` (agent-next-gen-contact-
   history.tsx) rather than kept as this file's own simpler, smaller
   version: 5-tier status color (critical/info/warning/success/neutral,
   not just success/warning), a `skillName` third line (the routing skill,
   not the case id), all 5 real `ChannelType`s (voice/chat/sms/whatsapp/
   email, not just voice/chat/email), a real search box, a real 3-option
   cumulative date filter (Today/Last 48 Hours/Last 72 Hours, not the
   Performance/Productivity cards' own Today/Yesterday/Last 7 days/Custom
   — see `AgentDashboardContactHistoryDateRange`'s own doc comment for why
   these stay separate types), and real footer pagination over a genuinely
   large "Last 72 Hours" batch (`CONTACT_HISTORY_STRESS_BATCH`, 115 rows)
   instead of the old fixed 10-row list.

   Per explicit follow-up request, the row's own inline "Redial" button was
   removed to match — the app version moved "Redial"/"Re-open" off the row
   entirely and onto footer buttons of a summary panel opened via
   `onSelectEntry`/`AgentNextGenPage`'s own shared `InteriorPanel` slot.
   `AgentDashboard` has no such panel to own itself (per this file's own
   class doc comment, "that panel itself stays the consumer's concern"), so
   rather than hand-rolling one, `AgentDashboardContactHistoryEntryDetail`
   (exported below, alongside `AgentDashboardQueueDrilldown`) gives a
   consumer's own `InteriorPanel` the exact same summary content that app's
   `ContactHistoryEntryDetail` renders — meta line, Duration/notes box, and a
   synthesized Conversation/Transcript section — leaving `entry.redial`
   (still on `AgentDashboardContactHistoryEntry`, unchanged) for that
   consumer's own panel footer to branch its Redial-vs-Re-open button on,
   calling whatever handler that consumer wants directly (`AgentDashboard`
   itself has no `onRedial` prop of its own to wire through anymore — with
   nothing left inside this file to call it, keeping one would just be dead
   weight). `onSelectEntry`/`selectedEntryId` are exposed as optional
   controlled props for exactly this — same "report the selection, don't own
   what opens as a result" pattern `selectedQueueId`/`onSelectQueueId`
   already establishes for the queue widgets above. See
   `Templates/Dashboards`' "Agent Home Dashboard" story
   (AgentNextGenTemplate.stories.tsx) for the full worked example, including
   the footer Redial/Re-open buttons. `hideCustomerNames`/
   `contactHistoryDisplayIdentity` (an Agent Workspace 2.0-only display rule,
   not a layout/content difference) stays out of scope here for the same
   reason redial/reopen behavior stays the consumer's own: that's a specific
   consuming app's business rule, not part of this demo composition. */

export interface AgentDashboardContactHistoryEntry {
  id: string;
  name: string;
  statusLabel: string;
  statusVariant: "critical" | "info" | "warning" | "success" | "neutral";
  /** Voice contacts only — shows a "Redial" action next to the status tag (see this section's own doc comment for why this stays inline here). */
  redial: boolean;
  description: string;
  caseId: string;
  /** The routing skill this contact was handled under (e.g. "Technical Support", "Billing") — shown as this row's third line, in place of `caseId`, matching agent-next-gen-v2's own row layout. */
  skillName: string;
  channelType: ChannelType;
  channelLabel: string;
  timeAgo: string;
  duration: string;
}

export const CONTACT_HISTORY_CHANNEL_ICON: Record<AgentDashboardContactHistoryEntry["channelType"], LucideIcon | typeof WhatsAppIcon> = {
  voice: Phone,
  chat: MessageCircle,
  sms: MessageSquare,
  whatsapp: WhatsAppIcon,
  email: Mail,
};

export const CONTACT_HISTORY_CHANNEL_LABEL: Record<AgentDashboardContactHistoryEntry["channelType"], string> = {
  voice: "Voice",
  chat: "Chat",
  sms: "SMS",
  whatsapp: "WhatsApp",
  email: "Email",
};

/** Channel-type tag color — same "Voice/Email keep fixed purple/pink,
 *  Chat/SMS/WhatsApp reuse the teal/neutral/default trio" convention
 *  agent-next-gen-v2's own `CONTACT_HISTORY_CHANNEL_TAG_VARIANT` documents
 *  (see that file's own doc comment), so a Chat/SMS/WhatsApp row here reads
 *  as distinctly as that app's record-header `ChannelTab` chips already do. */
export const CONTACT_HISTORY_CHANNEL_TAG_VARIANT: Record<AgentDashboardContactHistoryEntry["channelType"], TagVariant> = {
  voice: "purple",
  chat: "teal",
  sms: "neutral",
  whatsapp: "default",
  email: "pink",
};

const CONTACT_HISTORY: AgentDashboardContactHistoryEntry[] = [
  {
    id: "ch1", name: "Nathan Cole", statusLabel: "Resolved", statusVariant: "success", redial: true,
    description: "Customer was locked out after 5 failed attempts. Verified identity via KBA, reset credentials, and confirmed access restored.",
    caseId: "CST-22841", skillName: "Technical Support", channelType: "voice", channelLabel: "Voice", timeAgo: "8m ago", duration: "8m 14s",
  },
  {
    id: "ch2", name: "Priya Shah", statusLabel: "Resolved", statusVariant: "success", redial: false,
    description: "Duplicate charge dispute — $89.99 refund issued",
    caseId: "CST-30164", skillName: "Billing", channelType: "chat", channelLabel: "Chat", timeAgo: "34m ago", duration: "12m 02s",
  },
  {
    id: "ch3", name: "Omar Farooq", statusLabel: "Resolved", statusVariant: "success", redial: false,
    description: "Plan upgrade confirmation & feature overview",
    caseId: "CST-16823", skillName: "Sales", channelType: "email", channelLabel: "Email", timeAgo: "2h ago", duration: "6m 30s",
  },
  {
    id: "ch4", name: "Lauren Briggs", statusLabel: "Escalated", statusVariant: "critical", redial: true,
    description: "Escalated fraud investigation — 4 suspicious transactions",
    caseId: "CST-27760", skillName: "Escalations", channelType: "voice", channelLabel: "Voice", timeAgo: "5h ago", duration: "22m 47s",
  },
  {
    id: "ch5", name: "Mei Tanaka", statusLabel: "Resolved", statusVariant: "success", redial: false,
    description: "Shipping delay — expedited replacement dispatched",
    caseId: "CST-31045", skillName: "General Support", channelType: "chat", channelLabel: "Chat", timeAgo: "1d ago", duration: "9m 15s",
  },
];

/** Shared per-row content shape for every customer-derived (as opposed to
 *  hand-authored, like `CONTACT_HISTORY` above) Contact History row — same
 *  split as agent-next-gen-v2's own `ContactHistoryTemplate`. */
interface ContactHistoryTemplate {
  statusLabel: string;
  statusVariant: AgentDashboardContactHistoryEntry["statusVariant"];
  description: string;
  timeAgo: string;
  duration: string;
  skillName: string;
}

/** Builds Contact History rows from `CREATE_NEW_CUSTOMERS` (this package's
 *  own shared customer fixture, __stories__/create-new-customers-data.ts —
 *  the same one agent-next-gen-v2's own `buildContactHistoryFromCustomers`
 *  sources from via `@nicecxone/lyra-ui/customers-data`), deterministic
 *  indexes + content templates paired 1:1, same convention that file uses. */
function buildContactHistoryFromCustomers(
  customerIndexes: number[],
  templates: ContactHistoryTemplate[],
  idPrefix: string
): AgentDashboardContactHistoryEntry[] {
  return customerIndexes.map((customerIndex, i) => {
    const customer = CREATE_NEW_CUSTOMERS[customerIndex];
    const channelType = customer.channels.includes("voice") ? "voice" : customer.channels[0] ?? "email";
    return {
      id: `${idPrefix}-${customer.id}`,
      name: customer.name,
      caseId: customer.customerId,
      channelType,
      channelLabel: CONTACT_HISTORY_CHANNEL_LABEL[channelType],
      redial: channelType === "voice",
      ...templates[i],
    };
  });
}

const EXTENDED_CONTACT_HISTORY_CUSTOMER_INDEXES = [5, 12, 19, 26, 33];
const EXTENDED_CONTACT_HISTORY_TEMPLATES: ContactHistoryTemplate[] = [
  { statusLabel: "Resolved", statusVariant: "success", description: "Password reset — identity verified via KBA, access restored", timeAgo: "1d ago", duration: "7m 40s", skillName: "Technical Support" },
  { statusLabel: "Resolved", statusVariant: "success", description: "Billing question — walked through recent charges, no refund needed", timeAgo: "1d ago", duration: "5m 18s", skillName: "Billing" },
  { statusLabel: "Escalated", statusVariant: "critical", description: "Product setup issue escalated to Tier 2 for configuration support", timeAgo: "2d ago", duration: "14m 05s", skillName: "Escalations" },
  { statusLabel: "Resolved", statusVariant: "success", description: "Subscription cancellation request — retention offer accepted", timeAgo: "2d ago", duration: "10m 52s", skillName: "Sales" },
  { statusLabel: "Resolved", statusVariant: "success", description: "Shipping delay follow-up — updated delivery window provided", timeAgo: "2d ago", duration: "4m 27s", skillName: "General Support" },
];
const EXTENDED_CONTACT_HISTORY: AgentDashboardContactHistoryEntry[] = buildContactHistoryFromCustomers(
  EXTENDED_CONTACT_HISTORY_CUSTOMER_INDEXES,
  EXTENDED_CONTACT_HISTORY_TEMPLATES,
  "ch-ext"
);

// Deterministic content pools for `CONTACT_HISTORY_STRESS_BATCH` below —
// same "index-modulo, not `Math.random()`" convention as agent-next-gen-
// v2's own identical batch, just cycling shorter pools instead of one row-
// per-template (115 rows is too many to hand-author individually).
const CONTACT_HISTORY_STRESS_SKILLS = ["Technical Support", "Billing", "Sales", "Escalations", "General Support"];
const CONTACT_HISTORY_STRESS_STATUS: { statusLabel: string; statusVariant: AgentDashboardContactHistoryEntry["statusVariant"] }[] = [
  { statusLabel: "Resolved", statusVariant: "success" },
  { statusLabel: "Resolved", statusVariant: "success" },
  { statusLabel: "Resolved", statusVariant: "success" },
  { statusLabel: "Escalated", statusVariant: "critical" },
  { statusLabel: "Pending", statusVariant: "info" },
];
const CONTACT_HISTORY_STRESS_DESCRIPTIONS = [
  "Password reset — identity verified, access restored",
  "Billing inquiry — reviewed recent charges, no action needed",
  "Product setup walkthrough — configuration completed",
  "Subscription question — plan details clarified",
  "Shipping status check — delivery window confirmed",
  "Technical issue — reproduced and resolved same call",
  "Account update — contact details refreshed",
  "Feature request — logged for product team follow-up",
  "Payment method update — new card on file",
  "General inquiry — resolved without escalation",
];
const CONTACT_HISTORY_STRESS_DURATIONS = ["4m 12s", "6m 45s", "9m 03s", "3m 58s", "11m 20s", "7m 34s", "5m 15s", "8m 47s"];

/** Simulated bulk batch for "Last 72 Hours" — per explicit request, to
 *  demonstrate real footer pagination rather than a fixed short list.
 *  Cycles through all of `CREATE_NEW_CUSTOMERS` (`i % length`, since 115
 *  rows need every customer reused more than once); `id` is derived from
 *  the loop index (not the customer's own id) so repeats stay unique React
 *  keys, same as agent-next-gen-v2's own identical batch. */
const CONTACT_HISTORY_STRESS_COUNT = 115;
const CONTACT_HISTORY_STRESS_BATCH: AgentDashboardContactHistoryEntry[] = Array.from(
  { length: CONTACT_HISTORY_STRESS_COUNT },
  (_, i): AgentDashboardContactHistoryEntry => {
    const customer = CREATE_NEW_CUSTOMERS[i % CREATE_NEW_CUSTOMERS.length];
    const channelType = customer.channels.includes("voice") ? "voice" : customer.channels[0] ?? "email";
    const status = CONTACT_HISTORY_STRESS_STATUS[i % CONTACT_HISTORY_STRESS_STATUS.length];
    return {
      id: `ch-stress-${i}`,
      name: customer.name,
      caseId: customer.customerId,
      channelType,
      channelLabel: CONTACT_HISTORY_CHANNEL_LABEL[channelType],
      redial: channelType === "voice",
      statusLabel: status.statusLabel,
      statusVariant: status.statusVariant,
      description: CONTACT_HISTORY_STRESS_DESCRIPTIONS[i % CONTACT_HISTORY_STRESS_DESCRIPTIONS.length],
      timeAgo: "2d ago",
      duration: CONTACT_HISTORY_STRESS_DURATIONS[i % CONTACT_HISTORY_STRESS_DURATIONS.length],
      skillName: CONTACT_HISTORY_STRESS_SKILLS[i % CONTACT_HISTORY_STRESS_SKILLS.length],
    };
  }
);

/** Contact History's own date filter — deliberately a separate type/value
 *  set from `AgentDashboardDateRange` (Today/Yesterday/Last 7 days/Custom,
 *  used by the Performance/Productivity cards' `DateFilterChip`): this card
 *  only ever wants 3 cumulative, "as of now" windows, no custom range —
 *  same split agent-next-gen-v2's own `ContactHistoryDateFilterValue`
 *  documents for the identical reason. */
export type AgentDashboardContactHistoryDateRange = "today" | "last48h" | "last72h";

const CONTACT_HISTORY_DATE_FILTER_OPTIONS: { value: AgentDashboardContactHistoryDateRange; label: string }[] = [
  { value: "today", label: "Today" },
  { value: "last48h", label: "Last 48 Hours" },
  { value: "last72h", label: "Last 72 Hours" },
];

/* Cumulative — "Last 48 Hours" adds the 5 hand-authored `CONTACT_HISTORY`
   rows on top of "Today", "Last 72 Hours" adds `EXTENDED_CONTACT_HISTORY` +
   the 115-row `CONTACT_HISTORY_STRESS_BATCH` on top of that — same pattern
   as agent-next-gen-v2's own `buildContactHistoryByRange`. "Today" stays
   empty here (this component has no live, agent-dismissed-assignment state
   the way that app's own "Today" — real dismissed interactions — does; see
   this section's own doc comment on scope). */
const CONTACT_HISTORY_BY_RANGE: Record<AgentDashboardContactHistoryDateRange, AgentDashboardContactHistoryEntry[]> = {
  today: [],
  last48h: CONTACT_HISTORY,
  last72h: [...CONTACT_HISTORY, ...EXTENDED_CONTACT_HISTORY, ...CONTACT_HISTORY_STRESS_BATCH],
};

/* Same Tooltip-wrapped, icon-collapsing trigger chrome as `DateFilterChip`
   above, for `AgentDashboardContactHistoryDateRange` specifically and with
   no "Custom" branch — kept separate rather than genericizing
   `DateFilterChip` itself, matching agent-next-gen-v2's own identical
   `ContactHistoryDateFilterChip`/`DateFilterChip` split. */
function ContactHistoryDateFilterChip({ onValueChange }: { onValueChange?: (value: AgentDashboardContactHistoryDateRange) => void }) {
  const [open, setOpen] = React.useState(false);
  // Default "Last 48 Hours" — must match `ContactHistoryCard`'s own
  // `dateFilter` initial state below, same "two independent pieces of
  // state kept in sync only via onValueChange" reasoning that file's own
  // identical chip documents.
  const [value, setValue] = React.useState<AgentDashboardContactHistoryDateRange>("last48h");

  const selectedLabel = CONTACT_HISTORY_DATE_FILTER_OPTIONS.find((o) => o.value === value)?.label ?? "";

  const handleValueChange = (v: AgentDashboardContactHistoryDateRange) => {
    setValue(v);
    onValueChange?.(v);
  };

  return (
    <Tooltip content={`Date filter: ${selectedLabel}`} placement="bottom" disabled={open}>
      <span className="inline-flex">
        <Popover
          open={open}
          onOpenChange={setOpen}
          placement="bottom"
          content={
            <div className="flex flex-col gap-3 p-3 w-[260px]">
              <RadioGroup value={value} onValueChange={(v) => handleValueChange(v as AgentDashboardContactHistoryDateRange)}>
                {CONTACT_HISTORY_DATE_FILTER_OPTIONS.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value} label={option.label} />
                ))}
              </RadioGroup>
            </div>
          }
        >
          <Button
            variant="ghost"
            aria-label={open ? "Close date filter" : `Date filter: ${selectedLabel}`}
            className={cn(filterChipVariants({ variant: "default" }), "rounded-lyra-md lyra-container-header-filter-trigger")}
          >
            <span className="lyra-container-header-filter-full inline-flex items-baseline gap-1">
              <span className="lyra-body-md-emphasis whitespace-nowrap">Date:</span>
              <span className="lyra-body-md truncate">{selectedLabel}</span>
            </span>
            <ChevronDown className={cn("lyra-container-header-filter-full h-3.5 w-3.5 flex-shrink-0 transition-transform", open && "rotate-180")} strokeWidth={1.5} aria-hidden="true" />
            <MoreVertical className="lyra-container-header-filter-compact h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </Popover>
      </span>
    </Tooltip>
  );
}

export interface ContactHistoryCardProps {
  /**
   * Fired by clicking a row — reports the click, same "report the
   * selection, don't own what opens as a result" pattern `DashboardQueue`'s
   * own `selectedId`/`onSelect` documents. Omit entirely for a card with no
   * click behavior at all (rows render as plain, non-interactive content).
   * "Redial"/"Re-open" no longer live on the row itself (see this file's
   * "Contact History" section doc comment) — a consumer wanting those
   * actions builds them into its own panel's footer, driven by the entry
   * this callback reports.
   */
  onSelectEntry?: (entry: AgentDashboardContactHistoryEntry) => void;
  /** Which row (if any) should render with the selected/highlighted treatment — pass alongside `onSelectEntry` if a consumer's own panel is showing one row's detail. */
  selectedEntryId?: string | null;
}

function ContactHistoryCard({ onSelectEntry, selectedEntryId }: ContactHistoryCardProps) {
  // Default "Last 48 Hours" — must stay matched to `ContactHistoryDateFilterChip`'s own default above.
  const [dateFilter, setDateFilter] = React.useState<AgentDashboardContactHistoryDateRange>("last48h");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const entries = CONTACT_HISTORY_BY_RANGE[dateFilter];

  const filteredEntries = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return entries;
    return entries.filter((entry) =>
      [entry.name, entry.description, entry.caseId, entry.channelLabel].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [entries, searchQuery]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [dateFilter, searchQuery, rowsPerPage]);

  const totalRecords = filteredEntries.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / rowsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIdx = (safePage - 1) * rowsPerPage;
  const pageEntries = filteredEntries.slice(startIdx, startIdx + rowsPerPage);
  const displayStart = totalRecords === 0 ? 0 : startIdx + 1;
  const displayEnd = Math.min(startIdx + rowsPerPage, totalRecords);

  return (
    <DashboardCard
      variant="neutral-subtle"
      headerTitle="Contact History"
      headerIcon={<Icon icon={History} size="md" background="info" shape="rounded" decorative />}
      headerActionsWrap
      headerActions={
        <>
          <SearchInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Search contact history"
            size="sm"
            className="lyra-container-header-search-inline flex-1 min-w-[240px]"
          />
          <ContactHistoryDateFilterChip onValueChange={setDateFilter} />
        </>
      }
      headerTabs={
        <div className="lyra-container-header-search-below px-4 pt-3 pb-3">
          <SearchInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Search contact history"
            size="sm"
            className="w-full"
          />
        </div>
      }
      footer={
        totalRecords > 0 ? (
          <TableFooter
            className="border-t-0 py-0"
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={setRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            totalRecords={totalRecords}
            displayStart={displayStart}
            displayEnd={displayEnd}
          />
        ) : undefined
      }
    >
      {filteredEntries.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center">
          <Inbox className="h-6 w-6 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
          <span className="lyra-body-md text-lyra-fg-secondary">
            {entries.length === 0 ? "Nothing to Display" : "No matching contacts"}
          </span>
        </div>
      ) : (
        <div className="flex flex-col">
          {pageEntries.map((entry, i) => {
            const ChannelIcon = CONTACT_HISTORY_CHANNEL_ICON[entry.channelType];
            const isSelected = entry.id === selectedEntryId;
            return (
              <div
                key={entry.id}
                role={onSelectEntry ? "button" : undefined}
                tabIndex={onSelectEntry ? 0 : undefined}
                aria-current={isSelected ? "true" : undefined}
                onClick={() => onSelectEntry?.(entry)}
                onKeyDown={(e) => {
                  if (onSelectEntry && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onSelectEntry(entry);
                  }
                }}
                className={cn(
                  "flex items-start justify-between gap-4 px-4 py-4 transition-colors",
                  isSelected ? "bg-lyra-status-info-subtle" : "hover:bg-lyra-state-hover",
                  onSelectEntry && "cursor-pointer",
                  i > 0 && "border-t border-lyra-border-subtle"
                )}
              >
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="lyra-body-md-emphasis text-lyra-fg-default">{entry.name}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Badge shape="circle" dot size="sm" variant={entry.statusVariant} aria-hidden="true" />
                      <span className="lyra-body-sm-emphasis text-lyra-fg-default">{entry.statusLabel}</span>
                    </span>
                  </div>
                  <span className="lyra-body-md text-lyra-fg-secondary">{entry.description}</span>
                  <span className="lyra-body-sm text-lyra-fg-secondary">{entry.skillName}</span>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <Tag
                    label={entry.channelLabel}
                    variant={CONTACT_HISTORY_CHANNEL_TAG_VARIANT[entry.channelType]}
                    shape="pill"
                    icon={<ChannelIcon strokeWidth={1.5} />}
                  />
                  <span className="lyra-body-sm text-lyra-fg-secondary whitespace-nowrap">{entry.timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardCard>
  );
}

/* ── Contact History entry detail (for a consumer's own InteriorPanel) ──
   Mirrors agent-next-gen-v2's own `ContactHistoryEntryDetail` (agent-next-
   gen-contact-history.tsx) content-for-content: a one-line status · handle ·
   time meta line, a bordered Duration/notes box, then a synthesized message
   thread (voice rows get a "Transcript" section in plain name+timestamp/
   line form, chat/sms/whatsapp rows get a "Conversation" section of real
   `ChatMessage` bubbles) or, for email rows, a synthesized longer "Body"
   paragraph. Every pool/hash/builder below is a direct port of that file's
   own identically-named helpers — deterministic (`id`-keyed, not
   `Math.random()`) so the same row always renders the same content on every
   open, same "no real backend" dummy-data convention the rest of this
   file's fixtures already follow. `AgentDashboard` has no owning
   `InteriorPanel` of its own (see the "Contact History" section's own doc
   comment above for why), so this is exported standalone — same "consumer
   builds its own panel from lyra-ui-supplied content" split
   `AgentDashboardQueueDrilldown` already establishes for the queue
   widgets. */

function initialsFor(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function hashContactHistoryId(id: string, mod: number): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) % 999979;
  return Math.abs(hash) % mod;
}

interface AgentDashboardContactHistoryMessage {
  sender: "customer" | "agent";
  text: string;
  timestampDisplay: string;
}

const CONTACT_HISTORY_CHAT_CUSTOMER_MESSAGE_POOL = [
  "Hi, I wanted to follow up on this.",
  "Thanks for taking a look — let me know what you find.",
  "Sorry, one more question before we wrap up.",
  "That makes sense, thank you for explaining!",
];
const CONTACT_HISTORY_CHAT_AGENT_MESSAGE_POOL = [
  "Of course — let me pull up your account.",
  "I can see that here now, one moment.",
  "You're all set. Is there anything else I can help with?",
  "Happy to help — have a great rest of your day!",
];
const CONTACT_HISTORY_VOICE_CUSTOMER_MESSAGE_POOL = [
  "Hi, I'm calling about the issue on my account.",
  "Okay, that's right, thanks for confirming.",
  "Sorry, could you repeat that last part?",
  "Got it, that answers my question — thank you.",
];
const CONTACT_HISTORY_VOICE_AGENT_MESSAGE_POOL = [
  "Thanks for calling — can I get your name and verify a couple details first?",
  "Perfect, I have your account pulled up now.",
  "Sure, let me walk you through that again.",
  "You're all set. Is there anything else I can help you with today?",
];
const CONTACT_HISTORY_EMAIL_BODY_POOL = [
  "Thanks for reaching out. I've reviewed your account and confirmed the details below — let me know if anything looks off and I'll follow up right away.",
  "Following up on our conversation — everything's been updated on our end. You should see the change reflected within the next billing cycle.",
  "Wanted to make sure you had this in writing for your records. Please reach back out if you have any other questions in the meantime.",
  "Thanks for your patience while we looked into this. Here's a summary of what we found and the steps we took to resolve it.",
];

function buildContactHistoryMessages(entry: AgentDashboardContactHistoryEntry): AgentDashboardContactHistoryMessage[] {
  const count = 3 + hashContactHistoryId(entry.id, 2); // 3 or 4 turns
  const startHour = 9 + hashContactHistoryId(`${entry.id}-h`, 3); // 9-11
  const startMinute = hashContactHistoryId(`${entry.id}-m`, 60);
  const isVoice = entry.channelType === "voice";
  const customerPool = isVoice ? CONTACT_HISTORY_VOICE_CUSTOMER_MESSAGE_POOL : CONTACT_HISTORY_CHAT_CUSTOMER_MESSAGE_POOL;
  const agentPool = isVoice ? CONTACT_HISTORY_VOICE_AGENT_MESSAGE_POOL : CONTACT_HISTORY_CHAT_AGENT_MESSAGE_POOL;
  return Array.from({ length: count }, (_, i) => {
    const isCustomer = i % 2 === 0;
    const pool = isCustomer ? customerPool : agentPool;
    const totalMinutes = startMinute + i * 2;
    const hour = (startHour + Math.floor(totalMinutes / 60)) % 24;
    const minute = totalMinutes % 60;
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return {
      sender: isCustomer ? "customer" : "agent",
      text: pool[hashContactHistoryId(`${entry.id}-${i}`, pool.length)],
      timestampDisplay: `${displayHour}:${minute.toString().padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`,
    } satisfies AgentDashboardContactHistoryMessage;
  });
}

function buildContactHistoryEmailBody(entry: AgentDashboardContactHistoryEntry): string {
  return CONTACT_HISTORY_EMAIL_BODY_POOL[hashContactHistoryId(entry.id, CONTACT_HISTORY_EMAIL_BODY_POOL.length)];
}

function ContactHistoryMessageBubble({
  message,
  customerName,
  agentName,
}: {
  message: AgentDashboardContactHistoryMessage;
  customerName: string;
  agentName: string;
}) {
  const isCustomer = message.sender === "customer";
  return (
    <ChatMessage
      variant={message.sender}
      name={isCustomer ? customerName : agentName}
      initials={initialsFor(isCustomer ? customerName : agentName)}
      timestamp={message.timestampDisplay}
      text={message.text}
    />
  );
}

function ContactHistoryTranscriptLine({
  message,
  customerName,
  agentName,
}: {
  message: AgentDashboardContactHistoryMessage;
  customerName: string;
  agentName: string;
}) {
  const speakerName = message.sender === "customer" ? customerName : agentName;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span className="lyra-body-md-emphasis text-lyra-fg-default">{speakerName}</span>
        <span className="lyra-body-sm text-lyra-fg-secondary">{message.timestampDisplay}</span>
      </div>
      <p className="lyra-body-md text-lyra-fg-default">{message.text}</p>
    </div>
  );
}

export interface AgentDashboardContactHistoryEntryDetailProps {
  entry: AgentDashboardContactHistoryEntry;
  /** Speaker label for the agent's own turns in a synthesized voice/chat transcript — default "Agent" (this file has no real logged-in-agent full name of its own to reach for). */
  agentName?: string;
}

/** Summary content for a consumer's own `InteriorPanel` when a Contact
 *  History row is clicked — see this section's own doc comment above. */
export function AgentDashboardContactHistoryEntryDetail({ entry, agentName = "Agent" }: AgentDashboardContactHistoryEntryDetailProps) {
  const notesLabel =
    entry.channelType === "voice" ? "Call Notes" : entry.channelType === "email" ? "Email Summary" : "Chat Summary";
  // agent-next-gen-v2's own `ContactHistoryEntryDetail` shows a real reach-
  // back address here (`contactHistoryDisplayIdentity`, phone/email/
  // WhatsApp handle) instead of restating the name its caller's own panel
  // header already shows — `AgentDashboardContactHistoryEntry` carries no
  // such fields (this demo composition's simpler row shape), so this falls
  // back to `entry.name` for every channel type instead.
  const displayIdentity = entry.name;
  const isVoice = entry.channelType === "voice";
  const isMessageChannel =
    isVoice || entry.channelType === "chat" || entry.channelType === "sms" || entry.channelType === "whatsapp";
  const messages = React.useMemo(() => buildContactHistoryMessages(entry), [entry]);
  return (
    <div className="flex flex-col gap-3 p-4">
      <span className="lyra-body-sm text-lyra-fg-secondary">
        {[entry.statusLabel, displayIdentity, entry.timeAgo].filter(Boolean).join(" · ")}
      </span>
      <div className="rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-control-subtle overflow-hidden flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1 min-w-0">
          <Label label="Duration" />
          <span className="lyra-body-md text-lyra-fg-default break-words">{entry.duration}</span>
        </div>
        <div className="flex flex-col gap-1">
          <Label label={notesLabel} />
          <p className="lyra-body-md text-lyra-fg-default">{entry.description}</p>
        </div>
      </div>
      {isMessageChannel ? (
        <div className="flex flex-col gap-2">
          <Label label={isVoice ? "Transcript" : "Conversation"} />
          <div className="rounded-lyra-md border border-lyra-border-subtle flex flex-col gap-4 p-4">
            {messages.map((message, i) =>
              isVoice ? (
                <ContactHistoryTranscriptLine key={i} message={message} customerName={entry.name} agentName={agentName} />
              ) : (
                <ContactHistoryMessageBubble key={i} message={message} customerName={entry.name} agentName={agentName} />
              )
            )}
          </div>
        </div>
      ) : entry.channelType === "email" ? (
        <div className="rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-control-subtle overflow-hidden flex flex-col gap-1 p-4">
          <Label label="Body" />
          <p className="lyra-body-md text-lyra-fg-default">{buildContactHistoryEmailBody(entry)}</p>
        </div>
      ) : null}
    </div>
  );
}

/* ── AgentDashboard ── */

/** "{Month Day, Year} · {H:MM AM/PM}" — same format (and no weekday) as
 *  agent-next-gen-v2's own `formatHeaderDate` (agent-next-gen-shared-
 *  utils.ts). Ticks live for free off whichever render this happens to run
 *  on (this component's own `clockTick` state already re-renders once a
 *  second for the queue simulation below), same reasoning that helper's own
 *  doc comment gives for not needing a separate interval here either. */
function formatHeaderDate(): string {
  const now = new Date();
  const datePart = now.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
  const timePart = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  return `${datePart} · ${timePart}`;
}

/** "Good Morning/Afternoon/Evening, {name}" — same boundaries (hour<12
 *  Morning, hour<17 Afternoon, else Evening) as agent-next-gen-v2's own
 *  `formatHeaderGreeting`, ported directly rather than imported since this
 *  package can't depend on that app.
 *
 *  Per explicit follow-up ("update the header to say the first name instead
 *  of 'there' or just 'Good Morning' if there is no agent name"), `name` is
 *  optional now — a falsy value (no `agentFirstName` prop passed) drops the
 *  ", {name}" entirely rather than falling back to the placeholder "there",
 *  so an unconfigured consumer reads as a clean "Good Morning" instead of
 *  the slightly odd "Good Morning, there". */
function formatHeaderGreeting(name?: string): string {
  const hour = new Date().getHours();
  const partOfDay = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
  return name ? `Good ${partOfDay}, ${name}` : `Good ${partOfDay}`;
}

/** The "Connect Agent Leg" text link shown in the identity subhead
 *  (`greeting=false`) while `agentLegStatus` is `"disconnected"` (or unset)
 *  — per explicit request ("if the agent leg is disconnected show a link
 *  that says 'Connect Agent Leg'"). A plain inline `<button>` styled as a
 *  text link (`text-lyra-fg-link`, same token `Table`/`DataManagement`
 *  stories use for a clickable cell) rather than `Button`, since it needs to
 *  sit inline inside `PageHeader`'s own `subtitle` text line, not as a
 *  separate control. */
function AgentLegConnectLink({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ml-3 border-0 bg-transparent p-0 lyra-body-sm text-lyra-fg-link underline hover:no-underline cursor-pointer"
    >
      Connect Agent Leg
    </button>
  );
}

/** Resolves the header's title/subtitle pair for both states of the
 *  `greeting` toggle — shared by `AgentDashboardHeader` and `AgentDashboard`'s
 *  own inline copy so the two can't drift apart. Per explicit request: "add
 *  a control ... that sets greeting true/false - if false change 'Good
 *  Morning' to '{Agent Name}' and the date subhead to 'Agent ID:
 *  {AgentID}'". `greeting=true` (default) is the existing "Good
 *  {morning/afternoon/evening}[, {name}]" + date behavior, unchanged.
 *
 *  `greeting=false`'s title/subtitle were both extended per later, literal
 *  follow-up requests. First ("update the header to look like the attached,
 *  if the agent leg is disconnected show a link that says 'Connect Agent
 *  Leg' if it's connected show Connection Lag Time: 00:32"): the title read
 *  "Agent {name}" (was just "{name}"), and the subtitle appends a second
 *  item after "Agent ID: {agentId}" driven by `agentLegStatus`. Second
 *  ("when the agent leg is connecting, make the subhead say 'Connecting...'
 *  before lag time message is displayed"): that second item became a real
 *  3-way switch on `agentLegStatus` —
 *  `AgentLegConnectLink` while `"disconnected"`/unset, plain "Connecting..."
 *  while `"connecting"`, or "Connection Lag Time: {connectionLagTime}" while
 *  `"connected"` — rather than the boolean `agentLegConnected` this used to
 *  take (a two-way disconnected/connected switch with no way to represent
 *  the in-between state at all). This is deliberately local, presentational
 *  state — `AgentDashboard`/`AgentDashboardHeader` don't own or read
 *  `AgentProfile`'s own real `agentLegStatus` state machine (agent-
 *  profile.tsx) directly — but the TYPE now intentionally mirrors it
 *  exactly (same 3 string literals) so a consumer that does track the real
 *  one (e.g. via `AgentProfile`'s `onAgentLegStatusChange`, mapped back onto
 *  its own local state since that callback never fires for `"connecting"`
 *  itself — see that prop's own doc comment) can pass it straight through
 *  with no translation. Return type is `React.ReactNode` (was a plain
 *  string) purely to carry `AgentLegConnectLink`'s `<button>` inline in the
 *  `greeting=false` case — `greeting=true`'s subtitle is still just the
 *  plain date string.
 *
 *  Third, later follow-up ("remove 'Agent' in the header"): the title's
 *  "Agent " prefix was dropped again — back to plain "{name}" (falling back
 *  to the literal "Agent" only when no `agentFirstName` is passed at all,
 *  since there's nothing else sensible to show there).
 *
 *  Fourth, later follow-up ("instead of agent id show User Name:"): just the
 *  LABEL changed, from "Agent ID: {agentId}" to "User Name: {agentId}" —
 *  `agentId` itself is still the value shown (a first pass swapped in
 *  `agentFirstName` instead, showing the same name as the title right above
 *  it; corrected back to `agentId` per explicit follow-up asking for a
 *  distinct, username-shaped value like "JohnSmith229393" — see
 *  `DEMO_AGENT_ID` in AgentNextGenTemplate.stories.tsx for that demo value). */
function resolveGreetingContent(
  greeting: boolean,
  agentFirstName?: string,
  agentId?: string,
  agentLegStatus?: "disconnected" | "connecting" | "connected",
  connectionLagTime?: string,
  onConnectAgentLeg?: () => void
): { title: string; subtitle: React.ReactNode } {
  if (greeting) {
    return { title: formatHeaderGreeting(agentFirstName), subtitle: formatHeaderDate() };
  }
  return {
    title: agentFirstName ?? "Agent",
    subtitle: (
      <>
        {`User Name: ${agentId ?? "—"}`}
        {agentLegStatus === "connected" ? (
          <span className="ml-3">{`Connection Lag Time: ${connectionLagTime ?? "00:00"}`}</span>
        ) : agentLegStatus === "connecting" ? (
          <span className="ml-3">Connecting...</span>
        ) : (
          <AgentLegConnectLink onClick={onConnectAgentLeg} />
        )}
      </>
    ),
  };
}

/** The header's own "Personal Queue: {N}" chip — same three-tier
 *  success/warning/critical coloring + trailing chevron as agent-next-gen-
 *  v2's identically-labeled `PageHeader` action, simplified to a fixed
 *  "Empty" (success) state here since `AgentDashboard` bundles no live
 *  personal-assignment data of its own (see the class doc comment's "all of
 *  the demo data ... is bundled in as sensible defaults" note) — `onClick`
 *  is the one integration point a consumer wanting a real, non-empty count
 *  needs, same "report, don't own" shape as this file's other optional
 *  callbacks. Tooltipped "Toggle Assignment Panel" (per explicit request) —
 *  supplementary, not the accessible name: the chip's own visible text
 *  ("Personal Queue: Empty") already provides that, so no `asLabel`. */
function PersonalQueueChip({ onClick }: { onClick?: () => void }) {
  return (
    <Tooltip content="Toggle Assignment Panel" placement="bottom">
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="h-6 shrink-0 gap-0.5 rounded-lyra-md px-2 lyra-body-md-emphasis bg-lyra-status-success-subtle text-lyra-status-success-strong hover:bg-lyra-status-success-subtle hover:opacity-80"
      >
        Personal Queue: Empty
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      </Button>
    </Tooltip>
  );
}

export interface AgentDashboardHeaderProps {
  /** Shown in the "Good {morning/afternoon/evening}, {name}" greeting (`greeting=true`) or as the plain "{name}" title (`greeting=false`). Omit for a plain "Good {morning/afternoon/evening}" with no name/comma when `greeting=true` (see `formatHeaderGreeting`), or a plain "Agent" title when `greeting=false` — no default placeholder name either way. */
  agentFirstName?: string;
  /** Shown in the "User Name: {agentId}" subhead when `greeting=false` (label changed from "Agent ID:" per explicit request — still the same `agentId` value) — ignored when `greeting=true` (the date shows instead). Omit for "User Name: —". */
  agentId?: string;
  /**
   * Toggles between the time-of-day greeting ("Good Morning[, {name}]" +
   * date subhead — default, unchanged prior behavior) and a plain identity
   * header ("{agentFirstName}" + "User Name: {agentId}" subhead, plus
   * the `agentLegStatus`-driven Connect Agent Leg link/"Connecting..."/lag
   * time — see that prop's own doc comment) — see `resolveGreetingContent`'s
   * own doc comment for the full rationale. Default `true`.
   */
  greeting?: boolean;
  /**
   * Drives the second item in the `greeting=false` subhead (after "User
   * Name: {agentFirstName}") — per explicit request ("if the agent leg is
   * disconnected show a link that says 'Connect Agent Leg' if it's
   * connected show Connection Lag Time: 00:32", later extended: "when the
   * agent leg is connecting, make the subhead say 'Connecting...' before
   * lag time message is displayed"): `"disconnected"`/omitted (default)
   * shows the clickable "Connect Agent Leg" link (`onConnectAgentLeg`);
   * `"connecting"` shows plain "Connecting..." text; `"connected"` shows
   * "Connection Lag Time: {connectionLagTime}". Ignored when
   * `greeting=true`. Same 3 string literals as `AgentProfile`'s own real
   * `agentLegStatus` state (agent-profile.tsx) by design, though this
   * component doesn't read that state directly — see
   * `resolveGreetingContent`'s own doc comment.
   */
  agentLegStatus?: "disconnected" | "connecting" | "connected";
  /** Shown in "Connection Lag Time: {connectionLagTime}" when `agentLegStatus` is `"connected"` — ignored otherwise. Omit for "Connection Lag Time: 00:00". */
  connectionLagTime?: string;
  /** Called when the "Connect Agent Leg" link is clicked (only rendered while `agentLegStatus` is `"disconnected"`/unset) — left unhandled by default. */
  onConnectAgentLeg?: () => void;
  /**
   * Called when the "Personal Queue: Empty" chip is clicked — same callback
   * shape as `AgentDashboardProps.onPersonalQueueClick`. Rendered via
   * `PageHeader`'s own `titleSuffix` slot (`titleSuffixAlign="start"` below)
   * directly inside the title row, right after the title's `<h1>` — per
   * explicit follow-up requests: first to move it inline with the title
   * instead of sitting in the far-right `actions` cluster alongside
   * `onPanelToggle`'s own button, then to sit structurally next to the
   * `<h1>` (rather than merely top-aligned) and above the "User Name:
   * {agentId}" subhead.
   */
  onPersonalQueueClick?: () => void;
  /**
   * Called when the "Workspace Settings" button — rendered via `PageHeader`'s
   * own `actions` slot, at the header's far right — is clicked. Same
   * "renders for real regardless of a handler, or omit the slot entirely"
   * shape every other optional action on this header already uses: passing
   * this is what actually renders the button at all, omit it for a header
   * with no side panel to toggle. A real labeled `Button` (`Settings` icon +
   * "Workspace Settings" text), not an icon-only trigger — per explicit
   * follow-up request moving it out of `PageHeader`'s leading `icon` slot
   * (immediately left of the title) into `actions` instead, alongside
   * moving `onPersonalQueueClick`'s own chip the other way, into the title
   * row. A plain callback, not `PageHeader`'s own built-in `panelToggle`/
   * `onInnerPanelToggle` (that treatment always renders a fixed
   * `PanelLeft`/`PanelRight` glyph with no icon override) — this component
   * doesn't know or care WHICH side panel it opens; the "Agent Home
   * Dashboard" story wires it to a real, PINNED `SidePanel` (side-panel.tsx,
   * NOT `InteriorPanel`), `side="right"`, rendered inside
   * `AgentNextGenTemplate`'s own `Container` row, since that's a real,
   * separate panel type with its own open/pinned state — not something this
   * header (or `AgentNextGenTemplate` itself) owns or knows about.
   */
  onPanelToggle?: () => void;
  /**
   * Whether the panel `onPanelToggle` opens is currently open — this header
   * doesn't own that state (see `onPanelToggle`'s own doc comment above),
   * it only reads it: while `true`, the "Workspace Settings" trigger button
   * is hidden entirely (per explicit request) rather than shown with a
   * pressed/active look — the panel's own header carries a close control
   * once it's open (see the "Agent Home Dashboard" story's `SidePanel`
   * `headerActions`, a `PanelPinButton`/`PanelRightClose` matching
   * `CustomerInformationDockedPanel`'s own close button), so there's no
   * need for this button to double as a close trigger too. Omit (default
   * `false`) for a header whose panel is always closed, or whose caller
   * doesn't track open state.
   */
  panelOpen?: boolean;
  /**
   * Forwarded straight through to the underlying `PageHeader`'s own
   * `bordered` prop (default `true`, matching `PageHeader`'s own default).
   * Pass `false` when this header sits directly above another row that
   * already draws its own `border-b` (e.g. a tab row) — same "one header,
   * one border, no doubled lines" rule the interaction record headers use
   * (`page-header.tsx`'s `bordered` doc comment; see also
   * agent-next-gen-v2's own `AgentNextGenPage.tsx`, its reverted greeting
   * header's `bordered={false}` — no tab row there, so it just kept it off
   * outright, not conditionally).
   */
  bordered?: boolean;
}

/** Standalone header content — the exact same greeting/date/Personal Queue
 *  chip `AgentDashboard` renders inline in its own body by default, broken
 *  out as its own export for a consumer that wants it mounted in a real
 *  (non-scrolling) header slot instead — e.g. `AgentNextGenTemplate`'s
 *  `homeHeader` prop. Pass `header` to `AgentDashboard` alongside this so
 *  its own inline copy is suppressed and the greeting doesn't render twice
 *  — see `AgentDashboardProps.header`'s own doc comment for the full
 *  rationale, and the "Agent Home Dashboard" story for a worked example.
 *
 *  Unlike the inline copy, this doesn't cancel `PageHeader`'s own baked-in
 *  `px-6` (no `-mx-6` wrapper) — that trick only exists to line the title up
 *  flush with cards in a `px-6`-padded scroll body; mounted in a real header
 *  slot with no competing padding, `PageHeader`'s own padding is already
 *  correct as-is, same as this template's other record-header `PageHeader`
 *  usages. */
export function AgentDashboardHeader({
  agentFirstName,
  agentId,
  greeting = true,
  agentLegStatus,
  connectionLagTime,
  onConnectAgentLeg,
  onPersonalQueueClick,
  onPanelToggle,
  panelOpen = false,
  bordered = true,
}: AgentDashboardHeaderProps) {
  const { title, subtitle } = resolveGreetingContent(
    greeting,
    agentFirstName,
    agentId,
    agentLegStatus,
    connectionLagTime,
    onConnectAgentLeg
  );
  return (
    <PageHeader
      title={title}
      subtitle={subtitle}
      // No `titleSize` override — per explicit follow-up ("make the header
      // font match the pageheader font when header is set to true"), a real
      // non-scrolling header row should read at `PageHeader`'s own default
      // size (`"lg"`, the same tier every other record/page header in the
      // app uses), not the oversized `"2xl"` greeting treatment that's
      // still appropriate for the inline, in-body copy below (`AgentDashboard`'s
      // own `!header` branch) — that one still reads as a big standalone
      // greeting sitting in the scrollable body, not a title bar.
      // `titleSuffix` — the "Personal Queue: Empty" chip, moved inline with
      // the title (per explicit follow-up request) instead of sitting in
      // `actions` alongside `onPanelToggle`'s own button below. `"start"`
      // pins it to the title's own line rather than the centered default,
      // per explicit follow-up request ("directly to the right of the page
      // header and above the subhead") — see `titleSuffixAlign`'s own doc
      // comment on `PageHeader`.
      titleSuffix={<PersonalQueueChip onClick={onPersonalQueueClick} />}
      titleSuffixAlign="start"
      // `actions` — the "Workspace Settings" trigger, moved here (per
      // explicit follow-up request) from `PageHeader`'s leading `icon` slot,
      // and given a visible label instead of staying icon-only. Not
      // `PageHeader`'s own built-in `panelToggle`/`onInnerPanelToggle` — see
      // `onPanelToggle`'s own doc comment above for why. Hidden entirely
      // while `panelOpen` (see that prop's own doc comment) instead of
      // staying visible with a pressed look — the open panel's own header
      // carries the close control now.
      actions={
        onPanelToggle && !panelOpen ? (
          <Button variant="outline" size="md" className="gap-1.5" onClick={onPanelToggle}>
            <Settings className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Workspace Settings
          </Button>
        ) : undefined
      }
      bordered={bordered}
    />
  );
}

export interface AgentDashboardProps {
  /** Shown in the "Good {morning/afternoon/evening}, {name}" greeting (`greeting=true`) or as the plain "{name}" title (`greeting=false`). Omit for a plain "Good {morning/afternoon/evening}" with no name/comma when `greeting=true` (see `formatHeaderGreeting`), or a plain "Agent" title when `greeting=false` — no default placeholder name either way. */
  agentFirstName?: string;
  /** Shown in the "User Name: {agentId}" subhead when `greeting=false` (label changed from "Agent ID:" per explicit request — still the same `agentId` value) — ignored when `greeting=true` (the date shows instead). Omit for "User Name: —". */
  agentId?: string;
  /**
   * Toggles between the time-of-day greeting ("Good Morning[, {name}]" +
   * date subhead — default, unchanged prior behavior) and a plain identity
   * header ("{agentFirstName}" + "User Name: {agentId}" subhead, plus
   * the `agentLegStatus`-driven Connect Agent Leg link/"Connecting..."/lag
   * time) — see `resolveGreetingContent`'s own doc comment for the full
   * rationale. Applies to whichever of the inline greeting or
   * `AgentDashboardHeader` is actually rendering (this component's own
   * `header` prop picks between the two; `greeting` controls the CONTENT of
   * whichever one shows). Default `true`.
   */
  greeting?: boolean;
  /** Same "Connect Agent Leg" link / "Connecting..." / "Connection Lag Time" 3-way switch as `AgentDashboardHeaderProps.agentLegStatus` — see that prop's own doc comment. Ignored when `greeting=true`. */
  agentLegStatus?: "disconnected" | "connecting" | "connected";
  /** Same as `AgentDashboardHeaderProps.connectionLagTime` — shown only while `agentLegStatus` is `"connected"`. */
  connectionLagTime?: string;
  /** Same as `AgentDashboardHeaderProps.onConnectAgentLeg` — called when the "Connect Agent Leg" link is clicked. */
  onConnectAgentLeg?: () => void;
  /**
   * Which `AGENT_DASHBOARD_QUEUE_ITEMS` row is selected — uncontrolled by
   * default; pass alongside `onSelectQueueId` to control it from outside
   * (e.g. to keep a side/interior panel showing that queue's
   * `AgentDashboardQueueDrilldown` in sync). `null`/`undefined` means
   * nothing selected.
   */
  selectedQueueId?: string | null;
  /** Called with the resolved next selection — same click-to-toggle behavior as `DashboardQueue`'s own `onSelect`. */
  onSelectQueueId?: (id: string | null) => void;
  /** Fired by clicking a Contact History row — see `ContactHistoryCardProps.onSelectEntry`'s own doc comment for the "report, don't own" pattern this follows. */
  onSelectContactHistoryEntry?: (entry: AgentDashboardContactHistoryEntry) => void;
  /** Which Contact History row (if any) should render selected — pass alongside `onSelectContactHistoryEntry`. */
  selectedContactHistoryEntryId?: string | null;
  /** Called when the header's "Personal Queue: Empty" chip is clicked (e.g. to expand a consumer's own left nav) — see `PersonalQueueChip`'s own doc comment. Left unhandled by default. */
  onPersonalQueueClick?: () => void;
  /**
   * When true, suppresses this component's own inline greeting `PageHeader`
   * (title/subtitle/Personal Queue chip) — nothing renders in its place in
   * the scrollable body. Pair with the separately-exported
   * `AgentDashboardHeader` (identical content) mounted in a consumer's own
   * real header slot instead — e.g. `AgentNextGenTemplate`'s `homeHeader`
   * prop, a genuine non-scrolling row above the Home tab's body. Matches
   * agent-next-gen-v2's own former identical "greeting in a separate
   * non-scrolling header slot" treatment (see that app's own doc comment,
   * `AgentNextGenPage.tsx`, near where its `showPageHeader` gate renders
   * `PageHeader` for the Home tab) before that app moved it into the body.
   * Default `false` — current inline behavior, unchanged for every existing
   * consumer that doesn't pass this.
   */
  header?: boolean;
  className?: string;
}

/** The Agent Next Gen "Home" tab — greeting, queue widgets, Contact History,
 *  and Performance/Productivity summary cards. See the class doc comment
 *  above for the full rationale and integration points. */
export function AgentDashboard({
  agentFirstName,
  agentId,
  greeting = true,
  agentLegStatus,
  connectionLagTime,
  onConnectAgentLeg,
  selectedQueueId,
  onSelectQueueId,
  onSelectContactHistoryEntry,
  selectedContactHistoryEntryId,
  onPersonalQueueClick,
  header = false,
  className,
}: AgentDashboardProps) {
  // Computed once per render, reused by whichever branch below actually
  // renders the inline greeting (`!header`) — avoids calling
  // `resolveGreetingContent` twice for the same title/subtitle pair.
  const greetingContent = resolveGreetingContent(
    greeting,
    agentFirstName,
    agentId,
    agentLegStatus,
    connectionLagTime,
    onConnectAgentLeg
  );

  // ── Live queue simulation ──
  // Matches agent-next-gen-v2's own Home tab behavior (per explicit
  // request to match that app's content AND functionality, not just
  // layout): `clockTick` ticks once a second and feeds each queue's own
  // `QUEUE_WAIT_BASE_SECONDS` baseline (so "Wait Time" visibly counts up
  // like a live clock), and every 4 seconds one random queue's one random
  // sub-item's `inQueueCount` nudges up/down by 1 (clamped 0-20) — the
  // same "not independently randomized, always derived from the same
  // sub-item list" fix that app's own `queueSubItems` state/`sumInQueue`
  // pairing documents, so this component's own "Contacts" metric can never
  // drift from what a consumer's own `AgentDashboardQueueDrilldown` panel
  // would show for the same queue. Kept entirely internal to
  // `AgentDashboard` (not lifted to a prop) — the drilldown panel itself
  // stays the consumer's own concern (see this file's class doc comment),
  // so it continues reading the static `AGENT_DASHBOARD_QUEUE_SUB_ITEMS`
  // seed unaffected by this internal simulation, same as before this
  // change.
  const [queueSubItemsLive, setQueueSubItemsLive] = React.useState(AGENT_DASHBOARD_QUEUE_SUB_ITEMS);
  const [clockTick, setClockTick] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setClockTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      setQueueSubItemsLive((prev) => {
        const queueIds = Object.keys(prev);
        const queueId = queueIds[Math.floor(Math.random() * queueIds.length)];
        const items = prev[queueId];
        const itemIndex = Math.floor(Math.random() * items.length);
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const nextCount = Math.max(0, Math.min(20, items[itemIndex].inQueueCount + delta));
        if (nextCount === items[itemIndex].inQueueCount) return prev;
        return {
          ...prev,
          [queueId]: items.map((item, i) => (i === itemIndex ? { ...item, inQueueCount: nextCount } : item)),
        };
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const liveQueueItems = React.useMemo<DashboardQueueItem[]>(() => {
    return AGENT_DASHBOARD_QUEUE_ITEMS.map((base) => {
      const items = queueSubItemsLive[base.id] ?? [];
      const contactsCount = items.reduce((total, item) => total + item.inQueueCount, 0);
      return {
        ...base,
        contactsCount,
        skillsCount: items.length,
        agentsCount: AGENTS_COUNT_BY_QUEUE[base.id] ?? base.agentsCount,
        wait: contactsCount > 0 ? formatWaitTime((QUEUE_WAIT_BASE_SECONDS[base.id] ?? 0) + clockTick) : formatWaitTime(0),
      };
    });
  }, [queueSubItemsLive, clockTick]);

  return (
    <DashboardTemplate className={className}>
      {/* `-mx-6` cancels out `PageHeader`'s own baked-in `px-6` (page-
          header.tsx) so its title lines up flush with the cards below
          (`DashboardQueue` etc., which have no side padding of their own)
          instead of sitting visibly indented past them — same trick agent-
          next-gen-v2's own identical dashboard header uses at its call
          site. `bordered={false}`/`titleSize="2xl"` also match that
          header exactly (see each prop's own doc comment, page-header.tsx).
          `titleSize="2xl"` stays on THIS inline copy only — the standalone
          `AgentDashboardHeader` export dropped it (see that function's own
          comment) so a real header-slot mount reads at the standard
          `PageHeader` size instead. Suppressed entirely when `header` is
          true — see that prop's own doc comment; a consumer wanting this
          content elsewhere renders the separately-exported
          `AgentDashboardHeader` instead. */}
      {!header && (
        <div className="-mx-6 mb-6">
          <PageHeader
            title={greetingContent.title}
            subtitle={greetingContent.subtitle}
            bordered={false}
            titleSize="2xl"
            actions={<PersonalQueueChip onClick={onPersonalQueueClick} />}
          />
        </div>
      )}

      <DashboardQueue
        items={liveQueueItems}
        selectedId={selectedQueueId}
        onSelect={onSelectQueueId}
      />

      <div className="mt-6">
        <ContactHistoryCard
          onSelectEntry={onSelectContactHistoryEntry}
          selectedEntryId={selectedContactHistoryEntryId}
        />
      </div>

      <div className="mt-6 lyra-container-grid">
        <PerformanceSummaryCard />
        <PerformanceBreakdownCard />
      </div>
    </DashboardTemplate>
  );
}
