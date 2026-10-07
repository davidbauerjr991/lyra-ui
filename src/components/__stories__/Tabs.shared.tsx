import { X } from "lucide-react";

/* Shared by Tabs.stories.tsx and Tabs.variants.stories.tsx. */

/* The "×" shown on a removable tab instead of the default trash can. Tabs also
   pass `removeFocusable`, which makes the "×" reachable by keyboard and gives
   it the Tooltip component's "Remove tab" label on hover and focus. */
export const REMOVE_TAB_ICON = <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />;
