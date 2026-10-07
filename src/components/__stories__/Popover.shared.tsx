/* Shared example data and building blocks for Popover.stories.tsx (Default
   playground) and Popover.variants.stories.tsx (Variants pages). Not a
   stories file — it only holds what both use, so the two can't drift apart. */
import { Settings, Trash2, Copy, ExternalLink } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import type { MenuEntry } from "../menu";

export const POPOVER_TITLE = "Popover Title";

export type PopoverContentKind = "text" | "long" | "form";

/** Body content for each kind: short text, long scrolling rows, or a wide form.
 *  `Popover`'s body only adds left/right inset (`bodyPadding`), so vertical
 *  padding belongs to the content: with a `title` the header row already
 *  sits above it, but without one the content would start flush against the
 *  top edge, so pass `padTop` to give it the same 20px the bottom gets. */
export function PopoverBody({ kind, padTop = false }: { kind: PopoverContentKind; padTop?: boolean }) {
  const top = padTop ? "pt-5" : "";

  if (kind === "long") {
    return (
      <div className={`${top} pb-5 flex flex-col gap-3`}>
        {Array.from({ length: 8 }, (_, i) => (
          <p key={i} className="lyra-body-md text-lyra-fg-secondary">
            Content row {i + 1} — this popover has a max height and scrolls.
          </p>
        ))}
      </div>
    );
  }

  if (kind === "form") {
    return (
      <div className={`${top} pb-5 flex flex-col gap-4`}>
        <Input label="Name" placeholder="Enter name" />
        <Select
          label="Type"
          options={[
            { value: "back-office", label: "Back Office" },
            { value: "knowledge", label: "Knowledge Worker" },
            { value: "bpo", label: "BPO" },
          ]}
        />
        <Select
          label="Region"
          options={[
            { value: "na1", label: "NA1" },
            { value: "eu1", label: "EU1" },
          ]}
        />
      </div>
    );
  }

  return (
    <div className={`${top} pb-5`}>
      <p className="lyra-body-md text-lyra-fg-secondary mb-1">
        Contextual content related to the trigger element.
      </p>
      <p className="lyra-body-md text-lyra-fg-secondary">
        If the popover is used for action confirmation, explain the consequences of the action here.
      </p>
    </div>
  );
}

/** Pinned footer with the usual cancel / confirm buttons. */
export const popoverFooter = (
  <div className="flex justify-end gap-2 px-5 pb-5">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </div>
);

/** Rows for the Menu Popover variant. */
export const menuItems: MenuEntry[] = [
  { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "open", label: "Open in new tab", icon: <ExternalLink className="h-4 w-4" strokeWidth={1.5} /> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" strokeWidth={1.5} /> },
  "separator",
  { id: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />, destructive: true },
];
