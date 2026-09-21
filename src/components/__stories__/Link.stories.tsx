import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Pencil } from "lucide-react";

const meta: Meta<typeof Link> = {
  title: "Custom Primitives/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/* ── Individual stories ──
   Matches the two real, pre-existing hand-rolled patterns this component
   was extracted from: a plain text trigger ("View customer info",
   contact-overview.tsx) and one with a leading icon ("Edit",
   agent-next-gen-customer-info-panel.tsx). */

export const Default: Story = {
  args: {
    children: "View customer info",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "View customer info",
    size: "sm",
  },
};

export const WithIcon: Story = {
  name: "With Leading Icon",
  render: (args) => (
    <Link {...args}>
      <Pencil className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      Edit
    </Link>
  ),
  args: {
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    children: "View customer info",
    size: "md",
    disabled: true,
  },
};
