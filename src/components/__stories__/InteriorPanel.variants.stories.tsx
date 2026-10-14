import type { Meta, StoryObj } from "@storybook/react";
import { InteriorPanel } from "../interior-panel";
import { InfoIcon } from "../icons/info-icon";
import { PanelForm, PanelFrame, PanelTabs, panelFooter } from "./InteriorPanel.shared";

/* One page per InteriorPanel scenario, shown under "InteriorPanel/Variants"
   in the sidebar. Static references for design review; the interactive
   playground is InteriorPanel → Default (which also covers the app-level
   "In-Contact" overlay setup via its "Cover page header" control).
   "!autodocs" keeps this folder from getting a second Docs page. The four stories paired with Sol's Panel in
   lyra-sol-compare (Right, WithFullScreen, WithTabs, Left) stay in
   InteriorPanel.stories.tsx unchanged. */
const meta: Meta<typeof InteriorPanel> = {
  title: "Custom Primitives/InteriorPanel/Variants",
  component: InteriorPanel,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof InteriorPanel>;

export const States: Story = {
  name: "States (Open, Closed, Side, Resizable)",
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-5xl">
      <PanelFrame label="Open — right (default)">
        <InteriorPanel side="right" open headerTitle="Open" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Open — left" side="left">
        <InteriorPanel side="left" open headerTitle="Left" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Closed (open=false)">
        <InteriorPanel side="right" open={false} headerTitle="Closed" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Not resizable (resizable=false)">
        <InteriorPanel side="right" open resizable={false} headerTitle="Fixed width" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
    </div>
  ),
};

export const HeaderAndFooter: Story = {
  name: "Header and Footer Options",
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-5xl">
      <PanelFrame label="Subtitle and icon">
        <InteriorPanel
          open
          headerTitle="Customer Information"
          headerSubhead="Noah Bennett · CST-10296"
          headerIcon={<InfoIcon className="h-5 w-5" />}
          onClose={() => {}}
        >
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Tabs in header">
        <InteriorPanel open headerTitle="Customer Information" headerTabs={<PanelTabs />} onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Footer">
        <InteriorPanel open headerTitle="With footer" footer={panelFooter} onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Full screen button">
        <InteriorPanel open headerTitle="Wide Report" allowFullScreen onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
    </div>
  ),
};
