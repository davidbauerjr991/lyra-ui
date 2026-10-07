import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { ProgressBar } from "../progress-bar";
import { Label } from "../label";

/* One page per Progress Bar variant, shown under "Progress Bar/Variants" in
   the sidebar. Static references for design review; the interactive playground
   is Progress Bar → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof ProgressBar> = {
  title: "Headless Primitives/Progress Bar/Variants",
  component: ProgressBar,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/* ── All Variants — the five color variants, three sizes, common states and
   custom labels on one page (was All Variants, Sizes, States and Custom
   Label). Captions use the real `Label` component. ── */
const VARIANTS = [
  { variant: "default", caption: "Default" },
  { variant: "success", caption: "Success" },
  { variant: "warning", caption: "Warning" },
  { variant: "critical", caption: "Critical" },
  { variant: "neutral", caption: "Neutral" },
] as const;

const SIZES = ["sm", "md", "lg"] as const;

const STATES = [
  { caption: "Empty (0%)", value: 0, variant: "default" },
  { caption: "In progress (45%)", value: 45, variant: "default" },
  { caption: "Complete (100%)", value: 100, variant: "success" },
  { caption: "Warning threshold (80%)", value: 80, variant: "warning" },
  { caption: "Critical (95%)", value: 95, variant: "critical" },
] as const;

const CUSTOM_LABELS = [
  { value: 30, label: "3 / 10 steps" },
  { value: 48, label: "2,400 / 5,000 calls" },
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="lyra-heading-sm text-lyra-fg-primary">{title}</h3>
      {children}
    </section>
  );
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <Section title="Variants">
        {VARIANTS.map(({ variant, caption }) => (
          <div key={variant} className="flex flex-col gap-1">
            <Label label={caption} className="text-lyra-fg-secondary" />
            <ProgressBar value={65} variant={variant} showLabel />
          </div>
        ))}
      </Section>
      <Section title="Sizes">
        {SIZES.map((s) => (
          <div key={s} className="flex flex-col gap-1">
            <Label label={s} className="text-lyra-fg-secondary" />
            <ProgressBar value={70} size={s} />
          </div>
        ))}
      </Section>
      <Section title="States">
        {STATES.map(({ caption, value, variant }) => (
          <div key={caption} className="flex flex-col gap-1">
            <Label label={caption} className="text-lyra-fg-secondary" />
            <ProgressBar value={value} variant={variant} showLabel />
          </div>
        ))}
      </Section>
      <Section title="Custom labels">
        {CUSTOM_LABELS.map(({ value, label }) => (
          <ProgressBar key={label} value={value} showLabel label={label} />
        ))}
      </Section>
    </div>
  ),
};

/* ── Animated — both previous animated stories on one page. ──
   1. "Loading…": a JS ramp from 0 to 100 that changes color as it goes
      (default → warning at 80 → success at 100) with a percentage label.
   2. "Agent Skill Level": one `setValue(60)` after mount, letting a single CSS
      transition do all the motion. `indicatorClassName` overrides the default
      `duration-300 ease-in-out` with `duration-[330ms]
      ease-[cubic-bezier(0.65,0,0.35,1)]` — Radix's own Progress docs curve at
      half its 660ms. That curve is a symmetric ease-in-out, not a pure
      ease-out. No percentage label, and it stops at 60 because it stands in
      for a "still loading" moment, not a completed task. */
function LoadingRamp() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        if (v >= 100) { clearInterval(id); return 100; }
        return v + 2;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);
  const variant = value >= 100 ? "success" : value >= 80 ? "warning" : "default";
  return (
    <div className="flex flex-col gap-2">
      <Label label="Loading…" className="text-lyra-fg-secondary" />
      <ProgressBar value={value} variant={variant} size="md" showLabel />
    </div>
  );
}

function EasedFill() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setValue(60), 100);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <Label label="Agent Skill Level" />
      <ProgressBar
        value={value}
        variant="default"
        size="md"
        indicatorClassName="duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
      />
    </div>
  );
}

export const Animated: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <LoadingRamp />
      <EasedFill />
    </div>
  ),
};

/* ── Indeterminate — progress with no known value. The segment slides along
   the track (with "reduce motion" on, it fades in place instead). The bar
   exposes no aria-valuenow. A custom label is shown as text and names the bar. ── */
export const Indeterminate: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="flex flex-col gap-2">
        <Label label="Indeterminate" />
        <ProgressBar indeterminate />
      </div>
      <div className="flex flex-col gap-2">
        <Label label="Indeterminate with label" />
        <ProgressBar indeterminate showLabel label="Preparing export…" />
      </div>
      <div className="flex flex-col gap-2">
        <Label label="Sizes and variants" />
        <ProgressBar indeterminate size="sm" />
        <ProgressBar indeterminate size="lg" variant="success" />
      </div>
    </div>
  ),
};

/* ── Labelled — with Show label and a custom label, the visible text is the
   bar's accessible name (aria-labelledby), so screen readers say what people see. ── */
export const Labelled: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <ProgressBar value={45} showLabel label="Uploading 3 of 8 files" />
      <ProgressBar value={80} showLabel />
    </div>
  ),
};
