/* Shared by RadioButtonGroup.stories.tsx and RadioButtonGroup.variants.stories.tsx. */

export const BASE_OPTIONS = [
  { value: "option1", label: "Radio label" },
  { value: "option2", label: "Radio label" },
  { value: "option3", label: "Radio label" },
];

/* Four options for the "Disabled options" control — options 2 and 4 are the
   ones that turn off. */
export const FOUR_OPTIONS = [
  { value: "option1", label: "Radio label" },
  { value: "option2", label: "Radio label" },
  { value: "option3", label: "Radio label" },
  { value: "option4", label: "Radio label" },
];

export const DISABLED_OPTION_VALUES = ["option2", "option4"];

export const ERROR_MESSAGE = "Please select an option";
export const HELP_TEXT = "This selection cannot be changed.";
