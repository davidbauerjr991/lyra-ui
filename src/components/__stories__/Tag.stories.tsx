import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tag } from "../tag";
import type { TagVariant } from "../tag";

const meta: Meta<typeof Tag> = {
  title: "Custom Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    variant: { control: "select", options: ["default","success","warning","critical","info","neutral"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { label: "Tag label" },
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Lyra"]);
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <Tag key={t} label={t} onRemove={() => setTags(tags.filter(x => x !== t))} />
        ))}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["default","success","warning","critical","info","neutral"] as TagVariant[]).map(v => (
        <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} />
      ))}
    </div>
  ),
};

export const RemovableVariants: Story = {
  name: "Removable Variants",
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["default","success","warning","critical","info","neutral"] as TagVariant[]).map(v => (
        <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} onRemove={() => {}} />
      ))}
    </div>
  ),
};


export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag label="Disabled"          disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
  ),
};

export const PillShape: Story = {
  name: "Pill Shape",
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["default","success","warning","critical","info","neutral"] as TagVariant[]).map(v => (
        <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />
      ))}
    </div>
  ),
};

export const PillRemovable: Story = {
  name: "Pill — Removable",
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["default","success","warning","critical","info","neutral"] as TagVariant[]).map(v => (
        <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" onRemove={() => {}} />
      ))}
    </div>
  ),
};

export const BothShapes: Story = {
  name: "Default vs Pill",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} shape="pill" />)}
      </div>
    </div>
  ),
};

/* Every Tag reacts to hover by default (tag.tsx) — its own color
   darkens/lightens slightly on hover (`brightness-95` in light mode,
   `brightness-125` in dark mode, since dark-mode surfaces need to get
   *lighter*, not darker, to read as "brighter") rather than a gray
   background appearing behind it, which would clash with the tag's own
   tint. Originally only applied inside `TagPicker`'s clickable rows
   (tag-picker.tsx) via `group-hover:`; promoted to a real Tag default so
   every consumer gets it automatically, no opt-in needed. Storybook can't
   render a live `:hover` state in a static story, so the "Hover" column
   below applies the same class directly instead — hover any "Rest" pill in
   Storybook's own live preview to see the real thing. */
export const HoverState: Story = {
  name: "Hover State",
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary">
        <span className="w-24">Rest</span>
        <span className="w-24">Hover</span>
      </div>
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map((v) => (
        <div key={v} className="flex items-center gap-8">
          <div className="w-24">
            <Tag label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />
          </div>
          <div className="w-24">
            <Tag
              label={v.charAt(0).toUpperCase() + v.slice(1)}
              variant={v}
              shape="pill"
              className="brightness-95 dark:brightness-125"
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
