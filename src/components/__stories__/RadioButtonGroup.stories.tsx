import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtonGroup } from "../radio-button-group";
import { FOUR_OPTIONS, DISABLED_OPTION_VALUES, ERROR_MESSAGE, HELP_TEXT } from "./RadioButtonGroup.shared";

const meta: Meta<typeof RadioButtonGroup> = {
  title: "Custom Primitives/Radio Button Group",
  component: RadioButtonGroup,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real RadioButtonGroup props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    required: { control: "boolean" },
    orientation: { control: "radio", options: ["vertical", "horizontal"] },
  },
};

export default meta;

/* Horizontal Responsive and every state side by side each have their own page
   under "Radio Button Group/Variants" — see
   RadioButtonGroup.variants.stories.tsx. */

/* ── Default — consolidated Basic Radio Button Group, Fully Disabled Group,
   Selectively Disabled Items, Vertical, Horizontal, With Error Message,
   Readonly Group and Required Group into one controls-driven story.
   `selected`, `helpText`, `error` and `disabledOptions` are story-only args:
   they set the initial selection and switch the real `labelHelpText`, `error`
   and per-option `disabled` props on and off. The group is uncontrolled, so
   the demo remounts (via `key`) whenever a control changes. ── */

interface RadioButtonGroupDemoProps {
  label?: string;
  selected?: "none" | "option1" | "option2" | "option3" | "option4";
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  disabledOptions?: boolean;
  helpText?: boolean;
  error?: boolean;
  orientation?: "vertical" | "horizontal";
}

function RadioButtonGroupDemo({
  label = "Input Label",
  selected = "option1",
  disabled = false,
  readonly = false,
  required = false,
  disabledOptions = false,
  helpText = false,
  error = false,
  orientation = "vertical",
}: RadioButtonGroupDemoProps) {
  return (
    <RadioButtonGroup
      label={label}
      name="radio-button-group-default-demo"
      options={FOUR_OPTIONS.map((o) => ({
        ...o,
        disabled: disabledOptions && DISABLED_OPTION_VALUES.includes(o.value),
      }))}
      defaultValue={selected === "none" ? undefined : selected}
      disabled={disabled}
      readonly={readonly}
      required={required}
      labelHelpText={helpText ? HELP_TEXT : undefined}
      error={error ? ERROR_MESSAGE : undefined}
      orientation={orientation}
    />
  );
}

type RadioButtonGroupDemoStory = StoryObj<RadioButtonGroupDemoProps>;

export const Default: RadioButtonGroupDemoStory = {
  render: (args) => <RadioButtonGroupDemo key={JSON.stringify(args)} {...args} />,
  args: {
    label: "Input Label",
    selected: "option1",
    disabled: false,
    readonly: false,
    required: false,
    disabledOptions: false,
    helpText: false,
    error: false,
    orientation: "vertical",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Selected option", "Disabled", "Read-only", "Required", "Disabled options",
        "Label", "Help text", "Error", "Orientation",
        "selected", "disabled", "readonly", "required", "disabledOptions",
        "label", "helpText", "error", "orientation",
      ],
      sort: "none",
    },
  },
  argTypes: {
    selected: {
      name: "Selected option",
      control: {
        type: "select",
        labels: { none: "None", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4" },
      },
      options: ["none", "option1", "option2", "option3", "option4"],
      description: "Which option starts selected (`defaultValue`). “None” leaves all unselected.",
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the whole group and dims the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Mutes the group and stops the selection from changing.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the group label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    disabledOptions: {
      name: "Disabled options",
      control: "boolean",
      description: "Disables options 2 and 4 only (each option’s own `disabled`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "The group label shown above the options.",
      table: { category: "Content", defaultValue: { summary: "Input Label" } },
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the group label (`labelHelpText`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows an error message under the group (`error`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Stacks the options in a column or lines them up in a row.",
      table: { category: "Appearance", defaultValue: { summary: "vertical" } },
    },
  },
};
