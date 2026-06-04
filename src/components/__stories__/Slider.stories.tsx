import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider, SliderRange } from "../slider";

const meta: Meta = {
  title: "Atoms/Slider",
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
  name: "Single value",
  render: () => {
    const [value, setValue] = useState(3);
    return (
      <div className="w-full max-w-xl px-4 py-6">
        <Slider label="Slider Label" value={value} onChange={setValue} min={0} max={10} step={1} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Value: {value}</p>
      </div>
    );
  },
};

export const Range: Story = {
  name: "Range",
  render: () => {
    const [value, setValue] = useState<[number, number]>([2, 6]);
    return (
      <div className="w-full max-w-xl px-4 py-6">
        <SliderRange label="Slider Label" value={value} onChange={setValue} min={0} max={10} step={1} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Range: {value[0]} – {value[1]}</p>
      </div>
    );
  },
};

export const BothVariants: Story = {
  name: "Both variants",
  render: () => {
    const [single, setSingle] = useState(3);
    const [range,  setRange]  = useState<[number, number]>([2, 6]);
    return (
      <div className="w-full max-w-xl px-4 flex flex-col gap-10">
        <Slider     label="Slider Label" value={single} onChange={setSingle} min={0} max={10} step={1} />
        <SliderRange label="Slider Label" value={range}  onChange={setRange}  min={0} max={10} step={1} />
      </div>
    );
  },
};

export const States: Story = {
  name: "States",
  render: () => (
    <div className="w-full max-w-xl px-4 flex flex-col gap-10">
      <Slider label="Default"           value={4}  onChange={() => {}} min={0} max={10} />
      <Slider label="No ticks"          value={4}  onChange={() => {}} min={0} max={10} showTicks={false} />
      <Slider label="Disabled"          value={4}  onChange={() => {}} min={0} max={10} disabled />
      <SliderRange label="Range"        value={[2,7]} onChange={() => {}} min={0} max={10} />
      <SliderRange label="Range disabled" value={[2,7]} onChange={() => {}} min={0} max={10} disabled />
    </div>
  ),
};

export const CustomStep: Story = {
  name: "Custom step (0.5)",
  render: () => {
    const [value, setValue] = useState(2.5);
    return (
      <div className="w-full max-w-xl px-4 py-6">
        <Slider label="Volume" value={value} onChange={setValue} min={0} max={5} step={0.5} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Value: {value}</p>
      </div>
    );
  },
};
