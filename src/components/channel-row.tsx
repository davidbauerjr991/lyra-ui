import * as React from "react";
import {
  Clock,
  MessageSquare,
  Mail,
  Phone,
  TriangleAlert,
  User,
  ArrowUpRight,
  CircleCheck,
  ChevronDown,
  Send,
  FileDown,
  Languages,
  PlayCircle,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Tag, tagVariants, type TagVariant } from "./tag";
import { Menu, type MenuEntry } from "./menu";
import { KebabMenuButton } from "./kebab-menu-button";
import { Tab } from "./tabs";
import { Tooltip } from "./tooltip";
import { Badge } from "./badge";
import { Button } from "./button";
import { Popover } from "./popover";
import { PanelHeader } from "./panel-header";
import { Select, type SelectOption } from "./select";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { type TagPickerOption } from "./tag-picker";
import { WarningIconSolid } from "./icons/warning-icon-solid";

/* ── WhatsApp icon (not in Lucide) ──
 * Accepts `className` (default `h-3 w-3`, the chip-sized icon `ChannelRow`
 * itself uses) so a larger context — e.g. `ChannelTab`'s tab-sized icon slot
 * below — can size it up without a second hand-copied `<svg>`. */
const WhatsAppIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/** Person + redirect-arrow composite — no single Lucide icon covers "transfer". */
const ConsultTransferIcon = () => (
  <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
    <User className="h-4 w-4" strokeWidth={1.5} />
    <ArrowUpRight className="absolute -right-1 -top-1 h-2.5 w-2.5" strokeWidth={2.5} />
  </span>
);

/* ── Channel types ── */

export type ChannelType = "chat" | "email" | "sms" | "whatsapp" | "voice";

/** Channel-type → `Tag` color, per CONTRIBUTING.md's "Channel type colors"
 *  convention — Voice is purple, every text-based channel (Chat/SMS/
 *  WhatsApp all read as "Chat" for this purpose) is teal, Email is pink.
 *  Used by each `*ChannelRow` below for its chip's non-`awaitingResponse`
 *  color (see `ChannelRow`'s own `variant` prop — `awaitingResponse` still
 *  always overrides to "critical" red regardless of channel type, since
 *  that's a status signal, not a type signal). */
export const CHANNEL_TYPE_TAG_VARIANT: Record<ChannelType, TagVariant> = {
  voice: "purple",
  chat: "teal",
  sms: "teal",
  whatsapp: "teal",
  email: "pink",
};

export interface InteractionChannel {
  /** Unique identifier for this specific channel instance. Required to
   *  distinguish between two simultaneously open channels of the same
   *  `type` on one interaction — e.g. two SMS threads with the same
   *  customer on different phone numbers — since `InteractionNavItem` uses
   *  this (falling back to `type` when omitted) to decide which row is
   *  "current", which row a click/kebab-dismiss actually targets, and what
   *  React key each row renders with. Safe to omit when an interaction
   *  never opens more than one channel of the same `type` at once — `type`
   *  alone is a fine identifier in that case. */
  id?: string;
  /** Which channel this row represents — determines its icon, label, and
   *  default kebab menu items (see `ChatChannelRow` / `EmailChannelRow` /
   *  `SmsChannelRow` / `WhatsAppChannelRow` / `VoiceChannelRow` below).
   *  Override the menu for one specific row via `menuItems`. */
  type: ChannelType;
  /** Elapsed time for this channel's last message, as 4-digit MM:SS, or "Now". */
  elapsed: string;
  /** Message preview for this channel. */
  preview?: string;
  /**
   * Whether this is the channel currently open/being viewed for this
   * interaction. Only highlighted (blue background) when the parent
   * `InteractionNavItem` itself is `active` — on an inactive card, no
   * channel row is highlighted even if one is marked `current`.
   */
  current?: boolean;
  /** Whether this specific channel is the one awaiting a response —
   *  renders its chip and elapsed-time in critical (red) instead of
   *  success (green) / secondary gray. */
  awaitingResponse?: boolean;
  /** Show the trailing kebab (⋮) menu for this channel row. Default: true. */
  removable?: boolean;
  /** Override this row's default (per-`type`) kebab menu items. */
  menuItems?: MenuEntry[];
  /** Wires this channel's "Outcome" button to a real popover — see
   *  `ChannelOutcomeConfig`'s own doc comment (below `buildVoiceMenuItems`)
   *  for the full explanation. Omit to leave that button unwired. */
  outcome?: ChannelOutcomeConfig;
}

/* ── Default menu items, per channel type ──
 * Kept here (not on InteractionNavItem) so each channel type owns its own
 * kebab behavior at the component level — e.g. Voice gets recording actions
 * instead of transcript/translate actions. Override per-row via
 * `InteractionChannel.menuItems`.
 *
 * Built as functions (not flat consts) so "Unassign & Dismiss" — the one
 * action every channel type shares — can carry a real `onClick` wired to
 * `InteractionNavItem`'s own `onDismiss` prop. That action ends the whole
 * interaction, not just this one channel, so it's threaded down from the
 * card level rather than something a channel row decides on its own. A
 * `menuItems` override on `InteractionChannel` still replaces this whole
 * list, same as before — the override is the consumer's responsibility to
 * wire up, `onDismiss` only ever applies to the *default* menu.
 *
 * "consult-transfer"/"outcome" still live in these lists (unchanged) since
 * `ChannelTab`/`ChannelToggle` (the record-header tab bar) both build their
 * own default kebab from these same two functions and still want both
 * actions in that dropdown. `ChannelRow` (below — the row `InteractionNavItem`
 * renders per open channel) is the one exception: per explicit request, IT
 * promotes these same two actions out of its own kebab into two standalone
 * icon buttons to the kebab's immediate left instead, so see that
 * component's own `kebabItems` for where they're filtered back out of
 * what its dropdown actually shows. */

