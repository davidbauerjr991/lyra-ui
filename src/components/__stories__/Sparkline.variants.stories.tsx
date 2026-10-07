import type { Meta, StoryObj } from "@storybook/react";
import { Sparkline } from "../sparkline";
import { TREND_UP, TREND_DOWN, TREND_FLAT, COLOR_VARS } from "./Sparkline.shared";

const meta: Meta<typeof Sparkline> = {
  title: "Custom Primitives/Sparkline/Variants",
  component: Sparkline,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">{label}</p>
      <div className="h-[60px] w-[160px]">{children}</div>
    </div>
  );
}

/* ── Trend Colors — the colors a consumer pairs with an up / flat / down
   trend in practice, plus the component default. ── */

export const TrendColors: Story = {
  name: "Trend Colors",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <Cell label="Up (success)">
        <Sparkline data={TREND_UP} colorVar={COLOR_VARS.success} aria-label="Upward trend" />
      </Cell>
      <Cell label="Flat (warning)">
        <Sparkline data={TREND_FLAT} colorVar={COLOR_VARS.warning} aria-label="Flat trend" />
      </Cell>
      <Cell label="Down (critical)">
        <Sparkline data={TREND_DOWN} colorVar={COLOR_VARS.critical} aria-label="Downward trend" />
      </Cell>
      <Cell label="Default (active blue)">
        <Sparkline data={TREND_UP} aria-label="Upward trend, default color" />
      </Cell>
    </div>
  ),
};

export const SmoothVsSharp: Story = {
  name: "Smooth vs Sharp",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <Cell label="Sharp (default)">
        <Sparkline data={TREND_UP} aria-label="Upward trend, sharp line" />
      </Cell>
      <Cell label="Smooth">
        <Sparkline data={TREND_UP} smooth aria-label="Upward trend, smooth line" />
      </Cell>
    </div>
  ),
};

export const LineWidths: Story = {
  name: "Line Widths",
  render: () => (
    <div className="flex flex-wrap gap-10">
      {[1, 2, 3, 4].map((w) => (
        <Cell key={w} label={`${w}px${w === 2 ? " (default)" : ""}`}>
          <Sparkline data={TREND_UP} strokeWidth={w} aria-label={`Upward trend, ${w}px line`} />
        </Cell>
      ))}
    </div>
  ),
};

/* ── Accessibility — `aria-label` gives the chart a text alternative;
   `decorative` hides it when the value is already shown as text nearby. ── */

export const Accessibility: Story = {
  name: "Accessibility (Labelled & Decorative)",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <Cell label="Labelled">
        <Sparkline data={TREND_UP} aria-label="Calls trend, last 12 hours, up 300%" />
      </Cell>
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Decorative (value shown as text)</p>
        <div className="flex items-center gap-4">
          <div className="h-[60px] w-[160px]">
            <Sparkline data={TREND_UP} decorative />
          </div>
          <span className="lyra-body-md text-lyra-fg-default">+300% vs last week</span>
        </div>
      </div>
    </div>
  ),
};
