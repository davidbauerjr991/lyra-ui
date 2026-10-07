/* Shared example data for Separator.stories.tsx (Default playground) and
   Separator.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { ReactNode } from "react";

/* Horizontal separators sit between stacked blocks inside a padded card.
   `maxWidth` is only passed by the Default playground: true bounds the card
   between 240px and 320px, false lets it fill its container. Left unset (the
   Variants pages), the card keeps its fixed 384px width. */
export function StackedFrame({ children, maxWidth }: { children: ReactNode; maxWidth?: boolean }) {
  const width = maxWidth === undefined ? "w-96" : maxWidth ? "min-w-[240px] max-w-[320px]" : "w-full";
  return (
    <div className={`${width} rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5`}>{children}</div>
  );
}

/* Vertical separators sit between inline items in a row of defined height.
   `spread` is only passed by the Default playground: the row then fills its
   card with no built-in gap (pair it with `flex-1 text-center` items to
   centre each one between its separators, and give the separators their own
   margin). Left unset (the Variants pages), the row hugs its content with a
   12px gap. */
export function InlineRow({ children, spread }: { children: ReactNode; spread?: boolean }) {
  return (
    <div className={`flex h-6 items-center ${spread ? "w-full" : "gap-3"}`}>{children}</div>
  );
}

export const Text = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`lyra-body-md text-lyra-fg-default ${className}`}>{children}</span>
);
