/* Shared example data for KebabMenuButton.stories.tsx (Default playground)
   and KebabMenuButton.variants.stories.tsx (Variants pages). Not a stories
   file — it only holds the fixtures both use, so the two can't drift apart. */
import type { ReactNode } from "react";
import { Pencil, RefreshCw, Trash2 } from "lucide-react";
import type { MenuEntry } from "../menu";

export const GENERIC_ITEMS: MenuEntry[] = [
  { id: "edit", label: "Edit", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "refresh", label: "Refresh", icon: <RefreshCw className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "remove", label: "Remove", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
];

/* The "card header" row every example sits in, with the kebab at its end. */
export function HeaderRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
      <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
      {children}
    </div>
  );
}
