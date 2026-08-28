import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { Tag } from "./tag";

/* ── QuickReplyMenu ──
   The trigger-character list a chat composer shows while the agent is
   mid-typing a quick-reply shortcut (e.g. matching "time" while typing
   "/timeline", if the caller's `triggerChar` is "/") — built as a plain,
   presentational list rather than a `Popover`/`Menu` composition, because
   the thing that must keep DOM focus the whole time this is open is the
   composer's own `<textarea>`, not this list: arrow keys/Enter/Escape all
   need to keep going to the textarea's own `onKeyDown` handler (so the
   caret position and the rest of the message text around the typed token
   stay exactly where the agent left them), which rules out `Menu`/
   `Autocomplete`'s own internally-owned open/keyboard state — this
   component only ever reflects `activeIndex`/`items` the caller already
   computed, and reports hover/click back up rather than managing any of
   that itself.

   Caller is responsible for positioning this (e.g. as a normal-flow block
   above the composer's own input, so opening it resizes whatever's above
   rather than covering it — this component has no opinion on where it
   sits, only its own internal layout/chrome). */

export interface QuickReplyMenuItem {
  /** The `#id` typed to reach this item, and the hashtag chip shown before
   *  its title (e.g. `"timeline"` for `#timeline`). */
  id: string;
  /** Short label, e.g. "Processing Time" */
  title: string;
  /** Preview of the message this item inserts — the *unfilled* template
   *  text (`{placeholder}` tokens shown as-is) for a `rich` item, since the
   *  actual values aren't chosen yet at this list stage. */
  preview: string;
  /** Marks this item as needing a follow-up "fill in the blanks" step
   *  (see `QuickReplyVariableForm`) before it can be inserted — shown with
   *  a trailing "Rich" tag, per the reference mockup. */
  rich?: boolean;
}

export interface QuickReplyMenuProps {
  /** Text typed after `#` so far — echoed in the header ("Matching #foo"),
   *  same text `items` was already filtered by (filtering itself is the
   *  caller's job, not this component's). */
  query: string;
  items: QuickReplyMenuItem[];
  /** Index into `items` currently highlighted via arrow keys — `-1` for
   *  none. Purely a display prop; the composer's own keydown handler owns
   *  the real index and just passes the result down here. */
  activeIndex: number;
  onSelect: (item: QuickReplyMenuItem) => void;
  /** Fired on pointer hover so mouse and keyboard highlighting share the
   *  same `activeIndex` state up in the caller, instead of this component
   *  tracking a second, competing "hovered" index of its own. */
  onHoverItem?: (index: number) => void;
  /** Fired by the header's dismiss (`X`) button — Escape itself is still
   *  the composer's own keydown handler's job (see this component's top
   *  doc comment), this is only for the explicit click target. */
  onClose: () => void;
  /** The character that opens this menu in the composer (e.g. `"#"` or
   *  `"/"`) — purely decorative here (the header's "Matching {char}{query}"
   *  text and each row's chip), since detecting/consuming that character
   *  in the message text is the caller's own job, not this component's.
   *  Defaults to `"#"`. */
  triggerChar?: string;
  emptyMessage?: string;
  className?: string;
}

const QuickReplyMenu = React.forwardRef<HTMLDivElement, QuickReplyMenuProps>(
  (
    { query, items, activeIndex, onSelect, onHoverItem, onClose, triggerChar = "#", emptyMessage = "No matching quick replies", className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="listbox"
        aria-label="Quick replies"
        className={cn(
          "flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-soft bg-lyra-bg-surface-overlay shadow-lg",
          className
        )}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-lyra-border-subtle bg-lyra-bg-surface-container-subtle px-4 py-2">
          <span className="lyra-body-sm text-lyra-fg-secondary truncate">
            Matching <span className="font-mono text-lyra-fg-active-strong">{triggerChar}{query}</span>
            <span className="mx-2 text-lyra-border-strong">·</span>
            <span className="font-mono">↑↓</span> navigate
            <span className="mx-1.5 text-lyra-border-strong">·</span>
            <span className="font-mono">Enter</span> to select
            <span className="mx-1.5 text-lyra-border-strong">·</span>
            <span className="font-mono">Esc</span> to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss quick replies"
            className="shrink-0 rounded-lyra-sm p-0.5 text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default"
          >
            <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {items.length === 0 ? (
            <div className="px-4 py-6 text-center lyra-body-sm text-lyra-fg-disabled">{emptyMessage}</div>
          ) : (
            items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => onHoverItem?.(i)}
                onClick={() => onSelect(item)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors",
                  i % 2 === 1 && "bg-lyra-bg-surface-container-subtle/60",
                  i === activeIndex ? "bg-lyra-bg-active-moderate" : "hover:bg-lyra-state-hover"
                )}
              >
                <span className="shrink-0 rounded-lyra-sm bg-lyra-bg-active-subtle px-1.5 py-0.5 font-mono text-xs text-lyra-fg-active-strong">
                  {triggerChar}{item.id}
                </span>
                <span className="lyra-body-md-emphasis text-lyra-fg-default shrink-0">{item.title}</span>
                <span className="lyra-body-sm text-lyra-fg-secondary truncate min-w-0 flex-1">{item.preview}</span>
                {item.rich && <Tag label="Rich" variant="default" className="shrink-0" />}
              </button>
            ))
          )}
        </div>
      </div>
    );
  }
);
QuickReplyMenu.displayName = "QuickReplyMenu";

export { QuickReplyMenu };
