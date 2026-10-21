import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AgenticAICard } from "../agentic-ai-card";
import {
  LineItems,
  MemoryList,
  Meter,
  PolicyNote,
  SourceLinks,
  StatusChecklist,
  StreamedText,
  WaitingState,
} from "../agentic-parts";
import {
  ActionGroup,
  AIField,
  AIFieldSection,
  Alternatives,
  ProgressRing,
  SectionDial,
  StageTrail,
  SuggestedQuestion,
  SuggestedReply,
  SuggestionTag,
  TaskBoard,
} from "../agentic-task-parts";
import { AIProcess } from "../ai-process";
import { Button } from "../button";
import { Citation } from "../citation";
import { Check, Pencil, X } from "lucide-react";

/* "AgenticAICard/Parts": each building block on its own, with the props that drive it. The widgets on the
   Widgets page are made from these. "!autodocs" keeps this folder from getting a second Docs page. */
const meta: Meta<typeof AgenticAICard> = {
  title: "UI/AgenticAICard/Parts",
  component: AgenticAICard,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof AgenticAICard>;

/** A labelled box for one part. */
function Panel({ name, spec, children }: { name: string; spec: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-4">
      <span className="lyra-body-md-emphasis text-lyra-fg-default">{name}</span>
      {children}
      <code className="lyra-body-xs text-lyra-fg-secondary">{spec}</code>
    </div>
  );
}

export const Gallery: Story = {
  name: "All parts",
  render: () => {
    const [text, setText] = React.useState(0);
    const SENTENCES = ["The tablet keeps freezing with a blinking red light.", " It is inside the 24-month warranty.", " A replacement claim is being raised."];
    const full = SENTENCES.slice(0, text + 1).join("");
    const prev = SENTENCES.slice(0, text).join("");
    return (
      <div className="grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))] items-start gap-4">
        <Panel name="Status checklist (Spinner ring)" spec="items: [{ label, detail?, state, tag? }]  ·  state: done | needs-you | failed | running | todo">
          <StatusChecklist
            items={[
              { label: "Order found", detail: "NR-10871", state: "done" },
              { label: "Approve the replacement", state: "needs-you", tag: "Needs you" },
              { label: "Update the customer record", state: "failed", tag: "Failed" },
              { label: "Book technician", state: "running" },
              { label: "Email the summary", state: "todo" },
            ]}
          />
        </Panel>
        <Panel name="Progress steps (AIProcess · progress)" spec='<AIProcess variant="progress" title meta steps={[{ id, label, status, at? }]} />'>
          <AIProcess
            variant="progress"
            title="Refund review"
            meta="Back office · stage 3 of 5"
            steps={[
              { id: "1", label: "Review opened", status: "done", at: "2:00" },
              { id: "2", label: "Photo verified", status: "done", at: "2:01" },
              { id: "3", label: "Waiting on approval", status: "active" },
              { id: "4", label: "Refund issued", status: "pending" },
            ]}
          />
        </Panel>
        <Panel name="Meter (ProgressBars or Tags)" spec="levels, value, tones?, label?, display: bars | tags">
          <Meter levels={["Negative", "Neutral", "Positive"]} value="Neutral" label="Sentiment" />
          <Meter display="tags" levels={["Angry", "Frustrated", "Neutral", "Calmer", "Satisfied"]} value="Calmer" label="Mood" />
        </Panel>
        <Panel name="Streamed text" spec="text, previous?, foldAfter?, markFor?">
          <StreamedText key={text} text={full} previous={prev} />
          <Button variant="outline" size="sm" className="self-start" onClick={() => setText((t) => (t + 1) % SENTENCES.length)}>
            Next update
          </Button>
        </Panel>
        <Panel name="Waiting state (Skeleton)" spec="message, lines?">
          <WaitingState message="Nothing to summarise yet." lines={2} />
        </Panel>
        <Panel name="Memory list" spec="title, items: string[]">
          <MemoryList title="From Experience Memory" items={["Paid by PayPal on 3 of the last 5 orders", "Asked about the launch on 26 Sep"]} />
        </Panel>
        <Panel name="Citation" spec="text, citations: [{ text, source }]">
          <Citation
            text="Tablets carry a 24-month parts warranty that runs from the delivery date."
            citations={[{ text: "24-month parts warranty that runs from the delivery date", source: "Tablet warranty coverage, section 2" }]}
          />
        </Panel>
        <Panel name="Source links (Link + Tag)" spec="links: [{ title, href?, tag?, tagVariant?, internal? }]">
          <SourceLinks links={[{ title: "Tablet warranty coverage", tag: "New", tagVariant: "info" }, { title: "Board faults — replace, not repair", internal: true }]} />
        </Panel>
        <Panel name="Numbered steps (AIProcess · numbered)" spec='<AIProcess variant="numbered" steps={[{ id, label, description? }]} />'>
          <AIProcess
            variant="numbered"
            steps={[
              { id: "1", label: "Confirm the delivery date", description: "It is on the account." },
              { id: "2", label: "Raise a replacement claim", description: "Choose “Board fault” as the reason." },
            ]}
          />
        </Panel>
        <Panel name="Policy note (InlineNotification)" spec="tone: within | outside, heading?">
          <PolicyNote>Within your limit: refunds up to $500 with a photo check.</PolicyNote>
          <PolicyNote tone="outside">Over your limit: refunds above $500 need a supervisor.</PolicyNote>
        </Panel>
        <Panel name="Line items (MenuItem)" spec="rows: [{ name, detail?, amount? }]">
          <LineItems
            rows={[
              { name: "Espresso machine", detail: "NR-10871 · 25 Sep", amount: "$412.00" },
              { name: "Milk frother", detail: "NR-10544 · 18 Jun", amount: "$49.00" },
            ]}
          />
        </Panel>
        <Panel name="Action group (Button)" spec="primary: { label, icon?, onClick?, disabled? }, secondary?: { … }">
          <ActionGroup primary={{ label: "Approve", icon: <Check className="h-4 w-4" strokeWidth={1.5} /> }} secondary={{ label: "Decline", icon: <X className="h-4 w-4" strokeWidth={1.5} /> }} />
          <ActionGroup primary={{ label: "Approve and run 4 tasks" }} secondary={{ label: "Edit answers", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> }} />
        </Panel>
        <Panel name="AI-filled field (AIField)" spec="label, value?, source?: conversation | self-service | lookup | agent, quote?, sensitive?, required?, fresh?, question?">
          <div className="divide-y divide-lyra-border-subtle rounded-lyra-md border border-lyra-border-subtle">
            <AIField label="Symptom" value="Frozen, blinking red light" source="conversation" quote="It just freezes and the light keeps blinking red." />
            <AIField label="Address" value="•••• Elm Street, Leeds" source="lookup" sensitive />
            <AIField label="Photo" question="Could you send a photo of the crack?" />
          </div>
        </Panel>
        <Panel name="Section dial (ProgressRing)" spec="name, filled, of, opened?, onClick?">
          <div className="flex flex-wrap gap-1.5">
            <SectionDial name="Customer & product" filled={4} of={4} />
            <SectionDial name="Damage details" filled={1} of={2} opened />
            <SectionDial name="Technician visit" filled={1} of={3} />
          </div>
          <div className="flex items-center gap-3">
            <ProgressRing value={9} of={12} size={40} />
            <ProgressRing value={9} of={12} size={28} />
            <ProgressRing value={12} of={12} size={18} />
          </div>
        </Panel>
        <Panel name="Field section (Accordion)" spec="name, filled, of, why?, open?, defaultOpen?, onOpenChange?">
          <AIFieldSection name="Damage details" filled={1} of={2} why="Opened because Jordan mentioned a crack">
            <AIField label="Damage" value="Small crack by the charging port" source="conversation" quote="There’s also a small crack by the charging port." />
            <AIField label="Photo" />
          </AIFieldSection>
        </Panel>
        <Panel name="Suggested question (Button)" spec="field, question, onInsert?, insertLabel?">
          <SuggestedQuestion field="Preferred slot" question="Which day suits you for the technician visit?" onInsert={() => {}} />
        </Panel>
        <Panel name="Task board (Spinner ring)" spec="tasks: [{ id, name, flow?, state, output?, note?, error?, after?, onRetry? }]  ·  state: done | running | failed | waiting | queued | ready">
          <TaskBoard
            tasks={[
              { id: "1", name: "Raise replacement claim", flow: "Warranty check", state: "done", output: "WC-88214" },
              { id: "2", name: "Book technician", flow: "Book a technician", state: "running" },
              { id: "3", name: "Update the customer record", flow: "CRM sync", state: "failed", error: "CRM did not answer within 10 s · nothing was changed", onRetry: () => {} },
              { id: "4", name: "Email the claim summary", flow: "Customer notifications", state: "waiting", after: "Raise replacement claim" },
              { id: "5", name: "Close the case", flow: "Case management", state: "queued" },
              { id: "6", name: "Verify identity", flow: "Identity verification", state: "ready", note: "Ready · runs when you approve" },
            ]}
          />
        </Panel>
        <Panel name="Stage trail" spec="stages: string[], current: number">
          <StageTrail stages={["Capture", "Review", "Run"]} current={0} />
          <StageTrail stages={["Capture", "Review", "Run"]} current={1} />
          <StageTrail stages={["Capture", "Review", "Run"]} current={2} />
        </Panel>
        <Panel name="Suggestion tag, reply and alternatives" spec="SuggestionTag type: say | ask | do  ·  Alternatives: [{ type, text, onUse? }]">
          <div className="flex gap-1.5">
            <SuggestionTag type="say" />
            <SuggestionTag type="ask" />
            <SuggestionTag type="do" />
          </div>
          <SuggestedReply>Is the red light blinking steadily, or flashing in a pattern?</SuggestedReply>
          <Alternatives alternatives={[{ type: "say", text: "Tell Jordan it is still covered", onUse: () => {} }, { type: "do", text: "Email Jordan the claim summary", onUse: () => {} }]} />
        </Panel>
      </div>
    );
  },
};
