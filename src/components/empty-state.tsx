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
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, message = "No data available", description, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 py-8 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="text-lyra-fg-disabled" aria-hidden="true">
          {icon}
        </span>
      )}
      <p className="lyra-body-md text-lyra-fg-disabled">{message}</p>
      {description && <p className="lyra-body-sm text-lyra-fg-disabled">{description}</p>}
    </div>
  )
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
