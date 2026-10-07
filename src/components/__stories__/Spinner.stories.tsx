import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../spinner";

const meta: Meta<typeof Spinner> = {
  title: "Custom Primitives/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  // Real Spinner props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    variant: { control: "radio", options: ["bar", "circle"] },
    size:    { control: "radio", options: ["sm", "md", "lg"] },
    color:   { control: "radio", options: ["primary", "inverse"] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/* Multiple Spinner and every variant, size and color side by side each have
   their own page under "Spinner/Variants" — see Spinner.variants.stories.tsx. */

/* ── Default — consolidated Spinner Bar, Spinner Circle and On Dark Background
   into one controls-driven story. The inverse (white) color is made for dark
   surfaces, so it renders on a dark panel; the other color sits on the page
   background. ── */
export const Default: Story = {
  render: (args) =>
    args.color === "inverse" ? (
      <div className="flex items-center justify-center p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <Spinner {...args} />
      </div>
    ) : (
      <Spinner {...args} />
    ),
  args: { variant: "bar", size: "md", color: "primary", label: "Loading", showLabel: false },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Label", "Show label", "Variant", "Size", "Color", "label", "showLabel", "variant", "size", "color"],
      sort: "none",
    },
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Text announced by screen readers. Not shown on screen.",
      table: { category: "Content", defaultValue: { summary: "Loading" } },
    },
    showLabel: {
      name: "Show label",
      control: "boolean",
      description: "Also shows the label as text next to the spinner (`showLabel`). Off keeps it for screen readers only.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    variant: {
      name: "Variant",
      control: "radio",
      options: ["bar", "circle"],
      description: "Three pulsing bars or a pulsing circle.",
      table: { category: "Appearance", defaultValue: { summary: "bar" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Spinner size.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["primary", "inverse"],
      description: "Primary (blue) for light surfaces, inverse (white) for dark surfaces. Inverse shows on a dark panel.",
      table: { category: "Appearance", defaultValue: { summary: "primary" } },
    },
  },
};
