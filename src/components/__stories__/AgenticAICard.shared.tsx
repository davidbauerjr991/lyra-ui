import * as React from "react";
import { Activity, BookOpen, CalendarCheck, Compass, Copy, CornerDownLeft, CircleCheck, FileCheck, Globe, History, Lightbulb, ListChecks, Lock, MailCheck, Minus, Pencil, Play, Sparkles, ThumbsDown, ThumbsUp, TrendingDown, TrendingUp, Workflow, X } from "lucide-react";
import { AgenticAICard, AgenticSection, type AgenticAICardProps, type AgenticStatus } from "../agentic-ai-card";
import { LineItems, Meter, PolicyNote, SourceLinks, StreamedText, WaitingState } from "../agentic-parts";
import {
  ActionGroup,
  AIField,
  AIFieldSection,
  Alternatives,
  ProgressRing,
  SectionDial,
  StageTrail,
  SuggestedReply,
  SuggestionTag,
  TaskBoard,
  type FieldSource,
  type SuggestionType,
  type TaskItem,
  type TaskState,
} from "../agentic-task-parts";
import { ProgressBar } from "../progress-bar";
import { AIProcess } from "../ai-process";
import { Citation } from "../citation";
import { Button } from "../button";
import { Tag } from "../tag";

/* The widgets shown in the AgenticAICard stories. Each one is a small composition of the shared parts
   (see agentic-parts.tsx) inside an AgenticAICard, so any of them can be deleted without touching the
   component. All content is sample text. Buttons do nothing. */

const ic = (Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>) => <Icon className="h-4 w-4" strokeWidth={1.5} />;

/** Props every widget accepts: the card's own look (everything but its content) plus an optional status override. */
export type WidgetCardProps = Omit<AgenticAICardProps, "title" | "children" | "icon" | "status" | "footer"> & {
  /** "auto" keeps the status the frame normally has. */
  statusOverride?: "auto" | AgenticStatus;
  /** Whether the card shows its for-you note. */
  forYou?: boolean;
  /** Whether the card shows the line under its title (when it has one). Default true. */
  showSubhead?: boolean;
};

const withStatus = (auto: AgenticStatus, o?: "auto" | AgenticStatus): AgenticStatus => (o && o !== "auto" ? o : auto);

/* ── Customer Sentiment ── */

export const SENTIMENT_FRAMES = ["Neutral", "Negative", "Positive"] as const;
export type SentimentFrame = (typeof SENTIMENT_FRAMES)[number];

const SENTIMENT: Record<SentimentFrame, { reason: string; at: string; icon: typeof Minus; avatar: "critical" | "neutral" | "success" }> = {
  Neutral: { reason: "Customer is calmer now the agent is checking what the warranty covers.", at: "09:15", icon: Minus, avatar: "neutral" },
  Negative: { reason: "Customer is frustrated that the tablet froze again and the restart guide did not help.", at: "09:12", icon: TrendingDown, avatar: "critical" },
  Positive: { reason: "Customer is relieved the fault is covered and a replacement is being arranged.", at: "09:19", icon: TrendingUp, avatar: "success" },
};

export function CustomerSentimentCard({ frame = "Neutral", statusOverride, avatarColor, forYou, showSubhead = true, ...card }: WidgetCardProps & { frame?: SentimentFrame }) {
  const s = SENTIMENT[frame];
  const Icon = s.icon;
  return (
    <AgenticAICard
      title={`Customer Sentiment is ${frame}`}
      icon={<Icon className="h-4 w-4" strokeWidth={1.5} />}
      status={withStatus("live", statusOverride)}
      subhead={showSubhead ? `Assessed ${s.at}` : undefined}
      forYou={forYou}
      avatarColor={avatarColor ?? s.avatar}
      {...card}
    >
      <Meter levels={["Negative", "Neutral", "Positive"]} value={frame} label="Sentiment" />
      <AgenticSection label="Why">
        <p className="lyra-body-md text-lyra-fg-default">{s.reason}</p>
      </AgenticSection>
    </AgenticAICard>
  );
}

