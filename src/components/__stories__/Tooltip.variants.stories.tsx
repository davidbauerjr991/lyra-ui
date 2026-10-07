import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../tooltip";
import { Button } from "../button";
import { LONG_TEXT, SHORT_TEXT, TOOLTIP_PLACEMENTS } from "./Tooltip.shared";

/* One page per Tooltip variant, shown under "Tooltip/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Tooltip → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Tooltip> = {
  title: "Headless Primitives/Tooltip/Variants",
  component: Tooltip,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/* ── All Variants — every placement plus short and long content (was
   All Placements, Static Preview, Long Content and All Variants). Hover a
   button to see its tooltip; the delay is 0 so they open at once. ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-12 p-8">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">All Placements</p>
        <div className="grid grid-cols-2 gap-16">
          {TOOLTIP_PLACEMENTS.map((placement) => (
            <div key={placement} className="flex items-center justify-center py-6">
              <Tooltip content={SHORT_TEXT} placement={placement} delayMs={0}>
                <Button variant="outline" className="capitalize">{placement}</Button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">Content Length</p>
        <div className="flex items-center gap-8">
          <Tooltip content="Short tip" placement="top" delayMs={0}>
            <Button variant="outline">Short content</Button>
          </Tooltip>
          <Tooltip content={LONG_TEXT} placement="top" delayMs={0}>
            <Button variant="outline">Long content</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

/* Only when truncated — hover or Tab to each label. Only the one that is cut
   off shows its full text; the one that fits shows nothing. */
export const OnlyWhenTruncated: Story = {
  name: "Only When Truncated",
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <Tooltip content="A long label that gets cut off by its container" onlyWhenTruncated delayMs={0}>
        <span tabIndex={0} className="lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1">
          A long label that gets cut off by its container
        </span>
      </Tooltip>
      <Tooltip content="Fits" onlyWhenTruncated delayMs={0}>
        <span tabIndex={0} className="lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1">
          Fits
        </span>
      </Tooltip>
    </div>
  ),
};
