import * as React from "react";
import { cn } from "../lib/utils";

/* ── EmptyState ──
   Generic "nothing to show here" placeholder — the same shape several
   components already hand-roll inline (`DraggablePanel`'s default body,
   `AiPanel`'s "No conversation history." history view), extracted so any
   card/widget/table body that needs a plain centered "no data" message
   composes this instead of re-deriving the same `text-lyra-fg-disabled`
   centered text block a third, fourth, fifth time. Deliberately minimal:
   no built-in illustration/graphic — just an optional icon slot, a message,
   and an optional secondary line — since no consumer has needed more than
   that yet. */

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional icon/illustration rendered above the message */
  icon?: React.ReactNode;
  /** Main message (default: "No data available") */
  message?: React.ReactNode;
  /** Optional secondary line rendered under the message, smaller/muted */
  description?: React.ReactNode;
  /**
   * Text color for the icon/message/description — `"disabled"` (default,
   * `text-lyra-fg-disabled`, unchanged) is the original/most muted tone,
   * meant for a bounded "nothing here yet" box (a card body, a history
   * panel). `"secondary"` (`text-lyra-fg-secondary`, one step brighter) is
   * for a placeholder that needs to read clearly against a busier
   * surrounding UI — the same token the app's own hand-rolled "Nothing to
   * Display" (Contact History) placeholder already uses, per an explicit
   * request/screenshot comparing the two ("it should match the Nothing to
   * Display in My Contact History"). Off by default so every existing
   * consumer (`DraggablePanel`'s default body, `AiPanel`'s history view,
   * the `EmptyState` stories) is completely unaffected.
   */
  tone?: "disabled" | "secondary";
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, message = "No data available", description, tone = "disabled", className, ...props }, ref) => {
    const toneClassName = tone === "secondary" ? "text-lyra-fg-secondary" : "text-lyra-fg-disabled";
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 py-8 text-center",
          className
        )}
        {...props}
      >
        {icon && (
          <span className={toneClassName} aria-hidden="true">
            {icon}
          </span>
        )}
        <p className={cn("lyra-body-md", toneClassName)}>{message}</p>
        {description && <p className={cn("lyra-body-sm", toneClassName)}>{description}</p>}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
