import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { cn } from "../../lib/utils";
import { LoginCard } from "../login-card";
import { LoginCardLiveVox } from "../login-card-livevox";
import { LoginCardSelectService } from "../login-card-select-service";
import { LoginCardIeUnsupported } from "../login-card-ie-unsupported";
import { LoginCardChangePassword } from "../login-card-change-password";
import { LoginCardPairAuthenticator } from "../login-card-pair-authenticator";
import { LoginCardAccessDenied } from "../login-card-access-denied";

/* ── Login template ──
   Full-page login/launch screen. "Default" mirrors agent-next-gen-v3's own
   `LoginPage.tsx` wrapper around `LoginCard` (appName="Agent Workspace",
   launchButtonLabel="Launch", same full-screen shell chrome). `LoginCard`
   itself gained a `contained` prop (see login-card.tsx) so this story could
   toggle its modal chrome/shadow on and off — everything else about the
   card is unchanged, and `UI/LoginCard`'s own atom-level stories still use
   the (unaffected) `contained` default of `true`.

   `cardVariant` is a select control backed by `LOGIN_CARD_VARIANTS` so
   additional `LoginCard`-style components can be added as new selectable
   variants without restructuring this story. Each variant is a small render
   function (not just a component reference) since different login card
   components take different, non-overlapping props — a render function lets
   each variant supply its own props while still sharing the one `contained`
   control every variant is expected to support. */

const LOGIN_CARD_VARIANTS: Record<string, (contained: boolean) => ReactNode> = {
  default: (contained) => (
    <LoginCard appName="Agent Workspace" launchButtonLabel="Launch" contained={contained} />
  ),
  livevox: (contained) => <LoginCardLiveVox contained={contained} />,
  "select-service": (contained) => <LoginCardSelectService contained={contained} />,
  "ie-unsupported": (contained) => <LoginCardIeUnsupported contained={contained} />,
  "change-password": (contained) => <LoginCardChangePassword contained={contained} />,
  "pair-authenticator": (contained) => <LoginCardPairAuthenticator contained={contained} />,
  "access-denied": (contained) => <LoginCardAccessDenied contained={contained} />,
};

type LoginCardVariant = keyof typeof LOGIN_CARD_VARIANTS;

/* Page background options. "white" / "neutral" reuse real surface tokens
   (bg-surface-base / bg-surface-shell); "white-labeled" is an explicit,
   user-requested purple gradient built from the existing purple accent
   tokens (--lyra-color-accent-purple-soft/-strong), not a new token. */
const BACKGROUND_VARIANTS = {
  white: "bg-lyra-bg-surface-base",
  neutral: "bg-lyra-bg-surface-shell",
  "white-labeled": "bg-[linear-gradient(135deg,var(--lyra-color-accent-purple-soft),var(--lyra-color-accent-purple-strong))]",
} as const;

type BackgroundVariant = keyof typeof BACKGROUND_VARIANTS;

interface LoginTemplateProps {
  cardVariant?: LoginCardVariant;
  background?: BackgroundVariant;
  contained?: boolean;
}

function LoginTemplate({
  cardVariant = "default",
  background = "neutral",
  contained = true,
}: LoginTemplateProps) {
  return (
    <div
      className={cn(
        "flex h-screen w-screen items-center justify-center p-6 animate-in fade-in-0 duration-500",
        BACKGROUND_VARIANTS[background]
      )}
    >
      {LOGIN_CARD_VARIANTS[cardVariant](contained)}
    </div>
  );
}

/* ── Storybook Meta ── */

const meta: Meta<typeof LoginTemplate> = {
  title: "Templates/Login",
  component: LoginTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    cardVariant: { control: "select", options: Object.keys(LOGIN_CARD_VARIANTS) },
    background: { control: "select", options: Object.keys(BACKGROUND_VARIANTS) },
    contained: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof LoginTemplate>;

export const Default: Story = {
  name: "Login",
  args: { cardVariant: "default", background: "neutral", contained: true },
  render: (args) => <LoginTemplate {...args} />,
};
