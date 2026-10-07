import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TagPicker } from "../tag-picker";
import { DEMO_OPTIONS, TagPickerDemo } from "./TagPicker.shared";

/* One page per TagPicker variant, shown under "TagPicker/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is TagPicker → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof TagPicker> = {
  title: "Custom Primitives/TagPicker/Variants",
  component: TagPicker,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof TagPicker>;

export const SomeApplied: Story = {
  name: "Some tags applied",
  render: () => (
    <div>
      <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">
        Some tags already applied, checked in the list
      </p>
      <TagPickerDemo />
    </div>
  ),
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

export const AllApplied: Story = {
  name: "Every option applied",
  render: () => <AllAppliedDemo />,
};
