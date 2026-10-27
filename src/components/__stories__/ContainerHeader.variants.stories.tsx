import type { Meta, StoryObj } from "@storybook/react";
import { ContainerHeader } from "../container-header";
import { Button } from "../button";
import { Badge } from "../badge";
import { InfoIcon } from "../icons/info-icon";

/* One page per variant, shown under "ContainerHeader/Variants" in the sidebar. "!autodocs" keeps this
   folder from getting a second Docs page. The interactive playground is ContainerHeader -> Default. */
const meta: Meta<typeof ContainerHeader> = {
  title: "Custom Primitives/ContainerHeader/Variants",
  component: ContainerHeader,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ContainerHeader>;

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div className="flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base">
      <ContainerHeader title="Title only" bordered={false} />
      <ContainerHeader title="With close" bordered={false} onClose={() => {}} />
      <ContainerHeader title="With icon" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
      <ContainerHeader title="With actions" bordered={false} onClose={() => {}}
        actions={<Button variant="outline" size="md">Action</Button>} />
      <ContainerHeader title="With buttons" bordered={false} onClose={() => {}}
        actions={
          <>
            <Button variant="outline" size="md">Action</Button>
            <Button variant="outline" size="md">Action</Button>
          </>
        } />
      <ContainerHeader title="With badge" bordered={false} onClose={() => {}}
        titleBadge={<Badge shape="circle" count={3} variant="default" size="sm" />} />
      <ContainerHeader title="With subhead" subhead="Secondary description text" bordered={false} onClose={() => {}} />
    </div>
  ),
};

/* A string title cut off by a narrow header shows in full in a tooltip on hover (DashboardCard's and every Container
   header's); one that fits shows none. */
export const TruncatedTitle: Story = {
  name: "Truncated Title",
  render: () => (
    <div className="flex w-64 flex-col divide-y divide-lyra-border-subtle rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      <ContainerHeader title="Service level by queue for the spring returns window" bordered={false} />
      <ContainerHeader title="Pipeline" bordered={false} />
    </div>
  ),
};
