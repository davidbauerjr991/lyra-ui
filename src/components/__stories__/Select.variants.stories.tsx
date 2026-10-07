import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Select, type SelectOption } from "../select";
import { sampleOptions, manyOptions, ERROR_MESSAGE } from "./Select.shared";

/* One page per Select variant, shown under "Select/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Select → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Select> = {
  title: "Headless Primitives/Select/Variants",
  component: Select,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/* ── Multi-Select — searchable, with select all and a few already chosen ── */
function MultiSelectDemo() {
  const [vals, setVals] = useState<string[]>(["item-1", "item-2", "item-3"]);
  return (
    <Select
      label="Input Label"
      options={manyOptions}
      multiple
      searchable
      showSelectAll
      values={vals}
      onValuesChange={setVals}
    />
  );
}

export const MultiSelect: Story = {
  name: "Multi-Select",
  render: () => <MultiSelectDemo />,
};

/* ── Max Selection — at most four colors; the rest disable at the limit ── */
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

function MaxSelectionDemo() {
  const [values, setValues] = useState<string[]>([]);
  return (
    <Select
      label="Color"
      options={colorOptions}
      multiple
      searchable
      maxSelection={4}
      values={values}
      onValuesChange={setValues}
    />
  );
}

export const MaxSelection: Story = {
  name: "Max Selection",
  render: () => <MaxSelectionDemo />,
};

/* ── Controlled — the value lives in the parent and is echoed below ── */
function ControlledDemo() {
  const [val, setVal] = useState("opt2");
  return (
    <div className="flex flex-col gap-4">
      <Select label="Input Label" options={sampleOptions} value={val} onValueChange={setVal} />
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Selected: <span className="text-lyra-fg-default">{val}</span>
      </p>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
};

/* ── Custom Triggers — both custom triggers on one page (was two stories).
   1. Icon, single-select: a bare icon (not a <button>), same pattern as
      `table.tsx`'s `ColumnToggle`, wrapped in the default icon-button shell.
      `dropdownAlign="right"` pins the dropdown's preferred side to the
      trigger's right edge (still collision-aware).
   2. Button, multi-select: a full <button> trigger, same pattern as
      `filter-chip.tsx` — a plain button with its own content and no onClick
      (Select supplies the interactivity). ── */
function IconTriggerDemo() {
  const [val, setVal] = useState("opt2");
  return (
    <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
      <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
      <Select
        options={sampleOptions}
        value={val}
        onValueChange={setVal}
        trigger={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />}
        dropdownAlign="right"
      />
    </div>
  );
}

function ButtonTriggerDemo() {
  const [vals, setVals] = useState<string[]>(["opt1", "opt3"]);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-end w-72">
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
}

export const CustomTriggers: Story = {
  name: "Custom Triggers",
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Icon, single-select</p>
        <IconTriggerDemo />
      </div>
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Button, multi-select</p>
        <ButtonTriggerDemo />
      </div>
    </div>
  ),
};

/* ── All States ── */
export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-6">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error={ERROR_MESSAGE} />
    </div>
  ),
};

/* ── List states — open each one. Loading shows a spinner row; Empty and No
   results show their message (set your own with `emptyMessage` and
   `noResultsMessage`); Load error replaces the list with a Retry button. ── */
export const Loading: Story = {
  name: "Loading",
  render: () => <Select label="Assignee" placeholder="Select..." options={[]} loading className="max-w-[320px]" />,
};

export const Empty: Story = {
  name: "Empty",
  render: () => (
    <Select label="Assignee" placeholder="Select..." options={[]} emptyMessage="No assignees yet" className="max-w-[320px]" />
  ),
};

export const NoResults: Story = {
  name: "No Results",
  render: () => (
    <Select
      label="Assignee"
      placeholder="Select..."
      options={sampleOptions}
      searchable
      noResultsMessage="No matches. Try a different search."
      className="max-w-[320px]"
    />
  ),
};

export const LoadError: Story = {
  name: "Load Error",
  render: () => (
    <Select label="Assignee" placeholder="Select..." options={[]} loadError="Couldn't load assignees." onRetry={() => {}} className="max-w-[320px]" />
  ),
};

/* ── Option groups — `group` on each option adds a heading above its run. Works
   in single and multi-select. ── */
const groupedOptions: SelectOption[] = [
  { value: "red", label: "Red", group: "Warm" },
  { value: "orange", label: "Orange", group: "Warm" },
  { value: "blue", label: "Blue", group: "Cool" },
  { value: "green", label: "Green", group: "Cool" },
  { value: "gray", label: "Gray" },
];

export const OptionGroups: Story = {
  name: "Option Groups",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Single" options={groupedOptions} />
      <Select label="Multiple" options={groupedOptions} multiple />
    </div>
  ),
};

/* ── Apply / Cancel footer — changes are held until Apply; Cancel, Escape or an
   outside click discards them. ── */
function ApplyFooterDemo() {
  const [vals, setVals] = useState<string[]>(["item-1"]);
  return (
    <div className="flex flex-col gap-2 max-w-[320px]">
      <Select label="Columns" options={manyOptions} multiple applyFooter values={vals} onValuesChange={setVals} />
      <p className="lyra-body-sm text-lyra-fg-secondary">Applied: {vals.join(", ") || "none"}</p>
    </div>
  );
}

export const ApplyFooter: Story = {
  name: "Apply / Cancel Footer",
  render: () => <ApplyFooterDemo />,
};

/* ── Multi-select showing values — `triggerDisplay="values"` lists the picks
   ("Red, Blue +1") instead of "3 selected". ── */
export const ValuesInTrigger: Story = {
  name: "Values In Trigger",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Count (default)" options={groupedOptions} multiple values={["red", "blue", "green"]} onValuesChange={() => {}} />
      <Select label="Values" options={groupedOptions} multiple triggerDisplay="values" values={["red", "blue", "green"]} onValuesChange={() => {}} />
    </div>
  ),
};

/* ── Clear and count — `showClear` adds a Clear button on the Select All row
   (it appears once something is selected); `showCount` adds "N items | M
   selected" at the bottom. They also combine with the Apply / Cancel footer. ── */
function ClearAndCountDemo() {
  const [a, setA] = useState<string[]>(["item-1", "item-2"]);
  const [b, setB] = useState<string[]>(["item-1"]);
  return (
    <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Search, select all, clear and count" options={manyOptions} multiple searchable showSelectAll showClear showCount values={a} onValuesChange={setA} />
      <Select label="With Apply / Cancel" options={manyOptions} multiple showSelectAll showClear showCount applyFooter values={b} onValuesChange={setB} />
    </div>
  );
}

export const ClearAndCount: Story = {
  name: "Clear and Count",
  render: () => <ClearAndCountDemo />,
};
