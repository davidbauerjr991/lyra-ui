import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "../chart";
import { DonutChart, type DonutChartDatum } from "../donut-chart";
import { cn } from "../../lib/utils";

const meta = {
  title: "Custom Primitives/Chart",
  component: Chart,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    option: { table: { disable: true } },
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Default ──
   Chart is a deliberately generic ECharts wrapper — any valid ECharts
   `option` object renders as-is. Chart-type-specific components (see
   DonutChart below) build that option and own any lyra-token color
   resolution; this story just proves the wrapper itself works with a plain
   bar chart, the simplest possible option shape. */

export const Default: Story = {
  render: () => (
    <div className="h-[280px] w-[420px]">
      <Chart
        option={{
          xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
          yAxis: { type: "value" },
          series: [{ type: "bar", data: [12, 19, 8, 15, 11] }],
        }}
      />
    </div>
  ),
};

/* ── AllVariants ──
   Same wrapper, a different ECharts series type (line instead of bar) —
   demonstrates Chart makes no assumptions about chart type. */

export const AllVariants: Story = {
  name: "AllVariants",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Bar</p>
        <div className="h-[220px] w-[420px]">
          <Chart
            option={{
              xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
              yAxis: { type: "value" },
              series: [{ type: "bar", data: [12, 19, 8, 15, 11] }],
            }}
          />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Line</p>
        <div className="h-[220px] w-[420px]">
          <Chart
            option={{
              xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
              yAxis: { type: "value" },
              series: [{ type: "line", data: [12, 19, 8, 15, 11], smooth: true }],
            }}
          />
        </div>
      </div>
    </div>
  ),
};

/* ── Donut ──
   DonutChart — a ring/donut chart-type component built on top of `Chart`
   (not a raw `option` passthrough like Bar/Line above; see donut-chart.tsx's
   own doc comment for why it owns its own props/color-resolution instead of
   Chart growing a variant prop for every chart type). Moved into this same
   story file/category from its own former `DonutChart.stories.tsx` file —
   same component, same props, just grouped alongside Chart's other
   ECharts-backed examples instead of a separate top-level story entry. */

/* Same status breakdown shape the home screen's Activity card uses. */
const ACTIVITY_DATA: (DonutChartDatum & { dotClassName: string })[] = [
  { label: "Available",   value: 22, colorVar: "var(--lyra-color-status-success-strong)",  dotClassName: "bg-lyra-status-success-strong" },
  { label: "Working",     value: 61, colorVar: "var(--lyra-color-status-warning-strong)",  dotClassName: "bg-lyra-status-warning-strong" },
  { label: "Unavailable", value: 17, colorVar: "var(--lyra-color-status-critical-strong)", dotClassName: "bg-lyra-status-critical-strong" },
];

export const Donut: Story = {
  name: "Donut",
  render: () => (
    <div className="h-[160px] w-[160px]">
      <DonutChart data={ACTIVITY_DATA} />
    </div>
  ),
};

/* ── DonutVariants ──
   Ring-only (default), a thinner ring via a smaller innerRadius, and the
   "ring + external legend" composition every real consumer (e.g. the home
   screen's Activity card) actually uses — DonutChart intentionally has no
   legend of its own (see the component's own doc comment), so the third
   example shows the intended pairing: showTooltip disabled, with a
   consumer-owned legend built from the same `data` array sitting next to
   it. */

export const DonutVariants: Story = {
  name: "Donut - All Variants",
  render: () => (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Thinner ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} innerRadius="80%" outerRadius="95%" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Ring + external legend</p>
        <div className="flex items-center gap-4">
          <div className="h-[120px] w-[120px] shrink-0">
            <DonutChart data={ACTIVITY_DATA} showTooltip={false} />
          </div>
          <div className="flex flex-col gap-2">
            {ACTIVITY_DATA.map((d) => (
              <div key={d.label} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary">
                  <span className={cn("h-2.5 w-2.5 rounded-full", d.dotClassName)} aria-hidden="true" />
                  {d.label}
                </span>
                <span className="lyra-heading-sm text-lyra-fg-default">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
