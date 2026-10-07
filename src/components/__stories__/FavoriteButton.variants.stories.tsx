import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "../favorite-button";
import { DemoRow } from "./FavoriteButton.shared";

/* One page per FavoriteButton variant, shown under "FavoriteButton/Variants"
   in the sidebar. Static references for design review; the interactive
   playground is FavoriteButton → Default. "!autodocs" keeps this folder from
   getting a second Docs page. */
const meta: Meta<typeof FavoriteButton> = {
  title: "Custom Primitives/FavoriteButton/Variants",
  component: FavoriteButton,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const States: Story = {
  name: "States (Not Favorited, Favorited, At Cap)",
  render: () => (
    <div className="flex w-72 flex-col gap-3">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Not favorited — hover the row to reveal the star</p>
        <DemoRow name="Jamie Torres" />
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Favorited — star stays visible without hovering</p>
        <DemoRow name="Priya Nair" initiallyFavorited />
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">At favorites cap — un-favorited star is muted and inert</p>
        <DemoRow name="Wei Chen" disabled />
      </div>
    </div>
  ),
};

export const InList: Story = {
  name: "Inside a list",
  render: () => (
    <div className="flex w-72 flex-col gap-1 rounded-lyra-lg border border-lyra-border-subtle p-2">
      <DemoRow name="Jamie Torres" initiallyFavorited />
      <DemoRow name="Priya Nair" />
      <DemoRow name="Wei Chen" />
    </div>
  ),
};
