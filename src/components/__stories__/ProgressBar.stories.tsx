import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../progress-bar";

const meta: Meta<typeof ProgressBar> = {
  title: "Headless Primitives/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  // Real ProgressBar props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    value:     { control: { type: "range", min: 0, max: 100, step: 1 } },
    variant:   { control: "select", options: ["default", "success", "warning", "critical", "neutral"] },
    size:      { control: "radio", options: ["sm", "md", "lg"] },
    showLabel: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/* Every variant, size and state side by side, plus the animated examples, each
   have their own page under "Progress Bar/Variants" — see
   ProgressBar.variants.stories.tsx. */

/* ── Default — the interactive playground. Replaces the old All Variants /
   Sizes / States / Custom Label stories' one-off bars: pick the variant, size,
   value and label here instead. ── */
export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      {/* `label` is "" when the Label text control is cleared — fall back to
          the component's own "{value}%". */}
      <ProgressBar {...args} label={args.label || undefined} />
    </div>
  ),
  args: { value: 60, variant: "default", size: "md", showLabel: false, label: "", indeterminate: false },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Value", "Indeterminate", "Show label", "Label text", "Variant", "Size",
        "value", "indeterminate", "showLabel", "label", "variant", "size",
      ],
      sort: "none",
    },
  },
  argTypes: {
    value: {
      name: "Value",
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "How far along the bar is, 0–100.",
      table: { category: "Behavior", defaultValue: { summary: "0" } },
    },
    indeterminate: {
      name: "Indeterminate",
      control: "boolean",
      description: "Unknown progress: a segment slides along the track and no value is reported to assistive tech. Value is ignored and the percentage is hidden. Honors reduced motion.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showLabel: {
      name: "Show label",
      control: "boolean",
      description: "Shows a label under the track (`showLabel`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label text",
      control: "text",
      description: "Replaces the default “{value}%” text. Leave empty for the percentage. Only shows when Show label is on.",
      if: { arg: "showLabel", truthy: true },
      table: { category: "Content", defaultValue: { summary: "{value}%" } },
    },
    variant: {
      name: "Variant",
      control: "select",
      options: ["default", "success", "warning", "critical", "neutral"],
      description: "Color of the fill.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Height of the track: sm 4px, md 8px, lg 12px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
  },
};
