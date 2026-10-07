import type { Meta, StoryObj } from "@storybook/react";
import { Sparkline } from "../sparkline";
import { TREND_DATA, COLOR_VARS } from "./Sparkline.shared";
import type { Trend, TrendColor } from "./Sparkline.shared";

const meta: Meta<typeof Sparkline> = {
  title: "Custom Primitives/Sparkline",
  component: Sparkline,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (trend colors, smooth vs sharp, line widths, accessibility) each
   have their own page under "Sparkline/Variants" — see
   Sparkline.variants.stories.tsx. */

/* ── Default — one controls-driven story. Sparkline is display-only, so
   there is no state to wire. "Accessibility" covers the labelled and
   decorative cases (`aria-label` / `decorative`). ── */

interface SparklineDemoProps {
  trend?: Trend;
  color?: TrendColor;
  smooth?: boolean;
  strokeWidth?: number;
  accessibility?: "label" | "decorative";
  accessibleLabel?: string;
}

function SparklineDemo({
  trend = "up",
  color = "default",
  smooth = false,
  strokeWidth = 2,
  accessibility = "label",
  accessibleLabel = "Calls trend, last 12 hours",
}: SparklineDemoProps) {
  return (
    <div className="h-[60px] w-[160px]">
      <Sparkline
        data={TREND_DATA[trend]}
        colorVar={COLOR_VARS[color]}
        smooth={smooth}
        strokeWidth={strokeWidth}
        decorative={accessibility === "decorative"}
        aria-label={accessibility === "label" ? accessibleLabel : undefined}
      />
    </div>
  );
}

type SparklineDemoStory = StoryObj<typeof SparklineDemo>;

export const Default: SparklineDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so the
  // Docs page's autodocs table still lists every real Sparkline prop.
  // Storybook matches `include` against each control's display `name`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: [
        "accessibility", "accessibleLabel", "trend", "color", "smooth", "strokeWidth",
        "Accessibility", "Accessible label", "Trend", "Color", "Smooth curve", "Line width",
      ],
      sort: "none",
    },
  },
  args: {
    accessibility: "label",
    accessibleLabel: "Calls trend, last 12 hours",
    trend: "up",
    color: "default",
    smooth: false,
    strokeWidth: 2,
  },
  argTypes: {
    accessibility: {
      name: "Accessibility",
      control: "radio",
      options: ["label", "decorative"],
      description:
        "Label: announces a text alternative (`aria-label`). Decorative: hides the chart from assistive tech (`decorative`) when the value is already shown as text nearby.",
      table: { category: "Behavior" },
    },
    accessibleLabel: {
      name: "Accessible label",
      control: "text",
      description: "The text alternative announced for the chart (`aria-label`).",
      if: { arg: "accessibility", eq: "label" },
      table: { category: "Behavior" },
    },
    trend: {
      name: "Trend",
      control: "radio",
      options: ["up", "flat", "down"],
      description: "Which sample series is plotted (`data`).",
      table: { category: "Content" },
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["default", "success", "warning", "critical"],
      description:
        "Line and fill color (`colorVar`). Default is the active blue; success / warning / critical match DashboardCard's trend arrows.",
      table: { category: "Appearance" },
    },
    smooth: {
      name: "Smooth curve",
      control: "boolean",
      description: "Smoothed curve instead of straight segments between points (`smooth`).",
      table: { category: "Appearance" },
    },
    strokeWidth: {
      name: "Line width",
      control: "radio",
      options: [1, 2, 3, 4],
      description: "Line stroke width in px (`strokeWidth`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <SparklineDemo key={JSON.stringify(args)} {...args} />
  ),
};
