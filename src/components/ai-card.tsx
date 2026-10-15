import * as React from "react";
import { Accordion, RADIUS_CLASSES, type RadiusSize } from "./accordion";
import { ContainerFooter, type ContainerFooterAlign } from "./container-footer";
import { ContainerHeader } from "./container-header";
import { Button } from "./button";
import { ExternalLink, X } from "lucide-react";
import { cn } from "../lib/utils";

/* ── AICard ──
   A card for AI-generated content (an autosummary, a journey or self-service recap, a sentiment
   read): a tinted header with an optional icon and title, over a white body. The header tint is the
   card's `color`. It can be a collapsible accordion (default) or a plain always-open card.

   This is the card treatment the "Autosummary" container in `CustomerContextOverview` uses
   (purple header, `lyra-purple-soft-header-fix`; blue for AI-led cases), made reusable for any AI
   card. It is built from lyra-ui parts: the collapsible card is an `Accordion` (variant "contained",
   one item, tinted through `headerClassName`), the plain card's header is a `ContainerHeader`, and
   the footer is a `ContainerFooter`. Colors follow the same pairs used across the system: a subtle tinted header with the
   matching strong tone for the icon and chevron, and the title always in the default foreground. */

export type AICardColor = "purple" | "blue" | "yellow" | "green" | "red" | "neutral";

/* Literal class strings so Tailwind's content scanner can find each one. */
const COLOR_CLASSES: Record<AICardColor, { header: string; accent: string }> = {
  purple: { header: "lyra-purple-soft-header-fix", accent: "text-lyra-accent-purple-strong" },
  blue: { header: "bg-lyra-status-info-subtle", accent: "text-lyra-status-info-strong" },
  yellow: { header: "bg-lyra-status-warning-subtle", accent: "text-lyra-status-warning-strong" },
  green: { header: "bg-lyra-status-success-subtle", accent: "text-lyra-status-success-strong" },
  red: { header: "bg-lyra-status-critical-subtle", accent: "text-lyra-status-critical-strong" },
  neutral: { header: "bg-lyra-bg-surface-shell", accent: "text-lyra-fg-default" },
};

export interface AICardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "color" | "defaultValue" | "dir"> {
  /** Header title, e.g. "Journey Summary". */
  title: React.ReactNode;
  /** Corner radius of the card: none, xs 4, sm 6, md 8, lg 12, xl 16px. Default "md". */
  radius?: RadiusSize;
  /**
   * Content (normally the decision `Button`s) that stays visible under the header even when the card is
   * collapsed, instead of hiding with the body. Unlike `footer`, which is part of the collapsing body.
   */
  persistentFooter?: React.ReactNode;
  /** Optional count shown next to the title (e.g. number of artifacts). Omit for none; 0 is shown. */
  count?: number;
  /** Optional icon left of the title (a 16px Lucide icon works well). Takes the card color's strong tone. */
  icon?: React.ReactNode;
  /** Header tint. Default "purple". */
  color?: AICardColor;
  /**
   * Collapsible: the header becomes a button with a chevron that shows and hides the body.
   * Off renders a plain card with the body always shown. Default true.
   */
  accordion?: boolean;
  /** Initial open state when `accordion` is on (uncontrolled). Default true. */
  defaultOpen?: boolean;
  /** Controlled open state when `accordion` is on. */
  open?: boolean;
  /** Called when the accordion opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /**
   * Content at the right end of the header, before the chevron: a count ("2/6"), an external-link or
   * close icon, etc. Keep it non-interactive when `accordion` is on (it sits inside the header button).
   */
  headerEnd?: React.ReactNode;
  /**
   * Shows a dismiss "X" at the right end of the header and calls this when it is clicked (the card
   * does not hide itself; the caller removes it). Omit for no X. Header buttons are real buttons;
   * in accordion mode they are laid over the header, outside the trigger, so buttons never nest.
   */
  onDismiss?: () => void;
  /**
   * Shows an "open in new window" icon button in the header, before the dismiss X, and calls this
   * when it is clicked. Omit for no button. Placed like the dismiss X (see `onDismiss`).
   */
  onOpenInNewWindow?: () => void;
  /**
   * Header height: "compact" (default) is 40px, "comfortable" is 48px. Passed to the `Accordion` (accordion
   * mode) or the `ContainerHeader` (plain mode) so both heights match.
   */
  density?: "comfortable" | "compact";
  /** Footer actions (normally `Button`s), rendered with `ContainerFooter` under the body. Omit for no footer. */
  footer?: React.ReactNode;
  /** Where the footer buttons sit: "left", "right" or "full". Default "left". */
  footerAlign?: ContainerFooterAlign;
  /** Card body. */
  children?: React.ReactNode;
}

