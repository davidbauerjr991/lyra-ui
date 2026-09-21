import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Phone, MessageCircle, User, Sparkles, FileText } from "lucide-react";
import { cn } from "../lib/utils";
import { Popover } from "./popover";
import { MenuItem } from "./menu-item";
import { Tag } from "./tag";

/**
 * Promoted out of agent-next-gen-v2's transcript file (originally a
 * bespoke, hand-rolled "brand-new contact, here's what you need to know
 * before you start typing" block) so any consumer gets the same component
 * instead of re-implementing it — per explicit request.
 *
 * Info this component doesn't otherwise have (who the customer previously
 * worked with, a prior-contact summary) — the caller resolves this,
 * `ContactOverview` just renders it.
 */
export interface ContactOverviewInfo {
  /** The agent this customer already has history with, if any — omit for a
   *  customer with genuinely no prior agent on record (the block still
   *  renders, just without that second sentence). */
  previousAgent?: { name: string; agentId: string };
  /** Short "Contact Snapshot" bullet list — prior-contact context a
   *  consumer would otherwise have to dig for elsewhere before the
   *  conversation even starts. Omit for no snapshot (first-ever contact
   *  with no history to summarize). */
  snapshot?: string[];
  /** A one-paragraph recap of what's led up to this contact, rendered
   *  below Contact Snapshot as a plain "label + paragraph" block — same
   *  chromeless treatment `snapshot` gets, no card/border/icon (per
   *  explicit follow-up request; this originally reused agent-next-gen-v2's
   *  former Copilot tab's own bordered/bookmark-icon card markup
   *  (`CopilotTabContent`, agent-next-gen-customer-info-panel.tsx), toned
   *  down to match once it landed here instead). Omit for no journey to
   *  recap (same as `snapshot`). */
  journeySummary?: string;
  /**
   * A small identity-card summary — avatar, subtitle (e.g. segment +
   * tenure), account balance, and a handful of status/context tags —
   * rendered above everything else in the collapsible (per explicit
   * request, ahead of the intro paragraph). Uses the same green/success
   * treatment `Tag`'s own "success" variant does, per explicit follow-up
   * request (an earlier plain/neutral-toned version — a border + the
   * app's own surface color, no status tint — was reversed back to the
   * green/success look a reference mockup originally used).
   * The caller is expected to always supply this for any "known" contact
   * (backed by a real directory record or not — see
   * `buildContactOverviewCustomerCard`'s own doc comment,
   * agent-next-gen-shared-utils.ts, for the fallback synthesis that keeps
   * this true even with no real record). Omit only for a contact this
   * component has no information about at all.
   */
  customerCard?: {
    /** e.g. "AS" for Alex Sanderson — same 2-letter convention every
     *  other initials avatar in this library uses. */
    avatarInitials: string;
    /** One of this library's own avatar background tokens (e.g.
     *  "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong") — the
     *  caller resolves this the same way it resolves any other initials
     *  avatar's color, not a new scheme invented for this card. */
    avatarClassName: string;
    /** e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
     *  line under the customer's name; this component doesn't parse or
     *  re-derive it from anything else. */
    subtitle: string;
    /** Pre-formatted balance string (e.g. "$0.00") — omit to hide the
     *  "Balance" figure entirely rather than showing a placeholder. */
    balance?: string;
    /** Short status/context labels (e.g. "Platinum", "Storm Disruption")
     *  rendered as pill `Tag`s below the identity row. Omit/empty to show
     *  the identity row with no tags underneath. */
    tags?: string[];
  };
}

export interface ContactOverviewProps extends ContactOverviewInfo {
  /** The customer this overview is about. */
  customerName: string;
  /**
   * Starts expanded by default (unlike, say, `AIProcess`'s own
   * `defaultExpanded = false`) — this is meant to be the first thing read
   * on a brand-new contact, not something to opt into revealing.
   */
  defaultExpanded?: boolean;
  /** Additional className on the root element. */
  className?: string;
  /** Renders a "View customer info" link directly beside the "Contact
   *  Snapshot" header's own label (per explicit request — this used to sit
   *  in its own row at the bottom of the overview). Omit to hide the link
   *  entirely (e.g. no customer info panel available in this context). The
   *  caller is responsible for opening whatever customer-info surface it
   *  has and focusing it on the right tab. Rendered even when `snapshot`
   *  itself is empty/omitted — the "Contact Snapshot" row still shows,
   *  just without any bullets under it, so this link always has a place
   *  to live. */
  onViewCustomerInfo?: () => void;
  /** Renders a "View Customer Contacts" link directly beside the "Journey
   *  Summary" header's own label — per explicit request, a SEPARATE row
   *  from `onViewCustomerInfo` above (not `|`-joined alongside it on
   *  Contact Snapshot, which is where this used to live) — opens the same
   *  customer-info surface `onViewCustomerInfo` does, focused on that
   *  surface's own interaction/session-history ("Contacts") tab instead.
   *  Rendered even when `journeySummary` itself is empty/omitted — same
   *  "always has a header to attach to" reasoning `onViewCustomerInfo` gets
   *  from Contact Snapshot. Omit to hide. */
  onViewInteractionHistory?: () => void;
  /**
   * Turns `previousAgent.name (previousAgent.agentId)` into a clickable
   * link (per explicit request) that opens a small popover offering
   * "Call"/"Chat" — the caller launches whichever interaction makes sense
   * for reaching that colleague on `channel`. Has no effect (and the name/
   * id renders as plain text, same as before) when `previousAgent` itself
   * is unset, or when this is omitted — same "no callback, no
   * affordance" convention `onViewCustomerInfo`/`onViewInteractionHistory`
   * already follow.
   */
  onLaunchPreviousAgentInteraction?: (channel: "voice" | "chat") => void;
}

