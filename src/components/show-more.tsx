import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A "show more" disclosure: a text trigger with a chevron that opens and closes a block of content.
 * Built on `@radix-ui/react-collapsible`, which owns the open state, `aria-expanded` / `aria-controls`,
 * Enter / Space and the measured height used for the open and close animation.
 *
 * Used by `AIProcess` ("Thought process") and `Citation` ("2 citations"); use it anywhere a short line of
 * text should fold a longer block away.
 */

export type ShowMoreTextSize = "sm" | "md" | "lg";
export type ShowMoreChevronPosition = "start" | "end";
/** Which way the chevron points while closed. Open, "down" turns up and every other direction turns down. */
export type ShowMoreChevronDirection = "down" | "up" | "right" | "left";

// One icon (a down chevron) turned to each direction, closed and open; static class names so Tailwind keeps them.
const CHEVRON_ROTATION: Record<ShowMoreChevronDirection, { closed: string; open: string }> = {
  down: { closed: "rotate-0", open: "rotate-180" },
  up: { closed: "rotate-180", open: "rotate-0" },
  right: { closed: "-rotate-90", open: "rotate-0" },
  left: { closed: "rotate-90", open: "rotate-0" },
};
const ICON_CLASSES: Record<ShowMoreTextSize, string> = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" };

const TEXT_CLASSES: Record<ShowMoreTextSize, { regular: string; emphasis: string }> = {
  sm: { regular: "lyra-body-sm", emphasis: "lyra-body-sm-emphasis" },
  md: { regular: "lyra-body-md", emphasis: "lyra-body-md-emphasis" },
  lg: { regular: "lyra-body-lg", emphasis: "lyra-body-lg-emphasis" },
};



export interface ShowMoreChevronProps extends Omit<React.SVGProps<SVGSVGElement>, "ref"> {
  /** Whether what it controls is open. */
  open: boolean;
  /** Which way it points while closed. Default "down". */
  direction?: ShowMoreChevronDirection;
  /** Size, matching the trigger text sizes: sm 14px, md 16px, lg 20px. Default "md". */
  size?: ShowMoreTextSize;
  /** Turn with a short animation. Turn it off where the chevron used to swap instantly. Default true. */
  animate?: boolean;
}

/**
 * The chevron every expand / collapse control shares: `ShowMore`, the `Table` group rows and the
 * `InteractionNavItem` channels toggle. It is one down chevron turned to `direction` while closed and
 * turned the other way when open, so all of them point and turn alike.
 */
const ShowMoreChevron = ({ open, direction = "down", size = "md", animate = true, className, ...props }: ShowMoreChevronProps) => (
  <ChevronDown
    className={cn(
      ICON_CLASSES[size],
      "shrink-0",
      animate ? "transition-transform duration-200 motion-reduce:transition-none" : "transition-none",
      CHEVRON_ROTATION[direction][open ? "open" : "closed"],
      className
    )}
    strokeWidth={1.5}
    aria-hidden="true"
    {...props}
  />
);
ShowMoreChevron.displayName = "ShowMoreChevron";

export interface ShowMoreProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** The trigger text ("Show more", "Thought process", "2 citations"). */
  label: React.ReactNode;
  /** The trigger text while open ("Show less"). Omit to keep `label`. */
  openLabel?: React.ReactNode;
  /** The content that opens and closes. Omit when something else reacts to `onOpenChange` (a clamped paragraph). */
  children?: React.ReactNode;
  /** Trigger text size. Default "md". */
  textSize?: ShowMoreTextSize;
  /** Bolder trigger text. Default false. */
  emphasis?: boolean;
  /** Which side of the label the chevron is on. Default "end". */
  chevronPosition?: ShowMoreChevronPosition;
  /**
   * Which way the chevron points while closed: "down" (turns up when open), or "up" / "right" / "left"
   * (turn down when open). Default: "right" when the chevron is at the start, "down" when at the end.
   */
  chevronDirection?: ShowMoreChevronDirection;
  /** Text pushed to the far end of the trigger row ("12 s"). Only with the chevron at the end. */
  meta?: React.ReactNode;
  /** Always visible, between the trigger and the content (a progress bar, a one-line preview). */
  preview?: React.ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Initial open state when uncontrolled. Default false. */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Extra classes for the content block. */
  contentClassName?: string;
}

const ShowMore = React.forwardRef<HTMLDivElement, ShowMoreProps>(
  (
    {
      label,
      openLabel,
      children,
      textSize = "md",
      emphasis = false,
      chevronPosition = "end",
      chevronDirection,
      meta,
      preview,
      open,
      defaultOpen = false,
      onOpenChange,
      contentClassName,
      className,
      ...props
    },
    ref
  ) => {
    const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
    const isOpen = open ?? innerOpen;
    const direction = chevronDirection ?? (chevronPosition === "start" ? "right" : "down");
    const chevron = <ShowMoreChevron open={isOpen} direction={direction} size={textSize} />;
    return (
      <CollapsiblePrimitive.Root
        ref={ref}
        open={isOpen}
        onOpenChange={(next) => {
          setInnerOpen(next);
          onOpenChange?.(next);
        }}
        className={cn("w-full", className)}
        {...props}
      >
        <CollapsiblePrimitive.Trigger
          className={cn(
            "group/showmore flex w-full items-center gap-1.5 rounded-lyra-xs text-left text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
            TEXT_CLASSES[textSize][emphasis ? "emphasis" : "regular"]
          )}
        >
          {chevronPosition === "start" && chevron}
          {openLabel === undefined ? (
            <span>{label}</span>
          ) : (
            <>
              <span className="group-data-[state=open]/showmore:hidden">{label}</span>
              <span className="hidden group-data-[state=open]/showmore:inline">{openLabel}</span>
            </>
          )}
          {chevronPosition === "end" && chevron}
          {meta && chevronPosition === "end" && <span className="ml-auto lyra-body-sm text-lyra-fg-secondary">{meta}</span>}
        </CollapsiblePrimitive.Trigger>
        {preview}
        {children !== undefined && (
          <CollapsiblePrimitive.Content
            className={cn(
              "overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up motion-reduce:animate-none",
              contentClassName
            )}
          >
            {children}
          </CollapsiblePrimitive.Content>
        )}
      </CollapsiblePrimitive.Root>
    );
  }
);
ShowMore.displayName = "ShowMore";

export { ShowMore, ShowMoreChevron };
