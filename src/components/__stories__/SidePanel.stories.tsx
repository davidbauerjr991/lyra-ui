import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { SidePanel } from "../side-panel";
import { Button } from "../button";
import { PanelPinButton } from "../panel-pin-button";
import { Select } from "../select";
import { TreeMenu, type TreeMenuItem } from "../tree-menu";

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

/* ── View Switcher (headerTitleBadge) ──
   `headerTitleBadge` renders inline right after `headerTitle`, same row —
   distinct from `headerActions`, which sits at the header's far right.
   Here it's a bare-chevron `Select` (single-select, same composition as
   `Select.stories.tsx`'s "Custom Trigger (Icon, Single-Select)" story)
   letting the panel switch between two entirely different trees, the
   header title following whichever is active. Modeled on Outbound-
   Campaigns' Monitor dashboard side menu (`CallCentersSideMenu.tsx`),
   which needed exactly this: a chevron after the title opening a
   Call Centers / Service Groups switcher. */

type ViewSwitcherView = "treeA" | "treeB";

const TREE_A_ITEMS: TreeMenuItem[] = [
  { label: "Financial Services", children: [{ label: "FS_HCI" }, { label: "FS_Manual" }] },
  { label: "Hospitality", children: [{ label: "H_HCI" }, { label: "H_Manual" }] },
];

const TREE_B_ITEMS: TreeMenuItem[] = [
  { label: "Team Alpha", children: [{ label: "Alpha_Primary" }, { label: "Alpha_Backup" }] },
  { label: "Team Beta", children: [{ label: "Beta_Primary" }, { label: "Beta_Backup" }] },
];

export const ViewSwitcher: Story = {
  name: "Side Panel — View Switcher (headerTitleBadge)",
  render: () => {
    const [view, setView] = useState<ViewSwitcherView>("treeA");
    return (
      <div className="relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel
          side="left"
          pinned
          headerTitle={view === "treeA" ? "Tree A" : "Tree B"}
          headerTitleBadge={
            <Select
              options={[
                { value: "treeA", label: "Tree A" },
                { value: "treeB", label: "Tree B" },
              ]}
              value={view}
              onValueChange={(v) => setView(v as ViewSwitcherView)}
              trigger={<ChevronDown className="h-4 w-4" aria-hidden="true" />}
              dropdownAlign="left"
            />
          }
        >
          <TreeMenu key={view} className="px-2" items={view === "treeA" ? TREE_A_ITEMS : TREE_B_ITEMS} />
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4">
          <p className="lyra-body-sm text-lyra-fg-secondary">Main content column.</p>
        </div>
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
