import type { Meta, StoryObj } from "@storybook/react";
import { AIProcess, type AIProcessIntensity, type AIProcessStep, type AIProcessVariant } from "../ai-process";
import { withControlsFor } from "./storyControls";

/* ── UI / AIProcess ──
   The interactive playground: pick the variant, the step colors and the heading. Every look as a static
   reference is on the "AIProcess/Variants" page. */
const meta: Meta<typeof AIProcess> = {
  title: "UI/AIProcess",
  component: AIProcess,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

const THOUGHT_STEPS: AIProcessStep[] = [
  { id: "1", label: "Reviewing account history", status: "done" },
  { id: "2", label: "Checking recent login events", status: "error", description: "Unable to retrieve login logs — service timeout" },
  { id: "3", label: "Verifying 2FA configuration", status: "active", description: "Analysing device fingerprint…" },
  { id: "4", label: "Generating recommended action", status: "pending" },
];
const PROGRESS_STEPS: AIProcessStep[] = [
  { id: "1", label: "Review opened", status: "done", at: "2:00" },
  { id: "2", label: "Photo verified", status: "done", at: "2:01" },
  { id: "3", label: "Waiting on approval", status: "active" },
  { id: "4", label: "Refund issued", status: "pending" },
];
const NUMBERED_STEPS: AIProcessStep[] = [
  { id: "1", label: "Confirm the delivery date", description: "It is on the account, so the customer needs no receipt." },
  { id: "2", label: "Check the light pattern", description: "A steady blinking red light confirms the board fault." },
  { id: "3", label: "Raise a replacement claim", description: "Choose “Board fault” as the reason; a technician swaps the unit on site." },
];

interface DemoProps {
  variant?: AIProcessVariant;
  intensity?: AIProcessIntensity;
  label?: string;
  title?: string;
  meta?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

type Story = StoryObj<DemoProps>;

export const Default: Story = withControlsFor({
  parameters: { controls: { sort: "none" } },
  args: { variant: "thought", intensity: "subtle", label: "Thought process", title: "Refund review", meta: "Back office · stage 3 of 5", collapsible: true, defaultExpanded: true },
  argTypes: {
    variant: {
      name: "Variant",
      control: "radio",
      options: ["thought", "progress", "numbered"],
      description: "Thought process (collapsible, status icons), progress (title, bar, times) or numbered instructions (`variant`).",
      table: { category: "Appearance", defaultValue: { summary: "thought" } },
    },
    intensity: {
      name: "Color intensity",
      control: "radio",
      options: ["subtle", "strong"],
      description: "Step colors (`intensity`): subtle is a tinted circle with a colored glyph, strong is a solid circle with a white glyph.",
      table: { category: "Appearance", defaultValue: { summary: "subtle" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Heading of the thought-process list (`label`).",
      if: { arg: "variant", eq: "thought" },
      table: { category: "Content", defaultValue: { summary: "Thought process" } },
    },
    title: {
      name: "Title",
      control: "text",
      description: "Heading for the progress and numbered variants (`title`). Leave empty for none.",
      if: { arg: "variant", neq: "thought" },
      table: { category: "Content" },
    },
    meta: {
      name: "Meta text",
      control: "text",
      description: "Text at the right of the heading (`meta`).",
      if: { arg: "variant", neq: "thought" },
      table: { category: "Content" },
    },
    collapsible: {
      name: "Collapsible",
      control: "boolean",
      description: "The heading folds the steps away (`collapsible`). On by default for Thought, off for the others.",
      table: { category: "Behavior" },
    },
    defaultExpanded: {
      name: "Starts open",
      control: "boolean",
      description: "Initial open state when Collapsible is on (`defaultExpanded`).",
      if: { arg: "collapsible", truthy: true },
      table: { category: "Behavior" },
    },
  },
  render: ({ variant = "thought", intensity = "subtle", label, title, meta, collapsible, defaultExpanded }) => (
    <div className="max-w-md">
      <AIProcess
        // `key` remounts when the open-state controls change.
        key={`${variant}-${collapsible}-${defaultExpanded}`}
        variant={variant}
        intensity={intensity}
        label={label || undefined}
        title={title || undefined}
        meta={meta || undefined}
        collapsible={collapsible}
        defaultExpanded={defaultExpanded}
        steps={variant === "progress" ? PROGRESS_STEPS : variant === "numbered" ? NUMBERED_STEPS : THOUGHT_STEPS}
      />
    </div>
  ),
});
