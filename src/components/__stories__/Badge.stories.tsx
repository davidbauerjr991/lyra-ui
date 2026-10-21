import { useEffect } from "react";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { withControlsFor } from "./storyControls";
import { Bell, Check, Info, Minus, X } from "lucide-react";
import { Badge } from "../badge";
import type { BadgeColor, BadgeIconPosition, BadgePillVariant, BadgeCircleVariant, BadgeCircleFill, BadgeSize } from "../badge";
import { PILL_COLORS, PILL_VARIANTS, CIRCLE_VARIANTS, BADGE_SIZES } from "./Badge.shared";

/* Badge merges the former `Chip` (pill shape) and `StatusBadge` (circle
   shape) into one component discriminated on `shape` — see badge.tsx's own
   doc comment. */

const meta: Meta<typeof Badge> = {
  title: "Custom Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (every pill color/variant, circle variants, sizes, count overflow,
   positioned on an icon button or avatar, text content) each have their own
   page under "Badge/Variants" — see Badge.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default (pill) and Circle - Default into a single playground: switch
   "Shape" to move between the two. Badge is display-only, so there is no
   state to wire. ── */

type CircleContent = "number" | "icon" | "dot" | "word";
type CircleIcon = "check" | "minus" | "bell" | "x";

const ICONS = { check: Check, minus: Minus, bell: Bell, x: X, info: Info };
type PillIcon = keyof typeof ICONS;
const ICON_CLASS: Record<BadgeSize, string> = { sm: "h-2 w-2", md: "h-2.5 w-2.5", lg: "h-3 w-3" };

interface BadgeDemoProps {
  label?: string;
  circleContent?: CircleContent;
  circleNumber?: number;
  circleWord?: string;
  circleIcon?: CircleIcon;
  shape?: "pill" | "circle";
  pillColor?: BadgeColor;
  pillVariant?: BadgePillVariant;
  showIcon?: boolean;
  iconPosition?: BadgeIconPosition;
  pillIcon?: PillIcon;
  pillFontSize?: "Default" | "12px" | "14px" | "16px";
  circleVariant?: BadgeCircleVariant;
  circleFill?: BadgeCircleFill;
  circleBorder?: boolean;
  size?: BadgeSize;
  circlePulse?: boolean;
  /** Hidden plumbing: "circle shape AND dot content" (`argTypes.if` takes one condition). */
  circlePulseOn?: boolean;
  /** Hidden plumbing: the pill, or a circle showing a word (the shapes that can carry an icon). */
  showIconOn?: boolean;
}

function BadgeDemo({
  label = "Badge",
  circleContent = "number",
  circleNumber = 5,
  circleWord = "New",
  circleIcon = "check",
  shape = "pill",
  pillColor = "slate",
  pillVariant = "subtle",
  showIcon = false,
  iconPosition = "left",
  pillIcon = "check",
  pillFontSize = "Default",
  circleVariant = "default",
  circleFill = "solid",
  circleBorder = false,
  size = "md",
  circlePulse = false,
}: BadgeDemoProps) {
  const IconGlyph = ICONS[pillIcon];
  if (shape === "pill") {
    return (
      <Badge
        shape="pill"
        color={pillColor}
        variant={pillVariant}
        icon={showIcon ? (() => { const PillGlyph = ICONS[pillIcon]; return <PillGlyph strokeWidth={2} />; })() : undefined}
        iconPosition={iconPosition}
        fontSize={pillFontSize === "Default" ? undefined : (Number.parseInt(pillFontSize, 10) as 12 | 14 | 16)}
      >
        {label}
      </Badge>
    );
  }
  switch (circleContent) {
    case "dot":
      return <Badge shape="circle" variant={circleVariant} fill={circleFill} bordered={circleBorder} size={size} dot pulse={circlePulse} />;
    case "word":
      return (
        <Badge
          shape="circle"
          variant={circleVariant}
          fill={circleFill}
          bordered={circleBorder}
          size={size}
          icon={showIcon ? <IconGlyph strokeWidth={2} /> : undefined}
          iconPosition={iconPosition}
        >
          {circleWord}
        </Badge>
      );
    case "icon": {
      const Icon = ICONS[circleIcon];
      return (
        <Badge shape="circle" variant={circleVariant} fill={circleFill} bordered={circleBorder} size={size} className="px-0" aria-label={circleIcon}>
          <Icon className={ICON_CLASS[size]} strokeWidth={3} aria-hidden="true" />
        </Badge>
      );
    }
    default:
      return <Badge shape="circle" variant={circleVariant} fill={circleFill} bordered={circleBorder} size={size} count={circleNumber} />;
  }
}

type BadgeDemoStory = StoryObj<typeof BadgeDemo>;

