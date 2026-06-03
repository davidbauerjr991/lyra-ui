import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Atoms/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  name: "Default",
  render: () => (
    <RadioGroup defaultValue="option1" name="default-demo">
      <RadioGroupItem value="option1" label="Radio label" />
      <RadioGroupItem value="option2" label="Radio label" />
      <RadioGroupItem value="option3" label="Radio label" />
    </RadioGroup>
  ),
};

export const Unselected: Story = {
  name: "Unselected",
  render: () => (
    <RadioGroup name="unselected-demo">
      <RadioGroupItem value="option1" label="Radio label" />
      <RadioGroupItem value="option2" label="Radio label" />
      <RadioGroupItem value="option3" label="Radio label" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">Disabled unselected</p>
        <RadioGroup name="disabled-unselected" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
        </RadioGroup>
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">Disabled selected</p>
        <RadioGroup name="disabled-selected" defaultValue="option1" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Unchecked states (hover the rows)</p>
      <RadioGroup name="states-unchecked">
        <RadioGroupItem value="option1" label="Radio label" />
        <RadioGroupItem value="option2" label="Radio label" />
        <RadioGroupItem value="option3" label="Radio label" />
      </RadioGroup>

      <div className="border-b border-lyra-border-subtle my-2" />

      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Checked states (hover the rows)</p>
      <RadioGroup name="states-checked" defaultValue="option1">
        <RadioGroupItem value="option1" label="Radio label" />
        <RadioGroupItem value="option2" label="Radio label" />
        <RadioGroupItem value="option3" label="Radio label" />
      </RadioGroup>

      <div className="border-b border-lyra-border-subtle my-2" />

      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Disabled</p>
      <RadioGroup name="states-disabled-unchecked" disabled>
        <RadioGroupItem value="option1" label="Radio label" />
      </RadioGroup>
      <RadioGroup name="states-disabled-checked" defaultValue="option1" disabled>
        <RadioGroupItem value="option1" label="Radio label" />
      </RadioGroup>
    </div>
  ),
};


// Group stories moved to Atoms/Radio Button Group
