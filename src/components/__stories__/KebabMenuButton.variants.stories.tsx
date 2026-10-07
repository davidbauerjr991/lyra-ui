import type { Meta, StoryObj } from "@storybook/react";
import { KebabMenuButton } from "../kebab-menu-button";
import { GENERIC_ITEMS, HeaderRow } from "./KebabMenuButton.shared";

/* One page per KebabMenuButton variant, shown under
   "KebabMenuButton/Variants" in the sidebar. Static references for design
   review; the interactive playground is KebabMenuButton → Default.
   "!autodocs" keeps this folder from getting a second Docs page. */
const meta: Meta<typeof KebabMenuButton> = {
  title: "Custom Primitives/KebabMenuButton/Variants",
  component: KebabMenuButton,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof KebabMenuButton>;

export const States: Story = {
  name: "States (Default, With Badge, Disabled)",
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Default</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" />
        </HeaderRow>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">With badge</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" badge={3} />
        </HeaderRow>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Disabled</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" disabled />
        </HeaderRow>
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Click a trigger to open the dropdown — it renders via a portal to `document.body`, so it isn't clipped by this frame.
      </p>
    </div>
  ),
};
