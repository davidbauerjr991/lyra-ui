import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PhoneInput, type PhoneValue } from "../phone-input";
import { COUNTRIES, EMPTY_US, SAMPLE_GB, SAMPLE_US } from "./PhoneInput.shared";

/* One page per PhoneInput variant, shown under "PhoneInput/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is PhoneInput → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof PhoneInput> = {
  title: "Custom Primitives/PhoneInput/Variants",
  component: PhoneInput,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PhoneInput label="Default" defaultCountry="us" />
      <PhoneInput label="With value" value={SAMPLE_GB} onChange={() => {}} />
      <PhoneInput label="Required" defaultCountry="us" required />
      <PhoneInput label="Disabled" defaultCountry="us" disabled value={SAMPLE_US} />
      <PhoneInput label="Read Only" defaultCountry="gb" readonly value={SAMPLE_GB} />
      <PhoneInput label="Error" defaultCountry="us" value={{ countryCode: "us", number: "55" }} onChange={() => {}} forceShowError />
    </div>
  ),
};

export const DefaultCountries: Story = {
  name: "Different default countries",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      {COUNTRIES.map((c) => (
        <PhoneInput key={c.code} label={c.label} defaultCountry={c.code} />
      ))}
    </div>
  ),
};

export const WithoutCountrySelector: Story = {
  name: "Without country selector",
  render: () => {
    const [value, setValue] = useState<PhoneValue>(EMPTY_US);
    return (
      <div className="w-80">
        <PhoneInput
          label="Phone number"
          hideCountrySelector
          value={value}
          onChange={setValue}
        />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          No flag or dial-code picker — use when the app only ever needs a single, known
          country's numbers (the mask/format still comes from `defaultCountry`).
        </p>
      </div>
    );
  },
};
