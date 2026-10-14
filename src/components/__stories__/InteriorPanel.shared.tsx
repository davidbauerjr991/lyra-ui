/* Shared example content for InteriorPanel.stories.tsx (Default playground)
   and InteriorPanel.variants.stories.tsx (Variants pages). Not a stories
   file — it only holds the fixtures both use, so the two can't drift apart.

   NOTE: the four stories that `lyra-sol-compare/compare.config.json` pairs
   with Sol's Panel stories (Right, WithFullScreen, WithTabs, Left) are kept
   verbatim in InteriorPanel.stories.tsx and don't import from here. */
import { useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { TabList, Tab } from "../tabs";

/* Placeholder form used as panel body content. */
export const PanelForm = () => (
  <div className="flex flex-col gap-4 px-4 py-4">
    <Input label="Name" placeholder="Enter name" />
    <Input label="Description" placeholder="Enter description" />
    <Input label="Value" placeholder="Enter value" />
  </div>
);

export const panelFooter = (
  <>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </>
);

/* `headerTabs` content: a TabList wired to its own active-tab state. */
export function PanelTabs() {
  const [active, setActive] = useState(0);
  return (
    <TabList className="px-4">
      {["Overview", "Detail", "History"].map((label, i) => (
        <Tab key={label} active={active === i} onClick={() => setActive(i)}>
          {label}
        </Tab>
      ))}
    </TabList>
  );
}

/* Frame for a static panel example: `relative` matters because InteriorPanel
   switches to `position: absolute` below 1440px of its parent's width and
   needs a positioned ancestor to stay confined (see InteriorPanel.stories
   `Right`'s own doc comment). */
export function PanelFrame({
  label,
  children,
  side = "right",
}: {
  label: string;
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="lyra-label text-lyra-fg-secondary">{label}</p>
      <div className="relative flex h-[420px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
        {side === "right" && <div className="flex-1" />}
        {children}
        {side === "left" && <div className="flex-1" />}
      </div>
    </div>
  );
}
