/* Shared example data for AIInput.stories.tsx (Default playground) and
   AIInput.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { Mic, ImagePlus } from "lucide-react";
import { Tooltip } from "../tooltip";

export const DRAFT_TEXT = "Draft reply to the customer...";

const actionButtonClass =
  "flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus";

/* Extra toolbar actions passed to `AIInput`'s `actions` slot. */
export const customActions = (
  <>
    <Tooltip content="Voice input" placement="top">
      <button type="button" aria-label="Voice input" className={actionButtonClass}>
        <Mic className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </Tooltip>
    <Tooltip content="Add image" placement="top">
      <button type="button" aria-label="Add image" className={actionButtonClass}>
        <ImagePlus className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </Tooltip>
  </>
);
