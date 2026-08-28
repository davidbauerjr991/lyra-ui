import * as React from "react";
import { cn } from "../lib/utils";
import { Select, type SelectOption } from "./select";
import type { EmbeddablePanelContent } from "./draggable";

/* ── ScreenPop ──
   The "Screen Pop" app panel from the Agent Next Gen AppHeader's top-right
   app area (ported from agent-next-gen-v2): a header `Select` choosing
   which external app to pop the current contact/record into, above a body
   that shows a mock login card for Salesforce/Zendesk and the shared blank
   "Nothing here yet." placeholder for every other app. Wiring an actual
   per-app screen-pop integration is out of scope — this is the panel's
   real reference shape.

   Two consumption shapes, same convention as `AgentSearch`/
   `AgentNotifications`: `useScreenPopContent` returns an
   `EmbeddablePanelContent` for a shared `Draggable`/`DraggablePanel` shell
   (the `Select` in `headerContent` so it stays fixed above the divider,
   the mock/placeholder in `body`); `ScreenPop` renders the same content
   standalone with its own fixed header row. */

/** External apps an agent can pop the current contact/record into.
 *  Dummy list, ported verbatim from the reference. */
const SCREEN_POP_APPS: SelectOption[] = [
  { value: "salesforce",       label: "Salesforce" },
  { value: "zendesk",          label: "Zendesk" },
  { value: "servicenow",       label: "ServiceNow" },
  { value: "hubspot",          label: "HubSpot" },
  { value: "freshdesk",        label: "Freshdesk" },
  { value: "script",           label: "Script" },
  { value: "launch",           label: "Launch" },
  { value: "custom-workspace", label: "Custom Workspace" },
];

/* Visual mock of an external app's login screen, shown in place of a real
   embed. Real screen-pop targets like Salesforce/Zendesk send
   clickjack-protection headers (X-Frame-Options / CSP frame-ancestors) on
   their login and app pages specifically to refuse cross-origin iframing —
   that protection lives on THEIR side and can't be relaxed from a
   consumer/embedding page no matter how it's built (see
   support.zendesk.com's own "Embedding Zendesk into an iframe is not
   allowed" article, and the equivalent Salesforce clickjack protection on
   login.salesforce.com). So rather than a broken/blank iframe, each app
   gets a hand-rolled, obviously-fake login card instead — every field is
   `disabled` and the button/links are non-interactive, and the badge under
   the card spells out that it's a mock, so it can never be mistaken for a
   real login prompt (or an actual authentication surface asking for real
   credentials).

   Deliberate exception to CONTRIBUTING §0/§1 and the no-hardcoded-hex
   rule, carried over from the reference implementation: the raw
   `<input>`/`<button>` elements and literal hex colors here are a
   facsimile of the EXTERNAL app's own branding (Salesforce blue, Zendesk
   deep teal, their neutral grays) — not lyra UI chrome — so composing
   `Button`/`Input` or lyra tokens here would make the mock look like part
   of our own product instead of the third-party page it's imitating. The
   one lyra-styled element is the "Mock preview" badge below the card,
   which IS our chrome. Internal only — not exported. */
function MockLoginCard({
  appName,
  accent,
  logo,
  usernameLabel = "Username",
  usernamePlaceholder = "username@company.com",
  buttonLabel = "Log In",
  footerLink = "Forgot Your Password?",
  rememberMe = true,
}: {
  appName: string;
  accent: string;
  logo: React.ReactNode;
  usernameLabel?: string;
  usernamePlaceholder?: string;
  buttonLabel?: string;
  footerLink?: string;
  rememberMe?: boolean;
}) {
  return (
    <div className="overflow-y-auto flex-1 flex flex-col items-center bg-[#f4f6f9] px-4 pt-10 pb-6 gap-4">
      <div className="w-full max-w-[280px] bg-white rounded-lg shadow-md border border-[#e5e5e5] flex flex-col items-center px-7 py-8">
        {logo}
        <div className="flex flex-col gap-1 w-full mb-3 mt-1">
          <label className="text-xs text-[#3e3e3c]">{usernameLabel}</label>
          <input
            type="text"
            disabled
            placeholder={usernamePlaceholder}
            className="border border-[#c9c9c9] rounded px-2.5 py-2 text-sm text-[#3e3e3c] placeholder:text-[#aeaeae] bg-white disabled:opacity-100 disabled:cursor-not-allowed focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 w-full mb-3">
          <label className="text-xs text-[#3e3e3c]">Password</label>
          <input
            type="password"
            disabled
            placeholder="••••••••"
            className="border border-[#c9c9c9] rounded px-2.5 py-2 text-sm text-[#3e3e3c] bg-white disabled:opacity-100 disabled:cursor-not-allowed focus:outline-none"
          />
        </div>
        {rememberMe && (
          <label className="flex items-center gap-2 text-xs text-[#3e3e3c] w-full mb-4">
            <input type="checkbox" disabled defaultChecked className="disabled:cursor-not-allowed" />
            Remember me
          </label>
        )}
        <button
          type="button"
          disabled
          style={{ backgroundColor: accent }}
          className="w-full text-white text-sm font-medium rounded px-4 py-2 mb-3 disabled:opacity-100 cursor-not-allowed"
        >
          {buttonLabel}
        </button>
        <a className="text-xs pointer-events-none" style={{ color: accent }}>{footerLink}</a>
      </div>
      <span className="lyra-body-xs text-lyra-fg-disabled bg-lyra-bg-surface-container-subtle border border-lyra-border-subtle rounded-full px-2.5 py-1">
        Mock preview — not a live {appName} session
      </span>
    </div>
  );
}