export function buildDigitalMenuItems(onDismiss?: () => void): MenuEntry[] {
  return [
    { id: "unassign-dismiss", label: "Unassign & Dismiss", icon: <TriangleAlert className="h-4 w-4" strokeWidth={1.5} />, onClick: onDismiss },
    { id: "consult-transfer", label: "Consult / Transfer", icon: <ConsultTransferIcon /> },
    { id: "outcome", label: "Outcome", icon: <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} /> },
    { id: "send-transcript", label: "Send Transcript", icon: <Send className="h-4 w-4" strokeWidth={1.5} /> },
    { id: "download-transcript", label: "Download Transcript", icon: <FileDown className="h-4 w-4" strokeWidth={1.5} /> },
    { id: "translate-messages", label: "Translate Messages", icon: <Languages className="h-4 w-4" strokeWidth={1.5} /> },
  ];
}

export function buildVoiceMenuItems(onDismiss?: () => void): MenuEntry[] {
  return [
    { id: "unassign-dismiss", label: "Unassign & Dismiss", icon: <TriangleAlert className="h-4 w-4" strokeWidth={1.5} />, onClick: onDismiss },
    { id: "consult-transfer", label: "Consult / Transfer", icon: <ConsultTransferIcon /> },
    { id: "outcome", label: "Outcome", icon: <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} /> },
    { id: "listen-recording", label: "Listen to Recording", icon: <PlayCircle className="h-4 w-4" strokeWidth={1.5} /> },
    { id: "download-recording", label: "Download Recording", icon: <FileDown className="h-4 w-4" strokeWidth={1.5} /> },
  ];
}

/* ── Outcome popover ──
   Clicking the "Outcome" ghost button opens a popover logging how this
   channel was resolved — Resolution, Tags, Disposition code, and a free-text
   Summary, matching the reference screenshot exactly (a form ending in
   Cancel/"Approve & Save"). All FIELD DATA (option lists, current values,
   change handlers) is supplied by the consumer via this one config object
   rather than hardcoded here — Resolution/Disposition-code choices and the
   tag palette are business data, not something a generic design-system row
   component should own, same reasoning `TagPicker` (tag-picker.tsx) already
   established for its own `options`/`onSelect` props. `ChannelRow` itself
   only owns the POPOVER STRUCTURE (which lyra-ui primitives compose it,
   how the fields lay out) — completely optional: omit `outcome` entirely
   and the Outcome button renders exactly as before (a plain, unwired ghost
   button), so no existing caller/story needs to change. */
export interface ChannelOutcomeConfig {
  /** Controlled open state for this row's Outcome popover. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Popover header title (default: "Log Outcome"). */
  title?: string;
  /** Same `{label, dotColor}` shape (and, when this and the session-status
   *  dropdown share one status vocabulary the way `AgentNextGenPage` wires
   *  them, the literal SAME array) `TRANSCRIPT_SESSION_STATUS_OPTIONS` uses
   *  for the session-status pill's own dropdown — reused here (not
   *  redefined) so this field can render the exact same colored-dot rows,
   *  not just visually similar ones. */
  resolutionOptions: { label: string; dotColor: string }[];
  resolution: string;
  onResolutionChange: (value: string) => void;
  /** Every tag that could be applied — same `{label, variant}` shape
   *  `TagPicker`'s own `options` already uses, reused here (not
   *  redefined) so one shared tag palette works for both surfaces. */
  tagOptions: TagPickerOption[];
  /** Currently-applied tag labels — rendered as removable `Tag` pills
   *  above the multi-select dropdown, and as that dropdown's own checked
   *  rows. */
  selectedTags: string[];
  onTagsChange: (labels: string[]) => void;
  dispositionOptions: SelectOption[];
  dispositionCode: string;
  onDispositionChange: (value: string) => void;
  summary: string;
  onSummaryChange: (value: string) => void;
  /** "Approve & Save" clicked. */
  onSave: () => void;
  /** "Cancel" clicked. */
  onCancel: () => void;
}

/* ── Base row (shared rendering) ── */

interface ChannelRowProps {
  icon: React.ReactNode;
  label: string;
  /** This row's chip color when not `awaitingResponse` — see
   *  `CHANNEL_TYPE_TAG_VARIANT` above. `awaitingResponse` always overrides
   *  to "critical" (red) regardless of this value. */
  variant: TagVariant;
  elapsed: string;
  preview?: string;
  /** Blue-highlighted row background — set by the parent when this row is
   *  both `current` and the card is `active`. */
  highlighted?: boolean;
  /** Skip the top divider — set by the parent for the first row in the list. */
  isFirst?: boolean;
  awaitingResponse?: boolean;
  menuItems: MenuEntry[];
  showMenu?: boolean;
  /** Marks this channel "current" (see `InteractionNavItem`'s own doc
   *  comment on its internal current-channel state) — lets an agent toggle
   *  which open channel is highlighted within a multi-channel card. Doesn't
   *  stop the click from also bubbling up to the card's own `onClick`
   *  (selecting the whole card), only the kebab button does that. */
  onSelect?: () => void;
  /** Forwarded straight to this row's own `KebabMenuButton` — lets
   *  `InteractionNavItem`'s compact-mode hover-preview popover know when
   *  this row's dropdown opens/closes, so it can keep itself open (and its
   *  close-on-mouseleave timer disarmed) for as long as the dropdown is —
   *  see that component's `handleChannelMenuOpenChange` doc comment. */
  onMenuOpenChange?: (open: boolean) => void;
  /** Wires the "Outcome" ghost button to a real popover (see
   *  `ChannelOutcomeConfig`'s own doc comment above) — omit to leave that
   *  button a plain, unwired placeholder (its pre-existing behavior). */
  outcome?: ChannelOutcomeConfig;
}

// "consult-transfer"/"outcome" are promoted out of this row's own kebab
// into their own standalone icon buttons (rendered just to its left, see
// `ChannelRow` below) — per explicit request, scoped to `InteractionNavItem`
// specifically, NOT to `ChannelTab`/`ChannelToggle` (the record-header tab
// bar), which still show both inside their own kebab dropdown via the
// unmodified `buildDigitalMenuItems`/`buildVoiceMenuItems`. Filtered here
// (rather than never including them in the first place) so a consumer
// passing a custom `InteractionChannel.menuItems` override still has those
// two ids recognized/stripped the same way the default lists do, instead of
// silently double-showing them (once as a standalone button, once still
// buried in the dropdown) if their override happens to include either id.
// `"separator"`/section-label entries pass through untouched — this only
// ever needs to recognize `MenuItemDef`s by `id`.
function stripPromotedChannelRowActions(items: MenuEntry[]): MenuEntry[] {
  return items.filter(
    (item) => typeof item === "string" || "sectionLabel" in item || (item.id !== "consult-transfer" && item.id !== "outcome")
  );
}

