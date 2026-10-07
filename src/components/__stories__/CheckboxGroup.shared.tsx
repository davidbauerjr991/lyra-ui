/* Shared example data for CheckboxGroup.stories.tsx (Default playground) and
   CheckboxGroup.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */

export const baseOptions = [
  { value: "option-1", label: "Checkbox label" },
  { value: "option-2", label: "Checkbox label" },
  { value: "option-3", label: "Checkbox label" },
];

export const GROUP_LABEL = "Input Label";
export const READONLY_HELP_TEXT = "These values cannot be changed.";
export const REQUIRED_ERROR = "At least one option is required";

export const desktopTypeOptions = [
  { value: "back-office", label: "Back Office" },
  { value: "knowledge-worker", label: "Knowledge Worker" },
  { value: "bpo", label: "BPO" },
  { value: "collections", label: "Collections" },
  { value: "retail", label: "Retail Agents" },
];

export const SECONDARY_TEXT = "Secondary Text";
export const LONG_TEXT =
  "This is a very long checkbox text that should wrap to the next line when it exceeds the available width of the container. It demonstrates how text wrapping works in radio buttons.";
