import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PasswordInput } from "../password-input";
import { REQUIREMENTS_ERROR, SAMPLE_PASSWORD } from "./PasswordInput.shared";

const meta: Meta<typeof PasswordInput> = {
  title: "Headless Primitives/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (states, requirements tooltip, change-password form) each have
   their own page under "PasswordInput/Variants" — see
   PasswordInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With requirements tooltip, Error and the state rows into a single
   playground. Fully controlled so typing and the show/hide toggle behave
   like the real component. ── */

interface PasswordInputDemoProps {
  state?: "default" | "required" | "error" | "disabled" | "read-only";
  startingValue?: "empty" | "filled";
  showRequirements?: boolean;
  label?: string;
  placeholder?: string;
  size?: "sm" | "md";
}

function PasswordInputDemo({
  state = "default",
  startingValue = "empty",
  showRequirements = false,
  label = "Password",
  placeholder,
  size = "md",
}: PasswordInputDemoProps) {
  const [value, setValue] = useState(startingValue === "filled" ? SAMPLE_PASSWORD : "");
  return (
    <div className="w-80">
      <PasswordInput
        label={label}
        placeholder={placeholder || undefined}
        value={value}
        onChange={setValue}
        showRequirements={showRequirements}
        size={size}
        required={state === "required"}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        error={state === "error" ? REQUIREMENTS_ERROR : undefined}
      />
    </div>
  );
}

type PasswordInputDemoStory = StoryObj<typeof PasswordInputDemo>;

export const Default: PasswordInputDemoStory = {
  args: {
    state: "default",
    startingValue: "empty",
    showRequirements: false,
    label: "Password",
    placeholder: "",
    size: "md",
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingValue",
        "showRequirements",
        "label",
        "placeholder",
        "size",
        "State",
        "Starting value",
        "Requirements tooltip",
        "Label",
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
        "Required adds the required marker. Error shows an error message (`error`). Disabled and read-only lock the field.",
      table: { category: "Behavior" },
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or already holding a password.",
      table: { category: "Behavior" },
    },
    showRequirements: {
      name: "Requirements tooltip",
      control: "boolean",
      description: "Shows the password requirements checklist in a tooltip (`showRequirements`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field (`label`).",
      table: { category: "Content" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty. Empty uses the component's own.",
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
    <PasswordInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
