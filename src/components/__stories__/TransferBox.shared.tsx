/* Shared example data for TransferBox.stories.tsx (Default playground) and
   TransferBox.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
export const SKILLS = [
  "10DMT Service","10DMTClosure","10DMT_CT_AUTO","10DMT_CallEvents",
  "ACD_API_Manual_Service","API_CC2_Quick_Connect","ATG Outbound Test",
  "ATG_Contacts_Regression","ATG_Inbound","AccountNotRequired",
  "BasicSkill","BillingSupport","CallbackQueue","CustomerRetention",
  "DataEntry","EscalationTeam","FraudPrevention","GeneralInquiries",
  "HighPrioritySupport","InboundSales","JuniorAgents","KnowledgeBase",
  "Level1Support","Level2Support","Level3Support","MobileSupport",
  "NightShift","OutboundCampaign","PremiumCustomers","QualityAssurance",
].map((label) => ({ value: label.toLowerCase().replace(/\s+/g, "_"), label }));

export const PRESELECTED = ["api_cc2_quick_connect", "basicskill", "billingqueue"];
export const FEW_SELECTED = ["atg_inbound", "basicskill"];
export const READONLY_SELECTED = ["atg_inbound", "basicskill", "billingqueue"];

export const TOOLTIP = "Select one or more skills for this Screen Pop";
export const REQUIRED_ERROR = "At least one skill must be selected.";
