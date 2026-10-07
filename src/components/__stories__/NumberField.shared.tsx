/* Shared example data for NumberField.stories.tsx (Default playground) and
   NumberField.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */

/* Range presets, keyed by the Default playground's "Range" control option.
   Each one is also shown as its own Variants page. */
export interface RangePreset {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  wrap?: boolean;
  padWidth?: number;
  /** Where a freshly mounted field starts. */
  start: number;
}

export const RANGE_PRESETS: Record<string, RangePreset> = {
  unbounded: { label: "Quantity", start: 0 },
  "1-10": { label: "Rating (1–10)", min: 1, max: 10, start: 5 },
  "0-59-wrap": { label: "Minutes", min: 0, max: 59, wrap: true, padWidth: 2, start: 0 },
  "0-100-step-5": { label: "Percentage", min: 0, max: 100, step: 5, start: 0 },
};

export const NEGATIVE_ERROR = "Must be 0 or greater";