const ChannelRow: React.FC<ChannelRowProps> = ({
  icon,
  label,
  variant,
  elapsed,
  preview,
  highlighted,
  isFirst,
  awaitingResponse,
  menuItems,
  showMenu = true,
  onSelect,
  onMenuOpenChange,
  outcome,
}) => {
  // Coordinates this row's own kebab `Tooltip` ("More Options") with its
  // `KebabMenuButton` dropdown — same "tooltip's trigger and the dropdown's
  // trigger are the same DOM node" problem `ChannelTab`/`ChannelToggle`
  // already solve below with their own `menuOpen` state fed into `Tooltip`'s
  // `disabled` prop (see either one's own doc comment for the fuller
  // explanation). Kept local to this row rather than reusing a prop, since
  // `onMenuOpenChange` here is a callback OUT to `InteractionNavItem` (for
  // its hover-preview popover's own separate close-timer coordination, see
  // that component's `handleChannelMenuOpenChange`) — this needs its own
  // local bit so the tooltip-disable logic doesn't depend on whether a
  // consumer happened to pass that prop at all.
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Whether the Resolution field's own nested dropdown (inside the already-
  // open Outcome popover) is expanded — local rather than lifted like the
  // session-status pill's `statusMenuOpenId` since only one Outcome popover
  // (and so only one Resolution dropdown) can ever be open for this row at
  // a time; the RESOLUTION VALUE itself is still fully lifted (read/written
  // through `outcome.resolution`/`onResolutionChange`), only this
  // "is the dropdown showing" bit is local.
  const [resolutionMenuOpen, setResolutionMenuOpen] = React.useState(false);
  // Which body the Resolution dropdown's own popover is showing — the
  // status list, or the "Close Contact?" confirm — same reasoning and same
  // one-popover-two-swappable-bodies shape `TranscriptSessionSeparator`'s
  // own status popover already uses (`statusMenuView`, `AgentNextGenPage
  // .tsx`) for the exact same "Closed" status, reused here rather than
  // reinvented since picking "Closed" from EITHER dropdown should feel
  // like the same, one confirmed action. Reset to `"menu"` whenever this
  // Resolution popover closes (see `onOpenChange` below) so it never opens
  // back up stranded on a stale confirm view.
  const [resolutionMenuView, setResolutionMenuView] = React.useState<"menu" | "confirm">("menu");
  return (
  <div
    onClick={onSelect}
    className={cn(
      // `group` — hovering anywhere on this row reveals the Consult/
      // Transfer + Outcome buttons overlaid on top of the elapsed-time text
      // below (see that span's own comment) — a plain CSS `:hover` on the
      // small relative wrapper around just that text would work too, but
      // `group` here means hovering the WHOLE row reveals them, matching
      // this row's own `hover:bg-lyra-state-hover` reacting to a hover
      // anywhere on it, not just over the clock icon specifically.
      "group flex flex-col gap-1 px-3 py-2.5 transition-colors",
      onSelect && "cursor-pointer",
      !isFirst && "border-t border-lyra-border-subtle",
      highlighted ? "bg-lyra-status-info-subtle" : "hover:bg-lyra-state-hover"
    )}
  >
    <div className="flex items-center gap-0">
      {/* Small critical dot to the left of the chip, on top of the chip's
          own red/critical color swap above — an extra, unmissable visual
          cue that this specific channel (not just this row's colors) is the
          one awaiting a response, for a card with more than one open
          channel where only one might be. Same `Badge` dot primitive
          `InteractionNavItem`'s compact-mode avatar corner badge already
          uses (`shape="circle" dot variant="critical"`), just inline here
          rather than absolutely positioned. */}
      {awaitingResponse && (
        <Badge shape="circle" dot variant="critical" size="sm" className="mr-1" aria-hidden="true" />
      )}
      <span className={cn(tagVariants({ variant: awaitingResponse ? "critical" : variant, shape: "pill" }))}>
        <span aria-hidden="true">{icon}</span>
        {label}
      </span>
      {/* Trailing button cluster — Consult/Transfer, Outcome, and the kebab
          — grouped together as siblings in ONE wrapper so all three read as
          a single unit in the code, with `gap-0` applied consistently
          across the cluster: no space between Consult/Transfer and
          Outcome, and no space between Outcome and the kebab either.

          The elapsed clock+time text used to live on THIS row too, between
          the chip and this cluster — moved down to the preview line below
          (per explicit follow-up) since that's what was colliding with
          these buttons on a narrow row in the first place; with the timer
          gone, this row only ever has to fit the chip plus this cluster,
          which always leaves room (removing an entire category of
          truncate/clip-on-collision logic this row used to need).

          `ml-auto` pushes this wrapper to the row's far right on its own —
          no intermediate `flex-1` spacer needed now that there's no timer
          text between it and the chip to share space with. `shrink-0`
          keeps its width to just the kebab's natural size, since the two
          ghost buttons inside it are `absolute` and contribute nothing to
          that sizing (same "costs nothing while hidden" property rule #55
          established, still true here — this is what keeps the kebab from
          jumping around based on whether the ghost buttons are showing).

          The ghost-button overlay is positioned `right-full` (not
          `right-0`) relative to THIS wrapper — `right-full` (right:100%)
          plants the overlay's right edge exactly at the wrapper's LEFT
          edge (i.e., immediately before the kebab, touching it with zero
          gap), then the overlay extends further left by its own natural
          width (the two buttons + their now-zero internal gap). On a
          narrow row this can still visually land on top of the CHIP now
          (nothing else left to collide with) — accepted per this same
          follow-up, since the whole point of moving the timer was to stop
          worrying about what the overlay might cover.

          The overlay `div` itself carries no background (see rule #56 —
          these are true ghost `variant="icon"` buttons, no border, no
          resting-state fill, just `hover:bg-lyra-state-hover`/`active:
          bg-lyra-state-pressed` and `rounded-lyra-sm` baked into the
          variant). `pointer-events-none opacity-0` + `group-hover:
          pointer-events-auto group-hover:opacity-100` is the same
          invisible-until-hovered technique used throughout this file. Both
          the overlay and the kebab are gated on `showMenu` together, same
          as before. */}
      {showMenu && (
        <span className="relative ml-auto flex h-6 shrink-0 items-center">
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-full flex h-6 items-center gap-0 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
              // `group-focus-within:` alongside `group-hover:` — per
              // explicit accessibility request: Consult/Transfer and
              // Outcome are real buttons, so `opacity-0`/`pointer-events-
              // none` alone doesn't remove them from the tab order, it
              // just leaves them invisible (and unclickable, pre-
              // `pointer-events-auto`) while a keyboard user has actually
              // tabbed to one. Tabbing into either button now reveals this
              // whole cluster exactly like hovering the row does; the
              // hover behavior itself is unchanged.
              "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
              // Stay revealed while the Outcome popover it triggers is open
              // — without this, moving the pointer off the row after
              // opening it (to actually reach into the now-portaled-
              // elsewhere popover content) would fade this whole overlay
              // back to `opacity-0 pointer-events-none`, leaving the
              // popover open with no visible trigger button anchoring it.
              outcome?.open && "pointer-events-auto opacity-100"
            )}
          >
            <Button variant="icon" size="icon-sm" title="Consult / Transfer" className="shrink-0 text-lyra-fg-secondary">
              <ConsultTransferIcon />
            </Button>
            {outcome ? (
              <Popover
                open={outcome.open}
                onOpenChange={outcome.onOpenChange}
                placement="bottom"
                align="end"
                className="w-80"
                // Same "don't hand focus back to the trigger on close" fix
                // `TagPicker` already established (tag-picker.tsx) — this
                // trigger is an icon `Button` with its own `title`-driven
                // Tooltip, and Radix's default close behavior returning
                // focus to it would immediately reopen that tooltip with no
                // real hover intent behind it.
                onCloseAutoFocus={(e) => e.preventDefault()}
                header={
                  <PanelHeader
                    title={outcome.title ?? "Log Outcome"}
                    bordered={false}
                    className="px-5 pb-0"
                    onClose={() => outcome.onOpenChange(false)}
                  />
                }
                footer={
                  <div className="flex items-center justify-end gap-2 px-5 pb-4 pt-1">
                    <Button variant="outline" size="md" onClick={outcome.onCancel}>
                      Cancel
                    </Button>
                    <Button variant="default" size="md" onClick={outcome.onSave}>
                      Approve &amp; Save
                    </Button>
                  </div>
                }
                content={
                  <div className="flex flex-col gap-4 pb-2 pt-1">
                    <div>
                      <Label label="Status" className="mb-1.5" />
                      {/* Same colored-dot `Menu` the session-status pill's
                          own dropdown uses (`TranscriptSessionSeparator`,
                          `AgentNextGenPage.tsx`) — reused here, not just
                          visually matched, so a consumer wiring both
                          `outcome.resolutionOptions`/`resolution` and the
                          session-status pill to the same underlying status
                          state (as `AgentNextGenPage` does) gets a single
                          "is this session Open/Pending/Escalated/Resolved/
                          Closed" value that's reflected — and changeable —
                          from either surface. This field only owns the
                          field-look TRIGGER (bordered box + chevron,
                          matching every other field in this popover); the
                          dropdown content itself is a plain `Menu`, not
                          `Select`, since `Select`'s own single-select mode
                          has no way to render a leading colored dot per
                          row. */}
                      <Popover
                        open={resolutionMenuOpen}
                        onOpenChange={(open) => {
                          setResolutionMenuOpen(open);
                          // Always land back on the status list next time
                          // this opens, never stranded on a stale confirm
                          // view from a previous visit — same reset
                          // `handleStatusMenuOpenChange` performs for the
                          // session-status popover.
                          setResolutionMenuView("menu");
                        }}
                        placement="bottom"
                        align="start"
                        className="w-[var(--radix-popover-trigger-width)]"
                        // `bodyPadding` defaults to `true` (`popover.tsx`'s
                        // own `px-5` inset for plain body content) — a
                        // `bare` `Menu` already supplies its own full-bleed
                        // row padding (`p-1` per row), so leaving the
                        // default on here stacks BOTH insets, reading as
                        // oversized gaps around/between rows. Only true for
                        // the "menu" view though — the "confirm" view's
                        // plain description paragraph DOES want the normal
                        // inset, same `bodyPadding={statusMenuView ===
                        // "confirm"}` split the session-status popover uses
                        // (rule #28) — any future `Popover content={<Menu
                        // bare .../>}` must set this explicitly too, it's
                        // never automatic.
                        bodyPadding={resolutionMenuView === "confirm"}
                        // `header`/`footer` are real `Popover` slots, only
                        // supplied for the confirm view — the menu view has
                        // neither, it's just `content`. Same split the
                        // session-status popover's own confirm view uses.
                        header={
                          resolutionMenuView === "confirm" ? (
                            <PanelHeader
                              title="Close Contact?"
                              icon={
                                <WarningIconSolid
                                  className="h-5 w-5 text-lyra-status-critical-strong"
                                  aria-hidden="true"
                                />
                              }
                              bordered={false}
                              className="px-5 pb-0"
                            />
                          ) : undefined
                        }
                        footer={
                          resolutionMenuView === "confirm" ? (
                            <div className="flex items-center justify-end gap-2 px-5 pb-4 pt-1">
                              <Button
                                variant="destructive"
                                size="md"
                                onClick={() => {
                                  outcome.onResolutionChange("Closed");
                                  setResolutionMenuOpen(false);
                                  setResolutionMenuView("menu");
                                }}
                              >
                                Close
                              </Button>
                              <Button
                                variant="outline"
                                size="md"
                                onClick={() => {
                                  setResolutionMenuOpen(false);
                                  setResolutionMenuView("menu");
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : undefined
                        }
                        content={
                          resolutionMenuView === "confirm" ? (
                            <p className="pb-2 pt-1 lyra-body-md text-lyra-fg-secondary">
                              Closing a contact cannot be undone. Are you sure you want to close this contact?
                            </p>
                          ) : (
                            <Menu
                              bare
                              items={outcome.resolutionOptions.map((option) => ({
                                id: option.label,
                                label: option.label,
                                active: option.label === outcome.resolution,
                                icon: (
                                  <span
                                    aria-hidden="true"
                                    className="block h-2 w-2 rounded-full"
                                    style={{ backgroundColor: option.dotColor }}
                                  />
                                ),
                                onClick: () => {
                                  // "Closed" needs a confirm step first
                                  // (same reasoning the session-status
                                  // popover's own `selectSessionStatus`
                                  // already established) — every other
                                  // status applies immediately and closes
                                  // the dropdown.
                                  if (option.label === "Closed") {
                                    setResolutionMenuView("confirm");
                                    return;
                                  }
                                  outcome.onResolutionChange(option.label);
                                  setResolutionMenuOpen(false);
                                },
                              }))}
                            />
                          )
                        }
                      >
                        <Button
                          variant="outline"
                          aria-haspopup="menu"
                          aria-expanded={resolutionMenuOpen}
                          // Same "Closed locks it, nothing left to change"
                          // treatment the session-status pill's own trigger
                          // already gets (rule #28) — once this reads
                          // "Closed" there's no popover to reopen, so the
                          // field disables outright rather than staying
                          // clickable for no reason.
                          disabled={outcome.resolution === "Closed"}
                          className="h-9 w-full justify-between border-lyra-border-strong bg-lyra-bg-field font-normal text-lyra-fg-default hover:bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral"
                        >
                          <span className="truncate">{outcome.resolution}</span>
                          {/* Dropped once locked, same as the "#caseId · date"
                              toggle chevron on a Closed session (rule #28)
                              — no chevron on a field that's no longer a
                              dropdown trigger. */}
                          {outcome.resolution !== "Closed" && (
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-lyra-fg-secondary transition-transform",
                                resolutionMenuOpen && "rotate-180"
                              )}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          )}
                        </Button>
                      </Popover>
                    </div>
                    <div>
                      <Label label="Tags" className="mb-1.5" />
                      <Select
                        multiple
                        placeholder="Select tags"
                        options={outcome.tagOptions.map((option) => ({ value: option.label, label: option.label }))}
                        values={outcome.selectedTags}
                        onValuesChange={outcome.onTagsChange}
                      />
                      {/* Applied tags render as removable pills BELOW the
                          picker itself, per explicit request — `Select`'s
                          own multi-select mode only ever shows a "{n}
                          selected" summary inside its trigger, not a
                          separate persistent pill row, so that's added here
                          rather than inside `Select`. Both read/write the
                          exact same `selectedTags` array, so removing a
                          pill here and un-checking it in the dropdown are
                          two views of one piece of state, not two. */}
                      {outcome.selectedTags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {outcome.selectedTags.map((tagLabel) => {
                            const option = outcome.tagOptions.find((o) => o.label === tagLabel);
                            return (
                              <Tag
                                key={tagLabel}
                                label={tagLabel}
                                variant={option?.variant ?? "neutral"}
                                onRemove={() =>
                                  outcome.onTagsChange(outcome.selectedTags.filter((t) => t !== tagLabel))
                                }
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <Select
                      label="Disposition code"
                      searchable
                      options={outcome.dispositionOptions}
                      value={outcome.dispositionCode}
                      onValueChange={outcome.onDispositionChange}
                    />
                    <Textarea
                      label="Summary"
                      rows={5}
                      value={outcome.summary}
                      onChange={(e) => outcome.onSummaryChange(e.target.value)}
                    />
                  </div>
                }
              >
                <Button
                  variant="icon"
                  size="icon-sm"
                  title="Outcome"
                  className="shrink-0 text-lyra-fg-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} />
                </Button>
              </Popover>
            ) : (
              <Button variant="icon" size="icon-sm" title="Outcome" className="shrink-0 text-lyra-fg-secondary">
                <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} />
              </Button>
            )}
          </div>
          <Tooltip content="More Options" placement="bottom" disabled={menuOpen}>
            <KebabMenuButton
              items={stripPromotedChannelRowActions(menuItems)}
              ariaLabel={`More options for ${label}`}
              onOpenChange={(open) => {
                setMenuOpen(open);
                onMenuOpenChange?.(open);
              }}
            />
          </Tooltip>
        </span>
      )}
    </div>
    {/* Preview/skill-name line + elapsed clock+time, side by side — NOT
        floated apart (a first pass floated the timer to the far right of
        this row; per explicit follow-up it sits directly next to the
        preview text instead, sharing normal left-to-right flow). `preview`
        is optional (a fresh/unassigned channel may have no skill-name text
        yet) — when it's present, it's the `min-w-0 flex-1 truncate` item so
        IT gives up width first on a narrow row, leaving the timer
        (`shrink-0`, never truncates) fully readable; when it's absent, the
        timer is simply the first (and only) item in this row and sits at
        the same left edge the preview text would have, rather than getting
        pushed or centered anywhere. Always rendered (not gated on
        `preview`, unlike before) since `elapsed` itself is a required prop
        — there's always at least a timer to show here now. */}
    <div className="flex items-center gap-1">
      {preview && <p className="min-w-0 flex-1 truncate lyra-body-sm text-lyra-fg-secondary">{preview}</p>}
      <span
        className={cn(
          "flex shrink-0 items-center gap-1 lyra-body-xs",
          awaitingResponse ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
        )}
      >
        <Clock className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
        {elapsed}
      </span>
    </div>
  </div>
  );
};

/* ── Per-type channel rows ──
 * Thin wrappers around `ChannelRow` — each owns its own icon, label, and
 * default kebab menu, so channel-specific behavior lives here instead of
 * being passed down generically from `InteractionNavItem` or a story. */

export interface ChannelRowInstanceProps {
  elapsed: string;
  preview?: string;
  highlighted?: boolean;
  isFirst?: boolean;
  awaitingResponse?: boolean;
  removable?: boolean;
  menuItems?: MenuEntry[];
  /** Wired onto the default menu's "Unassign & Dismiss" item — see the
   *  `buildDigitalMenuItems`/`buildVoiceMenuItems` doc comment above.
   *  Ignored when `menuItems` overrides the default list. */
  onDismiss?: () => void;
  /** Passed straight through to `ChannelRow` — see its own doc comment. */
  onSelect?: () => void;
  /** Passed straight through to `ChannelRow` — see its own doc comment. */
  onMenuOpenChange?: (open: boolean) => void;
  /** Passed straight through to `ChannelRow` — see its own doc comment. */
  outcome?: ChannelOutcomeConfig;
}

const ChatChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, onDismiss, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<MessageSquare className="h-3 w-3" strokeWidth={1.5} />}
    label="Chat"
    variant={CHANNEL_TYPE_TAG_VARIANT.chat}
    menuItems={menuItems ?? buildDigitalMenuItems(onDismiss)}
    showMenu={removable !== false}
  />
);

const EmailChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, onDismiss, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<Mail className="h-3 w-3" strokeWidth={1.5} />}
    label="Email"
    variant={CHANNEL_TYPE_TAG_VARIANT.email}
    menuItems={menuItems ?? buildDigitalMenuItems(onDismiss)}
    showMenu={removable !== false}
  />
);

const SmsChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, onDismiss, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<MessageSquare className="h-3 w-3" strokeWidth={1.5} />}
    label="SMS"
    variant={CHANNEL_TYPE_TAG_VARIANT.sms}
    menuItems={menuItems ?? buildDigitalMenuItems(onDismiss)}
    showMenu={removable !== false}
  />
);

const WhatsAppChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, onDismiss, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<WhatsAppIcon />}
    label="WhatsApp"
    variant={CHANNEL_TYPE_TAG_VARIANT.whatsapp}
    menuItems={menuItems ?? buildDigitalMenuItems(onDismiss)}
    showMenu={removable !== false}
  />
);

const VoiceChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, onDismiss, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<Phone className="h-3 w-3" strokeWidth={1.5} />}
    label="Voice"
    variant={CHANNEL_TYPE_TAG_VARIANT.voice}
    menuItems={menuItems ?? buildVoiceMenuItems(onDismiss)}
    showMenu={removable !== false}
  />
);

/** Maps `InteractionChannel.type` to its row component — used by
 *  `InteractionNavItem` to dispatch each channel to the right one. */
const CHANNEL_ROW_COMPONENTS: Record<ChannelType, React.FC<ChannelRowInstanceProps>> = {
  chat: ChatChannelRow,
  email: EmailChannelRow,
  sms: SmsChannelRow,
  whatsapp: WhatsAppChannelRow,
  voice: VoiceChannelRow,
};

