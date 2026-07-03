import * as React from "react";
import { createPortal } from "react-dom";
import {
  MoreVertical,
  Clock,
  MessageSquare,
  Mail,
  Phone,
  TriangleAlert,
  User,
  ArrowUpRight,
  CircleCheck,
  Send,
  FileDown,
  Languages,
  PlayCircle,
} from "lucide-react";
import { cn } from "../lib/utils";
import { tagVariants } from "./tag";
import { Menu, type MenuEntry } from "./menu";

/* ── WhatsApp icon (not in Lucide) ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Kebab menu (shared) ── */

/** Person + redirect-arrow composite — no single Lucide icon covers "transfer". */
const ConsultTransferIcon = () => (
  <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
    <User className="h-4 w-4" strokeWidth={1.5} />
    <ArrowUpRight className="absolute -right-1 -top-1 h-2.5 w-2.5" strokeWidth={2.5} />
  </span>
);

/** Kebab (⋮) trigger + dropdown, used once per channel row. Rendered via
 *  portal (not inline) so it isn't clipped by a card's own `overflow-hidden`/
 *  rounded corners or by neighboring cards in a scrolling stack — positioned
 *  with `fixed` coords measured from the button's own bounding rect. */
interface KebabMenuButtonProps {
  items: MenuEntry[];
  ariaLabel: string;
  className?: string;
}

const KebabMenuButton: React.FC<KebabMenuButtonProps> = ({ items, ariaLabel, className }) => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const openMenu = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) setPosition({ top: rect.bottom + 4, left: rect.right });
    setOpen(true);
  };

  React.useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const entries: MenuEntry[] = items.map((entry) =>
    entry === "separator"
      ? entry
      : { ...entry, onClick: () => { entry.onClick?.(); setOpen(false); } }
  );

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (open) setOpen(false);
          else openMenu();
        }}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",
          className
        )}
      >
        <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open && position && createPortal(
        <div
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            transform: "translateX(-100%)",
            zIndex: 9999,
          }}
        >
          <Menu items={entries} aria-label={ariaLabel} />
        </div>,
        document.body
      )}
    </>
  );
};

/* ── Channel types ── */

export type ChannelType = "chat" | "email" | "sms" | "whatsapp" | "voice";

export interface InteractionChannel {
  /** Which channel this row represents — determines its icon, label, and
   *  default kebab menu items (see `ChatChannelRow` / `EmailChannelRow` /
   *  `SmsChannelRow` / `WhatsAppChannelRow` / `VoiceChannelRow` below).
   *  Override the menu for one specific row via `menuItems`. */
  type: ChannelType;
  /** Elapsed time for this channel's last message, as 4-digit MM:SS, or "Now". */
  elapsed: string;
  /** Message preview for this channel. */
  preview?: string;
  /**
   * Whether this is the channel currently open/being viewed for this
   * interaction. Only highlighted (blue background) when the parent
   * `InteractionNavItem` itself is `active` — on an inactive card, no
   * channel row is highlighted even if one is marked `current`.
   */
  current?: boolean;
  /** Whether this specific channel is the one awaiting a response —
   *  renders its chip and elapsed-time in critical (red) instead of
   *  success (green) / secondary gray. */
  awaitingResponse?: boolean;
  /** Show the trailing kebab (⋮) menu for this channel row. Default: true. */
  removable?: boolean;
  /** Override this row's default (per-`type`) kebab menu items. */
  menuItems?: MenuEntry[];
}

/* ── Default menu items, per channel type ──
 * Kept here (not on InteractionNavItem) so each channel type owns its own
 * kebab behavior at the component level — e.g. Voice gets recording actions
 * instead of transcript/translate actions. Override per-row via
 * `InteractionChannel.menuItems`. */

const DIGITAL_MENU_ITEMS: MenuEntry[] = [
  { id: "unassign-dismiss", label: "Unassign & Dismiss", icon: <TriangleAlert className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "consult-transfer", label: "Consult / Transfer", icon: <ConsultTransferIcon /> },
  { id: "outcome", label: "Outcome", icon: <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} /> },
  { id: "send-transcript", label: "Send Transcript", icon: <Send className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "download-transcript", label: "Download Transcript", icon: <FileDown className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "translate-messages", label: "Translate Messages", icon: <Languages className="h-4 w-4" strokeWidth={1.5} /> },
];

