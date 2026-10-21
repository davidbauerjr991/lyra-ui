import type { Meta, StoryObj } from "@storybook/react";
import { ShowMore } from "../show-more";

const meta: Meta<typeof ShowMore> = {
  title: "Headless Primitives/Show More/Variants",
  component: ShowMore,
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ShowMore>;

const Body = () => <p className="mt-2 lyra-body-md text-lyra-fg-default">The extra content that opens and closes.</p>;

/** Every text size with the chevron at the end and at the start. */
export const SizesAndChevron: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <ShowMore label={`Chevron at the end (${size})`} textSize={size}><Body /></ShowMore>
          <ShowMore label={`Chevron at the start (${size})`} textSize={size} chevronPosition="start"><Body /></ShowMore>
        </div>
      ))}
    </div>
  ),
};

/** The four chevron directions (closed state). */
export const ChevronDirections: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-2">
      {(["down", "up", "right", "left"] as const).map((d) => (
        <ShowMore key={d} label={`Closed chevron points ${d}`} chevronDirection={d}><Body /></ShowMore>
      ))}
    </div>
  ),
};

/** Bold trigger, and `meta` text at the far end of the row. */
export const BoldWithMeta: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ShowMore label="Thought process" emphasis meta="12 s"><Body /></ShowMore>
    </div>
  ),
};

/** `preview` stays visible between the trigger and the folded content. */
export const WithPreview: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ShowMore label="Show details" preview={<p className="mt-1 lyra-body-sm text-lyra-fg-secondary">Always visible summary line.</p>}>
        <Body />
      </ShowMore>
    </div>
  ),
};

/** Opens on first render. */
export const StartsOpen: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ShowMore label="Show less" defaultOpen><Body /></ShowMore>
    </div>
  ),
};
