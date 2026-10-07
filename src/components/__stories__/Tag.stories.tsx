import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tag } from "../tag";
import type { TagVariant, TagShape } from "../tag";
import { TAG_VARIANTS, TAG_SHAPES } from "./Tag.shared";

const meta: Meta<typeof Tag> = {
  title: "Custom Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (every color in both shapes, removable with focus management,
   disabled, hover state) each have their own page under "Tag/Variants" — see
   Tag.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, Variants, Removable Variants, Disabled, Pill Shape,
   Pill — Removable and Default vs Pill into a single playground. Removing a
   tag really removes it, with a button to bring it back. ── */

interface TagDemoProps {
  label?: string;
  removable?: boolean;
  disabled?: boolean;
  variant?: TagVariant;
  shape?: TagShape;
}

function TagDemo({
  label = "Tag label",
  removable = false,
  disabled = false,
  variant = "default",
  shape = "default",
}: TagDemoProps) {
  const [removed, setRemoved] = useState(false);
  if (removed) {
    return (
      <button
        type="button"
        className="lyra-body-sm text-lyra-fg-link hover:underline"
        onClick={() => setRemoved(false)}
      >
        Tag removed — bring it back
      </button>
    );
  }
  return (
    <Tag
      label={label}
      variant={variant}
      shape={shape}
      disabled={disabled}
      onRemove={removable ? () => setRemoved(true) : undefined}
    />
  );
}

type TagDemoStory = StoryObj<typeof TagDemo>;

export const Default: TagDemoStory = {
  args: {
    label: "Tag label",
    removable: false,
    disabled: false,
    variant: "default",
    shape: "default",
  },
  parameters: {
    controls: {
      include: [
        "removable",
        "disabled",
        "label",
        "variant",
        "shape",
        "Removable",
        "Disabled",
        "Label",
        "Color",
        "Shape",
      ],
      sort: "none",
    },
  },
  argTypes: {
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Shows a remove (×) button on the tag (`onRemove`).",
      table: { category: "Behavior" },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the tag and blocks its remove button (`disabled`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text inside the tag (`label`).",
      table: { category: "Content" },
    },
    variant: {
      name: "Color",
      control: "select",
      options: TAG_VARIANTS,
      description: "Color of the tag (`variant`).",
      table: { category: "Appearance" },
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: TAG_SHAPES,
      description: "Default has rounded corners. Pill is fully rounded (`shape`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <TagDemo key={JSON.stringify(args)} {...args} />
  ),
};
