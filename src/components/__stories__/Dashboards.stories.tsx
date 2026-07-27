import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Activity,
  Users,
  Clock3,
  AlertTriangle,
  Layers,
  BarChart3,
  Inbox,
  Flag,
  Grid3x3,
  RefreshCw,
  Pencil,
  Copy,
  Trash2,
  Maximize2,
  Minimize2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../container";
import { InteriorPanel } from "../interior-panel";
import { DashboardTemplate } from "../dashboard-template";
import { DashboardCard, type DashboardCardMetric } from "../dashboard-card";
import { Icon, type IconBackground } from "../icon";
import { TableToolbar, type ToolbarActionDef } from "../table";
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { cn } from "../../lib/utils";

/* ── Dashboards template ──
   The generic dashboard shell — `DashboardTemplate` (dashboard-template.tsx)
   — shown with placeholder cards, not any one persona's real content. This
   used to be `AgentDashboard` dropped straight into a page shell, which is
   why "the dashboard template" read as one specific agent's Home tab
   (greeting, their queue widgets, their Contact History + Redial) instead
   of the actual reusable piece underneath it: a max-width-capped, centered
   container plus the `.lyra-container-grid`/`.lyra-card-split`
   container-query boundary its card rows react against.

   `AgentDashboard` is still a real, fully-supported template — it's just
   its own story now (`UI/Agent Dashboard`, AgentDashboard.stories.tsx)
   instead of standing in for the generic one. See PROJECT_SUMMARY.md's
   "AgentDashboard shouldn't be the template" entry for the full incident.

   This demo composes the same page shell `AgentDashboard`'s own story
   uses (`Container` + a right `InteriorPanel`) around `DashboardTemplate`
   itself — explicit `maxWidth={1200}` (same as the default; passed
   explicitly here since that's what was asked for), four rows of
   placeholder `DashboardCard`s (1 / 2 / 3 / 4 cards per row, showing the
   shell holds an arbitrary row composition, not just one fixed grid
   shape), and every card is clickable — `onClick` + `cursor-pointer`,
   both plain `DashboardCardProps` passthrough onto `Container`'s root
   element, nothing new added to `DashboardCard` itself — opening the same
   right-side `InteriorPanel` with that card's own placeholder detail.
   Whichever card's panel is currently open also renders with
   `variant="info-strong"` (the same blue Container treatment
   `DashboardQueue`'s own click-to-select cards already use, dashboard-
   queue.tsx) instead of `"neutral-subtle"` — a plain `isSelected` prop on
   the demo's own `DemoDashboardCard`, not a new capability on
   `DashboardCard`. Any consumer building this same "click a card, open
   its InteriorPanel" pattern should apply the same selected treatment —
   see Outbound-Campaigns' `MonitorDashboardPage.tsx`.

   A `TableToolbar` (table.tsx) sits at the top of `DashboardTemplate`'s
   content — the exact same toolbar `Templates/Data Management` already
   uses (Search, `filterDefs` for Description/Created By/Published,
   `actionDefs` for refresh/edit/copy/delete) rather than a one-off
   hand-built search/filter bar. Reused here for real, not just
   decoratively: `searchQuery` filters the visible cards by title. The
   `filterDefs` selections themselves don't filter anything (there's no
   description/created-by/published data on a placeholder card) — they're
   here to show the toolbar's filter-chip layout, same as their decorative
   role in the `Templates/Data Management` story this was modeled on.

   The toolbar's right-most `actions` slot (after the actionDefs' divider)
   is a fullscreen toggle — `Maximize2`/`Minimize2` swapping based on
   local `isFullScreen` state, same icon pair/pattern as
   `ContainerHeader.stories.tsx`'s own "WithActions" fullscreen toggle —
   not a `ColumnToggle` (there's no table/columns concept here, only
   cards). Toggling it actually does something: it drops the outer shell's
   `p-3` gutter so the `Container` fills the whole canvas edge-to-edge.

   Placed directly below `Templates/Data Management` in the sidebar via
   `.storybook/preview.ts`'s explicit `storySort` order (alphabetically
   "Dashboards" would sort *before* "Data Management" — "Das" < "Dat" — so
   without that explicit order this would land in the wrong spot).

   A second story, "Full Width", renders the identical
   `DashboardsTemplate` with `fullWidth` set — passes `maxWidth="none"` to
   `DashboardTemplate` instead of the default `1200`, so the card rows
   stretch edge-to-edge instead of capping at a reading-width column. See
   `DashboardTemplateProps.maxWidth`'s own doc comment (dashboard-
   template.tsx): the cap is applied via inline `style`, so
   `className="max-w-none"` can't remove it (inline styles always beat a
   class) — `maxWidth="none"` is the actual mechanism. */

