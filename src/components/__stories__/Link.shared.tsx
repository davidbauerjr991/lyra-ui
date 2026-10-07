/* Shared example data for Link.stories.tsx (Default playground) and
   Link.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */
import { Pencil, ChevronRight } from "lucide-react";

export const LINK_LABEL = "View customer info";

/* Leading icon from the "Edit" link in agent-next-gen-customer-info-panel.tsx. */
export const editIcon = <Pencil className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />;

/* Trailing chevron pointing right — the usual "go to / see more" affordance.
   Like the leading icon, it's composed as a child of the Link. */
export const chevronIcon = <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />;
