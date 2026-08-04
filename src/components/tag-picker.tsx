import * as React from "react";
import { Tags } from "lucide-react";
import { ActionIconButton, type ActionIconButtonProps } from "./actions";
import { Popover, type PopoverPlacement } from "./popover";
import { Checkbox } from "./checkbox";
import { type TagVariant } from "./tag";
import { cn } from "../lib/utils";

/* ── TagPicker ──
   Extracted out of `agent-next-gen-v1`'s conversation transcript (where a
   message's hover toolbar has an "Add tag" action) into its own atom, per
   CONTRIBUTING.md §0/"Composition over reimplementation".

   Row list + checkbox markup below is a deliberate copy of `Select`'s own
   `multiple` mode listbox (select.tsx — accent bar, `Checkbox`, truncated
   label, "no results" state, same class names), not a fresh design — per
   explicit request, this needed to become a real checkbox multi-select
   ("dropdown like this" — screenshot of `Select`'s own multi-select
   result), not the single-click pill-row list this had before. It's a
   copy rather than `TagPicker` literally rendering `<Select multiple>`
   underneath for one hard reason: `Select`'s own open/closed state is
   fully internal (no controlled `open` prop, only a fire-and-forget
   `onOpenChange` callback — see select.tsx's own `const [open, setOpen] =
   useState(false)`), but this trigger's open state has to stay externally
   controlled here — the message hover toolbar keeps at most one message's
   picker open at a time (`tagPickerOpenId` in AgentNextGenPage.tsx) and
   uses that same open flag to force the toolbar itself visible while the
   popover is open. `Popover`'s own `open`/`onOpenChange` (used directly
   below) support exactly that; `Select` doesn't expose a way in. If a
   later need comes up for `Select` to support a controlled `open` prop
   too, this could go back to wrapping it directly instead of duplicating
   its row markup — flagged here so that migration is easy to spot.

   Rows show plain text labels only, no color swatch (matching the
   reference screenshot exactly) — the actual colored `Tag` pill per
   applied label still renders, just in the caller's own "applied tags"
   row below the message, same as before; this popover's own job is only
   picking which labels are checked. */

interface TagPickerOption {
  /** Tag label */
  label: string;
  /** Tag color/variant — see `TagVariant` (tag.tsx). Not shown inside this
   *  picker's own rows (see top doc comment) — only used by the caller's
   *  own applied-tags pill row, and echoed back on `onSelect` so callers
   *  don't need a second lookup by label. */
  variant: TagVariant;
}

interface TagPickerProps {
  /** Every tag option that could be offered — always all shown, each as
   *  its own checkbox row (checked when in `appliedLabels`); unlike the
   *  old pill-grid version, applied ones stay in the list rather than
   *  disappearing from it. */
  options: TagPickerOption[];
  /** Currently-applied tag labels (checked rows). */
  appliedLabels?: string[];
  /** Fires once for each tag newly checked in a single toggle. */
  onSelect: (option: TagPickerOption) => void;
  /** Fires once for each tag newly unchecked in a single toggle. */
  onDeselect: (label: string) => void;
  /** Controlled open state — same convention as every other Popover-based
   *  trigger in this library. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Popover placement (default: "bottom"). */
  placement?: PopoverPlacement;
  /** Trigger button size — see `ActionIconButton`'s own `size` scale
   *  (default: "sm", matching the reference usage's compact message-hover
   *  toolbar). */
  triggerSize?: ActionIconButtonProps["size"];
  /** Trigger tooltip/aria-label (default: "Add tag"). */
  triggerLabel?: string;
  /** Additional className on the trigger button. */
  className?: string;
}

const TagPicker = React.forwardRef<HTMLButtonElement, TagPickerProps>(
  (
    {
      options,
      appliedLabels = [],
      onSelect,
      onDeselect,
      open,
      onOpenChange,
      placement = "bottom",
      triggerSize = "sm",
      triggerLabel = "Add tag",
      className,
    },
    ref
  ) => {
    const toggle = (option: TagPickerOption) => {
      if (appliedLabels.includes(option.label)) onDeselect(option.label);
      else onSelect(option);
    };

    return (
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        placement={placement}
        sideOffset={4}
        showArrow={false}
        // Full-bleed row list (own `p-1` inset for the hover background,
        // matching `Select`'s own multi-select listbox) — Popover's
        // default 16px body inset would push every row in further, same
        // reasoning `Select`'s own multi-select `Popover` usage documents.
        bodyPadding={false}
        className="w-[220px]"
        // Radix's default behavior returns focus to the trigger
        // (`ActionIconButton` below) when the popover closes. That trigger
        // is wrapped in a `Tooltip` (Button's own `isIconVariant && title`
        // handling), and Tooltip opens on focus as well as hover — so
        // without this, closing the popover hands focus back to the icon
        // and pops the "Add tag" tooltip right back open with no real
        // hover intent behind it, left dangling until something else
        // happens to steal focus. Suppressing the auto-focus-return keeps
        // the close action from re-triggering the tooltip; the picker was
        // opened by a click, not keyboard nav, so there's no keyboard-focus
        // chain here worth preserving.
        onCloseAutoFocus={(e) => e.preventDefault()}
        content={
          <div
            role="listbox"
            aria-label={triggerLabel}
            aria-multiselectable
            className="flex max-h-[280px] flex-col overflow-y-auto lyra-scrollbar-hide p-1"
          >
            {options.length === 0 && (
              <div className="px-3 py-2 lyra-body-sm text-lyra-fg-secondary">No tags available</div>
            )}
            {options.map((option) => {
              const isSelected = appliedLabels.includes(option.label);
              return (
                <button
                  key={option.label}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => toggle(option)}
                  className={cn(
                    "group/item relative flex w-full items-center gap-2.5 rounded-lyra-sm px-3 py-2.5 lyra-body-md text-left transition-colors",
                    "hover:bg-lyra-state-hover active:bg-lyra-state-pressed",
                    "focus:outline-none focus-visible:bg-lyra-state-hover"
                  )}
                >
                  {/* Left accent bar — visible on hover/press, matching
                      `Select`'s own multi-select row treatment (itself
                      matching `Menu`'s row template). Plain buttons here
                      (not Radix `Select.Item`/`Menu`), so reproduced by
                      hand, same as `Select`'s own copy. */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-lyra-fg-default opacity-0 transition-opacity group-hover/item:opacity-100 group-active/item:opacity-100"
                  />
                  <Checkbox checked={isSelected} tabIndex={-1} className="pointer-events-none" />
                  <span className="min-w-0 flex-1 truncate text-lyra-fg-default">{option.label}</span>
                </button>
              );
            })}
          </div>
        }
      >
        <ActionIconButton ref={ref} size={triggerSize} title={triggerLabel} className={className}>
          <Tags className="h-3.5 w-3.5" strokeWidth={1.5} />
        </ActionIconButton>
      </Popover>
    );
  }
);
TagPicker.displayName = "TagPicker";

export { TagPicker };
export type { TagPickerOption, TagPickerProps };
