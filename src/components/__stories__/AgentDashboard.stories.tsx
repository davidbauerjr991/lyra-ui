import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { PhoneOutgoing, RotateCcw } from "lucide-react";
import { Button } from "../button";
import { Container } from "../container";
import { InteriorPanel } from "../interior-panel";
import {
  AgentDashboard,
  AgentDashboardQueueDrilldown,
  AgentDashboardContactHistoryEntryDetail,
  AGENT_DASHBOARD_QUEUE_ITEMS,
  AGENT_DASHBOARD_QUEUE_SUB_ITEMS,
  type AgentDashboardContactHistoryEntry,
} from "../agent-dashboard";

/* ── Agent Dashboard ──
   The Agent Next Gen "Home" tab, promoted out of agent-next-gen-v1's own
   hand-built page into a real shared component (`AgentDashboard`, see
   agent-dashboard.tsx) — this story is just that component dropped into a
   minimal page shell (a `Container` plus a single right-side `InteriorPanel`
   shared by both the queue drill-down and the Contact History entry detail,
   queue taking priority; no `PageHeader`/tabs — those are the consuming
   page's own chrome, not part of this template). The panel's Redial/Re-open
   footer button is built here (mutually exclusive by `entry.redial`), same
   as `AgentNextGenTemplate.stories.tsx`'s "Agent Home Dashboard" story.
   Every other "Agent Next Gen" consumer (agent-next-gen-v1,
   `lyra-ux-templates`, and this library's own `Templates/Agent Next Gen`
   story) can render the identical `<AgentDashboard>` for their own Home tab
   instead of hand-copying this page's content — see `AgentDashboard`'s own
   doc comment for the full rationale.

   Filed under `UI/Agent Dashboard` (moved out of `Templates` per explicit
   request) rather than alongside `Templates/Dashboards`
   (Dashboards.stories.tsx): `AgentDashboard` is one specific, fully-baked
   persona's content (this exact greeting, these exact queue widgets,
   Contact History + Redial, this exact Performance/Productivity pair), not
   the generic reusable shell. `Templates/Dashboards` shows that generic
   shell (`DashboardTemplate`, dashboard-template.tsx) with placeholder
   cards instead — see PROJECT_SUMMARY.md's "AgentDashboard shouldn't be
   the template" entry for why these were split apart. */

function AgentDashboardTemplate() {
  const [selectedQueueId, setSelectedQueueId] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<AgentDashboardContactHistoryEntry | null>(null);

  const closePanel = () => {
    setSelectedQueueId(null);
    setSelectedEntry(null);
  };

  return (
    <div className="flex h-screen bg-lyra-bg-surface-shell overflow-hidden p-3">
      <Container className="flex flex-1 overflow-hidden relative">
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto px-6 py-6">
          <AgentDashboard
            agentFirstName="John"
            selectedQueueId={selectedQueueId}
            onSelectQueueId={(id) => {
              setSelectedEntry(null);
              setSelectedQueueId(id);
            }}
            selectedContactHistoryEntryId={selectedEntry?.id ?? null}
            onSelectContactHistoryEntry={(entry) => {
              setSelectedQueueId(null);
              setSelectedEntry(entry);
            }}
          />
        </div>
        <InteriorPanel
          side="right"
          open={Boolean(selectedQueueId) || Boolean(selectedEntry)}
          headerTitle={
            selectedQueueId
              ? AGENT_DASHBOARD_QUEUE_ITEMS.find((item) => item.id === selectedQueueId)?.name ?? "Queue"
              : selectedEntry?.name ?? "Queue"
          }
          headerSubhead={
            selectedQueueId
              ? `${(AGENT_DASHBOARD_QUEUE_SUB_ITEMS[selectedQueueId] ?? []).length} Skills`
              : selectedEntry?.skillName
          }
          footer={
            selectedEntry ? (
              selectedEntry.redial ? (
                <Button variant="outline" onClick={closePanel}>
                  <PhoneOutgoing className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Redial
                </Button>
              ) : (
                <Button onClick={closePanel}>
                  <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Re-open
                </Button>
              )
            ) : undefined
          }
          onClose={closePanel}
        >
          {selectedQueueId && <AgentDashboardQueueDrilldown queueId={selectedQueueId} />}
          {selectedEntry && <AgentDashboardContactHistoryEntryDetail entry={selectedEntry} />}
        </InteriorPanel>
      </Container>
    </div>
  );
}

/* ── Storybook Meta ── */

const meta: Meta<typeof AgentDashboardTemplate> = {
  title: "UI/Agent Dashboard",
  component: AgentDashboardTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof AgentDashboardTemplate>;

export const Default: Story = {
  name: "Agent Dashboard",
  render: () => <AgentDashboardTemplate />,
};
