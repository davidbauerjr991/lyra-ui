import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Autocomplete } from "../autocomplete";
import { COUNTRIES } from "./Autocomplete.shared";

const meta: Meta<typeof Autocomplete> = {
  title: "Custom Primitives/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (states, with value, disabled & read only) have their own pages
   under "Autocomplete/Variants" — see Autocomplete.variants.stories.tsx. */

/* ── Default — consolidated playground, previously three separate stories:
   Default, With disabled option, Search only (no show-all). Fully
   controlled so every control reflects real Autocomplete state, not just
   the initial render — e.g. picking a country updates the "Selected" line
   below the field, same as a consumer's own onChange wiring would. ── */

type FieldState = "normal" | "disabled" | "readOnly";

interface AutocompleteDemoProps {
  size?: "sm" | "md";
  showAll?: boolean;
  disabledOption?: boolean;
  required?: boolean;
  fieldState?: FieldState;
  loading?: boolean;
  filterOptions?: boolean;
  startingValue?: string;
  label?: string;
  labelHelpText?: string;
  placeholder?: string;
  loadingMessage?: string;
}

function AutocompleteDemo({
  size = "md",
  showAll = true,
  disabledOption = false,
  required = false,
  fieldState = "normal",
  loading = false,
  filterOptions = true,
  startingValue = "none",
  label = "Country",
  labelHelpText = "",
  placeholder = "",
  loadingMessage = "Loading…",
}: AutocompleteDemoProps) {
  const options = COUNTRIES.map((option) =>
    option.value === "jp" && disabledOption
      ? { ...option, label: "Japan — (Unavailable)", disabled: true }
      : option
  );
  const [value, setValue] = useState<string | undefined>(startingValue === "none" ? undefined : startingValue);

  return (
    <div className="w-72">
      <Autocomplete
        label={label}
        labelHelpText={labelHelpText || undefined}
        loadingMessage={loadingMessage}
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder || (showAll ? "Search countries…" : "Type to search…")}
        showAllOnEmpty={showAll}
        required={required}
        disabled={fieldState === "disabled"}
        readonly={fieldState === "readOnly"}
        size={size}
        loading={loading}
        filterOptions={filterOptions}
      />
      {value && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          Selected: {COUNTRIES.find((c) => c.value === value)?.label}
        </p>
      )}
    </div>
  );
}

type AutocompleteDemoStory = StoryObj<typeof AutocompleteDemo>;

export const Default: AutocompleteDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so
  // the Docs page's autodocs table still lists every real Autocomplete
  // prop — only this story's own Controls panel is scoped down to the
  // handful of args its render function actually reads.
  parameters: {
    controls: {
      include: [
        "fieldState",
        "startingValue",
        "required",
        "label",
        "labelHelpText",
        "placeholder",
        "showAll",
        "disabledOption",
        "loading",
        "loadingMessage",
        "filterOptions",
        "size",
        "Field State",
        "Starting Value",
        "Required",
        "Label",
        "Label Help Text",
        "Placeholder",
        "Show All On Empty",
        "Disabled Option",
        "Loading",
        "Loading Message",
        "Filter Options",
        "Size",
      ],
      sort: "none",
    },
  },
  args: {
    size: "md",
    showAll: true,
    disabledOption: false,
    required: false,
    fieldState: "normal",
    loading: false,
    filterOptions: true,
    startingValue: "none",
    label: "Country",
    labelHelpText: "",
    placeholder: "",
    loadingMessage: "Loading…",
  },
  argTypes: {
    startingValue: {
      name: "Starting Value",
      control: "select",
      options: ["none", ...COUNTRIES.map((c) => c.value)],
      description: "Which option is selected when the field first renders (`value`).",
      table: { category: "Content" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Field label (`label`).",
      table: { category: "Content" },
    },
    labelHelpText: {
      name: "Label Help Text",
      control: "text",
      description: "Optional help text beside the label (`labelHelpText`). Leave empty for none.",
      table: { category: "Content" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Input placeholder (`placeholder`). Empty uses a default that follows Show All On Empty.",
      table: { category: "Content" },
    },
    loadingMessage: {
      name: "Loading Message",
      control: "text",
      description: "Text shown and announced while loading (`loadingMessage`).",
      if: { arg: "loading", truthy: true },
      table: { category: "Content" },
    },
    showAll: {
      name: "Show All On Empty",
      control: "boolean",
      description:
        "On (default): opens with the full option list before typing. Off: the dropdown stays empty until the user types a query.",
      table: { category: "Behavior" },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Shows the required-field indicator on the label.",
      table: { category: "Behavior" },
    },
    fieldState: {
      name: "Field State",
      control: "radio",
      options: ["normal", "disabled", "readOnly"],
      description:
        "Normal (editable), Disabled (non-interactive, muted), or Read Only (locked — shows the selected value without allowing changes).",
      table: { category: "Behavior" },
    },
    disabledOption: {
      name: "Disabled Option",
      control: "boolean",
      description: "Marks one option (Japan) as unselectable, to show the disabled-row treatment.",
      table: { category: "Content" },
    },
    loading: {
      name: "Loading",
      control: "boolean",
      description:
        "While the dropdown is open, shows a spinner and “Loading…” instead of the options, and screen readers hear “Loading…” (`loading`, `loadingMessage`). Open the field to see it.",
      table: { category: "Behavior" },
    },
    filterOptions: {
      name: "Filter Options",
      control: "boolean",
      description:
        "On (default): the field filters the options by what is typed. Off: every option stays listed, for results already filtered by a server (`filterOptions`). See Variants → Async Search.",
      table: { category: "Behavior" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Field height — sm (32px) for dense contexts, md (36px, default).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo whenever a control changes — `useState`'s
    // initial value only applies on first mount.
    <AutocompleteDemo key={JSON.stringify(args)} {...args} />
  ),
};
