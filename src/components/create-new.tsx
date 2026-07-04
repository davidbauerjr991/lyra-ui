import * as React from "react";
import { useState } from "react";
import { Plus, X, ChevronLeft, ChevronRight, Phone, Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Menu } from "./menu";
import { Input } from "./input";
import { Popover, PopoverClose } from "./popover";

/* ── Types ── */

export interface NewOutboundItem {
  /** Channel label */
  label: string;
  /** Channel icon */
  icon: React.ReactNode;
  /** Called when the channel item is clicked */
  onClick?: () => void;
}

export interface NewOutboundContact {
  /** Unique id */
  id: string;
  /** Display name */
  name: string;
  /** Short avatar label — e.g. two initials */
  initials: string;
  /** Secondary line below the name — e.g. a customer/agent ID */
  subtitle?: string;
  /** Tailwind classes for the avatar circle's background + text color */
  avatarClassName?: string;
}

export interface NewOutboundCategory {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Customers" */
  label: string;
  /** Leading icon shown on the category list */
  icon: React.ReactNode;
  /** Contacts/agents/teams/skills shown after picking this category */
  contacts: NewOutboundContact[];
  /** Placeholder for the search field on this category's screen
   *  (defaults to "Search {label.toLowerCase()}") */
  searchPlaceholder?: string;
}

export interface NewOutboundChannel {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Call" */
  label: string;
  /** Leading icon */
  icon: React.ReactNode;
}

export interface NewOutboundSelection {
  category: NewOutboundCategory;
  contact: NewOutboundContact;
  channel: NewOutboundChannel;
}

export interface NewOutboundProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Flat list of channels shown directly under the header (default mode).
   *  Ignored when `categories` is provided. */
  items?: NewOutboundItem[];
  /** Enables the drill-down flow: a phone-number field + category list
   *  (screen 1) → search + contact list for the chosen category (screen 2)
   *  → channel picker for the chosen contact (screen 3). Content is swapped
   *  in place with a back button, rather than opening a submenu flyout —
   *  see CONTRIBUTING.md; Radix has no dedicated primitive for this, it's
   *  just local view-stack state inside the one Popover.Content. */
  categories?: NewOutboundCategory[];
  /** Channel options shown on the final screen once a contact is picked.
   *  Required for the drill-down flow (`categories`); has no effect
   *  otherwise. */
  channels?: NewOutboundChannel[];
  /** Fired when a channel is picked for a contact on the final drill-down screen */
  onOutbound?: (selection: NewOutboundSelection) => void;
  /** Fired when a number is submitted from the screen-1 phone field (Enter key) */
  onQuickDial?: (phoneNumber: string) => void;
  /** Placeholder for the screen-1 phone number field */
  phoneFieldPlaceholder?: string;
  /** Popover header title (default: "New Outbound") */
  title?: string;
  /**
   * Expanded mode: show a full-width secondary button with the title text
   * instead of the compact icon-only trigger. Used when the nav rail is open.
   */
  expanded?: boolean;
}

/* ── Drill-down view stack ── */

type Screen =
  | { kind: "root" }
  | { kind: "category"; categoryId: string }
  | { kind: "channels"; categoryId: string; contactId: string };

/* ── Contact row (internal) ──
   Purpose-built rather than routed through Menu: Menu's icon slot is sized
   for small (h-4/h-5) glyphs (see CONTRIBUTING.md "Icons" + existing
   icon+description usage in Menu.stories), not avatar-sized circles with a
   two-line name/subtitle — the same reason ConnectedAppsPanel's AppRow
   doesn't route through Menu either. Kept visually consistent with Menu's
   row states (hover/active/focus, rounded-lyra-sm, trailing chevron). */
