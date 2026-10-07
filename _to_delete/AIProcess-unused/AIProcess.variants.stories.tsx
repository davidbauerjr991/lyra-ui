import type { Meta, StoryObj } from "@storybook/react";
import { AIProcess } from "../ai-process";
import {
  doneSteps,
  inProgressSteps,
  errorSteps,
  describedSteps,
  collapsedSteps,
  allStatusSteps,
} from "./AIProcess.shared";

/* One page per AIProcess variant, shown under "AIProcess/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is AIProcess → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof AIProcess> = {
  title: "UI/AIProcess/Variants",
  component: AIProcess,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof AIProcess>;

export const States: Story = {
  name: "States (Collapsed, Expanded)",
  render: () => (
    <div className="max-w-md flex flex-col gap-4">
      <AIProcess steps={collapsedSteps} />
      <AIProcess defaultExpanded steps={collapsedSteps} />
    </div>
  ),
};

export const StepStatuses: Story = {
  name: "Step Statuses (Done, Active, Pending, Error)",
  render: () => (
    <div className="max-w-md">
      <AIProcess defaultExpanded steps={allStatusSteps} />
    </div>
  ),
};

export const AllDone: Story = {
  name: "All Steps Done",
  render: () => (
    <div className="max-w-md">
      <AIProcess defaultExpanded steps={doneSteps} />
    </div>
  ),
};

export const InProgress: Story = {
  name: "In Progress",
  render: () => (
    <div className="max-w-md">
      <AIProcess defaultExpanded steps={inProgressSteps} />
    </div>
  ),
};

export const WithError: Story = {
  name: "With Error",
  render: () => (
    <div className="max-w-md">
      <AIProcess defaultExpanded steps={errorSteps} />
    </div>
  ),
};

export const WithDescriptions: Story = {
  name: "With Step Descriptions",
  render: () => (
    <div className="max-w-md">
      <AIProcess defaultExpanded steps={describedSteps} />
    </div>
  ),
};
