import type { Meta, StoryObj } from "@storybook/react";
import { ContainerFooter } from "../container-footer";
import { footerButtons } from "./Container.shared";

const meta: Meta<typeof ContainerFooter> = {
  title: "UI/ContainerFooter",
  component: ContainerFooter,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ContainerFooter>;

export const Default: Story = {
  name: "Default",
  parameters: {
    controls: {
      include: ["Alignment", "Border top", "align", "bordered"],
      sort: "none",
    },
  },
  args: { align: "right", bordered: false },
  argTypes: {
    align: {
      name: "Alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the buttons sit: left, right, or stretched to full width.",
      table: { category: "Appearance", defaultValue: { summary: "right" } },
    },
    bordered: {
      name: "Border top",
      control: "boolean",
      description: "Show a border along the top edge of the footer.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    <div className="max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      <ContainerFooter key={JSON.stringify(args)} {...args} actions={footerButtons} />
    </div>
  ),
};

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
