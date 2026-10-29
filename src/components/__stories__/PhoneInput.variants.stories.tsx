import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { within, userEvent } from "@storybook/test";
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

/* ── Typed country code — a leading "+code" in the number field sets the
   country. The first two fields are typed by the play function; the third is
   yours to paste into. ── */

function TypedCodeField({ label, hint }: { label: string; hint: string }) {
  const [value, setValue] = useState<PhoneValue>(EMPTY_US);
  return (
    <div>
      <PhoneInput label={label} value={value} onChange={setValue} />
      <p className="lyra-body-sm text-lyra-fg-secondary mt-2">{hint}</p>
    </div>
  );
}

export const TypedCountryCode: Story = {
  name: "Typed country code",
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <TypedCodeField
        label="Typed +44"
        hint='Types "+44 20 7946 0958": the code is certain at "+44", so the UK is selected and the "+44" leaves the field The UK mask is 11 digits, so leaving the field adds the leading 0 (02079 460958).'
      />
      <TypedCodeField
        label="Typed +1"
        hint='Types "+1 555 010 0000": +1 is shared by the US and Canada, so the current country (US) is kept.'
      />
      <TypedCodeField
        label="Try It Yourself"
        hint='Try "+3" or "+35" (waits, no error), "+351" (Portugal), "+99" (Unknown country code), or paste "+447911123456" (UK, leading 0 added).'
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Typed +44"), "+44 20 7946 0958", { delay: 60 });
    await userEvent.type(canvas.getByLabelText("Typed +1"), "+1 555 010 0000", { delay: 60 });
  },
};
