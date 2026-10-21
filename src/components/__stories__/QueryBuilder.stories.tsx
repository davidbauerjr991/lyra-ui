import { useEffect, useState } from "react";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { QueryBuilder, emptyQuery } from "../query-builder";
import type { QueryGroup } from "../query-builder";
import { withControlsFor } from "./storyControls";
import { sampleQueryCriteria } from "./QueryBuilder.shared";

const meta: Meta<typeof QueryBuilder> = {
  title: "Custom Primitives/QueryBuilder",
  component: QueryBuilder,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;

/* ── Default — the builder, fully controlled. The story opens in Popover mode — a button
   that opens it, then shows what was applied with a Clear button; turn Popover off for the inline builder. The Table
   toolbar's Query Builder popover (Table → Toolbar — Query Builder) puts this same
   component inside the popover; the criteria below are sample fields, every consumer
   passes its own.

   Story-only: `save` (passes `onSave`, which is what shows the Save Search button),
   `popoverControlsOn` (hidden — `argTypes.if` takes one condition, so it mirrors
   "popover is on" to gate the popover-only controls) and the "Last action" readout. ── */

interface DemoProps {
  // Both modes
  popover: boolean;
  showDescription: boolean;
  save: boolean;
  // Inline only
  footer: boolean;
  // Popover only
  label: string;
  appliedLabel: string;
  showSummary: boolean;
  showClear: boolean;
}

function Demo({
  popover,
  showDescription,
  save,
  footer,
  // Defaults guard against Storybook handing over stale args (e.g. after hot reload / "reset" mid-edit).
  label = "Query Builder",
  appliedLabel = "Applied Filters",
  showSummary = true,
  showClear = true,
}: DemoProps) {
  const [query, setQuery] = useState<QueryGroup>(emptyQuery);
  const [lastAction, setLastAction] = useState<string>("—");
  const onSave = save ? (name: string) => setLastAction(`Save Search “${name}”`) : undefined;

  if (popover) {
    return (
      <div className="flex max-w-[720px] flex-col gap-3">
        <QueryBuilder
          popover
          criteria={sampleQueryCriteria}
          value={query}
          onChange={(q) => {
            setQuery(q);
            setLastAction(q.chips.length || q.subGroups.length ? "Apply" : "Clear");
          }}
          showDescription={showDescription}
          label={label.trim() || undefined}
          appliedLabel={appliedLabel.trim() || undefined}
          showSummary={showSummary}
          showClear={showClear}
          onSave={onSave}
        />
        <p className="lyra-body-sm text-lyra-fg-secondary">Last action: {lastAction}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-[880px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
        <QueryBuilder
          criteria={sampleQueryCriteria}
          value={query}
          onChange={setQuery}
          showDescription={showDescription}
          footer={footer}
          onApply={() => setLastAction("Apply")}
          onCancel={() => setLastAction("Cancel")}
          onSave={onSave}
        />
      </div>
      {footer && <p className="lyra-body-sm text-lyra-fg-secondary">Last footer action: {lastAction}</p>}
    </div>
  );
}

export const Default: StoryObj<DemoProps & { popoverControlsOn: boolean }> = withControlsFor({
  args: {
    popover: true,
    showDescription: true,
    save: false,
    footer: false,
    label: "Query Builder",
    appliedLabel: "Applied Filters",
    showSummary: true,
    showClear: true,
    popoverControlsOn: true,
  },
  argTypes: {
    popover: {
      name: "Popover",
      control: "boolean",
      description: "A button that opens the builder in a popover, then shows what was applied with a Clear button (`popover`). Off: the builder sits inline.",
    },
    showDescription: {
      name: "Description",
      control: "boolean",
      description: "The text description of the query under the builder, with a copy button that appears on hover (`showDescription`).",
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description: "Cancel and Apply buttons below the builder (`footer`, with `onApply` / `onCancel`). Inline only — the popover always has them.",
    },
    save: {
      name: "Save",
      control: "boolean",
      description: "A Save Search button in the footer that asks for a name (`onSave`). Needs Footer on when inline.",
    },
    label: {
      name: "Button text",
      control: "text",
      description: "Text while nothing is applied (`label`).",
      if: { arg: "popoverControlsOn", truthy: true },
    },
    appliedLabel: {
      name: "Applied button text",
      control: "text",
      description: "Text once a query is applied (`appliedLabel`).",
      if: { arg: "popoverControlsOn", truthy: true },
    },
    showSummary: {
      name: "Summary",
      control: "boolean",
      description: "The applied query as text next to the button (`showSummary`).",
      if: { arg: "popoverControlsOn", truthy: true },
    },
    showClear: {
      name: "Clear",
      control: "boolean",
      description: "The Clear button while a query is applied (`showClear`).",
      if: { arg: "popoverControlsOn", truthy: true },
    },
    popoverControlsOn: { table: { disable: true } },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync with Popover so the popover-only controls show/hide.
    useEffect(() => {
      if (args.popoverControlsOn !== args.popover) updateArgs({ popoverControlsOn: args.popover });
    }, [args.popover, args.popoverControlsOn, updateArgs]);
    return <Demo {...args} />;
  },
});
