import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
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
              <span className="lyra-body-md-emphasis">Contact Overview</span>
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
