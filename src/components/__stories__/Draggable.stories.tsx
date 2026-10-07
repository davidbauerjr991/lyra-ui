import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Draggable, type DraggableVariant } from "../draggable";
import { ContainerHeader } from "../container-header";

const meta: Meta<typeof Draggable> = {
  title: "Custom Primitives/Draggable",
  component: Draggable,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;

/* Variants (Float, Docked, Main Container - Single Dock, Main Container -
   Multi Dock, Single Container - Real Content) each have their own page
   under "Draggable/Variants" — see Draggable.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   "Float (default)", "Docked (right side)" and "Interactive (toggle float ↔
   docked)" into a single playground. Fully controlled: the panel's own
   dock/undock header button feeds `onVariantChange` back into state, so
   toggling in the canvas behaves exactly like the old Interactive story. ── */

interface DraggableDemoProps {
  variant?: DraggableVariant;
  lockVariant?: boolean;
  showHeaderControls?: boolean;
  dockedResizable?: boolean;
  title?: string;
}

function DraggableDemo({
  variant: initialVariant = "float",
  lockVariant = false,
  showHeaderControls = true,
  dockedResizable = true,
  title = "Panel",
}: DraggableDemoProps) {
  const [variant, setVariant] = useState<DraggableVariant>(initialVariant);
  const [width, setWidth] = useState(320);

  const panel = (
    <Draggable
      variant={variant}
      defaultWidth={320}
      defaultHeight={420}
      minWidth={280}
      minHeight={200}
      onVariantChange={setVariant}
      onWidthChange={setWidth}
      lockVariant={lockVariant}
      showHeaderControls={showHeaderControls}
      dockedResizable={dockedResizable}
      className={[
        "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",
        variant === "float" ? "shadow-lg" : "",
      ].join(" ")}
    >
      <ContainerHeader title={title} bordered={false} />
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="lyra-body-sm text-lyra-fg-secondary text-center">
          Currently <strong>{variant}</strong>, {Math.round(width)}px wide.
          <br />
          {variant === "float"
            ? "Drag the header to move it; resize from the bottom-right corner."
            : "Drag the left edge to resize."}
        </p>
      </div>
    </Draggable>
  );

  return (
    <div className="relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
      </div>
      {variant === "docked" ? (
        <div className="h-full pr-3 pb-3">{panel}</div>
      ) : (
        // `pointer-events-none` — this wrapper only positions the panel's
        // starting spot; the panel's own root stays interactive and follows
        // the drag. If this wrapper were interactive, its untransformed
        // layout box would stay behind as an invisible "ghost" hit area
        // once the panel is dragged away.
        <div className="absolute top-16 left-16 pointer-events-none">{panel}</div>
      )}
    </div>
  );
}

type DraggableDemoStory = StoryObj<typeof DraggableDemo>;

export const Default: DraggableDemoStory = {
  args: {
    variant: "float",
    lockVariant: false,
    showHeaderControls: true,
    dockedResizable: true,
    title: "Panel",
  },
  parameters: {
    layout: "fullscreen",
    // Full-viewport demo — render in an iframe on the Docs page so
    // `h-screen` has a bounded height to fill.
    docs: { story: { inline: false, iframeHeight: 520 } },
    controls: {
      include: [
        "variant",
        "lockVariant",
        "showHeaderControls",
        "dockedResizable",
        "title",
        "Starts as",
        "Lock mode",
        "Header controls",
        "Docked resize handle",
        "Title",
      ],
      sort: "none",
    },
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (`variant`).",
      table: { category: "Behavior" },
    },
    lockVariant: {
      name: "Lock mode",
      control: "boolean",
      description: "Removes the dock/undock button so the panel can't change mode (`lockVariant`).",
      table: { category: "Behavior" },
    },
    showHeaderControls: {
      name: "Header controls",
      control: "boolean",
      description: "Shows the built-in grip and dock/undock buttons (`showHeaderControls`).",
      table: { category: "Behavior" },
    },
    dockedResizable: {
      name: "Docked resize handle",
      control: "boolean",
      description: "Shows the left-edge resize handle while docked (`dockedResizable`).",
      table: { category: "Behavior" },
    },
    title: {
      name: "Title",
      control: "text",
      description: "Text in the panel's header.",
      table: { category: "Content" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <DraggableDemo key={JSON.stringify(args)} {...args} />
  ),
};
