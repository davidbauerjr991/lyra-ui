import type { Meta, StoryObj } from "@storybook/react";
import { Settings, Trash2, Copy, ExternalLink, MoreVertical } from "lucide-react";
import { Popover } from "../popover";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { Menu } from "../menu";
import type { MenuEntry } from "../menu";

const meta: Meta<typeof Popover> = {
  title: "Atoms/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/* ── SOL-matched stories ── */

export const SimplePopover: Story = {
  name: "Simple Popover",
  render: () => (
    <Popover
      title="Popover Title"
      placement="bottom"
      content={
        <div className="px-5 pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary mb-1">
            Contextual content related to the trigger element.
          </p>
          <p className="lyra-body-md text-lyra-fg-secondary mb-5">
            If the popover is used for action confirmation, explain the
            consequences of the action here.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </div>
      }
    >
      <Button>Open Popover</Button>
    </Popover>
  ),
};

export const MenuPopover: Story = {
  name: "Menu Popover",
  render: () => {
    const items: MenuEntry[] = [
      { id: "duplicate", label: "Duplicate",        icon: Copy },
      { id: "open",      label: "Open in new tab",  icon: ExternalLink },
      { id: "settings",  label: "Settings",         icon: Settings },
      "separator",
      { id: "delete",    label: "Delete",            icon: Trash2, variant: "destructive" },
    ];
    return (
      <Popover
        placement="bottom"
        showArrow={false}
        content={<Menu items={items} className="border-0 shadow-none bg-transparent min-w-[200px]" />}
      >
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          Actions
        </Button>
      </Popover>
    );
  },
};

export const MaxHeightPopover: Story = {
  name: "Max Height Popover",
  render: () => (
    <Popover
      title="Long Content"
      placement="bottom"
      maxHeight="240px"
      content={
        <div className="px-5 pb-5 flex flex-col gap-3">
          {Array.from({ length: 8 }, (_, i) => (
            <p key={i} className="lyra-body-md text-lyra-fg-secondary">
              Content row {i + 1} — this popover has a max height and scrolls.
            </p>
          ))}
        </div>
      }
    >
      <Button>Scrollable Content</Button>
    </Popover>
  ),
};

export const MaxWidthPopover: Story = {
  name: "Max Width Popover",
  render: () => (
    <Popover
      title="Wide Popover"
      placement="bottom"
      maxWidth="560px"
      content={
        <div className="px-5 pb-5 flex flex-col gap-4">
          <Input label="Name" placeholder="Enter name" />
          <div className="flex gap-3">
            <div className="flex-1">
              <Select
                label="Type"
                options={[
                  { value: "back-office", label: "Back Office" },
                  { value: "knowledge", label: "Knowledge Worker" },
                  { value: "bpo", label: "BPO" },
                ]}
              />
            </div>
            <div className="flex-1">
              <Select
                label="Region"
                options={[
                  { value: "na1", label: "NA1" },
                  { value: "eu1", label: "EU1" },
                ]}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      }
    >
      <Button>Wide Form Popover</Button>
    </Popover>
  ),
};

/* ── Placement variants ── */

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-8">
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <Popover
          key={placement}
          placement={placement}
          title="Popover"
          content={
            <div className="px-4 pb-4">
              <p className="lyra-body-md text-lyra-fg-secondary">
                Placement: <strong>{placement}</strong>
              </p>
            </div>
          }
        >
          <Button variant="outline" className="w-full capitalize">
            {placement}
          </Button>
        </Popover>
      ))}
    </div>
  ),
};

