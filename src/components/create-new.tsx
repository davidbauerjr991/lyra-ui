import * as React from "react";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Plus, X, ChevronLeft, ChevronRight, Search, Check, Minus } from "lucide-react";
import { cn } from "../lib/utils";
import { Menu } from "./menu";
import { Input } from "./input";
import { Popover, PopoverClose } from "./popover";
import { Tooltip } from "./tooltip";
import { Select, type SelectOption } from "./select";
import { RadioButtonGroup } from "./radio-button-group";
import { Button } from "./button";
import { TableFooter } from "./table";
import { FavoriteButton } from "./favorite-button";
import { ListItem } from "./list-item";
import { Badge, type BadgeCircleVariant } from "./badge";
import { PhoneInput, PHONE_COUNTRIES, isPhoneNumberComplete, type PhoneValue } from "./phone-input";
import type { ChannelType } from "./channel-row";

/* ── Types ── */

export interface CreateNewItem {
  /** Channel label */
  label: string;
  /** Channel icon */
  icon: React.ReactNode;
  /** Called when the channel item is clicked */
  onClick?: () => void;
}

/** An agent's current availability, shown as a small corner badge on their
 *  leading avatar/category icon in the Outbound picker's "Select Agent"
 *  list (see `AgentPresenceBadge`/`ContactRow` below). Distinct from
 *  `AgentProfile`'s own `AgentStatus` (available/busy/away/offline) — that
 *  type is the *current, logged-in* agent's own status control; this is
 *  read-only presence for *other* agents being considered as an outbound
 *  recipient, which also needs an "in a call" state `AgentProfile` has no
 *  use for (an agent never sets their own status to "in a call" — that's
 *  an automatic, observed state, not a status code they pick). */
export type AgentPresenceStatus = "available" | "busy" | "away" | "offline" | "in-call";

// `variant` values are deliberately the same 5 `BadgeCircleVariant` roles
// `AgentProfile`'s own status dots already use (agent-profile.tsx) — no
// new colors invented for this. `icon` mirrors `AgentProfile`'s own
// `statusConfig`/`StatusIcon` pattern (agent-profile.tsx lines 166-219):
// a glyph rendered as the Badge's own content (NOT the `dot` prop) at
// `size="sm"` with `px-0`, so the circle has the same 16px diameter as a
// real status badge but with an icon centered inside it. Statuses with no
// natural icon (e.g. `away`) omit `icon` and fall back to a plain white
// dot as the Badge's content instead — exactly how `AgentProfile` itself
// handles `working` (no icon defined for it either).
const AGENT_PRESENCE_CONFIG: Record<
  AgentPresenceStatus,
  { label: string; variant: BadgeCircleVariant; icon?: typeof Check }
> = {
  available: { label: "Available", variant: "success", icon: Check },
  busy:      { label: "Busy",      variant: "critical", icon: Minus },
  away:      { label: "Away",      variant: "warning" },
  offline:   { label: "Offline",   variant: "neutral", icon: X },
  "in-call": { label: "In a Call", variant: "info", icon: Check },
};

// Per explicit follow-up request, this replaces the old `AgentPresenceChip`
// (a `Tag` pill rendered as its own line under the name) with a small
// circular `Badge` anchored to the bottom-right corner of the leading
// avatar/category icon instead — the exact position/sizing/border
// treatment `AgentProfile`'s own status dot already uses on a real avatar
// (agent-profile.tsx's `StatusIcon`: `absolute bottom-[-2px] right-[-2px]
// px-0 border border-lyra-bg-surface-base` on a `size="sm"` circle badge,
// inside a `relative` avatar wrapper) — reused verbatim rather than
// inventing a new position/size for this second "status on an avatar"
// case. Per follow-up feedback that the badges "don't look like the agent
// status badges" (they need icons in them), this now mirrors
// `StatusIcon`'s own content-mode rendering exactly: an icon glyph as the
// Badge's children when `AGENT_PRESENCE_CONFIG` defines one, otherwise a
// plain white dot as children — never the `dot` prop, which shrinks the
// circle to 8px with no room for icon content. Rendered by `ContactRow`
// itself now (not this row's own JSX), positioned relative to whatever
// `contact.categoryIcon` renders — see that render site's own comment.
function AgentPresenceBadge({ status }: { status: AgentPresenceStatus }) {
  const { label, variant, icon: StatusGlyph } = AGENT_PRESENCE_CONFIG[status];
  return (
    <Badge
      shape="circle"
      variant={variant}
      size="sm"
      aria-label={label}
      className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"
    >
      {StatusGlyph ? (
        <StatusGlyph className="h-2 w-2" strokeWidth={3} aria-hidden="true" />
      ) : (
        <span className="block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
      )}
    </Badge>
  );
}

export interface CreateNewContact {
  /** Unique id */
  id: string;
  /** Display name */
  name: string;
  /** Short avatar label — e.g. two initials */
  initials: string;
  /** Secondary line below the name — e.g. a customer/agent ID. Ignored when
   *  `queueCount`/`waitTimeSeconds` are set (skill records), since those
   *  render a queue/wait summary in this same spot instead. */
  subtitle?: string;
  /** Tailwind classes for the avatar circle's background + text color */
  avatarClassName?: string;
  /** Renders as a small colored badge in the bottom-right corner of
   *  `categoryIcon` (see `AgentPresenceBadge`) — set on agent and skill
   *  records; left unset for customers/teams, which have no individual
   *  presence concept. Has no effect on a contact with no `categoryIcon`
   *  set, since there's no avatar/icon for the badge to anchor to. */
  status?: AgentPresenceStatus;
  /** Skill records only: number of contacts currently waiting in this
   *  skill's queue. Paired with `waitTimeSeconds` to render "Queue: {N}
   *  Wait Time: {M}m {S}s" in place of `subtitle`. */
  queueCount?: number;
  /** Skill records only: current estimated wait time, in seconds — see
   *  `queueCount`. */
  waitTimeSeconds?: number;
  /** Optional leading element shown to the left of the title/subtitle
   *  column in `ContactRow` — e.g. a headset for an agent record, a
   *  single person for a customer. Distinct from `CreateNewCategory.icon`
   *  (that one labels the CATEGORY list itself, one icon per category);
   *  this one labels each individual CONTACT row so a mixed list — e.g.
   *  the Outbound picker's "All"/favorites group, which can show agents,
   *  customers, teams, and skills side by side with no group heading
   *  between them — still lets an agent tell what kind of record each row
   *  is at a glance. Per explicit request, matches `ListItem`'s own
   *  "With leading icon" story treatment (ListItem.stories.tsx) rather
   *  than a bare icon: pass a fully-built node (typically the icon
   *  wrapped in its own colored circle — same
   *  `<div className="h-9 w-9 rounded-full ... flex items-center
   *  justify-center ...">` shell every example in that story hand-builds),
   *  not just the raw glyph — `ContactRow` renders it as-is, with no
   *  sizing/color logic of its own. Omit for the plain, icon-less row
   *  every existing consumer already renders. */
  categoryIcon?: React.ReactNode;
}

/** "Queue: {N}   Wait Time: {M}m {S}s" — the skill-row secondary text. */
function formatQueueText(queueCount: number, waitTimeSeconds: number): string {
  const minutes = Math.floor(waitTimeSeconds / 60);
  const seconds = waitTimeSeconds % 60;
  return `Queue: ${queueCount}   Wait Time: ${minutes}m ${seconds}s`;
}

export interface CreateNewCategory {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Customers" */
  label: string;
  /** Leading icon shown on the category list */
  icon: React.ReactNode;
  /** Contacts/agents/teams/skills shown after picking this category */
  contacts: CreateNewContact[];
  /** Placeholder for the search field on this category's screen
   *  (defaults to "Search {label.toLowerCase()}") */
  searchPlaceholder?: string;
}

export interface CreateNewChannel {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Call" */
  label: string;
  /** Leading icon */
  icon: React.ReactNode;
}

export interface CreateNewSelection {
  category: CreateNewCategory;
  contact: CreateNewContact;
  channel: CreateNewChannel;
}

/* ── Outbound flow types (screen 1: Outbound picker → screen 2: call
   setup). Fully independent of `items` and `categories`/`channels` above —
   see the `outbound` prop below. ── */

export interface CreateNewOutboundContact extends CreateNewContact {
  /** Which channels this contact can be reached on — filters both the
   *  per-row hover flyout and the detail screen's "Select Channel" options
   *  down to what's actually supported. */
  channels: ChannelType[];
  /** The addresses/numbers/handles currently in use across every live
   *  interaction this contact has open on each channel, if any (e.g. `{
   *  sms: ["+14565559981", "+14565550147"] }` for two simultaneous SMS
   *  threads on different numbers). The channel itself stays selectable in
   *  "Select Channel" (the agent can still review/switch to one) — only the
   *  matching option(s) in the detail screen's second field ("Select
   *  Phone" / "Select Email Address" / "Select WhatsApp Handle") are
   *  disabled, since starting another interaction on one of those exact
   *  addresses would just duplicate the one already running. Other
   *  addresses/numbers for the same channel (e.g. a third, unused outbound
   *  phone line) stay selectable. */
  openChannelAddresses?: Partial<Record<ChannelType, string[]>>;
  /** Which channel *types* this contact currently has at least one live
   *  interaction open on, regardless of whether that channel has a
   *  recorded address at all — e.g. `["voice", "email"]`. Deliberately
   *  separate from `openChannelAddresses` above: that map only ever
   *  contains channels whose specific address is known (some voice
   *  channels genuinely have none on record, e.g. a "Redial" from contact
   *  history with no stored number — see `TrackedChannel.value`'s own
   *  callers), so it can't answer "is this contact in a voice call at
   *  all" on its own, only "is *this exact number* in use." Used to
   *  disable "Select Channel"'s Voice option once a voice channel is
   *  already open for this contact (`isChannelBlockedForContact` below) —
   *  unlike SMS/WhatsApp/Email, where a second address is a genuinely
   *  separate conversation, Voice has no per-address concept: an agent
   *  can't have two simultaneous calls with the same customer regardless
   *  of whether either one has a number on record. */
  openChannelTypes?: ChannelType[];
  /** This contact's own primary phone number — e.g. the "Home" entry a
   *  customer-info/directory surface shows for them — as opposed to
   *  `phoneOptions` (`CreateNewOutboundConfig`/`OutboundAddButtonProps`),
   *  which is a flat, contact-agnostic list (originally shaped for the
   *  agent's own outbound caller-ID lines). When set, "Select Phone" (the
   *  detail form's Voice/SMS address field) lists this first and defaults
   *  to it instead of falling back to `phoneOptions[0]` — a real customer
   *  should default to *their own* number, not an arbitrary shared one.
   *  Optional: agent/team/skill records with no such directory concept
   *  keep defaulting to `phoneOptions[0]` exactly as before by simply
   *  omitting this. See `resolveOutboundDetailField`. */
  primaryPhone?: { value: string; label: string };
  /** This contact's own email address — purely a search-matching field
   *  today (Favorites' "Enter phone, email or search term" search checks
   *  it, see `contactMatchesSearch`), not yet wired into "Select Channel"/
   *  "Select Email Address" the way `primaryPhone` is. Optional: records
   *  with no email on file (or no email concept at all, e.g. a team) just
   *  never match a search on this field. */
  email?: string;
  /** Per explicit request: skips the "detail" screen (Select Channel/
   *  Select Phone/Outbound Skill/Start Interaction) entirely for this
   *  contact — picking any channel (row click, per-row hover flyout, or
   *  the header's own "Select Channel" field when reached via
   *  `OutboundAddButton`'s `initialChannel`) calls `onStartCall`
   *  immediately with resolved defaults (first available phone/address
   *  for that channel, first `skillOptions` entry) instead of pushing the
   *  form. Meant for records with no real per-contact address to choose
   *  (agents, skill queues) — a customer, which genuinely can have several
   *  numbers/addresses on file worth picking between, should leave this
   *  unset and keep the full detail screen. */
  quickLaunch?: boolean;
}

export interface CreateNewOutboundGroup {
  /** Unique id — also the value used by the group Select. */
  id: string;
  /** Select option label, e.g. "Agents". */
  label: string;
  /** Optional leading icon shown to the left of `label` in the "Choose
   *  group" dropdown (`Select`'s own `SelectOption.icon`, select.tsx) —
   *  e.g. a person glyph for "Customers", a headset for "Agents". Omit for
   *  the plain, icon-less row every existing consumer already renders. */
  icon?: React.ReactNode;
  /** "contacts" (default when `contacts` is set) shows search + a paginated
   *  contact list. "dialpad" shows the phone quick-dial field instead of a
   *  list. "empty" always shows `emptyMessage`, with no favoriting concept.
   *  "favorites" shows whichever contacts (from *any* group) the user has
   *  starred via the per-row favorite button — `contacts` is ignored for
   *  this kind; `emptyMessage` still applies until at least one is starred. */
  kind?: "contacts" | "dialpad" | "empty" | "favorites";
  contacts?: CreateNewOutboundContact[];
  emptyMessage?: string;
  /**
   * Optional secondary picker rendered directly below the "Choose group"
   * Select, but only while this group is the active one — e.g. the Teams
   * group's own "Choose team" dropdown (per explicit request: picking a
   * team should then let the agent search that team's own members). This
   * component has no concept of "team" or "member" — it only renders the
   * control and reports the pick via `onChange`. The consumer owns the
   * real grouping (team → member) and is expected to swap this group's
   * own `contacts` for the picked value's real members in response
   * (typically by holding the picked value in its own state and
   * recomputing the `outbound` config passed in) — `contacts`,
   * `emptyMessage`, and the existing search box all keep working exactly
   * as they already do for every other group once that swap happens, so
   * no new filtering logic is needed here to make search scope to
   * whatever's currently selected.
   */
  subFilter?: {
    ariaLabel: string;
    placeholder?: string;
    /** Controlled value — empty string means nothing picked yet. */
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
  };
}

export interface CreateNewChannelOption {
  /** Must line up with the values used in CreateNewOutboundContact.channels */
  id: ChannelType;
  /** Label in the per-row hover flyout, e.g. "Call" */
  label: string;
  /** Label in the detail screen's "Select Channel" dropdown, e.g. "Voice"
   *  (defaults to `label` when omitted). */
  selectLabel?: string;
  icon: React.ReactNode;
}