/** Per-type icon + label — the same choices each `*ChannelRow` wrapper above
 *  already bakes in, exposed here so `ChannelTab` (and any other component
 *  that needs to represent a channel by its type) doesn't have to re-decide
 *  them. Sized `h-4 w-4` (a `Tab`'s icon slot) rather than the `h-3 w-3` chip
 *  size the rows above use. */
const CHANNEL_TYPE_META: Record<ChannelType, { icon: React.ReactNode; label: string }> = {
  chat:     { icon: <MessageSquare className="h-4 w-4" strokeWidth={1.5} />, label: "Chat" },
  email:    { icon: <Mail className="h-4 w-4" strokeWidth={1.5} />, label: "Email" },
  sms:      { icon: <MessageSquare className="h-4 w-4" strokeWidth={1.5} />, label: "SMS" },
  whatsapp: { icon: <WhatsAppIcon className="h-4 w-4" />, label: "WhatsApp" },
  voice:    { icon: <Phone className="h-4 w-4" strokeWidth={1.5} />, label: "Voice" },
};

/* ── ChannelTab ──
 * One open channel rendered as a `Tab` — e.g. the "active conversation area"
 * tab bar under a record-header `PageHeader` (see `AgentNextGenTemplate
 * .stories.tsx`'s `activeInteraction` block), one tab per
 * `TrackedChannel`/`InteractionChannel`, kept in sync with which row is
 * "current" on the matching `InteractionNavItem` card via that component's
 * `currentChannelKey`/`onCurrentChannelChange` props — both should be driven
 * by the same piece of parent state (e.g. `ActiveInteraction.currentChannelId`)
 * so clicking a tab here and clicking a row on the card either update the
 * same thing. Not a full "tab list" wrapper — the consumer still renders its
 * own `<TabList>` around one `ChannelTab` per channel, same as any other set
 * of `Tab`s, and that `<TabList>` should just turn on `overflowMenu` like any
 * other tab bar (per its own standing default — see `tabs.tsx`) — no special
 * wrapper class needed. This used to shed each tab's own address/label text
 * at its own narrower 480px/320px breakpoints via a dedicated
 * `.lyra-channel-tab-list-wrap` container query instead of collapsing into
 * an overflow menu; that bespoke behavior was removed in favor of the
 * standard "active tab + N More" pattern every other `TabList` already uses
 * (see PROJECT_SUMMARY.md's "ChannelTab no longer has its own collapse
 * strategy" entry). A `Tooltip` on every tab still surfaces the full "Label
 * address" text (no divider between the two — see `address`'s own doc
 * comment), plus a second, smaller line with this channel's message count
 * and conversation id (`messageCount`/`interactionId`) when either is on
 * hand — info that never appears on the tab face itself, only in the
 * tooltip. */
