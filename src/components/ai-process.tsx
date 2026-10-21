import * as React from "react";
import { Check, Clock, AlertCircle, Loader } from "lucide-react";
import { cn } from "../lib/utils";
import { Icon } from "./icon";
import { ProgressBar } from "./progress-bar";
import { ShowMore } from "./show-more";

/* ── Types ── */

export type AIProcessStepStatus = "pending" | "active" | "done" | "error";

/**
 * What the process looks like.
 * - `thought` (default): the collapsible "Thought process" list with status icons.
 * - `progress`: a titled process with a progress bar and, per step, a status icon and the time it happened.
 * - `numbered`: instructions to follow in order: a number, a bold title and a line of detail. No status.
 */
export type AIProcessVariant = "thought" | "progress" | "numbered";

/** How strongly the step colors read: "subtle" (default) is a tinted circle with a colored glyph; "strong" is a solid circle with a white glyph. */
export type AIProcessIntensity = "subtle" | "strong";

export interface AIProcessStep {
  id: string;
  label: string;
  description?: string;
  status?: AIProcessStepStatus;
  /** `progress` variant: when the step happened ("2:01"), shown at the right. */
  at?: string;
}

export interface AIProcessProps {
  /** Steps in the thought process */
  steps: AIProcessStep[];
  /** Header label (default: "Thought process") */
  label?: string;
  /** Step colors: "subtle" (default, tinted) or "strong" (solid). Applies to the status icons and to the numbers of the numbered variant. */
  intensity?: AIProcessIntensity;
  /** Look of the process: "thought" (default), "progress" or "numbered". See `AIProcessVariant`. */
  variant?: AIProcessVariant;
  /** `progress` and `numbered` variants: the heading ("Refund review"). Replaces `label`. Omit for no heading. */
  title?: React.ReactNode;
  /** `progress` variant: text at the right of the heading ("Back office · stage 3 of 5"). */
  meta?: React.ReactNode;
  /**
   * Whether the heading toggles the steps open and closed. Default: true for "thought", false for the
   * other variants (their steps always show).
   */
  collapsible?: boolean;
  /** Default expanded state — ignored once `expanded` is provided (see below). */
  defaultExpanded?: boolean;
  /**
   * Controlled expanded state. Omit for `AIProcess` to manage its own (via
   * `defaultExpanded`) — e.g. so a caller can auto-collapse this once its
   * steps finish, such as a done process that's taking up too much space,
   * while the header toggle (`onExpandedChange`) still lets the agent
   * reopen it afterward.
   */
  expanded?: boolean;
  /** Fires whenever the header toggle is clicked, whether controlled or not. */
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
}

/* ── Step icon ──
   Built on the shared `Icon` component (`size="xs"`, background + `shape=
   "circle"`) instead of a bespoke span — this used to be its own hand-
   rolled "colored circle + lucide glyph" implementation, parallel to (and
   drifted from) `Icon`'s own `background`+`shape="circle"` mode, which is
   the same pattern the "Queue Agent status" icons (`agent-dashboard.tsx`'s
   `AgentDashboardQueueDrilldown`) already use. `Icon` gained `xs` (24px
   container / 14px glyph, matching this component's original dimensions
   exactly), a `shell` background (for "pending" — distinct from `neutral`,
   see `icon.tsx`'s own comment on why), and `strokeWidth`/`spin` props (for
   the heavier "done"/"error" strokes and the spinning "active" loader) so
   this could move onto it without changing anything visually. */

function StepIcon({ status, intensity }: { status: AIProcessStepStatus; intensity: AIProcessIntensity }) {
  const strong = intensity === "strong";
  switch (status) {
    case "done":
      return <Icon icon={Check} size="xs" background={strong ? "success-strong" : "success"} shape="circle" strokeWidth={2.5} decorative />;
    case "active":
      return <Icon icon={Loader} size="xs" background={strong ? "primary" : "active"} shape="circle" strokeWidth={2} spin decorative />;
    case "error":
      return <Icon icon={AlertCircle} size="xs" background={strong ? "critical-strong" : "critical"} shape="circle" strokeWidth={2} decorative />;
    case "pending":
    default:
      return <Icon icon={Clock} size="xs" background="shell" shape="circle" strokeWidth={1.5} decorative />;
  }
}

