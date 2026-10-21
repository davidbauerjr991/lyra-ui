import * as React from "react";
import {
  Bot,
  Check,
  Circle,
  CircleAlert,
  CircleCheck,
  CirclePlay,
  CircleX,
  Clock,
  CornerDownLeft,
  CornerDownRight,
  Database,
  Lock,
  MessageCircleQuestion,
  MessageSquareQuote,
  Pencil,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Accordion } from "./accordion";
import { Button } from "./button";
import { Container } from "./container";
import { Spinner } from "./spinner";
import { Tag, type TagVariant } from "./tag";
import { Tooltip } from "./tooltip";

/* Phase 3 building blocks for `AgenticAICard` bodies: the form-capture parts (ProgressRing, SectionDial,
   AIField, AIFieldSection, SuggestedQuestion), the task parts (TaskBoard, ActionGroup, StageTrail) and the
   suggestion parts (SuggestionTag, SuggestedReply, Alternatives). Like the phase 1–2 parts they are
   presentational and driven by props only: no timers, no internal data. Wherever a Lyra component already does
   the job they compose it (Accordion, Button, Spinner, Tag, Tooltip). */

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

/* ── ProgressRing ── */

export interface ProgressRingProps extends Omit<React.SVGProps<SVGSVGElement>, "ref" | "children"> {
  /** How many are done. */
  value: number;
  /** Out of how many. */
  of: number;
  /** Diameter in px. Default 18. Rings over 30px get a thicker stroke. */
  size?: number;
}

/** A small circular progress mark: the primary color while in progress, success once `value` reaches `of`. Decorative; say the numbers in text beside it. */
const ProgressRing = ({ value, of, size = 18, className, ...props }: ProgressRingProps) => {
  const stroke = size > 30 ? 5 : 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = of > 0 ? Math.min(1, value / of) : 0;
  const m = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className={cn("shrink-0", className)} {...props}>
      <circle cx={m} cy={m} r={r} fill="none" strokeWidth={stroke} className="stroke-lyra-border-subtle" />
      <circle
        cx={m}
        cy={m}
        r={r}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c.toFixed(2)}
        strokeDashoffset={(c * (1 - p)).toFixed(2)}
        transform={`rotate(-90 ${m} ${m})`}
        className={cn("transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none", p >= 1 ? "stroke-lyra-status-success-strong" : "stroke-lyra-bg-primary")}
      />
    </svg>
  );
};
ProgressRing.displayName = "ProgressRing";

/* ── SectionDial ── */

export interface SectionDialProps extends Omit<React.HTMLAttributes<HTMLElement>, "onClick"> {
  /** The form section's name. */
  name: string;
  /** How many of its fields have a value. */
  filled: number;
  /** How many fields it has. */
  of: number;
  /** The conversation just opened this section: tinted to mark it. */
  opened?: boolean;
  /** Makes the dial a button (to jump to the section). */
  onClick?: () => void;
}

/** Progress for one form section: a ring, the section name and "filled/of". Green once complete; tinted when the conversation just opened the section. */
const SectionDial = React.forwardRef<HTMLElement, SectionDialProps>(({ name, filled, of, opened, onClick, className, ...props }, ref) => {
  const full = filled >= of;
  const cls = cn(
    "inline-flex h-7 items-center gap-1.5 rounded-lyra-round border pl-1.5 pr-2.5 lyra-body-sm",
    full
      ? "border-lyra-status-success-medium bg-lyra-status-success-subtle text-lyra-status-success-strong"
      : opened
        ? "border-lyra-border-active bg-lyra-bg-active-subtle text-lyra-fg-default"
        : "border-lyra-border-subtle bg-lyra-bg-surface-base text-lyra-fg-secondary",
    onClick && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
    className
  );
  const inner = (
    <>
      <ProgressRing value={filled} of={of} />
      <span>
        {name} · {filled}/{of}
      </span>
      {opened && <span className="sr-only"> (opened by the conversation)</span>}
    </>
  );
  return onClick ? (
    <button ref={ref as React.Ref<HTMLButtonElement>} type="button" onClick={onClick} className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  ) : (
    <span ref={ref as React.Ref<HTMLSpanElement>} className={cls} {...props}>
      {inner}
    </span>
  );
});
SectionDial.displayName = "SectionDial";

