/* Shared example data and building blocks for Modal.stories.tsx (Default
   playground) and Modal.variants.stories.tsx (Variants pages). Not a stories
   file — it only holds what both use, so the two can't drift apart. */
import type { ReactNode } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { RadioGroup, RadioGroupItem } from "../radio";
import { Tooltip } from "../tooltip";
import { WarningIcon } from "../icons/warning-icon";
import { ErrorIcon } from "../icons/error-icon";
import { InfoIcon } from "../icons/info-icon";
import { SuccessIcon } from "../icons/success-icon";
import { X } from "lucide-react";

/* ── Close button ── */
export function CloseButton({ label = "Close dialog", onClick }: { label?: string; onClick?: () => void }) {
  return (
    <Tooltip content={label} placement="bottom" asLabel>
      <button
        aria-label={label}
        onClick={onClick}
        className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
      >
        <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </Tooltip>
  );
}

/* ── Widths ── */
export const widths = { sm: "w-[360px]", md: "w-[480px]", lg: "w-[640px]" } as const;
export type ModalSize = keyof typeof widths;

/* ── Standard form content ── */
export function FormContent() {
  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        <Input label="Input Label" placeholder="Text" />
        <Select
          label="Input Label"
          options={[
            { value: "a", label: "Option A" },
            { value: "b", label: "Option B" },
            { value: "c", label: "Option C" },
          ]}
        />
        <RadioGroup label="Input Label" defaultValue="option1" name="modal-radio">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </>
  );
}

/* ── Tones: header title/icon + body + footer buttons for each ── */
export const TONES = ["standard", "warning", "destructive", "error", "info", "success"] as const;
export type ModalTone = (typeof TONES)[number];

interface ToneConfig {
  title: string;
  icon?: ReactNode;
  /** Body paragraph (every tone except `standard`, which renders `FormContent`). */
  body?: string;
  footer?: ReactNode;
}

export const toneConfig: Record<ModalTone, ToneConfig> = {
  standard: { title: "Dialog Title" },
  warning: {
    title: "Exit without saving?",
    icon: <WarningIcon className="h-5 w-5" />,
    body:
      "Use a warning modal whenever an action might have permanent implications. Clearly describe what will happen if they proceed, and always offer a safe way to exit.",
    footer: (
      <>
        <Button variant="outline" data-modal-cancel>Cancel</Button>
        <Button>Continue</Button>
      </>
    ),
  },
  destructive: {
    title: "Delete Policy?",
    icon: <WarningIcon className="h-5 w-5" />,
    body:
      "Use a destructive modal for irreversible actions with high impact on the system. This action cannot be undone.",
    footer: (
      <>
        <Button variant="outline" data-modal-cancel>Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </>
    ),
  },
  error: {
    title: "Action failed",
    icon: <ErrorIcon className="h-5 w-5" />,
    body: "The action could not be completed. Review the errors below and try again.",
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Retry</Button>
        <Button>OK</Button>
      </>
    ),
  },
  info: {
    title: "Important notice!",
    icon: <InfoIcon className="h-5 w-5" />,
    body:
      "Use an info modal only when the message is important enough to interrupt the user's workflow.",
    footer: <Button>OK</Button>,
  },
  success: {
    title: "Action Completed",
    icon: <SuccessIcon className="h-5 w-5" />,
    body: "Your changes have been saved successfully.",
    footer: (
      <>
        <Button variant="outline">View Details</Button>
        <Button>Done</Button>
      </>
    ),
  },
};

/** Body and footer for a tone — the form for `standard`, a message plus buttons otherwise. */
export function ToneContent({ tone, onClose, note }: { tone: ModalTone; onClose?: () => void; note?: ReactNode }) {
  if (tone === "standard") return <FormContent />;
  const { body, footer } = toneConfig[tone];
  return (
    <>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">{body}</p>
        {note}
      </div>
      {/* The Cancel button (marked `data-modal-cancel`) closes the demo modal */}
      <div
        className="flex justify-end gap-2 px-5 pb-5 mt-6"
        onClick={(e) => {
          if (onClose && (e.target as HTMLElement).closest("[data-modal-cancel]")) onClose();
        }}
      >
        {footer}
      </div>
    </>
  );
}

/** Scrollable rows for the Overflow variant's body. */
export function QueryRows({ count }: { count: number }) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas">
          <p className="lyra-body-md text-lyra-fg-default">Row {i + 1} — scrollable content area</p>
          <div className="flex gap-3 mt-2">
            <Input placeholder="Condition..." className="flex-1" />
            <Select
              options={[
                { value: "eq", label: "Equals" },
                { value: "ne", label: "Not Equals" },
              ]}
              className="w-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
