import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Input } from "../input";
import { Select } from "../select";
import {
  HELP_TEXT,
  SUPPORTING_TEXT,
  HORIZONTAL_VALUE,
  typeOptions,
  statusOptions,
  regionOptions,
} from "./Label.shared";

/* One page per Label variant, shown under "Label/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Label → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Label> = {
  title: "Headless Primitives/Label/Variants",
  component: Label,
  tags: ["!autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const WithSelect: Story = {
  name: "With Select",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Select
        label="Desktop type"
        labelHelpText="Choose the desktop layout for this role."
        required
        placeholder="Select a type..."
        options={typeOptions}
      />
      <Select label="Status" disabled placeholder="Select status..." options={statusOptions} />
      <Select label="Region" readonly placeholder="Select region..." options={regionOptions} />
    </div>
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      {/* Default */}
      <div className="flex flex-col gap-1">
        <Label label="Default" labelFor="s-default" />
        <Input id="s-default" placeholder="Default state" />
      </div>

      {/* With help text */}
      <div className="flex flex-col gap-1">
        <Label label="With help text" labelFor="s-help" labelHelpText={HELP_TEXT} />
        <Input id="s-help" placeholder="With help text" />
      </div>

      {/* Required */}
      <div className="flex flex-col gap-1">
        <Label label="Required" labelFor="s-required" required />
        <Input id="s-required" placeholder="Required field" required />
      </div>

      {/* Required + help */}
      <div className="flex flex-col gap-1">
        <Label
          label="Required with help"
          labelFor="s-req-help"
          required
          labelHelpText="This field is required and has additional context."
        />
        <Input id="s-req-help" placeholder="Required with help" required />
      </div>

      {/* Supporting text */}
      <div className="flex flex-col gap-1">
        <Label
          label="With supporting text"
          labelFor="s-supporting"
          required
          labelHelpText={HELP_TEXT}
          supportingText={SUPPORTING_TEXT}
        />
        <Input id="s-supporting" placeholder="Enter value..." />
      </div>

      {/* Disabled */}
      <div className="flex flex-col gap-1">
        <Label label="Disabled" labelFor="s-disabled" required disabled />
        <Input id="s-disabled" placeholder="Disabled" disabled />
      </div>

      {/* Readonly */}
      <div className="flex flex-col gap-1">
        <Label
          label="Readonly"
          labelFor="s-readonly"
          required
          labelHelpText="This value cannot be edited."
          readonly
        />
        <Input id="s-readonly" value="Read-only value" readonly />
      </div>

      {/* Horizontal */}
      <div className="flex items-center justify-between">
        <Label label="Horizontal" />
        <span className="lyra-body-md text-lyra-fg-secondary">{HORIZONTAL_VALUE}</span>
      </div>
    </div>
  ),
};

/* ── Keyboard help — the help icon is a real button. Tab to it and the tooltip
   opens (Escape closes it); a screen reader announces "More info about …" and
   reads the help text with the field. Input, Textarea and Select wire this up
   for you. ── */
export const KeyboardHelp: Story = {
  name: "Keyboard Help",
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-6 w-72">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to reach each help icon.</p>
      <Input label="Display name" labelHelpText={HELP_TEXT} placeholder="Enter value..." />
      <Select label="Region" labelHelpText={HELP_TEXT} options={regionOptions} />
    </div>
  ),
};
