import { useId } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Input } from "../input";
import { HELP_TEXT, SUPPORTING_TEXT, HORIZONTAL_VALUE } from "./Label.shared";

const meta: Meta<typeof Label> = {
  title: "Headless Primitives/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  // Real Label props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
  },
};

export default meta;

/* A label with a Select and every state side by side each have their own page
   under "Label/Variants" — see Label.variants.stories.tsx. */

/* ── Default — consolidated Basic Label, Label With Help Text, Required
   Label, Disabled Label, Readonly Label, Label With Supporting Text and
   Horizontal into one controls-driven story (previously seven separate
   stories). `helpText`, `supportingText` and `layout` are story-only args:
   they turn the real `labelHelpText` / `supportingText` props on and off and
   pick the stacked (label above an input) or horizontal (label left, value
   right) layout. ── */

interface LabelDemoProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  helpText?: boolean;
  supportingText?: boolean;
  layout?: "stacked" | "horizontal";
  helpTextId?: string;
}

function LabelDemo({
  label = "Field label",
  required = false,
  disabled = false,
  readonly = false,
  helpText = false,
  supportingText = false,
  layout = "stacked",
  helpTextId = "",
}: LabelDemoProps) {
  const inputId = useId();
  const labelProps = {
    label,
    required,
    disabled,
    readonly,
    labelHelpText: helpText ? HELP_TEXT : undefined,
    supportingText: supportingText ? SUPPORTING_TEXT : undefined,
    helpTextId: helpTextId || undefined,
  };
  // The field points at the hidden help text (and supporting text) so a screen
  // reader reads them with it: `${labelFor}-help` unless an id is given.
  const describedBy =
    [
      helpText && !disabled ? helpTextId || `${inputId}-help` : null,
      supportingText && !disabled ? `${inputId}-supporting` : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  if (layout === "horizontal") {
    // Same value typography as `supportingText`, in a `justify-between` row.
    return (
      <div className="flex items-center justify-between w-72">
        <Label {...labelProps} />
        <span className="lyra-body-md text-lyra-fg-secondary">{HORIZONTAL_VALUE}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-72">
      <Label {...labelProps} labelFor={inputId} />
      <Input
        id={inputId}
        placeholder="Enter value..."
        aria-describedby={describedBy}
        required={required}
        disabled={disabled}
        readonly={readonly}
      />
    </div>
  );
}

type LabelDemoStory = StoryObj<LabelDemoProps>;

export const Default: LabelDemoStory = {
  args: {
    label: "Field label",
    required: false,
    disabled: false,
    readonly: false,
    helpText: false,
    supportingText: false,
    layout: "stacked",
    helpTextId: "",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Label", "Help text", "Supporting text", "Layout", "Help text id",
        "disabled", "readonly", "required", "label", "helpText", "supportingText", "layout", "helpTextId",
      ],
      sort: "none",
    },
  },
  argTypes: {
    helpTextId: {
      name: "Help text id",
      control: "text",
      description: "`id` of the hidden copy of the help text that the field points `aria-describedby` at (`helpTextId`). Blank uses `<labelFor>-help`. Turn on Help text first.",
      if: { arg: "helpText", truthy: true },
      table: { category: "Accessibility", defaultValue: { summary: "<labelFor>-help" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the label. Hides the required asterisk, help text and supporting text.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Mutes the label. Hides the required asterisk; help text stays.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "The label text.",
      table: { category: "Content", defaultValue: { summary: "Field label" } },
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    supportingText: {
      name: "Supporting text",
      control: "boolean",
      description: "Always-visible description under the label (`supportingText`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    layout: {
      name: "Layout",
      control: "radio",
      options: ["stacked", "horizontal"],
      labels: { stacked: "Stacked", horizontal: "Horizontal" },
      description: "Stacked puts the label above an input. Horizontal puts the label left and a value right.",
      table: { category: "Appearance", defaultValue: { summary: "stacked" } },
    },
  },
  render: (args) => <LabelDemo {...args} />,
};
