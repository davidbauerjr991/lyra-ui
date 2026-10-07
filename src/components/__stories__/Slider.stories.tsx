import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider, SliderRange } from "../slider";
import { SCALES, type ScaleKey } from "./Slider.shared";

const meta: Meta<typeof Slider> = {
  title: "Headless Primitives/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (states, every variant side by side) each have their own page
   under "Slider/Variants" — see Slider.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Single value, Range, Both variants and Custom step (0.5) into a single
   playground. Fully controlled so dragging a thumb updates real state. ── */

interface SliderDemoProps {
  mode?: "single" | "range";
  disabled?: boolean;
  showTicks?: boolean;
  scale?: ScaleKey;
  label?: string;
}

function SliderDemo({
  mode = "single",
  disabled = false,
  showTicks = true,
  scale = "0-10-by-1",
  label,
}: SliderDemoProps) {
  const s = SCALES[scale];
  const [single, setSingle] = useState<number>(s.single);
  const [range, setRange] = useState<[number, number]>(s.range);
  const text = label || s.label;

  return (
    <div className="w-full max-w-xl px-4 py-6">
      {mode === "single" ? (
        <>
          <Slider
            label={text}
            value={single}
            onChange={setSingle}
            min={s.min}
            max={s.max}
            step={s.step}
            disabled={disabled}
            showTicks={showTicks}
          />
          <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Value: {single}</p>
        </>
      ) : (
        <>
          <SliderRange
            label={text}
            value={range}
            onChange={setRange}
            min={s.min}
            max={s.max}
            step={s.step}
            disabled={disabled}
            showTicks={showTicks}
          />
          <p className="lyra-body-sm text-lyra-fg-secondary mt-4">
            Range: {range[0]} – {range[1]}
          </p>
        </>
      )}
    </div>
  );
}

type SliderDemoStory = StoryObj<typeof SliderDemo>;

export const Default: SliderDemoStory = {
  args: {
    mode: "single",
    disabled: false,
    showTicks: true,
    scale: "0-10-by-1",
    label: "",
  },
  parameters: {
    controls: {
      include: [
        "mode",
        "disabled",
        "showTicks",
        "scale",
        "label",
        "Mode",
        "Disabled",
        "Tick marks",
        "Scale",
        "Label",
      ],
      sort: "none",
    },
  },
  argTypes: {
    mode: {
      name: "Mode",
      control: "radio",
      options: ["single", "range"],
      description: "One thumb (`Slider`) or two thumbs for a low–high range (`SliderRange`).",
      table: { category: "Behavior" },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Locks the thumbs (`disabled`).",
      table: { category: "Behavior" },
    },
    showTicks: {
      name: "Tick marks",
      control: "boolean",
      description: "Shows tick marks and numbers under the track (`showTicks`).",
      table: { category: "Behavior" },
    },
    scale: {
      name: "Scale",
      control: "radio",
      options: Object.keys(SCALES),
      description: "The limits and step size: 0 to 10 by 1, or 0 to 5 by 0.5 (`min`, `max`, `step`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the slider (`label`). Leave empty to use the scale's own label.",
      table: { category: "Content" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <SliderDemo key={JSON.stringify(args)} {...args} />
  ),
};
