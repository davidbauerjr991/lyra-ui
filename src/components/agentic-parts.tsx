import * as React from "react";
import { CircleAlert, CircleCheck, Circle, CircleX, ExternalLink, FileText, History, Lock } from "lucide-react";
import { cn } from "../lib/utils";
import { Tag, type TagVariant } from "./tag";
import { ProgressBar } from "./progress-bar";
import { ShowMore } from "./show-more";
import { Spinner } from "./spinner";
import { Skeleton } from "./skeleton";
import { Container } from "./container";
import { InlineNotification } from "./inline-notification";
import { MenuItem } from "./menu-item";
import { Link } from "./link";

/* Building blocks for `AgenticAICard` bodies. Each part is presentational and controlled by props only
   (no timers, no internal data), so a card can be driven by whatever state the caller has. Wherever a Lyra
   component already does the job, the part is a thin composition of it (Spinner, Skeleton, ProgressBar,
   Tag, Container, InlineNotification, MenuItem, Link); the process and numbered-step lists are the
   `progress` and `numbered` variants of `AIProcess`. */

type Tone = "critical" | "warning" | "neutral" | "success" | "info";

const TONE_TEXT: Record<Tone, string> = {
  critical: "text-lyra-status-critical-strong",
  warning: "text-lyra-status-warning-strong",
  neutral: "text-lyra-fg-secondary",
  success: "text-lyra-status-success-strong",
  info: "text-lyra-status-info-strong",
};

/* ── WaitingState ── */

export interface WaitingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** What the card is waiting for. */
  message: React.ReactNode;
  /** Number of placeholder lines. Default 3. */
  lines?: number;
}

/** The empty state of a card that has nothing yet: a sentence and `Skeleton` placeholder lines. */
const WaitingState = React.forwardRef<HTMLDivElement, WaitingStateProps>(({ message, lines = 3, className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
    <p className="lyra-body-md text-lyra-fg-secondary">{message}</p>
    <Skeleton lines={lines} />
  </div>
));
WaitingState.displayName = "WaitingState";

/* ── StatusChecklist ── */

export type ChecklistState = "done" | "needs-you" | "failed" | "running" | "todo";

export interface ChecklistItem {
  label: string;
  /** Secondary text on the right ("NR-10871"). */
  detail?: string;
  state: ChecklistState;
  /** A small tag after the label ("Needs you"). */
  tag?: string;
}

export interface StatusChecklistProps extends React.HTMLAttributes<HTMLUListElement> {
  items: ChecklistItem[];
}

const CHECK_ICON: Record<Exclude<ChecklistState, "running">, { Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; tone: string; text: string }> = {
  done: { Icon: CircleCheck, tone: TONE_TEXT.success, text: "Done" },
  "needs-you": { Icon: CircleAlert, tone: TONE_TEXT.warning, text: "Needs you" },
  failed: { Icon: CircleX, tone: TONE_TEXT.critical, text: "Failed" },
  todo: { Icon: Circle, tone: "text-lyra-fg-disabled", text: "To do" },
};

/** What happened and what is stuck: a list of steps, each done, needing the agent, failed, running (a ring `Spinner`) or still to do. */
const StatusChecklist = React.forwardRef<HTMLUListElement, StatusChecklistProps>(({ items, className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
    {items.map((item, i) => (
      <li key={`${item.label}-${i}`} className="flex items-center gap-2 lyra-body-md text-lyra-fg-default">
        {item.state === "running" ? (
          <Spinner variant="ring" size="sm" label="Running" className="shrink-0" />
        ) : (
          (() => {
            const { Icon, tone, text } = CHECK_ICON[item.state];
            return (
              <>
                <Icon className={cn("h-4 w-4 shrink-0", tone)} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">{text}: </span>
              </>
            );
          })()
        )}
        <span className={cn("flex min-w-0 flex-1 items-center gap-2", item.state === "todo" && "text-lyra-fg-secondary")}>
          <span className="truncate">{item.label}</span>
          {item.tag && <Tag label={item.tag} variant={item.state === "failed" ? "critical" : item.state === "needs-you" ? "warning" : "neutral"} shape="pill" />}
        </span>
        {item.detail && <span className="shrink-0 lyra-body-sm text-lyra-fg-secondary">{item.detail}</span>}
      </li>
    ))}
  </ul>
));
StatusChecklist.displayName = "StatusChecklist";

/* ── Meter ── */

export interface MeterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** The fixed set of readings, lowest to highest ("Negative", "Neutral", "Positive"). */
  levels: string[];
  /** The current reading; must be one of `levels`. */
  value: string;
  /** Color of each level, parallel to `levels`. Default for three levels: critical, neutral, success; otherwise all info. */
  tones?: Tone[];
  /** Accessible name for the reading ("Sentiment"). */
  label?: string;
  /**
   * "bars" (default): one separate `ProgressBar` per level with its name centered under it; only the current
   * level's bar is filled. "tags": one `Tag` per level, filling the row (wrapping when it is narrow); the current one takes its color, the others
   * are muted. Use bars for a short scale (three levels), tags for a longer one.
   */
  display?: "bars" | "tags";
}

const TONE_TAG: Record<Tone, TagVariant> = { critical: "critical", warning: "warning", neutral: "neutral", success: "success", info: "info" };
const TONE_BAR: Record<Tone, "default" | "success" | "warning" | "critical" | "neutral"> = {
  critical: "critical",
  warning: "warning",
  neutral: "neutral",
  success: "success",
  info: "default",
};

/** One reading from a fixed set, as separate progress bars or as a row of tags (see `display`). */
const Meter = React.forwardRef<HTMLDivElement, MeterProps>(({ levels, value, tones, label = "Reading", display = "bars", className, ...props }, ref) => {
  const resolved: Tone[] = tones ?? (levels.length === 3 ? ["critical", "neutral", "success"] : levels.map(() => "info" as Tone));
  const active = levels.indexOf(value);
  return (
    // One image for assistive tech: the reading is spoken once, not as a row of separate parts.
    <div
      ref={ref}
      role="img"
      aria-label={`${label}: ${value}`}
      className={cn(display === "bars" ? "grid gap-3" : "flex flex-wrap gap-1.5", className)}
      style={display === "bars" ? { gridTemplateColumns: `repeat(${levels.length}, minmax(0, 1fr))` } : undefined}
      {...props}
    >
      {levels.map((lvl, i) =>
        display === "bars" ? (
          <ProgressBar key={lvl} value={i === active ? 100 : 0} variant={i === active ? TONE_BAR[resolved[i] ?? "info"] : "default"} size="lg" showLabel label={lvl} labelAlign="center" />
        ) : (
          <Tag
            key={lvl}
            label={lvl}
            variant={i === active ? TONE_TAG[resolved[i] ?? "info"] : "neutral"}
            className={cn("flex-1 justify-center whitespace-nowrap", i !== active && "opacity-60")}
          />
        )
      )}
    </div>
  );
});
Meter.displayName = "Meter";

/* ── StreamedText ── */

export interface StreamedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The full text now. Each update replaces the whole text. */
  text: string;
  /** The text before this update. What `text` adds after their shared start is marked for a moment. */
  previous?: string;
  /** Longer text folds behind "Show all" once it passes this many characters. Default 300; 0 never folds. */
  foldAfter?: number;
  /** How long the new part stays marked, in ms. Default 2500. */
  markFor?: number;
}

