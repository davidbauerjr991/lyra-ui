import { useEffect } from "react";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar";
import type { AvatarSize, AvatarShape, AvatarColor, AvatarBadgePosition } from "../avatar";
import { Badge } from "../badge";
import type { BadgeCircleVariant, BadgeCircleFill, BadgeSize } from "../badge";
import { withControlsFor } from "./storyControls";
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
  /** Badge on the avatar's corner. The rest are the circle `Badge`'s own props (never the pill's). */
  badge?: boolean;
  badgeType?: "dot" | "count";
  badgeCount?: number;
  badgeVariant?: BadgeCircleVariant;
  badgeFill?: BadgeCircleFill;
  badgeBordered?: boolean;
  badgeSize?: "auto" | BadgeSize;
  badgePosition?: AvatarBadgePosition;
  /** Hidden plumbing: "badge is on AND type is count" (`argTypes.if` takes one condition). */
  badgeCountOn?: boolean;
}

// Circle badge size that sits well on each avatar size (used when Badge size is "auto").
const AUTO_BADGE_SIZE: Record<AvatarSize, BadgeSize> = { xs: "sm", sm: "sm", md: "md", lg: "md" };

function AvatarDemo({
  content = "initials",
  size = "md",
  shape = "circle",
  color = "shell",
  badge = false,
  badgeType = "dot",
  badgeCount = 3,
  badgeVariant = "critical",
  badgeFill = "solid",
  badgeBordered = true,
  badgeSize = "auto",
  badgePosition = "top-right",
}: AvatarDemoProps) {
  const badgeNode = badge ? (
    <Badge
      shape="circle"
      dot={badgeType === "dot"}
      count={badgeType === "count" ? badgeCount : undefined}
      variant={badgeVariant}
      fill={badgeFill}
      bordered={badgeBordered}
      size={badgeSize === "auto" ? AUTO_BADGE_SIZE[size] : badgeSize}
    />
  ) : undefined;
  return content === "initials" ? (
    <Avatar initials="AB" size={size} shape={shape} color={color} badge={badgeNode} badgePosition={badgePosition} />
  ) : (
    <Avatar icon={AVATAR_ICONS[content]} size={size} shape={shape} color={color} badge={badgeNode} badgePosition={badgePosition} />
  );
}

type AvatarDemoStory = StoryObj<typeof AvatarDemo>;

export const Default: AvatarDemoStory = withControlsFor({
  args: {
    content: "initials",
    size: "md",
    shape: "circle",
    color: "shell",
    badge: false,
    badgeType: "dot",
    badgeCount: 3,
    badgeVariant: "critical",
    badgeFill: "solid",
    badgeBordered: true,
    badgeSize: "auto",
    badgePosition: "top-right",
    badgeCountOn: false,
  },
  parameters: { controls: { sort: "none" } },
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
    badge: {
      name: "Badge",
      control: "boolean",
      description: "A small circle `Badge` on the avatar's corner (`badge`). Its sub-controls are the circle badge's props.",
      table: { category: "Badge" },
    },
    badgeType: {
      name: "Badge type",
      control: "radio",
      options: ["dot", "count"],
      description: "A plain status dot (`dot`), or a number (`count`).",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgeCount: {
      name: "Count",
      control: { type: "number", min: 0, max: 200 },
      description: "The number shown (`count`); above 99 it reads \"99+\".",
      if: { arg: "badgeCountOn", truthy: true },
      table: { category: "Badge" },
    },
    badgeVariant: {
      name: "Badge variant",
      control: "select",
      options: ["default", "info", "success", "warning", "critical", "neutral"],
      description: "Semantic color role (`variant`).",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgeFill: {
      name: "Badge fill",
      control: "radio",
      options: ["solid", "subtle"],
      description: "Strong fill or tinted fill (`fill`).",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgeBordered: {
      name: "Badge border",
      control: "boolean",
      description: "A 1px border that separates the badge from the avatar (`bordered`).",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgeSize: {
      name: "Badge size",
      control: "radio",
      options: ["auto", "sm", "md", "lg"],
      description: "`auto` picks `sm` for xs/sm avatars and `md` for md/lg ones.",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgePosition: {
      name: "Badge position",
      control: "radio",
      options: ["top-right", "bottom-right"],
      description: "Which corner the badge sits on (`badgePosition`). Status dots usually go bottom-right.",
      if: { arg: "badge", truthy: true },
      table: { category: "Badge" },
    },
    badgeCountOn: { table: { disable: true } },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync so Count only shows for a counted badge.
    const countOn = Boolean(args.badge && args.badgeType === "count");
    useEffect(() => {
      if (args.badgeCountOn !== countOn) updateArgs({ badgeCountOn: countOn });
    }, [args.badgeCountOn, countOn, updateArgs]);
    return (
      // `key` remounts the demo when a control changes.
      <AvatarDemo key={JSON.stringify(args)} {...args} />
    );
  },
});
