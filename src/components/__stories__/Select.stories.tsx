import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef } from "react";
import { Pencil, Settings, Copy } from "lucide-react";
import { Select } from "../select";
import { Label } from "../label";
import { Button } from "../button";
import { sampleOptions, manyOptions, HELP_TEXT, ERROR_MESSAGE } from "./Select.shared";

const meta: Meta<typeof Select> = {
  title: "Headless Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  // Real Select props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    required: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md"] },
  },
};

export default meta;

/* Multi-Select, Max Selection, Controlled, the custom triggers and every state
   side by side each have their own page under "Select/Variants" — see
   Select.variants.stories.tsx. */

/* ── Default — consolidated Default, With Placeholder, Disabled, Error,
   Searchable, Multi-Select (Empty) into one controls-driven story.
   `placeholder`, `help`, `error`, `maxWidth` and the button controls are
   story-only args: they switch the real `placeholder`, `labelHelpText` and
   `error` props and set up the "With buttons" row (placeholder buttons beside
   the trigger, same as Input's playground). The Select is uncontrolled, so
   the demo remounts (via `key`) whenever a control changes. ── */

interface SelectDemoProps {
  label?: string;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  showSelectAll?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  help?: boolean;
  error?: boolean;
  size?: "sm" | "md";
  maxWidth?: boolean;
  withButtons?: boolean;
  buttonsPosition?: "left" | "right" | "both";
  buttonVariant?: "default" | "destructive" | "warning" | "success" | "outline" | "ghost";
  iconButtons?: boolean;
  buttonSize?: "sm" | "default" | "lg" | "xl";
  buttonCount?: 1 | 2 | 3;
  loading?: boolean;
  empty?: boolean;
  loadError?: boolean;
  emptyMessage?: string;
  noResultsMessage?: string;
  groups?: boolean;
  triggerDisplay?: "count" | "values";
  applyFooter?: boolean;
  showClear?: boolean;
  showCount?: boolean;
  noResults?: boolean;
  openList?: boolean;
}

// Same height-matched icon-size scale as Input's Default playground
// (button.tsx: icon-sm/icon-md/icon-lg/icon-xl line up with sm/default|md/lg/xl).
const ICON_SIZE_MAP = { sm: "icon-sm", default: "icon-md", lg: "icon-lg", xl: "icon-xl" } as const;
// One icon per possible button slot.
const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];