interface DemoCard {
  id: string;
  title: string;
  icon: LucideIcon;
  background: IconBackground;
  metrics: DashboardCardMetric[];
  detail: string;
}

const DEMO_CARDS: DemoCard[] = [
  // Row 1 — 1 card (full width)
  {
    id: "overview",
    title: "Overview",
    icon: Grid3x3,
    background: "active",
    metrics: [
      { value: 312, label: "Total Today" },
      { value: 42, label: "Active" },
      { value: "94%", label: "SLA Met" },
      { value: "2m 14s", label: "Avg Response" },
    ],
    detail: "Placeholder detail view for the Overview card — a real page would show a fuller breakdown here.",
  },
  // Row 2 — 2 cards
  {
    id: "volume",
    title: "Volume",
    icon: Users,
    background: "info",
    metrics: [
      { value: 128, label: "Total Today" },
      { value: 18, label: "Waiting" },
    ],
    detail: "Placeholder detail view for the Volume card.",
  },
  {
    id: "sla",
    title: "SLA",
    icon: Flag,
    background: "success",
    metrics: [
      { value: "94%", label: "Met" },
      { value: "6%", label: "Missed" },
    ],
    detail: "Placeholder detail view for the SLA card.",
  },
  // Row 3 — 3 cards
  {
    id: "activity",
    title: "Activity",
    icon: Activity,
    background: "active",
    metrics: [{ value: 42, label: "Active" }],
    detail: "Placeholder detail view for the Activity card.",
  },
  {
    id: "response-time",
    title: "Response Time",
    icon: Clock3,
    background: "neutral",
    metrics: [{ value: "2m 14s", label: "Avg" }],
    detail: "Placeholder detail view for the Response Time card.",
  },
  {
    id: "escalations",
    title: "Escalations",
    icon: AlertTriangle,
    background: "critical",
    metrics: [{ value: 6, label: "Open" }],
    detail: "Placeholder detail view for the Escalations card.",
  },
  // Row 4 — 4 cards
  {
    id: "queue-a",
    title: "Queue A",
    icon: Inbox,
    background: "primary",
    metrics: [{ value: 12, label: "Waiting" }],
    detail: "Placeholder detail view for Queue A.",
  },
  {
    id: "queue-b",
    title: "Queue B",
    icon: Inbox,
    background: "info",
    metrics: [{ value: 8, label: "Waiting" }],
    detail: "Placeholder detail view for Queue B.",
  },
  {
    id: "queue-c",
    title: "Queue C",
    icon: Layers,
    background: "neutral",
    metrics: [{ value: 5, label: "Waiting" }],
    detail: "Placeholder detail view for Queue C.",
  },
  {
    id: "queue-d",
    title: "Queue D",
    icon: BarChart3,
    background: "warning",
    metrics: [{ value: 3, label: "Waiting" }],
    detail: "Placeholder detail view for Queue D.",
  },
];

// 1 / 2 / 3 / 4 cards per row, in the order DEMO_CARDS is already laid out.
const DEMO_ROWS: DemoCard[][] = [
  DEMO_CARDS.slice(0, 1),
  DEMO_CARDS.slice(1, 3),
  DEMO_CARDS.slice(3, 6),
  DEMO_CARDS.slice(6, 10),
];

function DemoDashboardCard({
  card,
  isSelected,
  onSelect,
}: {
  card: DemoCard;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <DashboardCard
      // Selected (its own InteriorPanel is the one currently open) gets the
      // same "info-strong" (blue) Container treatment DashboardQueue's own
      // click-to-select cards already use (dashboard-queue.tsx) — no new
      // prop needed on DashboardCard itself, `variant` is plain
      // `ContainerProps` passthrough. This is the reference demo for
      // "click a card, open its InteriorPanel," so it shows the selected
      // state other consumers of this pattern (e.g. Outbound-Campaigns'
      // Monitor dashboard) should also apply.
      variant={isSelected ? "info-strong" : "neutral-subtle"}
      className="w-full min-w-[220px] flex-1 cursor-pointer"
      headerTitle={card.title}
      headerIcon={<Icon icon={card.icon} size="md" background={card.background} shape="rounded" decorative />}
      metrics={card.metrics}
      metricVariant="divided"
      onClick={() => onSelect(card.id)}
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(card.id);
        }
      }}
    />
  );
}

