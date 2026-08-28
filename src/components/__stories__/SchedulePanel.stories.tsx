import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SchedulePanel, type ScheduleView } from "../schedule-panel";
import { ContainerHeader } from "../container-header";

/* ── SchedulePanel stories ──
   The "Schedule" app panel from the Agent Next Gen AppHeader's top-right
   app area (ported from agent-next-gen-v2's SchedulePanel): a Day/Week
   toolbar (date nav chevrons, a date-jump Calendar popover, Today, a
   Day/Week `ToggleGroup`, an Add `Select` menu), a sticky "Shift" resource
   lane, and a 24-hour grid with a live current-time indicator on today's
   column. No real event data yet — the reference shows an empty grid. Its
   real home is the shared app panel in AgentNextGenTemplate.stories.tsx
   (via `useScheduleContent`); these stories show the standalone component
   inside a panel-shaped frame with a `ContainerHeader` mimicking that
   context (`bordered={false}` — the component's own toolbar row carries
   the divider). The toolbar is container-measured: it collapses to two
   rows below 768px of its own width and to icon-only Day/Week + Add below
   400px, so the narrow Default frame and the wide Week frame exercise
   different toolbar states. */

const meta: Meta<typeof SchedulePanel> = {
  title: "UI/Schedule",
  component: SchedulePanel,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    defaultView: { control: "select", options: ["day", "week"] },
    view: { table: { disable: true } },
    onViewChange: { table: { disable: true } },
    anchorDate: { table: { disable: true } },
    defaultAnchorDate: { table: { disable: true } },
    onAnchorDateChange: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof SchedulePanel>;

/** Stateful wrapper — hooks can't live in a story's render fn. Fully
 *  controlled per the repo's controlled-components convention. */
function SchedulePanelDemo({
  defaultView = "day",
  width = 380,
}: {
  defaultView?: ScheduleView;
  width?: number;
}) {
  const [view, setView] = useState<ScheduleView>(defaultView);
  const [anchorDate, setAnchorDate] = useState<Date>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  return (
    <div
      className="flex h-[560px] flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base"
      style={{ width }}
    >
      <ContainerHeader title="Schedule" bordered={false} />
      <SchedulePanel
        view={view}
        onViewChange={setView}
        anchorDate={anchorDate}
        onAnchorDateChange={setAnchorDate}
      />
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <SchedulePanelDemo key={args.defaultView} defaultView={args.defaultView} />
  ),
};

/** Week view at a docked-panel-max-ish width — all 7 day columns plus the
 *  wide single-row toolbar. */
export const WeekView: Story = {
  name: "Week View (wide)",
  render: () => <SchedulePanelDemo defaultView="week" width={960} />,
};
