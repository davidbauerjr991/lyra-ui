import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight, ChevronsDownUp, ChevronsUpDown, Trash2 } from "lucide-react";
import { cn } from "../lib/utils";
import { ActionIconButton } from "./actions";
import { Button } from "./button";
import { Tag } from "./tag";
import { Tooltip } from "./tooltip";
import { Label } from "./label";

/* ── SessionDetailsCard / SessionDetailsSection ──
   Ported from agent-next-gen-v2's own `TranscriptSessionDetails`/
   `TranscriptSessionSeparator` (agent-next-gen-transcript.tsx) — the
   "# CTX-... · <date> ⌄" toggle row a session collapses to, and the
   "Session Details" card (Contact ID/Date, Start/End, Channel/Skill,
   Agent/Status, two fields per row, plus an optional "chat fingerprint"
   footer) it expands to reveal.

   Deliberately narrower than v2's own version: that component also carries
   a session status pill + its own "close contact" confirm popover, a
   Consult/Transfer icon, a live Outcome popover, and an "Unassign &
   Dismiss" button — all real actions tied to v2's own transcript/session
   state machine (which session is current, which channel it belongs to,
   whether the whole interaction is closed), not generic pieces of "the
   session section" itself. Only `onDeleteDraft` made the cut (as a plain
   optional callback, same "renders for real regardless of a handler, or
   omit the slot entirely" shape `InteractionComposer`'s own toolbar
   buttons use) since it's what the reference screenshot actually shows.

   `SessionDetailsCard` (the grid) and `SessionDetailsSection` (the
   collapsible toggle row + that card) are both exported separately — most
   callers want the whole section, but a caller already building its own
   toggle/trigger can render just the card. */

export interface SessionDetailsFingerprint {
  os: string;
  browser: string;
  language: string;
  deviceType: string;
  applicationType: string;
}

export interface SessionDetailsInfo {
  contactId: string;
  date: string;
  startTime: string;
  endTime: string;
  channel: string;
  skill: string;
  agent: string;
  status: string;
  /** "Chat fingerprint" footer — omit for a session with no client
   *  telemetry to show; the footer itself is hidden rather than rendered
   *  empty. */
  fingerprint?: SessionDetailsFingerprint;
}

export interface SessionDetailsCardProps {
  session: SessionDetailsInfo;
  className?: string;
}

/** The Contact ID/Date/Start/End/Channel/Skill/Agent/Status grid + optional
 *  fingerprint footer, capped to 225px with its own internal scroll once
 *  content overflows — same `.lyra-form-grid`/`.lyra-form-grid-wrap`
 *  two-column container-query pattern `CustomerDetailTabContent` uses for
 *  its own 2-up field rows, and the same "Label Horizontal" convention
 *  (`Input.stories.tsx`'s `LabelHorizontalWithSeparator`) rather than
 *  `Input` itself, which always stacks its label above the field. */
