import type { Meta, StoryObj } from "@storybook/react";
import { BarChart3 } from "lucide-react";
import { EmptyState } from "../empty-state";

const meta = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState />
    </div>
  ),
};

export const WithIcon: Story = {
  name: "With icon",
  render: () => (
    <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState icon={<BarChart3 className="h-8 w-8" strokeWidth={1.5} />} message="No data available" />
    </div>
  ),
};

export const WithDescription: Story = {
  name: "With description",
  render: () => (
    <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState
        message="No data available"
        description="Data will appear here once this campaign starts sending."
      />
    </div>
  ),
};