/** A paragraph that is rewritten as updates arrive. The part that changed is marked briefly; long text folds. */
const StreamedText = React.forwardRef<HTMLDivElement, StreamedTextProps>(({ text, previous, foldAfter = 300, markFor = 2500, className, ...props }, ref) => {
  const id = React.useId();
  const [expanded, setExpanded] = React.useState(false);
  let shared = 0;
  if (previous) {
    const max = Math.min(previous.length, text.length);
    while (shared < max && previous[shared] === text[shared]) shared++;
  }
  const head = previous ? text.slice(0, shared) : text;
  const fresh = previous ? text.slice(shared) : "";
  const [marked, setMarked] = React.useState(Boolean(fresh));
  React.useEffect(() => {
    if (!fresh) return;
    setMarked(true);
    const t = window.setTimeout(() => setMarked(false), markFor);
    return () => window.clearTimeout(t);
  }, [fresh, markFor]);
  const long = foldAfter > 0 && text.length > foldAfter;
  return (
    <div ref={ref} className={cn("flex flex-col items-start gap-1", className)} {...props}>
      <p id={id} aria-live="polite" className={cn("lyra-body-md text-lyra-fg-default", long && !expanded && "line-clamp-4")}>
        {head}
        {fresh && <mark className={cn("rounded-sm px-0.5 text-lyra-fg-default transition-colors duration-700 motion-reduce:transition-none", marked ? "bg-lyra-status-warning-subtle" : "bg-transparent")}>{fresh}</mark>}
      </p>
      {long && (
        <ShowMore label="Show all" openLabel="Show less" textSize="sm" emphasis open={expanded} onOpenChange={setExpanded} />
      )}
    </div>
  );
});
StreamedText.displayName = "StreamedText";

/* ── MemoryList ── */

