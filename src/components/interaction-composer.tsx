import * as React from "react";
import { Paperclip, Bold, Italic, Smile, Zap, FileText, Send, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Textarea } from "./textarea";
import { ActionIconButton } from "./actions";
import { Button } from "./button";
import { QuickReplyMenu, type QuickReplyMenuItem } from "./quick-reply-menu";
import { QuickReplyVariableForm, type QuickReplyField } from "./quick-reply-variable-form";

/* ── InteractionComposer ──
   Ported from agent-next-gen-v2's own `InteractionComposer`
   (agent-next-gen-transcript.tsx) — the message-input bar fixed to the
   bottom of an active interaction's detail page. Meant to be rendered as a
   `shrink-0` sibling AFTER the scrollable transcript above it (in the same
   flex column), not inside it, so it never scrolls away.

   Composed entirely from existing lyra-ui exports (`Textarea`, `Button`,
   `ActionIconButton`, `QuickReplyMenu`, `QuickReplyVariableForm`) — no new
   primitives needed. The "Send ▾" control is hand-built from two adjacent
   `Button`s (rounded-r-none / rounded-l-none, a hairline divider between)
   since lyra-ui has no dedicated split-button component, same as v2's own
   reference. That trailing chevron ("More send options") is deliberately
   left unwired here too (`onSendOptionsClick`, if passed, is the only way
   it does anything) — v2's own current implementation doesn't wire it to a
   real menu either; it exists as a visual affordance for a future one.

   `quickReplies` is the one genuinely optional piece: v2's own canned-
   response list (`QUICK_REPLIES`) is app-specific business content, not
   something this library should hardcode — see this component's own
   `quickReplies` doc comment below. Passed a non-empty list, this renders
   the exact same "/trigger" picker v2 has (typing `/` followed by a run of
   word characters opens `QuickReplyMenu`, filtered live; picking a `rich`
   item swaps to `QuickReplyVariableForm` to fill its `{token}`s before
   inserting); the "Quick replies" toolbar button opens the same picker,
   unfiltered, at the current caret. Left empty (the default), the "/"
   trigger and toolbar button are simply inert — a consumer that doesn't
   have canned-response data yet still gets a fully working plain composer.

   The other five toolbar buttons (Attach/Bold/Italic/Emoji/Templates) are
   plain optional callback slots — matching v2's OWN current state, where
   none of those five are wired to real behavior yet either (only "Quick
   replies" is). Each renders as a real, tooltipped `ActionIconButton`
   regardless of whether a handler is passed, so this reads as the same
   toolbar row whether or not a consumer has hooked anything up. */

export interface InteractionComposerQuickReplyField extends QuickReplyField {}

/** One canned response the "/trigger" picker can insert — same shape as
 *  v2's own app-local `QuickReplyItem` (agent-next-gen-transcript.tsx),
 *  just re-exported here since the picker mechanics themselves now live in
 *  this component. A plain item's `template` is inserted verbatim; a
 *  `rich` item's `template` may contain `{key}` tokens matching
 *  `fields[].key`, filled in via `QuickReplyVariableForm` before
 *  insertion — see `fillQuickReplyTemplate` below for the token
 *  substitution itself. */
export interface InteractionComposerQuickReplyItem {
  /** The id typed after `QUICK_REPLY_TRIGGER_CHAR` to reach this item. */
  id: string;
  title: string;
  template: string;
  rich?: boolean;
  fields?: InteractionComposerQuickReplyField[];
}

export const QUICK_REPLY_TRIGGER_CHAR = "/";
const QUICK_REPLY_TRIGGER_PATTERN = /\/(\w*)$/;

function quickReplyFieldDisplayValue(
  field: InteractionComposerQuickReplyField,
  raw: string | Date | undefined
): string {
  if (raw instanceof Date) {
    return field.type === "time"
      ? raw.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      : raw.toLocaleDateString();
  }
  if (typeof raw === "string" && raw.trim()) return raw;
  return `{${field.key}}`;
}

/** Fills a `rich` item's `template` from its current field values —
 *  `bracket` wraps each filled-in value in `[...]` for the live preview
 *  shown while still editing (e.g. "Please allow [1–2] business days...");
 *  the final text actually inserted into the composer (`bracket: false`)
 *  has no brackets. Plain (non-`rich`) items never reach this — their
 *  `template` has no fields/tokens to fill and is used as-is. Exported so
 *  a consumer building its own `quickReplies` data can preview the same
 *  way this component does internally, without duplicating the logic. */
