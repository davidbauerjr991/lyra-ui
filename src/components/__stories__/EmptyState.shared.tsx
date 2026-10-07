/* Shared example data for EmptyState.stories.tsx (Default playground) and
   EmptyState.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { ReactNode } from "react";
import { BarChart3 } from "lucide-react";

export const sampleIcon = <BarChart3 className="h-8 w-8" strokeWidth={1.5} />;

export const SAMPLE_DESCRIPTION = "Data will appear here once this campaign starts sending.";

/* The bordered 240px box every example sits in — `EmptyState` fills its
   parent (`h-full w-full`), so it needs a bounded container to center in. */
export function EmptyFrame({ children }: { children: ReactNode }) {
  return (
    <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      {children}
    </div>
  );
}
