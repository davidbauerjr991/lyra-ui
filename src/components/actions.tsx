import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";
import { Button } from "./button";

/* ── Action Icon Button (icon with optional badge) ──
   Composes the shared `Button` component (`variant="icon"`) rather than
   hand-rolling its own `<button>` + cva — this used to be a fully separate
   implementation with its own radius/size scale, which is exactly how
   AppHeader's icon buttons ended up drifting into two different shapes
   across the design system (this component's old 44px/`rounded-lyra-sm`
   vs. `notifications-bell.tsx`/`AgentNextGenPage.tsx`'s hand-rolled
   40px/`rounded-lyra-lg` copies). `Button` is now the single source of
   truth for every icon-button shape (including the badge overlay, which
   `Button` itself renders — see button.tsx); this component just maps its
   own legacy size names onto `Button`'s icon sizes so existing callers
   (`Header.tsx` in every consuming app, `OutboundCampaignsPage.tsx`, every
   Storybook usage) don't need to change. */

const ACTION_ICON_BUTTON_SIZE_MAP = {
  sm: "icon-md",
  default: "icon-lg",
  lg: "icon-xl",
  /* AppHeader standard — 44px. See button.tsx's own `icon-2xl` doc comment
     for why this is its own size tier rather than a redefinition of
     `icon-xl` (40px, used elsewhere). */
  xl: "icon-2xl",
} as const;

interface ActionIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Badge count — hidden when 0 or undefined */
  badge?: number;
  /** Size: sm=32 (Button `icon-md`), default=36 (`icon-lg`), lg=40 (`icon-xl`), xl=44 (`icon-2xl`, the AppHeader standard) */
  size?: "sm" | "default" | "lg" | "xl";
}

const ActionIconButton = React.forwardRef<
  HTMLButtonElement,
  ActionIconButtonProps
>(({ className, badge, size = "default", title, children, ...props }, ref) => (
  <Button
    ref={ref}
    variant="icon"
    size={ACTION_ICON_BUTTON_SIZE_MAP[size]}
    title={title}
    badge={badge}
    className={className}
    {...props}
  >
    {children}
  </Button>
));
ActionIconButton.displayName = "ActionIconButton";

/* ── Action Avatar Button (avatar circle + chevron) ── */

interface ActionAvatarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** User initials (1-2 characters) */
  initials: string;
  /** Background color for the avatar circle */
  avatarColor?: string;
}

const ActionAvatarButton = React.forwardRef<
  HTMLButtonElement,
  ActionAvatarButtonProps
>(({ className, initials, avatarColor = "#5d6a79", ...props }, ref) => (
  <Tooltip content="Profile" placement="bottom" asLabel={false}>
    <button
      ref={ref}
      aria-label="User menu"
      aria-haspopup="true"
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-lyra-sm pl-2 pr-1.5 transition-colors",
        "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full lyra-body-md-emphasis text-white"
        style={{ backgroundColor: avatarColor }}
        aria-hidden="true"
      >
        {initials}
      </div>
      <ChevronDown
        className="h-3.5 w-3.5 text-lyra-fg-secondary"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </button>
  </Tooltip>
));
ActionAvatarButton.displayName = "ActionAvatarButton";

/* ── Re-export old names for backward compat ── */
const ShellIconButton = ActionIconButton;
const ShellAvatarButton = ActionAvatarButton;

export {
  ActionIconButton,
  ActionAvatarButton,
  ShellIconButton,
  ShellAvatarButton,
};
export type { ActionIconButtonProps, ActionAvatarButtonProps };
