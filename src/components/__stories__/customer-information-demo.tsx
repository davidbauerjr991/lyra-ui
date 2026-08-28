/* ── customer-information-demo.tsx ──
   Shared (NON-story) helper module for the ported agent-next-gen-v2
   Customer Information experience — same precedent as
   `create-new-customers-data.ts` living in __stories__ without being a
   story file itself. Everything here was extracted verbatim from
   `CustomerInformationPanel.stories.tsx`'s v2 port so the three consumers
   (that story, PageHeader.stories.tsx's "Record Header (Customers)", and
   AgentNextGenTemplate.stories.tsx's "Active Interaction") share ONE
   implementation instead of three hand-copied ones that would drift.

   v2 source of record: `CustomerInformationSidePanel` /
   `CustomerInfoHoverPreview` / `CustomerInformationPanelBody` +
   `useCustomerRecordDraft` (agent-next-gen-customer-info-panel.tsx) and
   the page files' own width-guard state. See the behavior reference block
   in CustomerInformationPanel.stories.tsx for the full v2 rundown; the
   composed pieces at the bottom of this file (`useCustomerPanelWidthGuards`,
   `CustomerInformationPanelToggle`, `CustomerInformationDockedPanel`)
   bundle the wiring every consumer repeats.

   Imports are lyra-ui-relative + lucide-react + React only — this module
   may not import from the v2 app; its app-only helpers (`hashSeed`,
   `splitCustomerName`, `OUTBOUND_AGENTS`, `OUTCOME_TAG_OPTIONS`,
   Thread-channel plumbing) are inlined as small equivalents below. */

import { useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from "react";
import {
  ArrowDown,
  ArrowUp,
  Clock,
  FileText,
  IdCard,
  Inbox,
  Mail,
  Maximize2,
  MessageSquare,
  Minimize2,
  PanelRightClose,
  Pencil,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { CustomerInformationPanel, type CustomerInformationPerson } from "../customer-information-panel";
import { PanelPinButton } from "../panel-pin-button";
import { TabList, Tab } from "../tabs";
import { Button } from "../button";
import { Accordion } from "../accordion";
import { Badge, type BadgeCircleVariant } from "../badge";
import { Separator } from "../separator";
import { Label } from "../label";
import { Input } from "../input";
import { Select, type SelectOption } from "../select";
import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { PhoneInput, type PhoneValue } from "../phone-input";
import { EmailInput } from "../email-input";
import { RadioGroup, RadioGroupItem } from "../radio";
import { TableToolbar } from "../table";
import {
  DateRangeFilterChip,
  type DateRangeFilterValue,
  type DateRangeFilterOption,
} from "../date-range-filter-chip";
import { type FilterChipOption } from "../filter-chip";
import { Popover } from "../popover";
import { PanelHeader } from "../panel-header";
import { PanelFooter } from "../panel-footer";
import { cn } from "../../lib/utils";

export const CUSTOMER_PANEL_TABS = [
  "Overview",
  "Interactions",
  "Detail",
  "Directory",
  "Tasks",
  "Notes",
  "Accounts",
  "Tickets",
] as const;
export type CustomerPanelTabLabel = (typeof CUSTOMER_PANEL_TABS)[number];

/* Same "active toggle button" idiom `PanelPinButton`/`LeftNav`/`Tabs` and
   the AgentNextGenTemplate's app-panel buttons already use. */
export const PANEL_BUTTON_SELECTED_CLASS =
  "bg-lyra-bg-active-moderate text-lyra-fg-active-strong hover:bg-lyra-bg-active-moderate";

/* ── Deterministic mock-data helpers (ported from v2) ──
   v2 has no real per-customer backend either — everything below is
   synthesized deterministically from the person's own `recordId` via
   `hashSeed` (agent-next-gen-shared-utils.ts), so a given customer always
   shows the same "invented" details across renders/reopens instead of
   reshuffling. Same functions, inlined here (this module can't import from
   the v2 app). */

/** v2 `hashSeed` — turns any string into a stable pseudo-random number. */
function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** v2 `synthesizePhone` — "+1 614 749 1794"-style invented US number. */
function synthesizePhone(seed: number): string {
  const areaCode = 200 + (seed % 800);
  const exchange = 100 + (Math.floor(seed / 7) % 900);
  const line = 1000 + (Math.floor(seed / 13) % 9000);
  return `+1 ${areaCode} ${exchange} ${line}`;
}

/** v2 `splitCustomerName` — no-space/absent names fall back to the whole
 *  name as both halves. */
function splitCustomerName(customerName: string | undefined): { firstName: string; lastName: string } {
  const name = customerName ?? "Customer";
  const [firstName, ...restNameParts] = name.split(" ");
  const lastName = restNameParts.join(" ") || firstName;
  return { firstName, lastName };
}

/** v2 `formatHistoryTimestamp` — "MM/DD/YYYY h:mm:ss AM/PM", hand-built
 *  (zero-padded month/day, no comma) rather than `toLocaleString`. */
function formatHistoryTimestamp(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hour24 = date.getHours();
  const ampm = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  return `${mm}/${dd}/${yyyy} ${hour12}:${min}:${sec} ${ampm}`;
}

/** v2 `phoneValueFromDisplay` — parses the panel's own "+1 614 749 1794"
 *  display strings back into `PhoneInput`'s raw-digits `PhoneValue`. */
function phoneValueFromDisplay(display: string): PhoneValue {
  const digits = display.replace(/\D/g, "");
  const withoutCountryCode = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return { countryCode: "us", number: withoutCountryCode };
}

/** v2 `phoneDisplayFromValue` — the reverse round-trip, "+1 XXX XXX XXXX",
 *  grouping whatever digits exist so far so the field reads sensibly
 *  mid-edit too. */
function phoneDisplayFromValue(value: PhoneValue): string {
  const digits = value.number.replace(/\D/g, "");
  const groups = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)].filter(Boolean);
  return groups.length ? `+1 ${groups.join(" ")}` : "";
}

/** Fixed "now" for the synthesized Interactions history — v2 walks
 *  backward from a live `new Date()`; a demo needs fully deterministic
 *  output (no per-render drift), so it anchors to one fixed instant
 *  instead. */
const HISTORY_BASE_NOW = new Date(2026, 7, 24, 14, 30, 0);

/** Stand-in for v2's `OUTBOUND_AGENTS` roster (agent app data, not
 *  importable here) — same "reuse one real-looking name pool" intent. */
const DEMO_AGENTS = [
  "Maya Torres",
  "Devon Reed",
  "Priya Nair",
  "Jonah Fields",
  "Elena Vasquez",
];

/* ── Customer Overview fields (v2 `buildCustomerInfoFields`) ── */

export interface CustomerInfoField {
  label: string;
  value: string;
}

const CUSTOMER_INFO_STREET_NAMES = [
  "Clinton Heights Ave", "Maple Grove Dr", "Sunset Ridge Ln", "Harbor View Ct",
  "Cedar Hollow Rd", "Birchwood Ter", "Fieldstone Way", "Willow Creek Blvd",
];
const CUSTOMER_INFO_CITY_STATE: { city: string; state: string }[] = [
  { city: "Columbus", state: "OH" },
  { city: "Austin", state: "TX" },
  { city: "Portland", state: "OR" },
  { city: "Raleigh", state: "NC" },
  { city: "Denver", state: "CO" },
  { city: "Tampa", state: "FL" },
  { city: "Madison", state: "WI" },
  { city: "Boise", state: "ID" },
];

/** v2 `buildCustomerInfoFields`, minus the `channels: Thread[]` param —
 *  that only existed so a REAL open voice/email channel's address could
 *  override the synthesized fallback; these demos have no live interaction
 *  channels, so it always synthesizes (v2's own fallback path). Labels,
 *  order, and formulas are otherwise identical. */
export function buildCustomerInfoFields(customerName: string | undefined, recordId: string): CustomerInfoField[] {
  const name = customerName ?? "Customer";
  const { firstName, lastName } = splitCustomerName(customerName);
  const seed = hashSeed(recordId || name);

  const phone = synthesizePhone(seed);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

  const { city, state } = CUSTOMER_INFO_CITY_STATE[seed % CUSTOMER_INFO_CITY_STATE.length];
  const street = CUSTOMER_INFO_STREET_NAMES[Math.floor(seed / 7) % CUSTOMER_INFO_STREET_NAMES.length];
  const houseNumber = 100 + (seed % 900);
  const zipCode = String(10000 + (seed % 89999)).padStart(5, "0");
  const balance = (seed % 25000) / 100;

  return [
    { label: "Phone #", value: phone },
    { label: "Contact #", value: recordId },
    { label: "Email", value: email },
    { label: "Balance", value: balance.toLocaleString("en-US", { style: "currency", currency: "USD" }) },
    { label: "Address", value: `${houseNumber} ${street}` },
    { label: "City", value: city },
    { label: "State", value: state },
    { label: "Zip Code", value: zipCode },
  ];
}

