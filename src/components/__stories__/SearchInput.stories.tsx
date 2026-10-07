import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../search-input";
import { SAMPLE_QUERY } from "./SearchInput.shared";

const meta: Meta<typeof SearchInput> = {
  title: "Custom Primitives/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (states, submit button, full width) each have their own page under
   "SearchInput/Variants" — see SearchInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With Value (shows clear button) and Full Width into a single
   playground. Fully controlled so typing, the clear button and the submit
   button behave like the real component. ── */

interface SearchInputDemoProps {
  state?: "default" | "disabled" | "read-only";
  startingValue?: "empty" | "filled";
  submitButton?: boolean;
  placeholder?: string;
  size?: "sm" | "md";
  maxWidth?: boolean;
}

function SearchInputDemo({
  state = "default",
  startingValue = "empty",
  submitButton = false,
  placeholder = "Search",
  size = "md",
  maxWidth = false,
}: SearchInputDemoProps) {
  const [value, setValue] = useState(startingValue === "filled" ? SAMPLE_QUERY : "");
  const [submitted, setSubmitted] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2">
      <SearchInput
        placeholder={placeholder}
        size={size}
        value={value}
        onValueChange={setValue}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        onSubmit={submitButton ? setSubmitted : undefined}
        // Same bounds as the Input story's "Max width": 240–320px when on,
        // otherwise the field stretches across its container.
        className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}
      />
      {submitted !== null && (
        <p className="lyra-body-sm text-lyra-fg-secondary" role="status">
          Submitted: {submitted}
        </p>
      )}
    </div>
  );
}

type SearchInputDemoStory = StoryObj<typeof SearchInputDemo>;

export const Default: SearchInputDemoStory = {
  args: {
    state: "default",
    startingValue: "empty",
    submitButton: false,
    placeholder: "Search",
    size: "md",
    maxWidth: false,
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingValue",
        "submitButton",
        "placeholder",
        "size",
        "maxWidth",
        "State",
        "Starting value",
        "Submit button",
        "Placeholder",
        "Size",
        "Max width",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "disabled", "read-only"],
      description: "Disabled blocks input. Read-only drops the hover, focus and clear button (`disabled`, `readonly`).",
      table: { category: "Behavior" },
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or with text in it, which shows the clear button.",
      table: { category: "Behavior" },
    },
    submitButton: {
      name: "Submit button",
      control: "boolean",
      description:
        "Adds an arrow button that appears once there is text. Clicking it, or pressing Enter, runs the search (`onSubmit`).",
      table: { category: "Behavior" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "sm is 32px for dense contexts like a table toolbar. md is the 36px default every other field uses.",
      table: { category: "Appearance" },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px instead of full width, matching Input. Off stretches it across its container.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <SearchInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
