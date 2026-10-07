import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../accordion";
import { variantRow, richItem, HeadlessDemo } from "./Accordion.shared";

/* One page per Accordion variant, shown under "Accordion/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Accordion → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof Accordion> = {
  title: "Headless Primitives/Accordion/Variants",
  component: Accordion,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const States: Story = {
  name: "States (Closed, Open, Disabled)",
  render: () => (
    <Accordion
      type="multiple"
      defaultValues={["open"]}
      items={[
        variantRow("closed", "Closed"),
        variantRow("open", "Open"),
        variantRow("disabled", "Disabled", { disabled: true }),
      ]}
    />
  ),
};

export const WithoutIcons: Story = {
  name: "Without Icons",
  render: () => (
    <Accordion
      type="multiple"
      items={[
        variantRow("a", "No icon", { icon: false }),
        variantRow("b", "No icon, with subhead", { icon: false, subhead: true }),
      ]}
    />
  ),
};

export const Subhead: Story = {
  name: "Subhead",
  render: () => (
    <Accordion
      type="multiple"
      items={[
        variantRow("a", "With subhead", { subhead: true }),
        variantRow("b", "With subhead, disabled", { subhead: true, disabled: true }),
      ]}
    />
  ),
};

export const EndSlot: Story = {
  name: "End Slot (Metrics)",
  render: () => (
    <Accordion
      type="multiple"
      items={[
        variantRow("a", "With end slot", { endSlot: true }),
        variantRow("b", "With subhead + end slot", { subhead: true, endSlot: true }),
      ]}
    />
  ),
};

export const RichHeader: Story = {
  name: "Rich Header + Table Content",
  render: () => <Accordion defaultValue="rich" items={[richItem]} />,
};

export const Headless: Story = {
  name: "Headless",
  render: () => <HeadlessDemo />,
};

/* ── Contained — `variant="contained"`: the whole group sits in one bordered,
   rounded card (like Container's default variant), dividers only between rows.
   Shown for single and multiple, with a disabled row. ── */
export const Contained: Story = {
  name: "Contained",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Single (one open at a time)</span>
        <Accordion
          variant="contained"
          type="single"
          defaultValue="open"
          items={[
            variantRow("closed", "Closed"),
            variantRow("open", "Open"),
            variantRow("disabled", "Disabled", { disabled: true }),
          ]}
        />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Multiple, with subhead</span>
        <Accordion
          variant="contained"
          type="multiple"
          defaultValues={["a"]}
          items={[
            variantRow("a", "First section", { subhead: true }),
            variantRow("b", "Second section", { subhead: true }),
          ]}
        />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Single item</span>
        <Accordion variant="contained" items={[variantRow("only", "Only section")]} />
      </div>
    </div>
  ),
};
