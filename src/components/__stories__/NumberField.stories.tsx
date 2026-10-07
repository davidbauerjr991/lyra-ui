import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberField } from "../number-field";
import { NEGATIVE_ERROR } from "./NumberField.shared";

const meta: Meta<typeof NumberField> = {
  title: "Custom Primitives/Number Field",
  component: NumberField,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (states, min / max, wrapping, custom step) each have their own
   page under "Number Field/Variants" — see NumberField.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With Min / Max, Wrapping (0–59), Custom Step and the state rows
   into a single playground. Fully controlled so typing and the stepper
   buttons behave like the real component. ── */

interface NumberFieldDemoProps {
  state?: "default" | "error" | "disabled" | "read-only";
  required?: boolean;
  label?: string;
  labelHelpText?: string;
  limitRange?: boolean;
  min?: number;
  max?: number;
  wrap?: boolean;
  step?: number;
  size?: "sm" | "md";
}

function NumberFieldDemo({
  state = "default",
  required = false,
  label = "Quantity",
  labelHelpText = "",
  limitRange = false,
  min = 0,
  max = 10,
  wrap = false,
  step = 1,
  size = "md",
}: NumberFieldDemoProps) {
  const lower = limitRange ? Math.min(min, max) : undefined;
  const upper = limitRange ? Math.max(min, max) : undefined;
  const [value, setValue] = useState(lower ?? 0);
  return (
    <div className="w-40">
      <NumberField
        label={label}
        labelHelpText={labelHelpText || undefined}
        value={value}
        onChange={setValue}
        min={lower}
        max={upper}
        step={step}
        wrap={limitRange && wrap}
        size={size}
        required={required}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        error={state === "error" ? NEGATIVE_ERROR : undefined}
      />
    </div>
  );
}

type NumberFieldDemoStory = StoryObj<typeof NumberFieldDemo>;

export const Default: NumberFieldDemoStory = {
  args: {
    state: "default",
    required: false,
    label: "Quantity",
    labelHelpText: "",
    limitRange: false,
    min: 0,
    max: 10,
    wrap: false,
    step: 1,
    size: "md",
  },
  parameters: {
    controls: {
      include: [
        "state", "required", "label", "labelHelpText", "limitRange", "min", "max", "wrap", "step", "size",
        "State", "Required", "Label", "Label help text", "Limit range", "Min", "Max", "Wrap around", "Step", "Size",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "error", "disabled", "read-only"],
      description:
        "Error shows an error message (`error`). Disabled and read-only lock the field.",
      table: { category: "Behavior" },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds the required marker to the label (`required`). Works alongside any state.",
      table: { category: "Behavior" },
    },
    limitRange: {
      name: "Limit range",
      control: "boolean",
      description: "Turns on the Min and Max limits. Off leaves the value unbounded.",
      table: { category: "Behavior" },
    },
    min: {
      name: "Min",
      control: { type: "number" },
      description: "Lowest allowed value (`min`). The field starts here. Swapped with Max if set above it.",
      if: { arg: "limitRange", truthy: true },
      table: { category: "Behavior" },
    },
    max: {
      name: "Max",
      control: { type: "number" },
      description: "Highest allowed value (`max`).",
      if: { arg: "limitRange", truthy: true },
      table: { category: "Behavior" },
    },
    wrap: {
      name: "Wrap around",
      control: "boolean",
      description: "Stepping past Max returns to Min, and past Min goes to Max (`wrap`). Needs Min and Max.",
      if: { arg: "limitRange", truthy: true },
      table: { category: "Behavior" },
    },
    step: {
      name: "Step",
      control: { type: "number", min: 1 },
      description: "How much the stepper buttons and arrow keys change the value (`step`). PageUp / PageDown move by 10 steps.",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field (`label`).",
      table: { category: "Content" },
    },
    labelHelpText: {
      name: "Label help text",
      control: "text",
      description: "Help text shown next to the label (`labelHelpText`). Empty for none.",
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "sm is 32px for dense contexts. md is the 36px default every other field uses.",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <NumberFieldDemo key={JSON.stringify(args)} {...args} />
  ),
};
