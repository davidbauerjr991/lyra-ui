import * as React from "react";
import { ArrowUp, Plus, Paperclip, FolderPlus, Mic } from "lucide-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";
import { ClearButton } from "./clear-button";

/* ── Types ── */

export interface AIInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Disable the input and submit button */
  disabled?: boolean;
  /** Extra actions rendered to the left of the submit button */
  actions?: React.ReactNode;
  /** Called when "Add files or photos" is selected */
  onAttachFiles?: () => void;
  /** Called when "Add folder" is selected */
  onAttachFolder?: () => void;
  /** Called after the clear ("x") button resets the input. The button
   *  itself only appears once there's text to clear (`value.length > 0`)
   *  and is hidden while `disabled` — no separate opt-in prop needed. */
  onClear?: () => void;
  /** Hide the + attach button */
  showAttach?: boolean;
  /** Max rows before scrolling (default 6) */
  maxRows?: number;
  /** Render the attach button, input, and submit/mic button inline in a
   *  single row instead of the default two-row layout (textarea above,
   *  toolbar below) — a more compact, search-bar-style affordance (e.g.
   *  a Copilot "ask a quick question" field). The textarea's own
   *  auto-resize is disabled in this mode (stays a fixed single row);
   *  overflowing text is clipped rather than growing the field taller. */
  singleLine?: boolean;
  className?: string;
  id?: string;
}

/* ── Component ── */

