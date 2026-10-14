import type { Meta, StoryObj } from "@storybook/react";
import { ContentArea } from "../content-area";
import { Container } from "../container";

/* One page per variant, shown under "ContentArea/Variants" in the sidebar. "!autodocs" keeps this
   folder from getting a second Docs page. The interactive playground is ContentArea -> Default. */
const meta: Meta<typeof ContentArea> = {
  title: "Custom Primitives/ContentArea/Variants",
  component: ContentArea,
  tags: ["!autodocs"],
  parameters: { layout: "fullscreen", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof ContentArea>;

export const CustomPadding: Story = {
  name: "Custom Padding",
  render: () => (
    <div className="flex h-[400px] bg-lyra-bg-surface-shell">
      <div className="w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell" />
      <ContentArea padding="p-6">
        <Container className="flex flex-1 items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">
            Custom padding override (p-6 = 24px all around).
          </p>
        </Container>
      </ContentArea>
    </div>
  ),
};