export interface CreateNewOutboundConfig {
  /** Screen 1 header (default: "New Outbound") */
  outboundTitle?: string;
  /** Dropdown options replacing the old category icon-menu — e.g.
   *  Favorites / Agents / Teams / Skills / Customers / Dial Pad. */
  groups: CreateNewOutboundGroup[];
  /** Which group is selected when screen 1 is first reached (defaults to
   *  the first entry in `groups`). */
  defaultGroupId?: string;
  /**
   * Visible label for the search field above the group `Select` — one
   * string for the whole outbound flow (default: "Search..."), NOT
   * per-group. This used to be a per-`CreateNewOutboundGroup` PLACEHOLDER
   * (so switching the filter changed it to e.g. "Search Agents"), removed
   * per explicit request/confirmed UX bug: `contactMatchesSearch` matches
   * name, subtitle, phone, AND email the exact same way regardless of
   * which group is selected — the filter only narrows which contacts that
   * search runs against, it doesn't change what kind of query is accepted.
   * Text that changed per group implied the opposite (that switching to
   * "Agents" somehow made the box name-only, or accepted different input
   * than "All" did), which wasn't true and was confusing. One label,
   * always accurate regardless of the selected filter.
   *
   * Rendered as a real `<label>` above the field (`Input`'s own `label`
   * prop), not placeholder text, per explicit follow-up request — a
   * placeholder disappears the moment the user starts typing, so a real
   * label is both more ADA-compliant and keeps the field's purpose visible
   * while in use. Field renamed from `searchPlaceholder` to `searchLabel`
   * to match.
   */
  searchLabel?: string;
  /** Call/Email/SMS/WhatsApp definitions — drives both the per-row hover
   *  flyout and the detail screen's "Select Channel" dropdown. */
  channelOptions: CreateNewChannelOption[];
  /** Options for the detail screen's "Select Phone" dropdown */
  phoneOptions: { value: string; label: string }[];
  /** Options for the detail screen's "Outbound Skill" dropdown */
  skillOptions: { value: string; label: string }[];
  /** Fired when a number is submitted from a "dialpad"-kind group (Enter key) */
  onQuickDial?: (phoneNumber: string) => void;
  /** Fired when "Start Interaction" is pressed on the detail screen */
  onStartCall?: (selection: {
    contact: CreateNewOutboundContact;
    channel: ChannelType;
    phone: string;
    skillId: string;
  }) => void;
  /** Contacts per page in the paginated list (default: 10) */
  pageSize?: number;
  /** Imperatively opens the popover directly to the call-setup ("detail")
   *  screen for a specific contact+channel, bypassing this component's own
   *  group/contact list — e.g. `InteractionNavItem`'s own "Add Outbound"
   *  button (`OutboundAddButton` below) already knows which contact and
   *  channel to start, since the contact already has a live interaction
   *  card; re-picking the same contact from this popover's own list would
   *  be redundant. The contact is looked up across every group's
   *  `contacts` (same lookup "Favorites" uses), so the caller doesn't need
   *  to know which group it lives in. Compared by reference each render —
   *  set a new `{ contactId, channel }` object each time you want this to
   *  fire, and clear it back to `null` (see `onLaunchRequestHandled` below)
   *  once handled, so a later unrelated re-render doesn't replay it. */
  launchRequest?: { contactId: string; channel: ChannelType } | null;
  /** Fired immediately after `launchRequest` has been acted on. This
   *  component can't clear its own prop, so the consumer should use this to
   *  reset whatever state produced it back to `null`. */
  onLaunchRequestHandled?: () => void;
  /**
   * Temporary escape hatch, per explicit request: suppresses the full
   * unfiltered browse list for every "contacts"-kind group (Agents/Teams/
   * Skills/Customers, etc.) when there's no search text yet — instead of
   * every contact in that group, the idle state shows only that group's
   * OWN favorited contacts (mirroring what a "favorites"-kind group
   * already does, just scoped to one group instead of across all of
   * them). The MOMENT a search query is typed, the real, full match
   * list (favorited or not) takes over as normal — this only ever
   * affects the idle/no-search state, never search results. Does NOT
   * affect "dialpad" or "empty" kind groups, which have no contact list
   * to begin with, and does nothing extra to "favorites"-kind groups,
   * which already behave this way unconditionally. Default `false` —
   * every existing consumer (including the Storybook stories
   * demonstrating the full unfiltered list) is unaffected; opt in only
   * where showing every contact by default isn't wanted yet. Remove this
   * prop once every group's full browse list is wanted by default
   * instead of leaving it permanently toggled on.
   */
  hideContactList?: boolean;
}

export interface CreateNewProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Flat list of channels shown directly under the header (default mode).
   *  Ignored when `categories` is provided. */
  items?: CreateNewItem[];
  /** Enables the drill-down flow: a phone-number field + category list
   *  (screen 1) → search + contact list for the chosen category (screen 2)
   *  → channel picker for the chosen contact (screen 3). Content is swapped
   *  in place with a back button, rather than opening a submenu flyout —
   *  see CONTRIBUTING.md; Radix has no dedicated primitive for this, it's
   *  just local view-stack state inside the one Popover.Content. */
  categories?: CreateNewCategory[];
  /** Channel options shown on the final screen once a contact is picked.
   *  Required for the drill-down flow (`categories`); has no effect
   *  otherwise. */
  channels?: CreateNewChannel[];
  /** Fired when a channel is picked for a contact on the final drill-down screen */
  onOutbound?: (selection: CreateNewSelection) => void;
  /** Enables the outbound flow: an Outbound picker (group dropdown + search
   *  + paginated contact list, with a per-row hover flyout for channel
   *  choice) → a call-setup screen. Fully independent of `items` and
   *  `categories`/`channels` above — when set, this takes over as screen 1
   *  instead of the plain phone-field + category root. */
  outbound?: CreateNewOutboundConfig;
  /** Fired when a number is submitted from the screen-1 phone field (Enter key) */
  onQuickDial?: (phoneNumber: string) => void;
  /** Placeholder for the screen-1 phone number field. Leave unset to use
   *  PhoneInput's own per-country example (e.g. "(555) 555-5555" for the
   *  US, "76 123 45 67" for Switzerland) — only set this to replace that
   *  with fixed text across every country. */
  phoneFieldPlaceholder?: string;
  /** Popover header title (default: "New Outbound") */
  title?: string;
  /**
   * Expanded mode: show a full-width secondary button with the title text
   * instead of the compact icon-only trigger. Used when the nav rail is open.
   */
  expanded?: boolean;
}

/* ── Drill-down view stack ── */

type Screen =
  | { kind: "root" }
  | { kind: "category"; categoryId: string }
  | { kind: "channels"; categoryId: string; contactId: string }
  // Outbound flow only, screen 1 — the group-row list (Favorites/Agents/
  // Skills/etc. + Dial Pad, see the `CreateNewOutboundGroup` rows further
  // down) with no specific group drilled into yet. Per explicit request,
  // picking a row now PUSHES a real `"group"` screen (below) onto the
  // stack — a genuine back-button transition, like `"channels"` above —
  // rather than swapping this same screen's content in place the way the
  // old `Select` combobox did.
  | { kind: "outbound-menu" }
  // Outbound flow only, screen 2 — one specific group's own contact list
  // (or its dialpad/empty-placeholder body), reached by pushing this from
  // `"outbound-menu"`. Never screen 1 anymore (see that kind's own doc
  // comment) — always has a `"outbound-menu"` frame beneath it to pop
  // back to.
  | { kind: "group"; groupId: string }
  | { kind: "detail"; groupId: string; contactId: string; channel: ChannelType };

/* ── Contact row (internal) ──
   Purpose-built rather than routed through Menu: Menu's icon slot is sized
   for small (h-4/h-5) glyphs (see CONTRIBUTING.md "Icons" + existing
   icon+description usage in Menu.stories), not avatar-sized circles with a
   two-line name/subtitle — the same reason ConnectedAppsPanel's AppRow
   doesn't route through Menu either. Kept visually consistent with Menu's
   row states (hover/active/focus, rounded-lyra-sm, trailing chevron). */
function ContactRow({
  contact,
  onClick,
  highlighted,
  favorited,
  onToggleFavorite,
}: {
  contact: CreateNewContact;
  onClick: () => void;
  /** Forces the hover background on even when the cursor isn't actually
   *  over this row — used by OutboundContactRow so the row stays visibly
   *  "selected" while its channel flyout (which sits to the right, off the
   *  row itself) is open. Same convention as Menu's own submenu items:
   *  `(item.active || (hasSubmenu && submenuOpen)) && "bg-lyra-state-hover"`. */
  highlighted?: boolean;
  /** Outbound-flow only. Omit both this and `onToggleFavorite` to hide the
   *  favorite button entirely (e.g. the generic drill-down flow, which has
   *  no Favorites concept). */
  favorited?: boolean;
  onToggleFavorite?: () => void;
}) {
  return (
    // A <div role="button"> rather than a real <button>: FavoriteButton
    // below renders a native <button>, and nesting <button> inside <button>
    // is invalid HTML with unreliable click-bubbling across browsers. This
    // keeps the same click/keyboard/focus-visible behavior as a real button
    // while allowing that legitimate nested control. `group/row` is what
    // FavoriteButton hooks into to reveal itself only on hover/focus of
    // this row (see favorite-button.tsx).
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group/row flex w-full cursor-pointer items-center gap-3 rounded-lyra-sm px-3 py-2.5 text-left transition-colors",
        "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        "focus:outline-none focus-visible:bg-lyra-state-hover",
        highlighted && "bg-lyra-state-hover"
      )}
    >
      {/* Optional leading category icon (`CreateNewContact.categoryIcon`)
          — per explicit request, matches `ListItem`'s own "With leading
          icon" story treatment (ListItem.stories.tsx) rather than sitting
          inline right before the name: a self-contained node (the
          consumer builds its own colored circle shell, same as every
          `leading` example in that story) rendered as its own flex item to
          the LEFT of the whole title/subtitle column, not squeezed onto
          the title's own line. Purely additive — a contact that doesn't
          set one renders exactly as before, no empty leading slot
          reserving space. */}
      {contact.categoryIcon && (
        // `relative` — per explicit follow-up request, this is now where
        // `AgentPresenceBadge` anchors itself (`absolute bottom-[-2px]
        // right-[-2px]`, see that component's own doc comment), replacing
        // the old status CHIP that used to render as its own line below
        // the name. Purely additive when `contact.status` is unset — the
        // badge itself doesn't render at all in that case, same as the
        // chip it replaced didn't.
        <span aria-hidden="true" className="relative flex-shrink-0">
          {contact.categoryIcon}
          {contact.status && <AgentPresenceBadge status={contact.status} />}
        </span>
      )}
      {(() => {
        const hasQueueText = contact.queueCount != null && contact.waitTimeSeconds != null;
        const secondaryText = hasQueueText
          ? formatQueueText(contact.queueCount!, contact.waitTimeSeconds!)
          : contact.subtitle;
        return (
          <span className="min-w-0 flex-1">
            <span className="block truncate lyra-body-md text-lyra-fg-default">{contact.name}</span>
            {/* No more status chip on this line — moved onto the leading
                icon itself, see that render site's own comment above. This
                secondary line is now just `secondaryText` (subtitle or the
                skill queue/wait summary), so it only renders at all when
                there's actually text to show — `contact.status` alone no
                longer keeps an otherwise-empty line/wrapper around. The
                two kinds of secondary text no longer need their own
                separate wrapper elements either (that split existed to
                sit the removed chip beside one and above the other) — one
                shared `<span>` covers both; `max-w-full` (vs. plain
                `min-w-0`) only mattered for lining up against the chip
                that's no longer there, so it's dropped too. */}
            {secondaryText && (
              <span className="block min-w-0 truncate lyra-body-sm text-lyra-fg-secondary">{secondaryText}</span>
            )}
          </span>
        );
      })()}
      {onToggleFavorite && (
        <FavoriteButton favorited={!!favorited} onClick={onToggleFavorite} label={contact.name} placement="left" />
      )}
      <ChevronRight className="h-4 w-4 flex-shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

/* ── Outbound contact row (internal) ──
   Wraps ContactRow with a hover-triggered channel flyout (Call/Email/SMS/
   WhatsApp), filtered to whichever channels this contact actually
   supports. Composes the shared Popover for the flyout's chrome/position/
   collision-avoidance rather than hand-rolling another portal+positioning
   implementation (Menu already has one for its own submenus; this is a
   different trigger shape — a rich avatar row, not a MenuItemDef — so it
   can't route through that mechanism directly, see ContactRow's own
   comment above). Hover timing (immediate open, 150ms close delay) matches
   Menu's own submenu hover exactly, for a consistent feel. */
function OutboundContactRow({
  contact,
  channelOptions,
  onSelect,
  favorited,
  onToggleFavorite,
}: {
  contact: CreateNewOutboundContact;
  channelOptions: CreateNewChannelOption[];
  onSelect: (channel: ChannelType) => void;
  favorited?: boolean;
  onToggleFavorite?: () => void;
}) {
  const [flyoutOpen, setFlyoutOpen] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openFlyout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setFlyoutOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setFlyoutOpen(false), 150);
  };
  React.useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  const availableChannels = channelOptions.filter((c) => contact.channels.includes(c.id));
  const defaultChannel = availableChannels.find((c) => c.id === "voice")?.id ?? availableChannels[0]?.id;

  return (
    <Popover
      open={flyoutOpen}
      onOpenChange={setFlyoutOpen}
      placement="right"
      align="center"
      sideOffset={4}
      showArrow={false}
      onOpenAutoFocus={(e) => e.preventDefault()}
      // This flyout is nested *inside* this component's own z-[9999]
      // popover panel, so it needs to clear its own parent — same lesson
      // as the AgentProfile star tooltip incident. See CONTRIBUTING.md §5
      // ("Popovers nested inside another popover").
      className="z-[10003] w-48 p-1"
      // Row list, edge-to-edge within its own `p-1` box (see className
      // above) — Popover's default 16px body inset would double up here.
      bodyPadding={false}
      content={
        <div onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
          {availableChannels.length > 0 ? (
            <Menu
              items={availableChannels.map((c) => ({
                id: c.id,
                label: c.label,
                icon: c.icon,
                onClick: () => {
                  setFlyoutOpen(false);
                  onSelect(c.id);
                },
              }))}
              className="min-w-0 rounded-none border-0 bg-transparent p-0 shadow-none"
            />
          ) : (
            <p className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">No channels available</p>
          )}
        </div>
      }
    >
      <div onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
        <ContactRow
          contact={contact}
          highlighted={flyoutOpen}
          favorited={favorited}
          onToggleFavorite={onToggleFavorite}
          onClick={() => {
            if (defaultChannel) onSelect(defaultChannel);
          }}
        />
      </div>
    </Popover>
  );
}

/** Loose "does this look like a real email address" check for the "Continue
 *  with" ad-hoc flow below — deliberately simple (no RFC 5322 edge cases)
 *  since this only ever gates a UI affordance, not actual delivery.
 *  Exported (not this-file-private) so any OTHER ad-hoc "type an address"
 *  affordance elsewhere in a consuming app can reuse the exact same check
 *  instead of re-deriving an equivalent regex locally — see
 *  `agent-next-gen-add-channel-button.tsx` in agent-next-gen-v2 for the
 *  consumer this was exported for. */
const EMAIL_LOOKS_VALID_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function looksLikeEmail(value: string): boolean {
  return EMAIL_LOOKS_VALID_PATTERN.test(value);
}

/** Loose "does this look like a real phone number" check for the "Continue
 *  with" ad-hoc flow below. Unlike the dialpad's own `PhoneInput` (which
 *  validates a `{countryCode, number}` pair via `isPhoneNumberComplete`),
 *  the search field here is a single plain-text `Input` with no country
 *  context at all, so this just checks the string is mostly digits/phone
 *  punctuation (`+`, spaces, parens, dashes, dots) and has a plausible
 *  digit count (7–15, the E.164 range) — good enough to gate a "Continue
 *  with" button, not meant to be a real phone-validation library. Exported
 *  for the same reuse reason as `looksLikeEmail` above. */
const PHONE_LOOKS_VALID_SHAPE_PATTERN = /^\+?[\d\s().-]+$/;
export function looksLikePhoneNumber(value: string): boolean {
  if (!PHONE_LOOKS_VALID_SHAPE_PATTERN.test(value)) return false;
  const digitCount = value.replace(/\D/g, "").length;
  return digitCount >= 7 && digitCount <= 15;
}

