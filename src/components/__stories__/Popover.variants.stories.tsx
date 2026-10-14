import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { MoreVertical } from "lucide-react";
import { Popover } from "../popover";
import { Button } from "../button";
import { Menu } from "../menu";
import { menuItems } from "./Popover.shared";

/* One page per Popover variant, shown under "Popover/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Popover → Default. "!autodocs" keeps this folder from getting a second
   Docs page. */
const meta: Meta<typeof Popover> = {
  title: "Headless Primitives/Popover/Variants",
  component: Popover,
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const MenuPopover: Story = {
  name: "Menu Popover",
  render: () => (
    <Popover
      placement="bottom"
      showArrow={false}
      // Menu's rows are edge-to-edge with their own p-1 inset — opt out
      // of Popover's default 20px body padding.
      bodyPadding={false}
      content={<Menu items={menuItems} bare className="w-[200px]" />}
    >
      <Button variant="ghost" size="sm">
        <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
        Actions
      </Button>
    </Popover>
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-10 p-8">
      {/* Placements */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Placements</p>
        <div className="grid grid-cols-2 gap-4">
          {(["top", "bottom", "left", "right"] as const).map((placement) => (
            <Popover
              key={placement}
              placement={placement}
              title={`Placement: ${placement}`}
              content={
                <div className="pb-4">
                  <p className="lyra-body-md text-lyra-fg-secondary">
                    This popover opens to the <strong>{placement}</strong>.
                  </p>
                </div>
              }
            >
              <Button variant="outline" className="w-full capitalize">{placement}</Button>
            </Popover>
          ))}
        </div>
      </div>

      {/* With / without arrow */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Arrow variants</p>
        <div className="flex gap-4">
          <Popover
            placement="bottom"
            title="With Arrow"
            showArrow
            content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Arrow is visible.</p></div>}
          >
            <Button variant="outline">With Arrow</Button>
          </Popover>
          <Popover
            placement="bottom"
            title="No Arrow"
            showArrow={false}
            content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Arrow is hidden.</p></div>}
          >
            <Button variant="outline">No Arrow</Button>
          </Popover>
        </div>
      </div>

      {/* With title / without title */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Title variants</p>
        <div className="flex gap-4">
          <Popover
            placement="bottom"
            title="With Title"
            content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Title is shown in the header.</p></div>}
          >
            <Button variant="outline">With Title</Button>
          </Popover>
          <Popover
            placement="bottom"
            content={<div className="py-5"><p className="lyra-body-md text-lyra-fg-secondary">No title header — content only.</p></div>}
          >
            <Button variant="outline">No Title</Button>
          </Popover>
        </div>
      </div>
    </div>
  ),
};

/* Screen-reader hint — looks identical to Simple; with a screen reader on, it
   announces "Press Tab to navigate, Escape to close" when the popover opens.
   Turn it on for dialog-like popovers (forms, pickers), not for menus. */
export const ScreenReaderHint: Story = {
  name: "Screen Reader Hint",
  render: () => (
    <Popover title="Popover Title" screenReaderHint content={<p className="lyra-body-md text-lyra-fg-secondary pt-2 pb-5">Open with a screen reader to hear the hint.</p>}>
      <Button>Open Popover</Button>
    </Popover>
  ),
};

/* Virtual anchor removed while closing — the CreateNew dial pad's Redial
   case. "Redial" anchors the popover to itself (`virtualAnchorRef`) instead
   of the trigger. "Connect" closes the popover AND removes the Redial button
   in the same click, the way a page navigates away when a call connects.
   The popover should fade out where it was; before the fix it jumped to the
   window's top-left corner for a frame (a detached element measures as 0,0).
   The play function asserts the fading popover hasn't moved. */
function VirtualAnchorRemovedDemo() {
  const [open, setOpen] = React.useState(false);
  const [showRedial, setShowRedial] = React.useState(true);
  const virtualAnchorRef = React.useRef<HTMLElement | null>(null);
  return (
    <div className="flex flex-col items-start gap-24 pt-24 pl-48">
      <Popover
        open={open}
        onOpenChange={setOpen}
        virtualAnchorRef={virtualAnchorRef}
        placement="bottom"
        align="start"
        showArrow={false}
        title="Dial Pad"
        content={
          <div className="pb-5">
            <Button
              onClick={() => {
                setOpen(false);
                setShowRedial(false);
              }}
            >
              Connect
            </Button>
          </div>
        }
      >
        <Button variant="outline">New Outbound</Button>
      </Popover>
      {showRedial ? (
        <Button
          variant="outline"
          onClick={(e) => {
            virtualAnchorRef.current = e.currentTarget;
            setOpen(true);
          }}
        >
          Redial
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setShowRedial(true)}>
          Reset
        </Button>
      )}
    </div>
  );
}

export const VirtualAnchorRemovedWhileClosing: Story = {
  name: "Virtual Anchor Removed While Closing",
  parameters: { layout: "fullscreen" },
  render: () => <VirtualAnchorRemovedDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(await canvas.findByText("Redial"));
    const connect = await body.findByText("Connect");
    const wrapper = connect.closest("[data-radix-popper-content-wrapper]") as HTMLElement;
    const before = wrapper.getBoundingClientRect();
    await userEvent.click(connect);
    // Let positioning re-run against the removed anchor (two frames).
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    // Still fading out: it must not have jumped to the window's top-left.
    if (wrapper.isConnected) {
      const during = wrapper.getBoundingClientRect();
      await expect(Math.round(during.top)).toBe(Math.round(before.top));
      await expect(Math.round(during.left)).toBe(Math.round(before.left));
    }
  },
};
