import * as React from "react";
import { cn } from "../lib/utils";

/* ── DashboardTemplate ──
   The generic structural shell any dashboard-style page should reuse:
   a max-width-capped, centered content column, plus the container-query
   boundary (`lyra-container-grid-wrap`) its card rows react against.

   Extracted out of `AgentDashboard` (agent-dashboard.tsx), which used to
   inline this exact wrapper (`w-full max-w-[1200px] mx-auto lyra-
   container-grid-wrap`) as part of its own component instead of as a
   reusable piece. That inlining is exactly why "the dashboard template"
   read as `AgentDashboard`'s specific content (a greeting, that agent's
   own queue widgets, their Contact History + Redial, their Performance/
   Productivity stats) instead of the actual reusable piece underneath
   it: the container/width/breakpoint shell around arbitrary cards. See
   PROJECT_SUMMARY.md's "AgentDashboard shouldn't be the template" entry
   for the full incident this came from.

   This owns ONLY the shell — not what's inside it. Compose it with
   whatever card content and grid class fits a given page's actual
   layout:
   - `.lyra-container-grid` (lyra-tokens.css) — a row of cards that
     collapses 2-up at ≤991px, then a single column at ≤768px. This is
     `AgentDashboard`'s own Performance/Productivity row, and the generic
     "row of dashboard cards" mechanism this template is built to pair
     with by default.
   - `.lyra-card-split` — a two-column stat/chart split that stacks below
     its own breakpoint.
   - or just a plain full-width `DashboardCard`, no grid class at all.
   None of these are reimplemented or replaced here — they're already the
   real "cards react responsively" mechanism, each already proven in a
   real page. `DashboardTemplate` only gives every dashboard page the same
   outer container/width/centering treatment instead of each one hand-
   typing its own copy of `w-full max-w-[Npx] mx-auto`.

   Content is NOT part of this component at all — no greeting, no bundled
   card components, no demo data. A new dashboard page assembles its own
   `DashboardCard`s (or whatever cards its design calls for) as `children`,
   in whatever grid class(es) its own layout needs. See `AgentDashboard`
   for a full worked example (it now renders this component instead of its
   own inline wrapper) — but don't reach for `AgentDashboard` itself as a
   template; its actual content is specific to one persona's Home tab. */

export interface DashboardTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Max content width, centered via `mx-auto`. A bare number is treated as
   * px (e.g. `1200` → `1200px`); a string is used as-is (e.g. `"90%"`).
   * Default `1200` — matches `AgentDashboard`'s own long-established
   * width. For a dashboard meant to use the full available width instead
   * of a reading-width column, pass `maxWidth="none"` — **not**
   * `className="max-w-none"`, which can't win here: `maxWidth` is applied
   * as an inline `style`, and inline styles always beat a Tailwind class
   * regardless of source order or specificity (`twMerge` only resolves
   * conflicts *between classes*, it has no say over `style`). See the
   * `Templates/Dashboards` → "Full Width" story for the real usage.
   */
  maxWidth?: number | string;
}

const DashboardTemplate = React.forwardRef<HTMLDivElement, DashboardTemplateProps>(
  ({ maxWidth = 1200, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full mx-auto lyra-container-grid-wrap", className)}
      style={{ maxWidth, ...style }}
      {...props}
    >
      {children}
    </div>
  )
);
DashboardTemplate.displayName = "DashboardTemplate";

export { DashboardTemplate };
