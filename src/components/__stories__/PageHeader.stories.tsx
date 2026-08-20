import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { User, Headphones } from "lucide-react";
import { PageHeader } from "../page-header";
import { SidePanel } from "../side-panel";
import { InteriorPanel } from "../interior-panel";
import { Button } from "../button";
import { AiIcon } from "../icons/ai-icon";
import { Icon } from "../icon";

const meta: Meta<typeof PageHeader> = {
  title: "UI/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

const defaultActions = (
  <>
    <Button variant="outline">Secondary</Button>
    <Button>Primary</Button>
    <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />
    <Button variant="outline">
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

export const WithBadge: Story = {
  name: "With Badge",
  args: {
    title: "Desktop Designs",
    badge: "Active",
    badgeColor: "green",
    badgeVariant: "subtle",
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
    actions: <Button>Add User</Button>,
  },
};

export const WithPanelToggle: Story = {
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    panelToggle: "left",
    actions: defaultActions,
  },
};

export const RecordHeader: Story = {
  name: "Record Header (Icon + Subtitle)",
  args: {
    icon: <User className="h-5 w-5" strokeWidth={1.5} />,
    title: "Jamie Torres",
    subtitle: "CS-1239930",
    actions: (
      <Button variant="outline">
        <AiIcon className="h-4 w-4" />
        Ask AI
      </Button>
    ),
  },
};

export const RecordHeaderCircleAvatarNoDivider: Story = {
  name: "Record Header (Circle Avatar, No Divider)",
  args: {
    // Per explicit request (agent-next-gen-v2's own interaction record
    // header, once it needed to tell an agent-to-agent call apart from a
    // real customer interaction): a colored circle avatar shell — `Icon`'s
    // own `background`/`shape="circle"` combo (icon.tsx), same treatment
    // the New Outbound "Choose group" Select's category rows already use —
    // reads as a complete, self-contained unit on its own, so `iconDivider
    // ={false}` drops the divider `icon` renders by default (see that
    // prop's own doc comment, page-header.tsx) rather than doubling up on
    // the separation the circle's own background already provides.
    icon: <Icon icon={Headphones} background="info" shape="circle" size="md" />,
    iconDivider: false,
    title: "Jamie Torres",
    subtitle: "CS-1239930",
    actions: (
      <Button variant="outline">
        <AiIcon className="h-4 w-4" />
        Ask AI
      </Button>
    ),
  },
};

export const RecordHeaderCompactBorderless: Story = {
  name: "Record Header (Compact, Borderless)",
  parameters: { layout: "padded" },
  render: () => (
    // Per explicit request (agent-next-gen-v2's own interaction record
    // header): `bordered={false}` + `compact` — a record header sitting
    // directly above other content that already draws its own divider
    // right underneath it (here, a plain mock "session row" standing in
    // for `TranscriptSessionSeparator`'s own bottom border) no longer
    // doubles that line up into two parallel ones with an empty gap
    // between them, and shrinks from the default `min-h-[68px]`/`py-4` to
    // `min-h-[54px]` with the bottom padding dropped — both together read
    // as one continuous, tightly-packed header instead of two stacked
    // bordered rows.
    <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden bg-lyra-bg-surface-base">
      <PageHeader
        title="Priya Shah"
        subtitle="Email | 7/19/2025 03:41 PM"
        bordered={false}
        compact
        actions={
          <Button variant="outline">
            <AiIcon className="h-4 w-4" />
            Ask AI
          </Button>
        }
      />
      <div className="flex items-center justify-between border-b border-lyra-border-subtle px-6 py-2">
        <span className="lyra-body-sm text-lyra-fg-secondary">
          # CTX-20250719-05532 · July 19, 2025
        </span>
      </div>
      <div className="p-6">
        <p className="lyra-body-md text-lyra-fg-secondary">Transcript content goes here.</p>
      </div>
    </div>
  ),
};

export const WithBreadcrumb: Story = {
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: { label: "ParentName" },
    actions: defaultActions,
  },
};

export const WithBreadcrumbs: Story = {
  name: "With Breadcrumbs",
  args: {
    title: "Dashboard Name",
    // `breadcrumb` also accepts an array for a deeper trail — each entry
    // renders as its own parent crumb before the title, composed from the
    // shared Breadcrumb parts (see breadcrumb.tsx / Custom Primitives/Breadcrumb).
    breadcrumb: [
      { label: "Dashboards" },
      { label: "Sales" },
    ],
    actions: defaultActions,
  },
};

export const WithBreadcrumbsNarrow: Story = {
  name: "With Breadcrumbs (Narrow / Collapsed)",
  parameters: { layout: "padded" },
  render: () => (
    // Forces the collapse — `.lyra-page-header-breadcrumb-wrap` is a CSS
    // container-query boundary (see lyra-tokens.css/storybook.css), so it
    // reacts to this wrapper's actual rendered width, not the viewport.
    // Below 480px of the breadcrumb slot's own width, every parent crumb
    // collapses behind a single ellipsis trigger (far left) and the title
    // truncates with an ellipsis instead of wrapping onto a second line.
    <div style={{ width: 420, border: "1px solid var(--lyra-color-border-subtle)", borderRadius: 8, overflow: "hidden" }}>
      <PageHeader
        title="This is a very long parent name that needs to truncate"
        breadcrumb={[
          { label: "Dashboards" },
          { label: "Sales" },
          { label: "Q3 Reports" },
        ]}
      />
    </div>
  ),
};

export const WithTogglePinned: Story = {
  name: "Panel Toggle (Pinned)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(true);

    return (
      <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel side="left" open={panelOpen} pinned headerTitle="Designer" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader
            title="Page Title"
            panelToggle="left"
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
          side="left"
          open={panelOpen}
          pinned={false}
          headerTitle="Designer"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader
            title="Page Title"
            panelToggle="left"
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

export const WithInnerPanelToggle: Story = {
  name: "Interior Panel Toggle",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(false);

    return (
      <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader
            title="Page Title"
            panelToggle="right"
            onInnerPanelToggle={() => setPanelOpen((v) => !v)}
            actions={defaultActions}
          />
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 bg-lyra-bg-surface-base" />
            <InteriorPanel
              side="right"
              open={panelOpen}
              headerTitle="Details"
              onClose={() => setPanelOpen(false)}
            >
              <div className="p-4">
                <p className="lyra-body-md text-lyra-fg-secondary">Panel content goes here.</p>
              </div>
            </InteriorPanel>
          </div>
        </div>
      </div>
    );
  },
};
