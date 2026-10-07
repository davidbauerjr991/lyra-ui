import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TransferBox } from "../transfer-box";
import {
  SKILLS,
  PRESELECTED,
  FEW_SELECTED,
  TOOLTIP,
  REQUIRED_ERROR,
} from "./TransferBox.shared";

const meta: Meta<typeof TransferBox> = {
  title: "Custom Primitives/TransferBox",
  component: TransferBox,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (every state side by side) have their own page under
   "TransferBox/Variants" — see TransferBox.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Interactive, Error, Max selection limit, Disabled and Read Only into a
   single playground. Fully controlled so moving items between the two lists
   updates real state. ── */

interface TransferBoxDemoProps {
  state?: "default" | "error" | "disabled" | "read-only";
  startingSelection?: "none" | "few" | "several";
  max?: number;
  availableLabel?: string;
  selectedLabel?: string;
  availableLabelTooltip?: string;
}

const STARTING = { none: [], few: FEW_SELECTED, several: PRESELECTED } as const;

function TransferBoxDemo({
  state = "default",
  startingSelection = "none",
  max = 0,
  availableLabel = "Available",
  selectedLabel = "Selected",
  availableLabelTooltip = TOOLTIP,
}: TransferBoxDemoProps) {
  const [value, setValue] = useState<string[]>([...STARTING[startingSelection]]);
  return (
    <TransferBox
      options={SKILLS}
      value={value}
      onChange={setValue}
      max={max > 0 ? max : undefined}
      availableLabel={availableLabel}
      selectedLabel={selectedLabel}
      availableLabelTooltip={availableLabelTooltip || undefined}
      disabled={state === "disabled"}
      readonly={state === "read-only"}
      error={state === "error" ? REQUIRED_ERROR : undefined}
    />
  );
}

type TransferBoxDemoStory = StoryObj<typeof TransferBoxDemo>;

export const Default: TransferBoxDemoStory = {
  args: {
    state: "default",
    startingSelection: "none",
    max: 0,
    availableLabel: "Available",
    selectedLabel: "Selected",
    availableLabelTooltip: TOOLTIP,
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingSelection",
        "max",
        "availableLabel",
        "selectedLabel",
        "availableLabelTooltip",
        "State",
        "Starting selection",
        "Max selection",
        "Available list title",
        "Selected list title",
        "Available list tooltip",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "error", "disabled", "read-only"],
      description:
        "Error shows an error message (`error`). Disabled blocks all interaction. Read-only shows the selection but blocks changes (`readonly`).",
      table: { category: "Behavior" },
    },
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "few", "several"],
      description: "How many items start in the Selected list.",
      table: { category: "Behavior" },
    },
    max: {
      name: "Max selection",
      control: { type: "number", min: 0 },
      description: "Most items that can be selected. 0 means no limit (`max`).",
      table: { category: "Behavior" },
    },
    availableLabel: {
      name: "Available list title",
      control: "text",
      description: "Heading over the list of items still available (`availableLabel`).",
      table: { category: "Content" },
    },
    selectedLabel: {
      name: "Selected list title",
      control: "text",
      description: "Heading over the list of chosen items (`selectedLabel`).",
      table: { category: "Content" },
    },
    availableLabelTooltip: {
      name: "Available list tooltip",
      control: "text",
      description: "Help tooltip next to the Available heading (`availableLabelTooltip`). Empty for none.",
      table: { category: "Content" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <TransferBoxDemo key={JSON.stringify(args)} {...args} />
  ),
};
