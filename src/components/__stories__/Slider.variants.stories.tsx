import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider, SliderRange } from "../slider";
import { SCALES } from "./Slider.shared";

/* One page per Slider variant, shown under "Slider/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Slider → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Slider> = {
  title: "Headless Primitives/Slider/Variants",
  component: Slider,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const States: Story = {
  name: "States",
  render: () => (
    <div className="w-full max-w-xl px-4 flex flex-col gap-10">
      <Slider label="Default" value={4} onChange={() => {}} min={0} max={10} />
      <Slider label="No ticks" value={4} onChange={() => {}} min={0} max={10} showTicks={false} />
      <Slider label="Disabled" value={4} onChange={() => {}} min={0} max={10} disabled />
      <SliderRange label="Range" value={[2, 7]} onChange={() => {}} min={0} max={10} />
      <SliderRange label="Range disabled" value={[2, 7]} onChange={() => {}} min={0} max={10} disabled />
    </div>
  ),
};

function AllVariantsDemo() {
  const unit = SCALES["0-10-by-1"];
  const half = SCALES["0-5-by-0.5"];
  const [single, setSingle] = useState(4);
  const [range, setRange] = useState<[number, number]>([2, 7]);
  const [custom, setCustom] = useState<number>(half.single);

  return (
    <div className="w-full max-w-xl px-4 flex flex-col gap-10">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Single value</p>
        <Slider label={unit.label} value={single} onChange={setSingle} min={unit.min} max={unit.max} step={unit.step} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Value: {single}</p>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Range</p>
        <SliderRange label={unit.label} value={range} onChange={setRange} min={unit.min} max={unit.max} step={unit.step} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Range: {range[0]} – {range[1]}</p>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Custom step (0.5)</p>
        <Slider label={half.label} value={custom} onChange={setCustom} min={half.min} max={half.max} step={half.step} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Value: {custom}</p>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Without tick marks</p>
        <Slider label={unit.label} value={4} onChange={() => {}} min={0} max={10} showTicks={false} />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Disabled (single)</p>
        <Slider label={unit.label} value={4} onChange={() => {}} min={0} max={10} disabled />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Disabled (range)</p>
        <SliderRange label={unit.label} value={[2, 7]} onChange={() => {}} min={0} max={10} disabled />
      </div>
    </div>
  );
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => <AllVariantsDemo />,
};
