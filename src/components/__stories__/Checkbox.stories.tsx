import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "../checkbox";
import { SAMPLE_LABEL, SECONDARY_TEXT, LONG_TEXT } from "./Checkbox.shared";

const meta: Meta<typeof Checkbox> = {
  title: "Headless Primitives/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real Checkbox props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

/* Every state side by side, the select-all pattern and secondary text each
   have their own page under "Checkbox/Variants" — see
   Checkbox.variants.stories.tsx. */

/* ── Default — consolidated Default, Checked, Indeterminate, Required,
   Readonly, Disabled, Disabled Checked and Disabled Indeterminate into one
   controls-driven story (previously eight separate stories). Fully
   controlled, so clicking the checkbox really toggles it (unless it's
   disabled or read-only). ── */

type CheckboxValue = "unchecked" | "checked" | "indeterminate";

interface CheckboxDemoProps {
  value?: CheckboxValue;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  label?: string;
  secondaryText?: boolean;
  longText?: boolean;
}

const toCheckedState = (value: CheckboxValue): CheckedState =>
  value === "indeterminate" ? "indeterminate" : value === "checked";

function CheckboxDemo({
  value = "unchecked",
  disabled = false,
  readonly = false,
  required = false,
  label = SAMPLE_LABEL,
  secondaryText = false,
  longText = false,
}: CheckboxDemoProps) {
  const [checked, setChecked] = useState<CheckedState>(toCheckedState(value));

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      disabled={disabled}
      readonly={readonly}
      required={required}
      label={longText ? LONG_TEXT : label || undefined}
      secondaryText={secondaryText ? SECONDARY_TEXT : undefined}
      aria-label={longText || label ? undefined : "Checkbox"}
    />
  );
}

type CheckboxDemoStory = StoryObj<CheckboxDemoProps>;

export const Default: CheckboxDemoStory = {
  args: {
    value: "unchecked",
    disabled: false,
    readonly: false,
    required: false,
    label: SAMPLE_LABEL,
    secondaryText: false,
    longText: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Value", "Disabled", "Read-only", "Required", "Label", "Secondary text", "Long text",
        "value", "disabled", "readonly", "required", "label", "secondaryText", "longText",
      ],
      sort: "none",
    },
  },
  argTypes: {
    value: {
      name: "Value",
      control: "radio",
      options: ["unchecked", "checked", "indeterminate"],
      labels: { unchecked: "Unchecked", checked: "Checked", indeterminate: "Indeterminate" },
      description: "Starting value. Clicking the checkbox toggles it.",
      table: { category: "Behavior", defaultValue: { summary: "unchecked" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the checkbox and label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Keeps the current value but blocks changes, muted rather than dimmed.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds an asterisk to the label. Needs a label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text beside the checkbox. Empty shows the checkbox alone.",
      table: { category: "Content", defaultValue: { summary: SAMPLE_LABEL } },
    },
    longText: {
      name: "Long text",
      control: "boolean",
      description: "Replaces the label with a long sentence, to show it wrapping.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    secondaryText: {
      name: "Secondary text",
      control: "boolean",
      description: "Supporting line under the label. Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <CheckboxDemo key={JSON.stringify(args)} {...args} />
  ),
};
