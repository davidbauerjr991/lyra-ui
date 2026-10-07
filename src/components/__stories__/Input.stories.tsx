import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail, X } from "lucide-react";
import { Input } from "../input";
import { Label } from "../label";
import { Separator } from "../separator";
import { Tooltip } from "../tooltip";
import { ErrorIcon } from "../icons/error-icon";
import { cn } from "../../lib/utils";
import { HELP_TEXT, PlaceholderButtons, type PlaceholderButtonSize, type PlaceholderButtonVariant } from "./Input.shared";

const meta: Meta<typeof Input> = {
  title: "Custom Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real Input props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md"] },
  },
};

export default meta;

/* Filled, Disabled, Read-only, Error, icons, sizes and the label-only / label-
   with-buttons / horizontal layouts have their own pages under
   "Input/Variants" — see Input.variants.stories.tsx. */

/* ── Default — consolidated Filled, Disabled, Readonly, Error, Label With
   Buttons and Label Horizontal With Separator into one controls-driven story.
   `value`, `help`, `error`, `startIcon`, `endIcon`, `labelOnly`, `vertical`, `withButtons`,
   `buttonsPosition`, `iconButtons` and `maxWidth` are story-only args. The
   demo remounts (via `key`) whenever a control changes. ── */

interface InputDemoProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  label?: string;
  placeholder?: string;
  value?: boolean;
  help?: boolean;
  size?: "sm" | "md";
  startIcon?: boolean;
  endIcon?: boolean;
  clearButton?: boolean;
  labelOnly?: boolean;
  vertical?: boolean;
  withButtons?: boolean;
  buttonsPosition?: "left" | "right" | "both";
  iconButtons?: boolean;
  buttonType?: PlaceholderButtonVariant;
  buttonSize?: PlaceholderButtonSize;
  buttonCount?: number;
  maxWidth?: boolean;
  showCount?: boolean;
  maxLength?: number;
}

function InputDemo({
  disabled = false,
  readonly = false,
  required = false,
  error = false,
  label = "Input Label",
  placeholder = "Text",
  value = false,
  help = false,
  size = "md",
  startIcon = false,
  endIcon = false,
  clearButton = false,
  labelOnly = false,
  vertical = true,
  withButtons = false,
  buttonsPosition = "right",
  iconButtons = true,
  buttonType = "ghost",
  buttonSize = "sm",
  buttonCount = 2,
  maxWidth = false,
  showCount = false,
  maxLength = 40,
}: InputDemoProps) {
    const [text, setText] = useState(value ? "Text" : "");
  // Sample value shown when "Value" is on: typed text in the field, or the
  // read-only text beside a label.
  const readOnlyValue = value ? "Read-only value" : "";
  // `Input` has no clear button of its own, so this one is drawn in its `endIcon`
  // slot (which ignores the mouse by default, hence `pointer-events-auto`). It
  // shows once there is something to clear.
  const showClear = clearButton && !disabled && !readonly && text.length > 0;
  const horizontal = !vertical;
  const labelHelpText = help ? HELP_TEXT : undefined;
  const left = buttonsPosition === "left" || buttonsPosition === "both";
  const right = buttonsPosition === "right" || buttonsPosition === "both";
  const buttons = <PlaceholderButtons iconOnly={iconButtons} variant={buttonType} size={buttonSize} count={buttonCount} />;

  // These layouts have no input box to carry the error, so show the same
  // markup `Input` renders below its field.
  const errorMessage = error && (
    <div className="flex items-center gap-1 mt-1.5">
      <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
      <span className="lyra-body-sm text-lyra-status-critical-strong">Required</span>
    </div>
  );

  const field = (
    <Input
      label={withButtons || horizontal ? undefined : label}
      labelHelpText={withButtons || horizontal ? undefined : labelHelpText}
      required={required}
      readonly={readonly}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
      showCount={showCount}
      maxLength={showCount ? maxLength : undefined}
      error={error ? "Required" : undefined}
      startIcon={startIcon ? <Search className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} /> : undefined}
      endIcon={
        showClear ? (
          <Tooltip content="Clear" placement="top">
            <button
              type="button"
              aria-label="Clear"
              onClick={() => setText("")}
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
            >
              <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Tooltip>
        ) : endIcon ? (
          <Mail className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />
        ) : undefined
      }
      className={horizontal ? (maxWidth ? "min-w-[240px] max-w-[320px]" : "w-full") : withButtons ? "flex-1 min-w-0" : maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}
    />
  );

  if (horizontal && labelOnly) {
    // Label left, read-only value (with optional buttons) right, then a rule.
    return (
      <div className="w-full">
        <div className="flex items-center justify-between gap-3">
          <Label label={label} required={required} labelHelpText={labelHelpText} />
          <div className="flex items-center gap-0.5">
            {withButtons && left && buttons}
            <span className="lyra-body-md text-lyra-fg-secondary">{readOnlyValue}</span>
            {withButtons && right && buttons}
          </div>
        </div>
        {errorMessage}
        <Separator className="mt-3" />
      </div>
    );
  }

  if (horizontal) {
    return (
      <div className="w-full">
        <div className="flex items-start justify-between gap-3">
          {/* Same height as the field so the label lines up with the input box. */}
          <div className={size === "sm" ? "flex h-8 items-center" : "flex h-9 items-center"}>
            <Label label={label} required={required} labelHelpText={labelHelpText} disabled={disabled} readonly={readonly} />
          </div>
          <div className={cn("flex items-start gap-0.5", !maxWidth && "flex-1 min-w-0")}>
            {withButtons && left && buttons}
            {field}
            {withButtons && right && buttons}
          </div>
        </div>
        <Separator className="mt-3" />
      </div>
    );
  }

  if (labelOnly) {
    return (
      <div className="w-72">
        <Label
          label={label}
          required={required}
          labelHelpText={labelHelpText}
          supportingText={withButtons ? undefined : readOnlyValue || undefined}
        />
        {withButtons && (
          <div className="flex items-center gap-0.5">
            {left && buttons}
            <span className="lyra-body-md text-lyra-fg-secondary">{readOnlyValue}</span>
            {right && buttons}
          </div>
        )}
        {errorMessage}
      </div>
    );
  }

  if (withButtons) {
    // Buttons sit beside the field; aligning tops keeps them level with the
    // input box even when the error text makes the field's wrapper taller.
    return (
      <div className={cn("flex flex-col gap-1.5", maxWidth ? "min-w-[240px] max-w-[320px]" : "w-full")}>
        <Label label={label} required={required} labelHelpText={labelHelpText} disabled={disabled} readonly={readonly} />
        <div className="flex items-start gap-0.5">
          {left && buttons}
          {field}
          {right && buttons}
        </div>
      </div>
    );
  }

  return field;
}

