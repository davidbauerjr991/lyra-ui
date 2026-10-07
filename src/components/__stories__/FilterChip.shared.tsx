/* Shared example data for FilterChip.stories.tsx (Default playground) and
   FilterChip.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */

/* Options inside a chip's dropdown (50, so the list scrolls). */
export const sampleOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
}));

/* Options inside the "+ Filter" add-menu (50, so the list scrolls). */
export const addFilterOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `filter-${i + 1}`,
  label: `Filter ${i + 1}`,
}));

/* A selection used wherever a chip needs to read as "has values". */
export const SAMPLE_SELECTION = ["back-office", "custom", "bpo", "collections"];

/* Operators for a chip's optional operator selector. */
export const sampleOperators = [
  { value: "contains", label: "Contains" },
  { value: "equals", label: "Equals" },
  { value: "starts-with", label: "Starts With" },
];