/** v2 `getFieldValue` — lets the Detail tab reuse the exact same values
 *  the Overview tab shows instead of a second synthesized set. */
function getFieldValue(fields: CustomerInfoField[], label: string): string {
  return fields.find((f) => f.label === label)?.value ?? "";
}

/* ── Latest Interaction / Latest Note (v2 `buildLatestInteraction` /
   `buildLatestNote`) ──
   v2's `statusVariant` vocabulary is `ContactHistoryStatusVariant`
   ("critical" | "info" | "warning" | "success" | "neutral", agent-next-
   gen-contact-history.tsx) — the same names lyra-ui's own
   `BadgeCircleVariant` already carries, so the Badge type is used
   directly here. */

export interface CustomerLatestInteraction {
  timeAgo: string;
  channel: string;
  status: string;
  statusVariant: BadgeCircleVariant;
  summary: string;
  caseId: string;
  handledBy: string;
}

const CUSTOMER_LATEST_INTERACTION_STATUS_POOL: { status: string; variant: BadgeCircleVariant }[] = [
  { status: "Resolved", variant: "success" },
  { status: "Escalated", variant: "critical" },
  { status: "Pending", variant: "warning" },
];

const CUSTOMER_LATEST_INTERACTION_CHANNEL_POOL = ["Email", "Voice", "Chat", "SMS"];

const CUSTOMER_LATEST_INTERACTION_TIME_AGO_POOL = [
  "3 days ago", "9 days ago", "2 weeks ago", "3 weeks ago", "1 month ago", "6 weeks ago",
];

const CUSTOMER_LATEST_INTERACTION_SUMMARY_POOL = [
  "Asked about upgrading to the Pro tier for additional storage. Walked through the upgrade flow and confirmed the new billing amount.",
  "Reported trouble accessing the account after a password reset. Verified identity via KBA and confirmed access was restored.",
  "Requested a copy of the most recent invoice. Located the billing record and sent it over by email.",
  "Called in to update the account's mailing address. Confirmed the new address and applied the change.",
  "Flagged a recent charge that looked unfamiliar. Reviewed the transaction history and clarified the charge.",
  "Wanted to add an additional user seat to the plan. Walked through the add-seat flow and confirmed the updated price.",
];

/** v2 `buildLatestInteraction` — same salt suffix so this doesn't land on
 *  the same pool indexes `buildCustomerInfoFields` hashes to. */
export function buildLatestInteraction(customerName: string | undefined, recordId: string): CustomerLatestInteraction {
  const seed = hashSeed(`${recordId || customerName || "customer"}-latest-interaction`);
  const { status, variant } = CUSTOMER_LATEST_INTERACTION_STATUS_POOL[seed % CUSTOMER_LATEST_INTERACTION_STATUS_POOL.length];
  const channel = CUSTOMER_LATEST_INTERACTION_CHANNEL_POOL[Math.floor(seed / 3) % CUSTOMER_LATEST_INTERACTION_CHANNEL_POOL.length];
  const timeAgo = CUSTOMER_LATEST_INTERACTION_TIME_AGO_POOL[Math.floor(seed / 7) % CUSTOMER_LATEST_INTERACTION_TIME_AGO_POOL.length];
  const summary = CUSTOMER_LATEST_INTERACTION_SUMMARY_POOL[Math.floor(seed / 11) % CUSTOMER_LATEST_INTERACTION_SUMMARY_POOL.length];
  const handledBy = DEMO_AGENTS[seed % DEMO_AGENTS.length];
  const caseId = `CASE-${40000 + (seed % 9000)}`;

  return { timeAgo, channel, status, statusVariant: variant, summary, caseId, handledBy };
}

export interface CustomerLatestNote {
  timeAgo: string;
  author: string;
  note: string;
}

const CUSTOMER_LATEST_NOTE_TIME_AGO_POOL = [
  "1 day ago", "4 days ago", "1 week ago", "2 weeks ago", "1 month ago", "2 months ago",
];

const CUSTOMER_LATEST_NOTE_POOL = [
  "Customer prefers email follow-up over phone calls going forward.",
  "Flagged as a long-tenured account — check for loyalty offers before escalating.",
  "Prefers to be addressed by first name; mentioned this during last contact.",
  "Has a pending shipment; hold off on billing-related outreach until it arrives.",
  "Requested callback outside of standard business hours — see availability note on file.",
  "Previously disputed a charge that was resolved in the customer's favor; handle related questions with extra care.",
];

/** v2 `buildLatestNote` — own salt so it doesn't share pool indexes with
 *  Latest Interaction. */
export function buildLatestNote(customerName: string | undefined, recordId: string): CustomerLatestNote {
  const seed = hashSeed(`${recordId || customerName || "customer"}-latest-note`);
  const timeAgo = CUSTOMER_LATEST_NOTE_TIME_AGO_POOL[seed % CUSTOMER_LATEST_NOTE_TIME_AGO_POOL.length];
  const note = CUSTOMER_LATEST_NOTE_POOL[Math.floor(seed / 3) % CUSTOMER_LATEST_NOTE_POOL.length];
  const author = DEMO_AGENTS[Math.floor(seed / 7) % DEMO_AGENTS.length];
  return { timeAgo, author, note };
}

/* ── Interactions-tab history (v2's "Customer History" section) ── */

type CustomerHistoryDirection = "inbound" | "outbound";
type CustomerHistoryChannelType = "voice" | "sms" | "email";

export interface CustomerHistorySessionEntry {
  id: string;
  direction: CustomerHistoryDirection;
  channelType: CustomerHistoryChannelType;
  target: string;
  agentName: string;
  agentEmail: string;
  timestamp: Date;
  timestampDisplay: string;
  tags: string[];
}

const CUSTOMER_HISTORY_CHANNEL_ICON: Record<CustomerHistoryChannelType, LucideIcon> = {
  voice: Phone,
  sms: MessageSquare,
  email: Mail,
};

// Purple/green/pink per v2's `CUSTOMER_HISTORY_CHANNEL_COLOR_CLASS` (its
// own doc comment: plain `text-*` on a bare icon, not a `Tag`, so it isn't
// limited to `TagVariant`'s vocabulary and can use green directly).
// Written as `[color:var(...)]` arbitrary values against the accent CSS
// variables (lyra-tokens.css) rather than v2's own `text-lyra-accent-
// green-strong`-style names — lyra-ui's tailwind-preset.ts only maps the
// slate/purple accent families to utilities, so the green/pink named
// classes wouldn't generate here.
const CUSTOMER_HISTORY_CHANNEL_COLOR_CLASS: Record<CustomerHistoryChannelType, string> = {
  voice: "[color:var(--lyra-color-accent-purple-strong)]",
  sms: "[color:var(--lyra-color-accent-green-strong)]",
  email: "[color:var(--lyra-color-accent-pink-strong)]",
};

/** Inline stand-in for v2's `OUTCOME_TAG_OPTIONS` (agent-next-gen-
 *  transcript.tsx — the live Outcome-tagging popover's vocabulary, not
 *  importable here). Small representative subset; only used as a
 *  filterable attribute + the Tags filter checklist, same as v2 (tags are
 *  never rendered on a history row). */
const HISTORY_TAG_LABELS = ["Billing", "Technical Support", "Follow-up Needed", "Resolved on First Contact"];

const CUSTOMER_HISTORY_ENTRY_COUNT = 8;

/** v2 `buildCustomerHistoryEntries`, trimmed to the fields the demo's
 *  row shape actually renders (v2's session-detail `InteriorPanel` — call
 *  center, external ids, conversation transcript, etc. — is out of scope
 *  here, see `CustomerHistoryTabContent` below). Ordered most-recent-
 *  first, walking backward from `HISTORY_BASE_NOW` by a seed-stable 2-47
 *  hours per step, exactly like v2's own walk from `new Date()`. */
