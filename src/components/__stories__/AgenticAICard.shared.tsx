import * as React from "react";
import { Activity, BookOpen, Copy, CornerDownLeft, Globe, History, Lock, Minus, Sparkles, ThumbsDown, ThumbsUp, TrendingDown, TrendingUp } from "lucide-react";
import { AgenticAICard, AgenticSection, type AgenticAICardProps, type AgenticStatus } from "../agentic-ai-card";
import { LineItems, Meter, PolicyNote, SourceLinks, StreamedText, WaitingState } from "../agentic-parts";
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

/* ── Widget registry (the playground's "Widget" dropdown) ── */

export const WIDGET_NAMES = ["Customer Sentiment", "Real-Time Summary", "Knowledge Base Answer", "Journey Summary"] as const;
export type WidgetName = (typeof WIDGET_NAMES)[number];

export const STATUS_OPTIONS: Array<"auto" | AgenticStatus> = ["auto", "waiting", "queued", "running", "live", "changed", "needs-you", "authorized", "done", "failed"];
