import * as React from "react";
import { useState } from "react";
import { Plus, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Menu } from "./menu";
import { Input } from "./input";
import { Popover, PopoverClose } from "./popover";
import { Tooltip } from "./tooltip";
import { Select } from "./select";
import { Button } from "./button";
import { TableFooter } from "./table";
import { FavoriteButton } from "./favorite-button";
import { PhoneInput, PHONE_COUNTRIES, isPhoneNumberComplete, type PhoneValue } from "./phone-input";
import type { ChannelType } from "./channel-row";

/* ── Types ── */

export interface CreateNewItem {
  /** Channel label */
  label: string;
  /** Channel icon */
  icon: React.ReactNode;
  /** Called when the channel item is clicked */
  onClick?: () => void;
}

export interface CreateNewContact {
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

export interface CreateNewCategory {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Customers" */
  label: string;
  /** Leading icon shown on the category list */
  icon: React.ReactNode;
  /** Contacts/agents/teams/skills shown after picking this category */
  contacts: CreateNewContact[];
  /** Placeholder for the search field on this category's screen
   *  (defaults to "Search {label.toLowerCase()}") */
  searchPlaceholder?: string;
}

export interface CreateNewChannel {
  /** Unique id */
  id: string;
  /** Display label — e.g. "Call" */
  label: string;
  /** Leading icon */
  icon: React.ReactNode;
}

export interface CreateNewSelection {
  category: CreateNewCategory;
  contact: CreateNewContact;
  channel: CreateNewChannel;
}

/* ── Outbound flow types (screen 1: Outbound picker → screen 2: call
   setup). Fully independent of `items` and `categories`/`channels` above —
   see the `outbound` prop below. ── */

export interface CreateNewOutboundContact extends CreateNewContact {
  /** Which channels this contact can be reached on — filters both the
   *  per-row hover flyout and the detail screen's "Select Channel" options
   *  down to what's actually supported. */
  channels: ChannelType[];
}

export interface CreateNewOutboundGroup {
  /** Unique id — also the value used by the group Select. */
  id: string;
  /** Select option label, e.g. "Agents". */
  label: string;
  searchPlaceholder?: string;
  /** "contacts" (default when `contacts` is set) shows search + a paginated
   *  contact list. "dialpad" shows the phone quick-dial field instead of a
   *  list. "empty" always shows `emptyMessage`, with no favoriting concept.
   *  "favorites" shows whichever contacts (from *any* group) the user has
   *  starred via the per-row favorite button — `contacts` is ignored for
   *  this kind; `emptyMessage` still applies until at least one is starred. */
  kind?: "contacts" | "dialpad" | "empty" | "favorites";
  contacts?: CreateNewOutboundContact[];
  emptyMessage?: string;
}

export interface CreateNewChannelOption {
  /** Must line up with the values used in CreateNewOutboundContact.channels */
  id: ChannelType;
  /** Label in the per-row hover flyout, e.g. "Call" */
  label: string;
  /** Label in the detail screen's "Select Channel" dropdown, e.g. "Voice"
   *  (defaults to `label` when omitted). */
  selectLabel?: string;
  icon: React.ReactNode;
}

export interface CreateNewOutboundConfig {
  /** Screen 1 header (default: "New Outbound") */
  outboundTitle?: string;
  /** Dropdown options replacing the old category icon-menu — e.g.
   *  Favorites / Agents / Teams / Skills / Customers / Dial Pad. */
  groups: CreateNewOutboundGroup[];
  /** Which group is selected when screen 1 is first reached (defaults to
   *  the first entry in `groups`). */
  defaultGroupId?: string;
  /** Call/Email/SMS/WhatsApp definitions — drives both the per-row hover
   *  flyout and the detail screen's "Select Channel" dropdown. */
  channelOptions: CreateNewChannelOption[];
  /** Options for the detail screen's "Select Phone" dropdown */
  phoneOptions: { value: string; label: string }[];
  /** Options for the detail screen's "Outbound Skill" dropdown */
  skillOptions: { value: string; label: string }[];
  /** Fired when a number is submitted from a "dialpad"-kind group (Enter key) */
  onQuickDial?: (phoneNumber: string) => void;
  /** Fired when "Start Interaction" is pressed on the detail screen */
  onStartCall?: (selection: {
    contact: CreateNewOutboundContact;
    channel: ChannelType;
    phone: string;
    skillId: string;
  }) => void;
  /** Contacts per page in the paginated list (default: 10) */
  pageSize?: number;
}

export interface CreateNewProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Flat list of channels shown directly under the header (default mode).
   *  Ignored when `categories` is provided. */
  items?: CreateNewItem[];
  /** Enables the drill-down flow: a phone-number field + category list
   *  (screen 1) → search + contact list for the chosen category (screen 2)
   *  → channel picker for the chosen contact (screen 3). Content is swapped
   *  in place with a back button, rather than opening a submenu flyout —
   *  see CONTRIBUTING.md; Radix has no dedicated primitive for this, it's
   *  just local view-stack state inside the one Popover.Content. */
  categories?: CreateNewCategory[];
  /** Channel options shown on the final screen once a contact is picked.
   *  Required for the drill-down flow (`categories`); has no effect
   *  otherwise. */
  channels?: CreateNewChannel[];
  /** Fired when a channel is picked for a contact on the final drill-down screen */
  onOutbound?: (selection: CreateNewSelection) => void;
  /** Enables the outbound flow: an Outbound picker (group dropdown + search
   *  + paginated contact list, with a per-row hover flyout for channel
   *  choice) → a call-setup screen. Fully independent of `items` and
   *  `categories`/`channels` above — when set, this takes over as screen 1
   *  instead of the plain phone-field + category root. */
  outbound?: CreateNewOutboundConfig;
  /** Fired when a number is submitted from the screen-1 phone field (Enter key) */
  onQuickDial?: (phoneNumber: string) => void;
  /** Placeholder for the screen-1 phone number field. Leave unset to use
   *  PhoneInput's own per-country example (e.g. "(555) 555-5555" for the
   *  US, "76 123 45 67" for Switzerland) — only set this to replace that
   *  with fixed text across every country. */
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
  | { kind: "channels"; categoryId: string; contactId: string }
  | { kind: "group"; groupId: string }
  | { kind: "detail"; groupId: string; contactId: string; channel: ChannelType };

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
  highlighted,
  favorited,
  onToggleFavorite,
}: {
  contact: CreateNewContact;
  onClick: () => void;
  /** Forces the hover background on even when the cursor isn't actually
   *  over this row — used by OutboundContactRow so the row stays visibly
   *  "selected" while its channel flyout (which sits to the right, off the
   *  row itself) is open. Same convention as Menu's own submenu items:
   *  `(item.active || (hasSubmenu && submenuOpen)) && "bg-lyra-state-hover"`. */
  highlighted?: boolean;
  /** Outbound-flow only. Omit both this and `onToggleFavorite` to hide the
   *  favorite button entirely (e.g. the generic drill-down flow, which has
   *  no Favorites concept). */
  favorited?: boolean;
  onToggleFavorite?: () => void;
}) {
  return (
    // A <div role="button"> rather than a real <button>: FavoriteButton
    // below renders a native <button>, and nesting <button> inside <button>
    // is invalid HTML with unreliable click-bubbling across browsers. This
    // keeps the same click/keyboard/focus-visible behavior as a real button
    // while allowing that legitimate nested control. `group/row` is what
    // FavoriteButton hooks into to reveal itself only on hover/focus of
    // this row (see favorite-button.tsx).
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group/row flex w-full cursor-pointer items-center gap-3 rounded-lyra-sm px-3 py-2.5 text-left transition-colors",
        "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
        "focus:outline-none focus-visible:bg-lyra-state-hover",
        highlighted && "bg-lyra-state-hover"
      )}
    >
      <span className="min-w-0 flex-1">
        <span className="block truncate lyra-body-md text-lyra-fg-default">{contact.name}</span>
        {contact.subtitle && (
          <span className="block truncate lyra-body-sm text-lyra-fg-secondary">{contact.subtitle}</span>
        )}
      </span>
      {onToggleFavorite && (
        <FavoriteButton favorited={!!favorited} onClick={onToggleFavorite} label={contact.name} placement="left" />
      )}
      <ChevronRight className="h-4 w-4 flex-shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

