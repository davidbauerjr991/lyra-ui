import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../icon";
import type { IconColor, IconSize, IconBackground, IconShape } from "../icon";
import {
  ICON_SIZES,
  ICON_COLORS,
  ICON_BACKGROUNDS,
  ICON_SHAPES,
  ICON_GLYPHS,
} from "./Icon.shared";

const meta: Meta<typeof Icon> = {
  title: "Custom Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (informative status icons, inside an Input, color × size table,
   background variants, status-indicator patterns, solid status icons, common
   icons) each have their own page under "Icon/Variants" — see
   Icon.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Decorative Icon, Tooltip Icon, Sizes and Colors into a single playground.
   Icon is display-only, so there is no state to wire. ── */

interface IconDemoProps {
  accessibility?: "decorative" | "label" | "tooltip";
  spin?: boolean;
  glyph?: keyof typeof ICON_GLYPHS;
  label?: string;
  size?: IconSize;
  background?: IconBackground;
  color?: IconColor;
  shape?: IconShape;
}

function IconDemo({
  accessibility = "decorative",
  spin = false,
  glyph = "star",
  label = "Notifications",
  size = "md",
  background = "none",
  color = "inherit",
  shape = "rounded",
}: IconDemoProps) {
  return (
    <Icon
      icon={ICON_GLYPHS[glyph]}
      size={size}
      background={background}
      color={color}
      shape={shape}
      spin={spin}
      decorative={accessibility === "decorative"}
      label={accessibility === "decorative" ? undefined : label}
      tooltip={accessibility === "tooltip"}
    />
  );
}

type IconDemoStory = StoryObj<typeof IconDemo>;

export const Default: IconDemoStory = {
  args: {
    accessibility: "decorative",
    spin: false,
    glyph: "star",
    label: "Notifications",
    size: "md",
    background: "none",
    color: "inherit",
    shape: "rounded",
  },
  parameters: {
    controls: {
      include: [
        "accessibility",
        "spin",
        "glyph",
        "label",
        "size",
        "background",
        "color",
        "shape",
        "Accessibility",
        "Spin",
        "Glyph",
        "Label",
        "Size",
        "Background",
        "Color",
        "Shape",
      ],
      sort: "none",
    },
  },
  argTypes: {
    accessibility: {
      name: "Accessibility",
      control: "radio",
      options: ["decorative", "label", "tooltip"],
      description:
        "Decorative hides the icon from screen readers (`decorative`). Label gives it an accessible name (`label`). Tooltip also shows that label on hover (`tooltip`).",
      table: { category: "Behavior" },
    },
    spin: {
      name: "Spin",
      control: "boolean",
      description: "Rotates the glyph continuously, for an in-progress state (`spin`).",
      table: { category: "Behavior" },
    },
    glyph: {
      name: "Glyph",
      control: "select",
      options: Object.keys(ICON_GLYPHS),
      description: "Which icon to draw (`icon`).",
      table: { category: "Content" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Accessible name, and tooltip text when Accessibility is set to tooltip.",
      if: { arg: "accessibility", neq: "decorative" },
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ICON_SIZES,
      description: "Glyph and container size (`size`).",
      table: { category: "Appearance" },
    },
    background: {
      name: "Background",
      control: "select",
      options: ICON_BACKGROUNDS,
      description: "Fill behind the glyph. None draws the glyph alone (`background`).",
      table: { category: "Appearance" },
    },
    color: {
      name: "Color",
      control: "select",
      options: ICON_COLORS,
      description: "Glyph color. Only used when there is no background; a background sets its own color (`color`).",
      if: { arg: "background", eq: "none" },
      table: { category: "Appearance" },
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: ICON_SHAPES,
      description: "Container shape. Only used when a background is set (`shape`).",
      if: { arg: "background", neq: "none" },
      table: { category: "Appearance" },
    },
  },
  render: (args) => <IconDemo key={JSON.stringify(args)} {...args} />,
};
