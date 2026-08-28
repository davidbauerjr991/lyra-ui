import * as React from "react";
import { cn } from "../lib/utils";
import { SearchInput } from "./search-input";
import type { EmbeddablePanelContent } from "./draggable";

/* ── AgentSearch ──
   The "Search" app panel from the Agent Next Gen AppHeader's top-right app
   area (ported from agent-next-gen-v2's Search `EmbeddablePanelContent`):
   a `SearchInput` in a fixed header row, above a blank "Nothing here yet."
   body. Deliberately no invented result list/content — the reference panel
   is exactly this shape (field + empty body).

   Two consumption shapes, same convention as `AgentNotifications`/`AiPanel`:
   - `useAgentSearchContent` returns an `EmbeddablePanelContent` (title +
     `headerContent` + `body`) for a shared `Draggable` shell that swaps
     between several apps' content (the Agent Next Gen template's app
     panel), or for `DraggablePanel`'s own `headerContent`/`children` props.
   - `AgentSearch` renders the same content standalone (its own fixed
     header row + body), for use inside any panel-shaped container. */

export interface AgentSearchContentProps {
  /** Controlled search query — pair with `onQueryChange`. Omit to let the
   *  component manage the query internally (uncontrolled). */
  query?: string;
  /** Initial query when uncontrolled */
  defaultQuery?: string;
  /** Called when the query changes */
  onQueryChange?: (query: string) => void;
  /** Placeholder for the search field (default: "Search...") */
  placeholder?: string;
}

/** Everything the Search app panel shows, as one `EmbeddablePanelContent` —
 *  see the file header comment for when to reach for this vs. the
 *  `AgentSearch` component itself. */
function useAgentSearchContent({
  query,
  defaultQuery,
  onQueryChange,
  placeholder = "Search...",
}: AgentSearchContentProps = {}): EmbeddablePanelContent {
  // Controlled-when-provided, internal otherwise — same hybrid pattern
  // `ToggleGroup` uses for its own `value`/`defaultValue` pair.
  const [internalQuery, setInternalQuery] = React.useState(defaultQuery ?? "");
  const isControlled = query !== undefined;
  const currentQuery = isControlled ? query : internalQuery;

  const handleQueryChange = (next: string) => {
    if (!isControlled) setInternalQuery(next);
    onQueryChange?.(next);
  };

  return {
    title: "Search",
    headerContent: (
      <SearchInput
        value={currentQuery}
        onValueChange={handleQueryChange}
        placeholder={placeholder}
        size="sm"
      />
    ),
    body: (
      <div className="overflow-y-auto flex-1 flex items-center justify-center p-4">
        <p className="lyra-body-md text-lyra-fg-disabled text-center">Nothing here yet.</p>
      </div>
    ),
  };
}

export interface AgentSearchProps
  extends AgentSearchContentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const AgentSearch = React.forwardRef<HTMLDivElement, AgentSearchProps>(
  ({ query, defaultQuery, onQueryChange, placeholder, className, ...props }, ref) => {
    const { headerContent, body } = useAgentSearchContent({
      query,
      defaultQuery,
      onQueryChange,
      placeholder,
    });
    return (
      <div ref={ref} className={cn("flex min-h-0 flex-1 flex-col", className)} {...props}>
        {/* Fixed header row — a sibling of the scrollable body below (the
            body div owns its own overflow), so the field never scrolls away
            with panel content. Same `px-4 pb-3 border-b` inset the shared
            panel shells (`DraggablePanel`, the Agent Next Gen template's app
            panel) give `headerContent`, plus `pt-3` since standalone usage
            has no `ContainerHeader` bottom padding above to supply the gap. */}
        <div className="shrink-0 border-b border-lyra-border-subtle px-4 pt-3 pb-3">
          {headerContent}
        </div>
        {body}
      </div>
    );
  }
);
AgentSearch.displayName = "AgentSearch";

export { AgentSearch, useAgentSearchContent };
