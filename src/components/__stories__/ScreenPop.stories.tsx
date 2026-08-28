import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ReactNode } from "react";
import { ScreenPop, SCREEN_POP_APPS } from "../screen-pop";
import { ContainerHeader } from "../container-header";

/* ── ScreenPop stories ──
   The "Screen Pop" app panel from the Agent Next Gen AppHeader's top-right
   app area — a header `Select` choosing the external app, a mock login
   card for Salesforce/Zendesk (real embeds are impossible: those apps send
   clickjack-protection headers refusing cross-origin iframes — see the
   component's own `MockLoginCard` doc comment), and the shared blank
   placeholder for every other app. Its real home is the shared app panel
   in AgentNextGenTemplate.stories.tsx (via `useScreenPopContent`); these
   stories show the standalone component inside a panel-shaped frame with a
   `ContainerHeader` mimicking that context (`bordered={false}` — the
   component's own Select row carries the divider). */

const meta: Meta<typeof ScreenPop> = {
  title: "UI/Screen Pop",
  component: ScreenPop,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    defaultApp: {
      control: "select",
      options: SCREEN_POP_APPS.map((o) => o.value),
      description: "Which app the panel starts on (still switchable in the panel itself)",
    },
    app: { table: { disable: true } },
    onAppChange: { table: { disable: true } },
  },
  args: { defaultApp: "salesforce" },
};
export default meta;
type Story = StoryObj<typeof ScreenPop>;

/** Panel-shaped frame matching the shared app panel's docked chrome. */
function PanelFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex h-[560px] w-[360px] flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base ${className ?? ""}`}>
      {children}
    </div>
  );
}

/** Stateful wrapper — hooks can't live in a story's render fn. Fully
 *  controlled per the repo's controlled-components convention. */
function ScreenPopDemo({ defaultApp = "salesforce" }: { defaultApp?: string }) {
  const [app, setApp] = useState(defaultApp);
  return (
    <PanelFrame>
      <ContainerHeader title="Screen Pop" bordered={false} />
      <ScreenPop app={app} onAppChange={setApp} />
    </PanelFrame>
  );
}

export const Default: Story = {
  // `key` remounts the demo when the control changes — `useState`'s initial
  // value only applies on first mount.
  render: (args) => <ScreenPopDemo key={args.defaultApp} defaultApp={args.defaultApp} />,
};

/** Every distinct body state side by side: the two mocked login cards and
 *  the blank placeholder every remaining app shares. */
export const AllVariants: Story = {
  name: "All Body States",
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      <ScreenPopDemo defaultApp="salesforce" />
      <ScreenPopDemo defaultApp="zendesk" />
      <ScreenPopDemo defaultApp="servicenow" />
    </div>
  ),
};
