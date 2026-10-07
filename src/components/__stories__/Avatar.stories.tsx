import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar";
import type { AvatarSize, AvatarShape, AvatarColor } from "../avatar";
import { AVATAR_SIZES, AVATAR_SHAPES, AVATAR_COLORS, AVATAR_ICONS } from "./Avatar.shared";

const meta: Meta<typeof Avatar> = {
  title: "Custom Primitives/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (initials vs. icon, sizes, shapes, colors, real-world usage) each
   have their own page under "Avatar/Variants" — see
   Avatar.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Playground, Initials vs. fallback icon, Sizes, Shapes and Colors into a
   single playground: use the Controls panel to try every size / shape /
   color / initials-vs-icon combination. ── */

interface AvatarDemoProps {
  content?: "initials" | "user" | "headphones" | "bot" | "bell";
  size?: AvatarSize;
  shape?: AvatarShape;
  color?: AvatarColor;
}

function AvatarDemo({
  content = "initials",
  size = "md",
  shape = "circle",
  color = "shell",
}: AvatarDemoProps) {
  return content === "initials" ? (
    <Avatar initials="AB" size={size} shape={shape} color={color} />
  ) : (
    <Avatar icon={AVATAR_ICONS[content]} size={size} shape={shape} color={color} />
  );
}

type AvatarDemoStory = StoryObj<typeof AvatarDemo>;

export const Default: AvatarDemoStory = {
  args: {
    content: "initials",
    size: "md",
    shape: "circle",
    color: "shell",
  },
  parameters: {
    controls: {
      include: [
        "content",
        "size",
        "shape",
        "color",
        "Content",
        "Size",
        "Shape",
        "Color",
      ],
      sort: "none",
    },
  },
  argTypes: {
    content: {
      name: "Content",
      control: "select",
      options: ["initials", "user", "headphones", "bot", "bell"],
      description:
        "Initials (a known person) or a fallback glyph (`icon`) for an unidentified or generic one.",
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: AVATAR_SIZES,
      description: "xs 28px, sm 32px, md 36px, lg 44px.",
      table: { category: "Appearance" },
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: AVATAR_SHAPES,
      description: "Circle, or the small rounded square used by the collapsed left-nav tile.",
      table: { category: "Appearance" },
    },
    color: {
      name: "Color",
      control: "select",
      options: AVATAR_COLORS.map(([color]) => color),
      description: "Background and glyph color pair.",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <AvatarDemo key={JSON.stringify(args)} {...args} />
  ),
};