function ContactRow({
  contact,
  onClick,
}: {
  contact: NewOutboundContact;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group/row flex w-full items-center gap-3 rounded-lyra-sm px-3 py-2.5 text-left transition-colors",
        "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        "focus:outline-none focus-visible:bg-lyra-state-hover"
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full lyra-label uppercase",
          contact.avatarClassName ?? "bg-lyra-bg-surface-shell text-lyra-fg-secondary"
        )}
        aria-hidden="true"
      >
        {contact.initials}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate lyra-body-md text-lyra-fg-default">{contact.name}</span>
        {contact.subtitle && (
          <span className="block truncate lyra-body-sm text-lyra-fg-secondary">{contact.subtitle}</span>
        )}
      </span>
      <ChevronRight className="h-4 w-4 flex-shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

/* ── NewOutbound ── */

const NewOutbound = React.forwardRef<HTMLButtonElement, NewOutboundProps>(
  (
    {
      className,
      items,
      categories,
      channels,
      onOutbound,
      onQuickDial,
      phoneFieldPlaceholder = "Enter phone number",
      title = "New Outbound",
      expanded = false,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [stack, setStack] = useState<Screen[]>([{ kind: "root" }]);
    const [search, setSearch] = useState("");
    const [phone, setPhone] = useState("");
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    const isDrillDown = !!categories && categories.length > 0;
    const screen = stack[stack.length - 1];

    // Reset the drill-down view whenever the popover closes, so it always
    // reopens at screen 1 instead of wherever the user last left it.
    React.useEffect(() => {
      if (!open) {
        setStack([{ kind: "root" }]);
        setSearch("");
        setPhone("");
      }
    }, [open]);

    // Focus the search field when landing on a category's screen, matching
    // the auto-focus-the-search-field pattern used elsewhere (e.g. AgentProfile).
    React.useEffect(() => {
      if (screen.kind === "category") searchInputRef.current?.focus();
    }, [screen]);

    const pushScreen = (s: Screen) => {
      setSearch("");
      setStack((prev) => [...prev, s]);
    };
    const popScreen = () => {
      setSearch("");
      setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };

    const activeCategory =
      screen.kind !== "root" ? categories?.find((c) => c.id === screen.categoryId) : undefined;
    const activeContact =
      screen.kind === "channels" ? activeCategory?.contacts.find((c) => c.id === screen.contactId) : undefined;

    const filteredContacts = activeCategory
      ? search.trim()
        ? activeCategory.contacts.filter(
            (c) =>
              c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              c.subtitle?.toLowerCase().includes(search.trim().toLowerCase())
          )
        : activeCategory.contacts
      : [];

    const headerTitle =
      screen.kind === "root" ? title : screen.kind === "category" ? activeCategory?.label ?? title : activeContact?.name ?? title;

    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        align="start"
        sideOffset={6}
        showArrow={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => {
          // On a drill-down sub-screen, Escape steps back one level instead
          // of closing the whole popover outright.
          if (isDrillDown && screen.kind !== "root") {
            e.preventDefault();
            popScreen();
          }
        }}
        className={cn(
          /* "lg" on the Menu/Popover width scale (CONTRIBUTING.md) —
             header + close button + icon items warrants the largest step. */
          "z-[9999] w-[320px] overflow-hidden"
        )}
        content={
          <>
            {/* Header — swaps between the static title and a back-button +
                dynamic title as the drill-down stack grows/shrinks. */}
            <div className="flex items-center gap-1.5 border-b border-lyra-border-subtle px-4 py-3">
              {isDrillDown && screen.kind !== "root" && (
                <button
                  type="button"
                  aria-label="Back"
                  onClick={popScreen}
                  className={cn(
                    "-ml-1.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lyra-sm",
                    "text-lyra-fg-secondary transition-colors",
                    "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                  )}
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              )}
              <span className="min-w-0 flex-1 truncate lyra-body-lg-emphasis text-lyra-fg-default">
                {headerTitle}
              </span>
              <PopoverClose asChild>
                <button
                  aria-label="Close"
                  className={cn(
                    "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lyra-sm",
                    "text-lyra-fg-secondary transition-colors",
                    "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                  )}
                >
                  <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </PopoverClose>
            </div>

            {isDrillDown ? (
              /* key={} forces a remount on every screen change so the
                 animate-in transition replays each time content is swapped. */
              <div
                key={screen.kind === "root" ? "root" : screen.kind === "category" ? `category:${screen.categoryId}` : `channels:${screen.categoryId}:${screen.contactId}`}
                className="animate-in fade-in-0 slide-in-from-right-1 duration-150"
              >
                {screen.kind === "root" && (
                  <>
                    <div className="border-b border-lyra-border-subtle px-4 py-3">
                      <Input
                        type="tel"
                        placeholder={phoneFieldPlaceholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && phone.trim()) {
                            e.preventDefault();
                            onQuickDial?.(phone.trim());
                            setOpen(false);
                          }
                        }}
                        startIcon={<Phone className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                      />
                    </div>
                    <Menu
                      items={(categories ?? []).map((category) => ({
                        id: category.id,
                        label: category.label,
                        icon: category.icon,
                        onClick: () => pushScreen({ kind: "category", categoryId: category.id }),
                      }))}
                      className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
                    />
                  </>
                )}

                {screen.kind === "category" && activeCategory && (
                  <>
                    <div className="border-b border-lyra-border-subtle px-4 py-3">
                      <div className="relative">
                        <Input
                          ref={searchInputRef}
                          type="text"
                          placeholder={activeCategory.searchPlaceholder ?? `Search ${activeCategory.label.toLowerCase()}`}
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                          endIcon={search ? <X className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.5} aria-hidden="true" /> : undefined}
                        />
                        {/* Real, clickable clear button layered over the
                            decorative endIcon above — Input's endIcon slot
                            is pointer-events-none by design (purely
                            decorative), so a functional clear action needs
                            its own hit target rather than a change to the
                            shared Input primitive. */}
                        {search && (
                          <button
                            type="button"
                            aria-label="Clear search"
                            onClick={() => setSearch("")}
                            className="absolute right-2.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                          />
                        )}
                      </div>
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2">
                      {filteredContacts.length > 0 ? (
                        filteredContacts.map((contact) => (
                          <ContactRow
                            key={contact.id}
                            contact={contact}
                            onClick={() => pushScreen({ kind: "channels", categoryId: activeCategory.id, contactId: contact.id })}
                          />
                        ))
                      ) : (
                        <p className="px-3 py-6 text-center lyra-body-sm text-lyra-fg-secondary">
                          {activeCategory.contacts.length === 0
                            ? `No ${activeCategory.label.toLowerCase()} available`
                            : `No matching ${activeCategory.label.toLowerCase()}`}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {screen.kind === "channels" && activeCategory && activeContact && (
                  <Menu
                    items={(channels ?? []).map((channel) => ({
                      id: channel.id,
                      label: channel.label,
                      icon: channel.icon,
                      onClick: () => {
                        onOutbound?.({ category: activeCategory, contact: activeContact, channel });
                        setOpen(false);
                      },
                    }))}
                    className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
                  />
                )}
              </div>
            ) : (
              /* Flat mode (default) — composes the real Menu component
                 rather than re-implementing its item markup, so any future
                 change to Menu's styling/behavior applies here automatically
                 instead of needing to be hand-copied. */
              <Menu
                aria-label={title}
                items={(items ?? []).map((item, i) => ({
                  id: String(i),
                  label: item.label,
                  icon: item.icon,
                  onClick: () => {
                    item.onClick?.();
                    setOpen(false);
                  },
                }))}
                className="min-w-0 rounded-none border-0 bg-transparent p-2 shadow-none"
              />
            )}
          </>
        }
      >
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
      </Popover>
    );
  }
);
NewOutbound.displayName = "NewOutbound";

export { NewOutbound };