type InputDemoStory = StoryObj<InputDemoProps>;

export const Default: InputDemoStory = {
  render: (args) => <InputDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Input Label",
    placeholder: "Text",
    value: false,
    help: false,
    size: "md",
    startIcon: false,
    endIcon: false,
    clearButton: false,
    labelOnly: false,
    vertical: true,
    withButtons: false,
    buttonsPosition: "right",
    iconButtons: true,
    buttonType: "ghost",
    buttonSize: "sm",
    buttonCount: 2,
    maxWidth: false,
    showCount: false,
    maxLength: 40,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Disabled", "Read-only", "Required", "Error",
        "Label", "Placeholder", "Value", "Help text",
        "Label only", "Vertical", "Size", "Start icon", "End icon", "Clear button", "With buttons", "Buttons position", "Icon buttons", "Button type", "Button size", "Button count", "Max width", "Character counter", "Max length",
        "disabled", "readonly", "required", "error",
        "label", "placeholder", "value", "help",
        "labelOnly", "vertical", "size", "startIcon", "endIcon", "clearButton", "withButtons", "buttonsPosition", "iconButtons", "buttonType", "buttonSize", "buttonCount", "maxWidth", "showCount", "maxLength",
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
      description: "Locks the field and mutes the label. Doesn't apply when Label only is on.",
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
      table: { category: "Content", defaultValue: { summary: "Text" } },
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Fills in a sample value: text in the field, or the read-only value shown with the label when Label only is on.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    labelOnly: {
      name: "Label only",
      control: "boolean",
      description: "Shows the label with a read-only value and no input box.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    vertical: {
      name: "Vertical",
      control: "boolean",
      description: "On stacks the label above the field or value. Off puts the label on the left and the field or value on the right, with a divider underneath.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Small is 32px tall, medium is 36px.",
      if: { arg: "labelOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    startIcon: {
      name: "Start icon",
      control: "boolean",
      description: "Search icon at the start of the field (`startIcon`).",
      if: { arg: "labelOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    endIcon: {
      name: "End icon",
      control: "boolean",
      description: "Mail icon at the end of the field (`endIcon`).",
      if: { arg: "labelOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    clearButton: {
      name: "Clear button",
      control: "boolean",
      description: "An × inside the field that clears the text. Shows once there is text to clear, and replaces the end icon while it does.",
      if: { arg: "labelOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    withButtons: {
      name: "With buttons",
      control: "boolean",
      description: "Adds placeholder action buttons beside the field or value.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    buttonsPosition: {
      name: "Buttons position",
      control: "select",
      options: ["left", "right", "both"],
      description: "Which side of the field or value the buttons sit on.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "right" } },
    },
    iconButtons: {
      name: "Icon buttons",
      control: "boolean",
      description: "On shows icon-only buttons. Off shows text buttons labeled \"Action\".",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    buttonType: {
      name: "Button type",
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      description: "Color and style of the buttons. Works for icon and text buttons.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "ghost" } },
    },
    buttonSize: {
      name: "Button size",
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "Button height: 24, 32, 36 or 40px.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "sm" } },
    },
    buttonCount: {
      name: "Button count",
      control: "select",
      options: [1, 2, 3],
      description: "How many placeholder buttons show.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "2" } },
    },
    showCount: {
      name: "Character counter",
      control: "boolean",
      description: "Shows a live \"12/40\" counter above the field (`showCount`, needs `maxLength`). Typing stops at the limit.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    maxLength: {
      name: "Max length",
      control: { type: "number", min: 5, max: 200 },
      description: "Character limit used by the counter (`maxLength`).",
      if: { arg: "showCount", truthy: true },
      table: { category: "Content", defaultValue: { summary: "40" } },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px instead of full width. Off stretches the input across the row (with Vertical off, from the label to the right edge).",
      if: { arg: "labelOnly", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
};
