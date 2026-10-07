import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PhoneInput, type PhoneValue } from "../phone-input";
import { COUNTRIES } from "./PhoneInput.shared";

const meta: Meta<typeof PhoneInput> = {
  title: "Custom Primitives/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (states, different default countries, without the country
   selector) each have their own page under "PhoneInput/Variants" — see
   PhoneInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With value, the state rows and Different default countries into a
   single playground. Fully controlled so typing and picking a country behave
   like the real component. ── */

interface PhoneInputDemoProps {
  state?: "default" | "required" | "error" | "disabled" | "read-only";
  startingValue?: "empty" | "filled";
  defaultCountry?: "us" | "gb" | "jp" | "ae";
  hideCountrySelector?: boolean;
  label?: string;
  size?: "sm" | "md";
}

function PhoneInputDemo({
  state = "default",
  startingValue = "empty",
  defaultCountry = "us",
  hideCountrySelector = false,
  label = "Phone number",
  size = "md",
}: PhoneInputDemoProps) {
  const sample = COUNTRIES.find((c) => c.code === defaultCountry)?.sample ?? "";
  const [value, setValue] = useState<PhoneValue>({
    countryCode: defaultCountry,
    number: startingValue === "filled" ? sample : "",
  });
  return (
    <div className="w-80">
      <PhoneInput
        label={label}
        value={value}
        onChange={setValue}
        defaultCountry={defaultCountry}
        hideCountrySelector={hideCountrySelector}
        size={size}
        required={state === "required"}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        forceShowError={state === "error"}
      />
      {value.number && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          Full number: +{value.number}
        </p>
      )}
    </div>
  );
}

type PhoneInputDemoStory = StoryObj<typeof PhoneInputDemo>;

export const Default: PhoneInputDemoStory = {
  args: {
    state: "default",
    startingValue: "empty",
    defaultCountry: "us",
    hideCountrySelector: false,
    label: "Phone number",
    size: "md",
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingValue",
        "defaultCountry",
        "hideCountrySelector",
        "label",
        "size",
        "State",
        "Starting value",
        "Default country",
        "Hide country selector",
        "Label",
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
        "Required adds the required marker. Error shows the validation message right away (`forceShowError`). Disabled and read-only lock the field.",
      table: { category: "Behavior" },
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or already holding a number for the chosen country.",
      table: { category: "Behavior" },
    },
    defaultCountry: {
      name: "Default country",
      control: "radio",
      options: COUNTRIES.map((c) => c.code),
      description: "Country the field starts on, which sets the flag, dial code and number format (`defaultCountry`).",
      table: { category: "Behavior" },
    },
    hideCountrySelector: {
      name: "Hide country selector",
      control: "boolean",
      description:
        "Removes the flag and dial-code picker, for an app that only ever needs one known country. The format still comes from the default country (`hideCountrySelector`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field (`label`).",
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
    <PhoneInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
