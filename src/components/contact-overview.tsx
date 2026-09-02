import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Bookmark } from "lucide-react";
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
   *  below Contact Snapshot in its own bordered "Journey Summary" card
   *  (bookmark icon + soft-purple header over a plain white body) — per
   *  explicit request, the same visual treatment agent-next-gen-v2's own
   *  Copilot tab already used for this exact same field
   *  (`CopilotTabContent`, agent-next-gen-customer-info-panel.tsx) before
   *  Copilot itself was hidden there; this is that content's new home.
   *  Omit for no journey to recap (same as `snapshot`). */
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
  ({ customerName, previousAgent, snapshot, journeySummary, defaultExpanded = true, className }, ref) => {
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
              {snapshot && snapshot.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">Contact Snapshot</span>
                  <ul className="flex flex-col gap-1 pl-4 list-disc">
                    {snapshot.map((line, i) => (
                      <li key={i} className="lyra-body-sm text-lyra-fg-default">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Journey Summary — a bordered card with its own soft-purple
                  header band (icon + title) over a plain white body, same
                  markup as agent-next-gen-v2's own former Copilot tab used
                  for this exact field (`CopilotTabContent`) — see
                  `journeySummary`'s own doc comment above for why it moved
                  here. `lyra-accent-purple-soft`/`-strong` (tailwind-
                  preset.ts) is the same accent pair `Badge`'s `color="purple"`
                  variant resolves to — used directly here since this is a
                  fixed two-tone header bar, not a pill needing that
                  component's full variant machinery. */}
              {journeySummary && (
                <div className="overflow-hidden rounded-lyra-md border border-lyra-border-subtle">
                  <div className="flex items-center gap-2 bg-lyra-accent-purple-soft px-4 py-2.5">
                    <Bookmark className="h-4 w-4 shrink-0 text-lyra-accent-purple-strong" strokeWidth={1.5} aria-hidden="true" />
                    <span className="lyra-body-md-emphasis text-lyra-fg-default">Journey Summary</span>
                  </div>
                  <div className="bg-lyra-bg-surface-base px-4 py-3">
                    <p className="lyra-body-md text-lyra-fg-default">{journeySummary}</p>
                  </div>
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
