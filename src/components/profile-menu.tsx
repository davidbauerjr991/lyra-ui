import * as React from "react";
import { useState } from "react";
import { ChevronDown, LogOut, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";
import { MenuRadix } from "./menu-radix";
import type { MenuEntry } from "./menu";

/* ── Types ── */

export interface ProfileMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ProfileMenuGroup {
  items: ProfileMenuItem[];
}

interface ProfileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  initials: string;
  avatarColor?: string;
  groups: ProfileMenuGroup[];
  showThemeToggle?: boolean;
}

/* ── ProfileMenu ──
   Built on `MenuRadix` rather than a hand-rolled trigger + open-state +
   absolute-positioned `Menu` (what this file used to do) — this is a
   "self-triggered" case (own trigger, own surface, no embedding inside
   someone else's Popover), exactly what MenuRadix already owns end to end.
   Radix's own outside-click/Escape dismissal and collision-aware
   positioning replace the old manual document-listener effects.

   `Tooltip` can't wrap `MenuRadix` directly — Radix's own Trigger clones
   its click/ref/aria props onto its immediate child via `asChild`/Slot, and
   `Tooltip` doesn't forward arbitrary props through to a DOM node, so it
   can't sit as that immediate child either way around. Wrapping the whole
   `<MenuRadix>` in a plain `<span>` first (a real DOM element, so Tooltip's
   own Slot-cloned props land correctly) — same "Tooltip must wrap from the
   outside" pattern already used by `CreateNew`'s collapsed trigger and
   `AgentProfile`'s avatar trigger (see create-new.tsx's own comment on it). */

const ProfileMenu = React.forwardRef<HTMLDivElement, ProfileMenuProps>(
  ({ className, initials, avatarColor = "#5d6a79", groups, showThemeToggle = false, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(() =>
      typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark"
    );

    const toggleTheme = () => {
      const next = !isDark;
      setIsDark(next);
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    };

    /* Build MenuEntry[] from groups + optional theme toggle */
    const entries: MenuEntry[] = [];
    groups.forEach((group, gi) => {
      if (gi > 0) entries.push("separator");
      group.items.forEach((item, ii) => {
        entries.push({
          id: `g${gi}-i${ii}`,
          label: item.label,
          icon: item.icon,
          onClick: item.onClick,
        });
      });
    });
    if (showThemeToggle) {
      entries.push("separator");
      entries.push({
        id: "theme-toggle",
        label: isDark ? "Light Mode" : "Dark Mode",
        icon: isDark
          ? <Sun className="h-4 w-4" strokeWidth={1.5} />
          : <Moon className="h-4 w-4" strokeWidth={1.5} />,
        onClick: toggleTheme,
        // Keep the menu open so the new theme is visible immediately —
        // matches the original's behavior (its `close()` wrapping was only
        // ever applied to group items, never to this entry).
        closeOnSelect: false,
      });
    }

    const trigger = (
      <button
        aria-label="User menu"
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-lyra-sm pl-2 pr-1.5 transition-colors",
          "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        )}
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
    );

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <Tooltip content="Profile" placement="bottom" delayMs={open ? 999999 : 200}>
          <span className="inline-block">
            <MenuRadix
              trigger={trigger}
              items={entries}
              open={open}
              onOpenChange={setOpen}
              align="end"
              className="min-w-[220px]"
            />
          </span>
        </Tooltip>
      </div>
    );
  }
);
ProfileMenu.displayName = "ProfileMenu";

/* ── Default menu groups ── */

const defaultProfileMenuGroups: ProfileMenuGroup[] = [
  {
    items: [{ label: "My Profile" }],
  },
  {
    items: [
      { label: "Support & Downloads" },
      { label: "Contact Us" },
    ],
  },
  {
    items: [
      {
        label: "Sign Out",
        icon: <LogOut className="h-4 w-4" strokeWidth={1.5} />,
      },
    ],
  },
];

export { ProfileMenu, defaultProfileMenuGroups };
export type { ProfileMenuProps };
