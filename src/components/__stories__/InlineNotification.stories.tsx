import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InlineNotification } from "../inline-notification";

const meta: Meta = {
  title: "Atoms/Inline Notification",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

/* ══════════════════════════════════════════
   Inline Notifications
   ══════════════════════════════════════════ */

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
  ),
};

export const InlineAll: Story = {
  name: "Inline — All Variants",
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
  ),
};

export const InlineWarning: Story = {
  name: "Inline — Warning",
  render: () => (
    <div className="w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
    </div>
  ),
};

export const InlineError: Story = {
  name: "Inline — Error",
  render: () => (
    <div className="w-full">
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
    </div>
  ),
};

export const InlineInfo: Story = {
  name: "Inline — Info",
  render: () => (
    <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
  ),
};

export const InlineSuccess: Story = {
  name: "Inline — Success",
  render: () => (
    <div className="w-full">
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
  ),
};
