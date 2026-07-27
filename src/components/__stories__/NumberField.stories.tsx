import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberField } from "../number-field";

const meta: Meta<typeof NumberField> = {
  title: "Custom Primitives/Number Field",
  component: NumberField,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
  },
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    const [v, setV] = useState(0);
    return <div className="w-40"><NumberField label="Quantity" value={v} onChange={setV} size={args.size} /></div>;
  },
};

export const WithMinMax: Story = {
  name: "With Min / Max",
  render: () => {
    const [v, setV] = useState(5);
    return (
      <div className="w-40">
        <NumberField label="Rating (1–10)" value={v} min={1} max={10} onChange={setV} />
      </div>
    );
  },
};

export const WithWrap: Story = {
  name: "Wrapping (0–59)",
  render: () => {
    const [v, setV] = useState(0);
    return (
      <div className="w-40">
        <NumberField label="Minutes" value={v} min={0} max={59} wrap padWidth={2} onChange={setV} />
      </div>
    );
  },
};

export const WithStep: Story = {
  name: "Custom Step",
  render: () => {
    const [v, setV] = useState(0);
    return (
      <div className="w-40">
        <NumberField label="Percentage" value={v} min={0} max={100} step={5} onChange={setV} />
      </div>
    );
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <NumberField label="Default"  defaultValue={42} />
      <NumberField label="Disabled" defaultValue={42} disabled />
      <NumberField label="Readonly" defaultValue={42} readonly />
      <NumberField label="Error"    defaultValue={-1} min={0} error="Must be 0 or greater" />
    </div>
  ),
};
