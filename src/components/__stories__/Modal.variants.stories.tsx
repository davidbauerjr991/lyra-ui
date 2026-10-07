import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";
import { Modal } from "../modal";
import { Container } from "../container";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import {
  CloseButton,
  QueryRows,
  ToneContent,
  TONES,
  toneConfig,
  widths,
} from "./Modal.shared";

/* One page per Modal variant, shown under "Modal/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Modal → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Modal> = {
  title: "UI/Modal/Variants",
  component: Modal,
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/* Every tone side by side. A real `Modal` portals a full-screen backdrop, so
   only one can be open at a time — these use `Container variant="modal"`,
   the same surface and header `Modal` renders, to show them all at once. */
export const AllVariants: Story = {
  name: "All Variants",
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap gap-6">
      {TONES.map((tone) => {
        const { title, icon } = toneConfig[tone];
        return (
          <Container
            key={tone}
            variant="modal"
            headerTitle={title}
            headerIcon={icon}
            headerActions={<CloseButton />}
            className={widths.md}
          >
            <ToneContent tone={tone} />
          </Container>
        );
      })}
    </div>
  ),
};

export const Overflow: Story = {
  name: "Overflow (fixed header + footer)",
  render: () => (
    <Modal
      open
      headerTitle="Query Builder"
      headerActions={<CloseButton label="Close Query Builder" />}
      className={cn(widths.lg, "flex flex-col max-h-[80vh]")}
    >
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
        <QueryRows count={8} />
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

/* Alert dialog — a destructive confirmation announced as `role="alertdialog"`.
   Focus starts on Cancel (the safe action), not the close button. Open it,
   then press Escape or Tab to check. */
export const AlertDialog: Story = {
  name: "Alert Dialog (Destructive)",
  render: () => {
    const [open, setOpen] = useState(false);
    const { title, icon } = toneConfig.destructive;
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete policy…</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeOnBackdropClick
          alert
          description="This permanently deletes the policy."
          headerTitle={title}
          headerIcon={icon}
          headerActions={<CloseButton onClick={() => setOpen(false)} />}
          className={widths.sm}
        >
          <ToneContent tone="destructive" onClose={() => setOpen(false)} />
        </Modal>
      </>
    );
  },
};

/* Prevent close — while the form has unsaved changes, Escape and backdrop
   clicks are blocked and ask for confirmation in a second (alert) dialog. */
export const PreventClose: Story = {
  name: "Prevent Close (Unsaved Changes)",
  render: () => {
    const [open, setOpen] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const keepRef = useRef<HTMLButtonElement>(null);
    const close = () => { setConfirm(false); setDirty(false); setOpen(false); };
    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit details</Button>
        <Modal
          open={open}
          onClose={close}
          closeOnBackdropClick
          preventClose={dirty}
          onCloseAttempt={() => setConfirm(true)}
          headerTitle="Edit details"
          headerActions={<CloseButton onClick={() => (dirty ? setConfirm(true) : close())} />}
          className={widths.md}
        >
          <div className="flex flex-col gap-5 px-5">
            <Input label="Name" placeholder="Type to make changes" onChange={() => setDirty(true)} />
            <p className="lyra-body-sm text-lyra-fg-secondary">
              {dirty ? "Unsaved changes: Escape and backdrop clicks now ask first." : "No changes yet: Escape closes normally."}
            </p>
          </div>
          <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
            <Button variant="outline" onClick={() => (dirty ? setConfirm(true) : close())}>Cancel</Button>
            <Button onClick={close}>Save</Button>
          </div>
        </Modal>
        <Modal
          open={confirm}
          onClose={() => setConfirm(false)}
          alert
          initialFocusRef={keepRef}
          headerTitle="Discard changes?"
          className={widths.sm}
        >
          <p className="lyra-body-md text-lyra-fg-default px-5">Your edits will be lost.</p>
          <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
            <Button ref={keepRef} variant="outline" onClick={() => setConfirm(false)}>Keep editing</Button>
            <Button variant="destructive" onClick={close}>Discard</Button>
          </div>
        </Modal>
      </>
    );
  },
};
