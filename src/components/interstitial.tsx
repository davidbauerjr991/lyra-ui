import * as React from "react";
import { ChevronRight, MessageSquareText } from "lucide-react";
import { cn } from "../lib/utils";
import { Spinner } from "./spinner";

export interface InterstitialProps {
  /** Row title (e.g. the Copilot question or action taken). */
  title: string;
  /** Time the action was logged. */
  timestamp: string;
  /** Who performed it (John Smith, Checkout AI Agent…). */
  by: string;
  /** While true, shows "AI agent is performing this now…" with a spinner instead of the row. */
  pending?: boolean;
  /** Pending label. */
  pendingLabel?: string;
  /** True while this row's panel is open in the side panel: blue selected look. */
  active?: boolean;
  /** Fires when the row is clicked (opens/closes its side panel). */
  onOpen?: () => void;
  className?: string;
}

/** A logged agent action in the chat. Spinner while pending, then a clickable row that turns blue while its panel is open. */
export function Interstitial({
  title, timestamp, by, pending, pendingLabel = "AI agent is performing this now…", active, onOpen, className,
}: InterstitialProps) {
  if (pending) {
    return (
      <div className={cn("flex items-center gap-2 px-1 lyra-body-sm text-lyra-fg-secondary", className)}>
        <Spinner size="sm" />
        {pendingLabel}
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-200 items-center gap-3 rounded-lyra-md border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lyra-border-focus",
        active
          ? "border-lyra-border-active bg-lyra-status-info-subtle"
          : "border-lyra-border-subtle bg-lyra-bg-surface-base hover:border-lyra-state-border-hover-neutral",
        className
      )}
    >
      <MessageSquareText className="h-4 w-4 shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate lyra-body-md-emphasis text-lyra-fg-default">{title}</span>
      <span className="shrink-0 lyra-body-sm text-lyra-fg-secondary">{timestamp}</span>
      <span className="shrink-0 lyra-body-sm text-lyra-fg-secondary">{by}</span>
      <ChevronRight className="h-4 w-4 shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