export function buildCustomerHistoryEntries(
  customerName: string | undefined,
  recordId: string
): CustomerHistorySessionEntry[] {
  const fields = buildCustomerInfoFields(customerName, recordId);
  const phone = getFieldValue(fields, "Phone #");
  const email = getFieldValue(fields, "Email");

  const entries: CustomerHistorySessionEntry[] = [];
  let cursor = new Date(HISTORY_BASE_NOW);

  for (let i = 0; i < CUSTOMER_HISTORY_ENTRY_COUNT; i++) {
    const seed = hashSeed(`${recordId || customerName || "customer"}-history-${i}`);
    cursor = new Date(cursor.getTime() - (2 + (seed % 46)) * 60 * 60 * 1000);

    const direction: CustomerHistoryDirection = seed % 10 < 7 ? "outbound" : "inbound";
    const channelPool: CustomerHistoryChannelType[] = ["voice", "voice", "sms", "email"];
    const channelType = channelPool[Math.floor(seed / 7) % channelPool.length];

    const agentName = DEMO_AGENTS[Math.floor(seed / 11) % DEMO_AGENTS.length];
    const { firstName: agentFirst, lastName: agentLast } = splitCustomerName(agentName);
    const agentEmail = `${agentFirst.toLowerCase()}.${agentLast.toLowerCase()}@cxisme.com`;

    entries.push({
      id: `${recordId || customerName || "customer"}-history-${i}`,
      direction,
      channelType,
      target: channelType === "email" ? email : phone,
      agentName,
      agentEmail,
      timestamp: cursor,
      timestampDisplay: formatHistoryTimestamp(cursor),
      tags:
        seed % 5 < 3
          ? [HISTORY_TAG_LABELS[Math.floor(seed / 29) % HISTORY_TAG_LABELS.length]]
          : [
              HISTORY_TAG_LABELS[Math.floor(seed / 29) % HISTORY_TAG_LABELS.length],
              HISTORY_TAG_LABELS[Math.floor(seed / 31) % HISTORY_TAG_LABELS.length],
            ].filter((label, idx, arr) => arr.indexOf(label) === idx),
    });
  }

  return entries;
}

/** v2 `CustomerHistoryChannelIcon` — direction arrow beside the channel
 *  glyph, side by side (not overlaid — at this size an overlaid arrow
 *  would obscure the channel glyph), both in the channel's accent color. */
function CustomerHistoryChannelIcon({
  channelType,
  direction,
}: {
  channelType: CustomerHistoryChannelType;
  direction: CustomerHistoryDirection;
}) {
  const ChannelIcon = CUSTOMER_HISTORY_CHANNEL_ICON[channelType];
  const DirectionIcon = direction === "outbound" ? ArrowUp : ArrowDown;
  return (
    <span
      className={cn("flex items-center gap-0.5 shrink-0 pt-0.5", CUSTOMER_HISTORY_CHANNEL_COLOR_CLASS[channelType])}
      aria-hidden="true"
    >
      <DirectionIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
      <ChannelIcon className="h-4 w-4" strokeWidth={1.75} />
    </span>
  );
}

const CUSTOMER_HISTORY_CHANNEL_TYPE_FILTER_OPTIONS: FilterChipOption[] = [
  { value: "voice", label: "Voice" },
  { value: "sms", label: "SMS" },
  { value: "email", label: "Email" },
];
const CUSTOMER_HISTORY_DIRECTION_FILTER_OPTIONS: FilterChipOption[] = [
  { value: "inbound", label: "Inbound" },
  { value: "outbound", label: "Outbound" },
];
const CUSTOMER_HISTORY_TAG_FILTER_OPTIONS: FilterChipOption[] = HISTORY_TAG_LABELS.map((label) => ({
  value: label,
  label,
}));

// v2's `CUSTOMER_HISTORY_DATE_RANGE_OPTIONS` adds Last 30/90 days so the
// default selection doesn't hide most of the synthesized history (entries
// can land ~16 days back). One demo simplification: v2 also lists
// "Custom" (revealing a `DateRangePicker`); omitted here to avoid carrying
// that picker's own range state in a demo — the deterministic entries all
// land within the listed presets anyway.
const CUSTOMER_HISTORY_DATE_RANGE_OPTIONS: DateRangeFilterOption[] = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last7", label: "Last 7 days" },
  { value: "last30", label: "Last 30 days" },
  { value: "last90", label: "Last 90 days" },
];

/** Preset date-range check against the demo's fixed "now" — the inline
 *  equivalent of v2's `isWithinCustomerHistoryDateRange` (which compares
 *  against the live clock). */
function isWithinHistoryDateRange(timestamp: Date, value: DateRangeFilterValue): boolean {
  const now = HISTORY_BASE_NOW;
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const todayStart = startOfDay(now);
  switch (value) {
    case "today":
      return timestamp >= todayStart;
    case "yesterday": {
      const yesterdayStart = new Date(todayStart.getTime() - 24 * 60 * 60 * 1000);
      return timestamp >= yesterdayStart && timestamp < todayStart;
    }
    case "last7":
      return timestamp >= new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case "last30":
      return timestamp >= new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case "last90":
      return timestamp >= new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    default:
      return true;
  }
}

/* ── Shared accordion chrome (v2 `CUSTOMER_INFO_ACCORDION_CLASSNAME`) ──
   One constant for every collapsible card in this panel (Overview's
   Customer Overview/Latest Interaction/Latest Note, Detail's General/
   Address, Directory's phone slots) so the surfaces can't drift apart. */
const CUSTOMER_INFO_ACCORDION_CLASSNAME =
  "rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-control-subtle overflow-hidden h-fit";

/* ── Customer record draft (v2 `useCustomerRecordDraft`) ──
   The whole editable surface (Overview field list + Detail form +
   Directory email/consent/phone slots) lifted into one plain object with a
   separately-tracked saved baseline, so edits survive tab switches (the
   inactive tabs unmount) and Cancel has something real to restore.
   `isDirty` is reference equality, exactly like v2 (`save`/`cancel`
   re-point one state variable at the other's object; every edit produces a
   brand-new object via spread) — editing a field back to its original
   value still reads dirty, an accepted simplification. */

export interface CustomerDirectoryPhoneState {
  phone: PhoneValue;
  consentCall: boolean;
  consentSms: boolean;
  block: string;
}

export interface CustomerRecordDraft {
  originalContactNumber: string;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  balanceDue: string;
  active: boolean;
  accountBlock: string;
  group: string;
  dueDate: Date | undefined;
  address2: string;
  directoryEmail: string;
  emailConsent: boolean;
  phones: CustomerDirectoryPhoneState[];
  overviewFields: CustomerInfoField[];
}

// v2 renders 10 slots ("up to 10 phones" per its reference screenshot);
// trimmed to 3 here — the per-slot row shape is the fidelity target, not
// the count, and 10 identical blank accordions would just be scroll noise
// in a demo.
const CUSTOMER_DIRECTORY_PHONE_LABELS = ["Home", "Phone 2", "Phone 3"];

const CUSTOMER_DETAIL_ACCOUNT_BLOCK_OPTIONS: SelectOption[] = [
  { value: "none", label: "None" },
  { value: "collections", label: "Collections" },
  { value: "fraud-review", label: "Fraud Review" },
  { value: "credit-hold", label: "Credit Hold" },
];

const CUSTOMER_DIRECTORY_BLOCK_OPTIONS = [
  { value: "no-block", label: "No Block" },
  { value: "block-daily", label: "Block Daily" },
  { value: "block-permanent", label: "Block Permanent" },
];

/** v2 `buildCustomerRecordDraft` — real-data-where-it-exists (name split,
 *  Overview phone/email seeding the Home slot/Directory email), blank
 *  defaults elsewhere. `overviewFields` is a shallow COPY of `fields` so
 *  editing it never mutates the synthesized baseline. */
function buildCustomerRecordDraft(fields: CustomerInfoField[], customerName?: string): CustomerRecordDraft {
  const { firstName, lastName } = splitCustomerName(customerName);
  const phoneDisplay = getFieldValue(fields, "Phone #");
  return {
    originalContactNumber: "",
    firstName,
    lastName,
    title: "",
    department: "",
    balanceDue: "$0.00",
    active: true,
    accountBlock: "none",
    group: "",
    dueDate: undefined,
    address2: "",
    directoryEmail: getFieldValue(fields, "Email"),
    emailConsent: false,
    phones: CUSTOMER_DIRECTORY_PHONE_LABELS.map((_, i) =>
      i === 0
        ? { phone: phoneValueFromDisplay(phoneDisplay), consentCall: true, consentSms: true, block: "no-block" }
        : { phone: { countryCode: "us", number: "" }, consentCall: false, consentSms: false, block: "no-block" }
    ),
    overviewFields: fields.map((field) => ({ ...field })),
  };
}

