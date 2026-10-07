/* Shared example pieces for Overlay.stories.tsx (Default playground) and
   Overlay.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { Container } from "../container";
import { Button } from "../button";
import { X } from "lucide-react";
import { Tooltip } from "../tooltip";

/* ── Shared close button ── */
export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <Tooltip content="Close" placement="bottom" asLabel>
      <button
        aria-label="Close"
        onClick={onClick}
        className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </Tooltip>
  );
}

/* ── Shared modal ── */
export function SampleModal({ onClose }: { onClose: () => void }) {
  return (
    <Container
      variant="modal"
      headerTitle="Dialog Title"
      headerActions={<CloseButton onClick={onClose} />}
      className="w-[480px] max-w-[calc(100vw-2rem)]"
    >
      <div className="flex flex-col gap-4 px-5 pb-5 pt-2">
        <p className="lyra-body-md text-lyra-fg-default">
          This modal appears above the overlay. Press <kbd className="lyra-body-sm bg-lyra-bg-surface-canvas border border-lyra-border-subtle rounded px-1">Esc</kbd> or click outside to dismiss.
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Confirm</Button>
        </div>
      </div>
    </Container>
  );
}

/* Canvas frame each demo sits in. */
export const FRAME_CLASS =
  "flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle";
