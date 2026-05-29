import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../page-header";
import { SidePanel } from "../side-panel";
import { Button } from "../button";
import { AiIcon } from "../icons/ai-icon";

const meta: Meta<typeof PageHeader> = {
  title: "UI/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

const defaultActions = (
  <>
    <Button variant="outline" size="sm">Secondary</Button>
    <Button size="sm">Primary</Button>
    <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />
    <Button variant="outline" size="sm">
      <AiIcon className="h-4 w-4" />
      Ask AI
    </Button>
  </>
);

export const Default: Story = {
  name: "Default",
  args: {
    title: "Desktop Designs",
    actions: defaultActions,
  },
};

export const TitleOnly: Story = {
  name: "Title Only",
  args: {
    title: "Settings",
  },
};

export const WithSingleAction: Story = {
  name: "Single Action",
  args: {
    title: "User Management",
    actions: <Button size="sm">Add User</Button>,
  },
};

export const WithPanelToggle: Story = {
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    showPanelToggle: true,
    actions: defaultActions,
  },
};

export const WithBreadcrumb: Story = {
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: { label: "ParentName" },
    actions: defaultActions,
  },
};

export const WithTogglePinned: Story = {
  name: "Panel Toggle (Pinned)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(true);

    return (
      <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel open={panelOpen} pinned headerTitle="Designer" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader
            title="Page Title"
            showPanelToggle
            panelPinned
            onPanelToggle={() => setPanelOpen((v) => !v)}
            breadcrumb={{ label: "ParentName" }}
            actions={defaultActions}
          />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>
    );
  },
};

export const WithToggleOverlay: Story = {
  name: "Panel Toggle (Overlay on Hover)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(false);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

    const onHoverStart = () => {
      clearTimeout(timeoutRef.current);
      setPanelOpen(true);
    };
    const onHoverEnd = () => {
      timeoutRef.current = setTimeout(() => setPanelOpen(false), 300);
    };

    return (
      <div className="relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel
          open={panelOpen}
          pinned={false}
          headerTitle="Designer"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader
            title="Page Title"
            showPanelToggle
            panelPinned={false}
            onPanelHoverStart={onHoverStart}
            onPanelHoverEnd={onHoverEnd}
            breadcrumb={{ label: "ParentName" }}
            actions={defaultActions}
          />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>
    );
  },
};
