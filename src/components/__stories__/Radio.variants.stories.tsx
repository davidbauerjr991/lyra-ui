import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../radio";

/* One page per Radio variant, shown under "Radio/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Radio → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof RadioGroup> = {
  title: "Headless Primitives/Radio/Variants",
  component: RadioGroup,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/* ── All Variants — vertical and horizontal, unselected and selected, and the
   disabled states on one page (was All Variants, All States, Unselected and
   Disabled). Hover any row to see the hover state. ── */
const OPTIONS = ["option1", "option2", "option3"] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">{title}</p>
      {children}
    </div>
  );
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-8">
      <Section title="Vertical — unselected (hover the rows)">
        <RadioGroup name="allvariants-vertical-unselected">
          {OPTIONS.map((o) => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Vertical — selected (hover the rows)">
        <RadioGroup name="allvariants-vertical-selected" defaultValue="option2">
          {OPTIONS.map((o) => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Horizontal — unselected">
        <RadioGroup name="allvariants-horizontal-unselected" orientation="horizontal">
          {OPTIONS.map((o) => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Horizontal — selected">
        <RadioGroup name="allvariants-horizontal-selected" orientation="horizontal" defaultValue="option1">
          {OPTIONS.map((o) => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Disabled">
        <RadioGroup name="allvariants-disabled" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </Section>
      <Section title="Disabled with selection">
        <RadioGroup name="allvariants-disabled-selected" defaultValue="option1" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </Section>
    </div>
  ),
};

/* ── Keyboard — Tab into a group (one stop, on the selected radio), then use
   ←/→/↑/↓ to move and select, and Home/End to select the first/last enabled
   radio. The focus ring wraps the radio and its label (keyboard only). ── */
export const Keyboard: Story = {
  name: "Keyboard",
  render: () => (
    <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab into a group, then press ←/→/↑/↓, Home or End.</p>
      <Section title="Horizontal">
        <RadioGroup name="keyboard-horizontal" orientation="horizontal" defaultValue="option1">
          {OPTIONS.map((o) => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Vertical, with a disabled option (skipped)">
        <RadioGroup name="keyboard-vertical" defaultValue="option1">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Disabled" disabled />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </Section>
    </div>
  ),
};