/* ── ContactOverview ──
   Same plain "label + chevron, no card chrome" toggle `AIProcess` uses for
   its own inline collapsible content — reused rather than a bespoke
   accordion so a consumer already familiar with that pattern from
   AI-assisted messages recognizes this one instantly. Deliberately NOT
   `AIProcess` itself, though — that component's body is a fixed "vertical
   icon + label steps" shape (its own `AIProcessStep[]`), which doesn't fit
   a paragraph + bullet list at all.

   Built on `@radix-ui/react-accordion` directly (same primitive
   `Accordion`/`AccordionHeadless*` in this file's own package are built
   on) rather than a plain `useState` + conditional render — per explicit
   request for a real open/close ANIMATION here, not just an instant
   show/hide. The height animation runs off `AccordionPrimitive.Content`'s
   own `--radix-accordion-content-height` CSS variable (see the
   `accordion-down`/`accordion-up` keyframes in tailwind.config.js — same
   200ms ease-in-out timing every other accordion in this library already
   uses), so this stays visually consistent with `Accordion` and
   `AccordionHeadlessContent` rather than inventing a second animation
   curve. `type="single"` + `collapsible` on an uncontrolled `Root` is
   enough for a single toggle like this — no external open-state plumbing
   needed, same as `AIProcess`'s own internal `useState`. */
