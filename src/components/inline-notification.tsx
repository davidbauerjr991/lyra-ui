import * as React from "react";
import { X } from "lucide-react";
import { Icon, type IconColor } from "./icon";
import { Tooltip } from "./tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { WarningIconSolid } from "./icons/warning-icon-solid";
import { ErrorIconSolid } from "./icons/error-icon-solid";
import { InfoIconSolid } from "./icons/info-icon-solid";
import { SuccessIconSolid } from "./icons/success-icon-solid";

/* ── Variants ── */

const notificationVariants = cva(
  "flex min-h-[48px] flex-col gap-3 rounded-lyra-md px-4 py-3",
  {
    variants: {
      variant: {
        warning: "bg-lyra-status-warning-subtle",
        error: "bg-lyra-status-critical-subtle",
        info: "bg-lyra-status-info-subtle",
        success: "bg-lyra-status-success-subtle",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

// Solid/filled glyphs (`*IconSolid`, `src/components/icons/*-icon-solid.tsx`)
// — `fill="currentColor"` on the shape instead of a hardcoded hex, so
// `Icon`'s `color` prop (below, `iconColorMap`) drives the color through the
// `text-lyra-status-*-strong` tokens, which shift automatically in dark
// mode. Same pattern already used by `Toast` — see that file's matching
// comment. Deliberately the `-solid` files, not the original 4 (`WarningIcon`
// etc.), which stay hardcoded-hex for their other ~13 call sites.
const iconMap = {
  warning: WarningIconSolid,
  error: ErrorIconSolid,
  info: InfoIconSolid,
  success: SuccessIconSolid,
} as const;

const iconColorMap: Record<NonNullable<InlineNotificationProps["variant"]>, IconColor> = {
  warning: "status-warning",
  error: "status-critical",
  info: "status-info",
  success: "status-success",
};

/* ── Component ── */

interface InlineNotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Optional footer content (e.g. a `Button`) rendered as its own row below
   *  the icon/text row, indented to align under the message text (past the
   *  `md` icon's 20px + the row's `gap-3` 12px = 32px / `pl-8`). Omitted by
   *  default so every pre-existing call site (plain text, no action) renders
   *  exactly as before — this only affects notifications that opt in. */
  action?: React.ReactNode;
}

const InlineNotification = React.forwardRef<
  HTMLDivElement,
  InlineNotificationProps
>(({ className, variant = "info", onDismiss, action, children, ...props }, ref) => {
  const StatusIcon = iconMap[variant!];

  return (
    <div
      ref={ref}
      className={cn(notificationVariants({ variant }), className)}
      role="alert"
      {...props}
    >
      <div className="flex items-start gap-3">
        <Icon
          icon={StatusIcon}
          size="md"
          color={iconColorMap[variant!]}
          decorative
          className="shrink-0 pt-0.5"
        />
        <p className="flex-1 lyra-body-md text-lyra-fg-default">{children}</p>
        {onDismiss && (
          <Tooltip content="Dismiss alert" placement="left" asLabel>
            <button
              onClick={onDismiss}
              className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action transition-colors hover:text-lyra-fg-default"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </Tooltip>
        )}
      </div>
      {action && <div className="pl-8">{action}</div>}
    </div>
  );
});
InlineNotification.displayName = "InlineNotification";

export { InlineNotification, notificationVariants };
export type { InlineNotificationProps };
