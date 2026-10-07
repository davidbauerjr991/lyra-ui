import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "../checkbox-group";
import { baseOptions, desktopTypeOptions, READONLY_HELP_TEXT, REQUIRED_ERROR } from "./CheckboxGroup.shared";

/* One page per Checkbox Group variant, shown under "Checkbox Group/Variants"
   in the sidebar. Static references for design review; the interactive
   playground is Checkbox Group → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof CheckboxGroup> = {
  title: "Custom Primitives/Checkbox Group/Variants",
  component: CheckboxGroup,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const WithOptions: Story = {
  name: "With Options",
  render: () => (
    <CheckboxGroup
      label="Desktop Types"
      labelHelpText="Select all desktop types that apply to this role."
      required
      options={desktopTypeOptions}
      defaultValues={["back-office"]}
    />
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckboxGroup label="Default" options={baseOptions} />
      <CheckboxGroup
        label="With Selection"
        options={baseOptions}
        defaultValues={["option-1", "option-2"]}
      />
      <CheckboxGroup label="Required" options={baseOptions} required />
      <CheckboxGroup
        label="Readonly"
        options={baseOptions}
        defaultValues={["option-2"]}
        readonly
        labelHelpText={READONLY_HELP_TEXT}
      />
      <CheckboxGroup
        label="Disabled"
        options={baseOptions}
        defaultValues={["option-1"]}
        disabled
      />
      <CheckboxGroup label="Error" options={baseOptions} error={REQUIRED_ERROR} />
    </div>
  ),
};

/* Keyboard focus — Tab into the group, then use Tab/Shift+Tab to move between
   options. Each option rings its box and label together (keyboard focus only). */
export const KeyboardFocus: Story = {
  name: "Keyboard Focus",
  render: () => (
    <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to move through the options.</p>
      <CheckboxGroup label="Editable" options={baseOptions} defaultValues={["option-1"]} />
      <CheckboxGroup label="Read-only" options={baseOptions} defaultValues={["option-2"]} readonly labelHelpText={READONLY_HELP_TEXT} />
    </div>
  ),
};
