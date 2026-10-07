import { useId, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../radio";
import { Label } from "../label";
import { ErrorIconSolid } from "../icons/error-icon-solid";

const meta: Meta<typeof RadioGroup> = {
  title: "Headless Primitives/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  // Real RadioGroup props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    orientation: { control: "radio", options: ["vertical", "horizontal"] },
  },
};

export default meta;

const READONLY_HELP_TEXT = "This selection cannot be changed.";
const REQUIRED_HELP_TEXT = "At least one field must be selected";

/* Every radio layout and state side by side has its own page under
   "Radio/Variants" — see Radio.variants.stories.tsx. A labeled group with
   help text, error and read-only handling is Radio Button Group. */

/* ── Default — consolidated Default, Unselected and Disabled into one
   controls-driven story. `selected` and `itemLabel` are story-only args:
   `selected` sets the group's initial `defaultValue` ("none" leaves every radio
   unselected) and `itemLabel` is the text on each radio. A group label sits
   above the radios, like Checkbox Group. `RadioGroup` has no read-only prop,
   so Read-only is built the way Radio Button Group does it: the label is
   muted (`Label`'s `readonly`) and the radios are non-interactive. The group is
   uncontrolled, so the demo remounts (via `key`) whenever a control changes. ── */

interface RadioDemoProps {
  selected?: "none" | "option1" | "option2" | "option3";
  groupLabel?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  orientation?: "vertical" | "horizontal";
  itemLabel?: string;
}

function RadioDemo({
  selected = "option1",
  groupLabel = true,
  disabled = false,
  readonly = false,
  required = false,
  orientation = "vertical",
  itemLabel = "Radio label",
}: RadioDemoProps) {
  const labelId = useId();
  const helperId = useId();
  // Required starts with nothing selected, and the helper shows only until a
  // radio is picked. The demo remounts when a control changes, so this resets.
  const [value, setValue] = useState<string | undefined>(
    required || selected === "none" ? undefined : selected,
  );
  const showRequiredHelper = required && !disabled && !readonly && !value;
  return (
    <div className="flex flex-col">
      {groupLabel && (
        <Label
          id={labelId}
          label="Input Label"
          required={required}
          disabled={disabled}
          readonly={readonly}
          labelHelpText={readonly ? READONLY_HELP_TEXT : undefined}
          className="mb-1.5"
        />
      )}
      <RadioGroup
        aria-labelledby={groupLabel ? labelId : undefined}
        aria-label={groupLabel ? undefined : "Input Label"}
        aria-describedby={showRequiredHelper ? helperId : undefined}
        name="radio-default-demo"
        value={value ?? ""}
        onValueChange={setValue}
        disabled={disabled || readonly}
        orientation={orientation}
      >
        {["option1", "option2", "option3"].map((v) => (
          <RadioGroupItem
            key={v}
            value={v}
            label={itemLabel}
            // Red outline on the circles while the required error shows
            // (same border color as Checkbox's `error`). `RadioGroupItem` has
            // no error prop, so this targets its circle button from the label.
            className={showRequiredHelper ? "[&>button]:!border-lyra-status-critical-strong" : undefined}
          />
        ))}
      </RadioGroup>
      {showRequiredHelper && (
        <div id={helperId} className="flex items-center gap-1 mt-2">
          <ErrorIconSolid
            className="h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong"
            aria-hidden="true"
          />
          <span className="lyra-body-sm text-lyra-status-critical-strong">{REQUIRED_HELP_TEXT}</span>
        </div>
      )}
    </div>
  );
}

type RadioDemoStory = StoryObj<RadioDemoProps>;

export const Default: RadioDemoStory = {
  render: (args) => <RadioDemo key={JSON.stringify(args)} {...args} />,
  args: {
    selected: "option1",
    groupLabel: true,
    disabled: false,
    readonly: false,
    required: false,
    orientation: "vertical",
    itemLabel: "Radio label",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Selected option", "Disabled", "Read-only", "Required", "Label", "Option label", "Orientation",
        "selected", "groupLabel", "disabled", "readonly", "required", "itemLabel", "orientation",
      ],
      sort: "none",
    },
  },
  argTypes: {
    selected: {
      name: "Selected option",
      control: {
        type: "select",
        labels: { none: "None", option1: "Option 1", option2: "Option 2", option3: "Option 3" },
      },
      options: ["none", "option1", "option2", "option3"],
      description: "Which radio starts selected (`defaultValue`). “None” leaves all unselected. Turning Required on clears it.",
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables every radio in the group and dims the group label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Mutes the group label, adds a help icon with a tooltip, and stops the selection from changing.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the group label and a red “At least one field must be selected” helper line with an error icon and red outlines on the radio circles until one is picked, and clears the selection. Needs the label showing.",
      if: { arg: "groupLabel", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    groupLabel: {
      name: "Label",
      control: "boolean",
      description: "Shows the group label above the radios.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    itemLabel: {
      name: "Option label",
      control: "text",
      description: "Text shown next to each radio.",
      table: { category: "Content", defaultValue: { summary: "Radio label" } },
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Stacks the radios in a column or lines them up in a row.",
      table: { category: "Appearance", defaultValue: { summary: "vertical" } },
    },
  },
};
