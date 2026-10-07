/* Shared by Switch.stories.tsx and Switch.variants.stories.tsx. */

export const REQUIRED_ERROR = "You must accept the terms";
export const HELP_TEXT = "Helpful context about this setting.";

/* Every state a Switch can show, with the caption used on the Variants page. */
export const SWITCH_STATES: { caption: string; checked: boolean; disabled?: boolean }[] = [
  { caption: "On", checked: true },
  { caption: "Off", checked: false },
  { caption: "Disabled off", checked: false, disabled: true },
  { caption: "Disabled on", checked: true, disabled: true },
];
