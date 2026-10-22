import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "../stepper";

/* Static references under "Stepper/Variants". The interactive playground is
   Stepper → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Stepper> = {
  title: "Custom Primitives/Stepper/Variants",
  component: Stepper,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const withOptional = (optional: boolean) =>
  [0, 1, 2].map(() => ({ title: "Step title", optional }));

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 lyra-body-sm-emphasis text-lyra-fg-secondary">{children}</p>
);

/* ── Horizontal — title beside or below the circle, stretched or compact. ── */
export const Horizontal: Story = {
  render: () => (
    <div className="flex w-full max-w-3xl flex-col gap-10">
      <div>
        <Caption>Inline, fill</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} fill />
      </div>
      <div>
        <Caption>Inline, compact</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} />
      </div>
      <div>
        <Caption>Below, fill</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} labelPlacement="below" fill />
      </div>
      <div>
        <Caption>Below, compact</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} labelPlacement="below" />
      </div>
      <div>
        <Caption>Without the Optional caption</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill />
      </div>
    </div>
  ),
};

/* ── Vertical — title beside or below the circle, with and without the Optional caption. ── */
export const Vertical: Story = {
  render: () => (
    <div className="flex flex-wrap gap-16">
      {([
        ["Inline", "inline", false],
        ["Inline, Optional", "inline", true],
        ["Below", "below", false],
        ["Below, Optional", "below", true],
      ] as const).map(([caption, placement, optional]) => (
        <div key={caption} className="flex h-[380px] w-44 flex-col">
          <Caption>{caption}</Caption>
          <div className="min-h-0 flex-1">
            <Stepper
              aria-label="Progress"
              orientation="vertical"
              labelPlacement={placement}
              steps={withOptional(optional)}
              currentStep={1}
              fill
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── States — not started, in progress, finished. ── */
export const States: Story = {
  render: () => (
    <div className="flex w-full max-w-3xl flex-col gap-10">
      {([
        ["Not started (step 1 current)", 0],
        ["In progress (step 2 current)", 1],
        ["Last step current", 2],
        ["All finished", 3],
      ] as const).map(([caption, current]) => (
        <div key={caption}>
          <Caption>{caption}</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={current} fill />
        </div>
      ))}
    </div>
  ),
};

/* ── Compact (phone) — what a horizontal stepper becomes below 425px: the current
   step's title, "Step n of N", and a segmented bar. Shown here at 375px wide
   with "auto" (no `compact` prop), the way it behaves in a real narrow
   container. ── */
export const Compact: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-10">
      {([
        ["First step, Optional", 0, true],
        ["Middle step, Optional", 1, true],
        ["Last step", 2, false],
        ["All finished", 3, false],
      ] as const).map(([caption, current, optional]) => (
        <div key={caption} className="w-[375px] rounded-lyra-md border border-lyra-border-subtle p-4">
          <Caption>{caption}</Caption>
          <Stepper aria-label="Progress" steps={withOptional(optional)} currentStep={current} fill />
        </div>
      ))}
    </div>
  ),
};

/* ── Disabled — the whole stepper muted, or a single step. ── */
export const Disabled: Story = {
  render: () => (
    <div className="flex w-full max-w-3xl flex-col gap-10">
      <div>
        <Caption>Whole stepper disabled</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} fill disabled />
      </div>
      <div>
        <Caption>One step disabled (step 3)</Caption>
        <Stepper
          aria-label="Progress"
          steps={[
            { title: "Step title" },
            { title: "Step title" },
            { title: "Step title", disabled: true },
          ]}
          currentStep={1}
          fill
        />
      </div>
      <div>
        <Caption>Title below, vertical</Caption>
        <div className="flex gap-16">
          <div className="h-72 w-44">
            <Stepper aria-label="Progress" orientation="vertical" labelPlacement="below" steps={withOptional(true)} currentStep={1} fill disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};

/* ── Error — a step with a problem shows a red "!" in place of its number or check. ── */
export const ErrorState: Story = {
  render: () => {
    const steps = [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }, { title: "Step 4", error: true }];
    return (
      <div className="flex w-full max-w-3xl flex-col gap-10">
        <div>
          <Caption>Inline, error on step 4</Caption>
          <Stepper aria-label="Progress" steps={steps} currentStep={2} fill />
        </div>
        <div>
          <Caption>Below, error on the current step</Caption>
          <Stepper
            aria-label="Progress"
            labelPlacement="below"
            steps={[{ title: "Step 1" }, { title: "Step 2", error: true }, { title: "Step 3" }]}
            currentStep={1}
            fill
          />
        </div>
        <div className="h-72 w-44">
          <Caption>Vertical</Caption>
          <Stepper aria-label="Progress" orientation="vertical" steps={steps} currentStep={2} fill />
        </div>
      </div>
    );
  },
};

/* ── Navigation — the Back / Next buttons, right under the steps or in a footer bar. ── */
export const Navigation: Story = {
  render: () => (
    <div className="flex w-full max-w-3xl flex-col gap-12">
      <div>
        <Caption>Below, left</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="below" />
      </div>
      <div>
        <Caption>Below, split</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="below" navigationAlign="split" />
      </div>
      <div className="rounded-lyra-md border border-lyra-border-subtle">
        <div className="p-4">
          <Caption>Footer, right (a bordered bar)</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="footer" />
        </div>
      </div>
      <div className="rounded-lyra-md border border-lyra-border-subtle">
        <div className="p-4">
          <Caption>Footer, split, last step (Next becomes Finish)</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={2} fill navigation="footer" navigationAlign="split" />
        </div>
      </div>
      <div>
        <Caption>Styled with Button props (success Next, ghost Back, size sm)</Caption>
        <Stepper
          aria-label="Progress"
          steps={withOptional(false)}
          currentStep={1}
          fill
          navigation="below"
          backButtonProps={{ variant: "ghost", size: "sm" }}
          nextButtonProps={{ variant: "success", size: "sm" }}
        />
      </div>
    </div>
  ),
};
