import * as React from "react";
import { MessageCirclePlus, X, History, Home } from "lucide-react";
import { cn } from "../lib/utils";
import { AIInput, type AIInputProps } from "./ai-input";
import { Tooltip } from "./tooltip";

/* ── AI Indicator SVG ── */

function AiIndicatorSmall({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ai-sm-grad" x1="36" y1="36" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#50B6FF"/>
          <stop offset="50%" stopColor="#9CDCFF"/>
          <stop offset="100%" stopColor="#7640FF"/>
        </linearGradient>
      </defs>
      <rect x="36" y="36" width="64" height="64" rx="32" fill="url(#ai-sm-grad)"/>
      <path d="M59.6493 70.6838L64.6798 68.1689V68.1686C66.1893 67.4138 67.4132 66.19 68.168 64.6805L70.6841 59.6493C70.8493 59.3192 71.1868 59.1106 71.5561 59.1106C71.9252 59.1106 72.263 59.3192 72.4282 59.6493L74.9435 64.6796C75.6979 66.1891 76.9221 67.4129 78.4313 68.1677L83.461 70.6837C83.7914 70.8486 84 71.1864 84 71.5557C84 71.9251 83.7914 72.2625 83.461 72.4277L78.4305 74.9429C76.9212 75.6974 75.6971 76.9215 74.9426 78.4307L72.4273 83.461C72.2621 83.7914 71.9243 84 71.5553 84C71.1859 84 70.8484 83.7914 70.6833 83.461L68.168 78.4307C67.4132 76.9214 66.1893 75.6973 64.6798 74.9429L59.6493 72.4269C59.3195 72.2614 59.1112 71.9242 59.1112 71.5552C59.1112 71.1862 59.3195 70.849 59.6493 70.6838ZM60.2791 58.7851L62.4348 57.7056C62.5762 57.6348 62.6652 57.4904 62.6652 57.3324C62.6652 57.1744 62.5762 57.03 62.4348 56.9592L60.2791 55.8809C59.632 55.5574 59.1076 55.033 58.7841 54.386L57.7058 52.2304C57.635 52.089 57.4906 52 57.3326 52C57.1745 52 57.0302 52.089 56.9594 52.2304L55.8811 54.386C55.5576 55.033 55.0331 55.5574 54.3861 55.8809L52.2304 56.9592C52.089 57.03 52 57.1744 52 57.3324C52 57.4904 52.089 57.6348 52.2304 57.7056L54.3864 58.7836L54.3861 58.7839C55.0331 59.1071 55.5579 59.6318 55.8811 60.2785L56.9594 62.4345C57.0302 62.5758 57.1746 62.6648 57.3326 62.6648C57.4906 62.6648 57.635 62.5758 57.7058 62.4345L58.7838 60.2785V60.2788C59.1073 59.6318 59.6321 59.1074 60.2791 58.7842L60.2791 58.7851Z" fill="white"/>
    </svg>
  );
}

