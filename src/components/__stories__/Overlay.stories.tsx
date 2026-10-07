import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Overlay } from "../overlay";
import { Button } from "../button";
import { SampleModal, FRAME_CLASS } from "./Overlay.shared";

const meta: Meta<typeof Overlay> = {
  title: "Headless Primitives/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (dark, light, backdrop only with no portal) each have their own
   page under "Overlay/Variants" — see Overlay.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates the old Dark overlay,
   Light overlay, Both Variants and Dismiss on backdrop click stories: "Look"
   switches dark / light, and the two dismiss controls are independent
   (`closeOnBackdropClick`, `closeOnEscape`). Open the overlay with the
   button. ── */

interface OverlayDemoProps {
  look?: "dark" | "light";
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

function OverlayDemo({ look = "dark", closeOnBackdropClick = false, closeOnEscape = true }: OverlayDemoProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={FRAME_CLASS}>
      <Button onClick={() => setOpen(true)}>Open overlay</Button>
      <Overlay
        open={open}
        variant={look}
        closeOnBackdropClick={closeOnBackdropClick}
        closeOnEscape={closeOnEscape}
        onClose={() => setOpen(false)}
      >
        <SampleModal onClose={() => setOpen(false)} />
      </Overlay>
    </div>
  );
}

type OverlayDemoStory = StoryObj<typeof OverlayDemo>;

export const Default: OverlayDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so the
  // Docs page's autodocs table still lists every real Overlay prop.
  // Storybook matches `include` against each control's display `name`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: [
        "look", "closeOnBackdropClick", "closeOnEscape",
        "Look", "Dismiss on backdrop click", "Dismiss on Escape",
      ],
      sort: "none",
    },
  },
  args: {
    look: "dark",
    closeOnBackdropClick: false,
    closeOnEscape: true,
  },
  argTypes: {
    closeOnBackdropClick: {
      name: "Dismiss on backdrop click",
      control: "boolean",
      description: "Clicking the backdrop closes the overlay (`closeOnBackdropClick`, default off).",
      table: { category: "Behavior" },
    },
    closeOnEscape: {
      name: "Dismiss on Escape",
      control: "boolean",
      description: "Escape closes the overlay (`closeOnEscape`, default on). Independent of backdrop click.",
      table: { category: "Behavior" },
    },
    look: {
      name: "Look",
      control: "radio",
      options: ["dark", "light"],
      description:
        "Dark: semi-transparent black. Light: frosted white with backdrop blur (`variant`). Both are deliberately static, theme-independent looks.",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes, closing any open overlay.
    <OverlayDemo key={JSON.stringify(args)} {...args} />
  ),
};
