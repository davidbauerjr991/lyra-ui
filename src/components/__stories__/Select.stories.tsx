import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Select, type SelectOption } from "../select";

const meta: Meta<typeof Select> = {
  title: "Headless Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions: SelectOption[] = [
  { value: "opt1", label: "Option 1" },
  { value: "opt2", label: "Option 2" },
  { value: "opt3", label: "Option 3" },
  { value: "opt4", label: "Option 4" },
  { value: "opt5", label: "Option 5" },
  { value: "opt6", label: "Option 6" },
];

const manyOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `item-${i + 1}`,
  label: `Item label ${i + 1}`,
}));

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} />
    </div>
  ),
};

export const WithPlaceholder: Story = {
  name: "With Placeholder",
  render: () => (
    <div className="max-w-[320px]">
      <Select label="Input Label" placeholder="Choose an option..." options={sampleOptions} />
    </div>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} disabled />
    </div>
  ),
};

export const ErrorState: Story = {
  name: "Error",
  render: () => (
    <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
  ),
};

export const Searchable: Story = {
  name: "Searchable",
  render: () => (
    <div className="max-w-[320px]">
      <Select label="Input Label" options={manyOptions} searchable />
    </div>
  ),
};

export const MultiSelect: Story = {
  name: "Multi-Select",
  render: () => {
    const [vals, setVals] = useState<string[]>(["item-1", "item-2", "item-3"]);
    return (
      <div className="max-w-[320px]">
        <Select
          label="Input Label"
          options={manyOptions}
          multiple
          searchable
          showSelectAll
          values={vals}
          onValuesChange={setVals}
        />
      </div>
    );
  },
};

export const MaxSelectionSelect: Story = {
  name: "Max Selection",
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const colorOptions: SelectOption[] = [
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "white", label: "White" },
      { value: "selected-white", label: "Selected White" },
      { value: "red", label: "Red" },
      { value: "magenta", label: "Magenta" },
      { value: "cyan", label: "Cyan" },
      { value: "dark-red", label: "Dark Red" },
      { value: "green", label: "Green" },
      { value: "orange", label: "Orange" },
    ];
    return (
      <div className="max-w-[320px]">
        <Select
          label="Color"
          options={colorOptions}
          multiple
          searchable
          maxSelection={4}
          values={values}
          onValuesChange={setValues}
        />
      </div>
    );
  },
};

export const MultiSelectEmpty: Story = {
  name: "Multi-Select (Empty)",
  render: () => (
    <div className="max-w-[320px]">
      <Select
        label="Input Label"
        options={manyOptions}
        multiple
        searchable
        showSelectAll
      />
    </div>
  ),
};

export const Controlled: Story = {
  name: "Controlled",
  render: () => {
    const [val, setVal] = useState("opt2");
    return (
      <div className="max-w-[320px] flex flex-col gap-4">
        <Select
          label="Input Label"
          options={sampleOptions}
          value={val}
          onValueChange={setVal}
        />
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Selected: <span className="text-lyra-fg-default">{val}</span>
        </p>
      </div>
    );
  },
};

export const CustomIconTrigger: Story = {
  name: "Custom Trigger (Icon, Single-Select)",
  render: () => {
    const [val, setVal] = useState("opt2");
    return (
      <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
        <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
        {/* Bare icon (not a <button>) — same pattern as `table.tsx`'s
            `ColumnToggle`, which passes `trigger={<ColumnsIcon .../>}`.
            Wrapped in the default icon-button shell for non-button
            triggers. `dropdownAlign="right"` pins the dropdown's
            preferred side to the trigger's right edge (still
            collision-aware — Radix flips if it would overflow), matching
            how a header-aligned trigger like this needs its dropdown to
            open left instead of overflowing off-screen. */}
        <Select
          options={sampleOptions}
          value={val}
          onValueChange={setVal}
          trigger={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />}
          dropdownAlign="right"
        />
      </div>
    );
  },
};

export const CustomButtonTrigger: Story = {
  name: "Custom Trigger (Button, Multi-Select)",
  render: () => {
    const [vals, setVals] = useState<string[]>(["opt1", "opt3"]);
    const [open, setOpen] = useState(false);
    return (
      <div className="flex justify-end w-72">
        {/* A full <button> trigger — same pattern as `filter-chip.tsx`'s
            `chipTrigger`/`operatorTrigger`: a plain button with its own
            visual content and no onClick of its own (Select supplies the
            interactivity). */}
        <Select
          multiple
          options={sampleOptions}
          values={vals}
          onValuesChange={setVals}
          onOpenChange={setOpen}
          dropdownAlign="right"
          trigger={
            <button
              type="button"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral transition-colors"
            >
              <span className="lyra-body-md-emphasis text-lyra-fg-default">
                {vals.length > 0 ? `${vals.length} selected` : "Filter"}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
          }
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
  ),
};
