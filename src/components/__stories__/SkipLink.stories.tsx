import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SkipLink, MAIN_CONTENT_ID } from "../skip-link";
import { Button } from "../button";

const meta: Meta<typeof SkipLink> = {
  title: "Custom Primitives/SkipLink",
  component: SkipLink,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof SkipLink>;

/* A tiny page: "nav" buttons, then the main content. Click in the box, press
   Tab — the skip link appears first; Enter jumps past the buttons. */
function SkipLinkDemo({ targetId = MAIN_CONTENT_ID, children }: React.ComponentProps<typeof SkipLink>) {
  return (
    <div className="relative max-w-xl rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-4">
      <p className="lyra-body-sm mb-3 text-lyra-fg-secondary">
        Click in this box, then press Tab. The skip link appears first; press Enter to jump past the buttons below to the main content.
      </p>
      <div className="relative flex flex-wrap gap-2 pb-12">
        <SkipLink targetId={targetId}>{children}</SkipLink>
        <Button>Nav item 1</Button>
        <Button>Nav item 2</Button>
        <Button>Nav item 3</Button>
      </div>
      <div
        id={targetId}
        tabIndex={-1}
        className="rounded-lyra-md border border-lyra-border-subtle p-3 lyra-body-md text-lyra-fg-default focus:outline-none focus:ring-2 focus:ring-lyra-border-focus"
      >
        Main content — focus lands here.
      </div>
    </div>
  );
}

export const Default: Story = { render: (args) => <SkipLinkDemo {...args} /> };

/** Custom label and target id (e.g. for a page that already has its own landmark id). */
export const CustomLabelAndTarget: Story = {
  args: { children: "Skip to results", targetId: "results" },
  render: (args) => <SkipLinkDemo {...args} />,
};
