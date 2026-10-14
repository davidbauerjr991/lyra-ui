import type { Meta, StoryObj } from "@storybook/react";
import { ContentArea } from "../content-area";
import { Container } from "../container";

/* ── Custom Primitives / ContentArea ──
   The interactive playground. `ContentArea` is the shell-level wrapper beside the LeftNav that
   gives the main Container its inset (12px right and bottom by default). The static side-by-side
   padding examples are under "ContentArea/Variants". */

type PaddingChoice = "default" | "none" | "small" | "all";

/* Literal class strings so Tailwind's content scanner can find each one. */
const PADDING_CLASS: Record<PaddingChoice, string | undefined> = {
  default: undefined,
  none: "p-0",
  small: "p-2",
  all: "p-6",
};

interface ContentAreaDemoProps {
  padding?: PaddingChoice;
  showNav?: boolean;
  showContainer?: boolean;
}

function ContentAreaDemo({ padding = "default", showNav = true, showContainer = true }: ContentAreaDemoProps) {
  return (
    <div className="flex h-[400px] bg-lyra-bg-surface-shell">
      {/* Simulated sidebar */}
      {showNav && <div className="w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell" />}
      <ContentArea padding={PADDING_CLASS[padding]}>
        {showContainer ? (
          <Container className="flex flex-1 items-center justify-center">
            <p className="lyra-body-md text-lyra-fg-secondary">
              ContentArea provides the inset between the shell and the Container.
            </p>
          </Container>
        ) : (
          // Without a Container, a dashed box shows the area's own bounds.
          <div className="flex-1 rounded-lyra-lg border border-dashed border-lyra-border-strong" />
        )}
      </ContentArea>
    </div>
  );
}

const meta: Meta<typeof ContentAreaDemo> = {
  title: "Custom Primitives/ContentArea",
  component: ContentArea as never,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof ContentAreaDemo>;

export const Default: Story = {
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display name, so names and keys are both listed.
      include: ["Padding", "Left nav", "Container", "padding", "showNav", "showContainer"],
      sort: "none",
    },
  },
  args: { padding: "default", showNav: true, showContainer: true },
  argTypes: {
    padding: {
      name: "Padding",
      control: "radio",
      options: ["default", "none", "small", "all"],
      labels: {
        default: "Default (right and bottom, 12px)",
        none: "None",
        small: "Small (8px all around)",
        all: "Large (24px all around)",
      },
      description: "The inset around the content (`padding`, a Tailwind class). Default leaves a 12px gap on the right and bottom only.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    showNav: {
      name: "Left nav",
      control: "boolean",
      description: "Show a stand-in for the LeftNav that normally sits beside the area.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    showContainer: {
      name: "Container",
      control: "boolean",
      description: "Place a Container inside the area. Off shows a dashed outline of the area's own bounds.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
  },
  render: (args) => <ContentAreaDemo {...args} />,
};
