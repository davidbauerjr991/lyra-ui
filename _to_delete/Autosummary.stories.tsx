import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CustomerContextOverview } from "../contact-overview";

// The Autosummary is the "Contact Snapshot" container of CustomerContextOverview with the other containers hidden.
// Bullets may contain [label](key) tokens that render as links; clicking a link opens a slide-out panel in the app, and
// clicking it again while that panel is open closes it.
const meta: Meta<typeof CustomerContextOverview> = {
  title: "UI/Autosummary",
  component: CustomerContextOverview,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  args: {
    customerName: "Maya Chen",
    showCustomerProfile: false,
    showNextBestAction: false,
    snapshot: [
      "Calling for a $412.00 refund on [order NR-10871](maya-order), an espresso machine that arrived with a cracked water tank.",
      "Wants a refund, not a replacement; the damage photo check passed.",
      "Paid with [Visa 4417](maya-card); refunds up to $500 with a confirmed photo check are within your limit ([RET-1.3](maya-refund-steps)).",
    ],
  },
  decorators: [(Story) => <div className="max-w-2xl"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof CustomerContextOverview>;

/** Purple header, the default treatment. */
export const Default: Story = {};

/** Blue (info) header used for AI-led and cold-call cases. */
export const Blue: Story = { args: { autosummaryBlue: true } };

/** Links toggle: the active key is highlighted and clicking it again clears it, mirroring the slide-out panel opening and closing. */
export const LinksToggleSlideOut: Story = {
  name: "Links toggle a slide-out",
  args: { autosummaryBlue: true },
  render: (args) => {
    const [open, setOpen] = React.useState<string | null>(null);
    return (
      <div className="flex flex-col gap-3">
        <CustomerContextOverview {...args} onSnapshotLink={(key) => setOpen((cur) => (cur === key ? null : key))} />
        <p className="lyra-body-sm text-lyra-fg-secondary">Slide-out open: {open ?? "none"}</p>
      </div>
    );
  },
};
