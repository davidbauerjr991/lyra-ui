import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { InteractiveDemo, SAMPLE_LABEL, VALUES } from "./Checkbox.shared";

/* One page per Checkbox variant, shown under "Checkbox/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Checkbox → Default. "!autodocs" keeps this folder from getting a second
   Docs page. */
const meta: Meta<typeof Checkbox> = {
  title: "Headless Primitives/Checkbox/Variants",
  component: Checkbox,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const caption = "lyra-body-sm text-lyra-fg-secondary";

const ROWS = [
  { key: "default", label: "Default", props: {}, labelClass: "text-lyra-fg-default" },
  { key: "disabled", label: "Disabled", props: { disabled: true }, labelClass: "text-lyra-fg-disabled" },
  { key: "readonly", label: "Read-only", props: { readonly: true }, labelClass: "text-lyra-fg-default" },
] as const;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div>
      <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">
        All States (hover and click to see interactive states)
      </h3>
      <div className="grid grid-cols-4 gap-x-8 gap-y-4 items-center">
        <span className={caption}>State</span>
        {VALUES.map((v) => (
          <span key={v.key} className={caption}>{v.label}</span>
        ))}

        {ROWS.map((row) => (
          <div key={row.key} className="contents">
            <span className={caption}>{row.label}</span>
            {VALUES.map((v) => {
              const id = `${row.key}-${v.key}`;
              return (
                <div key={id} className="flex items-center gap-2">
                  <Checkbox id={id} checked={v.checked} {...row.props} />
                  <label htmlFor={id} className={`lyra-body-md ${row.labelClass}`}>
                    {SAMPLE_LABEL}
                  </label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  name: "Interactive",
  render: () => <InteractiveDemo />,
};

export const WithSecondaryText: Story = {
  name: "With Secondary Text",
  render: () => (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <Checkbox id="sec-1" className="mt-0.5" />
        <label htmlFor="sec-1">
          <span className="lyra-body-md text-lyra-fg-default block">{SAMPLE_LABEL}</span>
        </label>
      </div>
      <Checkbox label={SAMPLE_LABEL} secondaryText="Secondary Text" />
    </div>
  ),
};

/* Keyboard focus — Tab to each checkbox. With a label, the ring wraps the box,
   the label and any secondary text together (keyboard focus only; a mouse
   click shows no ring). A checkbox with no label rings just the box. */
export const KeyboardFocus: Story = {
  name: "Keyboard Focus",
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to move through these. Click one with the mouse: no ring.</p>
      <Checkbox label={SAMPLE_LABEL} />
      <Checkbox label={SAMPLE_LABEL} secondaryText="Secondary Text" checked />
      <Checkbox label={SAMPLE_LABEL} readonly checked />
      <Checkbox label={SAMPLE_LABEL} error />
      <Checkbox aria-label="No label (rings the box only)" />
    </div>
  ),
};
