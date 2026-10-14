import type { Meta, StoryObj } from "@storybook/react";
import { AgentNotifications } from "../agent-notifications";
import { SAMPLE_NOTIFICATIONS } from "./AgentNotifications.shared";

/* Static references for design review; the interactive playground is
   AgentNotifications → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof AgentNotifications> = {
  title: "UI/AgentNotifications/Variants",
  component: AgentNotifications,
  tags: ["!autodocs"],
  parameters: { layout: "fullscreen", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof AgentNotifications>;

const noop = () => {};

/* Each panel docked in its own fixed-height box so the three states sit side by side. */
export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex gap-6 overflow-x-auto bg-lyra-bg-surface-shell p-6">
      {[
        { label: "Unread (some highlighted, count badge)", items: SAMPLE_NOTIFICATIONS },
        { label: "All read (no badge, no \"Mark all as read\")", items: SAMPLE_NOTIFICATIONS.map((n) => ({ ...n, read: true })) },
        { label: "Empty", items: [] },
      ].map(({ label, items }) => (
        <div key={label} className="flex shrink-0 flex-col gap-2">
          <p className="lyra-body-sm text-lyra-fg-secondary">{label}</p>
          <div className="h-[520px] w-[320px]">
            <AgentNotifications
              notifications={items}
              draggableVariant="docked"
              onMarkAllRead={noop}
              onClearAll={noop}
              onDismiss={noop}
              onNotificationClick={noop}
              onClose={noop}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
