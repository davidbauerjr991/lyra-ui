import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { Tag } from "../tag";
import type { TagVariant } from "../tag";
import { TAG_VARIANTS, TAG_SHAPES, variantLabel } from "./Tag.shared";

/* One page per Tag variant, shown under "Tag/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Tag → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Tag> = {
  title: "Custom Primitives/Tag/Variants",
  component: Tag,
  tags: ["!autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/* Every color, in both shapes, with and without the remove button. */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {TAG_SHAPES.map((shape) => (
        <div key={shape} className="flex flex-col gap-2">
          <p className="lyra-body-sm-emphasis text-lyra-fg-secondary capitalize">{shape} shape</p>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map((v) => (
              <Tag key={v} label={variantLabel(v)} variant={v} shape={shape} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map((v) => (
              <Tag key={v} label={variantLabel(v)} variant={v} shape={shape} onRemove={() => {}} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  name: "States (Disabled)",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag label="Disabled" disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
  ),
};

/* Focus after removal (WCAG 2.4.3): removing a tag unmounts the button that
   had focus, which would drop focus to <body>. `Tag` only reports `onRemove`,
   so the parent owns focus: move it to the next tag's remove button (which
   takes the removed tag's index), the previous one if the last tag was
   removed, or the container if none are left. Try it: Tab to a tag's ×,
   press Enter, and keep pressing Enter. */
function RemovableTagsDemo() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Lyra"]);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingIndex = useRef<number | null>(null);

  useEffect(() => {
    if (pendingIndex.current === null) return;
    const index = pendingIndex.current;
    pendingIndex.current = null;
    const buttons = containerRef.current?.querySelectorAll<HTMLButtonElement>("button[aria-label^='Remove']");
    const target = buttons && buttons.length > 0 ? buttons[Math.min(index, buttons.length - 1)] : containerRef.current;
    target?.focus();
  }, [tags]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Tags"
      tabIndex={-1}
      className="flex min-h-6 min-w-6 flex-wrap gap-2 rounded-lyra-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
    >
      {tags.map((t, i) => (
        <Tag
          key={t}
          label={t}
          onRemove={() => {
            pendingIndex.current = i;
            setTags(tags.filter((x) => x !== t));
          }}
        />
      ))}
    </div>
  );
}

export const Removable: Story = {
  render: () => <RemovableTagsDemo />,
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
      {TAG_VARIANTS.map((v) => (
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
