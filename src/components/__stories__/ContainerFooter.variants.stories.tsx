import type { Meta, StoryObj } from "@storybook/react";
import { ContainerFooter } from "../container-footer";
import { footerButtons } from "./Container.shared";

/* One page per variant, shown under "ContainerFooter/Variants" in the sidebar. "!autodocs" keeps this
   folder from getting a second Docs page. The interactive playground is ContainerFooter -> Default. */
const meta: Meta<typeof ContainerFooter> = {
  title: "Custom Primitives/ContainerFooter/Variants",
  component: ContainerFooter,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ContainerFooter>;

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div className="flex flex-col divide-y divide-lyra-border-subtle max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden">
      <ContainerFooter align="left" actions={footerButtons} />
      <ContainerFooter align="right" actions={footerButtons} />
      <ContainerFooter align="full" actions={footerButtons} />
      <ContainerFooter align="right" bordered actions={footerButtons} />
    </div>
  ),
};
