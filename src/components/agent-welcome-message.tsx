import * as React from "react";
import { Container } from "./container";
import { Separator } from "./separator";
import { Button } from "./button";
import { cn } from "../lib/utils";
import defaultAppIconSrc from "../assets/app-icon.svg";

/* ── AgentWelcomeMessage ──
   The "welcome back" card an agent sees once per session (e.g. on page
   load) — icon + greeting + optional last-login line, a highlighted info
   box for anything the app wants to surface (open items, teammates online,
   current skills, etc.), and a two-button footer for choosing how to start
   the shift. Extracted from `agent-next-gen-v1`'s hand-rolled welcome-modal
   markup (icon/title/lastLogin block + `bg-lyra-bg-surface-container-subtle`
   info box + `Separator` + two `Button`s inside a `Container variant="modal"`)
   since that whole composition is exactly the kind of reusable "modal card"
   `LoginCard` already models — same `Container variant="modal"` shell, same
   `appIcon`-defaults-to-the-shared-mark convention (`defaultAppIconSrc`,
   this repo's own copy of `assets/app-icon.svg`).

   Deliberately just the card, not the surrounding backdrop — same split as
   `LoginCard` (also backdrop-less). `agent-next-gen-v1` wraps this in
   `Modal` (passing `bare` here so `Modal`'s own surface is the only card
   chrome rendered, instead of nesting two) for the actual dialog behavior
   (open/close, focus trap, backdrop dismissal) — none of that belongs
   baked into a shared component that other consumers might want to open
   differently (e.g. inline, or via a different overlay/backdrop
   treatment). `agent-next-gen-v1`'s theme-aware `color-mix()` backdrop
   tint (dark-mode-specific) still overrides `Modal`'s `overlayClassName`
   the same way it overrode `Overlay`'s `className` before. */

export interface AgentWelcomeMessageProps {
  /** Icon shown beside the greeting. Default: the shared app-icon.svg mark. */
  icon?: React.ReactNode;
  /** Full greeting line, e.g. "Good morning, John Smith". */
  title: string;
  /** Rendered as "Last login: {lastLogin}". Omit to hide the line entirely. */
  lastLogin?: string;
  /** Content for the highlighted info box below the greeting (e.g. current skills, teammates online). Omit to hide the box. */
  children?: React.ReactNode;
  /** Primary (filled) button label. Default: "Go Available". */
  primaryLabel?: string;
  /** Called when the primary button is clicked. */
  onPrimaryClick?: () => void;
  /** Secondary (outline) button label. Default: "Start Unavailable". */
  secondaryLabel?: string;
  /** Called when the secondary button is clicked. */
  onSecondaryClick?: () => void;
  className?: string;
  /**
   * Skip this component's own `Container variant="modal"` chrome (bg,
   * border, shadow, rounding) and render just the inner content — for
   * composing inside something that already supplies that surface, e.g.
   * `Modal` (which owns the Radix Dialog wiring `agent-next-gen-v1`'s
   * welcome modal now uses instead of hand-composing `Overlay` +
   * `AgentWelcomeMessage` itself). Default: false — every other consumer
   * (or a bare Storybook preview) keeps getting the full card unchanged.
   */
  bare?: boolean;
}

const AgentWelcomeMessage = React.forwardRef<HTMLDivElement, AgentWelcomeMessageProps>(
  (
    {
      icon,
      title,
      lastLogin,
      children,
      primaryLabel = "Go Available",
      onPrimaryClick,
      secondaryLabel = "Start Unavailable",
      onSecondaryClick,
      className,
      bare = false,
    },
    ref
  ) => {
    const content = (
      <>
        <div className="flex items-start gap-3">
          {icon ?? <img src={defaultAppIconSrc} alt="" className="h-8 w-8 shrink-0" />}
          <div className="flex flex-col gap-1">
            <h2 className="lyra-heading-lg text-lyra-fg-default">{title}</h2>
            {lastLogin && (
              <p className="lyra-body-sm text-lyra-fg-secondary">Last login: {lastLogin}</p>
            )}
          </div>
        </div>

        {children && (
          <div className="mt-5 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-4">
            {children}
          </div>
        )}

        <Separator className="my-5" />

        <div className="flex gap-3">
          <Button className="flex-1" onClick={onPrimaryClick}>{primaryLabel}</Button>
          <Button variant="outline" className="flex-1" onClick={onSecondaryClick}>{secondaryLabel}</Button>
        </div>
      </>
    );

    if (bare) {
      return (
        <div ref={ref} className={cn("w-[420px] p-6", className)}>
          {content}
        </div>
      );
    }

    return (
      <Container ref={ref} variant="modal" className={cn("w-[420px] p-6", className)}>
        {content}
      </Container>
    );
  }
);
AgentWelcomeMessage.displayName = "AgentWelcomeMessage";

export { AgentWelcomeMessage };