function SelectDemo({
  label = "Input Label",
  placeholder = "Select...",
  multiple = false,
  searchable = false,
  showSelectAll = false,
  disabled = false,
  readonly = false,
  required = false,
  help = false,
  error = false,
  size = "md",
  maxWidth = false,
  withButtons = false,
  buttonsPosition = "left",
  buttonVariant = "ghost",
  iconButtons = true,
  buttonSize = "sm",
  buttonCount = 2,
  loading = false,
  empty = false,
  loadError = false,
  emptyMessage = "",
  noResultsMessage = "",
  groups = false,
  triggerDisplay = "count",
  applyFooter = false,
  showClear = false,
  showCount = false,
  noResults = false,
  openList = false,
}: SelectDemoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  // Story-only helper: open the dropdown on load so the list states (loading,
  // empty, load error, groups, footer) are visible without a click. "No
  // results" also types a search that matches nothing.
  useEffect(() => {
    if (!openList && !noResults) return;
    const t = setTimeout(() => {
      const trigger = wrapRef.current?.querySelector<HTMLElement>('[role="combobox"], button[aria-haspopup]');
      trigger?.click();
      if (noResults) {
        setTimeout(() => {
          const input = document.querySelector<HTMLInputElement>('input[aria-label="Search options"]');
          if (!input) return;
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(input, "zzz");
          input.dispatchEvent(new Event("input", { bubbles: true }));
        }, 150);
      }
    }, 100);
    return () => clearTimeout(t);
  }, []);
  const labelHelpText = help ? HELP_TEXT : undefined;
  // Searching and multi-select only make sense with a long list.
  const baseOptions = multiple || searchable || noResults ? manyOptions : sampleOptions;
  // "Groups" tags options in runs of 3 (single list) or 5 (long list) with a heading.
  const options = empty
    ? []
    : groups
    ? baseOptions.map((o, i) => ({ ...o, group: `Group ${Math.floor(i / (baseOptions === manyOptions ? 5 : 3)) + 1}` }))
    : baseOptions;
  const selectProps = {
    options,
    loading,
    loadError: loadError ? "Couldn't load options." : undefined,
    onRetry: loadError ? () => {} : undefined,
    emptyMessage: emptyMessage || undefined,
    noResultsMessage: noResultsMessage || undefined,
    triggerDisplay: multiple ? triggerDisplay : undefined,
    applyFooter: multiple && applyFooter,
    showClear: multiple && showClear,
    showCount: multiple && showCount,
    placeholder: placeholder || undefined,
    multiple,
    searchable: searchable || noResults,
    showSelectAll: multiple && showSelectAll,
    disabled,
    readonly,
    size,
    error: error ? ERROR_MESSAGE : undefined,
  };

  const renderButtons = () =>
    iconButtons
      ? PLACEHOLDER_ICONS.slice(0, buttonCount).map((Icon, i) => (
          <Button key={i} variant={buttonVariant} size={ICON_SIZE_MAP[buttonSize]} title="Placeholder action">
            <Icon className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        ))
      : Array.from({ length: buttonCount }).map((_, i) => (
          <Button key={i} variant={buttonVariant} size={buttonSize}>Action</Button>
        ));

  return (
    <div ref={wrapRef} className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}>
      {withButtons ? (
        // The caption renders separately (not through `Select`'s own `label`
        // prop) so it sits above the row while the buttons flank the trigger.
        // `items-start`, not `items-center`: `Select` renders its error text
        // below the trigger, which makes its wrapper taller than the buttons.
        <div className="flex flex-col gap-1.5">
          <Label label={label} required={required} labelHelpText={labelHelpText} disabled={disabled} readonly={readonly} />
          <div className="flex items-start gap-0.5">
            {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
            <Select {...selectProps} className="flex-1" />
            {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
          </div>
        </div>
      ) : (
        <Select {...selectProps} label={label} labelHelpText={labelHelpText} required={required} />
      )}
    </div>
  );
}

type SelectDemoStory = StoryObj<SelectDemoProps>;

export const Default: SelectDemoStory = {
  render: (args) => <SelectDemo key={JSON.stringify(args)} {...args} />,
  args: {
    label: "Input Label",
    placeholder: "Select...",
    multiple: false,
    searchable: false,
    showSelectAll: false,
    disabled: false,
    readonly: false,
    required: false,
    help: false,
    error: false,
    size: "md",
    maxWidth: false,
    withButtons: false,
    buttonsPosition: "left",
    buttonVariant: "ghost",
    iconButtons: true,
    buttonSize: "sm",
    buttonCount: 2,
    loading: false,
    empty: false,
    loadError: false,
    emptyMessage: "",
    noResultsMessage: "",
    groups: false,
    triggerDisplay: "count",
    applyFooter: false,
    showClear: false,
    showCount: false,
    noResults: false,
    openList: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Multiple", "Searchable", "Show select all", "Show clear", "Show count", "Disabled", "Read-only", "Required",
        "Label", "Placeholder", "Help text", "Error",
        "Size", "Max width", "With buttons", "Buttons position", "Button type", "Icon buttons", "Button size", "Button count",
        "Loading", "Empty list", "Load error", "Empty message", "No results message", "No results", "Option groups", "Trigger shows", "Apply / Cancel footer", "Open list",
        "multiple", "searchable", "showSelectAll", "showClear", "showCount", "disabled", "readonly", "required",
        "label", "placeholder", "help", "error",
        "size", "maxWidth", "withButtons", "buttonsPosition", "buttonVariant", "iconButtons", "buttonSize", "buttonCount",
        "loading", "empty", "loadError", "emptyMessage", "noResultsMessage", "noResults", "groups", "triggerDisplay", "applyFooter", "openList",
      ],
      sort: "none",
    },
  },
  argTypes: {
    loading: {
      name: "Loading",
      control: "boolean",
      description: "Shows a spinner row in the open list (`loading`).",
      table: { category: "States", defaultValue: { summary: "false" } },
    },
    empty: {
      name: "Empty list",
      control: "boolean",
      description: "Passes no options, so the open list shows the empty message.",
      table: { category: "States", defaultValue: { summary: "false" } },
    },
    loadError: {
      name: "Load error",
      control: "boolean",
      description: "Replaces the list with an error and a Retry button (`loadError`, `onRetry`).",
      table: { category: "States", defaultValue: { summary: "false" } },
    },
    emptyMessage: {
      name: "Empty message",
      control: "text",
      description: "Text for an empty list (`emptyMessage`). Blank uses \"No results found\".",
      table: { category: "States", defaultValue: { summary: "No results found" } },
    },
    noResultsMessage: {
      name: "No results message",
      control: "text",
      description: "Text when a search matches nothing (`noResultsMessage`). Turn on Searchable, open it and type something that doesn't match. Blank uses \"No results found\".",
      table: { category: "States", defaultValue: { summary: "No results found" } },
    },
    noResults: {
      name: "No results",
      control: "boolean",
      description: "Turns on search and types text that matches nothing, so the list shows the no-results message (`noResultsMessage`).",
      table: { category: "States", defaultValue: { summary: "false" } },
    },
    openList: {
      name: "Open list",
      control: "boolean",
      description: "Story only: opens the dropdown when the story loads, so the list states are visible without clicking.",
      table: { category: "States", defaultValue: { summary: "false" } },
    },
    groups: {
      name: "Option groups",
      control: "boolean",
      description: "Puts options under group headings (`group` on each option).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    triggerDisplay: {
      name: "Trigger shows",
      control: "radio",
      options: ["count", "values"],
      labels: { count: "Count (3 selected)", values: "Values (Item 1, Item 2 +1)" },
      description: "How a multi-select summarises two or more picks (`triggerDisplay`). Pick a few options to see it.",
      if: { arg: "multiple", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "count" } },
    },
    showClear: {
      name: "Show clear",
      control: "boolean",
      description: "Adds a Clear button that unselects everything (`showClear`). It sits on the Select All row and appears once something is selected.",
      if: { arg: "multiple", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showCount: {
      name: "Show count",
      control: "boolean",
      description: "Adds an \"N items | M selected\" line at the bottom of the dropdown (`showCount`). Pick a few options to watch it change.",
      if: { arg: "multiple", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    applyFooter: {
      name: "Apply / Cancel footer",
      control: "boolean",
      description: "Holds changes until Apply is pressed; Cancel, Escape or clicking outside discards them (`applyFooter`).",
      if: { arg: "multiple", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    multiple: {
      name: "Multiple",
      control: "boolean",
      description: "Lets people pick more than one option (`multiple`). Uses a longer option list.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    searchable: {
      name: "Searchable",
      control: "boolean",
      description: "Adds a search field to the dropdown (`searchable`). Uses a longer option list.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showSelectAll: {
      name: "Show select all",
      control: "boolean",
      description: "Adds a “select all” checkbox (`showSelectAll`). Only works with Multiple.",
      if: { arg: "multiple", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the field and stops it opening.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Mutes the field and stops it opening. Hides the required asterisk.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    label: {
      name: "Label",
      control: "text",
      description: "The label above the field.",
      table: { category: "Content", defaultValue: { summary: "Input Label" } },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Text shown while nothing is selected. Leave empty for the default.",
      table: { category: "Content", defaultValue: { summary: "Select..." } },
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (`labelHelpText`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows an error message under the field and turns the border red (`error`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Height of the closed field: sm 32px for dense toolbars, md 36px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Off: full width. On: between 240px and 320px.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    withButtons: {
      name: "With buttons",
      control: "boolean",
      description: "Places placeholder buttons beside the field.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    buttonsPosition: {
      name: "Buttons position",
      control: "radio",
      options: ["left", "right", "both"],
      description: "Which side of the field the buttons sit on.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "left" } },
    },
    buttonVariant: {
      name: "Button type",
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      description: "Button style.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "ghost" } },
    },
    iconButtons: {
      name: "Icon buttons",
      control: "boolean",
      description: "Icon-only buttons instead of “Action” text buttons.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    buttonSize: {
      name: "Button size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      description: "Button size.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "sm" } },
    },
    buttonCount: {
      name: "Button count",
      control: "radio",
      options: [1, 2, 3],
      description: "How many buttons to show.",
      if: { arg: "withButtons", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "2" } },
    },
  },
};