/* ── Outbound contact row (internal) ──
   Wraps ContactRow with a hover-triggered channel flyout (Call/Email/SMS/
   WhatsApp), filtered to whichever channels this contact actually
   supports. Composes the shared Popover for the flyout's chrome/position/
   collision-avoidance rather than hand-rolling another portal+positioning
   implementation (Menu already has one for its own submenus; this is a
   different trigger shape — a rich avatar row, not a MenuItemDef — so it
   can't route through that mechanism directly, see ContactRow's own
   comment above). Hover timing (immediate open, 150ms close delay) matches
   Menu's own submenu hover exactly, for a consistent feel. */
function OutboundContactRow({
  contact,
  channelOptions,
  onSelect,
  favorited,
  onToggleFavorite,
}: {
  contact: CreateNewOutboundContact;
  channelOptions: CreateNewChannelOption[];
  onSelect: (channel: ChannelType) => void;
  favorited?: boolean;
  onToggleFavorite?: () => void;
}) {
  const [flyoutOpen, setFlyoutOpen] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openFlyout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setFlyoutOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setFlyoutOpen(false), 150);
  };
  React.useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  const availableChannels = channelOptions.filter((c) => contact.channels.includes(c.id));
  const defaultChannel = availableChannels.find((c) => c.id === "voice")?.id ?? availableChannels[0]?.id;

  return (
    <Popover
      open={flyoutOpen}
      onOpenChange={setFlyoutOpen}
      placement="right"
      align="center"
      sideOffset={4}
      showArrow={false}
      onOpenAutoFocus={(e) => e.preventDefault()}
      // This flyout is nested *inside* this component's own z-[9999]
      // popover panel, so it needs to clear its own parent — same lesson
      // as the AgentProfile star tooltip incident. See CONTRIBUTING.md §5
      // ("Popovers nested inside another popover").
      className="z-[10003] w-48 p-1"
      content={
        <div onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
          {availableChannels.length > 0 ? (
            <Menu
              items={availableChannels.map((c) => ({
                id: c.id,
                label: c.label,
                icon: c.icon,
                onClick: () => {
                  setFlyoutOpen(false);
                  onSelect(c.id);
                },
              }))}
              className="min-w-0 rounded-none border-0 bg-transparent p-0 shadow-none"
            />
          ) : (
            <p className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">No channels available</p>
          )}
        </div>
      }
    >
      <div onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
        <ContactRow
          contact={contact}
          highlighted={flyoutOpen}
          favorited={favorited}
          onToggleFavorite={onToggleFavorite}
          onClick={() => {
            if (defaultChannel) onSelect(defaultChannel);
          }}
        />
      </div>
    </Popover>
  );
}

