/* Shared example data for Accordion.stories.tsx (Default playground) and
   Accordion.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { useState } from "react";
import { Box, Clock } from "lucide-react";
import {
  AccordionHeadless,
  AccordionHeadlessItem,
  AccordionHeadlessContent,
  type AccordionItem,
} from "../accordion";
import { Tag } from "../tag";
import { Button } from "../button";
import { Metric } from "../dashboard-card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../table";

export const icon = <Box className="h-5 w-5" strokeWidth={1.5} />;

export const sampleItems = [
  {
    id: "1",
    title: "Section 1",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 1. This area expands when the item is opened.
      </p>
    ),
  },
  {
    id: "2",
    title: "Section 2",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 2. Any React node can go here.
      </p>
    ),
  },
  {
    id: "3",
    title: "Section 3",
    icon,
    content: (
      <p className="lyra-body-md text-lyra-fg-secondary">
        Content for section 3.
      </p>
    ),
  },
];

/* endSlot — e.g. a couple of `Metric`s (`DashboardCard`'s own value+label
   block, exported standalone) inline with a queue row, between the
   title/subhead and the chevron. Rendered inside the same trigger button as
   the rest of the row; see the doc comment on `endSlot` in accordion.tsx
   for why it should stay display-only. `className="flex-none"` drops
   `Metric`'s default `flex-1` — correct inside `DashboardCard`'s own equal-
   width columns, not here where it should size to its own content. */
const sampleMetrics: Record<string, [number, number]> = { "1": [4, 8], "2": [2, 5], "3": [3, 6] };
export const metricsSlot = (id: string) => (
  <>
    <Metric className="flex-none" metric={{ value: sampleMetrics[id][0], label: "Skills" }} />
    <Metric className="flex-none" metric={{ value: sampleMetrics[id][1], label: "Contacts" }} />
  </>
);

/* ── Rich content: title/subhead accept ReactNode (e.g. name + Tag, multi-line
   summary), and content can be any component — here a Default-style Table ── */

const richInteractions = [
  { id: "1", when: "09/05/25 7:53 PM", agent: "Kevin Jensen",  status: "Closed", queue: "CXi SME Email", skill: "Email_General" },
  { id: "2", when: "09/05/25 8:11 PM", agent: "Andres Arenas", status: "Closed", queue: "Chat_General",  skill: "Chat_General"  },
  { id: "3", when: "09/07/25 12:56 PM", agent: "KrishnaCharan Mohanrao", status: "Closed", queue: "CXi SME Email", skill: "Email_General" },
];

export const richItem: AccordionItem = {
  id: "rich",
  title: (
    <span className="inline-flex items-center gap-2">
      Lily Chen
      <Tag label="open" variant="success" shape="pill" />
    </span>
  ),
  subhead: (
    <span className="flex flex-col gap-0.5">
      <span className="lyra-body-md text-lyra-fg-default">
        Unaccompanied minor (age 11) stuck at ORD — connecting flight canceled
      </span>
      <span className="inline-flex items-center gap-1">
        Atlas
        <span aria-hidden="true">•</span>
        <Clock className="h-3 w-3" strokeWidth={1.5} />
        Wait: 1m
        <span aria-hidden="true">•</span>
        CST-21009
      </span>
    </span>
  ),
  content: (
    <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden" style={{ height: 160 }}>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="flex-1">Date/Time</TableHead>
            <TableHead className="flex-[1.3]">Name</TableHead>
            <TableHead className="flex-1">Status</TableHead>
            <TableHead className="flex-[1.3]">Queue</TableHead>
            <TableHead className="flex-[1.3]">Skill</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {richInteractions.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="flex-1">{row.when}</TableCell>
              <TableCell className="flex-[1.3]">{row.agent}</TableCell>
              <TableCell className="flex-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-lyra-status-critical-strong shrink-0" aria-hidden="true" />
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="flex-[1.3]">{row.queue}</TableCell>
              <TableCell className="flex-[1.3]">{row.skill}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

export const variantRow = (
  id: string,
  title: string,
  opts: { icon?: boolean; subhead?: boolean; endSlot?: boolean; disabled?: boolean } = {},
): AccordionItem => ({
  id,
  title,
  icon: opts.icon === false ? undefined : icon,
  subhead: opts.subhead ? "Supporting description text" : undefined,
  endSlot: opts.endSlot ? metricsSlot("1") : undefined,
  disabled: opts.disabled,
  content: (
    <p className="lyra-body-md text-lyra-fg-secondary">
      Content for this section. Any React node can go here.
    </p>
  ),
});

/* ── Headless — trigger-less building blocks, external control ──
   `AccordionHeadless`/`-Item`/`-Content` expose the same Radix mechanism
   and height animation as `Accordion`, without its trigger row or divider
   chrome, for layouts where some other element drives the open state (the
   shape agent-next-gen-v2's transcript uses for Session Details: a pill
   button toggles a fully-controlled single/collapsible root). */

export function HeadlessDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[420px]">
      <Button variant="outline" size="sm" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide details" : "Show details"}
      </Button>
      <AccordionHeadless
        type="single"
        collapsible
        value={open ? "details" : ""}
        onValueChange={() => {}}
      >
        <AccordionHeadlessItem value="details" className="border-none">
          <AccordionHeadlessContent>
            <p className="pt-3 lyra-body-md text-lyra-fg-secondary">
              Collapsible content with the standard accordion height
              animation — no built-in trigger row, no divider; the button
              above owns the open state.
            </p>
          </AccordionHeadlessContent>
        </AccordionHeadlessItem>
      </AccordionHeadless>
    </div>
  );
}

