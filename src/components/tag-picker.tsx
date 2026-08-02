import * as React from "react";
import { Tags } from "lucide-react";
import { ActionIconButton, type ActionIconButtonProps } from "./actions";
import { Popover, type PopoverPlacement } from "./popover";
import { PanelHeader } from "./panel-header";
import { Tag, type TagVariant } from "./tag";

/* ── TagPicker ──
   Extracted out of `agent-next-gen-v1`'s conversation transcript (where a
   message's hover toolbar has an "Add tag" action) into its own atom, per
   CONTRIBUTING.md §0/"Composition over reimplementation" — the trigger
   (`ActionIconButton`) and the flyout shell (`Popover`) were already real
   lyra-ui components there; the only hand-rolled piece was each row inside
   the flyout, a `<button>` wrapping a colored `Tag` pill.

   This is deliberately a `Popover` with custom content, not a `Menu` —
   `Menu`'s row template is icon + label text + trailing element, with its
   own baked-in hover background (gray/blue + accent bar). A tag-picker row
   IS just a colored pill, not a labeled row with a leading icon; forcing it
   through `Menu` would mean either hacking the pill into the `icon` slot
   with an empty label (and still fighting `Menu`'s own row hover
   background underneath it) or adding a bespoke "no default hover, custom
   content" escape hatch to `MenuItemDef` for a shape that isn't really a
   menu to begin with. `Popover` + custom content is exactly the pattern
   CONTRIBUTING.md's own component table already prescribes for "arbitrary
   custom content in a flyout," so this is the correct primitive, not a
   workaround. */

interface TagPickerOption {
  /** Tag label */
  label: string;
  /** Tag color/variant — see `TagVariant` (tag.tsx) */
  variant: TagVariant;
}

interface TagPickerProps {
  /** Every tag option that could be offered. */
  options: TagPickerOption[];
  /** Labels already applied elsewhere (e.g. already on this message) —
   *  filtered out of the offered list so the same tag can't be picked
   *  twice. Matched by `label`, same as the reference usage this was
   *  extracted from. */
  appliedLabels?: string[];
  /**
   * Fires when a tag option is picked. The popover is left open afterward
   * (matching the reference usage this was extracted from) so more than
   * one tag can be added in a single pass — close it yourself via
   * `onOpenChange(false)` inside this callback if a single-pick-then-close
   * flow is wanted instead.
   */
  onSelect: (option: TagPickerOption) => void;
  /** Controlled open state — same convention as every other Popover-based
   *  trigger in this library. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Popover placement (default: "bottom"). */
  placement?: PopoverPlacement;
  /** Popover header title (default: "Add tag"). */
  title?: string;
  /** Shown once every option in `options` is already in `appliedLabels`
   *  (default: "All tags added"). */
  emptyLabel?: string;
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
      open,
      onOpenChange,
      placement = "bottom",
      title = "Add tag",
      emptyLabel = "All tags added",
      triggerSize = "sm",
      triggerLabel = "Add tag",
      className,
    },
    ref
  ) => {
    const available = options.filter((opt) => !appliedLabels.includes(opt.label));

    return (
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        placement={placement}
        // Radix's default behavior returns focus to the trigger
        // (`ActionIconButton` below) when the popover closes. That trigger
        // is wrapped in a `Tooltip` (Button's own `isIconVariant && title`
        // handling), and Tooltip opens on focus as well as hover — so
        // without this, closing the popover (e.g. its "×" button) hands
        // focus back to the icon and pops the "Add tag" tooltip right back
        // open with no real hover intent behind it, left dangling until
        // something else happens to steal focus. Suppressing the
        // auto-focus-return keeps the close action from re-triggering the
        // tooltip; the picker was opened by a click, not keyboard nav, so
        // there's no keyboard-focus chain here worth preserving.
        onCloseAutoFocus={(e) => e.preventDefault()}
        header={
          <PanelHeader
            title={title}
            bordered={false}
            className="px-5 pb-0"
            onClose={() => onOpenChange(false)}
          />
        }
        content={
          <div className="flex flex-wrap items-center gap-2 py-2">
            {available.map((opt) => (
              <button
                key={opt.label}
                type="button"
                className="flex items-center rounded-lyra-sm text-left"
                onClick={() => onSelect(opt)}
              >
                {/* `Tag` now reacts to hover by default (tag.tsx) — no
                    per-row `group`/`group-hover:brightness-*` override
                    needed here anymore, the pill handles its own hover
                    feedback. */}
                <Tag label={opt.label} variant={opt.variant} shape="pill" />
              </button>
            ))}
            {available.length === 0 && (
              <span className="px-1 py-1 lyra-body-sm text-lyra-fg-secondary">{emptyLabel}</span>
            )}
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
