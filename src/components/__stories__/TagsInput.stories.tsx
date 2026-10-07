import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TagsInput } from "../tags-input";
import { SAMPLE_TAGS, REQUIRED_ERROR } from "./TagsInput.shared";

const meta: Meta<typeof TagsInput> = {
  title: "Custom Primitives/Tags Input",
  component: TagsInput,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (states, max tags) each have their own page under
   "Tags Input/Variants" — see TagsInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, With Values, Max Tags, With Error, Readonly and Disabled into a
   single playground. Fully controlled so adding and removing tags behave
   like the real component. ── */

interface TagsInputDemoProps {
  state?: "default" | "required" | "error" | "disabled" | "read-only";
  startingTags?: "none" | "some";
  maxTags?: number;
  label?: string;
  labelHelpText?: string;
  placeholder?: string;
}

function TagsInputDemo({
  state = "default",
  startingTags = "none",
  maxTags = 0,
  label = "Tags",
  labelHelpText = "",
  placeholder = "Add a tag…",
}: TagsInputDemoProps) {
  const [tags, setTags] = useState<string[]>(startingTags === "some" ? SAMPLE_TAGS : []);
  return (
    <div className="w-96">
      <TagsInput
        label={label}
        labelHelpText={labelHelpText || undefined}
        placeholder={placeholder}
        value={tags}
        onChange={setTags}
        maxTags={maxTags > 0 ? maxTags : undefined}
        required={state === "required" || state === "error"}
        disabled={state === "disabled"}
        readonly={state === "read-only"}
        error={state === "error" ? REQUIRED_ERROR : undefined}
      />
    </div>
  );
}

type TagsInputDemoStory = StoryObj<typeof TagsInputDemo>;

export const Default: TagsInputDemoStory = {
  args: {
    state: "default",
    startingTags: "none",
    maxTags: 0,
    label: "Tags",
    labelHelpText: "",
    placeholder: "Add a tag…",
  },
  parameters: {
    controls: {
      include: [
        "state",
        "startingTags",
        "maxTags",
        "label",
        "labelHelpText",
        "placeholder",
        "State",
        "Starting tags",
        "Max tags",
        "Label",
        "Label help text",
        "Placeholder",
      ],
      sort: "none",
    },
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "required", "error", "disabled", "read-only"],
      description:
        "Required adds the required marker. Error shows an error message (`error`). Disabled and read-only lock the field.",
      table: { category: "Behavior" },
    },
    startingTags: {
      name: "Starting tags",
      control: "radio",
      options: ["none", "some"],
      description: "Whether the field starts empty or with tags already added.",
      table: { category: "Behavior" },
    },
    maxTags: {
      name: "Max tags",
      control: { type: "number", min: 0 },
      description: "Most tags the field accepts. 0 means no limit (`maxTags`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field (`label`).",
      table: { category: "Content" },
    },
    labelHelpText: {
      name: "Label help text",
      control: "text",
      description: "Help text shown next to the label (`labelHelpText`). Empty for none.",
      table: { category: "Content" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: { category: "Content" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <TagsInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