// Decorative — matches Templates/Data Management's own `filterDefs` demo
// data exactly (Description/Created By/Published); nothing here has a real
// field on `DemoCard` to filter against, this is just showing the toolbar's
// filter-chip layout, same as that story's own reasoning.
const TOOLBAR_FILTER_DEFS = [
  {
    key: "description",
    label: "Description",
    options: [
      { value: "Back office", label: "Back office" },
      { value: "Custom", label: "Custom" },
      { value: "Knowledge Worker", label: "Knowledge Worker" },
      { value: "BPO", label: "BPO" },
      { value: "Collections", label: "Collections" },
    ],
  },
  {
    key: "createdBy",
    label: "Created By",
    options: [
      { value: "Jim Smith", label: "Jim Smith" },
      { value: "Alice Johnson", label: "Alice Johnson" },
      { value: "Bob Lee", label: "Bob Lee" },
      { value: "Diana Park", label: "Diana Park" },
    ],
  },
  {
    key: "published",
    label: "Published",
    options: [
      { value: "true", label: "Published" },
      { value: "false", label: "Unpublished" },
    ],
  },
];

function DashboardsTemplate({ fullWidth = false }: { fullWidth?: boolean }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCard = DEMO_CARDS.find((c) => c.id === selectedId) ?? null;

  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>({
    description: [],
    createdBy: [],
    published: [],
  });
  const [isFullScreen, setIsFullScreen] = useState(false);

  const query = searchQuery.trim().toLowerCase();
  const visibleRows = DEMO_ROWS.map((row) =>
    row.filter((card) => !query || card.title.toLowerCase().includes(query))
  ).filter((row) => row.length > 0);

  const toolbarActionDefs: ToolbarActionDef[] = [
    { key: "refresh", label: "Refresh", icon: <RefreshCw className="h-4 w-4" strokeWidth={1.5} /> },
    { key: "edit", label: "Edit", icon: <Pencil className="h-4 w-4" strokeWidth={1.5} /> },
    { key: "copy", label: "Copy", icon: <Copy className="h-4 w-4" strokeWidth={1.5} /> },
    { key: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} /> },
  ];

  return (
    <div className={cn("flex h-screen bg-lyra-bg-surface-shell overflow-hidden", isFullScreen ? "p-0" : "p-3")}>
      <Container className="flex flex-1 overflow-hidden relative">
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto p-6">
          <DashboardTemplate maxWidth={fullWidth ? "none" : 1200} className="flex flex-col gap-6">
            <TableToolbar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterDefs={TOOLBAR_FILTER_DEFS}
              filterValues={filterValues}
              onFilterChange={(key, values) => setFilterValues((prev) => ({ ...prev, [key]: values }))}
              onFilterClear={() => setFilterValues({ description: [], createdBy: [], published: [] })}
              actionDefs={toolbarActionDefs}
              actions={
                <Tooltip content={isFullScreen ? "Exit Fullscreen" : "Fullscreen"} placement="bottom" asLabel>
                  <Button
                    variant="icon"
                    size="icon"
                    onClick={() => setIsFullScreen((v) => !v)}
                    aria-label={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
                  >
                    {isFullScreen ? (
                      <Minimize2 className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </Button>
                </Tooltip>
              }
              className="px-0"
            />
            {visibleRows.map((row, i) => (
              <div key={i} className="flex flex-row flex-wrap gap-4">
                {row.map((card) => (
                  <DemoDashboardCard
                    key={card.id}
                    card={card}
                    isSelected={selectedId === card.id}
                    onSelect={setSelectedId}
                  />
                ))}
              </div>
            ))}
          </DashboardTemplate>
        </div>
        <InteriorPanel
          side="right"
          open={Boolean(selectedCard)}
          headerTitle={selectedCard?.title ?? "Details"}
          onClose={() => setSelectedId(null)}
        >
          {selectedCard && (
            <div className="p-4 lyra-body-md text-lyra-fg-secondary">{selectedCard.detail}</div>
          )}
        </InteriorPanel>
      </Container>
    </div>
  );
}

/* ── Storybook Meta ── */

const meta: Meta<typeof DashboardsTemplate> = {
  title: "Templates/Dashboards",
  component: DashboardsTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardsTemplate>;

export const Default: Story = {
  name: "Dashboards",
  render: () => <DashboardsTemplate />,
};

/* ── Full Width ──
   Identical to `Default` in every other respect (same toolbar, same 4
   rows of 1/2/3/4 cards, same click-to-open panel) — the only difference
   is `DashboardTemplate`'s `maxWidth="none"` instead of the default
   `1200`, so the card rows stretch to the full available width instead of
   a capped, centered reading-width column. Duplicated as its own story
   (rather than a Storybook arg toggle on `Default`) since "full width" is
   a distinct layout worth seeing on its own in the sidebar, not a control
   someone would flip mid-review. See `dashboard-template.tsx`'s
   `maxWidth` doc comment for why `maxWidth="none"` (not
   `className="max-w-none"`) is the correct way to remove the cap. */
export const FullWidth: Story = {
  name: "Full Width",
  render: () => <DashboardsTemplate fullWidth />,
};
