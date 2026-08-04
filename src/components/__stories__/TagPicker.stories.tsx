import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TagPicker, type TagPickerOption } from "../tag-picker";
import { Tag } from "../tag";

const meta: Meta<typeof TagPicker> = {
  title: "Custom Primitives/TagPicker",
  component: TagPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    triggerSize: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    onDeselect: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TagPicker>;

// Same variant set + Title-Case label pairing as `Tag.stories.tsx`'s own
// `Variants`/`PillShape`/`HoverState` demos ("Default", "Success", ...) —
// matching the source component's own canonical demo tags here rather than
// inventing a business-specific vocabulary (a consuming app's real tag set,
// like `agent-next-gen-v1`'s Complain/Help/Praise/Share/Billing, belongs in
// that app, not in lyra-ui's own generic component story).
const DEMO_OPTIONS: TagPickerOption[] = [
  { label: "Default", variant: "default" },
  { label: "Success", variant: "success" },
  { label: "Warning", variant: "warning" },
  { label: "Critical", variant: "critical" },
  { label: "Info", variant: "info" },
  { label: "Neutral", variant: "neutral" },
];

/* Stand-in for a message/row that owns its own applied-tags list — same
   shape as `agent-next-gen-v1`'s conversation transcript, the reference
   usage this component was extracted from (a message bubble's hover
   toolbar). */
function TagPickerDemo() {
  const [open, setOpen] = useState(false);
  const [appliedLabels, setAppliedLabels] = useState<string[]>(["Success"]);

  return (
    <div className="flex w-80 flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle p-4">
      <div className="flex items-center justify-between">
        <span className="lyra-body-md text-lyra-fg-default">Customer message</span>
        <TagPicker
          options={DEMO_OPTIONS}
          appliedLabels={appliedLabels}
          open={open}
          onOpenChange={setOpen}
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

export const Default: Story = {
  name: "Default",
  render: () => <TagPickerDemo />,
};

function AllAppliedDemo() {
  const [open, setOpen] = useState(true);
  // Every option already checked — unlike the old pill-grid version (which
  // had a dedicated "everything's already added" empty state once nothing
  // was left to offer), a checkbox multi-select just shows every row
  // checked; there's no separate empty state to demonstrate anymore since
  // options never disappear from the list.
  const [appliedLabels, setAppliedLabels] = useState<string[]>(DEMO_OPTIONS.map((o) => o.label));
  return (
    <div className="flex w-80 flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle p-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">Every option already applied — all rows checked</p>
      <TagPicker
        options={DEMO_OPTIONS}
        appliedLabels={appliedLabels}
        open={open}
        onOpenChange={setOpen}
        onSelect={(option) => setAppliedLabels((prev) => [...prev, option.label])}
        onDeselect={(label) => setAppliedLabels((prev) => prev.filter((l) => l !== label))}
      />
    </div>
  );
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Default — some tags already applied, checked in the list</p>
        <TagPickerDemo />
      </div>
      <div>
        <AllAppliedDemo />
      </div>
    </div>
  ),
};
