import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage, type ChatMessageTag } from "../chat-message";
import type { TagPickerOption } from "../tag-picker";

/** Representative subset of agent-next-gen-v2's own `QUICK_TAG_OPTIONS`
 *  (agent-next-gen-transcript.tsx) — business content, not hardcoded into
 *  `ChatMessage` itself (see that component's own doc comment). Hover any
 *  bubble below to try it. */
const DEMO_TAG_OPTIONS: TagPickerOption[] = [
  { label: "Billing", variant: "warning" },
  { label: "Technical", variant: "info" },
  { label: "Escalated", variant: "critical" },
  { label: "Follow-Up", variant: "purple" },
  { label: "Resolved", variant: "success" },
];

const meta: Meta<typeof ChatMessage> = {
  title: "UI/ChatMessage",
  component: ChatMessage,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["agent", "customer"] },
    narrow: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ChatMessage>;

/* ── Agent ──
   Right-aligned, primary-tinted bubble — matches the reference screenshot,
   with the timestamp moved ahead of the name in the header row instead of
   its own line inside the bubble. Per explicit follow-up request, every
   bubble in this file (agent and customer alike) wires up the real Copy/
   Add-tag toolbar, not just a one-off demo — hover to reveal it. */

export const Agent: Story = {
  render: () => {
    const [tags, setTags] = useState<ChatMessageTag[]>([{ id: "t1", label: "Billing", variant: "warning" }]);
    const [pickerOpen, setPickerOpen] = useState(false);
    return (
      <div className="w-[420px]">
        <ChatMessage
          variant="agent"
          name="John Smith"
          initials="JS"
          timestamp="9:51 AM"
          text="Thank you for contacting us. How can I assist you today?"
          onCopy={(text) => navigator.clipboard?.writeText(text)}
          tagOptions={DEMO_TAG_OPTIONS}
          tags={tags}
          tagPickerOpen={pickerOpen}
          onTagPickerOpenChange={setPickerOpen}
          onAddTag={(option) =>
            setTags((prev) => [...prev, { id: `t${prev.length + 2}`, label: option.label, variant: option.variant }])
          }
          onRemoveTag={(id) => setTags((prev) => prev.filter((t) => t.id !== id))}
          onClearTags={() => setTags([])}
        />
      </div>
    );
  },
};

/* ── Customer ── */

export const Customer: Story = {
  render: () => {
    const [tags, setTags] = useState<ChatMessageTag[]>([]);
    const [pickerOpen, setPickerOpen] = useState(false);
    return (
      <div className="w-[420px]">
        <ChatMessage
          variant="customer"
          name="Sofia Martinez"
          initials="SM"
          timestamp="9:52 AM"
          text="Hi, I'm having trouble accessing my account. Can you help?"
          onCopy={(text) => navigator.clipboard?.writeText(text)}
          tagOptions={DEMO_TAG_OPTIONS}
          tags={tags}
          tagPickerOpen={pickerOpen}
          onTagPickerOpenChange={setPickerOpen}
          onAddTag={(option) =>
            setTags((prev) => [...prev, { id: `t${prev.length + 1}`, label: option.label, variant: option.variant }])
          }
          onRemoveTag={(id) => setTags((prev) => prev.filter((t) => t.id !== id))}
          onClearTags={() => setTags([])}
        />
      </div>
    );
  },
};

/* ── Narrow ──
   Below ~400px, the avatar drops automatically — this is self-detected
   now (a `ResizeObserver` on `ChatMessage`'s own root element, see that
   component's own doc comment), not the `narrow` prop forcing it. This
   story demonstrates that real detection: the 320px wrapper below is what
   actually triggers it, `narrow` itself is left unset. The bubble stays
   full-width regardless (no more 70%/full-width split). */

export const Narrow: Story = {
  args: {
    variant: "agent",
    name: "John Smith",
    initials: "JS",
    timestamp: "9:51 AM",
    text: "Thank you for contacting us. How can I assist you today?",
  },
  decorators: [(Story) => <div className="w-[320px]"><Story /></div>],
};

/* ── Narrow (Forced) ──
   Same bubble, wide container — `narrow` passed explicitly overrides the
   auto-detection either way, for a caller that wants to force one state
   regardless of its actual rendered width. */

export const NarrowForced: Story = {
  name: "Narrow — Forced via Prop",
  args: {
    variant: "agent",
    name: "John Smith",
    initials: "JS",
    timestamp: "9:51 AM",
    text: "Thank you for contacting us. How can I assist you today?",
    narrow: true,
  },
};

/* ── Conversation ──
   Several bubbles stacked, same as they'd sit in a real transcript —
   demonstrates the time-before-name space savings across a real back-
   and-forth, with every bubble (agent and customer alike) carrying its
   own Copy/Add-tag toolbar. `tagPickerOpenId` coordinates across all four
   so only one message's picker is ever open at once, same as a real
   transcript would (see `ChatMessage`'s own doc comment). */

interface DemoMessage {
  id: string;
  variant: "agent" | "customer";
  name: string;
  initials: string;
  timestamp: string;
  text: string;
}

const CONVERSATION_MESSAGES: DemoMessage[] = [
  { id: "m1", variant: "customer", name: "Sofia Martinez", initials: "SM", timestamp: "9:48 AM", text: "Hi, I'm having trouble accessing my account. Can you help?" },
  { id: "m2", variant: "agent", name: "John Smith", initials: "JS", timestamp: "9:49 AM", text: "Thank you for contacting us. How can I assist you today?" },
  { id: "m3", variant: "customer", name: "Sofia Martinez", initials: "SM", timestamp: "9:50 AM", text: "It says my password is incorrect, but I'm sure I'm typing it right." },
  { id: "m4", variant: "agent", name: "John Smith", initials: "JS", timestamp: "9:51 AM", text: "No problem — I'll send a password reset link to your email on file now." },
];

export const Conversation: Story = {
  render: () => {
    const [tagsByMessageId, setTagsByMessageId] = useState<Record<string, ChatMessageTag[]>>({});
    const [tagPickerOpenId, setTagPickerOpenId] = useState<string | null>(null);
    return (
      <div className="flex w-[520px] flex-col gap-3">
        {CONVERSATION_MESSAGES.map((msg) => (
          <ChatMessage
            key={msg.id}
            variant={msg.variant}
            name={msg.name}
            initials={msg.initials}
            timestamp={msg.timestamp}
            text={msg.text}
            onCopy={(text) => navigator.clipboard?.writeText(text)}
            tagOptions={DEMO_TAG_OPTIONS}
            tags={tagsByMessageId[msg.id] ?? []}
            tagPickerOpen={tagPickerOpenId === msg.id}
            onTagPickerOpenChange={(open) => setTagPickerOpenId(open ? msg.id : null)}
            onAddTag={(option) =>
              setTagsByMessageId((prev) => ({
                ...prev,
                [msg.id]: [...(prev[msg.id] ?? []), { id: `${msg.id}-${option.label}`, label: option.label, variant: option.variant }],
              }))
            }
            onRemoveTag={(id) =>
              setTagsByMessageId((prev) => ({ ...prev, [msg.id]: (prev[msg.id] ?? []).filter((t) => t.id !== id) }))
            }
            onClearTags={() => setTagsByMessageId((prev) => ({ ...prev, [msg.id]: [] }))}
          />
        ))}
      </div>
    );
  },
};
