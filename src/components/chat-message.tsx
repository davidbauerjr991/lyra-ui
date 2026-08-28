import * as React from "react";
import { Copy } from "lucide-react";
import { cn } from "../lib/utils";
import { ActionIconButton } from "./actions";
import { Button } from "./button";
import { Tag, type TagVariant } from "./tag";
import { TagPicker, type TagPickerOption } from "./tag-picker";

/* ── ChatMessage ──
   One customer/agent chat bubble — ported from agent-next-gen-v2's own
   `TranscriptMessageBubble` (agent-next-gen-transcript.tsx), including its
   hover-reveal Copy/"Add tag" toolbar and applied-tags row, with one
   deliberate layout change per explicit request: the timestamp moves from
   its own line inside the bubble (below the message text) up into the
   name row above it, ahead of the name and separated by a dot ("9:51 AM ·
   John Smith") — saves the vertical space that second in-bubble line used
   to take per message, so a transcript full of short messages reads
   noticeably more compact. Same order for both variants (time always
   comes first, name second) regardless of which side the row aligns to.

   The toolbar/tags are opt-in, not hardcoded on: `onCopy` alone shows just
   the Copy button; adding `tagOptions` (+ `onAddTag`/`onRemoveTag`) shows
   the tag picker too; omitting all of them hides the whole toolbar and
   this reads as a plain bubble. `tagOptions` is a real parameter (not a
   fixed list) because the actual tag vocabulary is app-specific business
   data (`QUICK_TAG_OPTIONS` in v2), same "reusable UI in lyra-ui, real
   data in the app" split `InteractionComposer`'s own `quickReplies` prop
   uses. `tagPickerOpen` stays externally controlled (not owned inside this
   component) for the same reason `TagPicker` itself documents: a
   transcript should only ever have one message's picker open at a time,
   which only the caller can coordinate across every `ChatMessage` it
   renders.

   Same avatar treatment as the original: a colored initials circle,
   green for `customer`, primary-blue for `agent`.

   Per a later explicit follow-up request, the bubble is capped to 80% of
   its own rendered container width (`max-w-[80%]`), dropping to full width
   (`max-w-full`) once that same container renders narrower than 768px —
   this superseded an even earlier request that made it always full-width;
   see the width-measurement doc comment below for how the 768px breakpoint
   itself is measured. `narrow` (the avatar-drop escape hatch, see below)
   is a separate, independent breakpoint (400px) — a container can cross
   one threshold without the other.

   Responsive avatar-dropping AND the bubble's own max-width are both
   self-contained rather than something every caller has to wire up: v2's
   original relied on `InteractionTranscript` measuring its OWN container
   via a `ResizeObserver` and threading a `transcriptNarrow` boolean down
   into every bubble it rendered — real application logic a caller had to
   build, and easy to forget for a new one. This component instead runs its
   own `ResizeObserver` on its own root element, tracking that element's
   actual measured width and deriving BOTH breakpoints from the same single
   measurement (400px for the avatar, 768px for the bubble's own max-width)
   — zero wiring required from any caller. `narrow` stays as an optional
   escape hatch for the avatar specifically — pass it explicitly to force
   one state or the other (e.g. a Storybook control, or a caller that
   already knows its own layout and wants to skip a frame of
   auto-measurement); leave it unset (the default) to let this component
   decide for itself. The bubble's own 80%/100% max-width has no equivalent
   override prop — nothing has asked for one yet. */

export interface ChatMessageTag {
  id: string;
  label: string;
  variant: TagVariant;
}

export interface ChatMessageProps {
  /** Which side this message renders on — `customer` left-aligns (green
   *  avatar), `agent` right-aligns (primary-blue avatar, primary-tinted
   *  bubble via `--lyra-color-bg-conversation-user`). */
  variant: "agent" | "customer";
  /** Sender's display name, shown in the header row after the timestamp. */
  name: string;
  /** 1-2 character avatar initials (e.g. "JS"). Ignored while `narrow`. */
  initials: string;
  /** Pre-formatted display timestamp (e.g. "9:51 AM") — this component
   *  doesn't parse/format a real `Date`, same "caller already owns the
   *  string" convention `InteractionNavItem`'s own `elapsed` prop uses. */
  timestamp: string;
  text: string;
  /** Drops the avatar when true. Auto-detected by default (a
   *  `ResizeObserver` on this component's own root element switches this
   *  on below ~400px of ITS OWN rendered width — see this component's own
   *  top doc comment) — pass this explicitly only to override that
   *  detection. The bubble itself is always full-width regardless (see
   *  the top doc comment), so this only ever affects the avatar. */
  narrow?: boolean;
  /** Shows a hover-reveal "Copy message" button next to the bubble, fired
   *  with this message's own `text`. Omit to hide it — and, if
   *  `tagOptions` is also omitted, the whole toolbar row along with it. */
  onCopy?: (text: string) => void;
  /** Every tag this picker can offer — omit to hide the "Add tag" picker
   *  specifically (Copy alone can still show). See this component's own
   *  top doc comment for why this is a parameter, not a fixed list. */
  tagOptions?: TagPickerOption[];
  /** Tags currently applied to this message — rendered as a pill row below
   *  the bubble once non-empty. */
  tags?: ChatMessageTag[];
  /** Controlled open state for THIS message's own tag picker. */
  tagPickerOpen?: boolean;
  onTagPickerOpenChange?: (open: boolean) => void;
  onAddTag?: (option: TagPickerOption) => void;
  onRemoveTag?: (tagId: string) => void;
  /** Hover-reveal "Clear Tags" button at the end of the applied-tags row —
   *  omit to hide just that button (the tags themselves still render, each
   *  still individually removable via its own `Tag`'s `onRemove`). */
  onClearTags?: () => void;
  className?: string;
}