const VOICE_MENU_ITEMS: MenuEntry[] = [
  { id: "unassign-dismiss", label: "Unassign & Dismiss", icon: <TriangleAlert className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "consult-transfer", label: "Consult / Transfer", icon: <ConsultTransferIcon /> },
  { id: "outcome", label: "Outcome", icon: <CircleCheck className="h-4 w-4 text-lyra-status-info-strong" strokeWidth={1.5} /> },
  { id: "listen-recording", label: "Listen to Recording", icon: <PlayCircle className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "download-recording", label: "Download Recording", icon: <FileDown className="h-4 w-4" strokeWidth={1.5} /> },
];

/* ── Base row (shared rendering) ── */

interface ChannelRowProps {
  icon: React.ReactNode;
  label: string;
  elapsed: string;
  preview?: string;
  /** Blue-highlighted row background — set by the parent when this row is
   *  both `current` and the card is `active`. */
  highlighted?: boolean;
  /** Skip the top divider — set by the parent for the first row in the list. */
  isFirst?: boolean;
  awaitingResponse?: boolean;
  menuItems: MenuEntry[];
  showMenu?: boolean;
}

const ChannelRow: React.FC<ChannelRowProps> = ({
  icon,
  label,
  elapsed,
  preview,
  highlighted,
  isFirst,
  awaitingResponse,
  menuItems,
  showMenu = true,
}) => (
  <div
    className={cn(
      "flex flex-col gap-1 px-4 py-2.5 transition-colors",
      !isFirst && "border-t border-lyra-border-subtle",
      highlighted ? "bg-lyra-status-info-subtle" : "hover:bg-lyra-state-hover"
    )}
  >
    <div className="flex items-center gap-2">
      <span className={cn(tagVariants({ variant: awaitingResponse ? "critical" : "success", shape: "pill" }))}>
        <span aria-hidden="true">{icon}</span>
        {label}
      </span>
      <span
        className={cn(
          "flex items-center gap-1 lyra-body-xs",
          awaitingResponse ? "text-lyra-status-critical-strong" : "text-lyra-fg-secondary"
        )}
      >
        <Clock className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
        {elapsed}
      </span>
      <span className="flex-1" />
      {showMenu && <KebabMenuButton items={menuItems} ariaLabel={`More options for ${label}`} />}
    </div>
    {preview && <p className="lyra-body-sm text-lyra-fg-secondary truncate">{preview}</p>}
  </div>
);

/* ── Per-type channel rows ──
 * Thin wrappers around `ChannelRow` — each owns its own icon, label, and
 * default kebab menu, so channel-specific behavior lives here instead of
 * being passed down generically from `InteractionNavItem` or a story. */

export interface ChannelRowInstanceProps {
  elapsed: string;
  preview?: string;
  highlighted?: boolean;
  isFirst?: boolean;
  awaitingResponse?: boolean;
  removable?: boolean;
  menuItems?: MenuEntry[];
}

const ChatChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<MessageSquare className="h-3 w-3" strokeWidth={1.5} />}
    label="Chat"
    menuItems={menuItems ?? DIGITAL_MENU_ITEMS}
    showMenu={removable !== false}
  />
);

const EmailChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<Mail className="h-3 w-3" strokeWidth={1.5} />}
    label="Email"
    menuItems={menuItems ?? DIGITAL_MENU_ITEMS}
    showMenu={removable !== false}
  />
);

const SmsChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<MessageSquare className="h-3 w-3" strokeWidth={1.5} />}
    label="SMS"
    menuItems={menuItems ?? DIGITAL_MENU_ITEMS}
    showMenu={removable !== false}
  />
);

const WhatsAppChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<WhatsAppIcon />}
    label="WhatsApp"
    menuItems={menuItems ?? DIGITAL_MENU_ITEMS}
    showMenu={removable !== false}
  />
);

const VoiceChannelRow: React.FC<ChannelRowInstanceProps> = ({ menuItems, removable, ...rest }) => (
  <ChannelRow
    {...rest}
    icon={<Phone className="h-3 w-3" strokeWidth={1.5} />}
    label="Voice"
    menuItems={menuItems ?? VOICE_MENU_ITEMS}
    showMenu={removable !== false}
  />
);

/** Maps `InteractionChannel.type` to its row component — used by
 *  `InteractionNavItem` to dispatch each channel to the right one. */
const CHANNEL_ROW_COMPONENTS: Record<ChannelType, React.FC<ChannelRowInstanceProps>> = {
  chat: ChatChannelRow,
  email: EmailChannelRow,
  sms: SmsChannelRow,
  whatsapp: WhatsAppChannelRow,
  voice: VoiceChannelRow,
};

export {
  ChannelRow,
  ChatChannelRow,
  EmailChannelRow,
  SmsChannelRow,
  WhatsAppChannelRow,
  VoiceChannelRow,
  CHANNEL_ROW_COMPONENTS,
};
