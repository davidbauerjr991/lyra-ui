import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { RadioGroup, RadioGroupItem } from "./radio";
import { Separator } from "./separator";
import { ConversationMessage } from "./conversation-message";
import { Input } from "./input";
import { Container } from "./container";
import defaultAppIconSrc from "../assets/app-icon.svg";
import type { AIProcessStep, AIProcessStepStatus } from "./ai-process";

/* ── Types ── */

export type LoginCardPhoneSetup = "soft-phone" | "phone-number" | "work-station";

type LaunchStepId = "auth" | "sync" | "queue";

export interface LoginCardProps {
  /** App name shown at the top of the card. Default: "Agent Next Gen" */
  appName?: string;
  /** App icon shown beside the name. Default: the shared app-icon.svg mark */
  appIcon?: React.ReactNode;
  /** Seeds which phone setup option is selected on mount. Default: "soft-phone" */
  defaultPhoneSetup?: LoginCardPhoneSetup;
  /**
   * Renders the card already mid-launch and starts the launch sequence on mount.
   * Useful for demoing the "Compiling Experience" state. Default: false
   */
  defaultLaunching?: boolean;
  /** Called once the launch sequence finishes and the card has fully faded out */
  onLaunch?: () => void;
  /**
   * Idle-state label for the launch button — defaults to `Launch ${appName}`
   * (unchanged from before this prop existed). Per explicit request
   * (agent-next-gen-v2's own `LoginPage.tsx`, whose card already shows its
   * app name once in the header just above), pass a plain `"Launch"` here
   * to drop the app-name repetition from the button specifically, without
   * touching `appName` itself (still used for the header title and for the
   * in-progress `"Launching {appName}…"` status text below, which is
   * genuinely informative during the wait rather than a repeat of the
   * header).
   */
  launchButtonLabel?: string;
  className?: string;
}

/* ── Launch sequence config ── */

const LAUNCH_STEPS: { id: LaunchStepId; label: string }[] = [
  { id: "auth",  label: "Authenticating Agent" },
  { id: "sync",  label: "Checking Connection" },
  { id: "queue", label: "Loading Queue" },
];

const STEP_DURATION = 700;
const CARD_FADE_DURATION = 400;
const VALID_STATION_ID = "12345";

/* ── Component ──
   Rendered as a small (360px) modal-style Container — matches the "Small (360px)"
   convention from Custom Primitives/Modal (Container variant="modal" + w-[360px]), rather than
   a hand-rolled card div. */