export interface ChannelTabProps {
  /** Determines this tab's icon, label, and default kebab menu items — same
   *  per-type choices as the matching `*ChannelRow`. */
  type: ChannelType;
  /** The phone number/email address/WhatsApp handle this channel is on, if
   *  any (e.g. `TrackedChannel.addressLabel`) — rendered directly after the
   *  type label with no divider between them (e.g. "WhatsApp
   *  @Jamie Torres") so two tabs of the same `type` stay distinguishable,
   *  and repeated the same way in this tab's `Tooltip` so that stays true
   *  even once the bar has collapsed down to hiding it (see the
   *  container-query note above). Omit when this channel has no address on
   *  hand (e.g. a redialed voice call with no stored number) — the tab just
   *  shows icon + type label, and its tooltip just the type label. */
  address?: string;
  /** Total message count for this channel's conversation, if on hand — shown
   *  on a second, smaller (`lyra-body-sm`) `Tooltip` line below the label
   *  (+ address) line (e.g. "16 Messages | #707535188548"), never on the
   *  tab face itself (there's no room once the bar starts collapsing, see
   *  the container-query note above — the tooltip is the one place this is
   *  always reachable regardless of stage). Omit for channel types with no
   *  real message concept (voice) and for a channel that hasn't exchanged
   *  any messages yet — `0` renders "0 Messages", which is exactly right
   *  for a just-started outbound conversation; `undefined` renders no
   *  message segment on this line at all. */
  messageCount?: number;
  /** This channel's own conversation/session id, if on hand — distinct from
   *  the customer-record id (`ActiveInteraction.recordId`, e.g. "AGT-2000")
   *  shown in the page header above: one customer record can have several
   *  channels open, each its own conversation with its own id. Rendered as
   *  "#{interactionId}" on the same second `Tooltip` line as `messageCount`.
   *  Omit when unknown. */
  interactionId?: string;
  active?: boolean;
  onClick?: () => void;
  /** Wired to the default kebab menu's "Unassign & Dismiss" entry — the
   *  consumer decides (same as `InteractionNavItem`'s own `onDismiss` vs.
   *  `onDismissChannel` split) whether that should end just this channel or
   *  the whole interaction, based on how many channels are open. */
  onDismiss?: () => void;
  /** Override this tab's default (per-`type`) kebab menu items. */
  menuItems?: MenuEntry[];
  /** Hide the trailing kebab entirely. Default: true (kebab shown). */
  showMenu?: boolean;
  className?: string;
}