/* ── CreateNew ── */

const CreateNew = React.forwardRef<HTMLButtonElement, CreateNewProps>(
  (
    {
      className,
      items,
      categories,
      channels,
      onOutbound,
      onQuickDial,
      phoneFieldPlaceholder,
      title = "New Outbound",
      expanded = false,
      outbound,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const isOutboundFlow = !!outbound;
    // The Outbound picker is screen 1 of this flow (there's no separate
    // top-level action list to land on first) — same fallback used by the
    // group Select's own default.
    const initialOutboundGroupId = outbound?.defaultGroupId ?? outbound?.groups[0]?.id;
    const [stack, setStack] = useState<Screen[]>(
      isOutboundFlow ? [{ kind: "group", groupId: initialOutboundGroupId ?? "" }] : [{ kind: "root" }]
    );
    const [search, setSearch] = useState("");
    // Shared by the drill-down flow's screen-1 quick-dial field and the
    // outbound flow's "dialpad"-kind group — the two are mutually exclusive
    // per component instance (isDrillDown / isOutboundFlow never both true),
    // so one PhoneValue suffices for whichever is actually rendered.
    const [phone, setPhone] = useState<PhoneValue>({ countryCode: "us", number: "" });
    const [page, setPage] = useState(1);
    const pageSize = outbound?.pageSize ?? 10;
    // Detail-screen selections — editable on screen 2 (Select Channel can be
    // changed from whatever the flyout/row click seeded it with), so these
    // live in their own state rather than being read straight off the
    // Screen object. Reset whenever a "detail" screen is pushed (see
    // goToDetail below), same pattern as `search` being reset in
    // pushScreen/popScreen.
    const [detailChannel, setDetailChannel] = useState<ChannelType | "">("");
    const [detailPhone, setDetailPhone] = useState("");
    const [detailSkill, setDetailSkill] = useState("");
    const searchInputRef = React.useRef<HTMLInputElement>(null);
    // Favorited contact ids, toggled by FavoriteButton (add or remove — see
    // favorite-button.tsx). Persists across popover open/close, unlike the
    // transient search/page state reset in the effect below, since a
    // favorites list that forgot itself every time you closed the popover
    // wouldn't be much of a favorites list.
    const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

    const isDrillDown = !isOutboundFlow && !!categories && categories.length > 0;
    const screen = stack[stack.length - 1];

    // Reset the drill-down view whenever the popover closes, so it always
    // reopens at screen 1 instead of wherever the user last left it.
    //
    // Delayed, not immediate: Popover's own content stays mounted and
    // visible for its `data-[state=closed]` exit animation (100ms, see
    // popover.tsx) after `open` flips to false — Radix doesn't remove it
    // from the DOM until that animation finishes. Resetting synchronously
    // here used to swap the still-fading-out content back to the default
    // screen (e.g. the Agents list) mid-close, so users saw a jarring
    // flash of the initial state instead of the popover simply fading away
    // showing whatever screen they'd actually left it on. Waiting past the
    // animation means the reset only ever happens once the content is
    // already fully hidden, so it's invisible.
    React.useEffect(() => {
      if (!open) {
        const t = setTimeout(() => {
          setStack(isOutboundFlow ? [{ kind: "group", groupId: initialOutboundGroupId ?? "" }] : [{ kind: "root" }]);
          setSearch("");
          setPhone({ countryCode: "us", number: "" });
          setPage(1);
        }, 200);
        return () => clearTimeout(t);
      }
      // isOutboundFlow/initialOutboundGroupId are derived from a prop that
      // isn't expected to change after mount; omitting them keeps this
      // effect scoped to open/close only.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    // Focus the search field when landing on a category's (or, in the
    // outbound flow, a "contacts"-kind group's) screen, matching the
    // auto-focus-the-search-field pattern used elsewhere (e.g. AgentProfile).
    React.useEffect(() => {
      const groupKind = screen.kind === "group" ? outbound?.groups.find((g) => g.id === screen.groupId)?.kind ?? "contacts" : undefined;
      const isSearchableGroup = groupKind === "contacts" || groupKind === "favorites";
      if (screen.kind === "category" || isSearchableGroup) {
        searchInputRef.current?.focus();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screen]);

    // Reset to page 1 whenever the search term or the active group changes,
    // so switching groups/searching never leaves you stranded on a page
    // that no longer exists for the new result set.
    React.useEffect(() => {
      setPage(1);
    }, [search, screen.kind === "group" ? screen.groupId : null]);

    const pushScreen = (s: Screen) => {
      setSearch("");
      setStack((prev) => [...prev, s]);
    };
    const popScreen = () => {
      setSearch("");
      setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };
    // Switching the group dropdown swaps screen 1's content in place rather
    // than growing the back-stack — the Select is the control for "which
    // group", not a navigation action in its own right.
    const setActiveGroup = (groupId: string) => {
      setSearch("");
      setStack((prev) => [...prev.slice(0, -1), { kind: "group", groupId }]);
    };
    // Screen 2's second field means something different per channel: an
    // actual phone number for Call/SMS (from `outbound.phoneOptions`), or a
    // synthesized address/handle for Email/WhatsApp — there's no per-contact
    // email or handle in CreateNewOutboundContact, so these are derived from
    // the contact's name for demo purposes rather than looked up.
    const defaultDetailValueFor = (contact: CreateNewOutboundContact, channel: ChannelType): string => {
      if (channel === "email") {
        return `${contact.name.toLowerCase().replace(/\s+/g, ".")}@example.com`;
      }
      if (channel === "whatsapp") {
        return `@${contact.name}`;
      }
      return outbound?.phoneOptions[0]?.value ?? "";
    };

    const goToDetail = (groupId: string, contact: CreateNewOutboundContact, channel: ChannelType) => {
      setDetailChannel(channel);
      setDetailPhone(defaultDetailValueFor(contact, channel));
      setDetailSkill("");
      pushScreen({ kind: "detail", groupId, contactId: contact.id, channel });
    };

    const activeCategory =
      screen.kind === "category" || screen.kind === "channels"
        ? categories?.find((c) => c.id === screen.categoryId)
        : undefined;
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

    // ── Outbound flow derived state ──
    const activeGroup =
      screen.kind === "group" || screen.kind === "detail"
        ? outbound?.groups.find((g) => g.id === screen.groupId)
        : undefined;
    // Every contact across every group, so a "favorites" group can show
    // starred contacts regardless of which group they actually live in —
    // its own `contacts` (if any) is ignored for this kind (see the
    // CreateNewOutboundGroup.kind doc comment).
    const allOutboundContacts = React.useMemo(
      () => (outbound?.groups ?? []).flatMap((g) => g.contacts ?? []),
      [outbound]
    );
    const activeGroupContacts =
      activeGroup?.kind === "favorites"
        ? allOutboundContacts.filter((c) => favoriteIds.has(c.id))
        : activeGroup?.contacts ?? [];
    const filteredGroupContacts = search.trim()
      ? activeGroupContacts.filter(
          (c) =>
            c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            c.subtitle?.toLowerCase().includes(search.trim().toLowerCase())
        )
      : activeGroupContacts;
    const totalGroupPages = Math.max(1, Math.ceil(filteredGroupContacts.length / pageSize));
    const safePage = Math.min(page, totalGroupPages);
    const pagedGroupContacts = filteredGroupContacts.slice(
      (safePage - 1) * pageSize,
      safePage * pageSize
    );

    const activeOutboundContact =
      screen.kind === "detail" ? activeGroupContacts.find((c) => c.id === screen.contactId) : undefined;
    const availableChannelsForContact = (outbound?.channelOptions ?? []).filter((c) =>
      activeOutboundContact ? activeOutboundContact.channels.includes(c.id) : true
    );

    // goToDetail seeds the right default the moment screen 2 is entered, but
    // "Select Channel" stays editable once there (see its own comment) — if
    // the user switches channel on-screen, the second field needs to swap
    // from a phone number to a synthesized email/handle (or back) too.
    React.useEffect(() => {
      if (screen.kind !== "detail" || !activeOutboundContact || !detailChannel) return;
      setDetailPhone(defaultDetailValueFor(activeOutboundContact, detailChannel));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailChannel]);

    // Label + options for screen 2's second field, matching whichever
    // channel is currently selected — see defaultDetailValueFor above for
    // why email/whatsapp are single synthesized options rather than a list.
    const detailFieldMeta = (() => {
      if (detailChannel === "email") {
        const value = activeOutboundContact ? defaultDetailValueFor(activeOutboundContact, "email") : "";
        return { label: "Select Email Address", options: value ? [{ value, label: value }] : [] };
      }
      if (detailChannel === "whatsapp") {
        const value = activeOutboundContact ? defaultDetailValueFor(activeOutboundContact, "whatsapp") : "";
        return { label: "Select WhatsApp Handle", options: value ? [{ value, label: value }] : [] };
      }
      return { label: "Select Phone", options: outbound?.phoneOptions ?? [] };
    })();

    const handleStartCall = () => {
      if (!outbound || !activeOutboundContact || !detailChannel || !detailSkill) return;
      outbound.onStartCall?.({
        contact: activeOutboundContact,
        channel: detailChannel,
        phone: detailPhone,
        skillId: detailSkill,
      });
      setOpen(false);
    };

    // Shared by the dialpad group's "Dial Number" button and its Enter-to-dial
    // keyboard shortcut, so both agree on exactly what counts as dialable —
    // isPhoneNumberComplete is the same per-country digit-count check
    // PhoneInput uses internally for its own validation error, reused here
    // instead of re-deriving it (CONTRIBUTING.md §1).
    const selectedPhoneCountry = PHONE_COUNTRIES.find((c) => c.code === phone.countryCode) ?? PHONE_COUNTRIES[0];
    const isDialpadNumberValid = isPhoneNumberComplete(phone.number, selectedPhoneCountry);
    const handleDialNumber = () => {
      if (!isDialpadNumberValid) return;
      outbound?.onQuickDial?.(`${selectedPhoneCountry.dial}${phone.number}`);
      setOpen(false);
    };

    const headerTitle =
      screen.kind === "root"
        ? title
        : screen.kind === "category"
        ? activeCategory?.label ?? title
        : screen.kind === "channels"
        ? activeContact?.name ?? title
        : screen.kind === "group"
        ? outbound?.outboundTitle ?? "New Outbound"
        : /* screen.kind === "detail" */ activeOutboundContact?.name ?? outbound?.outboundTitle ?? "New Outbound";

    // Back button shows on any drill-down sub-screen, and on the outbound
    // flow's "detail" sub-screen — lets the user return to the contact list
    // to pick a different channel/contact without closing and reopening the
    // whole popover. The outbound flow's "group" screen is itself screen 1
    // now (no action list above it to go back to), so it gets no back button.
    const showBackButton =
      (isDrillDown && screen.kind !== "root") ||
      (isOutboundFlow && screen.kind === "detail");

    // A single persistent button, not two JSX branches swapped by
    // `expanded` — its width/colors/padding and the label's reveal are all
    // driven by conditional classes on the *same* element so the
    // open↔collapse transition is one continuous CSS animation instead of
    // an instant unmount/remount. `duration-200` matches LeftNav's own nav
    // width transition (`transition-all duration-200` in left-nav.tsx) so
    // the button and the rail it sits in move in step. This was previously
    // two separate `<button>`s (compact vs. full-width secondary) picked by
    // a ternary — every toggle destroyed and recreated the DOM node (and,
    // via the Tooltip-wrapping branch below, the whole Popover along with
    // it), which is why the open animation looked "elegant" (the label
    // simply appeared once the new node existed) but closing looked
    // "clunky" (the full label was still on-screen the instant the node
    // was swapped out, with no transition possible on a node that no
    // longer exists).
    const trigger = (
      <button
        ref={ref}
        aria-label={title}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          // Same tokens as Button's "default" (primary) variant — see
          // button.tsx's buttonVariants — reused directly rather than
          // guessed, per CONTRIBUTING.md §1. No border: a primary button is
          // a solid fill, unlike the previous outline/secondary treatment.
          "flex h-9 items-center justify-center rounded-lyra-sm overflow-hidden",
          "bg-lyra-bg-primary text-lyra-fg-on-primary transition-all duration-200",
          "hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          expanded ? "w-full px-4" : "w-9 px-0",
          className
        )}
        {...props}
      >
        <Plus className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
        {/* Spacing between icon and label lives on the label itself
            (`ml-2`/`ml-0`), not a `gap-*` on the button — a flex `gap`
            reserves space between items even when one has zero width,
            which pushed the icon a few pixels off-center in the collapsed
            state (visible in devtools: the "0 × 20" label span still ate
            into the layout via the gap). Zeroing the label's own margin
            alongside its width/opacity means it contributes nothing at all
            when collapsed, so the icon centers exactly — while still
            keeping every property transition-able for a smooth reveal
            (unlike `display: none`, which can't be animated and would
            reintroduce the abrupt open/close swap this component was just
            fixed to avoid). */}
        <span
          aria-hidden={!expanded}
          className={cn(
            "lyra-body-md overflow-hidden whitespace-nowrap transition-all duration-200",
            expanded ? "max-w-[200px] ml-2 opacity-100" : "max-w-0 ml-0 opacity-0"
          )}
        >
          {title}
        </span>
      </button>
    );

    // Header — swaps between the static title and a back-button + dynamic
    // title as the drill-down stack grows/shrinks. For the outbound flow's
    // "group" screen, the group picker + search field ride along here too,
    // so both stay pinned above the scrollable contact list rather than
    // scrolling away with it (Popover's `header` prop renders outside the
    // scroll area, same as `footer`).
    const popoverHeader = (
      <>
        <div className="flex items-center gap-1.5 border-b border-lyra-border-subtle px-4 py-3">
          {showBackButton && (
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

        {isOutboundFlow && screen.kind === "group" && activeGroup && (
          <div className="border-b border-lyra-border-subtle px-4 py-3 space-y-3">
            <Select
              aria-label="Choose group"
              value={activeGroup.id}
              onValueChange={setActiveGroup}
              options={(outbound?.groups ?? []).map((g) => ({ value: g.id, label: g.label }))}
              portalDropdown
            />
            {((activeGroup.kind ?? "contacts") === "contacts" || activeGroup.kind === "favorites") && (
              <div className="relative">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder={activeGroup.searchPlaceholder ?? `Search ${activeGroup.label.toLowerCase()}`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />}
                  endIcon={search ? <X className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.5} aria-hidden="true" /> : undefined}
                />
                {search && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                    className="absolute right-2.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </>
    );

    const popover = (
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        align="start"
        sideOffset={6}
        showArrow={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => {
          // On any sub-screen with a back button (see showBackButton above),
          // Escape steps back one level instead of closing the whole
          // popover outright. Only screens with no back step (screen 1,
          // drill-down's root category list) fall through to the default
          // close-the-popover behavior.
          if (showBackButton) {
            e.preventDefault();
            popScreen();
          }
        }}
        maxHeight={
          screen.kind === "detail" || (screen.kind === "group" && (activeGroup?.kind ?? "contacts") === "contacts")
            ? "var(--radix-popper-available-height, 480px)"
            : undefined
        }
        header={popoverHeader}
        footer={
          screen.kind === "detail" ? (
            <div className="border-t border-lyra-border-subtle p-4">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                disabled={!detailSkill}
                onClick={handleStartCall}
              >
                Start Interaction
              </Button>
            </div>
          ) : screen.kind === "group" && (activeGroup?.kind ?? "contacts") === "contacts" ? (
            <TableFooter
              currentPage={safePage}
              totalPages={totalGroupPages}
              onPageChange={setPage}
              rowsPerPage={pageSize}
              totalRecords={filteredGroupContacts.length}
              displayStart={filteredGroupContacts.length === 0 ? 0 : (safePage - 1) * pageSize + 1}
              displayEnd={Math.min(safePage * pageSize, filteredGroupContacts.length)}
              showRowsPerPage={false}
              showJumpButtons={false}
              className="px-4"
            />
          ) : screen.kind === "group" && activeGroup?.kind === "dialpad" ? (
            <div className="border-t border-lyra-border-subtle p-4">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                disabled={!isDialpadNumberValid}
                onClick={handleDialNumber}
              >
                Dial Number
              </Button>
            </div>
          ) : undefined
        }
        className={cn(
          /* "lg" on the Menu/Popover width scale (CONTRIBUTING.md) —
             header + close button + icon items warrants the largest step. */
          "z-[9999] w-[320px] overflow-hidden"
        )}
        content={
          <>
            {isOutboundFlow ? (
              /* key={} forces a remount on every screen change so the
                 animate-in transition replays each time content is swapped —
                 same technique as the generic drill-down branch below. */
              <div
                key={
                  screen.kind === "group"
                    ? `group:${screen.groupId}`
                    : screen.kind === "detail"
                    ? `detail:${screen.groupId}:${screen.contactId}`
                    : "outbound"
                }
                className="animate-in fade-in-0 slide-in-from-right-1 duration-150"
              >
                {screen.kind === "group" && activeGroup && (
                  (activeGroup.kind ?? "contacts") === "dialpad" ? (
                    // PhoneInput (country selector + digit mask + validation)
                    // rather than a hand-rolled `<Input type="tel">` — see
                    // CONTRIBUTING.md §3 "Composition over reimplementation".
                    // PhoneInput has no onKeyDown/onSubmit prop of its own,
                    // so Enter-to-dial is caught here via ordinary DOM
                    // bubbling from its underlying <input> instead.
                    <div
                      className="p-4"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleDialNumber();
                        }
                      }}
                    >
                      {/* No `placeholder` override here — PhoneInput's own
                          per-country example (e.g. "(555) 555-5555" for the
                          US) is more useful than a fixed generic string, and
                          it updates automatically as the country changes.
                          `dropdownClassName="z-[10003]"`: the country
                          dropdown is a Popover nested inside this
                          component's own z-[9999] popover panel — same
                          nested-popover case as the per-row channel flyout,
                          see CONTRIBUTING.md §5. */}
                      <PhoneInput value={phone} onChange={setPhone} dropdownClassName="z-[10003]" />
                    </div>
                  ) : activeGroup.kind === "empty" ? (
                    <p className="px-4 py-8 text-center lyra-body-sm text-lyra-fg-secondary">
                      {activeGroup.emptyMessage ?? `No ${activeGroup.label.toLowerCase()} yet`}
                    </p>
                  ) : (
                    <div className="p-2">
                      {pagedGroupContacts.length > 0 ? (
                        pagedGroupContacts.map((contact) => (
                          <OutboundContactRow
                            key={contact.id}
                            contact={contact}
                            channelOptions={outbound?.channelOptions ?? []}
                            onSelect={(ch) => goToDetail(activeGroup.id, contact, ch)}
                            favorited={favoriteIds.has(contact.id)}
                            onToggleFavorite={() =>
                              setFavoriteIds((prev) => {
                                const next = new Set(prev);
                                if (next.has(contact.id)) next.delete(contact.id);
                                else next.add(contact.id);
                                return next;
                              })
                            }
                          />
                        ))
                      ) : (
                        <p className="px-3 py-6 text-center lyra-body-sm text-lyra-fg-secondary">
                          {activeGroupContacts.length === 0
                            ? activeGroup.kind === "favorites"
                              ? activeGroup.emptyMessage ?? "No favorites yet"
                              : `No ${activeGroup.label.toLowerCase()} available`
                            : `No matching ${activeGroup.label.toLowerCase()}`}
                        </p>
                      )}
                    </div>
                  )
                )}

                {screen.kind === "detail" && activeOutboundContact && (
                  <div className="p-4 space-y-4">
                    <Select
                      label="Select Channel"
                      value={detailChannel || undefined}
                      onValueChange={(v) => setDetailChannel(v as ChannelType)}
                      options={availableChannelsForContact.map((c) => ({
                        value: c.id,
                        label: c.selectLabel ?? c.label,
                      }))}
                    />
                    <Select
                      label={detailFieldMeta.label}
                      value={detailPhone || undefined}
                      onValueChange={setDetailPhone}
                      options={detailFieldMeta.options}
                    />
                    <Select
                      label="Outbound Skill"
                      placeholder="Select Outbound Skill"
                      value={detailSkill || undefined}
                      onValueChange={setDetailSkill}
                      options={outbound?.skillOptions ?? []}
                    />
                  </div>
                )}
              </div>
            ) : isDrillDown ? (
              /* key={} forces a remount on every screen change so the
                 animate-in transition replays each time content is swapped. */
              <div
                key={
                  screen.kind === "root"
                    ? "root"
                    : screen.kind === "category"
                    ? `category:${screen.categoryId}`
                    : screen.kind === "channels"
                    ? `channels:${screen.categoryId}:${screen.contactId}`
                    : "drilldown"
                }
                className="animate-in fade-in-0 slide-in-from-right-1 duration-150"
              >
                {screen.kind === "root" && (
                  <>
                    <div
                      className="border-b border-lyra-border-subtle px-4 py-3"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && phone.number.trim()) {
                          e.preventDefault();
                          const country = PHONE_COUNTRIES.find((c) => c.code === phone.countryCode) ?? PHONE_COUNTRIES[0];
                          onQuickDial?.(`${country.dial}${phone.number}`);
                          setOpen(false);
                        }
                      }}
                    >
                      {/* `phoneFieldPlaceholder` is undefined unless a
                          consumer explicitly opts in — leaving it unset
                          lets PhoneInput fall back to its own per-country
                          example instead of a fixed generic string. See
                          CONTRIBUTING.md §5 for why the dropdown needs
                          `dropdownClassName="z-[10003]"` here too (same
                          nested-popover case as the dialpad group's
                          PhoneInput above). */}
                      <PhoneInput value={phone} onChange={setPhone} placeholder={phoneFieldPlaceholder} dropdownClassName="z-[10003]" />
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
        {trigger}
      </Popover>
    );

    // Only the collapsed, icon-only trigger needs a tooltip — the expanded
    // button already has a visible "New Outbound" label, so a tooltip on
    // top of it would be redundant. Tooltip has to wrap Popover from the
    // outside, not the other way around: Popover's trigger clones its
    // click/ref/aria props onto its immediate child via Radix's
    // asChild/Slot mechanism, and Tooltip doesn't forward arbitrary props
    // through to a DOM node, so it can't sit as that immediate child. The
    // wrapping span is the same Tooltip+opaque-component wrapper pattern
    // used for AgentProfile's avatar trigger.
    //
    // This wrapper is now unconditional (previously `if (expanded) return
    // popover;` returned early, only wrapping in the collapsed case) —
    // `Tooltip`'s own `disabled` prop suppresses it while expanded instead.
    // Conditionally wrapping vs. not wrapping `popover` in a `<Tooltip>`
    // changes the JSX tree shape every time `expanded` toggles, which
    // forces React to unmount and remount the entire `Popover` (and its own
    // open/animation state) along with it — exactly the mechanism behind
    // the open/close animation asymmetry this was fixed alongside (see the
    // `trigger` button's own comment above). Keeping the wrapper constant
    // and toggling `disabled` preserves the `Popover` instance across
    // `expanded` changes so the trigger button's CSS transition can
    // actually play out instead of being interrupted by a remount.
    // `className="flex w-full justify-center"` (not `inline-flex`) so the
    // wrapper always stretches to the true outer layout (e.g. LeftNav's
    // footer slot) — needed for the expanded button's own `w-full` to
    // resolve against the right containing block. `justify-center` keeps
    // the collapsed (fixed `w-9`) button centered in that now-full-width
    // wrapper instead of left-aligning — previously LeftNav's own footer
    // div supplied that centering, which only worked because the wrapper
    // itself used to shrink-wrap (`inline-flex`) to the button's size.
    //
    // z-index needs no override here (unlike a tooltip nested *inside*
    // a popover's content, see CONTRIBUTING.md §5/§15) — this trigger
    // sits outside the popover panel entirely, so the Tooltip's default
    // z-[10000] already clears everything around it. placement="right",
    // not the default "top": this trigger lives in a collapsed left
    // rail (see left-nav.tsx's `footer` slot / CreateNew.stories), so
    // the tooltip needs to open into the page rather than toward the
    // rail's own edge — see CONTRIBUTING.md §16.
    return (
      <Tooltip content={title} placement="right" disabled={expanded}>
        <span className="flex w-full justify-center">{popover}</span>
      </Tooltip>
    );
  }
);
CreateNew.displayName = "CreateNew";

export { CreateNew };
