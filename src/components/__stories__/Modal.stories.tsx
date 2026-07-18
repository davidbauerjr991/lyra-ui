import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "../modal";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { RadioGroup, RadioGroupItem } from "../radio";
import { Tooltip } from "../tooltip";
import { WarningIcon } from "../icons/warning-icon";
import { ErrorIcon } from "../icons/error-icon";
import { InfoIcon } from "../icons/info-icon";
import { SuccessIcon } from "../icons/success-icon";
import { Maximize2, Minimize2, X } from "lucide-react";
import { cn } from "../../lib/utils";

/* ── UI/Modal ──
   Every story here renders the real `Modal` component (built on
   `@radix-ui/react-dialog`, see `modal.tsx`) rather than a bare
   `Container variant="modal"` — the previous version of this file had no
   actual dialog semantics at all (no focus trap, no portal, no Escape
   handling), since `Container` is just visual chrome. `open` is held
   permanently `true` with no trigger button in most stories, matching the
   original "always-visible static preview" intent of this file — these
   are meant to be looked at directly in the Storybook canvas, not
   clicked open. */

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/* ── Shared close button ── */
function CloseButton({ label = "Close dialog", onClick }: { label?: string; onClick?: () => void }) {
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

/* ── Width helpers ── */
const widths = { sm: "w-[360px]", md: "w-[480px]", lg: "w-[640px]" } as const;

/* ── Standard form content ── */
function FormContent() {
  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        <Input label="Input Label" placeholder="Text" />
        <Select label="Input Label" options={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ]} />
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

/* ══════════════════════════════════
   Width variants
══════════════════════════════════ */

export const Small: Story = {
  name: "Small (360px)",
  render: () => (
    <Modal open headerTitle="Dialog Title"
      headerActions={<CloseButton />} className={widths.sm}>
      <FormContent />
    </Modal>
  ),
};

export const Medium: Story = {
  name: "Medium (480px)",
  render: () => (
    <Modal open headerTitle="Dialog Title"
      headerActions={<CloseButton />} className={widths.md}>
      <FormContent />
    </Modal>
  ),
};

export const Large: Story = {
  name: "Large (640px)",
  render: () => (
    <Modal open headerTitle="Dialog Title"
      headerActions={<CloseButton />} className={widths.lg}>
      <FormContent />
    </Modal>
  ),
};

/* ══════════════════════════════════
   Semantic variants
══════════════════════════════════ */

export const Warning: Story = {
  render: () => (
    <Modal open
      headerTitle="Exit without saving?"
      headerIcon={<WarningIcon className="h-5 w-5" />}
      headerActions={<CloseButton />}
      className={widths.md}>
      <div className="flex flex-col gap-4 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use a warning modal whenever an action might have permanent implications.
          Clearly describe what will happen if they proceed, and always offer a safe way to exit.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </Modal>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Modal open
      headerTitle="Delete Policy?"
      headerIcon={<WarningIcon className="h-5 w-5" />}
      headerActions={<CloseButton />}
      className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use a destructive modal for irreversible actions with high impact on the system.
          This action cannot be undone.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </Modal>
  ),
};

export const Error: Story = {
  render: () => (
    <Modal open
      headerTitle="Action failed"
      headerIcon={<ErrorIcon className="h-5 w-5" />}
      headerActions={<CloseButton />}
      className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          The action could not be completed. Review the errors below and try again.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Retry</Button>
        <Button>OK</Button>
      </div>
    </Modal>
  ),
};

export const Info: Story = {
  render: () => (
    <Modal open
      headerTitle="Important notice!"
      headerIcon={<InfoIcon className="h-5 w-5" />}
      headerActions={<CloseButton />}
      className={widths.md}>
      <div className="px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use an info modal only when the message is important enough to interrupt the user's workflow.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button>OK</Button>
      </div>
    </Modal>
  ),
};

export const Success: Story = {
  render: () => (
    <Modal open
      headerTitle="Action Completed"
      headerIcon={<SuccessIcon className="h-5 w-5" />}
      headerActions={<CloseButton />}
      className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Your changes have been saved successfully.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">View Details</Button>
        <Button>Done</Button>
      </div>
    </Modal>
  ),
};

/* ══════════════════════════════════
   Fullscreen modal — toggleable expand/collapse
══════════════════════════════════ */

function FullscreenDemo() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const headerActions = (
    <div className="flex items-center gap-1">
      <Tooltip content={isFullscreen ? "Restore" : "Fullscreen"} placement="bottom" asLabel>
        <button
          aria-label={isFullscreen ? "Restore modal size" : "Expand to fullscreen"}
          onClick={() => setIsFullscreen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
        >
          {isFullscreen
            ? <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            : <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          }
        </button>
      </Tooltip>
      <CloseButton label="Close dialog" />
    </div>
  );

  return (
    <Modal
      open
      headerTitle="Query Builder"
      headerActions={headerActions}
      className={cn(
        "flex flex-col transition-all duration-200",
        isFullscreen
          ? "w-screen h-screen rounded-none"
          : "w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg"
      )}
    >
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas">
              <p className="lyra-body-md text-lyra-fg-default">Row {i + 1} — scrollable content area</p>
              <div className="flex gap-3 mt-2">
                <Input placeholder="Condition..." className="flex-1" />
                <Select options={[
                  { value: "eq", label: "Equals" },
                  { value: "ne", label: "Not Equals" },
                ]} className="w-40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed footer */}
      <div className="flex-shrink-0 flex justify-end gap-2 px-5 py-4">
        <Button variant="outline">Save Search</Button>
        <div className="flex-1" />
        <Button variant="outline">Cancel</Button>
        <Button>Apply</Button>
      </div>
    </Modal>
  );
}

export const Fullscreen: Story = {
  name: "Fullscreen (toggleable)",
  parameters: { layout: "fullscreen" },
  render: () => <FullscreenDemo />,
};

/* ══════════════════════════════════
   Overflow modal — fixed header + footer, scrollable body
══════════════════════════════════ */

export const Overflow: Story = {
  name: "Overflow (fixed header + footer)",
  render: () => (
    <Modal open
      headerTitle="Query Builder"
      headerActions={<CloseButton label="Close Query Builder" />}
      className={cn(widths.lg, "flex flex-col max-h-[80vh]")}
    >
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas">
              <p className="lyra-body-md text-lyra-fg-default">Row {i + 1} — scrollable content area</p>
              <div className="flex gap-3 mt-2">
                <Input placeholder="Condition..." className="flex-1" />
                <Select options={[
                  { value: "eq", label: "Equals" },
                  { value: "ne", label: "Not Equals" },
                ]} className="w-40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed footer */}
      <div className="flex-shrink-0 flex justify-end gap-2 px-5 py-4">
        <Button variant="outline">Save Search</Button>
        <div className="flex-1" />
        <Button variant="outline">Cancel</Button>
        <Button>Apply</Button>
      </div>
    </Modal>
  ),
};