const ChannelTab: React.FC<ChannelTabProps> = ({
  type,
  address,
  messageCount,
  interactionId,
  active,
  onClick,
  onDismiss,
  menuItems,
  showMenu = true,
  className,
}) => {
  const meta = CHANNEL_TYPE_META[type];
  const defaultMenuItems = type === "voice" ? buildVoiceMenuItems(onDismiss) : buildDigitalMenuItems(onDismiss);
  // This tab's own kebab dropdown (rendered by `Tab` itself, inside the
  // same button this outer `Tooltip` wraps) has no other way to tell this
  // Tooltip it opened — the tooltip's trigger and the dropdown's trigger
  // are the same DOM node. `Tab`'s `onMenuOpenChange` reports it here so it
  // can feed straight into `disabled` below, instead of the tooltip staying
  // open (and visually sitting on top of the dropdown) the whole time the
  // dropdown is showing.
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Second tooltip line — "16 Messages | #707535188548" — omitted entirely
  // when neither value is on hand rather than rendering an empty/half-blank
  // line under the "Label | address" one.
  // Second tooltip line, e.g. "16 Messages | #707535188548" — the "|"
  // between these two is kept (they're two distinct facts, not a label and
  // its own value like the line above), just rendered smaller
  // (`lyra-body-sm`, one step below the tooltip's own default `lyra-body-md`)
  // since it's secondary/reference info, not the tab's primary identity.
  const metaLine = [
    messageCount !== undefined ? `${messageCount} Message${messageCount === 1 ? "" : "s"}` : undefined,
    interactionId ? `#${interactionId}` : undefined,
  ]
    .filter(Boolean)
    .join(" | ");
  const tooltipContent = (
    <div className="flex flex-col gap-0.5">
      <span>{address ? `${meta.label} ${address}` : meta.label}</span>
      {metaLine && <span className="lyra-body-sm text-lyra-fg-secondary">{metaLine}</span>}
    </div>
  );
  return (
    <Tooltip content={tooltipContent} placement="bottom" disabled={menuOpen}>
      <Tab
        active={active}
        onClick={onClick}
        icon={meta.icon}
        menuItems={showMenu ? (menuItems ?? defaultMenuItems) : undefined}
        onMenuOpenChange={setMenuOpen}
        menuAriaLabel={`More options for ${meta.label}`}
        // This outer `Tooltip` already shows "{label} {address}" (a
        // superset of this tab's own truncated "{label} {address}"
        // children) plus the message-count/id line — `Tab`'s own built-in
        // truncation tooltip was firing alongside it whenever the address
        // got clipped, stacking two tooltip bubbles on one hover. See
        // `showTruncationTooltip`'s own doc comment in tabs.tsx.
        showTruncationTooltip={false}
        className={className}
      >
        <span>{meta.label}</span>
        {address && (
          // `text-lyra-fg-secondary` — not `-disabled`: an address isn't
          // disabled content, and `-disabled` is intentionally very low
          // contrast (20% white in dark mode vs. secondary's 60%), which
          // made phone numbers/addresses on an active dark-mode tab nearly
          // unreadable. `-secondary` is the correct semantic token for
          // "real but de-emphasized" text and is legible in both themes.
          <span className="ml-1 font-normal text-lyra-fg-secondary">{address}</span>
        )}
      </Tab>
    </Tooltip>
  );
};

/* ── ChannelToggle / ChannelToggleGroup ──
 * A toggle-button rendering of the same "one open channel" concept
 * `ChannelTab` represents — same per-type icon/label/address/tooltip/kebab
 * behavior (built on the exact same `CHANNEL_TYPE_META`/`buildDigitalMenu
 * Items`/`buildVoiceMenuItems`/`KebabMenuButton`/`Tooltip` pieces `ChannelTab`
 * itself uses, not a re-derivation of any of it), just styled as a
 * `ToggleGroup`-style segmented pill instead of a `Tab`'s underline —
 * requested specifically for `PageHeader`'s `titlePrefix` slot (a compact
 * cluster to the left of the title, where an underlined tab strip reads
 * oddly against a single-line header row the way it doesn't in a full
 * `TabList` beneath one).
 *
 * Not built on `ToggleGroup` itself: that component's generic `items`
 * array renders each item's `label` inside the one real `<button>` it
 * owns, and a channel toggle's kebab is itself an interactive control —
 * nesting it in there would be a button-inside-a-button, the same reason
 * `Tab`'s own `menuItems` slot renders `KebabMenuButton` with `as="span"`
 * instead of letting it default to a real nested `<button>` (see that
 * prop's own doc comment in kebab-menu-button.tsx). `ChannelToggle` reuses
 * `ToggleGroup`'s exact visual classes by hand (selected/unselected pill
 * treatment, `role="radio"`/`aria-checked`) so the two read as the same
 * design-system control, and `ChannelToggleGroup` reuses its outer shell
 * classes (`role="radiogroup"`, rounded bordered strip, dividers between
 * items) the same way `TabList` is the shell `ChannelTab` needs but never
 * duplicates itself. */

