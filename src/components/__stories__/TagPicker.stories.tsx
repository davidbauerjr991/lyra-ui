import type { Meta, StoryObj } from "@storybook/react";
import { TagPicker } from "../tag-picker";
import { TagPickerDemo, type StartingApplied } from "./TagPicker.shared";

const meta: Meta<typeof TagPicker> = {
  title: "Custom Primitives/TagPicker",
  component: TagPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (tags applied, every option applied) each have their own page
   under "TagPicker/Variants" — see TagPicker.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default and All Variants into a single playground. `TagPickerDemo` (in
   TagPicker.shared.tsx) owns the applied-tags state, so picking, un-picking
   and removing a pill all behave like the real component. ── */

interface TagPickerPlaygroundProps {
  startOpen?: boolean;
  startingApplied?: StartingApplied;
  triggerLabel?: string;
  placement?: "top" | "bottom" | "left" | "right";
  triggerSize?: "sm" | "default" | "lg" | "xl";
}

function TagPickerPlayground({
  startOpen = false,
  startingApplied = "some",
  triggerLabel = "Add tag",
  placement = "bottom",
  triggerSize = "sm",
}: TagPickerPlaygroundProps) {
  return (
    <TagPickerDemo
      startOpen={startOpen}
      startingApplied={startingApplied}
      triggerLabel={triggerLabel}
      placement={placement}
      triggerSize={triggerSize}
    />
  );
}

type TagPickerPlaygroundStory = StoryObj<typeof TagPickerPlayground>;

export const Default: TagPickerPlaygroundStory = {
  args: {
    startOpen: false,
    startingApplied: "some",
    triggerLabel: "Add tag",
    placement: "bottom",
    triggerSize: "sm",
  },
  parameters: {
    controls: {
      include: [
        "startOpen",
        "startingApplied",
        "triggerLabel",
        "placement",
        "triggerSize",
        "Starts open",
        "Starting tags",
        "Trigger label",
        "List placement",
        "Trigger size",
      ],
      sort: "none",
    },
  },
  argTypes: {
    startOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the tag list is open on first render (`open`).",
      table: { category: "Behavior" },
    },
    startingApplied: {
      name: "Starting tags",
      control: "radio",
      options: ["none", "some", "all"],
      description: "Which tags are already applied, shown checked in the list and as pills.",
      table: { category: "Behavior" },
    },
    triggerLabel: {
      name: "Trigger label",
      control: "text",
      description: "Tooltip and accessible name of the trigger button (`triggerLabel`).",
      table: { category: "Content" },
    },
    placement: {
      name: "List placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Which side of the trigger the list opens on (`placement`).",
      table: { category: "Appearance" },
    },
    triggerSize: {
      name: "Trigger size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      description: "Size of the trigger button (`triggerSize`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <TagPickerPlayground key={JSON.stringify(args)} {...args} />
  ),
};
