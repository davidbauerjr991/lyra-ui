import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { containerVariants } from "./container";
import { ContainerHeader } from "./container-header";
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
      ariaTitle,
      description,
      children,
    },
    ref
  ) => {
    const hasHeader = Boolean(
      headerTitle || headerIcon || headerActions || headerTitleBadge || headerTopSlot || headerSubhead
    );

    return (
      <DialogPrimitive.Root open={open} onOpenChange={(v) => { if (!v) onClose?.(); }}>
        {/* Hidden trigger required by Radix internals — visually absent (same as `Overlay`) */}
        <DialogPrimitive.Trigger asChild>
          <span aria-hidden="true" className="sr-only" />
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal container={container}>
          <DialogPrimitive.Overlay className={cn(overlayVariants({ variant }), overlayClassName)} />

          <DialogPrimitive.Content
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
            onEscapeKeyDown={(e) => { if (!closeOnBackdropClick) e.preventDefault(); }}
            onClick={(e) => {
              if (closeOnBackdropClick && e.target === e.currentTarget) onClose?.();
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

            <div ref={ref} className={cn(containerVariants({ variant: "modal" }), className)}>
              {hasHeader && (
                <ContainerHeader
                  title={headerTitle}
                  icon={headerIcon}
                  actions={headerActions}
                  titleBadge={headerTitleBadge}
                  topSlot={headerTopSlot}
                  subhead={headerSubhead}
                  bordered={headerBordered}
                  className={headerClassName}
                  {...(headerTitleClassName ? { titleClassName: headerTitleClassName } : {})}
                />
              )}
              {children}
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
