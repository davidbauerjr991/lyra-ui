import * as React from "react";
import { useState, useCallback, useRef } from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { Tooltip } from "./tooltip";
import { Icon, type IconColor } from "./icon";
import { WarningIconSolid } from "./icons/warning-icon-solid";
import { ErrorIconSolid } from "./icons/error-icon-solid";
import { InfoIconSolid } from "./icons/info-icon-solid";
import { SuccessIconSolid } from "./icons/success-icon-solid";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Variants ── */

const toastVariants = cva(
  "flex min-h-[48px] w-[400px] items-start gap-3 rounded-lyra-lg border bg-lyra-bg-surface-overlay p-4 shadow-lg",
  {
    variants: {
      variant: {
        warning:
          "border-lyra-status-warning-strong bg-lyra-status-warning-subtle",
        error:
          "border-lyra-status-critical-strong bg-lyra-status-critical-subtle",
        info: "border-lyra-status-info-strong bg-lyra-status-info-subtle",
        success:
          "border-lyra-status-success-strong bg-lyra-status-success-subtle",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const titleColorMap = {
  warning: "text-lyra-status-warning-strong",
  error: "text-lyra-status-critical-strong",
  info: "text-lyra-status-info-strong",
  success: "text-lyra-status-success-strong",
} as const;

// Solid/filled glyphs (`*IconSolid`, `src/components/icons/*-icon-solid.tsx`)
// — the same colored-circle/triangle-with-white-mark silhouette as the
// original `WarningIcon`/`ErrorIcon`/`InfoIcon`/`SuccessIcon` assets used
// elsewhere (`InlineNotification`, form-field error rows, etc.), but with
// `fill="currentColor"` on the shape instead of a hardcoded hex, so `Icon`'s
// `color` prop (below, `iconColorMap`) drives the color through the exact
// same `text-lyra-status-*-strong` token `titleColorMap` already uses for
// the title text — glyph and title are always in lockstep, in both themes.
// Deliberately new files, not edits to the original 4 — those are still
// used, unchanged, by ~13 other components where flipping to `currentColor`
// would need an audit of each call site's ambient text color to avoid a
// regression (see each `*-icon-solid.tsx` file's own doc comment).
const iconMap = {
  warning: WarningIconSolid,
  error: ErrorIconSolid,
  info: InfoIconSolid,
  success: SuccessIconSolid,
} as const;

const iconColorMap: Record<ToastVariant, IconColor> = {
  warning: "status-warning",
  error: "status-critical",
  info: "status-info",
  success: "status-success",
};

/* ── Animation duration ──
   Also the amount of time `Toast` waits after Radix reports a close
   (auto-dismiss / swipe / Escape / the Close button) before actually
   calling the consumer's real `onDismiss` — see `Toast`'s own
   `handleOpenChange` below. Keeps the exit CSS animation and "am I still
   in the DOM" bookkeeping in sync, the same contract the old hand-rolled
   version had (its own `setTimeout(..., ANIMATION_MS)` before calling
   `onDismiss`), just driven by Radix's `data-state` now instead of a
   hand-computed inline `transform`. */

const ANIMATION_MS = 200;

/* ── Toast Item ──
   Was a fully hand-rolled slide-in/out toast — `useState`+`useLayoutEffect`+
   `requestAnimationFrame` computing inline `transform`/`opacity` styles by
   hand, a manual `setTimeout` auto-dismiss with no pause-on-hover, and a
   plain `role="alert"` div. Rebuilt on Radix's real Toast primitive
   (`@radix-ui/react-toast` — `Root`/`Title`/`Description`/`Close`, plus
   `Provider`/`Viewport` folded into `ToastContainer` below), same "swap
   internals, keep the export API" playbook as `Select`/`Label`/
   `PasswordInput`. Real behavior gained, not just a refactor:
     - Auto-dismiss timers now pause while the toast is hovered or focused
       (Radix's own built-in behavior for `type="foreground"`, the
       default) — the old timer fired regardless of whether the user was
       still reading it.
     - Swipe-to-dismiss (drag right) works out of the box via the
       `data-swipe-*` attributes below — no hand-rolled gesture code.
     - Enter/exit animation now uses the same `tailwindcss-animate`
       `data-[state=...]:animate-in`/`animate-out` + `slide-in-from-*`/
       `slide-out-to-*` convention every other Radix-based component here
       already uses (`Popover`, `Select`, `Accordion`, etc.), instead of a
       one-off hand-rolled transform.
   `ToastProps`/`ToastVariant` — `variant`/`title`/`onDismiss`/`duration`/
   `children` all mean exactly what they did before; nothing here is a
   breaking change (no real consumer used `Toast` directly outside this
   library's own story anyway). */

type ToastVariant = "warning" | "error" | "info" | "success";

interface ToastProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadixToast.Root>, "duration" | "asChild"> {
  variant?: ToastVariant;
  /** Bold title text */
  title?: string;
  /** Called when the dismiss button is clicked (or the toast is swiped away / auto-dismisses) */
  onDismiss?: () => void;
  /** Auto-dismiss after this many ms (0 = no auto-dismiss) */
  duration?: number;
}

const Toast = React.forwardRef<React.ElementRef<typeof RadixToast.Root>, ToastProps>(
  (
    {
      className,
      variant = "info",
      title,
      onDismiss,
      duration = 0,
      children,
      ...props
    },
    ref
  ) => {
    const StatusIcon = iconMap[variant];

    // Local "am I still visually present" flag — separate from whether the
    // consumer has removed this toast from their own `toasts` list yet.
    // Flipping this to `false` (via Radix's own `onOpenChange`, fired by
    // its auto-dismiss timer / swipe gesture / Escape / the Close button
    // below) lets Radix play the `data-state="closed"` exit animation
    // while this component stays mounted; only once that's had time to
    // finish do we call the real `onDismiss`, so the consumer's list
    // update doesn't yank the DOM node out mid-animation.
    const [open, setOpen] = useState(true);

    const handleOpenChange = useCallback(
      (nextOpen: boolean) => {
        if (!nextOpen) {
          setOpen(false);
          setTimeout(() => onDismiss?.(), ANIMATION_MS);
        }
      },
      [onDismiss]
    );

    return (
      <RadixToast.Root
        ref={ref}
        open={open}
        onOpenChange={handleOpenChange}
        // Radix's own default duration is 5000ms if left unset; this
        // component's contract is "0 = no auto-dismiss", so translate that
        // into `Infinity` explicitly — the same `Infinity`-means-"never"
        // idiom other Radix Toast implementations (e.g. shadcn/ui's) use,
        // since `setTimeout` just clamps an `Infinity` delay to its
        // ~24.8-day max rather than erroring.
        duration={duration > 0 ? duration : Infinity}
        className={cn(
          toastVariants({ variant }),
          "pointer-events-auto",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-full",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full",
          "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
          "duration-200",
          className
        )}
        {...props}
      >
        <span className="flex-shrink-0 pt-0.5">
          <Icon icon={StatusIcon} size="md" color={iconColorMap[variant]} decorative />
        </span>
        <div className="flex-1 min-w-0">
          {title && (
            <RadixToast.Title
              className={cn(
                "lyra-heading-md",
                titleColorMap[variant]
              )}
            >
              {title}
            </RadixToast.Title>
          )}
          {children && (
            <RadixToast.Description className="lyra-body-md text-lyra-fg-default mt-0.5">
              {children}
            </RadixToast.Description>
          )}
        </div>
        {onDismiss && (
          <Tooltip content="Dismiss notification" placement="left" asLabel>
            <RadixToast.Close
              className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action transition-colors hover:text-lyra-fg-default"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </RadixToast.Close>
          </Tooltip>
        )}
      </RadixToast.Root>
    );
  }
);
Toast.displayName = "Toast";

/* ── Toast Container (bottom-right positioning) ──
   Folds Radix's `Toast.Provider` + `Toast.Viewport` together into one
   component so external usage doesn't change at all — every real usage
   today wraps one `ToastContainer` around a `.map()` of `Toast`s in one
   place (never split across disconnected parts of the tree the way
   `TabList`/`TabPanel` would be), so a self-contained Provider+Viewport
   here is a clean fit, not a compromise.

   `Viewport` renders a real `<ol>` (Radix's own semantics — a toast region
   is a list), so the old plain nested `<div>` "inner wrapper just for
   pointer-events" trick doesn't carry over as-is (a bare `<div>` isn't a
   valid direct child of `<ol>` — only `<li>`s are). The same "container
   ignores pointer events, each toast re-enables them" effect is preserved
   by moving `pointer-events-none` onto the `<ol>` itself here and
   `pointer-events-auto` onto each `<Toast>` (`<li>`) instead — see
   `Toast`'s own className above. Visually identical either way.

   No `overflow-hidden` here (a pre-existing class from the old hand-rolled
   version, carried over uncritically at first) — each `Toast` has its own
   `shadow-lg`, whose blur/spread extends past the toast's own border box.
   Since this container is sized to fit its children exactly (no extra
   padding), `overflow-hidden` clipped that shadow flush at the container's
   edge instead of letting it bleed outward as intended. There's no layout
   reason to clip here anyway — this is a `fixed`, viewport-relative overlay
   region, not a scrollable/bounded area. */

interface ToastContainerProps
  extends React.ComponentPropsWithoutRef<typeof RadixToast.Viewport> {}

const ToastContainer = React.forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  ToastContainerProps
>(({ className, children, ...props }, ref) => (
  <RadixToast.Provider swipeDirection="right">
    <RadixToast.Viewport
      ref={ref}
      className={cn(
        "fixed bottom-4 right-4 z-50 flex flex-col gap-3 list-none m-0 p-0 pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </RadixToast.Viewport>
  </RadixToast.Provider>
));
ToastContainer.displayName = "ToastContainer";

/* ── useToast hook ── */

interface ToastItem {
  id: string;
  variant: ToastVariant;
  title?: string;
  message?: string;
  duration?: number;
}

function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counterRef = useRef(0);

  const addToast = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id = `toast-${++counterRef.current}`;
      setToasts((prev) => [...prev, { ...toast, id }]);
      return id;
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, dismissToast };
}

export { Toast, ToastContainer, useToast, toastVariants };
export type { ToastProps, ToastVariant, ToastItem };