export function fillQuickReplyTemplate(
  item: InteractionComposerQuickReplyItem,
  values: Record<string, string | Date | undefined>,
  bracket: boolean
): string {
  if (!item.fields) return item.template;
  return item.fields.reduce((text, field) => {
    const display = quickReplyFieldDisplayValue(field, values[field.key]);
    const shown = bracket && display !== `{${field.key}}` ? `[${display}]` : display;
    return text.split(`{${field.key}}`).join(shown);
  }, item.template);
}

export interface InteractionComposerProps {
  /** Textarea label — default matches v2's own reference exactly. */
  label?: string;
  placeholder?: string;
  /** Fired with the message text (untrimmed) when the agent sends — Enter,
   *  or the Send button — and disabled while it's empty/whitespace-only.
   *  This component owns nothing but the input's own text; it doesn't know
   *  or care what happens to a message once sent (push it into a
   *  transcript, fire a simulated reply, etc. is entirely the consumer's
   *  job). Clears the textarea afterward. */
  onSend: (text: string) => void;
  /** Canned responses for the "/trigger" picker — see this component's own
   *  top doc comment. Omit (or pass an empty array) for a plain composer
   *  with no quick-reply picker at all; the "Quick replies" toolbar button
   *  is disabled in that case rather than opening an empty menu. */
  quickReplies?: InteractionComposerQuickReplyItem[];
  onAttach?: () => void;
  onBold?: () => void;
  onItalic?: () => void;
  onEmoji?: () => void;
  onTemplates?: () => void;
  /** Fired by the split-button's trailing chevron ("More send options") —
   *  see this component's own top doc comment for why this is left
   *  optional/unwired by default, matching v2's own current state. */
  onSendOptionsClick?: () => void;
  className?: string;
}

