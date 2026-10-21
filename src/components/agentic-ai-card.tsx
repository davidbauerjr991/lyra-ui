import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { AICard, type AICardProps } from "./ai-card";
import { Tag, type TagVariant } from "./tag";

/* ── Status ── */

/**
 * The state of the card's work, shown as a pill at the right end of the header (a `Tag` with a dot).
 * - `waiting` / `queued`: nothing to show yet (neutral)
 * - `running` / `live`: working or updating as new information arrives (blue, pulsing dot)
 * - `changed`: the content just changed (warning)
 * - `suggested`: the agent offers something to use (purple)
 * - `needs-you`: the agent has to act (warning)
 * - `authorized` / `done`: finished well (success)
 * - `failed`: something went wrong (critical)
 */
export type AgenticStatus = "waiting" | "queued" | "running" | "live" | "changed" | "suggested" | "needs-you" | "authorized" | "done" | "failed";

export const AGENTIC_STATUS_META: Record<AgenticStatus, { label: string; variant: TagVariant; pulse: boolean }> = {
  waiting: { label: "Waiting", variant: "neutral", pulse: false },
  queued: { label: "Queued", variant: "neutral", pulse: false },
  running: { label: "Running", variant: "info", pulse: true },
  live: { label: "Live", variant: "info", pulse: true },
  changed: { label: "Changed", variant: "warning", pulse: false },
  suggested: { label: "Suggestion", variant: "purple", pulse: false },
  "needs-you": { label: "Needs you", variant: "warning", pulse: false },
  authorized: { label: "Authorized", variant: "success", pulse: false },
  done: { label: "Done", variant: "success", pulse: false },
  failed: { label: "Failed", variant: "critical", pulse: false },
};

/* ── Props ── */

export interface AgenticAICardProps extends Omit<AICardProps, "children"> {
  /** The card's state, as a header pill. Omit for no pill. */
  status?: AgenticStatus;
  /** Replaces the status pill's default text ("Needs you", "Running"…). */
  statusLabel?: string;
  /** Marks the card as one only the agent sees, never the customer. Shows a "For you" note. */
  forYou?: boolean;
  /** Text of the for-you note. Default "For you · not part of the conversation". */
  forYouLabel?: string;
  /** Card body: `AgenticSection`s and the parts (`StatusChecklist`, `Meter`, `StreamedText`…). */
  children?: React.ReactNode;
}

/* ── Card ── */

/**
 * A card for what an AI agent works out or does for the human agent: a sentiment reading, a live
 * summary, a knowledge answer, a task run. It is an `AICard` (white header, icon in an avatar by default)
 * plus three things the plain card does not have: a status pill in the header, a "for you" note, and a
 * body made of small composable parts. The state is entirely props (`status`, `children`); the card keeps
 * no timers of its own.
 */
const AgenticAICard = React.forwardRef<HTMLDivElement, AgenticAICardProps>(
  ({ status, statusLabel, forYou, forYouLabel = "For you · not part of the conversation", color = "white", avatarColor = "info", headerEnd, children, ...props }, ref) => {
    const s = status ? AGENTIC_STATUS_META[status] : undefined;
    const statusNode = s ? <Tag label={statusLabel ?? s.label} variant={s.variant} shape="pill" dot dotPulse={s.pulse} /> : undefined;
    const hasTop = Boolean(forYou);
    return (
      <AICard
        ref={ref}
        color={color}
        avatarColor={color === "white" ? avatarColor : undefined}
        headerEnd={
          statusNode || headerEnd ? (
            <>
              {headerEnd}
              {statusNode}
            </>
          ) : undefined
        }
        {...props}
      >
        <div className="flex flex-col gap-4">
          {hasTop && (
            <div className="-mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 lyra-body-sm text-lyra-fg-secondary">
              {forYou && (
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  {forYouLabel}
                </span>
              )}
            </div>
          )}
          {children}
        </div>
      </AICard>
    );
  }
);
AgenticAICard.displayName = "AgenticAICard";

/* ── Section ── */

export interface AgenticSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Small caption above the content ("Why", "Sources"). Omit for none. */
  label?: React.ReactNode;
  children?: React.ReactNode;
}

/** One block of an `AgenticAICard` body, with an optional small caption. */
const AgenticSection = React.forwardRef<HTMLDivElement, AgenticSectionProps>(({ label, className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props}>
    {label !== undefined && <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">{label}</span>}
    {children}
  </div>
));
AgenticSection.displayName = "AgenticSection";

export { AgenticAICard, AgenticSection };