const AIInput = React.forwardRef<HTMLTextAreaElement, AIInputProps>(
  ({
    value,
    onChange,
    onSubmit,
    placeholder = "Ask anything...",
    helperText = "AI assistant can make mistakes. Double check responses.",
    disabled,
    actions,
    onAttachFiles,
    onAttachFolder,
    onClear,
    showAttach = true,
    maxRows = 6,
    singleLine = false,
    className,
    id,
  }, ref) => {
    const autoId        = React.useId();
    const inputId       = id ?? autoId;
    const internalRef   = React.useRef<HTMLTextAreaElement>(null);
    const textareaRef   = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef;

    const [internalValue, setInternalValue] = React.useState("");
    const controlled = value !== undefined;
    const current    = controlled ? value : internalValue;
    const canSubmit  = current.trim().length > 0 && !disabled;

    /* Auto-resize textarea — skipped entirely in `singleLine` mode, which
       stays a fixed one-row height (see that prop's own doc comment). */
    const resize = React.useCallback(() => {
      if (singleLine) return;
      const el = textareaRef.current;
      if (!el) return;
      el.style.height = "auto";
      const lineHeight = parseInt(getComputedStyle(el).lineHeight, 10) || 20;
      const maxHeight  = lineHeight * maxRows;
      el.style.height  = `${Math.min(el.scrollHeight, maxHeight)}px`;
      el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
    }, [maxRows, singleLine]);

    React.useEffect(() => { resize(); }, [current, resize]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!controlled) setInternalValue(e.target.value);
      onChange?.(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey && canSubmit) {
        e.preventDefault();
        handleSubmit();
      }
    };

    const handleSubmit = () => {
      if (!canSubmit) return;
      onSubmit?.(current);
      if (!controlled) setInternalValue("");
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    };

    /* Clears the field without submitting it — distinct from `handleSubmit`
       above, which sends the value; this just discards it. Refocuses the
       textarea afterward so the agent can keep typing without an extra
       click, same as clearing a native search input. Height/resize resets
       for free via the existing `useEffect(() => resize(), [current, ...])`
       below once `current` changes to "". */
    const handleClear = () => {
      if (!controlled) setInternalValue("");
      onChange?.("");
      onClear?.();
      textareaRef.current?.focus();
    };

    /* Attach ("+") button — same popover trigger either way; only its
       POSITION changes between the two layouts below (inline in the single
       row for `singleLine`, vs. the left side of the toolbar row
       otherwise), so it's built once here rather than duplicated. */
    const attachButton = showAttach && (
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          <button
            type="button"
            disabled={disabled}
            aria-label="Add attachment"
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lyra-sm",
              "text-lyra-fg-secondary transition-colors",
              "hover:bg-lyra-state-hover hover:text-lyra-fg-default",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
            )}
          >
            <Plus className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side="top"
            align="start"
            sideOffset={6}
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={cn(
              "z-50 min-w-[220px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-2",
              "animate-in fade-in-0 slide-in-from-top-2 duration-150",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
            )}
          >
            {/* Add files or photos */}
            <PopoverPrimitive.Close asChild>
              <button
                type="button"
                onClick={onAttachFiles}
                className="flex w-full items-center gap-2.5 px-3 py-2.5 rounded-lyra-sm lyra-body-md text-lyra-fg-default hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:bg-lyra-state-hover"
              >
                <Paperclip className="h-4 w-4 text-lyra-fg-secondary shrink-0" strokeWidth={1.5} />
                <span className="flex-1 text-left">Add files or photos</span>
                <span className="lyra-body-sm text-lyra-fg-secondary shrink-0">⌘U</span>
              </button>
            </PopoverPrimitive.Close>
            {/* Add folder */}
            <PopoverPrimitive.Close asChild>
              <button
                type="button"
                onClick={onAttachFolder}
                className="flex w-full items-center gap-2.5 px-3 py-2.5 rounded-lyra-sm lyra-body-md text-lyra-fg-default hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:bg-lyra-state-hover"
              >
                <FolderPlus className="h-4 w-4 text-lyra-fg-secondary shrink-0" strokeWidth={1.5} />
                <span className="flex-1 text-left">Add folder</span>
              </button>
            </PopoverPrimitive.Close>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );

    /* Clear ("x") button — the same shared `ClearButton` (clear-button.tsx)
       `SearchInput` and `Autocomplete` already use, not a hand-rolled one,
       so it matches those exactly (20px rounded-lyra-xs box, "Clear"
       tooltip) instead of drifting into its own one-off shape. Only
       rendered once there's something to clear, so it never sits next to
       the mic button implying there's a second always-present action.
       Placed immediately before the submit/mic button in both layouts (see
       the two `clearButton` usages below), the same relative position a
       native search input's clear affordance takes. Hidden while
       `disabled` — the whole container already goes `pointer-events-none`
       in that state, so a rendered-but-inert button would just be dead
       weight. */
    const clearButton = current.length > 0 && !disabled && (
      <ClearButton
        onClick={handleClear}
        aria-label="Clear input"
        className="shrink-0"
      />
    );

    /* Submit button — mic when empty, blue arrow when typing. Sized down
       (h-8/w-4 icon vs. h-9/w-5) in `singleLine` mode to match that
       layout's slimmer single-row height; same swap logic either way. */
    const submitButton = canSubmit ? (
      <button
        type="button"
        onClick={handleSubmit}
        aria-label="Submit"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lyra-md transition-colors bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",
          singleLine ? "h-8 w-8" : "h-9 w-9"
        )}
      >
        <ArrowUp className={singleLine ? "h-4 w-4" : "h-5 w-5"} strokeWidth={2} />
      </button>
    ) : (
      <Tooltip content="Press and hold to record" placement="top">
        <button
          type="button"
          disabled={disabled}
          aria-label="Voice input"
          className={cn(
            "flex shrink-0 items-center justify-center rounded-lyra-md transition-colors bg-lyra-bg-surface-shell text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none",
            singleLine ? "h-8 w-8" : "h-9 w-9"
          )}
        >
          <Mic className={singleLine ? "h-4 w-4" : "h-5 w-5"} strokeWidth={1.5} />
        </button>
      </Tooltip>
    );

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {/* Input container — `singleLine` lays everything (attach, input,
            submit/mic) out in one flex row instead of the default textarea-
            above/toolbar-below stack (see that prop's own doc comment). */}
        <div className={cn(
          // `rounded-lyra-sm` + `hover:border-lyra-state-border-hover-neutral`
          // match the other input fields' shared border treatment (see
          // input.tsx / textarea.tsx).
          "rounded-lyra-sm border bg-lyra-bg-surface-container-subtle transition-colors",
          "border-lyra-border-strong hover:border-lyra-state-border-hover-neutral",
          "focus-within:border-lyra-border-active focus-within:ring-2 focus-within:ring-lyra-border-active/20",
          disabled && "opacity-50 pointer-events-none bg-lyra-bg-disabled border-transparent",
          singleLine ? "flex items-center gap-1 py-1.5 pl-2 pr-1.5" : "flex flex-col"
        )}>
          {singleLine && attachButton}
          {singleLine && actions}

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            id={inputId}
            value={current}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            aria-label={placeholder}
            className={cn(
              "resize-none bg-transparent outline-none",
              "lyra-body-md text-lyra-fg-default placeholder:text-lyra-fg-disabled",
              singleLine
                ? "min-w-0 flex-1 overflow-hidden px-1 py-1 leading-normal"
                : "w-full px-4 pt-3 pb-1 leading-relaxed"
            )}
          />

          {singleLine ? (
            <>
              {clearButton}
              {submitButton}
            </>
          ) : (
            /* Toolbar row */
            <div className="flex items-center justify-between px-3 pb-3 pt-1">
              <div className="flex items-center gap-1">
                {attachButton}
                {actions}
              </div>
              <div className="flex items-center gap-1">
                {clearButton}
                {submitButton}
              </div>
            </div>
          )}
        </div>

        {/* Helper text */}
        {helperText && (
          <p className="lyra-body-sm text-lyra-fg-secondary text-center px-2">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
AIInput.displayName = "AIInput";

export { AIInput };
