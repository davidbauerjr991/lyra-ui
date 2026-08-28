import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ReactNode } from "react";
import { AgentSearch } from "../agent-search";
import { ContainerHeader } from "../container-header";

/* ── AgentSearch stories ──
   The "Search" app panel body from the Agent Next Gen AppHeader's top-right
   app area — a `SearchInput` in a fixed header row above a blank "Nothing
   here yet." body. Its real home is the shared app panel in
   AgentNextGenTemplate.stories.tsx (via `useAgentSearchContent`); these
   stories show the standalone component inside a plain panel-shaped frame
   with a `ContainerHeader`, mimicking that context. `bordered={false}` on
   the header since `AgentSearch`'s own search row carries the divider. */

const meta: Meta<typeof AgentSearch> = {
  title: "UI/Agent Search",
  component: AgentSearch,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    placeholder: { control: "text" },
    query: { table: { disable: true } },
    defaultQuery: { table: { disable: true } },
    onQueryChange: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof AgentSearch>;

/** Panel-shaped frame matching the shared app panel's docked chrome. */
function PanelFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[480px] w-[360px] flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      {children}
    </div>
  );
}

/** Stateful wrapper — hooks can't live in a story's render fn. */
function AgentSearchDemo({ placeholder }: { placeholder?: string }) {
  const [query, setQuery] = useState("");
  return (
    <PanelFrame>
      <ContainerHeader title="Search" bordered={false} />
      <AgentSearch query={query} onQueryChange={setQuery} placeholder={placeholder} />
    </PanelFrame>
  );
}

export const Default: Story = {
  render: (args) => <AgentSearchDemo placeholder={args.placeholder} />,
};

/** Uncontrolled — the component owns the query itself (`defaultQuery`
 *  seeds it), for consumers that don't need to read it. */
export const Uncontrolled: Story = {
  name: "Uncontrolled (defaultQuery)",
  render: () => (
    <PanelFrame>
      <ContainerHeader title="Search" bordered={false} />
      <AgentSearch defaultQuery="Jamie Torres" />
    </PanelFrame>
  ),
};
