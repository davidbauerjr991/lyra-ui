/* Example AICards for AICard.variants.stories.tsx (one story each, plus "All cards"). Not a stories
   file: it only holds the card compositions. Buttons are static stand-ins that do nothing, except Autosummary's Edit / Save / Cancel. */
import * as React from "react";
import {
  AlignLeft, ArrowLeftRight, BookOpen, Bookmark, CalendarDays, Check, Copy, CreditCard,
  FileCheck, FileText, Frown, Meh, MessageCircleQuestion, MessagesSquare, Pencil, Plus, Smile, Sparkles,
  ThumbsDown, ThumbsUp, Trash2, TriangleAlert, User, Workflow, ChevronDown, ChevronRight, CircleAlert, CircleCheck, History,
} from "lucide-react";
import { AICard, type AICardColor, type AICardProps } from "../ai-card";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { Input } from "../input";
import { Label } from "../label";
import { ProgressBar } from "../progress-bar";
import { Tag } from "../tag";
import { Select } from "../select";
import { Separator } from "../separator";
import { TimePicker } from "../time-picker";
import { ToggleGroup } from "../toggle-group";
import { MenuItem } from "../menu-item";
import { Popover } from "../popover";
import { Textarea } from "../textarea";
import { cn } from "../../lib/utils";

/** Playground overrides: the Default story's Color / Accordion / Icon / Starts open controls act on whichever card is picked. */
export interface CardOverrides {
  color?: AICardColor;
  accordion?: boolean;
  showIcon?: boolean;
  defaultOpen?: boolean;
  /** Show the dismiss X in the header (works on every card). */
  showDismiss?: boolean;
  /** Show the "open in new window" button in the header (works on every card). */
  showOpenWindow?: boolean;
  /** Customer Info only: "list" (label / value rows) or "conversational" (avatar, tags and a written summary). */
  customerInfoLayout?: "list" | "conversational";
}
export interface CardProps {
  o?: CardOverrides;
}

/** `AICard` with the playground overrides applied; a card keeps its own color / accordion / icon where none is given. */
const C = ({ o, icon, ...rest }: AICardProps & CardProps) => {
  const [dismissed, setDismissed] = React.useState(false);
  // A dismissed card leaves a way back so the demo isn't a dead end.
  if (dismissed) {
    return (
      <Button variant="outline" onClick={() => setDismissed(false)}>
        Restore card
      </Button>
    );
  }
  return (
  <AICard
    {...rest}
    onDismiss={o?.showDismiss ? () => setDismissed(true) : undefined}
    onOpenInNewWindow={o?.showOpenWindow ? () => {} : undefined}
    color={o?.color ?? rest.color}
    accordion={o?.accordion ?? rest.accordion}
    defaultOpen={o?.defaultOpen ?? rest.defaultOpen}
    icon={o?.showIcon === false ? undefined : icon}
  />
  );
};

const ic = (Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>) => (
  <Icon className="h-4 w-4" strokeWidth={1.5} />
);

/** A bordered row used by the list cards (topics, questions, feedback). */
const ROW = "flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base px-3 py-2";
/** A lyra-ui icon button (Button variant="icon"); static, so it does nothing. Icon-only buttons always carry an aria-label and a hover tooltip (`tooltip` reuses the label). */
const Static = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Button variant="icon" size="icon" aria-label={label} tooltip>{icon}</Button>
);
const Stack = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex flex-col gap-3", className)}>{children}</div>
);
const Count = ({ children }: { children: React.ReactNode }) => <span className="tabular-nums">{children}</span>;

/* ── Summaries ── */

const AUTOSUMMARY_TEXT =
  "Emery contacted support about a freezing tablet on her OneTread x1000. Self-service troubleshooting failed. Serial OT-1000-4471C was verified, the tablet was approved for warranty replacement, and a technician visit was booked for 9:00am on March 1, 2025.";

