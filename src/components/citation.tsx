import * as React from "react";
import { cn } from "../lib/utils";
import { ShowMore } from "./show-more";

/* ── Citation ──
   Text with the passages it rests on marked: each cited passage is dotted-underlined and numbered, and an
   expandable "N citations" link under the text lists, for each number, the quoted passage and the source it
   comes from. Used for AI answers that must show their sources. */

export interface CitationSource {
  /** The exact passage of `text` this source backs. A passage that is not found in `text` is listed but not marked. */
  text: string;
  /** The article or section it comes from. */
  source: string;
}

export interface CitationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** The full text, with the cited passages in it. */
  text: string;
  /** The sources, numbered in the order given. */
  citations: CitationSource[];
  /** Controlled open state of the sources list. */
  open?: boolean;
  /** Initial open state of the sources list when uncontrolled. Default false. */
  defaultOpen?: boolean;
  /** Called when the sources list opens or closes. */
  onOpenChange?: (open: boolean) => void;
}

const Citation = React.forwardRef<HTMLDivElement, CitationProps>(({ text, citations, open, defaultOpen = false, onOpenChange, className, ...props }, ref) => {
  const [inner, setInner] = React.useState(defaultOpen);
  const isOpen = open ?? inner;
  // Cut the text at each citation's first occurrence, in order of position.
  const hits = citations
    .map((c, n) => ({ n, start: text.indexOf(c.text), c }))
    .filter((h) => h.start >= 0)
    .sort((a, b) => a.start - b.start);
  const out: React.ReactNode[] = [];
  let at = 0;
  hits.forEach((h) => {
    if (h.start < at) return;
    out.push(text.slice(at, h.start));
    out.push(
      <span key={h.n} className="underline decoration-lyra-border-active decoration-dotted underline-offset-4" title={h.c.source}>
        {h.c.text}
        <sup className="ml-0.5 lyra-body-xs text-lyra-fg-active-strong">{h.n + 1}</sup>
      </span>
    );
    at = h.start + h.c.text.length;
  });
  out.push(text.slice(at));
  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      <p className="lyra-body-md text-lyra-fg-default">{out}</p>
      {citations.length > 0 && (
        <ShowMore
          label={`${citations.length} ${citations.length === 1 ? "citation" : "citations"}`}
          textSize="sm"
          chevronPosition="start"
          open={isOpen}
          onOpenChange={(next) => {
            setInner(next);
            onOpenChange?.(next);
          }}
        >
          <ol className="mt-1.5 flex list-decimal flex-col gap-1.5 pl-6 lyra-body-sm">
            {citations.map((c, i) => (
              <li key={i} className="text-lyra-fg-default">
                “{c.text}”
                <span className="block text-lyra-fg-secondary">{c.source}</span>
              </li>
            ))}
          </ol>
        </ShowMore>
      )}
    </div>
  );
});
Citation.displayName = "Citation";

export { Citation };
