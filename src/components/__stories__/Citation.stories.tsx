import type { Meta, StoryObj } from "@storybook/react";
import { Citation, type CitationSource } from "../citation";
import { withControlsFor } from "./storyControls";

const meta: Meta<typeof Citation> = {
  title: "Custom Primitives/Citation",
  component: Citation,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

const SAMPLE_TEXT =
  "Yes. Tablet units carry a 24-month parts warranty that runs from the delivery date, not the order date. A frozen display with a blinking red light is a board fault, so it is replaced rather than repaired.";
const SAMPLE_SOURCES: CitationSource[] = [
  { text: "24-month parts warranty that runs from the delivery date", source: "Tablet warranty coverage, section 2" },
  { text: "board fault, so it is replaced rather than repaired", source: "Board faults — replace, not repair" },
];

interface CitationDemoProps {
  text?: string;
  sources?: number;
  defaultOpen?: boolean;
}

type Story = StoryObj<CitationDemoProps>;

/* ── Default — the interactive playground. Pick how many of the sample passages are cited and whether the
   sources list starts open. Edit the text to try your own (the cited passages must appear in it word for word). ── */
export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: { text: SAMPLE_TEXT, sources: 2, defaultOpen: false },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
      description: "The full text (`text`). The sample sources only mark up the sample text.",
      table: { category: "Content" },
    },
    sources: {
      name: "Sources",
      control: { type: "range", min: 0, max: 2, step: 1 },
      description: "How many of the sample passages are cited (`citations`). 0 shows the plain text with no sources link.",
      table: { category: "Content", defaultValue: { summary: "2" } },
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "The sources list starts open (`defaultOpen`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
  },
  render: ({ text = SAMPLE_TEXT, sources = 2, defaultOpen = false }) => (
    <div className="max-w-xl">
      {/* `key` remounts when the open state control changes. */}
      <Citation key={String(defaultOpen)} text={text} citations={SAMPLE_SOURCES.slice(0, sources)} defaultOpen={defaultOpen} />
    </div>
  ),
});
