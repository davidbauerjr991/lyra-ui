import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SessionDetailsSection,
  SessionDetailsCard,
  type SessionDetailsInfo,
} from "../session-details";
import { ChatMessage } from "../chat-message";

/* Demo-only transcript for the `Closed` story below — enough messages to
   make the collapse animation obvious, not meant to be realistic content. */
const CLOSED_SESSION_MESSAGES = [
  { variant: "customer" as const, name: "Alex Rivera", initials: "AR", timestamp: "9:37 AM", text: "Hi, I was charged twice for my last order — can you help?" },
  { variant: "agent" as const, name: "John Smith", initials: "JS", timestamp: "9:39 AM", text: "Of course — let me pull up your account and take a look." },
  { variant: "customer" as const, name: "Alex Rivera", initials: "AR", timestamp: "9:41 AM", text: "Thank you, order #48213." },
  { variant: "agent" as const, name: "John Smith", initials: "JS", timestamp: "9:44 AM", text: "I've confirmed the duplicate charge and issued a refund — you should see it within 3–5 business days." },
];

const DEMO_SESSION: SessionDetailsInfo = {
  contactId: "CTX-20260825-99439",
  date: "August 25, 2026",
  startTime: "9:37 AM",
  endTime: "—",
  channel: "WhatsApp",
  skill: "General Support",
  agent: "John Smith",
  status: "Open",
  fingerprint: {
    os: "Windows 10",
    browser: "Edge v.150.0.0.0",
    language: "en-US",
    deviceType: "Desktop",
    applicationType: "Browser",
  },
};

const meta: Meta<typeof SessionDetailsSection> = {
  title: "UI/SessionDetails",
  component: SessionDetailsSection,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SessionDetailsSection>;

/* ── Draft — 0 Messages, Delete Draft ──
   Matches the reference screenshot exactly: a brand-new outbound draft
   (no messages sent yet), Session Details already expanded, red "Delete
   Draft" trash button at the row's right edge. */

export const Draft: Story = {
  name: "Draft — 0 Messages, Delete Draft",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="w-[900px]">
        <SessionDetailsSection
          session={DEMO_SESSION}
          open={open}
          onToggle={() => setOpen((v) => !v)}
          messageCount={0}
          onDeleteDraft={() => {}}
        />
      </div>
    );
  },
};

/* ── In Progress — With Messages, No Delete Draft ──
   An ordinary in-progress session (not a draft) — `onDeleteDraft` omitted
   entirely, so no trash button renders at all (see this component's own
   doc comment: it's a real destructive action, not something to show
   non-functionally). */

export const InProgress: Story = {
  name: "In Progress — With Messages",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="w-[900px]">
        <SessionDetailsSection
          session={{ ...DEMO_SESSION, channel: "Voice", status: "Open" }}
          open={open}
          onToggle={() => setOpen((v) => !v)}
          messageCount={12}
        />
      </div>
    );
  },
};

/* ── Collapsed ──
   Same session, closed — just the "{n} Messages | #id · date" toggle row. */

export const Collapsed: Story = {
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="w-[900px]">
        <SessionDetailsSection
          session={DEMO_SESSION}
          open={open}
          onToggle={() => setOpen((v) => !v)}
          messageCount={0}
          onDeleteDraft={() => {}}
        />
      </div>
    );
  },
};

/* ── Closed — Status Pill + Collapse ──
   A resolved/closed session with a real message transcript passed in as
   `children`: the "Closed" status pill renders in the header row next to
   "View Details", with a `ChevronsDownUp`/`ChevronsUpDown` icon beside it
   (same "collapse all" vocabulary `AssignmentsExpandCollapseAllButton`
   uses) that animates the details card AND every message below it shut
   together as one block — the header row itself stays put either way.
   Toggle the icon to see the collapse/expand animation; `open` still
   independently controls just the details card whenever the interaction
   isn't collapsed. */

export const Closed: Story = {
  name: "Closed — Status Pill + Collapse",
  render: () => {
    const [open, setOpen] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="w-[900px]">
        <SessionDetailsSection
          session={{ ...DEMO_SESSION, status: "Closed", endTime: "10:14 AM" }}
          open={open}
          onToggle={() => setOpen((v) => !v)}
          messageCount={CLOSED_SESSION_MESSAGES.length}
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((v) => !v)}
        >
          <div className="flex flex-col gap-4 px-1">
            {CLOSED_SESSION_MESSAGES.map((msg, i) => (
              <ChatMessage key={i} {...msg} />
            ))}
          </div>
        </SessionDetailsSection>
      </div>
    );
  },
};

/* ── Card Only ──
   `SessionDetailsCard` alone, for a caller building its own toggle/trigger
   around it instead of using `SessionDetailsSection`'s built-in row. */

export const CardOnly: Story = {
  name: "Card Only (No Toggle Row)",
  render: () => (
    <div className="w-[500px]">
      <SessionDetailsCard session={DEMO_SESSION} />
    </div>
  ),
};