export const Default: BadgeDemoStory = withControlsFor({
  args: {
    label: "Badge",
    circleContent: "number",
    circleNumber: 5,
    circleWord: "New",
    circleIcon: "check",
    shape: "pill",
    pillColor: "slate",
    pillVariant: "subtle",
    showIcon: false,
    iconPosition: "left",
    pillIcon: "check",
    pillFontSize: "Default",
    circleVariant: "default",
    circleFill: "solid",
    circleBorder: false,
    size: "md",
    circlePulse: false,
    circlePulseOn: false,
  },
  parameters: { controls: { sort: "none" } },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Text inside a pill badge.",
      if: { arg: "shape", eq: "pill" },
      table: { category: "Content" },
    },
    circleContent: {
      name: "Circle content",
      control: "radio",
      options: ["number", "icon", "dot", "word"],
      description: "What a circle badge shows: a number (`count`, capped at 99+), an icon glyph, a plain dot (`dot`), or a word.",
      if: { arg: "shape", eq: "circle" },
      table: { category: "Content" },
    },
    circleNumber: {
      name: "Number",
      control: { type: "number", min: 0, max: 999 },
      description: "The count shown (`count`). Anything over 99 renders as 99+.",
      if: { arg: "circleContent", eq: "number" },
      table: { category: "Content" },
    },
    circleIcon: {
      name: "Icon",
      control: "select",
      options: ["check", "minus", "bell", "x"],
      description: "Glyph passed as the badge's child; sized to the badge.",
      if: { arg: "circleContent", eq: "icon" },
      table: { category: "Content" },
    },
    circleWord: {
      name: "Word",
      control: "text",
      description: "Short text passed as the badge's child.",
      if: { arg: "circleContent", eq: "word" },
      table: { category: "Content" },
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: ["pill", "circle"],
      description: "Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",
      table: { category: "Appearance" },
    },
    pillColor: {
      name: "Color",
      options: PILL_COLORS,
      control: { type: "select", labels: { critical: "critical (error)" } },
      description: "Accent color family, or a semantic status color: success, info, warning, critical (error) (`color`).",
      if: { arg: "shape", eq: "pill" },
      table: { category: "Appearance" },
    },
    pillVariant: {
      name: "Fill",
      control: "radio",
      options: PILL_VARIANTS,
      description: "Subtle tint or solid fill (`variant`).",
      if: { arg: "shape", eq: "pill" },
      table: { category: "Appearance" },
    },
    showIcon: {
      name: "Show icon",
      control: "boolean",
      description: "Adds a decorative icon (`icon`). Available on a pill, and on a circle showing a word.",
      if: { arg: "showIconOn", truthy: true },
      table: { category: "Content" },
    },
    iconPosition: {
      name: "Icon position",
      control: "radio",
      options: ["left", "right", "both"],
      description: "Icon before the label, after it, or on both sides (`iconPosition`).",
      if: { arg: "showIcon", truthy: true },
      table: { category: "Content" },
    },
    pillIcon: {
      name: "Icon glyph",
      control: "select",
      options: ["check", "info", "bell", "minus", "x"],
      description: "Which icon is passed as `icon`.",
      if: { arg: "showIcon", truthy: true },
      table: { category: "Content" },
    },
    pillFontSize: {
      name: "Font size",
      control: "radio",
      options: ["Default", "12px", "14px", "16px"],
      description: "Pill font size (`fontSize`): 12, 14 or 16px. Default keeps the standard pill text style.",
      if: { arg: "shape", eq: "pill" },
      table: { category: "Appearance" },
    },
    circlePulse: {
      name: "Pulse",
      control: "boolean",
      description: "A ring of the dot's color radiates outward and fades on a loop — the new-assignment indicator look (`pulse`). Dot content only; off for reduced-motion users.",
      if: { arg: "circlePulseOn", truthy: true },
      table: { category: "Appearance" },
    },
    circlePulseOn: { table: { disable: true } },
    showIconOn: { table: { disable: true } },
    circleVariant: {
      name: "Color",
      control: "select",
      options: CIRCLE_VARIANTS,
      description: "Semantic color role (`variant`): default, info, success, warning, critical or neutral.",
      if: { arg: "shape", eq: "circle" },
      table: { category: "Appearance" },
    },
    circleFill: {
      name: "Fill",
      control: "radio",
      options: ["solid", "subtle"],
      description: "Solid (strong background) or subtle (tinted background) (`fill`).",
      if: { arg: "shape", eq: "circle" },
      table: { category: "Appearance" },
    },
    circleBorder: {
      name: "Border",
      control: "boolean",
      description: "Adds a 1px border (`bordered`): white on a solid fill, the solid version of the selected Color on a subtle fill.",
      if: { arg: "shape", eq: "circle" },
      table: { category: "Appearance" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: BADGE_SIZES,
      description: "Circle diameter and text size (`size`).",
      if: { arg: "shape", eq: "circle" },
      table: { category: "Appearance" },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync so Pulse only shows for a circle dot.
    const pulseOn = args.shape === "circle" && args.circleContent === "dot";
    // Show icon applies to a pill and to a circle showing a word.
    const iconOn = args.shape === "pill" || (args.shape === "circle" && args.circleContent === "word");
    useEffect(() => {
      if (args.circlePulseOn !== pulseOn) updateArgs({ circlePulseOn: pulseOn });
      if (args.showIconOn !== iconOn) updateArgs({ showIconOn: iconOn });
    }, [args.circlePulseOn, pulseOn, args.showIconOn, iconOn, updateArgs]);
    return (
      // `key` remounts the demo when a control changes.
      <BadgeDemo key={JSON.stringify(args)} {...args} />
    );
  },
});