export function SessionDetailsCard({ session, className }: SessionDetailsCardProps) {
  const rows: Array<[string, string, string, string]> = [
    ["Contact ID", session.contactId, "Date", session.date],
    ["Start", session.startTime, "End", session.endTime],
    ["Channel", session.channel, "Skill", session.skill],
    ["Agent", session.agent, "Status", session.status],
  ];
  const fingerprintFields: Array<[string, string]> | undefined = session.fingerprint
    ? [
        ["OS", session.fingerprint.os],
        ["Browser", session.fingerprint.browser],
        ["Language", session.fingerprint.language],
        ["Device Type", session.fingerprint.deviceType],
        ["Application Type", session.fingerprint.applicationType],
      ]
    : undefined;

  return (
    <div
      className={cn(
        "max-h-[225px] overflow-y-auto rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-control-subtle",
        className
      )}
    >
      <div className="flex flex-col gap-3 p-4 lyra-form-grid-wrap">
        <h3 className="lyra-body-md-emphasis text-lyra-fg-default">Session Details</h3>
        {rows.map(([label1, value1, label2, value2]) => (
          <div key={label1} className="lyra-form-grid">
            <div className="flex items-center justify-between gap-4">
              <Label label={label1} />
              <span className="lyra-body-md text-lyra-fg-secondary">{value1}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Label label={label2} />
              <span className="lyra-body-md text-lyra-fg-secondary">{value2}</span>
            </div>
          </div>
        ))}
        {fingerprintFields && (
          <p className="border-t border-lyra-border-subtle pt-3 lyra-body-sm text-lyra-fg-secondary">
            {fingerprintFields.map(([label, value], i) => (
              <React.Fragment key={label}>
                {i > 0 && <span aria-hidden="true"> | </span>}
                <span className="lyra-body-sm-emphasis text-lyra-fg-default">{label}</span> {value}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export interface SessionDetailsSectionProps {
  session: SessionDetailsInfo;
  /** Controlled open/closed state for the details card below the toggle
   *  row — this component owns no state of its own (same fully-controlled
   *  pattern `InteractionNavItem`'s own `collapsible` channels use). */
  open: boolean;
  onToggle: () => void;
  /** This session's own message count, shown as "{n} Messages | " right
   *  before "# contactId · date" — omit entirely (not `0`) for a session
   *  with no real per-message count to report (e.g. a voice/email session
   *  with no chat transcript), rather than misreporting one as an empty
   *  chat. */
  messageCount?: number;
  /** Renders a red "Delete Draft" button at the row's right edge when
   *  passed — matching v2's own treatment for a brand-new, untouched
   *  outbound draft (closing it deletes it outright, rather than just
   *  dismissing a live assignment). Omit for a session with nothing to
   *  delete. */
  onDeleteDraft?: () => void;
  /** Whether this closed session's whole interaction — `SessionDetailsCard`
   *  AND `children` (its message content) — is currently collapsed away,
   *  animated shut as one block. The header row (message count/"View
   *  Details" toggle, "Closed" pill, Delete Draft) always stays visible
   *  either way; only the content below it collapses. A strictly coarser
   *  toggle than `open`/`onToggle`, which only ever hides
   *  `SessionDetailsCard` by itself. The collapse icon that flips this only
   *  renders when `session.status === "Closed"` (see `onToggleCollapsed`),
   *  but this prop itself isn't gated on status — pass it through as-is. */
  collapsed?: boolean;
  /** Toggles `collapsed`. Passing this (on a `Closed` session) is what
   *  actually renders the "Closed" status pill + its collapse icon in the
   *  header row — omit to show the "Closed" pill with no collapse
   *  affordance at all, e.g. for a caller that doesn't support collapsing
   *  closed interactions. */
  onToggleCollapsed?: () => void;
  /** This session's own message content (typically a list of `ChatMessage`)
   *  — rendered directly below `SessionDetailsCard`, and hidden/shown
   *  together with it, animated, whenever `collapsed` toggles. Deliberately
   *  a `children` slot rather than this component importing `ChatMessage`
   *  itself: `session-details.tsx` stays a generic "session summary" piece
   *  with no dependency on chat-specific markup, and a caller with a
   *  Voice/Email session (no chat transcript at all) can simply omit it. */
  children?: React.ReactNode;
  className?: string;
}

/** The collapsible "{n} Messages | # contactId · date ⌄" toggle row +
 *  `SessionDetailsCard` it reveals — the whole block the reference
 *  screenshot shows. Animated via `@radix-ui/react-accordion` directly
 *  (not lyra-ui's own `Accordion` component, which always renders its own
 *  full-width trigger button + a `border-b` after every item — neither fits
 *  here, since the real trigger is the "# contactId · date" pill and this
 *  has no dividers of its own beyond the one under the whole section) —
 *  same `data-[state=open]:animate-accordion-down`/`data-[state=closed]:
 *  animate-accordion-up` keyframes `Accordion` itself uses (already defined
 *  in this package's own tailwind config), just without that component's
 *  trigger/divider markup along for the ride.
 *
 *  A `Closed` session additionally gets a "Closed" status pill
 *  (`variant="critical" shape="pill"`, matching v2's own
 *  `TRANSCRIPT_SESSION_STATUS_VARIANT.Closed` mapping) in the header row —
 *  and, when `onToggleCollapsed` is passed, a `ChevronsDownUp`/
 *  `ChevronsUpDown` icon beside it (same "which direction does the next
 *  click bulk-apply" idiom `AssignmentsExpandCollapseAllButton` uses in
 *  assignments-section-caption.tsx). Unlike `open`/`onToggle` — which only
 *  ever animates `SessionDetailsCard` itself open/closed — this collapses
 *  the *entire* interaction: `SessionDetailsCard` (if `open`) AND
 *  `children` (this session's own message content, typically a list of
 *  `ChatMessage`) both animate shut together as one block, using a second,
 *  independent `AccordionPrimitive` instance around that whole block. The
 *  header row itself always stays put either way — only the content below
 *  it collapses. */
export function SessionDetailsSection({
  session,
  open,
  onToggle,
  messageCount,
  onDeleteDraft,
  collapsed = false,
  onToggleCollapsed,
  children,
  className,
}: SessionDetailsSectionProps) {
  const isClosed = session.status === "Closed";

  return (
    <div className={cn("border-b border-lyra-border-subtle bg-lyra-bg-surface-base", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 py-2">
        <Tooltip content="View Details" placement="bottom">
          <Button
            variant="ghost"
            onClick={onToggle}
            aria-expanded={open}
            className="h-auto shrink-0 gap-1.5 p-0 hover:bg-transparent active:bg-transparent lyra-body-sm text-lyra-fg-secondary"
          >
            {messageCount != null && (
              <>
                <span>
                  {messageCount} Message{messageCount === 1 ? "" : "s"}
                </span>
                <span aria-hidden="true">|</span>
              </>
            )}
            <span aria-hidden="true">#</span>
            <span>{session.contactId}</span>
            <span aria-hidden="true">·</span>
            <span>{session.date}</span>
            {open ? (
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </Button>
        </Tooltip>
        <div className="flex shrink-0 items-center gap-2">
          {isClosed && <Tag label="Closed" variant="critical" shape="pill" />}
          {isClosed && onToggleCollapsed && (
            <Tooltip content={collapsed ? "Expand interaction" : "Collapse interaction"} placement="bottom">
              <ActionIconButton
                size="sm"
                aria-label={collapsed ? "Expand interaction" : "Collapse interaction"}
                aria-expanded={!collapsed}
                onClick={onToggleCollapsed}
              >
                {collapsed ? (
                  <ChevronsUpDown className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <ChevronsDownUp className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                )}
              </ActionIconButton>
            </Tooltip>
          )}
          {onDeleteDraft && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 shrink-0 text-lyra-status-critical-strong hover:bg-lyra-status-critical-subtle hover:text-lyra-status-critical-strong active:bg-lyra-status-critical-medium"
              onClick={onDeleteDraft}
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
              Delete Draft
            </Button>
          )}
        </div>
      </div>

      {/* The whole interaction — details card + message content — collapses
          as one animated block whenever `collapsed` is true. A second,
          independent `AccordionPrimitive` nested inside it still drives
          `SessionDetailsCard`'s own `open`/`onToggle` animation exactly as
          before; the two are unrelated instances, so a caller can open the
          details card back up on a still-collapsed session with no visible
          effect until it's expanded again. */}
      <AccordionPrimitive.Root
        type="single"
        collapsible
        value={collapsed ? "" : "body"}
        onValueChange={() => {}}
      >
        <AccordionPrimitive.Item value="body" className="border-none">
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="flex flex-col gap-3 pb-4">
              <AccordionPrimitive.Root
                type="single"
                collapsible
                value={open ? "card" : ""}
                onValueChange={() => {}}
              >
                <AccordionPrimitive.Item value="card" className="border-none">
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <SessionDetailsCard session={session} />
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              </AccordionPrimitive.Root>
              {children}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    </div>
  );
}
