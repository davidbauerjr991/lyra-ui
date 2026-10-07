import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "../checkbox-group";
import {
  baseOptions,
  GROUP_LABEL,
  READONLY_HELP_TEXT,
  REQUIRED_ERROR,
  SECONDARY_TEXT,
  LONG_TEXT,
} from "./CheckboxGroup.shared";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Custom Primitives/Checkbox Group",
  component: CheckboxGroup,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real CheckboxGroup props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* A group with its own options list and every state side by side each have
   their own page under "Checkbox Group/Variants" — see
   CheckboxGroup.variants.stories.tsx. */

/* ── Default — consolidated Group Checkbox, Group Selected, Group Readonly,
   Group Disabled, Group Required and Horizontal Group into one
   controls-driven story (previously six separate stories). Fully
   controlled, so clicking an option really toggles it. Turning "Required" on
   shows the old Required story's error whenever nothing is selected. ── */

interface CheckboxGroupDemoProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  selected?: string[];
  secondaryText?: boolean;
  longText?: boolean;
  orientation?: "vertical" | "horizontal";
}

function CheckboxGroupDemo({
  disabled = false,
  readonly = false,
  required = false,
  selected = [],
  secondaryText = false,
  longText = false,
  orientation = "vertical",
}: CheckboxGroupDemoProps) {
  const [values, setValues] = useState<string[]>(selected);
  const groupProps = {
    label: GROUP_LABEL,
    labelHelpText: readonly ? READONLY_HELP_TEXT : undefined,
    options: baseOptions.map((o, i) => ({
      ...o,
      label: longText ? LONG_TEXT : `${o.label} ${i + 1}`,
      secondaryText: secondaryText ? SECONDARY_TEXT : undefined,
    })),
    values,
    onChange: setValues,
    disabled,
    readonly,
    required,
    direction: orientation,
    error: required && values.length === 0 ? REQUIRED_ERROR : undefined,
  };

  return <CheckboxGroup {...groupProps} />;
}

type CheckboxGroupDemoStory = StoryObj<CheckboxGroupDemoProps>;

export const Default: CheckboxGroupDemoStory = {
  args: {
    disabled: false,
    readonly: false,
    required: false,
    selected: [],
    secondaryText: false,
    longText: false,
    orientation: "vertical",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Selected options", "Secondary text", "Long text", "Orientation",
        "disabled", "readonly", "required", "selected", "secondaryText", "longText", "orientation",
      ],
      sort: "none",
    },
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the whole group.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Keeps the current selection but blocks changes.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds an asterisk to the group label and an error while nothing is selected.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    selected: {
      name: "Selected options",
      control: "check",
      options: ["option-1", "option-2", "option-3"],
      labels: { "option-1": "Option 1", "option-2": "Option 2", "option-3": "Option 3" },
      description: "Which options start checked. Clicking an option toggles it.",
      table: { category: "Content", defaultValue: { summary: "none" } },
    },
    secondaryText: {
      name: "Secondary text",
      control: "boolean",
      description: "Supporting line under each option's label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    longText: {
      name: "Long text",
      control: "boolean",
      description: "Replaces every option's label with a long sentence, to show it wrapping.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["vertical", "horizontal"],
      labels: { vertical: "Vertical", horizontal: "Horizontal" },
      description: "Stack the options in a column or lay them out in a row.",
      table: { category: "Appearance", defaultValue: { summary: "vertical" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <CheckboxGroupDemo key={JSON.stringify(args)} {...args} />
  ),
};
