import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InteriorPanel } from "../interior-panel";
import { PageHeader } from "../page-header";
import { Button } from "../button";
import { Input } from "../input";

/* ── InteriorPanel stories ──
   Split out of the old unified `Panel.stories.tsx` — see side-panel.tsx and
   interior-panel.tsx doc comments for why `SidePanel` and `InteriorPanel`
   are two separate components rather than one `variant` prop. Exactly two
   stories here: one per side (`side="left"` / `side="right"`), named with
   an explicit "— Left"/"— Right" suffix on both so neither reads as an
   unlabeled/ambiguous default — see `SidePanel.stories.tsx` for the
   matching pair on the other panel type.

   Both stories now carry a `PageHeader` above the panel row with a plain
   primary "Toggle Panel" action (not `PageHeader`'s own `panelToggle` icon
   prop — a real, labeled action button per the request) wired to real
   `useState` so the panel actually opens/closes, rather than the previous
   `open` hardcoded to `true` with a no-op `onClose`. */

const meta: Meta<typeof InteriorPanel> = {
  title: "Custom Primitives/InteriorPanel",
  component: InteriorPanel,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof InteriorPanel>;

export const Right: Story = {
  name: "Interior Panel — Right",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters: `InteriorPanel` switches to `position:
            absolute; top: 0; height: 100%` below 1024px of THIS row's own
            width (see interior-panel.tsx's `isNarrow` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel
            side="right"
            open={open}
            headerTitle="Dialog Title"
            onClose={() => setOpen(false)}
            footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>
    );
  },
};

export const Left: Story = {
  name: "Interior Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters: `InteriorPanel` switches to `position:
            absolute; top: 0; height: 100%` below 1024px of THIS row's own
            width (see interior-panel.tsx's `isNarrow` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <InteriorPanel
            side="left"
            open={open}
            headerTitle="Filters"
            onClose={() => setOpen(false)}
            footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Search" placeholder="Filter by name..." />
              <Input label="Category" placeholder="Select category..." />
            </div>
          </InteriorPanel>
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>
    );
  },
};
