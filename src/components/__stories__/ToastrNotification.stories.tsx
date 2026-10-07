import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastContainer } from "../toast";
import type { ToastVariant } from "../toast";
import { TOAST_COPY, TOAST_VARIANTS } from "./ToastrNotification.shared";

const meta: Meta<typeof Toast> = {
  title: "Headless Primitives/Toastr Notification",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  // Real Toast props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    variant: { control: "radio", options: TOAST_VARIANTS },
    title: { control: "text" },
    duration: { control: "select", options: [0, 3000, 5000, 10000] },
  },
};

export default meta;

/* All four variants side by side, and a live demo that fires toasts from
   buttons, have their own pages under "Toastr Notification/Variants" — see
   ToastrNotification.variants.stories.tsx. */

/* ── Default — consolidated Toast — Warning, Error, Info and Success into one
   controls-driven story. `body` is a story-only arg for the toast's message
   (its children). `Toast` is built on Radix's Toast primitive, which only
   renders inside a `ToastContainer`, so the demo wraps it in one;
   `static inset-auto` puts that container back in the page flow instead of
   floating bottom-right. The demo remounts (via `key`) whenever a control
   changes, which also replays the auto-dismiss timer. ── */

interface ToastDemoProps {
  variant?: ToastVariant;
  title?: string;
  body?: string;
  duration?: number;
  withAction?: boolean;
  actionLabel?: string;
}

function ToastDemo({ variant = "info", title = "Info", body = TOAST_COPY.info.message, duration = 0, withAction = false, actionLabel = "Undo" }: ToastDemoProps) {
  return (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant={variant} title={title || undefined} duration={duration} onDismiss={() => {}} actionLabel={withAction ? actionLabel || "Undo" : undefined} onAction={() => {}}>
        {body}
      </Toast>
    </ToastContainer>
  );
}

type ToastDemoStory = StoryObj<ToastDemoProps>;

export const Default: ToastDemoStory = {
  render: (args) => <ToastDemo key={JSON.stringify(args)} {...args} />,
  args: {
    variant: "info",
    title: "Info",
    body: TOAST_COPY.info.message,
    duration: 0,
    withAction: false,
    actionLabel: "Undo",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Variant", "Auto-dismiss",
        "Title", "Message", "With action", "Action label",
        "variant", "duration",
        "title", "body", "withAction", "actionLabel",
      ],
      sort: "none",
    },
  },
  argTypes: {
    variant: {
      name: "Variant",
      control: "radio",
      options: TOAST_VARIANTS,
      description: "Sets the color and icon: info, success, warning or error.",
      table: { category: "Behavior", defaultValue: { summary: "info" } },
    },
    duration: {
      name: "Auto-dismiss",
      control: "select",
      options: [0, 3000, 5000, 10000],
      description: "Milliseconds before the toast closes by itself (`duration`). 0 keeps it open until dismissed. When it closes, change any control to show it again.",
      table: { category: "Behavior", defaultValue: { summary: "0" } },
    },
    title: {
      name: "Title",
      control: "text",
      description: "Bold text at the top. Clear it for a toast with only a message.",
      table: { category: "Content", defaultValue: { summary: "Info" } },
    },
    withAction: {
      name: "With action",
      control: "boolean",
      description: "Adds an action button under the message (`actionLabel`, `onAction`). Clicking it runs `onAction` and dismisses the toast.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    actionLabel: {
      name: "Action label",
      control: "text",
      description: "Text on the action button, such as Undo or View (`actionLabel`). Clear it to fall back to \"Undo\".",
      if: { arg: "withAction", truthy: true },
      table: { category: "Content", defaultValue: { summary: "Undo" } },
    },
    body: {
      name: "Message",
      control: "text",
      description: "The toast's body text (its children).",
      table: { category: "Content" },
    },
  },
};