/* ── Real-Time Summary ── */

export const SUMMARY_FRAMES = ["Waiting", "Live", "Up to date"] as const;
export type SummaryFrame = (typeof SUMMARY_FRAMES)[number];

const RTS = [
  "Jordan’s OneTread x1000 tablet keeps freezing with a blinking red light — the third time this month. The virtual agent’s restart guide did not fix it.",
  " It was delivered 18 months ago, so it is inside the 24-month warranty, and the board fault qualifies for a replacement.",
  " The agent is setting up a replacement claim and a technician visit.",
  " Claim WC-88214 was raised and a technician booked for 1 March, 9:00am.",
];

export function RealTimeSummaryCard({ frame = "Live", statusOverride, forYou, showSubhead = true, ...card }: WidgetCardProps & { frame?: SummaryFrame }) {
  const base = { title: "Real-Time Summary", icon: ic(Activity), forYou, ...card };
  if (frame === "Waiting") {
    return (
      <AgenticAICard {...base} status={withStatus("waiting", statusOverride)} subhead={showSubhead ? "Every turn" : undefined}>
        <WaitingState message="Nothing to summarise yet. A running summary builds here as the contact goes on." lines={2} />
      </AgenticAICard>
    );
  }
  const upto = frame === "Live" ? 3 : 4;
  const text = RTS.slice(0, upto).join("");
  const previous = RTS.slice(0, upto - 1).join("");
  const words = text.split(/\s+/).length;
  return (
    <AgenticAICard
      {...base}
      status={withStatus(frame === "Live" ? "live" : "done", statusOverride)}
      statusLabel={frame === "Up to date" && (!statusOverride || statusOverride === "auto") ? "Up to date" : undefined}
      subhead={showSubhead ? (frame === "Live" ? "Updated 09:19" : "Updated 09:24") : undefined}
      footer={
        <>
          <Button variant="outline" size="sm">
            {ic(Copy)}
            Copy
          </Button>
          <span className="lyra-body-sm text-lyra-fg-secondary">{words} words</span>
        </>
      }
    >
      {/* `key` restarts the "new text" mark when the frame changes. */}
      <StreamedText key={frame} text={text} previous={previous} />
    </AgenticAICard>
  );
}

/* ── Knowledge Base Answer ── */

export const ANSWER_FRAMES = ["Listening", "Answer", "Answer + steps", "Internal only", "Nothing found"] as const;
export type AnswerFrame = (typeof ANSWER_FRAMES)[number];

const KB = {
  question: "Is a tablet delivered 18 months ago still under warranty?",
  answer:
    "Yes. Tablet units carry a 24-month parts warranty that runs from the delivery date, not the order date. A frozen display with a blinking red light is a board fault, so it is replaced rather than repaired.",
  citations: [
    { text: "24-month parts warranty that runs from the delivery date", source: "Tablet warranty coverage, section 2" },
    { text: "board fault, so it is replaced rather than repaired", source: "Board faults — replace, not repair" },
  ],
  links: [{ title: "Tablet warranty coverage" }, { title: "Board faults — replace, not repair", internal: true }],
  steps: [
    { title: "Confirm the delivery date", description: "It is on the account, so the customer needs no receipt." },
    { title: "Check the light pattern", description: "A steady blinking red light confirms the board fault." },
    { title: "Raise a replacement claim", description: "Choose “Board fault” as the reason; a technician swaps the unit on site." },
  ],
};

