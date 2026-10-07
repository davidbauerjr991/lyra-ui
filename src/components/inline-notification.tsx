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

/* Screen-reader role per tone: warning/error interrupt (`alert`, assertive);
   info/success wait their turn (`status`, polite) — so a neutral notice like
   "You are viewing a closed interaction" no longer cuts off what a screen
   reader is saying. A `role` passed by the consumer still wins. */
const roleMap = {
  warning: "alert",
  error: "alert",
  info: "status",
  success: "status",
} as const;

const variantName = { warning: "warning", error: "error", info: "information", success: "success" } as const;

/* Elements keyboard focus can land on, in document order. */
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
  /** Opt-in: where `action` goes. "below" (default, today's behavior) is its
   *  own row under the message; "inline" puts it at the end of the message
   *  row — for a short text link like "View details". */
  actionPlacement?: "below" | "inline";
  /** Opt-in: a bold first line above the message (Sol's "title"). Named
   *  `heading` because `title` is already the standard HTML tooltip attribute
   *  on this element, and changing what it does could break a caller. */
  heading?: React.ReactNode;
  /** Accessible name of the dismiss button. Default "Dismiss {type} notification". */
  dismissLabel?: string;
}

const InlineNotification = React.forwardRef<
  HTMLDivElement,
  InlineNotificationProps
>(({ className, variant = "info", onDismiss, action, actionPlacement = "below", heading, dismissLabel, children, ...props }, ref) => {
  const StatusIcon = iconMap[variant!];
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      rootRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  /* After a dismiss from the keyboard, the button (and usually the whole
     notification) disappears, which would drop focus to the page body. Move
     it to the next focusable element after the notification instead (or the
     one before it, at the end of the page). Only when the dismiss button had
     focus and focus would otherwise be lost. */
  const handleDismiss = () => {
    const root = rootRef.current;
    const hadFocus = !!root && root.contains(document.activeElement);
    let next: HTMLElement | undefined;
    let prev: HTMLElement | undefined;
    if (hadFocus && root) {
      const all = Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE));
      next = all.find((el) => !root.contains(el) && (root.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING));
      prev = [...all].reverse().find((el) => !root.contains(el) && (root.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING));
    }
    onDismiss?.();
    if (!hadFocus) return;
    requestAnimationFrame(() => {
      const active = document.activeElement;
      if (active && active !== document.body && document.contains(active)) return; // focus is fine
      const target = [next, prev].find((el) => el && document.contains(el));
      target?.focus();
    });
  };

  const message = heading ? (
    <div className="flex-1 min-w-0">
      <p className="lyra-body-md-emphasis text-lyra-fg-default">{heading}</p>
      <p className="lyra-body-md text-lyra-fg-default">{children}</p>
    </div>
  ) : (
    <p className="flex-1 lyra-body-md text-lyra-fg-default">{children}</p>
  );

  return (
    <div
      ref={setRefs}
      className={cn(notificationVariants({ variant }), className)}
      role={roleMap[variant!]}
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
        {message}
        {action && actionPlacement === "inline" && <div className="shrink-0 flex items-center">{action}</div>}
        {onDismiss && (
          <Tooltip content="Dismiss alert" placement="left" asLabel>
            {/* 24×24 target (WCAG 2.5.8) with -2px margins, so the row's
                layout and the 16px icon are exactly where the old 20×20
                button put them. */}
            <button
              type="button"
              onClick={handleDismiss}
              className="flex-shrink-0 flex h-6 w-6 -m-0.5 items-center justify-center rounded-lyra-xs text-lyra-fg-action transition-colors hover:text-lyra-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
              aria-label={dismissLabel ?? `Dismiss ${variantName[variant!]} notification`}
            >
              <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Tooltip>
        )}
      </div>
      {action && actionPlacement !== "inline" && <div className="pl-8">{action}</div>}
    </div>
  );
});
InlineNotification.displayName = "InlineNotification";

export { InlineNotification, notificationVariants };
export type { InlineNotificationProps };