export interface ChannelToggleProps extends ChannelTabProps {
  /** This toggle's position in its `ChannelToggleGroup` — only used to
   *  decide whether the divider immediately before it should render (first
   *  item never gets one). Set automatically by `ChannelToggleGroup`. */
  isFirst?: boolean;
}

const ChannelToggle: React.FC<ChannelToggleProps> = ({
  type,
  address,
  messageCount,
  interactionId,
  active,
  onClick,
  onDismiss,
  menuItems,
  showMenu = true,
  className,
  isFirst,
}) => {
  const meta = CHANNEL_TYPE_META[type];
  const defaultMenuItems = type === "voice" ? buildVoiceMenuItems(onDismiss) : buildDigitalMenuItems(onDismiss);
  // Same tooltip-vs-kebab-dropdown coordination `ChannelTab` needs — see
  // that component's own `menuOpen` comment for the full explanation.
  const [menuOpen, setMenuOpen] = React.useState(false);
  const metaLine = [
    messageCount !== undefined ? `${messageCount} Message${messageCount === 1 ? "" : "s"}` : undefined,
    interactionId ? `#${interactionId}` : undefined,
  ]
    .filter(Boolean)
    .join(" | ");
  const tooltipContent = (
    <div className="flex flex-col gap-0.5">
      <span>{address ? `${meta.label} ${address}` : meta.label}</span>
      {metaLine && <span className="lyra-body-sm text-lyra-fg-secondary">{metaLine}</span>}
    </div>
  );

  return (
    <>
      {/* Divider — same "always in the DOM, invisible next to the active
          pill" trick `ToggleGroup` itself uses, so adding/removing a
          channel never shifts neighboring dividers' widths. */}
      {!isFirst && (
        <span aria-hidden="true" className={cn("w-px h-4 bg-lyra-border-subtle flex-shrink-0", active && "opacity-0")} />
      )}
      <Tooltip content={tooltipContent} placement="bottom" disabled={menuOpen}>
        <button
          type="button"
          role="radio"
          aria-checked={active}
          onClick={onClick}
          className={cn(
            "relative inline-flex items-center gap-1.5 px-3 py-1.5 lyra-body-md rounded-lyra-sm transition-colors select-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-1",
            active
              ? "bg-lyra-bg-active-subtle border border-lyra-border-active text-lyra-fg-active-strong hover:bg-lyra-state-hover-active-subtle active:bg-lyra-state-pressed-active-subtle"
              : "text-lyra-fg-default border border-transparent hover:bg-lyra-bg-surface-shell hover:border-lyra-border-default active:bg-lyra-bg-disabled active:border-lyra-border-default",
            className
          )}
        >
          <span className={cn("shrink-0", active ? "text-lyra-fg-active-strong" : "text-lyra-fg-secondary")} aria-hidden="true">
            {meta.icon}
          </span>
          {/* `address` is deliberately NOT shown on the pill face here —
              unlike `ChannelTab` (a full-width row with real room for
              "Email noah.bennett@example.com"), this toggle sits in a
              compact strip next to the page title, where the full address
              would dominate the pill and crowd the customer name beside
              it. It's still surfaced in full in the `Tooltip` above (see
              `tooltipContent`) — just icon + type label on the pill
              itself, per explicit request. */}
          <span>{meta.label}</span>
          {showMenu && (
            <KebabMenuButton
              as="span"
              items={menuItems ?? defaultMenuItems}
              ariaLabel={`More options for ${meta.label}`}
              onOpenChange={setMenuOpen}
            />
          )}
        </button>
      </Tooltip>
    </>
  );
};

export interface ChannelToggleGroupProps {
  children: React.ReactElement<ChannelToggleProps>[] | React.ReactElement<ChannelToggleProps>;
  /**
   * Trailing content rendered inside this same bordered/rounded shell,
   * after the last toggle (e.g. an "Add Channel" `+` button). Passed
   * through as plain `React.ReactNode`, NOT cloned with `isFirst`/
   * `role="radio"` the way `children` are — this is a one-off action living
   * in the group's shell, not another selectable channel, so it shouldn't
   * pick up toggle/pill styling or radiogroup semantics. No automatic
   * divider before it (tried that first; a screenshot of the actual target
   * look showed plain whitespace, not a rule line) — the caller supplies its
   * own left spacing on `action` itself if it wants separation from the
   * last toggle (e.g. a small `ml-*`).
   */
  action?: React.ReactNode;
  className?: string;
}

/** Outer pill-strip shell for one or more `ChannelToggle`s — same
 *  `role="radiogroup"` + bordered/rounded/padded container `ToggleGroup`
 *  itself renders (see that component's root `className`), reused
 *  verbatim rather than re-guessed so the two controls are visually
 *  identical. Sets each child's `isFirst` automatically — consumers just
 *  `.map()` their channels into `ChannelToggle`s like any other list. */
const ChannelToggleGroup: React.FC<ChannelToggleGroupProps> = ({ children, action, className }) => {
  const items = React.Children.toArray(children) as React.ReactElement<ChannelToggleProps>[];
  return (
    <div
      role="radiogroup"
      className={cn(
        "inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5 gap-0",
        className
      )}
    >
      {items.map((child, i) => React.cloneElement(child, { isFirst: i === 0 }))}
      {action}
    </div>
  );
};

export {
  ChannelRow,
  ChatChannelRow,
  EmailChannelRow,
  SmsChannelRow,
  WhatsAppChannelRow,
  VoiceChannelRow,
  CHANNEL_ROW_COMPONENTS,
  CHANNEL_TYPE_META,
  ChannelTab,
  ChannelToggle,
  ChannelToggleGroup,
  WhatsAppIcon,
};