const ContactOverview = React.forwardRef<HTMLDivElement, ContactOverviewProps>(
  (
    {
      customerName,
      previousAgent,
      snapshot,
      journeySummary,
      customerCard,
      defaultExpanded = true,
      className,
      onViewCustomerInfo,
      onViewInteractionHistory,
      onLaunchPreviousAgentInteraction,
    },
    ref
  ) => {
    // Closes the "Call"/"Chat" popover as part of picking either one — a
    // plain uncontrolled `Popover` (no `open`/`onOpenChange` passed) only
    // closes on outside click/Escape, not on an internal item's own click,
    // so this stays local state rather than leaving that to Radix's
    // defaults.
    const [previousAgentPopoverOpen, setPreviousAgentPopoverOpen] = React.useState(false);
    return (
      <AccordionPrimitive.Root
        ref={ref}
        type="single"
        collapsible
        defaultValue={defaultExpanded ? "contact-overview" : undefined}
        className={cn("w-full pt-4", className)}
      >
        <AccordionPrimitive.Item value="contact-overview">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className="group flex items-center gap-1.5 text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors focus-visible:outline-none"
            >
              <span className="lyra-body-md-emphasis">Contextual Overview</span>
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
          >
            <div className="mt-3 flex flex-col gap-3">
              {/* Identity card — per explicit follow-up request, uses the
                  same green/success treatment `Tag`'s own "success"
                  variant does (`bg-lyra-status-success-subtle` + a
                  color-mixed success border), reversing this card's
                  earlier plain/neutral styling. Rendered first, ahead of
                  the intro paragraph below, per the original request. */}
              {customerCard && (
                <div className="flex flex-col gap-2.5 rounded-lyra-md border border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_30%,transparent)] bg-lyra-status-success-subtle p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full lyra-label",
                          customerCard.avatarClassName
                        )}
                        aria-hidden="true"
                      >
                        {customerCard.avatarInitials}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="lyra-body-md-emphasis text-lyra-fg-default truncate">{customerName}</span>
                        <span className="lyra-body-sm text-lyra-fg-secondary truncate">{customerCard.subtitle}</span>
                      </div>
                    </div>
                    {customerCard.balance && (
                      <div className="flex flex-shrink-0 flex-col items-end">
                        <span className="lyra-body-sm text-lyra-fg-secondary">Balance</span>
                        <span className="lyra-body-md-emphasis text-lyra-fg-default">{customerCard.balance}</span>
                      </div>
                    )}
                  </div>
                  {customerCard.tags && customerCard.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {customerCard.tags.map((tag) => (
                        <Tag key={tag} label={tag} shape="pill" />
                      ))}
                    </div>
                  )}
                </div>
              )}
              <p className="lyra-body-md text-lyra-fg-default">
                You are now working with {customerName}.
                {previousAgent ? (
                  <>
                    {" "}This is your first contact with {customerName} although they have already been working
                    with{" "}
                    {onLaunchPreviousAgentInteraction ? (
                      <Popover
                        open={previousAgentPopoverOpen}
                        onOpenChange={setPreviousAgentPopoverOpen}
                        placement="bottom"
                        align="start"
                        bodyPadding={false}
                        content={
                          <div className="flex flex-col py-1">
                            <MenuItem
                              icon={<Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
                              label="Call"
                              onClick={() => {
                                setPreviousAgentPopoverOpen(false);
                                onLaunchPreviousAgentInteraction("voice");
                              }}
                            />
                            <MenuItem
                              icon={<MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
                              label="Chat"
                              onClick={() => {
                                setPreviousAgentPopoverOpen(false);
                                onLaunchPreviousAgentInteraction("chat");
                              }}
                            />
                          </div>
                        }
                      >
                        <button
                          type="button"
                          className="lyra-body-md-emphasis text-lyra-fg-link hover:underline focus-visible:outline-none"
                        >
                          {previousAgent.name} ({previousAgent.agentId})
                        </button>
                      </Popover>
                    ) : (
                      <span className="lyra-body-md-emphasis text-lyra-fg-default">
                        {previousAgent.name} ({previousAgent.agentId})
                      </span>
                    )}
                    .
                  </>
                ) : (
                  " This is your first contact with them."
                )}
              </p>
              {/* "Contact Snapshot" row also carries the "View customer
                  info" link directly beside its own label (per explicit
                  request) — shown whenever there's a snapshot to list OR
                  the link to show, since the link needs this row's header
                  to attach to even with no bullets under it. */}
              {(snapshot && snapshot.length > 0) || onViewCustomerInfo ? (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Contact Snapshot</span>
                    {onViewCustomerInfo && (
                      <button
                        type="button"
                        onClick={onViewCustomerInfo}
                        className="lyra-body-sm text-lyra-fg-link hover:underline focus-visible:outline-none"
                      >
                        View customer info
                      </button>
                    )}
                  </div>
                  {snapshot && snapshot.length > 0 && (
                    <ul className="flex flex-col gap-1 pl-4 list-disc">
                      {snapshot.map((line, i) => (
                        <li key={i} className="lyra-body-sm text-lyra-fg-default">
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}
              {/* Journey Summary — plain "label + paragraph" block, same
                  chromeless treatment `snapshot` gets just above (per
                  explicit follow-up request; see `journeySummary`'s own
                  doc comment for the card-first version this replaced).
                  Per a later explicit request, this row now also carries
                  its own "View Customer Contacts" link directly beside its
                  label — the same treatment `onViewCustomerInfo` gets on
                  Contact Snapshot above, moved off that row and onto this
                  one since it targets the Contacts tab, not the Overview
                  tab `onViewCustomerInfo` does. */}
              {journeySummary || onViewInteractionHistory ? (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Journey Summary</span>
                    {onViewInteractionHistory && (
                      <button
                        type="button"
                        onClick={onViewInteractionHistory}
                        className="lyra-body-sm text-lyra-fg-link hover:underline focus-visible:outline-none"
                      >
                        View Customer Contacts
                      </button>
                    )}
                  </div>
                  {journeySummary && <p className="lyra-body-sm text-lyra-fg-default">{journeySummary}</p>}
                </div>
              ) : null}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    );
  }
);
ContactOverview.displayName = "ContactOverview";

export { ContactOverview };

/**
 * Info `CustomerContextOverview` below needs to render — the caller
 * resolves all of it (a directory lookup or, for this app's mock data, a
 * small deterministic pool) and this component just renders it, same
 * division of labor `ContactOverview`'s own `ContactOverviewInfo` above
 * already follows.
 */
export interface CustomerContextOverviewInfo {
  /**
   * A small identity-card summary for the "Customer Profile" container —
   * avatar, name (via the separate `customerName` prop), a subtitle (e.g.
   * segment + tenure), and a handful of status/context tags. Same shape
   * `ContactOverviewInfo.customerCard` already defined (that field was
   * never wired up by any consumer) — reused here rather than inventing a
   * second, slightly-different shape. Omit for a contact with no profile
   * information at all — the container still renders, just with the
   * customer's name and nothing else.
   */
  customerCard?: {
    /** e.g. "AS" for Alex Sanderson — same 2-letter initials convention
     *  every other initials avatar in this library uses. Omit for a raw,
     *  unidentified address standing in for a real name (a dialed number
     *  with no directory match, same distinction `ChatMessage`'s own
     *  `identified` prop makes, lyra-ui) — there are no real initials to
     *  derive off that, so per explicit request the avatar circle itself
     *  is omitted entirely rather than showing a meaningless character off
     *  the raw address (e.g. a stray "(" off a phone number); `subtitle`/
     *  `tags` below still render normally either way. */
    avatarInitials?: string;
    /** One of this library's own avatar background tokens. Per explicit
     *  request, callers should pass the SAME color `ChatMessage` itself
     *  uses for a customer-sender avatar ("bg-lyra-accent-green-soft
     *  text-lyra-accent-green-strong", chat-message.tsx) rather than a
     *  per-customer hashed color, so this identity card's avatar always
     *  matches how that same customer already reads elsewhere in the
     *  transcript. Ignored (no avatar renders at all) when
     *  `avatarInitials` is omitted. */
    avatarClassName?: string;
    /** e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
     *  line under the customer's name. */
    subtitle: string;
    /** Short status/context labels rendered as pill `Tag`s below the
     *  identity row. Omit/empty to show the identity row with no tags. */
    tags?: string[];
  };
  /** Short "Contact Snapshot" bullet list — for a returning/callback
   *  contact, a recap of the previous conversation; omit for a genuinely
   *  first-ever contact with no history to summarize (the container still
   *  renders, with a plain "new conversation" sentence in its place). */
  snapshot?: string[];
  /** A single recommended-next-step sentence for the "Next Best Action"
   *  container. Omit to fall back to a generic "confirm the reason for
   *  contact" placeholder rather than hiding the container — unlike
   *  `snapshot`/`customerCard`, this container always has SOMETHING to
   *  suggest. */
  nextBestAction?: string;
  /** Replaces the "Next Best Action" container's normal plain-sentence
   *  body (`nextBestAction` above, wrapped in a `<p>`) with arbitrary rich
   *  content instead — e.g. an interactive question with selectable option
   *  cards, for a consumer whose next-best-action isn't a single suggested
   *  sentence but an actual decision the agent needs to make. `nextBestAction`
   *  itself is left as-is when this is set (not read at all in that case) —
   *  a caller can still populate it for callers/analytics that only care
   *  about the plain-text summary, without it fighting this richer render.
   *  `undefined` (the default) leaves the existing plain-sentence behavior
   *  completely unaffected. */
  nextBestActionContent?: React.ReactNode;
  /** Drops the "Next Best Action" container's own accordion chrome
   *  entirely (the sparkle-icon title bar, chevron, and success-green
   *  background) — `nextBestActionContent` renders as a plain, uncollapsed
   *  block instead, still in the same position among Customer Profile/
   *  Contact Snapshot. Per explicit request, for a `nextBestActionContent`
   *  whose own content already provides enough visual structure (e.g. a
   *  question with its own bordered option cards, or a locked confirmation
   *  block) that a second layer of accordion framing around it just reads
   *  as redundant chrome. Only meaningful alongside `nextBestActionContent`
   *  — has no effect on the plain-sentence `nextBestAction` fallback.
   *  `undefined`/`false` (the default) keeps the normal accordion
   *  treatment for every other consumer. */
  nextBestActionBare?: boolean;
  /** Per explicit request ("put the customer summary content inside the
   *  customer profile accordion"): a short AI-style narrative — a few
   *  paragraphs recapping why this customer has contacted support before,
   *  what that prior contact resolved to, and (when available) a quoted
   *  excerpt from that earlier conversation. Same shape/content callers
   *  already compute for the separate "AI Customer Summary" panel
   *  (`detailedSummary` from `buildCustomerContextOverviewInfo`,
   *  agent-next-gen-shared-utils.ts) — rendered here too now, as plain
   *  paragraphs inside the "Customer Profile" container, directly below
   *  the identity card and above the "View customer info" link. Distinct
   *  from `snapshot` (a short bullet recap) and `nextBestAction` (a single
   *  suggested next step) — this is the longer narrative form of the same
   *  prior-contact context. Omit for no narrative summary to show. */
  detailedSummary?: string[];
}

export interface CustomerContextOverviewProps extends CustomerContextOverviewInfo {
  /** The customer this overview is about. */
  customerName: string;
  /** Additional className on the root element. */
  className?: string;
  /** Renders a "View customer info" link inside the Customer Profile
   *  container. Omit to hide it. */
  onViewCustomerInfo?: () => void;
  /** Renders a "View Customer Contacts" link inside the Contact Snapshot
   *  container. Omit to hide it. */
  onViewInteractionHistory?: () => void;
  /** Hides the "Next Best Action" container entirely — per explicit
   *  request ("add these to the details tab"), the "Details" side panel's
   *  own reuse of this component (`DetailsPanelAccordions`, agent-next-
   *  gen-customer-info-panel.tsx) shows only Customer Profile/Contact
   *  Snapshot there (Next Best Action already has its own, more prominent
   *  home at the top of the main transcript column, so repeating it in a
   *  side panel would just be noise). Defaults to `true` — every other
   *  consumer of this component keeps showing all three containers exactly
   *  as before. */
  showNextBestAction?: boolean;
  /** Hides the "Customer Profile" container entirely — per explicit
   *  request ("if a new call is made or the customer does not have any
   *  information, do not display the customer profile"): callers pass
   *  `false` for an unidentified/no-information contact instead of letting
   *  the container render with just a bare `customerName` fallback (no
   *  `customerCard`) and nothing else useful in it. Defaults to `true` —
   *  every other consumer keeps showing this container exactly as before. */
  showCustomerProfile?: boolean;
  /** Hides the "Contact Snapshot" container entirely — per explicit
   *  request (Advanced/"Phase 1B"'s main transcript column shows only
   *  "Next Best Action" there, with Customer Profile/Contact Snapshot
   *  reserved for the Details side panel — see each page's own
   *  `customerContextOverview` render-site doc comment). Defaults to
   *  `true` — every other consumer keeps showing this container exactly
   *  as before, mirroring `showCustomerProfile`'s identical pattern. */
  showContactSnapshot?: boolean;
}

/* ── CustomerContextOverview ──
   Replaces `ContactOverview`'s single "Contextual Overview" block, for
   callers that opt in, with three independently-collapsible containers —
   Customer Profile / Contact Snapshot / Next Best Action — per explicit
   request. Kept as a SEPARATE component from `ContactOverview` (not a
   variant/prop on it) rather than reworking that one in place, since only
   some consumers of `ContactOverview` are meant to switch to this new
   layout (see `InteractionTranscript`'s own `customerContextOverview` prop,
   agent-next-gen-transcript.tsx, for which callers opt in) — the others
   keep rendering the original block completely unchanged.

   `type="multiple"` (not `ContactOverview`'s own `type="single"`) since
   these three are independent containers, each with its own open/closed
   state, not one single toggle — all three start open (`defaultValue`
   below) so the whole panel reads immediately, same "already expanded,
   not something to opt into revealing" reasoning `ContactOverview`'s own
   `defaultExpanded = true` follows.

   Per explicit request, the three containers animate in first-to-last in a
   slow, elegant manner right after this component mounts (a fresh
   interaction launch) — a plain mount-triggered opacity/transform CSS
   transition, staggered per container via a `setTimeout` per index, rather
   than a new Tailwind keyframe: this only ever needs to play once forward
   on mount, not loop or reverse the way the `accordion-down`/`accordion-up`
   open/close keyframes (`AccordionPrimitive.Content` below, same ones
   `ContactOverview` uses) already do. */
const CustomerContextOverview = React.forwardRef<HTMLDivElement, CustomerContextOverviewProps>(
  (
    {
      customerName,
      customerCard,
      snapshot,
      nextBestAction,
      nextBestActionContent,
      nextBestActionBare,
      detailedSummary,
      className,
      onViewCustomerInfo,
      onViewInteractionHistory,
      showNextBestAction = true,
      showCustomerProfile = true,
      showContactSnapshot = true,
    },
    ref
  ) => {
    // 3 containers normally, fewer when `showNextBestAction`/
    // `showCustomerProfile`/`showContactSnapshot` hide one or more (see
    // each prop's own doc comment) — either way a stable, synchronous
    // count (never derived from the `sections` array below, which is
    // built AFTER this effect needs it).
    const SECTION_COUNT =
      (showCustomerProfile ? 1 : 0) + (showContactSnapshot ? 1 : 0) + (showNextBestAction ? 1 : 0);
    // How many containers have started their entrance so far — ratchets up
    // one at a time on a staggered timer, never down, so a re-render mid-
    // stagger (e.g. a prop update) can't restart it.
    const [enteredCount, setEnteredCount] = React.useState(0);
    React.useEffect(() => {
      const timers = Array.from({ length: SECTION_COUNT }, (_, i) =>
        window.setTimeout(() => setEnteredCount((n) => Math.max(n, i + 1)), 200 + i * 260)
      );
      return () => timers.forEach((t) => window.clearTimeout(t));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // "Contact Snapshot" (`value: "customer-snapshot"`) and "Customer
    // Profile" (`value: "customer-profile"`) both used to be plain entries
    // in this array, rendered by the exact same generic trigger/card markup
    // "Next Best Action" (the one entry still here) still uses. Per
    // explicit follow-up requests/reference mockups ("update the contact
    // snapshot accordion to look like the attached ... you can rename it
    // autosummary"; "update the customer profile accordion header to be
    // light blue and make the background of the container white ... rename
    // it Customer Info"), each now gets its OWN bespoke, differently-
    // colored header band (light purple + document icon for "Autosummary",
    // light blue + person icon for "Customer Info" — the latter matching
    // this library's own `bg-lyra-accent-blue-soft`/`text-lyra-accent-blue-
    // strong` pair, e.g. `customerCard.avatarClassName` callers already
    // pass for a blue-tier avatar) over a plain white body — different
    // enough from the shared generic shape that both are pulled out of
    // this array entirely (see their bespoke `AccordionPrimitive.Item`s in
    // `orderedItems` below) rather than bolted onto this type as one-off
    // special cases. The prop/content names (`showCustomerProfile`/
    // `customerCard`/`detailedSummary`/`onViewCustomerInfo`,
    // `showContactSnapshot`/`snapshot`/`onViewInteractionHistory`) are all
    // UNCHANGED — only the visible label/icon/chrome are new, same
    // "internal name stays, user-facing text renames" convention
    // `FILES_EMPTY_TEXT` (agent-next-gen-customer-info-panel.tsx) already
    // follows for its own "Files" → "Artifacts" rename.
    const sections: Array<{ value: string; icon: React.ReactNode; label: string; content: React.ReactNode; accent?: boolean }> = [
      {
        value: "next-best-action",
        icon: <Sparkles className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />,
        label: "Next Best Action",
        accent: true,
        // `lyra-body-md`, not the shared `renderGenericSection` default of
        // `lyra-body-sm` — per explicit request ("increase the font size
        // in the ... next-best-action accordion content to md") this
        // section's own content, unlike its neutral siblings, reads one
        // step larger.
        content: nextBestActionContent ?? (
          <p className="lyra-body-md text-lyra-fg-default">
            {nextBestAction ?? "Confirm the reason for contact and proceed with the customer's request."}
          </p>
        ),
      },
    ].filter((section) => showNextBestAction || section.value !== "next-best-action");

    // Unchanged from the old single-array `.map()` this replaces — the
    // exact same generic trigger/card markup this array's one remaining
    // entry, "Next Best Action", always used (Customer Profile/"Customer
    // Info" and "Autosummary"/`customer-snapshot` below both opted out of
    // this shared shape into their own bespoke, differently-colored
    // headers — see each one's own doc comment). Kept as its own function
    // rather than inlined, even with only one caller left, so a FUTURE
    // section that wants this same plain/neutral treatment still has it
    // available without re-deriving the markup.
    function renderGenericSection(
      section: { value: string; icon: React.ReactNode; label: string; content: React.ReactNode; accent?: boolean },
      i: number
    ) {
      return (
        <AccordionPrimitive.Item
          key={section.value}
          value={section.value}
          className={cn(
            "rounded-lyra-md border overflow-hidden transition-all ease-out",
            "duration-700",
            section.accent
              ? "border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_25%,transparent)] bg-lyra-status-success-subtle"
              : "border-lyra-border-subtle bg-lyra-bg-control-subtle",
            i < enteredCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:bg-lyra-state-hover active:bg-lyra-state-pressed cursor-pointer">
              <span className="flex-shrink-0 text-lyra-fg-secondary">{section.icon}</span>
              <span className="flex-1 text-left lyra-body-md truncate text-lyra-fg-default">
                {section.label}
              </span>
              <ChevronDown
                className="h-5 w-5 flex-shrink-0 text-lyra-fg-secondary transition-transform duration-200 group-data-[state=open]:rotate-180"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="p-4">{section.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      );
    }

    // "Customer Profile" (renamed "Customer Info" per explicit follow-up
    // request) used to be the first entry in the `sections` array above,
    // rendered by the same generic trigger/card markup as Next Best Action
    // still uses. Per explicit follow-up request ("update the customer
    // profile accordion header to be light blue and make the background of
    // the container white"), it now gets the same bespoke treatment
    // "Autosummary" already got just above — its own colored header band
    // (light blue here, matching this library's own `bg-lyra-accent-blue-
    // soft`/`text-lyra-accent-blue-strong` pair — the same one
    // `customerCard.avatarClassName` callers already pass for a blue-tier
    // avatar, e.g. AgentWorkspaceAdvancedPage.tsx) over a plain white body
    // (`bg-lyra-bg-surface-base`), rather than the shared neutral `bg-lyra-
    // bg-control-subtle` every other generic section still uses — pulled
    // out of `sections` for the same reason "Autosummary" was: different
    // enough from that shared shape to not be worth bolting on as a
    // one-off special case. Content (`customerCard`/`detailedSummary`/
    // `onViewCustomerInfo`) is completely unchanged, same "internal name
    // stays, only the visible chrome/label change" convention this file's
    // own `showContactSnapshot` doc comment above already follows.
    const customerProfileBody = (
      <div className="flex flex-col gap-2.5 p-4">
        {customerCard ? (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              {/* Omitted entirely (not even a fallback icon) when
                  `avatarInitials` is unset — see that field's own doc
                  comment above for why an unidentified contact gets no
                  avatar circle at all rather than a meaningless
                  initial off its raw address. */}
              {customerCard.avatarInitials && (
                <div
                  className={cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full lyra-label",
                    customerCard.avatarClassName
                  )}
                  aria-hidden="true"
                >
                  {customerCard.avatarInitials}
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="lyra-body-md-emphasis text-lyra-fg-default truncate">{customerName}</span>
                {/* lyra-body-md, not -sm, per explicit request ("increase
                    the font size in the ... customer info ... accordion
                    content to md"). */}
                <span className="lyra-body-md text-lyra-fg-secondary truncate">{customerCard.subtitle}</span>
              </div>
            </div>
            {customerCard.tags && customerCard.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {customerCard.tags.map((tag) => (
                  <Tag key={tag} label={tag} shape="pill" />
                ))}
              </div>
            )}
          </div>
        ) : (
          <span className="lyra-body-md text-lyra-fg-default">{customerName}</span>
        )}
        {/* Per explicit request ("put the customer summary content inside
            the customer profile accordion") — the narrative paragraphs
            `detailedSummary` carries, same styling as the separate "AI
            Customer Summary" panel's own summary paragraphs
            (agent-next-gen-ai-summary-panel.tsx) so this content reads
            identically in both places. */}
        {/* lyra-body-md, not -sm, per explicit request ("increase the font
            size in the ... customer info ... accordion content to md") —
            applies to this whole container's content, not just the
            headline narrative. */}
        {detailedSummary && detailedSummary.length > 0 && (
          <div className="flex flex-col gap-2">
            {detailedSummary.map((paragraph, i) => (
              <p key={i} className="lyra-body-md text-lyra-fg-default">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {onViewCustomerInfo && (
          <button
            type="button"
            onClick={onViewCustomerInfo}
            className="self-start lyra-body-md text-lyra-fg-link hover:underline focus-visible:outline-none"
          >
            View customer info
          </button>
        )}
      </div>
    );

    // The "Autosummary" content itself — the exact same bullet list/
    // fallback/link `customer-snapshot` always rendered, unchanged.
    // lyra-body-md, not -sm, throughout this body per explicit request
    // ("increase the font size in the autosummary ... accordion content
    // to md").
    const snapshotBody = (
      <div className="flex flex-col gap-2.5 p-4">
        {snapshot && snapshot.length > 0 ? (
          <ul className="flex flex-col gap-1 pl-4 list-disc">
            {snapshot.map((line, i) => (
              <li key={i} className="lyra-body-md text-lyra-fg-default">
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <p className="lyra-body-md text-lyra-fg-secondary">
            No prior contact history on file — this is a new conversation.
          </p>
        )}
        {onViewInteractionHistory && (
          <button
            type="button"
            onClick={onViewInteractionHistory}
            className="self-start lyra-body-md text-lyra-fg-link hover:underline focus-visible:outline-none"
          >
            View Customer Contacts
          </button>
        )}
      </div>
    );
    // Stitches the two generic sections above back together with the
    // bespoke "Autosummary" item, in the original Customer Profile /
    // Contact Snapshot / Next Best Action order, while keeping a single
    // running index (`entryIndex`) across ALL of them for the shared
    // staggered-entrance animation (`i < enteredCount` below) — same
    // sequencing the old, single homogenous `sections` array gave for
    // free, now assembled by hand since "Autosummary" no longer shares
    // that array's common shape. Skips (never increments the index for) a
    // section hidden by its own `show*` flag, exactly as the old `.filter`
    // above already did for the other two.
    let entryIndex = 0;
    const orderedItems: React.ReactNode[] = [];
    const nextBestActionSection = sections.find((s) => s.value === "next-best-action");

    if (showCustomerProfile) {
      const i = entryIndex++;
      orderedItems.push(
        <AccordionPrimitive.Item
          key="customer-profile"
          value="customer-profile"
          className={cn(
            "rounded-lyra-md border border-[color-mix(in_srgb,var(--lyra-color-status-info-strong)_25%,transparent)] overflow-hidden transition-all ease-out duration-700",
            i < enteredCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <AccordionPrimitive.Header>
            {/* Header band recolored to match "Next Best Action"'s own
                info-status tint (`bg-lyra-status-info-subtle` +
                `status-info-strong` border/icon/chevron — the same pair
                `renderGenericSection`'s `accent` branch uses just below)
                per explicit follow-up request, so the two containers read
                as the same color family instead of Customer Info's old
                plain `accent-blue-soft`/`-strong` pairing. White body below
                unchanged — see `customerProfileBody`'s own doc comment
                above for that reasoning; only the header itself was asked
                to change. */}
            <AccordionPrimitive.Trigger className="group w-full flex items-center gap-2 bg-lyra-status-info-subtle px-4 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:brightness-95 cursor-pointer">
              <User className="h-4 w-4 shrink-0 text-lyra-status-info-strong" strokeWidth={1.5} aria-hidden="true" />
              <span className="flex-1 text-left lyra-body-md-emphasis text-lyra-fg-default truncate">Customer Info</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-lyra-status-info-strong transition-transform duration-200 group-data-[state=open]:rotate-180"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="bg-lyra-bg-surface-base">{customerProfileBody}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      );
    }
    if (showContactSnapshot) {
      const i = entryIndex++;
      orderedItems.push(
        <AccordionPrimitive.Item
          key="customer-snapshot"
          value="customer-snapshot"
          className={cn(
            "rounded-lyra-md border border-lyra-border-subtle overflow-hidden transition-all ease-out duration-700",
            i < enteredCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <AccordionPrimitive.Header>
            {/* Light-purple header band + document icon + bold title —
                matches this app's existing "Journey Summary" card
                (`CopilotTabContent`, agent-next-gen-customer-info-
                panel.tsx: `bg-lyra-accent-purple-soft` header over a plain
                white body) rather than the other two sections' plain
                neutral trigger row, per the reference mockup. Still a real
                `AccordionPrimitive.Trigger` (the whole band toggles
                open/closed, chevron included) even though the mockup
                itself doesn't show a chevron — per explicit request
                ("make this an accordion"), this stays genuinely
                collapsible like its two siblings, not a static card.
                Chevron is `h-5 w-5` (was `h-4 w-4` — per explicit bug
                report, "make sure the accordion chevron size matches the
                lyra-ui component - it looks smaller") to match
                `renderGenericSection`'s own chevron exactly, same reasoning
                that function's own doc comment gives for this whole
                trigger row's padding/sizing already being shared across
                every section. */}
            {/* `lyra-purple-soft-header-fix` (lyra-tokens.css), not the
                shared `bg-lyra-accent-purple-soft` class — per explicit
                report ("check if that's the correct dark mode version, it
                seems heavy"): `--lyra-color-accent-purple-soft`'s dark-mode
                value (#4e39a8) sits ~34 lightness points above the dark
                canvas, vs. ~26-29 points for every sibling accent color
                (blue/red/pink) that starts from the same very-pale
                light-mode value — an outlier that reads visibly heavier
                than intended. Scoped here first, by explicit request, to
                preview the corrected shade (#3c298e, in line with those
                siblings) before touching the shared token everywhere else
                it's used (Tag's purple variant, Icon's "info" variant,
                agent-notifications, purple chart series) — see
                lyra-tokens.css's own comment on this class for the
                promote-to-global follow-up. Light mode is untouched either
                way (this class simply falls back to the real token
                there). */}
            <AccordionPrimitive.Trigger className="group w-full flex items-center gap-2 lyra-purple-soft-header-fix px-4 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:brightness-95 cursor-pointer">
              <FileText className="h-4 w-4 shrink-0 text-lyra-accent-purple-strong" strokeWidth={1.5} aria-hidden="true" />
              <span className="flex-1 text-left lyra-body-md-emphasis text-lyra-fg-default truncate">Autosummary</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-lyra-accent-purple-strong transition-transform duration-200 group-data-[state=open]:rotate-180"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="bg-lyra-bg-surface-base">{snapshotBody}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      );
    }
    if (nextBestActionSection) {
      orderedItems.push(
        nextBestActionBare ? (
          <div key="next-best-action">{nextBestActionSection.content}</div>
        ) : (
          renderGenericSection(nextBestActionSection, entryIndex++)
        )
      );
    }
    const orderedValues = [
      showCustomerProfile && "customer-profile",
      showContactSnapshot && "customer-snapshot",
      nextBestActionSection && !nextBestActionBare && "next-best-action",
    ].filter((v): v is string => typeof v === "string");

    return (
      <div ref={ref} className={cn("w-full pt-4 flex flex-col gap-3", className)}>
        <AccordionPrimitive.Root
          type="multiple"
          defaultValue={orderedValues}
          className="flex flex-col gap-3"
        >
          {orderedItems}
        </AccordionPrimitive.Root>
      </div>
    );
  }
);
CustomerContextOverview.displayName = "CustomerContextOverview";

export { CustomerContextOverview };
