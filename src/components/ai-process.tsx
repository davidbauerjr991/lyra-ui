import * as React from "react";
import { ChevronDown, Check, Clock, AlertCircle, Loader } from "lucide-react";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

/* ── Types ── */

export type AIProcessStepStatus = "pending" | "active" | "done" | "error";

export interface AIProcessStep {
  id: string;
  label: string;
  description?: string;
  status?: AIProcessStepStatus;
}

export interface AIProcessProps {
  /** Steps in the thought process */
  steps: AIProcessStep[];
  /** Header label (default: "Thought process") */
  label?: string;
  /** Default expanded state */
  defaultExpanded?: boolean;
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

function StepIcon({ status }: { status: AIProcessStepStatus }) {
  switch (status) {
    case "done":
      return <Icon icon={Check} size="xs" background="success" shape="circle" strokeWidth={2.5} decorative />;
    case "active":
      return <Icon icon={Loader} size="xs" background="active" shape="circle" strokeWidth={2} spin decorative />;
    case "error":
      return <Icon icon={AlertCircle} size="xs" background="critical" shape="circle" strokeWidth={2} decorative />;
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
    defaultExpanded = false,
    className,
  }, ref) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors focus-visible:outline-none group"
      >
        <span className="lyra-body-md-emphasis">{label}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>

      {/* Steps */}
      {expanded && (
        <div className="mt-3 flex flex-col">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const status = step.status ?? "pending";

            return (
              <div key={step.id} className="flex flex-col">
                {/* Icon + label row — center aligned */}
                <div className="flex items-center gap-3">
                  <StepIcon status={status} />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className={cn(
                      "lyra-body-sm",
                      status === "done"   ? "text-lyra-fg-secondary" :
                      status === "active" ? "text-lyra-fg-active-strong" :
                      status === "error"  ? "text-lyra-status-critical-strong" :
                      "text-lyra-fg-secondary"
                    )}>
                      {step.label}
                    </span>
                    {step.description && (
                      <span className="lyra-body-sm text-lyra-fg-disabled">{step.description}</span>
                    )}
                  </div>
                </div>
                {/* Connector line */}
                {!isLast && (
                  <div className="ml-3 w-px bg-lyra-border-subtle my-1" style={{ height: "12px" }} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

AIProcess.displayName = "AIProcess";

export { AIProcess };
