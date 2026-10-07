import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";
import { Separator } from "../separator";
import { StackedFrame, InlineRow, Text } from "./Separator.shared";

const meta: Meta<typeof Separator> = {
  title: "Custom Primitives/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (horizontal between blocks, vertical between inline items) each
   have their own page under "Separator/Variants" — see
   Separator.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates the old Horizontal and
   Vertical into a single playground. Separator is display-only, so there is
   no state to wire. ── */

interface SeparatorDemoProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  maxWidth?: boolean;
  margin?: "16" | "8" | "4" | "0";
  itemCount?: number;
}

/* Static class names (not built from the value) so Tailwind can see them. */
const MARGIN_Y = { "16": "my-4", "8": "my-2", "4": "my-1", "0": "my-0" } as const;
const MARGIN_X = { "16": "mx-4", "8": "mx-2", "4": "mx-1", "0": "mx-0" } as const;

function SeparatorDemo({
  orientation = "horizontal",
  decorative = false,
  maxWidth = false,
  margin = "16",
  itemCount = 3,
}: SeparatorDemoProps) {
  const count = Math.max(2, Math.min(8, Math.round(itemCount)));
  const indexes = Array.from({ length: count }, (_, i) => i);
  return orientation === "horizontal" ? (
    <StackedFrame maxWidth={maxWidth}>
      {indexes.map((i) => (
        <Fragment key={i}>
          {i > 0 && <Separator className={MARGIN_Y[margin]} decorative={decorative} />}
          <Text>Section {i + 1}</Text>
        </Fragment>
      ))}
    </StackedFrame>
  ) : (
    <StackedFrame maxWidth={maxWidth}>
      <InlineRow spread>
        {indexes.map((i) => (
          <Fragment key={i}>
            {i > 0 && <Separator orientation="vertical" className={MARGIN_X[margin]} decorative={decorative} />}
            <Text className="flex-1 text-center">Item {i + 1}</Text>
          </Fragment>
        ))}
      </InlineRow>
    </StackedFrame>
  );
}

type SeparatorDemoStory = StoryObj<typeof SeparatorDemo>;

export const Default: SeparatorDemoStory = {
  args: {
    orientation: "horizontal",
    decorative: false,
    maxWidth: false,
    margin: "16",
    itemCount: 3,
  },
  parameters: {
    controls: {
      include: [
        "orientation",
        "decorative",
        "maxWidth",
        "margin",
        "itemCount",
        "Orientation",
        "Decorative",
        "Max width",
        "Margin",
        "Item count",
      ],
      sort: "none",
    },
  },
  argTypes: {
    decorative: {
      name: "Decorative",
      control: "boolean",
      description: "Hides the separator from screen readers when it is purely visual (`decorative`).",
      table: { category: "Behavior" },
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["horizontal", "vertical"],
      description:
        "Horizontal spans the width of a stacked layout. Vertical spans the height of a row with a set height (`orientation`).",
      table: { category: "Appearance" },
    },
    itemCount: {
      name: "Item count",
      control: { type: "number", min: 2, max: 8, step: 1 },
      description: "How many sections (horizontal) or items (vertical) the example has. A separator sits between each pair, so N items show N − 1 separators.",
      table: { category: "Content", defaultValue: { summary: "3" } },
    },
    margin: {
      name: "Margin",
      control: "radio",
      options: ["16", "8", "4", "0"],
      description: "Space in px on each side of the separator: above and below a horizontal one, left and right of a vertical one (`className`).",
      table: { category: "Appearance", defaultValue: { summary: "16" } },
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the example card between 240px and 320px instead of full width, matching Input. Off stretches it across its container. Vertical items spread evenly across the width.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => <SeparatorDemo key={JSON.stringify(args)} {...args} />,
};
