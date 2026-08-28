import * as React from "react";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  InteractionComposer,
  type InteractionComposerQuickReplyItem,
} from "../interaction-composer";

/** Representative subset of agent-next-gen-v2's own `QUICK_REPLIES`
 *  (agent-next-gen-transcript.tsx) — see `interaction-composer.tsx`'s own
 *  top doc comment for why this canned-response content lives here in the
 *  story rather than hardcoded into the component itself. Type "/" in
 *  either story below, or click the lightning-bolt toolbar button, to
 *  try the picker. */
const DEMO_QUICK_REPLIES: InteractionComposerQuickReplyItem[] = [
  { id: "greeting", title: "Greeting", template: "Thank you for contacting us. How can I assist you today?" },
  { id: "acknowledge", title: "Acknowledge", template: "I understand your concern. Let me look into that for you." },
  { id: "escalate", title: "Escalate", template: "I'm escalating this to our specialist team right away." },
  {
    id: "timeline",
    title: "Processing Time",
    template: "Please allow {days} business days for this to take effect.",
    rich: true,
    fields: [
      {
        key: "days",
        label: "Business Days",
        type: "select",
        options: [
          { value: "1–2", label: "1–2" },
          { value: "3–5", label: "3–5" },
          { value: "5–7", label: "5–7" },
          { value: "7–10", label: "7–10" },
        ],
      },
    ],
  },
  {
    id: "callback",
    title: "Schedule Callback",
    template: "I'll arrange a callback on {date} at {time} for you.",
    rich: true,
    fields: [
      { key: "date", label: "Date", type: "date" },
      { key: "time", label: "Time", type: "time" },
    ],
  },
  { id: "closing", title: "Closing", template: "Is there anything else I can help you with today?" },
];

const meta: Meta<typeof InteractionComposer> = {
  title: "UI/InteractionComposer",
  component: InteractionComposer,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InteractionComposer>;

/* ── With Quick Replies ──
   The full "Chat with Customer" composer as it appears in the Agent Next
   Gen Active Interaction story — textarea, toolbar (Attach/Bold/Italic/
   Emoji/Quick Replies/Templates), split "Send ▾" button, and a working
   "/"-trigger quick-reply picker (built on `QuickReplyMenu`/
   `QuickReplyVariableForm`). `InteractionComposer` owns nothing but the
   textarea's own text — this story adds just enough local state to echo
   what gets sent back above the composer, so "Send" visibly does
   something here. */

export const WithQuickReplies: Story = {
  name: "Default — With Quick Replies",
  render: () => {
    const [messages, setMessages] = useState<string[]>([]);
    return (
      <div className="flex w-[420px] flex-col gap-3">
        {messages.length > 0 && (
          <div className="flex flex-col gap-2 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-canvas p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="ml-auto max-w-[85%] rounded-lyra-lg bg-lyra-bg-active-subtle px-3 py-2 lyra-body-md text-lyra-fg-default"
              >
                {msg}
              </div>
            ))}
          </div>
        )}
        <InteractionComposer
          quickReplies={DEMO_QUICK_REPLIES}
          onSend={(text) => setMessages((prev) => [...prev, text])}
        />
      </div>
    );
  },
};

/* ── Without Quick Replies ──
   `quickReplies` omitted entirely — the "Quick replies" toolbar button
   renders disabled and the "/" trigger is inert, matching a caller that
   has no canned-response data of its own to offer (see the component's
   own doc comment: canned responses are app-specific business content,
   not something this library hardcodes). Everything else — Attach/Bold/
   Italic/Emoji/Templates, Enter-to-send, the split Send button — still
   works exactly the same. */

export const Basic: Story = {
  name: "Plain — No Quick Replies",
  render: () => {
    const [messages, setMessages] = useState<string[]>([]);
    return (
      <div className="flex w-[420px] flex-col gap-3">
        {messages.length > 0 && (
          <div className="flex flex-col gap-2 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-canvas p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="ml-auto max-w-[85%] rounded-lyra-lg bg-lyra-bg-active-subtle px-3 py-2 lyra-body-md text-lyra-fg-default"
              >
                {msg}
              </div>
            ))}
          </div>
        )}
        <InteractionComposer onSend={(text) => setMessages((prev) => [...prev, text])} />
      </div>
    );
  },
};
