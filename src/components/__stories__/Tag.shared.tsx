/* Shared example data for Tag.stories.tsx (Default playground) and
   Tag.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */
import type { TagVariant, TagShape } from "../tag";

export const TAG_VARIANTS: TagVariant[] = [
  "default", "success", "warning", "critical", "info", "neutral", "purple", "teal", "pink",
];

export const TAG_SHAPES: TagShape[] = ["default", "pill"];

export const variantLabel = (v: string) => v.charAt(0).toUpperCase() + v.slice(1);
