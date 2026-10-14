import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { containerVariants } from "./container";
import { ContainerHeaderSlot } from "./container-header";
import { ContainerFooterSlot, type ContainerFooterAlign } from "./container-footer";
import { overlayVariants } from "./overlay";

/* ── Types ── */

interface ModalProps extends VariantProps<typeof overlayVariants> {
  /** Controls visibility — `Modal` owns no internal open state (mirrors `Overlay`). */
  open: boolean;
  /** Called when the dialog should close — Escape, or backdrop click when `closeOnBackdropClick` is true. */
  onClose?: () => void;
  /**
   * Close when the backdrop is clicked, and allow Escape to dismiss.
   * Default: false — matches `Overlay`. Use `true` for anything without a
   * mandatory confirm/cancel flow; leave `false` for modals that must be
   * dismissed via an explicit button (warning/destructive confirmations,
   * "welcome" modals with a forced choice).
   */
  closeOnBackdropClick?: boolean;
  /** Portal container — defaults to `document.body` */
  container?: HTMLElement | null;
  /** Additional className on the backdrop (`Overlay`'s own `className` equivalent) */
  overlayClassName?: string;
  /** Additional className on the modal surface itself — width/height/rounded overrides */
  className?: string;

  /* ── Header — same API as `Container`'s `header*` props ── */
  headerTitle?: string;
  headerIcon?: React.ReactNode;
  headerActions?: React.ReactNode;
  headerTitleBadge?: React.ReactNode;
  headerTopSlot?: React.ReactNode;
  headerSubhead?: string;
  headerBordered?: boolean;
  headerTitleClassName?: string;
  headerClassName?: string;

  /* ── Footer — same API as `Container`'s `footer*` props ── */
  /** Footer content (normally `Button`s) — renders a `ContainerFooter` after `children` when set. */
  footerActions?: React.ReactNode;
  /** Where the footer's buttons sit: `"left"`, `"right"` (default) or `"full"`. See `ContainerFooter`'s `align`. */
  footerAlign?: ContainerFooterAlign;
  /** Show a border along the top edge of the footer (default: false) */
  footerBordered?: boolean;
  /** Shadow above the footer while content scrolls behind it (default: false). */
  footerScrollShadow?: boolean;
  /** Fade the content out into the footer while it scrolls behind it, instead of a hard edge. Forwarded to `ContainerFooter`'s `scrollFade`; when on, `footerScrollShadow` and `footerBordered` are ignored (default: false). */
  footerScrollFade?: boolean;
  /** Additional className merged onto the footer's wrapper div. */
  footerClassName?: string;

  /**
   * Accessible name for screen readers (Radix `Dialog.Title`, sr-only)
   * when there's no visible `headerTitle`-driven header row to double as
   * one — e.g. a modal whose body content renders its own heading
   * directly (`AgentWelcomeMessage`, `LoginCard`), composed as `children`
   * rather than through `headerTitle`. Ignored when `headerTitle` is set,
   * since that already supplies both the visible heading and the
   * accessible name. Falls back to a generic "Dialog" if neither is set.
   */
  ariaTitle?: string;

  /**
   * Accessible description for screen readers (Radix `Dialog.Description`)
   * — sr-only, never rendered visibly. Optional: Radix only warns in the
   * console when it's missing, it isn't a hard requirement, and most
   * modals' visible body content already makes the purpose clear.
   */
  description?: string;

  /**
   * Announce the modal as an alert dialog (`role="alertdialog"`) — for
   * warning / destructive confirmations that interrupt the user and need a
   * response. Default: false (`role="dialog"`, today's behavior).
   *
   * When true, initial focus goes to the safe action instead of the first
   * focusable element: `initialFocusRef` if given, else the first element
   * inside the modal marked `data-modal-cancel` (put it on the Cancel button),
   * else Radix's usual first-focusable fallback.
   */
  alert?: boolean;

  /**
   * Element that receives focus when the modal opens. Optional and works with
   * or without `alert`; when unset (and `alert` is false) Radix focuses the
   * first focusable element as before.
   */
  initialFocusRef?: React.RefObject<HTMLElement | null>;

