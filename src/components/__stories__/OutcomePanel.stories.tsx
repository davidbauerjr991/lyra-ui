import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OutcomePanel, type ChannelOutcomeConfig } from "../outcome-panel";
import { Button } from "../button";
import { SuccessIconSolid } from "../icons/success-icon-solid";
import type { DispositionOption } from "../disposition-select";
import type { TagPickerOption } from "../tag-picker";

/** Same shapes/values `InteractionNavItem.stories.tsx` uses for the wired
 *  Outcome popover on a real channel row — reused here (not redefined) so
 *  the standalone panel and the one embedded in a channel row show
 *  identical option lists, not just a visually similar form. */
const RESOLUTION_OPTIONS: ChannelOutcomeConfig["resolutionOptions"] = [
  { label: "Open", dotColor: "var(--lyra-color-status-info-strong)" },
  { label: "Pending", dotColor: "var(--lyra-color-status-warning-strong)" },
  { label: "Escalated", dotColor: "var(--lyra-color-status-critical-strong)" },
  { label: "Resolved", dotColor: "var(--lyra-color-status-success-strong)" },
  { label: "Closed", dotColor: "var(--lyra-color-fg-secondary)" },
];

const TAG_OPTIONS: TagPickerOption[] = [
  { label: "Billing", variant: "warning" },
  { label: "Technical", variant: "info" },
  { label: "Escalated", variant: "critical" },
  { label: "Follow-Up", variant: "purple" },
  { label: "Resolved", variant: "success" },
];

const DISPOSITION_OPTIONS: DispositionOption[] = [
  { value: "resolved-first-contact", label: "Resolved — First Contact", category: "Resolution" },
  { value: "resolved-follow-up", label: "Resolved — Follow-Up Required", category: "Resolution" },
  { value: "escalated-tier-2", label: "Escalated — Tier 2", category: "Escalation" },
  { value: "transferred-billing", label: "Transferred — Billing", category: "Transfer" },
  { value: "no-action-needed", label: "No Action Needed", category: "Resolution" },
];

/** Builds a fully-wired `ChannelOutcomeConfig` from local `useState` — the
 *  same "lift it yourself" contract a real consumer follows
 *  (`AgentNextGenPage.tsx`, or `ChannelRow`/`ChannelTab`'s own
 *  `InteractionChannel.outcome` field, channel-row.tsx). Not exported from
 *  the library itself — `OutcomePanel` only needs a `ChannelOutcomeConfig`
 *  object, however the consumer chooses to produce one. */
function useDemoOutcome(initialTags: string[] = []): ChannelOutcomeConfig {
  const [open, setOpen] = React.useState(false);
  const [resolution, setResolution] = React.useState("Open");
  const [selectedTags, setSelectedTags] = React.useState<string[]>(initialTags);
  const [dispositionCode, setDispositionCode] = React.useState("");
  const [summary, setSummary] = React.useState("");

  return {
    open,
    onOpenChange: setOpen,
    resolutionOptions: RESOLUTION_OPTIONS,
    resolution,
    onResolutionChange: setResolution,
    tagOptions: TAG_OPTIONS,
    selectedTags,
    onTagsChange: setSelectedTags,
    dispositionOptions: DISPOSITION_OPTIONS,
    dispositionCode,
    onDispositionChange: setDispositionCode,
    summary,
    onSummaryChange: setSummary,
    onSave: () => setOpen(false),
    onCancel: () => setOpen(false),
  };
}

const meta: Meta<typeof OutcomePanel> = {
  title: "UI/OutcomePanel",
  component: OutcomePanel,
  tags: ["autodocs"],
  parameters: {
    // Matches the `z-[10003]` this popover's own `Popover` is set to
    // (outcome-panel.tsx) — same "padded" canvas every other popover-style
    // story in this design system renders on, so it isn't clipped by a
    // tight Storybook iframe.
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof OutcomePanel>;

/* ── Default — a plain button trigger ──
   `OutcomePanel` only owns the popover + form (see its own doc comment,
   outcome-panel.tsx) — the trigger is always supplied by the consumer, and
   opening/closing it is the trigger's own responsibility. A plain outline
   `Button` is the simplest real trigger; `ChannelRow`'s own standalone
   Outcome button (a `SuccessIconSolid` icon button) is shown separately
   below since that's the shape most consumers reaching for this panel
   outside a channel row will actually want to match. */
function OutcomePanelDefaultDemo() {
  const outcome = useDemoOutcome(["Technical"]);
  return (
    <OutcomePanel outcome={outcome}>
      <Button variant="outline" size="md" onClick={() => outcome.onOpenChange(true)}>
        Log Outcome
      </Button>
    </OutcomePanel>
  );
}

export const Default: Story = {
  render: () => <OutcomePanelDefaultDemo />,
};

/* ── Icon trigger — matches ChannelRow's own button ──
   Same `SuccessIconSolid` "blue check" button `ChannelRow`'s standalone
   Outcome button renders (channel-row.tsx) — for a consumer that wants
   this exact look outside of a channel row. */
function OutcomePanelIconTriggerDemo() {
  const outcome = useDemoOutcome();
  return (
    <OutcomePanel outcome={outcome} placement="bottom" align="start">
      <Button
        variant="icon"
        size="icon-sm"
        title="Outcome"
        className="text-lyra-fg-secondary"
        onClick={() => outcome.onOpenChange(true)}
      >
        <SuccessIconSolid className="h-4 w-4 text-lyra-status-info-strong" />
      </Button>
    </OutcomePanel>
  );
}

export const IconTrigger: Story = {
  name: "Icon Trigger (matches ChannelRow)",
  render: () => <OutcomePanelIconTriggerDemo />,
};