/* ── SuggestedQuestion ── */

export interface SuggestedQuestionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** The field it would fill ("Preferred slot"). */
  field: string;
  /** What to ask. */
  question: string;
  /** Called by the "Insert into reply" button. Omit to hide the button. */
  onInsert?: () => void;
  /** Text of the insert button. Default "Insert into reply". */
  insertLabel?: string;
}

/** For a required field that is still empty: the question to ask, ready to put into the reply. */
const SuggestedQuestion = React.forwardRef<HTMLDivElement, SuggestedQuestionProps>(({ field, question, onInsert, insertLabel = "Insert into reply", className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5 rounded-lyra-md border border-dashed border-lyra-border-active bg-lyra-bg-active-subtle px-2.5 py-2", className)} {...props}>
    <span className="inline-flex items-center gap-1.5 lyra-body-sm-emphasis text-lyra-fg-active-strong">
      <MessageCircleQuestion className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      Ask to fill {field}
    </span>
    <p className="lyra-body-md text-lyra-fg-default">{question}</p>
    {onInsert && (
      <Button variant="outline" size="sm" className="self-start" onClick={onInsert}>
        <CornerDownLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        {insertLabel}
      </Button>
    )}
  </div>
));
SuggestedQuestion.displayName = "SuggestedQuestion";

/* ── AIField ── */

/** Where a field's value came from. */
export type FieldSource = "conversation" | "self-service" | "lookup" | "agent";

const FIELD_SOURCE: Record<FieldSource, { Icon: IconType; label: string; ai: boolean }> = {
  conversation: { Icon: Sparkles, label: "From the conversation", ai: true },
  "self-service": { Icon: Bot, label: "From self-service", ai: false },
  lookup: { Icon: Database, label: "From the order system", ai: false },
  agent: { Icon: Pencil, label: "Typed by you", ai: false },
};

export interface AIFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** The field's name ("Symptom"). */
  label: string;
  /** The captured value. Leave out while the field is still empty. */
  value?: React.ReactNode;
  /** Where the value came from; shown as a small icon at the end of the row. */
  source?: FieldSource;
  /** The customer's own words the value was taken from; shown with the source on hover and focus. */
  quote?: string;
  /** The value is sensitive: shows a lock, because it is masked and never filled in automatically. */
  sensitive?: boolean;
  /** An empty required field gets a red asterisk. Default true. */
  required?: boolean;
  /** The value arrived just now: tinted until the caller clears it. */
  fresh?: boolean;
  /** What to ask to fill an empty field. Shows a `SuggestedQuestion` under the row. */
  question?: string;
  /** Called by the suggested question's insert button. */
  onInsertQuestion?: () => void;
}

/** A form field that says where its answer came from: the conversation, self-service, a lookup or the agent. Always editable by the caller (put your own input in `value`). */
const AIField = React.forwardRef<HTMLDivElement, AIFieldProps>(
  ({ label, value, source, quote, sensitive, required = true, fresh, question, onInsertQuestion, className, ...props }, ref) => {
    const empty = value === undefined || value === null || value === "";
    const src = source ? FIELD_SOURCE[source] : undefined;
    const srcText = src ? `${src.label}${quote ? `: “${quote}”` : ""}` : "";
    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        <div className={cn("grid grid-cols-[minmax(0,40%)_1fr_auto] items-center gap-2 px-2.5 py-2 lyra-body-md transition-colors duration-700 motion-reduce:transition-none", fresh && "bg-lyra-status-warning-subtle")}>
          <span className="text-lyra-fg-secondary">
            {label}
            {empty && required && (
              <span aria-hidden="true" className="text-lyra-status-critical-strong">
                {" "}
                *
              </span>
            )}
          </span>
          <span className={cn("min-w-0 break-words", empty ? "italic text-lyra-fg-disabled" : "lyra-body-md-emphasis text-lyra-fg-default")}>
            {empty ? (
              <>
                Not captured yet
                {required && <span className="sr-only"> (required)</span>}
              </>
            ) : (
              <>
                {value}
                {sensitive && (
                  <span className="ml-1 inline-flex align-middle text-lyra-fg-secondary" title="Sensitive · masked, never auto-filled">
                    <Lock className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                    <span className="sr-only">Sensitive, masked</span>
                  </span>
                )}
              </>
            )}
          </span>
          {!empty && src ? (
            <Tooltip content={srcText} placement="left">
              <span
                tabIndex={0}
                role="img"
                aria-label={srcText}
                className={cn(
                  "grid h-[22px] w-[22px] cursor-help place-items-center rounded-lyra-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
                  src.ai ? "bg-lyra-accent-purple-soft text-lyra-accent-purple-strong" : "bg-lyra-bg-surface-container-subtle text-lyra-fg-secondary"
                )}
              >
                <src.Icon className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Tooltip>
          ) : (
            <span />
          )}
        </div>
        {empty && question && <SuggestedQuestion field={label} question={question} onInsert={onInsertQuestion} className="mx-2.5 mb-2.5" />}
      </div>
    );
  }
);
AIField.displayName = "AIField";

