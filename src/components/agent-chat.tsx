import * as React from "react";
import { cn } from "../lib/utils";

/* ── AgentChat ──
   The "Agent Chat" app panel body from the Agent Next Gen AppHeader's
   top-right app area (ported from agent-next-gen-v2, where this panel —
   the renamed "Conversations" panel, for agent-to-agent chat — renders the
   shared blank placeholder: a centered "Nothing here yet." line, no icon,
   no invented chat UI). Faithful to that reference: the panel has no real
   content yet, so this component IS the placeholder — the same empty-state
   treatment `DraggablePanel` defaults to when given no children — kept as
   its own named component so the template/app code reads as "the Agent
   Chat panel" rather than an anonymous div, and so real chat content has
   an obvious home when it lands. */

export interface AgentChatProps extends React.HTMLAttributes<HTMLDivElement> {}

const AgentChat = React.forwardRef<HTMLDivElement, AgentChatProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("overflow-y-auto flex-1 flex items-center justify-center p-4", className)}
        {...props}
      >
        <p className="lyra-body-md text-lyra-fg-disabled text-center">Nothing here yet.</p>
      </div>
    );
  }
);
AgentChat.displayName = "AgentChat";

export { AgentChat };
