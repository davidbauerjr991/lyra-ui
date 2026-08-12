import * as React from "react";
import { Toast } from "./toast";
import { Button } from "./button";

/**
 * Dedicated "Agent Leg Disconnected" toast — pairs with `AgentProfile`'s
 * own `onAgentLegStatusChange`/`connectAgentLegSignal` props (agent-
 * profile.tsx). Every real consumer of that pair (`AgentNextGenPage.tsx`,
 * `AgentWorkspace2WithDeskPage.tsx`, ...) needs the exact same toast —
 * same warning styling, same body copy, same "Connect" action — so it's
 * built once here instead of each app hand-rolling its own copy of the
 * `<Toast>` markup and button. See this file's own `AgentLegDisconnectedToastProps`
 * doc comments below for the wiring contract.
 *
 * Per explicit request, this toast is meant to stay open until the agent
 * leg actually connects or the agent dismisses it directly — never on a
 * timer. That's `Toast`'s own `duration={0}` below (its "no auto-dismiss"
 * contract, see that prop's own doc comment) — deliberately NOT exposed as
 * a prop here, since a version of this specific toast that DOES auto-
 * dismiss would defeat the point of it existing as a separate, dedicated
 * component in the first place.
 *
 * A typical consumer:
 *   - Holds its own `agentLegDisconnected` boolean (flipped to `true` by
 *     `onAgentLegStatusChange("disconnected")`, back to `false` by either
 *     `onAgentLegStatusChange("connected")` or this component's own
 *     `onDismiss`), and only renders `<AgentLegDisconnectedToast>` while
 *     that's `true` — same "presence in the list controls mounting" idiom
 *     `useToast`'s own `toasts` array already uses for every other toast.
 *   - Holds its own `connectAgentLegSignal` counter passed straight through
 *     to `AgentProfile`, and bumps it from this component's `onConnect`.
 */
export interface AgentLegDisconnectedToastProps {
  /** Fired when the agent clicks "Connect" — the consumer is expected to
   *  bump its own `connectAgentLegSignal` counter here (see that prop's own
   *  doc comment, agent-profile.tsx) so `AgentProfile` actually starts
   *  connecting. This component has no direct tie to `AgentProfile` itself
   *  — it only reports the click. Clicking "Connect" also closes this toast
   *  (see `onDismiss` below — it's called right after `onConnect`), so the
   *  consumer doesn't need to separately hide it on top of connecting. */
  onConnect: () => void;
  /** Fired once this toast should be removed from the consumer's own
   *  tracked state — by `Toast`'s own "×"/swipe/Escape paths, AND by
   *  clicking "Connect" (see `onConnect`'s own doc comment for why both
   *  funnel through here). Same contract as `Toast`'s own `onDismiss`. */
  onDismiss: () => void;
  /** Forwarded to `Toast`'s own prop of the same name — lets a "Dismiss
   *  All" action (see `useToast`'s `dismissAllToasts`) close this toast in
   *  sync with the rest of a consumer's own toast stack, the same way it
   *  already coordinates every plain `useToast`-tracked toast. Omit
   *  entirely for a consumer with no such stack-wide action. */
  forceClosed?: boolean;
}

export function AgentLegDisconnectedToast({
  onConnect,
  onDismiss,
  forceClosed,
}: AgentLegDisconnectedToastProps) {
  return (
    <Toast
      variant="warning"
      title="Agent Leg Disconnected"
      duration={0}
      forceClosed={forceClosed}
      onDismiss={onDismiss}
    >
      Your agent leg has been disconnected.
      <div className="mt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            onConnect();
            onDismiss();
          }}
        >
          Connect
        </Button>
      </div>
    </Toast>
  );
}
