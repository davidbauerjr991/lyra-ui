import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Popover } from "./popover";
import { Button } from "./button";
import { Menu, type MenuEntry } from "./menu";
import { SearchInput } from "./search-input";
import { FavoriteButton } from "./favorite-button";
import { Label } from "./label";

/* ── DispositionSelect ──
   Purpose-built replacement for a plain `Select` on the Outcome popover's
   "Disposition code" field (`ChannelOutcomeConfig.dispositionOptions` in
   channel-row.tsx, and `TranscriptSessionSeparator`'s own identical field in
   `AgentNextGenPage.tsx`) — per explicit request, a real contact center's
   disposition list (now 25 entries, see each consumer's own option-list
   const) is too long and too undifferentiated to scan as one flat
   alphabetical list, so this groups them into named sections (Resolution,
   Escalation, Transfer, etc. — whatever `category` each `DispositionOption`
   carries) and lets the agent star their most-used codes into a "Favorites"
   section pinned above the rest, exactly like `AgentProfile`'s own status
   dropdown already does for its 17 statuses (agent-profile.tsx) — same
   Popover + searchable `Menu` + `FavoriteButton`-per-row composition, reused
   here rather than reinvented, just keyed on `category` instead of a fixed
   Favorites/All-Codes split.

   `Select` itself can't do this: its single-select mode is a flat
   Radix-backed listbox with no concept of section headers or a
   per-row-custom-element slot for the favorite star (see select.tsx's own
   top comment on why `Menu`, not `Select`, already backs this popover's
   "Status" field for its colored-dot rows) — same reasoning extends here.

   Favorites are local, in-memory UI state (a `Set<string>` of disposition
   `value`s), not lifted to the consumer or persisted anywhere — same scope
   `AgentProfile`'s own `favoriteStatuses` has. Each `DispositionSelect`
   instance (one per open Outcome popover) keeps its own independent set,
   matching `useOutcomePopoverState`'s own "one popover instance, own local
   state" pattern in channel-row.tsx. */

export interface DispositionOption {
  /** Unique value */
  value: string;
  /** Display label */
  label: string;
  /** Section this option groups under (e.g. "Resolution", "Escalation") —
   *  drives the `Menu` section headers below, in first-seen order. */
  category: string;
}

export interface DispositionSelectProps {
  /** Label text displayed above the field (default: "Disposition code"). */
  label?: string;
  options: DispositionOption[];
  value: string;
  onValueChange: (value: string) => void;
  /** Override the dropdown's z-index (and, if needed, width) class — same
   *  nested-popover escape hatch `Select`'s own `dropdownClassName` prop
   *  provides (see CONTRIBUTING.md §4/§5), needed here for the same reason:
   *  this field's own popover is nested inside the "Log Outcome" popover,
   *  which may itself be nested inside another (e.g. `ChannelTab`'s
   *  kebab-triggered version). */
  dropdownClassName?: string;
  className?: string;
}

const DispositionSelect = React.forwardRef<HTMLDivElement, DispositionSelectProps>(
  ({ label = "Disposition code", options, value, onValueChange, dropdownClassName, className }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [favorites, setFavorites] = React.useState<Set<string>>(new Set());
    const contentRef = React.useRef<HTMLDivElement>(null);

    // Clear search when the popover closes — same reset `AgentProfile`'s
    // own status search performs on close.
    React.useEffect(() => {
      if (!open) setSearch("");
    }, [open]);

    const toggleFavorite = (v: string) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(v)) next.delete(v);
        else next.add(v);
        return next;
      });
    };

    const filtered = search.trim()
      ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
      : options;

    const favoriteList = filtered.filter((o) => favorites.has(o.value));
    // First-seen order, not alphabetical — lets a consumer control section
    // order simply by how it orders `options`.
    const categories: string[] = [];
    for (const o of filtered) {
      if (!categories.includes(o.category)) categories.push(o.category);
    }

    const rightElement = (o: DispositionOption) => (
      <FavoriteButton
        favorited={favorites.has(o.value)}
        onClick={() => toggleFavorite(o.value)}
        label={o.label}
        placement="left"
        // Menu's own item root is already a real <button> — see
        // `AgentProfile`'s identical `favoriteRightElement` for why this
        // renders as a <span role="button"> instead of nesting a second one.
        as="span"
        hoverGroup="item"
        className="h-6 w-6"
        // This tooltip's trigger lives inside the dropdown panel itself
        // (whatever z-tier `dropdownClassName` puts that at, per consumer —
        // channel-row.tsx's own nested-popover callers currently go up to
        // `z-[10005]`), so it needs to clear that, not match it. `10010` is
        // comfortably above every tier CONTRIBUTING.md §5 documents today —
        // same "just go higher than anything nested here could need" logic
        // `AgentProfile`'s own status-menu favorite tooltip uses (`z-[10002]`
        // there, one tier above ITS panel's `z-[10001]`).
        tooltipClassName="z-[10010]"
      />
    );

    const toMenuEntry = (o: DispositionOption, idPrefix = ""): MenuEntry => ({
      id: `${idPrefix}${o.value}`,
      label: o.label,
      active: value === o.value,
      onClick: () => {
        onValueChange(o.value);
        setOpen(false);
      },
      rightElement: rightElement(o),
    });

    const items: MenuEntry[] = [
      ...(favoriteList.length > 0
        ? [
            { sectionLabel: "Favorites" } as MenuEntry,
            ...favoriteList.map((o) => toMenuEntry(o, "favorite-")),
            "separator" as const,
          ]
        : []),
      ...(filtered.length === 0
        ? [
            {
              id: "_no-results",
              label: "No matching dispositions",
              disabled: true,
            } as MenuEntry,
          ]
        : categories.flatMap((category): MenuEntry[] => [
            { sectionLabel: category },
            ...filtered.filter((o) => o.category === category).map((o) => toMenuEntry(o)),
          ])),
    ];

    const selectedLabel = options.find((o) => o.value === value)?.label ?? value;

    return (
      <div ref={ref} className={className}>
        {label && <Label label={label} className="mb-1.5" />}
        <Popover
          ref={contentRef}
          open={open}
          onOpenChange={setOpen}
          placement="bottom"
          align="start"
          className={cn("z-[10005] w-[var(--radix-popover-trigger-width)]", dropdownClassName)}
          bodyPadding={false}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            setTimeout(() => contentRef.current?.querySelector<HTMLInputElement>("input")?.focus(), 0);
          }}
          content={
            <div
              className="flex flex-col"
              style={{ maxHeight: "min(360px, var(--radix-popper-available-height, 360px))" }}
            >
              <div className="px-3 py-2.5 border-b border-lyra-border-subtle flex-shrink-0">
                <SearchInput
                  placeholder="Search dispositions"
                  value={search}
                  onValueChange={setSearch}
                />
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                <Menu bare items={items} />
              </div>
            </div>
          }
        >
          <Button
            variant="outline"
            aria-haspopup="menu"
            aria-expanded={open}
            className="h-9 w-full justify-between border-lyra-border-strong bg-lyra-bg-field font-normal text-lyra-fg-default hover:bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral"
          >
            <span className="truncate">{selectedLabel}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-lyra-fg-secondary transition-transform",
                open && "rotate-180"
              )}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Button>
        </Popover>
      </div>
    );
  }
);
DispositionSelect.displayName = "DispositionSelect";

export { DispositionSelect };
