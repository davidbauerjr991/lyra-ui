import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VoiceCallControls } from "../voice-call-controls";

const meta: Meta<typeof VoiceCallControls> = {
  title: "UI/VoiceCallControls",
  component: VoiceCallControls,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof VoiceCallControls>;

/** Ticking elapsed-seconds counter — same pattern a real caller drives this
 *  off of (`clockTick - Thread.startTick`, see `elapsedSeconds`'s own doc
 *  comment, voice-call-controls.tsx), reused here so the timer in every
 *  story below isn't frozen at a single static number. */
function useElapsedSeconds(startAt = 9) {
  const [seconds, setSeconds] = React.useState(startAt);
  React.useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  return seconds;
}

function DefaultDemo() {
  const elapsedSeconds = useElapsedSeconds();
  return (
    <VoiceCallControls
      onHangUp={() => {}}
      elapsedSeconds={elapsedSeconds}
      customerLabel="Marcus Webb"
      customerInitials="MW"
      onToggleTranscript={() => {}}
    />
  );
}

export const Default: Story = {
  render: () => <DefaultDemo />,
};

/* ── Unmatched caller ──
   No `customerInitials` — demonstrates the generic `User`-icon avatar
   fallback (this design system's standard "primary" avatar look, same one
   `InteractionNavItem`'s own compact-tile avatar falls back to) rather than
   real initials, for a dialed number with no contact match. */
function UnmatchedCallerDemo() {
  const elapsedSeconds = useElapsedSeconds(45);
  return (
    <VoiceCallControls
      onHangUp={() => {}}
      elapsedSeconds={elapsedSeconds}
      customerLabel="+1 (614) 555-0147"
      onToggleTranscript={() => {}}
    />
  );
}

export const UnmatchedCaller: Story = {
  name: "Unmatched Caller (no contact match)",
  render: () => <UnmatchedCallerDemo />,
};

/* ── Masking → Record disabled ──
   `masked`/`recording` are both purely internal state (no controlled prop
   — see `VoiceCallControlsProps`'s own doc comments), so this story can't
   preset masking on; click "Mask" to turn it on. Once masked, Record
   renders `aria-disabled` (not natively disabled) specifically so its
   "Recording disabled while masking is on" `Tooltip` stays reachable by
   BOTH mouse hover and keyboard focus — hover or tab to Record afterward
   to see it. That's the one behavior change this port made over the
   source app's original native `disabled`, which made that same tooltip
   unreachable either way. */
function MaskingDisablesRecordDemo() {
  const elapsedSeconds = useElapsedSeconds(132);
  return (
    <VoiceCallControls
      onHangUp={() => {}}
      elapsedSeconds={elapsedSeconds}
      customerLabel="Sofia Martinez"
      customerInitials="SM"
      onToggleTranscript={() => {}}
    />
  );
}

export const MaskingDisablesRecord: Story = {
  name: "Masking Disables Record (click Mask)",
  render: () => <MaskingDisablesRecordDemo />,
};

export const NoAddVideo: Story = {
  name: "Add Video Hidden",
  args: {
    onHangUp: () => {},
    elapsedSeconds: 27,
    customerLabel: "Priya Nair",
    customerInitials: "PN",
    showAddVideo: false,
  },
};
