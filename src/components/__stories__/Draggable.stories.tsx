import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Draggable, type DraggableVariant } from "../draggable";

const meta: Meta<typeof Draggable> = {
  title: "Atoms/Draggable",
  component: Draggable,
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof Draggable>;

export const Float: Story = {
  name: "Float (default)",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="relative w-full h-screen">
    <div className="absolute top-4 left-4">
    <Draggable
      defaultWidth={300}
      defaultHeight={200}
      className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-lyra-bg-surface-container-subtle border-b border-lyra-border-subtle">
        <span className="lyra-body-md-emphasis text-lyra-fg-default flex-1">Drag me by the header</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-sm text-lyra-fg-secondary">Resize from the bottom-right corner</p>
      </div>
    </Draggable>
    </div>
    </div>
  ),
};

export const Docked: Story = {
  name: "Docked (right side)",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-md text-lyra-fg-secondary">Main content — drag the left edge of the panel to resize</p>
      </div>
      <div className="h-full pr-3 pb-3">
        <Draggable
          variant="docked"
          defaultWidth={320}
          minWidth={280}
          className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-lyra-bg-surface-container-subtle border-b border-lyra-border-subtle shrink-0">
            <span className="lyra-body-md-emphasis text-lyra-fg-default flex-1">Docked Panel</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="lyra-body-sm text-lyra-fg-secondary">Drag left edge to resize</p>
          </div>
        </Draggable>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  name: "Interactive (toggle float ↔ docked)",
  parameters: { layout: "fullscreen" },
  render: () => {
    const [variant, setVariant] = useState<DraggableVariant>("float");

    const panel = (
      <Draggable
        variant={variant}
        defaultWidth={320}
        defaultHeight={420}
        minWidth={280}
        minHeight={200}
        onVariantChange={setVariant}
        className={[
          "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",
          variant === "float" ? "shadow-lg" : "",
        ].join(" ")}
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-lyra-bg-surface-container-subtle border-b border-lyra-border-subtle shrink-0">
          <span className="lyra-body-md-emphasis text-lyra-fg-default flex-1">Panel</span>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="lyra-body-sm text-lyra-fg-secondary text-center">
            Currently <strong>{variant}</strong>.<br />
            Use the icon in the top-right to toggle.
          </p>
        </div>
      </Draggable>
    );

    return (
      <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
        <div className="flex-1 flex items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
        </div>
        {variant === "docked" ? (
          <div className="h-full pr-3 pb-3">{panel}</div>
        ) : (
          <div className="absolute top-16 right-16">{panel}</div>
        )}
      </div>
    );
  },
};
