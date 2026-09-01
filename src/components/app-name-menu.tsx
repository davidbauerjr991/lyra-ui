import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AppName, type AppNameProps } from "./app-name";
import { AppMenu, type AppMenuGroup } from "./app-menu";

/* ── AppNameMenu ──
   The AppHeader's app-switcher: an `AppName` trigger that opens an
   `AppMenu` in a bottom-start popover. Promoted from the identical
   `AppNameWithMenu` wrapper previously hand-rolled (raw
   @radix-ui/react-popover) in AppHeader.stories.tsx, AdminShell.stories.tsx,
   AgentNextGenTemplate.stories.tsx and agent-next-gen-v2's three workspace
   pages — one canonical copy so the trigger/popover wiring, animation
   classes, and z-index can't drift between consumers again.

   Open state follows the schedule-panel convention: uncontrolled by default
   (`defaultOpen`), controllable via `open`/`onOpenChange` for consumers
   whose menu items need to close the popover themselves (e.g. the workspace
   pages' navigate-and-close handlers).

   In `compact` mode the trigger collapses to the icon (AppName's own
   behavior) and the app name moves into the menu header — pass `menuHeader`
   to override that default. */

// Contain pointer/focus events to the portalled panel so an outer
// hover-triggered wrapper (Tooltip etc.) can't be misfired from inside it —
// same guard as popover.tsx; see CONTRIBUTING.md §16. `pointerdown` is
// deliberately not stopped — Radix's outside-click bookkeeping needs it to
// reach the document, or other open layers eat the next outside click
// (see popover.tsx's stopSyntheticBubble comment).
const stopSyntheticBubble = (e: React.SyntheticEvent) => e.stopPropagation();

export interface AppNameMenuProps extends AppNameProps {
  /** Menu contents, group by group (see `AppMenu`) */
  groups: AppMenuGroup[];
  /** Optional menu footer (e.g. `<CXoneLogo />`) */
  menuFooter?: React.ReactNode;
  /** Menu header; defaults to `name` when `compact`, hidden otherwise */
  menuHeader?: React.ReactNode;
  /** Controlled open state (pair with `onOpenChange`) */
  open?: boolean;
  /** Initial open state when uncontrolled */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AppNameMenu = React.forwardRef<HTMLButtonElement, AppNameMenuProps>(
  (
    {
      groups,
      menuFooter,
      menuHeader,
      open,
      defaultOpen = false,
      onOpenChange,
      name,
      compact = false,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const currentOpen = open ?? internalOpen;
    const handleOpenChange = (next: boolean) => {
      if (open === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    };
    return (
      <PopoverPrimitive.Root open={currentOpen} onOpenChange={handleOpenChange}>
        <PopoverPrimitive.Trigger asChild>
          <AppName ref={ref} name={name} compact={compact} {...props} />
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side="bottom"
            align="start"
            sideOffset={6}
            onOpenAutoFocus={(e) => e.preventDefault()}
            onPointerMove={stopSyntheticBubble}
            onPointerLeave={stopSyntheticBubble}
            onFocus={stopSyntheticBubble}
            onBlur={stopSyntheticBubble}
            className="z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
          >
            <AppMenu
              groups={groups}
              footer={menuFooter}
              header={menuHeader ?? (compact ? name : undefined)}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);
AppNameMenu.displayName = "AppNameMenu";

export { AppNameMenu };