export interface ScreenPopContentProps {
  /** Controlled selected app (a `SCREEN_POP_APPS` value) — pair with
   *  `onAppChange`. Omit to let the component manage it internally. */
  app?: string;
  /** Initial app when uncontrolled. Defaults to "salesforce" (per the
   *  reference: Screen Pop opens straight into the mocked Salesforce login
   *  instead of an empty picker the agent has to act on first). */
  defaultApp?: string;
  /** Called when the selected app changes */
  onAppChange?: (app: string) => void;
}

/** Body for the currently selected app — the mock login card for the two
 *  mocked apps, the shared blank placeholder for everything else. */
function renderScreenPopBody(app: string): React.ReactNode {
  if (app === "salesforce") {
    return (
      <MockLoginCard
        appName="Salesforce"
        accent="#0176d3"
        logo={
          <svg viewBox="0 0 48 30" className="w-24 h-auto mb-4" aria-hidden="true">
            <path
              fill="#00A1E0"
              d="M19.5 6.6c1.5-1.6 3.6-2.6 6-2.6 3.1 0 5.8 1.7 7.3 4.3.9-.4 1.9-.6 3-.6 3.9 0 7.1 3.2 7.1 7.1s-3.2 7.1-7.1 7.1c-.5 0-.9 0-1.4-.1-.9 1.6-2.6 2.7-4.5 2.7-.8 0-1.6-.2-2.3-.5-.9 2.1-3 3.6-5.5 3.6-2.6 0-4.8-1.6-5.7-3.9-.4.1-.8.1-1.2.1-3.3 0-6-2.7-6-6 0-2.2 1.2-4.2 3-5.2-.1-.4-.1-.8-.1-1.2 0-3.6 2.9-6.5 6.5-6.5 1.4 0 2.7.4 3.9 1.2"
            />
          </svg>
        }
      />
    );
  }
  if (app === "zendesk") {
    return (
      <MockLoginCard
        appName="Zendesk"
        accent="#03363d"
        usernameLabel="Email"
        usernamePlaceholder="you@company.com"
        buttonLabel="Sign in"
        footerLink="Forgot my password"
        logo={
          <div className="flex flex-col items-center gap-2 mb-5">
            <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
              <rect x="4" y="4" width="14" height="14" rx="3" fill="#03363D" />
              <circle cx="29" cy="11" r="7" fill="#03363D" />
              <rect x="4" y="22" width="14" height="14" rx="7" fill="#03363D" />
              <rect x="22" y="22" width="14" height="14" rx="3" fill="#03363D" />
            </svg>
            <span className="text-lg font-bold text-[#03363D] tracking-tight lowercase">Zendesk</span>
          </div>
        }
      />
    );
  }
  return (
    <div className="overflow-y-auto flex-1 flex items-center justify-center p-4">
      <p className="lyra-body-md text-lyra-fg-disabled text-center">Nothing here yet.</p>
    </div>
  );
}

/** Everything the Screen Pop app panel shows, as one
 *  `EmbeddablePanelContent` — the app `Select` in `headerContent` (fixed
 *  above the divider, no `label` since the field sits in the header, not a
 *  body form, where a label would be redundant), the mock/placeholder in
 *  `body`. */
function useScreenPopContent({
  app,
  defaultApp = "salesforce",
  onAppChange,
}: ScreenPopContentProps = {}): EmbeddablePanelContent {
  // Controlled-when-provided, internal otherwise — same hybrid pattern
  // `ToggleGroup`/`useAgentSearchContent` use.
  const [internalApp, setInternalApp] = React.useState(defaultApp);
  const isControlled = app !== undefined;
  const currentApp = isControlled ? app : internalApp;

  const handleAppChange = (next: string) => {
    if (!isControlled) setInternalApp(next);
    onAppChange?.(next);
  };

  return {
    title: "Screen Pop",
    headerContent: (
      <Select
        placeholder="Select an app..."
        options={SCREEN_POP_APPS}
        value={currentApp}
        onValueChange={handleAppChange}
      />
    ),
    body: renderScreenPopBody(currentApp),
  };
}

export interface ScreenPopProps
  extends ScreenPopContentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const ScreenPop = React.forwardRef<HTMLDivElement, ScreenPopProps>(
  ({ app, defaultApp, onAppChange, className, ...props }, ref) => {
    const { headerContent, body } = useScreenPopContent({ app, defaultApp, onAppChange });
    return (
      <div ref={ref} className={cn("flex min-h-0 flex-1 flex-col", className)} {...props}>
        {/* Fixed header row — see `AgentSearch`'s matching comment for the
            inset/`pt-3` reasoning. */}
        <div className="shrink-0 border-b border-lyra-border-subtle px-4 pt-3 pb-3">
          {headerContent}
        </div>
        {body}
      </div>
    );
  }
);
ScreenPop.displayName = "ScreenPop";

export { ScreenPop, useScreenPopContent, SCREEN_POP_APPS };