export function KnowledgeBaseAnswerCard({ frame = "Answer", statusOverride, forYou, showSubhead = true, ...card }: WidgetCardProps & { frame?: AnswerFrame }) {
  const base = { title: "Knowledge Base Answer", icon: ic(BookOpen), forYou, ...card };
  if (frame === "Listening") {
    return (
      <AgenticAICard {...base} status={withStatus("waiting", statusOverride)} statusLabel="Listening" subhead={showSubhead ? "Warranty & Returns hub" : undefined}>
        <WaitingState message="Listening for a question the knowledge hub can answer." lines={2} />
      </AgenticAICard>
    );
  }
  if (frame === "Nothing found") {
    return (
      <AgenticAICard
        {...base}
        status={withStatus("changed", statusOverride)}
        statusLabel="No answer"
        subhead={showSubhead ? "Answering: “Does the warranty cover water damage?”" : undefined}
        footer={
          <Button variant="outline" size="sm">
            {ic(Copy)}
            Copy the question
          </Button>
        }
      >
        <p className="lyra-body-md text-lyra-fg-default">The knowledge hub has no answer for this question.</p>
      </AgenticAICard>
    );
  }
  const internal = frame === "Internal only";
  const withSteps = frame === "Answer + steps" || internal;
  return (
    <AgenticAICard
      {...base}
      status={withStatus("done", statusOverride)}
      statusLabel={withSteps ? "Answer + steps" : "Answer found"}
      subhead={showSubhead ? `Answering: “${KB.question}”` : undefined}
      footer={
        <>
          <Button size="sm" disabled={internal} title={internal ? "Internal only — not for the customer" : undefined}>
            {ic(internal ? Lock : CornerDownLeft)}
            Insert into reply
          </Button>
          <Button variant="outline" size="sm">
            {ic(Copy)}
            Copy
          </Button>
          <Button variant="icon" size="icon-sm" aria-label="Like this answer" tooltip>
            {ic(ThumbsUp)}
          </Button>
          <Button variant="icon" size="icon-sm" aria-label="Dislike this answer" tooltip>
            {ic(ThumbsDown)}
          </Button>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <Tag label="Knowledge Hub" variant="purple" shape="pill" icon={<Sparkles className="h-3 w-3" strokeWidth={1.5} />} />
        {internal ? (
          <Tag label="Internal only" variant="warning" shape="pill" icon={<Lock className="h-3 w-3" strokeWidth={1.5} />} />
        ) : (
          <Tag label="OK to share" variant="success" shape="pill" icon={<Globe className="h-3 w-3" strokeWidth={1.5} />} />
        )}
      </div>
      {internal && <PolicyNote tone="outside">This answer is for you only. Do not paste it into the reply.</PolicyNote>}
      <Citation text={KB.answer} citations={KB.citations} />
      {withSteps && (
        <AgenticSection label="Steps · from the knowledge hub">
          <AIProcess variant="numbered" steps={KB.steps.map((st, i) => ({ id: String(i), label: st.title, description: st.description }))} />
        </AgenticSection>
      )}
      <AgenticSection label="Sources">
        <SourceLinks links={KB.links} />
      </AgenticSection>
    </AgenticAICard>
  );
}

/* ── Journey Summary ── */

export const JOURNEY_FRAMES = ["Looking up", "Journey found", "No history"] as const;
export type JourneyFrame = (typeof JOURNEY_FRAMES)[number];

const JOURNEY = {
  summary: "Third contact this month about the OneTread x1000 tablet freezing; a reset on 12 Feb and a firmware update on 19 Feb did not hold.",
  detail: [
    { name: "19 Feb · Chat", detail: "Firmware update walked through; the fault came back" },
    { name: "12 Feb · Voice", detail: "Factory reset; closed as fixed" },
    { name: "3 Feb · Email", detail: "Replacement cable delivered" },
  ],
};

export function JourneySummaryCard({ frame = "Journey found", showDetail = true, statusOverride, forYou, showSubhead = true, ...card }: WidgetCardProps & { frame?: JourneyFrame; showDetail?: boolean }) {
  const base = { title: "Journey Summary", icon: ic(History), forYou, ...card };
  if (frame === "Looking up") {
    return (
      <AgenticAICard {...base} status={withStatus("waiting", statusOverride)} statusLabel="Looking up" subhead={showSubhead ? "Start of contact" : undefined}>
        <WaitingState message="Looking up the customer’s interactions from the last 30 days." lines={2} />
      </AgenticAICard>
    );
  }
  if (frame === "No history") {
    return (
      <AgenticAICard {...base} status={withStatus("done", statusOverride)} statusLabel="No history" subhead={showSubhead ? "Last 30 days" : undefined}>
        <p className="lyra-body-md text-lyra-fg-secondary">No interactions in the last 30 days.</p>
      </AgenticAICard>
    );
  }
  return (
    <AgenticAICard {...base} status={withStatus("changed", statusOverride)} statusLabel="Repeat contact" subhead={showSubhead ? "3 interactions · last 30 days" : undefined}>
      <p className="lyra-body-md text-lyra-fg-default">{JOURNEY.summary}</p>
      {showDetail && (
        <AgenticSection label="Detailed view">
          <LineItems rows={JOURNEY.detail} />
        </AgenticSection>
      )}
    </AgenticAICard>
  );
}

/* ── Next Best Action ── */

export const NBA_FRAMES = ["Listening", "Say or ask", "Do", "Used", "Nothing to suggest"] as const;
export type NbaFrame = (typeof NBA_FRAMES)[number];

interface Suggestion {
  type: SuggestionType;
  title: string;
  why: string;
  text?: string;
  action?: string;
  at: string;
  alt: Array<{ type: SuggestionType; text: string }>;
}

const SUGGESTIONS: Record<"ask" | "do", Suggestion> = {
  ask: {
    type: "ask",
    title: "Ask what the status light is doing",
    why: "A steady blinking red light confirms a board fault, which qualifies for a replacement.",
    text: "Is the red light blinking steadily, or flashing in a pattern?",
    at: "09:15",
    alt: [{ type: "say", text: "Tell Jordan it is still covered" }],
  },
  do: {
    type: "do",
    title: "Raise a replacement claim and book a technician",
    why: "Covered, board fault confirmed, and Jordan agreed to an on-site visit.",
    action: "Runs the warranty claim flow — waits for your approval",
    at: "09:19",
    alt: [{ type: "ask", text: "Ask which day suits the visit" }],
  },
};

export function NextBestActionCard({ frame = "Say or ask", statusOverride, forYou, showSubhead = true, ...card }: WidgetCardProps & { frame?: NbaFrame }) {
  const base = { title: "Next Best Action", icon: ic(Compass), forYou, ...card };
  if (frame === "Listening") {
    return (
      <AgenticAICard {...base} status={withStatus("waiting", statusOverride)} statusLabel="Listening" subhead={showSubhead ? "After each customer turn" : undefined}>
        <WaitingState message="A suggestion appears once the conversation gives enough to go on." lines={2} />
      </AgenticAICard>
    );
  }
  if (frame === "Nothing to suggest") {
    return (
      <AgenticAICard {...base} status={withStatus("waiting", statusOverride)} statusLabel="On track" subhead={showSubhead ? "Updated 09:15" : undefined}>
        <p className="lyra-body-md text-lyra-fg-secondary">Nothing to suggest right now — the conversation is on track.</p>
      </AgenticAICard>
    );
  }
  const used = frame === "Used";
  const n = frame === "Do" ? SUGGESTIONS.do : SUGGESTIONS.ask;
  const status: AgenticStatus = used ? "done" : n.type === "do" ? "needs-you" : "suggested";
  return (
    <AgenticAICard
      {...base}
      status={withStatus(status, statusOverride)}
      statusLabel={used ? "Used" : n.type === "do" ? undefined : "1 suggestion"}
      subhead={showSubhead ? `From a flow · ${n.at}` : undefined}
      footer={
        used ? (
          <span className="inline-flex items-center gap-1.5 lyra-body-sm text-lyra-status-success-strong">
            {ic(CircleCheck)}
            Used at {n.at} — the next suggestion comes after the customer’s next turn
          </span>
        ) : n.type === "do" ? (
          <>
            <Button size="sm">
              {ic(Play)}
              Run it
            </Button>
            <span className="flex-1" />
            <Button variant="ghost" size="sm">
              {ic(X)}
              Not now
            </Button>
          </>
        ) : (
          <>
            <Button size="sm">
              {ic(CornerDownLeft)}
              Insert into reply
            </Button>
            <Button variant="outline" size="sm">
              {ic(Copy)}
              Copy
            </Button>
            <span className="flex-1" />
            <Button variant="ghost" size="sm">
              {ic(X)}
              Not now
            </Button>
          </>
        )
      }
    >
      <div className="flex flex-col gap-2">
        <SuggestionTag type={n.type} />
        <p className="lyra-body-md-emphasis text-lyra-fg-default">{n.title}</p>
        <p className="flex gap-1.5 lyra-body-sm text-lyra-fg-secondary">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lyra-status-warning-strong" strokeWidth={1.5} aria-hidden="true" />
          {n.why}
        </p>
        {n.text ? (
          <SuggestedReply>{n.text}</SuggestedReply>
        ) : (
          <p className="flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">
            <Workflow className="h-3.5 w-3.5 shrink-0 text-lyra-fg-active-strong" strokeWidth={1.5} aria-hidden="true" />
            {n.action}
          </p>
        )}
      </div>
      {!used && <Alternatives alternatives={n.alt.map((a) => ({ ...a, onUse: () => {} }))} />}
    </AgenticAICard>
  );
}

/* ── Process Automation ── */

export const PROCESS_FRAMES = ["Capturing", "Ready to review", "Running", "Task failed", "Done"] as const;
export type ProcessFrame = (typeof PROCESS_FRAMES)[number];
export const PROCESS_VIEWS = ["Guided form", "Tasks first"] as const;
export type ProcessView = (typeof PROCESS_VIEWS)[number];

interface ProcessField {
  l: string;
  v: string;
  src: FieldSource;
  q?: string;
  at?: number;
  ask?: string;
  sens?: boolean;
}
interface ProcessSection {
  id: string;
  name: string;
  from?: number;
  why?: string;
  fields: ProcessField[];
}

const PROCESS_SECTIONS: ProcessSection[] = [
  {
    id: "cust",
    name: "Customer & product",
    fields: [
      { l: "Customer", v: "Jordan Ellis", src: "conversation", q: "Hi, it’s Jordan Ellis." },
      { l: "Order", v: "NR-10871", src: "lookup" },
      { l: "Serial number", v: "OT-X1-55821", src: "self-service" },
      { l: "Delivered", v: "14 Aug 2024", src: "lookup" },
    ],
  },
  {
    id: "fault",
    name: "Fault",
    fields: [
      { l: "Symptom", v: "Frozen, blinking red light", src: "conversation", q: "It just freezes and the light keeps blinking red." },
      { l: "Times this month", v: "3", src: "conversation", at: 2, q: "This is the third time it has frozen this month.", ask: "How many times has it frozen this month?" },
      { l: "Restart tried", v: "Yes · froze again", src: "self-service" },
    ],
  },
  {
    id: "damage",
    name: "Damage details",
    from: 2,
    why: "Opened because Jordan mentioned a crack",
    fields: [
      { l: "Damage", v: "Small crack by the charging port", src: "conversation", at: 2, q: "There’s also a small crack by the charging port." },
      { l: "Photo", v: "1 photo received", src: "agent", at: 3, ask: "Could you send a photo of the crack by the charging port?" },
    ],
  },
  {
    id: "visit",
    name: "Technician visit",
    fields: [
      { l: "Preferred slot", v: "1 March, 9:00am", src: "conversation", at: 3, q: "The first of March in the morning works.", ask: "Which day suits you for the technician visit?" },
      { l: "Address", v: "•••• Elm Street, Leeds", src: "lookup", sens: true },
      { l: "Email consent", v: "Yes", src: "agent", at: 3, ask: "Is it okay if we email you the claim details?" },
    ],
  },
];

interface ProcessTask {
  id: string;
  n: string;
  flow: string;
  rule: string;
  out: string;
  needs: string[];
  after?: string;
}
const PROCESS_TASKS: ProcessTask[] = [
  { id: "verify", n: "Verify identity", flow: "Identity verification", rule: "Ran on its own · read-only lookup", out: "Verified", needs: [] },
  { id: "claim", n: "Raise replacement claim", flow: "Warranty check › Raise a claim", rule: "On approve · in parallel", out: "WC-88214", needs: ["Photo"] },
  { id: "visit", n: "Book technician", flow: "Book a technician › Confirm booking", rule: "On approve · in parallel", out: "1 Mar, 9:00am", needs: ["Preferred slot"] },
  { id: "crm", n: "Update the customer record", flow: "CRM sync", rule: "On approve · in parallel", out: "Updated", needs: [] },
  { id: "email", n: "Email the claim summary", flow: "Customer notifications", rule: "After Raise replacement claim", out: "Sent 9:21", needs: ["Email consent"], after: "claim" },
];

const filledAt = (f: ProcessField, stage: number) => (f.at ?? 1) <= stage;

function processCount(stage: number) {
  let n = 0;
  let of = 0;
  const missing: string[] = [];
  PROCESS_SECTIONS.filter((x) => (x.from ?? 1) <= stage).forEach((x) =>
    x.fields.forEach((f) => {
      of++;
      if (filledAt(f, stage)) n++;
      else missing.push(f.l);
    })
  );
  return { n, of, missing };
}

function ProcessSections({ stage, onlyOpenWork }: { stage: number; onlyOpenWork?: boolean }) {
  return (
    <>
      {PROCESS_SECTIONS.filter((x) => (x.from ?? 1) <= stage && (!onlyOpenWork || x.fields.some((f) => !filledAt(f, stage)))).map((x) => {
        const n = x.fields.filter((f) => filledAt(f, stage)).length;
        const opensNow = x.from === stage;
        return (
          <AIFieldSection key={`${x.id}-${stage}`} name={x.name} filled={n} of={x.fields.length} why={opensNow ? x.why : undefined} defaultOpen={x.fields.some((f) => !filledAt(f, stage)) || opensNow}>
            {x.fields.map((f) => {
              const ok = filledAt(f, stage);
              return (
                <AIField
                  key={f.l}
                  label={f.l}
                  value={ok ? f.v : undefined}
                  source={ok ? f.src : undefined}
                  quote={f.q}
                  sensitive={f.sens}
                  fresh={ok && f.at === stage}
                  question={f.ask}
                  onInsertQuestion={() => {}}
                />
              );
            })}
          </AIFieldSection>
        );
      })}
    </>
  );
}

const TASK_NOTE_REVIEW = (t: ProcessTask) => t.rule;

function processTasks(phase: "capture" | "review" | "run" | "fail" | "done", stage: number, onRetry?: () => void): TaskItem[] {
  const missing = processCount(stage).missing;
  const nameOf = (id?: string) => PROCESS_TASKS.find((x) => x.id === id)?.n;
  return PROCESS_TASKS.map((t) => {
    let state: TaskState;
    if (phase === "capture") state = t.id === "verify" ? "done" : t.after ? "waiting" : t.needs.some((x) => missing.includes(x)) ? "waiting" : "ready";
    else if (phase === "review") state = t.id === "verify" ? "done" : "queued";
    else if (phase === "run") state = ({ verify: "done", claim: "running", visit: "done", crm: "running", email: "waiting" } as Record<string, TaskState>)[t.id];
    else if (phase === "fail") state = t.id === "crm" ? "failed" : "done";
    else state = "done";
    let note: string | undefined = phase === "review" ? TASK_NOTE_REVIEW(t) : undefined;
    if (phase === "capture" && state === "waiting" && !t.after) note = `Waiting on: ${t.needs.filter((x) => missing.includes(x)).join(", ")}`;
    if (phase === "capture" && state === "ready") note = "Ready · runs when you approve";
    return {
      id: t.id,
      name: t.n,
      flow: t.flow,
      state,
      output: t.out,
      note,
      error: state === "failed" ? "CRM did not answer within 10 s · nothing was changed" : undefined,
      after: t.after ? nameOf(t.after) : undefined,
      onRetry: state === "failed" ? onRetry : undefined,
    };
  });
}

export function ProcessAutomationCard({
  frame = "Capturing",
  view = "Guided form",
  statusOverride,
  forYou,
  showSubhead = true,
  ...card
}: WidgetCardProps & { frame?: ProcessFrame; view?: ProcessView }) {
  const [showForm, setShowForm] = React.useState(false);
  const guided = view === "Guided form";
  const phase = ({ Capturing: "capture", "Ready to review": "review", Running: "run", "Task failed": "fail", Done: "done" } as const)[frame];
  const stage = ({ Capturing: 2, "Ready to review": 3, Running: 3, "Task failed": 4, Done: 4 } as const)[frame];
  const counts = processCount(phase === "capture" ? stage : 4);
  const tasks = processTasks(phase, stage, () => {});
  const nDone = tasks.filter((t) => t.state === "done").length;
  const nFail = tasks.filter((t) => t.state === "failed").length;
  const totalPlain = PROCESS_TASKS.length;

  const autoStatus: AgenticStatus = phase === "capture" ? "running" : phase === "review" ? "needs-you" : phase === "fail" ? "failed" : phase === "done" ? "done" : "running";
  const autoLabel = phase === "capture" ? "Capturing" : phase === "fail" ? "1 failed" : undefined;
  const subhead = guided ? `Guided Capture · ${PROCESS_SECTIONS.length} sections, ${PROCESS_TASKS.length} tasks` : `Process Automation · ${PROCESS_TASKS.length} tasks, ${counts.of} inputs`;
  const stageIndex = phase === "capture" ? 0 : phase === "review" ? 1 : 2;

  let footer: React.ReactNode;
  if (phase === "capture") {
    footer = (
      <>
        <Button size="sm" disabled={counts.missing.length > 0}>
          {ic(ListChecks)}
          Review and run
        </Button>
        <span className="lyra-body-sm text-lyra-fg-secondary">{counts.missing.length ? `${counts.missing.length} required left` : "Ready"}</span>
      </>
    );
  } else if (phase === "done") {
    footer = (
      <div className="flex flex-wrap gap-1.5">
        <Tag label="WC-88214" variant="success" shape="pill" icon={<FileCheck className="h-3 w-3" strokeWidth={1.5} />} />
        <Tag label="1 Mar, 9:00am" variant="success" shape="pill" icon={<CalendarCheck className="h-3 w-3" strokeWidth={1.5} />} />
        <Tag label="Email sent" variant="success" shape="pill" icon={<MailCheck className="h-3 w-3" strokeWidth={1.5} />} />
      </div>
    );
  }

  return (
    <AgenticAICard
      title="Warranty Claim"
      icon={ic(Workflow)}
      forYou={forYou}
      {...card}
      status={withStatus(autoStatus, statusOverride)}
      statusLabel={autoLabel}
      subhead={showSubhead ? subhead : undefined}
      footer={footer}
    >
      <StageTrail stages={["Capture", "Review", "Run"]} current={stageIndex} aria-label="Stages" />
      {phase === "capture" && (
        <>
          {guided ? (
            <>
              <div className="flex items-center gap-3">
                <ProgressRing value={counts.n} of={counts.of} size={40} />
                <span className="flex flex-col">
                  <span className="lyra-body-md-emphasis text-lyra-fg-default">
                    {counts.n} of {counts.of} captured
                  </span>
                  <span className="lyra-body-sm text-lyra-fg-secondary">{counts.missing.length ? `${counts.missing.length} required left · fills in as Jordan talks` : "Everything captured"}</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROCESS_SECTIONS.filter((x) => (x.from ?? 1) <= stage).map((x) => (
                  <SectionDial key={x.id} name={x.name} filled={x.fields.filter((f) => filledAt(f, stage)).length} of={x.fields.length} opened={x.from === stage} />
                ))}
              </div>
              <ProcessSections stage={stage} />
              <p className="flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">
                {ic(Workflow)}
                Then {PROCESS_TASKS.length - 1} tasks run in parallel · Verify identity already ran
              </p>
            </>
          ) : (
            <>
              <TaskBoard tasks={tasks} />
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2.5">
                  <ProgressRing value={counts.n} of={counts.of} size={28} />
                  <span className="flex flex-col">
                    <span className="lyra-body-md-emphasis text-lyra-fg-default">
                      Inputs · {counts.n} of {counts.of}
                    </span>
                    <span className="lyra-body-sm text-lyra-fg-secondary">{counts.missing.length} still needed</span>
                  </span>
                </span>
                <Button variant="outline" size="sm" onClick={() => setShowForm((v) => !v)} aria-expanded={showForm}>
                  {showForm ? "Hide the form" : "Show the form"}
                </Button>
              </div>
              <ProcessSections stage={stage} onlyOpenWork={!showForm} />
            </>
          )}
        </>
      )}
      {phase === "review" && (
        <>
          <p className="lyra-body-md-emphasis text-lyra-fg-default">Ready to run 4 tasks for Jordan’s warranty claim</p>
          <div className="flex flex-wrap gap-1.5">
            {PROCESS_SECTIONS.map((x) => (
              <SectionDial key={x.id} name={x.name} filled={x.fields.length} of={x.fields.length} />
            ))}
          </div>
          <TaskBoard tasks={tasks} />
          <PolicyNote>Within your limit: warranty replacements need no supervisor.</PolicyNote>
          <ActionGroup primary={{ label: "Approve and run 4 tasks", icon: ic(Play) }} secondary={{ label: "Edit answers", icon: ic(Pencil) }} />
        </>
      )}
      {(phase === "run" || phase === "fail" || phase === "done") && (
        <>
          <div className="flex items-center gap-3 lyra-body-sm text-lyra-fg-secondary">
            <span className="whitespace-nowrap">
              {nDone} of {totalPlain} done
            </span>
            <div className="min-w-0 flex-1">
              <ProgressBar value={Math.round((nDone / totalPlain) * 100)} size="sm" variant={phase === "done" ? "success" : nFail > 0 ? "critical" : undefined} aria-label={`${nDone} of ${totalPlain} tasks done`} />
            </div>
            {nFail > 0 && <span className="whitespace-nowrap text-lyra-status-critical-strong">{nFail} failed</span>}
          </div>
          <p className="flex items-center gap-1.5 lyra-body-sm text-lyra-status-success-strong">
            {ic(CircleCheck)}
            Approved by you · 9:20
          </p>
          <TaskBoard tasks={tasks} />
          {phase === "done" && (
            <p className="flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary">Claim WC-88214 written back to the form and to Autosummary.</p>
          )}
        </>
      )}
    </AgenticAICard>
  );
}

/* ── Widget registry (the playground's "Widget" dropdown) ── */

export const WIDGET_NAMES = ["Customer Sentiment", "Real-Time Summary", "Knowledge Base Answer", "Journey Summary", "Next Best Action", "Process Automation"] as const;
export type WidgetName = (typeof WIDGET_NAMES)[number];

export const STATUS_OPTIONS: Array<"auto" | AgenticStatus> = ["auto", "waiting", "queued", "running", "live", "changed", "suggested", "needs-you", "authorized", "done", "failed"];
