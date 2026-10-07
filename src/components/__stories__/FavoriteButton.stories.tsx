import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "../favorite-button";
import { DemoRow } from "./FavoriteButton.shared";

const meta: Meta<typeof FavoriteButton> = {
  title: "Custom Primitives/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (not favorited, favorited, at the favorites cap, inside a list)
   each have their own page under "FavoriteButton/Variants" — see
   FavoriteButton.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default and All Variants into a single playground: a list row holding the
   star. The star only appears on hover of the row until it is favorited.
   `DemoRow` owns the favorited state, so clicking toggles for real. ── */

interface FavoriteButtonDemoProps {
  startsFavorited?: boolean;
  disabled?: boolean;
  label?: string;
  placement?: "top" | "bottom" | "left" | "right";
}

function FavoriteButtonDemo({
  startsFavorited = false,
  disabled = false,
  label = "Jamie Torres",
  placement = "left",
}: FavoriteButtonDemoProps) {
  return (
    <div className="w-72">
      <DemoRow
        name={label}
        initiallyFavorited={startsFavorited}
        disabled={disabled}
        placement={placement}
      />
    </div>
  );
}

type FavoriteButtonDemoStory = StoryObj<typeof FavoriteButtonDemo>;

export const Default: FavoriteButtonDemoStory = {
  args: {
    startsFavorited: false,
    disabled: false,
    label: "Jamie Torres",
    placement: "left",
  },
  parameters: {
    controls: {
      include: [
        "startsFavorited",
        "disabled",
        "label",
        "placement",
        "Starts favorited",
        "At favorites cap",
        "Row name",
        "Tooltip placement",
      ],
      sort: "none",
    },
  },
  argTypes: {
    startsFavorited: {
      name: "Starts favorited",
      control: "boolean",
      description: "Whether the row starts favorited. A favorited star stays visible without hovering (`favorited`).",
      table: { category: "Behavior" },
    },
    disabled: {
      name: "At favorites cap",
      control: "boolean",
      description:
        "Mutes and locks an un-favorited star, as when a cap on favorites is reached (`disabled`). A favorited one can still be removed.",
      table: { category: "Behavior" },
    },
    label: {
      name: "Row name",
      control: "text",
      description: "Name of the thing being favorited. Used in the accessible name (`label`).",
      table: { category: "Content" },
    },
    placement: {
      name: "Tooltip placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Which side of the star the tooltip opens on (`placement`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <FavoriteButtonDemo key={JSON.stringify(args)} {...args} />
  ),
};
