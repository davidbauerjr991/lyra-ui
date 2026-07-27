import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SlidersHorizontal, ChevronDown, Pencil, Settings, Copy } from "lucide-react";
import { Select, type SelectOption } from "../select";
import { Label } from "../label";
import { Button } from "../button";

const meta: Meta<typeof Select> = {
  title: "Headless Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    required: { control: "boolean" },
    /** "sm" (32px) is for dense contexts — a table toolbar's filter row is
     *  the motivating case — vs. the "md" (36px) default every other field
     *  in the library uses. Only the closed trigger shrinks; the open
     *  dropdown's rows stay full-size. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
    /* Story-only toggles below — not real `Select` props. Mirrors
       Input.stories.tsx's own Default playground (same names/behavior),
       minus that story's "Label only" and "Horizontal" — `Select` doesn't
       have a display-only/no-input equivalent, so those two don't apply
       here. */
    showWithButtons: { control: "boolean", name: "With buttons" },
    buttonsPosition: {
      control: "select",
      options: ["left", "right", "both"],
      name: "Buttons position",
    },
    buttonVariant: {
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      name: "Button type",
    },
    buttonIconOnly: { control: "boolean", name: "Icon buttons" },
    buttonSize: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      name: "Button size",
    },
    /* How many placeholder buttons render — 3 is the cap, matching
       Input.stories.tsx's own control. */
    buttonCount: {
      control: "select",
      options: [1, 2, 3],
      name: "Button count",
    },
    showHelp: { control: "boolean", name: "Help" },
    showError: { control: "boolean", name: "Error" },
    /* Off (default): full width, matching every other story below now that
       none of them hardcode a width anymore. On: bounds it between a
       240px min-width and a 320px max-width — the same range
       Input.stories.tsx's own "Max width" control and Form Grid's "Static
       Width" fields (Breakpoints.stories.tsx) use. */
    maxWidth: { control: "boolean", name: "Max width" },
  } as Meta<typeof Select>["argTypes"],
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
  args: {
    label: "Input Label",
    required: false,
    size: "md",
    showWithButtons: false,
    buttonsPosition: "left",
    buttonVariant: "ghost",
    buttonIconOnly: true,
    buttonSize: "sm",
    buttonCount: 2,
    showHelp: false,
    showError: false,
    maxWidth: false,
  } as Story["args"],
  render: (args: any) => {
    const {
      required,
      size,
      showWithButtons,
      buttonsPosition,
      buttonVariant,
      buttonIconOnly,
      buttonSize,
      buttonCount,
      showHelp,
      showError,
      maxWidth,
      label,
    } = args;

    const labelHelpText = showHelp ? "Helpful context about this field." : undefined;

    // Same height-matched icon-size scale as Input.stories.tsx's own
    // Default playground (button.tsx: icon-sm/icon-md/icon-lg/icon-xl line
    // up with sm/default|md/lg/xl exactly).
    const ICON_SIZE_MAP: Record<string, string> = {
      sm: "icon-sm",
      default: "icon-md",
      lg: "icon-lg",
      xl: "icon-xl",
    };

    // One icon per possible `buttonCount` slot — sliced below rather than
    // repeating the same icon three times.
    const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];

    const renderButtons = () =>
      buttonIconOnly ? (
        <>
          {PLACEHOLDER_ICONS.slice(0, buttonCount).map((Icon, i) => (
            <Button key={i} variant={buttonVariant} size={ICON_SIZE_MAP[buttonSize]} title="Placeholder action">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          ))}
        </>
      ) : (
        <>
          {Array.from({ length: buttonCount }).map((_, i) => (
            <Button key={i} variant={buttonVariant} size={buttonSize}>Action</Button>
          ))}
        </>
      );

    if (showWithButtons) {
      // Same composition as Input.stories.tsx's own "With buttons" branch —
      // the caption renders separately (not through `Select`'s own `label`
      // prop) so it sits above the row while the buttons flank the trigger
      // itself, positioned by `buttonsPosition`. `items-start`, not
      // `items-center` — same reason as Input.stories.tsx: `Select` renders
      // its own error text below its trigger (select.tsx) when `error` is
      // set, which makes its wrapper taller than the buttons; aligning tops
      // keeps the buttons level with the trigger itself regardless of
      // whether that error text is showing.
      return (
        <div className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}>
          <div className="flex flex-col gap-1.5">
            <Label label={label} required={required} labelHelpText={labelHelpText} />
            <div className="flex items-start gap-0.5">
              {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
              <Select
                options={sampleOptions}
                error={showError ? "Required" : undefined}
                size={size}
                className="flex-1"
              />
              {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}>
        <Select
          label={label}
          labelHelpText={labelHelpText}
          required={required}
          size={size}
          options={sampleOptions}
          error={showError ? "Required" : undefined}
        />
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  name: "With Placeholder",
  render: () => (
    <Select label="Input Label" placeholder="Choose an option..." options={sampleOptions} />
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => <Select label="Input Label" options={sampleOptions} disabled />,
};

export const ErrorState: Story = {
  name: "Error",
  render: () => <Select label="Input Label" options={sampleOptions} error="Required" />,
};

export const Searchable: Story = {
  name: "Searchable",
  render: () => <Select label="Input Label" options={manyOptions} searchable />,
};

export const MultiSelect: Story = {
  name: "Multi-Select",
  render: () => {
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
  },
};

export const MultiSelectEmpty: Story = {
  name: "Multi-Select (Empty)",
  render: () => (
    <Select
      label="Input Label"
      options={manyOptions}
      multiple
      searchable
      showSelectAll
    />
  ),
};

export const Controlled: Story = {
  name: "Controlled",
  render: () => {
    const [val, setVal] = useState("opt2");
    return (
      <div className="flex flex-col gap-4">
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
    <div className="flex flex-col gap-6">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
  ),
};
