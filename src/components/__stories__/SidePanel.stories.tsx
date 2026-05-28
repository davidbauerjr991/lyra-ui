import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SidePanel } from "../side-panel";
import { Button } from "../button";

const meta: Meta<typeof SidePanel> = {
  title: "UI/PageContent/SidePanel",
  component: SidePanel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  name: "Toggle Demo",
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="h-[500px] flex flex-col">
        <div className="flex items-center gap-3 border-b border-lyra-border-subtle px-4 py-3">
          <Button variant="outline" size="sm" onClick={() => setOpen((v) => !v)}>
            {open ? "Close Panel" : "Open Panel"}
          </Button>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <SidePanel open={open}>
            <div className="p-4">
              <h3 className="lyra-heading-sm text-lyra-fg-default mb-2">Panel Content</h3>
              <p className="lyra-body-md text-lyra-fg-secondary">
                This is a 256px wide side panel with container-subtle background.
              </p>
            </div>
          </SidePanel>
          <div className="flex-1 bg-lyra-bg-surface-base p-6">
            <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  name: "Custom Width (320px)",
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="h-[500px] flex flex-col">
        <div className="flex items-center gap-3 border-b border-lyra-border-subtle px-4 py-3">
          <Button variant="outline" size="sm" onClick={() => setOpen((v) => !v)}>
            {open ? "Close Panel" : "Open Panel"}
          </Button>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <SidePanel open={open} width={320}>
            <div className="p-4">
              <h3 className="lyra-heading-sm text-lyra-fg-default mb-2">Wider Panel</h3>
              <p className="lyra-body-md text-lyra-fg-secondary">
                This panel is 320px wide.
              </p>
            </div>
          </SidePanel>
          <div className="flex-1 bg-lyra-bg-surface-base p-6">
            <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
          </div>
        </div>
      </div>
    );
  },
};
