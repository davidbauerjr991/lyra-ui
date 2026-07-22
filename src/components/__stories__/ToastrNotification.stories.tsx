import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Toast, ToastContainer, useToast } from "../toast";
import type { ToastVariant } from "../toast";

const meta: Meta = {
  title: "Headless Primitives/Toastr Notification",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

/* ══════════════════════════════════════════
   Toasts
   ══════════════════════════════════════════ */

/* Each static example below needs a `ToastContainer` ancestor even though
   it's just showing one toast sitting in the page flow, not floating —
   `Toast` is now built on Radix's real Toast primitive, which portals its
   actual rendered content into whatever `Toast.Viewport` is registered on
   the nearest `Toast.Provider` (see `toast.tsx`'s own doc comment); with no
   `ToastContainer` anywhere in the tree at all, `Toast` renders nothing.
   `className="static inset-auto"` overrides `ToastContainer`'s own
   `fixed bottom-4 right-4` positioning back to normal document flow, since
   these stories are documentation examples, not the real floating widget. */

export const ToastAll: Story = {
  name: "Toast — All Variants",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" onDismiss={() => {}}>
        Advise users of conditions that might cause issues.
      </Toast>
      <Toast variant="error" title="Error" onDismiss={() => {}}>
        A critical action has failed and needs attention.
      </Toast>
      <Toast variant="info" title="Info" onDismiss={() => {}}>
        Important background information or system updates.
      </Toast>
      <Toast variant="success" title="Success" onDismiss={() => {}}>
        Action completed successfully.
      </Toast>
    </ToastContainer>
  ),
};

export const ToastWarning: Story = {
  name: "Toast — Warning",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" onDismiss={() => {}}>
        Advise users of conditions that might cause issues.
      </Toast>
    </ToastContainer>
  ),
};

export const ToastError: Story = {
  name: "Toast — Error",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="error" title="Error" onDismiss={() => {}}>
        A critical action has failed and needs attention.
      </Toast>
    </ToastContainer>
  ),
};

export const ToastInfo: Story = {
  name: "Toast — Info",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="info" title="Info" onDismiss={() => {}}>
        Important background information or system updates.
      </Toast>
    </ToastContainer>
  ),
};

export const ToastSuccess: Story = {
  name: "Toast — Success",
  render: () => (
    <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="success" title="Success" onDismiss={() => {}}>
        Action completed successfully.
      </Toast>
    </ToastContainer>
  ),
};

const ToastPlayground = () => {
  const { toasts, addToast, dismissToast } = useToast();

  const fire = (variant: ToastVariant) => {
    const messages: Record<ToastVariant, { title: string; message: string }> = {
      warning: { title: "Warning", message: "This action may have unintended consequences." },
      error: { title: "Error", message: "Something went wrong. Please try again." },
      info: { title: "Info", message: "A new version is available for download." },
      success: { title: "Success", message: "Your changes have been saved." },
    };
    addToast({ variant, ...messages[variant], duration: 5000 });
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={() => fire("warning")}>
        Warning Toast
      </Button>
      <Button variant="outline" size="sm" onClick={() => fire("error")}>
        Error Toast
      </Button>
      <Button variant="outline" size="sm" onClick={() => fire("info")}>
        Info Toast
      </Button>
      <Button variant="outline" size="sm" onClick={() => fire("success")}>
        Success Toast
      </Button>

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

export const ToastInteractive: Story = {
  name: "Toast — Interactive Demo",
  parameters: {
    layout: "fullscreen",
  },
  render: () => <ToastPlayground />,
};
