import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Spinner } from "../spinner";
import { Button } from "../button";

/* One page per Spinner variant, shown under "Spinner/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Spinner → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Spinner> = {
  title: "Custom Primitives/Spinner/Variants",
  component: Spinner,
  tags: ["!autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/* ── Multiple Spinner — toggle several spinners on and off ── */
function MultipleSpinnerDemo() {
  const [active, setActive] = useState<Record<number, boolean>>({ 1: true, 2: true });
  const toggle = (id: number) => setActive((prev) => ({ ...prev, [id]: !prev[id] }));
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((id) => (
          <Button
            key={id}
            variant={active[id] ? "default" : "outline"}
            size="sm"
            onClick={() => toggle(id)}
          >
            Toggle {id}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-8 h-10">
        {[1, 2, 3, 4].map((id) =>
          active[id] ? <Spinner key={id} variant="bar" size="md" label={`Loading ${id}`} /> : null
        )}
      </div>
    </div>
  );
}

export const MultipleSpinner: Story = {
  name: "Multiple Spinner",
  render: () => <MultipleSpinnerDemo />,
};

/* ── All Variants — bar and circle at every size, plus both on a dark surface
   in the inverse color (was All Variants, Spinner Bar, Spinner Circle and On
   Dark Background). ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex items-center gap-8">
          <span className="lyra-body-sm text-lyra-fg-secondary w-6">{size}</span>
          <Spinner variant="bar" size={size} />
          <Spinner variant="circle" size={size} />
        </div>
      ))}
      <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <span className="lyra-body-sm text-lyra-fg-inverse w-6">Inverse</span>
        <Spinner variant="bar" color="inverse" size="md" />
        <Spinner variant="circle" color="inverse" size="md" />
      </div>
    </div>
  ),
};

/* ── With Label — the label shown as text beside the spinner (`showLabel`),
   on a light and a dark surface. With "reduce motion" on, bars fade in place
   and the circle becomes one softly fading dot. ── */
export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-8">
        <Spinner variant="bar" size="md" label="Loading conversations" showLabel />
        <Spinner variant="circle" size="md" label="Saving" showLabel />
      </div>
      <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <Spinner variant="bar" size="md" color="inverse" label="Loading" showLabel />
        <Spinner variant="circle" size="md" color="inverse" label="Saving" showLabel />
      </div>
    </div>
  ),
};
