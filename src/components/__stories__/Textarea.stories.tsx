import { cn } from "../../lib/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../textarea";
import { HELP_TEXT, MAX_LENGTH, SAMPLE_VALUE } from "./Textarea.shared";

const meta: Meta<typeof Textarea> = {
  title: "Custom Primitives/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real Textarea props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    rows: { control: "select", options: [2, 3, 4, 5, 6, 8] },
  },
};

export default meta;

/* Every state side by side (default, hover, focus, read-only, disabled, error,
   filled, required) has its own page under "Textarea/Variants" — see
   Textarea.variants.stories.tsx. */

/* ── Default — consolidated Default, With Value, With Error Message and
   Required into one controls-driven story. `value`, `help`, `error`,
   `counter` and `maxWidth` are story-only args that turn real props on and
   off (`defaultValue`, `labelHelpText`, `error`, `maxLength`). The demo
   remounts (via `key`) whenever a control changes. ── */

interface TextareaDemoProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  label?: string;
  placeholder?: string;
  value?: boolean;
  help?: boolean;
  counter?: boolean;
  rows?: number;
  autoGrow?: boolean;
  maxRows?: number;
  resizable?: boolean;
  maxWidth?: boolean;
}

function TextareaDemo({
  disabled = false,
  readonly = false,
  required = false,
  error = false,
  label = "Input Label",
  placeholder = "Placeholder",
  value = false,
  help = false,
  counter = true,
  rows = 4,
  autoGrow = false,
  maxRows = 10,
  resizable = true,
  maxWidth = false,
}: TextareaDemoProps) {
  return (
    <Textarea
      label={label || undefined}
      labelHelpText={help ? HELP_TEXT : undefined}
      placeholder={placeholder}
      defaultValue={value ? SAMPLE_VALUE : undefined}
      required={required}
      readonly={readonly}
      disabled={disabled}
      error={error ? "Required" : undefined}
      maxLength={counter ? MAX_LENGTH : undefined}
      rows={rows}
      autoGrow={autoGrow}
      maxRows={maxRows}
      // `Textarea` lets people drag its bottom edge to resize vertically and has
      // no prop to turn that off, so "Resizable" off hides the handle from here.
      className={cn(maxWidth && "min-w-[240px] max-w-[320px]", !resizable && "[&_textarea]:resize-none")}
    />
  );
}

type TextareaDemoStory = StoryObj<TextareaDemoProps>;

export const Default: TextareaDemoStory = {
  render: (args) => <TextareaDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Input Label",
    placeholder: "Placeholder",
    value: false,
    help: false,
    counter: true,
    rows: 4,
    autoGrow: false,
    maxRows: 10,
    resizable: true,
    maxWidth: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error",
        "Label", "Placeholder", "Value", "Help text", "Character counter",
        "Rows", "Auto-grow", "Max rows", "Resizable", "Max width",
        "disabled", "readonly", "required", "error",
        "label", "placeholder", "value", "help", "counter",
        "rows", "autoGrow", "maxRows", "resizable", "maxWidth",
      ],
      sort: "none",
    },
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the field and stops typing.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Locks the field and mutes the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows the red error style and a \"Required\" message under the field (`error`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field. Clear it for a field with no label.",
      table: { category: "Content", defaultValue: { summary: "Input Label" } },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: { category: "Content", defaultValue: { summary: "Placeholder" } },
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the field with sample text in it (`defaultValue`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    counter: {
      name: "Character counter",
      control: "boolean",
      description: "Limits the text to 100 characters and shows a counter beside the label (`maxLength`).",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    rows: {
      name: "Rows",
      control: "select",
      options: [2, 3, 4, 5, 6, 8],
      description: "How many lines of text are visible before it scrolls (`rows`).",
      table: { category: "Appearance", defaultValue: { summary: "4" } },
    },
    autoGrow: {
      name: "Auto-grow",
      control: "boolean",
      description: "The field gets taller as people type, starting at Rows and stopping at Max rows (`autoGrow`). The drag handle is hidden while on.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    maxRows: {
      name: "Max rows",
      control: { type: "number", min: 2, max: 20, step: 1 },
      description: "Tallest an auto-grow field gets before it scrolls (`maxRows`). Only applies with Auto-grow on.",
      if: { arg: "autoGrow", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "10" } },
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Lets people drag the bottom-right corner to make the field taller. Off removes the drag handle. Read-only and disabled fields never resize.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px. Off stretches it across its container.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
};
