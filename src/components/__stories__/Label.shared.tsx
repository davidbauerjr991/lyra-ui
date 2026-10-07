/* Shared example data for Label.stories.tsx (Default playground) and
   Label.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */

export const HELP_TEXT = "Helpful context about this field.";
export const SUPPORTING_TEXT = "Supporting text with additional info";
export const HORIZONTAL_VALUE = "Sarah Connor";

export const typeOptions = [
  { value: "back-office", label: "Back office" },
  { value: "knowledge-worker", label: "Knowledge Worker" },
  { value: "bpo", label: "BPO" },
];

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

export const regionOptions = [
  { value: "na1", label: "North America 1" },
  { value: "eu1", label: "Europe 1" },
];