/* ── Component ── */

const AIProcess = React.forwardRef<HTMLDivElement, AIProcessProps>(
  ({
    steps,
    label = "Thought process",
    variant = "thought",
    intensity = "subtle",
    title,
    meta,
    collapsible: collapsibleProp,
    defaultExpanded,
    expanded: expandedProp,
    onExpandedChange,
    className,
  }, ref) => {
  const collapsible = collapsibleProp ?? variant === "thought";
  // A non-collapsible process always shows its steps; a collapsible one starts closed unless told otherwise.
  const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded ?? !collapsible);
  const expanded = expandedProp ?? internalExpanded;

  const heading = variant === "thought" ? label : title;
  const showSteps = !collapsible || expanded;
  const done = steps.filter((st) => (st.status ?? "pending") === "done").length;
  const active = steps.some((st) => st.status === "active");
  const pct = steps.length ? Math.round(((done + (active ? 0.5 : 0)) / steps.length) * 100) : 0;
  // A collapsible process puts its heading in the ShowMore trigger; a fixed one shows a plain heading row.
  const plainHeading =
    collapsible || (heading === undefined && !meta) ? null : (
      <div className="flex items-baseline justify-between gap-3">
        <span className="lyra-body-md-emphasis text-lyra-fg-default">{heading}</span>
        {meta && <span className="lyra-body-sm text-lyra-fg-secondary">{meta}</span>}
      </div>
    );
  const hasHeading = collapsible ? heading !== undefined || !!meta : !!plainHeading;
  // Progress bar (progress variant): always visible, even while the steps are folded away.
  const progressNode =
    variant === "progress" ? (
      <ProgressBar value={pct} size="sm" aria-label={`${done} of ${steps.length} steps done`} className={hasHeading ? "mt-2" : undefined} />
    ) : undefined;

  const stepsNode = (
      <ol className={cn("flex flex-col", (hasHeading || variant === "progress") && "mt-3", variant === "numbered" && "gap-3")}>
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const status = step.status ?? "pending";

          return (
            <li key={step.id} className="flex flex-col" aria-current={status === "active" ? "step" : undefined}>
              {/* Icon + label row — center aligned */}
              <div className={cn("flex gap-3", variant === "numbered" ? "items-start" : "items-center")}>
                {variant === "numbered" ? (
                  <span aria-hidden="true" className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full lyra-body-sm-emphasis", intensity === "strong" ? "bg-lyra-bg-primary text-lyra-fg-on-primary" : "bg-lyra-bg-active-subtle text-lyra-fg-active-strong")}>
                    {i + 1}
                  </span>
                ) : (
                  <StepIcon status={status} intensity={intensity} />
                )}
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className={cn(
                    variant === "numbered" ? "lyra-body-md-emphasis text-lyra-fg-default" : "lyra-body-sm",
                    variant !== "numbered" && (
                      status === "done"   ? "text-lyra-fg-secondary" :
                      status === "active" ? "text-lyra-fg-active-strong" :
                      status === "error"  ? "text-lyra-status-critical-strong" :
                      "text-lyra-fg-secondary"
                    )
                  )}>
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="lyra-body-sm text-lyra-fg-secondary">{step.description}</span>
                  )}
                </div>
                {variant === "progress" && step.at && (
                  <time className="shrink-0 lyra-body-sm tabular-nums text-lyra-fg-secondary">{step.at}</time>
                )}
              </div>
              {/* Connector line */}
              {variant !== "numbered" && !isLast && (
                <div className="ml-3 w-px bg-lyra-border-subtle my-1" style={{ height: "12px" }} />
              )}
            </li>
          );
        })}
      </ol>
  );

  if (collapsible && hasHeading) {
    return (
      <ShowMore
        ref={ref}
        label={heading}
        meta={meta}
        emphasis
        open={expandedProp}
        defaultOpen={defaultExpanded ?? false}
        onOpenChange={(next) => {
          setInternalExpanded(next);
          onExpandedChange?.(next);
        }}
        preview={progressNode}
        className={className}
      >
        {stepsNode}
      </ShowMore>
    );
  }

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {plainHeading}
      {progressNode}
      {showSteps && stepsNode}
    </div>
  );
});

AIProcess.displayName = "AIProcess";

export { AIProcess };
