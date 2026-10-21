import type { Meta, StoryObj } from "@storybook/react";
import { AIProcess } from "../ai-process";

/* One page per AIProcess look, shown under "AIProcess/Variants" in the sidebar. Static references for
   design review; the interactive playground is AIProcess → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof AIProcess> = {
  title: "UI/AIProcess/Variants",
  component: AIProcess,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof AIProcess>;

export const AllDone: Story = {
  name: "All steps done",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        defaultExpanded
        steps={[
          { id: "1", label: "Reviewing account history",          status: "done" },
          { id: "2", label: "Checking recent login events",        status: "done" },
          { id: "3", label: "Verifying 2FA configuration",         status: "done" },
          { id: "4", label: "Identifying likely root cause",        status: "done" },
          { id: "5", label: "Generating recommended action",        status: "done" },
        ]}
      />
    </div>
  ),
};

export const InProgress: Story = {
  name: "In progress",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        defaultExpanded
        steps={[
          { id: "1", label: "Reviewing account history",          status: "done" },
          { id: "2", label: "Checking recent login events",        status: "done" },
          { id: "3", label: "Verifying 2FA configuration",         status: "active", description: "Analysing device fingerprint…" },
          { id: "4", label: "Identifying likely root cause",        status: "pending" },
          { id: "5", label: "Generating recommended action",        status: "pending" },
        ]}
      />
    </div>
  ),
};

export const WithError: Story = {
  name: "With error",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        defaultExpanded
        steps={[
          { id: "1", label: "Reviewing account history",          status: "done" },
          { id: "2", label: "Checking recent login events",        status: "error", description: "Unable to retrieve login logs — service timeout" },
          { id: "3", label: "Verifying 2FA configuration",         status: "pending" },
        ]}
      />
    </div>
  ),
};

export const WithDescriptions: Story = {
  name: "With step descriptions",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        defaultExpanded
        steps={[
          { id: "1", label: "Analysing conversation sentiment",    status: "done",   description: "3 frustrated signals detected" },
          { id: "2", label: "Pulling CRM profile",                  status: "done",   description: "Customer since 2019 · Tier: Premium" },
          { id: "3", label: "Checking SLA status",                  status: "active", description: "Billing queue — projected breach in ~8 min" },
          { id: "4", label: "Drafting escalation recommendation",   status: "pending" },
        ]}
      />
    </div>
  ),
};

export const Collapsed: Story = {
  name: "Collapsed (default)",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        steps={[
          { id: "1", label: "Step one",  status: "done" },
          { id: "2", label: "Step two",  status: "done" },
          { id: "3", label: "Step three", status: "active" },
        ]}
      />
    </div>
  ),
};

/** `variant="progress"`: a titled process with a progress bar and the time each step happened. */
export const Progress: Story = {
  name: "Progress (subtle and strong)",
  render: () => (
    <div className="flex max-w-md flex-col gap-8">
      {(["subtle", "strong"] as const).map((intensity) => (
        <AIProcess
          key={intensity}
          variant="progress"
          intensity={intensity}
          title="Refund review"
          meta="Back office · stage 3 of 5"
          steps={[
            { id: "1", label: "Review opened", status: "done", at: "2:00" },
            { id: "2", label: "Photo verified", status: "done", at: "2:01" },
            { id: "3", label: "Waiting on approval", status: "active" },
            { id: "4", label: "Refund issued", status: "pending" },
          ]}
        />
      ))}
    </div>
  ),
};

/** `variant="numbered"`: instructions to follow in order, with a number instead of a status. */
export const Numbered: Story = {
  name: "Numbered (subtle and strong)",
  render: () => (
    <div className="flex max-w-md flex-col gap-8">
      {(["subtle", "strong"] as const).map((intensity) => (
        <AIProcess
          key={intensity}
          variant="numbered"
          intensity={intensity}
          title="Warranty replacement"
          steps={[
            { id: "1", label: "Confirm the delivery date", description: "It is on the account, so the customer needs no receipt." },
            { id: "2", label: "Check the light pattern", description: "A steady blinking red light confirms the board fault." },
            { id: "3", label: "Raise a replacement claim", description: "Choose “Board fault” as the reason; a technician swaps the unit on site." },
          ]}
        />
      ))}
    </div>
  ),
};

/** `intensity="strong"` on the thought-process list: solid circles with white glyphs. */
export const StrongColors: Story = {
  name: "Strong colors (thought process)",
  render: () => (
    <div className="max-w-md">
      <AIProcess
        defaultExpanded
        intensity="strong"
        steps={[
          { id: "1", label: "Reviewing account history", status: "done" },
          { id: "2", label: "Checking recent login events", status: "error", description: "Unable to retrieve login logs — service timeout" },
          { id: "3", label: "Verifying 2FA configuration", status: "active", description: "Analysing device fingerprint…" },
          { id: "4", label: "Generating recommended action", status: "pending" },
        ]}
      />
    </div>
  ),
};
