import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../textarea";
import { HELP_TEXT, MAX_LENGTH, SAMPLE_VALUE } from "./Textarea.shared";

/* One page per Textarea variant, shown under "Textarea/Variants" in the
   sidebar. Static references for design review; the interactive playground is
   Textarea → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Textarea> = {
  title: "Custom Primitives/Textarea/Variants",
  component: Textarea,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/* ── All Variants — every state in one column (was All States, With Value,
   With Error Message and Required). Hover and focus are static copies of
   those styles, since a story can't hold a real hover. ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 max-w-sm">
      <Textarea label="Default" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} />
      <Textarea label="Filled" defaultValue={SAMPLE_VALUE} maxLength={MAX_LENGTH} rows={4} />
      <Textarea
        label="Hover"
        placeholder="Placeholder"
        maxLength={MAX_LENGTH}
        rows={4}
        className="[&_textarea]:border-lyra-state-border-hover-neutral"
      />
      <Textarea
        label="Focus"
        placeholder="Placeholder"
        maxLength={MAX_LENGTH}
        rows={4}
        className="[&_textarea]:border-lyra-border-active [&_textarea]:ring-2 [&_textarea]:ring-lyra-border-active/20"
      />
      <Textarea label="Read-only" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} readonly />
      <Textarea label="Disabled" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} disabled />
      <Textarea label="Error" maxLength={MAX_LENGTH} rows={4} error="Required" />
      <Textarea
        label="Required with help"
        labelHelpText={HELP_TEXT}
        required
        placeholder="Enter description..."
        maxLength={500}
        rows={5}
      />
    </div>
  ),
};

/* ── Auto-grow — the field grows with the text from `rows` up to `maxRows`,
   then scrolls. Type or paste several lines to see it. The second field starts
   filled, so it opens already tall. ── */
export const AutoGrow: Story = {
  name: "Auto-grow",
  render: () => (
    <div className="flex flex-col gap-6 max-w-sm">
      <Textarea label="Auto-grow (2 to 6 rows)" placeholder="Keep typing…" rows={2} maxRows={6} autoGrow />
      <Textarea
        label="Starts filled"
        defaultValue={"Line 1\nLine 2\nLine 3\nLine 4\nLine 5"}
        rows={2}
        maxRows={4}
        autoGrow
      />
    </div>
  ),
};

/* ── Help text — Tab to the info icon to read the help; the field also reads
   it (aria-describedby) when focused. ── */
export const KeyboardHelp: Story = {
  name: "Keyboard Help",
  render: () => (
    <div className="max-w-sm">
      <Textarea label="Notes" labelHelpText={HELP_TEXT} placeholder="Tab from the label's info icon into the field" rows={3} />
    </div>
  ),
};