/** Builds the throwaway `CreateNewOutboundContact` for the "Continue with"
 *  ad-hoc flow (see `looksLikeEmail`/`looksLikePhoneNumber` above and the
 *  "Continue with" `Button` in the outbound flow's empty-search-results
 *  branch) — a search query that matched no real directory record, but
 *  looks like a genuine email or phone number, so the agent can start an
 *  interaction with that raw address directly rather than being stuck with
 *  no path forward. `name` is the typed value itself (there's no real name
 *  to show), which is also what makes the "detail" screen's header title
 *  read as the address rather than "New Outbound" — see `headerTitle`'s own
 *  `activeOutboundContact?.name` fallback further down. `id` is namespaced
 *  `adhoc:` so it can never collide with a real contact's id. */
function buildAdHocSearchContact(query: string): { contact: CreateNewOutboundContact; channel: ChannelType } {
  if (looksLikeEmail(query)) {
    return {
      contact: { id: `adhoc:${query}`, name: query, initials: "@", channels: ["email"], email: query },
      channel: "email",
    };
  }
  return {
    contact: {
      id: `adhoc:${query}`,
      name: query,
      initials: "#",
      channels: ["voice", "sms"],
      primaryPhone: { value: query, label: query },
    },
    channel: "voice",
  };
}

/** Whether `channel` should be disabled in the outbound detail form's
 *  "Select Channel" field for `contact` — two independent reasons:
 *
 *  1. Voice specifically, once this contact already has a voice channel
 *     open. Unlike SMS/WhatsApp/Email, where each address is its own
 *     independent thread (so a second SMS number is a genuinely separate
 *     conversation, not a duplicate), a phone call has no per-address
 *     concept here at all — an agent can't have two simultaneous voice
 *     conversations with the same customer regardless of which outbound
 *     number either one used, so once one is open, Voice itself (not just
 *     one specific number) is off the table until it ends.
 *
 *     Checks `openChannelTypes`, NOT `openChannelAddresses.voice` — the
 *     latter only ever contains channels with a *known* address (see its
 *     own doc comment), so a voice channel with no recorded number (e.g. a
 *     contact-history "Redial," which has no stored phone number at all)
 *     would never show up there even though it's genuinely open. That was
 *     a real, shipped bug: confirmed via screenshot that redialing, then
 *     opening "Add Channel" on that same card, showed Voice as selectable
 *     — the address-keyed map had nothing to disable it with, even though
 *     a voice channel was plainly already active right next to it in the
 *     toggle row.
 *
 *  2. ANY channel (including Voice, redundantly with #1) once every
 *     address it could possibly be started on is already open — per
 *     explicit request: a customer with their one synthesized WhatsApp
 *     handle (or email address) already in an open conversation has
 *     nothing left to pick from `resolveOutboundDetailField`'s own
 *     `options` list for that channel, which used to still let the agent
 *     open the picker anyway onto an empty "No results found" dropdown
 *     with no way to actually start anything. Reuses that same `options`
 *     list rather than re-deriving the "already open" filter a second
 *     time here, so the two stay in lockstep by construction. */
function isChannelBlockedForContact(
  contact: CreateNewOutboundContact,
  channel: ChannelType,
  phoneOptions: { value: string; label: string }[]
): boolean {
  if (channel === "voice" && !!contact.openChannelTypes?.includes("voice")) return true;
  return resolveOutboundDetailField(contact, channel, phoneOptions).options.length === 0;
}

/** First channel in `channelOptions` that isn't blocked for `contact` (see
 *  `isChannelBlockedForContact` above) — used to pick "Select Channel"'s
 *  opening default so it never lands on a channel that's about to render
 *  disabled (falls back to `channelOptions[0]` when every channel happens
 *  to be blocked, same "nothing better to default to" case
 *  `resolveOutboundDetailField` itself falls back to `""` for). */
function firstAvailableChannel(
  channelOptions: CreateNewChannelOption[],
  contact: CreateNewOutboundContact,
  phoneOptions: { value: string; label: string }[]
): ChannelType | null {
  return (
    channelOptions.find((c) => !isChannelBlockedForContact(contact, c.id, phoneOptions))?.id ??
    channelOptions[0]?.id ??
    null
  );
}

/** Default value + selectable options for the outbound detail form's second
 *  field ("Select Phone"/"Select Email Address"/"Select WhatsApp Handle") —
 *  shared by `CreateNew`'s own "detail" screen (`defaultDetailValueFor`/
 *  `detailFieldMeta` below) AND `OutboundAddButton`'s self-contained detail
 *  form (below), so both agree on the exact same synthesized-address/
 *  already-open-address logic. Previously only `CreateNew` had this;
 *  hand-copying it for `OutboundAddButton` would be exactly the kind of
 *  three-copies drift `useOutboundAddButton`'s own doc comment describes
 *  fixing for the rest of this file. Email: `contact.email` first (mirrors
 *  `primaryPhone` below), falling back to a synthesized `name`-based
 *  address only when the contact has no real email on file — added
 *  alongside the "Continue with" ad-hoc flow (`buildAdHocSearchContact`),
 *  whose synthetic contact's `name` IS the typed email address; without
 *  this, the old unconditional synthesis would have doubled it up into
 *  garbage like "jane@example.com@example.com". WhatsApp: still one
 *  synthesized address (no `whatsappHandle`-style field exists to prefer
 *  yet). Both email and WhatsApp are dropped from `options` (not just
 *  disabled) if already open elsewhere for this contact. Phone:
 *  `contact.primaryPhone` first (see its own doc comment) followed by
 *  every `phoneOptions` entry, minus whichever of those is already open —
 *  defaulting to whichever ends up first, so a contact with a directory-
 *  listed number defaults to *that* one rather than an arbitrary shared
 *  line. */
function resolveOutboundDetailField(
  contact: CreateNewOutboundContact,
  channel: ChannelType,
  phoneOptions: { value: string; label: string }[]
): { label: string; options: SelectOption[]; defaultValue: string } {
  const openAddresses = contact.openChannelAddresses?.[channel] ?? [];
  const withoutOpen = (options: SelectOption[]): SelectOption[] =>
    openAddresses.length > 0 ? options.filter((o) => !openAddresses.includes(o.value)) : options;
  if (channel === "email") {
    const value = contact.email ?? `${contact.name.toLowerCase().replace(/\s+/g, ".")}@example.com`;
    const defaultValue = openAddresses.includes(value) ? "" : value;
    return { label: "Select Email Address", options: withoutOpen(defaultValue ? [{ value: defaultValue, label: defaultValue }] : []), defaultValue };
  }
  if (channel === "whatsapp") {
    const value = `@${contact.name}`;
    const defaultValue = openAddresses.includes(value) ? "" : value;
    return { label: "Select WhatsApp Handle", options: withoutOpen(defaultValue ? [{ value: defaultValue, label: defaultValue }] : []), defaultValue };
  }
  const options = withoutOpen(
    contact.primaryPhone
      ? [contact.primaryPhone, ...phoneOptions.filter((o) => o.value !== contact.primaryPhone!.value)]
      : phoneOptions
  );
  return { label: "Select Phone", options, defaultValue: options[0]?.value ?? "" };
}

/* ── Outbound "add" button (internal to the flyout, exported) ──
   Small standalone "+" trigger for adding another channel to a contact who
   already has a live interaction open — factored out so other surfaces can
   offer the same flow without re-implementing it (composition over
   reimplementation, CONTRIBUTING.md §3). Built for `InteractionNavItem`'s
   own "Add Outbound" button and the interaction record header's own
   "+" (see each one's `headerAction`/`titleSuffix` usage).

   Self-contained end to end, and a single screen: opening the popover goes
   straight to the detail form (Select Channel/Select Address/Outbound
   Skill/Start Interaction) — no separate channel-picker step first. An
   earlier version opened to a channel-icon `Menu` and only swapped to the
   detail form after a channel was picked there; removed by explicit
   request, since "Select Channel" is already one of the detail form's own
   fields — the extra tap picked the same thing twice for no benefit.
   Defaults to the contact's first available channel (`channelOptions[0]`)
   on open; the agent can still change it via the same "Select Channel"
   field the old first screen offered, it's just not a gate anymore.
   `onStartCall` fires directly from here. This used to hand off to a
   separate `CreateNew` instance elsewhere on the page via
   `CreateNewOutboundConfig.launchRequest` — confirmed via screenshot that
   this was a real, confusing bug: clicking "+" in the interaction record
   header's toggle row popped the detail form up next to the LeftNav's own
   "New Outbound" trigger instead of anywhere near the button the agent
   actually clicked. Every consumer goes through `useOutboundAddButton`
   below now, not `launchRequest` — that prop still exists on
   `CreateNewOutboundConfig` for other, unrelated integrations, but nothing
   in this file wires it to this button anymore.

   Uses the `z-[10003]` "popover nested inside another popover" tier
   (CONTRIBUTING.md §5), same as `OutboundContactRow`'s own flyout — not
   because this button's usual home (an `InteractionNavItem` card sitting
   directly in the nav rail) is nested in anything, but because
   `InteractionNavItem`'s compact-mode hover popover (see its own
   `headerAction` doc comment) also renders this exact button, and does so
   *nested inside* that popover. A fixed z-index can't tell which context
   it's in, and there's nothing else in this codebase that needs to sit
   between this tier and the nested tier above it, so using the higher,
   nesting-safe tier unconditionally is correct (if slightly conservative)
   in both places. */
export interface OutboundAddButtonProps {
  /** The contact this button adds another channel for — needed both to
   *  resolve the detail form's address field (`resolveOutboundDetailField`)
   *  and to hand back to `onStartCall`. */
  contact: CreateNewOutboundContact;
  /** Channel definitions (icon + label) to offer — already filtered down to
   *  whichever channels `contact` actually supports, e.g.
   *  `outbound.channelOptions.filter((c) => contact.channels.includes(c.id))`. */
  channelOptions: CreateNewChannelOption[];
  /** Options for the detail form's "Select Phone" field. */
  phoneOptions: { value: string; label: string }[];
  /** Options for the detail form's "Outbound Skill" field. */
  skillOptions: { value: string; label: string }[];
  /** Fired when "Start Interaction" is pressed in the detail form — same
   *  shape as `CreateNewOutboundConfig.onStartCall`. The flyout closes
   *  itself first. */
  onStartCall: (selection: { contact: CreateNewOutboundContact; channel: ChannelType; phone: string; skillId: string }) => void;
  /** Tooltip text and button `aria-label` (default: "Add Outbound"). */
  label?: string;
  /** Shows `label` as visible text next to the icon (default: false —
   *  icon-only, the original look every existing consumer, e.g.
   *  `InteractionNavItem`'s compact card row, still gets). Turn on for a
   *  standalone header action that needs a real text button rather than an
   *  icon-only affordance leaning on its tooltip — the tooltip itself is
   *  disabled whenever this is true, since the visible label already says
   *  the same thing. */
  showLabel?: boolean;
  className?: string;
  /** Overrides the trigger's default `Plus` glyph — e.g. a specific
   *  channel's own icon when this button is dedicated to just that one
   *  channel (see `initialChannel` below), so the button reads as "add a
   *  Call" rather than a generic "+". Re-sized to the trigger's own `h-4
   *  w-4` regardless of whatever size the passed element's own `className`
   *  specifies (channel icons in `channelOptions` are authored `h-5 w-5`
   *  for their normal, larger home in the "Select Channel" radio group). */
  icon?: React.ReactNode;
  /** Locks the detail form to this one channel and hides the "Select
   *  Channel" field entirely, rather than defaulting to it while leaving it
   *  still editable (the normal, no-`initialChannel` behavior) — for a
   *  trigger that already identifies its own channel (a per-channel icon
   *  button, paired with `icon` above), re-showing a "Select Channel" field
   *  with the choice already made would just be asking the same question
   *  twice. Must be one of `channelOptions`; behaves exactly like today's
   *  plain default otherwise (still editable) if omitted. */
  initialChannel?: ChannelType;
}