function AiIndicatorLarge({ className }: { className?: string }) {
  return (
    <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="ai-lg-glow" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feGaussianBlur stdDeviation="18"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0965294 0 0 0 0 0.548265 0 0 0 0 1 0 0 0 0.41 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="ai-lg-grad" x1="36" y1="36" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#50B6FF"/>
          <stop offset="50%" stopColor="#9CDCFF"/>
          <stop offset="100%" stopColor="#7640FF"/>
        </linearGradient>
      </defs>
      <g filter="url(#ai-lg-glow)">
        <rect x="36" y="36" width="64" height="64" rx="32" fill="url(#ai-lg-grad)"/>
        <path d="M59.6493 70.6838L64.6798 68.1689V68.1686C66.1893 67.4138 67.4132 66.19 68.168 64.6805L70.6841 59.6493C70.8493 59.3192 71.1868 59.1106 71.5561 59.1106C71.9252 59.1106 72.263 59.3192 72.4282 59.6493L74.9435 64.6796C75.6979 66.1891 76.9221 67.4129 78.4313 68.1677L83.461 70.6837C83.7914 70.8486 84 71.1864 84 71.5557C84 71.9251 83.7914 72.2625 83.461 72.4277L78.4305 74.9429C76.9212 75.6974 75.6971 76.9215 74.9426 78.4307L72.4273 83.461C72.2621 83.7914 71.9243 84 71.5553 84C71.1859 84 70.8484 83.7914 70.6833 83.461L68.168 78.4307C67.4132 76.9214 66.1893 75.6973 64.6798 74.9429L59.6493 72.4269C59.3195 72.2614 59.1112 71.9242 59.1112 71.5552C59.1112 71.1862 59.3195 70.849 59.6493 70.6838ZM60.2791 58.7851L62.4348 57.7056C62.5762 57.6348 62.6652 57.4904 62.6652 57.3324C62.6652 57.1744 62.5762 57.03 62.4348 56.9592L60.2791 55.8809C59.632 55.5574 59.1076 55.033 58.7841 54.386L57.7058 52.2304C57.635 52.089 57.4906 52 57.3326 52C57.1745 52 57.0302 52.089 56.9594 52.2304L55.8811 54.386C55.5576 55.033 55.0331 55.5574 54.3861 55.8809L52.2304 56.9592C52.089 57.03 52 57.1744 52 57.3324C52 57.4904 52.089 57.6348 52.2304 57.7056L54.3864 58.7836L54.3861 58.7839C55.0331 59.1071 55.5579 59.6318 55.8811 60.2785L56.9594 62.4345C57.0302 62.5758 57.1746 62.6648 57.3326 62.6648C57.4906 62.6648 57.635 62.5758 57.7058 62.4345L58.7838 60.2785V60.2788C59.1073 59.6318 59.6321 59.1074 60.2791 58.7842L60.2791 58.7851Z" fill="white"/>
      </g>
    </svg>
  );
}

/* ── Suggestion chip ── */

function SuggestionChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left px-4 py-3.5 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-container-subtle lyra-body-md text-lyra-fg-default hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
    >
      {label}
    </button>
  );
}

/* ── Types ── */

export interface AiPanelSuggestion {
  id: string;
  label: string;
}

export interface AiPanelProps {
  /** Panel title (default: "AI Assistant") */
  title?: string;
  /** User's first name for the greeting */
  userName?: string;
  /** Greeting line (default: "How can I help?") */
  greeting?: string;
  /** Suggestion chips shown in empty state */
  suggestions?: AiPanelSuggestion[];
  /** Called when a suggestion is clicked */
  onSuggestion?: (suggestion: AiPanelSuggestion) => void;
  /** Called when new conversation button is clicked */
  onNewConversation?: () => void;
  /** Called when close button is clicked */
  onClose?: () => void;
  /** History content — shown when user clicks the history icon */
  historyContent?: React.ReactNode;
  /** The conversation/message content — replaces empty state when provided */
  children?: React.ReactNode;
  /** Props forwarded to AIInput */
  inputProps?: Partial<AIInputProps>;
  /** Hide the AIInput footer (e.g. for history view) */
  showInput?: boolean;
  /** Called when the panel is resized via drag */
  onWidthChange?: (width: number) => void;
  /** Called when drag starts/ends — use to disable wrapper transition */
  onDragStateChange?: (dragging: boolean) => void;
  /** Start in history view (default: false) */
  defaultView?: "home" | "history";
  className?: string;
}

/* ── Component ── */

