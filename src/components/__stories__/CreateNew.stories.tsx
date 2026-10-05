import type { Meta, StoryObj } from "@storybook/react";
import { CreateNew } from "../create-new";
import { OUTBOUND_CONFIG } from "./create-new-outbound-mock";

/* ── Outbound flow demo data (Create New → Outbound) ──
   Shared with LeftNav.stories.tsx and AgentNextGenTemplate.stories.tsx —
   see create-new-outbound-mock.tsx so all three stay in sync. */

const meta: Meta<typeof CreateNew> = {
  title: "UI/CreateNew",
  component: CreateNew,
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CreateNew>;

/* Compact icon-only trigger — used when the left nav rail is collapsed.
   See the `outbound` prop on CreateNew for the group picker → call-setup
   flow this button opens. */
export const IconButton: Story = {
  name: "Icon Button",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: false,
  },
};

/* Full-width secondary button with visible label — used when the left nav
   rail is expanded (open). */
export const Expanded: Story = {
  name: "Expanded (Full Button)",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: true,
  },
};

/* ── Voice Only (Phase 1 Dial Pad) ──
   Per explicit request ("add controls to the new outbound that say 'voice
   only true/false' and when true display only the dialpad popover as
   currently exists in agent-next-gen-v3 phase 1"): `voiceOnly` isn't a real
   prop on `CreateNew` itself — there's no such flag on the component. It's
   a `Controls`-panel-only toggle this story adds, demonstrating the exact
   `outbound` config agent-next-gen-v3's `AgentWorkspaceAdvancedPage.tsx`
   ("Agent Workspace 2.0 | Phase 1" in that app's own menu) passes for its
   own "New Outbound" `pinnedHeader`:
     - `groups` filtered down to ONLY the "dialpad" entry (every other
       group — Favorites/Agents/Teams/Skills/Customers — dropped)
     - `defaultGroupId: "dialpad"` (no longer any other group id to fall
       back to once the rest are filtered out)
     - `skipGroupPicker: true` — skips screen 1's group-row list entirely
       (there'd only be one row — "Dial Pad" — to click through before
       landing on the exact same screen anyway), so the "+" opens straight
       into the Dial Pad, no back button, header reading this popover's own
       `title` ("New Outbound") rather than the group's "Dial Pad" label
   That's the real "we're not doing omnichannel, voice only" case:
   agent-next-gen-v3's own doc comment on this exact wiring quotes the
   originating request verbatim ("when the user clicks New Outbound just
   display the dial pad content with no back button ... since we are not
   doing omnichannel for phase 1").

   Toggle "voiceOnly" off in the Controls panel to compare against the full
   Favorites/Agents/Teams/Skills/Customers/Dial-Pad group picker every other
   story above shows. */
function CreateNewVoiceOnlyDemo({
  voiceOnly = true,
  expanded = true,
}: {
  voiceOnly?: boolean;
  expanded?: boolean;
}) {
  return (
    <CreateNew
      title="New Outbound"
      expanded={expanded}
      outbound={
        voiceOnly
          ? {
              ...OUTBOUND_CONFIG,
              groups: OUTBOUND_CONFIG.groups.filter((group) => group.id === "dialpad"),
              defaultGroupId: "dialpad",
              skipGroupPicker: true,
            }
          : OUTBOUND_CONFIG
      }
    />
  );
}

type VoiceOnlyStory = StoryObj<typeof CreateNewVoiceOnlyDemo>;

export const VoiceOnly: VoiceOnlyStory = {
  name: "Voice Only (Phase 1 Dial Pad)",
  args: {
    voiceOnly: true,
    expanded: true,
  },
  argTypes: {
    voiceOnly: {
      control: "boolean",
      description:
        'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same `groups`-filtered-to-"dialpad" + `defaultGroupId` + `skipGroupPicker` wiring agent-next-gen-v3\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.',
    },
    expanded: {
      control: "boolean",
      description: "Full-width labeled button vs. collapsed icon-only trigger",
    },
  },
  render: (args) => <CreateNewVoiceOnlyDemo {...args} />,
};
