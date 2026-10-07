import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../switch";
import { REQUIRED_ERROR, SWITCH_STATES } from "./Switch.shared";

/* One page per Switch variant, shown under "Switch/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Switch → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Switch> = {
  title: "Headless Primitives/Switch/Variants",
  component: Switch,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/* ── All Variants — every state at both sizes, side by side on a light and a
   dark surface (was All Variants, Large — All States and Small — All States).
   The old All States pages also listed "hover" and "pressed" rows that were
   static copies of the plain on/off rows, so those aren't repeated; hover or
   press any switch to see those states. ── */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-10">
      {(["lg", "sm"] as const).map((size) => (
        <div key={size}>
          <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">
            Size: {size === "lg" ? "Large" : "Small"}
          </p>
          <div className="grid grid-cols-[200px_auto_auto] items-center gap-x-12 gap-y-4">
            <span />
            <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Light</span>
            <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Dark</span>
            {SWITCH_STATES.map(({ caption, checked, disabled }) => (
              <div key={caption} className="contents">
                <span className="lyra-body-sm text-lyra-fg-secondary">{caption}</span>
                <Switch checked={checked} disabled={disabled} size={size} label="Switch Label" />
                <div data-theme="dark" className="bg-lyra-bg-surface-base rounded-lyra-md p-3">
                  <Switch checked={checked} disabled={disabled} size={size} label="Switch Label" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* Read-only — shows the current value, can't be changed. Muted track and a
   default cursor, so it doesn't look dimmed like Disabled. Tab to it: it still
   takes focus, and Space does nothing. */
export const ReadOnly: Story = {
  name: "Read-only",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch checked readonly label="Read-only, on" />
      <Switch checked={false} readonly label="Read-only, off" />
      <Switch checked disabled label="Disabled, on (for comparison)" />
    </div>
  ),
};

/* Required + error — the asterisk comes from `required`; `error` adds the
   message under the switch and a red outline on the track. */
export const RequiredError: Story = {
  name: "Required + Error",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <Switch checked={false} required label="Accept terms" error={REQUIRED_ERROR} />
      </div>
      <div>
        <Switch checked required label="Accept terms (on, no error)" />
      </div>
    </div>
  ),
};
