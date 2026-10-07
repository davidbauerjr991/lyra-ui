import type { SelectOption } from "../select";

/* Shared by Select.stories.tsx and Select.variants.stories.tsx. */

export const sampleOptions: SelectOption[] = [
  { value: "opt1", label: "Option 1" },
  { value: "opt2", label: "Option 2" },
  { value: "opt3", label: "Option 3" },
  { value: "opt4", label: "Option 4" },
  { value: "opt5", label: "Option 5" },
  { value: "opt6", label: "Option 6" },
];

export const manyOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `item-${i + 1}`,
  label: `Item label ${i + 1}`,
}));

export const HELP_TEXT = "Helpful context about this field.";
export const ERROR_MESSAGE = "Required";
