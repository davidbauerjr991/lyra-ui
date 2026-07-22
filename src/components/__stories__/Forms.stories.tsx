import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../container";
import { FormTemplate } from "../form-template";

/* ── Forms template ──
   A record-detail form layout, promoted out of `lyra-form-generator`'s own
   hand-built `FormDetailPage.tsx` into a real shared component
   (`FormTemplate`, see form-template.tsx) — this story is just that
   component dropped into a minimal page shell (a `Container`, matching
   `Templates/Dashboards`; no `PageHeader`/nav/side panel — those are the
   consuming page's own chrome, not part of this template). Any consumer
   needing this "Forms" detail layout can render the identical
   `<FormTemplate>` instead of hand-copying this page's content.

   Placed directly below `Templates/Dashboards` in the sidebar via
   `.storybook/preview.ts`'s explicit `storySort` order. */

function FormsTemplate() {
  return (
    <div className="flex h-screen bg-lyra-bg-surface-shell overflow-hidden p-3">
      <Container className="flex flex-1 overflow-hidden relative">
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto px-6 py-6">
          <FormTemplate />
        </div>
      </Container>
    </div>
  );
}

/* ── Storybook Meta ── */

const meta: Meta<typeof FormsTemplate> = {
  title: "Templates/Forms",
  component: FormsTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof FormsTemplate>;

export const Default: Story = {
  name: "Forms",
  render: () => <FormsTemplate />,
};
