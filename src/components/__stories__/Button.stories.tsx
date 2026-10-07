import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import { Badge } from "../badge";
import { Sparkles, ChevronDown, MoreIcon, ICON_SIZE_FOR } from "./Button.shared";

const meta: Meta<typeof Button> = {
  title: "Custom Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Real Button props (kept intact so the Docs page lists them). Default's
  // own `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "ghost", "icon"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "md", "lg", "xl", "icon-sm", "icon", "icon-md", "icon-lg", "icon-xl", "icon-2xl"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

/* Variants (styles, states, sizes, icon buttons, with icons, badge) each have
   their own page under "Button/Variants" — see Button.variants.stories.tsx. */

/* ── Default — consolidated Primary, Destructive, Outline, Ghost, Disabled and
   Icon Button into one controls-driven story. `iconStart`, `iconEnd`,
   `iconOnly`, `badge` and `state` are story-only args (not real `Button`
   props): "icon only" swaps the text size for its icon-shaped equivalent
   (and Ghost for the `icon` variant, as in the Figma matrix), and "badge"
   adds a count of 4 — via the `badge` prop on icon buttons, or an inline `Badge` after the label on text buttons. ── */

interface ButtonDemoProps {
  variant?: "default" | "destructive" | "outline" | "ghost";
  state?: "default" | "disabled";
  size?: "sm" | "default" | "lg" | "xl";
  iconStart?: boolean;
  iconEnd?: boolean;
  iconOnly?: boolean;
  badge?: boolean;
  loading?: boolean;
  tooltip?: boolean;
  disabledContrast?: "default" | "high";
}

function ButtonDemo({
  variant = "default",
  state = "default",
  size = "lg",
  iconStart = false,
  iconEnd = false,
  iconOnly = false,
  badge = false,
  loading = false,
  tooltip = true,
  disabledContrast = "default",
}: ButtonDemoProps) {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <Button
        variant={iconOnly && variant === "ghost" ? "icon" : variant}
        size={iconOnly ? ICON_SIZE_FOR[size] : size}
        disabled={state === "disabled"}
        // Icon-only buttons are named with `aria-label`; the `tooltip` prop
        // (a control below) decides whether it also shows as a tooltip.
        aria-label={iconOnly ? "More options" : undefined}
        tooltip={iconOnly ? tooltip : undefined}
        loading={loading}
        disabledContrast={disabledContrast}
        badge={iconOnly && badge ? 4 : undefined}
        onClick={() => setClicks((n) => n + 1)}
      >
        {iconOnly ? (
          <MoreIcon />
        ) : (
          <>
            {iconStart && <Sparkles className="h-4 w-4" strokeWidth={1.5} />}
            Button
            {badge && <Badge shape="circle" variant="critical" size="sm" count={4} />}
            {iconEnd && <ChevronDown className="h-4 w-4" strokeWidth={1.5} />}
          </>
        )}
      </Button>
      <span className="lyra-body-sm text-lyra-fg-secondary">
        Clicked {clicks} {clicks === 1 ? "time" : "times"}
      </span>
    </div>
  );
}

type ButtonDemoStory = StoryObj<typeof ButtonDemo>;

export const Default: ButtonDemoStory = {
  args: {
    variant: "default",
    state: "default",
    size: "lg",
    iconStart: false,
    iconEnd: false,
    iconOnly: false,
    badge: false,
    loading: false,
    tooltip: true,
    disabledContrast: "default",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too so
      // either lookup works.
      include: [
        "State", "Icon start", "Icon end", "Icon only", "With badge", "Type", "Size", "Loading", "Tooltip", "Disabled contrast",
        "state", "iconStart", "iconEnd", "iconOnly", "badge", "variant", "size", "loading", "tooltip", "disabledContrast",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "disabled"],
      labels: { default: "Default", disabled: "Disabled" },
      description: "Disabled blocks clicks and dims the button.",
      table: { category: "Behavior", defaultValue: { summary: "default" } },
    },
    loading: {
      name: "Loading",
      control: "boolean",
      description: "Spinner over the label, `aria-busy`, clicks ignored; the button keeps its width and stays focusable (`loading`). Try it with Clicked count.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    tooltip: {
      name: "Tooltip",
      control: "boolean",
      description: "Icon-only buttons: show the accessible name as a tooltip on hover and keyboard focus (`tooltip`). Never automatic, so a button already wrapped in a Tooltip doesn't show two.",
      if: { arg: "iconOnly", truthy: true },
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    disabledContrast: {
      name: "Disabled contrast",
      control: "radio",
      options: ["default", "high"],
      labels: { default: "Default (40% opacity)", high: "High (readable)" },
      description: "Contrast of a disabled Ghost or icon button (`disabledContrast`). Set State to Disabled and Type to Ghost to compare.",
      if: { arg: "state", eq: "disabled" },
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    iconStart: {
      name: "Icon start",
      control: "boolean",
      description: "Leading icon before the label.",
      if: { arg: "iconOnly", truthy: false },
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    iconEnd: {
      name: "Icon end",
      control: "boolean",
      description: "Trailing icon after the label.",
      if: { arg: "iconOnly", truthy: false },
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    iconOnly: {
      name: "Icon only",
      control: "boolean",
      description: "Square icon button with no label.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    badge: {
      name: "With badge",
      control: "boolean",
      description: "Count badge: on the corner for icon-only buttons (`badge` prop), inline after the label otherwise.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    variant: {
      name: "Type",
      control: "radio",
      options: ["default", "destructive", "outline", "ghost"],
      labels: { default: "Primary", destructive: "Destructive", outline: "Outline", ghost: "Ghost" },
      description: "Visual style of the button.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      labels: { sm: "24px", default: "32px", lg: "36px", xl: "40px" },
      description: "Button height; icon-only buttons are square at the same size.",
      table: { category: "Appearance", defaultValue: { summary: "lg" } },
    },
  },
  render: (args) => <ButtonDemo {...args} />,
};
