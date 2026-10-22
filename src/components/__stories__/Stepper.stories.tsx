import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Stepper, type StepperStep } from "../stepper";
import { withControlsFor } from "./storyControls";

const meta: Meta<typeof Stepper> = {
  title: "Custom Primitives/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-base" } },
};

export default meta;

/* Every layout (horizontal and vertical, title beside or below the circle,
   stretched and compact) is on one page under "Stepper/Variants" — see
   Stepper.variants.stories.tsx. */

const DEFAULT_TITLE = "Step title";
type ButtonVariant = "default" | "destructive" | "warning" | "success" | "outline" | "ghost";
const BUTTON_VARIANTS: ButtonVariant[] = ["default", "destructive", "warning", "success", "outline", "ghost"];

interface StepperDemoProps {
  stepCount?: number;
  titles?: string;
  currentStep?: number;
  orientation?: "horizontal" | "vertical";
  labelPlacement?: "inline" | "below";
  fill?: boolean;
  optional?: boolean;
  optionalLabel?: string;
  compact?: "auto" | "always" | "never";
  disabledStep?: number;
  errorStep?: number;
  navigation?: "none" | "below" | "footer";
  navigationAlign?: "left" | "center" | "right" | "split" | "full";
  backLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
  backVariant?: ButtonVariant;
  nextVariant?: ButtonVariant;
  buttonSize?: "sm" | "md" | "lg" | "xl";
  /** Called with the new 1-based step when Back / Next / Finish is pressed. */
  onCurrentStepChange?: (step: number) => void;
}

function StepperDemo({
  stepCount = 3,
  titles = DEFAULT_TITLE,
  currentStep = 2,
  orientation = "horizontal",
  labelPlacement = "inline",
  fill = true,
  optional = true,
  optionalLabel = "Optional",
  compact = "auto",
  disabledStep = 0,
  errorStep = 0,
  navigation = "below",
  navigationAlign,
  backLabel = "Back",
  nextLabel = "Next",
  finishLabel = "Finish",
  backVariant = "outline",
  nextVariant = "default",
  buttonSize = "lg",
  onCurrentStepChange,
}: StepperDemoProps) {
  // Comma-separated titles, one per step in order; any step past the end of the list gets the default.
  const names = titles.split(",").map((t) => t.trim());
  const steps: StepperStep[] = Array.from({ length: stepCount }, (_, i) => ({ title: names[i] || DEFAULT_TITLE, optional, disabled: disabledStep === i + 1, error: errorStep === i + 1 }));
  // The control is 1-based ("Step 2 of 3"); the component takes a 0-based index.
  const index = currentStep - 1;
  return (
    // Fill space needs a container to fill: the full preview width (horizontal) or the
    // full preview height (vertical). With it off the stepper just hugs its content.
    <div className={orientation === "vertical" ? (fill ? "h-[calc(100vh-2rem)]" : "") : "w-full"}>
      <Stepper
        aria-label="Progress"
        steps={steps}
        currentStep={index}
        orientation={orientation}
        labelPlacement={labelPlacement}
        fill={fill}
        optionalLabel={optionalLabel}
        compact={compact === "auto" ? "auto" : compact === "always"}
        navigation={navigation}
        navigationAlign={navigationAlign}
        backLabel={backLabel}
        nextLabel={nextLabel}
        finishLabel={finishLabel}
        backButtonProps={{ variant: backVariant, size: buttonSize }}
        nextButtonProps={{ variant: nextVariant, size: buttonSize }}
        onBack={() => onCurrentStepChange?.(Math.max(1, currentStep - 1))}
        onNext={() => onCurrentStepChange?.(currentStep + 1)}
        onFinish={() => onCurrentStepChange?.(stepCount + 1)}
      />
    </div>
  );
}

type Story = StoryObj<typeof StepperDemo>;

