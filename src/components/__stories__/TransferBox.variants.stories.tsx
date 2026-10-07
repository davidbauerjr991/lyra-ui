import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TransferBox } from "../transfer-box";
import {
  SKILLS,
  PRESELECTED,
  FEW_SELECTED,
  READONLY_SELECTED,
  TOOLTIP,
  REQUIRED_ERROR,
} from "./TransferBox.shared";

/* One page per TransferBox variant, shown under "TransferBox/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is TransferBox → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof TransferBox> = {
  title: "Custom Primitives/TransferBox/Variants",
  component: TransferBox,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TransferBox>;

function StatesDemo() {
  const [emptyValue, setEmptyValue] = useState<string[]>([]);
  const [withItemsValue, setWithItemsValue] = useState<string[]>(FEW_SELECTED);
  const [withSelectionsValue, setWithSelectionsValue] = useState<string[]>(PRESELECTED);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Empty (no selections)</p>
        <TransferBox
          options={SKILLS}
          value={emptyValue}
          onChange={setEmptyValue}
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
        />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">With items selected</p>
        <TransferBox
          options={SKILLS}
          value={withItemsValue}
          onChange={setWithItemsValue}
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
        />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">With max selection limit (max 5)</p>
        <TransferBox
          options={SKILLS}
          value={withSelectionsValue}
          onChange={setWithSelectionsValue}
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
          max={5}
        />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Error state</p>
        <TransferBox
          options={SKILLS}
          value={[]}
          onChange={() => {}}
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
          error={REQUIRED_ERROR}
        />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Disabled</p>
        <TransferBox
          options={SKILLS}
          value={FEW_SELECTED}
          disabled
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
        />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Read only</p>
        <TransferBox
          options={SKILLS}
          value={READONLY_SELECTED}
          readonly
          availableLabel="Available"
          selectedLabel="Selected"
          availableLabelTooltip={TOOLTIP}
        />
      </div>
    </div>
  );
}

export const States: Story = {
  name: "States",
  render: () => <StatesDemo />,
};