  /**
   * Unsaved-changes guard. When true, Escape and backdrop-click no longer
   * call `onClose`; they call `onCloseAttempt` instead so the caller can ask
   * "Discard changes?" first. Buttons inside the modal that call your own
   * close handler are unaffected. Default: false (today's behavior).
   */
  preventClose?: boolean;

  /**
   * Let the user drag the modal by its header (grab anywhere on the header except its buttons
   * and inputs). The modal stays inside the viewport and re-centers each time it opens.
   * Not dockable or resizable — position only. Needs a header. Default: false.
   */
  draggable?: boolean;

  /** Called when Escape or a backdrop click is blocked by `preventClose`. */
  onCloseAttempt?: () => void;

  children?: React.ReactNode;
}

/* ── Component ── */

/**
 * Modal — the accessible, portal-rendered dialog surface for the design
 * system. Built directly on `@radix-ui/react-dialog` (`Root`/`Portal`/
 * `Overlay`/`Content`/`Title`), so every modal gets focus trapping,
 * Escape-to-dismiss, portal rendering, and a real accessible name for
 * free — instead of every consumer hand-composing `Overlay` +
 * `Container variant="modal"` itself (the old pattern — see
 * `CampaignDetailsModal.tsx` / `AgentNextGenPage.tsx`'s welcome modal
 * prior to this change) and risking drift, like forgetting `Overlay`'s
 * hidden trigger or Radix's `Title` requirement — the reason the
 * Storybook-only "Modal" used to be a bare `Container` with no real
 * dialog semantics (no focus trap, no portal, no Escape handling) at all.
 *
 * Renders the exact same visual surface `Container variant="modal"`
 * always has (same `containerVariants`) plus the same header row
 * (`ContainerHeader`) — this *is* that composition, just with the Radix
 * Dialog wiring built in rather than left to every call site.
 */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      closeOnBackdropClick = false,
      variant,
      container,
      overlayClassName,
      className,
      headerTitle,
      headerIcon,
      headerActions,
      headerTitleBadge,
      headerTopSlot,
      headerSubhead,
      headerBordered = false,
      headerTitleClassName,
      headerClassName,
      footerActions,
      footerAlign,
      footerBordered = false,
      footerScrollShadow = false,
      footerScrollFade,
      footerClassName,
      ariaTitle,
      description,
      alert = false,
      initialFocusRef,
      preventClose = false,
      draggable = false,
      onCloseAttempt,
      children,
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const cardRef = React.useRef<HTMLDivElement | null>(null);
    const setCardRef = (node: HTMLDivElement | null) => {
      cardRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const [dragging, setDragging] = React.useState(false);

    // Re-center whenever the modal closes or dragging is turned off.
    React.useEffect(() => {
      if (!open || !draggable) setOffset({ x: 0, y: 0 });
    }, [open, draggable]);

    const onHeaderPointerDown = (e: React.PointerEvent<HTMLElement>) => {
      if (!draggable || e.button !== 0) return;
      const target = e.target as HTMLElement;
      const interactive = "button, input, textarea, select, a[href], label, [role='button'], [role='tab'], [role='combobox'], [role='menuitem'], [contenteditable='true']";
      if (target.closest(interactive)) return;
      const card = cardRef.current;
      if (!card) return;
      e.preventDefault();
      const rect = card.getBoundingClientRect();
      const startX = e.clientX;
      const startY = e.clientY;
      const base = { x: offset.x, y: offset.y };
      // Keep the whole card inside the viewport.
      const minX = base.x - rect.left;
      const maxX = base.x + (window.innerWidth - rect.right);
      const minY = base.y - rect.top;
      const maxY = base.y + (window.innerHeight - rect.bottom);
      const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), Math.max(lo, hi));
      setDragging(true);
      const move = (ev: PointerEvent) => {
        setOffset({
          x: clamp(base.x + ev.clientX - startX, minX, maxX),
          y: clamp(base.y + ev.clientY - startY, minY, maxY),
        });
      };
      const up = () => {
        setDragging(false);
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
    };

    return (
      <DialogPrimitive.Root open={open} onOpenChange={(v) => { if (!v) onClose?.(); }}>
        {/* Hidden trigger required by Radix internals — visually absent (same as `Overlay`) */}
        <DialogPrimitive.Trigger asChild>
          <span aria-hidden="true" className="sr-only" />
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal container={container}>
          <DialogPrimitive.Overlay className={cn(overlayVariants({ variant }), overlayClassName)} />

          <DialogPrimitive.Content
            ref={contentRef}
            {...(alert ? { role: "alertdialog" } : {})}
            // Move focus to the safe action when asked (alert dialogs default
            // to the element marked `data-modal-cancel`); otherwise leave
            // Radix's first-focusable behavior alone.
            onOpenAutoFocus={(e) => {
              const target =
                initialFocusRef?.current ??
                (alert ? contentRef.current?.querySelector<HTMLElement>("[data-modal-cancel]") : null);
              if (target) {
                e.preventDefault();
                target.focus();
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            // Radix's own outside-interaction dismissal is disabled —
            // backdrop-click closing is handled manually below instead,
            // since Content spans the full viewport and the actual card is
            // a nested child: "clicked the backdrop" == "clicked Content
            // itself, not one of its descendants".
            onInteractOutside={(e) => e.preventDefault()}
            // Tied to the same flag as backdrop-click (matches `Overlay`'s
            // existing behavior): a modal that can't be dismissed by
            // clicking outside also can't be dismissed via Escape (e.g. a
            // must-choose welcome modal), while both dismiss together
            // otherwise.
            onEscapeKeyDown={(e) => {
              if (!closeOnBackdropClick) { e.preventDefault(); return; }
              if (preventClose) { e.preventDefault(); onCloseAttempt?.(); }
            }}
            onClick={(e) => {
              if (closeOnBackdropClick && e.target === e.currentTarget) {
                if (preventClose) onCloseAttempt?.();
                else onClose?.();
              }
            }}
            {...(!description ? { "aria-describedby": undefined } : {})}
          >
            {/* Radix requires a `Title` somewhere in `Content` for a real
                accessible name — sr-only here since `ContainerHeader` below
                already renders the visible title as its own heading; a
                generic fallback covers icon-only headers with no title text. */}
            <DialogPrimitive.Title className="sr-only">
              {headerTitle || ariaTitle || "Dialog"}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="sr-only">
                {description}
              </DialogPrimitive.Description>
            )}

            <div
              ref={setCardRef}
              className={cn(containerVariants({ variant: "modal" }), "flex flex-col", className)}
              style={
                draggable
                  ? {
                      transform: `translate(${offset.x}px, ${offset.y}px)`,
                      // No easing while dragging, or the card would lag behind the pointer.
                      ...(dragging ? { transition: "none" } : null),
                    }
                  : undefined
              }
            >
              <ContainerHeaderSlot
                title={headerTitle}
                icon={headerIcon}
                actions={headerActions}
                titleBadge={headerTitleBadge}
                topSlot={headerTopSlot}
                subhead={headerSubhead}
                bordered={headerBordered}
                className={cn(draggable && "cursor-grab select-none active:cursor-grabbing", headerClassName)}
                {...(draggable ? { onPointerDown: onHeaderPointerDown } : {})}
                {...(headerTitleClassName ? { titleClassName: headerTitleClassName } : {})}
              />
              {children}
              <ContainerFooterSlot
                  content={footerActions}
                  align={footerAlign}
                  bordered={footerBordered}
                  scrollShadow={footerScrollShadow}
                  scrollFade={footerScrollFade}
                  defaultScrollShadow={false}
                  // `mt-auto`: when the card is taller than its content (full screen, fixed height), the
                  // footer stays anchored to the bottom edge instead of following the content.
                  className={cn("mt-auto", footerClassName)}
                />
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }
);
Modal.displayName = "Modal";

export { Modal };
export type { ModalProps };