/* ── Default — the interactive playground. ── */
export const Default: Story = withControlsFor({
  render: (args) => {
    // Back / Next move the "Current step" control, so the story works like a real flow.
    const [, updateArgs] = useArgs();
    return <StepperDemo {...args} onCurrentStepChange={(currentStep) => updateArgs({ currentStep })} />;
  },
  args: {
    stepCount: 3,
    titles: DEFAULT_TITLE,
    currentStep: 2,
    orientation: "horizontal",
    labelPlacement: "inline",
    fill: true,
    optional: true,
    optionalLabel: "Optional",
    compact: "auto",
    disabledStep: 0,
    errorStep: 0,
    navigation: "below",
    navigationAlign: "left",
    backLabel: "Back",
    nextLabel: "Next",
    finishLabel: "Finish",
    backVariant: "outline",
    nextVariant: "default",
    buttonSize: "lg",
  },
  parameters: { controls: { sort: "none" } },
  argTypes: {
    stepCount: {
      name: "Steps",
      control: { type: "range", min: 2, max: 6, step: 1 },
      description: "How many steps to show.",
      table: { category: "Content", defaultValue: { summary: "3" } },
    },
    titles: {
      name: "Step titles",
      control: "text",
      description:
        "The title of each step, comma-separated in order (\"Details, Payment, Review\"). Steps beyond the list keep \"Step title\". Each step's own title is `steps[i].title`. Long titles wrap onto more lines.",
      table: { category: "Content", defaultValue: { summary: "Step title" } },
    },
    currentStep: {
      name: "Current step",
      control: { type: "range", min: 1, max: 7, step: 1 },
      description:
        "Which step the person is on, counting from 1 (`currentStep` takes the 0-based index). Earlier steps get a check, later ones are outlined. Past the last step, every step is finished.",
      table: { category: "Behavior", defaultValue: { summary: "2" } },
    },
    optional: {
      name: "Optional",
      control: "boolean",
      description: "Shows the small \"Optional\" caption under each title (`optional` on each step).",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    optionalLabel: {
      name: "Optional text",
      control: "text",
      description: "Wording of that caption (`optionalLabel`). Long text wraps onto more lines.",
      if: { arg: "optional", truthy: true },
      table: { category: "Content", defaultValue: { summary: "Optional" } },
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "A row of steps, or a column (`orientation`).",
      table: { category: "Appearance", defaultValue: { summary: "horizontal" } },
    },
    labelPlacement: {
      name: "Label placement",
      control: "radio",
      options: ["inline", "below"],
      description: "Title beside the circle, or underneath it (`labelPlacement`).",
      table: { category: "Appearance", defaultValue: { summary: "inline" } },
    },
    navigation: {
      name: "Back / Next buttons",
      control: "radio",
      options: ["none", "below", "footer"],
      description:
        "Adds the Back and Next buttons: Below puts them right under the steps; Footer puts them in a bordered bar at the bottom (`navigation`). They move the Current step control.",
      table: { category: "Buttons", defaultValue: { summary: "none" } },
    },
    navigationAlign: {
      name: "Button alignment",
      control: "radio",
      options: ["left", "center", "right", "split", "full"],
      description: "Where the buttons sit in their row: grouped left, center or right, split to opposite edges (Back left, Next right), or full (each stretches to share the row) (`navigationAlign`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "left (below) / right (footer)" } },
    },
    backLabel: {
      name: "Back text",
      control: "text",
      description: "Back button label (`backLabel`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "Back" } },
    },
    nextLabel: {
      name: "Next text",
      control: "text",
      description: "Next button label (`nextLabel`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "Next" } },
    },
    finishLabel: {
      name: "Finish text",
      control: "text",
      description: "Label of the Next button on the last step (`finishLabel`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "Finish" } },
    },
    backVariant: {
      name: "Back variant",
      control: "select",
      options: BUTTON_VARIANTS,
      description: "The Back button's `Button` variant (`backButtonProps.variant`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "outline" } },
    },
    nextVariant: {
      name: "Next variant",
      control: "select",
      options: BUTTON_VARIANTS,
      description: "The Next button's `Button` variant (`nextButtonProps.variant`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "default" } },
    },
    buttonSize: {
      name: "Button size",
      control: "radio",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of both buttons (`size` in `backButtonProps` / `nextButtonProps`).",
      if: { arg: "navigation", neq: "none" },
      table: { category: "Buttons", defaultValue: { summary: "lg" } },
    },
    disabledStep: {
      name: "Disabled step",
      control: { type: "number", min: 0, max: 6, step: 1 },
      description: "Mutes one step with the disabled colors, counting from 1 (`disabled` on that step). 0 is none.",
      table: { category: "Behavior", defaultValue: { summary: "0" } },
    },
    errorStep: {
      name: "Error step",
      control: { type: "number", min: 0, max: 6, step: 1 },
      description: "Puts one step in the error state, counting from 1 (`error` on that step): its circle becomes a red \"!\". 0 is none.",
      table: { category: "Behavior", defaultValue: { summary: "0" } },
    },
    compact: {
      name: "Compact",
      control: "radio",
      options: ["auto", "always", "never"],
      description:
        "The phone-sized look for horizontal steppers: the current step's title with \"Step 2 of 5\" and a segmented progress bar. Auto switches to it when the container is 480px wide or narrower, Lyra\'s small-screen breakpoint (`compact`); Always and Never force it. Vertical steppers never collapse.",
      if: { arg: "orientation", eq: "horizontal" },
      table: { category: "Appearance", defaultValue: { summary: "auto" } },
    },
    fill: {
      name: "Fill space",
      control: "boolean",
      description:
        "On, the connectors stretch to use the full width (horizontal) or height (vertical) of the container. Off, the stepper hugs its content with short connectors (`fill`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
});