const OutboundAddButton = React.forwardRef<HTMLButtonElement, OutboundAddButtonProps>(
  (
    {
      contact,
      channelOptions,
      phoneOptions,
      skillOptions,
      onStartCall,
      label = "Add Outbound",
      showLabel = false,
      className,
      icon,
      initialChannel,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    // No more `null` "not picked yet" state — the popover is a single
    // screen now (see this component's own doc comment above), so this
    // always holds a real channel as long as the contact has at least one
    // available (`initialChannel`, when locked to one — see that prop's
    // own doc comment — otherwise `channelOptions[0]` as the opening
    // default), and only stays `null` in the true edge case of an empty
    // `channelOptions` (nothing to default to — the "No channels
    // available" branch below handles that). Kept local to this button,
    // not routed through any shared "detail screen" state.
    const [detailChannel, setDetailChannel] = useState<ChannelType | null>(
      initialChannel ?? firstAvailableChannel(channelOptions, contact, phoneOptions)
    );
    const [detailPhone, setDetailPhone] = useState("");
    // Defaults to the FIRST skill in `skillOptions`, not `""` — per explicit
    // request ("when a new channel is launched, default to the first skill
    // in the list so the agent can immediately start the interaction
    // without having to choose"). `skillOptions[0]?.value ?? ""` still
    // falls back to blank for the true edge case of an empty list (nothing
    // to default to — "Start Interaction" stays correctly disabled via its
    // own `!detailSkill` check below in that case, same as before this
    // change).
    const [detailSkill, setDetailSkill] = useState(skillOptions[0]?.value ?? "");

    const selectChannel = (channel: ChannelType) => {
      setDetailChannel(channel);
      setDetailPhone(resolveOutboundDetailField(contact, channel, phoneOptions).defaultValue);
      // `detailSkill` is deliberately left alone — `skillOptions` isn't
      // channel-specific (the same Outbound Skill list applies to every
      // channel), so a skill already picked before switching channels is
      // still a valid choice after, and clearing it back to "" here just
      // forced a re-pick for no reason: it disabled "Start Interaction"
      // (`disabled={!detailSkill}` below) even though the agent had already
      // made a valid selection.
    };

    // Reset back to the default channel (not `null` — see above) once the
    // popover has actually finished closing — deferred past the exit
    // animation for the same reason `CreateNew`'s own screen-stack reset is
    // (see its effect's own doc comment): resetting synchronously would
    // swap the still-fading-out detail form's fields back to blank mid-
    // close, visible as a flash of the wrong content.
    useEffect(() => {
      if (open) return;
      const t = setTimeout(() => {
        setDetailChannel(initialChannel ?? firstAvailableChannel(channelOptions, contact, phoneOptions));
        setDetailPhone("");
        // Back to the first skill, not `""` — same reasoning as this
        // state's own initializer above; `skillOptions` added to this
        // effect's own dependency array below so a reset after the
        // consumer's skill list itself changes still re-derives from the
        // current list, not a stale one captured on an earlier render.
        setDetailSkill(skillOptions[0]?.value ?? "");
      }, 200);
      return () => clearTimeout(t);
    }, [open, channelOptions, contact, initialChannel, skillOptions, phoneOptions]);

    // "Select Channel" stays editable once on the detail form (matching
    // `CreateNew`'s own detail screen) — if the agent switches channel here,
    // the address field needs to swap from a phone number to a synthesized
    // email/handle (or back) too.
    //
    // `open` is in the dependency array alongside `detailChannel`, not just
    // `detailChannel` alone — this was a real, shipped bug: the popover
    // resets `detailChannel` back to `channelOptions[0]?.id` on every close
    // (see the effect above), which is the exact same value it already was
    // for every close after the first (the default channel never changes
    // between opens). React's `useState` setter bails out of re-rendering
    // when the new value is `Object.is`-equal to the current one, so
    // `setDetailChannel` calling itself back to an unchanged value doesn't
    // actually change `detailChannel` from React's perspective — meaning
    // this effect, keyed on `[detailChannel]` alone, only ever ran once, on
    // first mount. Every later open reused that first mount's now-stale
    // (or, for the very first open before this effect had run at all,
    // simply never-set) `detailPhone`/`""` with nothing to refresh it,
    // which is why "Select Phone" showed blank on the second and every
    // later open despite working the first time. Re-deriving whenever
    // `open` flips true — regardless of whether `detailChannel` itself
    // "changed" — fixes it without touching the reset effect above.
    useEffect(() => {
      if (!open || !detailChannel) return;
      setDetailPhone(resolveOutboundDetailField(contact, detailChannel, phoneOptions).defaultValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, detailChannel]);

    const fieldMeta = detailChannel ? resolveOutboundDetailField(contact, detailChannel, phoneOptions) : null;

    // Only meaningful when this button is locked to one channel
    // (`initialChannel` — see that prop's own doc comment): with "Select
    // Channel" hidden, there's no other channel the agent could switch to
    // work around this one being exhausted, so the trigger itself needs to
    // communicate that rather than opening onto a dead-end empty picker
    // (`fieldMeta.options` would be `[]`) — per explicit request, confirmed
    // live via screenshot (a "Select WhatsApp Handle" field stuck on "No
    // results found" with no way to actually start anything). NOT checked
    // for the multi-channel case (no `initialChannel`, e.g. this button's
    // own default "+" trigger, or `InteractionNavItem`'s compact one): that
    // popover's own "Select Channel" radio group already disables just the
    // blocked option inline while leaving every other channel pickable,
    // which is the right behavior there — disabling the whole trigger would
    // block channels that are still perfectly available too.
    const blockedForInitialChannel =
      initialChannel !== undefined && isChannelBlockedForContact(contact, initialChannel, phoneOptions);
    // Voice gets its own, more specific reason (matching
    // `isChannelBlockedForContact`'s own doc comment) — every other channel
    // shares the generic "nothing left to pick" phrasing, using `label`
    // (this button's own tooltip text/aria-label, e.g. "Email"/"WhatsApp"
    // for the record header's per-channel buttons) rather than re-deriving
    // a channel display name from `initialChannel` a second time.
    const blockedTooltip =
      initialChannel === "voice" ? "Customer is already on a call" : `Every ${label} address is already open`;

    const handleStartCall = () => {
      if (!detailChannel || !detailSkill) return;
      onStartCall({ contact, channel: detailChannel, phone: detailPhone, skillId: detailSkill });
      setOpen(false);
    };

    return (
      <Tooltip
        content={blockedForInitialChannel ? blockedTooltip : label}
        placement="top"
        disabled={open || (showLabel && !blockedForInitialChannel)}
      >
        {/* Wrap the whole Popover (not just its trigger) in a plain span —
            same Tooltip+Popover composition as this component's own
            collapsed trigger below and AgentProfile's own trigger: Tooltip's
            Trigger clones hover/focus props onto its immediate child via
            Radix Slot, which Popover doesn't forward through to its
            internals. */}
        <span className="inline-flex">
          <Popover
            open={open}
            onOpenChange={setOpen}
            placement="bottom"
            align="end"
            sideOffset={4}
            showArrow={false}
            onOpenAutoFocus={(e) => e.preventDefault()}
            // z-[10003], not the top-level z-[9999] — see this component's
            // own doc comment above for why.
            className="z-[10003] w-64"
            // The detail form supplies its own `p-3`/row padding below,
            // matching the channel-picker Menu's own edge-to-edge `p-1` box
            // — Popover's default 16px body inset would double up either way.
            bodyPadding={false}
            content={
              detailChannel && fieldMeta ? (
                <div className="w-64 p-3 space-y-3">
                  {/* Omitted while `initialChannel` is locked — see that
                      prop's own doc comment: the trigger itself (a
                      dedicated per-channel icon/label) already answers
                      "Select Channel", so asking again here would just be
                      the same question twice. */}
                  {!initialChannel && (
                    <RadioButtonGroup
                      label="Select Channel"
                      options={channelOptions.map((c) => ({
                        value: c.id,
                        label: c.selectLabel ?? c.label,
                        disabled: isChannelBlockedForContact(contact, c.id, phoneOptions),
                      }))}
                      value={detailChannel}
                      onValueChange={(v) => selectChannel(v as ChannelType)}
                    />
                  )}
                  {/* `dropdownClassName="z-[10005]"` on both remaining
                      `Select`s: each one's dropdown portals to
                      document.body at its own default z-[9999] (the base
                      "portal wrapper" tier, see CONTRIBUTING.md §4), which
                      is *lower* than this popover's own z-[10003] "nested
                      inside another popover" panel — without the override,
                      an open dropdown paints underneath this panel instead
                      of over it (invisible, or only visible past this
                      panel's own edges, depending on where it happens to
                      land). 10005 is the next free tier in that table: one
                      level deeper than PhoneInput's z-[10003] override for
                      the same reason inside CreateNew's own detail screen
                      below. */}
                  <Select
                    label={fieldMeta.label}
                    value={detailPhone || undefined}
                    onValueChange={setDetailPhone}
                    options={fieldMeta.options}
                    dropdownClassName="z-[10005]"
                  />
                  <Select
                    label="Outbound Skill"
                    placeholder="Select Outbound Skill"
                    value={detailSkill || undefined}
                    onValueChange={setDetailSkill}
                    options={skillOptions}
                    dropdownClassName="z-[10005]"
                  />
                  <Button variant="default" size="lg" className="w-full" disabled={!detailSkill} onClick={handleStartCall}>
                    Start Interaction
                  </Button>
                </div>
              ) : (
                // Only reachable when `channelOptions` is empty — there's no
                // channel to default `detailChannel` to at all, so there's
                // no detail form to show (see `detailChannel`'s own state
                // comment above).
                <p className="w-64 px-3 py-2 lyra-body-sm text-lyra-fg-secondary">No channels available</p>
              )
            }
          >
            <button
              ref={ref}
              type="button"
              aria-label={label}
              // Native `disabled` — Radix's `Trigger asChild` (Popover.tsx)
              // just clones its own `onClick` onto whatever child it wraps,
              // so a disabled button never actually fires that click at all
              // (standard DOM behavior), which is enough on its own to stop
              // the popover from ever opening while
              // `blockedForInitialChannel` — no separate `open`/
              // `onOpenChange` gating needed.
              disabled={blockedForInitialChannel}
              // Card rows that host this button (e.g. InteractionNavItem)
              // are themselves clickable — stop the click from also
              // bubbling up and selecting the whole card, same pattern
              // FavoriteButton/KebabMenuButton use for the same reason.
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lyra-sm",
                "text-lyra-fg-secondary transition-colors",
                "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
                // Same `disabled:pointer-events-none disabled:opacity-40`
                // treatment `buttonVariants` (button.tsx) already applies to
                // every other disabled button in this design system, kept
                // in sync by hand here since this trigger is a plain
                // `<button>`, not `Button` — see this component's own
                // doc comment above for why (a card-selecting
                // `stopPropagation` and per-consumer icon/label slot neither
                // fit `Button`'s own API cleanly enough to be worth
                // reimplementing on top of it).
                "disabled:pointer-events-none disabled:opacity-40",
                className
              )}
            >
              {icon && React.isValidElement<{ className?: string }>(icon) ? (
                // Re-sized to this trigger's own `h-4 w-4` regardless of
                // whatever size `icon`'s own `className` specifies — see
                // that prop's own doc comment. Original className goes
                // FIRST in `cn()`, the size override LAST, so twMerge
                // resolves the conflicting `h-*`/`w-*` utilities in favor
                // of the override no matter what the caller passed.
                React.cloneElement(icon, {
                  className: cn(icon.props.className, "h-4 w-4 flex-shrink-0"),
                })
              ) : icon ? (
                icon
              ) : (
                <Plus className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
              )}
              {/* Spacing lives on the label itself (`ml-2`), not a `gap-*`
                  on the button — same convention this file's own expanding
                  "New Outbound" trigger below uses for the identical
                  icon+label pairing (see that button's own comment). */}
              {showLabel && <span className="lyra-label ml-2">{label}</span>}
            </button>
          </Popover>
        </span>
      </Tooltip>
    );
  }
);
OutboundAddButton.displayName = "OutboundAddButton";

/* ── useOutboundAddButton ──
   Every "Agent Next Gen" consumer (agent-next-gen-v1/AgentNextGenPage.tsx,
   AgentNextGenTemplate.stories.tsx, LeftNav.stories.tsx's "Agent Next Gen
   Left Nav" story, InteractionNavItem.stories.tsx) renders a live list of
   `InteractionNavItem` cards and wants the exact same "+" behavior on each
   one: look up that interaction's underlying outbound contact, and build an
   `OutboundAddButton` scoped to whatever channels that contact actually
   supports. Before this hook existed, each of those files had its own
   hand-copied version of this exact logic — copies of the same ~15 lines
   meant to stay identical forever, which is exactly the kind of thing that
   quietly drifts. Extracting it here means there's only one implementation
   to get right, and every consumer calling it is structurally guaranteed to
   match the others — nothing to keep "in sync" by hand anymore.

   No `launchRequest`/`onLaunchRequestHandled` anymore (this hook used to
   return both, for consumers to wire into their own separate `CreateNew`
   instance) — `OutboundAddButton` is fully self-contained now (see its own
   doc comment in this file), so there's no other surface for a picked
   channel to hand off to. `CreateNewOutboundConfig.launchRequest` itself is
   untouched for any other integration that still wants it; this hook just
   doesn't use it anymore. */
export interface UseOutboundAddButtonResult {
  /** Build the `headerAction` for one `InteractionNavItem` card, keyed by
   *  that interaction's id. Looks up the id in `outboundConfig.groups`;
   *  returns `null` when there's no matching contact (a quick-dialed number,
   *  or a fixed demo card with no backing record) — `OutboundAddButton`
   *  needs a real `CreateNewOutboundContact` to resolve its detail form's
   *  address field and to hand back to `onStartCall`, so there's nothing
   *  for it to add a channel through in that case. Previously rendered a
   *  button anyway (unfiltered channel list, "every card gets a +, per
   *  design"), but picking a channel from it silently did nothing once it
   *  reached `CreateNew`'s own contact lookup — the same shipped bug
   *  `handleRedial`'s own doc comment (agent-next-gen-v1) describes fixing
   *  for its id. Omitting the button here is the honest version of that
   *  fix: no dead-end control instead of one that quietly no-ops.
   *
   *  `className` overrides `OutboundAddButton`'s own default small/ghost
   *  look (its `className` merges last inside that component's own `cn()`
   *  call, so twMerge resolves conflicting utilities in favor of this) —
   *  e.g. the interaction record page header's own "+" sits next to a row
   *  of `ChannelToggle` pills and wants to match their height/outline
   *  treatment, rather than the compact `h-6 w-6` ghost icon every
   *  `InteractionNavItem` card uses this same button for. Omit it (every
   *  other call site) to keep that original default untouched.
   *
   *  `options.label`/`options.showLabel` forward straight to
   *  `OutboundAddButton`'s own same-named props — e.g. the interaction
   *  record page header wants a real "Add Channel" text button, not the
   *  icon-only look every other call site keeps.
   *
   *  `options.icon`/`options.initialChannel` also forward straight through
   *  — together they turn this into a dedicated single-channel button
   *  (e.g. one call per entry in `getAvailableChannels` below, each with
   *  that channel's own icon) instead of the default combined "pick any
   *  channel" trigger. See `OutboundAddButtonProps`' own doc comments on
   *  both. */
  getHeaderAction: (
    interactionId: string,
    className?: string,
    options?: { label?: string; showLabel?: boolean; icon?: React.ReactNode; initialChannel?: ChannelType }
  ) => React.ReactNode;
  /** Channels `interactionId`'s underlying contact supports at all — same
   *  `contact.channels` support filter `getHeaderAction` itself applies
   *  internally. Does NOT drop anything `isChannelBlockedForContact` would
   *  grey out (e.g. Voice once already open, or any channel with every
   *  possible address already open) the way it used to — per explicit
   *  request, a channel the customer can't currently be reached on this
   *  way should still show a button (so the agent can see it exists at
   *  all) just DISABLED, not silently missing from the row entirely.
   *  `getHeaderAction`'s own per-channel button (via `options.
   *  initialChannel`) is what actually disables itself now, using this
   *  same `isChannelBlockedForContact` check internally — see that
   *  button's own `blockedForInitialChannel`, create-new.tsx. Returns `[]`
   *  for the same "no matching contact" case `getHeaderAction` returns
   *  `null` for. Built for a header that wants to show one icon button per
   *  channel the contact supports (e.g. Call/Email/SMS) instead of a
   *  single combined "+" trigger, falling back to that combined trigger
   *  only once space runs out — see agent-next-gen-v2's own interaction
   *  record header for the reference usage. */
  getAvailableChannels: (interactionId: string) => CreateNewChannelOption[];
}

export function useOutboundAddButton(
  outboundConfig: Pick<CreateNewOutboundConfig, "groups" | "channelOptions" | "phoneOptions" | "skillOptions" | "onStartCall">
): UseOutboundAddButtonResult {
  const contactsById = useMemo(
    () => new Map(outboundConfig.groups.flatMap((g) => g.contacts ?? []).map((c) => [c.id, c])),
    [outboundConfig]
  );

  const getHeaderAction = useCallback(
    (
      interactionId: string,
      className?: string,
      options?: { label?: string; showLabel?: boolean; icon?: React.ReactNode; initialChannel?: ChannelType }
    ) => {
      const contact = contactsById.get(interactionId);
      if (!contact) return null;
      const channelOptions = outboundConfig.channelOptions.filter((c) => contact.channels.includes(c.id));
      return (
        <OutboundAddButton
          contact={contact}
          channelOptions={channelOptions}
          phoneOptions={outboundConfig.phoneOptions ?? []}
          skillOptions={outboundConfig.skillOptions ?? []}
          onStartCall={(selection) => outboundConfig.onStartCall?.(selection)}
          className={className}
          label={options?.label}
          showLabel={options?.showLabel}
          icon={options?.icon}
          initialChannel={options?.initialChannel}
        />
      );
    },
    [contactsById, outboundConfig]
  );

  const getAvailableChannels = useCallback(
    (interactionId: string): CreateNewChannelOption[] => {
      const contact = contactsById.get(interactionId);
      if (!contact) return [];
      return outboundConfig.channelOptions.filter((c) => contact.channels.includes(c.id));
    },
    [contactsById, outboundConfig]
  );

  return { getHeaderAction, getAvailableChannels };
}

/* ── CreateNew ── */

