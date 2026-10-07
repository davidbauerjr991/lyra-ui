import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PasswordInput, ChangePassword } from "../password-input";
import { REQUIREMENTS_ERROR, SAMPLE_PASSWORD } from "./PasswordInput.shared";

/* One page per PasswordInput variant, shown under "PasswordInput/Variants" in
   the sidebar. Static references for design review; the interactive
   playground is PasswordInput → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof PasswordInput> = {
  title: "Headless Primitives/PasswordInput/Variants",
  component: PasswordInput,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PasswordInput label="Default" value="" onChange={() => {}} />
      <PasswordInput label="With value" value={SAMPLE_PASSWORD} onChange={() => {}} />
      <PasswordInput label="Required" value="" onChange={() => {}} required />
      <PasswordInput label="Disabled" value="hidden" onChange={() => {}} disabled />
      <PasswordInput label="Read only" value="readonly-pass" onChange={() => {}} readonly />
      <PasswordInput label="Error" value="bad" onChange={() => {}} error={REQUIREMENTS_ERROR} />
    </div>
  ),
};

export const WithRequirements: Story = {
  name: "With requirements tooltip",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-80">
        <PasswordInput
          label="New password"
          value={value}
          onChange={setValue}
          showRequirements
          required
        />
      </div>
    );
  },
};

export const ChangePasswordForm: Story = {
  name: "Change Password",
  render: () => (
    <div className="w-80">
      <ChangePassword
        onSubmit={({ current, next }) =>
          alert(`Current: ${current}\nNew: ${next}`)
        }
      />
    </div>
  ),
};
