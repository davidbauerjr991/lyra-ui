/* Shared example data for Slider.stories.tsx (Default playground) and
   Slider.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */

/* Scales the Default playground's "Scale" control can pick, and the starting
   value / range for each. */
export const SCALES = {
  "0-10-by-1": { min: 0, max: 10, step: 1, single: 3, range: [2, 6] as [number, number], label: "Slider Label" },
  "0-5-by-0.5": { min: 0, max: 5, step: 0.5, single: 2.5, range: [1, 3.5] as [number, number], label: "Volume" },
} as const;

export type ScaleKey = keyof typeof SCALES;