export interface MemoryListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Where the insights come from ("From Experience Memory"). */
  title: React.ReactNode;
  items: string[];
}

/** Insights from past contacts, in a purple (AI accent) `Container` titled with where they came from. */
const MemoryList = React.forwardRef<HTMLDivElement, MemoryListProps>(({ title, items, className, ...props }, ref) => (
  <Container
    ref={ref}
    variant="purple-subtle"
    radius="lg"
    headerTitle={typeof title === "string" ? title : undefined}
    headerIcon={<History className="h-4 w-4 text-lyra-accent-purple-strong" strokeWidth={1.5} aria-hidden="true" />}
    headerTitleClassName="lyra-body-md-emphasis text-lyra-accent-purple-strong"
    headerClassName="px-4 py-3 pb-0"
    className={className}
    {...props}
  >
    <ul className="flex list-disc flex-col gap-1 px-4 pb-4 pl-9 pt-2 lyra-body-md text-lyra-fg-default marker:text-lyra-accent-purple-strong">
      {items.map((it, i) => (
        <li key={`${it}-${i}`}>{it}</li>
      ))}
    </ul>
  </Container>
));
MemoryList.displayName = "MemoryList";

/* ── PolicyNote ── */

export interface PolicyNoteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** "within": the action is inside the agent's own limit. "outside": it is not. Default "within". */
  tone?: "within" | "outside";
  /** Optional bold first line. */
  heading?: React.ReactNode;
  children: React.ReactNode;
}

/** Says whether an action is inside the agent's own limit, before they press it: an `InlineNotification` (success when within, warning when outside). */
const PolicyNote = React.forwardRef<HTMLDivElement, PolicyNoteProps>(({ tone = "within", heading, children, ...props }, ref) => (
  <InlineNotification ref={ref} variant={tone === "within" ? "success" : "warning"} heading={heading} {...props}>
    {children}
  </InlineNotification>
));
PolicyNote.displayName = "PolicyNote";

/* ── LineItems ── */

export interface LineItem {
  name: string;
  /** Under the name ("NR-10871 · 25 Sep"). */
  detail?: string;
  /** Right-aligned ("$412.00"). */
  amount?: string;
}

export interface LineItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: LineItem[];
}

/** Products, orders and amounts, aligned so they scan quickly: static `MenuItem` rows (name, detail under it, amount at the right) in a neutral `Container`. */
const LineItems = React.forwardRef<HTMLDivElement, LineItemsProps>(({ rows, className, ...props }, ref) => (
  <Container ref={ref} role="list" variant="neutral-subtle" radius="md" className={cn("flex flex-col overflow-hidden", className)} {...props}>
    {rows.map((r, i) => (
      <MenuItem
        key={`${r.name}-${i}`}
        as="div"
        static
        itemRole="listitem"
        comfortable={false}
        divider
        label={<span className="lyra-body-md-emphasis">{r.name}</span>}
        description={r.detail}
        rightElement={r.amount ? <span className="lyra-body-md tabular-nums text-lyra-fg-default">{r.amount}</span> : undefined}
      />
    ))}
  </Container>
));
LineItems.displayName = "LineItems";

/* ── SourceLinks ── */

export interface SourceLink {
  title: string;
  href?: string;
  /** Text of a small tag after the title ("Internal"). */
  tag?: string;
  /** Color of the tag. Default "warning". */
  tagVariant?: TagVariant;
  /** Internal-only: the agent must not share it with the customer. Shorthand for `tag: "Internal"` with a lock. */
  internal?: boolean;
  onClick?: () => void;
}

export interface SourceLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  links: SourceLink[];
}

/** The articles an answer came from: a list of `Link`s, each with an optional `Tag`. */
const SourceLinks = React.forwardRef<HTMLUListElement, SourceLinksProps>(({ links, className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
    {links.map((l, i) => (
      <li key={`${l.title}-${i}`}>
        <Link
          href={l.href}
          target={l.href ? "_blank" : undefined}
          onClick={l.onClick}
          tag={l.tag ?? (l.internal ? "Internal" : undefined)}
          tagVariant={l.tagVariant ?? "warning"}
        >
          <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
          <span className="truncate">{l.title}</span>
          {l.internal && <Lock className="h-3 w-3 shrink-0 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />}
          <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
          {l.href && <span className="sr-only">(opens in a new tab)</span>}
        </Link>
      </li>
    ))}
  </ul>
));
SourceLinks.displayName = "SourceLinks";

export { WaitingState, StatusChecklist, Meter, StreamedText, MemoryList, PolicyNote, LineItems, SourceLinks };
export type { Tone as AgenticTone };
