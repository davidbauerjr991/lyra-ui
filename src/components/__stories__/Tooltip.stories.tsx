import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../tooltip";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/* ── Default (Top) ── */

export const Default: Story = {
  render: () => (
    <div className="pt-16">
      <Tooltip content="Tooltip text in here" placement="top">
        <Button variant="outline" size="sm">Hover me (top)</Button>
      </Tooltip>
    </div>
  ),
};

/* ── All Placements ── */

export const Placements: Story = {
  name: "All Placements",
  render: () => (
    <div className="flex flex-col items-center gap-16 py-20">
      <Tooltip content="Tooltip text in here" placement="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip text in here" placement="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <div className="flex items-center gap-32">
        <Tooltip content="Tooltip text in here" placement="left">
          <Button variant="outline" size="sm">Left</Button>
        </Tooltip>
        <Tooltip content="Tooltip text in here" placement="right">
          <Button variant="outline" size="sm">Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

/* ── Long Content ── */

export const LongContent: Story = {
  name: "Long Content",
  render: () => (
    <div className="pt-20">
      <Tooltip
        content="This is a longer tooltip message that wraps across multiple lines to show how the component handles it."
        placement="top"
      >
        <Button variant="outline" size="sm">Hover for long tooltip</Button>
      </Tooltip>
    </div>
  ),
};

/* ── Static Preview (no hover needed) ── */

export const StaticPreview: Story = {
  name: "Static Preview",
  render: () => (
    <div className="flex flex-col items-center gap-12 py-8">
      {(["top", "bottom", "right", "left"] as const).map((placement) => (
        <div key={placement} className="relative inline-flex flex-col items-center">
          <span className="lyra-body-sm text-lyra-fg-secondary mb-1 capitalize">{placement}</span>
          <div
            className="relative inline-flex rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-overlay px-3 py-2 shadow-sm"
          >
            <span className="lyra-body-sm text-lyra-fg-default">Tooltip text in here</span>
            <ArrowStatic placement={placement} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* Helper for static arrow rendering in the preview story */
function ArrowStatic({ placement }: { placement: "top" | "bottom" | "left" | "right" }) {
  const size = 8;
  const common = "absolute h-0 w-0 border-solid border-transparent";

  const outerStyle: React.CSSProperties = {};
  const innerStyle: React.CSSProperties = {};
  let outerClass = common;
  let innerClass = "absolute";

  switch (placement) {
    case "top":
      outerClass += " left-1/2 -translate-x-1/2";
      outerStyle.bottom = -size;
      outerStyle.borderWidth = size;
      outerStyle.borderBottomWidth = 0;
      outerStyle.borderTopColor = "var(--lyra-border-subtle)";
      innerClass += " left-1/2 -translate-x-1/2";
      innerStyle.top = -(size + 1);
      innerStyle.borderWidth = size;
      innerStyle.borderBottomWidth = 0;
      innerStyle.borderStyle = "solid";
      innerStyle.borderColor = "transparent";
      innerStyle.borderTopColor = "var(--lyra-bg-surface-overlay, #fff)";
      break;
    case "bottom":
      outerClass += " left-1/2 -translate-x-1/2";
      outerStyle.top = -size;
      outerStyle.borderWidth = size;
      outerStyle.borderTopWidth = 0;
      outerStyle.borderBottomColor = "var(--lyra-border-subtle)";
      innerClass += " left-1/2 -translate-x-1/2";
      innerStyle.bottom = -(size + 1);
      innerStyle.borderWidth = size;
      innerStyle.borderTopWidth = 0;
      innerStyle.borderStyle = "solid";
      innerStyle.borderColor = "transparent";
      innerStyle.borderBottomColor = "var(--lyra-bg-surface-overlay, #fff)";
      break;
    case "left":
      outerClass += " top-1/2 -translate-y-1/2";
      outerStyle.right = -size;
      outerStyle.borderWidth = size;
      outerStyle.borderRightWidth = 0;
      outerStyle.borderLeftColor = "var(--lyra-border-subtle)";
      innerClass += " top-1/2 -translate-y-1/2";
      innerStyle.left = -(size + 1);
      innerStyle.borderWidth = size;
      innerStyle.borderRightWidth = 0;
      innerStyle.borderStyle = "solid";
      innerStyle.borderColor = "transparent";
      innerStyle.borderLeftColor = "var(--lyra-bg-surface-overlay, #fff)";
      break;
    case "right":
      outerClass += " top-1/2 -translate-y-1/2";
      outerStyle.left = -size;
      outerStyle.borderWidth = size;
      outerStyle.borderLeftWidth = 0;
      outerStyle.borderRightColor = "var(--lyra-border-subtle)";
      innerClass += " top-1/2 -translate-y-1/2";
      innerStyle.right = -(size + 1);
      innerStyle.borderWidth = size;
      innerStyle.borderLeftWidth = 0;
      innerStyle.borderStyle = "solid";
      innerStyle.borderColor = "transparent";
      innerStyle.borderRightColor = "var(--lyra-bg-surface-overlay, #fff)";
      break;
  }

  return (
    <span className={outerClass} style={outerStyle}>
      <span className={innerClass} style={innerStyle} />
    </span>
  );
}
