import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail } from "lucide-react";
import { Input } from "../input";
import { Label } from "../label";
import { Separator } from "../separator";
import { PlaceholderButtons } from "./Input.shared";

/* One page per Input variant, shown under "Input/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Input → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Input> = {
  title: "Custom Primitives/Input/Variants",
  component: Input,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Input>;

/* ── All Variants — every state in one column (was All States, Filled,
   Disabled, Readonly and Error). ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Default" placeholder="Text" />
      <Input label="Filled" defaultValue="Text" />
      <Input label="Disabled" disabled placeholder="Text" />
      <Input label="Read-only" readonly value="Read-only value" />
      <Input label="Error" defaultValue="Text" error="Required" />
      <Input label="With icons" placeholder="Search" startIcon={<Search className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />} endIcon={<Mail className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />} />
      <Input label="Small" size="sm" placeholder="Text" />
    </div>
  ),
};

/* ── Label Only — for plain display values, use `Label`'s `supportingText`
   instead of `readonly`: `readonly` still draws a (locked) input box, which
   implies a control that could be unlocked. ── */
export const LabelOnly: Story = {
  name: "Label Only",
  render: () => (
    <div className="w-72">
      <Label label="Input Label" supportingText="Read-only value" />
    </div>
  ),
};

/* ── Label With Buttons — action content instead of a value: the real `Label`
   (no `supportingText`, no `readonly`) with button(s) directly below. ── */
export const LabelWithButtons: Story = {
  name: "Label With Buttons",
  render: () => (
    <div className="flex flex-col gap-0 w-72">
      <Label label="Campaign State" />
      <div className="flex items-center gap-0.5">
        <PlaceholderButtons />
      </div>
    </div>
  ),
};

/* ── Label Horizontal With Separator — label left, value right, then a rule,
   for a stack of detail rows that each need their own divider. ── */
export const LabelHorizontalWithSeparator: Story = {
  name: "Label Horizontal With Separator",
  render: () => (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <Label label="Agent Name" />
        <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
      </div>
      <Separator />
    </div>
  ),
};

/* ── Character counter — `showCount` with `maxLength` shows a live count above
   the field, like Textarea. Typing stops at the limit; the count turns red
   once it's reached. For password or search fields use PasswordInput or
   SearchInput instead of Input. ── */
export const CharacterCounter: Story = {
  name: "Character Counter",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Display name" maxLength={20} showCount defaultValue="Sarah" />
      <Input label="At the limit" maxLength={10} showCount defaultValue="0123456789" />
      <Input placeholder="No label, with counter" maxLength={30} showCount />
    </div>
  ),
};
