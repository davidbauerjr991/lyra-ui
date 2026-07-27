import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { EmailInput } from "../email-input";

const meta: Meta<typeof EmailInput> = {
  title: "Custom Primitives/EmailInput",
  component: EmailInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  name: "Default",
  args: {
    size: "md",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="w-80">
        <EmailInput label="Email Address" value={value} onChange={setValue} size={args.size} />
      </div>
    );
  },
};

export const WithValue: Story = {
  name: "Valid value",
  render: () => (
    <div className="w-80">
      <EmailInput label="Email Address" value="dave@example.com" onChange={() => {}} />
    </div>
  ),
};

export const Invalid: Story = {
  name: "Invalid (with error)",
  render: () => (
    <div className="w-80">
      <EmailInput
        label="Email Address"
        value="notanemail"
        error="Enter a valid email address (e.g. name@example.com)"
        onChange={() => {}}
      />
    </div>
  ),
};

export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Default"   value="" onChange={() => {}} />
      <EmailInput label="Required"  value="" onChange={() => {}} required />
      <EmailInput label="Disabled"  value="dave@example.com" onChange={() => {}} disabled />
      <EmailInput label="Read Only" value="dave@example.com" onChange={() => {}} readonly />
    </div>
  ),
};
