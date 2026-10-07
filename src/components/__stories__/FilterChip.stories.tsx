import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterChip } from "../filter-chip";
import { Button } from "../button";
import { sampleOptions, sampleOperators, SAMPLE_SELECTION } from "./FilterChip.shared";

const meta: Meta<typeof FilterChip> = {
  title: "Custom Primitives/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (basic value chips, overflow groups, removable chips, operators,
   custom popover content, every state side by side) each have their own page
   under "FilterChip/Variants" — see FilterChip.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Empty, Active (with values), Error, Disabled (empty) and Disabled (with
   values) into a single playground. Fully controlled: choosing options,
   changing the operator and removing the chip all update real state. ── */

interface FilterChipDemoProps {
  state?: "default" | "error" | "disabled";
  startingSelection?: "none" | "some";
  removable?: boolean;
  operators?: boolean;
  label?: string;
  dropdownAlign?: "left" | "right";
}

function FilterChipDemo({
  state = "default",
  startingSelection = "none",
  removable = false,
  operators = false,
  label = "Filter",
  dropdownAlign = "left",
}: FilterChipDemoProps) {
  const [selected, setSelected] = useState<string[]>(
    startingSelection === "some" ? SAMPLE_SELECTION : []
  );
  const [operator, setOperator] = useState(sampleOperators[0].value);
  const [removed, setRemoved] = useState(false);

  if (removed) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          setRemoved(false);
          setSelected(startingSelection === "some" ? SAMPLE_SELECTION : []);
        }}
      >
        Chip removed — bring it back
      </Button>
    );
  }

  return (
    <FilterChip
      label={label}
      options={sampleOptions}
      selectedValues={selected}
      onSelectionChange={setSelected}
      operators={operators ? sampleOperators : undefined}
      selectedOperator={operators ? operator : undefined}
      onOperatorChange={operators ? setOperator : undefined}
      error={state === "error"}
      disabled={state === "disabled"}
      onRemove={removable ? () => setRemoved(true) : undefined}
      dropdownAlign={dropdownAlign}
    />
  );
}

type FilterChipDemoStory = StoryObj<typeof FilterChipDemo>;

export const Default: FilterChipDemoStory = {
  args: {
    state: "default",
    startingSelection: "none",
    removable: false,
    operators: false,
    label: "Filter",
    dropdownAlign: "left",
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingSelection",
        "removable",
        "operators",
        "label",
        "dropdownAlign",
        "State",
        "Starting selection",
        "Removable",
        "Operator selector",
        "Label",
        "Dropdown alignment",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "error", "disabled"],
      description: "Normal, error (red styling and icon, `error`) or disabled (`disabled`).",
      table: { category: "Behavior" },
    },
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "some"],
      description: "Whether the chip starts empty or with values already chosen (active styling).",
      table: { category: "Behavior" },
    },
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Shows a remove (×) button on the chip (`onRemove`).",
      table: { category: "Behavior" },
    },
    operators: {
      name: "Operator selector",
      control: "boolean",
      description: "Adds an operator picker (Contains, Equals, Starts With) between the label and value (`operators`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Filter name shown on the chip, e.g. Status or Region (`label`).",
      table: { category: "Content" },
    },
    dropdownAlign: {
      name: "Dropdown alignment",
      control: "radio",
      options: ["left", "right"],
      description:
        "Which edge of the chip the dropdown lines up with. Use right for a chip near the right edge of its container (`dropdownAlign`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <FilterChipDemo key={JSON.stringify(args)} {...args} />
  ),
};
