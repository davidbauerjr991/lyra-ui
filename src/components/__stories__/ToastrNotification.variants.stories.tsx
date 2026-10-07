import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Toast, ToastContainer, useToast } from "../toast";
import type { ToastVariant } from "../toast";
import { TOAST_COPY, TOAST_DEMO_COPY, TOAST_VARIANTS } from "./ToastrNotification.shared";

/* One page per Toast variant, shown under "Toastr Notification/Variants" in
   the sidebar. Static references for design review; the interactive playground
   is Toastr Notification → Default. "!autodocs" keeps this folder from getting
   a second Docs page. */
const meta: Meta<typeof Toast> = {
  title: "Headless Primitives/Toastr Notification/Variants",
  component: Toast,
  tags: ["!autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/* ── All Variants — warning, error, info and success stacked (was Toast —
   All Variants, Warning, Error, Info and Success). Each toast needs a
   `ToastContainer` ancestor; `static inset-auto` puts it back in the page
   flow instead of floating bottom-right. ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      {(["warning", "error", "info", "success"] as ToastVariant[]).map((v) => (
        <Toast key={v} variant={v} title={TOAST_COPY[v].title} onDismiss={() => {}}>
          {TOAST_COPY[v].message}
        </Toast>
      ))}
    </ToastContainer>
  ),
};

/* ── Interactive Demo — buttons fire real, floating toasts that auto-dismiss
   after 5 seconds. ── */
const ToastPlayground = () => {
  const { toasts, addToast, dismissToast } = useToast();

  return (
    <div className="flex gap-2">
      {TOAST_VARIANTS.map((v) => (
        <Button
          key={v}
          variant="outline"
          size="sm"
          onClick={() => addToast({ variant: v, ...TOAST_DEMO_COPY[v], duration: 5000 })}
        >
          {TOAST_DEMO_COPY[v].title} Toast
        </Button>
      ))}

      <ToastContainer>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            variant={t.variant}
            title={t.title}
            duration={t.duration}
            onDismiss={() => dismissToast(t.id)}
          >
            {t.message}
          </Toast>
        ))}
      </ToastContainer>
    </div>
  );
};

export const InteractiveDemo: Story = {
  name: "Interactive Demo",
  parameters: { layout: "fullscreen" },
  render: () => <ToastPlayground />,
};

/* ── With Action — `actionLabel` adds a button under the message (Undo, View).
   Clicking it runs `onAction` and dismisses the toast. Keep the label to one
   short verb. ── */
export const WithAction: Story = {
  name: "With Action",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="success" title="Conversation archived" actionLabel="Undo" onAction={() => {}} onDismiss={() => {}}>
        It moved to your archive.
      </Toast>
      <Toast variant="info" title="New transcript ready" actionLabel="View" onAction={() => {}} onDismiss={() => {}}>
        The call from 2:14 PM has been transcribed.
      </Toast>
    </ToastContainer>
  ),
};

/* ── Keyboard Focus — press Tab to move through the toasts' buttons. The focus
   ring is the shared blue, and the close button's clickable area is 24px even
   though the icon is the same size as before. ── */
export const KeyboardFocus: Story = {
  name: "Keyboard Focus",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" actionLabel="Review" onAction={() => {}} onDismiss={() => {}}>
        Press Tab to reach the buttons.
      </Toast>
    </ToastContainer>
  ),
};
