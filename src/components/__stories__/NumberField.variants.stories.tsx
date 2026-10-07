import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberField } from "../number-field";
import { RANGE_PRESETS, NEGATIVE_ERROR } from "./NumberField.shared";

/* One page per NumberField variant, shown under "Number Field/Variants" in
   the sidebar. Static references for design review; the interactive
   playground is Number Field → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof NumberField> = {
  title: "Custom Primitives/Number Field/Variants",
  component: NumberField,
  tags: ["!autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const AllStates: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <NumberField label="Default" defaultValue={42} />
      <NumberField label="Required" defaultValue={42} required />
      <NumberField label="Disabled" defaultValue={42} disabled />
      <NumberField label="Readonly" defaultValue={42} readonly />
      <NumberField label="Error" defaultValue={-1} min={0} error={NEGATIVE_ERROR} />
    </div>
  ),
};

export const WithMinMax: Story = {
  name: "With Min / Max",
  render: () => {
    const p = RANGE_PRESETS["1-10"];
    const [v, setV] = useState(p.start);
    return (
      <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} onChange={setV} />
      </div>
    );
  },
};

export const WithWrap: Story = {
  name: "Wrapping (0–59)",
  render: () => {
    const p = RANGE_PRESETS["0-59-wrap"];
    const [v, setV] = useState(p.start);
    return (
      <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} wrap padWidth={p.padWidth} onChange={setV} />
      </div>
    );
  },
};

export const WithStep: Story = {
  name: "Custom Step",
  render: () => {
    const p = RANGE_PRESETS["0-100-step-5"];
    const [v, setV] = useState(p.start);
    return (
      <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} step={p.step} onChange={setV} />
      </div>
    );
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <NumberField label="Small (32px)" defaultValue={42} size="sm" />
      <NumberField label="Medium (36px, default)" defaultValue={42} size="md" />
    </div>
  ),
};
