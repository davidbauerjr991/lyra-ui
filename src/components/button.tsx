import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";
import { Badge } from "./badge";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lyra-sm lyra-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default:
          "bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary",
        destructive:
          "bg-lyra-bg-destructive text-lyra-fg-on-primary hover:bg-lyra-state-hover-destructive active:bg-lyra-state-pressed-destructive",
        warning:
          "bg-lyra-status-warning-strong text-lyra-fg-on-primary hover:bg-lyra-status-warning-strong/90 active:bg-lyra-status-warning-strong/80",
        success:
          "bg-lyra-status-success-strong text-lyra-fg-on-primary hover:bg-lyra-status-success-strong/90 active:bg-lyra-status-success-strong/80",
        outline:
          "border border-lyra-border-soft bg-lyra-bg-control text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        ghost:
          "text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        icon: "text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed hover:text-lyra-fg-default rounded-lyra-sm",
      },
      size: {
        sm: "h-6 px-2.5",
        default: "h-8 px-3",
        md: "h-8 px-3",
        lg: "h-9 px-4",
        xl: "h-10 px-5",
        "icon-sm": "h-6 w-6",
        icon: "h-8 w-8",
        "icon-md": "h-8 w-8",
        "icon-lg": "h-9 w-9",
        "icon-xl": "h-10 w-10",
        /* AppHeader's standard icon-button size (44px) — the canonical
           shape for actions like Notifications/Help/Dashboards/Ask AI
           sitting in an `AppHeader`'s top-right corner. Kept as its own
           tier rather than redefining `icon-xl` (40px, used elsewhere,
           e.g. Button.stories.tsx's own size scale) out from under any
           existing consumer. See `ActionIconButton` (actions.tsx), which
           composes this size internally as its own `xl` — the AppHeader
           row (Help/Dashboards/Notifications/Ask AI/etc.) should always go
           through `ActionIconButton`/`Button` rather than a hand-rolled
           `<button>` copy, so this one size stays the single source of
           truth for that shape. */
        "icon-2xl": "h-11 w-11",
      },
      /** Lets the label wrap across multiple lines and grow the button's
       *  height to fit, instead of the default single-line behavior every
       *  button otherwise has (`whitespace-nowrap` in the base classes
       *  above) — for a label whose content length isn't fixed/
       *  predictable (e.g. echoing back arbitrary typed text, a long
       *  customer name, etc.), where `nowrap` would silently overflow its
       *  container on one line instead of wrapping. `h-auto` here
       *  overrides `size`'s own fixed height (e.g. `lg`'s `h-9`) — safe
       *  regardless of declaration order, since `cn()`'s `tailwind-merge`
       *  resolves conflicting height utilities by keeping the last one
       *  in the final class string, not whichever was declared first.
       *  `text-center` matters once wrapped: the button's own
       *  `justify-center` only centers the text block as a whole flex
       *  item, not each individual wrapped line within it. Default
       *  `false` — every existing button (fixed single-line height, no
       *  wrap) is unaffected; opt in per-button with `wrap`. First added
       *  for the outbound picker's "Continue with {typed search}" button
       *  (create-new.tsx), where the wrapped text is an arbitrary,
       *  unbounded-length user-typed value. */
      wrap: {
        true: "h-auto whitespace-normal break-words text-center py-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
      wrap: false,
    },
  }
);

const ICON_SIZES = ["icon", "icon-sm", "icon-md", "icon-lg", "icon-xl", "icon-2xl"] as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Count badge overlaid on the button's top-right corner (hidden when 0 or
   * undefined) — only meaningful on an icon-shaped button (`variant="icon"`
   * or an `icon-*` size). Renders via the shared `Badge` component
   * (`shape="circle"`, `variant="critical"`, `size="sm"`), same positioning
   * used everywhere else a count sits on a corner (`notifications-bell.tsx`,
   * `ActionIconButton`).
   */
  badge?: number;
  /**
   * Tooltip for an icon-only button (`variant="icon"` or an `icon-*` size).
   * `true` uses the button's `aria-label` (or `title`) as the text; a string
   * uses that text instead. Default: off — never automatic, because many
   * icon buttons are already wrapped in their own `Tooltip` and an automatic
   * one would show two. (`title`, which also sets the accessible name, keeps
   * its existing built-in tooltip.) Ignored on buttons that aren't icon-only.
   */
  tooltip?: boolean | string;
  /**
   * Loading state: shows a spinner over the label (the button keeps its
   * width), sets `aria-busy`, and ignores clicks. It stays focusable
   * (`aria-disabled`, not `disabled`) so keyboard focus isn't lost when a
   * submit starts. Default: false. With `asChild` only `aria-busy` and the
   * click guard apply (no spinner can be injected into the child).
   */
  loading?: boolean;
  /**
   * Contrast of a disabled `ghost` / icon button. `"default"` is today's look
   * (the whole button at 40% opacity, which leaves the label hard to see);
   * `"high"` keeps full opacity and uses the disabled-text token instead
   * (about 4.7:1 on white). Default: `"default"` so existing screens don't
   * change; no effect on other variants.
   */
  disabledContrast?: "default" | "high";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      wrap,
      asChild = false,
      title,
      badge,
      children,
      tooltip,
      loading = false,
      disabledContrast = "default",
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isIconVariant = variant === "icon" || ICON_SIZES.includes(size as (typeof ICON_SIZES)[number]);
    const isGhostLike = variant === "ghost" || variant === "icon";

    const baseContent = isIconVariant && badge != null && badge > 0 ? (
      <span className="relative inline-flex">
        <span aria-hidden="true">{children}</span>
        <Badge
          shape="circle"
          variant="critical"
          size="sm"
          count={badge}
          className="absolute -top-2 -right-2"
        />
      </span>
    ) : children;

    // Loading: the label stays in the layout (transparent) so the button keeps
    // its width, with a spinner centered over it. The spinner sits in an
    // aria-hidden wrapper; `aria-busy` carries the state for screen readers.
    const showSpinner = loading && !asChild;
    const spinnerColor = variant === "outline" || variant === "ghost" || variant === "icon" ? "primary" : "inverse";
    const content = showSpinner ? (
      <>
        {/* opacity-0, not `invisible`: the label stays in the accessibility tree, so the button keeps its name while loading */}
        <span className="opacity-0 inline-flex items-center justify-center gap-2">{baseContent}</span>
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <Spinner variant="circle" size="sm" color={spinnerColor} />
        </span>
      </>
    ) : baseContent;

    const tooltipText =
      typeof tooltip === "string"
        ? tooltip
        : tooltip === true
        ? (props["aria-label"] as string | undefined) ?? title
        : title;

    const button = (
      <Comp
        className={cn(
          buttonVariants({ variant, size, wrap, className }),
          showSpinner && "relative",
          loading && "cursor-progress",
          // Higher-contrast disabled ghost/icon buttons (opt-in)
          disabledContrast === "high" && isGhostLike && "disabled:opacity-100 disabled:text-lyra-fg-disabled"
        )}
        ref={ref}
        title={isIconVariant ? undefined : title}
        aria-label={isIconVariant ? title : undefined}
        {...props}
        {...(loading
          ? {
              "aria-busy": true,
              "aria-disabled": true,
              onClick: (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault(),
            }
          : { onClick })}
      >
        {content}
      </Comp>
    );

    if (isIconVariant && tooltipText) {
      return (
        <Tooltip content={tooltipText} placement="bottom" asLabel={!!title || tooltip === true}>
          {button}
        </Tooltip>
      );
    }

    return button;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