const ITEM = "card";
const SHELL = "w-full overflow-hidden border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-sm";

const AICard = React.forwardRef<HTMLDivElement, AICardProps>(
  (
    { title, count, radius = "md", icon, color = "purple", accordion = true, defaultOpen = true, open, onOpenChange, headerEnd, onDismiss, onOpenInNewWindow, density = "compact", footer, persistentFooter, footerAlign = "left", children, className, ...props },
    ref
  ) => {
    const tone = COLOR_CLASSES[color];
    const iconNode = icon ? (
      <span aria-hidden="true" className={cn("flex h-4 w-4 items-center justify-center", tone.accent)}>
        {icon}
      </span>
    ) : undefined;
    const endNode = headerEnd ? (
      <span className="flex items-center gap-2 lyra-body-md-emphasis text-lyra-fg-default">{headerEnd}</span>
    ) : undefined;
    const name = typeof title === "string" ? title : undefined;
    const titleNode =
      count === undefined ? (
        title
      ) : (
        <span className="inline-flex items-center gap-2">
          {title}
          <span className="tabular-nums text-lyra-fg-secondary" aria-label={`${count} items`}>
            {count}
          </span>
        </span>
      );
    // Header icon buttons, left to right. Real buttons with a label and hover tooltip.
    const headerButtons = [
      onOpenInNewWindow && { key: "open", label: name ? `Open ${name} in new window` : "Open in new window", icon: ExternalLink, onClick: onOpenInNewWindow },
      onDismiss && { key: "dismiss", label: name ? `Dismiss ${name}` : "Dismiss", icon: X, onClick: onDismiss },
    ].filter(Boolean) as Array<{ key: string; label: string; icon: typeof X; onClick: () => void }>;
    const buttons = headerButtons.map(({ key, label, icon: Icon, onClick }) => (
      <Button key={key} variant="icon" size="icon" aria-label={label} tooltip onClick={onClick}>
        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      </Button>
    ));
    const content = (
      <>
        <div className="px-4 py-4 lyra-body-md text-lyra-fg-default">{children}</div>
        {footer && <ContainerFooter actions={footer} align={footerAlign} className="pt-0" />}
      </>
    );

    const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
    const isOpen = open ?? innerOpen;
    const persistent = persistentFooter ? (
      <div className={cn("px-4 pb-4", !isOpen && accordion && "pt-3")}>{persistentFooter}</div>
    ) : undefined;

    if (!accordion) {
      return (
        <div ref={ref} className={cn(SHELL, RADIUS_CLASSES[radius], className)} {...props}>
          <ContainerHeader
            icon={iconNode}
            title={titleNode}
            actions={
              endNode || buttons.length ? (
                <>
                  {endNode}
                  {buttons}
                </>
              ) : undefined
            }
            bordered={false}
            density="compact"
            titleClassName="lyra-body-md-emphasis"
            // ContainerHeader's compact row is 48px; 4px less padding top and bottom makes the 40px compact card header.
            className={cn(tone.header, density === "compact" && "py-1")}
          />
          {content}
          {persistent}
        </div>
      );
    }

    const accordionEl = (
        <Accordion
          variant="contained"
          {...(persistent ? { className: "border-0 shadow-none" } : {})}
          density={density}
          radius={persistent ? "none" : radius}
          items={[
            {
              id: ITEM,
              title: <span className="lyra-body-md-emphasis">{titleNode}</span>,
              icon: iconNode,
              endSlot:
                endNode || buttons.length ? (
                  <>
                    {endNode}
                    {/* Reserves the room the overlaid buttons take (32px each, 4px apart). */}
                    {buttons.length > 0 && <span aria-hidden="true" style={{ width: buttons.length * 32 + (buttons.length - 1) * 4 }} />}
                  </>
                ) : undefined,
              headerClassName: tone.header,
              contentClassName: "p-0",
              content,
            },
          ]}
          {...(open !== undefined ? { value: open ? ITEM : "" } : { defaultValue: defaultOpen ? ITEM : undefined })}
          onValueChange={(v) => {
            setInnerOpen(v === ITEM);
            onOpenChange?.(v === ITEM);
          }}
        />
    );
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {persistent ? (
          <div className={cn(SHELL, RADIUS_CLASSES[radius])}>
            {accordionEl}
            {persistent}
          </div>
        ) : (
          accordionEl
        )}
        {buttons.length > 0 && (
          // Sits over the header row (48px, or 40px when compact), just left of the chevron, outside the accordion trigger.
          <div className={cn("absolute right-12 flex gap-1", density === "compact" ? "top-1" : "top-2")}>{buttons}</div>
        )}
      </div>
    );
  }
);
AICard.displayName = "AICard";

export { AICard };
