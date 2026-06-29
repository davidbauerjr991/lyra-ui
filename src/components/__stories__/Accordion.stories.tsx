import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "lucide-react";
import { Accordion } from "../accordion";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const icon = <Box className="h-5 w-5" strokeWidth={1.5} />;

const sampleItems = [
  {
    id: "1",
    title: "Section Title",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 1. This area expands when the item is opened.
      </p>
    ),
  },
  {
    id: "2",
    title: "Section Title",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 2. Any React node can go here.
      </p>
    ),
  },
  {
    id: "3",
    title: "Section Title",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 3.
      </p>
    ),
  },
];

/* ── Screenshot 1 — all closed ── */

export const Default: Story = {
  render: () => <Accordion items={sampleItems} />,
};

/* ── Screenshot 2 states ── */

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <Accordion
      type="multiple"
      defaultValues={["2"]}
      items={[
        { ...sampleItems[0] },
        { ...sampleItems[1] },
        {
          id: "disabled",
          title: "Section Title",
          icon,
          disabled: true,
          content: null,
        },
      ]}
    />
  ),
};

export const SingleOpen: Story = {
  name: "Single — One Open",
  render: () => (
    <Accordion items={sampleItems} defaultValue="1" />
  ),
};

export const MultipleOpen: Story = {
  name: "Multiple — Many Open",
  render: () => (
    <Accordion
      type="multiple"
      defaultValues={["1", "3"]}
      items={sampleItems}
    />
  ),
};

export const WithDisabledItem: Story = {
  name: "With Disabled Item",
  render: () => (
    <Accordion
      items={[
        sampleItems[0],
        { ...sampleItems[1], disabled: true },
        sampleItems[2],
      ]}
      defaultValue="1"
    />
  ),
};

export const NoIcons: Story = {
  name: "No Icons",
  render: () => (
    <Accordion
      items={sampleItems.map(({ icon: _icon, ...item }) => item)}
      defaultValue="2"
    />
  ),
};


export const WithSubhead: Story = {
  name: "With Subhead",
  render: () => (
    <Accordion
      items={[
        {
          id: "1",
          title: "Section Title",
          subhead: "Supporting description text",
          icon,
          content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 1.</p>,
        },
        {
          id: "2",
          title: "Section Title",
          subhead: "Supporting description text",
          icon,
          content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 2.</p>,
        },
        {
          id: "3",
          title: "Section Title",
          subhead: "Supporting description text",
          icon,
          disabled: true,
          content: null,
        },
      ]}
    />
  ),
};
