import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { EmailInput } from "../email-input";
import { VALID_EMAIL, INVALID_EMAIL, INVALID_EMAIL_ERROR } from "./EmailInput.shared";

const meta: Meta<typeof EmailInput> = {
  title: "Custom Primitives/EmailInput",
  component: EmailInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (states, valid value, invalid value, sizes) each have their own
   page under "EmailInput/Variants" — see EmailInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, Valid value, Invalid (with error) and the state rows (required,
   disabled, read only) into a single playground. Fully controlled so typing
   and the built-in validate-on-blur behave like the real component. ── */

interface EmailInputDemoProps {
  state?: "default" | "required" | "error" | "disabled" | "read-only";
  startingValue?: "empty" | "valid" | "invalid";
  label?: string;
  labelHelpText?: string;
  placeholder?: string;
  size?: "sm" | "md";
}

const STARTING_VALUES = { empty: "", valid: VALID_EMAIL, invalid: INVALID_EMAIL } as const;

function EmailInputDemo({
  state = "default",
  startingValue = "empty",
  label = "Email Address",
  labelHelpText = "",
  placeholder = "name@example.com",
  size = "md",
}: EmailInputDemoProps) {
  const [value, setValue] = useState<string>(STARTING_VALUES[startingValue]);
  return (
    <div className="w-80">
      <EmailInput
        label={label}
        labelHelpText={labelHelpText || undefined}
        placeholder={placeholder}
        size={size}
        value={value}
        onChange={setValue}
        required={state === "required"}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        error={state === "error" ? INVALID_EMAIL_ERROR : undefined}
      />
    </div>
  );
}

type EmailInputDemoStory = StoryObj<typeof EmailInputDemo>;

export const Default: EmailInputDemoStory = {
  args: {
    state: "default",
    startingValue: "empty",
    label: "Email Address",
    labelHelpText: "",
    placeholder: "name@example.com",
    size: "md",
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingValue",
        "label",
        "labelHelpText",
        "placeholder",
        "size",
        "State",
        "Starting value",
        "Label",
        "Label help text",
        "Placeholder",
        "Size",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "required", "error", "disabled", "read-only"],
      description:
        "Required adds the required marker. Error shows an external error message (`error`). Disabled and read-only lock the field.",
      table: { category: "Behavior" },
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "valid", "invalid"],
      description:
        "What the field holds on first render. Typing an invalid address and leaving the field shows the built-in validation message.",
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
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
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
    <EmailInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