/** v2 `useCustomerRecordDraft` — draft + saved baseline + patch setters.
 *  Resets on a genuine record switch (keyed on `recordId` alone, same as
 *  v2's own effect). */
export function useCustomerRecordDraft(
  fields: CustomerInfoField[],
  customerName: string | undefined,
  recordId: string | undefined
) {
  const [savedDraft, setSavedDraft] = useState(() => buildCustomerRecordDraft(fields, customerName));
  const [draft, setDraft] = useState(savedDraft);

  useEffect(() => {
    const fresh = buildCustomerRecordDraft(fields, customerName);
    setSavedDraft(fresh);
    setDraft(fresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordId]);

  const updateDraft = (patch: Partial<CustomerRecordDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  };
  const updatePhone = (index: number, patch: Partial<CustomerDirectoryPhoneState>) => {
    setDraft((prev) => ({
      ...prev,
      phones: prev.phones.map((phone, i) => (i === index ? { ...phone, ...patch } : phone)),
    }));
  };
  const updateOverviewField = (index: number, value: string) => {
    setDraft((prev) => ({
      ...prev,
      overviewFields: prev.overviewFields.map((field, i) => (i === index ? { ...field, value } : field)),
    }));
  };

  return {
    draft,
    isDirty: draft !== savedDraft,
    updateDraft,
    updatePhone,
    updateOverviewField,
    save: () => setSavedDraft(draft),
    cancel: () => setDraft(savedDraft),
  };
}

export type CustomerRecordDraftApi = ReturnType<typeof useCustomerRecordDraft>;

/** v2 `CustomerRecordSaveFooter` — Cancel (outline) + Save (default =
 *  filled primary; this design system has no separate "primary" variant
 *  name), no "unsaved changes" copy, entrance-only animation (the `footer`
 *  slot's conditional render unmounts it immediately on Save/Cancel). */
export function CustomerRecordSaveFooter({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
  return (
    <PanelFooter className="animate-in slide-in-from-bottom-2 fade-in-0 duration-200">
      <Button variant="outline" size="md" onClick={onCancel}>
        Cancel
      </Button>
      <Button size="md" onClick={onSave}>
        Save
      </Button>
    </PanelFooter>
  );
}

/* ── Interactions tab (v2 `CustomerHistoryTabContent`) ──
   Toolbar (search + Channel type/Direction/Tags checklists + date-range
   chip) above the session list. The filter wiring is real, same as v2.
   One deliberate demo simplification: v2 additionally opens a right-
   docked `CustomerHistorySessionDetailPanel` (`InteriorPanel` with session
   fields + a Conversation tab) when a row is clicked — that whole detail
   surface is out of scope here; rows still toggle their selected
   highlight so the list's own interaction states render faithfully.

   Row shape matches v2's CURRENT list exactly: channel/direction icon
   pair, full-width target line, timestamp line, then "Agent (EMAIL)" —
   the inline "Outbound call"-style type text and the trailing status
   column ("Disconnected"/"dialing") were both dropped in v2 per explicit
   request (direction still reads from the icon's own arrow). */
function CustomerHistoryTabContent({
  entries,
  selectedIndex,
  onSelectIndex,
}: {
  entries: CustomerHistorySessionEntry[];
  selectedIndex: number | null;
  onSelectIndex: (index: number | null) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>({});
  const [dateRangeValue, setDateRangeValue] = useState<DateRangeFilterValue>("last30");

  const filterDefs = [
    { key: "channelType", label: "Channel type", options: CUSTOMER_HISTORY_CHANNEL_TYPE_FILTER_OPTIONS },
    { key: "direction", label: "Direction", options: CUSTOMER_HISTORY_DIRECTION_FILTER_OPTIONS },
    { key: "tags", label: "Tags", options: CUSTOMER_HISTORY_TAG_FILTER_OPTIONS },
  ];
  const handleFilterChange = (key: string, values: string[]) =>
    setFilterValues((prev) => ({ ...prev, [key]: values }));
  const clearAllFilters = () => {
    setFilterValues({});
    setSearchQuery("");
    setDateRangeValue("last30");
  };

  const channelTypeValues = filterValues.channelType ?? [];
  const directionValues = filterValues.direction ?? [];
  const tagValues = filterValues.tags ?? [];

  // Each visible row keeps its ORIGINAL index into `entries` (v2 does this
  // so its detail panel's prev/next chevrons step the full history; kept
  // here so the selection survives a filter change the same way).
  const filteredEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return entries
      .map((entry, index) => ({ entry, index }))
      .filter(({ entry }) => {
        if (query) {
          const haystack = `${entry.target} ${entry.agentName}`.toLowerCase();
          if (!haystack.includes(query)) return false;
        }
        if (channelTypeValues.length && !channelTypeValues.includes(entry.channelType)) return false;
        if (directionValues.length && !directionValues.includes(entry.direction)) return false;
        if (tagValues.length && !entry.tags.some((tag) => tagValues.includes(tag))) return false;
        if (!isWithinHistoryDateRange(entry.timestamp, dateRangeValue)) return false;
        return true;
      });
  }, [entries, searchQuery, channelTypeValues, directionValues, tagValues, dateRangeValue]);

  return (
    <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
      <TableToolbar
        className="px-6"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterDefs={filterDefs}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        onFilterClear={clearAllFilters}
        filters={
          <DateRangeFilterChip
            value={dateRangeValue}
            onValueChange={setDateRangeValue}
            options={CUSTOMER_HISTORY_DATE_RANGE_OPTIONS}
          />
        }
      />

      {filteredEntries.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4">
          <Inbox className="h-8 w-8 text-lyra-fg-disabled" strokeWidth={1.5} aria-hidden="true" />
          <p className="lyra-body-md text-lyra-fg-disabled text-center">No interactions match these filters</p>
        </div>
      ) : (
        // `min-h-0` — the classic nested-flex-scroll gotcha: without it the
        // flex item refuses to shrink below the list's natural height and
        // the list can't scroll independently (v2's own comment).
        <div className="flex flex-1 flex-col min-h-0 overflow-y-auto">
          {filteredEntries.map(({ entry, index }, i) => {
            const isSelected = selectedIndex === index;
            return (
              <div
                key={entry.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => onSelectIndex(isSelected ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectIndex(isSelected ? null : index);
                  }
                }}
                className={cn(
                  "flex items-start gap-3 px-6 py-3 cursor-pointer transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:-ring-offset-2",
                  i > 0 && "border-t border-lyra-border-subtle",
                  isSelected
                    ? "bg-lyra-bg-active-subtle hover:bg-lyra-state-hover-active-subtle"
                    : "hover:bg-lyra-state-hover"
                )}
              >
                <CustomerHistoryChannelIcon channelType={entry.channelType} direction={entry.direction} />
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="lyra-body-md text-lyra-fg-default truncate">{entry.target}</span>
                  <span className="lyra-body-sm text-lyra-fg-secondary whitespace-nowrap">
                    {entry.timestampDisplay}
                  </span>
                  <span className="lyra-body-sm-emphasis text-lyra-fg-default truncate">
                    {entry.agentName} ({entry.agentEmail.toUpperCase()})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Detail tab (v2 `CustomerDetailTabContent`) ──
   Two collapsible Accordion sections ("General"/"Address", both open by
   default), each a responsive `.lyra-form-grid` of real field components.
   Fields with a real source reuse the Overview tab's editable copy
   (`draft.overviewFields`, via `getFieldValue`) as readonly Inputs;
   everything else (Original Contact #, Title, Department, Balance Due,
   Account Block, Group, Due Date, Address 2) edits the draft directly.
   Labels are typed in normal case (v2's reference screenshot's all-caps
   was that legacy app's own CSS styling, deliberately not replicated). */
function CustomerDetailTabContent({
  fields,
  draft,
  onDraftChange,
}: {
  fields: CustomerInfoField[];
  draft: CustomerRecordDraft;
  onDraftChange: (patch: Partial<CustomerRecordDraft>) => void;
}) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-3 pb-4 lyra-form-grid-wrap">
      <Accordion
        defaultValue="general"
        className={CUSTOMER_INFO_ACCORDION_CLASSNAME}
        items={[
          {
            id: "general",
            title: "General",
            content: (
              <div className="flex flex-col gap-4">
                <div className="lyra-form-grid">
                  <Input label="Contact #" value={getFieldValue(fields, "Contact #")} readonly />
                  <Input
                    label="Original Contact #"
                    value={draft.originalContactNumber}
                    onChange={(e) => onDraftChange({ originalContactNumber: e.target.value })}
                  />
                </div>
                <div className="lyra-form-grid">
                  <Input label="First Name" value={draft.firstName} onChange={(e) => onDraftChange({ firstName: e.target.value })} />
                  <Input label="Last Name" value={draft.lastName} onChange={(e) => onDraftChange({ lastName: e.target.value })} />
                </div>
                <div className="lyra-form-grid">
                  <Input label="Title" value={draft.title} onChange={(e) => onDraftChange({ title: e.target.value })} />
                  <Input label="Department" value={draft.department} onChange={(e) => onDraftChange({ department: e.target.value })} />
                </div>
                <div className="lyra-form-grid">
                  <Input label="Total Balance" value={getFieldValue(fields, "Balance")} readonly />
                  <Input label="Balance Due" value={draft.balanceDue} onChange={(e) => onDraftChange({ balanceDue: e.target.value })} />
                </div>
                <div className="lyra-form-grid">
                  <Checkbox
                    label="Active"
                    checked={draft.active}
                    onCheckedChange={(checked) => onDraftChange({ active: checked === true })}
                  />
                  <Select
                    label="Account Block"
                    options={CUSTOMER_DETAIL_ACCOUNT_BLOCK_OPTIONS}
                    value={draft.accountBlock}
                    onValueChange={(value) => onDraftChange({ accountBlock: value })}
                  />
                </div>
                <div className="lyra-form-grid">
                  <Select
                    label="Group"
                    options={[]}
                    value={draft.group}
                    onValueChange={(value) => onDraftChange({ group: value })}
                    placeholder="Select group"
                  />
                  <DatePicker label="Due Date" value={draft.dueDate} onChange={(date) => onDraftChange({ dueDate: date })} />
                </div>
              </div>
            ),
          },
        ]}
      />
      <Accordion
        defaultValue="address"
        className={CUSTOMER_INFO_ACCORDION_CLASSNAME}
        items={[
          {
            id: "address",
            title: "Address",
            content: (
              <div className="flex flex-col gap-4">
                <div className="lyra-form-grid">
                  <Input label="Address 1" value={getFieldValue(fields, "Address")} readonly />
                  <Input label="Address 2" value={draft.address2} onChange={(e) => onDraftChange({ address2: e.target.value })} />
                </div>
                <div className="lyra-form-grid">
                  <Input label="City" value={getFieldValue(fields, "City")} readonly />
                  <Input label="State" value={getFieldValue(fields, "State")} readonly />
                </div>
                <div className="lyra-form-grid">
                  <Input label="Zip Code" value={getFieldValue(fields, "Zip Code")} readonly />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

/* ── Directory tab (v2 `CustomerDirectoryTabContent` /
   `CustomerDirectoryPhoneRow`) ──
   EmailInput + standalone consent Checkbox at the top, then the phone
   slots — each its own single-item Accordion card (slot label as the
   trigger title; `PhoneInput` gets no `label` of its own since that would
   duplicate the trigger right above it). Only "Home" seeds from real data
   (the Overview tab's own Phone #, consent defaulted true); the remaining
   slots start genuinely blank/unconsented, same as v2. "Call Attempts"
   are plain static-0 text, not `Metric` (no live tracking in the demo). */
function CustomerDirectoryPhoneRow({
  label,
  state,
  onChange,
}: {
  label: string;
  state: CustomerDirectoryPhoneState;
  onChange: (patch: Partial<CustomerDirectoryPhoneState>) => void;
}) {
  return (
    <Accordion
      type="single"
      defaultValue={label}
      className={CUSTOMER_INFO_ACCORDION_CLASSNAME}
      items={[
        {
          id: label,
          title: label,
          content: (
            // Three regions — phone + attempt stats, consent checkboxes,
            // block radios — share one `.lyra-form-grid` row: 3-up at full
            // (full-screen) width, stacking to one column at the panel's
            // normal ~325-425px widths (v2's own layout).
            <div className="lyra-form-grid">
              <div className="flex flex-col gap-3">
                <PhoneInput value={state.phone} onChange={(phone) => onChange({ phone })} className="max-w-sm" />
                <div className="flex flex-col gap-1">
                  <span className="lyra-body-md-emphasis text-lyra-fg-default">Call Attempts Today: 0</span>
                  <span className="lyra-body-md-emphasis text-lyra-fg-default">Call Attempts Total: 0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Checkbox
                  label="Consent Call"
                  checked={state.consentCall}
                  onCheckedChange={(c) => onChange({ consentCall: c === true })}
                />
                <Checkbox
                  label="Consent SMS"
                  checked={state.consentSms}
                  onCheckedChange={(c) => onChange({ consentSms: c === true })}
                />
              </div>
              <RadioGroup value={state.block} onValueChange={(block) => onChange({ block })} className="gap-2">
                {CUSTOMER_DIRECTORY_BLOCK_OPTIONS.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value} label={option.label} />
                ))}
              </RadioGroup>
            </div>
          ),
        },
      ]}
    />
  );
}

function CustomerDirectoryTabContent({
  draft,
  onDraftChange,
  onPhoneChange,
}: {
  draft: CustomerRecordDraft;
  onDraftChange: (patch: Partial<CustomerRecordDraft>) => void;
  onPhoneChange: (index: number, patch: Partial<CustomerDirectoryPhoneState>) => void;
}) {
  return (
    <div className="flex flex-col lyra-form-grid-wrap">
      <div className="flex flex-col gap-3 px-4 py-4">
        {/* `max-w-sm` — same "cap a lone full-width field at a sane
            reading width" convention the library's own Input/EmailInput
            stories use. */}
        <EmailInput
          label="Email"
          value={draft.directoryEmail}
          onChange={(value) => onDraftChange({ directoryEmail: value })}
          className="max-w-sm"
        />
        <Checkbox
          label="Consent"
          checked={draft.emailConsent}
          onCheckedChange={(c) => onDraftChange({ emailConsent: c === true })}
        />
      </div>
      <div className="flex flex-col gap-4 px-4 pt-3 pb-4">
        {CUSTOMER_DIRECTORY_PHONE_LABELS.map((label, i) => (
          <CustomerDirectoryPhoneRow
            key={label}
            label={label}
            state={draft.phones[i]}
            onChange={(patch) => onPhoneChange(i, patch)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Panel body (v2 `CustomerInformationPanelBody`) ──
   One body shared by the docked panel and the hover preview, switching on
   `activeTab`. Overview layout follows v2's final arrangement: Customer
   Overview LEFT of a stacked Latest Interaction / Latest Note column, the
   two sharing a `.lyra-card-split-wrap`/`.lyra-card-split`/`-even` row
   (side by side past ~480px of container width — i.e. full screen — and
   stacked at the panel's normal 325-425px widths, Customer Overview on
   top). Height-matching goes both ways exactly as in v2: each side's
   Accordion clears `h-fit` to `h-auto` only while OPEN (`align-items:
   stretch` then sizes it to whichever side is taller), and Latest Note
   additionally takes `flex-1` while open so the trailing card in the
   stack absorbs the leftover column height instead of ending in blank
   space.

   Tasks/Notes/Accounts/Tickets deliberately render NOTHING — v2's own
   body has no branch for them at all (blank content area, not an
   EmptyState); matched here rather than "improved". */
export function CustomerPanelBody({
  activeTab,
  latestInteraction,
  latestNote,
  historyEntries,
  draft,
  onDraftChange,
  onPhoneChange,
  onOverviewFieldChange,
  overviewEditing,
  onOverviewEditingChange,
  onViewAllInteractions,
}: {
  activeTab: number;
  latestInteraction: CustomerLatestInteraction;
  latestNote: CustomerLatestNote;
  historyEntries: CustomerHistorySessionEntry[];
  draft: CustomerRecordDraft;
  onDraftChange: (patch: Partial<CustomerRecordDraft>) => void;
  onPhoneChange: (index: number, patch: Partial<CustomerDirectoryPhoneState>) => void;
  onOverviewFieldChange: (index: number, value: string) => void;
  overviewEditing: boolean;
  onOverviewEditingChange: (editing: boolean) => void;
  onViewAllInteractions: () => void;
}) {
  // Controlled (not `defaultValue`) so the layout knows whether each card
  // is open — a COLLAPSED card must stay `h-fit`, or stretch would leave
  // its little closed header row floating over a tall dead gap (v2's own
  // `latestNoteOpen`/`customerOverviewOpen` gates).
  const [latestNoteAccordionValue, setLatestNoteAccordionValue] = useState("latest-note");
  const latestNoteOpen = latestNoteAccordionValue !== "";
  const [customerOverviewAccordionValue, setCustomerOverviewAccordionValue] = useState("customer-overview");
  const customerOverviewOpen = customerOverviewAccordionValue !== "";

  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number | null>(null);

  const activeLabel: CustomerPanelTabLabel = CUSTOMER_PANEL_TABS[activeTab];

  return (
    <div className="flex flex-col h-full min-h-0">
      {activeLabel === "Overview" && (
        <div className="px-4 py-3 flex flex-col gap-4">
          <div className="lyra-card-split-wrap">
            {/* Inline `gap: 1rem` — `.lyra-card-split`'s own class default
                is 24px; v2 overrides to 16px via inline style (not a
                Tailwind `gap-4` class) because the shared rule is plain
                CSS, and a utility class would just tie in specificity. */}
            <div className="lyra-card-split" style={{ gap: "1rem" }}>
              <Accordion
                className={cn(
                  CUSTOMER_INFO_ACCORDION_CLASSNAME,
                  "lyra-card-split-even",
                  customerOverviewOpen && "h-auto"
                )}
                value={customerOverviewAccordionValue}
                onValueChange={setCustomerOverviewAccordionValue}
                items={[
                  {
                    id: "customer-overview",
                    title: "Customer Overview",
                    content: (
                      <div className="flex flex-col gap-3">
                        {draft.overviewFields.map((field, index) => (
                          <div key={field.label} className="flex flex-col gap-3">
                            {overviewEditing ? (
                              // Standard vertical form fields while editing
                              // (v2: label-above-field, not the read-only
                              // row's horizontal layout). Phone #/Email use
                              // the real PhoneInput/EmailInput components —
                              // PhoneInput round-trips through
                              // phoneValueFromDisplay/phoneDisplayFromValue
                              // since `overviewFields` stores plain strings.
                              field.label === "Phone #" ? (
                                <PhoneInput
                                  label={field.label}
                                  value={phoneValueFromDisplay(field.value)}
                                  onChange={(phone) => onOverviewFieldChange(index, phoneDisplayFromValue(phone))}
                                />
                              ) : field.label === "Email" ? (
                                <EmailInput
                                  label={field.label}
                                  value={field.value}
                                  onChange={(value) => onOverviewFieldChange(index, value)}
                                />
                              ) : (
                                <Input
                                  label={field.label}
                                  value={field.value}
                                  onChange={(e) => onOverviewFieldChange(index, e.target.value)}
                                />
                              )
                            ) : (
                              // Read-only row: lyra-ui's own "Label
                              // Horizontal With Separator" composition
                              // (Input.stories.tsx) — real `Label` +
                              // wrapping value span (`break-words min-w-0`
                              // so an unbroken email still wraps instead of
                              // overflowing; v2 fixed exactly this bug).
                              <div className="flex items-start justify-between gap-4">
                                <Label label={field.label} className="flex-shrink-0" />
                                <span className="lyra-body-md text-lyra-fg-secondary break-words min-w-0">
                                  {field.value}
                                </span>
                              </div>
                            )}
                            {!overviewEditing && index < draft.overviewFields.length - 1 && <Separator />}
                          </div>
                        ))}
                        {/* Enter-edit-mode action — one-way trigger into
                            edit mode; the Save/Cancel footer (pinned to the
                            panel bottom by the caller) is the only way back
                            out, exactly like v2. */}
                        {!overviewEditing && (
                          <div className="flex justify-start">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onOverviewEditingChange(true)}
                              className="gap-1.5"
                            >
                              <Pencil className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                              Edit
                            </Button>
                          </div>
                        )}
                      </div>
                    ),
                  },
                ]}
              />

              {/* Latest Interaction stacked above Latest Note — the second
                  (right) child of the split row. */}
              <div className="flex flex-col gap-4 lyra-card-split-even">
                <Accordion
                  className={CUSTOMER_INFO_ACCORDION_CLASSNAME}
                  defaultValue="latest-interaction"
                  items={[
                    {
                      id: "latest-interaction",
                      title: "Latest Interaction",
                      content: (
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">
                              <Clock className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                              {latestInteraction.timeAgo} · {latestInteraction.channel}
                            </span>
                            {/* Status as a quiet dot + label line (v2
                                reverted from a filled pill Badge on
                                request — too visually loud). */}
                            <span className="inline-flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">
                              <Badge shape="circle" dot size="sm" variant={latestInteraction.statusVariant} aria-hidden="true" />
                              {latestInteraction.status}
                            </span>
                          </div>
                          <p className="lyra-body-md text-lyra-fg-default">{latestInteraction.summary}</p>
                          <span className="lyra-body-sm text-lyra-fg-secondary">
                            {latestInteraction.caseId} · Handled by {latestInteraction.handledBy}
                          </span>
                          {/* v2 also renders a ghost "Open Conversation"
                              deep link here — it opens the newest session
                              as a tab in the interaction space OUTSIDE
                              this panel, which doesn't exist in these
                              demos; omitted rather than stubbed. "View All
                              Interactions" stays: it only switches THIS
                              panel to its own Interactions tab. */}
                          <Button variant="outline" size="sm" className="self-start" onClick={onViewAllInteractions}>
                            View All Interactions
                          </Button>
                        </div>
                      ),
                    },
                  ]}
                />

                <Accordion
                  className={cn(CUSTOMER_INFO_ACCORDION_CLASSNAME, latestNoteOpen && "flex-1 h-auto")}
                  value={latestNoteAccordionValue}
                  onValueChange={setLatestNoteAccordionValue}
                  items={[
                    {
                      id: "latest-note",
                      title: "Latest Note",
                      content: (
                        <div className="flex flex-col gap-3">
                          <span className="inline-flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">
                            <FileText className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                            {latestNote.timeAgo}
                          </span>
                          <p className="lyra-body-md text-lyra-fg-default">{latestNote.note}</p>
                          <span className="lyra-body-sm text-lyra-fg-secondary">By {latestNote.author}</span>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeLabel === "Interactions" && (
        <div className="relative flex flex-1 min-h-0 overflow-hidden">
          <CustomerHistoryTabContent
            entries={historyEntries}
            selectedIndex={selectedHistoryIndex}
            onSelectIndex={setSelectedHistoryIndex}
          />
        </div>
      )}

      {activeLabel === "Detail" && (
        /* `draft.overviewFields`, not the synthesized baseline — the Detail
           tab's readonly duplicates (Contact #/Total Balance/Address 1/
           City/State/Zip Code) track whatever the Overview tab's editable
           copy currently holds, including a pending unsaved edit (v2's
           own fix for the two tabs disagreeing). */
        <CustomerDetailTabContent fields={draft.overviewFields} draft={draft} onDraftChange={onDraftChange} />
      )}

      {activeLabel === "Directory" && (
        <CustomerDirectoryTabContent draft={draft} onDraftChange={onDraftChange} onPhoneChange={onPhoneChange} />
      )}

      {/* Tasks / Notes / Accounts / Tickets: intentionally nothing — see
          this component's doc comment. */}
    </div>
  );
}

/* ── Shared per-customer content data ──
   v2 builds these per consumer (`CustomerInformationSidePanel` and
   `CustomerInfoHoverPreview` each memoize their own) — same inputs always
   produce the same values (fully deterministic, see the builders above),
   so each composed consumer below builds its own set with this hook
   instead of threading four extra props around. */
function useCustomerPanelData(person: CustomerInformationPerson) {
  const latestInteraction = useMemo(() => buildLatestInteraction(person.name, person.id), [person.name, person.id]);
  const latestNote = useMemo(() => buildLatestNote(person.name, person.id), [person.name, person.id]);
  const historyEntries = useMemo(() => buildCustomerHistoryEntries(person.name, person.id), [person.name, person.id]);
  return { latestInteraction, latestNote, historyEntries };
}

/* ── Hover preview (v2 `CustomerInfoHoverPreview`) ──
   The exact same content the real panel displays — same `CustomerPanelBody`,
   same tab set, same shared record draft — inside a Popover shown when the
   toggle button is hovered/focused while the panel is CLOSED. A flyout of
   the panel itself, not a hand-built summary: it can never show something
   different from what actually opening the panel would.

   Supplies its own complete chrome (border/background/shadow/rounded,
   matching SidePanel's `bg-lyra-bg-surface-container-subtle`) because the
   render site strips Popover's default framing to a bare frame
   (`bodyPadding={false}` + transparent `className`) — same precedent as
   InteractionNavItem's compact-rail hover preview. Sized to actually fit
   as a flyout: fixed `w-[340px]` (the panel's own default docked width),
   `h-[80vh] max-h-[768px]` (a standard height regardless of which tab is
   active — v2 confirmed live that letting it shrink to the shortest tab
   read as broken), header pinned via PanelHeader's `tabs` slot, only the
   body scrolling. Owns its own `activeTab`, independent of the real
   panel's.

   `onMouseEnter`/`onMouseLeave` re-arm the caller's own open/delayed-close
   handlers — Radix portals the content to `document.body`, outside the
   trigger's DOM subtree, so without this, moving the pointer from the
   button into the popover would fire the button's `onMouseLeave` and close
   the preview before it can be read. */
export function CustomerInfoHoverPreview({
  person,
  recordDraft,
  overviewEditing,
  onOverviewEditingChange,
  onSaved,
  onMouseEnter,
  onMouseLeave,
}: {
  person: CustomerInformationPerson;
  /** The SAME `useCustomerRecordDraft` instance the docked panel uses —
   *  lifted, per v2: the popover's content unmounts on every hover-off,
   *  which would silently wipe a pending edit if it owned its own copy. */
  recordDraft: CustomerRecordDraftApi;
  overviewEditing: boolean;
  onOverviewEditingChange: (editing: boolean) => void;
  /** Fires the caller's success toast after a save — v2's `onAddToast`.
   *  Optional: a consumer with no toast stack of its own just omits it. */
  onSaved?: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const { latestInteraction, latestNote, historyEntries } = useCustomerPanelData(person);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex h-[80vh] max-h-[768px] w-[340px] flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-soft bg-lyra-bg-surface-container-subtle shadow-lg"
    >
      <PanelHeader
        title="Customer Information"
        subhead={person.name}
        tabs={
          <TabList className="px-4" overflowMenu>
            {CUSTOMER_PANEL_TABS.map((label, i) => (
              <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                {label}
              </Tab>
            ))}
          </TabList>
        }
      />
      <div className="flex-1 overflow-y-auto">
        <CustomerPanelBody
          activeTab={activeTab}
          latestInteraction={latestInteraction}
          latestNote={latestNote}
          historyEntries={historyEntries}
          draft={recordDraft.draft}
          onDraftChange={recordDraft.updateDraft}
          onPhoneChange={recordDraft.updatePhone}
          onOverviewFieldChange={recordDraft.updateOverviewField}
          overviewEditing={overviewEditing}
          onOverviewEditingChange={onOverviewEditingChange}
          onViewAllInteractions={() => setActiveTab(CUSTOMER_PANEL_TABS.indexOf("Interactions"))}
        />
      </div>
      {/* Same Save/Cancel footer as the docked panel — per v2, the preview
          has the exact same Customer Overview edit/save capability. */}
      {(recordDraft.isDirty || overviewEditing) && (
        <CustomerRecordSaveFooter
          onSave={() => {
            recordDraft.save();
            onOverviewEditingChange(false);
            onSaved?.();
          }}
          onCancel={() => {
            recordDraft.cancel();
            onOverviewEditingChange(false);
          }}
        />
      )}
    </div>
  );
}

/** Delay before a mouseleave/blur actually closes the hover preview —
 *  long enough to travel from the trigger button into the (portaled)
 *  popover without it closing underfoot. */
export const HOVER_PREVIEW_CLOSE_DELAY_MS = 300;

/* ── Container-width guards (v2's page-level width state machine) ──
   All driven by the CONTAINER's own measured width, not the viewport —
   the caller measures its container (ResizeObserver) and passes the
   number in. The hook owns the panel's drag width + full-screen state and
   applies every v2 guard:
     < 768px  → forced unpinned: floating overlay instead of docked, but
                it STAYS OPEN (v2 no longer force-closes on narrow).
     ≤ 425px  → an open panel automatically goes full-screen (does NOT
                auto-exit when widening back past 425 on its own).
     ≤ 350px  → the full-screen toggle button hides entirely
                (`atMinimalThreshold`); crossing back ABOVE 350 exits
                full-screen (the one crossing that does force an exit).
   Width clamps: rendered width can never exceed the container
   (`clampedWidth`), and the drag ceiling is min(425, containerWidth)
   (`clampedMaxWidth`). `pinned` itself is a constant `true` — v2 keeps
   the setter out entirely (no unpin path); only the narrow guard ever
   overrides it via `effectivePinned`. */
export interface CustomerPanelWidthGuardsApi {
  /** The measured container width the guards were computed from. */
  containerWidth: number;
  /** `pinned` after the <768 narrow guard — false = floating overlay. */
  effectivePinned: boolean;
  fullScreen: boolean;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  /** ≤350px — hide the full-screen toggle entirely. */
  atMinimalThreshold: boolean;
  /** The panel's raw drag width (default 340). */
  width: number;
  setWidth: (width: number) => void;
  /** `width` clamped so the panel never overhangs the container. */
  clampedWidth: number;
  /** Drag ceiling: min(425, containerWidth). */
  clampedMaxWidth: number;
}

export function useCustomerPanelWidthGuards(containerWidth: number, open: boolean): CustomerPanelWidthGuardsApi {
  /* Open + pinned is the caller's business; pinned has no unpin path (v2
     keeps the setter out entirely — only the narrow guard below ever
     overrides it). */
  const pinned = true;
  const [width, setWidth] = useState(340);
  const [fullScreen, setFullScreen] = useState(false);

  /* Container-width pin guard — forced unpinned (floating overlay) below
     768px of the container's own width; stays OPEN. */
  const isNarrow = containerWidth < 768;
  const effectivePinned = isNarrow ? false : pinned;

  /* Auto full-screen at ≤425 (the panel's own max width) — only forces ON;
     widening back past 425 does not auto-exit. */
  const atMaxWidthBreakpoint = containerWidth <= 425;
  useEffect(() => {
    if (atMaxWidthBreakpoint && open) setFullScreen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atMaxWidthBreakpoint, open]);

  /* ≤350: hide the full-screen toggle; crossing back above 350 exits
     full-screen (the agent had no button to exit with while under it). */
  const atMinimalThreshold = containerWidth <= 350;
  useEffect(() => {
    if (!atMinimalThreshold) setFullScreen(false);
  }, [atMinimalThreshold]);

  /* Never render wider than the container, docked or full-screen. */
  const clampedWidth = Math.max(0, Math.min(width, containerWidth));
  const clampedMaxWidth = Math.max(0, Math.min(425, containerWidth));

  return {
    containerWidth,
    effectivePinned,
    fullScreen,
    setFullScreen,
    atMinimalThreshold,
    width,
    setWidth,
    clampedWidth,
    clampedMaxWidth,
  };
}

/* ── Toggle button + hover preview (v2's record-header trigger wiring) ──
   The "Customer Information" outline button (IdCard glyph) that opens/
   closes the docked panel, bundled with the closed-panel hover-preview
   Popover: opens immediately on the button's mouseenter/focus, closes on
   a short-delay mouseleave/blur; the preview's own mouseenter/mouseleave
   re-arm the same handlers (see `CustomerInfoHoverPreview`'s doc comment)
   so traveling into the portaled popover keeps it open. Never shows while
   the real panel is open — hovering a button that sits next to the actual
   panel would just double it.

   The caller stays responsible for v2's HIDE rule — the button is hidden
   entirely while the panel is docked AND open (redundant next to a
   visibly open panel): render this conditionally on
   `!(guards.effectivePinned && open)`.

   `iconOnly` — v2's record header collapses this button to icon-only
   below 768px of the HEADER's own measured width (`recordHeaderRef`, not
   the viewport); the caller measures and passes the flag. */
export function CustomerInformationPanelToggle({
  person,
  open,
  onToggle,
  iconOnly = false,
  className,
  recordDraft,
  overviewEditing,
  onOverviewEditingChange,
  onSaved,
}: {
  person: CustomerInformationPerson;
  /** Whether the REAL panel is open — drives the selected treatment,
   *  aria state, and the "no preview while open" guard. */
  open: boolean;
  onToggle: () => void;
  iconOnly?: boolean;
  className?: string;
  /** Same lifted draft/edit state the docked panel uses — see
   *  `CustomerInfoHoverPreview`'s props. */
  recordDraft: CustomerRecordDraftApi;
  overviewEditing: boolean;
  onOverviewEditingChange: (editing: boolean) => void;
  onSaved?: () => void;
}) {
  /* ── Hover-preview open/close (v2's trigger wiring) ── */
  const [previewOpen, setPreviewOpen] = useState(false);
  const previewCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearPreviewCloseTimer = () => {
    if (previewCloseTimer.current !== null) {
      clearTimeout(previewCloseTimer.current);
      previewCloseTimer.current = null;
    }
  };
  const openPreview = () => {
    if (open) return;
    clearPreviewCloseTimer();
    setPreviewOpen(true);
  };
  const scheduleClosePreview = () => {
    clearPreviewCloseTimer();
    previewCloseTimer.current = setTimeout(() => setPreviewOpen(false), HOVER_PREVIEW_CLOSE_DELAY_MS);
  };
  useEffect(() => clearPreviewCloseTimer, []);
  // Opening the real panel dismisses any showing preview instantly.
  useEffect(() => {
    if (open) {
      clearPreviewCloseTimer();
      setPreviewOpen(false);
    }
  }, [open]);

  return (
    /* `asAnchor` — the button's own click must keep toggling the real
       panel; wrapping it as a Radix Trigger would ALSO toggle the
       popover on every click (Radix composes its own click handler
       even in controlled mode). The hover handlers below drive
       `open` explicitly instead. */
    <Popover
      asAnchor
      open={previewOpen && !open}
      onOpenChange={(o) => {
        if (!o) {
          clearPreviewCloseTimer();
          setPreviewOpen(false);
        }
      }}
      placement="bottom"
      align="end"
      showArrow={false}
      bodyPadding={false}
      /* Strip Popover's default chrome to a bare frame — the preview
         card supplies its own complete border/background/shadow
         (v2 passes exactly this className). */
      className="border-0 bg-transparent p-0 shadow-none"
      /* v2's guard: the preview's own TabList overflow menu ("N
         More") portals into its own `[data-radix-popper-content-
         wrapper]` OUTSIDE this popover's subtree — without this,
         clicking an overflow tab would count as an outside
         interaction and dismiss the whole preview. */
      onInteractOutside={(event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("[data-radix-popper-content-wrapper]")) {
          event.preventDefault();
        }
      }}
      content={
        <CustomerInfoHoverPreview
          person={person}
          recordDraft={recordDraft}
          overviewEditing={overviewEditing}
          onOverviewEditingChange={onOverviewEditingChange}
          onSaved={onSaved}
          onMouseEnter={openPreview}
          onMouseLeave={scheduleClosePreview}
        />
      }
    >
      <Button
        variant="outline"
        size="md"
        className={cn(
          "shrink-0",
          iconOnly && "w-8 gap-0 px-0",
          open && PANEL_BUTTON_SELECTED_CLASS,
          className
        )}
        aria-pressed={open}
        aria-label={open ? "Close Customer Information" : "Open Customer Information"}
        onClick={onToggle}
        onMouseEnter={openPreview}
        onFocus={openPreview}
        onMouseLeave={scheduleClosePreview}
        onBlur={scheduleClosePreview}
      >
        <IdCard className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        {!iconOnly && <span>Customer Information</span>}
      </Button>
    </Popover>
  );
}

/* ── Composed docked panel (v2 `CustomerInformationSidePanel`) ──
   The full right-docked `SidePanel` wiring behind one small prop surface:
   `side="right"`, header tab strip (`headerTabs` TabList, Copilot omitted
   — hidden everywhere in v2 currently), full-screen toggle + a
   `PanelRightClose` close button as `headerActions` (both `PanelPinButton
   pinned={false}` — momentary actions, not toggles with a persistent
   highlight; there is NO unpin path, so `onPinToggle` stays unset and
   `SidePanel`'s built-in Pin button never renders), the Save/Cancel
   footer gate, and the shared body. `activeTab` is owned internally —
   no consumer lifts it. Width/full-screen/pin state comes in via
   `guards` (`CustomerPanelWidthGuardsApi`), computed by the caller
   from its own measured container. Full-screen renders as an unpinned
   overlay sized to the container's own full width, resize handle hidden
   (`resizable={false}`); closing the panel also resets full-screen. */
export function CustomerInformationDockedPanel({
  person,
  open,
  onClose,
  guards,
  recordDraft,
  overviewEditing,
  onOverviewEditingChange,
  onSaved,
}: {
  person: CustomerInformationPerson;
  open: boolean;
  onClose: () => void;
  guards: CustomerPanelWidthGuardsApi;
  /** Lifted draft + edit flag shared with the toggle's hover preview (v2
   *  lifts both to the page for exactly this): an edit started in one
   *  shows in the other, and hovering off the preview (unmounting its
   *  Popover content) never wipes a pending edit. */
  recordDraft: CustomerRecordDraftApi;
  overviewEditing: boolean;
  onOverviewEditingChange: (editing: boolean) => void;
  /** Fires the caller's success toast after a save — v2's `onAddToast`.
   *  Optional: a consumer with no toast stack of its own just omits it. */
  onSaved?: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const { latestInteraction, latestNote, historyEntries } = useCustomerPanelData(person);

  const handleClose = () => {
    onClose();
    guards.setFullScreen(false);
  };

  const handleDraftSave = () => {
    recordDraft.save();
    onOverviewEditingChange(false);
    onSaved?.();
  };
  const handleDraftCancel = () => {
    recordDraft.cancel();
    onOverviewEditingChange(false);
  };

  return (
    <CustomerInformationPanel
      side="right"
      open={open}
      /* Full-screen always renders unpinned — an overlay across the whole
         container, not a docked column pushing content over. */
      pinned={guards.fullScreen ? false : guards.effectivePinned}
      person={person}
      width={guards.fullScreen ? guards.containerWidth : guards.clampedWidth}
      resizable={!guards.fullScreen}
      minWidth={325}
      maxWidth={guards.clampedMaxWidth}
      onWidthChange={guards.setWidth}
      headerTabs={
        <TabList className="px-4" overflowMenu>
          {CUSTOMER_PANEL_TABS.map((label, i) => (
            <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
              {label}
            </Tab>
          ))}
        </TabList>
      }
      headerActions={
        <>
          {!guards.atMinimalThreshold && (
            <PanelPinButton
              pinned={false}
              onToggle={() => guards.setFullScreen((v) => !v)}
              icon={
                guards.fullScreen ? (
                  <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                )
              }
              pinnedLabel={guards.fullScreen ? "Exit Full Screen" : "Full Screen"}
              unpinnedLabel={guards.fullScreen ? "Exit Full Screen" : "Full Screen"}
            />
          )}
          <PanelPinButton
            pinned={false}
            onToggle={handleClose}
            icon={<PanelRightClose className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
            pinnedLabel="Close Customer Information"
            unpinnedLabel="Close Customer Information"
          />
        </>
      }
      /* Save/Cancel footer — appears the instant the Customer Overview
         Edit button is clicked OR any draft field changes, and stays up
         regardless of which tab is active until Save/Cancel resolves it
         (v2's own `recordDraft.isDirty || overviewEditing` gate on the
         SidePanel `footer` slot). */
      footer={
        recordDraft.isDirty || overviewEditing ? (
          <CustomerRecordSaveFooter onSave={handleDraftSave} onCancel={handleDraftCancel} />
        ) : undefined
      }
    >
      <CustomerPanelBody
        activeTab={activeTab}
        latestInteraction={latestInteraction}
        latestNote={latestNote}
        historyEntries={historyEntries}
        draft={recordDraft.draft}
        onDraftChange={recordDraft.updateDraft}
        onPhoneChange={recordDraft.updatePhone}
        onOverviewFieldChange={recordDraft.updateOverviewField}
        overviewEditing={overviewEditing}
        onOverviewEditingChange={onOverviewEditingChange}
        onViewAllInteractions={() => setActiveTab(CUSTOMER_PANEL_TABS.indexOf("Interactions"))}
      />
    </CustomerInformationPanel>
  );
}
