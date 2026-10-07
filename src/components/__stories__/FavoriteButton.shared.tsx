/* Shared example data for FavoriteButton.stories.tsx (Default playground) and
   FavoriteButton.variants.stories.tsx (Variants pages). Not a stories file —
   it only holds the fixtures both use, so the two can't drift apart. */
import { useState } from "react";
import { FavoriteButton } from "../favorite-button";
import type { TooltipPlacement } from "../tooltip";

/* A minimal stand-in for a list row (see ContactRow in create-new.tsx for
   the real usage) — `group/row` is what FavoriteButton hooks into to only
   reveal itself on hover/focus of the row it lives in. */
// `w-full` — DemoRow fills whatever container it's placed in (a bare
// `w-72` wrapper for the standalone stories, or the list's own flex column).
// A fixed width here previously fought the parent's width and overflowed it,
// producing overlapping/nested borders instead of a clean stacked list.
export function DemoRow({
  name,
  initiallyFavorited,
  placement = "left",
  disabled,
}: {
  name: string;
  initiallyFavorited?: boolean;
  placement?: TooltipPlacement;
  disabled?: boolean;
}) {
  const [favorited, setFavorited] = useState(!!initiallyFavorited);
  return (
    <div className="group/row flex w-full items-center justify-between rounded-lyra-sm border border-lyra-border-subtle px-3 py-2.5">
      <span className="lyra-body-md text-lyra-fg-default">{name}</span>
      <FavoriteButton
        favorited={favorited}
        onClick={() => setFavorited((v) => !v)}
        label={name}
        placement={placement}
        disabled={disabled}
      />
    </div>
  );
}
