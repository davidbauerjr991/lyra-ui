import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ContainerHeader } from "../container-header";
import { Button } from "../button";
import { Badge } from "../badge";
import { GripVertical, Settings } from "lucide-react";
import { InfoIcon } from "../icons/info-icon";
import { TabList, Tab } from "../tabs";

/* ── Custom Primitives / ContainerHeader ──
   The interactive playground. It is the header `Container`, `Modal`, `SidePanel`, `InteriorPanel` and `Draggable`
   render for their `header*` props (`Container` and `Modal` through
   `ContainerHeaderSlot`). Every pattern that used to be its own fixed story (close button, icon,
   actions, badge, subhead, buttons, tabs) is a control here; the static side-by-side
   reference is under "ContainerHeader/Variants". */

interface HeaderDemoProps {
  title?: string;
  bordered?: boolean;
  background?: "none" | "subtle";
  density?: "comfortable" | "compact";
  showClose?: boolean;
  showDraggable?: boolean;
  showBack?: boolean;
  showIcon?: boolean;
  showBadge?: boolean;
  showSubhead?: boolean;
  showActions?: boolean;
  showButtons?: boolean;
  showTabs?: boolean;
  showTitle?: boolean;
}

function HeaderDemo({
  title = "Container Title",
  bordered = false,
  background = "none",
  density = "comfortable",
  showClose = false,
  showDraggable = false,
  showBack = false,
  showIcon = false,
  showBadge = false,
  showSubhead = false,
  showActions = false,
  showButtons = false,
  showTabs = false,
  showTitle = true,
}: HeaderDemoProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "Detail", "History"];
  return (
    <ContainerHeader
      title={showTitle ? title : undefined}
      bordered={bordered}
      background={background}
      density={density}
      // Draggable: the grab cursor covers the whole header (like a floating panel, where any part of
      // the header drags), not just the grip. Placement only; nothing moves.
      className={showDraggable ? "cursor-grab select-none active:cursor-grabbing" : undefined}
      // Placement only: the grip sits where the drag handle does in a floating panel (before the icon and
      // title) and doesn't drag anything here.
      icon={
        showDraggable || showIcon ? (
          <span className="flex items-center gap-1.5">
            {showDraggable && (
              <span aria-hidden="true" className="flex text-lyra-fg-secondary">
                <GripVertical className="h-4 w-4" strokeWidth={1.5} />
              </span>
            )}
            {showIcon && <InfoIcon className="h-5 w-5" />}
          </span>
        ) : undefined
      }
      onBack={showBack ? () => {} : undefined}
      onClose={showClose ? () => {} : undefined}
      titleBadge={showBadge ? <Badge shape="circle" count={5} variant="critical" size="sm" /> : undefined}
      subhead={showSubhead ? "Filter and search across all records" : undefined}
      actions={
        showActions || showButtons ? (
          <>
            {/* Left to right: buttons, then actions (gear), then the built-in close button. */}
            {showButtons && (
              <>
                <Button variant="outline" size="md">Action</Button>
                <Button variant="outline" size="md">Action</Button>
              </>
            )}
            {showActions && (
              <Button variant="ghost" size="icon" title="Settings">
                <Settings className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            )}
          </>
        ) : undefined
      }
      // `tabs` renders below the title row inside the same header; padding and border are dropped automatically.
      tabs={
        showTabs ? (
          <TabList className="px-4">
            {tabs.map((label, i) => (
              <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                {label}
              </Tab>
            ))}
          </TabList>
        ) : undefined
      }
    />
  );
}

const meta: Meta<typeof HeaderDemo> = {
  title: "Custom Primitives/ContainerHeader",
  component: ContainerHeader as never,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof HeaderDemo>;

export const Default: Story = {
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display name, so both names and keys are listed.
      include: [
        "Title", "Title text", "Style", "Density", "Header divider", "Draggable", "Back button", "Close button", "Icon", "Badge", "Subhead", "Actions", "Buttons", "Tabs",
        "showTitle", "title", "background", "density", "bordered", "showDraggable", "showBack", "showClose", "showIcon", "showBadge", "showSubhead", "showActions", "showButtons", "showTabs",
      ],
      sort: "none",
    },
  },
  args: {
    title: "Container Title",
    showTitle: true,
    background: "none",
    density: "comfortable",
    bordered: false,
    showDraggable: false,
    showBack: false,
    showClose: false,
    showIcon: false,
    showBadge: false,
    showSubhead: false,
    showActions: false,
    showButtons: false,
    showTabs: false,
  },
  argTypes: {
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (`title`). Turn it off for an icon-only or action-only header.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    title: {
      name: "Title text",
      control: "text",
      description: "Text of the title.",
      if: { arg: "showTitle", truthy: true },
      table: { category: "Content" },
    },
    background: {
      name: "Style",
      control: "radio",
      options: ["none", "subtle"],
      labels: { none: "None", subtle: "Subtle" },
      description: "Header background (`background`).",
      table: { category: "Appearance", defaultValue: { summary: "none" } },
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      description: "Header height (`density`): comfortable is 60px, compact is 48px, the same height as an Accordion row.",
      table: { category: "Appearance", defaultValue: { summary: "comfortable" } },
    },
    bordered: {
      name: "Header divider",
      control: "boolean",
      description: "Border along the bottom edge of the header (`bordered`). Dropped automatically when tabs are on.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and make the whole header a grab target (grab cursor), as in a floating panel. Placement only: it doesn't drag anything here (`Draggable` and `Modal`'s `draggable` do the dragging).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showBack: {
      name: "Back button",
      control: "boolean",
      description: "Back arrow before the title (`onBack`), for drilling into a sub-view.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showClose: {
      name: "Close button",
      control: "boolean",
      description: "Built-in close button at the far right (`onClose`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Icon to the left of the title (`icon`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showBadge: {
      name: "Badge",
      control: "boolean",
      description: "Count badge inline after the title (`titleBadge`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showSubhead: {
      name: "Subhead",
      control: "boolean",
      description: "Supporting line under the title (`subhead`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Icon action on the right (`actions`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showButtons: {
      name: "Buttons",
      control: "boolean",
      description: "Two outline buttons on the right (`actions`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Tab row inside the header (`tabs`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => <HeaderDemo key={JSON.stringify(args)} {...args} />,
};
