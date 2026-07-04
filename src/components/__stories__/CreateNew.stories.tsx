import type { Meta, StoryObj } from "@storybook/react";
import { Phone, Mail, MessageSquare, Headphones, Users, UsersRound, Tag } from "lucide-react";
import { NewOutbound, type NewOutboundCategory, type NewOutboundChannel } from "../new-outbound";

/* ── WhatsApp icon (not in lucide) ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHANNELS = [
  { label: "Call",      icon: <Phone         className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "Email",     icon: <Mail          className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "SMS",       icon: <MessageSquare className="h-5 w-5" strokeWidth={1.5} /> },
  { label: "WhatsApp",  icon: <WhatsAppIcon /> },
];

/* ── Drill-down demo data ── */

const CHANNEL_TYPES: NewOutboundChannel[] = [
  { id: "call",     label: "Call",     icon: <Phone         className="h-5 w-5" strokeWidth={1.5} /> },
  { id: "email",    label: "Email",    icon: <Mail          className="h-5 w-5" strokeWidth={1.5} /> },
  { id: "sms",      label: "SMS",      icon: <MessageSquare className="h-5 w-5" strokeWidth={1.5} /> },
  { id: "whatsapp", label: "WhatsApp", icon: <WhatsAppIcon /> },
];

const CATEGORIES: NewOutboundCategory[] = [
  {
    id: "agents",
    label: "Agents",
    icon: <Headphones className="h-4 w-4" strokeWidth={1.5} />,
    searchPlaceholder: "Search agents",
    contacts: [
      { id: "a1", name: "Jamie Torres",  initials: "JT", subtitle: "AGT-2041", avatarClassName: "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong" },
      { id: "a2", name: "Priya Nair",    initials: "PN", subtitle: "AGT-2077", avatarClassName: "bg-lyra-accent-orange-soft text-lyra-accent-orange-strong" },
      { id: "a3", name: "Wei Chen",      initials: "WC", subtitle: "AGT-2089", avatarClassName: "bg-lyra-accent-teal-soft text-lyra-accent-teal-strong" },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
    searchPlaceholder: "Search customers",
    contacts: [
      { id: "c1", name: "Alex Kowalski", initials: "AK", subtitle: "CST-10482", avatarClassName: "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong" },
      { id: "c2", name: "Sarah Miller",  initials: "SM", subtitle: "CST-10591", avatarClassName: "bg-lyra-accent-purple-soft text-lyra-accent-purple-strong" },
      { id: "c3", name: "David Brown",   initials: "DB", subtitle: "CST-10363", avatarClassName: "bg-lyra-accent-green-soft text-lyra-accent-green-strong" },
      { id: "c4", name: "Priya Nair",    initials: "PN", subtitle: "CST-11024", avatarClassName: "bg-lyra-accent-orange-soft text-lyra-accent-orange-strong" },
      { id: "c5", name: "Miguel Santos", initials: "MS", subtitle: "CST-11137", avatarClassName: "bg-lyra-accent-teal-soft text-lyra-accent-teal-strong" },
    ],
  },
  {
    id: "teams",
    label: "Teams",
    icon: <UsersRound className="h-4 w-4" strokeWidth={1.5} />,
    searchPlaceholder: "Search teams",
    contacts: [
      { id: "t1", name: "Billing Support",   initials: "BS", subtitle: "TEAM-04", avatarClassName: "bg-lyra-accent-purple-soft text-lyra-accent-purple-strong" },
      { id: "t2", name: "Tier 2 Escalations", initials: "T2", subtitle: "TEAM-07", avatarClassName: "bg-lyra-accent-red-soft text-lyra-accent-red-strong" },
    ],
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Tag className="h-4 w-4" strokeWidth={1.5} />,
    searchPlaceholder: "Search skills",
    contacts: [
      { id: "s1", name: "Spanish Language", initials: "ES", subtitle: "SKL-12", avatarClassName: "bg-lyra-accent-green-soft text-lyra-accent-green-strong" },
      { id: "s2", name: "Technical Support", initials: "TS", subtitle: "SKL-03", avatarClassName: "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong" },
    ],
  },
];

const meta: Meta<typeof NewOutbound> = {
  title: "UI/NewOutbound",
  component: NewOutbound,
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewOutbound>;

export const Default: Story = {
  name: "New Outbound",
  args: {
    items: CHANNELS,
    title: "New Outbound",
  },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    items: CHANNELS,
    title: "New Interaction",
  },
};

export const FewChannels: Story = {
  name: "Two Channels",
  args: {
    items: [
      { label: "Call",  icon: <Phone className="h-5 w-5" strokeWidth={1.5} /> },
      { label: "Email", icon: <Mail  className="h-5 w-5" strokeWidth={1.5} /> },
    ],
    title: "New Outbound",
  },
};

/* Drill-down flow: phone field + category list → search + contact list →
   channel picker. Content is swapped in place inside the same popover with
   a back button — see the `categories`/`channels` props on NewOutbound —
   rather than opening a Menu submenu flyout. */
export const DrillDown: Story = {
  name: "Drill-Down (Category → Search → Channel)",
  args: {
    title: "New Outbound",
    categories: CATEGORIES,
    channels: CHANNEL_TYPES,
    phoneFieldPlaceholder: "Enter phone number",
    onQuickDial: (phoneNumber: string) => {
      // eslint-disable-next-line no-console
      console.log("Quick dial:", phoneNumber);
    },
    onOutbound: (selection) => {
      // eslint-disable-next-line no-console
      console.log("Outbound:", selection.channel.label, "→", selection.contact.name, `(${selection.category.label})`);
    },
  },
};
