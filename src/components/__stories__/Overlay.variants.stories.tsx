import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Overlay, OverlayBackdrop } from "../overlay";
import { Button } from "../button";
import { SampleModal, FRAME_CLASS } from "./Overlay.shared";

const meta: Meta<typeof Overlay> = {
  title: "Headless Primitives/Overlay/Variants",
  component: Overlay,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

function VariantDemo({ variant, buttonLabel }: { variant: "dark" | "light"; buttonLabel: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={FRAME_CLASS}>
      <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
      <Overlay open={open} variant={variant} onClose={() => setOpen(false)}>
        <SampleModal onClose={() => setOpen(false)} />
      </Overlay>
    </div>
  );
}

/* ── Dark overlay (the default look) ── */

export const Dark: Story = {
  name: "Dark overlay",
  render: () => <VariantDemo variant="dark" buttonLabel="Open with Dark Overlay" />,
};

/* ── Light overlay ── */

export const Light: Story = {
  name: "Light overlay",
  render: () => <VariantDemo variant="light" buttonLabel="Open with Light Overlay" />,
};

/* ── OverlayBackdrop (no portal) — a bare div with no Radix state, so it has
   no Escape handling; the page wires its own dismiss. ── */

function BackdropOnlyDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
      <p className="lyra-body-md text-lyra-fg-default">Page content behind the overlay</p>

      <Button className="absolute bottom-4 right-4" onClick={() => setOpen(true)}>
        Show backdrop
      </Button>

      {open && (
        <>
          <OverlayBackdrop variant="dark" className="absolute rounded-lyra-lg" onClick={() => setOpen(false)} />
          <div className="absolute z-50">
            <Button variant="outline" onClick={() => setOpen(false)}>Dismiss</Button>
          </div>
        </>
      )}
    </div>
  );
}

export const BackdropOnly: Story = {
  name: "Backdrop only (no portal)",
  render: () => <BackdropOnlyDemo />,
};