const CreateNew = React.forwardRef<HTMLButtonElement, CreateNewProps>(
  (
    {
      className,
      items,
      categories,
      channels,
      onOutbound,
      onQuickDial,
      phoneFieldPlaceholder,
      title = "New Outbound",
      expanded = false,
      outbound,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const isOutboundFlow = !!outbound;
    // The Outbound picker is screen 1 of this flow (there's no separate
    // top-level action list to land on first) — same fallback used by the
    // group Select's own default.
    const initialOutboundGroupId = outbound?.defaultGroupId ?? outbound?.groups[0]?.id;
    const [stack, setStack] = useState<Screen[]>(
      isOutboundFlow ? [{ kind: "outbound-menu" }] : [{ kind: "root" }]
    );
    const [search, setSearch] = useState("");
    // Shared by the drill-down flow's screen-1 quick-dial field and the
    // outbound flow's "dialpad"-kind group — the two are mutually exclusive
    // per component instance (isDrillDown / isOutboundFlow never both true),
    // so one PhoneValue suffices for whichever is actually rendered.
    const [phone, setPhone] = useState<PhoneValue>({ countryCode: "us", number: "" });
    const [page, setPage] = useState(1);
    const pageSize = outbound?.pageSize ?? 10;
    // Detail-screen selections — editable on screen 2 (Select Channel can be
    // changed from whatever the flyout/row click seeded it with), so these
    // live in their own state rather than being read straight off the
    // Screen object. Reset whenever a "detail" screen is pushed (see
    // goToDetail below), same pattern as `search` being reset in
    // pushScreen/popScreen.
    const [detailChannel, setDetailChannel] = useState<ChannelType | "">("");
    const [detailPhone, setDetailPhone] = useState("");
    // Defaults to the FIRST skill in `outbound.skillOptions`, not `""` —
    // same reasoning/request as `OutboundAddButton`'s own identical state
    // above ("when a new channel is launched, default to the first skill in
    // the list so the agent can immediately start the interaction without
    // having to choose"). Falls back to `""` when `outbound` itself (or its
    // `skillOptions`) is unset — this component is also used for the non-
    // outbound drill-down flow, which has no skill concept at all.
    const [detailSkill, setDetailSkill] = useState(outbound?.skillOptions?.[0]?.value ?? "");
    const searchInputRef = React.useRef<HTMLInputElement>(null);
    // Set right before the `launchRequest` effect below opens this popover
    // programmatically, and read (then cleared) inside `onOpenAutoFocus` on
    // the `Popover` call further down. A normal open (the agent clicking
    // this component's own trigger button) intentionally cancels Radix's
    // auto-focus so focus stays on that trigger; a `launchRequest`-driven
    // open has no such trigger click to preserve — the click that caused it
    // happened on a completely unrelated element elsewhere on the page
    // (e.g. `InteractionNavItem`'s own "Add Outbound" button) — so letting
    // Radix's default auto-focus land on the first focusable field inside
    // this popover's content is exactly what's needed, and doing so is what
    // fixes the "opens, then instantly closes again" flash a bug report
    // described: without it, focus stayed on that unrelated trigger,
    // Radix's dismissable layer saw focus sitting *outside* the newly
    // mounted popover, and treated that as an outside interaction.
    const openedViaLaunchRequestRef = React.useRef(false);
    // Favorited contact ids, toggled by FavoriteButton (add or remove — see
    // favorite-button.tsx). Persists across popover open/close, unlike the
    // transient search/page state reset in the effect below, since a
    // favorites list that forgot itself every time you closed the popover
    // wouldn't be much of a favorites list.
    const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

    // The most recent "Continue with" ad-hoc contact (see
    // `buildAdHocSearchContact`) — kept in its own bit of state, separate
    // from every real contact record, because it doesn't live in any
    // `outbound.groups[].contacts` list at all (it's a throwaway record
    // built from a raw search query, not looked up from a directory). Read
    // by `activeOutboundContact` below alongside `allOutboundContacts`, so
    // the "detail" screen can find it by id the same way it finds a real
    // contact. Only one at a time needs to exist — a new "Continue with"
    // click simply replaces whatever was here before.
    const [adHocContact, setAdHocContact] = useState<CreateNewOutboundContact | null>(null);

    // NOTE: there used to be a `priorOutboundGroupId` bit of state here to
    // support the Dial Pad ghost button's own special "back" handling. Per
    // a later explicit request, every group row (Dial Pad included) now
    // reaches its contact list via a real `pushScreen` from the
    // `"outbound-menu"` screen (see that `Screen` kind's own doc comment),
    // so a plain `popScreen()` already returns to the right place on its
    // own — that extra bit of state and its dedicated back-handler
    // (`handleBackFromDialpad`) are no longer needed.

    const isDrillDown = !isOutboundFlow && !!categories && categories.length > 0;
    const screen = stack[stack.length - 1];

    // Reset the drill-down view whenever the popover closes, so it always
    // reopens at screen 1 instead of wherever the user last left it.
    //
    // Delayed, not immediate: Popover's own content stays mounted and
    // visible for its `data-[state=closed]` exit animation (100ms, see
    // popover.tsx) after `open` flips to false — Radix doesn't remove it
    // from the DOM until that animation finishes. Resetting synchronously
    // here used to swap the still-fading-out content back to the default
    // screen (e.g. the Agents list) mid-close, so users saw a jarring
    // flash of the initial state instead of the popover simply fading away
    // showing whatever screen they'd actually left it on. Waiting past the
    // animation means the reset only ever happens once the content is
    // already fully hidden, so it's invisible.
    React.useEffect(() => {
      if (!open) {
        const t = setTimeout(() => {
          setStack(isOutboundFlow ? [{ kind: "outbound-menu" }] : [{ kind: "root" }]);
          setSearch("");
          setPhone({ countryCode: "us", number: "" });
          setPage(1);
        }, 200);
        return () => clearTimeout(t);
      }
      // isOutboundFlow/initialOutboundGroupId are derived from a prop that
      // isn't expected to change after mount; omitting them keeps this
      // effect scoped to open/close only.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    // Focus the search field when landing on a category's (or, in the
    // outbound flow, a "contacts"-kind group's, or the outbound menu
    // screen's own implicit default group's) screen, matching the
    // auto-focus-the-search-field pattern used elsewhere (e.g. AgentProfile).
    // `"outbound-menu"` resolves to `initialOutboundGroupId` here (not
    // `activeGroup`, which isn't declared until later in this function) —
    // same group that constant resolves to further down.
    React.useEffect(() => {
      const screenGroupId =
        screen.kind === "group" ? screen.groupId : screen.kind === "outbound-menu" ? initialOutboundGroupId : undefined;
      const groupKind = screenGroupId ? outbound?.groups.find((g) => g.id === screenGroupId)?.kind ?? "contacts" : undefined;
      const isSearchableGroup = groupKind === "contacts" || groupKind === "favorites";
      if (screen.kind === "category" || isSearchableGroup) {
        searchInputRef.current?.focus();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screen]);

    // Reset to page 1 whenever the search term or the active group changes,
    // so switching groups/searching never leaves you stranded on a page
    // that no longer exists for the new result set.
    React.useEffect(() => {
      setPage(1);
    }, [search, screen.kind === "group" ? screen.groupId : screen.kind]);

    const pushScreen = (s: Screen) => {
      setSearch("");
      setStack((prev) => [...prev, s]);
    };
    const popScreen = () => {
      setSearch("");
      setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };
    // NOTE: there used to be a `setActiveGroup` helper here that swapped
    // screen 1's own `groupId` in place instead of pushing a new stack
    // entry, back when the group Select/row-list and that group's own
    // contact list rendered together on one screen. Per a later explicit
    // request, picking a group row now genuinely navigates — see
    // `goToGroup` below — so plain `pushScreen`/`popScreen` cover this on
    // their own; there's no more "change the filter without navigating"
    // case for a dedicated helper to handle.
    //
    // Pushes a real "group" screen for the picked row — the Dial Pad
    // ghost button and every ordinary group row both call this. A real
    // stack entry (not the old in-place swap) is what gives this its own
    // back button/title/search field, and lets a plain `popScreen()`
    // return to the `"outbound-menu"` screen underneath with no special-
    // casing needed for any particular group (Dial Pad included).
    const goToGroup = (groupId: string) => {
      pushScreen({ kind: "group", groupId });
    };
    // Screen 2's second field means something different per channel: an
    // actual phone number for Call/SMS (from `outbound.phoneOptions`), or a
    // synthesized address/handle for Email/WhatsApp — there's no per-contact
    // email or handle in CreateNewOutboundContact, so these are derived from
    // the contact's name for demo purposes rather than looked up. Never
    // defaults to an address already open for this contact/channel (see
    // CreateNewOutboundContact.openChannelAddresses) — those addresses are
    // filtered out of the field entirely (not just disabled, see
    // `detailFieldMeta` below), so defaulting to one would silently
    // pre-select a value that isn't even in the list. Falls back to "" when
    // every option for this channel is already in use (email/WhatsApp only
    // ever have the one derived option, so that's the only way they can run
    // out; phone falls back to "" only once every one of
    // `outbound.phoneOptions` is open).
    const defaultDetailValueFor = (contact: CreateNewOutboundContact, channel: ChannelType): string =>
      resolveOutboundDetailField(contact, channel, outbound?.phoneOptions ?? []).defaultValue;

    const goToDetail = (groupId: string, contact: CreateNewOutboundContact, channel: ChannelType) => {
      // Per explicit request: a `quickLaunch` contact (agents/skill queues
      // — see that field's own doc comment) skips this whole "detail"
      // screen — there's no real per-contact address worth stopping to
      // pick, so picking a channel launches immediately with the same
      // defaults the detail screen's own fields would have opened to
      // (first available address for this channel, first skill option).
      // Mirrors `handleStartCall`'s own `outbound.onStartCall?.(...)` call
      // below almost exactly, just fired straight from the channel pick
      // instead of from a later "Start Interaction" press.
      if (contact.quickLaunch) {
        outbound?.onStartCall?.({
          contact,
          channel,
          phone: defaultDetailValueFor(contact, channel),
          skillId: outbound?.skillOptions?.[0]?.value ?? "",
        });
        setOpen(false);
        return;
      }
      setDetailChannel(channel);
      setDetailPhone(defaultDetailValueFor(contact, channel));
      // First skill, not `""` — see `detailSkill`'s own doc comment above.
      setDetailSkill(outbound?.skillOptions?.[0]?.value ?? "");
      pushScreen({ kind: "detail", groupId, contactId: contact.id, channel });
    };

    // "Continue with" ad-hoc flow (see the empty-search-results `Button`
    // below, and `buildAdHocSearchContact`'s own doc comment) — builds the
    // throwaway contact from whatever's currently typed, stashes it in
    // `adHocContact` so `activeOutboundContact` can find it by id, and
    // goes straight to the detail screen for it, same as clicking a real
    // contact row would. `groupId` is whichever group's Select is
    // currently active — `goToDetail` needs SOME group id to stamp onto
    // the `"detail"` screen (for its back button to return to), and
    // there's no more natural choice than "whichever filter the agent was
    // searching from."
    const handleContinueWithSearch = (query: string, groupId: string) => {
      const { contact, channel } = buildAdHocSearchContact(query);
      setAdHocContact(contact);
      goToDetail(groupId, contact, channel);
    };

    const activeCategory =
      screen.kind === "category" || screen.kind === "channels"
        ? categories?.find((c) => c.id === screen.categoryId)
        : undefined;
    const activeContact =
      screen.kind === "channels" ? activeCategory?.contacts.find((c) => c.id === screen.contactId) : undefined;

    const filteredContacts = activeCategory
      ? search.trim()
        ? activeCategory.contacts.filter(
            (c) =>
              c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              c.subtitle?.toLowerCase().includes(search.trim().toLowerCase())
          )
        : activeCategory.contacts
      : [];

    // ── Outbound flow derived state ──
    // `"outbound-menu"` resolves to `initialOutboundGroupId`'s group (the
    // default/"Favorites" group) — that's what powers the menu screen's
    // OWN generic search box (typing there searches across every group,
    // same as picking Favorites explicitly and searching from inside it;
    // see `activeGroupContacts`' own doc comment on why "favorites" kind
    // searches every group) and its idle "already favorited" contact
    // list underneath the row list, both unchanged from before this
    // screen kind existed.
    const activeGroup =
      screen.kind === "group" || screen.kind === "detail"
        ? outbound?.groups.find((g) => g.id === screen.groupId)
        : screen.kind === "outbound-menu"
        ? outbound?.groups.find((g) => g.id === initialOutboundGroupId)
        : undefined;
    // Every contact across every group, so a "favorites" group can show
    // starred contacts regardless of which group they actually live in —
    // its own `contacts` (if any) is ignored for this kind (see the
    // CreateNewOutboundGroup.kind doc comment).
    const allOutboundContacts = React.useMemo(
      () => (outbound?.groups ?? []).flatMap((g) => g.contacts ?? []),
      [outbound]
    );
    // Which group each contact belongs to — used only to render a section
    // separator between groups once the "All"/favorites group's results
    // span more than one underlying group (e.g. a search matching both
    // Agents and Customers), just below. Kept separate from
    // `allOutboundContacts` above rather than folded into it — every OTHER
    // consumer of that list (plain contact-by-id lookups) has no use for
    // which group a contact came from.
    //
    // Keyed by the contact OBJECT itself, not `contact.id` — a real,
    // shipped bug: a contact's `id` is NOT guaranteed unique across
    // groups. Once a "teams"-kind group's `subFilter` picks a team, that
    // group's own `contacts` gets swapped to that team's real member
    // roster (`OUTBOUND_TEAM_MEMBERS`, agent-next-gen-outbound-data.tsx) —
    // the SAME underlying agent records already present in the "agents"
    // group, just run through the same `tagOpenChannels` mapper a second
    // time (a fresh object, same `id`). An id-keyed `Map` can't tell those
    // two occurrences apart: every group after "agents" in iteration order
    // silently overwrote that shared id's entry, so a team member's row —
    // even the one genuinely rendered from the "agents" group's own
    // contiguous block — read its label back as "Teams" instead of
    // "Agents" (and, since `allOutboundContacts` now legitimately contains
    // that same agent twice — once per group — a search matching both
    // surfaced it twice too). Objects are unique per group by construction
    // (each group maps its own contacts through `tagOpenChannels`
    // independently, so no two groups ever share an object reference even
    // when they share an id), so keying on the object itself makes each
    // occurrence resolve to the group it actually, physically came from.
    const contactGroupLabel = React.useMemo(
      () =>
        new Map<CreateNewOutboundContact, string>(
          (outbound?.groups ?? []).flatMap((g) => (g.contacts ?? []).map((c) => [c, g.label] as const))
        ),
      [outbound]
    );
    const activeGroupContacts =
      activeGroup?.kind === "favorites"
        ? search.trim()
          // Searching from Favorites checks every contact across every
          // group (the same pool `allOutboundContacts` already builds for
          // this kind), not just the ones already starred — per explicit
          // request, typing a name/number/email here should be able to
          // surface (and let the agent favorite) any matching contact,
          // not only ones already in Favorites. With no search text,
          // Favorites still only shows what's actually starred.
          ? allOutboundContacts
          : allOutboundContacts.filter((c) => favoriteIds.has(c.id))
        : outbound?.hideContactList && !search.trim()
          // Per explicit request: filtering by Agents/Teams/Skills/
          // Customers should show that group's OWN favorited contacts
          // when idle (mirroring what the favorites-kind "All" group
          // always did), not an empty body — `hideContactList` still
          // means "don't show the full unfiltered browse list," it just
          // no longer means "show nothing at all." Scoped to
          // `activeGroup.contacts` (not `allOutboundContacts`), unlike
          // the favorites-kind branch above — a favorited AGENT should
          // show up under Agents, not under Teams too.
          ? (activeGroup?.contacts ?? []).filter((c) => favoriteIds.has(c.id))
          : activeGroup?.contacts ?? [];
    // Matches on name, id/subtitle, primary phone (value or formatted
    // label), and email — "a name, number, email" per explicit request.
    // `primaryPhone`/`email` are both optional (see their own doc comments
    // on `CreateNewOutboundContact`), so records without one (e.g. a team
    // or skill) just never match on that field, same as `subtitle` already
    // being optional.
    const contactMatchesSearch = (c: CreateNewOutboundContact, query: string) => {
      const q = query.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        !!c.subtitle?.toLowerCase().includes(q) ||
        !!c.email?.toLowerCase().includes(q) ||
        !!c.primaryPhone?.value.toLowerCase().includes(q) ||
        !!c.primaryPhone?.label.toLowerCase().includes(q)
      );
    };
    const filteredGroupContacts = search.trim()
      ? activeGroupContacts.filter((c) => contactMatchesSearch(c, search.trim()))
      : activeGroupContacts;
    // Feeds the "Continue with" ad-hoc-contact button (see the empty-
    // search-results branch below and `buildAdHocSearchContact`) — a
    // typed query that looks like a real email or phone number gets an
    // escape hatch to proceed even when it matched no real directory
    // record.
    const trimmedSearchQuery = search.trim();
    const searchQueryIsEmail = looksLikeEmail(trimmedSearchQuery);
    const searchQueryIsPhone = !searchQueryIsEmail && looksLikePhoneNumber(trimmedSearchQuery);
    const totalGroupPages = Math.max(1, Math.ceil(filteredGroupContacts.length / pageSize));
    const safePage = Math.min(page, totalGroupPages);
    const pagedGroupContacts = filteredGroupContacts.slice(
      (safePage - 1) * pageSize,
      safePage * pageSize
    );

    // Looked up from `allOutboundContacts` (every contact across every
    // group), NOT `activeGroupContacts` (the currently-VISIBLE, filtered
    // list) — this was a real, shipped bug. `activeGroupContacts` for a
    // `"favorites"`-kind group only ever contains starred contacts once
    // `search` is empty, and `pushScreen`/`goToDetail` (which navigate here
    // when a row is clicked) unconditionally clear `search` — so clicking
    // a NON-favorited contact found via search, then landing on this
    // detail screen with `search` reset to "", made that same contact
    // vanish from `activeGroupContacts` a render later, and this lookup
    // came back `undefined`. With nothing to render for, the whole detail
    // screen (name/"Select Channel"/"Select Phone"/"Outbound Skill") fell
    // through to showing NOTHING but the footer's "Start Interaction"
    // button. The detail screen should always be able to find whichever
    // contact it's showing, regardless of that contact's favorite status,
    // the current search text, or which group is selected in the dropdown
    // — `allOutboundContacts` is unaffected by any of those, so it fixes
    // this outright rather than papering over one of the several ways
    // `activeGroupContacts` could exclude the very contact being viewed.
    // Checks `adHocContact` first — a "Continue with" ad-hoc contact (see
    // its own doc comment and `buildAdHocSearchContact`) lives in that
    // dedicated bit of state, not in any `outbound.groups[].contacts`
    // list, so it would never turn up in `allOutboundContacts` no matter
    // what. Falls back to the real lookup for every other contact.
    const activeOutboundContact =
      screen.kind === "detail"
        ? adHocContact?.id === screen.contactId
          ? adHocContact
          : allOutboundContacts.find((c) => c.id === screen.contactId)
        : undefined;
    const availableChannelsForContact = (outbound?.channelOptions ?? []).filter((c) =>
      activeOutboundContact ? activeOutboundContact.channels.includes(c.id) : true
    );
    // goToDetail seeds the right default the moment screen 2 is entered, but
    // "Select Channel" stays editable once there (see its own comment) — if
    // the user switches channel on-screen, the second field needs to swap
    // from a phone number to a synthesized email/handle (or back) too.
    React.useEffect(() => {
      if (screen.kind !== "detail" || !activeOutboundContact || !detailChannel) return;
      setDetailPhone(defaultDetailValueFor(activeOutboundContact, detailChannel));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailChannel]);

    // External deep-link (see `CreateNewOutboundConfig.launchRequest`'s own
    // doc comment) — e.g. `InteractionNavItem`'s "Add Outbound" button
    // already knows which contact+channel to start, so this jumps straight
    // to the call-setup screen for it instead of making the agent re-pick
    // the same contact from this popover's own list. Resets the stack to
    // exactly [group, detail] rather than pushing onto whatever was already
    // there, so the back button returns to that contact's own group list
    // regardless of what screen this popover happened to be showing (or was
    // left showing) beforehand.
    React.useEffect(() => {
      const req = outbound?.launchRequest;
      if (!req) return;
      const contact = allOutboundContacts.find((c) => c.id === req.contactId);
      if (!contact) {
        outbound?.onLaunchRequestHandled?.();
        return;
      }
      const group = (outbound?.groups ?? []).find((g) => (g.contacts ?? []).some((c) => c.id === req.contactId));
      const groupId = group?.id ?? initialOutboundGroupId ?? "";
      // Deferred one tick: this is very often triggered by *closing* a
      // different, unrelated Radix Popover elsewhere on the page first (e.g.
      // InteractionNavItem's own "Add Outbound" flyout, see
      // OutboundAddButton) — its onSelect fires (setting launchRequest) in
      // the very same click that closes it. Opening this popover
      // synchronously in that same tick raced with the other one's own
      // close/unmount and focus teardown: this popover's Radix dismissable
      // layer would see focus land outside itself (since focus was still
      // settling from the just-closed flyout, not this popover's own
      // trigger) and immediately treat that as an outside interaction,
      // closing it right back — a visible open-then-instantly-close flash.
      // Letting the other popover's close finish first (one macrotask) before
      // this one opens avoids the race entirely.
      const t = setTimeout(() => {
        setDetailChannel(req.channel);
        setDetailPhone(defaultDetailValueFor(contact, req.channel));
        // First skill, not `""` — see `detailSkill`'s own doc comment above.
        setDetailSkill(outbound?.skillOptions?.[0]?.value ?? "");
        setSearch("");
        setStack([{ kind: "group", groupId }, { kind: "detail", groupId, contactId: contact.id, channel: req.channel }]);
        openedViaLaunchRequestRef.current = true;
        setOpen(true);
        outbound?.onLaunchRequestHandled?.();
      }, 0);
      return () => clearTimeout(t);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outbound?.launchRequest]);

    // Label + options for screen 2's second field, matching whichever
    // channel is currently selected — delegates to the same
    // `resolveOutboundDetailField` `OutboundAddButton` uses (see that
    // function's own doc comment): any address already in use for an open
    // interaction with this contact (there can be more than one, e.g. two
    // open SMS threads on different numbers) is dropped from the list
    // entirely rather than shown disabled, so it can't sit there
    // pre-selected either. When that leaves no options at all (e.g.
    // email/WhatsApp's one derived address is already open), the field just
    // renders empty — no value, no placeholder.
    const detailFieldMeta =
      activeOutboundContact && detailChannel
        ? resolveOutboundDetailField(activeOutboundContact, detailChannel, outbound?.phoneOptions ?? [])
        : { label: "Select Phone", options: outbound?.phoneOptions ?? [] };

    const handleStartCall = () => {
      if (!outbound || !activeOutboundContact || !detailChannel || !detailSkill) return;
      outbound.onStartCall?.({
        contact: activeOutboundContact,
        channel: detailChannel,
        phone: detailPhone,
        skillId: detailSkill,
      });
      setOpen(false);
    };

    // Shared by the dialpad group's "Dial Number" button and its Enter-to-dial
    // keyboard shortcut, so both agree on exactly what counts as dialable —
    // isPhoneNumberComplete is the same per-country digit-count check
    // PhoneInput uses internally for its own validation error, reused here
    // instead of re-deriving it (CONTRIBUTING.md §1).
    const selectedPhoneCountry = PHONE_COUNTRIES.find((c) => c.code === phone.countryCode) ?? PHONE_COUNTRIES[0];
    const isDialpadNumberValid = isPhoneNumberComplete(phone.number, selectedPhoneCountry);
    const handleDialNumber = () => {
      if (!isDialpadNumberValid) return;
      outbound?.onQuickDial?.(`${selectedPhoneCountry.dial}${phone.number}`);
      setOpen(false);
    };

    const headerTitle =
      screen.kind === "root"
        ? title
        : screen.kind === "category"
        ? activeCategory?.label ?? title
        : screen.kind === "channels"
        ? activeContact?.name ?? title
        : screen.kind === "outbound-menu"
        ? outbound?.outboundTitle ?? "New Outbound"
        : screen.kind === "group"
        ? // Every pushed group screen (Dial Pad included — it's reached
          // the same way as any other row now, see `goToGroup`) shows its
          // own label as the title, the same way `"channels"` above shows
          // the contact it's viewing rather than the flow-wide title.
          activeGroup?.label ?? outbound?.outboundTitle ?? "New Outbound"
        : /* screen.kind === "detail" */ activeOutboundContact?.name ?? outbound?.outboundTitle ?? "New Outbound";

    // Back button shows on any drill-down sub-screen, and on the outbound
    // flow's "detail" and "group" sub-screens — lets the user return to
    // the contact list/group menu without closing and reopening the whole
    // popover. Only the outbound flow's OWN screen 1 (`"outbound-menu"`)
    // has no action list above it to go back to, so it keeps getting no
    // back button — same as drill-down's `"root"`.
    const showBackButton =
      (isDrillDown && screen.kind !== "root") ||
      (isOutboundFlow && (screen.kind === "detail" || screen.kind === "group"));

    // A single persistent button, not two JSX branches swapped by
    // `expanded` — its width/colors/padding and the label's reveal are all
    // driven by conditional classes on the *same* element so the
    // open↔collapse transition is one continuous CSS animation instead of
    // an instant unmount/remount. `duration-200` matches LeftNav's own nav
    // width transition (`transition-all duration-200` in left-nav.tsx) so
    // the button and the rail it sits in move in step. This was previously
    // two separate `<button>`s (compact vs. full-width secondary) picked by
    // a ternary — every toggle destroyed and recreated the DOM node (and,
    // via the Tooltip-wrapping branch below, the whole Popover along with
    // it), which is why the open animation looked "elegant" (the label
    // simply appeared once the new node existed) but closing looked
    // "clunky" (the full label was still on-screen the instant the node
    // was swapped out, with no transition possible on a node that no
    // longer exists).
    const trigger = (
      <button
        ref={ref}
        aria-label={title}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          // Same tokens as Button's "default" (primary) variant — see
          // button.tsx's buttonVariants — reused directly rather than
          // guessed, per CONTRIBUTING.md §1. No border: a primary button is
          // a solid fill, unlike the previous outline/secondary treatment.
          "flex h-9 items-center justify-center rounded-lyra-sm overflow-hidden",
          "bg-lyra-bg-primary text-lyra-fg-on-primary transition-all duration-200",
          "hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          expanded ? "w-full px-4" : "w-9 px-0",
          className
        )}
        {...props}
      >
        <Plus className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
        {/* Spacing between icon and label lives on the label itself
            (`ml-2`/`ml-0`), not a `gap-*` on the button — a flex `gap`
            reserves space between items even when one has zero width,
            which pushed the icon a few pixels off-center in the collapsed
            state (visible in devtools: the "0 × 20" label span still ate
            into the layout via the gap). Zeroing the label's own margin
            alongside its width/opacity means it contributes nothing at all
            when collapsed, so the icon centers exactly — while still
            keeping every property transition-able for a smooth reveal
            (unlike `display: none`, which can't be animated and would
            reintroduce the abrupt open/close swap this component was just
            fixed to avoid). */}
        <span
          aria-hidden={!expanded}
          className={cn(
            // `lyra-label` (500 weight), not `lyra-body-md` (400,
            // lyra-tokens.css) — this is a button's own label, and every
            // other button in the system gets its text weight from
            // `lyra-label` via `buttonVariants`'s base class (button.tsx).
            // `lyra-body-md` here was rendering this one button's label
            // visibly lighter than every other button next to it.
            "lyra-label overflow-hidden whitespace-nowrap transition-all duration-200",
            expanded ? "max-w-[200px] ml-2 opacity-100" : "max-w-0 ml-0 opacity-0"
          )}
        >
          {title}
        </span>
      </button>
    );

    // Header — swaps between the static title and a back-button + dynamic
    // title as the drill-down stack grows/shrinks. For the outbound flow's
    // "group" screen, the group picker + search field ride along here too,
    // so both stay pinned above the scrollable contact list rather than
    // scrolling away with it (Popover's `header` prop renders outside the
    // scroll area, same as `footer`).
    const popoverHeader = (
      <>
        <div className="flex items-center gap-1.5 border-b border-lyra-border-subtle px-4 py-3">
          {showBackButton && (
            <button
              type="button"
              aria-label="Back"
              onClick={popScreen}
              className={cn(
                "-ml-1.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lyra-sm",
                "text-lyra-fg-secondary transition-colors",
                "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
              )}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
          <span className="min-w-0 flex-1 truncate lyra-body-lg-emphasis text-lyra-fg-default">
            {headerTitle}
          </span>
          <PopoverClose asChild>
            <button
              aria-label="Close"
              className={cn(
                "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lyra-sm",
                "text-lyra-fg-action transition-colors",
                "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
              )}
            >
              <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </PopoverClose>
        </div>

        {/* Outbound flow's screen 1 — the group-row list itself. Per
            explicit follow-up request, this now has its OWN generic search
            field (searches across every group, same "favorites" behavior
            `activeGroup` resolves this screen to — see its own doc
            comment) rather than sharing a search box with whichever
            specific group is currently drilled into (there IS no specific
            group here anymore, see `Screen`'s own `"outbound-menu"` doc
            comment). Picking Dial Pad or any row PUSHES a real `"group"`
            screen (below) instead of swapping this screen's own content in
            place. */}
        {isOutboundFlow && screen.kind === "outbound-menu" && activeGroup && (
          <div className="border-b border-lyra-border-subtle px-4 py-3">
            {/* Only the search field lives in this pinned header now — per
                explicit follow-up request, the Dial Pad button + group row
                list (previously right below this, inside this same pinned
                block) moved down into the scrollable `content` area (see
                its own doc comment further down) so a tall group list can
                actually scroll once the popover's available height runs
                out, instead of silently overflowing this non-scrolling
                header the way it did before. */}
            <div className="relative">
              <Input
                ref={searchInputRef}
                // Stable, explicit id (not the default auto-`useId()`
                // one) — app consumers of `CreateNew` locate this exact
                // field via `document.querySelector` to autofocus it once
                // the popover opens (see e.g. `AgentNextGenPage.tsx`'s own
                // `onDocumentClick` effect), so this needs to be a fixed,
                // predictable selector rather than an id that changes
                // between renders/consumers.
                id="new-outbound-search"
                type="text"
                label={outbound?.searchLabel}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                endIcon={search ? <X className="h-4 w-4 text-lyra-fg-action" strokeWidth={1.5} aria-hidden="true" /> : undefined}
              />
              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  // `bottom-1.5` (not the previous `top-1/2
                  // -translate-y-1/2`) — that centered against this whole
                  // wrapper's height, which was fine when the wrapper
                  // contained only the input row, but now that `Input`
                  // renders a real `label` above the field (per explicit
                  // follow-up — see `Input`'s own `label` prop below),
                  // the wrapper's height includes the label too, so
                  // centering against ALL of it would float this button
                  // too high, roughly between the label and the field
                  // instead of over the field. Anchoring from the bottom
                  // instead is correct regardless of whether a label
                  // renders above: the input row is always flush with the
                  // wrapper's own bottom edge, and `bottom-1.5` (6px) is
                  // exactly `(input row's h-9 − this button's own h-6) / 2`
                  // — the same vertical centering the old approach
                  // produced, just measured from the other edge.
                  className="absolute right-2.5 bottom-1.5 h-6 w-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                />
              )}
            </div>
          </div>
        )}

        {/* Outbound flow's screen 2 — reached by picking a row above
            (`goToGroup`). Per explicit follow-up request, this is a real
            navigated-to screen (back button + this group's own label as
            the title, both via `headerTitle`/`showBackButton` above) with
            its OWN search field scoped to just this group ("Search
            {label}", not the flow-wide `outbound?.searchLabel` screen 1
            uses), matching how `"channels"` below already gets its own
            dedicated screen once a category's contact is picked.
            `hasSearchField`/`hasSubFilter` gate the WHOLE block (not just
            the search field's own inner check) — a Dial Pad or empty-
            placeholder group has neither (the phone field itself, in
            `content` below, is a Dial Pad screen's own "input"), and
            without this outer guard the block still rendered as an empty
            padded, bordered box with nothing inside it: a stray gap and
            divider line sitting above the phone field for no reason. */}
        {isOutboundFlow &&
          screen.kind === "group" &&
          activeGroup &&
          (() => {
            const hasSearchField = (activeGroup.kind ?? "contacts") === "contacts" || activeGroup.kind === "favorites";
            const hasSubFilter = !!activeGroup.subFilter;
            return (
              (hasSearchField || hasSubFilter) && (
                <div className="border-b border-lyra-border-subtle px-4 py-3 space-y-3">
                  {hasSearchField && (
                    <div className="relative">
                      <Input
                        ref={searchInputRef}
                        id="new-outbound-group-search"
                        type="text"
                        label={`Search ${activeGroup.label}`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                        endIcon={search ? <X className="h-4 w-4 text-lyra-fg-action" strokeWidth={1.5} aria-hidden="true" /> : undefined}
                      />
                      {search && (
                        <button
                          type="button"
                          aria-label="Clear search"
                          onClick={() => setSearch("")}
                          className="absolute right-2.5 bottom-1.5 h-6 w-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                        />
                      )}
                    </div>
                  )}
                  {/* Per-group secondary picker — see `CreateNewOutboundGroup.
                      subFilter`'s own doc comment above. Renders below this
                      group's own search field so it reads as a further
                      narrowing of the group already selected (e.g. Teams → a
                      specific team), not a competing top-level filter. */}
                  {hasSubFilter && (
                    <Select
                      aria-label={activeGroup.subFilter!.ariaLabel}
                      placeholder={activeGroup.subFilter!.placeholder}
                      value={activeGroup.subFilter!.value}
                      onValueChange={activeGroup.subFilter!.onChange}
                      options={activeGroup.subFilter!.options}
                      portalDropdown
                    />
                  )}
                </div>
              )
            );
          })()}

        {/* Drill-down flow's category screen: same "search pinned outside
            the scroll area" treatment as the outbound flow's group/contacts
            search above, moved here (out of `content`) for the same reason —
            see the maxHeight/overflow note on the Popover call below. */}
        {isDrillDown && screen.kind === "category" && activeCategory && (
          <div className="border-b border-lyra-border-subtle px-4 py-3">
            <div className="relative">
              <Input
                ref={searchInputRef}
                type="text"
                placeholder={activeCategory.searchPlaceholder ?? `Search ${activeCategory.label.toLowerCase()}`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                endIcon={search ? <X className="h-4 w-4 text-lyra-fg-action" strokeWidth={1.5} aria-hidden="true" /> : undefined}
              />
              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                />
              )}
            </div>
          </div>
        )}
      </>
    );

    const popover = (
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        align="start"
        sideOffset={6}
        showArrow={false}
        onOpenAutoFocus={(e) => {
          // See `openedViaLaunchRequestRef`'s own doc comment above — only
          // cancel Radix's auto-focus for a normal user-click open (the
          // default keeps focus on this component's own trigger button,
          // which the agent just clicked); a launchRequest-driven open has
          // no such trigger click to preserve focus on, and needs Radix's
          // real auto-focus to land inside this content instead.
          if (openedViaLaunchRequestRef.current) {
            openedViaLaunchRequestRef.current = false;
            return;
          }
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          // On any sub-screen with a back button (see showBackButton above),
          // Escape steps back one level instead of closing the whole
          // popover outright. Only screens with no back step (screen 1,
          // drill-down's root category list) fall through to the default
          // close-the-popover behavior.
          if (showBackButton) {
            e.preventDefault();
            popScreen();
          }
        }}
        // Always clamped to whatever room Radix Popper actually measured
        // between the trigger and the viewport edge (falling back to 480px
        // before that's known) — every screen, not just the ones with long
        // lists. Previously this was only set for "detail"/contacts-group
        // screens; every other screen (root, category, channels, dialpad,
        // favorites/empty groups) had no height ceiling at all, so a long
        // enough list could grow the popover taller than the viewport had
        // room for — Radix would still try to keep it on-screen, but the
        // content itself could briefly render past the edge (or force the
        // page to scroll) before that settled, which read as a flash of
        // stray overflow-x/overflow-y on open. Unconditionally capping the
        // height means the popover can never exceed available space in the
        // first place — its own internal list scrolls instead (see the
        // scroll-wrapper `div` inside popover.tsx that this activates).
        maxHeight="var(--radix-popper-available-height, 480px)"
        header={popoverHeader}
        footer={
          screen.kind === "detail" ? (
            <div className="border-t border-lyra-border-subtle p-4">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                disabled={!detailSkill}
                onClick={handleStartCall}
              >
                Start Interaction
              </Button>
            </div>
          ) : (screen.kind === "group" || screen.kind === "outbound-menu") &&
            ((activeGroup?.kind ?? "contacts") === "contacts" || activeGroup?.kind === "favorites") &&
            filteredGroupContacts.length > 0 &&
            // Per a later explicit request ("display all of the agents
            // ... paginate"), a contacts-kind group's idle FULL roster
            // (`!outbound?.hideContactList`, see that flag's own doc
            // comment) now needs this footer too, not just once actively
            // searching. "favorites" is deliberately excluded from that
            // idle case — its own idle list is always just already-
            // starred contacts (short, `activeGroupContacts`'s own doc
            // comment), regardless of `hideContactList`, so it keeps the
            // original no-footer-until-searching treatment described
            // below.
            (!!search.trim() || (activeGroup?.kind !== "favorites" && !outbound?.hideContactList)) ? (
            // `!!search.trim()` — per the ORIGINAL explicit request, no
            // pagination footer at all in the idle/no-search state (idle
            // being blank, per-group favorited contacts, or "All"'s
            // cross-group favorited contacts — see `activeGroupContacts`'s
            // own doc comment), only once actively searching. A short
            // idle list of favorites doesn't need paging chrome sitting
            // under it; a real search result set might, which is why this
            // still needs to cover BOTH kinds once there IS a query — see
            // the note below on why `"favorites"` specifically must be
            // included here, not just `"contacts"`. (The condition above
            // now ALSO allows a non-favorites idle full roster through —
            // see that line's own comment.)
            //
            // `filteredGroupContacts.length > 0` — also per explicit
            // request: a search with zero matches ("No matches found",
            // below) shouldn't still show a "Displaying 0-0 of 0"/"Page 1
            // of 1" footer underneath it — there's nothing to page through
            // either way, and showing paging chrome around an empty result
            // just as it stopped mattering for the idle case above.
            //
            // `activeGroup?.kind === "favorites"` is included here per a
            // real, shipped bug: the favorites/"All" group used to be
            // excluded from ever showing this footer (back when it only
            // ever listed a handful of already-starred contacts, small
            // enough that pagination seemed unnecessary) — but once
            // searching from "All" started matching across every group's
            // ENTIRE contact list (rule in CLAUDE.md), that assumption
            // broke: a search could match far more than one page's worth,
            // and with no footer to page forward, `pagedGroupContacts`
            // silently truncated to just the first `pageSize` results
            // (in whatever order `allOutboundContacts` happens to
            // concatenate groups, e.g. Agents before Teams/Skills/
            // Customers) — reading as "All only searches Agents" even
            // though `filteredGroupContacts` had already matched
            // everything correctly underneath.
            <TableFooter
              currentPage={safePage}
              totalPages={totalGroupPages}
              onPageChange={setPage}
              rowsPerPage={pageSize}
              totalRecords={filteredGroupContacts.length}
              displayStart={filteredGroupContacts.length === 0 ? 0 : (safePage - 1) * pageSize + 1}
              displayEnd={Math.min(safePage * pageSize, filteredGroupContacts.length)}
              showRowsPerPage={false}
              showJumpButtons={false}
              className="px-4"
            />
          ) : screen.kind === "group" && activeGroup?.kind === "dialpad" ? (
            <div className="border-t border-lyra-border-subtle p-4">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                disabled={!isDialpadNumberValid}
                onClick={handleDialNumber}
              >
                Dial Number
              </Button>
            </div>
          ) : undefined
        }
        className={cn(
          /* "lg" on the Menu/Popover width scale (CONTRIBUTING.md) —
             header + close button + icon items warrants the largest step. */
          "z-[9999] w-[320px] overflow-hidden"
        )}
        // Every screen here already supplies its own complete padding
        // per-section (p-4/p-2 divs throughout, see below) rather than
        // relying on any inset from Popover itself — Popover's default
        // 16px body inset would stack on top of those and double the
        // margins on every screen.
        bodyPadding={false}
        content={
          <>
            {isOutboundFlow ? (
              /* key={} forces a remount on every screen change so the
                 animate-in transition replays each time content is swapped —
                 same technique as the generic drill-down branch below. */
              <div
                key={
                  screen.kind === "group"
                    ? `group:${screen.groupId}`
                    : screen.kind === "detail"
                    ? `detail:${screen.groupId}:${screen.contactId}`
                    : screen.kind === "outbound-menu"
                    ? "outbound-menu"
                    : "outbound"
                }
                className="animate-in fade-in-0 slide-in-from-right-1 duration-150"
              >
                {(screen.kind === "group" || screen.kind === "outbound-menu") && activeGroup && (
                  screen.kind === "outbound-menu" && !search.trim() ? (
                    // The group row list itself — per explicit follow-up
                    // request, moved here from the popover's pinned
                    // `header` above (see that block's own doc comment) so
                    // this can actually scroll inside `content`'s own
                    // scroll container once the popover runs out of
                    // available height, instead of overflowing a non-
                    // scrolling header with no way to reach the rows below
                    // the fold. Only shown idle (`!search.trim()`) — once
                    // searching, this screen falls through to the same
                    // contacts-list branch below that any other
                    // "favorites"-kind group already uses (see
                    // `activeGroup`'s own doc comment on why this screen
                    // resolves to that kind), showing matching results
                    // across every group instead of the row list.
                    //
                    // Per explicit request: the group picker is no longer
                    // a collapsed `Select` combobox — it's now an always-
                    // visible list of rows, each one a full-width button.
                    // Picking a row PUSHES a real "group" screen
                    // (`goToGroup`) — a genuine back-button transition, see
                    // that helper's own doc comment. Dial Pad is just
                    // another row here now (per a later explicit request —
                    // it used to get its own separate ghost button above
                    // this list, with its own `kind !== "dialpad"` filter
                    // excluding it from the rows; both are gone now, so it
                    // renders wherever `outbound.groups` orders it, same
                    // as every other group). No icon/count on these rows
                    // (unlike `ContactRow`'s own leading-icon treatment) —
                    // plain caps-tracked label + a trailing chevron,
                    // matching the reference mockup exactly.
                    <div>
                      {/* No extra `border-t` on this wrapper — the pinned
                          header above already ends in its own
                          `border-b border-lyra-border-subtle` (the search
                          field's own container), so adding one here too
                          doubled up into two adjacent divider lines right
                          under the search field. `ListItem` (list-item.tsx)
                          rather than a hand-rolled `<button>` row — per
                          explicit request, use the design system's own
                          default row primitive
                          here instead of one-off markup. It's a `<div>`,
                          not a real button, so `role="button"`/`tabIndex`/
                          `onKeyDown` add back the keyboard/semantics a
                          native button would give for free; its own
                          `divider` prop (default true) supplies the same
                          row-separator lines the old markup built by hand. */}
                      {(outbound?.groups ?? []).map((g) => {
                        // Per explicit request: each row's own record
                        // count, in a lighter weight than the label, e.g.
                        // "Favorites (4)"/"Agents (54,332)". `toLocaleString()`
                        // for the thousands separator in that second example.
                        // "favorites" kind counts `favoriteIds` (the same
                        // set idle-favorites browsing/`activeGroupContacts`
                        // already filters by, see that const's own doc
                        // comment) rather than `g.contacts?.length` — a
                        // "how many contacts are favorited," not "how many
                        // contacts exist across every group," is what
                        // "Favorites (N)" should mean. "dialpad"/"empty"
                        // kinds have no record count at all (Dial Pad
                        // dials a typed number, and the three placeholder
                        // groups have no contacts to count yet — see their
                        // own `kind: "empty"` doc comment) — `recordCount`
                        // is `undefined` for both, and the label renders
                        // with no "(N)" suffix rather than a misleading
                        // "(0)".
                        const recordCount =
                          g.kind === "favorites"
                            ? favoriteIds.size
                            : g.kind === "dialpad" || g.kind === "empty"
                            ? undefined
                            : g.contacts?.length ?? 0;
                        return (
                        <ListItem
                          key={g.id}
                          role="button"
                          tabIndex={0}
                          title={
                            recordCount === undefined ? (
                              g.label
                            ) : (
                              <>
                                {g.label}{" "}
                                <span className="lyra-body-md text-lyra-fg-secondary">
                                  ({recordCount.toLocaleString()})
                                </span>
                              </>
                            )
                          }
                          leading={g.icon}
                          trailing={
                            <ChevronRight
                              className="h-4 w-4 flex-shrink-0 text-lyra-fg-disabled"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          }
                          onClick={() => goToGroup(g.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              goToGroup(g.id);
                            }
                          }}
                        />
                        );
                      })}
                    </div>
                  ) : (activeGroup.kind ?? "contacts") === "dialpad" ? (
                    // PhoneInput (country selector + digit mask + validation)
                    // rather than a hand-rolled `<Input type="tel">` — see
                    // CONTRIBUTING.md §3 "Composition over reimplementation".
                    // PhoneInput has no onKeyDown/onSubmit prop of its own,
                    // so Enter-to-dial is caught here via ordinary DOM
                    // bubbling from its underlying <input> instead.
                    <div
                      className="p-4"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleDialNumber();
                        }
                      }}
                    >
                      {/* No `placeholder` override here — PhoneInput's own
                          per-country example (e.g. "(555) 555-5555" for the
                          US) is more useful than a fixed generic string, and
                          it updates automatically as the country changes.
                          `dropdownClassName="z-[10003]"`: the country
                          dropdown is a Popover nested inside this
                          component's own z-[9999] popover panel — same
                          nested-popover case as the per-row channel flyout,
                          see CONTRIBUTING.md §5. */}
                      <PhoneInput value={phone} onChange={setPhone} dropdownClassName="z-[10003]" />
                      {/* Same `detailSkill`/`setDetailSkill` state (and the
                          same `outbound?.skillOptions` list) the "detail"
                          screen's own "Outbound Skill" field below already
                          uses — one shared skill choice for however the
                          agent starts an outbound interaction, dialpad or
                          contact-detail, rather than two independently-
                          tracked selections that could disagree. `mt-4`
                          (not a `space-y-4` on the parent) since this is
                          the one and only sibling PhoneInput has here. */}
                      <Select
                        label="Select outbound skill"
                        placeholder="Select outbound skill"
                        value={detailSkill || undefined}
                        onValueChange={setDetailSkill}
                        options={outbound?.skillOptions ?? []}
                        className="mt-4"
                      />
                    </div>
                  ) : activeGroup.kind === "empty" ? (
                    <p className="px-4 py-8 text-center lyra-body-sm text-lyra-fg-secondary">
                      {activeGroup.emptyMessage ?? `No ${activeGroup.label.toLowerCase()} yet`}
                    </p>
                  ) : (
                    // No separate `hideContactList` blank-body branch here
                    // anymore — `activeGroupContacts`/`filteredGroupContacts`
                    // (see their own doc comments above) already resolve to
                    // the right list for every state (that group's own
                    // favorited contacts when idle with `hideContactList`
                    // on, the full match list once searching, or the full
                    // list outright when `hideContactList` is off), so this
                    // one render branch just shows whatever that is —
                    // there's no longer a distinct "nothing to show" idle
                    // case to special-case around.
                    <div className="p-2">
                      {pagedGroupContacts.length > 0 ? (
                        pagedGroupContacts.map((contact, i) => {
                          // Per explicit request: once "All"'s own results
                          // mix contacts from more than one underlying group
                          // (only possible while actively searching — see
                          // `activeGroupContacts`'s own doc comment above on
                          // why idle "All" only ever shows already-favorited
                          // contacts, which stay in their normal per-group
                          // row order but rarely span groups), a section
                          // separator + that next group's own label marks
                          // where it starts, same "small caps" treatment
                          // `donut-chart.tsx`'s own legend already uses for
                          // this kind of label. Compares against the
                          // PRECEDING row's group, not a running "last seen"
                          // ref, so this stays pure/derivable straight from
                          // `pagedGroupContacts` — no extra state, and it
                          // recomputes correctly if the page or search
                          // changes. Scoped to `kind === "favorites"` only:
                          // every other group is single-source by
                          // definition (its own `contacts` list), so this
                          // condition is never true there anyway, but
                          // spelling it out avoids the map lookup running
                          // pointlessly on every row of a single-group list.
                          const showGroupHeader =
                            activeGroup.kind === "favorites" &&
                            !!search.trim() &&
                            contactGroupLabel.get(contact) !==
                              (i === 0 ? undefined : contactGroupLabel.get(pagedGroupContacts[i - 1]));
                          const groupLabel = contactGroupLabel.get(contact);
                          return (
                            <React.Fragment key={contact.id}>
                              {showGroupHeader && groupLabel && (
                                <div
                                  className={cn(
                                    "px-3 pb-1.5 lyra-body-sm-emphasis text-lyra-fg-secondary uppercase tracking-wide",
                                    // No leading border/margin on the very
                                    // first section — the popover's own
                                    // search field above already separates
                                    // it from the list; only subsequent
                                    // sections need their own divider.
                                    i === 0 ? "pt-1" : "mt-2 border-t border-lyra-border-subtle pt-3"
                                  )}
                                >
                                  {groupLabel}
                                </div>
                              )}
                              <OutboundContactRow
                                contact={contact}
                                channelOptions={outbound?.channelOptions ?? []}
                                onSelect={(ch) => goToDetail(activeGroup.id, contact, ch)}
                                favorited={favoriteIds.has(contact.id)}
                                onToggleFavorite={() =>
                                  setFavoriteIds((prev) => {
                                    const next = new Set(prev);
                                    if (next.has(contact.id)) next.delete(contact.id);
                                    else next.add(contact.id);
                                    return next;
                                  })
                                }
                              />
                            </React.Fragment>
                          );
                        })
                      ) : (
                        <div className="px-3 py-6 text-center">
                          <p className="lyra-body-sm text-lyra-fg-secondary">
                            {activeGroupContacts.length === 0
                              ? activeGroup.kind === "favorites"
                                ? activeGroup.emptyMessage ?? "No favorites yet"
                                : outbound?.hideContactList && !search.trim()
                                  // Distinct from the "browse mode" message
                                  // below — an empty `activeGroupContacts`
                                  // here means "nothing favorited in this
                                  // group yet" (see its own doc comment),
                                  // NOT "this group has no contacts at all,"
                                  // which `No {label} available` would
                                  // wrongly imply. `activeGroup.emptyMessage`
                                  // takes priority when set (e.g. Teams'
                                  // "Choose a team above to see its agents"
                                  // before a `subFilter` pick has narrowed
                                  // `contacts` to anything at all — the
                                  // generic "No favorited teams yet" would
                                  // be actively misleading there, since
                                  // there's no team chosen to favorite from
                                  // yet).
                                  ? activeGroup.emptyMessage ?? `No favorited ${activeGroup.label.toLowerCase()} yet`
                                  : activeGroup.emptyMessage ?? `No ${activeGroup.label.toLowerCase()} available`
                              // Generic "No matches found" per explicit
                              // request — not `No matching {label}` (e.g.
                              // "No matching all", which read oddly since
                              // "All" isn't really a noun a result set can
                              // "match"). Search misses read the same way
                              // regardless of which group is selected.
                              : "No matches found"}
                          </p>
                          {/* "Continue with" ad-hoc contact — only in the
                              genuine "No matches found" case (implied by
                              `activeGroupContacts.length > 0`; see that
                              branch's own comment above), and only when
                              the typed query itself looks like a real
                              email or phone number (`looksLikeEmail`/
                              `looksLikePhoneNumber`) — a plain name that
                              didn't match anything isn't something this
                              flow can do anything useful with. Per
                              explicit request: lets the agent proceed
                              straight to the call-setup detail screen for
                              a raw address that isn't in the directory,
                              rather than being stuck with no path
                              forward. */}
                          {activeGroupContacts.length > 0 &&
                            (searchQueryIsEmail || searchQueryIsPhone) && (
                              <Button
                                variant="outline"
                                size="lg"
                                // `wrap` (button.tsx) — a long typed email
                                // easily overflows a 320px-wide popover on
                                // the single line every button otherwise
                                // renders on; this lets it wrap and grow
                                // instead of clipping or forcing the
                                // popover wider. `w-full` matches this
                                // popover's other full-width footer buttons
                                // (Start Interaction/Dial Number) instead of
                                // sizing to content like a normal button.
                                wrap
                                className="mt-3 w-full"
                                onClick={() => handleContinueWithSearch(trimmedSearchQuery, activeGroup.id)}
                              >
                                Continue with &quot;{trimmedSearchQuery}&quot;
                              </Button>
                            )}
                        </div>
                      )}
                    </div>
                  )
                )}

                {screen.kind === "detail" && activeOutboundContact && (
                  <div className="p-4 space-y-4">
                    <RadioButtonGroup
                      label="Select Channel"
                      options={availableChannelsForContact.map((c) => ({
                        value: c.id,
                        label: c.selectLabel ?? c.label,
                        disabled: isChannelBlockedForContact(activeOutboundContact, c.id, outbound?.phoneOptions ?? []),
                      }))}
                      value={detailChannel || undefined}
                      onValueChange={(v) => setDetailChannel(v as ChannelType)}
                    />
                    <Select
                      label={detailFieldMeta.label}
                      value={detailPhone || undefined}
                      onValueChange={setDetailPhone}
                      options={detailFieldMeta.options}
                    />
                    <Select
                      label="Outbound Skill"
                      placeholder="Select Outbound Skill"
                      value={detailSkill || undefined}
                      onValueChange={setDetailSkill}
                      options={outbound?.skillOptions ?? []}
                    />
                  </div>
                )}
              </div>
            ) : isDrillDown ? (
              /* key={} forces a remount on every screen change so the
                 animate-in transition replays each time content is swapped. */
              <div
                key={
                  screen.kind === "root"
                    ? "root"
                    : screen.kind === "category"
                    ? `category:${screen.categoryId}`
                    : screen.kind === "channels"
                    ? `channels:${screen.categoryId}:${screen.contactId}`
                    : "drilldown"
                }
                className="animate-in fade-in-0 slide-in-from-right-1 duration-150"
              >
                {screen.kind === "root" && (
                  <>
                    <div
                      className="border-b border-lyra-border-subtle px-4 py-3"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && phone.number.trim()) {
                          e.preventDefault();
                          const country = PHONE_COUNTRIES.find((c) => c.code === phone.countryCode) ?? PHONE_COUNTRIES[0];
                          onQuickDial?.(`${country.dial}${phone.number}`);
                          setOpen(false);
                        }
                      }}
                    >
                      {/* `phoneFieldPlaceholder` is undefined unless a
                          consumer explicitly opts in — leaving it unset
                          lets PhoneInput fall back to its own per-country
                          example instead of a fixed generic string. See
                          CONTRIBUTING.md §5 for why the dropdown needs
                          `dropdownClassName="z-[10003]"` here too (same
                          nested-popover case as the dialpad group's
                          PhoneInput above). */}
                      <PhoneInput value={phone} onChange={setPhone} placeholder={phoneFieldPlaceholder} dropdownClassName="z-[10003]" />
                    </div>
                    <Menu
                      items={(categories ?? []).map((category) => ({
                        id: category.id,
                        label: category.label,
                        icon: category.icon,
                        onClick: () => pushScreen({ kind: "category", categoryId: category.id }),
                      }))}
                      className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
                    />
                  </>
                )}

                {/* Search field lives in `popoverHeader` now (pinned above
                    this scroll area), same pattern as the outbound flow's
                    group/contacts search — see the maxHeight note on the
                    Popover call below for why. */}
                {screen.kind === "category" && activeCategory && (
                  <div className="p-2">
                    {filteredContacts.length > 0 ? (
                      filteredContacts.map((contact) => (
                        <ContactRow
                          key={contact.id}
                          contact={contact}
                          onClick={() => pushScreen({ kind: "channels", categoryId: activeCategory.id, contactId: contact.id })}
                        />
                      ))
                    ) : (
                      <p className="px-3 py-6 text-center lyra-body-sm text-lyra-fg-secondary">
                        {activeCategory.contacts.length === 0
                          ? `No ${activeCategory.label.toLowerCase()} available`
                          : `No matching ${activeCategory.label.toLowerCase()}`}
                      </p>
                    )}
                  </div>
                )}

                {screen.kind === "channels" && activeCategory && activeContact && (
                  <Menu
                    items={(channels ?? []).map((channel) => ({
                      id: channel.id,
                      label: channel.label,
                      icon: channel.icon,
                      onClick: () => {
                        onOutbound?.({ category: activeCategory, contact: activeContact, channel });
                        setOpen(false);
                      },
                    }))}
                    className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
                  />
                )}
              </div>
            ) : (
              /* Flat mode (default) — composes the real Menu component
                 rather than re-implementing its item markup, so any future
                 change to Menu's styling/behavior applies here automatically
                 instead of needing to be hand-copied. */
              <Menu
                aria-label={title}
                items={(items ?? []).map((item, i) => ({
                  id: String(i),
                  label: item.label,
                  icon: item.icon,
                  onClick: () => {
                    item.onClick?.();
                    setOpen(false);
                  },
                }))}
                className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
              />
            )}
          </>
        }
      >
        {trigger}
      </Popover>
    );

    // Only the collapsed, icon-only trigger needs a tooltip — the expanded
    // button already has a visible "New Outbound" label, so a tooltip on
    // top of it would be redundant. Tooltip has to wrap Popover from the
    // outside, not the other way around: Popover's trigger clones its
    // click/ref/aria props onto its immediate child via Radix's
    // asChild/Slot mechanism, and Tooltip doesn't forward arbitrary props
    // through to a DOM node, so it can't sit as that immediate child. The
    // wrapping span is the same Tooltip+opaque-component wrapper pattern
    // used for AgentProfile's avatar trigger.
    //
    // This wrapper is now unconditional (previously `if (expanded) return
    // popover;` returned early, only wrapping in the collapsed case) —
    // `Tooltip`'s own `disabled` prop suppresses it while expanded instead.
    // Also disabled while `open` (the popover itself is showing) — without
    // that, hovering the open dropdown while still collapsed would leave
    // this tooltip visibly sitting on top of it, since `expanded` alone
    // says nothing about whether the popover this same trigger opens is
    // currently up (see `KebabMenuButton.onOpenChange`'s doc comment in
    // kebab-menu-button.tsx for the general version of this issue).
    // Conditionally wrapping vs. not wrapping `popover` in a `<Tooltip>`
    // changes the JSX tree shape every time `expanded` toggles, which
    // forces React to unmount and remount the entire `Popover` (and its own
    // open/animation state) along with it — exactly the mechanism behind
    // the open/close animation asymmetry this was fixed alongside (see the
    // `trigger` button's own comment above). Keeping the wrapper constant
    // and toggling `disabled` preserves the `Popover` instance across
    // `expanded` changes so the trigger button's CSS transition can
    // actually play out instead of being interrupted by a remount.
    // `className="flex w-full justify-center"` (not `inline-flex`) so the
    // wrapper always stretches to the true outer layout (e.g. LeftNav's
    // footer slot) — needed for the expanded button's own `w-full` to
    // resolve against the right containing block. `justify-center` keeps
    // the collapsed (fixed `w-9`) button centered in that now-full-width
    // wrapper instead of left-aligning — previously LeftNav's own footer
    // div supplied that centering, which only worked because the wrapper
    // itself used to shrink-wrap (`inline-flex`) to the button's size.
    //
    // z-index needs no override here (unlike a tooltip nested *inside*
    // a popover's content, see CONTRIBUTING.md §5/§15) — this trigger
    // sits outside the popover panel entirely, so the Tooltip's default
    // z-[10000] already clears everything around it. placement="right",
    // not the default "top": this trigger lives in a collapsed left
    // rail (see left-nav.tsx's `footer` slot / CreateNew.stories), so
    // the tooltip needs to open into the page rather than toward the
    // rail's own edge — see CONTRIBUTING.md §16.
    return (
      <Tooltip content={title} placement="right" disabled={expanded || open}>
        <span className="flex w-full justify-center">{popover}</span>
      </Tooltip>
    );
  }
);
CreateNew.displayName = "CreateNew";

export { CreateNew, OutboundAddButton };
