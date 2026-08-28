import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CustomerInformationPanel } from "../customer-information-panel";
import { Toast, ToastContainer, useToast } from "../toast";
import {
  buildCustomerInfoFields,
  useCustomerRecordDraft,
  useCustomerPanelWidthGuards,
  CustomerInformationDockedPanel,
  CustomerInformationPanelToggle,
} from "./customer-information-demo";

const meta: Meta<typeof CustomerInformationPanel> = {
  title: "UI/CustomerInformationPanel",
  component: CustomerInformationPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomerInformationPanel>;

/* ══ v2 behavior reference ══
   This story mirrors agent-next-gen-v2's CURRENT Customer Information
   panel (`CustomerInformationSidePanel`, agent-next-gen-customer-info-
   panel.tsx + the page files' own state/guards) rather than the older
   left-docked/pin-button shape this story used to show:

   — Docks on the RIGHT (`side="right"`), open + always-pinned by default.
     There is no unpin path: the header instead carries a full-screen
     toggle + a `PanelRightClose` close button.
   — Header: static "Customer Information" title, subhead = the customer's
     plain name, and the tab strip via `headerTabs` (Copilot is currently
     hidden everywhere in v2, so it's omitted from the tab list here too).
   — Sizing: starts at 340px; drag-resizable between 325 and
     min(425, containerWidth); rendered width is also clamped to the
     container so it can never overhang it.
   — Narrow-container guards (driven by the CONTAINER's own measured
     width, not the viewport — drag this story's `resize-x` edge):
     <768 floating overlay (stays open), ≤425 auto full-screen, ≤350
     hides the full-screen toggle (crossing back above 350 exits it).
   — Body content (Overview/Interactions/Detail/Directory), the Customer
     Overview edit flow (`useCustomerRecordDraft` + save footer), and the
     closed-panel hover-preview popover on the toggle button.

   The whole implementation — mock-data builders, `CustomerPanelBody`,
   `CustomerInfoHoverPreview`, `useCustomerPanelWidthGuards`, and the
   composed `CustomerInformationDockedPanel`/`CustomerInformationPanel
   Toggle` this story renders — now lives in the shared (non-story)
   `customer-information-demo.tsx` module, extracted so PageHeader's
   "Record Header (Customers)" story and AgentNextGenTemplate's "Active
   Interaction" story can wire the exact same panel. See that module's
   own doc comments for the full v2 line-by-line rationale. */

function InteractionRecordDemo({
  person,
}: {
  person: { name: string; id: string };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(900);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Open by default; every width/pin/full-screen guard lives in the
     shared hook (see its own doc comment for the v2 state machine). */
  const [open, setOpen] = useState(true);
  const guards = useCustomerPanelWidthGuards(containerWidth, open);

  /* One draft instance + one `overviewEditing` flag shared by the docked
     panel AND the toggle's hover preview (v2 lifts both to the page for
     exactly this): an edit started in one shows in the other, and
     hovering off the preview (unmounting its Popover content) never
     wipes a pending edit. */
  const fields = useMemo(() => buildCustomerInfoFields(person.name, person.id), [person.name, person.id]);
  const recordDraft = useCustomerRecordDraft(fields, person.name, person.id);
  const [overviewEditing, setOverviewEditing] = useState(false);

  const { toasts, addToast, dismissToast } = useToast();
  const fireSavedToast = () =>
    addToast({
      variant: "success",
      title: "Success",
      message: `${person.name} customer record saved`,
      duration: 4000,
    });

  return (
    <div
      ref={containerRef}
      className="resize-x overflow-auto relative flex h-[560px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base"
      style={{ width: 900, maxWidth: "100%" }}
    >
      {/* Stand-in for the interaction's main content column. The toggle
          button mirrors the record header's own — hidden while the panel is
          DOCKED and open (redundant next to a visibly open panel), shown
          again while closed or floating. */}
      <div className="flex flex-1 flex-col min-w-0 gap-3 p-4">
        {!(guards.effectivePinned && open) && (
          <CustomerInformationPanelToggle
            person={person}
            open={open}
            onToggle={() => setOpen((v) => !v)}
            className="self-start"
            recordDraft={recordDraft}
            overviewEditing={overviewEditing}
            onOverviewEditingChange={setOverviewEditing}
            onSaved={fireSavedToast}
          />
        )}
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Drag this card&apos;s right edge to see the v2 width guards fire:
          &lt;768px floats the panel as an overlay (still open), ≤425px
          auto-enters full screen, ≤350px hides the full-screen toggle
          (and widening back past 350 exits full screen). Close the panel
          and hover the button above for the v2 hover preview.
        </p>
        <p className="lyra-body-sm text-lyra-fg-secondary">
          {containerWidth}px container · {guards.effectivePinned ? "docked" : "floating overlay"}
          {guards.fullScreen ? " · full screen" : ""}
        </p>
      </div>

      <CustomerInformationDockedPanel
        person={person}
        open={open}
        onClose={() => setOpen(false)}
        guards={guards}
        recordDraft={recordDraft}
        overviewEditing={overviewEditing}
        onOverviewEditingChange={setOverviewEditing}
        onSaved={fireSavedToast}
      />

      {/* Success toast on record save — same `useToast`/`ToastContainer`
          stack v2's pages own (`onAddToast` threaded down from the page). */}
      <ToastContainer>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            variant={t.variant}
            title={t.title}
            duration={t.duration}
            onDismiss={() => dismissToast(t.id)}
          >
            {t.message}
          </Toast>
        ))}
      </ToastContainer>
    </div>
  );
}

export const InteractionRecord: Story = {
  name: "Interaction Record (Right Docked)",
  render: () => <InteractionRecordDemo person={{ name: "Sarah Miller", id: "CST-10591" }} />,
};

/* ── Agent subject ──
   `person` isn't customer-only — an agent-to-agent consult/transfer
   interaction passes the agent's own name + id the same way. Same v2
   behavior as above, just a different subject. */
export const AgentSubject: Story = {
  name: "Agent Subject",
  render: () => <InteractionRecordDemo person={{ name: "Alex Kowalski", id: "AGT-2003" }} />,
};
