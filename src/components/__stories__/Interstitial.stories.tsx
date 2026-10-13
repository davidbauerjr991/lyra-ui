import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Interstitial } from "../interstitial";

const meta: Meta<typeof Interstitial> = {
  title: "UI/Interstitial",
  component: Interstitial,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  args: { title: "Show the charges", timestamp: "1:01 PM", by: "John Smith" },
};
export default meta;
type Story = StoryObj<typeof Interstitial>;

export const Pending: Story = { args: { pending: true } };
export const Default: Story = {};
/** Selected look while the row's side panel is open (blue background, active border). */
export const Active: Story = { args: { active: true } };

export const Lifecycle: Story = {
  name: "Lifecycle (click to open/close panel)",
  render: (args) => {
    const [pending, setPending] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => { const t = setTimeout(() => setPending(false), 1800); return () => clearTimeout(t); }, []);
    return (
      <div className="max-w-xl">
        <Interstitial {...args} pending={pending} active={open} onOpen={() => setOpen((o) => !o)} />
      </div>
    );
  },
};
