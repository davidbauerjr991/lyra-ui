import type { Meta, StoryObj } from "@storybook/react";
import { ContainerFooter } from "../container-footer";
import { footerButtons } from "./Container.shared";

/* The interactive playground. The static side-by-side alignments are under "ContainerFooter/Variants"
   (ContainerFooter.variants.stories.tsx). The footer is also what `Container`, `Modal`, `SidePanel`,
   `InteriorPanel` render for their `footer*` props, through `ContainerFooterSlot`. */
const meta: Meta<typeof ContainerFooter> = {
  title: "Custom Primitives/ContainerFooter",
  component: ContainerFooter,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ContainerFooter>;

export const Default: Story = {
  name: "Default",
  parameters: {
    controls: {
      include: ["Alignment", "Border top", "Scroll shadow", "Scroll fade", "align", "bordered", "scrollShadow", "scrollFade"],
      sort: "none",
    },
  },
  args: { align: "right", bordered: false, scrollShadow: false, scrollFade: false },
  argTypes: {
    align: {
      name: "Alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the buttons sit: left, right, or stretched to full width.",
      table: { category: "Appearance", defaultValue: { summary: "right" } },
    },
    bordered: {
      name: "Border top",
      control: "boolean",
      description: "Show a border along the top edge of the footer.",
      if: { arg: "scrollFade", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    scrollShadow: {
      name: "Scroll shadow",
      control: "boolean",
      description: "Show a shadow above the footer while content is scrolled behind it. Scroll the sample content to see it. Not available together with Scroll fade.",
      if: { arg: "scrollFade", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    scrollFade: {
      name: "Scroll fade",
      control: "boolean",
      description: "Fade the content out into the footer while it is scrolled behind it (`scrollFade`), instead of cutting it off at a hard edge. Scroll the sample content to see it. Not available together with Scroll shadow.",
      if: { arg: "scrollShadow", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  // The footer is pinned to the bottom of a scrolling region so the shadow
  // has something to scroll behind.
  render: (args) => (
    <div className="max-h-56 max-w-xl overflow-y-auto rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      {Array.from({ length: 6 }, (_, i) => (
        <p key={i} className="lyra-body-md text-lyra-fg-secondary px-4 py-3">
          Sample content {i + 1}. Scroll this area to see the footer shadow when it is on.
        </p>
      ))}
      <ContainerFooter
        key={JSON.stringify(args)}
        {...args}
        className="sticky bottom-0 bg-lyra-bg-surface-base"
        actions={footerButtons}
      />
    </div>
  ),
};
