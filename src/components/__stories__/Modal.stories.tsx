import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Tooltip } from "../tooltip";
import { headerActions as headerActionsNode, headerIcon as headerIconNode, headerTag } from "./Container.shared";
import { Modal } from "../modal";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import {
  CloseButton,
  ToneContent,
  toneFooterActions,
  toneConfig,
  widths,
  type ModalSize,
  type ModalTone,
} from "./Modal.shared";

/* ── Custom Primitives/Modal ──
   Every story here renders the real `Modal` component (built on
   `@radix-ui/react-dialog`, see `modal.tsx`). */

const meta: Meta<typeof Modal> = {
  title: "Custom Primitives/Modal",
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
  fullscreenToggle?: boolean;
  draggable?: boolean;
  title?: string;
  showSubhead?: boolean;
  showTitle?: boolean;
  showIcon?: boolean;
  showTag?: boolean;
  showActions?: boolean;
  showCloseButton?: boolean;
  headerBordered?: boolean;
  footerAlign?: "left" | "right" | "full";
  footerBordered?: boolean;
  backdrop?: "dark" | "light";
  closeOnBackdropClick?: boolean;
  alert?: boolean;
  preventClose?: boolean;
}

function ModalDemo({
  size = "md",
  tone = "standard",
  fullscreen = false,
  fullscreenToggle = false,
  draggable = false,
  title: titleOverride = "",
  showSubhead = false,
  showTitle = true,
  showIcon = true,
  showTag = false,
  showActions = false,
  showCloseButton = true,
  headerBordered = false,
  footerAlign = "right",
  footerBordered = false,
  backdrop = "dark",
  closeOnBackdropClick = false,
  alert = false,
  preventClose = false,
}: ModalDemoProps) {
  const [open, setOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  // With Prevent close on, every dismissal route (X, Cancel, Escape, backdrop) is treated as
  // "there are unsaved changes": it shows the note instead of closing. "Discard and close" leaves.
  const requestClose = () => { if (preventClose) setBlocked(true); else setOpen(false); };
  // The toggle only exists while the Fullscreen control is on; clicking it flips this local state
  // between full screen and the normal Size.
  const [isFull, setIsFull] = useState(fullscreen);
  const showToggle = fullscreen && fullscreenToggle;
  const { title: toneTitle, icon: toneIcon } = toneConfig[tone];
  const title = titleOverride || toneTitle;
  const icon = showIcon ? (toneIcon ?? headerIconNode) : undefined;

  return (
    <>
      <Button onClick={() => { setBlocked(false); setIsFull(fullscreen); setOpen(true); }}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        alert={alert}
        preventClose={preventClose}
        draggable={draggable && !isFull}
        onCloseAttempt={() => setBlocked(true)}
        variant={backdrop}
        // Prevent close only has something to guard once Escape / backdrop clicks can dismiss the modal,
        // so turning it on in the playground also turns those on.
        closeOnBackdropClick={closeOnBackdropClick || preventClose}
        headerTitle={showTitle ? title : undefined}
        headerIcon={icon}
        headerSubhead={showSubhead ? "Supporting text under the title" : undefined}
        headerTitleBadge={showTag ? headerTag : undefined}
        headerBordered={headerBordered}
        headerActions={
          <div className="flex items-center gap-1">
            {showToggle && (
              <Tooltip content={isFull ? "Exit full screen" : "Full screen"} placement="bottom" asLabel>
                <button
                  type="button"
                  aria-label={isFull ? "Exit full screen" : "Full screen"}
                  aria-pressed={isFull}
                  onClick={() => setIsFull((v) => !v)}
                  className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                >
                  {isFull
                    ? <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    : <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
                </button>
              </Tooltip>
            )}
            {showActions && headerActionsNode}
            {showCloseButton && <CloseButton onClick={requestClose} />}
          </div>
        }
        footerActions={toneFooterActions(tone, requestClose)}
        footerAlign={footerAlign}
        footerBordered={footerBordered}
        className={cn(
          // Same duration and easing both ways, so entering and leaving full screen mirror each other.
          // The width/height transition runs between explicit sizes (px <-> 100vw, auto <-> 100vh);
          // `interpolate-size` lets the browser animate to and from `height: auto`, which it
          // otherwise can't (that was the jump).
          "transition-[width,height,border-radius] duration-300 ease-in-out [interpolate-size:allow-keywords]",
          isFull ? "w-screen h-screen rounded-none" : cn(widths[size], "h-auto")
        )}
      >
        <ToneContent
          tone={tone}
          note={
            blocked ? (
              <p role="status" className="lyra-body-sm text-lyra-status-critical-strong">
                Close blocked: you have unsaved changes.{" "}
                <button type="button" className="underline" onClick={() => setOpen(false)}>Discard and close</button>
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
    fullscreenToggle: false,
    draggable: false,
    showTitle: true,
    title: "",
    showSubhead: false,
    showIcon: true,
    showTag: false,
    showActions: false,
    showCloseButton: true,
    headerBordered: false,
    footerAlign: "right",
    footerBordered: false,
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
        "Close on backdrop click", "Alert dialog", "Prevent close", "Tone", "Fullscreen", "Fullscreen toggle", "Draggable", "Title", "Title text", "Subtitle", "Icon", "Alert tag", "Actions", "Close button", "Header border", "Footer align", "Footer border", "Size", "Backdrop",
        "closeOnBackdropClick", "alert", "preventClose", "tone", "fullscreen", "fullscreenToggle", "draggable", "showTitle", "title", "showSubhead", "showIcon", "showTag", "showActions", "showCloseButton", "headerBordered", "footerAlign", "footerBordered", "size", "backdrop",
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
      description: "Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turning it on also enables Escape and backdrop dismissal in this playground; press Escape or click the backdrop to see the \"Close blocked\" note. The close button and Cancel are guarded too, and the note offers \"Discard and close\".",
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
    fullscreenToggle: {
      name: "Fullscreen toggle",
      control: "boolean",
      description: "Adds a header button that switches between full screen and the normal size. Only available while Fullscreen is on.",
      if: { arg: "fullscreen", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    draggable: {
      name: "Draggable",
      control: "boolean",
      description: "Drag the modal by its header (`draggable`). It stays inside the viewport and re-centers when reopened. Position only: no docking or resizing. Not available in full screen.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",
      table: { category: "Header", defaultValue: { summary: "true" } },
    },
    title: {
      name: "Title text",
      if: { arg: "showTitle", truthy: true },
      control: "text",
      description: "Text in the modal's header (`headerTitle`). Empty uses the tone's own title.",
      table: { category: "Header" },
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (`headerSubhead`).",
      table: { category: "Header", defaultValue: { summary: "false" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (`headerIcon`).",
      table: { category: "Header", defaultValue: { summary: "true" } },
    },
    showTag: {
      name: "Alert tag",
      control: "boolean",
      description: "Show a status tag inline right after the title (`headerTitleBadge`).",
      table: { category: "Header", defaultValue: { summary: "false" } },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (`headerActions`).",
      table: { category: "Header", defaultValue: { summary: "false" } },
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show the close button at the far right of the header.",
      table: { category: "Header", defaultValue: { summary: "true" } },
    },
    headerBordered: {
      name: "Header border",
      control: "boolean",
      description: "Border along the bottom edge of the header (`headerBordered`).",
      table: { category: "Header", defaultValue: { summary: "false" } },
    },
    footerAlign: {
      name: "Footer align",
      control: "radio",
      options: ["left", "right", "full"],
      labels: { left: "Left", right: "Right", full: "Full width" },
      description: "Where the footer buttons sit (`footerAlign`): grouped left, grouped right, or stretched to fill the row.",
      table: { category: "Footer", defaultValue: { summary: "right" } },
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Border along the top edge of the footer (`footerBordered`).",
      table: { category: "Footer", defaultValue: { summary: "false" } },
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
