/* Shared example data for TagPicker.stories.tsx (Default playground) and
   TagPicker.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { useState } from "react";
import { TagPicker, type TagPickerOption } from "../tag-picker";
import { Tag } from "../tag";

// Same variant set + Title-Case label pairing as `Tag.stories.tsx`'s own
// `Variants`/`HoverState` demos ("Default", "Success", ...) — matching the
// source component's own canonical demo tags here rather than inventing a
// business-specific vocabulary (a consuming app's real tag set, like
// `agent-next-gen-v1`'s Complain/Help/Praise/Share/Billing, belongs in that
// app, not in lyra-ui's own generic component story).
export const DEMO_OPTIONS: TagPickerOption[] = [
  { label: "Default", variant: "default" },
  { label: "Success", variant: "success" },
  { label: "Warning", variant: "warning" },
  { label: "Critical", variant: "critical" },
  { label: "Info", variant: "info" },
  { label: "Neutral", variant: "neutral" },
];

export type StartingApplied = "none" | "some" | "all";

export const startingLabels = (s: StartingApplied): string[] =>
  s === "all" ? DEMO_OPTIONS.map((o) => o.label) : s === "some" ? ["Success"] : [];

/* Stand-in for a message/row that owns its own applied-tags list — same
   shape as `agent-next-gen-v1`'s conversation transcript, the reference
   usage this component was extracted from (a message bubble's hover
   toolbar). */
export function TagPickerDemo({
  startOpen = false,
  startingApplied = "some",
  placement,
  triggerSize,
  triggerLabel,
}: {
  startOpen?: boolean;
  startingApplied?: StartingApplied;
  placement?: "top" | "bottom" | "left" | "right";
  triggerSize?: "sm" | "default" | "lg" | "xl";
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(startOpen);
  const [appliedLabels, setAppliedLabels] = useState<string[]>(startingLabels(startingApplied));

  return (
    <div className="flex w-80 flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle p-4">
      <div className="flex items-center justify-between">
        <span className="lyra-body-md text-lyra-fg-default">Customer message</span>
        <TagPicker
          options={DEMO_OPTIONS}
          appliedLabels={appliedLabels}
          open={open}
          onOpenChange={setOpen}
          placement={placement}
          triggerSize={triggerSize}
          triggerLabel={triggerLabel || undefined}
          onSelect={(option) => setAppliedLabels((prev) => [...prev, option.label])}
          onDeselect={(label) => setAppliedLabels((prev) => prev.filter((l) => l !== label))}
        />
      </div>
      {appliedLabels.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {appliedLabels.map((label) => {
            const option = DEMO_OPTIONS.find((o) => o.label === label)!;
            return (
              <Tag
                key={label}
                label={label}
                variant={option.variant}
                shape="pill"
                onRemove={() => setAppliedLabels((prev) => prev.filter((l) => l !== label))}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
