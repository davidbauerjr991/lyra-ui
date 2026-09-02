import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

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
  /** Renders a "View customer info" link on the right side of the "Contact
   *  Snapshot" header row (per explicit request — this used to sit in its
   *  own row at the bottom of the overview). Omit to hide the link
   *  entirely (e.g. no customer info panel available in this context). The
   *  caller is responsible for opening whatever customer-info surface it
   *  has and focusing it on the right tab. Rendered even when `snapshot`
   *  itself is empty/omitted — the "Contact Snapshot" row still shows,
   *  just without any bullets under it, so this link (and
   *  `onViewInteractionHistory` below) always has a place to live. */
  onViewCustomerInfo?: () => void;
  /** Renders a "Contact History" link alongside `onViewCustomerInfo` (same
   *  row, `|`-separated, matching the divider convention already used for
   *  adjacent link-like items elsewhere in this app) — opens the same
   *  customer-info surface `onViewCustomerInfo` does, focused on that
   *  surface's own interaction/session-history tab instead. Omit to hide. */
  onViewInteractionHistory?: () => void;
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
      defaultExpanded = true,
      className,
      onViewCustomerInfo,
      onViewInteractionHistory,
    },
    ref
  ) => {
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
              <p className="lyra-body-md text-lyra-fg-default">
                You are now working with {customerName}.
                {previousAgent ? (
                  <>
                    {" "}This is your first contact with {customerName} although they have already been working
                    with{" "}
                    <span className="lyra-body-md-emphasis text-lyra-fg-default">
                      {previousAgent.name} ({previousAgent.agentId})
                    </span>
                    .
                  </>
                ) : (
                  " This is your first contact with them."
                )}
              </p>
              {/* "Contact Snapshot" row also carries the "View customer
                  info"/"Contact History" links directly beside its own
                  label (per explicit request — NOT pushed to the row's far
                  right edge) — shown whenever there's a snapshot to list OR
                  either link to show, since either link needs this row's
                  header to attach to even with no bullets under it. */}
              {(snapshot && snapshot.length > 0) || onViewCustomerInfo || onViewInteractionHistory ? (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Contact Snapshot</span>
                    {(onViewCustomerInfo || onViewInteractionHistory) && (
                      <div className="flex items-center gap-1.5 lyra-body-sm">
                        {onViewCustomerInfo && (
                          <button
                            type="button"
                            onClick={onViewCustomerInfo}
                            className="text-lyra-fg-link hover:underline focus-visible:outline-none"
                          >
                            View customer info
                          </button>
                        )}
                        {onViewCustomerInfo && onViewInteractionHistory && (
                          <span className="text-lyra-fg-secondary" aria-hidden="true">
                            |
                          </span>
                        )}
                        {onViewInteractionHistory && (
                          <button
                            type="button"
                            onClick={onViewInteractionHistory}
                            className="text-lyra-fg-link hover:underline focus-visible:outline-none"
                          >
                            Contact History
                          </button>
                        )}
                      </div>
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
                  doc comment for the card-first version this replaced). */}
              {journeySummary && (
                <div className="flex flex-col gap-1.5">
                  <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Journey Summary</span>
                  <p className="lyra-body-sm text-lyra-fg-default">{journeySummary}</p>
                </div>
              )}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    );
  }
);
ContactOverview.displayName = "ContactOverview";

export { ContactOverview };
