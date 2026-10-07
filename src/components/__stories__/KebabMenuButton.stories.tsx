import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import { KebabMenuButton } from "../kebab-menu-button";
import { GENERIC_ITEMS, HeaderRow } from "./KebabMenuButton.shared";

const meta: Meta<typeof KebabMenuButton> = {
  title: "Custom Primitives/KebabMenuButton",
  component: KebabMenuButton,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* The states page has its own page under "KebabMenuButton/Variants" — see
   KebabMenuButton.variants.stories.tsx. The horizontal glyph and
   left-aligned dropdown are the Glyph and Dropdown alignment controls
   below. */

/* ── Default — one controls-driven story. Consolidates the old Default and
   AllVariants into a single playground. Extracted from `ChannelRow`'s
   per-row kebab (see `channel-row.tsx`) into its own atom — the same
   trigger + portal + positioning behavior, just with a generic
   Edit/Refresh/Remove menu. `DashboardCard`'s header kebab uses this exact
   component. Click the trigger to open the dropdown; it renders via a
   portal, so it isn't clipped by the frame. ── */

interface KebabMenuButtonDemoProps {
  disabled?: boolean;
  ariaLabel?: string;
  withBadge?: boolean;
  badge?: number;
  glyph?: "vertical" | "horizontal";
  align?: "left" | "right";
}

function KebabMenuButtonDemo({
  disabled = false,
  ariaLabel = "More options",
  withBadge = false,
  badge = 3,
  glyph = "vertical",
  align = "right",
}: KebabMenuButtonDemoProps) {
  const [open, setOpen] = useState(false);
  const GlyphIcon = glyph === "horizontal" ? MoreHorizontal : MoreVertical;
  return (
    <div className="flex flex-col gap-2">
      <HeaderRow>
        <KebabMenuButton
          items={GENERIC_ITEMS}
          ariaLabel={ariaLabel}
          disabled={disabled}
          badge={withBadge ? badge : 0}
          align={align}
          icon={<GlyphIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
          onOpenChange={setOpen}
        />
      </HeaderRow>
      <p className="lyra-body-sm text-lyra-fg-secondary" role="status">
        Menu is {open ? "open" : "closed"}
      </p>
    </div>
  );
}

type KebabMenuButtonDemoStory = StoryObj<typeof KebabMenuButtonDemo>;

export const Default: KebabMenuButtonDemoStory = {
  args: {
    disabled: false,
    ariaLabel: "More options",
    withBadge: false,
    badge: 3,
    glyph: "vertical",
    align: "right",
  },
  parameters: {
    controls: {
      include: [
        "disabled",
        "ariaLabel",
        "withBadge",
        "badge",
        "glyph",
        "align",
        "Disabled",
        "Accessible label",
        "With badge",
        "Badge count",
        "Glyph",
        "Dropdown alignment",
      ],
      sort: "none",
    },
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Keeps the trigger visible but locked, with no dropdown (`disabled`).",
      table: { category: "Behavior" },
    },
    ariaLabel: {
      name: "Accessible label",
      control: "text",
      description: "Name read by screen readers for the trigger (`ariaLabel`).",
      table: { category: "Content" },
    },
    withBadge: {
      name: "With badge",
      control: "boolean",
      description: "Shows a count badge on the trigger's top-right corner (`badge`).",
      table: { category: "Content" },
    },
    badge: {
      name: "Badge count",
      control: { type: "number", min: 1 },
      description: "The number shown in the badge. Anything over 99 renders as 99+.",
      if: { arg: "withBadge", truthy: true },
      table: { category: "Content" },
    },
    glyph: {
      name: "Glyph",
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Three dots stacked vertically (kebab) or side by side (`icon`).",
      table: { category: "Appearance" },
    },
    align: {
      name: "Dropdown alignment",
      control: "radio",
      options: ["right", "left"],
      description:
        "Which edge of the trigger the dropdown lines up with. Right suits a trigger at the end of a row, left one nearer the screen's left edge (`align`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <KebabMenuButtonDemo key={JSON.stringify(args)} {...args} />
  ),
};