/* ── AIFieldSection ── */

export interface AIFieldSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onChange"> {
  /** The section's name ("Damage details"). */
  name: string;
  /** How many of its fields have a value. */
  filled: number;
  /** How many fields it has. */
  of: number;
  /** Why the conversation opened it ("Opened because Jordan mentioned a crack"). */
  why?: React.ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Initial open state when uncontrolled. Default true. */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** `AIField`s. */
  children?: React.ReactNode;
}

/** A form section you can fold: a ring, the name and "filled/of" in the header, then its `AIField`s. Built on `Accordion`. */
const AIFieldSection = React.forwardRef<HTMLDivElement, AIFieldSectionProps>(({ name, filled, of, why, open, defaultOpen = true, onOpenChange, className, children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    <Accordion
      variant="contained"
      density="compact"
      radius="md"
      items={[
        {
          id: "section",
          title: <span className="lyra-body-md-emphasis">{name}</span>,
          icon: <ProgressRing value={filled} of={of} />,
          endSlot: (
            <span className="lyra-body-sm text-lyra-fg-secondary">
              <span className="sr-only">{filled} of {of} filled</span>
              <span aria-hidden="true">
                {filled}/{of}
              </span>
            </span>
          ),
          headerClassName: "bg-lyra-bg-surface-container-subtle",
          contentClassName: "p-0",
          content: (
            <div className="flex flex-col divide-y divide-lyra-border-subtle">
              {why && (
                <p className="flex items-center gap-1.5 px-2.5 pt-2 pb-1 lyra-body-sm text-lyra-fg-active-strong">
                  <Sparkles className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {why}
                </p>
              )}
              {children}
            </div>
          ),
        },
      ]}
      {...(open !== undefined ? { value: open ? "section" : "" } : { defaultValue: defaultOpen ? "section" : undefined })}
      onValueChange={(v) => onOpenChange?.(v === "section")}
    />
  </div>
));
AIFieldSection.displayName = "AIFieldSection";

/* ── TaskBoard ── */

/**
 * - `done`: finished (shows its `output`)
 * - `running`: working now (a ring `Spinner`)
 * - `failed`: did not finish (critical row, with its `error` and an optional Retry)
 * - `waiting`: cannot start yet: it needs an input or another task
 * - `queued`: will run when the agent approves
 * - `ready`: has everything it needs; runs on approval
 */
export type TaskState = "done" | "running" | "failed" | "waiting" | "queued" | "ready";

export interface TaskItem {
  id: string;
  /** The task's name ("Raise replacement claim"). */
  name: string;
  /** The flow that runs it, under the name ("Warranty check › Raise a claim"). */
  flow?: string;
  state: TaskState;
  /** What a finished task produced ("WC-88214"). Shown at the end of the row when `done`. */
  output?: string;
  /** Replaces `flow` under the name ("Waiting on: Photo"). */
  note?: string;
  /** What went wrong, when `failed`. Replaces `flow` and `note`. */
  error?: string;
  /** The name of the task this one waits for. Shown as "Waits for …" while `waiting` or `queued`. */
  after?: string;
  /** Shows a Retry button when `failed`. */
  onRetry?: () => void;
}

const TASK_ICON: Record<Exclude<TaskState, "running">, { Icon: IconType; tone: string; text: string }> = {
  done: { Icon: CircleCheck, tone: "text-lyra-status-success-strong", text: "Done" },
  failed: { Icon: CircleX, tone: "text-lyra-status-critical-strong", text: "Failed" },
  waiting: { Icon: Clock, tone: "text-lyra-fg-disabled", text: "Waiting" },
  queued: { Icon: Circle, tone: "text-lyra-fg-disabled", text: "Queued" },
  ready: { Icon: CirclePlay, tone: "text-lyra-status-info-strong", text: "Ready" },
};

export interface TaskBoardProps extends React.HTMLAttributes<HTMLUListElement> {
  tasks: TaskItem[];
}

/** Flows running in parallel, each with its state and output. Waits are shown; failures can be retried. */
const TaskBoard = React.forwardRef<HTMLUListElement, TaskBoardProps>(({ tasks, className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-col divide-y divide-lyra-border-subtle overflow-hidden rounded-lyra-md border border-lyra-border-subtle", className)} {...props}>
    {tasks.map((t) => (
      <li key={t.id} className={cn("grid grid-cols-[20px_1fr_auto] items-start gap-x-2.5 gap-y-0.5 px-2.5 py-2.5", t.state === "failed" && "bg-lyra-status-critical-subtle")}>
        <span className="mt-0.5 grid h-5 w-5 place-items-center">
          {t.state === "running" ? (
            <Spinner variant="ring" size="sm" label="Running" />
          ) : (
            (() => {
              const { Icon, tone, text } = TASK_ICON[t.state];
              return (
                <>
                  <Icon className={cn("h-4 w-4", tone)} strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">{text}: </span>
                </>
              );
            })()
          )}
        </span>
        <span className="lyra-body-md text-lyra-fg-default">{t.name}</span>
        <span className="whitespace-nowrap text-right font-mono lyra-body-sm-emphasis text-lyra-fg-secondary">{t.state === "done" ? t.output : ""}</span>
        {(t.error || t.note || t.flow) && (
          <span className={cn("col-start-2 lyra-body-sm", t.state === "failed" ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary")}>{t.error ?? t.note ?? t.flow}</span>
        )}
        {t.after && (t.state === "waiting" || t.state === "queued") && (
          <span className="col-start-2 inline-flex items-center gap-1 lyra-body-xs text-lyra-fg-secondary">
            <CornerDownRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
            Waits for {t.after}
          </span>
        )}
        {t.state === "failed" && t.onRetry && (
          <Button variant="outline" size="sm" className="col-start-2 mt-1 justify-self-start" onClick={t.onRetry}>
            Retry
          </Button>
        )}
      </li>
    ))}
  </ul>
));
TaskBoard.displayName = "TaskBoard";

/* ── ActionGroup ── */

export interface ActionConfig {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ActionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main action ("Approve and run 4 tasks"). Fills the row. */
  primary: ActionConfig;
  /** The other choice ("Decline", "Edit answers"). */
  secondary?: ActionConfig;
}

/** The choice the agent has to make: a primary action that fills the row and an optional secondary one. The card shows what happens next. */
const ActionGroup = React.forwardRef<HTMLDivElement, ActionGroupProps>(({ primary, secondary, className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
    <Button className="flex-1" onClick={primary.onClick} disabled={primary.disabled}>
      {primary.icon}
      {primary.label}
    </Button>
    {secondary && (
      <Button variant="outline" onClick={secondary.onClick} disabled={secondary.disabled}>
        {secondary.icon}
        {secondary.label}
      </Button>
    )}
  </div>
));
ActionGroup.displayName = "ActionGroup";

/* ── StageTrail ── */

export interface StageTrailProps extends React.HTMLAttributes<HTMLOListElement> {
  /** The stages in order ("Capture", "Review", "Run"). */
  stages: string[];
  /** Index of the stage in progress. Earlier ones show as done. */
  current: number;
}

/** Where a multi-step job is: done stages get a check, the current one is bold, the rest are muted. */
const StageTrail = React.forwardRef<HTMLOListElement, StageTrailProps>(({ stages, current, className, ...props }, ref) => (
  <ol ref={ref} className={cn("flex items-center gap-1.5 lyra-body-sm", className)} {...props}>
    {stages.map((s, i) => (
      <React.Fragment key={s}>
        {i > 0 && <li aria-hidden="true" className="h-px w-3.5 bg-lyra-border-soft" />}
        <li
          aria-current={i === current ? "step" : undefined}
          className={cn("inline-flex items-center gap-1", i < current ? "text-lyra-status-success-strong" : i === current ? "lyra-body-sm-emphasis text-lyra-fg-active-strong" : "text-lyra-fg-secondary")}
        >
          {i < current && <Check className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />}
          {s}
          {i < current && <span className="sr-only"> (done)</span>}
        </li>
      </React.Fragment>
    ))}
  </ol>
));
StageTrail.displayName = "StageTrail";

/* ── SuggestionTag ── */

/** What a suggestion asks of the agent: say something, ask something, or do something (run a flow). */
export type SuggestionType = "say" | "ask" | "do";

const SUGGESTION: Record<SuggestionType, { label: string; variant: TagVariant; Icon: IconType }> = {
  say: { label: "Say", variant: "purple", Icon: MessageSquareQuote },
  ask: { label: "Ask", variant: "teal", Icon: MessageCircleQuestion },
  do: { label: "Do", variant: "warning", Icon: Zap },
};

/** The Say / Ask / Do pill on a suggestion. */
const SuggestionTag = ({ type }: { type: SuggestionType }) => {
  const { label, variant, Icon } = SUGGESTION[type];
  return <Tag label={label} variant={variant} shape="pill" className="w-fit" icon={<Icon className="h-3 w-3" strokeWidth={1.5} />} />;
};
SuggestionTag.displayName = "SuggestionTag";

/* ── SuggestedReply ── */

/** The words to say or ask, ready to put into the reply: an info `Container` with a left accent bar and no other border. */
const SuggestedReply = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <Container
    ref={ref}
    variant="info-none"
    radius="md"
    borders="none"
    accent="left"
    role="note"
    className={cn("px-3 py-2.5 lyra-body-md text-lyra-fg-default", className)}
    {...props}
  />
));
SuggestedReply.displayName = "SuggestedReply";

/* ── Alternatives ── */

export interface Alternative {
  type: SuggestionType;
  /** What the alternative is ("Confirm the serial number"). */
  text: string;
  /** Called by its "Use" button. */
  onUse?: () => void;
}

export interface AlternativesProps extends React.HTMLAttributes<HTMLDivElement> {
  alternatives: Alternative[];
  /** Caption above the list. Default "Also consider". */
  label?: string;
}

/** Other suggestions the agent could use instead, each with its type and a Use button. */
const Alternatives = React.forwardRef<HTMLDivElement, AlternativesProps>(({ alternatives, label = "Also consider", className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props}>
    <span className="lyra-body-sm-emphasis text-lyra-fg-secondary">{label}</span>
    <ul className="flex flex-col gap-1.5">
      {alternatives.map((a, i) => (
        <li key={`${a.text}-${i}`} className="flex items-center gap-2 rounded-lyra-md border border-lyra-border-subtle px-2 py-1.5">
          <SuggestionTag type={a.type} />
          <span className="min-w-0 flex-1 lyra-body-sm text-lyra-fg-default">{a.text}</span>
          <Button variant="ghost" size="sm" onClick={a.onUse}>
            Use
          </Button>
        </li>
      ))}
    </ul>
  </div>
));
Alternatives.displayName = "Alternatives";

export { ProgressRing, SectionDial, SuggestedQuestion, AIField, AIFieldSection, TaskBoard, ActionGroup, StageTrail, SuggestionTag, SuggestedReply, Alternatives };
