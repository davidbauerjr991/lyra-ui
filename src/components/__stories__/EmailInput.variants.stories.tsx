import type { Meta, StoryObj } from "@storybook/react";
import { EmailInput } from "../email-input";
import { VALID_EMAIL, INVALID_EMAIL, INVALID_EMAIL_ERROR } from "./EmailInput.shared";

/* One page per EmailInput variant, shown under "EmailInput/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is EmailInput → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof EmailInput> = {
  title: "Custom Primitives/EmailInput/Variants",
  component: EmailInput,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Default" value="" onChange={() => {}} />
      <EmailInput label="Required" value="" onChange={() => {}} required />
      <EmailInput label="Disabled" value={VALID_EMAIL} onChange={() => {}} disabled />
      <EmailInput label="Read Only" value={VALID_EMAIL} onChange={() => {}} readonly />
      <EmailInput label="Error" value={INVALID_EMAIL} error={INVALID_EMAIL_ERROR} onChange={() => {}} />
    </div>
  ),
};

export const WithValue: Story = {
  name: "Valid value",
  render: () => (
    <div className="w-80">
      <EmailInput label="Email Address" value={VALID_EMAIL} onChange={() => {}} />
    </div>
  ),
};

export const Invalid: Story = {
  name: "Invalid (with error)",
  render: () => (
    <div className="w-80">
      <EmailInput
        label="Email Address"
        value={INVALID_EMAIL}
        error={INVALID_EMAIL_ERROR}
        onChange={() => {}}
      />
    </div>
  ),
};

/* "sm" (32px) is for dense contexts vs. the "md" (36px) default every other
   field in the library uses. */
export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Small (32px)" value="" onChange={() => {}} size="sm" />
      <EmailInput label="Medium (36px, default)" value="" onChange={() => {}} size="md" />
    </div>
  ),
};