const AiPanel: React.FC<AiPanelProps> = ({
  title = "AI Assistant",
  userName,
  greeting = "How can I help?",
  suggestions = [],
  onSuggestion,
  onNewConversation,
  onClose,
  historyContent,
  children,
  inputProps,
  showInput = true,
  onWidthChange,
  onDragStateChange,
  defaultView = "home",
  className,
}) => {
  const [showHistory, setShowHistory] = React.useState(defaultView === "history");
  const isEmpty = !children && !showHistory;

  // ── Resize ──
  const MIN_WIDTH = 400;
  const [width, setWidth] = React.useState<number | undefined>(undefined);
  // Lock width on first render so content changes don't resize the panel
  const dragging = React.useRef(false);
  const startX = React.useRef(0);
  const startWidth = React.useRef(0);
  const panelRef = React.useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    startX.current = e.clientX;
    startWidth.current = panelRef.current?.offsetWidth ?? MIN_WIDTH;
    // Max width = viewport width minus a minimum 200px left margin for content
    const maxWidth = window.innerWidth - 200;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    onDragStateChange?.(true);

    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const delta = ev.clientX - startX.current; // drag right = smaller, drag left = wider
      const newWidth = Math.min(maxWidth, Math.max(MIN_WIDTH, startWidth.current - delta));
      setWidth(newWidth);
      onWidthChange?.(newWidth);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      onDragStateChange?.(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div
      ref={panelRef}
      style={{ width: width ?? undefined, minWidth: MIN_WIDTH, flexShrink: 0 }}
      className={cn(
        "relative flex flex-col h-full bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",
        className
      )}
    >
      {/* ── Drag handle — left edge ── */}
      <div
        onMouseDown={onDragStart}
        className="absolute left-0 top-0 bottom-0 w-1.5 cursor-ew-resize z-10 group/drag"
        title="Drag to resize"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-lyra-border-subtle group-hover/drag:bg-lyra-border-active transition-colors" />
      </div>
      {/* ── Header ── */}
      <div className="flex items-center gap-2 px-4 py-3 shrink-0">
        <AiIndicatorSmall />
        <span className="lyra-heading-md text-lyra-fg-default flex-1">{title}</span>
        <Tooltip content="New conversation" placement="bottom">
          <button
            type="button"
            onClick={onNewConversation}
            aria-label="New conversation"
            className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
          >
            <MessageCirclePlus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </Tooltip>
        <Tooltip content={showHistory ? "Back to home" : "History"} placement="bottom">
          <button
            type="button"
            onClick={() => setShowHistory((v) => !v)}
            aria-label={showHistory ? "Back to home" : "History"}
            className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
          >
            {showHistory
              ? <Home className="h-4 w-4" strokeWidth={1.5} />
              : <History className="h-4 w-4" strokeWidth={1.5} />}
          </button>
        </Tooltip>
        <Tooltip content="Close" placement="bottom">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </Tooltip>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4">
        {showHistory ? (
          <div className="flex flex-col gap-1 py-4">
            {historyContent ?? <p className="lyra-body-sm text-lyra-fg-disabled px-3">No conversation history.</p>}
          </div>
        ) : isEmpty ? (
          /* Empty / welcome state */
          <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
            <AiIndicatorLarge />
            <div className="text-center">
              {userName && (
                <p className="lyra-body-md text-lyra-fg-default">Hi {userName},</p>
              )}
              <p className="lyra-heading-lg text-lyra-fg-default">{greeting}</p>
            </div>
            {suggestions.length > 0 && (
              <div className="flex flex-col gap-2 w-full">
                {suggestions.map((s) => (
                  <SuggestionChip
                    key={s.id}
                    label={s.label}
                    onClick={() => onSuggestion?.(s)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Conversation content */
          <div className="flex flex-col gap-6 py-4">
            {children}
          </div>
        )}
      </div>

      {/* ── Input (hidden on history view) ── */}
      {showInput && !showHistory && (
        <div className="px-4 pb-4 pt-2 shrink-0">
          <AIInput {...inputProps} />
        </div>
      )}
    </div>
  );
};

AiPanel.displayName = "AiPanel";

export { AiPanel, AiIndicatorSmall, AiIndicatorLarge };
