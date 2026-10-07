import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TagsInput } from "../tags-input";
import { SAMPLE_TAGS, REQUIRED_ERROR } from "./TagsInput.shared";

/* One page per TagsInput variant, shown under "Tags Input/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Tags Input → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof TagsInput> = {
  title: "Custom Primitives/Tags Input/Variants",
  component: TagsInput,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const AllStates: Story = {
  name: "States",
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript"]);
    return (
      <div className="flex flex-col gap-6 max-w-sm">
        <TagsInput label="Default" value={[]} onChange={() => {}} />
        <TagsInput label="With values" value={tags} onChange={setTags} />
        <TagsInput label="Max 3 tags" value={["Tag 1", "Tag 2"]} onChange={() => {}} maxTags={3} />
        <TagsInput label="Readonly" value={["React", "TypeScript"]} readonly />
        <TagsInput label="Disabled" value={["React"]} disabled />
        <TagsInput label="Error" value={[]} onChange={() => {}} error={REQUIRED_ERROR} required />
      </div>
    );
  },
};

export const MaxTags: Story = {
  name: "Max Tags",
  render: () => {
    const [tags, setTags] = useState(["Tag 1", "Tag 2"]);
    return (
      <div className="w-96">
        <TagsInput label="Labels (max 3)" value={tags} onChange={setTags} maxTags={3} />
      </div>
    );
  },
};

export const WithHelpText: Story = {
  name: "With Help Text",
  render: () => {
    const [tags, setTags] = useState(SAMPLE_TAGS);
    return (
      <div className="w-96">
        <TagsInput
          label="Technologies"
          labelHelpText="Press Enter or Tab to add."
          value={tags}
          onChange={setTags}
        />
      </div>
    );
  },
};
