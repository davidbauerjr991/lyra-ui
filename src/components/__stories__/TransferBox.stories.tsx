import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TransferBox } from "../transfer-box";

const SKILLS = [
  "10DMT Service","10DMTClosure","10DMT_CT_AUTO","10DMT_CallEvents",
  "ACD_API_Manual_Service","API_CC2_Quick_Connect","ATG Outbound Test",
  "ATG_Contacts_Regression","ATG_Inbound","AccountNotRequired",
  "BasicSkill","BillingSupport","CallbackQueue","CustomerRetention",
  "DataEntry","EscalationTeam","FraudPrevention","GeneralInquiries",
  "HighPrioritySupport","InboundSales","JuniorAgents","KnowledgeBase",
  "Level1Support","Level2Support","Level3Support","MobileSupport",
  "NightShift","OutboundCampaign","PremiumCustomers","QualityAssurance",
].map((label) => ({ value: label.toLowerCase().replace(/\s+/g, "_"), label }));

const PRESELECTED = ["api_cc2_quick_connect", "basicskill", "billingqueue"];

const meta: Meta<typeof TransferBox> = {
  title: "Atoms/TransferBox",
  component: TransferBox,
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof TransferBox>;

export const Interactive: Story = {
  name: "Interactive",
  render: () => {
    const [value, setValue] = useState<string[]>(["atg_inbound"]);
    const opts = [{ value: "api_hcl", label: "API_HCI" }, ...SKILLS];
    return (
      <TransferBox
        options={opts} value={value} onChange={setValue}
        availableLabel="Available" selectedLabel="Selected"
        availableLabelTooltip="Select one or more skills for this Screen Pop"
      />
    );
  },
};

const TOOLTIP = "Select one or more skills for this Screen Pop";

export const WithError: Story = {
  name: "Error",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <TransferBox
        options={SKILLS} value={value} onChange={setValue}
        availableLabel="Available" selectedLabel="Selected"
        availableLabelTooltip={TOOLTIP}
        error="At least one skill must be selected."
      />
    );
  },
};

export const WithMaxLimit: Story = {
  name: "Max selection limit",
  render: () => {
    const [value, setValue] = useState<string[]>(PRESELECTED);
    return (
      <TransferBox
        options={SKILLS} value={value} onChange={setValue}
        availableLabel="Available" selectedLabel="Selected"
        availableLabelTooltip={TOOLTIP}
        max={5}
      />
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <TransferBox
      options={SKILLS}
      value={["atg_inbound", "basicskill"]}
      disabled
      availableLabel="Available" selectedLabel="Selected"
      availableLabelTooltip={TOOLTIP}
    />
  ),
};

export const Readonly: Story = {
  name: "Read Only",
  render: () => (
    <TransferBox
      options={SKILLS}
      value={["atg_inbound", "basicskill", "billingqueue"]}
      readonly
      availableLabel="Available" selectedLabel="Selected"
      availableLabelTooltip={TOOLTIP}
    />
  ),
};
