import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { User } from "lucide-react";
import { SidePanel } from "../side-panel";
import { Button } from "../button";
import { PanelPinButton } from "../panel-pin-button";

/* ── SidePanel stories ──
   Split out of the old unified `Panel.stories.tsx` — see side-panel.tsx and
   interior-panel.tsx doc comments for why `SidePanel` and `InteriorPanel`
   are two separate components rather than one `variant` prop. Exactly two
   stories here: one per side (`side="left"` / `side="right"`), named with
   an explicit "— Left"/"— Right" suffix on both so neither reads as an
   unlabeled/ambiguous default. Both start unpinned by default — only start
   a side panel pinned when a specific prototype actually calls for it. */

const meta: Meta<typeof SidePanel> = {
  title: "Custom Primitives/SidePanel",
  component: SidePanel,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Left: Story = {
  name: "Side Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel
          side="left"
          open={open}
          pinned={pinned}
          headerTitle="Designer"
          onPinToggle={() => setPinned((v) => !v)}
        >
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen((v) => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>
    );
  },
};

export const Right: Story = {
  name: "Side Panel — Right",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen((v) => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned" : "Overlay"}
          </p>
        </div>
        <SidePanel
          side="right"
          open={open}
          pinned={pinned}
          headerTitle="Details"
          onPinToggle={() => setPinned((v) => !v)}
        >
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Right side panel content.</p>
          </div>
        </SidePanel>
      </div>
    );
  },
};

/* ── PanelPinButton ──
   Moved in from its own top-level story — `PanelPinButton` was extracted
   out of `SidePanel`'s own header (see `side-panel.tsx`) into its own atom,
   same Tooltip/button/focus-ring and the pin-icon-rotates-45°-when-pinned
   animation, reusable anywhere a consumer needs to drive a panel's
   `pinned`/`open` state from outside the panel itself — kept alongside
   `SidePanel` here since that's its one real usage in this repo. */
export const PinButton: Story = {
  name: "PanelPinButton",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return (
      <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned((v) => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>
    );
  },
};

/* ── PanelPinButton — Custom icon ──
   agent-next-gen-v1's Designer-panel trigger sits on the interaction
   record header, next to the customer name — the `User` icon that's
   already there, not a separate `Pin` glyph. Passing `icon` swaps the
   glyph and switches the "pinned" indicator from the default's rotate-45°
   animation (a pin-specific metaphor that looks wrong on an arbitrary
   glyph) to a selected/pressed background instead — same Tooltip/aria
   behavior either way. */
export const PinButtonCustomIcon: Story = {
  name: "PanelPinButton — Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return (
      <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton
          pinned={pinned}
          onToggle={() => setPinned((v) => !v)}
          icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
          pinnedLabel="Unpin Designer panel"
          unpinnedLabel="Pin Designer panel"
        />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>
    );
  },
};
