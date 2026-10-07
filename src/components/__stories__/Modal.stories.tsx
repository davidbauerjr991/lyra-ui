import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "../modal";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import {
  CloseButton,
  ToneContent,
  toneConfig,
  widths,
  type ModalSize,
  type ModalTone,
} from "./Modal.shared";

/* ── UI/Modal ──
   Every story here renders the real `Modal` component (built on
   `@radix-ui/react-dialog`, see `modal.tsx`). */

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  // Real Modal props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* A static grid of every tone, and the fixed header + footer overflow layout,
   each have their own page under "Modal/Variants" — see
   Modal.variants.stories.tsx. */

/* ── Default — consolidated Small / Medium / Large, Warning, Destructive,
   Error, Info, Success and Fullscreen into one controls-driven story
   (previously nine separate stories). It opens from a trigger button, so
   the close button, Escape (when "Close on backdrop click" is on) and
   backdrop click really close it, as in an app. ── */

interface ModalDemoProps {
  size?: ModalSize;
  tone?: ModalTone;
  fullscreen?: boolean;
  backdrop?: "dark" | "light";
  closeOnBackdropClick?: boolean;
  alert?: boolean;
  preventClose?: boolean;
}

function ModalDemo({
  size = "md",
  tone = "standard",
  fullscreen = false,
  backdrop = "dark",
  closeOnBackdropClick = false,
  alert = false,
  preventClose = false,
}: ModalDemoProps) {
  const [open, setOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const { title, icon } = toneConfig[tone];

  return (
    <>
      <Button onClick={() => { setBlocked(false); setOpen(true); }}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        alert={alert}
        preventClose={preventClose}
        onCloseAttempt={() => setBlocked(true)}
        variant={backdrop}
        closeOnBackdropClick={closeOnBackdropClick}
        headerTitle={title}
        headerIcon={icon}
        headerActions={<CloseButton onClick={() => setOpen(false)} />}
        className={cn(
          "transition-all duration-200",
          fullscreen ? "w-screen h-screen rounded-none" : widths[size]
        )}
      >
        <ToneContent
          tone={tone}
          onClose={() => setOpen(false)}
          note={
            blocked ? (
              <p role="status" className="lyra-body-sm text-lyra-status-critical-strong">
                Close blocked: you have unsaved changes. Use a button to leave.
              </p>
            ) : undefined
          }
        />
      </Modal>
    </>
  );
}

type ModalDemoStory = StoryObj<ModalDemoProps>;

export const Default: ModalDemoStory = {
  args: {
    size: "md",
    tone: "standard",
    fullscreen: false,
    backdrop: "dark",
    closeOnBackdropClick: false,
    alert: false,
    preventClose: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Close on backdrop click", "Alert dialog", "Prevent close", "Tone", "Fullscreen", "Size", "Backdrop",
        "closeOnBackdropClick", "alert", "preventClose", "tone", "fullscreen", "size", "backdrop",
      ],
      sort: "none",
    },
  },
  argTypes: {
    closeOnBackdropClick: {
      name: "Close on backdrop click",
      control: "boolean",
      description: "Clicking the backdrop or pressing Escape closes the modal. Off, only the close and action buttons do.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    alert: {
      name: "Alert dialog",
      control: "boolean",
      description: "Announced as an alert dialog, and focus starts on the Cancel button (marked data-modal-cancel) instead of the first control. Try it with the Warning or Destructive tone.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    preventClose: {
      name: "Prevent close",
      control: "boolean",
      description: "Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turn on Close on backdrop click too, then press Escape to see the note.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    tone: {
      name: "Tone",
      control: "select",
      options: ["standard", "warning", "destructive", "error", "info", "success"],
      labels: {
        standard: "Standard (form)",
        warning: "Warning",
        destructive: "Destructive",
        error: "Error",
        info: "Info",
        success: "Success",
      },
      description: "Header icon, title, message and footer buttons. Standard is a form.",
      table: { category: "Content", defaultValue: { summary: "standard" } },
    },
    fullscreen: {
      name: "Fullscreen",
      control: "boolean",
      description: "Fills the whole viewport with square corners.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      labels: { sm: "Small (360px)", md: "Medium (480px)", lg: "Large (640px)" },
      description: "Modal width.",
      if: { arg: "fullscreen", truthy: false },
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    backdrop: {
      name: "Backdrop",
      control: "radio",
      options: ["dark", "light"],
      labels: { dark: "Dark", light: "Light" },
      description: "Dark dims the page behind the modal. Light is a frosted white blur.",
      table: { category: "Appearance", defaultValue: { summary: "dark" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes, so it closes again.
    <ModalDemo key={JSON.stringify(args)} {...args} />
  ),
};
