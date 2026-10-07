import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../tooltip";
import type { TooltipPlacement } from "../tooltip";
import { Button } from "../button";
import { SHORT_TEXT, TOOLTIP_PLACEMENTS } from "./Tooltip.shared";

const meta: Meta<typeof Tooltip> = {
  title: "Headless Primitives/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  // Real Tooltip props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
  argTypes: {
    content: { control: "text" },
    placement: { control: "radio", options: TOOLTIP_PLACEMENTS },
    delayMs: { control: "select", options: [0, 200, 500, 1000] },
    disabled: { control: "boolean" },
    asLabel: { control: "boolean" },
  },
};

export default meta;

/* Every placement, and short vs long content, side by side have their own page
   under "Tooltip/Variants" — see Tooltip.variants.stories.tsx. */

/* ── Default — consolidated Default, Long Content, All Placements and Static
   Preview into one controls-driven story. `alwaysOpen` is a story-only arg that
   maps to `forceOpen`, so the tooltip stays visible while you adjust the other
   controls (otherwise it only shows on hover). The demo remounts (via `key`)
   whenever a control changes. ── */

interface TooltipDemoProps {
  content?: string;
  placement?: TooltipPlacement;
  delayMs?: number;
  alwaysOpen?: boolean;
  disabled?: boolean;
  asLabel?: boolean;
  onlyWhenTruncated?: boolean;
}

function TooltipDemo({
  content = SHORT_TEXT,
  placement = "top",
  delayMs = 200,
  alwaysOpen = false,
  disabled = false,
  asLabel = false,
  onlyWhenTruncated = false,
}: TooltipDemoProps) {
  if (onlyWhenTruncated) {
    // A label cut off by its container (tooltip shows) next to one that fits (it doesn't)
    return (
      <div className="flex flex-col gap-8 px-40 py-24">
        {[
          { id: "cut", text: "A long label that gets cut off by its container" },
          { id: "fits", text: "Fits" },
        ].map((row) => (
          <Tooltip
            key={row.id}
            content={content}
            placement={placement}
            delayMs={delayMs}
            forceOpen={alwaysOpen && row.id === "cut"}
            disabled={disabled}
            asLabel={asLabel}
            onlyWhenTruncated
          >
            <span tabIndex={0} className="lyra-body-md block w-32 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1">
              {row.text}
            </span>
          </Tooltip>
        ))}
      </div>
    );
  }
  return (
    // Room around the trigger so the tooltip has space on every side.
    <div className="px-40 py-24">
      <Tooltip
        content={content}
        placement={placement}
        delayMs={delayMs}
        forceOpen={alwaysOpen}
        disabled={disabled}
        asLabel={asLabel}
      >
        <Button variant="outline" size="sm">Hover me</Button>
      </Tooltip>
    </div>
  );
}

type TooltipDemoStory = StoryObj<TooltipDemoProps>;

export const Default: TooltipDemoStory = {
  render: (args) => <TooltipDemo key={JSON.stringify(args)} {...args} />,
  args: {
    content: SHORT_TEXT,
    placement: "top",
    delayMs: 200,
    alwaysOpen: false,
    disabled: false,
    asLabel: false,
    onlyWhenTruncated: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Always open", "Disabled", "Delay", "Use as label", "Only when truncated",
        "Content",
        "Placement",
        "alwaysOpen", "disabled", "delayMs", "asLabel", "onlyWhenTruncated",
        "content",
        "placement",
      ],
      sort: "none",
    },
  },
  argTypes: {
    alwaysOpen: {
      name: "Always open",
      control: "boolean",
      description: "Keeps the tooltip showing instead of waiting for hover (`forceOpen`). Handy for adjusting the other controls.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Stops the tooltip from ever opening.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    delayMs: {
      name: "Delay",
      control: "select",
      options: [0, 200, 500, 1000],
      description: "Milliseconds the pointer waits on the trigger before the tooltip opens (`delayMs`).",
      table: { category: "Behavior", defaultValue: { summary: "200" } },
    },
    asLabel: {
      name: "Use as label",
      control: "boolean",
      description: "Also gives the trigger the tooltip text as its accessible name (`asLabel`). For icon-only triggers with no visible text.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    onlyWhenTruncated: {
      name: "Only when truncated",
      control: "boolean",
      description: "Swaps the trigger for two labels in a narrow box: the one that is cut off shows the tooltip on hover or focus, the one that fits doesn't (`onlyWhenTruncated`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    content: {
      name: "Content",
      control: "text",
      description: "The tooltip text. Long text wraps onto several lines.",
      table: { category: "Content", defaultValue: { summary: SHORT_TEXT } },
    },
    placement: {
      name: "Placement",
      control: "radio",
      options: TOOLTIP_PLACEMENTS,
      description: "Which side of the trigger the tooltip appears on. It flips if there isn't room.",
      table: { category: "Appearance", defaultValue: { summary: "top" } },
    },
  },
};
