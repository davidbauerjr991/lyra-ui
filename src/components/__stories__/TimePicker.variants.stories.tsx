import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "../time-picker";
import { useState } from "react";
import { ERROR_TEXT, timeAt } from "./TimePicker.shared";

/* One page per TimePicker variant, shown under "TimePicker/Variants" in the
   sidebar. Static references for design review; the interactive playground is
   TimePicker → Default. "!autodocs" keeps this folder from getting a second
   Docs page. */
const meta: Meta<typeof TimePicker> = {
  title: "Custom Primitives/TimePicker/Variants",
  component: TimePicker,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

/* ── All Variants — every state in one column (was States and With default
   value). ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-4 w-56">
      <TimePicker label="Default" />
      <TimePicker label="With default value" value={timeAt(9, 30)} />
      <TimePicker label="Disabled" disabled />
      <TimePicker label="Read-only" readonly value={timeAt(14, 30)} />
      <TimePicker label="Required" required />
      <TimePicker label="Error" error={ERROR_TEXT} />
      <TimePicker label="With menu" menu />
      <TimePicker label="With AM/PM select" ampmSelect />
      <TimePicker label="Small" size="sm" />
      <TimePicker label="Icon outside (old layout)" iconPlacement="outside" />
    </div>
  ),
};

/* ── Error — a message from the app (`error`), and the picker's own message
   for typed text that isn't a time (type "25:99", then Tab). ── */
function ErrorDemo() {
  const [a, setA] = useState<Date | undefined>();
  const [b, setB] = useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-6 w-64 pb-[320px]">
      <TimePicker label="Start Time" required value={a} onChange={setA} error={a ? undefined : "Select a start time."} />
      <TimePicker label="Typed time (try 25:99, then Tab)" value={b} onChange={setB} />
    </div>
  );
}
export const ErrorState: Story = {
  name: "Error",
  render: () => <ErrorDemo />,
};

/* ── Constraints — `minTime` / `maxTime` with a 15-minute `step` list:
   only 9:00 AM – 5:00 PM can be picked or typed. ── */
function ConstraintsDemo() {
  const [t, setT] = useState<Date | undefined>(timeAt(9, 30));
  return (
    <div className="flex flex-col gap-6 w-64 pb-[340px]">
      <TimePicker label="Callback Time" labelHelpText="Business hours only." menu step={15}
        minTime={timeAt(9)} maxTime={timeAt(17)} value={t} onChange={setT} />
    </div>
  );
}
export const Constraints: Story = {
  name: "Constraints",
  render: () => <ConstraintsDemo />,
};
