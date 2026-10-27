import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
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

/** `defaultFullScreen` + `onFullScreenChange`: a consumer that remounts the panel per context (one slide-over per
 *  assignment) keeps each one's full-screen state and brings it back in it. Toggle full screen on A, switch to B and
 *  back: A comes back full-screen, B as it was left. */
function RememberedFullScreen() {
  const [context, setContext] = React.useState<"A" | "B">("A");
  const [fullScreenBy, setFullScreenBy] = React.useState<Record<string, boolean>>({});
  return (
    <div className="flex flex-col gap-3 max-w-3xl">
      <div className="flex gap-2">
        {(["A", "B"] as const).map((c) => (
          <Button key={c} variant={c === context ? "default" : "outline"} onClick={() => setContext(c)}>
            {`Assignment ${c}`}
          </Button>
        ))}
      </div>
      <PanelFrame label={`Assignment ${context} · full screen: ${fullScreenBy[context] ? "on" : "off"}`}>
        <InteriorPanel
          key={context}
          open
          headerTitle={`Assignment ${context}`}
          allowFullScreen
          defaultFullScreen={!!fullScreenBy[context]}
          onFullScreenChange={(on) => setFullScreenBy((prev) => ({ ...prev, [context]: on }))}
          onClose={() => {}}
        >
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
    </div>
  );
}

export const FullScreenRemembered: Story = {
  name: "Full Screen Remembered per Context",
  render: () => <RememberedFullScreen />,
};
