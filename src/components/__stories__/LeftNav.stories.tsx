import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LeftNav, type NavItem } from "../left-nav";
import { AddChannel } from "../add-channel";
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
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHANNELS = [
  { label: "Call",     icon: <Phone         className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "Email",    icon: <Mail          className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "SMS",      icon: <MessageSquare className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "WhatsApp", icon: <WhatsAppIcon /> },
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
    const items: NavItem[] = [
      {
        icon: <Home className="h-4 w-4" strokeWidth={1.5} />,
        label: "Home",
        active: true,
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
        footer={<AddChannel items={CHANNELS} expanded={open} />}
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