/** Edit swaps the summary text for a textarea and the icon buttons for Save / Cancel; Save keeps the edit, Cancel discards it. */
export const AutosummaryCard = ({ o }: CardProps) => {
  const [text, setText] = React.useState(AUTOSUMMARY_TEXT);
  const [draft, setDraft] = React.useState(text);
  const [editing, setEditing] = React.useState(false);
  return (
    <C o={o} title="Autosummary" color="purple" icon={ic(FileText)}>
      {editing ? (
        <Textarea aria-label="Autosummary" rows={6} value={draft} onChange={(e) => setDraft(e.target.value)} />
      ) : (
        <p>{text}</p>
      )}
      <div className="mt-4 flex justify-end gap-1 border-t border-lyra-border-subtle pt-2">
        {editing ? (
          <>
            <Button
              variant="outline"
              onClick={() => {
                setDraft(text);
                setEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setText(draft);
                setEditing(false);
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="icon"
              size="icon"
              aria-label="Edit"
              tooltip
              onClick={() => {
                setDraft(text);
                setEditing(true);
              }}
            >
              {ic(Pencil)}
            </Button>
            <Static icon={ic(Copy)} label="Copy" />
          </>
        )}
      </div>
    </C>
  );
};

const PAGE_SECTIONS: Array<[string, string]> = [
  ["Summary", "Emery reported a frozen tablet on her OneTread x1000 and a warranty replacement was approved."],
  ["Customer Objectives", "Confirm coverage and get a technician scheduled without another troubleshooting round."],
  ["Steps Taken", "Verified serial OT-1000-4471C, opened claim WC-88214, reserved the part, booked 03/01/2025 at 9:00am."],
  ["Follow Up Work", "Send appointment confirmation with prep instructions to Emery."],
];
export const AutosummaryPageCard = ({ o }: CardProps) => (
  <C o={o} title="Autosummary Page" color="purple" icon={ic(AlignLeft)}>
    <div className="flex flex-col gap-3">
      {PAGE_SECTIONS.map(([heading, text]) => (
        <div key={heading}>
          <p className="lyra-body-md-emphasis">{heading}</p>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </C>
);

export const JourneySummaryCard = ({ o }: CardProps) => (
  <C o={o} title="Journey Summary" color="purple" icon={ic(Bookmark)}>
    Emery received her OneTread x1000 on 1/25/25 and had no issues until the tablet began freezing and showing a blinking red light.
  </C>
);
export const SelfServiceSummaryCard = ({ o }: CardProps) => (
  <C o={o} title="Self Service Summary" color="blue" icon={ic(BookOpen)}>
    Emery worked through the tablet troubleshooting article and two reset guides before starting this chat. Neither resolved the freeze.
  </C>
);
export const TransferSummaryCard = ({ o }: CardProps) => (
  <C o={o} title="Transfer Summary" color="purple" icon={ic(ArrowLeftRight)}>
    Received from Tier 1 (Jordan P.). Coverage lookup was already completed; escalated for claim creation and scheduling.
  </C>
);

/* ── Approval request (from the agent-next-gen-v3 Lucas Thomas flow) ── */

const APPROVAL_CHECKLIST: Array<{ label: string; detail: string; attention?: boolean }> = [
  { label: "Order not placed", detail: "NR-11056 · card declined by the payment service" },
  { label: "Launch price held", detail: "$189.00 and his unit held for 24 h" },
  { label: "Payment link sent", detail: "Pay another way · also failed" },
  { label: "Approve the exception", detail: "Outside Checkout AI Agent's limits", attention: true },
];
const APPROVAL_MEMORY = [
  "Asked about the Aurora X2 launch on chat Sep 26",
  "Paid by PayPal on 3 of the last 5 orders",
  "Payment review · INC-2207: Waiting on the payment fix · stage 3 of 5",
];
const SENTIMENT_LABELS = ["Angry", "Frustrated", "Neutral", "Satisfied", "Happy"];
const SENTIMENT_LEVEL = 2;

interface ApprovalDecision {
  value: "approve" | "decline" | "other";
  title: string;
  description?: string;
  noteLabel?: string;
  notePlaceholder?: string;
  suggestions?: string[];
  /** "Something else" can be sent again and again. */
  repeatable?: boolean;
  result: string;
}
// Content as in the v3 Lucas Thomas approval request.
const APPROVAL_DECISIONS: ApprovalDecision[] = [
  { value: "approve", title: "Approve the Exception", result: "Exception approved" },
  {
    value: "decline",
    title: "Decline the exception",
    description: "The AI agent will let Lucas know the order can't be placed and offer next steps.",
    noteLabel: "Reason",
    notePlaceholder: "Enter a reason for declining…",
    result: "Exception declined",
  },
  {
    value: "other",
    title: "Something else",
    repeatable: true,
    suggestions: [
      "Ask the customer for more time",
      "Apologize to the customer and transfer to a specialist",
      "Ask if they tried a different payment method",
    ],
    notePlaceholder: "Describe what you'd like the AI agent to do instead (e.g. try a different payment method first)...",
    result: "Instruction sent to the AI agent",
  },
];

/**
 * An agent approval request, matching the agent-next-gen-v3 Lucas Thomas card: headline and description,
 * an animated "Show more" for the checklist, experience memory and a sentiment progress bar, then "How would you
 * like to proceed?". Approve opens the PayPal panel with Authorize and Place Order; Decline asks for a
 * reason; Something else offers suggestions and a free-text instruction (and can be sent repeatedly).
 */
export const ApprovalRequestCard = ({ o }: CardProps) => {
  const uid = React.useId();
  const [showMore, setShowMore] = React.useState(false);
  const [selected, setSelected] = React.useState<ApprovalDecision["value"] | null>(null);
  const [note, setNote] = React.useState("");
  const [result, setResult] = React.useState<string | null>(null);
  const option = APPROVAL_DECISIONS.find((d) => d.value === selected);
  const submit = (d: ApprovalDecision) => {
    setResult(d.result);
    setNote("");
    // Repeatable options stay open for another instruction; the others are final.
    if (!d.repeatable) setSelected(null);
  };
  const final = result && !option?.repeatable && selected === null;
  return (
    <C
      o={o}
      title={
        <>
          Approval request · Checkout AI Agent <span className="lyra-body-md font-normal text-lyra-fg-secondary">2:09 PM</span>
        </>
      }
      color="blue"
      icon={ic(Sparkles)}
      headerEnd={<span className="lyra-body-sm font-normal text-lyra-fg-secondary">Copilot summary</span>}
      footer={
        <div className="flex w-full flex-col gap-3 border-t border-lyra-border-subtle pt-4">
          {final ? (
            <div className="flex items-center gap-1.5 lyra-body-md-emphasis text-lyra-fg-default">
              <CircleCheck className="h-4 w-4 text-lyra-status-success-strong" strokeWidth={1.5} aria-hidden="true" />
              {result}
            </div>
          ) : (
            <>
              <p className="lyra-body-md-emphasis text-lyra-fg-default">How would you like to proceed?</p>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="How would you like to proceed?">
                {APPROVAL_DECISIONS.map((d) => {
                  const isSelected = selected === d.value;
                  return (
                    <Button
                      key={d.value}
                      variant="outline"
                      role="radio"
                      aria-checked={isSelected}
                      className={cn("lyra-body-md-emphasis text-lyra-fg-default", isSelected && "border-lyra-border-active bg-lyra-bg-active-subtle")}
                      onClick={() => {
                        setSelected(d.value);
                        setNote("");
                        setResult(null);
                      }}
                    >
                      {isSelected && <CircleCheck className="h-4 w-4 text-lyra-status-success-strong" strokeWidth={1.5} aria-hidden="true" />}
                      {d.title}
                    </Button>
                  );
                })}
              </div>
              {option?.description && <p className="lyra-body-sm text-lyra-fg-secondary">{option.description}</p>}
              {option?.value === "approve" && (
                <>
                  <div className="flex flex-col gap-1.5 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base px-4 py-3">
                    <p className="lyra-body-lg-emphasis text-lyra-fg-default">Approve the exception: place the order with PayPal at the held price</p>
                    <p className="text-lyra-fg-secondary">Card payments are failing on our side and PayPal isn&apos;t affected.</p>
                    <p className="flex items-start gap-1.5 text-lyra-accent-purple-strong">
                      <History className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                      Experience Memory: paid by PayPal on 3 of the last 5 orders · order held for INC-2207
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      <div className="flex min-w-0 flex-col rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base px-4 py-2.5">
                        <span className="lyra-body-md-emphasis text-lyra-fg-default">PayPal on file · $189.00</span>
                        <span className="lyra-body-sm text-lyra-fg-secondary">lucas.t@... · launch price held until tomorrow 2:05 PM</span>
                      </div>
                      <Button variant="outline" className="h-auto justify-between gap-3 px-4 py-3 lyra-body-md-emphasis text-lyra-fg-default">
                        <BookOpen className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                        PAY-3.2 · Launch price holds
                        <ChevronRight className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                  <Button className="self-start" onClick={() => submit(option)}>
                    Authorize and Place Order
                  </Button>
                </>
              )}
              {option && option.value !== "approve" && (
                <>
                  {option.suggestions && (
                    <div className="flex flex-wrap gap-2">
                      {option.suggestions.map((suggestion) => (
                        <Tag
                          key={suggestion}
                          label={suggestion}
                          variant="purple"
                          icon={<Sparkles className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />}
                          shape="pill"
                          role="button"
                          tabIndex={0}
                          className="cursor-pointer"
                          onClick={() => setNote(suggestion)}
                          onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setNote(suggestion);
                            }
                          }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    {option.noteLabel && <Label label={option.noteLabel} labelFor={`${uid}-note`} />}
                    <Textarea id={`${uid}-note`} aria-label={option.noteLabel ?? "Instruction"} rows={3} placeholder={option.notePlaceholder} value={note} onChange={(e) => setNote(e.target.value)} />
                  </div>
                  <Button className="self-start" disabled={!note.trim()} onClick={() => submit(option)}>
                    Perform Task
                  </Button>
                  {result && option.repeatable && (
                    <div className="flex items-center gap-1.5 lyra-body-md-emphasis text-lyra-fg-default">
                      <CircleCheck className="h-4 w-4 text-lyra-status-success-strong" strokeWidth={1.5} aria-hidden="true" />
                      {result}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      }
    >
      <div className="flex flex-col gap-3">
        <p className="lyra-body-lg-emphasis">
          Checkout AI Agent reached its authorization limit and is requesting an exception: place order NR-11056 with another payment method at the held launch price.
        </p>
        <p>Lucas tried to buy the Aurora X2 launch edition at $189.00. Checkout failed twice during a payment incident.</p>
        <Button variant="ghost" className="self-start px-0 text-lyra-fg-link hover:bg-transparent hover:underline" aria-expanded={showMore} onClick={() => setShowMore((v) => !v)}>
          {showMore ? "Show less" : "Show more"}
        </Button>
        {/* Animates open and closed: the row height goes from 0 to its content height. */}
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            showMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
          aria-hidden={!showMore}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="grid gap-6 pt-1 md:grid-cols-2">
              <ul className="flex flex-col gap-3">
                {APPROVAL_CHECKLIST.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    {item.attention ? (
                      <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-lyra-status-warning-strong" strokeWidth={1.5} aria-hidden="true" />
                    ) : (
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-lyra-status-success-strong" strokeWidth={1.5} aria-hidden="true" />
                    )}
                    <div className="flex min-w-0 flex-col">
                      <span className="flex flex-wrap items-center gap-2 lyra-body-md-emphasis">
                        {item.label}
                        {item.attention && (
                          <Badge shape="pill" color="warning" variant="subtle" fontSize={12}>
                            Needs a person
                          </Badge>
                        )}
                      </span>
                      <span className="text-lyra-fg-secondary">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-1.5 lyra-body-sm-emphasis text-lyra-accent-purple-strong">
                  <History className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  From Experience Memory
                </span>
                <ul className="flex flex-col gap-1.5">
                  {APPROVAL_MEMORY.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lyra-accent-purple-strong" aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>
                {/* Sentiment as a lyra-ui ProgressBar (level 1 to 5 of 5). */}
                <div className="mt-2 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between lyra-body-sm-emphasis text-lyra-fg-secondary">
                    <span>Sentiment</span>
                    <span className="text-lyra-fg-default">{SENTIMENT_LABELS[SENTIMENT_LEVEL - 1]}</span>
                  </div>
                  <ProgressBar
                    variant="warning"
                    size="md"
                    value={(SENTIMENT_LEVEL / SENTIMENT_LABELS.length) * 100}
                    aria-label="Sentiment"
                    aria-valuetext={SENTIMENT_LABELS[SENTIMENT_LEVEL - 1]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </C>
  );
};

/* ── Sentiment and notices ── */

export const SentimentNeutralCard = ({ o }: CardProps) => (
  <C o={o} title="Customer Sentiment is Neutral" color="yellow" icon={ic(Meh)}>
    Sentiment remained the same since the last message.
  </C>
);
export const SentimentNegativeCard = ({ o }: CardProps) => (
  <C o={o} title="Customer Sentiment is Negative" color="red" icon={ic(Frown)}>
    Sentiment declined since the last message. Third reported failure.
  </C>
);
export const SentimentPositiveCard = ({ o }: CardProps) => (
  <C o={o} title="Customer Sentiment is Positive" color="green" icon={ic(Smile)}>
    Sentiment improved since the last message.
  </C>
);
export const InformationNeededCard = ({ o }: CardProps) => (
  <C o={o} title="Information Needed" color="yellow" icon={ic(TriangleAlert)}>
    A frame serial number is required before a tablet replacement claim can be opened.
  </C>
);
export const CustomerInfoAvailableCard = ({ o }: CardProps) => (
  <C o={o} title="Customer Info Available" color="blue" icon={ic(CreditCard)} footer={<Button>View</Button>}>
    <p>Retrieve and verify Emery&apos;s account details before opening the claim.</p>
  </C>
);

/* ── Lists ── */

interface Topic {
  id: number;
  text: string;
  done: boolean;
}
const TOPICS: Topic[] = ["Tablet freezing", "Warranty coverage", "Repeat failure"].map((text, id) => ({ id, text, done: false }));

/**
 * Checking a topic crosses it off, Edit makes its text an input (clicking off, Enter or Edit again saves;
 * Escape or an emptied field drops an unsaved new row / keeps the old text), Delete removes it, and
 * Add topic appends an empty row in edit mode. The header count follows the checked topics.
 */
export const ConversationTopicsCard = ({ o }: CardProps) => {
  const [topics, setTopics] = React.useState<Topic[]>(TOPICS);
  const [editingId, setEditingId] = React.useState<number | null>(null);
  // The text a topic had when its edit started, restored on Escape or when the field is left empty.
  const original = React.useRef<Record<number, string>>({});
  const nextId = React.useRef(TOPICS.length);

  const update = (id: number, patch: Partial<Topic>) =>
    setTopics((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  const remove = (id: number) => setTopics((list) => list.filter((t) => t.id !== id));
  const startEdit = (t: Topic) => {
    original.current[t.id] = t.text;
    setEditingId(t.id);
  };
  const finishEdit = (t: Topic, cancel = false) => {
    const text = cancel ? original.current[t.id] ?? "" : t.text.trim();
    if (!text) remove(t.id);
    else update(t.id, { text });
    setEditingId(null);
  };
  const add = () => {
    const topic = { id: nextId.current++, text: "", done: false };
    original.current[topic.id] = "";
    setTopics((list) => [...list, topic]);
    setEditingId(topic.id);
  };
  const doneCount = topics.filter((t) => t.done).length;

  return (
    <C o={o} title="Conversation Topics" color="purple" icon={ic(MessagesSquare)} headerEnd={<Count>{doneCount}/{topics.length}</Count>}>
      <Stack className="gap-2">
        {topics.map((t) => {
          const editing = editingId === t.id;
          return (
            <div key={t.id} className={ROW}>
              <Checkbox
                aria-label={t.text || "New topic"}
                checked={t.done}
                onCheckedChange={(v) => update(t.id, { done: v === true })}
              />
              {editing ? (
                <Input
                  aria-label="Topic name"
                  placeholder="Topic name"
                  autoFocus
                  value={t.text}
                  className="min-w-0 flex-1"
                  onChange={(e) => update(t.id, { text: e.target.value })}
                  onBlur={() => finishEdit(t)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") finishEdit(t);
                    if (e.key === "Escape") finishEdit(t, true);
                  }}
                />
              ) : (
                <span className={cn("flex-1", t.done && "text-lyra-fg-secondary line-through")}>{t.text}</span>
              )}
              <Button
                variant="icon"
                size="icon"
                aria-label={editing ? "Save topic" : "Edit topic"}
                tooltip
                className={cn(editing && "bg-lyra-bg-active-subtle text-lyra-fg-active-strong")}
                // Keep the field focused on press so the click saves instead of blur-then-reopen.
                onMouseDown={(e) => editing && e.preventDefault()}
                onClick={() => (editing ? finishEdit(t) : startEdit(t))}
              >
                {ic(Pencil)}
              </Button>
              <Button variant="icon" size="icon" aria-label="Delete topic" tooltip onClick={() => remove(t.id)}>
                {ic(Trash2)}
              </Button>
            </div>
          );
        })}
        <Button variant="outline" className="w-fit" onClick={add}>
          <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          Add topic
        </Button>
      </Stack>
    </C>
  );
};

const QUESTIONS = [
  "Is the tablet covered separately from the bike?",
  "How do I file a warranty claim for the tablet?",
  "Can I return the whole bike instead?",
];
/** Edit makes a question's text an input; clicking off, Enter or the pencil again saves it, Escape restores it. */
export const SuggestedQuestionsCard = ({ o }: CardProps) => {
  const [questions, setQuestions] = React.useState(QUESTIONS);
  const [editing, setEditing] = React.useState<number | null>(null);
  const original = React.useRef("");
  const finish = (cancel = false) => {
    setQuestions((list) =>
      list.map((q, i) => (i === editing ? (cancel ? original.current : q.trim() || original.current) : q))
    );
    setEditing(null);
  };
  return (
    <C o={o}
      title="Suggested Questions"
      color="blue"
      icon={ic(MessageCircleQuestion)}
      accordion={false}
      >
      <p>The customer&apos;s question was unclear. Select the question that best matches their intent.</p>
      <Stack className="mt-4 gap-2">
        {questions.map((q, i) => {
          const isEditing = editing === i;
          return (
            <div key={i} className={ROW}>
              {isEditing ? (
                <Input
                  aria-label="Question"
                  autoFocus
                  value={q}
                  className="min-w-0 flex-1"
                  onChange={(e) => setQuestions((list) => list.map((x, k) => (k === i ? e.target.value : x)))}
                  onBlur={() => finish()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") finish();
                    if (e.key === "Escape") finish(true);
                  }}
                />
              ) : (
                <span className="flex-1">{q}</span>
              )}
              <Button
                variant="icon"
                size="icon"
                aria-label={isEditing ? "Save question" : "Edit question"}
                tooltip
                className={cn(isEditing && "bg-lyra-bg-active-subtle text-lyra-fg-active-strong")}
                // Keep the field focused on press so the click saves instead of blur-then-reopen.
                onMouseDown={(e) => isEditing && e.preventDefault()}
                onClick={() => {
                  if (isEditing) return finish();
                  original.current = q;
                  setEditing(i);
                }}
              >
                {ic(Pencil)}
              </Button>
            </div>
          );
        })}
      </Stack>
    </C>
  );
};

/* ── Workflows ── */

interface Section {
  name: string;
  /** Question / answer pairs already answered in this section. */
  answered: Array<[string, string]>;
  total: number;
}
const SECTIONS: Section[] = [
  {
    name: "Fault",
    total: 2,
    answered: [
      ["What is the reported fault?", "Frozen display with blinking red light"],
      ["How many times has it occurred?", "First occurrence"],
    ],
  },
  { name: "Coverage", total: 2, answered: [] },
  { name: "Resolution", total: 2, answered: [] },
];

/** The section picker is a lyra-ui Popover over selectable MenuItems; picking a section shows what has been answered in it. */
export const DecisionTreeCard = ({ o }: CardProps) => {
  const [selected, setSelected] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const section = SECTIONS[selected];
  const answeredTotal = SECTIONS.reduce((n, sec) => n + sec.answered.length, 0);
  const grandTotal = SECTIONS.reduce((n, sec) => n + sec.total, 0);
  const dot = (sec: Section) => (
    <span
      aria-hidden="true"
      className={cn("h-2 w-2 rounded-full", sec.answered.length === sec.total ? "bg-lyra-status-success-strong" : "bg-lyra-border-strong")}
    />
  );
  const count = (sec: Section) => (
    <span className="tabular-nums text-lyra-fg-secondary">
      {sec.answered.length}/{sec.total}
    </span>
  );
  return (
    <C o={o}
      title="Warranty Claim Decision Tree"
      color="blue"
      icon={ic(Workflow)}
      accordion={false}
      footer={<Button>Open</Button>}
      headerEnd={<Count>{answeredTotal}/{grandTotal}</Count>}
    >
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        align="start"
        sideOffset={4}
        bodyPadding={false}
        className="w-[var(--radix-popover-trigger-width)]"
        content={
          <div role="listbox" aria-label="Section" className="p-1">
            {SECTIONS.map((sec, i) => (
              <MenuItem
                key={sec.name}
                itemRole="option"
                aria-selected={i === selected}
                active={i === selected}
                icon={dot(sec)}
                label={sec.name}
                rightElement={count(sec)}
                onClick={() => {
                  setSelected(i);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        }
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Section: ${section.name}`}
          className={cn(
            "flex w-full items-center gap-2 rounded-lyra-md border bg-lyra-bg-surface-base px-3 py-2 text-left",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
            open ? "border-lyra-border-active" : "border-lyra-border-subtle"
          )}
        >
          {dot(section)}
          <span className="flex-1 lyra-body-md-emphasis">{section.name}</span>
          {count(section)}
          <ChevronDown className={cn("h-4 w-4 text-lyra-fg-secondary transition-transform", open && "rotate-180")} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Popover>
      <p className="mt-4">It looks like the client would like to file a warranty claim. Copilot will walk you through each section.</p>
      <p className="mt-6 lyra-body-sm-emphasis uppercase tracking-wide text-lyra-fg-secondary">Answered</p>
      {section.answered.length === 0 ? (
        <p className="mt-3 text-lyra-fg-secondary">No questions answered in this section yet.</p>
      ) : (
        <Stack className="mt-3 gap-3">
          {section.answered.map(([q, a]) => (
            <div key={q} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lyra-status-success-strong" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-lyra-fg-secondary">{q}</p>
                <p className="lyra-body-md-emphasis">{a}</p>
              </div>
            </div>
          ))}
        </Stack>
      )}
    </C>
  );
};

export const ChecklistCard = ({ o }: CardProps) => (
  <C o={o} title="Warranty Claim Checklist" color="neutral" icon={ic(FileCheck)} accordion={false} headerEnd={<Count>0/3</Count>} footer={<Button>Open</Button>}>
    <p>Checklist for what to do when a customer reports a covered hardware fault.</p>
  </C>
);

const CHECKLIST: Array<[string, boolean]> = [
  ["Confirm the fault and coverage window", true],
  ["Verify the frame serial number", false],
  ["Reserve the replacement part", false],
];
/** Checking an item crosses it off; the header count follows the checked items. */
export const ChecklistItemsCard = ({ o }: CardProps) => {
  const [done, setDone] = React.useState(CHECKLIST.map(([, d]) => d));
  const doneCount = done.filter(Boolean).length;
  return (
    <C o={o} title="Warranty Claim Checklist" color="neutral" icon={ic(FileCheck)} accordion={false} headerEnd={<Count>{doneCount}/{CHECKLIST.length}</Count>}>
      <Stack className="gap-3">
        {CHECKLIST.map(([label], i) => (
          <div key={label} className="flex items-center gap-3">
            <Checkbox
              aria-label={label}
              checked={done[i]}
              onCheckedChange={(v) => setDone((list) => list.map((d, k) => (k === i ? v === true : d)))}
            />
            <span className={cn(done[i] && "text-lyra-fg-secondary line-through")}>{label}</span>
          </div>
        ))}
      </Stack>
    </C>
  );
};

export const ChecklistCompleteCard = ({ o }: CardProps) => (
  <C o={o} title="Warranty Claim Checklist Complete" color="green" icon={ic(Check)} accordion={false} headerEnd={<Count>3/3</Count>}>
    Case was completed successfully.
  </C>
);

/* ── Customer info ── */

const INFO: Array<[string, string, boolean?]> = [
  ["Full name", "Emery Wilson"],
  ["Account level", "Premium"],
  ["Balance", "$0.00"],
  ["Date of birth", "03/11/1988"],
  ["Serial", "OT-1000-4471C", true],
];

/** Customer Info, list layout: the Input "label only, horizontal" rows (lyra-ui Label left, read-only value right, Separator under each). */
const CustomerInfoList = () => (
  <div className="flex flex-col gap-3">
    {INFO.map(([label, value, mono]) => (
      <div key={label} className="w-full">
        <div className="flex items-center justify-between gap-3">
          <Label label={label} />
          <span className={cn("lyra-body-md text-lyra-fg-secondary", mono && "font-mono")}>{value}</span>
        </div>
        <Separator className="mt-3" />
      </div>
    ))}
    <Button variant="ghost" className="self-start px-0 text-lyra-fg-link hover:bg-transparent hover:underline">
      Other Information
    </Button>
  </div>
);

/** Customer Info, conversational layout: who the customer is, tags, a written summary of them and of today's issue. */
const CustomerInfoConversational = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <Avatar initials="LT" size="lg" color="green" aria-label="Lucas Thomas" />
      <div className="min-w-0">
        <p className="lyra-body-lg-emphasis text-lyra-fg-default">Lucas Thomas</p>
        <p className="lyra-body-lg text-lyra-fg-secondary">Insider since 2023 · 14 orders</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      <Tag label="Sentiment · Frustrated" variant="warning" shape="pill" />
      <Tag label="Insider" variant="info" shape="pill" />
      <Tag label="Launch edition pre-orders" variant="info" shape="pill" />
      <Tag label="Prefers text" variant="info" shape="pill" />
    </div>
    <p>
      Insider member since 2023 with 14 orders. Pre-orders launch editions and prefers text for updates. Paid by PayPal on 3 of his last 5 orders.
    </p>
    <p>
      Today he tried to buy the Aurora X2 launch edition at $189.00. Card checkout failed twice during payment incident INC-2207, and the pay-another-way link failed too.
    </p>
    <Button variant="ghost" className="self-start px-0 text-lyra-fg-link hover:bg-transparent hover:underline">
      View customer info
    </Button>
  </div>
);

export const CustomerInfoCard = ({ o }: CardProps) => (
  <C o={o} title="Customer Info" color="blue" icon={ic(User)} accordion={false}>
    {o?.customerInfoLayout === "conversational" ? <CustomerInfoConversational /> : <CustomerInfoList />}
  </C>
);

/* ── Schedule ── */

export const ScheduleAppointmentStartCard = ({ o }: CardProps) => (
  <C o={o} title="Schedule Your Appointment" color="blue" icon={ic(CalendarDays)} accordion={false} footer={<Button>Open</Button>}>
    Book an in-home technician visit to swap the tablet under warranty.
  </C>
);

const APPOINTMENT_TYPES = ["Tablet replacement", "Full service", "Diagnostic only"].map((label) => ({ value: label, label }));
const STATES = ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "New York", "Ohio", "Texas", "Washington"].map((name) => ({ value: name, label: name }));

/** The form is all lyra-ui fields: DatePicker, TimePicker, Input and Select. */
export const ScheduleAppointmentCard = ({ o }: CardProps) => {
  const uid = React.useId();
  const [type, setType] = React.useState(APPOINTMENT_TYPES[0].value);
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 2, 1));
  const [time, setTime] = React.useState<Date | undefined>(new Date(2025, 2, 1, 9, 0));
  const [state, setState] = React.useState("Texas");
  return (
    <C o={o} title="Schedule Your Appointment" color="blue" icon={ic(CalendarDays)} accordion={false} footer={<><Button>Submit</Button><Button variant="outline">Cancel</Button></>}>
      <p>Enter the information here to schedule your appointment</p>
      <Stack className="mt-3 gap-4">
        <div>
          <p id={`${uid}-type`} className="mb-1.5 lyra-body-md text-lyra-fg-default">Appointment Type</p>
          <ToggleGroup
            items={APPOINTMENT_TYPES}
            value={type}
            onValueChange={setType}
            ariaLabelledBy={`${uid}-type`}
            fullWidth
          />
        </div>
        <DatePicker label="Select Date" value={date} onChange={setDate} />
        <TimePicker label="Select Time" value={time} onChange={setTime} ampmSelect />
        <Input label="Address" defaultValue="4418 Bardin Road" />
        <div className="grid grid-cols-3 gap-3">
          <Input label="City" defaultValue="Arlington" />
          <Select label="State" options={STATES} value={state} onValueChange={setState} />
          <Input label="Zip" defaultValue="76010" />
        </div>
      </Stack>
    </C>
  );
};

/* ── Copilot rating ── */

export const RateCopilotStartCard = ({ o }: CardProps) => (
  <C o={o} title="Rate Your Copilot Experience" color="yellow" icon={ic(Sparkles)} accordion={false} footer={<Button>Start</Button>}>
    <p>Help us to make your experience better by letting us know which cards you found helpful.</p>
  </C>
);

type Rating = "up" | "down";
const RATED = ["Workflows", "KB Answer"];

/* Literal class strings so Tailwind's scanner finds them. */
const THUMB_PRESSED = {
  success: "bg-lyra-status-success-subtle text-lyra-status-success-strong hover:text-lyra-status-success-strong",
  critical: "bg-lyra-status-critical-subtle text-lyra-status-critical-strong hover:text-lyra-status-critical-strong",
};

/** A thumbs button that toggles: pressed it takes its tone (success for helpful, critical for not helpful) and a filled icon; pressing it again clears it. */
const ThumbToggle = ({ icon: Icon, label, pressed, tone, onPress }: { icon: typeof ThumbsUp; label: string; pressed: boolean; tone: "success" | "critical"; onPress: () => void }) => (
  <Button
    variant="icon"
    size="icon"
    aria-label={label}
    aria-pressed={pressed}
    tooltip
    className={cn(pressed && THUMB_PRESSED[tone])}
    onClick={onPress}
  >
    <Icon className={cn("h-4 w-4", pressed && "fill-current")} strokeWidth={1.5} />
  </Button>
);

/** Each row's thumbs up / down toggle; choosing one clears the other. */
export const RateCopilotCard = ({ o }: CardProps) => {
  const [ratings, setRatings] = React.useState<Record<string, Rating | undefined>>({});
  const toggle = (name: string, value: Rating) =>
    setRatings((r) => ({ ...r, [name]: r[name] === value ? undefined : value }));
  return (
    <C o={o} title="Rate Your Copilot Experience" color="yellow" icon={ic(Sparkles)} accordion={false} footer={<Button>Submit</Button>}>
      <p>Did the Workflows card help you resolve this contact?</p>
      <Stack className="mt-4 gap-2">
        {RATED.map((name) => (
          <div key={name} className={ROW}>
            <span className="flex-1">{name}</span>
            <ThumbToggle icon={ThumbsUp} label={`${name}: helpful`} tone="success" pressed={ratings[name] === "up"} onPress={() => toggle(name, "up")} />
            <ThumbToggle icon={ThumbsDown} label={`${name}: not helpful`} tone="critical" pressed={ratings[name] === "down"} onPress={() => toggle(name, "down")} />
          </div>
        ))}
        <Textarea placeholder="Tell us more (optional)" rows={3} />
      </Stack>
    </C>
  );
};

export const RateCopilotThanksCard = ({ o }: CardProps) => (
  <C o={o} title="Rate Your Copilot Experience" color="green" icon={ic(Check)} accordion={false}>
    Thank you for providing your feedback!
  </C>
);

/** Every card, in the order of the contact details panel screenshots. */
export const ALL_CARDS: Array<[string, React.ComponentType<CardProps>]> = [
  ["Autosummary", AutosummaryCard],
  ["Autosummary Page", AutosummaryPageCard],
  ["Journey Summary", JourneySummaryCard],
  ["Self Service Summary", SelfServiceSummaryCard],
  ["Transfer Summary", TransferSummaryCard],
  ["New - Approval Request", ApprovalRequestCard],
  ["Conversation Topics", ConversationTopicsCard],
  ["Customer Sentiment (Negative)", SentimentNegativeCard],
  ["Customer Sentiment (Neutral)", SentimentNeutralCard],
  ["Customer Sentiment (Positive)", SentimentPositiveCard],
  ["Suggested Questions", SuggestedQuestionsCard],
  ["Warranty Claim Decision Tree", DecisionTreeCard],
  ["Warranty Claim Checklist", ChecklistCard],
  ["Warranty Claim Checklist (items)", ChecklistItemsCard],
  ["Information Needed", InformationNeededCard],
  ["Customer Info Available", CustomerInfoAvailableCard],
  ["Customer Info", CustomerInfoCard],
  ["Schedule Your Appointment (Start)", ScheduleAppointmentStartCard],
  ["Schedule Your Appointment", ScheduleAppointmentCard],
  ["Warranty Claim Checklist Complete", ChecklistCompleteCard],
  ["Rate Your Copilot Experience (Start)", RateCopilotStartCard],
  ["Rate Your Copilot Experience (Rating)", RateCopilotCard],
  ["Rate Your Copilot Experience (Thanks)", RateCopilotThanksCard],
];