/** Below this width (of `ChatMessage`'s own rendered root element), the
 *  avatar auto-drops — matches v2's original `transcriptNarrow` threshold
 *  (`InteractionTranscript`'s own `ResizeObserver`, measuring the whole
 *  transcript rather than one bubble at a time). */
const AUTO_NARROW_THRESHOLD_PX = 400;

/** Below this width (of the SAME rendered root element the avatar
 *  breakpoint above measures), the bubble's own max-width switches from
 *  80% of its container to the full 100% — per explicit request. An
 *  independent threshold from `AUTO_NARROW_THRESHOLD_PX`: at, say, 500px
 *  the bubble is already full-width here while the avatar is still
 *  showing. */
const FULL_WIDTH_BUBBLE_THRESHOLD_PX = 768;

export function ChatMessage({
  variant,
  name,
  initials,
  timestamp,
  text,
  narrow,
  onCopy,
  tagOptions,
  tags,
  tagPickerOpen = false,
  onTagPickerOpenChange,
  onAddTag,
  onRemoveTag,
  onClearTags,
  className,
}: ChatMessageProps) {
  const isCustomer = variant === "customer";
  const showTagPicker = !!tagOptions && !!onAddTag && !!onRemoveTag;
  const showToolbar = !!onCopy || showTagPicker;

  // Self-measured fallback for `narrow`, AND the source for the bubble's
  // own 80%/100% max-width breakpoint below — see this component's own top
  // doc comment for why this replaced requiring every caller to run its
  // own `ResizeObserver` and thread the result in. `narrow` (when
  // explicitly passed) always wins over the avatar half of this;
  // `ResizeObserver` itself is unavailable only in non-browser test/SSR
  // environments, where `measuredWidth` just stays `null` — the bubble
  // falls back to the wider (80%-capped) state and the avatar to its
  // `false` default (shown) rather than throwing.
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = React.useState<number | null>(null);
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? el.getBoundingClientRect().width;
      setMeasuredWidth(width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const effectiveNarrow = narrow ?? (measuredWidth !== null && measuredWidth < AUTO_NARROW_THRESHOLD_PX);
  const bubbleFullWidth = measuredWidth !== null && measuredWidth < FULL_WIDTH_BUBBLE_THRESHOLD_PX;

  return (
    <div ref={rootRef} className={cn("flex flex-col", isCustomer ? "items-start" : "items-end", className)}>
      <div
        className={cn(
          "flex items-start gap-2",
          bubbleFullWidth ? "max-w-full" : "max-w-[80%]",
          isCustomer ? "flex-row" : "flex-row-reverse"
        )}
      >
        {!effectiveNarrow && (
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full lyra-body-sm-emphasis",
              isCustomer
                ? "bg-lyra-accent-green-soft text-lyra-accent-green-strong"
                : "bg-lyra-bg-primary text-lyra-fg-on-primary"
            )}
            aria-hidden="true"
          >
            {initials}
          </span>
        )}
        <div className="flex min-w-0 flex-col gap-1">
          <span className={cn("lyra-body-sm text-lyra-fg-secondary px-1", !isCustomer && "text-right")}>
            {timestamp} <span aria-hidden="true">·</span> {name}
          </span>
          <div className={cn("group flex items-end gap-1.5", isCustomer ? "flex-row" : "flex-row-reverse")}>
            <div
              className={cn(
                "rounded-lyra-lg px-4 py-3 border border-transparent",
                isCustomer ? "rounded-tl-none bg-lyra-state-hover" : "rounded-tr-none"
              )}
              style={!isCustomer ? { backgroundColor: "var(--lyra-color-bg-conversation-user)" } : undefined}
            >
              <p className="lyra-body-md text-lyra-fg-default">{text}</p>
            </div>
            {/* Copy / Add tag — hidden until the bubble row is hovered
                (or focused, or the tag picker is open — see below), same
                treatment `TranscriptMessageBubble`'s own toolbar uses. */}
            {showToolbar && (
              <div
                className={cn(
                  "mb-0.5 flex shrink-0 items-center gap-0.5 pointer-events-none opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                  tagPickerOpen && "pointer-events-auto opacity-100"
                )}
              >
                {onCopy && (
                  <ActionIconButton size="sm" title="Copy message" onClick={() => onCopy(text)}>
                    <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </ActionIconButton>
                )}
                {showTagPicker && (
                  <TagPicker
                    options={tagOptions!}
                    appliedLabels={tags?.map((t) => t.label) ?? []}
                    open={tagPickerOpen}
                    onOpenChange={onTagPickerOpenChange ?? (() => {})}
                    onSelect={onAddTag!}
                    onDeselect={(label) => {
                      const tag = tags?.find((t) => t.label === label);
                      if (tag) onRemoveTag!(tag.id);
                    }}
                  />
                )}
              </div>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div
              className={cn(
                "group/tags mt-1 flex flex-wrap items-center gap-2",
                isCustomer ? "flex-row" : "flex-row-reverse"
              )}
            >
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  label={tag.label}
                  variant={tag.variant}
                  shape="pill"
                  onRemove={onRemoveTag ? () => onRemoveTag(tag.id) : undefined}
                />
              ))}
              {onClearTags && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 transition-opacity group-hover/tags:opacity-100 group-focus-within/tags:opacity-100"
                  onClick={onClearTags}
                >
                  Clear Tags
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
