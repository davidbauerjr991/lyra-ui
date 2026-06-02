import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Container } from "../container";
import { Panel } from "../panel";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { RadioGroup, RadioGroupItem } from "../radio";
import { X } from "lucide-react";
import { Tooltip } from "../tooltip";

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  name: "Default",
  render: () => (
    <Container headerTitle="Container" className="pb-5">
      <p className="lyra-body-md text-lyra-fg-secondary px-5">
        A base container with surface background, subtle border, and small shadow.
        Use for cards, panels, and content sections.
      </p>
    </Container>
  ),
};

export const Modal: Story = {
  name: "Modal",
  parameters: {
    backgrounds: { default: "lyra-shell" },
  },
  render: () => (
    <div className="flex items-center justify-center py-8">
      <Container
        variant="modal"
        headerTitle="Dialog Title"
        headerActions={
          <Tooltip content="Close dialog" placement="bottom" asLabel>
            <button aria-label="Close dialog" className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Tooltip>
        }
        className="w-[480px]"
      >
        {/* Form fields */}
        <div className="flex flex-col gap-5 px-5">
          {/* Text input */}
          <Input label="Input Label" placeholder="Text" />

          {/* Select 1 */}
          <Select
            label="Input Label"
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
              { value: "c", label: "Option C" },
            ]}
          />

          {/* Select 2 */}
          <Select
            label="Input Label"
            options={[
              { value: "x", label: "Option X" },
              { value: "y", label: "Option Y" },
              { value: "z", label: "Option Z" },
            ]}
          />

          {/* Radio group */}
          <RadioGroup label="Input Label" defaultValue="option1" name="modal-radio">
            <RadioGroupItem value="option1" label="Radio label" />
            <RadioGroupItem value="option2" label="Radio label" />
            <RadioGroupItem value="option3" label="Radio label" />
          </RadioGroup>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
          <Button variant="outline" size="sm">Button</Button>
          <Button size="sm">Button</Button>
        </div>
      </Container>
    </div>
  ),
};

export const Popover: Story = {
  name: "Popover",
  render: () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Arrow top */}
      <div className="relative">
        <Container variant="popover" headerTitle="Popover Title" className="w-[380px]">
          <div className="px-5 pb-5">
            <p className="lyra-body-md text-lyra-fg-secondary mb-1">
              Contextual content related to the trigger element.
            </p>
            <p className="lyra-body-md text-lyra-fg-secondary mb-5">
              If the popover is used for action confirmation, explain the consequences of the action here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Button</Button>
              <Button size="sm">Button</Button>
            </div>
          </div>
        </Container>
        {/* Arrow — outer (border) + inner (fill) */}
        <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-0 w-0 border-l-[9px] border-r-[9px] border-b-[9px] border-l-transparent border-r-transparent" style={{ borderBottomColor: "var(--lyra-border-subtle)" }} />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent" style={{ borderBottomColor: "var(--lyra-bg-surface-overlay, #fff)" }} />
      </div>

      {/* Arrow bottom */}
      <div className="relative">
        <Container variant="popover" headerTitle="Popover Title" className="w-[380px]">
          <div className="px-5 pb-5">
            <p className="lyra-body-md text-lyra-fg-secondary mb-1">
              Contextual content related to the trigger element.
            </p>
            <p className="lyra-body-md text-lyra-fg-secondary mb-5">
              If the popover is used for action confirmation, explain the consequences of the action here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Button</Button>
              <Button size="sm">Button</Button>
            </div>
          </div>
        </Container>
        {/* Arrow — outer (border) + inner (fill) */}
        <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 h-0 w-0 border-l-[9px] border-r-[9px] border-t-[9px] border-l-transparent border-r-transparent" style={{ borderTopColor: "var(--lyra-border-subtle)" }} />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent" style={{ borderTopColor: "var(--lyra-bg-surface-overlay, #fff)" }} />
      </div>

      {/* Arrow left */}
      <div className="relative">
        <Container variant="popover" headerTitle="Popover Title" className="w-[380px]">
          <div className="px-5 pb-5">
            <p className="lyra-body-md text-lyra-fg-secondary mb-1">
              Contextual content related to the trigger element.
            </p>
            <p className="lyra-body-md text-lyra-fg-secondary mb-5">
              If the popover is used for action confirmation, explain the consequences of the action here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Button</Button>
              <Button size="sm">Button</Button>
            </div>
          </div>
        </Container>
        {/* Arrow — outer (border) + inner (fill) */}
        <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 h-0 w-0 border-t-[9px] border-b-[9px] border-r-[9px] border-t-transparent border-b-transparent" style={{ borderRightColor: "var(--lyra-border-subtle)" }} />
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-0 w-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent" style={{ borderRightColor: "var(--lyra-bg-surface-overlay, #fff)" }} />
      </div>

      {/* Arrow right */}
      <div className="relative">
        <Container variant="popover" headerTitle="Popover Title" className="w-[380px]">
          <div className="px-5 pb-5">
            <p className="lyra-body-md text-lyra-fg-secondary mb-1">
              Contextual content related to the trigger element.
            </p>
            <p className="lyra-body-md text-lyra-fg-secondary mb-5">
              If the popover is used for action confirmation, explain the consequences of the action here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Button</Button>
              <Button size="sm">Button</Button>
            </div>
          </div>
        </Container>
        {/* Arrow */}
        {/* Arrow — outer (border) + inner (fill) */}
        <div className="absolute -right-[9px] top-1/2 -translate-y-1/2 h-0 w-0 border-t-[9px] border-b-[9px] border-l-[9px] border-t-transparent border-b-transparent" style={{ borderLeftColor: "var(--lyra-border-subtle)" }} />
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent" style={{ borderLeftColor: "var(--lyra-bg-surface-overlay, #fff)" }} />
      </div>
    </div>
  ),
};

/* ── Panel variants ── */

export const PanelInterior: Story = {
  name: "Panel/Interior",
  parameters: { backgrounds: { default: "lyra-shell" } },
  render: () => (
    <div className="h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <div className="flex-1 bg-lyra-bg-surface-base" />
      <Panel
        variant="interior"
        side="right"
        open
        headerTitle="Dialog Title"
        onClose={() => {}}
        footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Name" placeholder="Enter name" />
          <Input label="Description" placeholder="Enter description" />
          <Input label="Value" placeholder="Enter value" />
        </div>
      </Panel>
    </div>
  ),
};

export const PanelSide: Story = {
  name: "Panel/Side",
  parameters: { backgrounds: { default: "lyra-shell" } },
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(true);
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <Panel
          variant="side"
          side="left"
          open={open}
          pinned={pinned}
          headerTitle="Designer"
          onPinToggle={() => setPinned((v) => !v)}
        >
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </Panel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen((v) => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>
    );
  },
};

export const Nested: Story = {
  name: "Nested Layout",
  render: () => (
    <div className="flex flex-col gap-4">
      <Container headerTitle="Header Section" className="pb-5">
        <p className="lyra-body-md text-lyra-fg-secondary px-5">Top-level container.</p>
      </Container>
      <div className="flex gap-4">
        <Container headerTitle="Left Panel" className="flex-1 pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary px-5">Side content area.</p>
        </Container>
        <Container headerTitle="Main Content" className="flex-[2] pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary px-5">Primary content area.</p>
        </Container>
      </div>
    </div>
  ),
};
