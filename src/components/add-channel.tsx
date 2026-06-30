import * as React from "react";
import { useState } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Plus, X } from "lucide-react";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface AddChannelItem {
  /** Channel label */
  label: string;
  /** Channel icon */
  icon: React.ReactNode;
  /** Called when the channel item is clicked */
  onClick?: () => void;
}

export interface AddChannelProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** List of channels to show in the popover */
  items: AddChannelItem[];
  /** Popover header title (default: "Create New") */
  title?: string;
  /**
   * Expanded mode: show a full-width secondary button with the title text
   * instead of the compact icon-only trigger. Used when the nav rail is open.
   */
  expanded?: boolean;
}

/* ── AddChannel ── */

const AddChannel = React.forwardRef<HTMLButtonElement, AddChannelProps>(
  ({ className, items, title = "New Outbound", expanded = false, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          {expanded ? (
            /* Full-width secondary button when nav is open */
            <button
              ref={ref}
              aria-label={title}
              aria-expanded={open}
              aria-haspopup="true"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-lyra-sm h-9 px-4",
                "border border-lyra-border-default bg-lyra-bg-control text-lyra-fg-action",
                "lyra-body-md transition-colors",
                "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
                className
              )}
              {...props}
            >
              <Plus className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span>{title}</span>
            </button>
          ) : (
            /* Compact icon-only button when nav is collapsed */
            <button
              ref={ref}
              aria-label={title}
              aria-expanded={open}
              aria-haspopup="true"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lyra-sm",
                "border border-lyra-border-default bg-lyra-bg-surface-base",
                "text-lyra-fg-default transition-colors",
                "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
                className
              )}
              {...props}
            >
              <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side="bottom"
            align="start"
            sideOffset={6}
            onOpenAutoFocus={(e: Event) => e.preventDefault()}
            className={cn(
              "z-[9999] w-[320px] overflow-hidden",
              "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",
              "animate-in fade-in-0 slide-in-from-top-2 duration-150",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3">
              <span className="lyra-body-lg-emphasis text-lyra-fg-default">
                {title}
              </span>
              <PopoverPrimitive.Close asChild>
                <button
                  aria-label="Close"
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-lyra-sm",
                    "text-lyra-fg-secondary transition-colors",
                    "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                  )}
                >
                  <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </PopoverPrimitive.Close>
            </div>

            {/* Channel list */}
            <div
              role="menu"
              aria-label={title}
              className="flex flex-col gap-0.5 px-2 py-2"
            >
              {items.map((item, i) => (
                <button
                  key={i}
                  role="menuitem"
                  onClick={() => {
                    item.onClick?.();
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lyra-md px-3 py-2.5 text-left",
                    "lyra-body-md text-lyra-fg-default transition-colors",
                    "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lyra-sm bg-lyra-bg-surface-shell text-lyra-fg-secondary"
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);
AddChannel.displayName = "AddChannel";

export { AddChannel };
