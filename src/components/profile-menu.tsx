import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/* ── Types ── */

export interface ProfileMenuItem {
  /** Menu item label */
  label: string;
  /** Optional leading icon */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

export interface ProfileMenuGroup {
  items: ProfileMenuItem[];
}

interface ProfileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** User initials (1-2 characters) */
  initials: string;
  /** Background color for the avatar circle */
  avatarColor?: string;
  /** Menu item groups — separated by dividers */
  groups: ProfileMenuGroup[];
  /** Show a dark/light mode toggle in the menu */
  showThemeToggle?: boolean;
}

/* ── ProfileMenu ── */

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
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    /* Close on outside click */
    useEffect(() => {
      if (!open) return;
      function handleClick(e: MouseEvent) {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    /* Close on Escape */
    useEffect(() => {
      if (!open) return;
      function handleKey(e: KeyboardEvent) {
        if (e.key === "Escape") setOpen(false);
      }
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <Tooltip content="Profile" placement="bottom" delayMs={open ? 999999 : 200}>
          <button
            ref={triggerRef}
            onClick={() => setOpen((v) => !v)}
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded={open}
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
        </Tooltip>

        {open && (
          <div
            ref={menuRef}
            role="menu"
            aria-label="User menu"
            className="absolute right-0 top-full z-50 mt-1 min-w-[220px] rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay py-1 shadow-lg"
          >
            {groups.map((group, gi) => (
              <React.Fragment key={gi}>
                {gi > 0 && (
                  <div role="separator" className="my-1 border-t border-lyra-border-subtle" />
                )}
                <div className="flex flex-col">
                  {group.items.map((item, ii) => (
                    <button
                      key={ii}
                      role="menuitem"
                      onClick={() => {
                        item.onClick?.();
                        setOpen(false);
                      }}
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left lyra-body-md text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus:outline-none focus-visible:bg-lyra-state-hover"
                    >
                      {item.icon && (
                        <span className="flex-shrink-0 text-lyra-fg-secondary" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </React.Fragment>
            ))}
            {showThemeToggle && (
              <>
                <div role="separator" className="my-1 border-t border-lyra-border-subtle" />
                <button
                  role="menuitem"
                  onClick={toggleTheme}
                  className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left lyra-body-md text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus:outline-none focus-visible:bg-lyra-state-hover"
                >
                  <span className="flex-shrink-0 text-lyra-fg-secondary" aria-hidden="true">
                    {isDark
                      ? <Sun className="h-4 w-4" strokeWidth={1.5} />
                      : <Moon className="h-4 w-4" strokeWidth={1.5} />
                    }
                  </span>
                  <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
);
ProfileMenu.displayName = "ProfileMenu";

/* ── Default menu groups matching CXone standard ── */

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