const LoginCard = React.forwardRef<HTMLDivElement, LoginCardProps>(
  (
    {
      appName = "Agent Next Gen",
      appIcon,
      defaultPhoneSetup = "soft-phone",
      defaultLaunching = false,
      onLaunch,
      launchButtonLabel,
      className,
    },
    ref
  ) => {
    const [phoneSetup, setPhoneSetup] = React.useState<LoginCardPhoneSetup>(defaultPhoneSetup);
    // Plain, unformatted digits — was a masked `PhoneValue` (country selector
    // + auto-formatted `PhoneInput`), per explicit request: a login field
    // just needs a real, dialable number typed in as-is, not formatted or
    // scoped to one country's mask. `phoneNumberTouched` mirrors the Station
    // ID field's own "only show its error after the agent has actually left
    // the field" pattern just below, rather than showing "not valid" before
    // the agent has typed anything at all.
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [phoneNumberTouched, setPhoneNumberTouched] = React.useState(false);
    const [stationId, setStationId] = React.useState("");
    const [stationIdTouched, setStationIdTouched] = React.useState(false);
    const [savePreferences, setSavePreferences] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(
      () => document.documentElement.getAttribute("data-theme") === "dark"
    );

    const [launching, setLaunching] = React.useState(defaultLaunching);
    const [fadingOut, setFadingOut] = React.useState(false);
    const [stepStatus, setStepStatus] = React.useState<Record<LaunchStepId, AIProcessStepStatus>>({
      auth: defaultLaunching ? "active" : "pending",
      sync: "pending",
      queue: "pending",
    });
    const timers = React.useRef<ReturnType<typeof setTimeout>[]>([]);

    const needsPhoneNumber = phoneSetup === "phone-number";
    const needsStationId = phoneSetup === "work-station";
    // At least 7 digits — per explicit request, a plain length/digit-count
    // check rather than a country-mask-derived exact length (there's no
    // country selector anymore for this field, so there's no one mask to
    // validate against — see `phoneNumber`'s own state comment above).
    // `replace(/\D/g, "")` strips any punctuation the agent happens to type
    // (dashes/parens/spaces) before counting, so "555-123-4567" and
    // "5551234567" validate the same.
    const isPhoneValid = !needsPhoneNumber || phoneNumber.replace(/\D/g, "").length >= 7;
    const isStationIdValid = !needsStationId || stationId === VALID_STATION_ID;
    const isFormValid = isPhoneValid && isStationIdValid;
    const stationIdError =
      needsStationId && stationIdTouched && stationId !== VALID_STATION_ID
        ? "Invalid Station ID"
        : undefined;
    const phoneNumberError =
      needsPhoneNumber && phoneNumberTouched && !isPhoneValid
        ? "Phone number is not valid. Please enter a different number."
        : undefined;

    const launchSteps: AIProcessStep[] = LAUNCH_STEPS.map((s) => ({
      id: s.id,
      label: s.label,
      status: stepStatus[s.id],
    }));

    const runLaunchSequence = React.useCallback(() => {
      setStepStatus({ auth: "active", sync: "pending", queue: "pending" });
      timers.current.push(
        setTimeout(() => setStepStatus((s) => ({ ...s, auth: "done", sync: "active" })), STEP_DURATION),
        setTimeout(() => setStepStatus((s) => ({ ...s, sync: "done", queue: "active" })), STEP_DURATION * 2),
        setTimeout(() => setStepStatus((s) => ({ ...s, queue: "done" })), STEP_DURATION * 3),
        setTimeout(() => setFadingOut(true), STEP_DURATION * 3 + 500),
        setTimeout(() => onLaunch?.(), STEP_DURATION * 3 + 500 + CARD_FADE_DURATION)
      );
    }, [onLaunch]);

    React.useEffect(() => {
      if (defaultLaunching) runLaunchSequence();
      return () => timers.current.forEach(clearTimeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDarkModeToggle = () => {
      setDarkMode((prev) => {
        const next = !prev;
        document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
        return next;
      });
    };

    const handleLaunch = () => {
      if (!isFormValid || launching) return;
      setLaunching(true);
      runLaunchSequence();
    };

    return (
      <Container
        ref={ref}
        variant="modal"
        headerTitle={appName}
        headerTitleClassName="lyra-heading-lg"
        headerIcon={appIcon ?? <img src={defaultAppIconSrc} alt="" className="h-5 w-5" />}
        className={cn(
          "w-[360px] transition-opacity ease-out",
          fadingOut ? "opacity-0" : "opacity-100",
          className
        )}
        style={{ transitionDuration: `${CARD_FADE_DURATION}ms` }}
      >
        <div className="flex flex-col px-5 pb-5 pt-4">
          {/* ── Phone setup panel ── */}
          <div className="rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5">
            <RadioGroup
              label="Phone Setup"
              value={phoneSetup}
              onValueChange={(value) => setPhoneSetup(value as LoginCardPhoneSetup)}
              disabled={launching}
            >
              <RadioGroupItem value="soft-phone" label="Integrated Soft Phone" />
              <RadioGroupItem value="phone-number" label="Phone Number" />
              <RadioGroupItem value="work-station" label="Station ID" />
            </RadioGroup>

            <Separator className="my-5" />

            <Button variant="ghost" onClick={handleDarkModeToggle} disabled={launching}>
              {darkMode ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
              {darkMode ? "Experience In Light Mode" : "Experience In Dark Mode"}
            </Button>

            {/* Grid-rows trick animates the container's height smoothly (height: auto can't be transitioned directly) */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                needsPhoneNumber ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
              aria-hidden={!needsPhoneNumber}
            >
              <div className={cn("min-h-0", needsPhoneNumber ? "overflow-visible" : "overflow-hidden")}>
                <Separator
                  className={cn(
                    "my-5 transition-opacity duration-200",
                    needsPhoneNumber ? "opacity-100 delay-100" : "opacity-0"
                  )}
                />

                <Input
                  label="Enter Phone Number"
                  type="tel"
                  disabled={launching}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onBlur={() => setPhoneNumberTouched(true)}
                  error={phoneNumberError}
                  className={cn(
                    "transition-all duration-200",
                    needsPhoneNumber
                      ? "opacity-100 translate-y-0 delay-200"
                      : "opacity-0 -translate-y-1"
                  )}
                />
              </div>
            </div>

            {/* Grid-rows trick animates the container's height smoothly (height: auto can't be transitioned directly) */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                needsStationId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
              aria-hidden={!needsStationId}
            >
              <div className={cn("min-h-0", needsStationId ? "overflow-visible" : "overflow-hidden")}>
                <Separator
                  className={cn(
                    "my-5 transition-opacity duration-200",
                    needsStationId ? "opacity-100 delay-100" : "opacity-0"
                  )}
                />

                <Input
                  label="Enter Station ID"
                  value={stationId}
                  onChange={(e) => setStationId(e.target.value)}
                  onBlur={() => setStationIdTouched(true)}
                  error={stationIdError}
                  disabled={launching}
                  className={cn(
                    "transition-all duration-200",
                    needsStationId
                      ? "opacity-100 translate-y-0 delay-200"
                      : "opacity-0 -translate-y-1"
                  )}
                />
              </div>
            </div>
          </div>

          {/* ── Launch action ── */}
          <Button
            size="lg"
            className="mt-6 w-full"
            disabled={!isFormValid || launching}
            onClick={handleLaunch}
          >
            {launching ? `Launching ${appName}…` : launchButtonLabel ?? `Launch ${appName}`}
          </Button>

          {/* ── Save preferences ── */}
          <label className="mt-4 flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={savePreferences}
              onCheckedChange={(checked) => setSavePreferences(!!checked)}
              disabled={launching}
            />
            <span className="lyra-body-md text-lyra-fg-default">Save Preferences</span>
          </label>

          {/* ── Compiling experience — opens beneath Save Preferences once launch starts ── */}
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              launching ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
            )}
            aria-hidden={!launching}
          >
            <div className="overflow-hidden min-h-0">
              <div
                className={cn(
                  "transition-opacity duration-200",
                  launching ? "opacity-100 delay-150" : "opacity-0"
                )}
              >
                <ConversationMessage
                  variant="ai"
                  process={launchSteps}
                  processLabel="Compiling Experience"
                  processExpanded
                  showActions={false}
                >
                  {null}
                </ConversationMessage>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
);
LoginCard.displayName = "LoginCard";

export { LoginCard };
