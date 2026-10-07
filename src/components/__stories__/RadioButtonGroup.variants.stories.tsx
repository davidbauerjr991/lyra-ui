import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtonGroup } from "../radio-button-group";
import { BASE_OPTIONS, FOUR_OPTIONS, DISABLED_OPTION_VALUES, ERROR_MESSAGE, HELP_TEXT } from "./RadioButtonGroup.shared";

/* One page per Radio Button Group variant, shown under
   "Radio Button Group/Variants" in the sidebar. Static references for design
   review; the interactive playground is Radio Button Group → Default.
   "!autodocs" keeps this folder from getting a second Docs page. */
const meta: Meta<typeof RadioButtonGroup> = {
  title: "Custom Primitives/Radio Button Group/Variants",
  component: RadioButtonGroup,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof RadioButtonGroup>;

/* ── Horizontal Responsive — a horizontal group that wraps onto a second row
   inside a narrow container. ── */
export const HorizontalResponsive: Story = {
  name: "Horizontal Responsive",
  render: () => (
    <div className="max-w-sm">
      <RadioButtonGroup
        label="Input Label"
        name="responsive"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ]}
        orientation="horizontal"
        defaultValue="option1"
        className="[&_.flex-row]:flex-wrap"
      />
    </div>
  ),
};

/* ── All States — default, selected, required, read-only, disabled, selectively
   disabled and error on one page (was All States, Fully Disabled Group,
   Selectively Disabled Items, Readonly Group, Required Group and With Error
   Message). ── */
export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-8">
      <RadioButtonGroup label="Default" name="s-default" options={BASE_OPTIONS} />
      <RadioButtonGroup label="Selected" name="s-selected" options={BASE_OPTIONS} defaultValue="option2" />
      <RadioButtonGroup label="Required" name="s-required" options={BASE_OPTIONS} required />
      <RadioButtonGroup
        label="Read-only"
        name="s-readonly"
        options={BASE_OPTIONS}
        defaultValue="option1"
        readonly
        labelHelpText={HELP_TEXT}
      />
      <RadioButtonGroup label="Disabled" name="s-disabled" options={BASE_OPTIONS} defaultValue="option1" disabled />
      <RadioButtonGroup
        label="Selectively disabled options"
        name="s-selective"
        options={FOUR_OPTIONS.map((o) => ({ ...o, disabled: DISABLED_OPTION_VALUES.includes(o.value) }))}
        defaultValue="option1"
      />
      <RadioButtonGroup label="Error" name="s-error" options={BASE_OPTIONS} error={ERROR_MESSAGE} />
    </div>
  ),
};

/* ── Keyboard — Tab into the group, then ←/→/↑/↓ move and select; Home and End
   select the first and last enabled option. Each option's focus ring wraps the
   radio and its label (keyboard only). ── */
export const Keyboard: Story = {
  name: "Keyboard",
  render: () => (
    <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab into a group, then press ←/→/↑/↓, Home or End.</p>
      <RadioButtonGroup label="Horizontal" name="kb-h" orientation="horizontal" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
      <RadioButtonGroup label="Vertical" name="kb-v" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
    </div>
  ),
};