export function InteractionComposer({
  label = "Chat with Customer",
  placeholder = "Type a message... or / for quick replies",
  onSend,
  quickReplies = [],
  onAttach,
  onBold,
  onItalic,
  onEmoji,
  onTemplates,
  onSendOptionsClick,
  className,
}: InteractionComposerProps) {
  const [message, setMessage] = React.useState("");
  const canSend = message.trim().length > 0;
  const hasQuickReplies = quickReplies.length > 0;
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  // Per v2: tabbing out of the message textarea should land on the Send
  // button first — not the toolbar's Attach/Bold/Italic/etc. icon buttons,
  // which sit BEFORE Send in visual/DOM order (see the render below) and so
  // would otherwise be next in line for a plain, un-messed-with browser Tab
  // order. `handleComposerKeyDown` intercepts Tab on the textarea itself
  // and focuses this directly instead of letting the browser's default
  // order run.
  const sendButtonRef = React.useRef<HTMLButtonElement>(null);

  // ── Quick-reply picker state ──
  // `quickReplyTriggerStart` is the message-text index the eventually-
  // inserted text replaces through to the caret at insert time — either
  // where the typed trigger character itself sits (so "/time" gets
  // replaced outright), or the bare caret position when opened via the
  // toolbar button instead (nothing typed to replace, a pure insert at
  // that point). `null` means closed.
  const [quickReplyTriggerStart, setQuickReplyTriggerStart] = React.useState<number | null>(null);
  const [quickReplyQuery, setQuickReplyQuery] = React.useState("");
  const [quickReplyActiveIndex, setQuickReplyActiveIndex] = React.useState(0);
  // Non-null while showing `QuickReplyVariableForm` for a `rich` item
  // instead of the plain matching list — same overlay slot, different
  // content (see the render below).
  const [quickReplyConfiguring, setQuickReplyConfiguring] = React.useState<InteractionComposerQuickReplyItem | null>(null);
  const [quickReplyFieldValues, setQuickReplyFieldValues] = React.useState<Record<string, string | Date | undefined>>({});
  const quickReplyOpen = quickReplyTriggerStart !== null;
  const quickReplyContainerRef = React.useRef<HTMLDivElement>(null);

  const quickReplyMatches = React.useMemo(() => {
    const q = quickReplyQuery.trim().toLowerCase();
    if (!q) return quickReplies;
    return quickReplies.filter(
      (item) => item.id.toLowerCase().includes(q) || item.title.toLowerCase().includes(q)
    );
  }, [quickReplies, quickReplyQuery]);

  const closeQuickReplyMenu = () => {
    setQuickReplyTriggerStart(null);
    setQuickReplyQuery("");
    setQuickReplyActiveIndex(0);
    setQuickReplyConfiguring(null);
    setQuickReplyFieldValues({});
  };

  // Dismiss on outside click — this menu is a plain absolutely/normal-flow
  // positioned overlay, not a `Popover`: the `Textarea` itself must keep
  // focus/caret while browsing, which rules out a focus-trapping Radix
  // popover. `mousedown` (not `click`) so this fires before a menu-row's
  // own `onClick`. The `[data-radix-popper-content-wrapper]` check covers
  // `QuickReplyVariableForm`'s own `Select`/`DatePicker`/`TimePicker`
  // fields, which Radix always portals straight to `document.body`,
  // outside `quickReplyContainerRef`'s own DOM subtree — without this, a
  // selection inside one of those fields would register as an "outside"
  // click and close the whole rich form before it landed.
  React.useEffect(() => {
    if (!quickReplyOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (quickReplyContainerRef.current?.contains(target)) return;
      if (target instanceof Element && target.closest("[data-radix-popper-content-wrapper]")) return;
      closeQuickReplyMenu();
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [quickReplyOpen]);

  // Replaces `[quickReplyTriggerStart, caret)` — the typed "/query" (or,
  // for the toolbar-button path, a zero-length range right at the caret) —
  // with `text`, then restores focus with the caret placed right after the
  // newly-inserted text. `requestAnimationFrame` — the caret can only be
  // repositioned after React actually commits the new `value` to the DOM
  // `<textarea>`, which hasn't happened yet inside this same handler.
  const insertQuickReplyText = (text: string) => {
    const el = textareaRef.current;
    const start = quickReplyTriggerStart ?? el?.selectionStart ?? message.length;
    const end = el?.selectionStart ?? message.length;
    const next = message.slice(0, start) + text + message.slice(end);
    setMessage(next);
    const caret = start + text.length;
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(caret, caret);
    });
  };

  const handleSelectQuickReply = (item: InteractionComposerQuickReplyItem) => {
    if (item.rich) {
      setQuickReplyConfiguring(item);
      setQuickReplyFieldValues({});
      return;
    }
    insertQuickReplyText(item.template);
    closeQuickReplyMenu();
  };

  const handleInsertRichQuickReply = () => {
    if (!quickReplyConfiguring) return;
    insertQuickReplyText(fillQuickReplyTemplate(quickReplyConfiguring, quickReplyFieldValues, false));
    closeQuickReplyMenu();
  };

  const openQuickReplyMenuAtCaret = () => {
    if (!hasQuickReplies) return;
    const el = textareaRef.current;
    setQuickReplyTriggerStart(el?.selectionStart ?? message.length);
    setQuickReplyQuery("");
    setQuickReplyActiveIndex(0);
    el?.focus();
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    if (!hasQuickReplies) return;
    const caret = e.target.selectionStart ?? value.length;
    const match = QUICK_REPLY_TRIGGER_PATTERN.exec(value.slice(0, caret));
    if (match) {
      setQuickReplyTriggerStart(caret - match[0].length);
      setQuickReplyQuery(match[1]);
      setQuickReplyActiveIndex(0);
    } else if (quickReplyOpen && !quickReplyConfiguring) {
      // Only auto-closes the plain matching list on a non-matching edit —
      // once `quickReplyConfiguring` is set, further edits shouldn't tear
      // the variable form down out from under the agent.
      closeQuickReplyMenu();
    }
  };

  // Arrow keys/Enter/Escape all handled here, not inside `QuickReplyMenu`
  // itself, since the textarea must keep owning focus/caret the whole time
  // the menu is open (see this component's own top doc comment).
  const handleComposerKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (quickReplyOpen && !quickReplyConfiguring) {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setQuickReplyActiveIndex((i) => Math.min(i + 1, Math.max(quickReplyMatches.length - 1, 0)));
          break;
        case "ArrowUp":
          e.preventDefault();
          setQuickReplyActiveIndex((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          if (quickReplyMatches[quickReplyActiveIndex]) {
            e.preventDefault();
            handleSelectQuickReply(quickReplyMatches[quickReplyActiveIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          closeQuickReplyMenu();
          break;
      }
      return;
    }
    // Ordinary typing (the quick-reply picker isn't up): plain Enter sends
    // the message, same as most chat composers (Slack/Intercom/etc.);
    // Shift+Enter still inserts a real newline, since the textarea is
    // multi-line (`rows={3}`). `handleSend` itself already no-ops on an
    // empty/whitespace-only message, so this is safe to fire unconditionally.
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
      return;
    }
    // Tab out of the textarea goes straight to Send, not into the
    // Attach/Bold/Italic/Emoji/Quick replies/Templates toolbar row that
    // sits before it in DOM order. Shift+Tab (backing OUT of the textarea)
    // is left alone, same reasoning as Enter above leaving Shift+Enter alone.
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      sendButtonRef.current?.focus();
    }
  };

  const handleSend = () => {
    if (!canSend) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className={cn("relative shrink-0 bg-lyra-bg-surface-base px-6 py-4", className)}>
      {/* Soft fade instead of a hard border-top — reads as whatever's above
          (a transcript, a page body) scrolling *under* the composer rather
          than stopping at a line. Positioned outside this div's own box
          (negative top), so it overlays the last ~32px of a scrollable
          sibling directly above it. */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-lyra-bg-surface-base"
        aria-hidden="true"
      />
      <div className="w-full max-w-[1200px] mx-auto">
        {quickReplyOpen && (
          // Normal flow, NOT `absolute` — floating over content above would
          // visually bury it behind an opaque panel with no way to scroll
          // past. Sitting in-flow instead grows this composer's own
          // (`shrink-0`) height, shrinking whatever's above to make room
          // rather than covering any of it.
          <div ref={quickReplyContainerRef} className="mb-2">
            {quickReplyConfiguring ? (
              <QuickReplyVariableForm
                title={quickReplyConfiguring.title}
                hashtagId={quickReplyConfiguring.id}
                triggerChar={QUICK_REPLY_TRIGGER_CHAR}
                fields={quickReplyConfiguring.fields ?? []}
                values={quickReplyFieldValues}
                onValueChange={(key, value) => setQuickReplyFieldValues((prev) => ({ ...prev, [key]: value }))}
                preview={fillQuickReplyTemplate(quickReplyConfiguring, quickReplyFieldValues, true)}
                onCancel={closeQuickReplyMenu}
                onClose={closeQuickReplyMenu}
                onInsert={handleInsertRichQuickReply}
              />
            ) : (
              <QuickReplyMenu
                query={quickReplyQuery}
                triggerChar={QUICK_REPLY_TRIGGER_CHAR}
                items={quickReplyMatches.map((item): QuickReplyMenuItem => ({
                  id: item.id,
                  title: item.title,
                  preview: item.template,
                  rich: item.rich,
                }))}
                activeIndex={quickReplyActiveIndex}
                onHoverItem={setQuickReplyActiveIndex}
                onSelect={(menuItem) => {
                  const item = quickReplies.find((r) => r.id === menuItem.id);
                  if (item) handleSelectQuickReply(item);
                }}
                onClose={closeQuickReplyMenu}
              />
            )}
          </div>
        )}
        <Textarea
          ref={textareaRef}
          label={label}
          placeholder={placeholder}
          rows={3}
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleComposerKeyDown}
        />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <ActionIconButton size="sm" title="Attach file" onClick={onAttach}>
              <Paperclip className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
            <ActionIconButton size="sm" title="Bold" onClick={onBold}>
              <Bold className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
            <ActionIconButton size="sm" title="Italic" onClick={onItalic}>
              <Italic className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
            <ActionIconButton size="sm" title="Emoji" onClick={onEmoji}>
              <Smile className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
            <ActionIconButton
              size="sm"
              title="Quick replies"
              onClick={openQuickReplyMenuAtCaret}
              disabled={!hasQuickReplies}
            >
              <Zap className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
            <ActionIconButton size="sm" title="Templates" onClick={onTemplates}>
              <FileText className="h-4 w-4" strokeWidth={1.5} />
            </ActionIconButton>
          </div>
          <div className="inline-flex items-center">
            <Button
              ref={sendButtonRef}
              variant="default"
              size="lg"
              className="gap-1.5 rounded-r-none"
              disabled={!canSend}
              onClick={handleSend}
            >
              <Send className="h-4 w-4" strokeWidth={1.5} />
              Send
            </Button>
            <Button
              variant="default"
              size="icon-lg"
              className="rounded-l-none border-l border-white/25"
              disabled={!canSend}
              title="More send options"
              onClick={onSendOptionsClick}
            >
              <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
