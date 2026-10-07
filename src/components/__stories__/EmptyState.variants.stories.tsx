import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../empty-state";
import { EmptyFrame, sampleIcon, SAMPLE_DESCRIPTION } from "./EmptyState.shared";

/* One page per EmptyState variant, shown under "EmptyState/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is EmptyState → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState/Variants",
  component: EmptyState,
  tags: ["!autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const WithIcon: Story = {
  name: "With icon",
  render: () => (
    <EmptyFrame>
      <EmptyState icon={sampleIcon} message="No data available" />
    </EmptyFrame>
  ),
};

export const WithDescription: Story = {
  name: "With description",
  render: () => (
    <EmptyFrame>
      <EmptyState message="No data available" description={SAMPLE_DESCRIPTION} />
    </EmptyFrame>
  ),
};

export const IconAndDescription: Story = {
  name: "Icon and description",
  render: () => (
    <EmptyFrame>
      <EmptyState icon={sampleIcon} message="No data available" description={SAMPLE_DESCRIPTION} />
    </EmptyFrame>
  ),
};

export const Tones: Story = {
  name: "Tones (Secondary, Disabled)",
  render: () => (
    <div className="flex flex-col gap-4">
      <EmptyFrame>
        <EmptyState tone="secondary" icon={sampleIcon} message="Secondary (default)" description={SAMPLE_DESCRIPTION} />
      </EmptyFrame>
      <EmptyFrame>
        <EmptyState tone="disabled" icon={sampleIcon} message="Disabled" description={SAMPLE_DESCRIPTION} />
      </EmptyFrame>
    </div>
  ),
};
