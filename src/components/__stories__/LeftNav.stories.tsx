import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LeftNav, type NavItem } from "../left-nav";
import { CreateNew } from "../create-new";
import { InteractionNavItem, type InteractionChannel } from "../interaction-nav-item";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";

/** Body copy below each channel chip shows the routing skill, not a message
 *  preview — randomized per channel from this pool of sample skill names. */
const SKILL_NAMES = ["Chat_General", "CXi SME Email", "CXoneSMS_1-833-457-2672"];
function randomSkill(): string {
  return SKILL_NAMES[Math.floor(Math.random() * SKILL_NAMES.length)];
}
import { Container } from "../container";
import { ContentArea } from "../content-area";
import {
  Monitor,
  LayoutGrid,
  Settings,
  PencilRuler,
  FileText,
  Home,
  Users,
  BookUser,
  CalendarDays,
  Gauge,
  BarChart3,
} from "lucide-react";

// Computed once at module load (not inside the story's render function) so
// the randomized skill name stays fixed across re-renders — e.g. toggling
// which InteractionNavItem card is active shouldn't reshuffle these.
const AGENT_NEXT_GEN_SOFIA_CHANNELS: InteractionChannel[] = [
  {
    type: "chat",
    elapsed: "08:27",
    current: true,
    awaitingResponse: true,
    preview: randomSkill(),
  },
];
const AGENT_NEXT_GEN_RAY_CHANNELS: InteractionChannel[] = [
  {
    type: "chat",
    elapsed: "06:12",
    current: true,
    awaitingResponse: true,
    preview: randomSkill(),
  },
];
const AGENT_NEXT_GEN_CALL_CHANNELS: InteractionChannel[] = [
  {
    type: "voice",
    elapsed: "02:05",
    current: true,
    preview: randomSkill(),
  },
];

const sampleItems: NavItem[] = [
  {
    icon: <Monitor className="h-4 w-4" strokeWidth={1.5} />,
    label: "Monitor",
  },
  {
    icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />,
    label: "Dashboard",
  },
  {
    icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
    label: "Configure",
    expandable: true,
    defaultOpen: false,
    children: [
      { label: "General" },
      { label: "Security" },
      { label: "Integrations" },
    ],
  },
  {
    icon: <PencilRuler className="h-4 w-4" strokeWidth={1.5} />,
    label: "Designer",
    expandable: true,
    defaultOpen: true,
    children: [
      { label: "Desktop Library", active: true },
      { label: "Templates" },
      { label: "Components" },
    ],
  },
  {
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    label: "Examples",
  },
  {
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    label: "Product Mockups",
  },
];

const meta: Meta<typeof LeftNav> = {
  title: "UI/LeftNav",
  component: LeftNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen bg-lyra-bg-surface-shell">
        <Story />
        <ContentArea>
          <Container className="flex flex-1" />
        </ContentArea>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LeftNav>;

/* ── Default (expanded) ── */

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <LeftNav
        items={sampleItems}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── Collapsed ── */

export const Collapsed: Story = {
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <LeftNav
        items={sampleItems}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── No Toggle (always expanded) ── */

export const NoToggle: Story = {
  name: "No Toggle Button",
  render: () => (
    <LeftNav items={sampleItems} open={true} collapsible={false} />
  ),
};

/* ── Agent Next Gen ── */

export const AgentNextGen: Story = {
  name: "Agent Next Gen Left Nav",
  render: () => {
    const [open, setOpen] = useState(false);
    // Click any InteractionNavItem card below to make it the active one —
    // lets you test the active/inactive + awaiting-response border and
    // highlight states interactively instead of only via fixed args.
    const [activeId, setActiveId] = useState("sofia");
    const items: NavItem[] = [
      {
        icon: <Home className="h-4 w-4" strokeWidth={1.5} />,
        label: "Home",
      },
      {
        icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
        label: "Contacts",
      },
      {
        icon: <BookUser className="h-4 w-4" strokeWidth={1.5} />,
        label: "Directory",
      },
      {
        icon: <CalendarDays className="h-4 w-4" strokeWidth={1.5} />,
        label: "Schedule",
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Settings",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
        header={
          <>
            <CreateNew title="New Outbound" outbound={OUTBOUND_CONFIG} expanded={open} />
            <InteractionNavItem
              customerName="Sofia Martinez"
              active={activeId === "sofia"}
              onClick={() => setActiveId("sofia")}
              awaitingResponse
              elapsed="08:27"
              expanded={open}
              channels={AGENT_NEXT_GEN_SOFIA_CHANNELS}
            />
            <InteractionNavItem
              customerName="Ray Torres"
              active={activeId === "ray"}
              onClick={() => setActiveId("ray")}
              awaitingResponse
              elapsed="06:12"
              expanded={open}
              channels={AGENT_NEXT_GEN_RAY_CHANNELS}
            />
            <InteractionNavItem
              active={activeId === "call"}
              onClick={() => setActiveId("call")}
              elapsed="02:05"
              expanded={open}
              channels={AGENT_NEXT_GEN_CALL_CHANNELS}
            />
          </>
        }
      />
    );
  },
};

/* ── Outbound Engagement ── */

export const OutboundEngagement: Story = {
  name: "Outbound Engagement Left Nav",
  render: () => {
    const [open, setOpen] = useState(true);
    const items: NavItem[] = [
      {
        icon: <Gauge className="h-4 w-4" strokeWidth={1.5} />,
        label: "Monitor",
        active: true,
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Configure",
      },
      {
        icon: <BarChart3 className="h-4 w-4" strokeWidth={1.5} />,
        label: "Review",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};

/* ── Custom Items ── */

export const CustomItems: Story = {
  name: "Custom Items",
  render: () => {
    const [open, setOpen] = useState(true);
    const items: NavItem[] = [
      {
        icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />,
        label: "Overview",
        active: true,
      },
      {
        icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
        label: "Settings",
        expandable: true,
        defaultOpen: true,
        children: [
          { label: "Profile" },
          { label: "Notifications", active: true },
          { label: "Privacy" },
        ],
      },
      {
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
        label: "Reports",
      },
    ];
    return (
      <LeftNav
        items={items}
        open={open}
        onToggle={() => setOpen((v) => !v)}
      />
    );
  },
};
